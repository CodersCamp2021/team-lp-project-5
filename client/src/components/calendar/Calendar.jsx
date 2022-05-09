import React, { useEffect, useState } from "react";
import { Calendar as MantineCalendar } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";

const Calendar = () => {
  const theme = useMantineTheme();
  const matches = useMediaQuery("(min-width: 860px)");
  const today = new Date();
  const [value, setValue] = useState(today);

  useEffect(() => {
    //TODO: handle date change -> display tasks for that day
    console.log(value);
  }, [value]);

  return (
    <MantineCalendar
      value={value}
      onChange={setValue}
      size={matches ? "xl" : "md"}
      dayStyle={(date) =>
        date.getDate() === today.getDate() &&
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth()
          ? { backgroundColor: theme.colors.primary[6], color: "#ffffff" }
          : null
      }
      styles={(theme) => ({
        selected: {
          border: `2px solid ${theme.colors.primary[6]}`,
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
    />
  );
};

export default Calendar;
