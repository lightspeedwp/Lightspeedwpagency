# Phase 4b — AI SEO service page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/services/ai/seo` (`SEOServiceTemplate.tsx`) to integrate with the lifecycle ecosystem. Maps to the **Grow** stage. This is the dedicated technical SEO service — distinct from the consolidated AI Search & Visibility page.

## Current state

- **Template:** `SEOServiceTemplate.tsx` — standalone sub-service layout
- **Data:** `seo-service-template-data.tsx` (benefits, deliverables, results)
- **CSS:** Uses shared service template BEM classes (`service-hero`, `service-section`, `sub-service-base`)
- **Section order:** Hero → Benefits → Deliverables → Results → CTA

## Changes required

### 1. Lifecycle stage badge

- Text: "Part of the Grow stage"
- Accent: `--category-green`, icon: `TrendUp`
- Links to `/services/grow`

### 2. Trust signal

Insert after benefits section:
- 1 testimonial about SEO ranking/traffic results
- Compact inline format

### 3. Cross-link to solutions

Add before CTA:

| Related solution | Route | Relevance |
|---|---|---|
| AI-powered SEO (solution) | `/solutions/ai/seo` | Solution overview |
| AI content generation | `/solutions/ai/content-generation` | SEO content creation |
| AI analytics | `/solutions/ai/analytics` | Measuring SEO results |

### 4. Cross-link to services

| Related service | Route | Relevance |
|---|---|---|
| AI search & visibility | `/services/ai/search-visibility` | Parent consolidated service |
| AI engine optimisation | `/services/ai/engine-optimisation` | AI engine SEO |
| AI answer engine | `/services/ai/answer-engine-optimisation` | AEO complements SEO |
| Analytics (service) | `/services/ai/analytics` | SEO reporting |

### 5. Lifecycle flow section

- Prev: Build | Current: **Grow** | Next: Evolve
- Same 3-card horizontal strip as phase-4a

### 6. Differentiation callout

Add a callout box explaining the difference between this page and AI Search & Visibility:
- "This page focuses on technical SEO implementation. For a comprehensive search strategy combining SEO, analytics, AEO, and AI engine optimisation, see [AI search & visibility](/services/ai/search-visibility)."
- BEM: `.seo-service__differentiation-callout`

## Acceptance criteria

- [ ] Lifecycle badge visible
- [ ] Trust signal after benefits
- [ ] 3 related solutions, 4 related services
- [ ] Lifecycle flow (Build → **Grow** → Evolve)
- [ ] Differentiation callout linking to AI Search & Visibility
- [ ] Sentence case headings

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
