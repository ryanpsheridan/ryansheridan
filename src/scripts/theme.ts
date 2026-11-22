/**
 * The site theme, shared by the nav icon and the footer switch.
 *
 * The head script in Layout.astro resolves the theme before first paint and
 * keeps `<html data-theme>` current. This module only records a pick and lets
 * each control mirror the result.
 *
 * Picking the theme the system already asks for clears the saved pick, so a
 * visitor who toggles back ends up following their system again rather than
 * being stuck on a manual setting they can't see.
 */

export type Theme = "light" | "dark";

const root = document.documentElement;
const system = matchMedia("(prefers-color-scheme: dark)");

declare global {
  interface Window {
    __applyTheme?: () => void;
  }
}

export const isPinned = () => root.hasAttribute("data-theme-pinned");

export const currentTheme = (): Theme => (root.dataset.theme === "dark" ? "dark" : "light");

export function setTheme(theme: Theme) {
  const systemTheme: Theme = system.matches ? "dark" : "light";
  try {
    if (theme === systemTheme) localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {
    // Storage blocked (private mode, site data off): the switch still works for this page.
  }
  // Hold every transition for one frame, so buttons and links don't each fade
  // to the new colors at their own speed.
  root.classList.add("theme-switching");
  if (window.__applyTheme) window.__applyTheme();
  if (root.dataset.theme !== theme) root.dataset.theme = theme;
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
}

export const toggleTheme = () => setTheme(currentTheme() === "dark" ? "light" : "dark");

/** Calls `fn` now and whenever the theme changes, from any source. */
export function onThemeChange(fn: (theme: Theme) => void) {
  fn(currentTheme());
  new MutationObserver(() => fn(currentTheme())).observe(root, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
}
