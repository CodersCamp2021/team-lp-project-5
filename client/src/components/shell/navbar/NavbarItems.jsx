import React from "react";
import { Box, Button, List, Text } from "@mantine/core";
import { BsCardText, BsCalendar4, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useNavbarItemsStyles } from "../../../hooks/styles/use-navbar-styles";
import { useMediaQuery } from "@mantine/hooks";

const MenuItems = [
  {
    icon: <BsCardText />,
    text: "Overview",
    path: "/",
  },
  {
    icon: <BsCalendar4 />,
    text: "Calendar",
    path: "/calendar",
  },
];

const NavbarItems = ({ setOpened }) => {
  const { classes } = useNavbarItemsStyles();
  const isXsScreen = useMediaQuery("(min-width: 576px)");

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
          className={classes.button}
          rightIcon={<BsPlus size={isXsScreen ? 35 : 26} />}
          styles={{
            root: {
              paddingRight: isXsScreen ? 0 : 5,
            },
            rightIcon: {
              marginLeft: isXsScreen ? 15 : 5,
            },
          }}
        >
          ADD TASK
        </Button>
        {MenuItems.map((item) => (
          <List.Item
            key={item.text}
            icon={item.icon}
            component={Link}
            to={item.path}
            onClick={() => setOpened(false)}
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
