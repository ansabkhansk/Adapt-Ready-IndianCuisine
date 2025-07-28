import { makeStyles } from "@fluentui/react-components";

export const useViewUserStyles = makeStyles({
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
    width: "calc(100% - 2rem)",
    height: "calc(100% - 2rem)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    paddingBottom: "1rem"
  },
});