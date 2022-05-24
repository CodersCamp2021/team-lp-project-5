import React, { useContext, useEffect, useState } from "react";
import { useSearchBarStyles } from "../../hooks/styles/use-dashboard-styles";
import { Box, TextInput, useMantineTheme } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import {
  useClickOutside,
  useDebouncedValue,
  useInputState,
} from "@mantine/hooks";
import SearchItems from "./SearchItems";
import { UserContext } from "../../UserContext";
import { showNotification } from "@mantine/notifications";
import { ImCross } from "react-icons/im";

const SearchBar = () => {
  const { classes } = useSearchBarStyles();
  const theme = useMantineTheme();
  const { store } = useContext(UserContext);

  const [name, setName] = useInputState("");
  const [debounced] = useDebouncedValue(name, 700);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside(() => setIsOpen(false));

  useEffect(() => {
    if (debounced === "") {
      setFilteredTasks([]);
      return;
    }

    const fetchTasks = async () => {
      try {
        const tasks = await store.getTasksByName(debounced);
        setFilteredTasks(tasks);
      } catch (error) {
        showNotification({
          title: "Something went wrong!",
          message: "Failed to fetch tasks",
          icon: <ImCross />,
          color: "red",
        });
      }
    };
    fetchTasks();
  }, [debounced]);

  return (
    <Box className={classes.searchBarWrapper}>
      <TextInput
        ref={ref}
        value={name}
        onChange={setName}
        variant="unstyled"
        placeholder="Look for a task"
        spellCheck={false}
        onFocus={() => setIsOpen(true)}
        className={classes.searchInput}
        styles={{
          root: {
            height: 43,
            marginRight: 20,
            borderBottom: `3px solid ${theme.colors.primary[6]}`,
            flexGrow: 2,

            [theme.fn.smallerThan("xl")]: {
              height: 50,
              marginRight: 15,
              borderBottom: `2px solid ${theme.colors.primary[6]}`,
            },

            [theme.fn.smallerThan("xs")]: {
              height: 46,
              marginRight: 10,
            },
          },
          input: {
            color: theme.colors.primary[6],
            width: "18vw",
            minWidth: 220,
            fontSize: 32,
            lineHeight: "60px",

            [theme.fn.smallerThan("xl")]: {
              fontSize: 32,
              height: 50,
              lineHeight: "40px",
            },

            [theme.fn.smallerThan("sm")]: {
              width: "25vw",
            },

            [theme.fn.smallerThan("xs")]: {
              minWidth: 200,
              fontSize: 26,
            },

            "&::placeholder": {
              color: theme.colors.primary[11],
            },
          },
        }}
      />

      <BsSearch size={32} className={classes.searchIcon} />
      <SearchItems
        tasks={filteredTasks}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Box>
  );
};

export default SearchBar;
