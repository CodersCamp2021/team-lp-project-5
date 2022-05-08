import React from "react";
import { Box, Image, Text, Button } from "@mantine/core";

const HomeHero = () => {
  return (
    <Box
      sx={(theme) => ({
        [theme.fn.smallerThan("md")]: { flexDirection: "column" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <Box
        sx={(theme) => ({
          [theme.fn.smallerThan("sm")]: {
            height: "300px",
            maxWidth: "400px",
            marginBottom: "40px",
          },
          [theme.fn.largerThan("md")]: {
            height: "436px",
            maxWidth: "500px",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "320px",
          maxWidth: "420px",
          marginBottom: "30px",
        })}
      >
        <Text
          sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              fontSize: theme.fontSizes.lg,
              lineHeight: "50 px",
              marginTop: "50px",
              marginBottom: "20px",
              letterSpacing: "2px",
              textAlign: "center",
            },
            [theme.fn.largerThan("md")]: {
              fontSize: theme.fontSizes.xl,
              lineHeight: "100px",
              letterSpacing: "4px",
            },
            fontSize: "70px",
            lineHeight: "80px",
            letterSpacing: "3px",
          })}
        >
          Manage your time with ease.
        </Text>
        <Button
          size="sm"
          sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              alignSelf: "center",
            },
            [theme.fn.smallerThan("md")]: {
              marginTop: "20px",
            },
            maxWidth: "170px",
            fontSize: "26px",
            fontWeight: "normal",
            minHeight: "40px",
            backgroundColor: theme.colors.primary[6],
            color: theme.white,
          })}
        >
          Get started
        </Button>
      </Box>
      <Image
        sx={(theme) => ({
          [theme.fn.smallerThan("sm")]: { width: "268px", height: "200px" },
          [theme.fn.largerThan("sm")]: { width: "536px", height: "4 00px" },
          marginBottom: "30px",
        })}
        src="https://lukaszadam.com/monitor.svg"
        withPlaceholder
      />
    </Box>
  );
};

export default HomeHero;
