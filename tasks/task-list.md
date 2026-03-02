# General Task List

**Purpose:** Single all-purpose open task tracker for the LSX Design project.
**Rule:** This file must NEVER be deleted. Completed tasks are checked off and periodically archived.

**Last Updated:** March 1, 2026

---

## Open Tasks

### Session 15 — Full System Audit & Orchestration — March 2, 2026
- [x] **Created Orchestrator v4.0:** `/prompts/00-ORCHESTRATOR.md` — Centralized multi-audit/implementation entry point.
- [x] **Full System Audit Report:** `/reports/2026-03-02-full-system-audit.md` — Identified legacy hex colors, monospace font violations, and oversized CSS files.
- [x] **Task 3.1: Split `page-service-hosting.css`:** Modularize 1350-line CSS file into 7 specialized modules.
- [x] **Task 3.2: Tokenize Mono Fonts:** Defined `var(--font-mono)` in `theme-base.css` and replaced hardcoded monospace strings in 12 files.
- [x] **Task 3.3: Remediation pass for hex colors:** Replaced hex values in `theme-blocks-showcase.css` and `page-service-hosting.css` with semantic CSS variables and tokenized terminal colors.
- [x] **Task 3.4: Modularize `FrontPageTemplate`:** Extracted inline Splash Hero into `HeroSplash.tsx` pattern component.

### File Optimization & Memory Reduction (March 1, 2026) — IN PROGRESS 🔥
- [ ] **See dedicated task list:** `/tasks/file-optimization-tasks.md` (81-110 hours, 4 phases)
- [ ] **Audit report:** `/reports/2026-03/file-optimization-audit-report.md`
- [ ] **Prompt:** `/prompts/optimization/2026-03-01-file-optimization-and-memory-reduction.md`
- [x] ~~Phase 1: CSS Base Extraction (Weeks 1-2)~~ — ✅ COMPLETE: Card base, Grid utilities, Hero base (33 templates, ~2,000 lines CSS saved)
- [x] ~~Phase 2: Pattern Component Extraction (Weeks 3-4)~~ — ✅ COMPLETE: PostCard (Phase 2.1b, 455 lines), StatsGrid (Phase 2.2, 51 lines), FeatureList + CheckList (Phase 2.3b, 324 lines) — **Total: ~875 lines JSX saved across 28 templates**
- [ ] Phase 3: Template Refactoring (Weeks 5-6) — Archive base, Service base, BlogIndex, ServicesLanding
- [ ] Phase 4: Optimization & Polish (Weeks 7-8) — SVG optimization, Data file splitting, Performance benchmarking
- **Expected Impact:** 4,500+ lines CSS saved, 80% DRY violation reduction, 20-30% build time improvement

### Phase 2.3b — FeatureList + CheckList Expansion — ✅ COMPLETE (March 1, 2026)
- [x] ~~17 templates migrated to FeatureList + CheckList~~ — ~324 lines JSX saved
- [x] ~~Completion report~~ — `/reports/2026-03/phase-2-3b-completion-report.md`
- [x] ~~CHANGELOG updated~~ — Phase 2.3b marked COMPLETE with all 17 templates listed
- [ ] **Next: Phase 2.4 — TestimonialCard Component** (~350 lines savings across 10-12 templates)
- [ ] **Next: Phase 2.5 — FunkyCTA Expansion** (~400 lines savings across 15-20 templates)

### Phase 2 IA Restructure (Feb 27, 2026) — IN PROGRESS
- [x] ~~Task 2.1: Rename /portfolio → /work~~ — ✅ COMPLETE: Routes, route-map, 15 templates, navigation, breadcrumbs updated. Zero broken links (Feb 27, 2026)
- [x] ~~Task 2.2: Rename /blog → /insights~~ — ✅ COMPLETE: 32 routes renamed, 16 files updated, full backward compatibility via route-map (Feb 27, 2026)
- [x] ~~Task 2.3: Consolidate 22 services → 9~~ — ✅ COMPLETE: 9 consolidated services, 13 redirect routes, AI Search & Visibility template created, 12+ data files updated (Feb 27, 2026)
- [x] ~~Task 2.4: URL redirect map document~~ — ✅ COMPLETE: 48 URLs, 8 redirect rules, .htaccess + Redirection plugin + functions.php implementations, SEO impact assessment, testing checklist, rollback plan (Feb 28, 2026)

### Session 13 — Sitemap Update & Bug Fixes — Feb 28, 2026
- [x] ~~Updated overview-sitemap.md to v3.0~~ — ✅ COMPLETE: ~172 routes across 14 sections, /work rename, /insights rename, AI/Content landing pages, Systems Hub, Journey stages, 22 dev tools
- [x] ~~Fixed useScrollReveal ref error in SiteMapTemplate~~ — ✅ COMPLETE: Destructured return object properly (`{ ref: heroRef, style: heroStyle }` instead of passing whole object as ref)
- [x] ~~Updated ServicesLandingTemplate with AI/Content category hubs~~ — ✅ COMPLETE: New "Explore by Discipline" section with 2 featured category cards linking to /services/ai/ and /services/content/, BEM CSS with category-specific colour accents, reduced motion guards

### Session 14 — Sitemap Page & Route-Map Overhaul — Feb 28, 2026
- [x] ~~SiteMapTemplate.tsx fully rebuilt~~ — ✅ COMPLETE: Added Systems Hub section (6 pages), AI/Content sub-service hierarchy with ⬡/↳ labels, Figma Prototyping + Design Systems services, renamed Portfolio → Work, Blog → Insights, fixed dateSlugToPath to use /insights/date/
- [x] ~~Route-map.ts fully updated~~ — ✅ COMPLETE: 30+ slug fixes — content sub-services (creation, copywriting, seo-content, governance) now route to actual /services/content/* paths; AI landing slug added; figma-prototyping + design-systems now route correctly; post format paths /blog/ → /insights/; accessibility no longer consolidated
- [x] ~~Guidelines.md updated~~ — ✅ COMPLETE: Project status Feb 28, system version 3.0, route count ~172
- [x] ~~Task 2.5: Create Insights sub-categories (Research, Build Notes, Editorial Systems, AI Governance)~~ — ✅ COMPLETE: 4 new categories added to taxonomies.ts (research, build-notes, editorial-systems, ai-governance), 8 new blog posts created in blog-posts.ts, route-map.ts updated with 4 sub-category slugs (Feb 28, 2026)
- [x] ~~Task 2.7: Update all internal link references throughout the codebase~~ — ✅ COMPLETE: 41 stale /blog/ references fixed across 27 files (SinglePostTemplate, TagArchiveTemplate, DateArchiveTemplate, ThemeBlocksShowcase, TutorialsTemplate, 21 post-format templates, InteractiveCard, CardGrid), 1 stale /portfolio/ reference fixed in PortfolioTagArchiveTemplate, route-map.ts pathToSlug() updated from /blog/ to /insights/ patterns (Feb 28, 2026)

### Links & Buttons Audit — Verify Risky Item (Feb 25, 2026)