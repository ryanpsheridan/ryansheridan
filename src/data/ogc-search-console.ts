/**
 * Daily Search Console totals for ohiogolfclubindoor.com (web search, all
 * countries), pasted from the Chart.csv in a Performance export. The case
 * study's charts, averages and dates are all worked out from this file.
 *
 * To update with a new export:
 * 1. Append the new days to ogcSearchConsole in date order, one row per day.
 * 2. Set ogcLatestPeriod to the export's date range and its average position
 *    (the one figure the daily rows can't give). Clicks, impressions and CTR
 *    for that period are summed from the rows.
 * 3. Reread the "Search visibility" copy in projects.ts. The numbers fill in
 *    on their own, but the sentences around them may need a tweak.
 *
 * Milestones: first SEO update to the old site on October 23, 2026 (the chart
 * marker). The rebuilt site went live, with indexing requested for every page
 * and the sitemap resubmitted, on November 11, 2026.
 */
export interface SearchConsoleDay {
  date: string;
  clicks: number;
  impressions: number;
}

export const ogcSearchConsole: SearchConsoleDay[] = [
  { date: "2026-09-01", clicks: 0, impressions: 48 },
  { date: "2026-09-02", clicks: 0, impressions: 34 },
  { date: "2026-09-03", clicks: 1, impressions: 97 },
  { date: "2026-09-04", clicks: 0, impressions: 178 },
  { date: "2026-09-05", clicks: 4, impressions: 189 },
  { date: "2026-09-06", clicks: 2, impressions: 377 },
  { date: "2026-09-07", clicks: 4, impressions: 364 },
  { date: "2026-09-08", clicks: 7, impressions: 386 },
  { date: "2026-09-09", clicks: 5, impressions: 389 },
  { date: "2026-09-10", clicks: 7, impressions: 327 },
  { date: "2026-09-11", clicks: 5, impressions: 261 },
  { date: "2026-09-12", clicks: 9, impressions: 240 },
  { date: "2026-09-13", clicks: 3, impressions: 295 },
  { date: "2026-09-14", clicks: 4, impressions: 268 },
  { date: "2026-09-15", clicks: 4, impressions: 316 },
  { date: "2026-09-16", clicks: 1, impressions: 213 },
  { date: "2026-09-17", clicks: 5, impressions: 239 },
  { date: "2026-09-18", clicks: 5, impressions: 154 },
  { date: "2026-09-19", clicks: 4, impressions: 242 },
  { date: "2026-09-20", clicks: 4, impressions: 204 },
  { date: "2026-09-21", clicks: 6, impressions: 330 },
  { date: "2026-09-22", clicks: 6, impressions: 190 },
  { date: "2026-09-23", clicks: 2, impressions: 277 },
  { date: "2026-09-24", clicks: 0, impressions: 118 },
  { date: "2026-09-25", clicks: 1, impressions: 122 },
  { date: "2026-09-26", clicks: 0, impressions: 27 },
  { date: "2026-09-27", clicks: 0, impressions: 11 },
  { date: "2026-09-28", clicks: 2, impressions: 32 },
  { date: "2026-09-29", clicks: 0, impressions: 25 },
  { date: "2026-09-30", clicks: 0, impressions: 40 },
  { date: "2026-10-01", clicks: 0, impressions: 40 },
  { date: "2026-10-02", clicks: 0, impressions: 37 },
  { date: "2026-10-03", clicks: 2, impressions: 20 },
  { date: "2026-10-04", clicks: 0, impressions: 56 },
  { date: "2026-10-05", clicks: 1, impressions: 34 },
  { date: "2026-10-06", clicks: 0, impressions: 24 },
  { date: "2026-10-07", clicks: 0, impressions: 29 },
  { date: "2026-10-08", clicks: 0, impressions: 34 },
  { date: "2026-10-09", clicks: 0, impressions: 31 },
  { date: "2026-10-10", clicks: 0, impressions: 24 },
  { date: "2026-10-11", clicks: 0, impressions: 36 },
  { date: "2026-10-12", clicks: 1, impressions: 38 },
  { date: "2026-10-13", clicks: 2, impressions: 33 },
  { date: "2026-10-14", clicks: 0, impressions: 50 },
  { date: "2026-10-15", clicks: 2, impressions: 55 },
  { date: "2026-10-16", clicks: 0, impressions: 55 },
  { date: "2026-10-17", clicks: 0, impressions: 28 },
  { date: "2026-10-18", clicks: 0, impressions: 24 },
  { date: "2026-10-19", clicks: 2, impressions: 36 },
  { date: "2026-10-20", clicks: 0, impressions: 36 },
  { date: "2026-10-21", clicks: 1, impressions: 41 },
  { date: "2026-10-22", clicks: 0, impressions: 42 },
  { date: "2026-10-23", clicks: 2, impressions: 144 },
  { date: "2026-10-24", clicks: 4, impressions: 242 },
  { date: "2026-10-25", clicks: 2, impressions: 355 },
  { date: "2026-10-26", clicks: 4, impressions: 408 },
  { date: "2026-10-27", clicks: 9, impressions: 298 },
  { date: "2026-10-28", clicks: 11, impressions: 205 },
  { date: "2026-10-29", clicks: 8, impressions: 269 },
  { date: "2026-10-30", clicks: 1, impressions: 235 },
  { date: "2026-10-31", clicks: 6, impressions: 159 },
  { date: "2026-11-01", clicks: 3, impressions: 140 },
  { date: "2026-11-02", clicks: 2, impressions: 174 },
  { date: "2026-11-03", clicks: 5, impressions: 250 },
  { date: "2026-11-04", clicks: 8, impressions: 235 },
  { date: "2026-11-05", clicks: 5, impressions: 191 },
  { date: "2026-11-06", clicks: 6, impressions: 211 },
  { date: "2026-11-07", clicks: 4, impressions: 194 },
  { date: "2026-11-08", clicks: 5, impressions: 185 },
  { date: "2026-11-09", clicks: 12, impressions: 209 },
  { date: "2026-11-10", clicks: 9, impressions: 258 },
  { date: "2026-11-11", clicks: 13, impressions: 212 },
  { date: "2026-11-12", clicks: 12, impressions: 276 },
  { date: "2026-11-13", clicks: 10, impressions: 233 },
  { date: "2026-11-14", clicks: 11, impressions: 321 },
  { date: "2026-11-15", clicks: 13, impressions: 336 },
];

export const ogcMilestones = {
  firstSeoUpdate: "2026-10-23",
  rebuildLaunch: "2026-11-11",
};

/** The 28 days before the first SEO update, the "before" side of every comparison. */
export const ogcBaseline = { from: "2026-09-25", to: "2026-10-22" };

/** The most recent Search Console export. */
export const ogcLatestPeriod = { from: "2026-10-19", to: "2026-11-15", averagePosition: 10.82 };

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const parts = (iso: string) => {
  const d = new Date(`${iso}T00:00:00Z`);
  return { month: MONTHS[d.getUTCMonth()], day: d.getUTCDate() };
};
/** "November 15" */
export const longDate = (iso: string) => `${parts(iso).month} ${parts(iso).day}`;
/** "Nov 15" */
export const shortDate = (iso: string) => `${parts(iso).month.slice(0, 3)} ${parts(iso).day}`;

const dayBefore = (iso: string) => new Date(Date.parse(`${iso}T00:00:00Z`) - 864e5).toISOString().slice(0, 10);

export function ogcWindow(from: string, to: string) {
  const days = ogcSearchConsole.filter((d) => d.date >= from && d.date <= to);
  const clicks = days.reduce((sum, d) => sum + d.clicks, 0);
  const impressions = days.reduce((sum, d) => sum + d.impressions, 0);
  return {
    from,
    to,
    days: days.length,
    clicks,
    impressions,
    clicksPerDay: clicks / days.length,
    impressionsPerDay: impressions / days.length,
    ctr: impressions ? clicks / impressions : 0,
  };
}

const lastDay = ogcSearchConsole[ogcSearchConsole.length - 1].date;

export const ogcStats = {
  firstDay: ogcSearchConsole[0].date,
  lastDay,
  before: ogcWindow(ogcBaseline.from, ogcBaseline.to),
  after: ogcWindow(ogcMilestones.firstSeoUpdate, lastDay),
  latest: {
    ...ogcWindow(ogcLatestPeriod.from, ogcLatestPeriod.to),
    averagePosition: ogcLatestPeriod.averagePosition,
    /** Days of the latest period that came before the first SEO update. */
    daysBeforeUpdate: ogcWindow(ogcLatestPeriod.from, dayBefore(ogcMilestones.firstSeoUpdate)).days,
  },
};
