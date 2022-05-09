import { Box, Container, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useCalendarPageStyles } from "../../hooks/styles/use-calendar-page-styles";
import Calendar from "./Calendar";
import Tasks from "./Tasks";

const CalendarPage = () => {
  const matches = useMediaQuery("(min-width: 769px)");
  const { classes } = useCalendarPageStyles();

  return (
    <Container className={classes.container}>
      {matches && <Text className={classes.title}>Calendar</Text>}
      <Box className={classes.content}>
        <Calendar />
        <Tasks />
      </Box>
    </Container>
  );
};

export default CalendarPage;
