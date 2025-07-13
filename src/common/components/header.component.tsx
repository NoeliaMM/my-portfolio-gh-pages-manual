import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../../core/theme/theme.context';

export const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { mode, toggleMode } = themeContext;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: mode === 'light'
            ? 'rgba(255,255,255,0.95)'
            : 'rgba(24,24,27,0.95)',
          boxShadow: '0 2px 12px 0 rgba(79,70,229,0.10)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid',
          borderColor: mode === 'light' ? '#E0E7EF' : '#27272A',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 72 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              color: mode === 'light' ? '#4F46E5' : '#A78BFA',
              textShadow: mode === 'light' ? '0 1px 2px #fff' : '0 1px 2px #18181B',
            }}
          >
            My Portfolio
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        
            {/* <Button color="inherit">Proyectos</Button> */}
            <IconButton onClick={toggleMode} sx={{ ml: 2 }}>
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Toolbar vacío para compensar el espacio del header fijo */}
      <Toolbar sx={{ minHeight: 72, background: 'transparent' }} />
    </>
  );
};
