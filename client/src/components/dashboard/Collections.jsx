import React from "react";

import { Box, ScrollArea, Title } from "@mantine/core";
import { useCollectionsStyles } from "../../hooks/styles/use-dashboard-styles";
import CollectionCard from "./CollectionCard";

const Collections = () => {
  const { classes } = useCollectionsStyles();

  return (
    <Box className={classes.collectionsWrapper}>
      <Title order={4} className={classes.collectionsTitle}>
        COLLECTIONS
      </Title>
      <ScrollArea type="always" offsetScrollbars className={classes.scrollArea}>
        <Box
          sx={{
            display: "flex",
            gap: 70,
            width: 0,
          }}
        >
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </Box>
      </ScrollArea>
    </Box>
  );
};

export default Collections;
