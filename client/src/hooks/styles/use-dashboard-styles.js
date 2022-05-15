import { createStyles } from "@mantine/core";

/**
 * Dashboard
 */
export const useDashboardStyles = createStyles((theme) => ({
  dashboardWrapper: {
    display: "flex",
    flexDirection: "column",
    [theme.fn.smallerThan("sm")]: {
      minHeight: "calc(100vh - 80px)",
    },
    [theme.fn.largerThan("sm")]: {
      minHeight: "100vh",
    },
  },
}));

/**
 * Header
 */
export const useDashboardHeaderStyles = createStyles((theme) => ({
  headerWrapper: {
    flex: 1.5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,

    [theme.fn.smallerThan(997)]: {
      minHeight: 150,
      flexDirection: "column",
      justifyContent: "space-evenly",
    },

    h4: {
      textShadow: theme.other.mainShadow,
      whiteSpace: "nowrap",
      color: theme.white,

      [theme.fn.smallerThan("xl")]: {
        fontSize: 32,
      },
    },
  },
}));

/**
 * Collections
 */
export const useCollectionsStyles = createStyles((theme) => ({
  collectionsWrapper: {
    flex: 3.5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.fn.smallerThan(1280)]: {
      margin: "30px 0",
    },
  },

  collectionsTitle: {
    color: theme.colors.primary[6],
    textShadow: theme.other.mainShadow,
    letterSpacing: "0.2em",

    [theme.fn.smallerThan("xl")]: {
      fontSize: 28,
    },

    [theme.fn.smallerThan(997)]: {
      textAlign: "center",
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 24,
    },
  },

  scrollArea: {
    height: 210,
    marginTop: 15,

    [theme.fn.smallerThan("xl")]: {
      height: 180,
    },
  },

  collectionsContent: {
    display: "flex",
    gap: 70,
    width: 0,
  },

  collectionCard: {
    minWidth: 305,
    height: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: theme.other.mainShadow,
    backgroundColor: theme.colors.lightBg,
    borderRadius: "15px",

    [theme.fn.smallerThan("xl")]: {
      minWidth: 250,
      height: 150,
    },

    h5: {
      color: theme.white,
      fontWeight: 400,
      lineHeight: "32px",
      fontSize: 28,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",

      [theme.fn.smallerThan("xl")]: {
        fontSize: 24,
      },
    },
  },

  taskNumber: {
    fontSize: 22,

    [theme.fn.smallerThan("xl")]: {
      fontSize: 18,
    },
  },
}));

/**
 * Lists
 */
export const useListsStyles = createStyles((theme) => ({
  listsWrapper: {
    flex: 1.5,
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "130px",
    paddingTop: 15,

    [theme.fn.smallerThan("xl")]: {
      columnGap: "80px",
      rowGap: "20px",
    },

    h5: {
      color: theme.colors.primary[6],
      textShadow: theme.other.mainShadow,
      letterSpacing: "0.2em",
      textAlign: "center",
      paddingBottom: 10,
      fontSize: 28,

      [theme.fn.largerThan("xl")]: {
        paddingBottom: 0,
      },

      [theme.fn.smallerThan("xl")]: {
        fontSize: 24,
      },
    },

    ".mantine-Divider-root": {
      position: "absolute",
      right: "31.5%",
      height: "80%",
      alignSelf: "center",

      [theme.fn.smallerThan(1300)]: {
        display: "none",
      },
    },
  },

  singleListWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",

    "&> div": {
      height: "34vh",
      marginBottom: 40,
    },
  },
}));

/**
 * SearchBar
 */
export const useSearchBarStyles = createStyles((theme) => ({
  searchBarWrapper: {
    color: theme.colors.primary[6],
    display: "flex",
    justifyItems: "center",
    alignItems: "center",

    svg: {
      [theme.fn.smallerThan("xl")]: {
        height: 34,
        width: 34,
      },

      [theme.fn.smallerThan("xs")]: {
        height: 26,
        width: 26,
      },
    },
  },
}));
