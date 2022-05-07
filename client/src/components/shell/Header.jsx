import React from "react";
import { MediaQuery, Box, Text, Burger, Header } from "@mantine/core";

const AppHeader = ({ opened, setOpened }) => {
  return (
    <>
      <MediaQuery smallerThan="sm" styles={{ display: "block" }}>
        <Header
          hp="md"
          sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              height: 80,
            },
            [theme.fn.largerThan("sm")]: {
              height: 0,
              display: "none",
            },
          })}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              mr="xl"
            />

            <Text>Application header</Text>
          </Box>
        </Header>
      </MediaQuery>
    </>
  );
};

export default AppHeader;
