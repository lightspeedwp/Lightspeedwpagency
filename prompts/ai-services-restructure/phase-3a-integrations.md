# Phase 3a — AI integrations solution page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/solutions/ai/integrations` (`AIIntegrationsTemplate.tsx`) to integrate with the lifecycle ecosystem. Add stage badges, cross-links to services, trust signals, and remove pricing tables.

## Current state

- **Template:** `AIIntegrationsTemplate.tsx` — uses `AISubPageTemplate` indirectly (own layout)
- **Data:** `ai-integrations/landing.ts` (hero, stats, features, sub-page cards, FAQs, CTA)
- **Section order:** Breadcrumbs → Hero → Stats → Features → Sub-Page Cards → FAQs → CTA

## Changes required

### 1. Add lifecycle stage badges

Insert a badge component after breadcrumbs (before hero):
- Text: "Spans: Discover → Launch → Evolve"
- Icons: stage icons from lifecycle data
- BEM: `.ai-page__lifecycle-badge`
- Visual: horizontal pill with 3 stage accent dots

### 2. Add trust signal section

Insert between Stats and Features (position 3):
- 1 testimonial card relevant to AI integrations
- Compact format: quote, author, company
- BEM: `.ai-page__trust-inline`

### 3. Cross-link to services

Add "Related services" section before CTA:

| Related service | Route | Relevance |
|---|---|---|
| AI search & visibility | `/services/ai/search-visibility` | Integration with search tools |
| AI engine optimisation | `/services/ai/engine-optimisation` | Engine-level AI integration |
| Discovery & strategy | `/services/discovery` | Integration planning in Discover stage |

BEM: `.ai-page__related-services`, `__related-service-card`

### 4. Cross-link to solutions

Add "Explore more solutions" row before CTA (after related services):

| Related solution | Route |
|---|---|
| AI content generation | `/solutions/ai/content-generation` |
| AI-powered SEO | `/solutions/ai/seo` |
| AI analytics | `/solutions/ai/analytics` |

### 5. Remove pricing table

Per meeting notes: replace pricing section with a consultation CTA:
- "Pricing is bespoke — every integration is different"
- Single button: "Request a quote" → contact page

### 6. Update breadcrumbs

Change: `AI Integrations` → `AI integrations` (sentence case)
Change parent: `AI Integrations` → `AI solutions` with href `/solutions/ai`

## Data file changes

Update `ai-integrations/landing.ts`:
- Add `lifecycleStages` array (badges)
- Add `trustSignal` object (testimonial)
- Add `relatedServices` array
- Add `relatedSolutions` array
- Remove pricing data or keep but don't render

## Acceptance criteria

- [ ] Lifecycle stage badge visible after breadcrumbs
- [ ] Trust signal appears in position 3
- [ ] Related services section links to 3 service pages
- [ ] Related solutions section links to 3 solution pages
- [ ] Pricing table removed, replaced with consultation CTA
- [ ] Breadcrumbs use sentence case and link to `/solutions/ai`
- [ ] Zero Tailwind, zero hardcoded values

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
