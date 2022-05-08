import React from "react";
import { createStyles, Container, Box, Textarea, Text } from "@mantine/core";

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
      </Box>
    </Container>
  );
};

export default AddTask;
