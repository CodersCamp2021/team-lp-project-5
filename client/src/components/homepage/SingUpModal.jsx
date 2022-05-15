import React from "react";
import { Modal, Button, PasswordInput, Group, SimpleGrid } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { registrationSchema } from "../../utils/registrationSchema";
import { useStyles } from "./Input";
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

const SignUpModal = (opened, setOpened) => {
  const { classes } = useStyles();
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
    <Modal opened={opened} onClose={() => setOpened(false)} centered size="xl">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
