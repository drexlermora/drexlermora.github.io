import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/drexlermora.github.io/',  // Set this to the GitHub repo name (case-sensitive)
});