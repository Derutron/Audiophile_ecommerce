import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  base: '/Audiophile_ecommerce/', // Assuming 'derutron' is your repository name
  build: {
    rollupOptions: {
      external: ["/dist/assets/index--iCSnXwO.js"],
    },
  },
});
