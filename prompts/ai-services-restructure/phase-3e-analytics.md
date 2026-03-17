# Phase 3e — AI analytics solution page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/solutions/ai/analytics` (`AIAnalyticsTemplate.tsx`) to integrate with the lifecycle ecosystem. Maps primarily to the **Grow** and **Evolve** stages.

## Current state

- **Template:** `AIAnalyticsTemplate.tsx` — renders `AISubPageTemplate` with analytics data
- **Data:** `ai-integrations/analytics.ts` (hero, stats, features, use cases, pricing, FAQs, CTA)
- **Variant:** `analytics` (neon-yellow accent)

## Changes required

### 1. Lifecycle stage badge

- Text: "Part of the Grow & Evolve stages"
- Accent: dual — `--category-green` + `--category-indigo`
- Icons: `TrendUp` + `Brain`
- Links to both `/services/grow` and `/services/evolve`

### 2. Trust signal

- 1 testimonial about data-driven decisions / traffic predictions accuracy

### 3. Cross-link to services

| Related service | Route | Relevance |
|---|---|---|
| Analytics (service) | `/services/ai/analytics` | Implementation of analytics tools |
| AI SEO | `/services/ai/seo` | SEO analytics and reporting |
| AI search & visibility | `/services/ai/search-visibility` | Search performance tracking |
| Performance | `/services/performance` | Speed + conversion metrics |

### 4. Cross-link to solutions

| Related solution | Route |
|---|---|
| AI-powered SEO | `/solutions/ai/seo` |
| AI integrations | `/solutions/ai/integrations` |
| AI content generation | `/solutions/ai/content-generation` |

### 5. Remove pricing, add consultation CTA

- "Analytics setup depends on your data maturity — we start with an audit"
- Button: "Request data audit" → contact page

## Acceptance criteria

- [ ] Dual lifecycle badge: "Part of the Grow & Evolve stages"
- [ ] Trust signal in upper half
- [ ] 4 related service links, 3 related solution links
- [ ] Pricing replaced with consultation CTA
- [ ] Sentence case headings

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
