import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Bundled JS/CSS go to /static so they never mix with the images in public/assets.
  build: { assetsDir: 'static' },
});
