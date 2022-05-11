import React from "react";
import { Box, createStyles, Title } from "@mantine/core";

import SearchBar from "./SearchBar";

const useStyles = createStyles((theme) => ({
  headerWrapper: {
    flex: 1.5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.fn.smallerThan(997)]: {
      minHeight: 150,
      flexDirection: "column",
      justifyContent: "space-evenly",
    },

    h1: {
      textShadow: theme.other.mainShadow,
      whiteSpace: "nowrap",
      color: theme.white,

      [theme.fn.smallerThan("xl")]: {
        fontSize: 32,
      },
    },
  },
}));

const Header = ({ firstName = "User" }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.headerWrapper}>
      <Title order={1}>What's up, {firstName}!</Title>
      <SearchBar />
    </Box>
  );
};

export default Header;
