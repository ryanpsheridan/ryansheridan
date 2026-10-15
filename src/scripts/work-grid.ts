/**
 * Shared behavior for the /work grids: show the newest `cap` projects that
 * match the current type, tuck the rest behind "Go further back", and let
 * newly shown cards rise into place.
 */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const plural = (n: number) => `${n} ${n === 1 ? "project" : "projects"}`;

export function initWorkGrid(root: HTMLElement, cap: number) {
  const cards = [...root.querySelectorAll<HTMLElement>(".work-card")];
  const further = root.querySelector<HTMLElement>("[data-further]");
  const button = root.querySelector<HTMLButtonElement>("[data-further-button]");
  const countEl = root.querySelector<HTMLElement>("[data-further-count]");
  const rangeEl = root.querySelector<HTMLElement>("[data-further-range]");

  let tag = "";
  let expanded = false;

  function render(animate: boolean) {
    const matches = cards.filter((c) => !tag || (c.dataset.tags ?? "").split("|").includes(tag));
    const shown = expanded ? matches : matches.slice(0, cap);
    const rest = matches.slice(shown.length);

    let order = 0;
    cards.forEach((card) => {
      const show = shown.includes(card);
      card.hidden = !show;
      card.classList.remove("is-entering");
      if (show && animate && !reduceMotion.matches) {
        card.style.setProperty("--i", String(Math.min(order++, 8)));
        void card.offsetWidth; // restart the entrance
        card.classList.add("is-entering");
      }
    });

    if (further) further.hidden = rest.length === 0;
    if (rest.length && countEl && rangeEl) {
      const years = rest.map((c) => Number(c.dataset.year));
      const newest = Math.max(...years);
      const oldest = Math.min(...years);
      countEl.textContent = `${rest.length} more`;
      rangeEl.textContent = newest === oldest ? String(newest) : `${newest} to ${oldest}`;
    }
    return matches.length;
  }

  cards.forEach((card) => card.addEventListener("animationend", () => card.classList.remove("is-entering")));

  button?.addEventListener("click", () => {
    const firstNew = cards.find((c) => c.hidden && (!tag || (c.dataset.tags ?? "").split("|").includes(tag)));
    // Animate only the newly opened cards, not the ones already on screen.
    cards.forEach((c) => !c.hidden && (c.dataset.seen = "1"));
    expanded = true;
    render(false);
    cards
      .filter((c) => !c.hidden && !c.dataset.seen)
      .forEach((c, i) => {
        if (reduceMotion.matches) return;
        c.style.setProperty("--i", String(Math.min(i, 8)));
        c.classList.add("is-entering");
      });
    cards.forEach((c) => delete c.dataset.seen);
    // Keyboard users land on the first project they just opened.
    firstNew?.querySelector<HTMLAnchorElement>(".work-card-link")?.focus({ preventScroll: true });
  });

  return {
    /** Narrows to one type ("" for all), collapsing the archive again. Returns how many match. */
    setTag(next: string, animate = true) {
      tag = next;
      expanded = false;
      return render(animate);
    },
    plural,
  };
}
