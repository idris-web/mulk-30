// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://idris-web.github.io' : process.env.AMPLIFY_URL || 'http://localhost:4321',
  base: isGitHubPages ? '/mulk-30' : '/',
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: true
    },
    server: {
      allowedHosts: true
    }
  }
});