import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: {
        edge: '127',
        firefox: '128',
        chrome: '127',
        safari: '17.5',
        ie: '11',
      },
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // For async/await
      modernPolyfills: true, // Adds modern polyfills if needed
    }),
  ],
});
