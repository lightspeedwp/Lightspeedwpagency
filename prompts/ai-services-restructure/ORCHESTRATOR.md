# AI Services Restructure — Systematic Orchestrator

**Category:** Strategy  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Template Used:** Orchestrator

---

## Purpose

This orchestrator provides a **systematic, phased approach** for implementing all AI service and solution pages with consistent architecture, reusable patterns, CSS-only animations, and 100% design system compliance. Each page follows a 4-phase implementation cycle to ensure quality, maintainability, and user experience excellence.

---

## Design System Non-Negotiables

**CRITICAL:** All page implementations MUST adhere to these standards:

### 1. Stats Integration (Mandatory)
- **Relevant Stats:** Every service and solution page MUST include contextually relevant stats blocks (using `NeonStats` for dark/neon modes, or `StatsGrid`/`AdaptiveStats` for light modes).
- **Placement:** Stats should be contextually integrated next to related content, not just isolated in a hero section.

### 2. WebGL Assessment & Enhancements
- Evaluate whether a page currently uses WebGL 2D or 3D objects.
- If it does, expand its interactive storytelling by adding 2-3 new WebGL integrations based on the page-specific brief. (e.g., interactive timelines, particle flows, constellation networks).

### 3. CSS Variables Only
- **Colors:** `var(--color-*)`, `var(--wp--preset--color-*)`
- **Spacing:** `var(--spacing-*)`
- **Typography:** `var(--font-primary)`, `var(--font-secondary)`, `var(--text-*)`
- **Borders:** `var(--radius-*)`
- **Zero hardcoded values:** No `#hex`, no `px` spacing, no `font-family: "Name"`

### 2. Typography Enforcement
- **Headings/UI:** `font-family: var(--font-primary)` (Lexend)
- **Body text:** `font-family: var(--font-secondary)` (Manrope)
- **ONLY use font faces defined in CSS files**
- Font sizes via `var(--text-*)` scale only

### 3. Neon Color Rule
- **Neon-bright foreground colors** (neon-cyan, neon-pink, neon-lime, neon-yellow) **MUST ONLY appear against dark backgrounds**
- Force `background: var(--color-black)` or equivalent for neon sections
- Never use neon text/icons on light surfaces (insufficient contrast)

### 4. Sentence Case
- All headings use **sentence case** (capitalize only first word + proper nouns)
- Never title case
- Example: "Performance & accessibility features" not "Performance & Accessibility Features"

### 5. Icons
- `@phosphor-icons/react` only
- Zero `lucide-react` imports

### 6. CSS Architecture
- BEM methodology (`.block__element--modifier`)
- WordPress utility classes (`.wp-*`)
- Zero Tailwind classes
- Max 400 lines per CSS file (split if over)

### 7. Animation Constraint
- **NO WebGL** — CSS-only animations
- All animations respect `@media (prefers-reduced-motion: reduce)`
- Static fallbacks required

---

## Standard 4-Phase Implementation Cycle

Every page implementation follows this systematic approach:

### Phase 1: Data Layer Foundation

**Duration:** 2-4 hours per page  
**Deliverables:** Data files, type definitions

#### Tasks
1. **Create data file** (`/src/app/data/[page-name]-data.tsx`)
   - Hero content (badge, title, subtitle, CTA)
   - Section content arrays (features, benefits, process steps, etc.)
   - Stats integration (import from `stats-registry.ts`)
   - Testimonials/trust signals
   - Related links (services ↔ solutions)
   - Lifecycle stage associations

2. **Define TypeScript interfaces**
   - Hero section types
   - Feature/benefit card types
   - Process step types
   - Stat item types

3. **Import from stats registry**
   ```typescript
   import { statsRegistry } from '@/data/stats/stats-registry';
   
   // Get category-specific stats
   const pageStats = statsRegistry.getStatsByCategory('ai');
   
   // Get tagged stats
   const specificStats = statsRegistry.getStatsByTag('chatbots');
   ```

4. **Lifecycle mapping** (if applicable)
   - Map page to lifecycle stage(s): Discover → Create → Build → Launch → Grow → Evolve
   - Define accent color per stage
   - Add lifecycle badge data

5. **Cross-linking data**
   - Related services (3-4 items)
   - Related solutions (3-4 items)
   - Each item: `{ title, href, description, icon }`

#### Quality Checklist
- [ ] Zero hardcoded content in templates
- [ ] All text content in data files
- [ ] Stats imported from registry (not duplicated)
- [ ] TypeScript interfaces defined
- [ ] Lifecycle stages mapped
- [ ] Cross-links populated

---

### Phase 2: CSS Animation & Styling

**Duration:** 4-8 hours per page  
**Deliverables:** CSS files with BEM classes, animations

#### Tasks

1. **Create base CSS file** (`/src/styles/templates/[page-name].css`)
   - Hero styles (`.page-hero__*`)
   - Section layouts (`.page-section__*`)
   - Card components (`.page-card__*`)
   - Stats grids (`.page-stats__*`)
   - CTA sections (`.page-cta__*`)

2. **CSS Animation Concepts** (choose one per page)

   **Option A: Neural Network Grid**
   - CSS grid of nodes with animated connection lines
   - Pulsing particles using `@keyframes`
   - Neon glow effects with `box-shadow`
   ```css
   @keyframes neural-pulse {
     0%, 100% { opacity: 0.3; transform: scale(1); }
     50% { opacity: 0.7; transform: scale(1.15); }
   }
   ```

   **Option B: Orbital Animation**
   - Central icon with orbiting elements
   - CSS `transform: rotate()` on container
   - Staggered animation delays
   ```css
   @keyframes orbit-rotate {
     from { transform: rotate(0deg); }
     to { transform: rotate(360deg); }
   }
   ```

   **Option C: Particle Flow**
   - Flowing elements using `translateY` + `opacity`
   - Staggered timing for wave effect
   - Directional movement (left→right, bottom→top)
   ```css
   @keyframes particle-float {
     0% { transform: translateY(0) scale(1); opacity: 0.3; }
     50% { transform: translateY(-8px) scale(1.1); opacity: 1; }
     100% { transform: translateY(0) scale(1); opacity: 0.3; }
   }
   ```

   **Option D: Pulsing Glow Orbs**
   - Radial gradient backgrounds
   - Pulse animation on blur + opacity
   - Multiple orbs with offset timing
   ```css
   @keyframes glow-pulse {
     0%, 100% { opacity: 0.2; filter: blur(40px); }
     50% { opacity: 0.6; filter: blur(60px); }
   }
   ```

   **Option E: Grid Reveal**
   - Staggered grid cell fade-in
   - Uses `nth-child` for delay calculation
   - Creates cascading effect
   ```css
   .grid-item {
     animation: grid-reveal 0.6s ease-out forwards;
     animation-delay: calc(var(--item-index) * 0.1s);
   }
   ```

3. **Reduced Motion Fallbacks**
   - All animations wrapped in `@media (prefers-reduced-motion: no-preference)`
   - Static gradient fallbacks for motion-sensitive users
   ```css
   /* Animated version */
   @media (prefers-reduced-motion: no-preference) {
     .hero-visual { animation: neural-pulse 4s ease-in-out infinite; }
   }
   
   /* Static fallback */
   @media (prefers-reduced-motion: reduce) {
     .hero-visual { 
       background: linear-gradient(135deg, var(--neon-cyan), var(--neon-pink));
       opacity: 0.3;
     }
   }
   ```

4. **Dark Mode Enforcement for Neon**
   - Neon sections force dark background
   ```css
   .hero-section--neon {
     background: var(--color-black);
     color: var(--color-white);
   }
   ```

5. **Responsive Breakpoints**
   - Mobile: 480px
   - Tablet: 768px
   - Desktop: 1024px
   - Wide: 1280px

6. **File Size Management**
   - Keep CSS files under 400 lines
   - Split into sub-files if over (hero, sections, components)
   - Use import orchestrator pattern

#### Quality Checklist
- [ ] 100% CSS variables (no hardcoded values)
- [ ] BEM methodology throughout
- [ ] Reduced motion fallbacks implemented
- [ ] Neon colors only on dark backgrounds
- [ ] File size under 400 lines (or properly split)
- [ ] Responsive across all breakpoints
- [ ] Dark mode styles included

---

### Phase 3: Template Development

**Duration:** 4-6 hours per page  
**Deliverables:** React component, route configuration

#### Tasks

1. **Create template component** (`/src/app/components/templates/[PageName]Template.tsx`)
   - Import data from Phase 1
   - Map arrays to components using `.map()`
   - Zero hardcoded content strings
   - Use existing pattern components where possible

2. **Reusable Pattern Components** (use or create)
   - `<Container>` — Content wrapper with max-width
   - `<ScrollReveal>` — Fade-in animations on scroll
   - `<NeonStats>` — Neon stat grids (dark mode)
   - `<StatsGrid>` — Traditional stats (light mode)
   - `<AdaptiveStats>` — Auto theme detection
   - `<FeatureList>` — Icon + text feature cards
   - `<ProcessTimeline>` — Step-by-step process
   - `<TestimonialCard>` — Client testimonial
   - `<FunkyCTA>` — Call-to-action section
   - `<FAQSection>` — Accordion FAQ
   - `<LifecycleStageBadge>` — Stage indicator pill
   - `<LifecycleFlowStrip>` — 3-card prev→current→next
   - `<RelatedPagesGrid>` — Cross-links grid

3. **Hero Section Structure**
   ```tsx
   <section className="page-hero">
     <Container>
       <ScrollReveal animation="fade-up">
         <Badge icon={heroData.icon}>{heroData.badge}</Badge>
         <h1 className="page-hero__title">
           {heroData.title}
           <span className="page-hero__title-highlight">{heroData.titleHighlight}</span>
         </h1>
         <p className="page-hero__subtitle">{heroData.subtitle}</p>
         <div className="page-hero__actions">
           <Button href={heroData.primaryCTA.href}>{heroData.primaryCTA.label}</Button>
           <Button variant="outline" href={heroData.secondaryCTA.href}>
             {heroData.secondaryCTA.label}
           </Button>
         </div>
       </ScrollReveal>
       <div className="page-hero__visual" aria-hidden="true">
         {/* CSS animation container */}
       </div>
     </Container>
   </section>
   ```

4. **Stats Section Integration**
   ```tsx
   import { statsRegistry } from '@/data/stats/stats-registry';
   import { AdaptiveStats } from '@/components/common/AdaptiveStats';
   
   const pageStats = statsRegistry.getStatsByCategory('ai');
   
   <AdaptiveStats
     collection={pageStats}
     title="AI-powered results"
     subtitle="Real metrics from our implementations."
     columns={4}
   />
   ```

5. **Lifecycle Integration** (if applicable)
   ```tsx
   import { LifecycleStageBadge } from '@/components/parts/LifecycleStageBadge';
   import { LifecycleFlowStrip } from '@/components/parts/LifecycleFlowStrip';
   
   <LifecycleStageBadge stages={pageData.lifecycleStages} />
   <LifecycleFlowStrip currentStage="grow" />
   ```

6. **Cross-Links Section**
   ```tsx
   import { RelatedPagesGrid } from '@/components/patterns/RelatedPagesGrid';
   
   <RelatedPagesGrid
     title="Related services"
     items={pageData.relatedServices}
   />
   <RelatedPagesGrid
     title="Related solutions"
     items={pageData.relatedSolutions}
   />
   ```

7. **Route Configuration**
   - Add route to appropriate routes file
   - Configure path, component, metadata
   - Add legacy redirects if renaming

8. **Template Size Management**
   - Keep templates under 300 lines
   - Extract sub-components if over
   - Use data-driven loops instead of repetition

#### Quality Checklist
- [ ] Zero inline content (all from data files)
- [ ] Reusable patterns used where applicable
- [ ] Template under 300 lines (or properly split)
- [ ] Stats from registry (not hardcoded)
- [ ] Lifecycle components integrated (if applicable)
- [ ] Cross-links included
- [ ] Route configured
- [ ] Proper semantic HTML (section, h1-h6, nav)

---

### Phase 4: Polish & Compliance Audit

**Duration:** 2-3 hours per page  
**Deliverables:** Polished, audit-ready page

#### Tasks

1. **Sentence Case Audit**
   - All h1, h2, h3 use sentence case
   - Proper nouns capitalized correctly
   - Service/product names treated as proper nouns

2. **Neon Compliance Audit**
   - All neon foreground colors on dark backgrounds only
   - `background: var(--color-black)` enforced for neon sections
   - Light mode sections use non-neon colors

3. **Token Compliance Audit**
   - Zero hardcoded hex colors
   - Zero hardcoded px/rem spacing
   - Zero hardcoded font-family
   - All via CSS variables

4. **Icon Compliance Audit**
   - All icons from `@phosphor-icons/react`
   - Zero `lucide-react` imports
   - Icon sizes via CSS classes (not inline styles)

5. **Accessibility Audit**
   - All sections have `aria-label`
   - Interactive elements keyboard accessible
   - Focus states visible
   - Reduced motion respected
   - Alt text on all images
   - Proper heading hierarchy (h1 → h2 → h3, no skipping)

6. **Performance Audit**
   - Images use `loading="lazy"`
   - Animations use `will-change` sparingly
   - Heavy components lazy-loaded
   - CSS animations hardware-accelerated (transform, opacity only)

7. **Cross-Link Verification**
   - All related service/solution links functional
   - Lifecycle flow strip links correct
   - Navigation breadcrumbs accurate

8. **Data Extraction Verification**
   - Zero content strings in template
   - All text from data files
   - Icons imported at data layer (not template)

#### Quality Checklist
- [ ] Sentence case: 100% compliant
- [ ] Neon compliance: All neon on dark backgrounds
- [ ] Token compliance: 100% CSS variables
- [ ] Icon compliance: 100% Phosphor icons
- [ ] Accessibility: WCAG 2.2 AA compliant
- [ ] Performance: Lazy loading, optimized animations
- [ ] Cross-links: All functional
- [ ] Data extraction: Zero inline content

---

## Page Implementation Order

### Tier 1: Landing Pages (2 pages)
High-traffic hubs, implement first.

1. **`/solutions/ai/`** — AI Solutions Landing
   - **Prompt:** `/prompts/ai-solutions-hub.md`
   - **Animation:** Neural network grid hero
   - **Stats:** Aggregated AI stats
   - **Lifecycle:** All 6 stages represented
   - **Complexity:** High (mega page)
   - **Estimated:** 16-20 hours

2. **`/services/ai/`** — AI Services Landing  
   - **Prompt:** `/prompts/ai-services-restructure/phase-2b-services-landing.md`
   - **Animation:** Orbital animation (6 icons around brain)
   - **Stats:** Lifecycle-specific stats per stage
   - **Lifecycle:** All 6 stages
   - **Complexity:** High (mega page)
   - **Estimated:** 16-20 hours

### Tier 2: Solutions Sub-Pages (5 pages)
Customer-facing solution pages.

3. **`/solutions/ai/integrations`** — AI Integrations
   - **Prompt:** `/prompts/ai-services-restructure/phase-3a-integrations.md`
   - **Animation:** Pulsing brain with orbiting nodes
   - **Lifecycle:** Discover → Build → Launch → Evolve
   - **Estimated:** 10-12 hours

4. **`/solutions/ai/content-generation`** — Content Generation
   - **Prompt:** `/prompts/ai-services-restructure/phase-3b-content-generation.md`
   - **Animation:** Particle flow (text generation)
   - **Lifecycle:** Create (pink)
   - **Estimated:** 8-10 hours

5. **`/solutions/ai/seo`** — AI-Powered SEO
   - **Prompt:** `/prompts/ai-services-restructure/phase-3c-seo.md`
   - **Animation:** Grid reveal (search graph)
   - **Lifecycle:** Grow (green/lime)
   - **Estimated:** 8-10 hours

6. **`/solutions/ai/chatbots`** — AI Chatbots
   - **Prompt:** `/prompts/ai-services-restructure/phase-3d-chatbots.md`
   - **Animation:** Conversation network (dual particle clusters)
   - **Lifecycle:** Launch (amber)
   - **Estimated:** 8-10 hours

7. **`/solutions/ai/analytics`** — AI Analytics
   - **Prompt:** `/prompts/ai-services-restructure/phase-3e-analytics.md`
   - **Animation:** Data constellation (star map)
   - **Lifecycle:** Grow + Evolve (dual badges)
   - **Estimated:** 8-10 hours

### Tier 3: Services Sub-Pages (5 pages)
Technical service detail pages.

8. **`/services/ai/search-visibility`** — AI Search & Visibility
   - **Prompt:** `/prompts/ai-services-restructure/phase-4a-search-visibility.md`
   - **Animation:** Pulsing glow orb
   - **Lifecycle:** Build → Grow → Evolve
   - **Estimated:** 8-10 hours

9. **`/services/ai/seo`** — SEO Service
   - **Prompt:** `/prompts/ai-services-restructure/phase-4b-seo.md`
   - **Animation:** Search graph grid
   - **Lifecycle:** Grow (green)
   - **Estimated:** 6-8 hours

10. **`/services/ai/analytics`** — Analytics Service
    - **Prompt:** `/prompts/ai-services-restructure/phase-4c-analytics.md`
    - **Animation:** Dot matrix pulse
    - **Lifecycle:** Grow (green)
    - **Estimated:** 6-8 hours

11. **`/services/ai/engine-optimisation`** — AI Engine Optimization
    - **Prompt:** `/prompts/ai-services-restructure/phase-4d-engine-optimisation.md`
    - **Animation:** Neural brain rings
    - **Lifecycle:** Grow + Evolve (dual)
    - **Estimated:** 8-10 hours

12. **`/services/ai/answer-engine-optimisation`** — Answer Engine Optimization
    - **Prompt:** `/prompts/ai-services-restructure/phase-4e-answer-engine.md`
    - **Animation:** Floating Q&A bubbles
    - **Lifecycle:** Grow (green)
    - **Estimated:** 8-10 hours

### Tier 4: Supporting Pages (4 pages)
About, process, team pages with AI integration.

13. **`/about/lightspeed`** — About LightSpeed
    - **Prompt:** `/prompts/ai-services-restructure/about-lightspeed.md`
    - **Animation:** Timeline visualization
    - **Estimated:** 12-14 hours

14. **`/about/process`** — Our Process
    - **Prompt:** `/prompts/ai-services-restructure/about-process.md`
    - **Animation:** Interactive process diagram
    - **Estimated:** 12-14 hours

15. **`/about/team`** — Our Team
    - **Prompt:** `/prompts/ai-services-restructure/about-team.md`
    - **Animation:** Team sphere (CSS 3D transform)
    - **Estimated:** 14-16 hours

16. **`/about/culture`** — Our Culture
    - **Prompt:** `/prompts/ai-services-restructure/about-culture.md`
    - **Animation:** World map visualization
    - **Estimated:** 10-12 hours

**Total Estimated Effort:** 170-200 hours across 16 pages

---

## Execution Workflow

### Step 1: Read Sub-Prompt
- Open corresponding prompt file from `/prompts/ai-services-restructure/`
- Review objectives, content audit, design requirements
- Note any page-specific animation concepts

### Step 2: Execute Phase 1 (Data Layer)
- Create data file in `/src/app/data/`
- Define TypeScript interfaces
- Import stats from registry
- Map lifecycle stages
- Add cross-linking data
- Run Phase 1 quality checklist

### Step 3: Execute Phase 2 (CSS & Animation)
- Create CSS file in `/src/styles/templates/` or `/src/styles/pages/`
- Choose animation concept (or use prompt suggestion)
- Implement BEM classes
- Add reduced motion fallbacks
- Enforce neon/dark background rule
- Ensure responsive design
- Run Phase 2 quality checklist

### Step 4: Execute Phase 3 (Template)
- Create template component in `/src/app/components/templates/`
- Import data from Phase 1
- Use reusable pattern components
- Map arrays to JSX
- Configure route
- Run Phase 3 quality checklist

### Step 5: Execute Phase 4 (Polish)
- Run all 8 compliance audits
- Fix any violations
- Verify cross-links
- Test accessibility
- Run Phase 4 quality checklist

### Step 6: Update Task List
- Mark phase tasks complete in `/tasks/ai-services-restructure-task-list.md`
- Note any deviations or discoveries
- Document new patterns created

### Step 7: Move to Next Page
- Repeat Steps 1-6 for next page in implementation order

---

## Task List Structure

All tasks stored in: `/tasks/ai-services-restructure-task-list.md`

### Format Per Page

```markdown
## [Page Name] — [Route]

**Prompt:** `/prompts/ai-services-restructure/[filename].md`  
**Tier:** [1-4]  
**Animation:** [Concept name]  
**Lifecycle:** [Stage(s)]  
**Estimated:** [X-Y hours]

### Phase 1: Data Layer
- [ ] Create data file
- [ ] Define TypeScript interfaces
- [ ] Import stats from registry
- [ ] Map lifecycle stages
- [ ] Add cross-linking data

### Phase 2: CSS & Animation
- [ ] Create CSS file
- [ ] Implement [animation concept]
- [ ] Add reduced motion fallbacks
- [ ] Enforce neon compliance
- [ ] Responsive design

### Phase 3: Template
- [ ] Create template component
- [ ] Import data
- [ ] Use pattern components
- [ ] Configure route
- [ ] File size compliance

### Phase 4: Polish
- [ ] Sentence case audit
- [ ] Neon compliance audit
- [ ] Token compliance audit
- [ ] Icon compliance audit
- [ ] Accessibility audit
- [ ] Performance audit
- [ ] Cross-link verification
- [ ] Data extraction verification
```

---

## Reusable Pattern Component Library

### Existing Patterns (use these)

| Component | Location | Use Case |
|---|---|---|
| `<Container>` | `/src/app/components/layout/Container.tsx` | Content wrapper with max-width |
| `<ScrollReveal>` | `/src/app/components/common/ScrollReveal.tsx` | Fade-in on scroll |
| `<NeonStats>` | `/src/app/components/common/NeonStats.tsx` | Neon stat grids (dark mode) |
| `<StatsGrid>` | `/src/app/components/patterns/StatsGrid.tsx` | Traditional stats |
| `<AdaptiveStats>` | `/src/app/components/common/AdaptiveStats.tsx` | Auto theme detection |
| `<FeatureList>` | `/src/app/components/patterns/FeatureList.tsx` | Icon + text features |
| `<ProcessTimeline>` | `/src/app/components/patterns/ProcessTimeline.tsx` | Step-by-step process |
| `<TestimonialCard>` | `/src/app/components/patterns/TestimonialCard.tsx` | Client testimonial |
| `<FunkyCTA>` | `/src/app/components/patterns/FunkyCTA.tsx` | Call-to-action |
| `<FAQSection>` | `/src/app/components/patterns/FAQSection.tsx` | Accordion FAQ |
| `<LifecycleStageBadge>` | `/src/app/components/parts/LifecycleStageBadge.tsx` | Stage indicator |
| `<LifecycleFlowStrip>` | `/src/app/components/parts/LifecycleFlowStrip.tsx` | Prev→current→next |
| `<RelatedPagesGrid>` | `/src/app/components/patterns/RelatedPagesGrid.tsx` | Cross-links grid |

### Patterns to Create (if needed)

| Component | Purpose | Estimated Effort |
|---|---|---|
| `<StickyAnchorNav>` | Sticky section navigation | 2-3 hours |
| `<StickyTimelineNav>` | Horizontal lifecycle timeline | 3-4 hours |
| `<SolutionCard>` | Solution overview card | 1-2 hours |
| `<ServiceCard>` | Service overview card | 1-2 hours |
| `<TrustSignal>` | Testimonial/badge/proof | 1-2 hours |

---

## CSS Animation Library

### Pre-Built Animations (copy & adapt)

All animations in: `/src/styles/animations/`

| Animation | File | Use Case |
|---|---|---|
| Neural pulse | `neural-pulse.css` | Brain/network effects |
| Orbit rotate | `orbit.css` | Circular motion |
| Particle float | `particle-float.css` | Floating elements |
| Glow pulse | `glow-pulse.css` | Pulsing orbs |
| Grid reveal | `grid-reveal.css` | Staggered fade-in |
| Ring pulse | `ring-pulse.css` | Concentric circles |

### Animation Template

```css
/* Animation name: [concept] */
/* Use case: [description] */
/* Reduced motion: [fallback description] */

@keyframes [animation-name] {
  0% { /* start state */ }
  50% { /* mid state (optional) */ }
  100% { /* end state */ }
}

/* Apply animation */
@media (prefers-reduced-motion: no-preference) {
  .[class-name] {
    animation: [animation-name] [duration] [easing] infinite;
    animation-delay: var(--animation-delay, 0s);
  }
}

/* Static fallback */
@media (prefers-reduced-motion: reduce) {
  .[class-name] {
    /* Static gradient or opacity */
  }
}
```

---

## Lifecycle Stage Reference

| Stage | Accent Color | Icon | Services | Solutions |
|---|---|---|---|---|
| **Discover** | `--neon-yellow` | `Compass` | Discovery, Research | AI Integrations |
| **Create** | `--neon-pink` | `PenNib` | Design, Figma | Content Generation |
| **Build** | `--neon-cyan` | `Code` | Development | AI Integrations |
| **Launch** | `--neon-lime` | `Rocket` | Migrations, Deployment | Chatbots |
| **Grow** | `--category-green` | `TrendUp` | SEO, Analytics, Performance | SEO, Analytics |
| **Evolve** | `--category-purple` | `Sparkle` | Support, Training | Analytics, Engine Optimization |

---

## Stats Registry Integration Guide

### Import Stats

```typescript
import { statsRegistry } from '@/data/stats/stats-registry';

// Get all stats in a category
const aiStats = statsRegistry.getStatsByCategory('ai');
const seoStats = statsRegistry.getStatsByCategory('seo');
const designStats = statsRegistry.getStatsByCategory('design');

// Get stats by tag
const chatbotStats = statsRegistry.getStatsByTag('chatbots');
const contentStats = statsRegistry.getStatsByTag('content');

// Get specific stat by ID
const projectsStat = statsRegistry.getStatById('projects-completed');
```

### Map to Component Format

```typescript
import { NeonStats } from '@/components/common/NeonStats';
import * as PhosphorIcons from '@phosphor-icons/react';

const neonStatsData = aiStats.map((stat) => ({
  id: stat.id,
  value: stat.value,
  label: stat.label,
  description: stat.description,
  icon: PhosphorIcons[stat.icon as keyof typeof PhosphorIcons],
  trend: stat.trend,
}));

<NeonStats
  stats={neonStatsData}
  title="AI-powered results"
  columns={4}
  accentColor="var(--wp--preset--color--neon-cyan)"
  variant="glass"
/>
```

### Use Adaptive Stats (Recommended)

```typescript
import { AdaptiveStats } from '@/components/common/AdaptiveStats';

const aiCollection = statsRegistry.getCollection('ai-stats');

<AdaptiveStats
  collection={aiCollection}
  title="Performance metrics"
  subtitle="Real results from our AI implementations."
  columns={4}
/>
```

---

## Cross-Linking Strategy

### Solutions → Services

Every solution page should link to 3-4 related services:

```typescript
// In data file
export const solutionRelatedServices = [
  {
    title: 'AI Search & Visibility',
    href: '/services/ai/search-visibility',
    description: 'Get found by AI-powered search engines',
    icon: 'Eye',
  },
  {
    title: 'SEO Service',
    href: '/services/ai/seo',
    description: 'Traditional + AI-enhanced SEO strategies',
    icon: 'MagnifyingGlass',
  },
  // ... 2-3 more
];
```

### Services → Solutions

Every service page should link to 3 related solutions:

```typescript
// In data file
export const serviceRelatedSolutions = [
  {
    title: 'AI-Powered SEO',
    href: '/solutions/ai/seo',
    description: 'Complete SEO solution powered by AI',
    icon: 'Sparkle',
  },
  // ... 2 more
];
```

### Render Cross-Links

```tsx
import { RelatedPagesGrid } from '@/components/patterns/RelatedPagesGrid';

<RelatedPagesGrid
  title="Related services"
  items={pageData.relatedServices}
/>
```

---

## Success Criteria Per Page

### Functional Requirements
- [ ] Page renders without errors
- [ ] All routes functional
- [ ] Navigation breadcrumbs correct
- [ ] All CTAs link to correct destinations
- [ ] Stats display correctly
- [ ] Lifecycle badges render (if applicable)

### Design System Compliance
- [ ] 100% CSS variables (zero hardcoded values)
- [ ] 100% sentence case headings
- [ ] 100% Phosphor icons
- [ ] Neon colors only on dark backgrounds
- [ ] BEM methodology throughout
- [ ] File sizes within limits (CSS <400, TSX <300)

### Performance
- [ ] Lighthouse score: 90+ (all categories)
- [ ] First Contentful Paint: <1.5s
- [ ] Largest Contentful Paint: <2.5s
- [ ] Cumulative Layout Shift: <0.1
- [ ] Total Blocking Time: <200ms

### Accessibility
- [ ] WCAG 2.2 AA compliant
- [ ] Keyboard navigation functional
- [ ] Screen reader tested
- [ ] Focus states visible
- [ ] Reduced motion respected
- [ ] Proper heading hierarchy

### Content
- [ ] Zero hardcoded content in templates
- [ ] All text from data files
- [ ] Stats from registry
- [ ] Cross-links populated
- [ ] Testimonials included (if applicable)

---

## Troubleshooting Guide

### Common Issues

**Issue:** Animation not respecting reduced motion  
**Fix:** Wrap animation in `@media (prefers-reduced-motion: no-preference)` and provide static fallback

**Issue:** Neon colors on light backgrounds  
**Fix:** Force `background: var(--color-black)` on sections using neon foreground colors

**Issue:** Hardcoded spacing detected  
**Fix:** Replace all `px`/`rem` values with `var(--spacing-*)` tokens

**Issue:** Template over 300 lines  
**Fix:** Extract lower sections to separate component (e.g., `PageNameLowerSections.tsx`)

**Issue:** CSS file over 400 lines  
**Fix:** Split into sub-files (hero, sections, components) with orchestrator import file

**Issue:** Icons not rendering  
**Fix:** Verify `@phosphor-icons/react` import, check icon name capitalization

**Issue:** Stats not displaying  
**Fix:** Verify stats registry import, check category/tag spelling, ensure stats exist

**Issue:** Cross-links 404  
**Fix:** Verify href paths match route configuration, check for typos

---

## Reporting & Documentation

### After Each Page Completion

1. **Update task list** (`/tasks/ai-services-restructure-task-list.md`)
   - Check all phase boxes
   - Note completion date
   - Document any deviations

2. **Update CHANGELOG** (`/CHANGELOG.md`)
   - Add entry under "Unreleased" section
   - Format: `- **Added:** [Page Name] at [route] with [animation concept]`

3. **Capture metrics**
   - Lines of code: data file, CSS file, template
   - Development time: actual vs. estimated
   - Patterns reused vs. created

### After All Pages Complete

1. **Create completion report** (`/reports/2026-03/ai-services-restructure-completion.md`)
   - Total pages implemented
   - Total effort (hours)
   - Patterns created/reused
   - Design system compliance score
   - Performance metrics

2. **Run final audits**
   - `audit` — Master audit
   - `audit accessibility` — WCAG compliance
   - `audit performance` — Lighthouse scores
   - `audit tokens` — CSS variable compliance

3. **Update README** (`/README.md`)
   - Document new AI services section
   - Update route count
   - Add screenshots

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial orchestrator with 4-phase implementation cycle |

---

**Last Updated:** March 17, 2026  
**Total Pages:** 16  
**Total Sub-Prompts:** 16  
**Design System:** LSX Design Funky Neon  
**Animation Approach:** CSS-only (zero WebGL)  
**Total Estimated Effort:** 170-200 hours
