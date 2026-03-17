# Phase 4e — Answer engine optimisation service page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/services/ai/answer-engine-optimisation` (`AnswerEngineServiceTemplate.tsx`) to integrate with the lifecycle ecosystem. Maps primarily to the **Grow** stage. AEO focuses on conversational search, featured snippets, and voice search optimisation.

## Current state

- **Template:** `AnswerEngineServiceTemplate.tsx` — standalone sub-service layout
- **Data:** `answer-engine-service-template-data.tsx` (benefits, process, results)
- **CSS:** Uses shared service template BEM classes
- **Section order:** Hero → Benefits → Process → Results → CTA

## Changes required

### 1. Lifecycle stage badge

- Text: "Part of the Grow stage"
- Accent: `--category-green`, icon: `TrendUp`
- Links to `/services/grow`

### 2. Trust signal

Insert after benefits:
- 1 testimonial about featured snippet wins / voice search improvements

### 3. Cross-link to solutions

| Related solution | Route | Relevance |
|---|---|---|
| AI-powered SEO | `/solutions/ai/seo` | SEO + AEO combined strategy |
| AI content generation | `/solutions/ai/content-generation` | Creating answer-optimised content |
| AI chatbots | `/solutions/ai/chatbots` | Conversational AI overlap |

### 4. Cross-link to services

| Related service | Route | Relevance |
|---|---|---|
| AI search & visibility | `/services/ai/search-visibility` | Parent consolidated service |
| AI engine optimisation | `/services/ai/engine-optimisation` | AI engine + AEO complement |
| AI SEO | `/services/ai/seo` | Traditional SEO foundations |
| Analytics | `/services/ai/analytics` | Measuring AEO impact |

### 5. Lifecycle flow section

- Prev: Build | Current: **Grow** | Next: Evolve

### 6. Content enrichment

Per meeting notes, expand AEO content:
- **Voice search optimisation** — how AEO applies to Alexa, Siri, Google Assistant
- **Zero-click search** — optimising for featured snippets and instant answers
- **Conversational query mapping** — aligning content with natural language patterns

Add as a new section or integrate into existing benefits/process.

## Data file changes

Update `answer-engine-service-template-data.tsx`:
- Add `voiceSearchContent` section data
- Add `zeroClickContent` section data
- Add lifecycle, trust, cross-link data

## Acceptance criteria

- [ ] Lifecycle badge visible
- [ ] Trust signal after benefits
- [ ] Voice search and zero-click content sections
- [ ] 3 related solutions, 4 related services
- [ ] Lifecycle flow (Build → **Grow** → Evolve)
- [ ] Sentence case headings, zero Tailwind, zero hardcoded values

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
