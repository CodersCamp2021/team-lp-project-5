import { createStyles } from "@mantine/core";

/**
 * App Shell
 */
export const useShellStyles = createStyles((theme) => ({
  shell: {
    main: {
      [theme.fn.smallerThan("sm")]: {
        minHeight: "calc(100vh - 80px)",
      },
      [theme.fn.largerThan("sm")]: {
        minHeight: "100vh",
      },
    },
  },
}));
