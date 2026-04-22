Create an ALTERNATIVE homepage for the LightSpeed WP Agency prototype.

IMPORTANT:
- This is a parallel homepage, not a replacement for the current `/` route.
- Create a new route and slug:
  - slug: `home-alt`
  - path: `/home-alt`
- Do not overwrite the existing `FrontPageTemplate`.
- This must be a FUNKY homepage redesign that uses the neon accent system from the latest AI pages.
- The layout should follow the attached homepage brief and its Authority Sequencing logic:
  Promise → Proof → Process → Packages → Prompt

READ THESE FILES FIRST:
1. `src/app/components/templates/FrontPageTemplate.tsx`
2. `src/app/data/front-page.ts`
3. `src/app/routes/core.routes.tsx`
4. `src/app/utils/route-map.ts`
5. `src/app/components/templates/AIIntegrationsTemplate.tsx`
6. `src/app/data/ai-integrations/landing.ts`
7. `src/styles/templates/page-solution-ai-optimized.css`
8. `src/styles/templates/ai-solution/ai-solution-hero-core.css`
9. `guidelines/design-tokens/funky-design.md`

ALSO USE THIS ATTACHED CONTENT AS A PRIMARY CONTENT / IA BRIEF:
- the pasted markdown brief for homepage restructuring and homepage content
- preserve its sequence and strategic intent

GOAL:
Create a new homepage variant that feels:
- funkier
- more premium
- more neon
- more AI-era
- more conversion-sequenced
- more technically credible

This is not a simple reskin of the current homepage.
It should feel like a more advanced homepage direction inspired by the newest AI pages.

VISUAL DIRECTION:
Use the AI pages’ accent system and visual language:
- default primary accent: neon cyan
- secondary accent: neon pink
- supporting accents: neon lime, neon yellow, neon purple
- glow-based shadows rather than normal shadow-heavy cards
- gradient-highlight headings
- dark backgrounds with luminous contrast
- glass panels where useful
- subtle orb / mesh / grid lighting
- thick borders where appropriate
- strong hover states
- premium motion, but controlled
- respect reduced motion
- visible focus states
- strict BEM
- CSS variables only
- no Tailwind utility soup
- no hardcoded colours or fonts

IMPORTANT PALETTE RULE:
Borrow the AI pages’ accent logic rather than inventing new colours:
- neon cyan + neon pink should be the main pair
- lime and yellow should be used as supporting data / highlight accents
- purple can be used for AI / future / analytics moments
- do not make every section rainbow chaos
- keep the palette controlled and intentional

TECHNICAL IMPLEMENTATION:
Create / update these files:
1. `src/app/components/templates/FrontPageAltTemplate.tsx`
2. `src/app/data/front-page-alt.ts`
3. `src/styles/templates/page-front-page-alt.css`
4. `src/app/routes/core.routes.tsx`
5. `src/app/utils/route-map.ts`

OPTIONAL:
- Create additional small pattern CSS files only if needed, but keep the architecture tidy.
- Prefer reusing existing patterns where possible.

ROUTING REQUIREMENTS:
- Keep the existing homepage at `/`
- Add a new route:
  - `/home-alt`
- Add slug mapping:
  - `home-alt` -> `/home-alt`

LINK INTEGRITY REQUIREMENTS:
Do not create fake or broken links.
Use ONLY existing working routes for clickable CTAs unless clearly marked as a future TODO.

Use these exact destinations:

HERO PRIMARY CTA:
- text: `Book Your AI Readiness Consultation`
- href: `/contact`

HERO SECONDARY CTA:
- text: `Explore Our Design System`
- href: `/services/design-systems`

PROOF / CASE STUDY CTA:
- case study route: `/work/armd-digital`
- optional archive link: `/work`

SOLUTIONS SECTION:
- WordPress sites -> `/solutions/wordpress`
- WooCommerce stores -> `/solutions/woocommerce`
- Tour operators -> `/solutions/tour-operators`
- Publishers -> `/solutions/publishers`
- AI integrations -> `/solutions/ai`
- Explore all solutions -> `/solutions`

SERVICE TIERS:
- Foundation -> `/services/discover`
- Growth -> `/services/build`
- Enterprise -> `/services/evolve`

AI STRIP / AI JOURNEY CTA:
- `Explore AI solutions` -> `/solutions/ai`

LATEST INSIGHTS:
- `Explore all articles` -> `/insights`

FINAL CTA:
- `Schedule a Strategic Scoping Call` -> `/contact`

LEAD CAPTURE STRIP:
- If implemented as a visual email form only, do not wire it to a fake route.
- If a CTA link is required for prototype purposes, use:
  - `/contact`
- Add a code comment noting that a real lead magnet form endpoint is not yet defined.

INFORMATION ARCHITECTURE:
Follow this exact homepage order:

1. Hero Section — The Promise
2. StatsGrid — Immediate Proof
3. Engineering Lifecycle Grid — Process
4. Industry Solutions Grid
5. Service Tiers / Packages
6. Case Study + Social Proof
7. AI Proposition Feature Strip
8. Latest Insights
9. Primary CTA Banner
10. Lead Capture / Pre-Footer Strip

PAGE CONTENT BRIEF

SECTION 1 — HERO
Pattern:
- centered or split hero with strong CTA focus
- this should feel more cinematic and high-energy than the current homepage hero

Meta tag:
For enterprise WordPress & WooCommerce teams

Headline:
Structured AI-Optimised WordPress Solutions That Perform.

Subcopy:
We are an AI-ready WordPress engineering partner for digital publishers, ecommerce brands, and technical teams. We build block-first design systems, execute complex migrations, and engineer performance-grade infrastructure built for the age of answer engines.

Primary CTA:
Book Your AI Readiness Consultation

Secondary CTA:
Explore Our Design System

Hero style notes:
- use AI page neon cyan/pink glow language
- use stronger visual contrast than current homepage
- allow grid, orb, or mesh lighting in the background
- add premium stat chips or floating proof elements
- make it feel like the boldest homepage in the site family

SECTION 2 — IMMEDIATE PROOF
Pattern:
StatsGrid / micro-proof band

Use:
- 1,500+ Projects Delivered Since 2013
- 220,000+ Posts Safely Migrated
- 42% Average Core Web Vitals Speed Boost
- 100% WCAG 2.2 AA Compliance Targets

Style notes:
- glowing data cards
- strong numeric hierarchy
- controlled neon accents
- do not make this a plain white stats row

SECTION 3 — ENGINEERING LIFECYCLE
Pattern:
capability grid or process card grid

Title:
The 6-Stage Engineering Lifecycle

Intro:
We eliminate development guesswork and scope creep through a structured, AI-enhanced methodology.

Cards:
01 — Discover
AI-assisted feasibility audits, competitive gap analysis, and content strategy.

02 — Create
Token-driven Figma design systems and interactive, clickable prototypes.

03 — Build
Custom WordPress block themes, API integrations, and secure data migrations.

04 — Launch
Zero-downtime deployments, AI-assisted QA, and team training.

05 — Grow
Continuous Core Web Vitals tuning, technical SEO, and accessibility monitoring.

06 — Evolve
Deep AI integration, answer engine optimisation, and predictive analytics.

Style notes:
- this is one of the key differentiators of the alt homepage
- use a more art-directed funky process layout
- cards can have subtle accent variation
- keep it highly scannable

SECTION 4 — INDUSTRY SOLUTIONS
Pattern:
solution card grid

Title:
Solutions architected for your industry

Intro:
Custom open-source frameworks without the bloat of proprietary SaaS lock-in.

Cards:
- Digital Publishers
- WooCommerce Stores
- Tour Operators
- AI Integrations
- optionally also WordPress Sites if layout supports 5 cards cleanly

Use short, high-value descriptions aligned to the uploaded brief.

Add inline link:
Explore all industry solutions →

Style notes:
- cards should feel closer to the AI solution cards than the current homepage cards
- use neon-accent hover states
- use stronger differentiation between featured / standard cards

SECTION 5 — PACKAGES / TIERS
Pattern:
3-column tier layout

Title:
Services designed to scale with your growth

Intro:
From turnkey setups to long-term engineering partnerships, we support you at every stage.

Columns:
Foundation
Turnkey AI-ready platform, essential token-driven design system, performance setup, and baseline AI capabilities.

Growth
Advanced content and commerce engineering, multi-brand Figma tokens, complex migrations, and automated editorial workflows.

Enterprise
Bespoke partnerships featuring custom AI personalisation, strict governance compliance, and performance-grade managed hosting.

Style notes:
- make this more premium than the current tier grid
- use a featured middle card if helpful
- keep links working via the route map above

SECTION 6 — CASE STUDY + SOCIAL PROOF
Pattern:
split layout with quote + KPI / outcome card

Title:
Real results for real businesses

Quote:
“Before partnering with LightSpeed, we struggled to find a company who could provide technically strong coding expertise... LightSpeed developed a solution that minimised manual inputs on the backend... translating our concepts into slick, working experiences.”
— Anthony Rodinis, Operations Manager, ARMD Digital

Metrics card:
Challenge:
Legacy architecture causing slow booking journeys.

Result:
Rebuilt on Tour Operator 2.1 architecture, delivering a 42% improvement in Core Web Vitals and 2.5x faster editorial publishing.

Trust strip:
- Certified WooExpert
- Mailchimp Partner
- Open-Source Contributors (GitHub)

Style notes:
- make this section feel premium and validated
- use glow framing and layered cards
- do not bury the badges

SECTION 7 — AI PROPOSITION
Pattern:
feature strip / icon-text grid

Title:
Built for the age of AI search

Intro:
Traditional SEO relies on keywords. Emerging AI engines rely on structured entities. We prepare your technical architecture so large language models can understand, cite, and surface your brand more clearly.

Features:
- AI-Optimised Schema Markup
- Structured Content Engineering
- Answer-First Headings

Use icon-led cards or mini panels.

CTA:
Explore AI solutions

Style notes:
- this section should borrow most directly from the AI page design language
- use cyan, lime, yellow, and purple carefully here
- this is the most natural place for the AI neon palette to peak

SECTION 8 — LATEST INSIGHTS
Pattern:
blog card grid or horizontal teaser cards

Title:
Latest engineering insights & research

Cards:
- WCAG 2.2 and WordPress: A Practical Accessibility Audit Guide
- A Deep Dive into LightSpeed’s AI Workflow
- Tour Operator 2.1 Release: Modals and dynamic content blocks

Inline / footer link:
Explore all articles & resources →

Style notes:
- reuse existing blog card logic where possible
- visually align it with the rest of the funky homepage
- do not fall back to a generic blog strip

SECTION 9 — FINAL CTA
Pattern:
primary CTA banner

Headline:
Ready to future-proof your digital platform?

Supporting bullets:
- Zero data-loss complex migrations
- Lightning-fast Core Web Vitals
- Strict WCAG 2.2 AA accessibility

Button:
Schedule a Strategic Scoping Call

Style notes:
- strong neon call-to-action band
- premium glow
- clear and conversion-oriented

SECTION 10 — PRE-FOOTER LEAD CAPTURE
Pattern:
newsletter / lead magnet strip

Headline:
Download the 2027 AI Readiness Checklist

Subcopy:
Enter your email to receive our enterprise-grade checklist for preparing your WordPress architecture, schema, and design systems for answer engines and LLMs.

Button:
Get the Checklist

IMPORTANT:
- If no real form endpoint exists, keep this as a clean visual form pattern or route the CTA to `/contact`
- Do not invent a broken download URL

DESIGN CONSISTENCY RULES:
- This homepage must feel like a sibling of the latest AI pages
- Reuse the AI pages’ accent logic and glow treatments
- Keep the funky design guidelines active throughout
- Maintain strong hierarchy and readability
- Avoid clutter
- Avoid generic corporate spacing and bland white cards
- Keep the page conversion-oriented

DO NOT:
- do not replace `/`
- do not break the current homepage
- do not wire CTAs to non-existent routes
- do not invent new colour systems
- do not make the page visually flat
- do not make it look like a SaaS template
- do not use hardcoded colours or fonts
- do not use Tailwind utility soup

SUCCESS CRITERIA:
- `/home-alt` exists as a real alternative homepage route
- `home-alt` slug works through the route map
- all visible CTA links resolve to real existing routes
- the page feels materially bolder than the current homepage
- the design clearly borrows from the newest AI pages’ neon styling
- the homepage sequence matches the uploaded Authority Sequencing brief