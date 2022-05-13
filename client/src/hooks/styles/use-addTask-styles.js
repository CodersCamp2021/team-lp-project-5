
import { createStyles } from "@mantine/core";

export const useAddTaskStyles = createStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.colors.lightBg,
    },
    titlesNames: {
      fontSize: 22,
      color: "#FFFFFF",
      textAlign: "left",
    },
  }));