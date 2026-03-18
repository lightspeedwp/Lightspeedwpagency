# AI services restructure — orchestrator prompt

**Category:** Strategy  
**Version:** 3.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Template Used:** Orchestrator

---

## Purpose

Multi-phased orchestrator for restructuring all AI pages + 6 service lifecycle stage pages into a unified, interconnected ecosystem. Two landing pages serve as hubs (`/solutions/ai/` and `/services/ai/`), with 5 solutions sub-pages, 5 services sub-pages, and 6 lifecycle stage pages (Discover → Create → Build → Launch → Grow → Evolve) — all cross-linked throughout.

## Background

The March 17, 2026 team meeting defined a 6-stage AI-enhanced service lifecycle (Discover → Create → Build → Launch → Grow → Evolve). The pasted plan proposes consolidating existing AI pages into one AI Solutions mega-hub + one AI Services lifecycle page, with rich CSS-animated hero sections, sticky anchor navigation, early trust signals, and per-section CTAs.

Additionally, all 6 service lifecycle stage pages need AI-first redesigns with WebGL/CSS-animated heroes, AI capability integration, and cross-references to AI solutions/services.

**Key constraint:** Zero WebGL exists in codebase. All hero visuals use CSS-only effects (grids, gradients, neon glows, keyframe animations). "WebGL concepts" from the plan must be implemented as CSS-only enhanced animations with `@media (prefers-reduced-motion)` fallbacks.

## Phase execution order

| Phase | Focus | Sub-prompts | Depends on |
|---|---|---|---|
| 1 | Data layer — unified data files | None (inline) | — |
| 2 | Landing pages — 2 mega pages | `phase-2a-solutions-landing.md`, `phase-2b-services-landing.md` | Phase 1 |
| 3 | Solutions sub-pages — 5 pages | `phase-3a-integrations.md` through `phase-3e-analytics.md` | Phase 2a |
| 4 | Services sub-pages — 5 pages | `phase-4a-search-visibility.md` through `phase-4e-answer-engine.md` | Phase 2b |
| 5 | Lifecycle stage pages — 6 pages | `phase-5a-discover.md` through `phase-5f-evolve.md` | Phases 2-4 |
| 6 | Cross-linking, nav, trust, polish | `phase-6-interconnection.md` | All previous phases |

---

## Phase 1 — Data layer (inline, no sub-prompt)

### 1.1 Create `ai-services-lifecycle-data.tsx`

Unified data file mapping each of the 6 lifecycle stages. Location: `/src/app/data/ai-services-lifecycle-data.tsx`.

Each stage entry must include:
- `slug`, `step` (01–06), `name`, `tagline`, `icon` (Phosphor), `accent` (CSS variable)
- `description` (2–3 sentences max — reduced text per meeting notes)
- `services[]` — compact list: `{ title, description, icon, href, badge? }`
- `solutionLinks[]` — cross-references to `/solutions/ai/*` sub-pages
- `serviceLinks[]` — cross-references to `/services/ai/*` sub-pages
- `testimonial` — trust signal per stage
- `cta` — stage-specific CTA (e.g., "Book discovery session", "Start your prototype")

### 1.2 Create `ai-solutions-hub-data.tsx`

Enhanced data file for the Solutions hub. Location: `/src/app/data/ai-solutions-hub-data.tsx`.

Must include:
- Hero content with neural network visual concept description
- Sticky nav anchor items (one per solution)
- Solution sections (one per sub-page) with: title, description, key benefits (3–4 bullets), accent colour, icon, href, related service links
- Aggregated stats bar (pulling from existing sub-page stats)
- Trust section: 2–3 testimonials positioned high (section 2 or 3)
- Capabilities section (reuse/enhance existing `aiSolutionsCapabilities`)

### 1.3 Import stats from centralized registry

Import statistics from `/src/app/data/stats/stats-registry.ts` instead of local stat arrays. All AI service/solution pages should pull from the centralized registry for consistency.

**Files to update:**
- `ai-services-lifecycle-data.tsx` — import `aiStatsCollection` for AI capabilities stats
- `ai-solutions-hub-data.tsx` — import `aiStatsCollection` for solutions stats bar
- All 5 AI solutions sub-pages — import relevant stat collections

**Registry helper usage:**
```typescript
import { statsRegistry } from '@/data/stats/stats-registry';

// Get all AI stats
const aiStats = statsRegistry.getStatsByCategory('ai');

// Get specific stats by tag
const chatbotStats = statsRegistry.getStatsByTag('chatbots');

// Get entire collection with metadata
const aiCollection = statsRegistry.getCollection('ai-stats');
```

**Component usage (AdaptiveStats wrapper):**
```typescript
import { AdaptiveStats } from '@/components/common/AdaptiveStats';
import { statsRegistry } from '@/data/stats/stats-registry';

const aiCollection = statsRegistry.getCollection('ai-stats');

<AdaptiveStats
  collection={aiCollection}
  title="AI-powered results"
  subtitle="Real metrics from our AI implementations."
  columns={4}
/>
```

**NeonStats usage (dark mode, neon accents):**
```typescript
import { NeonStats } from '@/components/common/NeonStats';
import { statsRegistry } from '@/data/stats/stats-registry';
import * as PhosphorIcons from '@phosphor-icons/react';

const aiStats = statsRegistry.getStatsByCategory('ai');
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
  title="AI at scale"
  columns={4}
  accentColor="var(--wp--preset--color--neon-cyan)"
  variant="glass"
/>
```

**Accent colors per lifecycle stage:**
- **Discover** → `var(--wp--preset--color--neon-yellow)` (yellow)
- **Create** → `var(--wp--preset--color--neon-pink)` (pink)
- **Build** → `var(--wp--preset--color--neon-cyan)` (cyan)
- **Launch** → `var(--wp--preset--color--neon-lime)` (lime)
- **Grow** → `var(--category-green)` (green)
- **Evolve** → `var(--category-purple)` (indigo)

**Additional stats to include per stage:**
- **Discover** → `designStatsCollection` (design systems, Figma prototypes)
- **Create** → `designStatsCollection` (components, tokens)
- **Build** → `developmentStatsCollection` (custom themes, plugins, APIs)
- **Launch** → `migrationStatsCollection` + `hostingStatsCollection` (deployments, sites hosted)
- **Grow** → `seoStatsCollection` + `performanceStatsCollection` (traffic, speed)
- **Evolve** → `supportStatsCollection` (tickets, response times, retainers)

**Reference:** See `/prompts/stats-data-structure.md` for complete data structure specification.

### 1.4 Rename Ignite → Discover

Update these files (same as v1.0.0 prompt — unchanged):
- `service-journey.ts` — `name: 'Ignite'` → `name: 'Discover'`
- `journey-stage-pages.ts` — `slug: 'ignite'` → `slug: 'discover'`
- `route-map.ts` — `'journey-ignite'` → `'journey-discover'`
- `core.routes.tsx` — route path, component function, legacy redirect

---

## Phase 2 — Landing pages

### Sub-prompt 2a: `/solutions/ai/` — Solutions hub mega page

**File:** `/prompts/ai-services-restructure/phase-2a-solutions-landing.md`

Redesign `AISolutionsLandingTemplate.tsx` as a long-form mega page with sticky anchor navigation. Each of the 5 solutions gets its own full-viewport section with a CSS-animated hero visual, compact benefits list, and links to both the dedicated sub-page and related services.

### Sub-prompt 2b: `/services/ai/` — Services lifecycle mega page

**File:** `/prompts/ai-services-restructure/phase-2b-services-landing.md`

Redesign `AIServicesLandingTemplate.tsx` around the 6-stage lifecycle. Interactive horizontal timeline, 6 stage sections with distinct neon accents on dark backgrounds, compact service cards, per-section CTAs.

---

## Phase 3 — Solutions sub-pages (5 pages)

Each sub-prompt covers one `/solutions/ai/*` page. All 5 share `AISubPageTemplate.tsx` as their layout engine. Updates focus on:
- Adding lifecycle stage badge ("Used in: Grow stage")
- Cross-linking to the corresponding `/services/ai/*` page
- Adding trust signal (testimonial) after hero or stats
- Removing/simplifying pricing tables per meeting notes (funnel to consultation)
- Adding "Related services" and "Related solutions" sections before CTA
- Animated metrics with counters and particle effects
- Interactive capability demonstrations

| Sub-prompt file | Route | Template | Brief source |
|---|---|---|---|
| `phase-3a-integrations.md` | `/solutions/ai/integrations` | AIIntegrationsTemplate | — |
| `phase-3b-content-generation.md` | `/solutions/ai/content-generation` | AIContentGenerationTemplate | ai-content-brief.md |
| `phase-3c-seo.md` | `/solutions/ai/seo` | AISEOTemplate | AI-powered SEO brief |
| `phase-3d-chatbots.md` | `/solutions/ai/chatbots` | AIChatbotsTemplate | AI chatbots brief |
| `phase-3e-analytics.md` | `/solutions/ai/analytics` | AIAnalyticsTemplate | Analytics & insights brief |

---

## Phase 4 — Services sub-pages (5 pages)

Each sub-prompt covers one `/services/ai/*` page. These are standalone templates (not shared layout). Updates focus on:
- Adding lifecycle stage badge ("Part of the Grow stage")
- Cross-linking to corresponding `/solutions/ai/*` page where applicable
- Adding "How this connects" section showing adjacent lifecycle stages
- Adding trust signal (testimonial/case study) in upper half
- Ensuring consistent section order across all 5 pages
- Removing pricing tables (funnel to consultation)
- Adding expected results with animated metrics

| Sub-prompt file | Route | Template | Brief source |
|---|---|---|---|
| `phase-4a-search-visibility.md` | `/services/ai/search-visibility` | AISearchServiceTemplate | AI search visibility brief |
| `phase-4b-seo.md` | `/services/ai/seo` | SEOServiceTemplate | AI SEO service brief |
| `phase-4c-analytics.md` | `/services/ai/analytics` | AnalyticsServiceTemplate | AI services landing brief |
| `phase-4d-engine-optimisation.md` | `/services/ai/engine-optimisation` | AIEngineServiceTemplate | lightspeed-aeo-service-brief.md |
| `phase-4e-answer-engine.md` | `/services/ai/answer-engine-optimisation` | AnswerEngineServiceTemplate | aeo-service-brief.md |

---

## Phase 5 — Lifecycle stage pages (6 pages)

Each sub-prompt covers one `/services/*` journey stage page. These pages showcase how AI enhances each stage of the service delivery lifecycle. Updates focus on:
- CSS-animated hero concepts (unique per stage)
- AI capability integration within each stage
- Cross-references to AI solutions and services
- Lifecycle navigation breadcrumbs
- Stage-specific metrics and deliverables
- Client role clarification with AI context

| Sub-prompt file | Route | Template | Brief source |
|---|---|---|---|
| `phase-5a-discover.md` | `/services/discover` | JourneyStageTemplate (slug: discover) | Discover stage services brief |
| `phase-5b-create.md` | `/services/create` | JourneyStageTemplate (slug: create) | create-stage-services.md |
| `phase-5c-build.md` | `/services/build` | JourneyStageTemplate (slug: build) | build-stage-content-audit.md |
| `phase-5d-launch.md` | `/services/launch` | JourneyStageTemplate (slug: launch) | launch-services-overview.md |
| `phase-5e-grow.md` | `/services/grow` | JourneyStageTemplate (slug: grow) | Grow stage services brief |
| `phase-5f-evolve.md` | `/services/evolve` | JourneyStageTemplate (slug: evolve) | evolve-stage-services.md |

---

## Phase 6 — Cross-linking, navigation, trust, and polish

**File:** `/prompts/ai-services-restructure/phase-6-interconnection.md`

Final pass to ensure all 18 pages (2 landings + 5 solutions + 5 services + 6 lifecycle stages) form a cohesive ecosystem:
- Verify every solutions sub-page links to related services sub-pages (and vice versa)
- Verify every lifecycle stage page links to relevant AI solutions/services
- Verify both landing pages link to all sub-pages
- Update mega menu to include 6 lifecycle stages with icons
- Move testimonials higher on journey stage pages (position 3, not 6)
- Audit all headings for sentence case
- Audit all neon accents for dark-background compliance
- Audit all CSS for token compliance (zero hardcoded values)
- Ensure consistent CTA messaging across all pages

---

## Design system rules (all phases)

1. **Zero Tailwind classes** — only `wp-*` prefixed classes or BEM
2. **CSS variables only** — `var(--spacing-*)`, `var(--font-*)`, `var(--color-*)`, etc.
3. **Typography** — `var(--font-primary)` (Lexend) for headings/body, `var(--font-secondary)` (Manrope) for metadata/captions
4. **Neon rule** — neon-bright colours only on dark backgrounds (`var(--color-black)`)
5. **Sentence case** — all headings use sentence case, never title case
6. **Icons** — `@phosphor-icons/react` only, zero `lucide-react`
7. **Router** — `react-router` only, never `react-router-dom`
8. **File size** — `.tsx` max 300 lines, `.css` max 400 lines, `.md` max 350 lines
9. **Data extraction** — content in data files (`.tsx`), templates handle layout only
10. **Reduced motion** — all CSS animations must respect `prefers-reduced-motion`

## CSS animation concepts (replacing WebGL)

| Stage | CSS concept | Technique |
|---|---|---|
| Solutions hub | Neural network grid | CSS grid + animated connection lines + pulsing nodes |
| Discover | Constellation of questions | CSS particles morphing via keyframes + `clip-path` |
| Create | Flowing prototype | Animated wireframe blocks using CSS transforms |
| Build | Code weave | CSS code snippet blocks assembling with `translateY` |
| Launch | Rocket launch | CSS rocket shape with trail gradient + orbital paths |
| Grow | Growth curve | CSS sine wave using `clip-path` + growing tree SVG |
| Evolve | Evolving brain | CSS neural pattern with increasing complexity keyframes |

All animations: `animation-play-state: paused` when not in viewport (via `IntersectionObserver`), static gradient fallback for `prefers-reduced-motion`.

---

## Expected outputs

1. **Prompt (this file):** `/prompts/ai-services-restructure.md`
2. **Sub-prompts (18):** `/prompts/ai-services-restructure/phase-*.md`
3. **Report:** `/reports/2026-03/2026-03-17-ai-services-restructure-audit.md`
4. **Task list:** `/tasks/ai-services-restructure-task-list.md`

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 3.0.0 | 2026-03-17 | Added Phase 5 — 6 lifecycle stage page redesigns. Total sub-prompts: 12 → 18 |
| 2.0.0 | 2026-03-17 | Major expansion: 5-phase orchestrator with 12 sub-prompts covering all AI pages |
| 1.0.0 | 2026-03-17 | Initial prompt from March 17 team meeting notes |