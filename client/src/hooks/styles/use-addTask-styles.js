
import { createStyles } from "@mantine/core";

export const useAddTaskStyles = createStyles((theme) => ({
    modalContainer: {
      
      color: theme.colors.lightBg,
    },
    titlesNames: {
      fontSize: 22,
      color: "#FFFFFF",
      textAlign: "left",
      marginTop: "5px",
      [theme.fn.smallerThan("md")]: {
        fontSize: 14,
      },
    },
    dateItemsWrapper: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        // padding: "1px",
      },
    button: {
        [theme.fn.smallerThan("md")]: {
            fontSize: 12,
            width: 90,
          },
        width: 120,
    },
    textArea: {
        backgroundColor: theme.colors.darkBg,
    },
    datePicker: {
        [theme.fn.smallerThan("md")]: {
            width: 120,
          },
    },
    
  }));