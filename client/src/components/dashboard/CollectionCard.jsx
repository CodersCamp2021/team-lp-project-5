import {
  Box,
  Card,
  Progress,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

const CollectionCard = () => {
  const theme = useMantineTheme();

  return (
    <Card
      sx={(theme) => ({
        minWidth: 365,
        height: 220,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: theme.other.mainShadow,
        backgroundColor: theme.colors.lightBg,
        borderRadius: "15px",

        h5: {
          color: theme.white,
          fontWeight: 400,
          lineHeight: "32px",
        },
      })}
      style={{ padding: "27px 36px" }}
    >
      <Box>
        <Text sx={{ fontSize: 24 }} color={theme.colors.primary[6]}>
          42 tasks
        </Text>
        <Title order={5}>Personal</Title>
      </Box>
      <Progress
        value={50}
        size="xl"
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
