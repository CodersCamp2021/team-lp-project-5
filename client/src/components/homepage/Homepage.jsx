import { Anchor, Box, Text } from "@mantine/core";
import React from "react";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Logo from "./Logo";

const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 30px 0",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", paddingRight: "30px" }}>
          <Text
            size="xs"
            align={"right"}
            sx={(theme) => ({
              [theme.fn.smallerThan("xs")]: {
                display: "none",
              },
              paddingRight: "5px",
            })}
          >
            Already have an account?
          </Text>
          <Anchor
            size="xs"
            sx={(theme) => ({ color: theme.colors.primary[6] })}
          >
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
