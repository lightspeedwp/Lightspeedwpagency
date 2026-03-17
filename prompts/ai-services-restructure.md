# AI services restructure — prompt

**Category:** Strategy  
**Version:** 1.0.0  
**Last Updated:** 2026-03-17  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Purpose

Restructure the LSX Design services architecture from the current model (separate solutions + services) to a unified **6-stage AI-enhanced lifecycle**. This prompt captures requirements from the March 17, 2026 team meeting and defines the full scope of changes needed.

## Background

The team discussed restructuring services into 6 AI-enhanced stages that mirror the website design process. The existing "Ignite" phase must be renamed to "Discover" with a route change from `/services/ignite` to `/services/discover`. A new mega AI services page will be created combining interactive WebGL-style graphics with rich content for each stage.

## The 6 AI-enhanced service stages

| Stage | Name | Description | Key services |
|---|---|---|---|
| 0 | Migrations | Pre-stage anomaly — feeds into Discover or Build | WordPress migrations, platform moves |
| 1 | Discover | AI consulting, strategy, content collection | Discovery & strategy, content audit, content collection doc |
| 2 | Create | Content services, prototype, design system, accessible design | Content creation, Figma prototyping, design systems, refined prototypes |
| 3 | Build | WordPress site build, AI-assisted development, testing | WordPress dev, security, accessibility, AI-assisted development |
| 4 | Launch | AI integrations, hosting, support | Hosting, training, AI backend integrations |
| 5 | Grow | AI AEO, AI SEO, LLM.txt, performance support | AI search, SEO, answer engine, analytics, performance |
| 6 | Evolve | AI consulting, support, AI future strategy | AI consulting, support, AI advancements strategy |

## Route changes required

| Current | New | Notes |
|---|---|---|
| `/services/ignite` | `/services/discover` | Rename phase 1 |
| — | `/services/ai-mega` or `/services/ai` (enhanced) | New mega AI page |
| `/services/ignite` → redirect | `/services/discover` | Legacy redirect for ignite |

## Audit scope

### Data files to update

- `/src/app/data/service-journey.ts` — rename Ignite → Discover, update services mapping
- `/src/app/data/journey-stage-pages.ts` — rename Ignite → Discover, update slug + content
- `/src/app/utils/route-map.ts` — update `journey-ignite` → `journey-discover`
- `/src/app/data/header-navigation.ts` — check mega menu references

### Templates to update

- `JourneyStageTemplate.tsx` — ensure Discover slug works
- `core.routes.tsx` — rename route, add legacy redirect for ignite
- `AIServicesLandingTemplate.tsx` — redesign as mega page with WebGL-style headers

### Design requirements from meeting

1. **Trust factors higher** — testimonials and case studies must appear higher on content pages
2. **Mega menu** — icons for all 6 stages (already partially implemented in service-journey.ts)
3. **Distinct colours per stage** — already implemented via `--category-*` CSS variables
4. **Smaller text amounts** — use lists or sliders instead of large cards
5. **Tabbed/hidden sections** — some services as tabs on main pages rather than dedicated pages
6. **Migrations placement** — determine where migrations fits (Discover intake or direct to Build)

## Content & interaction strategy

The mega AI services page should:

- Collect all WebGL-style hero visuals and render them in a single scrollable page
- Use intelligent complementary graphics to enrich each lifecycle stage
- Be highly interactive with scroll-triggered animations
- Present each stage as a distinct visual section with its own neon accent colour
- Use the existing `ScrollReveal` pattern for progressive disclosure
- Follow funky neon aesthetic against dark surfaces for neon-accent elements

## Expected outputs

1. **Report** — `/reports/2026-03/2026-03-17-ai-services-restructure-audit.md`
2. **Task list** — `/tasks/ai-services-restructure-task-list.md`

---

## Version history

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-17 | Initial prompt from March 17 team meeting notes |
