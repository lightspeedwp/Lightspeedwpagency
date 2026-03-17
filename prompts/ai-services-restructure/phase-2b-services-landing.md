# Phase 2b — AI services lifecycle mega page

**Category:** Build  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Parent:** `/prompts/ai-services-restructure.md`

---

## Scope

Redesign `/services/ai/` (`AIServicesLandingTemplate.tsx`) around the 6-stage AI-enhanced lifecycle (Discover → Create → Build → Launch → Grow → Evolve). Each stage becomes a full-viewport section with a unique neon accent colour, CSS-animated visual, compact service cards, and a stage-specific CTA.

## Current state

- **Template:** `AIServicesLandingTemplate.tsx` (~247 lines)
- **Data:** Inline arrays (serviceItems, statsItems, approachSteps) — NOT extracted to data file
- **CSS:** `ai-services-landing.css`
- **Section order:** Breadcrumbs → Hero → Services Grid → Stats → Approach → CTA
- **Content:** Generic AI services list, not lifecycle-structured

## Target state

### New section order

```
 1. Breadcrumbs
 2. Hero — full-viewport, animated lifecycle ring/orbit visual
 3. Sticky timeline — horizontal 6-stage progress bar (interactive, clickable)
 4. Trust signals — 2–3 testimonial cards (high position per meeting notes)
 5. Stats bar — aggregated metrics (existing data, enhanced layout)
 6. Stage: Discover — neon violet, AI consulting + strategy
 7. Stage: Create — neon pink, content + design + prototyping
 8. Stage: Build — neon cyan, WordPress dev + AI-assisted + security
 9. Stage: Launch — neon amber, AI integrations + hosting + training
10. Stage: Grow — neon green, SEO + AEO + analytics + performance
11. Stage: Evolve — neon indigo, AI strategy + consulting + future-proofing
12. Migrations callout — cross-stage card (feeds into Discover or Build)
13. CTA — FunkyCTA
```

### Sticky timeline

- Horizontal bar showing all 6 stages with icons and names
- Fixed below header on scroll
- Click scrolls to corresponding stage section
- Active state: accent colour highlight on current stage (via `IntersectionObserver`)
- Connects visually to `JourneyProgressBar` component from `JourneyStageTemplate`
- BEM: `.ai-lifecycle__timeline`, `__timeline-stage`, `__timeline-stage--active`
- Mobile: horizontal scroll or simplified dot indicators

### Per-stage sections

Each of the 6 stages gets a dark-background section containing:

1. **Stage header** — step number, icon, name, tagline
2. **Description** — 2–3 sentences max (reduced text per meeting notes)
3. **Service cards** — compact list format: icon + title + one-liner per row (3–5 items)
4. **Cross-links** — links to both `/services/ai/*` and `/solutions/ai/*` sub-pages
5. **Stage CTA** — specific call-to-action (e.g., "Book discovery session")
6. **CSS visual** — stage-specific decorative animation (see orchestrator table)

| Stage | Accent | Service links | Solution links |
|---|---|---|---|
| Discover | `--category-violet` | `/services/ai/search-visibility` | `/solutions/ai/integrations` |
| Create | `--category-pink` | — | `/solutions/ai/content-generation` |
| Build | `--category-cyan` | `/services/ai/engine-optimisation` | `/solutions/ai/integrations` |
| Launch | `--category-amber` | — | `/solutions/ai/chatbots`, `/solutions/ai/integrations` |
| Grow | `--category-green` | `/services/ai/seo`, `/services/ai/analytics`, `/services/ai/answer-engine-optimisation` | `/solutions/ai/seo`, `/solutions/ai/analytics` |
| Evolve | `--category-indigo` | `/services/ai/engine-optimisation`, `/services/ai/search-visibility` | `/solutions/ai/analytics` |

### Migrations callout

- Not a full stage — a glassmorphism card between the stage sections and CTA
- Explains migrations as an entry point that feeds into Discover or Build
- Links to `/services/migrations`
- BEM: `.ai-lifecycle__migrations-callout`

### Hero CSS animation concept

"Lifecycle orbit" — 6 icons orbiting a central brain icon:
- Central brain icon (Phosphor `Brain`, large)
- 6 stage icons arranged in a circle using CSS `transform: rotate() translateX()`
- Slow rotation via `@keyframes orbit { to { transform: rotate(360deg) } }`
- Each icon pulses its stage accent colour
- Connection lines from each icon to center using CSS `::after`
- Reduced motion: static arrangement, no rotation

## Data file

### Create `ai-services-lifecycle-data.tsx` (Phase 1.1)

```typescript
export interface LifecycleStage {
  slug: string;
  step: string;
  name: string;
  tagline: string;
  icon: Icon;
  accent: string;
  description: string;
  services: { title: string; description: string; icon: Icon; href: string; badge?: string }[];
  solutionLinks: { title: string; href: string }[];
  serviceLinks: { title: string; href: string }[];
  testimonial: { quote: string; author: string; role: string };
  cta: { text: string; page: string };
}
```

## CSS requirements

- **New file:** `ai-services-lifecycle.css`
- All 6 stage sections: `background: var(--color-black)` for neon compliance
- Stage accent via scoped `--stage-accent` CSS variable per section
- Sticky timeline: mirrors JourneyProgressBar styling
- File size: max 400 lines — split hero/timeline vs stage sections if needed

## Template structure

Split for 300-line compliance:
- `AIServicesLandingTemplate.tsx` — hero + timeline + trust + stats (~150 lines)
- `AIServicesLifecycleSections.tsx` — 6 stage sections + migrations + CTA (~150 lines)

## Acceptance criteria

- [ ] All 6 lifecycle stages rendered as distinct dark-bg sections
- [ ] Each stage has compact service cards, cross-links, and stage CTA
- [ ] Sticky timeline works with smooth scroll and active state
- [ ] Trust signals in position 3–4
- [ ] Migrations callout between stages and CTA
- [ ] Hero uses CSS orbit animation with reduced-motion fallback
- [ ] Content driven from `ai-services-lifecycle-data.tsx`
- [ ] Zero Tailwind, zero hardcoded values, sentence case headings
- [ ] Templates under 300 lines each

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial sub-prompt for services lifecycle mega page |
