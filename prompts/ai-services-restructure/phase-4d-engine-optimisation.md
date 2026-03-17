# Phase 4d — AI engine optimisation service page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/services/ai/engine-optimisation` (`AIEngineServiceTemplate.tsx`) to integrate with the lifecycle ecosystem. Maps to the **Grow** and **Evolve** stages — this is a forward-looking service focused on AI discovery platforms (ChatGPT, Perplexity, Claude).

## Current state

- **Template:** `AIEngineServiceTemplate.tsx` — standalone sub-service layout
- **Data:** `ai-engine-service-template-data.tsx` (benefits, process, results)
- **CSS:** Uses shared service template BEM classes
- **Section order:** Hero → Benefits → Process → Results → CTA

## Changes required

### 1. Lifecycle stage badge

- Text: "Part of the Grow & Evolve stages"
- Accent: dual — `--category-green` + `--category-indigo`
- Icons: `TrendUp` + `Brain`
- Links to both `/services/grow` and `/services/evolve`

### 2. Trust signal

Insert after benefits:
- 1 testimonial about AI engine citation improvements / AI discoverability

### 3. Cross-link to solutions

| Related solution | Route | Relevance |
|---|---|---|
| AI integrations | `/solutions/ai/integrations` | AI tooling for engine optimisation |
| AI content generation | `/solutions/ai/content-generation` | AI-optimised content creation |
| AI-powered SEO | `/solutions/ai/seo` | Traditional + AI search combined |

### 4. Cross-link to services

| Related service | Route | Relevance |
|---|---|---|
| AI search & visibility | `/services/ai/search-visibility` | Parent consolidated service |
| AI answer engine | `/services/ai/answer-engine-optimisation` | AEO complements engine optimisation |
| AI SEO | `/services/ai/seo` | Traditional SEO foundations |

### 5. Lifecycle flow section

- Prev: Launch | Current: **Grow → Evolve** | Next: (ongoing)
- Modified 3-card layout to show this service spanning two stages

### 6. LLM.txt and AI advancements content

Per meeting notes, add new content to this page:
- **LLM.txt protocol** — explain what it is, why it matters for AI discoverability
- **AI citation strategy** — how to get cited by ChatGPT, Perplexity, Claude, Google SGE
- **Future-proofing** — positioning content for next-generation AI platforms

Add as a new section between Process and Results, or integrate into benefits.

## Data file changes

Update `ai-engine-service-template-data.tsx`:
- Add `llmTxtContent` section data
- Add `aiCitationStrategy` section data
- Add lifecycle, trust, cross-link data

## Acceptance criteria

- [ ] Dual lifecycle badge (Grow + Evolve)
- [ ] Trust signal after benefits
- [ ] LLM.txt and AI citation content sections added
- [ ] 3 related solutions, 3 related services
- [ ] Lifecycle flow spanning two stages
- [ ] Sentence case headings, zero Tailwind

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
