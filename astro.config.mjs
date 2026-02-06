// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['mulk-30-fwlgd9.cranl.net']
    }
  }
});