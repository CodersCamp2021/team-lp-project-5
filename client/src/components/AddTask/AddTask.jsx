import React from "react";
import { useAddTaskStyles } from "../../hooks/styles/use-add-task-styles.js";
import {
  Box,
  Textarea,
  Text,
  Button,
  SimpleGrid,
  Collapse,
  Modal,
  Switch
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { BsClock, BsChevronDown, BsPlus } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import { Priority } from "./AddTaskPriority";
import { Collection } from "./AddTaskCollection";

export const AddTask = () => {
  const { classes } = useAddTaskStyles();
  const [opened, setOpened] = useState(false);
  const [more, setMore] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Modal
        size="lg"
        opened={opened}
        onClose={() => setOpened(false)}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        className={classes.modalContainer}
        styles={(theme) => ({
          modal: {
            backgroundColor: theme.colors.lightBg,
          },
        })}
      >
        <Box>
          <Text className={classes.titlesNames}>TITLE</Text>
          <Textarea className={classes.textArea} maxRows={1} required />
          <Text className={classes.titlesNames}>DESCRIPTION</Text>
          <Textarea maxRows={4} />
        </Box>
        <Text pt="md" className={classes.titlesNames}>
          DATE AND TIME
        </Text>
        <Box className={classes.dateItemsWrapper} gutter="xl">
          <DatePicker
            className={classes.datePicker}
            allowLevelChange={false}
            placeholder="DD-MM-YYYY"
            minDate={new Date()}
            styles={(theme) => ({
              placeholder: theme.white,
              value: theme.white,
            })}
          />
          <TimeInput
            format="12"
            // defaultValue={new Date()}
            icon={<BsClock size={16} 
            value={value} onChange={onChange} 
            />}
          />
          <Switch
          color="cyan"
          checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
          ></Switch>
          <Button
            onClick={() => setMore((o) => !o)}
            rightIcon={<BsChevronDown size={25} />}
            styles={(theme) => ({
              root: {
                paddingRight: 5,
                backgroundColor: theme.colors.lightBg,
                "&:hover": {
                  backgroundColor: theme.colors.lightBg,
                },
              },
              rightIcon: {
                marginLeft: 15,
              },
            })}
          >
            MORE
          </Button>
        </Box>
        <Collapse in={more}>
          <Text pt="md" className={classes.titlesNames}>
            COLLECTIONS
          </Text>
          <Collection></Collection>
          <Text pt="md" className={classes.titlesNames}>
            PRIORITY
          </Text>
          <Priority></Priority>
        </Collapse>
        <SimpleGrid
          cols={3}
          spacing="xl"
          pt="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "xs", cols: 2, spacing: "sm" },
          ]}
        >
          <Button
            radius={15}
            className={classes.button}
            rightIcon={
              <RiDeleteBinLine className={classes.deleteIcon} size={20} />
            }
            styles={(theme) => ({
              root: {
                backgroundColor: theme.colors.darkBg,
                color: "#E06262",
                "&:hover": {
                  backgroundColor: theme.colors.darkBg,
                },
              },
            })}
          >
            DELETE
          </Button>
          <Button
            onClick={() => setOpened(true)}
            radius={15}
            className={classes.button}
            closeOnEscape
            closeOnClickOutside
            styles={(theme) => ({
              root: {
                backgroundColor: theme.colors.darkBg,
                "&:hover": {
                  backgroundColor: theme.colors.darkBg,
                },
              },
            })}
          >
            CANCEL
          </Button>
          <Button
            radius={15}
            className={classes.button}
            styles={{
              root: {
                backgroundColor: "#00ADB5",
                "&:hover": {
                  backgroundColor: "#00ADB5",
                },
              },
            }}
          >
            SAVE
          </Button>
        </SimpleGrid>
      </Modal>

      <Button
        onClick={() => setOpened(true)}
        radius={15}
        rightIcon={<BsPlus size={35} />}
        styles={{
          root: {
            width: 150,
            paddingRight: 0,
          },
          rightIcon: {
            marginLeft: 15,
          },
        }}
      >
        ADD TASK
      </Button>
    </>
  );
};

export default AddTask;
