import React, { useState } from "react";
import {
  Button,
  Group,
  Modal,
  Switch,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import {
  BsCalendarEvent,
  BsChevronDown,
  BsChevronUp,
  BsTrash,
} from "react-icons/bs";
import { useMediaQuery } from "@mantine/hooks";

import { useModalStyles } from "../../../hooks/styles/use-modals-styles.js";
import { useAddTaskStyles } from "../../../hooks/styles/use-add-task-styles.js";
import { addTaskSchema } from "../../../utils/addTaskSchema";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import AddTaskCollapse from "./AddTaskCollapse.jsx";

const handleSubmit = (values) => {
  console.log(values);
};

export const AddTaskModal = ({ opened, setOpened, isEdit, task }) => {
  const [collapseOpened, setCollapseOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);
  const { classes } = useModalStyles();
  const { classes: addTaskClasses } = useAddTaskStyles();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const form = useForm({
    schema: yupResolver(addTaskSchema),
    initialValues: isEdit
      ? {
          title: task.title,
          description: task.description,
          dueDate: task.dueDate,
          collections: task.collections,
          status: task.status,
          priority: task.priority,
        }
      : {
          title: "",
          description: "",
          dueDate: new Date(),
          collections: [],
          status: false,
          priority: 2,
        },
  });

  const handleDelete = () => setDeleteOpened(true);

  return (
    <Modal
      size={600}
      opened={opened}
      title={isEdit ? "Edit Task" : "Create a Task"}
      onClose={() => setOpened(false)}
      centered
      className={classes.modal}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          required
          className={addTaskClasses.label}
          label="TITLE"
          placeholder=""
          {...form.getInputProps("title")}
        />
        <Textarea
          className={addTaskClasses.label}
          label="DESCRIPTION"
          placeholder=""
          required
          minRows={3}
          {...form.getInputProps("description")}
        />
        <Group position="apart" align="end">
          <DatePicker
            className={addTaskClasses.label}
            minDate={new Date()}
            inputFormat="YYYY-MM-DD"
            icon={<BsCalendarEvent />}
            label="DATE"
            {...form.getInputProps("dueDate")}
            required
            dropdownType={isMobile ? "modal" : "popover"}
            styles={{
              input: {
                width: 180,
                fontSize: 16,
              },
            }}
          />
          {isEdit && (
            <Switch
              size="lg"
              styles={(theme) => ({
                root: {
                  flexDirection: "column-reverse",
                },
                input: {
                  backgroundColor: theme.colors.darkBg,
                  "&:checked": {
                    backgroundColor: theme.colors.primary[6],
                    borderColor: theme.colors.primary[6],
                  },
                },
                label: {
                  color: theme.white,
                },
              })}
              label="TASK STATUS"
            />
          )}
          <Button
            className={addTaskClasses.collapseButton}
            variant="subtle"
            onClick={() => setCollapseOpened(!collapseOpened)}
            rightIcon={collapseOpened ? <BsChevronUp /> : <BsChevronDown />}
          >
            MORE
          </Button>
        </Group>
        <AddTaskCollapse form={form} collapseOpened={collapseOpened} />
        <Group position="apart" className={addTaskClasses.buttonGroup}>
          <Button
            variant="outline"
            color="red"
            rightIcon={<BsTrash size={18} />}
            onClick={handleDelete}
          >
            DELETE
          </Button>
          <Group>
            <Button
              variant="outline"
              className={addTaskClasses.cancelButton}
              onClick={() => setOpened(false)}
            >
              CANCEL
            </Button>
            <Button className={addTaskClasses.submitButton} type="submit">
              SAVE
            </Button>
          </Group>
        </Group>
      </form>
      <ConfirmDeleteModal opened={deleteOpened} setOpened={setDeleteOpened} />
    </Modal>
  );
};

export default AddTaskModal;
