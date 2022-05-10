import { createStyles } from "@mantine/core";

/**
 * Navbar
 */
export const useNavbarStyles = createStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.lightBg,
  },

  navbarTop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  navbarItems: {
    width: "100%",
  },

  userImage: {
    margin: "15px auto",
    width: 160,
    height: 160,
    border: `5px solid ${theme.colors.primary[6]}`,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.fn.smallerThan("xs")]: {
      width: 130,
      height: 130,
    },
  },

  userNames: {
    fontSize: 36,
    fontWeight: 600,
    color: "#FFFFFF",
    textAlign: "center",
    wordSpacing: "100vw",
    [theme.fn.smallerThan("xs")]: {
      fontSize: 26,
    },
  },

  navbarBottom: {
    width: "100%",
    minHeight: 70,
    fontSize: 32,
    textDecoration: "none",
    color: theme.colors.navbarText,

    "&:hover": {
      color: theme.colors.lightBg,
      backgroundColor: theme.colors.highlightBg,
    },

    svg: {
      verticalAlign: "middle",
      marginRight: "21px",
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 22,
    },
  },

  logoutWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 300,
  },
}));

/**
 * Navbar Items
 */
export const useNavbarItemsStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.primary[6],
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    fontSize: 28,
    lineHeight: "34px",
    letterSpacing: "0.1em",
    fontWeight: 500,
    width: 260,
    height: 55,
    margin: "20px 0",
    "&:hover": {
      backgroundColor: theme.colors.primary[8],
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: 20,
      width: 180,
      height: 45,
    },
  },

  listItem: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    fontWeight: 300,
    color: theme.colors.navbarText,
    textDecoration: "none",
    height: 70,
    "&:hover": {
      color: theme.colors.lightBg,
      backgroundColor: theme.colors.highlightBg,
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: 22,
    },
  },
}));
