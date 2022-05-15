import React from "react";

import { useSearchBarStyles } from "../../hooks/styles/use-dashboard-styles";
import { Box, TextInput, useMantineTheme } from "@mantine/core";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const { classes } = useSearchBarStyles();
  const theme = useMantineTheme();

  return (
    <Box className={classes.searchBarWrapper}>
      <TextInput
        variant="unstyled"
        placeholder="Look for a task"
        spellCheck={false}
        styles={{
          root: {
            height: 43,
            marginRight: 20,
            borderBottom: `3px solid ${theme.colors.primary[6]}`,

            [theme.fn.smallerThan("xl")]: {
              height: 50,
              marginRight: 15,
              borderBottom: `2px solid ${theme.colors.primary[6]}`,
            },

            [theme.fn.smallerThan("xs")]: {
              height: 46,
              marginRight: 10,
            },
          },
          input: {
            color: theme.colors.primary[6],
            width: "18vw",
            minWidth: 220,
            fontSize: 32,
            lineHeight: "60px",

            [theme.fn.smallerThan("xl")]: {
              fontSize: 32,
              height: 50,
              lineHeight: "40px",
            },

            [theme.fn.smallerThan("sm")]: {
              width: "25vw",
            },

            [theme.fn.smallerThan("xs")]: {
              minWidth: 200,
              fontSize: 26,
            },

            "&::placeholder": {
              color: theme.colors.primary[11],
            },
          },
        }}
      />
      <BsSearch size={32} />
    </Box>
  );
};

export default SearchBar;
