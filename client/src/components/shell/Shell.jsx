import React, { useState } from "react";
import { AppShell, Text, Box } from "@mantine/core";

import { useShellStyles } from "../../hooks/styles/use-shell-styles";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar.jsx";

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useShellStyles();

  return (
    <AppShell
      className={opened ? classes.smallShell : classes.shell}
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
