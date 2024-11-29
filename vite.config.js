import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],  // Ensure this plugin is enabled
  base: '/',  // This is for GitHub Pages or root-level base paths
});
