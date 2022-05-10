import React, { useState } from "react";
import { AppShell, Box } from "@mantine/core";
import Header from "./header/Header";
import { Route, Routes } from "react-router-dom";

import { useShellStyles } from "../../hooks/styles/use-shell-styles";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "./navbar/Navbar";

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useShellStyles();

  return (
    <AppShell
      className={opened ? classes.smallShell : classes.shell}
      styles={{ main: { padding: 0 } }}
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      <Box>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Box>
    </AppShell>
  );
};

export default Shell;
