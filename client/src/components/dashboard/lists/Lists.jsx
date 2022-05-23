import React, { useContext } from "react";
import { Box, Divider, ScrollArea, Title } from "@mantine/core";
import dayjs from "dayjs";

import { useListsStyles } from "../../../hooks/styles/use-dashboard-styles";
import { UserContext } from "../../../UserContext";
import TaskList from "./TaskList";

const Lists = () => {
  const { store } = useContext(UserContext);
  const { classes } = useListsStyles();
  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");

  const todayList = store.getTasks(today);

  const tomorrowList = store.getTasks(tomorrow);

  const leftoversList = store.getLeftoverTasks();

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
          <TaskList tasks={todayList || []} />
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
          <TaskList tasks={tomorrowList || []} />
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
          <TaskList tasks={leftoversList || []} leftovers={true} />
        </ScrollArea>
      </Box>
    </Box>
  );
};

export default Lists;
