// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build
export default defineConfig({
  site: 'https://nabfinancial.example',
  integrations: [
    icon({
      // Pull glyphs from the Lucide iconify set and inline them at build time.
      iconDir: 'src/icons',
    }),
  ],
});
