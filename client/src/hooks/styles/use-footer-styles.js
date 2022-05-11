import { createStyles } from "@mantine/core";

export const useFooterStyles = createStyles((theme) => ({
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: theme.colors.primary[6],
    color: theme.white,
    textAlign: "right",
    paddingRight: "10px",
  },
}));
