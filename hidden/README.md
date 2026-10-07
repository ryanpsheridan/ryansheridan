# Hidden pages

Unpublished but not deleted. Nothing here is served.

## Ohio Golf Club (`/ohio-golf-club`, `/ohio-golf-club/notes`)

To publish it again:

1. `git mv src/pages/_ohio-golf-club.astro src/pages/ohio-golf-club.astro`
2. `git mv src/pages/_ohio-golf-club src/pages/ohio-golf-club`
3. `git mv hidden/ohio-golf-club public/ohio-golf-club`
4. Remove `hidden: true` from the entry in `src/data/proposals.ts`.
