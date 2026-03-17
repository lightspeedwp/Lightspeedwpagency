# AI services restructure — task list

**Last Updated:** March 17, 2026  
**Report:** `/reports/2026-03/2026-03-17-ai-services-restructure-audit.md`  
**Prompt:** `/prompts/ai-services-restructure.md`  
**Sub-prompts:** `/prompts/ai-services-restructure/phase-*.md` (12 files)

---

## Phase 1 — Data layer

- [x] **Create `ai-services-lifecycle-data.tsx`** — 6 lifecycle stages with slug, step, name, tagline, icon, accent, description (2–3 sentences), services[], solutionLinks[], serviceLinks[], testimonial, cta. Phosphor icons imported directly
- [x] **Create `ai-solutions-hub-data.tsx`** — Enhanced solutions hub data: hero, sticky nav items, 5 solution sections (title, description, benefits[], accent, icon, href, relatedServices[]), trust signals (3 testimonials), capabilities, CTA
- [x] **Extract AIServicesLandingTemplate inline data** — Move serviceItems, statsItems, approachSteps from template to the new lifecycle data file
- [x] **Rename Ignite → Discover in `service-journey.ts`** — `name: 'Ignite'` → `name: 'Discover'`, tagline, service mappings
- [x] **Rename Ignite → Discover in `journey-stage-pages.ts`** — `slug: 'ignite'` → `slug: 'discover'`, all content referencing Ignite, clientRole.title, cta.title
- [x] **Update `route-map.ts`** — `'journey-ignite': '/services/ignite'` → `'journey-discover': '/services/discover'`
- [x] **Update `core.routes.tsx`** — Rename route, component, add legacy redirect for `/services/ignite`
- [x] **Check header navigation** — Search `header-navigation.ts` and `SiteHeader.tsx` for Ignite references

## Phase 2a — Solutions landing mega page

- [ ] **Redesign `AISolutionsLandingTemplate.tsx`** — Long-form mega page: hero → sticky nav → trust → stats → 5 solution sections → capabilities → CTA. Import from `ai-solutions-hub-data.tsx`
- [ ] **Create sticky anchor nav component** — `StickyAnchorNav.tsx` with IntersectionObserver active state. Shared by both landing pages
- [ ] **Create neural network CSS animation** — Hero visual: CSS grid of nodes with animated connections. Neon-cyan particles, pink pulses. Reduced-motion fallback
- [ ] **Create `ai-solutions-mega.css`** — BEM styles for mega page. Dark-bg solution sections, sticky nav, trust cards. Max 400 lines (split if needed)
- [ ] **Split template if over 300 lines** — `AISolutionsLandingTemplate.tsx` (hero + nav + trust + stats) + `AISolutionsLandingSections.tsx` (5 solution sections + capabilities + CTA)

## Phase 2b — Services lifecycle mega page

- [ ] **Redesign `AIServicesLandingTemplate.tsx`** — Lifecycle mega page: hero → timeline → trust → stats → 6 stage sections → migrations callout → CTA. Import from `ai-services-lifecycle-data.tsx`
- [ ] **Create sticky timeline component** — Horizontal 6-stage progress bar with IntersectionObserver. Adapt from `JourneyProgressBar`
- [ ] **Create lifecycle orbit CSS animation** — Hero visual: 6 icons orbiting central brain. Stage accent pulses. Reduced-motion fallback
- [ ] **Create `ai-services-lifecycle.css`** — BEM styles for lifecycle page. All stage sections on dark backgrounds (`var(--color-black)`) for neon compliance. Max 400 lines (split if needed)
- [ ] **Split template if over 300 lines** — `AIServicesLandingTemplate.tsx` + `AIServicesLifecycleSections.tsx`
- [ ] **Create migrations callout section** — Glassmorphism card between stages and CTA, links to `/services/migrations`

## Phase 3 — Solutions sub-pages (5 pages)

### Shared AISubPageTemplate updates

- [ ] **Add optional props to `AISubPageTemplate.tsx`** — `lifecycleStage?`, `trustSignal?`, `relatedServices?`, `relatedSolutions?`, `showPricing?` (default false)
- [ ] **Create `LifecycleStageBadge.tsx`** — Shared component: horizontal pill with stage icon, name, accent colour. Location: `/src/app/components/parts/`

### Per-page updates

- [ ] **`/solutions/ai/integrations`** — Add lifecycle badge (Discover → Launch → Evolve), trust signal, related services (3), related solutions (3), remove pricing, update breadcrumbs to sentence case
- [ ] **`/solutions/ai/content-generation`** — Add lifecycle badge (Create stage, pink), trust signal, related services (3), related solutions (3), remove pricing
- [ ] **`/solutions/ai/seo`** — Add lifecycle badge (Grow stage, green), trust signal, related services (4), related solutions (3), remove pricing
- [ ] **`/solutions/ai/chatbots`** — Add lifecycle badge (Launch stage, amber), trust signal, related services (3), related solutions (3), remove pricing
- [ ] **`/solutions/ai/analytics`** — Add dual lifecycle badge (Grow + Evolve), trust signal, related services (4), related solutions (3), remove pricing

### Data file updates

- [ ] **Update `ai-integrations/landing.ts`** — Add lifecycleStages, trustSignal, relatedServices, relatedSolutions
- [ ] **Update `ai-integrations/content-generation.ts`** — Add lifecycle + cross-link data
- [ ] **Update `ai-integrations/seo.ts`** — Add lifecycle + cross-link data
- [ ] **Update `ai-integrations/chatbots.ts`** — Add lifecycle + cross-link data
- [ ] **Update `ai-integrations/analytics.ts`** — Add lifecycle + cross-link data

## Phase 4 — Services sub-pages (5 pages)

### Shared components

- [ ] **Create `LifecycleFlowStrip.tsx`** — 3-card horizontal strip: prev stage → current stage → next stage. Location: `/src/app/components/parts/`
- [ ] **Create `RelatedPagesGrid.tsx`** — Responsive grid of linked cards for "Related services" / "Related solutions". Location: `/src/app/components/patterns/`

### Per-page updates

- [ ] **`/services/ai/search-visibility`** — Add journey context strip (mini-timeline), trust signal, related solutions (3), lifecycle flow (Build → **Grow** → Evolve), update RelatedServicesGrid (4 links)
- [ ] **`/services/ai/seo`** — Add lifecycle badge (Grow, green), trust signal, related solutions (3), related services (4), lifecycle flow, differentiation callout vs AI Search & Visibility
- [ ] **`/services/ai/analytics`** — Add lifecycle badge (Grow, green), trust signal, related solutions (3), related services (4), lifecycle flow, differentiation callout
- [ ] **`/services/ai/engine-optimisation`** — Add dual lifecycle badge (Grow + Evolve), trust signal, related solutions (3), related services (3), lifecycle flow spanning two stages, new LLM.txt + AI citation content sections
- [ ] **`/services/ai/answer-engine-optimisation`** — Add lifecycle badge (Grow, green), trust signal, related solutions (3), related services (4), lifecycle flow, new voice search + zero-click content sections

### Data file updates

- [ ] **Update `ai-search-service-template-data.tsx`** — Add lifecycle, trust, relatedSolutions, lifecycleFlow
- [ ] **Update `seo-service-template-data.tsx`** — Add lifecycle, trust, cross-link data
- [ ] **Update `analytics-service-template-data.tsx`** — Add lifecycle, trust, cross-link data
- [ ] **Update `ai-engine-service-template-data.tsx`** — Add lifecycle, trust, cross-link data, llmTxtContent, aiCitationStrategy
- [ ] **Update `answer-engine-service-template-data.tsx`** — Add lifecycle, trust, cross-link data, voiceSearchContent, zeroClickContent

## Phase 5 — Cross-linking, navigation, trust, and polish

### Cross-link verification

- [ ] **Verify solutions → services links** — All 5 solutions sub-pages link to relevant services (15 links total)
- [ ] **Verify services → solutions links** — All 5 services sub-pages link to relevant solutions (15 links total)
- [ ] **Verify landing → sub-page links** — Both hubs link to all 10 sub-pages

### Navigation updates

- [ ] **Update mega menu** — Rename Ignite → Discover, ensure 6 lifecycle stages with icons
- [ ] **Verify route-map.ts** — All 12 AI pages have entries, slugToPath resolves correctly
- [ ] **Update sitemap-data.ts** — All 12 AI pages listed with correct hierarchy

### Trust signal repositioning

- [ ] **Move testimonials in `JourneyStageTemplate.tsx`** — Position 6 → position 3 (after hero + description, before outcomes)

### Final audit

- [ ] **Sentence case sweep** — All 12 AI pages
- [ ] **Neon compliance sweep** — All neon accents on dark backgrounds only
- [ ] **Token compliance sweep** — Zero hardcoded values in CSS/inline
- [ ] **Font compliance sweep** — Only var(--font-primary), var(--font-secondary), var(--font-mono)
- [ ] **Icon compliance sweep** — Only @phosphor-icons/react
- [ ] **File size sweep** — All .tsx under 300 lines, all .css under 400 lines
- [ ] **Accessibility sweep** — aria-labels, keyboard nav, reduced motion
- [ ] **Data extraction verification** — All content in data files, templates layout-only

---

## Summary

| Phase | Tasks | New components | New data files | New CSS files |
|---|---|---|---|---|
| 1 | 8 | 0 | 2 | 0 |
| 2a | 5 | 1 (StickyAnchorNav) | 0 | 1 |
| 2b | 6 | 0 (reuse sticky nav) | 0 | 1 |
| 3 | 12 | 1 (LifecycleStageBadge) | 0 | 0 |
| 4 | 12 | 2 (LifecycleFlowStrip, RelatedPagesGrid) | 0 | 0 |
| 5 | 14 | 0 | 0 | 0 |
| **Total** | **57** | **4** | **2** | **2** |
