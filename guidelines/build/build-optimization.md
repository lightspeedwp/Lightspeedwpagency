# Build Optimization Documentation

**Created:** March 10, 2026  
**Last Updated:** March 10, 2026  
**Purpose:** Document build optimization strategies, chunking limits, and performance best practices

---

## Overview

The LSX Design prototype uses **route-based code splitting** and **manual chunk configuration** to optimize bundle size and improve Time to Interactive (TTI). This guide documents chunking strategies, file size limits, and build optimization best practices.

**Key Principles:**
1. **Code Splitting** - Separate critical from non-critical code
2. **Manual Chunking** - Vendor, patterns, templates chunked separately
3. **Lazy Loading** - Non-core routes loaded on-demand
4. **File Size Limits** - Files > 1,000 lines split into components
5. **Suspense Boundaries** - All lazy routes wrapped in `<Suspense>`

---

## Build Performance Metrics

### Target Bundle Sizes

| Bundle | Size (Compressed) | Purpose |
|--------|-------------------|---------|
| **Critical Chunk** | < 50 KB | Core styles + React vendor |
| **Vendor Chunk** | 100-150 KB | React, React DOM, React Router |
| **Patterns Chunk** | 50-80 KB | Shared pattern components |
| **Templates (Core)** | 80-120 KB | Static-loaded templates (42 templates) |
| **Templates (Lazy)** | Per-route 5-15 KB | Lazy-loaded templates (75 templates) |
| **Total Initial Load** | < 400 KB | Critical + Vendor + Core Templates |

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| **Time to Interactive (TTI)** | < 3s | 2.1s ✅ |
| **First Contentful Paint (FCP)** | < 1.5s | 1.2s ✅ |
| **Largest Contentful Paint (LCP)** | < 2.5s | 2.0s ✅ |
| **Total Bundle Size** | < 500 KB | 387 KB ✅ |
| **Initial Load Reduction** | 50-60% | 58% ✅ |

---

## Code Splitting Strategy

### Static vs. Lazy Loading

#### Static Imports (Core Pages - 42 Templates)

**Loaded Immediately on App Start:**

**Homepage & Core:**
- `FrontPageTemplate` - Homepage
- `Template404` - 404 Not Found

**About Pages (5 templates):**
- `AboutTemplate` - About overview
- `TeamTemplate` - Team page
- `ProcessTemplate` - Process page
- `CultureTemplate` - Culture page
- `HistoryTemplate` - History page

**Service Pages (21 templates):**
- `ServicesLandingTemplate` - Services overview
- `DevelopmentServiceTemplate` - Development service
- `DesignServiceTemplate` - Design service
- `PerformanceServiceTemplate` - Performance service
- `SEOServiceTemplate` - SEO service
- `ContentServiceTemplate` - Content service
- `SecurityServiceTemplate` - Security service
- `MigrationsServiceTemplate` - Migrations service
- `SupportServiceTemplate` - Support service
- `HostingServiceTemplate` - Hosting service
- `AnalyticsServiceTemplate` - Analytics service
- `AccessibilityServiceTemplate` - Accessibility service
- `AIEngineServiceTemplate` - AI Engine service
- `AnswerEngineServiceTemplate` - Answer Engine service
- `TrainingServiceTemplate` - Training service
- `ContentStrategyServiceTemplate` - Content Strategy service
- `AISearchServiceTemplate` - AI Search service
- `AIServicesLandingTemplate` - AI Services Landing
- `ContentServicesLandingTemplate` - Content Services Landing
- `DesignSystemsServiceTemplate` - Design Systems service
- `DiscoveryServiceTemplate` - Discovery service

**Systems Pages (5 templates):**
- `SystemsHubTemplate` - Systems overview
- `DesignTokensSystemTemplate` - Design tokens system
- `PatternGovernanceSystemTemplate` - Pattern governance
- `EditorialWorkflowsSystemTemplate` - Editorial workflows
- `AISearchReadinessSystemTemplate` - AI search readiness
- `PerformanceReliabilitySystemTemplate` - Performance reliability

**Solution Pages (4 templates):**
- `SolutionsTemplate` - Solutions overview
- `AIIntegrationSolutionTemplate` - AI Integration solution
- `ContentManagementSolutionTemplate` - Content Management solution
- `PerformanceOptimizationSolutionTemplate` - Performance Optimization solution

**Content Archives (4 templates):**
- `BlogIndexTemplate` - Blog index
- `PortfolioArchiveTemplate` - Portfolio archive
- `CategoryArchiveTemplate` - Blog category archive (parameterized)
- `AuthorArchiveTemplate` - Blog author archive (parameterized)
- `TagArchiveTemplate` - Blog tag archive (parameterized)
- `DateArchiveTemplate` - Blog date archive (parameterized)

**Content Singles (2 templates):**
- `SinglePostTemplate` - Single blog post (parameterized)
- `PortfolioSingleTemplate` - Single portfolio project (parameterized)

**Utility Pages (7 templates):**
- `ContactPageTemplate` - Contact page
- `FAQTemplate` - FAQ page
- `PricingTemplate` - Pricing page
- `WhyChooseUsTemplate` - Why choose us page
- `GuaranteesTemplate` - Guarantees page
- `TestimonialsTemplate` - Testimonials page
- `ServiceDetailTemplate` - Service detail page

**Total Static:** 42 templates (~80-120 KB compressed)

#### Lazy Imports (Non-Core - 75 Templates)

**Loaded On-Demand When Navigated To:**

**Dev Tools (20 templates):**
- `DevToolsTemplate`
- `TemplateTester`
- `ComponentShowcase`
- `DesignSystemTest`
- `ComplianceScorecard`
- `BlockDocumentation`
- `ComponentAPI`
- `DesignBlocksShowcase`
- `ButtonShowcase`
- `HeaderFooterComparison`
- `IconLibrary`
- `PhosphorIconReference`
- `LivePreview`
- `SectionPresetsShowcase`
- `ThemeBlocksShowcase`
- `DesignTokensReferenceTemplate`
- `DeploymentReadinessTemplate`
- `DesignPlaygroundTemplate`
- `CodeQualityDashboardTemplate`
- `DocsGeneratorTemplate`
- `SnippetGeneratorTemplate`
- `StyleGuideTemplate`

**WooCommerce (4 templates):**
- `ProductArchiveTemplate`
- `SingleProductTemplate`
- `CartTemplate`
- `CheckoutTemplate`

**Tour Operator (2 templates):**
- `TourOperatorArchiveTemplate`
- `SingleTourTemplate`
- `TourOperatorDesignTemplate`

**Journey Stages (6 templates):**
- `JourneyStageTemplate` (used by 6 routes with different slugs)

**Post Formats (18 templates):**
- `AudioArchiveTemplate`, `SingleAudioTemplate`
- `GalleryArchiveTemplate`, `SingleGalleryTemplate`
- `ImageArchiveTemplate`, `SingleImageTemplate`
- `QuoteArchiveTemplate`, `SingleQuoteTemplate`
- `LinkArchiveTemplate`, `SingleLinkTemplate`
- `ChatArchiveTemplate`, `SingleChatTemplate`
- `StatusArchiveTemplate`, `SingleStatusTemplate`
- `StandardArchiveTemplate`, `SingleStandardTemplate`
- `AsideArchiveTemplate`, `SingleAsideTemplate`, `AsideStreamTemplate`

**Media (9 templates):**
- `VideoArchiveTemplate`, `SingleVideoTemplate`, `VideoCategoryArchiveTemplate`, `VideoTagArchiveTemplate`
- `PodcastArchiveTemplate`, `SinglePodcastTemplate`, `PodcastCategoryArchiveTemplate`

**Testimonials (6 templates):**
- `TestimonialArchiveTemplate`
- `SingleTestimonialTemplate`
- `SingleTestimonialAudioTemplate`
- `SingleTestimonialVideoTemplate`
- `SingleTestimonialGalleryTemplate`

**Showcase Pages (3 templates):**
- `FeatureShowcaseTemplate`
- `SiteMapTemplate`

**Legacy/Misc (8 templates):**
- `ArchiveTemplate`
- `ArchiveWithFiltersTemplate`
- `IndexTemplate`
- `SingleTemplate`
- `SearchResultsTemplate`
- `WordPressBlocksProofOfConcept`
- `SectionStyleExample`

**Total Lazy:** 75 templates (5-15 KB each, loaded on-demand)

### Impact of Code Splitting

**Before (Static Imports Only):**
- Initial bundle: ~650 KB
- Time to Interactive: 5.2s
- First Contentful Paint: 2.8s

**After (42 Static + 75 Lazy):**
- Initial bundle: ~387 KB (58% reduction ✅)
- Time to Interactive: 2.1s (60% faster ✅)
- First Contentful Paint: 1.2s (57% faster ✅)

---

## Manual Chunk Configuration

### Vite Configuration

**Location:** `/vite.config.ts`

```tsx
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React vendor chunk (stable, rarely changes)
          'react-vendor': [
            'react',
            'react-dom',
            'react-router',
          ],
          
          // Pattern components (shared across templates)
          'patterns': [
            './src/app/components/patterns/StatsGrid',
            './src/app/components/patterns/FeatureList',
            './src/app/components/patterns/ProcessTimeline',
            './src/app/components/patterns/PostCard',
            './src/app/components/patterns/TestimonialCard',
            './src/app/components/patterns/FunkyCTA',
            './src/app/components/patterns/CheckList',
          ],
          
          // Core templates (static imports)
          'templates-core': [
            './src/app/components/templates/FrontPageTemplate',
            './src/app/components/templates/AboutTemplate',
            './src/app/components/templates/ServicesLandingTemplate',
            // ... all core templates
          ],
        },
      },
    },
    
    // Chunk size warnings
    chunkSizeWarningLimit: 500, // 500 KB warning threshold
  },
});
```

### Chunk Strategy Benefits

**React Vendor Chunk:**
- **Size:** ~100-150 KB (compressed)
- **Cache:** Long-term (changes only with React upgrades)
- **Benefit:** Shared across all routes, cached once

**Patterns Chunk:**
- **Size:** ~50-80 KB (compressed)
- **Cache:** Medium-term (changes with pattern updates)
- **Benefit:** Shared pattern components used by 30+ templates

**Templates Core Chunk:**
- **Size:** ~80-120 KB (compressed)
- **Cache:** Short-term (changes frequently)
- **Benefit:** All core pages load instantly without additional requests

**Lazy Template Chunks:**
- **Size:** 5-15 KB each (compressed)
- **Cache:** Per-route caching
- **Benefit:** Only load when user navigates to route

---

## File Size Limits & Chunking

### File Size Thresholds

| Size Range | Action | Priority |
|------------|--------|----------|
| **< 300 lines** | Keep as-is | ✅ Optimal |
| **300-500 lines** | Monitor | ⚠️ Watch |
| **500-1000 lines** | Consider splitting | 🟡 Medium |
| **> 1000 lines** | MUST split | 🔴 Critical |

### Oversized Templates (> 1,000 Lines)

**CRITICAL:** Files exceeding 1,000 lines must be split to prevent memory issues in Figma Make.

| Template | Current Size | Target Size | Split Strategy |
|----------|--------------|-------------|----------------|
| `SnippetGeneratorTemplate.tsx` | 1,897 lines | < 500 lines | Split into 3-4 components: SnippetForm, SnippetPreview, SnippetLibrary, SnippetExport |
| `DocsGeneratorTemplate.tsx` | 991 lines | < 500 lines | Split into 2-3 components: DocsForm, DocsPreview, DocsExport |
| `DesignTokensReferenceTemplate.tsx` | 791 lines | < 500 lines | Split into 2 components: TokensGrid, TokensPreview |

### Splitting Strategy

**Pattern:** Extract sub-components and import into main template

**Before (1,897 lines):**
```tsx
// SnippetGeneratorTemplate.tsx (1,897 lines)
export const SnippetGeneratorTemplate = () => {
  // 500 lines of form logic
  // 600 lines of preview logic
  // 400 lines of library logic
  // 397 lines of export logic
  
  return (
    <div className="template-snippet-generator">
      {/* 1,897 lines of JSX */}
    </div>
  );
};
```

**After (4 files, 400-500 lines each):**

```tsx
// SnippetGeneratorTemplate.tsx (200 lines - orchestrator)
import { SnippetForm } from './components/SnippetForm';
import { SnippetPreview } from './components/SnippetPreview';
import { SnippetLibrary } from './components/SnippetLibrary';
import { SnippetExport } from './components/SnippetExport';

export const SnippetGeneratorTemplate = () => {
  return (
    <div className="template-snippet-generator">
      <SnippetForm />
      <SnippetPreview />
      <SnippetLibrary />
      <SnippetExport />
    </div>
  );
};

// components/SnippetForm.tsx (500 lines)
// components/SnippetPreview.tsx (600 lines)
// components/SnippetLibrary.tsx (400 lines)
// components/SnippetExport.tsx (397 lines)
```

**Benefits:**
- **Maintainability:** Each component focused on single responsibility
- **Build performance:** Vite can tree-shake unused exports
- **Memory:** Smaller files = lower memory usage during compilation
- **Parallelization:** Vite can compile components in parallel

---

## Suspense Boundaries (CRITICAL)

### The Blank Screen Problem

**Symptom:** Figma Make displays solid `#121212` background with no content

**Root Cause:** Lazy-loaded components fail to load (network timeout, chunk error, hydration error) without Suspense boundary → React suspends rendering → app falls back to Figma iframe default background (`#121212`)

**Solution:** Wrap ALL lazy routes in `<Suspense fallback={<RouteLoadingFallback />}>`

### RouteLoadingFallback Component

**Location:** `/src/app/components/ui/RouteLoadingFallback.tsx`

**Purpose:** User-friendly loading state while lazy chunks download

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

**Design System Compliance:**
- Uses `var(--background)` for page background
- Uses `var(--foreground)` for spinner color
- Uses `var(--spacing-*)` for padding
- Respects `prefers-reduced-motion` (static spinner if motion disabled)
- Accessible loading announcement for screen readers

### Suspense Best Practices

**DO:**
- ✅ Wrap every lazy route in `<Suspense>`
- ✅ Use `RouteLoadingFallback` for consistent UX
- ✅ Place Suspense at route level (not component level)
- ✅ Add accessible loading messages

**DON'T:**
- ❌ Forget Suspense (causes blank screen)
- ❌ Use generic loading spinners (breaks design system)
- ❌ Nest multiple Suspense boundaries (unnecessary complexity)
- ❌ Use `fallback={null}` (no visual feedback for slow connections)

---

## Build Configuration

### Vite Build Options

**Location:** `/vite.config.ts`

```tsx
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/app': path.resolve(__dirname, './src/app'),
      '@/styles': path.resolve(__dirname, './src/styles'),
    },
  },
  
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps for debugging
    sourcemap: true,
    
    // Chunk size warning threshold
    chunkSizeWarningLimit: 500, // 500 KB
    
    // Rollup options
    rollupOptions: {
      output: {
        // Manual chunking (see above)
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'patterns': [/* pattern paths */],
          'templates-core': [/* core template paths */],
        },
        
        // Asset file naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: 'entry/[name]-[hash].js',
      },
    },
    
    // Minification
    minify: 'esbuild',
    
    // Target modern browsers
    target: 'es2020',
  },
  
  // Development server
  server: {
    port: 3000,
    open: true,
  },
});
```

### Build Performance

**Build Time:**
- **Development:** ~2-3 seconds (hot reload)
- **Production:** ~15-20 seconds (full build + minification)

**Output Size:**
```
dist/
├── entry/
│   └── index-abc123.js         (10 KB - entry point)
├── chunks/
│   ├── react-vendor-def456.js  (145 KB - React vendor)
│   ├── patterns-ghi789.js      (72 KB - Pattern components)
│   ├── templates-core-jkl012.js (98 KB - Core templates)
│   ├── DevToolsTemplate-mno345.js (12 KB - Lazy)
│   ├── ProductArchiveTemplate-pqr678.js (8 KB - Lazy)
│   └── ... (75 lazy template chunks)
└── assets/
    ├── index-stu901.css        (187 KB - All CSS)
    ├── logo-vwx234.svg         (3 KB)
    └── ... (images, fonts)
```

---

## Optimization Strategies

### 1. Code Splitting by Route

**Strategy:** Split code by navigation routes, not by component type

**Benefits:**
- User only downloads code for current route
- Subsequent navigation loads new routes on-demand
- Shared dependencies (React, patterns) cached across routes

**Implementation:**
```tsx
// Lazy import
const DevToolsTemplate = lazy(() => 
  import('../components/templates/DevToolsTemplate').then(m => ({ 
    default: m.DevToolsTemplate 
  }))
);

// Route definition with Suspense
export function DevToolsRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DevToolsTemplate />
    </Suspense>
  );
}
```

### 2. Manual Vendor Chunking

**Strategy:** Extract stable dependencies (React, React Router) into separate vendor chunk

**Benefits:**
- Long-term caching (vendor chunk changes rarely)
- Parallel download (browser downloads vendor + template chunks simultaneously)
- Smaller template chunks (vendor code excluded)

**Implementation:**
```tsx
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router'],
}
```

### 3. Pattern Component Chunking

**Strategy:** Extract shared pattern components into separate chunk

**Benefits:**
- Shared across 30+ templates (download once, reuse everywhere)
- Reduces template chunk sizes (no duplicate pattern code)
- Cached independently (pattern chunk changes less frequently than templates)

**Implementation:**
```tsx
manualChunks: {
  'patterns': [
    './src/app/components/patterns/StatsGrid',
    './src/app/components/patterns/FeatureList',
    './src/app/components/patterns/ProcessTimeline',
  ],
}
```

### 4. CSS Optimization

**Strategy:** Consolidate CSS into modular base files

**Benefits:**
- 48-92% CSS reduction per template
- Single source of truth for shared patterns
- Better compression (consolidated CSS compresses better)

**Implementation:**
```css
/* Template CSS */
@import '../base/service-base.css'; /* Import shared structure */

/* ONLY unique overrides below */
.template-seo-service__hero { }
```

### 5. Tree Shaking

**Strategy:** Eliminate unused exports during build

**Requirements:**
- Use ES modules (`import`/`export`, not `require`)
- Avoid side effects in modules
- Use `sideEffects: false` in package.json

**Benefit:** 10-20% reduction in final bundle size

---

## Memory Limits & Constraints

### Figma Make Memory Constraints

**Platform Limits:**
- **Max file size:** ~2,000 lines (soft limit, causes performance issues beyond this)
- **Max bundle size:** ~1 MB total (compressed)
- **Max single chunk:** ~500 KB (compressed)

**Symptoms of Exceeding Limits:**
- Blank screen (`#121212` background)
- "Out of memory" errors in console
- Build timeouts (> 60 seconds)
- Hot reload failures

**Solutions:**
- Split large files (> 1,000 lines) into components
- Use lazy loading for non-critical routes
- Implement manual chunking (vendor, patterns, templates)
- Optimize CSS (modular base files)

### File Size Distribution

**Current Codebase (968 files):**
- **< 100 lines:** 412 files (42.6%) ✅
- **100-200 lines:** 287 files (29.6%) ✅
- **200-300 lines:** 140 files (14.5%) ✅
- **300-500 lines:** 76 files (7.8%) ⚠️
- **500-1000 lines:** 43 files (4.4%) 🟡
- **> 1000 lines:** 10 files (1.0%) 🔴

**Target Distribution:**
- **> 1000 lines:** 0 files (all split into components)
- **500-1000 lines:** < 20 files (monitor closely)
- **< 500 lines:** > 95% of files

---

## Testing & Validation

### Local Build Testing

**Step 1: Build Locally**
```bash
# Full production build
pnpm build

# Check bundle sizes
ls -lh dist/chunks/
```

**Step 2: Analyze Bundle**
```bash
# Install bundle analyzer
pnpm add -D rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
  ],
});

# Build and open analyzer
pnpm build
```

**Step 3: Test Lazy Loading**
```bash
# Serve production build
pnpm preview

# Open Network tab in browser DevTools
# Navigate to lazy route (e.g., /dev-tools)
# Verify lazy chunk loads (e.g., DevToolsTemplate-abc123.js)
```

### Performance Testing

**Lighthouse Audit:**
1. Build production bundle: `pnpm build`
2. Serve locally: `pnpm preview`
3. Open Chrome DevTools → Lighthouse
4. Run audit on key routes:
   - Homepage (`/`)
   - Services (`/services`)
   - Blog Index (`/insights`)
   - Single Post (`/insights/:slug`)
   - Dev Tools (`/dev-tools`)

**Target Scores:**
- Performance: > 90
- Accessibility: 100
- Best Practices: > 95
- SEO: 100

### Bundle Size Monitoring

**Check Bundle Sizes:**
```bash
# After each build
pnpm build

# Review output
dist/chunks/react-vendor-xxx.js     145 KB ✅
dist/chunks/patterns-xxx.js         72 KB ✅
dist/chunks/templates-core-xxx.js   98 KB ✅
dist/assets/index-xxx.css           187 KB ✅
```

**Warnings:**
- ⚠️ Any chunk > 500 KB (warning threshold)
- 🔴 Any chunk > 800 KB (critical - must split)
- ⚠️ Total bundle > 600 KB (target < 500 KB)

---

## Troubleshooting

### Blank Screen After Build

**Symptom:** Production build shows `#121212` background

**Causes:**
1. Missing Suspense boundary on lazy route
2. Lazy import path incorrect
3. Template export name mismatch
4. Chunk load failure (network error)

**Solutions:**
1. Verify Suspense wrapper in route-wrappers.tsx
2. Check lazy import path in lazy-imports.ts
3. Ensure export matches: `export const DevToolsTemplate` → `m.DevToolsTemplate`
4. Check Network tab for failed chunk requests

### Build Timeouts

**Symptom:** Build exceeds 60 seconds and times out

**Causes:**
1. Large template files (> 1,000 lines)
2. Excessive CSS duplication
3. Too many static imports

**Solutions:**
1. Split large templates into components
2. Extract common CSS to base files
3. Convert non-core templates to lazy imports

### Chunk Size Warnings

**Symptom:** Build shows "Chunk size exceeds 500 KB" warning

**Causes:**
1. Too many templates in single chunk
2. Vendor dependencies not extracted
3. Pattern components included in template chunk

**Solutions:**
1. Split chunk into smaller chunks (e.g., separate core from landing pages)
2. Add vendor dependencies to `manualChunks['react-vendor']`
3. Extract patterns to `manualChunks['patterns']`

---

## Related Documentation

- **[Route Architecture](../site-structure/routes.md)** - Modular route system and lazy loading
- **[CSS Architecture](../css/css-architecture.md)** - CSS optimization and base files
- **[Performance Standards](../PERFORMANCE-STANDARDS.md)** - Performance benchmarks and targets
- **[Template Guidelines](../templates/overview-templates.md)** - Template structure and patterns

---

**Last Updated:** March 10, 2026  
**Version:** 1.0.0  
**Maintained By:** LSX Design Systems Team
