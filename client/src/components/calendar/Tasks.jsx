import { Box, Stack, Text } from "@mantine/core";
import React from "react";
import { useCalendarPageStyles } from "../../hooks/styles/use-calendar-page-styles";
import { checkIfTheSameDay } from "../../utils/dateHelpers";
import EmptyTasksTitle from "./EmptyTasksTitle";
import SingleTask from "../SingleTask";
import TasksWrapper from "./TasksWrapper";

const DUMMY_TASKS = [
  {
    task_id: "1",
    title: "title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fuga?",
    priority: 1,
    isDone: false,
    date: new Date("May 11, 2022"),
  },
  {
    task_id: "2",
    title: "title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, maxime.",
    priority: 2,
    isDone: false,
    date: new Date("May 10, 2022"),
  },
  {
    task_id: "3",
    title: "title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consequatur!",
    priority: 1,
    isDone: true,
    date: new Date("May 12, 2022"),
  },
  {
    task_id: "4",
    title: "title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloremque!",
    priority: 3,
    isDone: true,
    date: new Date("May 13, 2022"),
  },
  {
    task_id: "5",
    title: "title 5",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, tenetur.",
    priority: 1,
    isDone: false,
    date: new Date("May 14, 2022"),
  },
  {
    task_id: "6",
    title: "title 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laudantium?",
    priority: 2,
    isDone: true,
    date: new Date("May 15, 2022"),
  },
  {
    task_id: "7",
    title: "title 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eligendi.",
    priority: 1,
    isDone: false,
    date: new Date("May 15, 2022"),
  },
  {
    task_id: "8",
    title: "title 8",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!",
    priority: 3,
    isDone: true,
    date: new Date("May 17, 2022"),
  },
];

const Tasks = ({ selectedDate }) => {
  const { classes } = useCalendarPageStyles();

  const filteredTasks = DUMMY_TASKS.filter((task) => {
    const isSelectedDay = checkIfTheSameDay(task.date, selectedDate);
    return isSelectedDay ? task : false;
  });

  const tasks = filteredTasks.map((task) => (
    <SingleTask key={task.task_id} task={task} />
  ));

  return (
    <Box className={classes.tasks}>
      <Text className={classes.tasksHeader}>Tasks</Text>
      <TasksWrapper isScroll={filteredTasks.length > 5}>
        <Stack className={classes.tasksContainer}>
          {filteredTasks.length ? tasks : <EmptyTasksTitle />}
        </Stack>
      </TasksWrapper>
    </Box>
  );
};

export default Tasks;
