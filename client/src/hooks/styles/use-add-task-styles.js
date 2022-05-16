import { createStyles } from "@mantine/core";

export const useAddTaskStyles = createStyles((theme) => ({
  modalContainer: {
    textArea: {
      backgroundColor: theme.colors.darkBg,
    },
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
  datePickerr: {
    [theme.fn.smallerThan("md")]: {
      width: 120,
    },
    
  },
  prioritiesButton: 
   {
    [theme.fn.smallerThan("md")]: {
      orientation: "vertical",
      label: {
      fontSize: 12},
      
    },
    label: {
    backgroundColor: theme.colors.primary[7],
    color: "#EEEEEE",
    "&:hover": {
      backgroundColor: "#E06262",
    }}
  },

  collectionButton: {
    root: {
    backgroundColor: theme.colors.primary[7],
    color: "#393E46",
    }
  },

  
}));
