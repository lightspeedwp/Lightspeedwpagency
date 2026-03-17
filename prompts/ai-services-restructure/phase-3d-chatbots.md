# Phase 3d — AI chatbots solution page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Update `/solutions/ai/chatbots` (`AIChatbotsTemplate.tsx`) to integrate with the lifecycle ecosystem. Maps primarily to the **Launch** stage.

## Current state

- **Template:** `AIChatbotsTemplate.tsx` — renders `AISubPageTemplate` with chatbots data
- **Data:** `ai-integrations/chatbots.ts` (hero, stats, features, use cases, pricing, FAQs, CTA)
- **Variant:** `chatbots` (neon-cyan accent)

## Changes required

### 1. Lifecycle stage badge

- Text: "Part of the Launch stage"
- Accent: `--category-amber`
- Icon: `Rocket` (Launch stage icon)
- Links to `/services/launch` journey page

### 2. Trust signal

- 1 testimonial about chatbot lead qualification / customer support improvements

### 3. Cross-link to services

| Related service | Route | Relevance |
|---|---|---|
| AI answer engine | `/services/ai/answer-engine-optimisation` | Conversational AI overlap |
| AI search & visibility | `/services/ai/search-visibility` | Chatbot content for AI search |
| Support & maintenance | `/services/support` | Ongoing chatbot support |

### 4. Cross-link to solutions

| Related solution | Route |
|---|---|
| AI integrations | `/solutions/ai/integrations` |
| AI analytics | `/solutions/ai/analytics` |
| AI content generation | `/solutions/ai/content-generation` |

### 5. Remove pricing, add consultation CTA

- "Chatbot complexity varies — from simple FAQ bots to full AI agents"
- Button: "Design your chatbot" → contact page

## Acceptance criteria

- [ ] Lifecycle badge: "Part of the Launch stage" with amber accent
- [ ] Trust signal in upper half
- [ ] 3 related service links, 3 related solution links
- [ ] Pricing replaced with consultation CTA
- [ ] Sentence case headings

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt |
