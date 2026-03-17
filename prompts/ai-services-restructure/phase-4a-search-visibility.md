# Phase 4a — AI search & visibility service page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/services/ai/search-visibility` (`AISearchServiceTemplate.tsx`) to integrate with the lifecycle ecosystem. This is the flagship AI service — a consolidation of SEO, analytics, AI engine, and answer engine services. Maps to the **Grow** stage.

## Current state

- **Template:** `AISearchServiceTemplate.tsx` — standalone layout (not shared)
- **Data:** `ai-search-service-template-data.tsx` (pillars: 4 merged sub-services, process steps)
- **CSS:** `page-service-ai-search.css`
- **Section order:** Breadcrumbs → Hero → Pillars (FeatureList) → Stats → Process → Related → CTA
- **BEM prefix:** `.ai-search-page`

## Changes required

### 1. Lifecycle stage context

Add a "journey context" strip between breadcrumbs and hero:
- Horizontal mini-timeline showing: `Discover → Create → Build → Launch → **Grow** → Evolve`
- "Grow" highlighted with `--category-green` accent
- Clickable — each stage links to `/services/{stage}`
- BEM: `.ai-search-page__journey-context`
- Reuse or adapt `JourneyProgressBar` component from `JourneyStageTemplate`

### 2. Trust signal

Insert between hero and pillar sections:
- 1–2 testimonial cards about search visibility improvements
- Metrics: e.g., "156% organic traffic increase" (from existing stats)
- BEM: `.ai-search-page__trust`

### 3. Cross-link to solutions

Add "AI solutions that power this" section before CTA:

| Related solution | Route | Relevance |
|---|---|---|
| AI-powered SEO | `/solutions/ai/seo` | SEO solution details |
| AI analytics | `/solutions/ai/analytics` | Analytics solution details |
| AI integrations | `/solutions/ai/integrations` | Integration tooling |

### 4. Cross-link to services

Update or enhance the existing `RelatedServicesGrid`:

| Related service | Route | Relevance |
|---|---|---|
| AI SEO | `/services/ai/seo` | Dedicated SEO service |
| AI analytics | `/services/ai/analytics` | Dedicated analytics service |
| AI engine optimisation | `/services/ai/engine-optimisation` | AI engine service |
| AI answer engine | `/services/ai/answer-engine-optimisation` | AEO service |

### 5. "How this connects" section

New section showing the lifecycle flow:
- Visual: 3-card horizontal strip: "← Build (previous)" → "**Grow** (you are here)" → "Evolve (next) →"
- Each card: stage icon, name, 1-line description, link
- BEM: `.ai-search-page__lifecycle-flow`

### 6. Content refinements

- Reduce pillar descriptions to 2 sentences max (currently longer)
- Add bullet lists for sub-features (existing data has `features[]` arrays — ensure they render)
- Ensure hero description is concise (≤ 3 sentences)

## Data file changes

Update `ai-search-service-template-data.tsx`:
- Add `lifecycleStage` object
- Add `trustSignals` array
- Add `relatedSolutions` array
- Add `lifecycleFlow` object (prev/current/next stages)

## Acceptance criteria

- [ ] Journey context strip visible between breadcrumbs and hero
- [ ] Trust signal in upper third of page
- [ ] Related solutions section with 3 links
- [ ] Lifecycle flow section with prev/current/next stages
- [ ] Related services updated with 4 links
- [ ] All pillar descriptions ≤ 2 sentences
- [ ] Zero Tailwind, zero hardcoded values, sentence case headings

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
