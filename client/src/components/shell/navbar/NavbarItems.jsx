import React from "react";
import { Box, Button, List, Text } from "@mantine/core";
import { BsCardText, BsCalendar4, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useNavbarItemsStyles } from "../../../hooks/styles/use-navbar-styles";

const MenuItems = [
  {
    icon: <BsCardText />,
    text: "Overview",
  },
  {
    icon: <BsCalendar4 />,
    text: "Calendar",
  },
];

const NavbarItems = () => {
  const { classes } = useNavbarItemsStyles();

  return (
    <Box>
      <List
        center
        size={32}
        styles={{
          root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          itemIcon: {
            marginRight: "21px",
          },
        }}
      >
        <Button
          radius={15}
          rightIcon={<BsPlus size={35} />}
          styles={{
            root: {
              paddingRight: 0,
            },
            rightIcon: {
              marginLeft: 15,
            },
          }}
          className={classes.button}
        >
          ADD TASK
        </Button>
        {MenuItems.map((item) => (
          <List.Item
            key={item.text}
            icon={item.icon}
            component={Link}
            to="/"
            className={classes.listItem}
          >
            <Text size="32px">{item.text}</Text>
          </List.Item>
        ))}
      </List>
    </Box>
  );
};

export default NavbarItems;
