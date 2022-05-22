import React, { useState } from "react";
import { Stack, Text } from "@mantine/core";

import { useListsStyles } from "../../../hooks/styles/use-dashboard-styles";
import SingleTask from "../../SingleTask";
import AddTaskModal from "../../modals/addTaskModal/AddTaskModal";

const TaskList = ({ tasks, leftovers }) => {
  const [opened, setOpened] = useState(false);
  const { classes } = useListsStyles();

  const handleClick = () => {
    setOpened(true);
  };

  return (
    <Stack className={classes.tasksWrapper}>
      {tasks?.length > 0 ? (
        tasks.map((task) => (
          <React.Fragment key={task.taskId}>
            <SingleTask
              task={task}
              isLeftover={leftovers}
              handleClick={handleClick}
            />
            <AddTaskModal
              opened={opened}
              setOpened={setOpened}
              isEdit={true}
              task={task}
            />
          </React.Fragment>
        ))
      ) : (
        <Text className={classes.placeholderText} align="center">
          No tasks found.
        </Text>
      )}
    </Stack>
  );
};

export default TaskList;
