import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F',
      light: '#FF6659',
      dark: '#9A0007',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF8F00',
      light: '#FFC046',
      dark: '#C56000',
      contrastText: '#000000',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
      dark: '#1A1A1A',
      warm: '#FFF8E1',
    },
    text: {
      primary: '#1A1A1A',
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
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
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
      fontWeight: 600,
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
