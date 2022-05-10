import React, { useState } from "react";
import { Box, Image, Text, Button, Modal } from "@mantine/core";

const HomeHero = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
      <Box
        sx={(theme) => ({
          [theme.fn.smallerThan("md")]: {
            flexDirection: "column",
            marginTop: "60px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
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
              minWidth: "460px",
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
              "&:hover": {
                backgroundColor: theme.colors.primary[8],
              },
              maxWidth: "170px",
              fontSize: "26px",
              fontWeight: "normal",
              minHeight: "40px",
              backgroundColor: theme.colors.primary[6],
              color: theme.white,
            })}
            onClick={() => setOpened(true)}
          >
            Get started
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            sx={(theme) => ({
              [theme.fn.smallerThan("sm")]: { width: "301px", height: "225px" },
              [theme.fn.largerThan("sm")]: {
                width: "536px",
                height: "400px",
              },
              marginBottom: "30px",
            })}
            src="https://lukaszadam.com/monitor.svg"
            withPlaceholder
          />
        </Box>
      </Box>
    </>
  );
};

export default HomeHero;
