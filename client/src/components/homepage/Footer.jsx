import { createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: theme.colors.primary[6],
    color: theme.white,
    textAlign: "right",
    paddingRight: "10px",
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      @CodersCamp2021-team-lp-project-5
    </footer>
  );
};

export default Footer;
