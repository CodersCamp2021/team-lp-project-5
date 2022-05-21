import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  Text,
  Group,
  RingProgress,
  Center,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { BsCheckLg } from "react-icons/bs";

import { useModalStyles } from "../../hooks/styles/use-modals-styles";
import { useUserStore } from "../../hooks/store/use-user-store";
import { useGuestStore } from "../../hooks/store/use-guest-store";

const ImportDataModal = ({ setOpened }) => {
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const theme = useMantineTheme();
  const { getTasks } = useGuestStore();
  const { createTask } = useUserStore();
  let callback = useRef();
  const { classes } = useModalStyles();

  useEffect(() => {
    if (progress < 100 && importing) {
      callback.current = () => {
        setProgress(progress + 0.5);
      };
    }
    if (progress === 100) {
      const closeModal = setTimeout(() => {
        setOpened(false);
      }, 1500);
      return () => clearTimeout(closeModal);
    }
  }, [progress, importing]);

  useEffect(() => {
    if (progress === 100) {
      const resetImporting = setTimeout(() => {
        setProgress(0);
        setImporting(false);
      }, 2000);
      return () => clearTimeout(resetImporting);
    }
  }, [progress]);

  useEffect(() => {
    if (importing) {
      const interval = setInterval(() => callback.current(), 30);
      return () => clearInterval(interval);
    }
  }, [importing]);

  const handleImportClick = () => {
    setImporting(true);
    const tasks = getTasks();
    tasks.forEach((task) => {
      createTask(task);
    });
  };

  return (
    <Modal
      opened={true}
      onClose={() => setOpened(false)}
      closeOnClickOutside={false}
      closeOnEscape={false}
      centered
      withCloseButton={false}
      title={
        importing
          ? progress >= 99
            ? "Completed!"
            : "Importing your data..."
          : "Hold it right there!"
      }
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
          sections={[
            {
              value: progress,
              color: progress >= 99 ? "teal" : theme.colors.primary[6],
            },
          ]}
          label={
            progress >= 99 ? (
              <Center>
                <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
                  <BsCheckLg size={22} />
                </ThemeIcon>
              </Center>
            ) : (
              <Text
                color={theme.colors.primary[6]}
                weight={700}
                align="center"
                size="xl"
              >
                {progress.toFixed(0)}%
              </Text>
            )
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
