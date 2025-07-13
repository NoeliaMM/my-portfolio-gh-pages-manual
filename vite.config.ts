import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@pods': path.resolve(__dirname, 'src/pods'),
        '@mui/styled-engine': '@mui/styled-engine', 
    },
     extensions: ['.js', '.ts', '.jsx', '.tsx'], 
    
  },


});
