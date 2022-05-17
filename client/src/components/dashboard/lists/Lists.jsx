import React, { useContext } from "react";
import { Box, Divider, ScrollArea, Title } from "@mantine/core";

import { useListsStyles } from "../../../hooks/styles/use-dashboard-styles";
import { checkIfTheSameDay, getTomorrow } from "../../../utils/dateHelpers";
import { UserContext } from "../../../UserContext";
import TaskList from "./TaskList";

// const DUMMY_TASKS = [
//   {
//     task_id: "1",
//     title: "title 1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fuga?",
//     priority: 1,
//     status: false,
//     date: new Date("May 11, 2022"),
//   },
//   {
//     task_id: "2",
//     title: "title 2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, maxime.",
//     priority: 2,
//     status: false,
//     date: new Date("May 10, 2022"),
//   },
//   {
//     task_id: "3",
//     title: "title 3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consequatur!",
//     priority: 1,
//     status: true,
//     date: new Date("May 12, 2022"),
//   },
//   {
//     task_id: "4",
//     title: "title 4",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloremque!",
//     priority: 3,
//     status: true,
//     date: new Date("May 13, 2022"),
//   },
//   {
//     task_id: "5",
//     title: "title 5",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, tenetur.",
//     priority: 1,
//     status: false,
//     date: new Date("May 14, 2022"),
//   },
//   {
//     task_id: "6",
//     title: "title 6",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laudantium?",
//     priority: 2,
//     status: true,
//     date: new Date("May 15, 2022"),
//   },
//   {
//     task_id: "7",
//     title: "title 7",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eligendi.",
//     priority: 1,
//     status: false,
//     date: new Date("May 15, 2022"),
//   },
//   {
//     task_id: "8",
//     title: "title 8",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!",
//     priority: 3,
//     status: true,
//     date: new Date("May 17, 2022"),
//   },
//   {
//     task_id: "9",
//     title: "title 9",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!",
//     priority: 3,
//     status: false,
//     date: new Date("May 15, 2022"),
//   },
//   {
//     task_id: "10",
//     title: "title 10",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!",
//     priority: 3,
//     status: false,
//     date: new Date("May 17, 2022"),
//   },
// ];

const Lists = () => {
  const { store } = useContext(UserContext);
  const { classes } = useListsStyles();
  const today = new Date();
  const tomorrow = getTomorrow();

  const tasks = store.tasks;

  const todayList = React.useMemo(
    () =>
      tasks
        .filter((task) => checkIfTheSameDay(task.date, today))
        .sort((a, b) => a.priority - b.priority),
    [tasks],
  );

  const tomorrowList = React.useMemo(
    () =>
      tasks
        .filter((task) => checkIfTheSameDay(task.date, tomorrow))
        .sort((a, b) => a.priority - b.priority),
    [tasks],
  );

  const leftoversList = React.useMemo(
    () =>
      tasks
        .filter((task) => task.status === false && task.date < today)
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
