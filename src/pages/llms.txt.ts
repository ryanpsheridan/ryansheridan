import type { APIRoute } from "astro";
import { projects } from "../data/projects";
import { SITE_URL } from "../data/schema";

/**
 * A plain-text map of the site for AI assistants (llmstxt.org). Built from the
 * same project data as /work, so a new case study shows up here on its own.
 * Only indexable pages belong in it: nothing under /proposals, no experiments.
 */
export const GET: APIRoute = () => {
  const work = projects
    .map((p) => `- [${p.title}](${SITE_URL}/work/${p.slug}): ${p.description}`)
    .join("\n");

  const body = `# Ryan Sheridan

> Ryan Sheridan is a Principal Designer, Design Systems at Commerce, the parent company of BigCommerce, Feedonomics, and Makeswift. He leads multi-brand design systems, marketing sites, and brand infrastructure, and is based in Austin, Texas.

He has 8+ years of experience across Commerce, BigCommerce, and TicketCity, plus freelance brand and website work in Webflow. His focus is the layer between design and engineering: design tokens, component libraries, governance, and AI-assisted design workflows built with Claude.

## Pages

- [Home](${SITE_URL}/): Selected work and an overview.
- [About](${SITE_URL}/about): Background, experience, tools, and certification.
- [Resume](${SITE_URL}/resume): Full work history and skills.
- [Work](${SITE_URL}/work): Every case study, filterable by project type.
- [Contact](${SITE_URL}/contact): Email and how to start a project.
- [Start a project](${SITE_URL}/start-a-project): Intake form for new website projects.

## Case studies

${work}

## Contact

- Email: ryansheridandesign@gmail.com
- LinkedIn: https://www.linkedin.com/in/ryansheridandesign/
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
