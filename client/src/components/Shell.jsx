import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  MediaQuery,
  Text,
  Header,
  Burger,
  Box,
} from "@mantine/core";

const Shell = () => {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      sx={(theme) => ({
        main: {
          [theme.fn.smallerThan("sm")]: {
            minHeight: "calc(100vh - 80px)",
          },
          [theme.fn.largerThan("sm")]: {
            minHeight: "100vh",
          },
        },
      })}
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ base: 320 }}
        >
          <Navbar.Section>TIMEY</Navbar.Section>
          <Navbar.Section grow>Navbar</Navbar.Section>
          <Navbar.Section>Log out</Navbar.Section>
        </Navbar>
      }
      header={
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
      }
    >
      <Box>
        <Text>Content</Text>
      </Box>
    </AppShell>
  );
};

export default Shell;
