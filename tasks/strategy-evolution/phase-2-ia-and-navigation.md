# Phase 2: IA and Navigation

**Status:** IN PROGRESS (4/10 tasks complete)
**Dependencies:** Phase 1 (navigation restructure must be complete)
**Estimated Effort:** 24-34 hours
**Actual Progress:** ~8 hours (Tasks 2.1 + 2.2 + 2.3 + 2.4 complete)
**Populated From:** Reports 01, 05

---

## Critical Tasks (Must Complete)

- [x] ~~**2.1 Rename /portfolio → /work**~~ — ✅ COMPLETE (Feb 27, 2026): Updated routes.tsx, route-map.ts, 15 templates with internal links, breadcrumbs. Zero broken links.
- [x] ~~**2.2 Rename /blog → /insights**~~ — ✅ COMPLETE (Feb 27, 2026): 32 routes renamed, 16 files updated (templates, patterns, widgets), full backward compatibility via route-map.ts. See `/reports/2026-02/task-2-2-blog-insights-redirect-map.md`
- [x] ~~**2.3 Consolidate 22 service pages into 9**~~ — ✅ COMPLETE (Feb 27, 2026): 9 consolidated services (Discovery, Design, Development, Content Operations, Security, Hosting & Support, Performance & Accessibility, AI Search & Visibility, Training). 13 redirect routes via Navigate. New AISearchServiceTemplate + CSS. 12+ data files updated (route-map, routes, services, services-detailed, related-services-map, site-pages, service-journey, journey-stage-pages, wordpress-redesign-page, woocommerce-redesign-page, wetu-importer-page). Legacy slug backward compatibility via getRelatedServices() slug map.

## High Priority (Should Complete)

- [x] ~~**2.4 Create URL redirect map document**~~ — ✅ COMPLETE (Feb 28, 2026): Complete 301 redirect mapping for all Phase 2 URL changes (48 URLs, 8 redirect rules). Includes .htaccess implementation, Redirection plugin CSV, functions.php fallback, SEO impact assessment, analytics tracking, testing checklist, and rollback plan. Ready for WordPress deployment. See `/reports/2026-02/phase-2-url-redirect-map.md`
- [ ] **2.5 Create Insights sub-categories** — Research, Build Notes, Editorial Systems, AI Governance category routes. (Audit 01)
- [ ] **2.6 Create Work sub-sections** — Case Studies archive, optional Patterns/Playbooks and Results Metrics routes. (Audit 01)
- [ ] **2.7 Update all internal link references** — Scan all data files and templates for old paths (/portfolio, /blog, /services/*) and update. (Audit 01)

## Medium Priority (Nice to Have)

- [ ] **2.8 Phase out Journey Stage pages** — Remove or redirect /services/ignite through /services/evolve. (Audit 01)
- [ ] **2.9 Review AI sub-pages placement** — Determine if AI integration pages sit under /solutions/ or /systems/. (Audit 01)
- [ ] **2.10 Clean up dev-tools routes** — Mark as excluded from production or add noindex. (Audit 08)

## Implementation Notes

- Renames affect navigation, breadcrumbs, data files, internal links, and sitemap.
- Test every link after renames — use file_search to find all references to old paths.
- Redirect map should be a standalone document for WordPress migration team.
- Service consolidation requires merging data files (e.g., 3 content service data files → 1).