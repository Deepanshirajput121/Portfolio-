import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Build directory
  },
  // Optionally, if you have a custom folder for index.html, specify root
  root: './', // This could be set as per your setup
});
