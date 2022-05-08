import React from "react";
import { Box, Image, Text } from "@mantine/core";

import { useNavbarStyles } from "../../../hooks/styles/use-navbar-styles";
import { useMediaQuery } from "@mantine/hooks";

const NavbarUser = () => {
  const { classes } = useNavbarStyles();
  const isXsScreen = useMediaQuery("(max-width: 576px)");

  return (
    <React.Fragment>
      <Box>
        <Image
          imageProps={{
            draggable: "false",
          }}
          width={isXsScreen ? 100 : 130}
          height={isXsScreen ? 100 : 130}
          radius="50%"
          className={classes.userImage}
          src=""
          alt="User Photo"
          withPlaceholder
        />
      </Box>
      <Text className={classes.userNames}>Jakub Czerwiński </Text>
    </React.Fragment>
  );
};

export default NavbarUser;
