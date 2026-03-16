# Routes — Task List

**Category:** Audit  
**Version:** 1.6.0  
**Last Updated:** 2026-03-16  
**Status:** Active  
**Source Report:** `/reports/2026-03/2026-03-15-routes-audit.md`  
**Trigger:** `routes`

---

## Run: 2026-03-15 (routes trigger)

### P1 — Broken Links (Fix Immediately)

- [x] **R1.1:** Fix `snippet-generator` dead link — created `SnippetGeneratorTemplate.tsx` with CSS, route, and route-map entry. SiteMap status restored to `active`.
- [x] **R1.2:** Fix `video-archive` slug in `route-map.ts` — now maps to `/videos` (was incorrectly `/insights/format/video`)

### P2 — Missing Route Map Entries (Add Slugs)

- [x] **R2.1:** Add `phosphor-icon-reference` slug to route-map.ts
- [x] **R2.2:** Add utility page slugs to route-map.ts (18 entries): `free-consultation`, `free-woo-consultation`, `briefing`, `client-intake-form`, `client-feedback`, `referrals`, `website-packages`, `why`, `why-woo`, `why-wp`, `why-mailchimp`, `why-lsx`, `why-lightspeed`, `getting-started-with-lightspeed`, plus briefing variants
- [x] **R2.3:** Add thank-you page slugs to route-map.ts (7 entries)
- [x] **R2.4:** Add mailpoet page slugs to route-map.ts (4 entries)
- [x] **R2.5:** Add policy sub-page slugs to route-map.ts (8 entries)
- [x] **R2.6:** Update stale JSDoc in `route-map.ts` line 9 — changed `@see /src/app/routes.tsx` to `@see /src/app/routes/index.ts`

### P2 — Guideline Updates

- [x] **R2.7:** Update `/guidelines/routes.md` to reflect current architecture: 11 modular route files, static imports only, route groups table, file size limits — bumped to v3.0.0

### P3 — Cleanup & Optimization

- [x] **R3.1:** Split `core.routes.tsx` (304→248 lines) — extracted 18 Solutions routes into new `solutions.routes.tsx` (96 lines). Updated `routes/index.ts` to import and spread `solutionsRoutes`. Route groups now: 12 modular files.
- [x] **R3.2:** Review footer navigation categorization — RESOLVED: Footer was restructured to 4 clean columns (Company, Systems, Proof, Contact). No Videos/Podcasts miscategorization found.
- [x] **R3.3:** Run full hardcoded link scan across all `.tsx` files — AUDITED: Found 112 `to="/..."` (React Router Link) and 16 `href="/..."` (anchor) hardcoded links across templates/patterns/parts. Notable clusters: `GenericPolicyTemplate.tsx` (7 hardcoded policy nav links), `FeatureShowcaseTemplate.tsx` (4), `TestimonialsTemplate.tsx` (2). Most `to=` links use correct paths. Migration to `getPageUrl()` is a future P4 initiative.

---

## Run: 2026-03-15 (sitemap trigger)

### Auto-Fixed (4 items)

- [x] **S0.1:** Added `tour-operators` to SiteMap Solutions section
- [x] **S0.2:** Added `phosphor-icon-reference` to SiteMap Dev Tools section
- [x] **S0.3:** Marked `snippet-generator` as `missing` status with warning UI
- [x] **S0.4:** Fixed stale JSDoc `@see` references in SiteMapTemplate (removed 2 non-existent files, added `/guidelines/routes.md`)

### P2 — SiteMap Content Decisions

- [x] **S2.1:** Added 25 utility pages to SiteMap across 3 new sections: "Why Choose Us" (7 pages), "Consultation & Onboarding" (8 pages), "Policies" (10 pages). Removed duplicates from Core Pages (why-choose-us, privacy-policy, terms-of-service). Thank-you and MailPoet pages excluded as specified. Updated predefinedIds set to prevent double-listing.
- [x] **S2.2:** Add CSS rules for `.site-map__link--missing` and `.site-map__icon--warning` to `/src/styles/templates/site-map.css` — muted opacity and warning colour for broken links

### P3 — Stale References Cleanup

- [x] **S3.1:** Update 5 prompt files that reference non-existent `/guidelines/overview-sitemap.md` — replaced with `/guidelines/routes.md` across 7 files: `00-ORCHESTRATOR-STABILITY-AUDIT.md` (2 refs), `01-ia-and-navigation-audit.md`, `00-ORCHESTRATOR-EXECUTE-ALL-AUDITS.md`, `00-ORCHESTRATOR.md` (memory-optimization), `housekeeping-audit.md` (2 refs), plus 4 data files (`types.ts`, `navigation.ts`, `helpers.ts`, `index.ts`).

---

## Summary

| Priority | Tasks | Status |
|---|---|---|
| P1 (Broken) | 2 | Done |
| P2 (Missing/Updates) | 9 | ~~1 Open,~~ 9 Done |
| P3 (Cleanup) | 4 | 4 Done |
| Auto-fixed | 4 | Done |
| **Total** | **20** | **20 done, 0 open** |