import React from "react";
import { Box, createStyles, Image, Navbar, Text, Title } from "@mantine/core";
import { BsBoxArrowLeft } from "react-icons/bs";

import NavbarItems from "./NavbarItems";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.lightBg,
  },

  navbarTop: {
    minHeight: 410,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    h1: {
      color: theme.colors.primary[6],
      letterSpacing: "0.2em",
      textShadow: theme.other.mainShadow,
      marginRight: "-0.2em",
      paddingBottom: 10,
    },
  },

  navbarItems: {
    width: "100%",
  },

  userImage: {
    margin: "0 auto",
    width: 160,
    height: 160,
    border: `5px solid ${theme.colors.primary[6]}`,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userNames: {
    fontSize: 36,
    color: "#FFFFFF",
    textAlign: "center",
    wordSpacing: "100vw",
  },

  navbarBottom: {
    width: "100%",
    minHeight: 70,
    fontSize: 32,
    textDecoration: "none",
    color: theme.colors.navbarText,

    "&:hover": {
      color: theme.colors.lightBg,
      backgroundColor: theme.colors.highlightBg,
    },

    svg: {
      verticalAlign: "middle",
      marginRight: "21px",
    },
  },
}));

const AppNavbar = ({ opened }) => {
  const { classes } = useStyles();

  return (
    <Navbar
      py="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ base: 320 }}
      className={classes.navbar}
    >
      <Navbar.Section className={classes.navbarTop}>
        <Title order={1}>TIMEY</Title>
        <Box className={classes.imageWrapper}>
          <Image
            imageProps={{
              draggable: "false",
            }}
            width={130}
            height={130}
            radius="50%"
            className={classes.userImage}
            src="https://img.a.transfermarkt.technology/portrait/header/143282-1608735446.jpg?lm=1"
            alt="User Photo"
          />
        </Box>
        <Text weight="bold" className={classes.userNames}>
          Jakub Czerwiński{" "}
        </Text>
      </Navbar.Section>
      <Navbar.Section grow className={classes.navbarItems}>
        <NavbarItems />
      </Navbar.Section>
      <Navbar.Section className={classes.navbarBottom} component={Link} to="/">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsBoxArrowLeft />
          Log out
        </Box>
      </Navbar.Section>
    </Navbar>
  );
};

export default AppNavbar;
