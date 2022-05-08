import React from "react";
import { Box, Image, Text } from "@mantine/core";

import { useNavbarStyles } from "../../../hooks/styles/use-navbar-styles";

const NavbarUser = () => {
  const { classes } = useNavbarStyles();

  return (
    <React.Fragment>
      <Box className={classes.imageWrapper}>
        <Image
          imageProps={{
            draggable: "false",
          }}
          width={130}
          height={130}
          radius="50%"
          className={classes.userImage}
          src="https://img.a.transfermarkt.technology/portrait/header/143282-1608735446.jpg?lm=1"
          alt="User Photo"
        />
      </Box>
      <Text weight="bold" className={classes.userNames}>
        Jakub Czerwiński{" "}
      </Text>
    </React.Fragment>
  );
};

export default NavbarUser;
