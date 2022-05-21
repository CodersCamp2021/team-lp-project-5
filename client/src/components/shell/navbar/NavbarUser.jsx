import React, { useState } from "react";
import { Anchor, Avatar, Box, Text } from "@mantine/core";

import { useNavbarStyles } from "../../../hooks/styles/use-navbar-styles";
import { useMediaQuery } from "@mantine/hooks";
import SignUpModal from "../../homepage/SignUpModal";

const NavbarUser = () => {
  const { classes } = useNavbarStyles();
  const [opened, setOpened] = useState(false);
  const isUser = window.localStorage.getItem("userType") === "user";
  const isXsScreen = useMediaQuery("(max-width: 576px)");

  return (
    <Box sx={{ paddingTop: 10 }}>
      {isUser ? (
        <>
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
        </>
      ) : (
        <>
          <Box>
            <Text className={classes.guestText}>
              You are using app as a guest. If you want to access full
              functionality, please{" "}
              <Anchor
                onClick={() => setOpened(true)}
                className={classes.anchor}
              >
                register
              </Anchor>
              .
            </Text>
          </Box>
          <SignUpModal opened={opened} setOpened={setOpened} />
        </>
      )}
    </Box>
  );
};

export default NavbarUser;
