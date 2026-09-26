export interface TextBlock {
  type: "text";
  heading?: string;
  body: string;
}

export interface ImageGridImage {
  src: string;
  /**
   * What the image shows, for screen readers and image search. Falls back to
   * the caption; say what is in the frame rather than repeating the caption.
   */
  alt?: string;
  caption?: string;
}

export interface ImageGridBlock {
  type: "imageGrid";
  images: (string | ImageGridImage)[];
  /** Adds a light border around each image and extra breathing room (UI screenshots). */
  framed?: boolean;
  /** Opts into a two-column layout for this block instead of the single full-width column. */
  sideBySide?: boolean;
}

export interface CarouselBlock {
  type: "carousel";
  images: (string | ImageGridImage)[];
  /** Slides visible at once on desktop. Defaults to 3. */
  perView?: number;
  /**
   * Slide frame as a CSS aspect ratio, e.g. "16 / 10". Defaults to the 3 / 4
   * photo crop. Wide UI screenshots read better in a landscape frame.
   */
  ratio?: string;
  /** Letterbox each slide inside the frame instead of cropping it (UI screenshots). */
  contain?: boolean;
}

export interface CompareBlock {
  type: "compare";
  before: { src: string; alt?: string; label?: string };
  after: { src: string; alt?: string; label?: string };
  liveUrl?: string;
}

export interface ComponentTableGroup {
  category: string;
  items: string[];
}

export interface ComponentTableBlock {
  type: "componentTable";
  intro?: string;
  groups: ComponentTableGroup[];
}

export interface DividerBlock {
  type: "divider";
}

export type ContentBlock =
  | TextBlock
  | ImageGridBlock
  | CarouselBlock
  | CompareBlock
  | ComponentTableBlock
  | DividerBlock;

export interface Project {
  slug: string;
  title: string;
  /** Year the work shipped. Shown on /work, which sorts by it, and in the project sidebar. */
  year: number;
  /** Meta description and structured-data summary. Written for search results, so keep it near 150 characters. */
  description: string;
  thumbnail: string;
  /**
   * Link-preview image. A JPG or PNG still, ideally 1.91:1 or 16:10: page
   * images are WebP and some thumbnails are animated SVG, and several social
   * platforms render neither in a preview card.
   */
  ogImage?: string;
  showOnHomepage: boolean;
  tags: string[];
  tools: string[];
  client: string;
  /** Client's website; when set, the sidebar client name links out to it. */
  clientUrl?: string;
  content: ContentBlock[];
}

export const projects: Project[] = [
  {
    slug: "commerce-multi-brand-system",
    title: "Multi-brand Design System",
    year: 2026,
    description: "Four separate Figma libraries for Commerce, BigCommerce, Feedonomics, and Makeswift, merged into one multi-brand design system with shared tokens and brand modes.",
    ogImage: "/project-multi-brand1.jpg",
    thumbnail: "/figma-variables-thumbnail-fdx-animated.svg",
    showOnHomepage: true,
    tags: ["Design System"],
    tools: ["Figma"],
    client: "Commerce",
    clientUrl: "https://www.commerce.com/",
    content: [
      {
        type: "text",
        heading: "One System for Three Brands",
        body: `<p>Commerce is the parent company behind <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer">BigCommerce</a>, <a href="https://feedonomics.com/" target="_blank" rel="noopener noreferrer">Feedonomics</a>, and <a href="https://www.makeswift.com/" target="_blank" rel="noopener noreferrer">Makeswift</a>, and each brand had its own Figma file, token library, and way of doing things. Over time, maintaining four separate systems became unsustainable. Designers were constantly using tokens from each file, mixing up color and type tokens per brand. They were inconsistently named, and there was no shared source of truth.</p><p>The goal was to consolidate all four into a single scalable design system that worked not just for designers, but for publishers, marketers, developers, and CRO specialists too. That mixed audience is what made this genuinely hard to get right.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          { src: "/multi-brand-mode-switch-animated.svg", alt: "Figma variables table beside a card layout, with a mode menu switching the design between Base, Commerce, BigCommerce, and Feedonomics" },
          { src: "/multi-brand-variables-animated.svg", alt: "Figma variables panel listing color and typeface tokens with values for the Base, Commerce, BigCommerce, and Feedonomics modes" },
        ],
      },
      {
        type: "text",
        heading: "Built Around How People Actually Work",
        body: `<p>Rather than normalizing everything into one watered-down middle ground, the system reflects how each brand actually exists on its live sites. The foundation is a four-collection variable architecture covering primitive, brand, and theme tokens across all three brands and their mobile counterparts. The hardest part of getting there was making color and type tokens work seamlessly across all of them. Matching display, heading, body, quote, and eyebrow styles across brands so that a single text style pulls cleanly from tokens sounds straightforward, but getting that to feel right and stay maintainable took real work.</p><p>With the token system solid, sections came together in a way that kept the whole thing accessible to everyone who touches it. The goal was always finding the balance between being as easy as possible for non-designers and as powerful as possible for web designers. Drop a hero section, set the brand on the outer frame, and typography, spacing, and surface colors all update automatically with no token knowledge required. The final file includes 131 primitive variables, 115 brand variables across 6 modes, and a full library of sections and components spanning heroes, carousels, accordions, CTAs, feature layouts, and more.</p>`,
      },
      {
        type: "text",
        heading: "One Token Name, a Value per Brand",
        body: `<p>The variables split into two collections. <strong>Primitives</strong> hold the raw values: every brand's color ramps, the fonts, and shared number scales for frame widths, containers, padding, spacing, and motion. <strong>Brand</strong> tokens give those values a job, and each one carries a column for Commerce (CM), BigCommerce (BC), and Feedonomics (FDX).</p><p>That's what lets one component serve every brand. <em>Display 1</em> is 101px for Commerce, 64 for BigCommerce, and 72 for Feedonomics. <em>Surface/Base</em> is Pearl, White, or Stone. <em>Hyperlink</em> is Iris, Blue 400, or Cobalt. Where the brands agree, like the spacing scale and motion timing, all three columns point at the same primitive, so a change lands everywhere at once.</p>`,
      },
      {
        type: "carousel",
        perView: 1,
        ratio: "16 / 10",
        contain: true,
        images: [
          { src: "/project-feedonomics-tokens-04.webp", alt: "Brand collection in the Multi-Brand Figma library with CM, BC, and FDX columns mapping text color and typeface tokens to each brand's primitives", caption: "01 · Text color and typeface, per brand" },
          { src: "/project-feedonomics-tokens-05.webp", alt: "Brand collection font size tokens from Display 1 to Type XS with separate values for CM, BC, and FDX", caption: "02 · One type scale, three sets of sizes" },
          { src: "/project-feedonomics-tokens-06.webp", alt: "Brand collection weight tokens and surface tokens, with Base, Secondary, Tertiary, and Inverse mapped to each brand's colors", caption: "03 · Weight and surface, per brand" },
          { src: "/project-feedonomics-tokens-07.webp", alt: "Brand collection spacing tokens, viewport widths, and section padding, with every brand pointing at the shared number primitives", caption: "04 · Spacing and layout, shared across brands" },
          { src: "/project-feedonomics-tokens-08.webp", alt: "Brand collection duration tokens from 0 to 300 milliseconds and border color tokens for CM, BC, and FDX", caption: "05 · Motion and borders" },
          { src: "/project-feedonomics-tokens-03.webp", alt: "Primitive collection listing color groups for CMRC, BC, FDX, and MS, beside number variables for frame widths, containers, and padding", caption: "06 · Primitives: every brand's colors, one set of numbers" },
        ],
      },
      {
        type: "text",
        heading: "Set the Brand Once",
        body: `<p>In practice, a designer sets the brand on the page and then only picks shared styles and tokens. On a Feedonomics page, the hero headline uses <em>Display 2</em> from the Multi-Brand text styles and resolves to 64/70.4. The hero section is filled with <em>Surface/Inverse</em>, which is Navy for Feedonomics. Neither one has a hex value or a brand-specific style attached.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/project-feedonomics-tokens-applied-type.webp", alt: "Feedonomics product page in Figma with the hero headline selected and the Multi-Brand text styles menu showing Display 2 at 64/70.4", caption: "Type: Display 2 from the Multi-Brand library resolves to the Feedonomics size" },
          { src: "/project-feedonomics-tokens-applied-surface.webp", alt: "The same Feedonomics page in Figma with the hero section selected and its fill set to the Surface/Inverse token from the Multi-Brand library", caption: "Surface: the hero is filled with Surface/Inverse, not a brand color" },
        ],
      },
      {
        type: "imageGrid",
        images: [
          { src: "/project-multi-brand4.webp", alt: "Component library sections, including hero, card, carousel, accordion, and form, next to a card grid with the brand mode set to Commerce" },
          { src: "/project-multi-brand5.webp", alt: "Library updates page explaining how shared text styles and colors now follow the selected brand mode" },
        ],
      },
    ],
  },
  {
    slug: "claude-design-case-study-pdfs",
    title: "Case Study PDF System",
    year: 2026,
    description: "A Claude Design system that replaces hand-built InDesign case study PDFs, saving design and marketing time on every copy change and layout update.",
    ogImage: "/project-claude-design-pdf1.jpg",
    thumbnail: "/claude-design-pdf-mizuno-typing-animated.svg",
    showOnHomepage: true,
    tags: ["Design System", "Automation"],
    tools: ["Claude Design", "Figma", "html.to.design"],
    client: "BigCommerce",
    clientUrl: "https://www.bigcommerce.com/",
    content: [
      {
        type: "text",
        heading: "The Opportunity",
        body: `<p>Case study PDFs are a steady request for our design team. The content almost always exists already, either as a live case study page on <a href="https://www.bigcommerce.com/case-study/" target="_blank" rel="noopener noreferrer">BigCommerce.com</a> or as a copy doc from marketing. Turning it into a PDF meant a designer laying it out in InDesign, every time.</p><p>The layout was never the hard part. The rework was. A copy update meant reflowing pages. A new image meant adjusting the layout around it. Another round of edits meant doing it all again, and every round cost time for the designer building it and for the marketers waiting on it.</p><p>So while these PDFs need to look sharp, this was a systems project. The goal was to take that repeated layout work off both teams' plates for good.</p><p>The opportunity was to let <strong>Claude Design</strong> handle the first 80%. Give it a URL or a copy doc, get back a PDF that is already on brand, with the layout, type, pagination, and cover done. Export it to Figma, and the design team finishes the last 20%: adding imagery and fixing small spacing issues.</p><p>Here is what this covers:</p><ul><li>The goals the system had to meet</li><li>The layout patterns everything is built on</li><li>The randomized cover, designed with <a href="https://www.linkedin.com/in/robrodriguezwork/" target="_blank" rel="noopener noreferrer"><strong>Rob Rodriguez</strong></a></li><li>The workflow from Claude Design to Figma</li><li>What I recommend</li></ul>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          {
            src: "/project-claude-design-pdf-start-screen.webp",
            alt: "Claude Design start screen with the design system menu open, listing the Commerce, BigCommerce, and Feedonomics marketing systems",
            caption: "Every PDF starts by picking the BigCommerce design system in Claude Design",
          },
        ],
      },
      {
        type: "text",
        heading: "The Goals",
        body: `<p>Before designing any pages, I wrote down what the system had to do:</p><ul><li><strong>Take any input.</strong> A live case study URL, a copy doc, or both, plus the customer logo and a few product or lifestyle images.</li><li><strong>Produce the same result every time.</strong> Same margins, same type, same structure, no matter who runs it or how they word the prompt.</li><li><strong>Follow the live case study page.</strong> The PDF should mirror the page's flow (Challenge, Solution, Results, Looking ahead) and still work when a copy doc arrives in a different order.</li><li><strong>Reach Figma cleanly.</strong> Designers should be finishing the file, not rebuilding it.</li></ul><p>The main insight: consistency had to come from the template, not the prompt. If a rule only exists in a prompt, it depends on someone typing it. If it lives in the template, everyone gets it for free.</p>`,
      },
      {
        type: "text",
        heading: "Design Approach: Patterns First",
        body: `<p>My focus from the start was finding patterns that repeat. I started with margins, padding, and spacing for each type of page, then worked out what information a case study actually shows and how it should be ordered. Everything else is built on those decisions.</p><p>The template has four kinds of pages, and each has its own layout:</p>`,
      },
      {
        type: "componentTable",
        groups: [
          {
            category: "Cover",
            items: ["Two patterned color bands, randomized", "BigCommerce and customer logo lockup", "One-sentence outcome headline", "Three stats that shrink to fit on one line"],
          },
          {
            category: "Hero + Key Highlights",
            items: ["Product image in a gray frame", "Challenge, Solution, and Results in three columns", "About the customer"],
          },
          {
            category: "Flow Pages",
            items: ["Eyebrow, rule, and headline for every section", "66% copy column with a 26% quote rail", "Capability list and partner chips", "Images kept inside the copy column"],
          },
          {
            category: "Closing",
            items: ["Looking ahead section", "Full-width CTA bar, or a compact rail card when it won't fit"],
          },
          {
            category: "Every Page",
            items: ["8.5 × 11in", "0.65in margins", "Footer 0.5in from the bottom edge", "Two-digit page numbers"],
          },
        ],
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/project-claude-design-pdf-layout-spec.webp",
            alt: "Two Laser Clinics case study pages marked up with the 0.65in margins, the section headers, the 66% copy column, the 26% quote rail, and the footer",
            caption: "The layout rules on two generated pages",
          },
        ],
      },
      {
        type: "text",
        body: `<p>I spent the most time on the rules you only notice when they break. These are the ones that separate a real PDF from a long web page cut into pieces:</p><ul><li><strong>Footers stay at the bottom of every page.</strong> Brand, customer, and page number sit 0.5in from the edge whether the page is full or half empty.</li><li><strong>Page numbers are always right.</strong> They're set while the pages are built, so adding or removing a paragraph never leaves a stale number behind.</li><li><strong>Headings stay with their content.</strong> Section headers are kept with the next block, so a headline never ends up alone at the bottom of a page.</li><li><strong>Quotes stay in the rail.</strong> A pull quote that won't fit moves to the next page's rail and lines up with the top of its section. It never drops into the copy column.</li><li><strong>Pages break after the fonts load.</strong> Measuring with fallback fonts shifts every break, so the template waits for the real ones.</li><li><strong>Images get room.</strong> 24px of padding inside the gray frame and at least 28px above and below, so copy never sits tight against an image.</li></ul>`,
      },
      {
        type: "text",
        heading: "Cover Design",
        body: `<p>I worked with our brand designer, <a href="https://www.linkedin.com/in/robrodriguezwork/" target="_blank" rel="noopener noreferrer"><strong>Rob Rodriguez</strong></a>, who I also partnered with on the <a href="/work/feedonomics-rebrand-design-system">Feedonomics rebrand</a>. Rob designed the cover and its illustration variants: three line patterns (plus signs, circles, and radiating lines) set on the BigCommerce system's pale tints, Mist, Rose, Mauve, and Lemon.</p><p>I set the cover up so every PDF picks two different patterns and two different tints at random. That makes 72 possible covers. Every one is slightly different, and every one is clearly part of the same family, so a stack of case studies looks like a series instead of copies.</p><p>The BigCommerce design system doesn't allow patterns in general, so the cover bands live inside this template and nowhere else. The randomness has limits, and those limits are what keep it on brand.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/project-claude-design-pdf-covers.webp",
            alt: "Six case study cover variations, each pairing two different patterns and pastel tints above the same placeholder headline and stats",
            caption: "Six of the cover variations: same structure, different pairings",
          },
        ],
      },
      {
        type: "text",
        heading: "The Workflow",
        body: `<p>The template lives inside the BigCommerce design system I built in Claude Design, next to the tokens, type, components, slide system, and a one-pager and whitepaper template. Running it takes a few steps:</p><ol><li><strong>Start in Claude Design.</strong> Choose the BigCommerce design system, drop in a copy doc or case study URL, and ask for a case study PDF. Attach the customer logo and a couple of product or lifestyle images.</li><li><strong>Refine in the chat.</strong> If copy length, layout, or image placement is off, fix it in Claude Design first. It's faster to iterate there than after export.</li><li><strong>Export as standalone HTML.</strong> This bakes the fonts, logo, and every image into one file, so there are no linked assets left to break.</li><li><strong>Import with html.to.design.</strong> Auto layout, styles and variables, existing local styles, hyperlinks, and HTML layer names on, then ungroup in Figma.</li><li><strong>Finish in Figma.</strong> Designers add final imagery, clean up any spacing or type that shifted during import, and check the hyperlinks.</li></ol><p>To roll it out, I walked the design team through the whole flow in a working session with a live demo. The goal was simple: everyone runs a case study at least once and leaves knowing which route to use.</p>`,
      },
      {
        type: "text",
        heading: "The Output",
        body: `<p>Two case studies from the system, for <strong>Laser Clinics</strong> and <strong>Mizuno USA</strong>. They're different customers with different amounts of copy, built on the same margins, footer, section structure, and cover family.</p>`,
      },
      {
        type: "carousel",
        images: [
          { src: "/project-claude-design-pdf-laser-01.webp", alt: "Laser Clinics case study cover with plus-sign and circle bands, the headline Laser Clinics gives its digital experience a glow up with BigCommerce, and three stats", caption: "01 · Cover" },
          { src: "/project-claude-design-pdf-laser-02.webp", alt: "Laser Clinics case study page with a laptop mockup of the Laser Clinics site above the Challenge, Solution, and Results highlights", caption: "02 · Key highlights" },
          { src: "/project-claude-design-pdf-laser-03.webp", alt: "Laser Clinics case study Challenge and Solution sections with a customer quote in the right rail", caption: "03 · Challenge" },
          { src: "/project-claude-design-pdf-laser-04.webp", alt: "Laser Clinics case study page with a two-column capability list and two pull quotes in the right rail", caption: "04 · Solution" },
          { src: "/project-claude-design-pdf-laser-05.webp", alt: "Laser Clinics case study page about localized clinic pages, with a tablet mockup and quotes in the rail", caption: "05 · Solution, continued" },
          { src: "/project-claude-design-pdf-laser-06.webp", alt: "Laser Clinics case study Results section with outcome stats and a customer quote", caption: "06 · Results" },
          { src: "/project-claude-design-pdf-laser-07.webp", alt: "Laser Clinics case study Looking ahead section with partner chips and a closing call to action bar", caption: "07 · Looking ahead" },
        ],
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/project-claude-design-pdf-mizuno.webp",
            alt: "Mizuno USA case study cover with line and plus-sign bands next to its Challenge page with a quote in the right rail",
            caption: "Mizuno USA: a different cover pairing on the same template",
          },
        ],
      },
      {
        type: "text",
        heading: "My Recommendation",
        body: `<p>Treat case study PDFs as an 80/20 job. Claude Design is very good at structure: layout, type, pagination, and staying on brand across seven pages. Designers are still the right people for the last 20%, choosing imagery and catching the small spacing issues an import can introduce. That matches how we tiered our <a href="/work/brand-systems-claude-design">brand systems in Claude Design</a>: PDFs go through design, and the system does the heavy lifting first.</p><p>In practice, that means three things. Keep the rules in the template, not in the prompt. Refine in Claude Design before exporting, while changes are cheap. And make standalone HTML with html.to.design the default route into Figma, so every file arrives with its fonts and images intact.</p>`,
      },
    ],
  },
  {
    slug: "rhow-coffee",
    title: "RHOW Coffee",
    year: 2026,
    description: "Brand identity for RHOW Coffee, a specialty coffee shop in Massillon, Ohio: a swan mark, logo suite, color palette, and illustration.",
    ogImage: "/project-rhow-coffee02.jpg",
    thumbnail: "/rhow-logo-spec-animated-dark.svg",
    showOnHomepage: true,
    tags: ["Branding", "Illustration"],
    tools: ["Adobe Illustrator", "Figma"],
    client: "RHOW Coffee",
    clientUrl: "https://www.instagram.com/rhowcoffee",
    content: [
      {
        type: "text",
        heading: "Design Philosophy",
        body: `<p><a href="https://www.instagram.com/rhowcoffee?igsh=MTM5OHBjODF1dTlybQ%3D%3D" target="_blank" rel="noopener noreferrer">Rhow Coffee</a> is a specialty coffee shop in Massillon, Ohio, owned by David Hurley. The name is shorthand for his own philosophy, Rise Humbly Over Worry, control what you can control and let the rest go. That mindset shaped what he wanted the shop to be: less a place to grab a cup and go, more a room built for staying awhile, whether that's a business meeting, a first date, or old friends catching up.</p><p>The identity needed to hold that same restraint. The brand is built around a custom-traced logotype and a swan mark, anchored by a palette of shadow grey, parchment, steel blue, blue slate, and dark walnut. David specifically asked for a swan, a nod to black swan latte art, and a mark that carries some personal meaning for him. Geometric and architectural, but warm enough to feel like a place worth lingering in.</p>`,
      },
      {
        type: "text",
        body: `<p>A single lockup was never going to cover everything. The identity had to hold up on a cup sleeve, a front window, and a sign read from across the lot, so the primary mark was drawn out into a small suite. The full badge keeps the circular RHOW COFFEE type when there is room for it. When there isn't, the swan steps out of the circle and sits beside the wordmark on its own. The same geometry sits underneath either version, and that is what keeps them reading as one brand instead of three loosely related ones.</p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/rhow-logo-suite-animated.svg", alt: "RHOW Coffee logo suite: the circular swan badge, a horizontal lockup, a wordmark, and the swan icon on its own" }],
      },
      {
        type: "text",
        body: `<p>Color carries the rest of it. The near black and the warm off white do most of the everyday work, one holding the mark and the other giving it room to breathe. The blues came in as a cooler counterweight, enough contrast to keep the system from going flat without ever competing with the swan. Dark walnut is the only genuinely warm note in the set, and it stays rare on purpose, which is what makes it register when it does show up.</p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/rhow-palette-animated.svg", alt: "RHOW Coffee color palette: Shadow Grey, Parchment, Steel Blue, Blue Slate, and Dark Walnut" }],
      },
      {
        type: "text",
        heading: "From the Door to the Cup",
        body: `<p>The brand shows up everywhere in the shop, on signage, the front door, the menu display, and the retail shelving. That consistency was the goal from the start. Every piece of the identity was designed to hold up across physical touchpoints without losing the quiet, refined feel of the primary mark.</p><p><a href="https://www.instagram.com/rhowcoffee?igsh=MTM5OHBjODF1dTlybQ%3D%3D" target="_blank" rel="noopener noreferrer">You can follow RHOW Coffee Instagram here.</a></p>`,
      },
      {
        type: "text",
        body: `<p>Curious about David's path to owning RHOW? He shared the full story, from working the counter to buying the shop, in <a href="https://texascoffeeschool.com/buying-a-coffee-shop-meet-the-owner-of-rhow-coffee/" target="_blank" rel="noopener noreferrer">this interview with Texas Coffee School</a>.</p>`,
      },
      {
        type: "divider",
      },
      {
        type: "text",
        heading: "A Look Around the Shop",
        body: `<p>See the full brand book in motion in <a href="https://www.instagram.com/p/DTDZLLxkU5z/" target="_blank" rel="noopener noreferrer">this Instagram video</a>.</p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/project-rhow-coffee07.webp", alt: "RHOW Coffee storefront with the wordmark sign above the entrance and the swan badge on the windows" }],
      },
      {
        type: "imageGrid",
        images: [{ src: "/project-rhow-coffee01.webp", alt: "Hands holding a RHOW Coffee tray with a latte, an iced coffee, a muffin, and a pastry bar" }],
      },
      {
        type: "imageGrid",
        images: [{ src: "/project-rhow-coffee17.webp", alt: "The swan badge applied to the glass of the RHOW Coffee front door" }],
      },
      {
        type: "divider",
      },
      {
        type: "text",
        heading: "More Shots from the Shop",
        body: "",
      },
      {
        type: "carousel",
        images: [
          { src: "/project-rhow-coffee15.webp", alt: "Milk being poured into an iced coffee in a glass can" },
          { src: "/project-rhow-coffee08.webp", alt: "Barista pouring latte art into a black cup" },
          { src: "/project-rhow-coffee03.webp", alt: "RHOW Coffee menu board listing coffee, tea and drinks, and food and pastries" },
          { src: "/project-rhow-coffee05.webp", alt: "Wall sconce above a framed portrait painting in the shop" },
          { src: "/project-rhow-coffee14.webp", alt: "Leather armchair and wooden table beside bookshelves under a warm wall sconce" },
          { src: "/project-rhow-coffee16.webp", alt: "Shop interior with a gilded mirror over a dark fireplace, a pendant light, bookshelves, and plants" },
        ],
      },
    ],
  },
  {
    slug: "figma-project-starter",
    title: "Figma Project Starter",
    year: 2026,
    description: "A Claude skill that turns an Asana ticket into a ready-to-design Figma file: template, cover, brand mode, and folder, set up in one step.",
    ogImage: "/figma-thumbnail-cover.png",
    thumbnail: "/skill-slash-command-animated-dark.svg",
    showOnHomepage: true,
    tags: ["Claude Skill", "Automation", "Design System"],
    tools: ["Claude", "Figma", "Asana"],
    client: "Commerce (Internal)",
    clientUrl: "https://www.commerce.com/",
    content: [
      {
        type: "text",
        heading: "The Problem With Starting a File",
        body: `<p>Every new ticket meant the same setup before any real design work could start:</p><ul><li>Duplicating the file starter template</li><li>Naming the file and typing the title onto the cover</li><li>Typing your initials onto the cover</li><li>Pasting the Asana link into the ticket widget</li><li>Moving the file into the right brand folder afterward</li><li>Coworkers not being able to find your file</li></ul><p>None of it was hard, but it was repetitive, easy to get slightly wrong, and it happened dozens of times a month across a team working in four brand folders at once. On top of that, every designer's file was structured a little differently, so there was no shared sense of where anything lived from file to file.</p><p>I built a Claude skill to remove that setup entirely and bring some consistency to it. Give it an Asana ticket, and it builds a fully structured Figma file: correct brand mode, the right folder, the cover filled in, ready to design in.</p>`,
      },
      {
        type: "text",
        heading: "How It Works",
        body: `<p>The skill runs on a simple structure: a four-page starter template (Working, a divider, Cover, Archive), Working first so the file opens straight into active work.</p>`,
      },
      {
        type: "text",
        body: `<p>Connect Figma and Asana once in Claude, then start a new chat and either type /figma-project-starter, drop in an Asana link, or just ask in plain language, something like "here's my ticket, can you set up a Figma file for this."</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/project-figma-starter-start.gif", caption: "Starting a run with a bare Asana ticket link" },
        ],
      },
      {
        type: "text",
        body: `<p>From there it reads the ticket, works out which brand it belongs to, duplicates the template, fills in the cover with the ticket title, REQ number (hyperlinked back to Asana), and your initials, sets the correct brand mode at the page level, and files the result in the right brand folder. One manual step is left: Figma doesn't allow setting a thumbnail programmatically, so you right-click the cover frame and choose "Set as thumbnail" yourself.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          {
            src: "/project-figma-starter-hero.gif",
            caption: "Claude finishing a run of /figma-project-starter, with the reasoning trail and finished file link",
          },
        ],
      },
      {
        type: "text",
        body: `<p>What I like most about how it runs is that it doesn't just hand you a file. It shows its work. When the brand isn't obvious from the ticket alone, it says so and shows the judgment call it made rather than guessing silently, so nothing ships on-brand by accident.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/project-figma-starter-brand-modes.gif", caption: "Switching through brand variable modes on the cover page" },
        ],
      },
      {
        type: "text",
        heading: "Rolling It Out",
        body: `<p>I shipped this as a real tool, not a demo. I wrote the setup instructions, walked the team through the new process in Slack, recorded two short before/after clips showing the manual way next to the new one, and asked people to test it and flag anything broken. It's since become part of how the marketing design team actually starts projects, running across the Feedonomics, BigCommerce, Commerce, and Makeswift brand folders inside our shared Figma team.</p>`,
      },
      {
        type: "text",
        heading: "Where It Landed",
        body: `<p>This was built because five minutes of file setup and repeated constantly across a team, adds up to a lot of lost time and a lot of small inconsistencies. The measure of whether it worked isn't the AI part, it's whether a designer can open a ticket and get straight to designing without thinking about the file at all. That's what it does now.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/project-figma-starter-folder.webp", caption: "Feedonomics brand folder in the shared Figma team, every cover filled in with title, REQ number, and initials" },
          { src: "/project-figma-starter-cover-example.webp", caption: "Another finished cover, built for a BigCommerce ticket in the same run" },
        ],
      },
    ],
  },
  {
    slug: "feedonomics-rebrand-design-system",
    title: "Feedonomics Rebrand & Design System",
    year: 2026,
    description: "A Feedonomics rebrand built on multi-brand Figma tokens, engineering-ready component specs, and a developer review loop, shipped in Makeswift.",
    ogImage: "/project-feedonomics1.jpg",
    thumbnail: "/feedonomics-data-journey-animated.svg",
    showOnHomepage: true,
    tags: ["Design System", "Web Design"],
    tools: ["Figma", "Makeswift", "Contentful"],
    client: "Feedonomics",
    clientUrl: "https://feedonomics.com/",
    content: [
      {
        type: "text",
        heading: "The Project",
        body: `<p><a href="https://feedonomics.com/" target="_blank" rel="noopener noreferrer">Feedonomics</a> is one of three brands under <a href="https://www.commerce.com/" target="_blank" rel="noopener noreferrer">Commerce</a>, alongside <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer">BigCommerce</a> and <a href="https://www.makeswift.com/" target="_blank" rel="noopener noreferrer">Makeswift</a>. What started as a brand refresh turned into a full rebrand over six months. Everything but the logo changed, and the site moved to <strong>Makeswift</strong> for page building and <strong>Contentful</strong> for content, the same setup BigCommerce already used.</p><p>I led the design system. That meant turning the new brand into tokens, type, spacing, and components that developers could build and publishers could use long after launch.</p><p>Here is what this covers:</p><ul><li>Feedonomics tokens in Figma and Makeswift, and how pages use them</li><li>Component documentation for developers</li><li>The review process with developers, web publishing, and SEO</li><li>The resources section, before and after</li><li>What I recommend</li></ul>`,
      },
      {
        type: "compare",
        before: { src: "/project-feedonomics2.webp", alt: "The previous Feedonomics homepage, a long page in dark navy and bright blue", label: "Before" },
        after: { src: "/feedonomics-homepage.webp", alt: "The redesigned Feedonomics homepage with the headline Go from invisible to everywhere", label: "After" },
        liveUrl: "https://feedonomics.com/",
      },
      {
        type: "text",
        heading: "The Team",
        body: `<p>Four of us did this work. <a href="https://www.linkedin.com/in/robrodriguezwork/" target="_blank" rel="noopener noreferrer"><strong>Rob Rodriguez</strong></a> led brand and art direction: color, gradients, type pairing, and brand graphics. <a href="https://www.linkedin.com/in/sydneybonner-copywritingconsultant/" target="_blank" rel="noopener noreferrer"><strong>Sydney Bonner</strong></a>, our copywriter, was the brains behind the brand's tone and voice. She moved the homepage from "The market leader in product feed management" to "Go from invisible to everywhere," and her copy guidelines set the rules: lead with benefits instead of features, write for everyone from executives to engineers, and sound like clever, confident feed nerds. Lines like "Make your products work harder. No coffee required." came from her. <a href="https://www.linkedin.com/in/jc-roque/" target="_blank" rel="noopener noreferrer"><strong>Juan Roque</strong></a>, our senior web designer, designed and built most of the pages. I owned the design system: the Feedonomics tokens in our multi-brand Figma library, the component specs, and the build in Makeswift.</p><p>We leaned on each other the whole way. Rob's brand decisions became tokens I could name and hand to developers. Juan's pages tested each component before it went to development, and a lot of his feedback is in the review doc. By the second half of the project, I was working with our developers almost every day, turning specs into real components.</p>`,
      },
      {
        type: "text",
        heading: "The Goals",
        body: `<p>Before building anything, I wrote down what the system had to do:</p><ul><li><strong>One source of truth.</strong> Feedonomics tokens live in the same Figma library as Commerce and BigCommerce.</li><li><strong>Tokens do the styling.</strong> Set the brand, pick a surface, and type, color, and spacing follow. No hex values typed into pages.</li><li><strong>Specs answer the questions.</strong> Every component documents its layout, states, motion, and breakpoints.</li><li><strong>Publishers can build pages on their own.</strong> A short list of Makeswift settings, clear names, and good defaults.</li><li><strong>Three sign-offs.</strong> Design, web publishing, and SEO approve every component.</li></ul>`,
      },
      {
        type: "text",
        heading: "Tokens First",
        body: `<p>Rob's brand work came to me as colors, type, and art direction. I turned it into Figma variables in our <a href="/work/commerce-multi-brand-system">multi-brand library</a>, next to Commerce and BigCommerce, with the same names and structure. That way a component built once works for all three brands.</p><p>The tokens come in two layers:</p><ul><li><strong>Primitives</strong> are the raw values: 26 Feedonomics colors (10 brand colors and 16 more in Peach, Green, Yellow, and Purple ramps), plus number scales for widths, padding, spacing, and animation timing.</li><li><strong>Brand tokens</strong> give those values a job: text color, font, size, line height, weight, surface, radius, borders, and padding. Each has a value for Commerce, BigCommerce, and Feedonomics, plus mobile.</li></ul><p>Components only use brand tokens. A section uses <em>Surface/Inverse</em>, not Navy. So switching a component from BigCommerce to Feedonomics is one setting.</p>`,
      },
      {
        type: "carousel",
        perView: 1,
        ratio: "16 / 10",
        contain: true,
        images: [
          { src: "/project-feedonomics-tokens-01.webp", alt: "Figma variables panel showing the Feedonomics brand color primitives, Navy, Shadow, Slate, Cobalt, Sky, Ice, Frost, Stone, Peach, and Mint, with hex values", caption: "01 · Primitive: Feedonomics brand colors" },
          { src: "/project-feedonomics-tokens-02.webp", alt: "Figma variables panel listing the Feedonomics expanded color ramps, Peach, Green, Yellow, and Purple from 100 to 400", caption: "02 · Primitive: Feedonomics expanded ramps" },
          { src: "/project-feedonomics-tokens-03.webp", alt: "Figma number variables for layout frame widths from 1800 to 390, container widths of 1704, 1440, and 1140, and a padding scale", caption: "03 · Primitive: frame, container, and padding" },
          { src: "/project-feedonomics-tokens-04.webp", alt: "Brand collection in Figma with CM, BC, and FDX columns mapping text color and typeface tokens to primitives for each brand", caption: "04 · Brand: text color and typeface per brand" },
          { src: "/project-feedonomics-tokens-05.webp", alt: "Brand collection font size tokens from Display 1 to Type XS with separate values for CM, BC, and FDX", caption: "05 · Brand: font size per brand" },
          { src: "/project-feedonomics-tokens-06.webp", alt: "Brand collection weight tokens and surface tokens, with Base, Secondary, Tertiary, and Inverse mapped to each brand's colors", caption: "06 · Brand: weight and surface" },
          { src: "/project-feedonomics-tokens-07.webp", alt: "Brand collection spacing tokens, viewport widths, and section padding mapped to number primitives for each brand", caption: "07 · Brand: spacing, viewport, and section padding" },
          { src: "/project-feedonomics-tokens-08.webp", alt: "Brand collection duration tokens from 0 to 300 milliseconds and border color tokens for each brand", caption: "08 · Brand: motion duration and borders" },
        ],
      },
      {
        type: "text",
        heading: "Tokens Applied to the Page",
        body: `<p>In the Feedonomics page files, each page is set to the FDX brand once. After that, designers pick shared text styles and surface tokens, and the Feedonomics values fill in.</p><ul><li><strong>Type.</strong> A hero headline uses <em>Display 2</em>, which is 64/70.4 for Feedonomics. The same style gives BigCommerce its own size and gets smaller on mobile.</li><li><strong>Surface.</strong> Sections use surface tokens instead of colors: Base (Stone), Secondary (White), and Tertiary (Ice) for light sections, and three Inverse tokens for the navy ones.</li><li><strong>Spacing.</strong> On desktop, a 1440px frame, 1140px content width, 150px side padding, and 96px top and bottom. On mobile, a 390px frame with 24px and 64px.</li></ul><p>Makeswift doesn't connect to Figma. There's no sync and no MCP, so I built the same color and type tokens by hand in both, with matching names. Designers and publishers can check either one and get the same values.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/project-feedonomics-tokens-applied-type.webp", alt: "Feedonomics product page in Figma with the hero headline selected and the Multi-Brand text styles menu showing Display 2 at 64/70.4", caption: "Type: the hero headline uses Display 2, which resolves to the Feedonomics size" },
          { src: "/project-feedonomics-tokens-applied-surface.webp", alt: "The same Feedonomics page in Figma with the hero section selected and its fill set to the Surface/Inverse token from the Multi-Brand library", caption: "Surface: the hero section is filled with Surface/Inverse, not a hex value" },
        ],
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/feedonomics-makeswift-tokens-combined.webp", alt: "Two Makeswift design panels side by side on a dark background: the Feedonomics brand colors from Navy to Stone, and the text styles from Display 1 at 72px to Heading 5 at 24px", caption: "Makeswift · The same color and type tokens, rebuilt by hand" },
        ],
      },
      {
        type: "text",
        heading: "A Kitchen Sink for Publishers",
        body: `<p>Tokens alone don't build pages. In Makeswift I also built what we call the kitchen sink: about 50 ready-made sections, including heroes, multi-column layouts, forms, and stats blocks, all using the same tokens and spacing as Figma. Publishers pick a section, drop in their content, and don't need a designer to lay out the page.</p>`,
      },
      {
        type: "compare",
        before: { src: "/project-feedonomics4.webp", alt: "The previous Feedonomics advertising feed management page", label: "Before" },
        after: { src: "/project-feedonomics5.webp", alt: "The redesigned Feedonomics advertising feed management page", label: "After" },
        liveUrl: "https://feedonomics.com/product/advertising-feed-management/",
      },
      {
        type: "text",
        heading: "Documentation for Developers",
        body: `<p>Every component and page template has a documentation frame in the Figma file, with its status in the label: Ready for Review, Ready for Dev, or approved. Developers could always tell what was safe to build.</p><p>Each spec covers the same things:</p><ul><li><strong>Content rules.</strong> What's required, what's optional, and what happens when something is missing.</li><li><strong>States and motion.</strong> Hover, press, and focus, with timing. For example, the primary button's corners and inner glow share one 300ms ease.</li><li><strong>Breakpoints.</strong> Desktop, small desktop, tablet, and mobile. Long pages like success stories also show scrolling: the sticky table of contents on desktop turns into a dropdown on smaller screens.</li><li><strong>Makeswift settings.</strong> What publishers can change, what each setting is called, and its default.</li></ul>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/project-feedonomics-docs-overview.webp", alt: "Figma documentation page with frames for Resources Featured Hero, Resources Feed, Blog L3, Secondary Navigation, Eyebrow, and Breadcrumbs, each labeled with its review status", caption: "The documentation page, with each frame's status in its label" },
          { src: "/project-feedonomics-docs-breakpoints.webp", alt: "Success story child page spec showing desktop, desktop small, tablet, and mobile layouts, each at rest and on scroll", caption: "Success story template: four breakpoints, at rest and on scroll" },
        ],
      },
      {
        type: "text",
        heading: "The Review Process",
        body: `<p>The <strong>FDX Component Review</strong> is the doc where we worked through every component with developers. It has a tab for each of the nearly 40 components and page templates, and each one moved through the same statuses: not started, in review, in development, and approved. Approved meant design, web publishing, and SEO had all signed off.</p><p>Each tab links to the Makeswift test page and sorts feedback by topic, with a name on every note and a checkmark when it's fixed. I led design review, and more than 60 of the notes are mine. A few examples:</p><ul><li><strong>Footer.</strong> A 1140px content width, with 64px side padding on desktop, 32px on large screens, and 24px on smaller ones, to match the nav and other sections.</li><li><strong>Standard Card.</strong> No hover effects when a card has no link. I also removed three link settings that caused spacing problems and set one default button.</li><li><strong>Lists.</strong> Bullets take the text color, with a hanging indent and 8px spacing.</li><li><strong>Scroll-in container.</strong> An 800ms default transition, a setting for when the animation starts, and related settings grouped into a folder so the panel is easier to use.</li></ul><p>SEO and accessibility fixes went through the same process. Linked cards became real links, the button inside a card became plain text so there isn't a button inside a link, and accordion titles changed from H5 to H3 without looking any different. Because those fixes live in the components, every page gets them.</p>`,
      },
      {
        type: "text",
        heading: "A Closer Look: Quote Slides",
        body: `<p>Quote Slides is built from two parts already in the system: Pill Tabs with one pill per customer, and a quote card with the logo, quote, name, a Read case study link, and an optional stats column.</p><p>The card adjusts to its content. If a customer has stats, up to two show on the right. If they don't, like PUMA and Monwell, that column goes away instead of sitting empty. The pills use the spacing and mobile wrapping we settled on in review.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/project-feedonomics-quote-slides.mp4", alt: "Screen recording of the Quote Slides section: clicking through pill tabs for The Walking Company, Monwell, PUMA, City Beach, and Fox Racing swaps the quote card, and the stats rail disappears for customers without stats", caption: "Quote Slides: one pill per customer, and the stats rail only when there are stats" },
        ],
      },
      {
        type: "text",
        body: `<p>For publishers, I set up a quote library in Makeswift. Every approved quote is on one page in an accordion, one customer per row, with the finished card inside. Publishers can find a quote and its stats without asking design, and churned customers are labeled so old quotes don't get used.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/project-feedonomics-quote-library.webp", alt: "Makeswift library page listing customers in an accordion, with Dell expanded to show its quote card, logo, attribution, and two stats", caption: "The quote library in Makeswift, organized for publishers" },
        ],
      },
      {
        type: "text",
        heading: "The Component System, in Full",
        body: `<p>Here's everything we designed, documented, and shipped, grouped by what it does.</p>`,
      },
      {
        type: "componentTable",
        groups: [
          {
            category: "Navigation & Structure",
            items: ["Primary Navigation (Mega Menu)", "Secondary Navigation", "Breadcrumbs", "Footer"],
          },
          {
            category: "Content & Typography",
            items: ["Eyebrow", "Bulleted & Numbered Lists", "Gradient Text", "Quote Block", "Icon System"],
          },
          {
            category: "Interactive & Motion",
            items: [
              "Accordion",
              "Pill Tabs",
              "Carousel",
              "Scroll-Triggered Reveal",
              "Expanding CTA Banner",
              "Text Animation (Typewriter Effects)",
              "Scroll Progress Bar",
              "Animated Illustrations (Lottie)",
            ],
          },
          {
            category: "Media",
            items: ["Custom Video Embed", "Video Thumbnail Card", "Logo Grid"],
          },
          {
            category: "Data, Cards & Forms",
            items: ["Data Table", "Embedded Table", "Lead Capture Form", "Buttons & Button Group", "Standard Card", "Banner"],
          },
          {
            category: "Layout Templates",
            items: [
              "River Layout (Alternating Media + Text)",
              "Resources Hub",
              "Blog Home & Article Template",
              "Success Stories Hub & Template",
              "Guides & Whitepapers Hub",
              "Webinars Hub",
              "Integrations Directory",
            ],
          },
        ],
      },
      {
        type: "text",
        heading: "A Resources System That Scales",
        body: `<p>The biggest piece of the project was the resources section. <a href="https://feedonomics.com/" target="_blank" rel="noopener noreferrer">Feedonomics</a> has a blog, success stories, webinars, and gated guides and whitepapers, and the old site built each one separately. I designed one layout system for the resources hub, plus child page templates that reuse as much of it as possible and only change what each content type needs.</p>`,
      },
      {
        type: "compare",
        before: { src: "/project-feedonomics9.webp", alt: "The previous Feedonomics blog page with featured and recent posts", label: "Before" },
        after: { src: "/project-feedonomics10.webp", alt: "The redesigned Feedonomics resources page with featured blogs, filters, and a grid of articles", label: "After" },
        liveUrl: "https://feedonomics.com/blog/",
      },
      {
        type: "text",
        body: `<p>The blog post template follows the same approach. The old one was a white page with a generic sidebar. The new one uses the Stone background, a table of contents that follows you as you scroll, share and newsletter links, a key highlights box at the top, and the same type and spacing as every other page. Success stories, webinars, and guides use the same frame.</p>`,
      },
      {
        type: "compare",
        before: { src: "/project-feedonomics-blog-child-before.webp", alt: "The previous Feedonomics blog post template, a white page with a single article column and a sidebar of search, popular posts, categories, and a subscribe box", label: "Before" },
        after: { src: "/project-feedonomics-blog-child-after.webp", alt: "The redesigned Feedonomics blog post template on a stone background, with a table of contents, share links, and newsletter signup in the left rail and a key highlights card above the article", label: "After" },
      },
      {
        type: "text",
        heading: "What I Recommend",
        body: `<p>If you're doing a rebrand and a platform move at the same time, build the system in the order people will need it. Tokens first, so the brand has names before it has pages. Then documentation, so developers build from specs instead of screenshots. Then a review process with real sign-offs, so "done" means the same thing to design, publishing, and SEO.</p><p>The real test of a design system is whether someone who wasn't on the project can build a page next quarter without breaking anything. That's what we built this for.</p>`,
      },
    ],
  },
  {
    slug: "brand-systems-claude-design",
    title: "Brand Systems in Claude Design",
    year: 2026,
    description: "Three Claude Design systems for Commerce, BigCommerce, and Feedonomics that let anyone at the company build on-brand decks without waiting on design.",
    ogImage: "/project-claude-design1.jpg",
    thumbnail: "/brand-systems-deck-typing-animated.svg",
    showOnHomepage: false,
    tags: ["Design System", "Automation"],
    tools: ["Claude Design", "Claude", "Figma"],
    client: "Commerce",
    clientUrl: "https://www.commerce.com/",
    content: [
      {
        type: "text",
        heading: "The Opportunity",
        body: `<p>Commerce is the parent company behind <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer">BigCommerce</a> and <a href="https://feedonomics.com/" target="_blank" rel="noopener noreferrer">Feedonomics</a>. Three brands, each with its own colors, type, and voice, and one design team supporting all of them.</p><p>A lot of what reaches that team isn't design work. It's a sales deck that needs to look right, a team update for leadership, a partner overview due tomorrow. Most of the time people build these themselves in Google Slides, and every deck passes through a lot of hands. By the time it reaches the brand team, the fonts have drifted, the colors are close but not quite right, and a logo is stretched. Reviewing all of that takes time the brand team doesn't have.</p><p>When <strong>Claude Design</strong> came out, I wanted to learn it properly, not just try it. A design system in Claude Design isn't a library you reference. It's an environment that builds with you, and anyone at the company can open it. That made it a real chance to give people a way to make on-brand work without a designer in the room.</p><p>Here is what this covers:</p><ul><li>Who it's for and what it had to do</li><li>How I learned the tool and built the systems</li><li>Three brands, three systems</li><li>Decks, the biggest time saver</li><li>From a brief to a finished deck</li><li>Rolling it out</li><li>What I recommend</li></ul>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          {
            src: "/project-brand-systems-list.webp",
            alt: "Claude Design's design systems list filtered to Marketing, showing the BigCommerce, Feedonomics, and Commerce systems, all published, with Commerce marked as the org default",
            caption: "The three marketing systems in Claude Design. Commerce is the org default because it's the parent brand",
          },
        ],
      },
      {
        type: "text",
        heading: "Who It's For",
        body: `<p>This wasn't built for designers first. It was built for everyone else at the company: sales, marketing, product, content writers, and leadership, all the way up to our CEO. The goal was to take weight off the brand team, not to add another tool for designers.</p><p>That changed how I built it. A designer knows what a token is and why a logo needs clear space. Most people opening this don't, and shouldn't have to. So every brand rule had to live inside the system, where it applies on its own, rather than in a guideline doc someone has to find and read first.</p>`,
      },
      {
        type: "text",
        heading: "The Goals",
        body: `<p>Before building anything, I wrote down what the systems had to do:</p><ul><li><strong>On brand without a designer.</strong> Someone who has never opened a brand guide should still get colors, type, logos, and voice right.</li><li><strong>One system per brand.</strong> Commerce, BigCommerce, and Feedonomics each get their own system, and none of them borrow from the others.</li><li><strong>Rules live in the system, not the prompt.</strong> If a rule only exists in a prompt, it depends on someone typing it. If it lives in the system, everyone gets it for free.</li><li><strong>Get people 90% of the way there.</strong> The system handles layout, type, and brand. People add their own images and final details.</li></ul>`,
      },
      {
        type: "text",
        heading: "Learning the Tool",
        body: `<p>Every system started the same way, from three documents: the brand guidelines, a token spec exported from our <a href="/work/commerce-multi-brand-system">multi-brand Figma system</a>, and an output spec listing what the system should produce and at what size. From those, Claude Design built the tokens, type, logos, voice rules, a marketing UI kit, and a slide system for each brand. Because every system started from the same three inputs, the process is repeatable for any brand we add later.</p><p>Getting from a first draft to something people could trust took a lot of iteration, and two habits made that faster.</p><p><strong>I talked to it like a designer.</strong> Most of my requests were dictated in plain language, the same way I'd give feedback in a design review. "This illustration feels basic, here's a spacing and grid style I like, make it a light version in our colors." "Cards across the deck feel too bubbly, tighten them up." When a slide went too far, I asked for simpler options, and got a detailed, a medium, and a simple version to choose from.</p><p><strong>I used Claude as a second opinion.</strong> For bigger fixes, I'd let Claude Design investigate and propose a plan, then paste that into a separate Claude chat to pressure-test it. Claude would help me make the calls and write back a precise answer, and I'd paste that into Claude Design. Going back and forth between the two caught bugs faster than either one alone, and made sure every fix landed at the system level instead of on one slide.</p>`,
      },
      {
        type: "text",
        heading: "Three Brands, Three Systems",
        body: `<p>My first instinct was one system for every brand. It didn't work. When brands share a system, everything starts to blend: Feedonomics pages pick up BigCommerce styling, and sister-brand logos show up where they shouldn't. People can hold brand context in their heads. AI can't, and if two things can be confused, they will be.</p><p>So each brand got its own system, and each one forbids the others' tokens, type, and visuals. The same principle runs through our Figma library: shared foundations, separate brands.</p>`,
      },
      {
        type: "componentTable",
        groups: [
          {
            category: "Commerce",
            items: ["\"We mean business.\"", "Pearl and Indigo surfaces, Iris accents", "One highlighter per slide", "Executive, portfolio-level voice", "The org default for new projects"],
          },
          {
            category: "BigCommerce",
            items: ["\"Outgrow the ordinary.\"", "White surfaces, BC Blue for every CTA", "Second person, sentence case, no exclamation points", "Confident, outcome-first voice"],
          },
          {
            category: "Feedonomics",
            items: ["\"Go from invisible to everywhere.\"", "Stone and Navy, Peach as a small accent", "Clever, unapologetic voice, \"Powered by nerds\"", "One-pager and PDF templates"],
          },
        ],
      },
      {
        type: "text",
        heading: "Decks, the Biggest Time Saver",
        body: `<p>Of everything the systems can make, decks save the most time. They're also the thing people outside design build most often, and the thing that drifts off brand fastest.</p><p>Each system has its own slide set at 1920×1080: covers, section dividers, content, stats, big quotes, card grids, tables, and closing slides. Someone picks a brand, describes what they need in plain language, and gets a deck that is already on brand. It isn't perfect. But it gets them about 90% of the way there, and they finish it by adding their own images and a few details. For the brand team, that means decks show up already using the right type, color, and logos.</p>`,
      },
      {
        type: "text",
        body: `<h3>The template</h3><p>The Commerce template deck, plus a few of the extra layouts the system can pull from.</p>`,
      },
      {
        type: "carousel",
        perView: 1,
        ratio: "16 / 9",
        contain: true,
        images: [
          { src: "/project-brand-systems-template-01.webp", alt: "Commerce deck cover on Pearl with the headline We're powering what's next and the Commerce logo", caption: "01 · Cover" },
          { src: "/project-brand-systems-template-02.webp", alt: "Commerce family slide with three white cards for BigCommerce, Feedonomics, and Makeswift", caption: "02 · The family" },
          { src: "/project-brand-systems-template-03.webp", alt: "BigCommerce slide on dark Indigo with a headline, two stats, and the BigCommerce logo in a white tile", caption: "03 · Sub-brand, dark" },
          { src: "/project-brand-systems-template-04.webp", alt: "Makeswift slide on Iris with a headline, feature tags, and the Makeswift logo in a white tile", caption: "04 · Sub-brand, Iris" },
          { src: "/project-brand-systems-template-05.webp", alt: "Four numbered purpose cards in Iris, Indigo, Lilac, and a pale lime highlight", caption: "05 · Numbered grid" },
          { src: "/project-brand-systems-template-06.webp", alt: "Layered ecosystem diagram with reach, storefront, data feed, visual experience, and a Commerce core foundation", caption: "06 · Ecosystem diagram" },
          { src: "/project-brand-systems-template-07.webp", alt: "Hero stat layout with a large 60K+ figure beside a short headline and supporting copy", caption: "07 · Hero stat" },
          { src: "/project-brand-systems-template-08.webp", alt: "Timeline layout marking milestones from 2009 to 2026", caption: "08 · Timeline" },
          { src: "/project-brand-systems-template-09.webp", alt: "Roadmap layout with four workstreams across four quarters in Iris, Indigo, and Lilac blocks", caption: "09 · Roadmap" },
          { src: "/project-brand-systems-template-10.webp", alt: "Comparison matrix showing which capabilities BigCommerce, Feedonomics, and Makeswift cover", caption: "10 · Comparison table" },
          { src: "/project-brand-systems-template-11.webp", alt: "Dark Indigo quarter plan with four columns of commitments", caption: "11 · Quarter plan, dark" },
          { src: "/project-brand-systems-template-12.webp", alt: "Closing slide on Indigo with the line We mean business and contact links", caption: "12 · Closing" },
        ],
      },
      {
        type: "text",
        heading: "From a Brief to a Finished Deck",
        body: `<p>To show what that looks like, I wrote a short brief the way a coworker would: plain notes, no design direction, just the copy for each slide and a line saying "keep it simple, most people watching aren't designers." I dropped it into the Commerce system and asked for a deck.</p><p>This is what came back. I named a few layouts, like stats and a big quote, and the system handled the rest. The content is nothing like the template deck above, but every slide follows the same rules:</p><ul><li><strong>Logo placement.</strong> The Commerce logo sits in the same bottom-left spot on every content slide, with the same clear space.</li><li><strong>Page numbers.</strong> Always bottom right, same size, same color, and left off the cover.</li><li><strong>Legal line.</strong> "© Commerce. All rights reserved. Confidential." runs up the right edge of every slide.</li><li><strong>Type and spacing.</strong> Headlines, body copy, and cards share one type scale and the same margins from slide to slide.</li><li><strong>Color.</strong> Surfaces stay in the Commerce palette, and a row of stats shares one color.</li></ul><p>That's the part that takes the load off the brand team. Anyone can write the notes. The system makes sure the result looks like Commerce.</p>`,
      },
      {
        type: "text",
        body: `<h3>The output</h3><p>The deck the Commerce system built from that brief.</p>`,
      },
      {
        type: "carousel",
        perView: 1,
        ratio: "16 / 9",
        contain: true,
        images: [
          { src: "/project-brand-systems-output-01.webp", alt: "Cover slide reading Make it on brand, without the wait, with presenter and date", caption: "01 · Cover" },
          { src: "/project-brand-systems-output-02.webp", alt: "Why we built this slide with the headline on the left and the problem statement on the right", caption: "02 · Why we built this" },
          { src: "/project-brand-systems-output-03.webp", alt: "Stats slide with three cards: 3 brand systems, 90% of the way there, and 5 minutes to learn", caption: "03 · Stats" },
          { src: "/project-brand-systems-output-04.webp", alt: "Three numbered step cards: pick your brand, describe what you need, finish it", caption: "04 · Three steps" },
          { src: "/project-brand-systems-output-05.webp", alt: "Three brands, ready to go, with a color swatch card for Commerce, BigCommerce, and Feedonomics", caption: "05 · Three brands" },
          { src: "/project-brand-systems-output-06.webp", alt: "Section divider on Indigo reading What it takes care of", caption: "06 · Section divider" },
          { src: "/project-brand-systems-output-07.webp", alt: "What's in every system: six cards for colors, type, logos, layouts, icons, and voice", caption: "07 · What's in every system" },
          { src: "/project-brand-systems-output-08.webp", alt: "Two columns comparing what the system handles in an Iris card with what you handle in a white card", caption: "08 · Two columns" },
          { src: "/project-brand-systems-output-09.webp", alt: "Big quote slide reading Every rule lives in the system, so you don't have to remember it", caption: "09 · Big quote" },
          { src: "/project-brand-systems-output-10.webp", alt: "Closing slide on Indigo reading Questions? with a pointer to the walkthrough video", caption: "10 · Closing" },
        ],
      },
      {
        type: "text",
        heading: "Templates for Repeat Work",
        body: `<p>Some requests come in over and over with the same structure. For those, I build templates inside the system, so the layout rules are locked in and only the content changes. The BigCommerce system has a one-pager and whitepaper template and a case study one-pager. The case study template grew into its own project: <a href="/work/claude-design-case-study-pdfs">a case study PDF system</a> that replaced hand-built InDesign files.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          {
            src: "/project-brand-systems-templates.webp",
            alt: "Claude Design's templates list showing a BigCommerce Case Study One-Pager and a BigCommerce One-Pager / Whitepaper, both built on the Marketing BigCommerce design system",
            caption: "Templates built on the BigCommerce system",
          },
        ],
      },
      {
        type: "text",
        heading: "Rules Written From Real Decks",
        body: `<p>Most of the rules in the deck systems exist because a deck went wrong. A logo got a vertical line and a tagline next to it. A row of cards got a different accent color on each one. Three stats came back in three different colors. Each time, the fix went into the system, not into one deck, so it never happened again.</p><p>The Commerce system goes one step further. It runs a check on every deck and flags anything that breaks a brand rule: an accent color used as a background, a logo without enough clear space, more than one highlighted phrase on a slide. Problems get caught before anyone on the brand team has to review them.</p><p>That's the part of design systems work that rarely makes it into a portfolio: the patient job of writing rules in response to failure. It's most of the actual craft.</p>`,
      },
      {
        type: "text",
        heading: "Who Uses It for What",
        body: `<p>Not every asset carries the same risk. A rough wireframe that's slightly off costs nothing. A deck that's off brand in front of a customer can't. I worked through where the lines should sit with our creative director, who brought the view of how requests actually move through the creative team day to day. We decided based on stakes:</p><ul><li><strong>Decks are self-serve.</strong> The slide system has tight enough structure to hold the brand on its own.</li><li><strong>One-pagers and PDFs go through design.</strong> The system handles the layout, and a designer finishes and reviews it. I wrote about that in the <a href="/work/claude-design-case-study-pdfs">case study PDF system</a>.</li><li><strong>Landing page wireframes start in Claude Design.</strong> It's quick at turning a brief into a page built from the brand's real sections, so the web team starts from a structure instead of a blank page.</li></ul>`,
      },
      {
        type: "text",
        heading: "Rolling It Out",
        body: `<p>A system only helps if people know it exists and trust it. I recorded a five-minute Loom that walks through what the systems are, how to start a deck, and how they fit into the way people already work. Because most of the people it's for aren't designers, the video skips tokens and components and focuses on the steps: pick your brand, describe what you need, add your images, share.</p><p>Commerce is set as the org default, so anyone who starts a new project in Claude Design lands on the parent brand unless they choose BigCommerce or Feedonomics.</p>`,
      },
      {
        type: "text",
        heading: "What I Recommend",
        body: `<p>If you're building a design system in Claude Design, build it around the people who aren't designers. Start from real specs, not screenshots, so every system is built the same way. Give each brand its own system, because AI doesn't handle ambiguity well. Put every rule in the system instead of the prompt. And aim for 90%, not 100%. Letting people finish the last 10% themselves is what makes them want to use it.</p><p>The medium is new, but the job isn't. Scope tightly, write the rule when you find the failure, and make the right thing the easy thing.</p>`,
      },
    ],
  },
  {
    slug: "flow-stays",
    title: "Flow Stays",
    year: 2023,
    description: "Brand identity for Flow Stays, a focus retreat concept: a badge, cairn, and wordmark logo suite built on forest greens and a single apricot accent.",
    ogImage: "/project-flow-stays1.jpg",
    thumbnail: "/flow-stays-logo-spec-animated.svg",
    showOnHomepage: false,
    tags: ["Branding"],
    tools: ["Adobe Illustrator", "Figma"],
    client: "Flow Stays",
    clientUrl: "https://www.flowstays.com/",
    content: [
      {
        type: "text",
        heading: "A Brand Built Around Getting Into the Zone",
        body: `<p>Flow Stays is a retreat concept designed for teams and individuals who need space to do their best work. The idea is simple: get out of the office, into nature, and actually focus. The brand needed to feel calm and grounded without being too soft, so the identity leans on deep forest greens, natural textures, and a mark that nods to both shelter and the outdoors.</p><p>You can check out the live site at <a href="https://www.flowstays.com/" target="_blank" rel="noopener noreferrer">flowstays.com</a>.</p>`,
      },
      {
        type: "text",
        body: `<p>One lockup was never going to cover it. The mark has to hold up on a welcome sign at the head of a gravel drive, on a key card, and on a square avatar, so the identity was drawn as a small suite instead. The primary badge keeps the whole scene, the tent roof, the ridgeline, the rising sun, and the tree line. When there isn't room for that, the cairn steps out on its own beside a stacked wordmark. When there's less room still, the wordmark runs flat and the cairn holds the space between FLOW and STAYS. The same geometry sits underneath all three, and that is what keeps them reading as one brand rather than three that happen to share a color.</p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/flow-stays-logo-suite-animated.svg", alt: "Flow Stays logo suite: the forest badge, a stacked wordmark with the cairn icon, and a horizontal wordmark" }],
      },
      {
        type: "text",
        body: `<p>The badge gets most of its calm from the space around it. Clearspace is measured off the lockup's own height, a third of it on every side, with nothing allowed to cross the line. Defining it as a ratio rather than a pixel value means the rule scales with the mark, so it still holds on a trailhead sign and on a favicon without anyone having to measure it twice.</p>`,
      },
      {
        type: "text",
        body: `<p>Color carries the rest of it. The four greens run from a near black forest tone down to a pale sage, which gives the system somewhere to go without ever reaching for a second hue. Apricot is the only warm note in the set, and it stays rare on purpose, a sunrise rather than a highlight. Salt white does the quiet work of keeping everything else breathing.</p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/flow-stays-palette-animated.svg", alt: "Flow Stays color palette: four greens from Green 400 to Green 100, Apricot, and Salt White" }],
      },
    ],
  },
  {
    slug: "new-office-blank-canvas",
    title: "New Office, Blank Canvas",
    year: 2021,
    description: "A large geometric wall mural illustrated for a new BigCommerce office, built from bold shapes, stripes, and a stylized bird.",
    ogImage: "/project-new-office1.png",
    thumbnail: "/New_Office_Animated.svg",
    showOnHomepage: true,
    tags: ["Illustration"],
    tools: ["Adobe Illustrator"],
    client: "BigCommerce",
    clientUrl: "https://www.bigcommerce.com/",
    content: [
      {
        type: "text",
        heading: "Turning a Blank Wall Into a Mural",
        body: `<p>A new <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer">BigCommerce</a> office came with a lot of empty white wall, and this was a chance to give one of them some personality. I illustrated a large-scale mural in Adobe Illustrator, built from bold geometric shapes, stripes, and half circles that come together around a stylized bird.</p><p>The composition sits on a grid of square tiles, so each section works as its own small piece and the whole thing could stretch to the full length of the wall. Deep navy and blue anchor the palette, with teal, aqua, and a warm orange keeping it lively without overwhelming the room.</p><p>A printed proof came first to check color and scale, and then the finished mural went up across the wall above the desks.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          { src: "/project-new-office2.webp", alt: "Close-up of the geometric mural on the office wall, with a printed proof of the design on a table" },
          { src: "/project-new-office3.webp", alt: "The finished mural spanning an office wall above rows of desks" },
        ],
      },
    ],
  },
  {
    slug: "bynum-golf",
    title: "Bynum Golf",
    year: 2022,
    description: "A Webflow website for golf coach Billy Bynum that helps new and returning students learn about his programs and book private or virtual lessons.",
    ogImage: "/project-bynum-golf1.jpg",
    thumbnail: "/bynum-golf-booking-animated.svg",
    showOnHomepage: false,
    tags: ["Web Design"],
    tools: ["Webflow"],
    client: "Bynum Golf",
    clientUrl: "https://www.bynumgolf.com/",
    content: [
      {
        type: "text",
        heading: "A Simple Site for a 25-Year Pro",
        body: `<p>Billy Bynum has been teaching golf for over 25 years, but he didn't have a website. He wanted something simple: a place where people could learn what kind of instructor he is, see his lesson options, and book a lesson without having to track him down first.</p><p>The site is built in Webflow and covers private in-person lessons at <a href="https://maps.app.goo.gl/TmDcYyowKFp2FwUt9?g_st=ic" target="_blank" rel="noopener noreferrer">Morris Williams Golf Course</a> (great track if you're in the Austin area), virtual lessons, and monthly membership programs. Students can call Billy directly or fill out a form on the site to schedule a lesson. He also wanted a photo of him and his daughter on there, so the site feels personal instead of reading like a generic lesson listing.</p><p>I still make updates to the site from time to time, and yes, the payment is in golf lessons.</p><p>Book today: <a href="https://www.bynumgolf.com" target="_blank" rel="noopener noreferrer">www.bynumgolf.com</a></p>`,
      },
      {
        type: "imageGrid",
        images: [
          { src: "/project-bynum-golf2.webp", alt: "Bynum Golf homepage with a golf course photo, the headline Golf lessons available by appointment, and an introduction from Billy" },
          { src: "/project-bynum-golf3.webp", alt: "Bynum Golf lessons page listing in-person, virtual, Birdie, and Eagle programs" },
        ],
      },
    ],
  },
  {
    slug: "10-year-anniversary",
    title: "10 Year Anniversary",
    year: 2020,
    description: "A retro, streetwear-inspired graphic celebrating ten years of BigCommerce, taken from a type lockup all the way onto apparel.",
    ogImage: "/project-10-year1.jpg",
    thumbnail: "/project-10-year1.webp",
    showOnHomepage: false,
    tags: ["Branding", "Apparel"],
    tools: ["Adobe Illustrator"],
    client: "BigCommerce",
    clientUrl: "https://www.bigcommerce.com/",
    content: [
      {
        type: "text",
        heading: "Swag Worth Keeping",
        body: `<p>When <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer">BigCommerce</a> hit 10 years, the goal was to make something people would actually want to wear. The design leans into a bold retro type treatment, layered with the company's blue and built to feel more like a streetwear graphic than a corporate giveaway. It started as a lockup and ended up on a shirt that people were genuinely excited to get.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          { src: "/project-10-year2.webp", alt: "BigCommerce 10 year anniversary mark pairing the B logo with a retro 10" },
          { src: "/project-10-year3.webp", alt: "Heather grey t-shirt printed with the 10 Year Anniversary, Est. 2009 graphic" },
        ],
      },
    ],
  },
  {
    slug: "five-star-vacation-home-rental",
    title: "Five Star Vacation Home Rental",
    year: 2021,
    description: "A Webflow website for Five Star Vacation Home Rentals, presenting high-end short-term rentals across Austin and the Texas Hill Country.",
    ogImage: "/project-five-star1.jpg",
    thumbnail: "/five-star-cms-animated.svg",
    showOnHomepage: false,
    tags: ["Web Design"],
    tools: ["Webflow"],
    client: "Five Star Vacation Home Rental",
    clientUrl: "https://www.fivestarvhr.com/",
    content: [
      {
        type: "text",
        heading: "A Luxury Rental Business That Needed to Look the Part",
        body: `<p>Five Star Vacation Home Rentals manages high-end short-term rentals across Austin and the Texas Hill Country, but they didn't have a website. They needed one place to show every property they manage so guests could browse the full lineup.</p><p>They came with a big library of professional photography, which is always a great thing to have when designing. Properties are organized by region, and the brand leans into black and gold.</p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/project-five-star2.webp", alt: "Five Star properties page with tabs for Austin, Texas Hill Country, San Antonio, and Lake Austin above a grid of rental photos" }],
      },
      {
        type: "text",
        body: `<p>The site doesn't handle booking itself. Each property links out to its listing on Airbnb or Vrbo, and the reservation happens there. That kept the site focused on one job: showing off the homes.</p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/five-star-booking-handoff-animated.svg", alt: "A Five Star property page with Book on Airbnb and Book on Vrbo buttons, each opening that platform's listing to reserve" }],
      },
      {
        type: "text",
        body: `<p>There's also a separate page for owners who want Five Star to manage their home.</p><p><a href="https://www.fivestarvhr.com/" target="_blank" rel="noopener noreferrer">www.fivestarvhr.com</a></p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/project-five-star3.webp", alt: "Five Star owner page explaining how the company maximizes returns for property owners" }],
      },
      {
        type: "text",
        heading: "Built for Their Team to Run",
        body: `<p>The site also had to be something the owner and his team could keep up on their own. I built it in Webflow and trained their staff on the Webflow CMS, so they can publish blog posts, update photos, and make everyday edits without waiting on me. They've been running the site on their own for a couple of years now and reach out when they need something more technical.</p>`,
      },
    ],
  },
  {
    slug: "mc-salon-spa-studio",
    title: "MC Salon Spa & Studio",
    year: 2021,
    description: "A full rebuild of the MC Salon Spa & Studio website, moved from Wix to Webflow with an online store that later ran headless on Shopify.",
    ogImage: "/project-mc-salon1.jpg",
    thumbnail: "/mc-salon-featured-animated.svg",
    showOnHomepage: false,
    tags: ["Web Design"],
    tools: ["Webflow", "Shopify"],
    client: "MC Salon & Spa",
    content: [
      {
        type: "text",
        heading: "A Full Site Overhaul, Built to Grow",
        body: `<p>MC Salon Spa & Studio started out on Wix with a simple three-page site: a homepage, a shop page with a handful of products, and a contact page. It was hard for them to update, and once COVID hit they needed a lot more from it. They wanted to sell and ship hair products to their clients and offer curbside pickup, so the online shop had to become a real part of the business.</p><p>This was my first big technical project built around an in-depth CMS. I started with the homepage, filling it out with what the salon is about, where to book, a look at their stylists, and contact info at the bottom. From there I built out the service pages, covering everything on their menu: haircuts, color, extensions, hair treatments, styling, and men's grooming, plus their spa and lash services. Then came the bulk of the work, a custom ecommerce store built on the Webflow CMS. After months of designing and developing, the site launched in January 2021.</p>`,
      },
      {
        type: "carousel",
        perView: 2,
        ratio: "1 / 1",
        images: [
          { src: "/project-mc-salon5.webp", alt: "MC Salon homepage with a virtual tour, a specialized approach section, and the latest tutorial video", caption: "Homepage" },
          { src: "/project-mc-salon3.webp", alt: "MC Salon service menu with salon services, pricing, and a schedule an appointment button", caption: "Service menu" },
          { src: "/project-mc-salon2.webp", alt: "MC Salon shop page listing R+Co hair products, with a product card for Atlantis Moisturizing B5 Shampoo", caption: "Shop" },
        ],
      },
      {
        type: "text",
        heading: "When the Payment Processor Pulls the Plug",
        body: `<p>A couple weeks after launch, Stripe flagged the store for carrying CBD products and terminated the account. With so much work already built into the ecommerce pages, scrapping it wasn't an option. So I went headless, with Webflow on the front end and Shopify on the back end.</p>`,
      },
      {
        type: "imageGrid",
        images: [{ src: "/mc-salon-headless-animated.svg", alt: "Diagram of the headless setup: products live in Shopify, each gets a Buy Button code with a unique ID, the code is saved on the matching Webflow CMS item, and each product page renders its own product while checkout runs through Shopify", caption: "Headless setup: Webflow on the front end, Shopify on the back end, with checkout and orders running through Shopify" }],
      },
      {
        type: "text",
        body: `<p>This part was technical and tedious. Every product was uploaded to Shopify, and each product item in the Webflow CMS got its own Shopify buy button embed with a unique code for that product. That way the site wasn't just showing one big embedded Shopify iframe. Each CMS item output its own product dynamically, so the storefront still looked and worked like the rest of the site while checkout ran through Shopify.</p><p>The best part was that the client never had to touch the ecommerce pages. They could manage the whole store in Shopify and the Shopify app, and the site kept up on its own.</p>`,
      },
      {
        type: "text",
        heading: "Where It Ended Up",
        body: `<p>The owners sold the business in 2024, and the site is now run by someone else on a different platform. This version doesn't exist anymore, but it was my first big CMS build and taught me a lot.</p>`,
      },
    ],
  },
  {
    slug: "bc-for-b2b-campaign",
    title: "BC for B2B Campaign",
    year: 2019,
    description: "A BigCommerce campaign aimed at B2B buyers, built on custom isometric illustrations carried across ebooks, social assets, and ad creative.",
    ogImage: "/project-b2b-campaign1.jpg",
    thumbnail: "/project-b2b-campaign1.webp",
    showOnHomepage: false,
    tags: ["Illustration", "Branding"],
    tools: ["InDesign", "Adobe Illustrator"],
    client: "BigCommerce",
    clientUrl: "https://www.bigcommerce.com/",
    content: [
      {
        type: "text",
        heading: "Reaching the People Who Actually Make the Call",
        body: `<p>This was a campaign built to get in front of B2B buyers and decision makers and show them what <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer">BigCommerce</a> could do for their business. At the core of the work was a set of custom isometric illustrations that ran throughout the campaign, giving each piece a consistent visual language across ebook layouts, social assets, and ad creative.</p>`,
      },
      {
        type: "carousel",
        perView: 2,
        ratio: "10 / 13",
        images: [
          { src: "/project-b2b-campaign2.webp", alt: "Ebook page for Section 1, Exploring Ecommerce Platforms, with an isometric illustration", caption: "01 · Exploring ecommerce platforms" },
          { src: "/project-b2b-campaign4.webp", alt: "Ebook page for Section 2, Scale Smarter with ERP Integration", caption: "02 · ERP integration" },
          { src: "/project-b2b-campaign3.webp", alt: "Ebook page for Section 3, Improve Your Buyers' Online Experience with Self-Service Catalog and Account Management", caption: "03 · Self-service buyer experience" },
        ],
      },
      {
        type: "text",
        heading: "From the Page to the Feed",
        body: `<p>The isometric illustrations weren't just built for the ebooks. They carried directly into the social campaign, paired with quotes from industry voices to keep the content feeling credible and grounded. The goal was for someone to see an asset in their feed and immediately recognize it as part of the same campaign family.</p>`,
      },
      {
        type: "carousel",
        perView: 2,
        ratio: "1 / 1",
        images: [
          { src: "/project-b2b-campaign5.webp", alt: "Social quote card from Brady Berhman, CEO of PunchOut2Go, with an isometric illustration", caption: "Brady Berhman · PunchOut2Go" },
          { src: "/project-b2b-campaign6.webp", alt: "Social quote card from Alec Berkley, Channel Sales Executive at Silk Software, with an isometric illustration", caption: "Alec Berkley · Silk Software" },
          { src: "/project-b2b-campaign7.webp", alt: "Social quote card from Matt Osborn, Director of Marketing at Apruve, with an isometric illustration", caption: "Matt Osborn · Apruve" },
        ],
      },
    ],
  },
  {
    slug: "a-quarter-in-design",
    title: "A Quarter in Design",
    year: 2019,
    description: "A quarterly report designed in InDesign that shows a design team's output: productivity data, process improvements, campaign highlights, and illustration.",
    ogImage: "/project-quarter-in-design1.jpg",
    thumbnail: "/project-quarter-in-design1.webp",
    showOnHomepage: false,
    tags: ["Visual Design"],
    tools: ["InDesign"],
    client: "BigCommerce",
    clientUrl: "https://www.bigcommerce.com/",
    content: [
      {
        type: "text",
        heading: "A Showcase of Our Design Team's Growth and Overall Impact",
        body: `<p>Built entirely in InDesign, this quarterly report covers everything our design team accomplished in a single quarter. That includes productivity data, process improvements, campaign highlights, isometric illustrations, and visual collages. Every page was designed to clearly communicate our team's output in a clean, digital and print-ready format.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          { src: "/project-quarter-in-design2.webp", alt: "Cover of the design team's quarterly report" },
          { src: "/project-quarter-in-design3.webp", alt: "Report spread of isometric illustrations and visual collages" },
        ],
      },
      {
        type: "imageGrid",
        images: [
          { src: "/project-quarter-in-design4.webp", alt: "Report spread with process improvements and productivity charts" },
          { src: "/project-quarter-in-design5.webp", alt: "Report spread introducing the team and Big Design Labs" },
        ],
      },
    ],
  },
];

export function getHomepageProjects(): Project[] {
  return projects.filter((p) => p.showOnHomepage);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
