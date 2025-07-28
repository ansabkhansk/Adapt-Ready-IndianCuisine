import { makeStyles } from "@fluentui/react-components";

export const useDishSuggesterStyles = makeStyles({
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

  suggestionBox: {
    width: "100%",

    ":focus-visible": {
      outline: "none"
    },

    "> div": {
      border: "1.2px solid var(--dark-brown)",
      "::after": {
        display: "none"
      },
      
      ":hover": {
        border: "1.2px solid var(--dark-brown)",
      },
      
      ":active": {
        border: "1.2px solid var(--dark-brown)",
      },
      
      ":focus-within": {
        border: "1.2px solid var(--dark-brown)",
      },

      ":focus-visible": {
        outline: "none"
      }
    }
  },

  listWrapper: {
    background: "var(--warm-cream)",
    maxHeight: "200px",
    overflowY: "auto",
    textTransform: "capitalize",
  },

  pickItemOption: {

    ":hover": {
      background: "var(--accent-yellow)",
      color: "var(--warm-cream)"
    },

    ":active": {
      background: "var(--accent-yellow)",
      color: "var(--warm-cream)"
    },
    
    ":focus-visible": {
      outline: "none"
    }
  },

  selectedTag: {
    textTransform: "capitalize",
    background: "var(--tag-bg)",
    color: "var(--dark-brown)",

    ":hover": {
      border: "1px solid var(--dark-brown)",
    }
  },

  clearButton: {
    color: "var(--dark-brown)",
    fontSize: "0.9rem",
    ":hover": {
      color: "var(--dark-brown)",
      textDecoration: "underline",
      textUnderlineOffset: "3px"
    }
  },
  
  suggestDishesListContaienr: {
    maxHeight: '150px',
    overflowY: 'auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    flexWrap: 'wrap',
    gap: '0.8rem 1rem',
    textTransform: "capitalize",
  },

  suggestDishItem: {
    cursor: "pointer",
    textOverflow: "ellipsis",
    overflow: "hidden",
    ":hover": {
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      color: "var(--dark-brown)"
    }
  }
});