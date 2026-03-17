# Phase 2a — AI solutions landing page redesign

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Redesign `/solutions/ai/` (`AISolutionsLandingTemplate.tsx`) from a simple hub into a long-form mega page with sticky anchor navigation, per-solution sections, early trust signals, and CSS-animated hero visuals.

## Current state

- **Template:** `AISolutionsLandingTemplate.tsx` (~240 lines)
- **Data:** `ai-solutions-landing-data.tsx` (~123 lines)
- **CSS:** `page-solution-ai-landing.css`
- **Section order:** Breadcrumbs → Hero → Stats → Solution Cards → Capabilities → CTA
- **5 solution cards** link to sub-pages (integrations, content-generation, seo, chatbots, analytics)

## Target state

### New section order

```
 1. Breadcrumbs
 2. Hero — full-viewport with neural network CSS animation
 3. Sticky anchor nav — 5 solution anchors + CTA anchor
 4. Trust signals — 2–3 testimonials/case study cards (moved UP from non-existent)
 5. Stats bar — aggregated AI impact metrics (existing, enhanced)
 6. Solution: AI integrations — full section with benefits, icon, link
 7. Solution: AI content generation — full section
 8. Solution: AI-powered SEO — full section
 9. Solution: AI chatbots — full section
10. Solution: AI analytics — full section
11. Capabilities — why choose LSX for AI (existing, enhanced)
12. CTA — FunkyCTA (existing)
```

### Sticky anchor navigation

- Fixed position below site header on scroll
- Contains 5 solution labels + "Get started" CTA button
- Click scrolls to corresponding section with smooth scroll
- Active state highlights current section via `IntersectionObserver`
- BEM: `.ai-solutions__sticky-nav`, `__sticky-nav-item`, `__sticky-nav-item--active`
- Hides on mobile (< 768px) — replaced by scroll-to-top or simplified version

### Per-solution sections

Each of the 5 solutions gets a dedicated full-width section containing:

1. **Section header** — icon (Phosphor), title, 2-sentence description
2. **Key benefits** — 3–4 bullet points (compact, not cards)
3. **Visual** — CSS-animated decorative element (stage-specific concept from orchestrator)
4. **Links** — "Explore solution →" link to sub-page + "Related services" links to `/services/ai/*`
5. **Accent colour** — unique per solution, applied via `--solution-accent` CSS variable

| Solution | Accent | Related services link |
|---|---|---|
| AI integrations | `--neon-cyan` | `/services/ai/search-visibility` |
| Content generation | `--neon-pink` | `/services/ai/engine-optimisation` |
| AI SEO | `--neon-lime` | `/services/ai/seo`, `/services/ai/search-visibility` |
| AI chatbots | `--neon-cyan` | `/services/ai/answer-engine-optimisation` |
| AI analytics | `--neon-yellow` | `/services/ai/analytics` |

### Trust signals section

- Position: section 4 (after sticky nav, before stats)
- Content: 3 testimonial cards from real or mock client quotes
- Each card: quote, author name, role, company
- Force dark background for neon accent borders
- BEM: `.ai-solutions__trust`, `__trust-card`, `__trust-quote`, `__trust-author`

### Hero CSS animation concept

"Brain-shaped particle network" — implemented as:
- CSS grid of small circular nodes (8×8 grid)
- `animation` on individual nodes with staggered `animation-delay`
- Connection lines between nodes using CSS `::before`/`::after` with `width` animations
- Mouse-reactive highlights via CSS `:hover` on parent (no JS hover handlers)
- Neon-cyan particles, pink pulses on connection lines
- `@media (prefers-reduced-motion)` — static gradient fallback

## Data file changes

### Update `ai-solutions-hub-data.tsx` (new file from Phase 1)

Add per-solution section data:
```typescript
export interface AISolutionSection {
  id: string;
  icon: Icon;
  title: string;
  description: string;
  benefits: string[];
  accent: string;
  href: string;
  relatedServices: { title: string; href: string }[];
}
```

Add trust signals data:
```typescript
export interface AITrustSignal {
  quote: string;
  author: string;
  role: string;
  company: string;
}
```

Add sticky nav items:
```typescript
export interface AIStickyNavItem {
  id: string;
  label: string;
  anchor: string;
}
```

## CSS requirements

- **New file:** `ai-solutions-mega.css` (or extend existing `page-solution-ai-landing.css`)
- Sticky nav: `position: sticky; top: var(--header-height, 64px); z-index: var(--z-sticky)`
- All solution sections: dark background (`var(--color-black)`), neon accent text/borders
- Responsive: single column on mobile, grid on desktop
- File size: max 400 lines — split into sub-files if needed

## Template structure

Split if over 300 lines:
- `AISolutionsLandingTemplate.tsx` — hero + sticky nav + trust + stats (~150 lines)
- `AISolutionsLandingSections.tsx` — 5 solution sections + capabilities + CTA (~150 lines)

## Acceptance criteria

- [ ] All 5 solutions have dedicated sections with benefits, links, and accent colours
- [ ] Sticky anchor nav works with smooth scroll and active state
- [ ] Trust signals appear in position 3–4 (above fold on most screens)
- [ ] Every solution section cross-links to related `/services/ai/*` pages
- [ ] Hero uses CSS animation with reduced-motion fallback
- [ ] Zero Tailwind classes, zero hardcoded values
- [ ] All headings in sentence case
- [ ] Template under 300 lines (split if needed)

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt for solutions landing redesign |
