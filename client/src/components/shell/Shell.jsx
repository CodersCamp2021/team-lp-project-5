import React, { useState } from "react";
import { AppShell, Box, useMantineTheme } from "@mantine/core";
import { Route, Routes } from "react-router-dom";

import { useShellStyles } from "../../hooks/styles/use-shell-styles";
import Dashboard from "../dashboard/Dashboard";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useShellStyles();
  const theme = useMantineTheme();

  return (
    <AppShell
      className={opened ? classes.smallShell : classes.shell}
      styles={{
        main: {
          padding: "0 70px",

          [theme.fn.smallerThan("lg")]: {
            padding: "0 50px",
          },

          [theme.fn.smallerThan("sm")]: {
            padding: "0 40px",
          },
        },
      }}
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
