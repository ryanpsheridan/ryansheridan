import { projects, type Project } from "./projects";

/** URL-safe form of a tag or tool name: "html.to.design" becomes "html-to-design". */
export const toSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Newest first. Array sort is stable, so same-year projects keep their order from projects.ts. */
export const workProjects: Project[] = [...projects].sort((a, b) => b.year - a.year);

export interface Facet {
  name: string;
  slug: string;
  count: number;
}

// Every value in use, most common first, ties alphabetical.
function facet(pick: (p: Project) => string[]): Facet[] {
  const counts = new Map<string, number>();
  workProjects.forEach((p) => pick(p).forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1)));
  return [...counts]
    .map(([name, count]) => ({ name, slug: toSlug(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export const projectTypes = facet((p) => p.tags);
export const projectTools = facet((p) => p.tools);

export const projectCount = (n: number) => `${n} ${n === 1 ? "project" : "projects"}`;
