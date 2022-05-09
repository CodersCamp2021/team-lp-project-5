import React, { useState } from "react";
import { AppShell } from "@mantine/core";

import { useShellStyles } from "../../hooks/styles/use-shell-styles";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import CalendarPage from "../calendar/CalendarPage";

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useShellStyles();

  return (
    <AppShell
      className={opened ? classes.smallShell : classes.shell}
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/statistics" element={<div>Statistics</div>} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </AppShell>
  );
};

export default Shell;
