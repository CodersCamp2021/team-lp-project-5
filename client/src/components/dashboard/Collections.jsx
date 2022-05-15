import React from "react";

import { Box, ScrollArea, Title } from "@mantine/core";
import { useCollectionsStyles } from "../../hooks/styles/use-dashboard-styles";

const Collections = () => {
  const { classes } = useCollectionsStyles();

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
