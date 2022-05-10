import React from "react";
import { Box, createStyles, TextInput, useMantineTheme } from "@mantine/core";
import { BsSearch } from "react-icons/bs";

const useStyles = createStyles((theme) => ({
  searchBarWrapper: {
    color: theme.colors.primary[6],
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
  },
}));

const SearchBar = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Box className={classes.searchBarWrapper}>
      <TextInput
        variant="unstyled"
        placeholder="Look for a task"
        mr={30}
        styles={{
          root: {
            height: 72,
            borderBottom: `4px solid ${theme.colors.primary[6]}`,
          },
          input: {
            color: theme.colors.primary[6],
            width: "25vw",
            fontSize: 48,
            height: 70,
            lineHeight: "60px",

            "&::placeholder": {
              color: theme.colors.primary[11],
            },
          },
        }}
      />
      <BsSearch size={44} />
    </Box>
  );
};

export default SearchBar;
