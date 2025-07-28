// styles.ts
import { makeStyles } from "@fluentui/react-components";

export const useDishesStyles = makeStyles({
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

  ingredients: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },

  tableContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid var(--dark-brown)",
    borderRadius: "10px",
    overflow: "hidden",
  },

  tableHeader: {
    flex: '0 0 auto',
  },

  tableBodyWrapper: {
    flex: '1 1 auto',
    overflowY: 'auto',
    "::-webkit-scrollbar": {
      display: 'none'
    }
  },

  tableRow: {
    background: "var(--text-light)",
    borderBottom: "1px solid var(--dark-brown)",
  },
  
  tableHeading: {
    fontSize: "1.1rem",
    fontWeight: "600",
    padding: "0.5rem 1rem",
  },

  tableBodyRow: {
    cursor: "pointer",
  },

  sortable: {
    cursor: "pointer",
  },
  
  tableBody: {
    padding: "0.5rem 1rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  filterWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem",
    width: "100%",
    flexWrap: "wrap",

    "> div": {
      background: "var(--text-light)",
      padding: "0.2rem 0.5rem",
    }
  },

  dropdownList: {
    background: "var(--text-light)",
    maxHeight: "300px !important",
    overflowY: "auto",
  },

  paginationWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0.5rem",
    alignSelf: "flex-end",
    alignItems: "center",
    gap: "1rem",
    "> button": {
      background: "var(--text-light)",
      width: "auto",
      height: "100%",
      aspectRatio: "1/0.9",
      minWidth: "auto",
      ":not(:disabled):hover": {
        outline: "1.5px solid var(--dark-brown) !important",
      },
      ":disabled": {
        background: "#f0f0f0",
        color: "var(--dark-brown)",
      },
      ":not(:disabled):focus-visible": {
        outline: "1.5px solid var(--dark-brown) !important",
      },
      ":not(:disabled):focus": {
        outline: "1.5px solid var(--dark-brown) !important",
      },
      "> svg": {
        width: "1.5em",
        height: "1.5em",
      }
    },
  }
});
