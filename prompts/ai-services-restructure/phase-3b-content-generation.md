# Phase 3b — AI content generation solution page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/solutions/ai/content-generation` (`AIContentGenerationTemplate.tsx`) to integrate with the lifecycle ecosystem. Maps primarily to the **Create** stage.

## Current state

- **Template:** `AIContentGenerationTemplate.tsx` — renders `AISubPageTemplate` with content-generation data
- **Data:** `ai-integrations/content-generation.ts` (hero, stats, features, use cases, pricing, FAQs, CTA)
- **Variant:** `content` (neon-pink accent)

## Changes required

### 1. Lifecycle stage badge

- Text: "Part of the Create stage"
- Accent: `--category-pink`
- Icon: `PenNib` (Create stage icon)
- Links to `/services/create` journey page

### 2. Trust signal

Insert between Stats and Features:
- 1 testimonial about AI-generated content quality/speed
- Compact card format

### 3. Cross-link to services

Related services section:

| Related service | Route | Relevance |
|---|---|---|
| AI engine optimisation | `/services/ai/engine-optimisation` | Content optimised for AI engines |
| AI SEO | `/services/ai/seo` | Content scoring and ranking |
| Content operations | `/services/content` | Content strategy integration |

### 4. Cross-link to solutions

| Related solution | Route |
|---|---|
| AI-powered SEO | `/solutions/ai/seo` |
| AI analytics | `/solutions/ai/analytics` |
| AI integrations | `/solutions/ai/integrations` |

### 5. Remove pricing table

Replace with consultation CTA:
- "Content AI is customised to your brand voice — let's talk"
- Button: "Book a content audit" → contact page

### 6. Update AISubPageTemplate connection

The `AISubPageTemplate` needs a new optional prop:
- `lifecycleStage?: { name: string; accent: string; icon: Icon; href: string }`
- `trustSignal?: { quote: string; author: string; role: string }`
- `relatedServices?: { title: string; href: string; description: string }[]`
- `relatedSolutions?: { title: string; href: string }[]`
- `showPricing?: boolean` (default `false` — replaces pricing with consultation CTA)

These props should be added once and shared across all 4 sub-pages using `AISubPageTemplate`.

## Acceptance criteria

- [ ] Lifecycle badge shows "Part of the Create stage" with pink accent
- [ ] Trust signal in upper half of page
- [ ] Related services links to 3 service pages
- [ ] Related solutions links to 3 solution pages
- [ ] Pricing replaced with consultation CTA
- [ ] Sentence case headings throughout

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
