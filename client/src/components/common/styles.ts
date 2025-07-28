import { makeStyles } from "@fluentui/react-components";

export const userHeaderStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    padding: '0 2rem',
    backgroundColor: 'var(--warm-cream)',
    boxShadow: '0 2px 4px rgba(97, 97, 97, 0.6)',
    gap: '16px',
  },
  logo: {
    width: '40px',
    height: '40px',
    cursor: 'pointer',

    "> a" : {
      width: '100%',
      height: '100%',
      display: 'flex',
    }
  },
  searchWrapper: {
    flexGrow: 1,
    maxWidth: '500px',
    position: 'relative',
    zIndex: 1,

    "> span": {
      width: '100%',
      backgroundColor: 'var(--text-light)',
    },
  },

  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 500,
    color: 'var(--dark-brown)',
    fontSize: '1.1rem',
    ':hover': {
      textDecoration: 'underline',
      color: 'var(--primary-red)',
      textUnderlineOffset: '3px'
    },
  },

  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    
    "> span": {
      fontSize: '1.1rem',
      transition: 'all 0.2s ease-in-out',
      ":hover": {
        boxShadow: '0 0 4px rgba(97, 97, 97, 0.6)',
      }
    },

    ":focus-visible": {
      outline: "none"
    }
  },

  menuPopover: {
    backgroundColor: 'var(--warm-cream)',
    boxShadow: '0 2px 4px rgba(97, 97, 97, 0.6)',
    maxHeight: '300px',
    overflowY: 'auto',

    "> div .menuItems": {
      color: 'var(--dark-brown)',
      fontSize: '1rem',

      ":hover": {
        backgroundColor: 'var(--primary-red)',
        color: 'var(--warm-cream)',
        
        "> span": {
          color: 'var(--warm-cream) !important',
        }
      },
    },
  },

});