import React from "react";
import { Box, createStyles, Text } from "@mantine/core";

import SearchBar from "./SearchBar";

const useStyles = createStyles((theme) => ({
  headerWrapper: {
    flex: 1.5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 70px",
  },

  greetingText: {
    fontSize: 48,
    fontWeight: 500,
    textShadow: theme.other.mainShadow,
    color: theme.white,
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.headerWrapper}>
      <Text className={classes.greetingText}>What's up, Jakub!</Text>
      <SearchBar />
    </Box>
  );
};

export default Header;
