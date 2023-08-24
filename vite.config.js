import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port: 3001,
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./node_modules/bootstrap/scss/bootstrap.scss";`, // Importa Bootstrap
      },
    },
  },
});

