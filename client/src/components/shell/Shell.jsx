import React, { useState } from "react";
import { AppShell, Text, Box } from "@mantine/core";

import Header from "./Header";
import Navbar from "./navbar/Navbar.jsx";
import { useShellStyles } from "../../hooks/styles/use-shell-styles";

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useShellStyles();
  return (
    <AppShell
      className={classes.shell}
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      <Box>
        <Text>Content</Text>
      </Box>
    </AppShell>
  );
};

export default Shell;
