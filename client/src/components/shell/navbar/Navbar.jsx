import React, { useState } from "react";
import { Navbar } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

import { useNavbarStyles } from "../../../hooks/styles/use-navbar-styles";
import NavbarItems from "./NavbarItems";
import Logo from "../../Logo";
import NavbarUser from "./NavbarUser";
import NavbarLogout from "./NavbarLogout";
import AddTaskModal from "../../modals/addTaskModal/AddTaskModal";

const AppNavbar = ({ opened, setOpened }) => {
  const [addTaskOpened, setAddTaskOpened] = useState(false);
  const { classes } = useNavbarStyles();
  const smallScreen = useMediaQuery("(max-width: 768px)");

  const openAddTask = () => setAddTaskOpened(true);

  return (
    <Navbar
      py="md"
      mt={smallScreen && 80}
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ base: "unset", sm: 320 }}
      styles={{
        root: {
          "@media (max-width: 768px)": {
            minHeight: "calc(100vh - 80px)",
          },
          "@media (min-width: 768px)": {
            minHeight: "100vh",
          },
        },
      }}
      className={classes.navbar}
    >
      <Navbar.Section className={classes.navbarTop}>
        <Logo />
        <NavbarUser />
      </Navbar.Section>
      <Navbar.Section grow className={classes.navbarItems}>
        <NavbarItems setOpened={setOpened} openAddTask={openAddTask} />
      </Navbar.Section>
      <Navbar.Section className={classes.navbarBottom} component={Link} to="/">
        <NavbarLogout />
      </Navbar.Section>
      <AddTaskModal opened={addTaskOpened} setOpened={setAddTaskOpened} />
    </Navbar>
  );
};

export default AppNavbar;
