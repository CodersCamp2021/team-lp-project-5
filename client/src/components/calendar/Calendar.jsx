import React from "react";
import { Calendar as MantineCalendar } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
import { checkIfTheSameDay } from "../../utils/checkIfTheSameDay";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery("(min-width: 860px)");
  const today = new Date();

  return (
    <MantineCalendar
      value={selectedDate}
      onChange={setSelectedDate}
      size={matches ? "xl" : "md"}
      styles={(theme) => ({
        selected: {
          boxShadow: `inset 0px 0px 0px 2px ${theme.colors.primary[6]}`,
          background: `transparent !important`,
        },
        calendarHeaderLevel: {
          textTransform: "uppercase",
          color: theme.colors.primary[6],
          fontSize: 24,
        },
        monthPickerControlActive: {
          color: theme.colors.primary[6],
        },
        yearPickerControlActive: {
          color: theme.colors.primary[6],
        },
        day: {
          borderRadius: "50%",
          fontSize: 16,
        },
        weekday: { fontSize: 16, textTransform: "uppercase" },
      })}
      dayStyle={(date) => {
        const isTheSameDay = checkIfTheSameDay(date, today);
        if (isTheSameDay) {
          return {
            backgroundColor: theme.colors.primary[6],
            color: "#ffffff",
          };
        } else {
          return null;
        }
      }}
    />
  );
};

export default Calendar;
