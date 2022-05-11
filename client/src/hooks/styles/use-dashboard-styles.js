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
 * Collections
 */
export const useCollectionsStyles = createStyles((theme) => ({
  collectionsWrapper: {
    flex: 3.5,

    h3: {
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
  },

  scrollArea: {
    width: "100%",
    maxHeight: 220,
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

    [theme.fn.smallerThan(997)]: {
      minHeight: 150,
      flexDirection: "column",
      justifyContent: "space-evenly",
    },

    h1: {
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
 * Lists
 */
export const useListsStyles = createStyles((theme) => ({
  listsWrapper: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "130px",
    height: "100%",

    [theme.fn.smallerThan("xl")]: {
      gap: "80px",
    },

    h4: {
      color: theme.colors.primary[6],
      textShadow: theme.other.mainShadow,
      letterSpacing: "0.2em",
      textAlign: "center",
      paddingBottom: 10,

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
    justifyContent: "space-between",

    "&> div": {
      height: "42vh",
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
