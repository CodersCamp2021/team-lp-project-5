import React from "react";
import { Button, Group, Modal, Text } from "@mantine/core";

import { useModalStyles } from "../../../hooks/styles/use-modals-styles";
import { useAddTaskStyles } from "../../../hooks/styles/use-add-task-styles";

const ConfirmDeleteModal = ({ opened, setOpened }) => {
  const { classes } = useModalStyles();
  const { classes: addTaskClasses } = useAddTaskStyles();

  return (
    <Modal
      className={classes.modal}
      centered
      opened={opened}
      size={400}
      onClose={() => setOpened(false)}
      title="Delete Task"
      styles={{
        title: {
          textAlign: "center",
          width: "100%",
          marginRight: "-20px",
        },
      }}
    >
      <Text align="center" pb={30} pt={20}>
        Are you sure you want to delete this task?
      </Text>
      <Group position="center" spacing={50}>
        <Button
          className={addTaskClasses.cancelButton}
          variant="outline"
          onClick={() => setOpened(false)}
        >
          CANCEL
        </Button>
        <Button color="red" variant="light">
          CONFIRM
        </Button>
      </Group>
    </Modal>
  );
};

export default ConfirmDeleteModal;
