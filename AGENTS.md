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
