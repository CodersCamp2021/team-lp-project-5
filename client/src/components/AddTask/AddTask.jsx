import React from "react";
import { createStyles, Container, Box, Textarea, Text, Button, Group } from "@mantine/core";
import { DatePicker, TimeInput} from '@mantine/dates';
import { BsClock, BsCircleFill, BsChevronDown} from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  container: {
    // width: 748,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: theme.colors.lightBg,
  },
  titlesNames: {
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "left",
  },
  containerDate: {},
  containerButtons: {},
}));

const AddTask = () => {
  const { classes } = useStyles();
  let navigate = useNavigate();
  return (
    <Container
      p="md"
      className={classes.container}
      //   sx={(theme) => ({
      //       [theme.fn.smallerThan('lg')]: {
      //         display: 'flex',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       },})}
    >
    <Text align="right"><Button onClick = {() => {
        navigate("/")
        }}
          rightIcon={<CgClose size={25}/>}
          styles={{
            root: {
              paddingRight: 5,
              backgroundColor: "#393E46",
              '&:hover': {
            backgroundColor: "#393E46",
          },
            },
            rightIcon: {
              marginLeft: 0,
            },
          }}
        >
        </Button></Text>
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
        <DatePicker allowLevelChange={false} placeholder="DD-MM-YYYY" />
        <TimeInput format="12" defaultValue={new Date()} icon={<BsClock size={16} />}/>
        <Button
          radius={18}
          rightIcon={<BsCircleFill size={35}/>}
          styles={{
            root: {
              paddingRight: 0,
            },
            rightIcon: {
              marginLeft: 15,
            },
          }}
        >
        </Button>
        <Button
          rightIcon={<BsChevronDown size={25}/>}
          styles={{
            root: {
              paddingRight: 5,
              backgroundColor: "#393E46",
              '&:hover': {
            backgroundColor: "#393E46",
          },
            },
            rightIcon: {
              marginLeft: 15,
            },
          }}
        >MORE
        </Button>
        </Group>
      </Box>
    </Container>
  );
};

export default AddTask;
