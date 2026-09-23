/**
 * schema.org nodes shared across the site. Every page's JSON-LD graph starts
 * with the Person and WebSite below, and page nodes point back at them by @id,
 * so search engines and AI assistants resolve one Ryan Sheridan everywhere
 * instead of a new, unconnected author per page.
 */
import type { Project } from "./projects";

export const SITE_URL = "https://ryansheridan.studio";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Ryan Sheridan",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/profile-photo.webp`,
  email: "mailto:ryansheridandesign@gmail.com",
  jobTitle: "Principal Designer, Design Systems",
  description:
    "Principal Designer at Commerce, the parent company of BigCommerce, leading design systems and web experience across multiple brands.",
  worksFor: { "@type": "Organization", name: "Commerce", url: "https://www.commerce.com/" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Fort Lewis College" },
  homeLocation: { "@type": "Place", name: "Austin, Texas" },
  knowsAbout: [
    "Design systems",
    "Multi-brand design systems",
    "Design tokens",
    "Figma",
    "Brand identity",
    "Web design",
    "Marketing websites",
    "Webflow",
    "Makeswift",
    "AI design workflows",
  ],
  sameAs: ["https://www.linkedin.com/in/ryansheridandesign/"],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Ryan Sheridan",
  description: "Portfolio of Ryan Sheridan, Principal Designer specializing in design systems, marketing sites, and brand infrastructure.",
  inLanguage: "en-US",
  publisher: { "@id": PERSON_ID },
};

/** Home, then each crumb in order. Paths are site-relative, without a trailing slash. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: new URL(crumb.path, SITE_URL).href,
    })),
  };
}

export function projectSchema(project: Project) {
  const url = `${SITE_URL}/work/${project.slug}`;
  return {
    "@type": "CreativeWork",
    "@id": `${url}#work`,
    url,
    name: project.title,
    headline: project.title,
    description: project.description,
    image: new URL(project.ogImage ?? project.thumbnail, SITE_URL).href,
    genre: project.tags,
    keywords: [...project.tags, ...project.tools].join(", "),
    creator: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    ...(project.client && {
      sourceOrganization: {
        "@type": "Organization",
        name: project.client,
        ...(project.clientUrl && { url: project.clientUrl }),
      },
    }),
  };
}
