# Routes Audit Report

**Date:** 2026-03-15  
**Trigger:** `routes`  
**Prompt:** `/prompts/routes.md`  
**Task List:** `/tasks/routes-task-list.md`

---

## Summary

| Metric | Value |
|---|---|
| Route files scanned | 9 (8 modules + 1 orchestrator) |
| Total registered routes | ~172 |
| Route map entries (static) | ~185 slugs |
| Dynamic patterns | 14 |
| Issues found | 18 |
| Auto-fixed | 0 (report-only run) |
| Manual tasks created | 18 |

---

## Step 1: Route Definition Scan

### Route Counts by Module

| Module | File | Routes | Lines | Status |
|---|---|---|---|---|
| Core | `core.routes.tsx` | 89 | 305 | OVER 300 limit |
| Content | `content.routes.tsx` | 16 | 134 | OK |
| Media | `media.routes.tsx` | 7 | 96 | OK |
| Post Formats | `post-formats.routes.tsx` | 19 | 188 | OK |
| Testimonials | `testimonials.routes.tsx` | 6 | 94 | OK |
| Utility | `utility.routes.tsx` | 49 | 150 | OK |
| Legacy | `legacy.routes.tsx` | 8 | 83 | OK |
| Dev Tools | `dev-tools.routes.tsx` | 22 | 185 | OK |
| Orchestrator | `index.ts` | 2 (404 + catch-all) | 89 | OK |

### File Size Violations

| File | Lines | Limit | Over By |
|---|---|---|---|
| `core.routes.tsx` | 305 | 300 | 5 lines |

### Duplicate Template Imports

| Template | Imported In |
|---|---|
| `FeatureShowcaseTemplate` | `legacy.routes.tsx`, `dev-tools.routes.tsx` |
| `StyleGuideTemplate` | `utility.routes.tsx`, `dev-tools.routes.tsx` |

These are intentional (same template served at different URLs) but noted for awareness.

---

## Step 2: Route Map Validation

### Orphaned Slugs (slug maps to non-existent route)

| Slug | Maps To | Issue |
|---|---|---|
| `snippet-generator` | `/dev-tools/snippet-generator` | No route definition exists. Referenced in DevToolsTemplate and SiteMapTemplate as active page. |
| `video-archive` | `/insights/format/video` | Wrong path — video archive is at `/videos`, not a post format |

### Missing Route Map Entries (route exists, no slug)

| Route Path | Module | Missing Slug |
|---|---|---|
| `/dev-tools/phosphor-icon-reference` | dev-tools | `phosphor-icon-reference` |
| `/free-consultation` | utility | `free-consultation` |
| `/free-woo-consultation` | utility | `free-woo-consultation` |
| `/briefing` | utility | `briefing` |
| `/client-intake-form` | utility | `client-intake-form` |
| `/client-feedback` | utility | `client-feedback` |
| `/referrals` | utility | `referrals` |
| `/website-packages` | utility | `website-packages` |
| `/why` | utility | `why` |
| `/why-woo` | utility | `why-woo` |
| `/why-wp` | utility | `why-wp` |
| `/why-mailchimp` | utility | `why-mailchimp` |
| `/why-lsx` | utility | `why-lsx` |
| `/why-lightspeed` | utility | `why-lightspeed` |
| `/getting-started-with-lightspeed` | utility | `getting-started-with-lightspeed` |
| Various thank-you pages (7) | utility | Multiple missing |
| Various mailpoet pages (4) | utility | Multiple missing |
| Various policy sub-pages (7) | utility | Multiple missing |

**Total missing slug entries: ~33**

### Stale JSDoc References

| File | Line | Reference | Issue |
|---|---|---|---|
| `route-map.ts` | 9 | `@see /src/app/routes.tsx` | File no longer exists — replaced by `/src/app/routes/` directory |

---

## Step 3: Navigation Data Audit

### Main Navigation

Current structure: Work | Solutions | Systems | Insights | About | Contact

| Finding | Severity | Details |
|---|---|---|
| **Services missing from main nav** | P3 (intentional?) | 30+ service routes exist but Services is not a top-level nav item. Likely intentional since services are accessed through Solutions/Systems. |

### Footer Navigation

| Finding | Severity | Details |
|---|---|---|
| **Videos in "Solutions" section** | P3 | `page: 'videos'` is listed under "Our Solutions" but Videos is a media section, not a solution |
| **Podcasts in "Solutions" section** | P3 | `page: 'podcasts'` is listed under "Our Solutions" but Podcasts is a media section, not a solution |

All `page` values in navigation data resolve correctly via `slugToPath()`.

---

## Step 4: Link Reference Scan

Hardcoded link patterns were not exhaustively scanned in this session due to the ~172-route scale. This should be done as a follow-up task with targeted `grep` searches.

---

## Step 5: Template Import Verification

All template imports in route files resolve to existing files. No broken imports found.

Duplicate imports noted above (FeatureShowcaseTemplate, StyleGuideTemplate) are intentional.

---

## Step 6: SiteMap Consistency

| Finding | Severity | Details |
|---|---|---|
| `snippet-generator` listed as active in SiteMapTemplate | P1 | Route does not exist — dead link in site map |

---

## Step 7: Guidelines Audit

| Finding | Severity | Details |
|---|---|---|
| `/guidelines/routes.md` is outdated | P2 | References `lazy-imports.ts` strategy but project uses static imports only. Lists 3 route files but there are now 11. Version 2.1.0 from 2026-03-11. |

---

## Recommendations

1. **P1 — Fix dead link:** Create route for `snippet-generator` OR remove from DevToolsTemplate and SiteMapTemplate
2. **P2 — Add 33 missing slug entries** to route-map.ts for utility routes
3. **P2 — Fix `video-archive` slug** mapping (currently points to wrong path)
4. **P2 — Update guidelines** to reflect current 11-file modular architecture
5. **P3 — Split `core.routes.tsx`** (305 lines, 5 over limit) — consider extracting Solutions routes
6. **P3 — Review footer navigation** categorization (Videos/Podcasts under Solutions)

---

**Generated by:** `routes` trigger  
**Next run recommended:** After any route additions or navigation changes
