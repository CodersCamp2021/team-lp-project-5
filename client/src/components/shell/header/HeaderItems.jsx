import React, { useState } from "react";
import { Box, Burger, Popover, Text, useMantineTheme } from "@mantine/core";
import { BsBell, BsSearch } from "react-icons/bs";

import { useHeaderStyles } from "../../../hooks/styles/use-header-styles";

const HeaderItems = ({ opened, setOpened }) => {
  const [searchPopover, setSearchPopover] = useState(false);
  const [bellPopover, setBellPopover] = useState(false);
  const { classes } = useHeaderStyles();
  const theme = useMantineTheme();
  return (
    <Box className={classes.headerItemsWrapper}>
      <Burger
        color={theme.colors.primary[6]}
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        size="md"
        ml={25}
      />
      <Box className={classes.iconWrapper}>
        <Popover
          opened={searchPopover}
          onClose={() => setSearchPopover(false)}
          target={
            <BsSearch onClick={() => setSearchPopover((o) => !o)} size={30} />
          }
          width={110}
          position="bottom"
          spacing={4}
          gutter={2}
          withArrow
        >
          <Text align="center" size="sm">
            Coming soon!
          </Text>
        </Popover>
        <Popover
          opened={bellPopover}
          onClose={() => setBellPopover(false)}
          target={
            <BsBell onClick={() => setBellPopover((o) => !o)} size={30} />
          }
          width={110}
          position="bottom"
          spacing={4}
          gutter={2}
          withArrow
          placement="end"
        >
          <Text align="center" size="sm">
            Coming soon!
          </Text>
        </Popover>
      </Box>
    </Box>
  );
};

export default HeaderItems;
