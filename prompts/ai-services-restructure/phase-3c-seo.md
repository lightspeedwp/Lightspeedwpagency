# Phase 3c — AI-powered SEO solution page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/solutions/ai/seo` (`AISEOTemplate.tsx`) to integrate with the lifecycle ecosystem. Maps primarily to the **Grow** stage.

## Current state

- **Template:** `AISEOTemplate.tsx` — renders `AISubPageTemplate` with SEO data
- **Data:** `ai-integrations/seo.ts` (hero, stats, features, use cases, pricing, FAQs, CTA)
- **Variant:** `seo` (neon-lime accent)

## Changes required

### 1. Lifecycle stage badge

- Text: "Part of the Grow stage"
- Accent: `--category-green`
- Icon: `TrendUp` (Grow stage icon)
- Links to `/services/grow` journey page

### 2. Trust signal

- 1 testimonial about SEO ranking improvements / traffic gains

### 3. Cross-link to services

| Related service | Route | Relevance |
|---|---|---|
| AI SEO (service) | `/services/ai/seo` | Technical SEO implementation |
| AI search & visibility | `/services/ai/search-visibility` | Comprehensive search strategy |
| AI answer engine | `/services/ai/answer-engine-optimisation` | AEO complements SEO |
| Analytics (service) | `/services/ai/analytics` | Measuring SEO impact |

### 4. Cross-link to solutions

| Related solution | Route |
|---|---|
| AI content generation | `/solutions/ai/content-generation` |
| AI analytics | `/solutions/ai/analytics` |
| AI integrations | `/solutions/ai/integrations` |

### 5. Remove pricing, add consultation CTA

- "SEO strategy is tailored to your competitive landscape"
- Button: "Request SEO audit" → contact page

## Acceptance criteria

- [ ] Lifecycle badge: "Part of the Grow stage" with green accent
- [ ] Trust signal in upper half
- [ ] 4 related service links, 3 related solution links
- [ ] Pricing replaced with consultation CTA
- [ ] Sentence case headings

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
