import React from "react";
import { Box } from "@mantine/core";
import { BsBoxArrowLeft } from "react-icons/bs";

import { useNavbarStyles } from "../../../hooks/styles/use-navbar-styles";

const NavbarLogout = () => {
  const { classes } = useNavbarStyles();

  return (
    <Box className={classes.logoutWrapper}>
      <BsBoxArrowLeft />
      Log out
    </Box>
  );
};

export default NavbarLogout;
