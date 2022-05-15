import React from "react";
import {
  Modal,
  Box,
  Button,
  Group,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { loginSchema } from "../../utils/loginSchema";

const SingInModal = (opened, setOpened) => {
  const form = useForm({
    schema: yupResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} centered>
      <Box sx={{ maxWidth: 320 }} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            label="Email"
            placeholder="example@mail.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            mt="sm"
            {...form.getInputProps("password")}
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
