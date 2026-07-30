export interface TextBlock {
  type: "text";
  heading?: string;
  body: string;
}

export interface ImageGridImage {
  src: string;
  caption?: string;
}

export interface ImageGridBlock {
  type: "imageGrid";
  images: (string | ImageGridImage)[];
  /** Adds a light border around each image and extra breathing room (UI screenshots). */
  framed?: boolean;
  /** Lays the images out full-width instead of the two-column grid. */
  wide?: boolean;
}

export interface CompareBlock {
  type: "compare";
  before: { src: string; label?: string };
  after: { src: string; label?: string };
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

export type ContentBlock =
  | TextBlock
  | ImageGridBlock
  | CompareBlock
  | ComponentTableBlock;

export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
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
    slug: "claude-design-consistency-first-design-second",
    title: "Claude Design: Consistency First",
    thumbnail: "/project-claude-design1.jpg",
    showOnHomepage: true,
    tags: ["Exploration", "Design System"],
    tools: ["Claude Design", "Figma"],
    client: "Commerce",
    clientUrl: "https://www.commerce.com/",
    content: [
      {
        type: "text",
        heading: "The Premise",
        body: `<p>Six months ago I built a <a href="/work/commerce-multi-brand-system">multi-brand Figma design system</a> to cover Commerce, <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer">BigCommerce</a>, <a href="https://feedonomics.com/" target="_blank" rel="noopener noreferrer">Feedonomics</a> and <a href="https://www.makeswift.com/" target="_blank" rel="noopener noreferrer">Makeswift</a>. One source of truth across four brands, with shared foundations and brand-specific surfaces. That alone solved most of what we needed it to solve.</p><p>Three months ago I connected that system to <strong>Claude</strong>. The same tokens, components and rules, now accessible to our design and development team through the chat interface. It opened up a different kind of speed. We could prototype website interfaces in Claude using our actual tokens, see real brand output in seconds, and pressure-test the system in ways Figma alone couldn't surface.</p><p>A few weeks ago I started exploring <strong>Claude Design</strong>, and it opened up a different question entirely. This wasn't an integration anymore, it was a different way to think about what a design system even is. Not a library you reference, but an environment that builds with you. And it opens the door to something we couldn't do before, giving marketing the ability to self-serve decks, one-pagers and thumbnails directly from the system.</p><blockquote><p>This wasn't an integration anymore, it was a different way to think about what a design system even is. Not a library you reference, but an environment that builds with you.</p></blockquote><p>The bottleneck I've been trying to solve is real. Four brands, one design team, and a steady drip of low-stakes asset requests that eat the time we need for higher-leverage work. Marketing wants independence. Design wants brand integrity. Both sides are right, and the gap between them is where this exploration lives.</p><p>The question I started with was simple. Could a design system live natively inside an AI environment without losing the consistency that makes it a system in the first place?</p><p>The answer turned out to be yes, mostly. But the more interesting answer is what the experiment taught me about design systems in general.</p><h3>The Architecture Decision</h3><p>The first real decision, going back to the original Figma system, was whether to build one system that covered all four brands or four separate systems with shared foundations. I tried the unified approach first because it felt like the cleaner answer. It wasn't.</p><p>When you mix brands into one system, everything starts to blend. Feedonomics surfaces end up with BigCommerce styling. Sister-brand logos show up where they shouldn't. The system treats every brand asset as fair game, which is exactly what a design system is supposed to prevent.</p><img alt="" src="/project-claude-design2.jpg"><p>Splitting them solved it. Each brand gets its own scoped system with its own tokens, components and rules. The foundations are shared but the surfaces are separate. That decision held up in Figma, and it held up again when I connected the system to Claude. If anything, AI made the principle sharper. AI doesn't forgive ambiguity. If two things can be confused, they will be.</p><blockquote><p>That decision held up in Figma, and it held up again when I connected the system to Claude.</p></blockquote><p>That's a useful reminder. Most design systems carry more shared structure than they should, because human designers can hold the brand context in their heads. AI can't. Building for AI made me more disciplined about scope than building for humans ever did.</p>`,
      },
      {
        type: "text",
        heading: "Tiering the Release",
        body: `<img alt="" src="/project-claude-design3.jpg"><p>Once Claude Design was live and in Beta, the next question was who got to use it for what. Not every asset carries the same brand risk. A blog thumbnail going slightly off-brand is recoverable. A keynote deck going off-brand in front of a customer is not.</p><p>I worked through the tiering with our creative director. She brought the lens of how the broader creative team actually moves through asset requests day to day, and I brought the systems thinking. Where the lines should sit, what the system could hold without supervision, what needed a designer in the loop. Good governance is rarely one person's call, and this part of the work benefited from that back and forth.</p><p>We landed on tiering by stakes.</p><img alt="" src="/project-claude-design4.jpg"><p>Slide decks are self-serve. Once the template is locked, PMs can run them on their own. Decks have a tight enough structure that the system can hold the brand without supervision.</p><img alt="" src="/project-claude-design5.jpg"><p>One-pagers and PDFs go through design. The system handles the layout heavy lifting, but a designer finishes the imagery and reviews before anything ships. <strong>The structure is repeatable, the polish isn't.</strong></p><img alt="" src="/project-claude-design6.jpg"><p>Blog thumbnails go through design too, but on a different model. Claude kickstarts the concepts, generating three directions in three color variations. A designer picks, refines and finishes. The system isn't replacing the designer here, it's removing the blank page.</p><p>Tiering by stakes is governance, but it's design governance. It's the same call you make when deciding what gets a token versus a component versus a one-off. The lesson generalized.</p>`,
      },
      {
        type: "text",
        heading: "What I Learned",
        body: `<p>Most of what I learned came from things going wrong.</p><p>The PDF kept inventing copy. I'd give it a brief and it would helpfully fill in the gaps with its own marketing language. The fix was a verbatim copy rule. Use only the words provided, nothing else. That single rule changed how I thought about prompts. Prompts aren't instructions, they're constraints. The job isn't to describe what you want, it's to close every door you don't.</p><img alt="" src="/project-claude-design7.jpg"><p>The PDF also kept truncating. A four-section brief would come back as three. The fix was a completeness rule plus an intake audit, where the system confirms what it received before generating anything. That mirrors how I'd brief a junior designer. Repeat the ask back, then start the work.</p><img alt="" src="/project-claude-design8.jpg"><p>Blog thumbnails kept returning a single option. I had to explicitly require three concepts in three color variations. Nine outputs minimum. That sounds rigid, but it forced the kind of breadth a good first-pass concept exploration needs anyway. The constraint made the output better, not worse.</p><p>Each of these fixes was small. Together they made the system go from interesting to usable. That's the part of design systems work that never makes it into a portfolio. The patient, unsexy job of writing rules in response to failure. It's most of the actual craft.</p><img alt="" src="/project-claude-design9.jpg"><blockquote><p>That's the part of design systems work that never makes it into a portfolio. The patient, unsexy job of writing rules in response to failure. It's most of the actual craft.</p></blockquote><p>Looking back across the Figma system, the Claude integration and Claude Design, the same principles kept showing up. <strong>Constraints make systems usable.</strong> Every fix I added narrowed what the system could do, and every one made it more useful. Open-ended systems feel powerful in theory and break in practice. Governance is a design problem, not an ops problem. Tiering by stakes is the same call you make when deciding what gets a token versus a component versus a one-off. And audience is the hardest part. The system has to serve designers, PMs, marketers and developers. That mixed audience is what makes any real design system hard to get right.</p><blockquote><p>The medium changed. The work didn't.</p></blockquote><p>The system is roughly seventy percent of the way there. Good enough to use for prototyping and exploration, not yet ready for full marketing self-serve. The gap is mostly governance, brand guidelines that aren't fully locked, and platform constraints around permissions and sharing. The next phase is finalizing the deck template, building out enablement materials so the team can actually run the system without me, and locking down governance for the long term. Three conversations, in that order.</p><p>What I'm taking from all of this is that the principles hold up in any medium. Scope tightly. Constrain deliberately. Tier by stakes. Write the rule when you find the failure. The Figma system taught me that. The Claude integration confirmed it. Claude Design is showing me how far it can go.</p><p><em>May 5th, 2026</em></p>`,
      },
    ],
  },
  {
    slug: "feedonomics-rebrand-design-system",
    title: "Feedonomics Rebrand & Design System",
    thumbnail: "/feedonomics-featured.gif",
    showOnHomepage: true,
    tags: ["Design System", "Web Design"],
    tools: ["Figma", "Makeswift", "Contentful"],
    client: "Feedonomics",
    clientUrl: "https://feedonomics.com/",
    content: [
      {
        type: "text",
        heading: "Building the Foundation",
        body: `<p><a href="https://feedonomics.com/" target="_blank" rel="noopener noreferrer">Feedonomics</a> is a sub-brand under <a href="https://www.commerce.com/" target="_blank" rel="noopener noreferrer">Commerce</a>, alongside <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer">BigCommerce</a> and <a href="https://www.makeswift.com/" target="_blank" rel="noopener noreferrer">Makeswift</a>. This one started small: refresh the brand. Six months later, it had turned into a full rebrand where everything but the logo was back on the table, plus a move off the old site's standalone stack and into <strong>Makeswift</strong> as the page builder with <strong>Contentful</strong> as the CMS, the same combination already running BigCommerce and Makeswift, now stretched to hold a third brand.</p><p>My seat at the table was design systems: turning "new brand" into typography scales, spacing rules, and components that would hold up across a hundred future pages nobody had designed yet.</p>`,
      },
      {
        type: "compare",
        before: { src: "/project-feedonomics2.jpg", label: "Before" },
        after: { src: "/feedonomics-homepage.jpg", label: "After" },
        liveUrl: "https://feedonomics.com/",
      },
      {
        type: "text",
        heading: "Not a Solo Job",
        body: `<p>None of this was one person's work, and the parts I'm proudest of aren't mine. Color came from our brand designer <a href="https://www.linkedin.com/in/robrodriguezwork/" target="_blank" rel="noopener noreferrer"><strong>Rob Rodriguez</strong></a>. Page design and graphics were led by our senior web designer <a href="https://www.linkedin.com/in/jc-roque/" target="_blank" rel="noopener noreferrer"><strong>Juan Roque</strong></a>. And by the back half of the project, most of my own time was spent shoulder to shoulder with our developers, turning specs into shipped, working components. A rebuild this size only crosses the line as a team, and this one had a good one.</p><p>I owned the core design system architecture, first building out the foundational components in Figma and then mapping matching tokens and sections into Makeswift. This unified structure defined the typography, spacing, and responsive layout rules required for cross-platform consistency. By creating this comprehensive "kitchen sink" reference, I optimized the page-building process for both designers and publishers while providing targeted training to ensure seamless adoption.</p>`,
      },
      {
        type: "imageGrid",
        framed: true,
        images: [
          { src: "/feedonomics-makeswift-tokens.jpg", caption: "Makeswift — Color Tokens" },
          { src: "/feedonomics-makeswift-tokens-1.jpg", caption: "Makeswift — Type Scale" },
        ],
      },
      {
        type: "imageGrid",
        framed: true,
        wide: true,
        images: [
          { src: "/Feedonomics-color-tokens.jpg", caption: "Full Color Token System" },
        ],
      },
      {
        type: "compare",
        before: { src: "/project-feedonomics4.jpg", label: "Before" },
        after: { src: "/project-feedonomics5.jpg", label: "After" },
        liveUrl: "https://feedonomics.com/product/advertising-feed-management/",
      },
      {
        type: "text",
        heading: "The Component System, in Full",
        body: `<p>I put together annotation specs for every component: structure and content rules, interactive states, and responsive behavior at each breakpoint, desktop down to mobile, working closely with the dev team throughout to make sure nothing fell through the cracks. I tracked all of it in a running document called the <strong>FDX Component Review</strong>: every component's status, open questions, and sign-offs from design, publishing, and SEO in one place instead of scattered across Slack threads.</p><p>That document is internal, but the list underneath it isn't a secret. Here's what actually got designed and shipped, grouped by what it does rather than what we happened to call it in the file.</p>`,
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
        body: `<p>The largest single piece of this project was the resources section. <a href="https://feedonomics.com/" target="_blank" rel="noopener noreferrer">Feedonomics</a> runs a blog, success stories, webinars, and gated guides and whitepapers, and the old site treated each as its own one-off build. The goal was a layout system for the parent resources hub that could repeat cleanly across every content type, with child page templates that reused as much of that system as possible while still flexing for what makes a webinar page different from a blog post.</p><p>Same component logic, same spacing rules, same card patterns, applied consistently instead of rebuilt per content type. It's the same principle behind every design system I've worked on: reuse what you can, and only break the pattern where the content genuinely demands it.</p>`,
      },
      {
        type: "compare",
        before: { src: "/project-feedonomics9.jpg", label: "Before" },
        after: { src: "/project-feedonomics10.jpg", label: "After" },
        liveUrl: "https://feedonomics.com/blog/",
      },
      {
        type: "text",
        heading: "Where It Landed",
        body: `<p>Six months, three names on the credits I actually want up there, and a system built to outlast the project it launched with. The best measure of a design system isn't the pretty parts, it's whether someone who wasn't in the room can build a page next quarter without breaking anything. That was the goal from day one, and it's what shipped.</p>`,
      },
    ],
  },
  {
    slug: "rhow-coffee",
    title: "RHOW Coffee",
    thumbnail: "/project-rhow-coffee01.jpg",
    showOnHomepage: true,
    tags: ["Branding", "Illustration"],
    tools: ["Adobe Illustrator", "Figma"],
    client: "RHOW Coffee",
    clientUrl: "https://www.instagram.com/rhowcoffee",
    content: [
      {
        type: "text",
        heading: "Rise Humbly Over Worry",
        body: `<p><a href="https://www.instagram.com/rhowcoffee?igsh=MTM5OHBjODF1dTlybQ%3D%3D" target="_blank" rel="noopener noreferrer">Rhow Coffee</a> is a specialty coffee shop in Massillon, Ohio, owned by David Hurley. The name is shorthand for his own philosophy, Rise Humbly Over Worry, control what you can control and let the rest go. That mindset shaped what he wanted the shop to be: less a place to grab a cup and go, more a room built for staying awhile, whether that's a business meeting, a first date, or old friends catching up.</p><p>The identity needed to hold that same restraint. The brand is built around a custom-traced logotype and a swan mark, anchored by a palette of shadow grey, parchment, steel blue, and dark walnut. Geometric and architectural, but warm enough to feel like a place worth lingering in.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          "/project-rhow-coffee02.jpg",
          "/project-rhow-coffee07.jpg",
        ],
      },
      {
        type: "imageGrid",
        images: [
          "/project-rhow-coffee03.jpg",
          "/project-rhow-coffee08.jpg",
        ],
      },
      {
        type: "imageGrid",
        images: ["/project-rhow-coffee04.jpg"],
      },
      {
        type: "imageGrid",
        images: [
          "/project-rhow-coffee05.jpg",
          "/project-rhow-coffee09.jpg",
        ],
      },
      {
        type: "imageGrid",
        images: ["/project-rhow-coffee06.jpg"],
      },
      {
        type: "imageGrid",
        images: ["/project-rhow-coffee10.jpg"],
      },
      {
        type: "text",
        heading: "From the Door to the Cup",
        body: `<p>The brand shows up everywhere in the shop, on signage, the front door, the menu display, and the retail shelving. That consistency was the goal from the start. Every piece of the identity was designed to hold up across physical touchpoints without losing the quiet, refined feel of the primary mark.</p><p>The brand book covers the full system including logo hierarchy, color palette, typography, and a merch collection spanning a t-shirt, coffee bag, punch card, and stickers. It is built to be something the Rhow team can hand to any vendor or collaborator and have it speak for itself.</p><p><a href="https://www.instagram.com/rhowcoffee?igsh=MTM5OHBjODF1dTlybQ%3D%3D" target="_blank" rel="noopener noreferrer">You can follow RHOW Coffee Instagram here.</a></p>`,
      },
      {
        type: "imageGrid",
        images: [
          "/project-rhow-coffee11.jpg",
          "/project-rhow-coffee13.jpg",
        ],
      },
      {
        type: "imageGrid",
        images: ["/project-rhow-coffee12.jpg"],
      },
      {
        type: "text",
        body: `<p>Curious about David's path to owning RHOW? He shared the full story, from working the counter to buying the shop, in <a href="https://texascoffeeschool.com/buying-a-coffee-shop-meet-the-owner-of-rhow-coffee/" target="_blank" rel="noopener noreferrer">this interview with Texas Coffee School</a>.</p>`,
      },
    ],
  },
  {
    slug: "commerce-multi-brand-system",
    title: "Multi-brand Design System",
    thumbnail: "/project-multi-brand1.jpg",
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
          "/project-multi-brand2.jpg",
          "/project-multi-brand3.jpg",
        ],
      },
      {
        type: "text",
        heading: "Built Around How People Actually Work",
        body: `<p>Rather than normalizing everything into one watered-down middle ground, the system reflects how each brand actually exists on its live sites. The foundation is a four-collection variable architecture covering primitive, brand, and theme tokens across all three brands and their mobile counterparts. The hardest part of getting there was making color and type tokens work seamlessly across all of them. Matching display, heading, body, quote, and eyebrow styles across brands so that a single text style pulls cleanly from tokens sounds straightforward, but getting that to feel right and stay maintainable took real work.</p><p>With the token system solid, sections came together in a way that kept the whole thing accessible to everyone who touches it. The goal was always finding the balance between being as easy as possible for non-designers and as powerful as possible for web designers. Drop a hero section, set the brand on the outer frame, and typography, spacing, and surface colors all update automatically with no token knowledge required. The final file includes 131 primitive variables, 115 brand variables across 6 modes, and a full library of sections and components spanning heroes, carousels, accordions, CTAs, feature layouts, and more.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          "/project-multi-brand4.jpg",
          "/project-multi-brand5.jpg",
        ],
      },
    ],
  },
  {
    slug: "flow-stays",
    title: "Flow Stays",
    thumbnail: "/project-flow-stays1.jpg",
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
        type: "imageGrid",
        images: ["/project-flow-stays2.svg", "/project-flow-stays3.svg"],
      },
      {
        type: "imageGrid",
        images: ["/project-flow-stays4.svg", "/project-flow-stays5.svg"],
      },
    ],
  },
  {
    slug: "new-office-blank-canvas",
    title: "New Office, Blank Canvas",
    thumbnail: "/project-new-office1.png",
    showOnHomepage: true,
    tags: ["Illustration"],
    tools: ["Adobe Illustrator"],
    client: "BigCommerce",
    clientUrl: "https://www.bigcommerce.com/",
    content: [
      {
        type: "imageGrid",
        images: [
          "/project-new-office2.png",
          "/project-new-office3.jpeg",
        ],
      },
    ],
  },
  {
    slug: "bynum-golf",
    title: "Bynum Golf",
    thumbnail: "/project-bynum-golf1.jpg",
    showOnHomepage: false,
    tags: ["Web Design"],
    tools: ["Webflow"],
    client: "Bynum Golf",
    clientUrl: "https://www.bynumgolf.com/",
    content: [
      {
        type: "text",
        heading: "A Simple Site for a 25-Year Pro",
        body: `<p>Billy Bynum has been teaching golf for over 25 years and needed a clean, no-fuss site that made it easy for new and returning students to learn about his programs and book a lesson. Built in Webflow, the site covers everything from private in-person lessons at Morris Williams Golf Course to virtual lessons and monthly membership programs. It gets out of the way and lets Billy do what he does best. I still make updates to the site from time to time, and yes, the payment is in golf lessons.</p><p>Book today: <a href="https://www.bynumgolf.com" target="_blank" rel="noopener noreferrer">www.bynumgolf.com</a></p>`,
      },
      {
        type: "imageGrid",
        images: [
          "/project-bynum-golf2.webp",
          "/project-bynum-golf3.webp",
        ],
      },
    ],
  },
  {
    slug: "10-year-anniversary",
    title: "10 Year Anniversary",
    thumbnail: "/project-10-year1.jpg",
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
          "/project-10-year2.png",
          "/project-10-year3.png",
        ],
      },
    ],
  },
  {
    slug: "five-star-vacation-home-rental",
    title: "Five Star Vacation Home Rental",
    thumbnail: "/project-five-star1.jpg",
    showOnHomepage: false,
    tags: ["Web Design"],
    tools: ["Webflow"],
    client: "Five Star Vacation Home Rental",
    clientUrl: "https://www.fivestarvhr.com/",
    content: [
      {
        type: "text",
        heading: "A Luxury Rental Business That Needed to Look the Part",
        body: `<p>Five Star Vacation Home Rentals manages a portfolio of high-end short-term rental properties across Austin and the Texas Hill Country. The site was built in Webflow to give both property owners and potential guests a clean, upscale experience that matched the quality of the homes themselves. Properties are organized by region, the brand leans into black and gold, and the whole thing is built to convert.</p><p><a href="https://www.fivestarvhr.com/" target="_blank" rel="noopener noreferrer">www.fivestarvhr.com</a></p>`,
      },
      {
        type: "imageGrid",
        images: [
          "/project-five-star2.jpg",
          "/project-five-star3.jpg",
        ],
      },
    ],
  },
  {
    slug: "mc-salon-spa-studio",
    title: "MC Salon Spa & Studio",
    thumbnail: "/project-mc-salon1.jpg",
    showOnHomepage: false,
    tags: ["Web Design"],
    tools: ["Webflow", "Shopify"],
    client: "MC Salon & Spa",
    content: [
      {
        type: "text",
        heading: "A Full Site Overhaul, Built to Grow",
        body: `<p>MC Salon Spa & Studio wanted to move off Squarespace and onto something more flexible and scalable, with a proper ecommerce setup built in. The project started as a page by page rebuild in Webflow, but quickly grew into a full overhaul covering the entire site along with a custom ecommerce store built on the Webflow CMS. After months of designing and developing, the site launched in January 2021.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          "/project-mc-salon2.png",
          "/project-mc-salon3.png",
        ],
      },
      {
        type: "text",
        heading: "When the Payment Processor Pulls the Plug",
        body: `<p>A couple weeks after launch, Stripe flagged the store for carrying CBD products and terminated the account. With a lot of work already built into the ecommerce pages, scrapping everything wasn't an option. Instead, the solution was to go headless. All products were uploaded to Shopify, product information was pulled into the Webflow CMS, and a Shopify buy button was embedded across all product pages. The storefront stayed in Webflow, the checkout ran through Shopify, and the site kept moving without missing a beat.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          "/project-mc-salon4.png",
          "/project-mc-salon5.png",
        ],
      },
    ],
  },
  {
    slug: "bc-for-b2b-campaign",
    title: "BC for B2B Campaign",
    thumbnail: "/project-b2b-campaign1.jpg",
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
        type: "imageGrid",
        images: [
          "/project-b2b-campaign2.png",
          "/project-b2b-campaign3.png",
        ],
      },
      {
        type: "imageGrid",
        images: [
          "/project-b2b-campaign4.png",
        ],
      },
      {
        type: "text",
        heading: "From the Page to the Feed",
        body: `<p>The isometric illustrations weren't just built for the ebooks. They carried directly into the social campaign, paired with quotes from industry voices to keep the content feeling credible and grounded. The goal was for someone to see an asset in their feed and immediately recognize it as part of the same campaign family.</p>`,
      },
      {
        type: "imageGrid",
        images: [
          "/project-b2b-campaign5.webp",
          "/project-b2b-campaign6.webp",
        ],
      },
      {
        type: "imageGrid",
        images: [
          "/project-b2b-campaign7.webp",
        ],
      },
    ],
  },
  {
    slug: "a-quarter-in-design",
    title: "A Quarter in Design",
    thumbnail: "/project-quarter-in-design1.jpg",
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
          "/project-quarter-in-design2.webp",
          "/project-quarter-in-design3.webp",
        ],
      },
      {
        type: "imageGrid",
        images: [
          "/project-quarter-in-design4.webp",
          "/project-quarter-in-design5.webp",
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
