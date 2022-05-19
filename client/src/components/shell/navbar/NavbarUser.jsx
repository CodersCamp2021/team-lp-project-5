import React from "react";
import { Avatar, Box, Text } from "@mantine/core";

import { useNavbarStyles } from "../../../hooks/styles/use-navbar-styles";
import { useMediaQuery } from "@mantine/hooks";

const NavbarUser = () => {
  const { classes } = useNavbarStyles();
  const isXsScreen = useMediaQuery("(max-width: 576px)");

  return (
    <Box sx={{ paddingTop: 10 }}>
      <Box>
        <Avatar
          size="lg"
          width={isXsScreen ? 100 : 130}
          height={isXsScreen ? 100 : 130}
          className={classes.avatar}
          alt="User initials"
        >
          JC
        </Avatar>
      </Box>
      <Text className={classes.userNames}>Jakub Czerwiński </Text>
    </Box>
  );
};

export default NavbarUser;
