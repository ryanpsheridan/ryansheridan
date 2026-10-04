/**
 * Design tokens: the one place every color, size, space, and timing on the
 * site is defined.
 *
 * Layout.astro turns this file into the `:root` custom properties every page
 * reads, and the design system pages at /ds render their tables straight from
 * it. Add or change a token here and both the site and its documentation
 * follow. Never hard-code a value in a page that a token already covers.
 *
 * Spacing, sizing, and layout values sit on an 8px grid. The one half-step,
 * 4px (--space-1), is for tight component internals such as icon gaps.
 */

export interface Token {
  /** Custom property name, without the leading dashes. */
  name: string;
  value: string;
  /** What the token is for, written for designers, developers, and writers alike. */
  description: string;
  /** Kept only so older pages keep working. Points at the token to use instead. */
  deprecated?: string;
}

export interface TokenGroup {
  id: string;
  title: string;
  description: string;
  tokens: Token[];
}

export const colorTokens: TokenGroup[] = [
  {
    id: "color-neutral",
    title: "Neutrals",
    description:
      "The site is almost entirely black on white. Neutrals carry text, surfaces, and every boundary between them.",
    tokens: [
      { name: "color-bg", value: "#ffffff", description: "Page background, and text set on a solid --color-text fill." },
      { name: "color-surface", value: "#f9f9f9", description: "Quiet fill behind thumbnails while they load, and the selected choice card." },
      { name: "color-text", value: "#111111", description: "Primary text, icons, and the fill of primary buttons. 18.9:1 on white." },
      { name: "color-text-muted", value: "#5c5c60", description: "Secondary copy, metadata, and resting quiet links. 6.7:1 on white, so it is safe for long passages." },
      { name: "color-placeholder", value: "#75757b", description: "Placeholder text in fields. 4.6:1 on white, readable without passing for a typed answer." },
      { name: "color-border", value: "#e5e5e5", description: "Hairlines that divide content: rules, card edges, badge outlines. Decorative only." },
      { name: "color-border-strong", value: "#8a8a8f", description: "The edge of anything you can type into or press. 3.4:1 on white, which WCAG asks of control boundaries." },
      { name: "color-inverse-hover", value: "#333333", description: "Hover fill for primary buttons. White on it is 12.6:1." },
      { name: "color-scrim", value: "rgba(0, 0, 0, 0.9)", description: "Backdrop behind the lightbox." },
    ],
  },
  {
    id: "color-link",
    title: "Links and focus",
    description:
      "Blue is reserved for links in running text and for the homepage blueprint. Chrome such as the nav, footer, and buttons stays neutral.",
    tokens: [
      { name: "color-link", value: "#1c4ed8", description: "Links inside running text. 6.7:1 on white." },
      { name: "color-link-hover", value: "#14379b", description: "Link hover and active." },
      { name: "color-link-subtle", value: "#a8bcf1", description: "Resting underline under inline links. Decorative; the link is also told apart by its underline." },
      { name: "color-focus", value: "#111111", description: "Focus ring on every interactive element." },
    ],
  },
  {
    id: "color-status",
    title: "Status",
    description:
      "Each status pairs a text-safe foreground with a tint and a border for fills. The meaning always comes from words or shape as well, never from hue alone.",
    tokens: [
      { name: "color-positive", value: "#17663f", description: "Success text and icons. 6.2:1 on its tint." },
      { name: "color-positive-bg", value: "#eaf4ee", description: "Success fill." },
      { name: "color-positive-border", value: "#bcdcc9", description: "Success outline." },
      { name: "color-caution", value: "#8a5000", description: "Warning text and icons. 5.9:1 on its tint." },
      { name: "color-caution-bg", value: "#fcf3e6", description: "Warning fill." },
      { name: "color-caution-border", value: "#ecd5ad", description: "Warning outline." },
      { name: "color-critical", value: "#a3302a", description: "Error text, icons, and invalid field borders. 7.0:1 on white." },
      { name: "color-critical-bg", value: "#fbeeed", description: "Error fill." },
      { name: "color-critical-border", value: "#eec9c6", description: "Error outline." },
      { name: "color-accent-bg", value: "#eef2fe", description: "Informational fill, in the link blue family." },
      { name: "color-accent-border", value: "#c3d0f6", description: "Informational outline." },
    ],
  },
  {
    id: "color-deprecated",
    title: "Deprecated",
    description: "Older names kept so existing pages keep rendering. Don't use them in new work.",
    tokens: [
      { name: "color-tag-bg", value: "var(--color-surface)", description: "Old name for the surface fill.", deprecated: "color-surface" },
      { name: "color-tag-text", value: "var(--color-text-muted)", description: "Old name for muted text.", deprecated: "color-text-muted" },
    ],
  },
];

export const typographyTokens: TokenGroup[] = [
  {
    id: "font-family",
    title: "Families",
    description:
      "Geist for everything people read. IBM Plex Mono for the things the site says about itself: labels, metadata, counts, and code.",
    tokens: [
      { name: "font-sans", value: '"Geist", "Geist Fallback", -apple-system, system-ui, sans-serif', description: "Headlines, body, buttons, and form fields." },
      { name: "font-mono", value: '"IBM Plex Mono", "Courier New", monospace', description: "Overlines, breadcrumbs, metadata, the logo, and code." },
    ],
  },
  {
    id: "font-weight",
    title: "Weights",
    description: "Light is the house voice. Medium is the only emphasis, so it reads as emphasis.",
    tokens: [
      { name: "weight-light", value: "300", description: "Headlines and body copy." },
      { name: "weight-regular", value: "400", description: "Mono text, choice labels, and accordion questions." },
      { name: "weight-medium", value: "500", description: "Buttons, form labels, and emphasis inside a passage." },
    ],
  },
  {
    id: "font-size",
    title: "Size scale",
    description:
      "A static scale at roughly a 1.25 ratio off a 16px base, for anything that should hold its size across screens.",
    tokens: [
      { name: "text-xs", value: "12px", description: "Overlines, badges, captions, field notes." },
      { name: "text-sm", value: "13px", description: "Breadcrumbs, small buttons, footer links, secondary UI." },
      { name: "text-body", value: "15px", description: "The page default set on <body>: roles, list items, quiet links." },
      { name: "text-base", value: "16px", description: "Running copy, form fields, accordion questions." },
      { name: "text-md", value: "18px", description: "Large buttons, card titles, year headers." },
      { name: "text-lg", value: "20px", description: "Section headings inside a form or FAQ, project row titles." },
      { name: "text-xl", value: "25px", description: "Section headings inside a case study." },
      { name: "text-2xl", value: "32px", description: "Menu overlay links." },
      { name: "text-3xl", value: "40px", description: "Reserved for large callouts." },
      { name: "text-4xl", value: "50px", description: "Reserved for large callouts." },
      { name: "text-5xl", value: "64px", description: "Reserved for large callouts." },
    ],
  },
  {
    id: "font-size-fluid",
    title: "Fluid headlines",
    description:
      "Page titles scale with the viewport between a floor and a ceiling, so a phone and a wide monitor both get a headline that fits.",
    tokens: [
      { name: "text-hero", value: "clamp(2rem, 1.5rem + 2vw, 4rem)", description: "Case study titles. 32 to 64px." },
      { name: "text-display", value: "clamp(2rem, 1.4rem + 2.4vw, 50px)", description: "The homepage statement. 32 to 50px." },
      { name: "text-headline", value: "clamp(32px, 1.7rem + 1.2vw, 52px)", description: "Page titles: About, Contact, Start a project, 404. 32 to 52px." },
      { name: "text-title", value: "clamp(28px, 1.5rem + 1vw, 40px)", description: "Titles on index and utility pages: Work, Resume. 28 to 40px." },
    ],
  },
  {
    id: "line-height",
    title: "Line height",
    description: "Unitless, so they scale with the size they sit on.",
    tokens: [
      { name: "leading-tight", value: "1.25", description: "Headlines of two lines or more." },
      { name: "leading-snug", value: "1.3", description: "Titles in cards and rows." },
      { name: "leading-normal", value: "1.6", description: "UI copy and the page default." },
      { name: "leading-relaxed", value: "1.8", description: "Long-form reading: case studies, intros, bios." },
    ],
  },
  {
    id: "letter-spacing",
    title: "Letter spacing",
    description: "Large light type is pulled in; small uppercase mono is let out.",
    tokens: [
      { name: "tracking-tight", value: "-0.03em", description: "Fluid headlines." },
      { name: "tracking-snug", value: "-0.01em", description: "Titles, buttons, and the logo." },
      { name: "tracking-wide", value: "0.04em", description: "Uppercase overlines." },
    ],
  },
];

export const spacingTokens: TokenGroup[] = [
  {
    id: "space",
    title: "Spacing scale",
    description:
      "Every margin, padding, and gap comes from this scale. Each step is a multiple of 8, apart from the 4px half-step for tight internals.",
    tokens: [
      { name: "space-1", value: "4px", description: "Half-step. Icon to label, title to its subtitle." },
      { name: "space-2", value: "8px", description: "Label to field, badge to badge, breadcrumb gaps." },
      { name: "space-3", value: "16px", description: "Related items: choices in a group, paragraphs, card padding." },
      { name: "space-4", value: "24px", description: "Card padding, the gap between a heading and what it introduces." },
      { name: "space-5", value: "32px", description: "Between fields in a form, between groups in a sidebar." },
      { name: "space-6", value: "48px", description: "Between blocks in an article." },
      { name: "space-7", value: "64px", description: "Between sections of a page." },
      { name: "space-8", value: "96px", description: "Between major regions, and the project rows on the homepage." },
    ],
  },
  {
    id: "layout",
    title: "Layout",
    description: "Container widths and the page frame. All of them on the 8px grid.",
    tokens: [
      { name: "max-width", value: "1136px", description: "The widest any content runs." },
      { name: "content-width", value: "656px", description: "Reading measure for long-form copy and forms." },
      { name: "page-padding", value: "40px", description: "Gutter between the screen edge and content. 24px under 768px." },
      { name: "page-top", value: "80px", description: "From the nav to the first thing on a page." },
      { name: "page-bottom", value: "160px", description: "From the last thing on a page to the footer, on pages that end in a form or call to action." },
      { name: "nav-height", value: "64px", description: "Height of the sticky nav. Sticky elements below it offset by this." },
      { name: "control-sm", value: "40px", description: "Height of small buttons and icon buttons." },
      { name: "control-md", value: "48px", description: "Height of default buttons, text fields, and selects." },
      { name: "control-lg", value: "56px", description: "Height of large buttons for a page's main action." },
    ],
  },
];

export const shapeTokens: TokenGroup[] = [
  {
    id: "radius",
    title: "Radius",
    description: "Images and rules stay square. Things you can press are round; things you type into are softly rounded.",
    tokens: [
      { name: "radius-sm", value: "4px", description: "Badges and keyboard keys." },
      { name: "radius-md", value: "8px", description: "Text fields, text areas, and selects." },
      { name: "radius-lg", value: "12px", description: "Choice cards." },
      { name: "radius-full", value: "999px", description: "Buttons, icon buttons, and segmented controls." },
    ],
  },
  {
    id: "border",
    title: "Border width",
    description: "One hairline weight, and one heavier stroke for focus.",
    tokens: [
      { name: "border-width", value: "1px", description: "Every rule, card edge, and field outline." },
      { name: "focus-width", value: "2px", description: "Focus rings, and the left rule on asides and quotes." },
      { name: "focus-offset", value: "2px", description: "Gap between an element and its focus ring." },
    ],
  },
  {
    id: "elevation",
    title: "Elevation",
    description:
      "The site is flat. Depth is reserved for the one thing that floats over content: the blueprint bar on the homepage.",
    tokens: [
      { name: "shadow-overlay", value: "0 8px 24px rgba(0, 0, 0, 0.12)", description: "Floating bars and popovers." },
    ],
  },
  {
    id: "z-index",
    title: "Layers",
    description: "Named stacking levels, so nothing has to guess a number.",
    tokens: [
      { name: "z-raised", value: "2", description: "Content lifted over a fixed background effect, like the footer over the cursor field." },
      { name: "z-sticky", value: "10", description: "Sticky headers inside a page, like the year bars on /work." },
      { name: "z-overlay", value: "150", description: "The full-screen menu." },
      { name: "z-nav", value: "200", description: "The sticky nav, which stays above the menu so its close button works." },
      { name: "z-modal", value: "1000", description: "The lightbox." },
    ],
  },
];

export const motionTokens: TokenGroup[] = [
  {
    id: "duration",
    title: "Duration",
    description:
      "Short for feedback, longer for things that arrive. Nothing that responds to a click takes longer than 300ms.",
    tokens: [
      { name: "duration-instant", value: "100ms", description: "Press feedback, like a key nudging down." },
      { name: "duration-fast", value: "200ms", description: "Hover and color changes on links, buttons, and fields." },
      { name: "duration-moderate", value: "300ms", description: "Overlays opening and closing: the menu, the lightbox, the blueprint." },
      { name: "duration-slow", value: "400ms", description: "Image zoom on hover." },
      { name: "duration-slower", value: "800ms", description: "Entrances, as content rises into place on load." },
    ],
  },
  {
    id: "easing",
    title: "Easing",
    description: "Two curves. Standard for state changes, emphasized for anything that travels.",
    tokens: [
      { name: "ease-standard", value: "ease", description: "Color, opacity, and border changes." },
      { name: "ease-emphasized", value: "cubic-bezier(0.2, 0.7, 0.2, 1)", description: "Movement: entrances, rolls, slides. Leaves fast and settles slowly." },
    ],
  },
];

export const allTokenGroups: TokenGroup[] = [
  ...colorTokens,
  ...typographyTokens,
  ...spacingTokens,
  ...shapeTokens,
  ...motionTokens,
];

/** Tokens whose value changes at a breakpoint. Media queries can't read custom properties, so the widths live here. */
export const responsiveOverrides: { maxWidth: number; tokens: Record<string, string> }[] = [
  { maxWidth: 768, tokens: { "page-padding": "24px" } },
];

/** Breakpoints. Write media queries with these exact numbers. */
export const breakpoints = [
  { name: "xs", maxWidth: 480, description: "Small phones. Two-column choice groups drop to one." },
  { name: "sm", maxWidth: 640, description: "Phones. Side-by-side layouts stack; the footer stacks." },
  { name: "md", maxWidth: 768, description: "Tablets in portrait. The homepage split stacks, and the page gutter tightens to 24px." },
  { name: "lg", maxWidth: 1024, description: "Small laptops. Case study sidebars move above the article." },
];

/** The `:root` block every page loads. */
export function tokensToCss(): string {
  const decl = (tokens: Record<string, string>) =>
    Object.entries(tokens)
      .map(([name, value]) => `--${name}:${value};`)
      .join("");
  const base = Object.fromEntries(allTokenGroups.flatMap((g) => g.tokens.map((t) => [t.name, t.value])));
  const overrides = responsiveOverrides
    .map((o) => `@media (max-width:${o.maxWidth}px){:root{${decl(o.tokens)}}}`)
    .join("");
  return `:root{${decl(base)}}${overrides}`;
}
