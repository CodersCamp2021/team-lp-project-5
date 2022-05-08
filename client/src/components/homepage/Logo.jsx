import { createStyles, Title } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  h1: {
    color: theme.colors.primary[6],
    letterSpacing: "0.2em",
    textShadow: theme.other.mainShadow,
    marginRight: "-0.2em",
    paddingBottom: 10,
  },
}));

const Logo = () => {
  const { classes } = useStyles();

  return (
    <Title className={classes.h1} order={3}>
      TIMEY
    </Title>
  );
};

export default Logo;
