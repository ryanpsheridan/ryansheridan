/**
 * The design system's own map: what lives at /ds and in what order. The
 * sidebar, the component index, and the overview all read from here.
 */

export interface DsPage {
  slug: string;
  title: string;
  summary: string;
}

export const foundations: DsPage[] = [
  { slug: "color", title: "Color", summary: "Neutrals, links, and status colors, with the contrast of every pairing." },
  { slug: "typography", title: "Typography", summary: "Two families, a size scale, fluid headlines, and the roles they play." },
  { slug: "spacing", title: "Spacing and layout", summary: "The 8px grid, containers, breakpoints, and spacing recipes." },
  { slug: "shape", title: "Shape and elevation", summary: "Radius, borders, shadow, and the named stacking layers." },
  { slug: "motion", title: "Motion", summary: "Durations, easing, and how motion steps aside for reduced-motion users." },
];

export const guidelines: DsPage[] = [
  { slug: "accessibility", title: "Accessibility", summary: "The WCAG 2.2 AA bar every page clears, and how to check it." },
  { slug: "content", title: "Content", summary: "Voice, tone, and the mechanics of writing for the site." },
];

export const components: DsPage[] = [
  { slug: "button", title: "Button", summary: "The main action on a page, or a quieter one beside it." },
  { slug: "icon-button", title: "Icon button", summary: "A round button with only an icon, for compact controls." },
  { slug: "link", title: "Link", summary: "Inline, quiet, and underlined links for moving between pages." },
  { slug: "badge", title: "Badge", summary: "A small mono tag that labels a project type or tool." },
  { slug: "overline", title: "Overline", summary: "An uppercase mono label that names what sits under it." },
  { slug: "breadcrumbs", title: "Breadcrumbs", summary: "Where a page sits in the site, and the way back up." },
  { slug: "text-field", title: "Text field", summary: "Single and multi-line inputs with labels, notes, and errors." },
  { slug: "select", title: "Select", summary: "A native dropdown in the field style." },
  { slug: "checkbox-radio", title: "Checkbox and radio", summary: "Pick any number, or pick one." },
  { slug: "choice-card", title: "Choice card", summary: "A large radio for a choice that changes what comes next." },
  { slug: "accordion", title: "Accordion", summary: "Questions that open in place." },
  { slug: "segmented-control", title: "Segmented control", summary: "Switch between two or three views of the same thing." },
  { slug: "keyboard-key", title: "Keyboard key", summary: "A key or shortcut, written as it looks on a keyboard." },
  { slug: "divider", title: "Divider", summary: "A hairline between sections." },
  { slug: "aside", title: "Aside", summary: "A note set off from the copy around it." },
  { slug: "prose", title: "Prose", summary: "Long-form copy from data, styled without classes." },
  { slug: "media", title: "Media", summary: "Images, animated SVGs, and looping video that never shift the page." },
];

export const patterns: DsPage[] = [
  { slug: "site-chrome", title: "Nav and footer", summary: "The sticky nav, its full-screen menu, and the footer." },
  { slug: "page-header", title: "Page header", summary: "Breadcrumbs, an optional overline, the title, and an intro." },
  { slug: "project-card", title: "Project card", summary: "How a project shows up on the homepage and on /work." },
  { slug: "case-study", title: "Case study blocks", summary: "The content blocks a case study is built from, and how to write one." },
];

export const dsNav = [
  { title: "Get started", base: "/ds", pages: [{ slug: "", title: "Overview", summary: "" }] },
  { title: "Foundations", base: "/ds", pages: foundations },
  { title: "Guidelines", base: "/ds", pages: guidelines },
  { title: "Components", base: "/ds/components", pages: [{ slug: "", title: "All components", summary: "" }, ...components] },
  { title: "Patterns", base: "/ds/patterns", pages: patterns },
];

export const DS_VERSION = "1.0";

/** WCAG relative-luminance contrast between two hex colors. */
export function contrast(a: string, b: string): number {
  const lum = (hex: string) => {
    const [r, g, bl] = [1, 3, 5]
      .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
