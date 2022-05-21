import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Text, Group, RingProgress } from "@mantine/core";
import { useModalStyles } from "../../hooks/styles/use-modals-styles";

const ImportDataModal = ({ opened, setOpened }) => {
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  let callback = useRef();
  const { classes } = useModalStyles();

  useEffect(() => {
    if (progress < 100 && importing) {
      callback.current = () => {
        setProgress(progress + 0.5);
      };
    }
  }, [progress, importing]);

  useEffect(() => {
    if (importing) {
      const interval = setInterval(() => callback.current(), 25);
      return () => clearInterval(interval);
    }
  }, [importing]);

  const handleImportClick = () => setImporting(true);

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside={false}
      closeOnEscape={false}
      centered
      withCloseButton={false}
      title={importing ? "Importing your data..." : "Hold it right there!"}
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
      {importing ? (
        <RingProgress
          sx={{ margin: "0 auto" }}
          sections={[{ value: progress, color: "blue" }]}
          label={
            <Text color="blue" weight={700} align="center" size="xl">
              {progress.toFixed(0)}%
            </Text>
          }
        />
      ) : (
        <>
          <Text size="lg" align="center">
            We&apos;ve detected that you were using Timey before signing up. Do
            you want to import your data to your account?
          </Text>
          <Group spacing={60} position="center" mt={30}>
            <Button
              color="red"
              variant="outline"
              onClick={() => setOpened(false)}
            >
              No, I don&apos;t
            </Button>
            <Button className={classes.button} onClick={handleImportClick}>
              Yeah, sure!
            </Button>
          </Group>
        </>
      )}
    </Modal>
  );
};

export default ImportDataModal;
