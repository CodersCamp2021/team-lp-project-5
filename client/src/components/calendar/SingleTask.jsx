import { Group, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { BsCheckCircleFill, BsCircle, BsDashLg } from "react-icons/bs";

const SingleTask = ({ task }) => {
  const theme = useMantineTheme();
  const { title, priority, isDone } = task;

  const handleClick = () => {
    //TODO: handle onClick - mark task as done/undone
    console.log("click");
  };

  const icon = isDone ? (
    <BsCheckCircleFill size="24px" />
  ) : (
    <BsCircle size="24px" />
  );

  return (
    <Group
      onClick={handleClick}
      style={{
        alignItems: "center",
        padding: 20,
        width: "100%",
        backgroundColor: theme.colors.lightBg,
        borderRadius: 15,
        position: "relative",
        cursor: "pointer",
      }}
    >
      <BsDashLg
        color={theme.other.taskPriorities[priority]}
        size="2.5rem"
        style={{
          transform: "rotate(90deg) translateY(50%)",
          position: "absolute",
          left: "0",
        }}
      />
      {icon}
      <Text
        style={{
          textTransform: "capitalize",
          fontSize: 18,
          color: "#eeeeee",
          textDecorationLine: isDone ? "line-through" : "",
        }}
      >
        {title}
      </Text>
    </Group>
  );
};

export default SingleTask;
