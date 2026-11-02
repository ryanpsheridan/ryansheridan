import type { APIRoute } from "astro";
import { IS_PREVIEW } from "../data/environment";
import { SITE_URL } from "../data/schema";

/** Production allows crawling and points at the sitemap. Staging and previews block everything. */
export const GET: APIRoute = () => {
  const body = IS_PREVIEW
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
