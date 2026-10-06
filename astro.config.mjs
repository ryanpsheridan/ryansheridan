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
    // Proposals live at the site root so clients' saved links stay short and
    // stable. The old /proposals/<slug> URLs keep working.
    '/proposals/ohio-golf-club': '/ohio-golf-club',
    '/proposals/ohio-golf-club/notes': '/ohio-golf-club/notes',
    '/project-questionnaire': '/start-a-project',
    // Renamed from the first Claude Design write-up when it was rewritten
    // around the three brand systems.
    '/work/claude-design-consistency-first-design-second': '/work/brand-systems-claude-design',
  },
  integrations: [
    sitemap({
      // Only the pages that are meant to show up in search are listed. Every
      // other page carries noindex, so an allowlist keeps the sitemap and the
      // robots tags from disagreeing as new pages get added.
      filter: (page) =>
        ['/', '/contact', '/start-a-project'].includes(
          new URL(page).pathname.replace(/\/$/, '') || '/',
        ),
    }),
  ]
});
