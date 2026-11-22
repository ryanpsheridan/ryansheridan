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
  /** Value on the dark theme, for tokens that change with it. */
  dark?: string;
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
      "Black on white by day, near-white on near-black by night. Neutrals carry text, surfaces, and every boundary between them.",
    tokens: [
      { name: "color-bg", value: "#ffffff", dark: "#0b0b0b", description: "Page background, and text set on a solid --color-text fill." },
      { name: "color-surface", value: "#f9f9f9", dark: "#171717", description: "Quiet fill behind thumbnails while they load, and the selected choice card." },
      { name: "color-text", value: "#111111", dark: "#ffffff", description: "Headings, primary text, icons, and the fill of primary buttons. Pure white on dark, so headings stand above the copy under them." },
      { name: "color-text-body", value: "#111111", dark: "#c4c4c8", description: "Running copy: paragraphs and lists. The same ink as --color-text on light; a step down on dark, where full white across a long passage glares and flattens the hierarchy." },
      { name: "color-text-muted", value: "#5c5c60", dark: "#a3a3a8", description: "Secondary copy, metadata, and resting quiet links. Safe for long passages." },
      { name: "color-text-quiet", value: "#75757b", dark: "#7a7a80", description: "The words in a large headline that hold still while another word changes. Clears AA against the page and still reads as different from --color-text. For display sizes only; use --color-text-muted for body copy." },
      { name: "color-placeholder", value: "#75757b", dark: "#7a7a80", description: "Placeholder text in fields. Readable without passing for a typed answer." },
      { name: "color-border", value: "#e5e5e5", dark: "#262626", description: "Hairlines that divide content: rules, card edges, badge outlines. Decorative only." },
      { name: "color-border-strong", value: "#8a8a8f", dark: "#6f6f75", description: "The edge of anything you can type into or press. Holds the 3:1 WCAG asks of control boundaries." },
      { name: "color-inverse-hover", value: "#333333", dark: "#c4c4c4", description: "Hover fill for primary buttons." },
      { name: "color-media-edge", value: "transparent", dark: "#2a2a2a", description: "Hairline drawn inside images and embeds on the dark theme, so a light screenshot reads as a framed object rather than a hole in the page. Invisible on light." },
      { name: "color-scrim", value: "rgba(0, 0, 0, 0.9)", dark: "rgba(0, 0, 0, 0.92)", description: "Backdrop behind the lightbox." },
    ],
  },
  {
    id: "color-link",
    title: "Links and focus",
    description:
      "Blue is reserved for links in running text and for the blueprint. Chrome such as the nav, footer, and buttons stays neutral.",
    tokens: [
      { name: "color-link", value: "#1c4ed8", dark: "#7ea2ff", description: "Links inside running text." },
      { name: "color-link-hover", value: "#14379b", dark: "#a9c0ff", description: "Link hover and active." },
      { name: "color-link-subtle", value: "#a8bcf1", dark: "#33477a", description: "Resting underline under inline links. Decorative; the link is also told apart by its underline." },
      { name: "color-focus", value: "#111111", dark: "#ffffff", description: "Focus ring on every interactive element." },
      { name: "color-blueprint", value: "#1c4ed8", dark: "#2f5fe0", description: "The blueprint overlay: spec lines, tags, and its floating bar. A saturated blue in both themes so white type holds on it." },
      { name: "color-on-blueprint", value: "#ffffff", dark: "#ffffff", description: "Text and icons set on a --color-blueprint fill." },
    ],
  },
  {
    id: "color-status",
    title: "Status",
    description:
      "Each status pairs a text-safe foreground with a tint and a border for fills. The meaning always comes from words or shape as well, never from hue alone.",
    tokens: [
      { name: "color-positive", value: "#17663f", dark: "#6dd39b", description: "Success text and icons." },
      { name: "color-positive-bg", value: "#eaf4ee", dark: "#0e2218", description: "Success fill." },
      { name: "color-positive-border", value: "#bcdcc9", dark: "#1f4a33", description: "Success outline." },
      { name: "color-caution", value: "#8a5000", dark: "#f2b45c", description: "Warning text and icons." },
      { name: "color-caution-bg", value: "#fcf3e6", dark: "#291d0a", description: "Warning fill." },
      { name: "color-caution-border", value: "#ecd5ad", dark: "#5a4014", description: "Warning outline." },
      { name: "color-critical", value: "#a3302a", dark: "#ff8f85", description: "Error text, icons, and invalid field borders." },
      { name: "color-critical-bg", value: "#fbeeed", dark: "#2d1211", description: "Error fill." },
      { name: "color-critical-border", value: "#eec9c6", dark: "#5c2723", description: "Error outline." },
      { name: "color-accent-bg", value: "#eef2fe", dark: "#111a33", description: "Informational fill, in the link blue family." },
      { name: "color-accent-border", value: "#c3d0f6", dark: "#263a6e", description: "Informational outline." },
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
    id: "font-size-heading",
    title: "Display and headings",
    description:
      "A Major Third scale (1.250) off a 16px base, straight from typescale.com. Display 1 and Heading 1 to 2 scale with the viewport between a floor and the scale's value; the rest hold their size.",
    tokens: [
      { name: "text-display-1", value: "clamp(2rem, 1.5rem + 2vw, 3.815rem)", description: "Case study titles. 32 to 61px." },
      { name: "text-h1", value: "clamp(2rem, 1.6rem + 1.6vw, 3.052rem)", description: "The homepage statement and page titles: About, Contact, Start a project, 404. 32 to 49px." },
      { name: "text-h2", value: "clamp(1.75rem, 1.5rem + 1vw, 2.441rem)", description: "Titles on index and utility pages (Work, Resume) and confirmation messages. 28 to 39px." },
      { name: "text-h3", value: "1.953rem", description: "31px. Menu overlay links." },
      { name: "text-h4", value: "1.563rem", description: "25px. Section headings inside a case study." },
      { name: "text-h5", value: "1.25rem", description: "20px. Form steps, the FAQ heading, project titles, headings inside prose." },
    ],
  },
  {
    id: "font-size-body",
    title: "Body sizes",
    description:
      "Four sizes for everything that isn't a heading, on a 2px step so text boxes land cleanly on the 4px grid.",
    tokens: [
      { name: "text-l", value: "18px", description: "Type L. Leads under a headline, large buttons, card titles, year headers." },
      { name: "text-m", value: "16px", description: "Type M. Running copy, form fields, accordion questions. The page default." },
      { name: "text-s", value: "14px", description: "Type S. Breadcrumbs, buttons, labels, footer links, the logo, secondary copy." },
      { name: "text-xs", value: "12px", description: "Type XS. Overlines, badges, captions, field notes." },
    ],
  },
  {
    id: "font-size-deprecated",
    title: "Deprecated sizes",
    description:
      "The scale before 1.0, kept at its old values so the proposals and field experiments render exactly as they did. Don't use them in new work.",
    tokens: [
      { name: "text-sm", value: "13px", description: "Old small size.", deprecated: "text-s" },
      { name: "text-base", value: "16px", description: "Old base size.", deprecated: "text-m" },
      { name: "text-md", value: "18px", description: "Old medium size.", deprecated: "text-l" },
      { name: "text-lg", value: "20px", description: "Old large size.", deprecated: "text-h5" },
      { name: "text-xl", value: "25px", description: "Old extra large size.", deprecated: "text-h4" },
      { name: "text-2xl", value: "32px", description: "Old 2XL size.", deprecated: "text-h3" },
      { name: "text-3xl", value: "40px", description: "Old 3XL size.", deprecated: "text-h2" },
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
    description: "Images and rules stay square, except project thumbnails, which get a hint of a corner. Things you can press are round; things you type into are softly rounded.",
    tokens: [
      { name: "radius-xs", value: "2px", description: "Project thumbnails." },
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
      "The site is flat. Depth is reserved for the one thing that floats over content: the blueprint bar.",
    tokens: [
      { name: "shadow-overlay", value: "0 8px 24px rgba(0, 0, 0, 0.12)", dark: "0 8px 24px rgba(0, 0, 0, 0.6)", description: "Floating bars and popovers. Deeper on dark, where a light shadow vanishes." },
    ],
  },
  {
    id: "z-index",
    title: "Layers",
    description: "Named stacking levels, so nothing has to guess a number.",
    tokens: [
      { name: "z-raised", value: "2", description: "Content lifted over a fixed background effect, like the footer over the cursor field." },
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

/**
 * The `:root` block every page loads.
 *
 * Light is the base and the default. The dark values apply once a visitor
 * picks dark with a theme toggle; the head script in Layout.astro reads that
 * pick into `<html data-theme>` before first paint. They sit inside `screen`,
 * so printing always comes out black on white.
 */
export function tokensToCss(): string {
  const decl = (tokens: Record<string, string>) =>
    Object.entries(tokens)
      .map(([name, value]) => `--${name}:${value};`)
      .join("");
  const all = allTokenGroups.flatMap((g) => g.tokens);
  const base = Object.fromEntries(all.map((t) => [t.name, t.value]));
  const dark = decl(Object.fromEntries(all.filter((t) => t.dark).map((t) => [t.name, t.dark!])));
  const overrides = responsiveOverrides
    .map((o) => `@media (max-width:${o.maxWidth}px){:root{${decl(o.tokens)}}}`)
    .join("");
  return (
    `:root{color-scheme:light;${decl(base)}}` +
    `@media screen{:root[data-theme=dark]{color-scheme:dark;${dark}}}` +
    overrides
  );
}
