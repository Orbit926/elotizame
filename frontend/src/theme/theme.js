import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F4C542',
      light: '#FFD970',
      dark: '#C9A235',
      contrastText: '#0D0D0D',
    },
    secondary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
      dark: '#0D0D0D',
      warm: '#FFF8E1',
    },
    text: {
      primary: '#0D0D0D',
      secondary: '#555555',
      light: '#FFFFFF',
    },
    success: {
      main: '#25D366',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '3.5rem',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h2: {
      fontWeight: 800,
      fontSize: '2.5rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 28px',
          fontSize: '1rem',
        },
        sizeLarge: {
          padding: '14px 36px',
          fontSize: '1.1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
  },
});

export default theme;
