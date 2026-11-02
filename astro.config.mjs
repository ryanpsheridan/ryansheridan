// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { rmSync } from 'node:fs';

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
    // The Ohio Golf Club proposal was first shared as /proposals/ohio-golf-club
    // before proposals moved to the site root, so that link keeps working.
    '/proposals/ohio-golf-club': '/ohio-golf-club',
    '/proposals/ohio-golf-club/notes': '/ohio-golf-club/notes',
    '/project-questionnaire': '/start-a-project',
    // Invoices first lived under /invoice/.
    '/invoice/template': '/invoice-template',
    '/invoice/ohio-golf-club': '/invoice-ohio-golf-club-1',
    // Renamed from the first Claude Design write-up when it was rewritten
    // around the three brand systems.
    '/work/claude-design-consistency-first-design-second': '/work/brand-systems-claude-design',
  },
  integrations: [
    {
      // Projects marked `previewOnly` in src/data/projects.ts build no page on
      // production, but their images and embeds sit in public/ and would still
      // ship. Strip them from the production build. Delete this with the flag.
      name: 'strip-preview-only-files',
      hooks: {
        'astro:build:done': ({ dir }) => {
          if (process.env.VERCEL_ENV !== 'production') return;
          for (const file of [
            ...['featured', 'og', 'proto-picks', 'proto-order', 'proto-colors', 'proto-sentiment'].map((n) => `project-shopping-agent-${n}.${n === 'og' ? 'jpg' : 'webp'}`),
            ...['product-picks', 'order-status', 'brand-colors', 'sentiment'].map((n) => `project-shopping-agent-${n}.svg`),
            ...['picks', 'order', 'colors', 'sentiment'].map((n) => `embeds/shopping-agent-${n}.html`),
          ]) {
            rmSync(new URL(file, dir), { force: true });
          }
        },
      },
    },
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
