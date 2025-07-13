import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export const AboutMeComponent: React.FC = () => (
  <Box>
    <Typography variant="h4" gutterBottom>About me</Typography>
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography>
       Add text (Soon ...)
      </Typography>
    </Paper>
  </Box>
);