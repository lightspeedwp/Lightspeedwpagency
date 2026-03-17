# AI services restructure — audit report

**Category:** Strategy  
**Version:** 2.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Prompt:** `/prompts/ai-services-restructure.md`

---

## Executive summary

This report analyses the current AI page architecture against the proposed unified ecosystem from the March 17, 2026 team meeting and subsequent planning document. The restructure affects **12 pages** across two hubs (`/solutions/ai/` and `/services/ai/`) plus 10 sub-pages, introducing lifecycle stage context, cross-linking, trust signals, and CSS-animated hero sections.

**Impact level:** High — touches 12 templates, 10+ data files, routes, navigation, and CSS.  
**Estimated effort:** 5 phases, 12 sub-prompts, ~50 tasks.

---

## Current state analysis

### AI solutions pages (under `/solutions/ai/`)

| Route | Template | Data source | Layout |
|---|---|---|---|
| `/solutions/ai/` | AISolutionsLandingTemplate | `ai-solutions-landing-data.tsx` | Custom hero + cards + capabilities |
| `/solutions/ai/integrations` | AIIntegrationsTemplate | `ai-integrations/landing.ts` | Custom (similar to AISubPageTemplate) |
| `/solutions/ai/content-generation` | AIContentGenerationTemplate | `ai-integrations/content-generation.ts` | AISubPageTemplate (variant: content) |
| `/solutions/ai/seo` | AISEOTemplate | `ai-integrations/seo.ts` | AISubPageTemplate (variant: seo) |
| `/solutions/ai/chatbots` | AIChatbotsTemplate | `ai-integrations/chatbots.ts` | AISubPageTemplate (variant: chatbots) |
| `/solutions/ai/analytics` | AIAnalyticsTemplate | `ai-integrations/analytics.ts` | AISubPageTemplate (variant: analytics) |

**Key observations:**
- Solutions landing is a simple card hub — no lifecycle context
- Sub-pages use `AISubPageTemplate` with pricing tables (meeting notes say: remove pricing)
- Zero cross-links to `/services/ai/*` pages
- No trust signals (testimonials) on any solutions page
- No lifecycle stage badges

### AI services pages (under `/services/ai/`)

| Route | Template | Data source | Layout |
|---|---|---|---|
| `/services/ai/` | AIServicesLandingTemplate | Inline arrays (not extracted!) | Custom hero + grid + stats + approach |
| `/services/ai/search-visibility` | AISearchServiceTemplate | `ai-search-service-template-data.tsx` | Standalone (FeatureList + StatsGrid + ProcessTimeline) |
| `/services/ai/seo` | SEOServiceTemplate | `seo-service-template-data.tsx` | Sub-service shared BEM |
| `/services/ai/analytics` | AnalyticsServiceTemplate | `analytics-service-template-data.tsx` | Sub-service shared BEM |
| `/services/ai/engine-optimisation` | AIEngineServiceTemplate | `ai-engine-service-template-data.tsx` | Sub-service shared BEM |
| `/services/ai/answer-engine-optimisation` | AnswerEngineServiceTemplate | `answer-engine-service-template-data.tsx` | Sub-service shared BEM |

**Key observations:**
- Services landing has inline data (not extracted to data file — violates data architecture pattern)
- No lifecycle context on any services sub-page
- Zero cross-links to `/solutions/ai/*` pages
- No trust signals on services landing
- No lifecycle flow strips (prev/current/next stage)

### Interconnection gap

Currently there is **zero cross-linking** between the solutions and services AI pages:
- No solutions page links to any services page
- No services page links to any solutions page
- The two hubs don't reference each other (except a secondary CTA on solutions landing)
- Users who land on `/solutions/ai/seo` have no path to discover `/services/ai/seo`

---

## Gap analysis

### 1. Missing cross-links (critical)

| Gap | Count | Fix |
|---|---|---|
| Solutions → Services links | 0 of 15 needed | Add "Related services" sections |
| Services → Solutions links | 0 of 15 needed | Add "Related solutions" sections |
| Landing → All sub-pages | Partial | Enhance both hubs |

### 2. Missing lifecycle context (high)

| Gap | Pages affected | Fix |
|---|---|---|
| No stage badges | 10 sub-pages | Add LifecycleStageBadge component |
| No lifecycle flow strips | 5 services sub-pages | Add LifecycleFlowStrip component |
| No journey context | 5 services sub-pages | Add mini-timeline |

### 3. Missing trust signals (high)

| Gap | Pages affected | Fix |
|---|---|---|
| No testimonials on solutions hub | 1 page | Add trust section in position 3–4 |
| No testimonials on services hub | 1 page | Add trust section in position 3–4 |
| No testimonials on sub-pages | 10 pages | Add inline trust cards |

### 4. Pricing tables to remove (medium)

| Gap | Pages affected | Fix |
|---|---|---|
| Pricing tables on AISubPageTemplate pages | 4 pages | Replace with consultation CTA |
| Pricing data in data files | 4 data files | Keep but don't render (or remove) |

### 5. Content not extracted (medium)

| Gap | File | Fix |
|---|---|---|
| AIServicesLandingTemplate inline data | 1 template | Extract to `ai-services-lifecycle-data.tsx` |

### 6. Ignite → Discover rename (high)

| File | Change |
|---|---|
| `service-journey.ts` | `name: 'Ignite'` → `name: 'Discover'` |
| `journey-stage-pages.ts` | `slug: 'ignite'` → `slug: 'discover'`, all Ignite references |
| `route-map.ts` | `journey-ignite` → `journey-discover` |
| `core.routes.tsx` | Route path + component + legacy redirect |

### 7. Missing CSS animations (low)

The planning document specifies WebGL-style visuals for each stage. Codebase has **zero WebGL**. All 7 animation concepts must be implemented as CSS-only with reduced-motion fallbacks.

---

## Proposed shared components

| Component | Location | Used by |
|---|---|---|
| LifecycleStageBadge | `/src/app/components/parts/LifecycleStageBadge.tsx` | All 10 sub-pages |
| LifecycleFlowStrip | `/src/app/components/parts/LifecycleFlowStrip.tsx` | All 5 services sub-pages |
| RelatedPagesGrid | `/src/app/components/patterns/RelatedPagesGrid.tsx` | All 10 sub-pages |
| StickyAnchorNav | `/src/app/components/parts/StickyAnchorNav.tsx` | Both landing pages |

---

## Phase summary

| Phase | Scope | Files affected | New files |
|---|---|---|---|
| 1 | Data layer | 4 existing + 2 new data files | `ai-services-lifecycle-data.tsx`, `ai-solutions-hub-data.tsx` |
| 2 | Landing pages | 2 templates + 2 CSS files | Split files if over 300 lines |
| 3 | Solutions sub-pages | 5 templates + 5 data files | — |
| 4 | Services sub-pages | 5 templates + 5 data files | — |
| 5 | Cross-linking + polish | All 12 pages + nav + routes | 3–4 shared components |

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 2.0.0 | 2026-03-17 | Major expansion: 12-page analysis, interconnection gap, 5-phase plan |
| 1.0.0 | 2026-03-17 | Initial audit from March 17 team meeting |
