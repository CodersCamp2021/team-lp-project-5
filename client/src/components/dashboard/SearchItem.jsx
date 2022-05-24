import { Group, ListItem, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { useSearchBarStyles } from "../../hooks/styles/use-dashboard-styles";
import { BsDashLg } from "react-icons/bs";
import { useModals } from "@mantine/modals";

const SearchItem = ({ task, setIsOpen }) => {
  const { title, description, priority, status } = task;
  const { classes } = useSearchBarStyles();
  const theme = useMantineTheme();
  const modals = useModals();

  const handleClickTask = () => {
    setIsOpen(false);
    modals.openContextModal("addTaskModal", {
      title: "Edit Task",
      innerProps: {
        task: task,
        isEdit: true,
      },
    });
  };

  return (
    <ListItem onClick={handleClickTask} className={classes.searchListItem}>
      <Group className={classes.searchListItemContent}>
        <BsDashLg
          color={theme.other.taskPriorities[priority]}
          size="2.5rem"
          className={classes.searchListItemDash}
        />
        <Text
          lineClamp={1}
          style={{
            textTransform: "capitalize",
            fontSize: 18,
            textDecorationLine: status ? "line-through" : "",
            maxWidth: "90%",
          }}
        >
          {title}
        </Text>
        <Text
          lineClamp={1}
          style={{
            textTransform: "capitalize",
            fontSize: 12,
            textDecorationLine: status ? "line-through" : "",
            maxWidth: "90%",
          }}
        >
          {description}
        </Text>
      </Group>
    </ListItem>
  );
};

export default SearchItem;
