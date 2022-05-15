import React from "react";
import {
  Modal,
  Box,
  Button,
  Group,
  TextInput,
  PasswordInput,
} from "@mantine/core  ";
import { useForm, yupResolver } from "@mantine/form";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().min(2, "Name should have at least 2 letters"),
  email: Yup.string().email("Invalid email"),
  age: Yup.number().min(18, "You must be at least 18 to create an account"),
});

const SingInModal = (opened, setOpened) => {
  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      name: "",
      email: "",
      age: 18,
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Sign In"
      centered
    >
      <Box sx={{ maxWidth: 340 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            label="Email"
            placeholder="example@mail.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            required
            label="Name"
            placeholder="John Doe"
            mt="sm"
            {...form.getInputProps("name")}
          />
          <PasswordInput
            required
            label="Age"
            placeholder="Your age"
            mt="sm"
            {...form.getInputProps("age")}
          />

          <Group position="right" mt="xl">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};

export default SingInModal;
