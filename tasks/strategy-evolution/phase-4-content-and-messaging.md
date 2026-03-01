# Phase 4: Content and Messaging

**Status:** PENDING
**Dependencies:** Phase 2 (IA/navigation renames must be complete)
**Estimated Effort:** 40-56 hours
**Populated From:** Reports 02, 05, 07

---

## Critical Tasks (Must Complete)

- [ ] **4.1 Rewrite generic agency language** — Fix 5 high-priority violations: "world-class" (×3), "cutting-edge" (×2) in services-detailed.ts, blog-posts.ts, why-choose-us-page.ts, journey-stage-pages.ts. (Audit 07)
- [ ] **4.2 Rewrite all "Why Choose" features** — Replace speed/experience claims with systems/governance outcomes across why-choose-us-page.ts and front-page.ts. (Audit 02)
- [ ] **4.3 Rewrite About story section** — Replace agency origin narrative ("small duo of freelancers") with systems evolution framing in about-page.ts. (Audit 02)

## High Priority (Should Complete)

- [ ] **4.4 Create 4 definitional pages** — "What is structured publishing?", "Design token governance", "Block pattern governance", "Progressive interactivity in WordPress". Each needs template + data file. (Audit 05, 07)
- [ ] **4.5 Create topic cluster anchors** — Publishing systems, Commerce systems, Design system clusters. Each needs a hub page and internal linking. (Audit 05)
- [ ] **4.6 Add definitional headers to 10 key pages** — "What is X", "How X works" headers for AI search entity reinforcement. (Audit 07)
- [ ] **4.7 Implement answer-first formatting** — Rewrite top paragraphs of homepage, about, services, 5 systems pages to lead with answer, then context, then proof. (Audit 07)
- [ ] **4.8 Update CTA text across all service/solution pages** — Replace "Discuss Your Project", "Get Started", "Get In Touch" with systems-audit variants. (Audit 02, 06)

## Medium Priority (Nice to Have)

- [ ] **4.9 Create AI thought leadership pages** — "AI features and your website", "ChatGPT search inclusion guide". (Audit 05)
- [ ] **4.10 Create ICP-specific messaging variants** — Government, education, healthcare, publishing sector variants for key pages. (Audit 02)
- [ ] **4.11 Review blog post titles** — Update "World-Class Travel Websites" and similar titles to systems language. (Audit 07)
- [ ] **4.12 Create systems audit page** — Define what a systems audit includes, expected outcomes, timeline, deliverables. (Audit 02)

## Implementation Notes

- Content changes affect data files in `/src/app/data/` — never modify template JSX for copy changes.
- Definitional pages are high-value for AI search — prioritise entity-defining content.
- Answer-first formatting means: lead paragraph answers the question, subsequent paragraphs provide context.
- ICP-specific variants can be A/B tested later — create data variants now, implement display logic later.
