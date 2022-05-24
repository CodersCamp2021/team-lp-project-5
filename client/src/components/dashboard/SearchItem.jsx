import { Group, ListItem, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { useSearchBarStyles } from "../../hooks/styles/use-dashboard-styles";
import { BsDashLg } from "react-icons/bs";

const SearchItem = ({ task }) => {
  const { taskId, title, description, priority, status } = task;
  const { classes } = useSearchBarStyles();
  const theme = useMantineTheme();

  const handleClickTask = () => {
    //TODO: handle click - open task modal
    console.log("clicked task with id: " + taskId); //eslint-disable-line
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
