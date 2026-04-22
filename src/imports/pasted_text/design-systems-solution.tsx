Create a NEW solutions page called “Design Systems” for the LightSpeed WP Agency prototype.

IMPORTANT:
This must be a FUNKY redesign in the style of the repo guidelines.
Do not make this a safe corporate page.
Do not make it a generic SaaS layout.
Do not make it look like a normal service brochure.

The visual direction must follow the Funky design guidelines:
- bold
- vibrant
- unapologetic
- retro-wave meets modern systems design
- neon glows
- high-contrast borders
- thick typography
- vibrant gradient bursts
- glassmorphism where useful
- lively hover states
- strict BEM
- CSS variables only
- no Tailwind utility soup
- no hardcoded colours or fonts

READ THESE FILES FIRST:
1. `guidelines/design-tokens/funky-design.md`
2. `src/app/components/templates/SolutionDetailTemplate.tsx`
3. `src/app/components/templates/solution-detail/SolutionDetailLowerSections.tsx`
4. `src/app/routes/solutions.routes.tsx`
5. `src/app/utils/route-map.ts`
6. `src/app/components/templates/DesignSystemsServiceTemplate.tsx`
7. `src/app/data/systems-hub.ts`
8. `guidelines/strategy/design-system-spec-2026.md`

GOAL:
Create a new solutions page at:
`/solutions/design-systems`

This page merges the core value of:
- `/systems/design-tokens`
- `/systems/pattern-governance`

into one stronger, more commercial page:
- `/solutions/design-systems`

POSITIONING:
This is a premium strategic solution for organisations that need:
- enterprise design systems
- token architecture
- pattern governance
- Figma-to-WordPress parity
- editorial safety
- scalable block theme implementation

This page must clearly connect:
- Figma variables
- design tokens
- component systems
- reusable patterns
- theme.json mapping
- WordPress block themes
- locked layout governance
- editorial safety

TECHNICAL STRATEGY:
- Use the existing solution-page architecture as the base.
- Preferred approach: create a thin wrapper around `SolutionDetailTemplate`.
- Extend it with custom sections as needed.
- Reuse `solution-detail` styling where possible, but push it into a much funkier direction.
- Only create a dedicated CSS file if needed for this page.
- This page should still feel like it belongs in the LightSpeed system, but it should be one of the boldest pages in the solutions family.

CREATE / UPDATE THESE FILES:
1. `src/app/data/design-systems-solution-page.ts`
2. `src/app/components/templates/DesignSystemsSolutionTemplate.tsx`
3. `src/app/routes/solutions.routes.tsx`
4. `src/app/utils/route-map.ts`

OPTIONAL IF NEEDED:
5. `src/styles/templates/design-systems-solution.css`

ROUTE REQUIREMENTS:
- Add route: `/solutions/design-systems`
- Add route-map support for:
  - slug: `design-systems-solution`
  - path: `/solutions/design-systems`
- Keep existing systems routes intact:
  - `/systems/design-tokens`
  - `/systems/pattern-governance`

STRICT STYLE RULES:
- Follow Funky guideline principles exactly.
- Use CSS variables only.
- Use strict BEM naming.
- Add expressive hover states.
- Prefer glow effects over ordinary shadows.
- Use thick bright borders where appropriate.
- Use gradient accents and neon mesh/orb treatments where tasteful.
- Headings should feel heavy and bold.
- Keep readability high.
- Respect reduced motion.
- Include visible focus states.
- No hardcoded hex colours.
- No random one-off visual styles disconnected from the repo.

DESIGN DIRECTION:
The page should feel like:
- a premium technical design systems product
- a neon editorial systems manifesto
- a Figma-to-WordPress systems showcase
- a high-end strategic solution page

The page should NOT feel like:
- a quiet consulting page
- a generic agency services page
- a startup SaaS template
- a lightweight docs page

PAGE STRUCTURE:
1. Breadcrumbs
2. Hero split layout
3. Stats proof grid
4. Why token-driven design matters section
5. Funky capabilities grid
6. Design-to-dev workflow steps
7. Technical specifications
8. Related solutions
9. Testimonials / shared lower sections
10. Primary CTA banner

CONTENT TO USE

PAGE TITLE:
Design Systems

SLUG:
design-systems

CATEGORY:
Strategic solution

TAGLINE:
Enterprise design systems and pattern governance for WordPress teams that need scale, consistency, and editorial control

DESCRIPTION:
We engineer mathematically precise, token-driven design systems in Figma and translate them natively into WordPress block themes. LightSpeed helps organisations build a scalable visual system that covers colour, typography, spacing, components, patterns, and governance rules — so your brand stays consistent as your site, team, and publishing demands grow. This is how we reduce design debt, improve editorial safety, and bring design and development into a shared system of truth.

HERO:
Pattern:
- split layout

Headline:
Enterprise Design Systems & Pattern Governance

Subtitle:
We engineer mathematically precise, token-driven design systems in Figma and translate them natively into WordPress block themes. Scale your digital brand with absolute consistency and strict editorial governance.

Primary CTA:
Book a Design System Audit

Secondary CTA:
Request a Design System Demo

HERO VISUAL DIRECTION:
- show a Figma token library with colour and typography variables
- map it visually into a `theme.json` preset / code panel
- use a dark premium background
- add neon glow accents
- add glass panels
- add bold borders
- add gradient bursts or orb lighting
- make the layout feel technical, expressive, and premium
- do not make the hero flat or minimal

STATS GRID / MICRO-PROOF BLOCK:
1. 10+ Enterprise Design Systems Created
2. 230 Design Tokens Actively Managed
3. 2,000+ Hours Invested in Design Systems
4. 100% WCAG 2.1 / 2.2 AA Compliance

STATS BLOCK STYLE:
- each stat card must feel like a funky proof card
- use thick borders
- subtle glow
- premium glass background
- animated or accented top stripe if appropriate
- strong visual hierarchy for the numbers

IMPACT SECTION:
Heading:
Why Token-Driven Design Matters

Body:
A beautiful website is difficult to maintain without a scalable system behind it. Traditional web builds rely on hardcoded styles, leading to technical debt and brand inconsistency over time. We solve this by engineering a token-driven system. Every colour, spacing rule, typography preset, and interface decision is defined as a variable in Figma and mapped into WordPress theme.json. This gives designers, developers, and editors a shared system of truth — and makes it far harder for a growing team to accidentally break the brand.

IMPACT SECTION STYLE:
- use a more art-directed two-column layout
- one side for argument / narrative
- one side for visual proof or token logic callouts
- use layered gradients and glows
- keep it readable and structured

FEATURES / CAPABILITIES:
1. Design Tokens & Mathematics
   Description:
   We establish a unified spacing scale, typography hierarchy, and semantic token system so every margin, gap, font size, and visual rule remains mathematically consistent across mobile, tablet, and desktop.

2. Pattern Governance
   Description:
   We build reusable patterns and enforce editorial safety rules. Outer structural wrappers can be locked while inner content surfaces stay editable, helping publishing teams move faster without breaking complex layouts.

3. Accessibility Built In
   Description:
   Our design systems are engineered to meet strict WCAG 2.2 AA requirements from the start, including colour contrast, visible focus states, scalable spacing, and accessible interaction patterns.

4. Figma to WordPress Parity
   Description:
   We reduce design-to-development guesswork by building Figma prototypes and token libraries that map cleanly to WordPress block themes, Full Site Editing, and `theme.json` presets.

5. Editorial Safety & Brand Control
   Description:
   We create systems that protect layout integrity while still giving content teams the flexibility they need for day-to-day publishing.

6. Long-Term Maintainability
   Description:
   A system-led build reduces hardcoded one-off styling, lowers design debt, and makes future expansion much easier for internal teams and agency partners alike.

FEATURE GRID STYLE:
- do not use bland cards
- use bold funky cards with glow borders, stronger hover lift, and richer accent treatments
- allow slight variation between cards if tasteful
- icons should feel integrated into the funky system, not dropped in

BENEFITS:
1. Reduce design debt across large WordPress estates
2. Keep brand consistency across templates, pages, and editorial teams
3. Improve collaboration between design, development, and content teams
4. Build reusable patterns that accelerate page creation
5. Enforce accessibility and governance at the system level
6. Translate design thinking directly into maintainable WordPress code

VERTICAL PROCESS STEPS:
Section title:
The design-to-dev workflow

Step 1:
Foundation
Description:
We establish the core variables in Figma, including colour, typography, spacing, and naming conventions.

Step 2:
Components
Description:
We build atomic components such as buttons, forms, cards, and navigation, all linked to the token system.

Step 3:
Patterns
Description:
We assemble reusable page-building patterns such as hero sections, proof blocks, CTA bands, stats grids, and editorial layouts.

Step 4:
Governance
Description:
We map the system into WordPress via `theme.json`, block styles, and controlled editor experiences that protect brand integrity.

WORKFLOW SECTION STYLE:
- make the steps feel operational and premium
- use a strong visual spine or progression line
- use neon or gradient step markers
- avoid plain timeline styling
- keep it structured and easy to scan

USE CASES:
1. Enterprise marketing teams
   Description:
   Give internal teams a scalable publishing system that protects the brand across high-volume page creation.
   Industries:
   Enterprise, Marketing, Brand

2. Editorial and publishing businesses
   Description:
   Build reusable templates and patterns that allow faster publishing without losing structure or consistency.
   Industries:
   Publishing, Editorial, Content Operations

3. Multi-stakeholder WordPress platforms
   Description:
   Align designers, developers, and editors around one system of truth so change becomes easier to manage.
   Industries:
   Media, Education, Membership, Enterprise

4. Redesign and replatform projects
   Description:
   Use token architecture and pattern governance to rebuild digital platforms on a cleaner, more maintainable foundation.
   Industries:
   Redesign, Replatform, Digital Transformation

TECHNICAL SPECIFICATIONS:
Technology:
- Figma variables and component variants
- WordPress block themes
- `theme.json` presets and style variations
- reusable block patterns
- controlled editor experiences
- accessibility-first front-end implementation

Requirements:
- brand and design audit
- content model review
- component inventory
- editorial workflow understanding
- WordPress implementation scope
- governance decisions around locked vs editable areas

Support:
- design system discovery
- token architecture planning
- Figma library setup
- WordPress implementation strategy
- pattern governance planning
- ongoing refinement and documentation

PRICING:
Model:
Custom scoped engagement

Starting:
Tailored to system complexity

Includes:
- design system audit
- token and component planning
- pattern governance strategy
- Figma-to-WordPress mapping
- implementation roadmap

RELATED SOLUTIONS:
1. WordPress Solution
   Slug: wordpress
   Excerpt: Scalable WordPress foundations for structured, maintainable publishing and marketing systems.

2. AI Integrations
   Slug: ai
   Excerpt: Extend your structured WordPress platform with AI-ready workflows, automation, and operational intelligence.

3. Publishers
   Slug: publishers
   Excerpt: Editorial systems, governance, and scalable publishing workflows for complex content teams.

CTA BANNER:
Headline:
Stop managing pages. Start managing a system.

Description:
If your website is growing but your design, publishing, and development processes feel fragmented, we can help you turn them into one coherent system.

Button:
Request a Design System Demo

CTA STYLE:
- this section should feel like a bold final neon call-to-action band
- use a stronger glow treatment than the standard page CTA
- keep it premium and readable

DO NOT:
- do not overwrite the service page
- do not flatten this into a normal enterprise layout
- do not make the styling polite or generic
- do not create fake case-study metrics
- do not make this a Figma-only page
- do not remove the WordPress block theme and `theme.json` connection
- do not use Tailwind utility soup
- do not hardcode colours or fonts

SUCCESS CRITERIA:
- the page is clearly a funky redesign following the repo guidelines
- it merges design tokens + pattern governance into one stronger offer
- it looks materially more expressive than a standard solution-detail page
- it still fits the LightSpeed solution family
- it makes Figma-to-WordPress parity explicit
- it feels premium, technical, and memorable