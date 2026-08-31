import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://stupeklubb-oppdrag.vercel.app',
  integrations: [tailwind()],
});
