export interface Proposal {
  slug: string;
  client: string;
  /** What the document is, shown under the client name. */
  kind: string;
  /** One line on what it covers, for the index card. */
  summary: string;
  /** ISO date the proposal was prepared, used for display and ordering. */
  date: string;
  status: "active" | "sent" | "closed";
}

/**
 * Everything listed here lives under /proposals, which is noindex and kept out
 * of the sitemap. Newest first.
 */
export const proposals: Proposal[] = [
  {
    slug: "ohio-golf-club",
    client: "Ohio Golf Club",
    kind: "Website review and proposal",
    summary:
      "Eight findings on how the club shows up in Google and AI assistants, with two fixed-fee options.",
    date: "2026-09-03",
    status: "active",
  },
];

export const formatProposalDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
