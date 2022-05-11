import React from "react";
import { Box, createStyles, ScrollArea, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  collectionsWrapper: {
    flex: 3.5,

    h3: {
      color: theme.colors.primary[6],
      textShadow: theme.other.mainShadow,
      letterSpacing: "0.2em",

      [theme.fn.smallerThan("xl")]: {
        fontSize: 28,
      },

      [theme.fn.smallerThan(997)]: {
        textAlign: "center",
      },

      [theme.fn.smallerThan("xs")]: {
        fontSize: 24,
      },
    },
  },

  scrollArea: {
    width: "100%",
    maxHeight: 220,
  },
}));

const Collections = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.collectionsWrapper}>
      <Title order={3} className={classes.collectionsTitle}>
        COLLECTIONS
      </Title>
      <ScrollArea className={classes.scrollArea}>
        <div></div>
      </ScrollArea>
    </Box>
  );
};

export default Collections;
