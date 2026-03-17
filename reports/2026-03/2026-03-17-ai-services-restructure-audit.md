# AI services restructure — audit report

**Category:** Strategy  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Prompt:** `/prompts/ai-services-restructure.md`

---

## Executive summary

This report analyses the current services architecture against the proposed 6-stage AI-enhanced lifecycle discussed in the March 17, 2026 team meeting. The restructure renames "Ignite" to "Discover", repositions AI services as a cross-cutting concern woven into every stage, and consolidates the AI landing page into a highly interactive mega page.

**Impact level:** High — touches routes, data files, navigation, templates, and content strategy.  
**Estimated effort:** 12–16 tasks across 3 priority tiers.

---

## Current state analysis

### Journey stages (existing)

| Step | Current name | Slug | Accent | Status |
|---|---|---|---|---|
| 01 | Ignite | `/services/ignite` | `--category-violet` | Rename → Discover |
| 02 | Create | `/services/create` | `--category-pink` | Update services list |
| 03 | Build | `/services/build` | `--category-cyan` | Update services list |
| 04 | Launch | `/services/launch` | `--category-amber` | Update services list |
| 05 | Grow | `/services/grow` | `--category-green` | Update services list |
| 06 | Evolve | `/services/evolve` | `--category-indigo` | Update services list |

### Affected files inventory

| File | Type | Changes needed |
|---|---|---|
| `/src/app/data/service-journey.ts` | Data | Rename Ignite → Discover, remap services per stage |
| `/src/app/data/journey-stage-pages.ts` | Data | Rename slug, update all content for Discover, update service lists for all 6 stages |
| `/src/app/utils/route-map.ts` | Utility | `journey-ignite` → `journey-discover`, add path `/services/discover` |
| `/src/app/routes/core.routes.tsx` | Routes | Rename route, add legacy redirect `/services/ignite` → `/services/discover` |
| `/src/app/components/templates/JourneyStageTemplate.tsx` | Template | No code change needed (slug-driven) |
| `/src/app/components/templates/AIServicesLandingTemplate.tsx` | Template | Major redesign — mega page with stage-based sections |
| `/src/app/data/header-navigation.ts` | Data | Verify mega menu references use "Discover" |

### AI services — current route map

| Route | Template | Target stage |
|---|---|---|
| `/services/ai` | AIServicesLandingTemplate | Hub — becomes mega page |
| `/services/ai/search-visibility` | AISearchServiceTemplate | Grow |
| `/services/ai/seo` | SEOServiceTemplate | Grow |
| `/services/ai/analytics` | AnalyticsServiceTemplate | Grow |
| `/services/ai/engine-optimisation` | AIEngineServiceTemplate | Grow / Evolve |
| `/services/ai/answer-engine-optimisation` | AnswerEngineServiceTemplate | Grow |

### AI solutions — current route map (separate from services)

| Route | Template | Notes |
|---|---|---|
| `/solutions/ai` | AISolutionsLandingTemplate | Solutions hub — may merge with services mega page |
| `/solutions/ai/content-generation` | AIContentGenerationTemplate | Create stage |
| `/solutions/ai/seo` | AISEOTemplate | Grow stage |
| `/solutions/ai/chatbots` | AIChatbotsTemplate | Launch stage |
| `/solutions/ai/analytics` | AIAnalyticsTemplate | Grow stage |
| `/solutions/ai/integrations` | AIIntegrationsTemplate | Launch stage |

---

## Gap analysis

### 1. Naming conflict — Ignite → Discover

**Finding:** The current "Ignite" phase (step 01) must be renamed to "Discover". This affects 4 files directly and any navigation/content that references "Ignite" by name.

**Files affected:**
- `service-journey.ts` — `name: 'Ignite'` → `name: 'Discover'`
- `journey-stage-pages.ts` — `slug: 'ignite'` → `slug: 'discover'`, all content referencing "Ignite"
- `route-map.ts` — `'journey-ignite': '/services/ignite'` → `'journey-discover': '/services/discover'`
- `core.routes.tsx` — route path + component function + legacy redirect

**Risk:** Low — slug-driven template means only data/route changes needed.

### 2. Service-to-stage mapping gaps

**Finding:** The meeting defined specific service allocations per stage that differ from current journey data. Key changes:

| Stage | Currently missing services |
|---|---|
| Discover | AI consulting (new), content collection doc |
| Create | Figma prototyping, design systems, accessible design (partially present) |
| Build | AI-assisted development (new concept) |
| Launch | AI integrations (currently in Solutions, not Services) |
| Grow | LLM.txt (new), AEO (present as "Answer Engine") |
| Evolve | AI future strategy (new), AI advancements consulting |

### 3. Migrations — anomalous placement

**Finding:** Migrations is described as "stage 0" — an anomaly that either feeds into Discover (if the client is moving from an existing platform) or goes directly to Build. Currently lives at `/services/migrations` as a standalone.

**Recommendation:** Add Migrations as an optional pre-stage card on the Discover page with a visual indicator that it can also connect directly to Build. Do not create a separate "stage 0" route — keep `/services/migrations` as-is but cross-reference from both Discover and Build journey pages.

### 4. Mega AI page — no WebGL exists

**Finding:** A codebase search for WebGL, Canvas 3D, and Three.js returned **zero results**. The current hero sections use CSS-only effects (grids, gradients, neon glows, keyframe animations). There are no existing WebGL headers to "collect and render."

**Recommendation:** The mega AI page should use **enhanced CSS animations and scroll-triggered effects** rather than actual WebGL, consistent with the existing design system. Each stage section can use a unique hero-style visual treatment combining:
- Neon grid backgrounds (existing pattern)
- Scroll-triggered `ScrollReveal` animations (existing)
- Stage-specific neon accent colours (existing `--category-*` tokens)
- CSS-only particle/glow effects (can be created with existing animation system)

### 5. Trust factors — placement audit

**Finding:** The meeting stressed that testimonials and case studies must appear higher on content pages. Currently:
- Journey stage pages have testimonials at position 6 of 8 (below services, deliverables)
- AI services landing has NO testimonials section
- Service templates place testimonials in lower sections via patterns

**Recommendation:** Move testimonials to position 3 (after hero + services overview, before detailed deliverables) on both journey and service pages.

### 6. Content presentation — cards vs lists

**Finding:** The meeting requested smaller text amounts with lists or sliders instead of large cards. Currently service cards use `ServiceCapabilitiesGrid` with full description blocks.

**Recommendation:** Create a compact list variant of the service cards pattern, and consider a tabbed interface for sub-services within each stage.

---

## Proposed new architecture

### Mega AI services page (`/services/ai` — enhanced)

```
Section 1: Hero — full-viewport with animated stage icons orbiting
Section 2: Stage overview — 6-stage horizontal timeline (interactive, clickable)
Section 3: Discover — neon violet section with service cards
Section 4: Create — neon pink section with service cards
Section 5: Build — neon cyan section with service cards
Section 6: Launch — neon amber section with service cards
Section 7: Grow — neon green section with service cards
Section 8: Evolve — neon indigo section with service cards
Section 9: Trust — testimonials + case study cards (high position)
Section 10: CTA — FunkyCTA with AI audit offer
```

Each stage section should:
- Force dark background (`var(--color-black)`) for neon accent compliance
- Use stage-specific `--phase-accent` CSS variable
- Include 2–4 service cards in compact list format
- Link to the full journey stage page and individual service pages
- Feature a scroll-triggered entrance animation

### Route changes

```
RENAME:  /services/ignite  →  /services/discover
ADD:     /services/ignite   →  redirect to /services/discover (legacy)
KEEP:    /services/ai       →  enhanced mega page (AIServicesLandingTemplate redesign)
KEEP:    /services/ai/*     →  all sub-service routes unchanged
KEEP:    /solutions/ai/*    →  solution pages unchanged (separate concern)
```

---

## Recommendations summary

| # | Item | Priority | Effort |
|---|---|---|---|
| 1 | Rename Ignite → Discover in all data files | High | Small |
| 2 | Update route + route-map + add legacy redirect | High | Small |
| 3 | Update `service-journey.ts` service mappings for all 6 stages | High | Medium |
| 4 | Update `journey-stage-pages.ts` content for Discover + all stages | High | Medium |
| 5 | Check header navigation for Ignite references | High | Small |
| 6 | Redesign `AIServicesLandingTemplate` as mega page | High | Large |
| 7 | Create mega page data file (stage sections + content) | High | Medium |
| 8 | Create mega page CSS (6 stage sections + dark bg neon) | High | Medium |
| 9 | Move testimonials higher on journey stage pages | Medium | Small |
| 10 | Create compact service list variant pattern | Medium | Medium |
| 11 | Add Migrations cross-reference to Discover + Build pages | Medium | Small |
| 12 | Add AI consulting content to Discover stage | Medium | Small |
| 13 | Add AI-assisted development content to Build stage | Medium | Small |
| 14 | Add LLM.txt / AEO content to Grow stage | Medium | Small |
| 15 | Add AI future strategy content to Evolve stage | Medium | Small |
| 16 | Consider tabbed interface for sub-services | Low | Medium |

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial audit from March 17 team meeting requirements |
