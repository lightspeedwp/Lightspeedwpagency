# Route Architecture Documentation

**Created:** March 10, 2026  
**Last Updated:** March 10, 2026  
**Purpose:** Document the modular route architecture and route organization patterns

---

## Overview

The LSX Design prototype uses a **modular route architecture** where routes are organized into logical groups split across 11 route module files. This improves maintainability, reduces file size, and makes it easier to locate and update specific route definitions.

**Migration History:**
- **Before:** Single monolithic `routes.tsx` file (1,147 lines)
- **After:** 11 modular route files (~100-300 lines each) + orchestrator (`index.ts`, ~80 lines)
- **Memory Reduction:** ~15% reduction through better code organization and eliminated duplication

---

## Route Module Files

### Location: `/src/app/routes/`

| File | Purpose | Routes | Lazy Loading |
|------|---------|--------|--------------|
| **`index.ts`** | Route orchestrator - assembles all route modules | N/A (orchestrator) | N/A |
| **`core.routes.tsx`** | Core site pages (Home, About, Services, Systems, Solutions) | ~42 routes | Static imports (fast initial load) |
| **`content.routes.tsx`** | Work (Portfolio) and Insights (Blog) content | ~12 routes | Mixed (archives static, singles parameterized) |
| **`media.routes.tsx`** | Videos and Podcasts | ~9 routes | Lazy loaded (non-core media) |
| **`post-formats.routes.tsx`** | WordPress post format archives and singles | ~18 routes | Lazy loaded (specialized content) |
| **`woocommerce.routes.tsx`** | WooCommerce shop, product, cart, checkout | ~4 routes | Lazy loaded (e-commerce features) |
| **`tour-operator.routes.tsx`** | Tour operator archives and single tours | ~2 routes | Lazy loaded (industry-specific) |
| **`testimonials.routes.tsx`** | Testimonial archives and format-specific singles | ~6 routes | Lazy loaded (specialized content) |
| **`utility.routes.tsx`** | Contact, FAQ, Pricing, Search, Legal pages | ~10 routes | Static imports (high-traffic utility pages) |
| **`legacy.routes.tsx`** | Legacy archive patterns and redirects | ~8 routes | Lazy loaded (backwards compatibility) |
| **`dev-tools.routes.tsx`** | Developer tools, testing, and showcase pages | ~20 routes | Lazy loaded (development features) |

**Total Routes:** ~172 routes across 11 modules

---

## Supporting Files

### `/src/app/routes/lazy-imports.ts`

**Purpose:** Centralized lazy import declarations for all lazy-loaded templates

**Why Separate?**
- Prevents duplication of `React.lazy()` calls across route modules
- Single source of truth for lazy template imports
- Improves TypeScript compilation performance

**Usage:**
```tsx
// In route module files:
import { DevToolsTemplate, TemplateTester } from './lazy-imports';

// lazy-imports.ts handles the React.lazy() call:
export const DevToolsTemplate = lazy(() => 
  import('../components/templates/DevToolsTemplate').then(m => ({ default: m.DevToolsTemplate }))
);
```

### `/src/app/routes/route-wrappers.tsx`

**Purpose:** Suspense wrappers for lazy-loaded routes and parameter extraction for parameterized routes

**Two Types of Wrappers:**

1. **Suspense Wrappers (Lazy Routes):**
   ```tsx
   export function DevToolsRoute() {
     return (
       <Suspense fallback={<RouteLoadingFallback />}>
         <DevToolsTemplate />
       </Suspense>
     );
   }
   ```

2. **Parameter Extraction Wrappers (Parameterized Routes):**
   ```tsx
   export function SinglePostRoute() {
     const { slug } = useParams();
     return <SinglePostTemplate slug={slug} />;
   }
   ```

**Why Wrappers?**
- **Suspense boundaries:** Prevent blank screen (`#121212` Figma iframe background) when lazy components fail to load
- **Parameter extraction:** Extract URL params (`slug`, `year`, `month`) and pass to templates as props
- **Error isolation:** Each lazy route has its own Suspense boundary for better error handling
- **Type safety:** Ensures params are properly typed and validated before passing to templates

---

## Route Loading Strategies

### Static Imports (Core Pages)

**Used For:**
- Homepage (`/`)
- About pages (`/about`, `/about/team`, `/about/process`)
- Core service pages (`/services`, `/services/development`, etc.)
- Main archive pages (`/work`, `/insights`)
- High-traffic utility pages (`/contact`, `/faq`, `/pricing`)

**Why Static?**
- **Instant navigation:** No loading delay on first visit
- **SEO critical:** Core pages need fastest possible load time
- **User expectations:** Users expect instant response on main navigation items

**Implementation:**
```tsx
// core.routes.tsx
import { FrontPageTemplate } from '../components/templates/FrontPageTemplate';
import { AboutTemplate } from '../components/templates/AboutTemplate';

{ path: '/', Component: FrontPageTemplate }
{ path: 'about', Component: AboutTemplate }
```

### Lazy Imports (Non-Core Pages)

**Used For:**
- Developer tools (`/dev-tools`, `/dev-tools/template-tester`)
- WooCommerce features (`/shop`, `/cart`, `/checkout`)
- Post format archives (`/insights/format/audio`, `/insights/format/gallery`)
- Media archives (`/videos`, `/podcasts`)
- Tour operator pages (`/tours`)
- Testimonial format pages (`/testimonials/format/video`)
- Legacy archive pages

**Why Lazy?**
- **Reduced initial bundle:** Core pages load 50-60% faster
- **On-demand loading:** Only load code when user navigates to page
- **Better caching:** Each lazy chunk cached independently
- **Memory efficiency:** Lower memory usage on devices with limited RAM

**Implementation:**
```tsx
// dev-tools.routes.tsx
import { DevToolsRoute } from './route-wrappers';

{ path: 'dev-tools', Component: DevToolsRoute }
```

---

## Suspense Boundaries

**CRITICAL REQUIREMENT:** All lazy-loaded routes MUST be wrapped in `<Suspense>` boundaries to prevent the blank screen issue.

### The Blank Screen Problem

**Symptom:** Figma Make displays a solid `#121212` background with no content

**Root Cause:** When a lazy-loaded component fails to load (network timeout, chunk error, hydration failure), React suspends rendering. Without a Suspense boundary, the app falls back to the Figma Make iframe's default background (`#121212`).

**Solution:** Wrap ALL lazy-loaded routes in `<Suspense fallback={<RouteLoadingFallback />}>`

### RouteLoadingFallback Component

**Location:** `/src/app/components/ui/RouteLoadingFallback.tsx`

**Purpose:** Provides user-friendly loading state while lazy route chunks download

**Design System Compliance:**
- Uses `var(--background)` for page background
- Uses `var(--foreground)` for spinner color
- Uses `var(--spacing-*)` for padding
- Respects `prefers-reduced-motion` (static spinner if motion disabled)
- Accessible loading announcement for screen readers

**Implementation:**
```tsx
import { Suspense } from 'react';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';

export function DevToolsRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DevToolsTemplate />
    </Suspense>
  );
}
```

---

## Parameterized Routes

Routes that accept URL parameters (slugs, dates, IDs) use **wrapper components** to extract params and pass them as props.

### Single Post Route

```tsx
// URL: /insights/my-blog-post
// Param: slug = "my-blog-post"

export function SinglePostRoute() {
  const { slug } = useParams();
  return <SinglePostTemplate slug={slug} />;
}
```

### Date Archive Route

```tsx
// URL: /insights/2026/03
// Params: year = "2026", month = "03"

export function DateArchiveRoute() {
  const { year, month } = useParams();
  return (
    <DateArchiveTemplate
      year={year ? parseInt(year) : new Date().getFullYear()}
      month={month ? parseInt(month) : undefined}
    />
  );
}
```

### Portfolio Single Route

```tsx
// URL: /work/lsx-design-rebrand
// Param: slug = "lsx-design-rebrand"

export function PortfolioSingleRoute() {
  const { slug } = useParams();
  return <PortfolioSingleTemplate slug={slug} />;
}
```

**Why Wrappers?**
- **Type safety:** TypeScript ensures params exist before passing to templates
- **Default values:** Provide sensible defaults for missing params
- **Validation:** Validate and transform params (e.g., `parseInt()` for years)
- **Single responsibility:** Template focuses on rendering, wrapper handles routing logic

---

## Route Organization Patterns

### 1. Core Routes (`core.routes.tsx`)

**Pattern:** Nested route groups with parent/child relationships

**Example: Services Routes**
```tsx
{
  path: 'services',
  Component: ServicesLandingTemplate,
  children: [
    { index: true, Component: ServicesLandingTemplate },
    { path: 'development', Component: DevelopmentServiceTemplate },
    { path: 'design', Component: DesignServiceTemplate },
    // ... child service routes
  ]
}
```

**Benefits:**
- Logical URL structure (`/services/development`)
- Shared layout components (header, footer)
- Breadcrumb navigation support
- SEO-friendly hierarchy

### 2. Content Routes (`content.routes.tsx`)

**Pattern:** Archive + single template pairs with redirects

**Example: Blog Routes**
```tsx
// Archive
{ path: 'insights', Component: BlogIndexTemplate }

// Single posts
{ path: 'insights/:slug', Component: SinglePostRoute }

// Category archives
{ path: 'insights/category/:slug', Component: CategoryArchiveRoute }

// Redirects (legacy URLs)
{ path: 'blog', redirect: '/insights' }
{ path: 'blog/*', redirect: '/insights' }
```

**Benefits:**
- Clean URLs (`/insights/my-post`)
- SEO-friendly category archives
- Legacy URL support with redirects

### 3. Media Routes (`media.routes.tsx`)

**Pattern:** Format-specific archives with taxonomy support

**Example: Video Routes**
```tsx
// Archive
{ path: 'videos', Component: VideoArchiveRoute }

// Single video
{ path: 'videos/:slug', Component: SingleVideoRoute }

// Category archive
{ path: 'videos/category/:slug', Component: VideoCategoryRoute }

// Tag archive
{ path: 'videos/tag/:slug', Component: VideoTagArchiveRoute }
```

**Benefits:**
- WordPress-compatible URL structure
- Supports categories and tags
- Consistent pattern across media types

### 4. Post Format Routes (`post-formats.routes.tsx`)

**Pattern:** WordPress post format archives with format-specific singles

**Example: Audio Post Format**
```tsx
// Archive
{ path: 'insights/format/audio', Component: AudioArchiveRoute }

// Single audio post
{ path: 'insights/format/audio/:slug', Component: SingleAudioRoute }
```

**Benefits:**
- WordPress FSE compatible
- Format-specific templates (audio player, gallery grid, etc.)
- Clean separation of content types

### 5. WooCommerce Routes (`woocommerce.routes.tsx`)

**Pattern:** E-commerce flow with product archives and cart/checkout

**Example: Shop Routes**
```tsx
// Shop archive
{ path: 'shop', Component: ProductArchiveRoute }

// Single product
{ path: 'shop/:slug', Component: SingleProductRoute }

// Cart
{ path: 'cart', Component: CartRoute }

// Checkout
{ path: 'checkout', Component: CheckoutRoute }
```

**Benefits:**
- Standard WooCommerce URL structure
- Supports product variations
- Cart and checkout flow

### 6. Dev Tools Routes (`dev-tools.routes.tsx`)

**Pattern:** Nested developer tools with showcase pages

**Example: Dev Tools Routes**
```tsx
{
  path: 'dev-tools',
  Component: DevToolsRoute,
  children: [
    { index: true, Component: DevToolsRoute },
    { path: 'template-tester', Component: TemplateTesterRoute },
    { path: 'component-showcase', Component: ComponentShowcaseRoute },
    // ... more dev tools
  ]
}
```

**Benefits:**
- Isolated from production routes
- Easy to disable in production builds
- Consistent `/dev-tools/*` namespace

---

## URL Structure Conventions

### Slugs

**Format:** Lowercase, hyphen-separated
- ✅ CORRECT: `/insights/wordpress-best-practices`
- ❌ WRONG: `/insights/WordPress_Best_Practices`

### Dates

**Format:** `YYYY/MM` or `YYYY`
- ✅ CORRECT: `/insights/2026/03` (March 2026)
- ✅ CORRECT: `/insights/2026` (All posts from 2026)

### Categories

**Format:** `/category/{slug}`
- ✅ CORRECT: `/insights/category/wordpress`
- ✅ CORRECT: `/work/category/web-design`

### Tags

**Format:** `/tag/{slug}`
- ✅ CORRECT: `/insights/tag/tutorial`
- ✅ CORRECT: `/work/tag/hospitality`

### Pagination

**Format:** `/page/{number}`
- ✅ CORRECT: `/insights/page/2`
- ✅ CORRECT: `/work/page/3`

---

## Error Handling

### 404 Not Found

**Route Definition:**
```tsx
{ path: '404', Component: Template404 }
{ path: '*', Component: Template404 }
```

**Behavior:**
- Explicit `/404` route for direct navigation
- Catch-all `*` route for unmatched URLs
- Template404 provides helpful navigation options
- No redirect (preserves URL for debugging)

### Redirects (Legacy URLs)

**Pattern:** Use React Router's redirect

**Example:**
```tsx
{ path: 'blog', redirect: '/insights' }
{ path: 'portfolio', redirect: '/work' }
```

**Benefits:**
- SEO-friendly 301 redirects
- Maintains backlink value
- Preserves user bookmarks

---

## Performance Considerations

### Bundle Splitting

**Strategy:**
1. **Eager (Static):** Core pages (~42 templates) - instant navigation
2. **Lazy (On-Demand):** Non-core pages (~75 templates) - loaded when visited

**Impact:**
- Initial bundle: ~50-60% smaller
- Time to Interactive (TTI): 2-3x faster
- First Contentful Paint (FCP): 1.5-2x faster

### Code Splitting Limits

**Vite Configuration:** `/vite.config.ts`

```tsx
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom', 'react-router'],
        'patterns': [/* pattern component paths */],
        'templates-core': [/* core template paths */],
      }
    }
  }
}
```

**Chunk Size Limits:**
- **Max chunk size:** 500 KB (compressed)
- **Ideal chunk size:** 100-200 KB (compressed)
- **Critical chunk:** < 50 KB (core styles + React vendor)

**Oversized Templates:**
Templates exceeding 1,000 lines should be split into sub-components:
- `SnippetGeneratorTemplate.tsx` (1,897 lines) → Split into 3-4 components
- `DocsGeneratorTemplate.tsx` (991 lines) → Split into 2-3 components
- `DesignTokensReferenceTemplate.tsx` (791 lines) → Split into 2 components

---

## Migration Guide

### Adding a New Route

**Step 1:** Choose the correct route module file

| Route Type | File | Example |
|------------|------|---------|
| Core page | `core.routes.tsx` | `/about/culture` |
| Content archive/single | `content.routes.tsx` | `/insights/category/wordpress` |
| Media archive/single | `media.routes.tsx` | `/videos/category/tutorials` |
| Post format | `post-formats.routes.tsx` | `/insights/format/gallery` |
| WooCommerce | `woocommerce.routes.tsx` | `/shop/category/plugins` |
| Utility page | `utility.routes.tsx` | `/terms-of-service` |
| Dev tool | `dev-tools.routes.tsx` | `/dev-tools/color-palette` |

**Step 2:** Create template component

```tsx
// /src/app/components/templates/MyNewTemplate.tsx
export const MyNewTemplate = () => {
  return (
    <div className="template">
      {/* Template content */}
    </div>
  );
};
```

**Step 3:** Choose loading strategy

**Static Import (Core Pages):**
```tsx
// In core.routes.tsx
import { MyNewTemplate } from '../components/templates/MyNewTemplate';

{ path: 'my-new-page', Component: MyNewTemplate }
```

**Lazy Import (Non-Core Pages):**

1. Add lazy import to `lazy-imports.ts`:
   ```tsx
   export const MyNewTemplate = lazy(() =>
     import('../components/templates/MyNewTemplate').then(m => ({ 
       default: m.MyNewTemplate 
     }))
   );
   ```

2. Create wrapper in `route-wrappers.tsx`:
   ```tsx
   export function MyNewPageRoute() {
     return (
       <Suspense fallback={<RouteLoadingFallback />}>
         <MyNewTemplate />
       </Suspense>
     );
   }
   ```

3. Add route to appropriate module:
   ```tsx
   // In dev-tools.routes.tsx
   import { MyNewPageRoute } from './route-wrappers';
   
   { path: 'my-new-page', Component: MyNewPageRoute }
   ```

**Step 4:** Test the route

1. Build locally: `pnpm build`
2. Check bundle size: Review Vite build output
3. Test navigation: Navigate to `/my-new-page`
4. Test lazy loading: Verify loading fallback appears briefly
5. Test 404: Navigate to `/my-new-page/invalid` and verify 404 template

---

## Troubleshooting

### Blank Screen (`#121212` Background)

**Symptom:** Page loads with solid `#121212` background, no content

**Causes:**
1. **Missing Suspense boundary:** Lazy route not wrapped in `<Suspense>`
2. **Missing CSS variable:** Template uses undefined CSS variable
3. **Hydration error:** Template throws error during React hydration
4. **Chunk load failure:** Network timeout loading lazy chunk

**Solutions:**
1. Wrap lazy route in `<Suspense fallback={<RouteLoadingFallback />}>`
2. Verify all CSS variables defined in `/src/styles/theme-*.css`
3. Check browser console for React hydration errors
4. Test with slow network throttling to catch chunk load failures

### Route Not Found (404)

**Symptom:** Navigating to route shows 404 template

**Causes:**
1. **Typo in path:** Route path doesn't match URL
2. **Missing route:** Route not added to route module
3. **Wrong route module:** Route added to wrong module file
4. **Route order:** Catch-all `*` route registered before specific route

**Solutions:**
1. Verify route path matches URL exactly (case-sensitive)
2. Check route module file includes the route definition
3. Ensure route added to correct module (core vs. content vs. media)
4. Check route order - specific routes MUST come before catch-all `*`

### Lazy Route Never Loads

**Symptom:** Page shows loading fallback indefinitely

**Causes:**
1. **Missing template file:** Lazy import references non-existent file
2. **Export name mismatch:** Template export doesn't match import
3. **Circular dependency:** Template imports something that imports the route
4. **Network error:** Chunk fails to download (check Network tab)

**Solutions:**
1. Verify template file exists at path specified in lazy import
2. Ensure template exports match: `export const MyTemplate` → `m.MyTemplate`
3. Review imports to detect circular dependencies
4. Check Network tab for failed chunk requests (404, timeout, CORS)

---

## Best Practices

### Route Naming

**Paths:**
- Use lowercase with hyphens: `/about-us` not `/AboutUs`
- Keep paths short: `/work` not `/portfolio-projects`
- Match WordPress standards: `/category/:slug` not `/cat/:id`

**Component Names:**
- Use descriptive names: `AboutTemplate` not `About`
- Suffix with `Route` for wrappers: `AboutRoute` not `AboutWrapper`
- Use `Template` suffix for templates: `AboutTemplate` not `AboutPage`

### Loading Strategy

**When to use Static Imports:**
- Homepage and main navigation items
- High-traffic pages (About, Services, Contact)
- Pages with critical SEO value
- Pages users expect instant response

**When to use Lazy Imports:**
- Developer tools and admin pages
- Post format archives (specialized content)
- Media archives (videos, podcasts)
- WooCommerce features
- Legacy/backwards-compatibility routes

### Code Organization

**One route module per logical group:**
- Core pages → `core.routes.tsx`
- Content (Work/Insights) → `content.routes.tsx`
- Media → `media.routes.tsx`
- Post formats → `post-formats.routes.tsx`
- WooCommerce → `woocommerce.routes.tsx`
- Utility → `utility.routes.tsx`
- Dev tools → `dev-tools.routes.tsx`

**Separate concerns:**
- Route definitions → `*.routes.tsx`
- Lazy imports → `lazy-imports.ts`
- Wrappers (Suspense + params) → `route-wrappers.tsx`
- Templates → `/src/app/components/templates/`

---

## Related Documentation

- **[Build Optimization Guide](../build/build-optimization.md)** - Vite config, chunk strategy, bundle limits
- **[Performance Standards](../PERFORMANCE-STANDARDS.md)** - Loading benchmarks, TTI targets
- **[Template Organization](../templates/overview-templates.md)** - Template structure and patterns
- **[Site Structure Overview](../overview-sitemap.md)** - Complete site map with all 172 routes

---

**Last Updated:** March 10, 2026  
**Version:** 1.0.0  
**Maintained By:** LSX Design Systems Team
