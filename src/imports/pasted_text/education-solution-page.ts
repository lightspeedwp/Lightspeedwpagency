Create a new LightSpeed WP Agency solution page for the EDUCATION industry.

IMPORTANT:
- Use the STANDARD generic solution-page architecture already in the repo.
- Do NOT invent a completely custom one-off template unless absolutely necessary.
- The preferred base is `SolutionDetailTemplate`, not the older bespoke `WordPressSolutionTemplate`.

READ THESE FILES FIRST:
1. `src/app/components/templates/SolutionDetailTemplate.tsx`
2. `src/app/components/templates/solution-detail/SolutionDetailLowerSections.tsx`
3. `src/styles/templates/solution-detail.css`
4. `src/app/routes/solutions.routes.tsx`
5. `src/app/components/templates/AIIntegrationsTemplate.tsx`
6. `src/app/data/ai-integrations/landing.ts`
7. `src/app/data/solutions.ts`

CRITICAL DATA NOTE:
- Do NOT use `src/app/data/solutions.ts` as the primary data source for this page.
- That file is summary-level and currently uses `features: string[]`.
- `SolutionDetailTemplate` expects a richer solution object with:
  - `title`
  - `slug`
  - `category`
  - `tagline`
  - `description`
  - `features` as objects with `title`, `description`, `icon`
  - `benefits`
  - optional `useCases`
  - optional `specifications`
  - optional `pricing`
  - optional `relatedSolutions`
- Create a NEW dedicated data file for this education page instead of forcing it into the old summary structure.

CREATE / UPDATE THESE FILES:
1. `src/app/data/education-solution-page.ts`
2. `src/app/components/templates/EducationSolutionTemplate.tsx`
3. `src/app/routes/solutions.routes.tsx`

ONLY create a new CSS file if absolutely necessary.
Prefer reusing:
- `src/styles/templates/solution-detail.css`

ROUTE:
- Create a new route: `/solutions/education`

TEMPLATE STRATEGY:
- `EducationSolutionTemplate.tsx` should be a thin wrapper around `SolutionDetailTemplate`
- It should import a dedicated object from `education-solution-page.ts`
- Keep the page visually aligned with the repo’s funky neon/glass solution style
- Do not redesign the whole pattern system
- This page should feel like a clean new industry-specific solution page within the existing family

ADD ONE CUSTOM SECTION:
- Add a dedicated “AI integrations for education teams” section
- Place it AFTER features and BEFORE related solutions / lower conversion content
- It must include:
  - short headline
  - paragraph
  - 3 benefit bullets or mini-cards
  - clear CTA linking to the current prototype AI page URL: `/solutions/ai`
- Add a developer note in code comments that the repo currently also has AI integrations routed under `/solutions/ai/integrations`, so this link may need confirmation later
- Keep the styling within the existing `solution-detail` visual language

VOICE / POSITIONING:
This page targets:
- education publishers
- training providers
- private academies
- online course businesses
- tutoring businesses
- membership-based learning platforms

The offer is:
LightSpeed helps education businesses build modern WordPress websites with:
- structured content
- e-learning / course delivery
- paid memberships
- recurring subscriptions
- WooCommerce integration
- scalable editorial workflows
- AI-ready functionality

DO NOT MAKE IT SOUND LIKE:
- a generic LMS plugin page
- a SaaS app landing page
- a cheap DIY site builder
- an overhyped AI pitch

DO MAKE IT SOUND LIKE:
- strategic
- practical
- WordPress-native
- scalable
- credible for real education businesses

CONTENT TO USE

PAGE TITLE:
WordPress education solutions

SLUG:
education

CATEGORY:
Industry solution

TAGLINE:
Modern WordPress platforms for education brands, course providers, and membership-led learning businesses

DESCRIPTION:
Build a better education website with WordPress, WooCommerce, and scalable content architecture. We help education businesses create websites that do more than market courses — they deliver learning content, sell memberships, manage subscriptions, and support long-term growth. From content structure and UX to e-learning integrations and recurring revenue models, LightSpeed builds education platforms that are easier to manage and better for students, parents, members, and internal teams.

BENEFITS:
1. Build a single platform for marketing, learning, and ecommerce
2. Create recurring revenue with memberships and subscription products
3. Make course, lesson, and resource content easier to manage
4. Improve mobile usability for busy learners and parents
5. Support future growth with a scalable WordPress architecture
6. Add AI tools later without rebuilding the site from scratch

FEATURES:
1. Structured education content
   Description: We plan your site architecture around courses, resources, lessons, articles, FAQs, and landing pages so content stays organised as your offering grows.

2. E-learning integration
   Description: Add learning functionality for online programmes, gated resources, student dashboards, and progress-based content using the right WordPress-compatible stack.

3. Memberships and subscriptions
   Description: Sell paid memberships, recurring subscriptions, premium content access, or ongoing learning programmes with WooCommerce-based revenue flows.

4. WooCommerce-powered payments
   Description: Use WooCommerce for course sales, subscriptions, bundles, one-off products, and add-ons while keeping reporting and operations in one place.

5. Editorial and marketing workflow
   Description: Support internal teams with flexible publishing workflows for lessons, blog posts, landing pages, downloads, and campaign content.

6. Performance, accessibility, and support
   Description: Build on a fast, accessible, maintainable foundation that supports long-term publishing, SEO, and product growth.

USE CASES:
1. Education publishers
   Description: Manage large volumes of educational content, product pages, downloads, and structured resources in one coherent WordPress setup.
   Industries: Publishing, Education, Content Teams

2. Training academies
   Description: Sell access to short courses, premium resources, and member areas while keeping enrolment and payments simple.
   Industries: Training, Professional Education, Membership

3. Online course businesses
   Description: Launch or rebuild a course business with better content structure, stronger UX, and scalable recurring-revenue options.
   Industries: Online Learning, Coaching, Digital Products

4. Schools, tutors, and niche learning brands
   Description: Create a clearer digital experience for learners, parents, and administrators with better content architecture and easier updates.
   Industries: Tutoring, Independent Education, Specialist Learning

TECHNICAL SPECIFICATIONS:
Technology:
- WordPress block theme architecture
- WooCommerce for payments and product management
- Membership and subscription extensions where needed
- LMS or course-platform integrations based on project scope
- Analytics, SEO, and CRM integration where relevant

Requirements:
- Clear course or programme structure
- Defined user journeys for learners, parents, or members
- Payment gateway requirements confirmed early
- Content model for courses, lessons, resources, and sales pages
- Decision on membership, subscription, or one-off purchase model

Support:
- Discovery and content modelling
- UX and design system support
- WordPress development and integration
- Launch support and QA
- Ongoing maintenance and optimisation

PRICING:
Model: Custom scoped solution
Starting: Tailored to platform complexity
Includes:
- Discovery and architecture
- UX and interface design
- WordPress build
- WooCommerce configuration
- Membership / subscription planning
- Launch support

AI INTEGRATIONS SECTION:
Title:
AI integrations for education teams

Description:
Once your WordPress education platform is structured properly, AI can help you work smarter across publishing, support, and growth. LightSpeed can help you explore AI-assisted content generation, learner support experiences, SEO workflows, and reporting layers that fit into your existing WordPress setup.

Mini-card 1:
Title: AI-assisted content workflows
Description: Speed up draft creation for course pages, support articles, knowledge-base content, and marketing copy while keeping human review in place.

Mini-card 2:
Title: AI chat and support experiences
Description: Give prospective students and members faster answers with AI-powered support flows connected to your content and FAQs.

Mini-card 3:
Title: AI-ready growth systems
Description: Layer in AI for search visibility, analytics, and operational efficiency without rebuilding your entire website later.

AI CTA:
Text: Explore AI integrations
Link: `/solutions/ai`

RELATED SOLUTIONS:
1. AI Integrations
   Slug: ai
   Excerpt: Explore AI-powered content, support, SEO, and analytics for WordPress.
2. WordPress Solution
   Slug: wordpress
   Excerpt: Modern block-theme WordPress architecture for scalable content-first websites.
3. WooCommerce Solution
   Slug: woocommerce
   Excerpt: Ecommerce foundations for payments, subscriptions, and digital product sales.

CASE STUDY REFERENCE:
- Reference LightSpeed’s work with The Answer Series as proof that we understand education websites
- Use safe proof copy only
- Do NOT invent performance metrics, revenue figures, or timelines
- Use this wording:
  “LightSpeed has also worked with education businesses such as The Answer Series, helping shape practical WordPress solutions around real content and publishing needs.”
- Add a secondary text link:
  `Read The Answer Series case study`
  URL: `https://lightspeedwp.agency/portfolio/the-answer-series/`

CTA SECTION:
Title:
Ready to build a better education platform?

Description:
Whether you need a content-rich education website, a membership platform, or a WooCommerce-powered learning business, we can help you plan and build the right WordPress solution.

CTA button:
Request a systems audit

CTA benefits:
- Education-focused WordPress architecture
- E-learning, memberships, and subscriptions
- WooCommerce-ready recurring revenue
- Scalable content and publishing workflows
- AI-ready for future growth

DESIGN RULES:
- Reuse the existing funky solution-detail style
- Keep neon/glass visual language
- No Tailwind-heavy redesign
- No hardcoded colours if avoidable
- Reuse existing BEM structure where possible
- Keep this page aligned with the current LightSpeed solutions family
- Make the AI section feel native to the page, not bolted on

DO NOT:
- do not create a generic SaaS landing page
- do not write fake case-study metrics
- do not build a whole new design system
- do not rely on `src/app/data/solutions.ts` summary shape
- do not remove the standard solution-detail structure