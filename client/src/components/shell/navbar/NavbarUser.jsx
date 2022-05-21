import React, { useState } from "react";
import { Anchor, Avatar, Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { useNavbarStyles } from "../../../hooks/styles/use-navbar-styles";
import SignUpModal from "../../modals/SignUpModal";
import ImportDataModal from "../../modals/ImportDataModal";

const NavbarUser = () => {
  const { classes } = useNavbarStyles();
  const [opened, setOpened] = useState(false);
  const [importOpened, setImportOpened] = useState(false);
  const isUser = window.localStorage.getItem("userType") === "user";
  const isXsScreen = useMediaQuery("(max-width: 576px)");

  const openImportModal = () => setImportOpened(true);

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
          <ImportDataModal opened={importOpened} setOpened={setImportOpened} />
          <SignUpModal
            opened={opened}
            setOpened={setOpened}
            openImport={openImportModal}
          />
        </>
      )}
    </Box>
  );
};

export default NavbarUser;
