import { createStyles } from "@mantine/core";

export const useModalStyles = createStyles(() => ({
  inputField: {
    label: {
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "16px",
      paddingTop: "4px",
    },
  },
  modal: {
    ".mantine-Modal-title": {
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "20px",
      letterSpacing: "2px",
    },
  },
}));
