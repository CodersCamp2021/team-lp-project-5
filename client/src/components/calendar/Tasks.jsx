import { Box, ScrollArea, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import SingleTask from "./SingleTask";

const DUMMY_TASKS = [
  {
    task_id: "1",
    title: "title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fuga?",
    priority: 1,
    isDone: false,
  },
  {
    task_id: "2",
    title: "title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, maxime.",
    priority: 2,
    isDone: false,
  },
  {
    task_id: "3",
    title: "title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consequatur!",
    priority: 1,
    isDone: true,
  },
  {
    task_id: "4",
    title: "title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloremque!",
    priority: 3,
    isDone: true,
  },
  {
    task_id: "5",
    title: "title 5",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, tenetur.",
    priority: 1,
    isDone: false,
  },
  {
    task_id: "6",
    title: "title 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laudantium?",
    priority: 2,
    isDone: true,
  },
  {
    task_id: "7",
    title: "title 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eligendi.",
    priority: 1,
    isDone: false,
  },
  {
    task_id: "8",
    title: "title 8",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!",
    priority: 3,
    isDone: true,
  },
];

const Tasks = () => {
  const theme = useMantineTheme();

  return (
    <Box
      style={{
        width: "100%",
        maxWidth: "450px",
      }}
    >
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: theme.colors.primary[6],
          textAlign: "center",
        }}
      >
        Tasks
      </Text>
      <ScrollArea style={{ height: 650 }}>
        <Stack style={{ gap: 20, width: "100%" }}>
          {DUMMY_TASKS.map((task) => (
            <SingleTask key={task.task_id} task={task} />
          ))}
        </Stack>
      </ScrollArea>
    </Box>
  );
};

export default Tasks;
