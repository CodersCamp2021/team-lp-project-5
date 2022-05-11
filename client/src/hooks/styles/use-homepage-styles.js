import { createStyles } from "@mantine/core";

export const useHomepageStyles = createStyles((theme) => ({
  navbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 30px 0",
  },
  singInContainer: {
    display: "flex",
    paddingRight: "30px",
  },
  text: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
    paddingRight: "5px",
  },
  anchor: {
    color: theme.colors.primary[6],
  },
}));
