/**
 * True on any Vercel deployment that is not production: the staging branch and
 * every other branch preview. Vercel sets VERCEL_ENV at build time. Local dev
 * and builds leave it unset, so they are not treated as previews.
 */
export const IS_PREVIEW =
  !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
