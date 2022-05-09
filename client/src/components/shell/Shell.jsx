import React, { useState } from "react";
import { AppShell, Text, Box, createStyles } from "@mantine/core";
import { Route, Routes } from 'react-router-dom';

import Header from "./Header";
import Navbar from "./Navbar.jsx";
import AddTask from "../addTask/AddTask";

const useStyles = createStyles((theme) => ({
  shell: {
    main: {
      [theme.fn.smallerThan("sm")]: {
        minHeight: "calc(100vh - 80px)",
      },
      [theme.fn.largerThan("sm")]: {
        minHeight: "100vh",
      },
    },
  },
}));

const Shell = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  return (
    <AppShell
      className={classes.shell}
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      <Box>
        <Text>Content</Text>
      </Box>
    <Routes>
      <Route path="/addTask" element={<AddTask />} />
    </Routes>
    </AppShell>
  );
};



export default Shell;
