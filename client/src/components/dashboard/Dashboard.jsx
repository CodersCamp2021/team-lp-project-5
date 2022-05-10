import { Box } from "@mantine/core";
import React from "react";
import Collections from "./Collections";
import Header from "./Header";
import Lists from "./Lists";

const Dashboard = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        [theme.fn.smallerThan("sm")]: {
          minHeight: "calc(100vh - 80px)",
        },
        [theme.fn.largerThan("sm")]: {
          minHeight: "100vh",
        },
      })}
    >
      <Header />
      <Collections />
      <Lists />
    </Box>
  );
};

export default Dashboard;
