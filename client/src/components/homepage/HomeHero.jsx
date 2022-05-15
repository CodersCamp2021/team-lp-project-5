import React, { useState } from "react";
import { Box, Image, Text, Button } from "@mantine/core";
import { useHomeHeroStyles } from "../../hooks/styles/use-homepage-styles";
import SignUpModal from "./SingUpModal";

const HomeHero = () => {
  const { classes } = useHomeHeroStyles();
  const [opened, setOpened] = useState(false);
  return (
    <Box className={classes.container}>
      <Box className={classes.leftSide}>
        <Text className={classes.title}>Manage your time with ease.</Text>
        <Button
          size="sm"
          className={classes.button}
          onClick={() => setOpened(true)}
        >
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
      <SignUpModal opened={opened} setOpened={setOpened} />
    </Box>
  );
};

export default HomeHero;
