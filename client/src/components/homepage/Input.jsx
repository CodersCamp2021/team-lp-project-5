import { TextInput } from "@mantine/core";
import React from "react";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  inputField: {
    label: {
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "16px",
      paddingTop: "4px",
    },
  },
}));

const Input = ({ label, placeholder, formProps }) => {
  const { classes } = useStyles();

  return (
    <TextInput
      required
      label={label}
      placeholder={placeholder}
      className={classes.inputField}
      {...formProps}
    />
  );
};

export default Input;
