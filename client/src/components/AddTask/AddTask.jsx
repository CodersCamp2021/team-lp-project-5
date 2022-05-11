import React from "react";
import {
  createStyles,
  Container,
  Box,
  Textarea,
  Text,
  Button,
  Group,
  SimpleGrid,
  Collapse
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { BsClock, BsCircleFill, BsChevronDown } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.lightBg,
  },
  titlesNames: {
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "left",
  },
}));

const AddTask = () => {
  const { classes } = useStyles();
  let navigate = useNavigate();
  const [opened, setOpen] = useState(false);


  return (
    <Container p="md" className={classes.container}>
      <Text align="right">
        <Button
          onClick={() => {
            navigate("/");
          }}
          rightIcon={<CgClose size={25} />}
          styles={{
            root: {
              paddingRight: 15,
              backgroundColor: "#393E46",
              "&:hover": {
                backgroundColor: "#393E46",
              },
            },
            rightIcon: {
              marginLeft: 0,
            },
          }}
        ></Button>
      </Text>
      <Box>
        <Text
          className={classes.titlesNames}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              fontSize: 14,
            },
          })}
        >
          TITLE
        </Text>
        <Textarea maxRows={1} required />
        <Text
          className={classes.titlesNames}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              fontSize: 14,
            },
          })}
        >
          DESCRIPTION
        </Text>
        <Textarea maxRows={4} />
      </Box>
      <Box pt="md">
        <Text
          className={classes.titlesNames}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              fontSize: 14,
            },
          })}
        >
          DATE AND TIME
        </Text>
        <Group position="apart">
          <DatePicker
            allowLevelChange={false}
            placeholder="DD-MM-YYYY"
            minDate={new Date()}
          />
          <TimeInput
            format="12"
            defaultValue={new Date()}
            icon={<BsClock size={16} />}
          />
          <Button
            radius={18}
            rightIcon={<BsCircleFill size={35} />}
            styles={{
              root: {
                paddingRight: 0,
                backgroundColor: "#00ADB5",
              },
              rightIcon: {
                marginLeft: 15,
              },
            }}
          ></Button>
          <Button onClick={() => setOpen((o) => !o)}
            rightIcon={<BsChevronDown size={25} />}
            styles={{
              root: {
                paddingRight: 5,
                backgroundColor: "#393E46",
                "&:hover": {
                  backgroundColor: "#393E46",
                },
              },
              rightIcon: {
                marginLeft: 15,
              },
            }}
          >
            MORE
          </Button>
        </Group></Box>
      <Collapse in={opened}><Text
          pt="md"
          className={classes.titlesNames}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              fontSize: 14,
            },
          })}
        >
          COLLECTIONS
        </Text><Group position="left">
            <Button
              sx={(theme) => ({
                [theme.fn.smallerThan("md")]: {
                  fontSize: 12,
                },
              })}
              radius={15}
              className={classes.button}
              styles={{
                root: {
                  width: 120,
                  backgroundColor: "#00ADB5",
                  color: "#393E46"
                },
              }}
            >
              personal
            </Button>
            <Button
              sx={(theme) => ({
                [theme.fn.smallerThan("md")]: {
                  fontSize: 12,
                },
              })}
              radius={15}
              className={classes.button}
              styles={{
                root: {
                  width: 120,
                  backgroundColor: "#00ADB5",
                  color: "#393E46"
                },
              }}
            >
              bussiness
            </Button>
            <Button
              sx={(theme) => ({
                [theme.fn.smallerThan("md")]: {
                  fontSize: 12,
                },
              })}
              radius={15}
              className={classes.button}
              styles={{
                root: {
                  width: 120,
                  backgroundColor: "#00ADB5",
                  color: "#393E46"
                },
              }}
            >
              friends
            </Button>
            <Button
              sx={(theme) => ({
                [theme.fn.smallerThan("md")]: {
                  fontSize: 12,
                },
              })}
              radius={15}
              className={classes.button}
              styles={{
                root: {
                  width: 120,
                  backgroundColor: "#00ADB5",
                  color: "#393E46"
                },
              }}
            >
              family
            </Button>
            <Button
              sx={(theme) => ({
                [theme.fn.smallerThan("md")]: {
                  fontSize: 12,
                },
              })}
              radius={15}
              className={classes.button}
              styles={{
                root: {
                  width: 120,
                  backgroundColor: "#00ADB5",
                  color: "#393E46"
                },
              }}
            >
              hobby
            </Button>
          </Group><Text
            pt="md"
            className={classes.titlesNames}
            sx={(theme) => ({
              [theme.fn.smallerThan("md")]: {
                fontSize: 14,
              },
            })}
          >
            PRIORITY
          </Text><Group position="left">
            <Button
              sx={(theme) => ({
                [theme.fn.smallerThan("md")]: {
                  fontSize: 12,
                },
              })}
              radius={15}
              className={classes.button}
              styles={{
                root: {
                  width: 120,
                  backgroundColor: "#E06262",
                  color: "#393E46",
                },
              }}
            >
              urgent
            </Button>
            <Button
              sx={(theme) => ({
                [theme.fn.smallerThan("md")]: {
                  fontSize: 12,
                },
              })}
              radius={15}
              className={classes.button}
              styles={{
                root: {
                  width: 120,
                  backgroundColor: "#EEB45E",
                  color: "#393E46",
                },
              }}
            >
              important
            </Button>
            <Button
              sx={(theme) => ({
                [theme.fn.smallerThan("md")]: {
                  fontSize: 12,
                },
              })}
              radius={15}
              className={classes.button}
              styles={{
                root: {
                  width: 120,
                  backgroundColor: "#7BD650",
                  color: "#393E46",
                },
              }}
            >
              time waste
            </Button>
          </Group></Collapse>
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
          rightIcon={<RiDeleteBinLine size={20} />}
          styles={{
            root: {
              width: 120,
              backgroundColor: "#222831",
              color: "#E06262",
            },
          }}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              fontSize: 12,
            },
          })}
          
        > 
          DELETE
        </Button>
        <Button  onClick={() => {
            navigate("/");
          }}
          radius={15}
          className={classes.button}
          styles={{
            root: {
              width: 120,
              backgroundColor: "#222831",
            },
          }}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              fontSize: 12,
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
              width: 120,
              backgroundColor: "#00ADB5",
            },
          }}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: {
              fontSize: 12,
            },
          })}
        >
          SAVE
        </Button>
      </SimpleGrid>
    </Container>
  );
};

export default AddTask;