import React, { useState } from "react";
import { AppShell, Box } from "@mantine/core";

import { useShellStyles } from "../../hooks/styles/use-shell-styles";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Dashboard from "../dashboard/Dashboard";

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useShellStyles();

  return (
    <AppShell
      className={opened ? classes.smallShell : classes.shell}
      styles={{ main: { padding: 0}}}
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      <Box>
        <Dashboard />
      </Box>
    </AppShell>
  );
};

export default Shell;
