/**
 * Wires the WorkHeader dropdown to a list of items carrying data-tags
 * ("A|B|C"). Hides what doesn't match, keeps the choice in ?tag= so a
 * filtered view can be shared, and announces the result to screen readers.
 */
const plural = (n: number) => `${n} ${n === 1 ? "project" : "projects"}`;

export function initWorkFilter(items: HTMLElement[], onChange?: () => void) {
  const select = document.querySelector<HTMLSelectElement>("[data-work-type]");
  const status = document.querySelector<HTMLElement>("[data-filter-status]");
  if (!select) return;

  function apply(tag: string, announce: boolean) {
    let shown = 0;
    items.forEach((item) => {
      const match = !tag || (item.dataset.tags ?? "").split("|").includes(tag);
      item.hidden = !match;
      if (match) shown++;
    });
    if (status && announce) status.textContent = tag ? `${plural(shown)} tagged ${tag}` : `All ${plural(shown)}`;
    const url = new URL(window.location.href);
    if (tag) url.searchParams.set("tag", tag);
    else url.searchParams.delete("tag");
    history.replaceState(history.state, "", url);
    onChange?.();
  }

  // Picking with a mouse or finger lets go of focus afterward, so the focus
  // ring doesn't linger. Keyboard users keep focus where they are.
  let pointerPick = false;
  select.addEventListener("pointerdown", () => (pointerPick = true));
  select.addEventListener("keydown", () => (pointerPick = false));
  select.addEventListener("change", () => {
    apply(select.value, true);
    if (pointerPick) select.blur();
  });

  const initial = new URLSearchParams(window.location.search).get("tag") ?? "";
  if (initial && [...select.options].some((o) => o.value === initial)) {
    select.value = initial;
    apply(initial, false);
  }
}
