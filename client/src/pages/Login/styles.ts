// styles.ts
import { makeStyles } from "@fluentui/react-components";

export const useLoginStyles = makeStyles({
  wrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    padding: "1rem",
    color: "var(--dark-brown)",
    boxSizing: "border-box",
    userSelect: "none"
  },

  card: {
    background: "var(--warm-cream)",
    borderRadius: "20px",
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    border: "1px solid rgba(255, 255, 255, 0.2)"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "1rem"
  },

  passwordToggle: {
    cursor: "pointer"
  },

  submitBtn: {
    // marginTop: "1rem"
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },

  inputNotes: {
    color: "var(--dark-brown)",
    fontSize: "0.65rem",
    lineHeight: "1rem"
  },

  col2: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.8rem"
  },

  forgotPass: {
    cursor: "pointer",
    textDecoration: "none",
    color: "var(--dark-brown)",
    textUnderlineOffset: "5px",
    ":hover": {
      color: "var(--primary-red)",
      textDecoration: "underline",
    },
  },

  registerText: {
    textAlign: "center",
    color: "var(--colorNeutralForeground3)",
    "> span" : {
      color: "var(--dark-brown)",
      cursor: "pointer",
      ":hover" : {
        color: "var(--primary-red)",
        textDecoration: "underline",
        textUnderlineOffset: "3px"
      }
    }
  }
});
