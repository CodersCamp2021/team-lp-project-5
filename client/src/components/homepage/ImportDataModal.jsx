import React from "react";
import { Button, Modal, Text, Group } from "@mantine/core";
import { useModalStyles } from "../../hooks/styles/use-modals-styles";

const ImportDataModal = ({ opened, setOpened }) => {
  const { classes } = useModalStyles();

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside={false}
      closeOnEscape={false}
      centered
      withCloseButton={false}
      title="Hold it right there!"
      padding={40}
      styles={(theme) => ({
        title: {
          fontSize: 26,
          color: theme.white,
          fontWeight: 700,
          letterSpacing: "1px",
          width: "100%",
          textAlign: "center",
        },
      })}
    >
      <Text size="lg" align="center">
        We&apos;ve detected that you were using Timey before signing up. Do you
        want to import your data to your account?
      </Text>
      <Group spacing={60} position="center" mt={30}>
        <Button color="red" variant="outline">
          No, I don&apos;t
        </Button>
        <Button className={classes.button}>Yeah, sure!</Button>
      </Group>
    </Modal>
  );
};

export default ImportDataModal;
