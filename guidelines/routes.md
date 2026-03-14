# Routing Guidelines & Architecture — Guidelines

**Category:** Development
**Version:** 2.1.0
**Last Updated:** 2026-03-11
**Status:** Active
**Template Used:** _templates/general-template.md

---

## 🎯 Core Routing Principles
1. **Use `react-router`:** We exclusively use `react-router` (Data Mode with `createBrowserRouter`), NOT `react-router-dom`.
2. **Modular Architecture:** Routes are organized into logical groups split across modular route files (e.g., `core.routes.tsx`, `content.routes.tsx`) rather than a single monolithic file.
3. **No Deletions:** When updating pages, existing sections must never be removed, only added, polished, or rearranged.

## 🗂 Route Structure
```text
/src/app/routes/
  ├── index.ts               # Route orchestrator
  ├── core.routes.tsx        # Homepage, About, Services
  ├── content.routes.tsx     # Portfolio, Blog
  └── lazy-imports.ts        # Centralized lazy imports
```

## 🚀 Loading Strategies

### 1. Static Imports (Core Pages)
For high-traffic, SEO-critical pages (Home, About, Services), use static imports so they load instantly.
```tsx
// core.routes.tsx
import { FrontPageTemplate } from '../components/templates/FrontPageTemplate';
{ path: '/', Component: FrontPageTemplate }
```

### 2. Lazy Imports (Non-Core Pages)
For specialized or secondary pages, use React's `lazy()` to reduce initial bundle size. **ALL lazy-loaded routes MUST be wrapped in a `<Suspense>` boundary to prevent blank screens.**

```tsx
// lazy-imports.ts
export const DevToolsTemplate = lazy(() => 
  import('../components/templates/DevToolsTemplate').then(m => ({ default: m.DevToolsTemplate }))
);

// route-wrappers.tsx
export function DevToolsRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DevToolsTemplate />
    </Suspense>
  );
}
```

## 🔗 URL Conventions & Mapping
All URLs use hierarchical WordPress-style paths:
- `/` → Homepage
- `/{section}` → Section landing (e.g., `/about`)
- `/{section}/{slug}` → Detail page (e.g., `/services/discovery`)

**Slug Resolution:** Navigation functions use `navigateTo(slug)` which resolves via `/src/app/utils/route-map.ts`.

## ⚠️ Error Handling
- **404 Pages:** Include an explicit `{ path: '404', Component: Template404 }` and a catch-all `{ path: '*', Component: Template404 }`.
- **Redirects:** Use React Router's redirect capabilities for legacy URLs (e.g., `{ path: 'blog', redirect: '/insights' }`).