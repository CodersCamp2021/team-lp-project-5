import { createStyles } from "@mantine/core";

export const useHomeHeroStyles = createStyles((theme) => ({
  container: {
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      marginTop: "60px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
  },
  leftSide: {
    [theme.fn.smallerThan("sm")]: {
      height: "300px",
      maxWidth: "400px",
      marginBottom: "40px",
    },
    [theme.fn.largerThan("md")]: {
      height: "436px",
      maxWidth: "500px",
      minWidth: "460px",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "320px",
    maxWidth: "420px",
    marginBottom: "30px",
  },
  title: {
    [theme.fn.smallerThan("sm")]: {
      fontSize: "50px",
      lineHeight: "50 px",
      marginTop: "50px",
      marginBottom: "20px",
      letterSpacing: "2px",
      textAlign: "center",
    },
    [theme.fn.largerThan("md")]: {
      fontSize: "80px",
      lineHeight: "100px",
      letterSpacing: "4px",
    },
    fontSize: "70px",
    lineHeight: "80px",
    letterSpacing: "3px",
  },
  button: {
    [theme.fn.smallerThan("sm")]: {
      alignSelf: "center",
    },
    [theme.fn.smallerThan("md")]: {
      marginTop: "20px",
    },
    "&:hover": {
      backgroundColor: theme.colors.primary[8],
    },
    maxWidth: "170px",
    fontSize: "26px",
    fontWeight: "normal",
    minHeight: "40px",
    backgroundColor: theme.colors.primary[6],
    color: theme.white,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    [theme.fn.smallerThan("sm")]: { width: "301px", height: "225px" },
    [theme.fn.largerThan("sm")]: {
      width: "536px",
      height: "400px",
    },
    marginBottom: "30px",
  },
}));
