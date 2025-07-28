import { makeStyles } from "@fluentui/react-components";

export const useDetailStyles = makeStyles({
  container: {
    height: "calc(100vh - 60px)",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    padding: "1rem",
    color: "var(--dark-brown)",
    boxSizing: "border-box",
    userSelect: "none",
    overflow: "hidden"
  },

  wrapper: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    flexDirection: "column",
    gap: "1rem",
    overflow: "hideen",
    background: "var(--warm-cream)",
    borderRadius: "20px",
    padding: "2rem",
    width: "50%",
    // width: "calc(100% - 2rem)",
    // height: "calc(100% - 2rem)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },

  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    width: "100%"
  },

  left: {
    width: "55%"
  },

  dishDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    gap: "1rem",

    "> h1": {
      fontWeight: "500",
    }
  },

  right: {
    width: "25%",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    aspectRatio: "1/1",
    maxHeight: "200px",
    maxWidth: "200px"
  },

  dishImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1.5px solid var(--dark-brown)",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      background: "rgba(165, 165, 165, 0.2)",
    }
  },

  dishImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  errorIcon: {
    fontSize: '48px',
    color: '#999',
  },

  noImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "1rem",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    padding: "1rem",
    gap: "0.5rem",
  },

  dishDesc: {
    width: "100%",
    color: "var(--colorNeutralForeground3)",
  },

  skeleton: {
    width: "100%",

    "> div" : {
      width: "100%",
      height: "60px"
    }
  },

  dishIngredients: {
    "> span:first-child" : {
      fontSize: "1rem",
      fontWeight: "500"
    },
    "> span:last-child" : {
      color: "var(--colorNeutralForeground3)",
      fontWeight: "400"
    }
  },

  extraInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "1.5rem"
  },

  infoRow: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    columnGap: '1.2rem',
    width: '100%',
  },

  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minWidth: '60px',
    gap: '0.3rem',
    padding: '4px 0',
    flex: '1',

    "> span": {
      whiteSpace: 'nowrap',
    }
  },

  separator: {
    ":before": {
      borderRightWidth: '1.5px !important',
      borderRightColor: 'var(--dark-brown) !important'
    },
    ":after": {
      borderRightWidth: '1.5px !important',
      borderRightColor: 'var(--dark-brown) !important'
    }
  },

  origin: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    alignSelf: 'start',
    gap: '1.5rem',
  },
});