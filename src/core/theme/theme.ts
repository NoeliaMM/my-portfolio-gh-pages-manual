import { createTheme } from '@mui/material/styles';

// Paleta moderna: azul, violeta, gris y acentos
const lightPalette = {
  mode: 'light' as const,
  primary: {
    main: '#4F46E5', // Indigo 600
    contrastText: '#fff',
  },
  secondary: {
    main: '#7C3AED', // Violeta 600
    contrastText: '#fff',
  },
  background: {
    default: '#F3F4F6', // gris claro
    paper: '#fff',
  },
  text: {
    primary: '#1E293B', // gris oscuro
    secondary: '#64748B',
  },
};

const darkPalette = {
  mode: 'dark' as const,
  primary: {
    main: '#6366F1', // Indigo 500
    contrastText: '#fff',
  },
  secondary: {
    main: '#A78BFA', // Violeta claro
    contrastText: '#1E293B',
  },
  background: {
    default: '#18181B', // gris muy oscuro
    paper: '#27272A',
  },
  text: {
    primary: '#F3F4F6',
    secondary: '#A1A1AA',
  },
};

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: {
      fontFamily: [
        'Poppins',
        'Montserrat',
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      body1: { fontWeight: 400 },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 12,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow: mode === 'light'
              ? '0 4px 24px 0 rgba(79,70,229,0.08)'
              : '0 4px 24px 0 rgba(124,58,237,0.12)',
          },
        },
      },
    },
  });