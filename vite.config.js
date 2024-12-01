import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.js', // Adjust this to your entry file path
    },
  },
});