import { Box, Button, createStyles, List, Text } from "@mantine/core";
import React from "react";

import { BsCardText, BsCalendar4, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.primary[6],
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    fontSize: 28,
    lineHeight: "34px",
    letterSpacing: "0.1em",
    fontWeight: 700,
    width: 260,
    height: 55,
    marginBottom: 30,
    "&:hover": {
      backgroundColor: theme.colors.primary[8],
    },
  },

  listItem: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    color: theme.colors.navbarText,
    textDecoration: "none",
    height: 70,
    "&:hover": {
      color: theme.colors.lightBg,
      backgroundColor: theme.colors.highlightBg,
    },
  },
}));

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
  const { classes } = useStyles();

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
