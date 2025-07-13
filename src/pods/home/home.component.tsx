
import React from 'react';
import { Typography, Box, useTheme, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


export const HomeComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 72px)',
        background: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Efecto visual de fondo tipo glow/blur */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 60, md: 80 },
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 320, md: 600 },
          height: { xs: 180, md: 320 },
          background: 'linear-gradient(120deg, #6366F1 0%, #A78BFA 100%)',
          opacity: 0.18,
          filter: 'blur(60px)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      {/* Presentación principal */}
      <Box sx={{ zIndex: 1, mt: { xs: 2, md: 6 }, mb: 4, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(90deg, #4F46E5 30%, #A78BFA 70%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            letterSpacing: 1,
            mb: 2,
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            lineHeight: 1.1,
            textShadow: '0 2px 16px rgba(124,58,237,0.10)',
          }}
        >
          Hello! I'm Noelia,web developer
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 400,
            mb: 2,
            fontSize: { xs: '1.1rem', md: '1.5rem' },
          }}
        >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center" sx={{ mt: 4, zIndex: 1 }}>
        <Button
          component={RouterLink}
          to="/projects"
          size="large"
          variant="contained"
          color="primary"
          sx={{
            px: 5,
            py: 2,
            fontWeight: 700,
            fontSize: { xs: '1rem', md: '1.2rem' },
            borderRadius: 8,
            boxShadow: '0 2px 16px 0 rgba(79,70,229,0.10)',
          }}
        >
          Practices
        </Button>
        <Button
          component={RouterLink}
          to="/about-me"
          size="large"
          variant="outlined"
          color="primary"
          sx={{
            px: 5,
            py: 2,
            fontWeight: 700,
            fontSize: { xs: '1rem', md: '1.2rem' },
            borderRadius: 8,
            borderWidth: 2,
          }}
        >
          About me
        </Button>
      </Stack>
    </Box>
  );
};
