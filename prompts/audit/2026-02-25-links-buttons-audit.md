# Links & Buttons Comprehensive Audit

**Date:** 2026-02-25
**Category:** Audit
**Priority:** Critical
**Estimated Time:** 2-3 hours (audit) + 2-4 hours (remediation)

---

## Objective

Audit **every link and button** across all templates, patterns, components, and data files to identify and fix broken navigation. The site uses a hierarchical URL structure (e.g. `/services/discovery`, `/solutions/wordpress`, `/about/team`) but many links still use flat slugs or hardcoded paths that produce 404 errors.

---

## Context

The project uses **three navigation patterns**, and inconsistency between them is the primary source of broken links:

1. **`slugToPath(slug)`** from `/src/app/utils/route-map.ts` — The canonical mapping. Used by `SiteHeader`, `Button` component, and ~15 files. **CORRECT.**
2. **`getPageUrl(slug)`** from `/src/app/data/site-pages.ts` — Was returning flat `/${slug}`. **FIXED (Feb 25, 2026)** to delegate to `slugToPath()`.
3. **Hardcoded paths** (`to="/path"` or `to={`/path/${slug}`}`) — Used in ~47 files. **NEEDS FULL AUDIT.**

Additionally, the `Button` component accepts a `page` prop (slug) which internally calls `slugToPath()`. Any invalid slug passed to `page=` will fall through to a flat `/${slug}` URL and produce a 404.

---

## Scope

### Files to Audit

| Category | Location | Count |
|---|---|---|
| Templates | `/src/app/components/templates/` | ~110 files |
| Patterns | `/src/app/components/patterns/` | ~95 files |
| Common components | `/src/app/components/common/` | ~15 files |
| UI components | `/src/app/components/ui/` | ~70 files |
| Block components | `/src/app/components/blocks/` | ~30 files |
| Parts (header/footer) | `/src/app/components/parts/` | 3 files |
| Data files | `/src/app/data/` | ~15 files |

### What to Check

For every `<Link to=...>`, `<Button page=...>`, `<a href=...>`, `buttonPage=`, `primaryButtonPage=`, `secondaryButtonPage=`:

1. **Does the target path exist in `routes.tsx`?**
2. **Does the slug exist in `slugToPath()` map in `route-map.ts`?**
3. **Is the path hierarchically correct?** (e.g. `/services/hosting` not `/hosting`)

---

## Known Issues (Pre-Audit)

### Already Fixed
- [x] `getPageUrl()` in `site-pages.ts` now delegates to `slugToPath()` (fixes all footer links)

### Known Broken Slugs (in `page=` or `buttonPage=` props)
1. `page="newsletter"` / `buttonPage="newsletter"` — Falls to `/newsletter` (404). Should be `newsletter-service` -> `/services/newsletter`
2. `page="blog-index"` — Falls to `/blog-index` (404). Should be `blog` -> `/blog`

### Known Broken Hardcoded Paths
1. `/tour/${tour.id}` in `TourOperatorArchiveTemplate.tsx:67` — Should be `/tours/${tour.id}`

### Slugs to Verify in Data Files
- `page: "newsletter"` in `/src/app/data/cta.ts:95` — Should be `newsletter-service`
- `page: "archive"` in `/src/app/data/cta.ts:146` — Verify this resolves correctly

---

## Audit Methodology

### Phase 1: Automated Search (30 min)
1. Search all `to="` patterns and verify each path exists in `routes.tsx`
2. Search all `to={` template literal patterns and verify path construction
3. Search all `page="` and `page={` patterns and verify slugs exist in `slugToPath` map
4. Search all `buttonPage="` and `buttonPage={` patterns
5. Search all `href=` patterns for internal links that should be `<Link>`
6. Search data files (`/src/app/data/*.ts`) for any `page:` or `buttonPage:` fields with invalid slugs

### Phase 2: Cross-Reference (45 min)
1. Compare every found slug against `SLUG_TO_PATH` in `route-map.ts`
2. Compare every found path against route definitions in `routes.tsx`
3. Flag any fallthrough slugs (not in static map, not matching dynamic patterns)

### Phase 3: Report (30 min)
1. Categorize findings by severity (broken / risky / cosmetic)
2. Create fix plan with file-by-file changes
3. Estimate remediation time

### Phase 4: Remediation
1. Fix broken slugs in data files first (single source of truth)
2. Fix broken slugs in templates
3. Fix hardcoded paths
4. Add missing slugs to `route-map.ts` if needed
5. Verify all fixes

---

## Success Criteria

- [ ] Zero broken links across all templates
- [ ] Zero invalid `page=` slugs
- [ ] Zero hardcoded paths that don't match routes
- [ ] All navigation uses either `slugToPath()`, `getPageUrl()`, or valid hardcoded paths
- [ ] Report saved to `/reports/2026-02/`
- [ ] Task list updated in `/tasks/task-list.md`

---

## Output Files

| File | Location |
|---|---|
| This prompt | `/prompts/audit/2026-02-25-links-buttons-audit.md` |
| Audit report | `/reports/2026-02/2026-02-25-links-buttons-audit-report.md` |
| Task list updates | `/tasks/task-list.md` |
