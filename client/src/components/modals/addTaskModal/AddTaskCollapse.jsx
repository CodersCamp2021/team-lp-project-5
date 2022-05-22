import React from "react";
import { Collapse, MultiSelect, SegmentedControl, Text } from "@mantine/core";

import { useAddTaskStyles } from "../../../hooks/styles/use-add-task-styles.js";

const priorities = [
  { label: "urgent", value: 3 },
  { label: "important", value: 2 },
  { label: "time waste", value: 1 },
];

const AddTaskCollapse = ({ form, collapseOpened }) => {
  const { classes: addTaskClasses } = useAddTaskStyles();
  return (
    <Collapse in={collapseOpened}>
      <MultiSelect
        pt={10}
        className={addTaskClasses.label}
        label="COLLECTIONS"
        data={[
          {
            value: "work",
            label: "Work",
          },
          { value: "school", label: "School" },
        ]}
        {...form.getInputProps("collections")}
      />
      <Text className={addTaskClasses.textLabel}>PRIORITY</Text>
      <SegmentedControl
        radius={10}
        value={form.values.priority}
        onChange={(value) => {
          form.setFieldValue("priority", value);
        }}
        styles={{
          active: {
            backgroundColor:
              form.values.priority === 1
                ? "#5A9C3B"
                : form.values.priority === 2
                ? "#DE8C12"
                : "#EE5E5E",
          },
        }}
        data={priorities}
        {...form.getInputProps("priority")}
      />
    </Collapse>
  );
};

export default AddTaskCollapse;
