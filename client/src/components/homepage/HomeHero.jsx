import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  BackgroundImage,
  Anchor,
} from "@mantine/core";
import { useHomeHeroStyles } from "../../hooks/styles/use-homepage-styles";
import SignUpModal from "./SignUpModal";
import spanImage from "../../assets/span.png";
import homeImage from "../../assets/homeImage.svg";

const HomeHero = () => {
  const { classes } = useHomeHeroStyles();
  const [opened, setOpened] = useState(false);
  return (
    <Box className={classes.container}>
      <Box className={classes.leftSide}>
        <Text className={classes.title}>
          Manage your time with{" "}
          <Box
            sx={{
              display: "inline-block",
            }}
          >
            <BackgroundImage
              src={spanImage}
              sx={{
                objectFit: "fill",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <Text component="span" className={classes.title}>
                ease
              </Text>
            </BackgroundImage>
          </Box>
        </Text>
        <Box className={classes.buttonContainer}>
          <Button
            size="sm"
            className={classes.button}
            onClick={() => setOpened(true)}
          >
            Get started
          </Button>
          <Anchor className={classes.guestAnchor}>Use as a guest</Anchor>
        </Box>
      </Box>
      <Box className={classes.imageContainer}>
        <Image className={classes.image} src={homeImage} withPlaceholder />
      </Box>
      <SignUpModal opened={opened} setOpened={setOpened} />
    </Box>
  );
};

export default HomeHero;
