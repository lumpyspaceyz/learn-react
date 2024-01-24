import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // host: 'localhost',  // default: 'localhost'
    port: 3000,         // default: 5173
    open: true,         // default: false
  }
});
