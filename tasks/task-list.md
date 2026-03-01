# General Task List

**Purpose:** Single all-purpose open task tracker for the LSX Design project.
**Rule:** This file must NEVER be deleted. Completed tasks are checked off and periodically archived.

**Last Updated:** February 28, 2026

---

## Open Tasks

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