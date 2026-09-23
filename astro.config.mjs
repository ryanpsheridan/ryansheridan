// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryansheridan.studio',
  // Every internal link is written without a trailing slash, and vercel.json
  // redirects /about/ to /about, so the sitemap and canonicals match that.
  trailingSlash: 'never',
  // These build as meta-refresh pages, which is what `astro dev` and preview
  // use. In production vercel.json answers the same paths first with a real
  // 308, which is the signal search engines treat as a move.
  redirects: {
    // The Ohio Golf Club review was shared from the site root before the
    // /proposals branch existed, so the old link keeps working.
    '/ohio-golf-club': '/proposals/ohio-golf-club',
    '/project-questionnaire': '/start-a-project',
  },
  integrations: [
    sitemap({
      // Anything that carries noindex stays out of the sitemap too, so the
      // two never disagree about what belongs in search. /proposals covers
      // the index and every client proposal under it. The field experiments
      // are linked directly rather than found through search.
      filter: (page) =>
        ![
          '/apartment',
          '/golftrip',
          '/proposals',
          '/ohio-golf-club',
          '/cursor-field',
          '/maze-field',
          '/homepage-variations',
        ].some((path) => page.includes(path)),
    }),
  ]
});
