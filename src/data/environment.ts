/**
 * True on any Vercel deployment that is not production: the staging branch and
 * every other branch preview. Vercel sets VERCEL_ENV at build time. Local dev
 * and builds leave it unset, so they are not treated as previews.
 */
export const IS_PREVIEW =
  !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

/**
 * True only on the real production site. A build of the staging branch never
 * counts, even if Vercel targets it at production. Local dev and builds leave
 * VERCEL_ENV unset, so they are not production and show everything.
 */
export const IS_PRODUCTION =
  process.env.VERCEL_ENV === "production" && process.env.VERCEL_GIT_COMMIT_REF !== "staging";
