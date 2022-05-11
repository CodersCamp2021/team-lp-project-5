import React from "react";
import { Anchor, Box, Text } from "@mantine/core";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Logo from "../Logo.jsx";
import { useHomepageStyles } from "../../hooks/styles/use-homepage-styles";

const Homepage = () => {
  const { classes } = useHomepageStyles();
  return (
    <>
      <Box className={classes.navbarContainer}>
        <Logo />
        <Box className={classes.singInContainer}>
          <Text size="xl" align={"right"} className={classes.text}>
            Already have an account?
          </Text>
          <Anchor size="xl" className={classes.anchor}>
            Sign in
          </Anchor>
        </Box>
      </Box>
      <HomeHero />
      <Footer />
    </>
  );
};

export default Homepage;
