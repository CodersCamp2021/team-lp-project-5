import React from "react";
import { Box, Image, Text, Button } from "@mantine/core";
import { useHomeHeroStyles } from "../../hooks/styles/use-homepage-styles";

const HomeHero = () => {
  const { classes } = useHomeHeroStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.leftSide}>
        <Text className={classes.title}>Manage your time with ease.</Text>
        <Button size="sm" className={classes.button}>
          Get started
        </Button>
      </Box>
      <Box className={classes.imageContainer}>
        <Image
          className={classes.image}
          src="https://lukaszadam.com/monitor.svg"
          withPlaceholder
        />
      </Box>
    </Box>
  );
};

export default HomeHero;
