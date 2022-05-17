import React from "react";
import { Modal, Button, PasswordInput, Group, SimpleGrid } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { registrationSchema } from "../../utils/registrationSchema";
import { useModalStyles } from "../../hooks/styles/use-modals-styles";
import Input from "./Input";

const forms = [
  {
    label: "First Name",
    placeholder: "",
    propsName: "firstName",
  },
  {
    label: "Last Name",
    placeholder: "",
    propsName: "lastName",
  },
  {
    label: "Username",
    placeholder: "",
    propsName: "username",
  },
  {
    label: "Email",
    placeholder: "example@mail.com",
    propsName: "email",
  },
];

const handleSubmit = (values) => {
  console.log(values);
};

const SignUpModal = ({ opened, setOpened }) => {
  const { classes } = useModalStyles();
  const form = useForm({
    schema: yupResolver(registrationSchema),
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      size="xl"
      title="Sign up"
      className={classes.modal}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: 650, cols: 1, spacing: "sm" }]}
        >
          {forms.map((item) => (
            <Input
              label={item.label}
              key={item.label}
              placeholder={item.placeholder}
              formProps={form.getInputProps(item.propsName)}
            />
          ))}
          <PasswordInput
            className={classes.inputField}
            required
            label="Password"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            className={classes.inputField}
            required
            label="Confirm Password"
            {...form.getInputProps("confirmPassword")}
          />
        </SimpleGrid>
        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Modal>
  );
};

export default SignUpModal;
