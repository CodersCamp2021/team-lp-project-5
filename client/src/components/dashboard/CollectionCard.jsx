import React from "react";
import {
  Box,
  Card,
  Progress,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { useCollectionsStyles } from "../../hooks/styles/use-dashboard-styles";

const CollectionCard = () => {
  const { classes } = useCollectionsStyles();
  const isSmaller = useMediaQuery("(max-width: 1400px)");
  const theme = useMantineTheme();

  return (
    <Card
      className={classes.collectionCard}
      style={isSmaller ? { padding: "18px 22px" } : { padding: "27px 36px" }}
    >
      <Box>
        <Text className={classes.taskNumber} color={theme.colors.primary[6]}>
          42 tasks
        </Text>
        <Title order={5}>Personal</Title>
      </Box>
      <Progress
        value={50}
        size={isSmaller ? "md" : "xl"}
        radius="lg"
        color={theme.colors.primary[6]}
        styles={{
          root: {
            backgroundColor: theme.white,
          },
        }}
      />
    </Card>
  );
};

export default CollectionCard;
