import React from "react";
import { Box, createStyles, Title } from "@mantine/core";

import SearchBar from "./SearchBar";

const useStyles = createStyles((theme) => ({
  headerWrapper: {
    flex: 1.5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greetingText: {
    textShadow: theme.other.mainShadow,
    color: theme.white,
  },
}));

const Header = ({ firstName = "User" }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.headerWrapper}>
      <Title className={classes.greetingText} order={1}>
        What's up, {firstName}!
      </Title>
      <SearchBar />
    </Box>
  );
};

export default Header;
