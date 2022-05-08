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
    minHeight: 410,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  navbarItems: {
    width: "100%",
  },

  userImage: {
    margin: "0 auto",
    width: 160,
    height: 160,
    border: `5px solid ${theme.colors.primary[6]}`,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userNames: {
    fontSize: 36,
    color: "#FFFFFF",
    textAlign: "center",
    wordSpacing: "100vw",
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
  },

  logoutWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: 700,
    width: 260,
    height: 55,
    marginBottom: 30,
    "&:hover": {
      backgroundColor: theme.colors.primary[8],
    },
  },

  listItem: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    color: theme.colors.navbarText,
    textDecoration: "none",
    height: 70,
    "&:hover": {
      color: theme.colors.lightBg,
      backgroundColor: theme.colors.highlightBg,
    },
  },
}));
