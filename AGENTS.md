## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Animated assets

Every animated asset in `public/` must loop forever. This is the default for
all current and future animated SVGs, with no exceptions. Verify with:

```
npm run check:animations
```

Rules the check enforces:

- **Animated SVGs.** Every CSS animation resolves to `infinite`, either in the
  shorthand (`animation:name 8s ease infinite`) or via
  `animation-iteration-count:infinite` on the shared helper class that the
  per-element `animation-name` rules hang off. Every SMIL tag carries
  `repeatCount="indefinite"`. No element references undefined keyframes.
- **Animated SVGs also need a `prefers-reduced-motion:reduce` guard** that
  disables the animation and leaves the artwork in a readable resting state.
- **Animated GIFs.** Must carry a `NETSCAPE2.0` block with a loop count of `0`.

When removing an animation from an existing SVG, freeze the element at a frame
the animation actually held rather than letting it fall back to its base
attribute value, which is often a degenerate state such as an empty progress
bar. Delete the orphaned `@keyframes` in the same pass.

## Search indexing

Google does not pick up changes on its own schedule fast enough, so Ryan
requests indexing by hand in Google Search Console (URL Inspection, then
"Request indexing"). There is no API for this on a normal site, so Claude
cannot do it and must not claim to have done it.

Whenever a change ships that affects what Google shows, end the task with a
"Request indexing" note listing each full URL (`https://ryansheridan.studio/...`)
that needs it. That covers:

- A new page that is indexable (no `noindex`, not filtered out of the sitemap
  in `astro.config.mjs`).
- A page that moves to a new URL. List the new URL, and note that the old one
  now redirects.
- A page that goes from `noindex` to indexable.
- A big update to an indexable page: a rewritten title, description, or
  heading, substantially new copy, or new structured data.

Also say whether the sitemap changed (a page added, removed, or renamed). If it
did, remind Ryan to resubmit `https://ryansheridan.studio/sitemap-index.xml` in
Search Console under Sitemaps.

Skip the note for small fixes (typos, styling, spacing) and for pages that stay
`noindex`, such as `/proposals` and the field experiments.
