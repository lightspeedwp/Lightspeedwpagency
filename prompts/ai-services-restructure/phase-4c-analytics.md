# Phase 4c — AI analytics service page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/services/ai/analytics` (`AnalyticsServiceTemplate.tsx`) to integrate with the lifecycle ecosystem. Maps to the **Grow** stage.

## Current state

- **Template:** `AnalyticsServiceTemplate.tsx` — standalone sub-service layout
- **Data:** `analytics-service-template-data.tsx` (benefits, deliverables, results)
- **CSS:** Uses shared service template BEM classes + `service-hero--pricing`, `discovery-body__deliverables-grid`
- **Section order:** Hero → Benefits → Deliverables → Results → CTA

## Changes required

### 1. Lifecycle stage badge

- Text: "Part of the Grow stage"
- Accent: `--category-green`, icon: `TrendUp`
- Links to `/services/grow`

### 2. Trust signal

Insert after benefits:
- 1 testimonial about data-driven decision making / ROI tracking

### 3. Cross-link to solutions

| Related solution | Route | Relevance |
|---|---|---|
| AI analytics (solution) | `/solutions/ai/analytics` | Solution overview |
| AI-powered SEO | `/solutions/ai/seo` | SEO analytics |
| AI integrations | `/solutions/ai/integrations` | Analytics tool integrations |

### 4. Cross-link to services

| Related service | Route | Relevance |
|---|---|---|
| AI search & visibility | `/services/ai/search-visibility` | Parent consolidated service |
| AI SEO | `/services/ai/seo` | SEO metrics |
| Performance | `/services/performance` | Performance analytics |
| AI answer engine | `/services/ai/answer-engine-optimisation` | AEO performance tracking |

### 5. Lifecycle flow section

- Prev: Build | Current: **Grow** | Next: Evolve

### 6. Differentiation callout

- "This page focuses on analytics implementation and reporting. For the full AI-powered search and visibility strategy, see [AI search & visibility](/services/ai/search-visibility)."

## Acceptance criteria

- [ ] Lifecycle badge, trust signal, cross-links, lifecycle flow
- [ ] Differentiation callout linking to AI Search & Visibility
- [ ] Sentence case headings, zero Tailwind, zero hardcoded values

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
