import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enable polling
      interval: 100,    // Adjust polling interval if necessary
    },
  },
});
