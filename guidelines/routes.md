# Routing Guidelines & Architecture — Guidelines

**Category:** Development  
**Version:** 3.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Core Routing Principles

1. **Use `react-router`:** We exclusively use `react-router` (Data Mode with `createBrowserRouter`), NOT `react-router-dom`.
2. **Modular Architecture:** Routes are organized into 11 modular files in `/src/app/routes/`, NOT a single monolithic file.
3. **Static Imports Only:** All route imports are static. No `React.lazy()` — Figma Make handles code splitting.
4. **No Deletions:** When updating pages, existing sections must never be removed, only added, polished, or rearranged.
5. **WordPress-style URLs:** All URLs use hierarchical paths matching WordPress permalink structure.

## Route File Structure

```text
/src/app/routes/
  ├── index.ts                  # Main orchestrator — exports `router`
  ├── core.routes.tsx           # Home, About, Services, Systems, Solutions
  ├── content.routes.tsx        # Work (Portfolio), Insights (Blog)
  ├── media.routes.tsx          # Videos, Podcasts
  ├── post-formats.routes.tsx   # Post format archives/singles
  ├── testimonials.routes.tsx   # Testimonials
  ├── utility.routes.tsx        # Contact, FAQ, Pricing, Search, Legal
  ├── legacy.routes.tsx         # Archive, Index, Single, etc.
  ├── dev-tools.routes.tsx      # Developer tools
  ├── route-wrappers.tsx        # Suspense wrappers for lazy routes
  └── lazy-imports.ts           # Centralized lazy imports (legacy, kept for compat)
```

**Compatibility shim:** `/src/app/routes.tsx` re-exports from `./routes/index.ts`.

## Import Strategy

All route templates use **static imports** for immediate availability:

```tsx
// core.routes.tsx
import { FrontPageTemplate } from '../components/templates/FrontPageTemplate';
{ path: '/', Component: FrontPageTemplate }
```

**No `React.lazy()`** — the Figma Make environment does not support dynamic imports reliably. All templates are statically imported in their respective route files.

## URL Conventions & Mapping

All URLs use hierarchical WordPress-style paths:

| Pattern | Example | Description |
|---|---|---|
| `/` | Homepage | Front page |
| `/{section}` | `/about` | Section landing |
| `/{section}/{slug}` | `/services/discovery` | Detail page |
| `/{section}/{sub}/{slug}` | `/services/content/strategy` | Nested sub-page |

**Slug Resolution:** Navigation functions use `navigateTo(slug)` which resolves via `/src/app/utils/route-map.ts`. The route-map provides bidirectional conversion between flat slugs and hierarchical URL paths.

**Route Map Location:** `/src/app/utils/route-map.ts`  
**Navigation Context:** `/src/app/contexts/NavigationContext.tsx`

## Route Groups

| Group | File | URL Prefix | Approx Routes |
|---|---|---|---|
| Core | `core.routes.tsx` | `/`, `/about/*`, `/services/*`, `/systems/*`, `/solutions/*` | ~80 |
| Content | `content.routes.tsx` | `/work/*`, `/insights/*` | ~20 |
| Media | `media.routes.tsx` | `/videos/*`, `/podcasts/*` | ~10 |
| Post Formats | `post-formats.routes.tsx` | `/insights/format/*` | ~22 |
| Testimonials | `testimonials.routes.tsx` | `/testimonials/*` | ~5 |
| Utility | `utility.routes.tsx` | `/contact`, `/faq`, `/pricing`, `/search`, etc. | ~25 |
| Legacy | `legacy.routes.tsx` | `/archive`, `/single`, etc. | ~5 |
| Dev Tools | `dev-tools.routes.tsx` | `/dev/*` | ~10 |

**Total:** ~172 routes across 8 route files.

## Error Handling

- **404 Page:** Explicit `{ path: '404', Component: Template404 }` and catch-all `{ path: '*', Component: Template404 }`.
- **Error Boundary:** `RootLayout` provides error boundary wrapping for all routes.
- **Route Announcer:** `RouteAnnouncer` component announces route changes for screen readers.

## File Size Limits

- Route files must stay under **300 lines** each.
- `core.routes.tsx` is currently at 305 lines — needs splitting (extract Solutions routes into `solutions.routes.tsx`).

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 3.0.0 | 2026-03-15 | Major rewrite: documented 11 modular route files, static-only imports, route groups table, file size limits |
| 2.1.0 | 2026-03-11 | Updated for modular route structure |
| 2.0.0 | 2026-03-10 | Migrated from monolithic routes.tsx to modular architecture |
