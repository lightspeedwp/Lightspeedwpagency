# Phase 5 — Cross-linking, navigation, trust, and polish

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Final integration pass ensuring all 12 AI pages form a cohesive, interconnected ecosystem. Verify cross-links, update navigation, reposition trust signals on journey pages, and audit for compliance.

## 5.1 Cross-link verification matrix

Every page must link to related pages. Verify the following matrix is complete:

### Solutions sub-pages → Services sub-pages

| Solutions page | Must link to services |
|---|---|
| `/solutions/ai/integrations` | search-visibility, engine-optimisation, discovery |
| `/solutions/ai/content-generation` | engine-optimisation, seo, content |
| `/solutions/ai/seo` | seo, search-visibility, answer-engine, analytics |
| `/solutions/ai/chatbots` | answer-engine, search-visibility, support |
| `/solutions/ai/analytics` | analytics, seo, search-visibility, performance |

### Services sub-pages → Solutions sub-pages

| Services page | Must link to solutions |
|---|---|
| `/services/ai/search-visibility` | seo, analytics, integrations |
| `/services/ai/seo` | seo, content-generation, analytics |
| `/services/ai/analytics` | analytics, seo, integrations |
| `/services/ai/engine-optimisation` | integrations, content-generation, seo |
| `/services/ai/answer-engine-optimisation` | seo, content-generation, chatbots |

### Landing pages → All sub-pages

| Landing page | Must link to all |
|---|---|
| `/solutions/ai/` | All 5 solutions sub-pages + all 5 services sub-pages |
| `/services/ai/` | All 5 services sub-pages + all 5 solutions sub-pages |

### Sub-pages → Landing pages

Every sub-page breadcrumb must link back to its parent landing page:
- Solutions sub-pages: breadcrumb → `/solutions/ai`
- Services sub-pages: breadcrumb → `/services/ai`

## 5.2 Navigation updates

### Mega menu

Update `header-navigation.ts` and `SiteHeader.tsx`:
- Rename "Ignite" → "Discover" in mega menu
- Ensure 6 lifecycle stages appear with icons and accent colours
- Add "AI Solutions" and "AI Services" as featured links in mega menu
- Verify all 10 sub-page links are accessible from navigation

### Route map

Update `route-map.ts`:
- Verify all 12 AI pages have entries
- Verify `slugToPath()` resolves correctly for all cross-links

### Sitemap

Update `sitemap-data.ts`:
- Add or verify all 12 AI page entries
- Ensure correct parent-child hierarchy

## 5.3 Trust signal repositioning

### Journey stage pages

Update `JourneyStageTemplate.tsx`:
- Move testimonial section from position 6 to position 3 (after hero + description)
- Current order: Hero → Description → Outcomes → Services → Deliverables → **Testimonial** → Nav → CTA
- New order: Hero → Description → **Testimonial** → Outcomes → Services → Deliverables → Nav → CTA

### AI services landing

Verify trust section is in position 3–4 (Phase 2b should have placed it there).

### AI solutions landing

Verify trust section is in position 3–4 (Phase 2a should have placed it there).

## 5.4 Shared components

### Lifecycle stage badge component

If not already extracted, create a shared component:
- Location: `/src/app/components/parts/LifecycleStageBadge.tsx`
- Props: `stages: { name: string; accent: string; icon: Icon; href: string }[]`
- Renders horizontal pill(s) with stage icon, name, and accent colour
- Used by all 10 sub-pages

### Lifecycle flow strip component

If not already extracted, create:
- Location: `/src/app/components/parts/LifecycleFlowStrip.tsx`
- Props: `prev?: Stage; current: Stage; next?: Stage`
- Renders 3-card horizontal strip showing adjacent lifecycle stages
- Used by all 5 services sub-pages

### Related pages grid component

If not already generalised:
- Location: `/src/app/components/patterns/RelatedPagesGrid.tsx`
- Props: `title: string; items: { title: string; href: string; description?: string }[]`
- Renders a responsive grid of linked cards
- Used by all 10 sub-pages for both "Related services" and "Related solutions"

## 5.5 Audit checklist

Run these checks across all 12 AI pages:

- [ ] **Sentence case** — all headings use sentence case (never title case)
- [ ] **Neon compliance** — neon accents only on dark backgrounds
- [ ] **Token compliance** — zero hardcoded px/rem/hex values in CSS or inline styles
- [ ] **Font compliance** — only `var(--font-primary)`, `var(--font-secondary)`, `var(--font-mono)`
- [ ] **Icon compliance** — only `@phosphor-icons/react`, zero `lucide-react`
- [ ] **File size** — all `.tsx` under 300 lines, all `.css` under 400 lines
- [ ] **Data extraction** — all content in data files, templates handle layout only
- [ ] **Accessibility** — `aria-label` on all sections, keyboard-navigable anchors
- [ ] **Reduced motion** — all animations respect `prefers-reduced-motion`
- [ ] **Router** — `react-router` only, all links use `Link` component or `slugToPath()`

## 5.6 Final page inventory

After all phases complete, the AI ecosystem should contain:

| # | Route | Template | Type |
|---|---|---|---|
| 1 | `/solutions/ai/` | AISolutionsLandingTemplate | Solutions hub |
| 2 | `/solutions/ai/integrations` | AIIntegrationsTemplate | Solutions sub-page |
| 3 | `/solutions/ai/content-generation` | AIContentGenerationTemplate | Solutions sub-page |
| 4 | `/solutions/ai/seo` | AISEOTemplate | Solutions sub-page |
| 5 | `/solutions/ai/chatbots` | AIChatbotsTemplate | Solutions sub-page |
| 6 | `/solutions/ai/analytics` | AIAnalyticsTemplate | Solutions sub-page |
| 7 | `/services/ai/` | AIServicesLandingTemplate | Services hub |
| 8 | `/services/ai/search-visibility` | AISearchServiceTemplate | Services sub-page |
| 9 | `/services/ai/seo` | SEOServiceTemplate | Services sub-page |
| 10 | `/services/ai/analytics` | AnalyticsServiceTemplate | Services sub-page |
| 11 | `/services/ai/engine-optimisation` | AIEngineServiceTemplate | Services sub-page |
| 12 | `/services/ai/answer-engine-optimisation` | AnswerEngineServiceTemplate | Services sub-page |

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt for interconnection and polish |
