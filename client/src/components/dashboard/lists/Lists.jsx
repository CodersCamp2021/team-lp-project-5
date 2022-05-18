import React, { useContext } from "react";
import { Box, Divider, ScrollArea, Title } from "@mantine/core";
import dayjs from "dayjs";

import { useListsStyles } from "../../../hooks/styles/use-dashboard-styles";
import { UserContext } from "../../../UserContext";
import TaskList from "./TaskList";

const Lists = () => {
  const { store } = useContext(UserContext);
  const { classes } = useListsStyles();

  const tasks = store.tasks;

  const todayList = React.useMemo(
    () =>
      tasks
        .filter((task) => dayjs(new Date(task.date)).isSame(dayjs(), "day"))
        .sort((a, b) => a.priority - b.priority),
    [tasks],
  );

  const tomorrowList = React.useMemo(
    () =>
      tasks
        .filter((task) =>
          dayjs(new Date(task.date)).isSame(dayjs().add(1, "day"), "day"),
        )
        .sort((a, b) => a.priority - b.priority),
    [tasks],
  );

  const leftoversList = React.useMemo(
    () =>
      tasks
        .filter(
          (task) =>
            task.status === false &&
            dayjs(new Date(task.date)).isBefore(dayjs(), "day"),
        )
        .sort((a, b) => a.priority - b.priority),
    [tasks],
  );

  return (
    <Box className={classes.listsWrapper}>
      <Box className={classes.singleListWrapper}>
        <Title order={5}>TODAY</Title>
        <ScrollArea
          scrollbarSize="7px"
          type="auto"
          offsetScrollbars
          className={classes.listScrollArea}
          styles={{
            scrollbar: {
              borderRadius: 12,
            },
            corner: {
              display: "none",
            },
          }}
        >
          <TaskList tasks={todayList} />
        </ScrollArea>
      </Box>
      <Box className={classes.singleListWrapper}>
        <Title order={5}>TOMORROW</Title>
        <ScrollArea
          scrollbarSize="7px"
          type="auto"
          offsetScrollbars
          className={classes.listScrollArea}
          styles={{
            scrollbar: {
              borderRadius: 12,
            },
            corner: {
              display: "none",
            },
          }}
        >
          <TaskList tasks={tomorrowList} />
        </ScrollArea>
      </Box>
      <Divider orientation="vertical" size="sm" />
      <Box className={classes.singleListWrapper}>
        <Title order={5}>LEFTOVERS</Title>
        <ScrollArea
          scrollbarSize="7px"
          type="auto"
          offsetScrollbars
          className={classes.listScrollArea}
          styles={{
            scrollbar: {
              borderRadius: 12,
            },
            corner: {
              display: "none",
            },
          }}
        >
          <TaskList tasks={leftoversList} leftovers={true} />
        </ScrollArea>
      </Box>
    </Box>
  );
};

export default Lists;
