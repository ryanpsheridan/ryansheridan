// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryansheridan.studio',
  integrations: [
    sitemap({
      // Anything that carries noindex stays out of the sitemap too, so the
      // two never disagree about what belongs in search.
      filter: (page) =>
        ![
          '/ohio',
          '/apartment',
          '/golftrip',
          '/cursor-field',
          '/maze-field',
          '/homepage-variations',
        ].some((path) => page.includes(path)),
    }),
  ]
});