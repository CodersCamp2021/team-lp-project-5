import React, { useState } from "react";
import { Box, Image, Text, Button } from "@mantine/core";
import { useHomeHeroStyles } from "../../hooks/styles/use-homepage-styles";
import SignUpModal from "../modals/SignUpModal";
import ImportDataModal from "../modals/ImportDataModal";

const HomeHero = () => {
  const [importOpened, setImportOpened] = useState(false);
  const [opened, setOpened] = useState(false);
  const { classes } = useHomeHeroStyles();

  const openImportModal = () => setImportOpened(true);

  return (
    <Box className={classes.container}>
      <Box className={classes.leftSide}>
        <Text className={classes.title}>Manage your time with ease.</Text>
        <Button
          size="sm"
          className={classes.button}
          onClick={() => setOpened(true)}
        >
          Get started
        </Button>
      </Box>
      <Box className={classes.imageContainer}>
        <Image
          className={classes.image}
          src="https://lukaszadam.com/monitor.svg"
          withPlaceholder
        />
      </Box>
      <ImportDataModal opened={importOpened} setOpened={setImportOpened} />
      <SignUpModal
        opened={opened}
        setOpened={setOpened}
        openImport={openImportModal}
      />
    </Box>
  );
};

export default HomeHero;
