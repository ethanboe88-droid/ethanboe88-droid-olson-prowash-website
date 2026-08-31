import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` to the production domain before deploying.
// Netlify will also expose this via the `URL` env var if you prefer to wire it dynamically.
export default defineConfig({
  site: 'https://olsonprowash.com',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({
      // We manage the base reset/layer styles ourselves in src/styles/global.css
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !/\/(404|thanks)\/?$/.test(page),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Allow remote images if you later swap placeholders for a CDN/DAM.
    remotePatterns: [{ protocol: 'https' }],
  },
});
