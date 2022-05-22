import React, { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import { Box, Stack, Text } from "@mantine/core";

import { useCalendarPageStyles } from "../../hooks/styles/use-calendar-page-styles";
import { UserContext } from "../../UserContext";
import EmptyTasksTitle from "./EmptyTasksTitle";
import SingleTask from "../SingleTask";
import TasksWrapper from "./TasksWrapper";

const Tasks = ({ selectedDate }) => {
  const [tasks, setTasks] = useState([]);
  const { classes } = useCalendarPageStyles();
  const { store } = useContext(UserContext);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await store.getTasks(dayjs(selectedDate));
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, [tasks]);

  const mappedTasks = tasks?.map((task) => (
    <SingleTask key={task.taskId} task={task} />
  ));

  return (
    <Box className={classes.tasks}>
      <Text className={classes.tasksHeader}>Tasks</Text>
      <TasksWrapper isScroll={mappedTasks.length > 5}>
        <Stack className={classes.tasksContainer}>
          {mappedTasks.length ? mappedTasks : <EmptyTasksTitle />}
        </Stack>
      </TasksWrapper>
    </Box>
  );
};

export default Tasks;
