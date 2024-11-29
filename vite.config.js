    // vite.config.js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      base: '/drexlermora.github.io/',  // No subdirectory, deploy to the root of the GitHub Pages domain
    });
