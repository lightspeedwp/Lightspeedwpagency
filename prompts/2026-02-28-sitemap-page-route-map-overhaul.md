# Sitemap Page & Route-Map Overhaul

**Date:** February 28, 2026
**Session:** 14
**Type:** Audit + Remediation

---

## Objective

Update the `/site-map` page (`SiteMapTemplate.tsx`) to reflect ALL current routes, sections, and services — including Systems Hub, AI/Content category landings, design sub-services, and correct /insights/ paths. Fix `route-map.ts` slug-to-path mappings that were pointing to consolidated routes instead of actual dedicated routes. Update `Guidelines.md` with current project status.

## Scope

### SiteMapTemplate.tsx
1. Add **Systems Hub** section (6 pages: hub dashboard + 5 system pillars)
2. Add **AI Services** category landing + 5 sub-services with hierarchy labels (⬡/↳)
3. Add **Content Services** category landing + 8 sub-services with hierarchy labels
4. Add **Figma Prototyping** and **Design Systems** as separate service entries
5. Rename "Portfolio" section label to "Work"
6. Rename "Blog & Archives" to "Insights & Archives"
7. Rename "Blog Posts" to "Insight Posts"
8. Fix `dateSlugToPath()` helper: `/blog/date/` -> `/insights/date/`

### route-map.ts
1. Content sub-service slugs: Map to actual `/services/content/*` paths (not consolidated `/services/content`)
2. Add new slugs: `content-creation`, `content-copywriting`, `content-seo-content`, `content-governance`, `content-overview`, `ai-services-landing`
3. Fix `migrations` -> `/services/migrations` (not consolidated to `/services/hosting`)
4. Fix `support` -> `/services/support` (not consolidated to `/services/hosting`)
5. Fix `newsletter-service` -> `/services/newsletter`
6. Fix `email-marketing` -> `/services/email-marketing`
7. Fix `figma-prototyping` -> `/services/figma-prototyping` (not consolidated to `/services/design`)
8. Fix `design-systems` -> `/services/design-systems`
9. Fix `accessibility` -> `/services/accessibility` (not consolidated to `/services/performance`)
10. Fix ALL post format paths: `/blog/format/*` -> `/insights/format/*` (22 paths)
11. Fix date archive fallback: `/blog/date/` -> `/insights/date/`

### Guidelines.md
1. Add Feb 28 project status block
2. Update system version to 3.0
3. Update total routes to ~172

## Files Modified

| File | Changes |
|------|---------|
| `/src/app/components/templates/SiteMapTemplate.tsx` | Added Systems Hub section, AI/Content sub-services, design sub-services, renamed section labels, fixed date helper |
| `/src/app/utils/route-map.ts` | 30+ slug fixes across services, content, post formats, legacy pages |
| `/guidelines/Guidelines.md` | Updated project status, version, route count |
| `/tasks/task-list.md` | Added Session 14 entries |

## Verification

- [x] All SiteMapTemplate sections now match `overview-sitemap.md` v3.0
- [x] All slugs in SiteMapTemplate resolve to actual routes in `routes.tsx`
- [x] Post format paths correctly use `/insights/format/` prefix
- [x] Date archive paths correctly use `/insights/date/` prefix
- [x] Systems Hub (6 pages) visible in sitemap
- [x] AI Services (6 pages) visible as category hierarchy in Services section
- [x] Content Services (9 pages) visible as category hierarchy in Services section
- [x] Section labels updated: "Work" (not Portfolio), "Insights & Archives" (not Blog), "Insight Posts"
- [x] Blog Index renamed to "Insights Index" with `insights` slug
- [x] All CSS uses 100% CSS variables (no Tailwind, no hardcoded values)
- [x] Typography uses only `var(--font-primary)` and `var(--font-secondary)`
- [x] `Settings` icon verified in lucide-react
- [x] Guidelines.md updated to v3.0 with ~172 routes
- [x] Task list updated with Session 14 entries