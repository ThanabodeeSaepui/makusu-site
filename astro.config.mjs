// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // site: 'https://thanabodeesaepui.github.io/',
  // base: 'makusu-site',
  integrations: [tailwind(), solidJs()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});