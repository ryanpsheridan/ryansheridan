// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryansheridan.studio',
  redirects: {
    // The Ohio Golf Club review was shared from the site root before the
    // /proposals branch existed, so the old link keeps working.
    '/ohio-golf-club': '/proposals/ohio-golf-club',
  },
  integrations: [
    sitemap({
      // Anything that carries noindex stays out of the sitemap too, so the
      // two never disagree about what belongs in search. /proposals covers
      // the index and every client proposal under it. The field experiments
      // and the client intake form are linked directly rather than found
      // through search.
      filter: (page) =>
        ![
          '/apartment',
          '/golftrip',
          '/proposals',
          '/ohio-golf-club',
          '/cursor-field',
          '/maze-field',
          '/homepage-variations',
          '/project-questionnaire',
        ].some((path) => page.includes(path)),
    }),
  ]
});
