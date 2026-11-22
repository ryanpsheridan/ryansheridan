/**
 * The site theme, shared by the nav icon and the footer switch.
 *
 * The head script in Layout.astro resolves the theme before first paint and
 * keeps `<html data-theme>` current. This module only records a pick and lets
 * each control mirror the result.
 *
 * Light is the default, so only a dark pick is stored. Toggling back to
 * light clears it.
 */

export type Theme = "light" | "dark";

const root = document.documentElement;

declare global {
  interface Window {
    __applyTheme?: () => void;
  }
}

export const isPinned = () => root.hasAttribute("data-theme-pinned");

export const currentTheme = (): Theme => (root.dataset.theme === "dark" ? "dark" : "light");

function applyTheme(theme: Theme) {
  // Hold every CSS transition while the colors flip, so buttons and links
  // don't each fade to the new palette at their own speed.
  root.classList.add("theme-switching");
  if (window.__applyTheme) window.__applyTheme();
  if (root.dataset.theme !== theme) root.dataset.theme = theme;
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
}

/**
 * Switch the theme. Given the control that was pressed, the change plays as a
 * circle on that control (View Transitions API): dark grows out of it over
 * the light page, and going back, the dark page shrinks into it to uncover
 * light. Anyone who asks for less motion, or a browser without the API,
 * gets an instant swap.
 */
export function setTheme(theme: Theme, from?: Element) {
  try {
    if (theme === "light") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {
    // Storage blocked (private mode, site data off): the switch still works for this page.
  }

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!from || reduce || !document.startViewTransition) {
    applyTheme(theme);
    return;
  }

  const box = from.getBoundingClientRect();
  const x = box.left + box.width / 2;
  const y = box.top + box.height / 2;
  // Far enough to cover the corner of the screen furthest from the button.
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const small = `circle(0px at ${x}px ${y}px)`;
  const full = `circle(${r}px at ${x}px ${y}px)`;
  const toDark = theme === "dark";

  // Going to light, the old (dark) snapshot has to sit on top so it can
  // shrink away; global.css reads this class to restack the two.
  root.classList.toggle("theme-to-light", !toDark);
  const transition = document.startViewTransition(() => applyTheme(theme));
  transition.ready
    .then(() => {
      root.animate(
        { clipPath: toDark ? [small, full] : [full, small] },
        {
          duration: 500,
          easing: toDark ? "cubic-bezier(0.2, 0.7, 0.2, 1)" : "cubic-bezier(0.8, 0, 0.8, 0.3)",
          fill: "forwards",
          pseudoElement: toDark ? "::view-transition-new(root)" : "::view-transition-old(root)",
        },
      );
    })
    .catch(() => {});
  transition.finished.finally(() => root.classList.remove("theme-to-light"));
}

export const toggleTheme = (from?: Element) => setTheme(currentTheme() === "dark" ? "light" : "dark", from);

/** Calls `fn` now and whenever the theme changes, from any source. */
export function onThemeChange(fn: (theme: Theme) => void) {
  fn(currentTheme());
  new MutationObserver(() => fn(currentTheme())).observe(root, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}
