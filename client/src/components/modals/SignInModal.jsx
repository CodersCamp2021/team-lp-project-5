import React from "react";
import { Modal, Button, Group, PasswordInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { loginSchema } from "../../utils/loginSchema";
import Input from "./Input";
import { useModalStyles } from "../../hooks/styles/use-modals-styles";

const handleSubmit = (values) => {
  console.log(values);
};

const SignInModal = ({ opened, setOpened }) => {
  const { classes } = useModalStyles();
  const form = useForm({
    schema: yupResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      title="Sign in"
      className={classes.modal}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Input
          required
          label="Email"
          placeholder="example@mail.com"
          formProps={form.getInputProps("email")}
        />
        <PasswordInput
          required
          label="Password"
          placeholder="Your password"
          className={classes.inputField}
          {...form.getInputProps("password")}
        />

        <Group position="right" mt="xl">
          <Button type="submit" className={classes.button}>
            Submit
          </Button>
        </Group>
      </form>
    </Modal>
  );
};

export default SignInModal;
