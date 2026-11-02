// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Files in public/ that belong to a `stagingOnly` project, as a path prefix
// inside the build. Production deletes them so they aren't served at a direct
// URL either; staging and branch previews keep them.
const stagingOnlyAssets = ['project-shopping-agent-', 'embeds/shopping-agent-'];

const pruneStagingOnlyAssets = () => ({
  name: 'prune-staging-only-assets',
  hooks: {
    'astro:build:done': ({ dir }) => {
      if (process.env.VERCEL_ENV === 'preview') return;
      const root = fileURLToPath(dir);
      for (const prefix of stagingOnlyAssets) {
        const folder = path.join(root, path.dirname(prefix));
        if (!fs.existsSync(folder)) continue;
        for (const name of fs.readdirSync(folder)) {
          const file = path.join(folder, name);
          if (name.startsWith(path.basename(prefix)) && fs.statSync(file).isFile()) fs.rmSync(file);
        }
      }
    },
  },
});

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
    pruneStagingOnlyAssets(),
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
