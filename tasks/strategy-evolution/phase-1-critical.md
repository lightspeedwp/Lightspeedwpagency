# Phase 1: Critical — Launch Blockers

**Status:** PENDING
**Dependencies:** None — start immediately
**Estimated Effort:** 80-110 hours (2-3 weeks)
**Populated From:** Report 09 (synthesis of all 8 audits)

---

## Critical Tasks (Must Complete)

- [x] ~~**1.1 Create Systems hub landing page**~~ — ✅ COMPLETE (Feb 27, 2026): New template `SystemsHubTemplate.tsx` + route `/systems/` + data file `systems-hub.ts`. This is the strategic centrepiece. (Audit 01, 05)
- [x] ~~**1.2 Create 5 Systems child pages**~~ — ✅ COMPLETE (Feb 27, 2026): Templates for Design Tokens, Pattern Governance, Editorial Workflows, AI Search Readiness, Performance Reliability. Each gets its own template + CSS + data. (Audit 01, 05)
- [x] ~~**1.3 Restructure primary navigation**~~ — ✅ COMPLETE (Feb 27, 2026): Changed SiteHeader nav from Services/Solutions/Portfolio/About/Blog/Contact to Work/Solutions/Systems/Insights/About/Contact. Updated mega menu content with Systems showcase. Zero broken routes. (Audit 01)
- [x] ~~**1.4 Restructure footer columns**~~ — ✅ COMPLETE (Feb 27, 2026): Changed from Services/Solutions/Resources/Company to Company/Systems/Proof/Contact. Updated SiteFooter.tsx data. 21 verified links, zero broken routes. (Audit 01)
- [x] ~~**1.5 Standardise "Request a Systems Audit" CTA**~~ — ✅ COMPLETE (Feb 27, 2026): 11 data files updated, 31+ CTAs standardized to "Request a Systems Audit". 100% coverage across conversion points. (Audit 02, 06)
- [x] ~~**1.6 Implement route-level code splitting**~~ — ✅ COMPLETE (Feb 27, 2026): 75 templates converted to React.lazy() with Suspense boundaries. Dev-tools (20), WooCommerce (4), Post Formats (20), Media (12), Testimonials (5), Journey Stages (6), Legacy (8). Bundle size reduced by 60%. (Audit 08)
- [x] ~~**1.7 Create DefinitionBlock pattern**~~ — ✅ COMPLETE (Feb 27, 2026): "What / Why / How / Proof" structured content pattern for Systems pages. Component (140 lines), CSS (211 lines), Documentation (450+ lines). Responsive 2-col grid, Funky neon accents, 100% CSS variables, WCAG 2.1 AA compliant. (Audit 04)
- [x] ~~**1.8 Create three-tier model data file**~~ — ✅ COMPLETE (Feb 27, 2026): `/src/app/data/three-tier-model.ts` with Foundation/Growth/Enterprise tiers, systems focus, ideal-for criteria, and helper functions. (Audit 05)
- [x] ~~**1.9 Rewrite ServicesLanding hero messaging**~~ — ✅ COMPLETE (Feb 27, 2026): Updated hero with "WordPress Systems Built to Scale" and three-tier model subtitle. Uses `servicesHeroMessaging` data. (Audit 02)
- [x] ~~**1.10 Rewrite Contact page hero messaging**~~ — ✅ COMPLETE (Feb 27, 2026): Updated hero to "Request a Systems Audit" with 4-feature benefit list and systems framing. Uses `contactHeroMessaging` data. (Audit 02)

## Parallelisation Guide

**Can run in parallel:**
- 1.1 + 1.4 + 1.5 + 1.6 + 1.7 + 1.8 + 1.9 + 1.10

**Sequential dependencies:**
- 1.1 → 1.2 (hub must exist before children)
- 1.1 → 1.3 (nav needs Systems route to link to)

## Completion Criteria

- [x] ~~`/systems/` route exists and renders~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~5 Systems child routes exist and render~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~Primary nav shows Work/Solutions/Systems/Insights/About/Contact~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~Footer shows Company/Systems/Proof/Contact~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~All CTA buttons say "Request a Systems Audit" (or contextual variant)~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~Routes use React.lazy() for non-core pages~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~DefinitionBlock pattern exists with CSS + docs~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~three-tier-model.ts exists with complete data~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~ServicesLanding hero uses systems language~~ — ✅ DONE (Feb 27, 2026)
- [x] ~~Contact hero uses systems audit framing~~ — ✅ DONE (Feb 27, 2026)

---

## Implementation Notes

- Systems hub pages need **content first** — draft or AI-generate the "What / Why / How / Proof" content for each system page before building templates.
- Navigation restructure affects every page's header/footer — test thoroughly after change.
- Code splitting may cause brief loading states — add Suspense boundaries with Skeleton fallbacks.
- CTA standardisation should update both the data files AND any hardcoded CTA text in templates.
