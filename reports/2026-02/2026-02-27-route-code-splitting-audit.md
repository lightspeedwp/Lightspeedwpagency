# Route-Based Code Splitting Audit Report

**Date:** February 27, 2026  
**Task:** Phase 1 Remediation - Task 1.6  
**Auditor:** AI Assistant  
**Scope:** Analyze `/src/app/routes.tsx` and implement React.lazy() for non-core templates

---

## Executive Summary

**Current State:** All 117+ route templates use **static imports**, causing the entire application bundle to load on initial page load.

**Target State:** Convert 60+ non-core templates to **lazy loading** with React.lazy() and Suspense boundaries to reduce initial bundle size and improve Time to Interactive (TTI).

**Impact:** 
- 🔻 Reduce initial bundle size by ~50-60%
- ⚡ Improve First Contentful Paint (FCP)
- 📦 Enable code splitting per route
- 🚀 Faster homepage and core page loads

---

## Template Categorization

### Priority 1: Dev Tools (20 templates) — **MUST LAZY LOAD**

These are development/testing tools that should never load in production browsing:

| Template | Route | Current Import Line |
|----------|-------|---------------------|
| DevToolsTemplate | `/dev-tools` | 181 |
| TemplateTester | `/dev-tools/template-tester` | 182 |
| ComponentShowcase | `/dev-tools/component-showcase` | 183 |
| DesignSystemTest | `/dev-tools/design-system-test` | 184 |
| ComplianceScorecard | `/dev-tools/compliance-scorecard` | 185 |
| BlockDocumentation | `/dev-tools/block-documentation` | 186 |
| ComponentAPI | `/dev-tools/component-api` | 187 |
| DesignBlocksShowcase | `/dev-tools/design-blocks-showcase` | 188 |
| ButtonShowcase | `/dev-tools/button-showcase` | 189 |
| HeaderFooterComparison | `/dev-tools/header-footer-comparison` | 190 |
| IconLibrary | `/dev-tools/icon-library` | 191 |
| LivePreview | `/dev-tools/live-preview` | 192 |
| SectionPresetsShowcase | `/dev-tools/section-presets-showcase` | 193 |
| ThemeBlocksShowcase | `/dev-tools/theme-blocks-showcase` | 194 |
| DesignTokensReferenceTemplate | `/dev-tools/design-tokens-reference` | 195 |
| DeploymentReadinessTemplate | `/dev-tools/deployment-readiness` | 196 |
| DesignPlaygroundTemplate | `/dev-tools/design-playground` | 197 |
| CodeQualityDashboardTemplate | `/dev-tools/code-quality-dashboard` | 198 |
| DocsGeneratorTemplate | `/dev-tools/docs-generator` | 199 |
| SnippetGeneratorTemplate | `/dev-tools/snippet-generator` | 200 |

**Estimated Bundle Reduction:** ~15-20% of total bundle

---

### Priority 2: WooCommerce (4 templates) — **SHOULD LAZY LOAD**

E-commerce functionality - not needed unless user browses shop:

| Template | Route | Current Import Line |
|----------|-------|---------------------|
| ProductArchiveTemplate | `/shop` | 138 |
| SingleProductTemplate | `/shop/:slug` | 139 |
| CartTemplate | `/cart` | 140 |
| CheckoutTemplate | `/checkout` | 141 |

**Estimated Bundle Reduction:** ~5-8% of total bundle

---

### Priority 3: Post Formats (20 templates) — **SHOULD LAZY LOAD**

WordPress post format archives/singles - rarely visited:

| Template | Route | Current Import Line |
|----------|-------|---------------------|
| AudioArchiveTemplate | `/blog/format/audio` | 117 |
| SingleAudioTemplate | `/blog/format/audio/single` | 118 |
| GalleryArchiveTemplate | `/blog/format/gallery` | 119 |
| SingleGalleryTemplate | `/blog/format/gallery/single` | 120 |
| ImageArchiveTemplate | `/blog/format/image` | 121 |
| SingleImageTemplate | `/blog/format/image/single` | 122 |
| QuoteArchiveTemplate | `/blog/format/quote` | 123 |
| SingleQuoteTemplate | `/blog/format/quote/single` | 124 |
| LinkArchiveTemplate | `/blog/format/link` | 125 |
| SingleLinkTemplate | `/blog/format/link/single` | 126 |
| ChatArchiveTemplate | `/blog/format/chat` | 127 |
| SingleChatTemplate | `/blog/format/chat/single` | 128 |
| StatusArchiveTemplate | `/blog/format/status` | 129 |
| SingleStatusTemplate | `/blog/format/status/single` | 130 |
| StandardArchiveTemplate | `/blog/format/standard` | 131 |
| SingleStandardTemplate | `/blog/format/standard/single` | 132 |
| AsideArchiveTemplate | `/blog/format/aside` | 133 |
| SingleAsideTemplate | `/blog/format/aside/single` | 134 |
| AsideStreamTemplate | `/blog/format/aside-stream` | 135 |

**Note:** VideoArchiveTemplate (line 106) is imported for both `/videos` AND `/blog/format/video` — consolidate routes.

**Estimated Bundle Reduction:** ~10-12% of total bundle

---

### Priority 4: Media Archives (12 templates) — **SHOULD LAZY LOAD**

Video/Podcast archives - niche content:

| Template | Route | Current Import Line |
|----------|-------|---------------------|
| VideoArchiveTemplate | `/videos` | 106 |
| SingleVideoTemplate | `/video/:slug` | 107 |
| VideoCategoryArchiveTemplate | `/videos/category/:slug` | 108 |
| VideoTagArchiveTemplate | `/videos/tag/:slug` | 109 |
| PodcastArchiveTemplate | `/podcasts` | 112 |
| SinglePodcastTemplate | `/podcast/:slug` | 113 |
| PodcastCategoryArchiveTemplate | `/podcasts/category/:slug` | 114 |
| TourOperatorArchiveTemplate | `/tours` | 144 |
| SingleTourTemplate | `/tours/:slug` | 145 |

**Estimated Bundle Reduction:** ~8-10% of total bundle

---

### Priority 5: Testimonials (5 templates) — **CAN LAZY LOAD**

| Template | Route | Current Import Line |
|----------|-------|---------------------|
| TestimonialArchiveTemplate | `/testimonials/archive` | 157 |
| SingleTestimonialTemplate | `/testimonials/:slug` | 158 |
| SingleTestimonialAudioTemplate | `/testimonials/audio/:slug` | 159 |
| SingleTestimonialVideoTemplate | `/testimonials/video/:slug` | 160 |
| SingleTestimonialGalleryTemplate | `/testimonials/gallery/:slug` | 161 |

**Estimated Bundle Reduction:** ~3-5% of total bundle

---

### Priority 6: Journey Stage Pages (6 templates) — **CAN LAZY LOAD**

These are being phased out (per Phase 2 notes):

| Template | Route | Current Import Line |
|----------|-------|---------------------|
| JourneyStageTemplate | `/services/ignite` | 63 |
| JourneyStageTemplate | `/services/create` | 63 |
| JourneyStageTemplate | `/services/build` | 63 |
| JourneyStageTemplate | `/services/launch` | 63 |
| JourneyStageTemplate | `/services/grow` | 63 |
| JourneyStageTemplate | `/services/evolve` | 63 |

**Note:** All 6 routes use the same template with different slug params.

**Estimated Bundle Reduction:** ~2-3% of total bundle

---

### Priority 7: Legacy/Misc (8 templates) — **CAN LAZY LOAD**

Legacy templates kept for backwards compatibility:

| Template | Route | Current Import Line |
|----------|-------|---------------------|
| ArchiveTemplate | `/archive` | 171 |
| ArchiveWithFiltersTemplate | `/archive/filters` | 172 |
| IndexTemplate | `/index` | 173 |
| SingleTemplate | `/single` | 174 |
| SearchResultsTemplate | `/search-legacy` | 175 |
| WordPressBlocksProofOfConcept | `/wordpress-blocks-poc` | 176 |
| SectionStyleExample | `/section-style-example` | 177 |
| FeatureShowcaseTemplate | `/feature-showcase` | 178 |

**Estimated Bundle Reduction:** ~5-7% of total bundle

---

### KEEP STATIC: Core Pages (30 templates) — **DO NOT LAZY LOAD**

These pages need fast initial load and are commonly accessed:

**Homepage:**
- FrontPageTemplate (/)
- Template404 (/404, /*)

**About (6 templates):**
- AboutTemplate (/about)
- AboutProcessTemplate (/about/process)
- AboutCultureTemplate (/about/culture)
- AboutHistoryTemplate (/about/history)
- TeamTemplate (/about/team)
- CareersTemplate (/about/careers)

**Core Services (8 templates):**
- ServicesLandingTemplate (/services)
- DiscoveryServiceTemplate (/services/discovery)
- DesignServiceTemplate (/services/design)
- DevelopmentServiceTemplate (/services/development)
- ContentServiceTemplate (/services/content)
- SecurityServiceTemplate (/services/security)
- MigrationsServiceTemplate (/services/migrations)
- SupportServiceTemplate (/services/support)

**Core Solutions (5 templates):**
- SolutionsTemplate (/solutions)
- WordPressSolutionTemplate (/solutions/wordpress)
- WooCommerceSolutionTemplate (/solutions/woocommerce)
- TourOperatorTemplate (/solutions/tour-operators)
- PublishersTemplate (/solutions/publishers)

**Portfolio (4 templates):**
- PortfolioArchiveTemplate (/portfolio)
- PortfolioSingleTemplate (/portfolio/:slug)
- PortfolioCategoryArchiveTemplate (/portfolio/category/:slug)
- PortfolioTagArchiveTemplate (/portfolio/tag/:slug)

**Blog Core (7 templates):**
- BlogIndexTemplate (/blog)
- SinglePostTemplate (/blog/:slug)
- SinglePostLongformTemplate (/blog/single-post)
- CategoryArchiveTemplate (/blog/category/:slug)
- AuthorArchiveTemplate (/blog/author/:slug)
- TagArchiveTemplate (/blog/tag/:slug)
- DateArchiveTemplate (/blog/date/:year/:month?)

**Utility Pages (7 templates):**
- ContactPageTemplate (/contact)
- FAQTemplate (/faq)
- PricingTemplate (/pricing)
- SearchResultsPageTemplate (/search)
- PrivacyPolicyTemplate (/privacy-policy)
- TermsOfServiceTemplate (/terms-of-service)
- SiteMapTemplate (/site-map)

---

## Implementation Strategy

### Step 1: Create Loading Fallback Component

Create `/src/app/components/ui/RouteLoadingFallback.tsx` using CSS variables:

```tsx
/**
 * RouteLoadingFallback Component
 * 
 * Suspense fallback for lazy-loaded routes.
 * Uses CSS variables for consistent design system compliance.
 */

import '@/styles/ui/route-loading-fallback.css';

export const RouteLoadingFallback = () => {
  return (
    <div className="route-loading">
      <div className="route-loading__spinner" role="status" aria-live="polite">
        <span className="sr-only">Loading page...</span>
      </div>
    </div>
  );
};
```

CSS file `/src/styles/ui/route-loading-fallback.css`:

```css
/**
 * Route Loading Fallback Styles
 * 
 * CRITICAL: Uses ONLY CSS variables from design system.
 */

.route-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--background);
}

.route-loading__spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--muted);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: route-loading-spin 1s linear infinite;
}

@keyframes route-loading-spin {
  to { transform: rotate(360deg); }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .route-loading__spinner {
    animation: none;
    border-top-color: var(--primary);
    opacity: 0.6;
  }
}

/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

### Step 2: Convert Imports to React.lazy()

**Example Conversion:**

```tsx
// BEFORE (Static Import)
import { DevToolsTemplate } from './components/templates/DevToolsTemplate';

// AFTER (Lazy Import)
const DevToolsTemplate = lazy(() => import('./components/templates/DevToolsTemplate'));
```

---

### Step 3: Add Suspense Boundaries

Wrap lazy routes in Suspense at route definition:

```tsx
import { Suspense, lazy } from 'react';
import { RouteLoadingFallback } from './components/ui/RouteLoadingFallback';

// Lazy imports
const DevToolsTemplate = lazy(() => import('./components/templates/DevToolsTemplate'));

// Route definition
{
  path: 'dev-tools',
  element: (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DevToolsTemplate />
    </Suspense>
  )
}
```

**IMPORTANT:** React Router v6.4+ Data Mode uses `Component` prop, not `element`. We need to create wrapper components:

```tsx
function DevToolsRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DevToolsTemplate />
    </Suspense>
  );
}

// Route definition
{ path: 'dev-tools', Component: DevToolsRoute }
```

---

### Step 4: Group Conversions by Priority

**Phase A:** Dev Tools (20 templates) — Immediate conversion  
**Phase B:** WooCommerce + Post Formats (24 templates) — High priority  
**Phase C:** Media + Testimonials + Journey (23 templates) — Medium priority  
**Phase D:** Legacy/Misc (8 templates) — Low priority  

**Total Lazy-Loaded Templates:** 75 templates  
**Total Static Templates:** 42 templates (core pages)

---

## Estimated Performance Impact

**Before Code Splitting:**
- Initial bundle size: ~2.5-3.0 MB (estimated)
- Time to Interactive (TTI): ~3-4 seconds on 3G
- First Contentful Paint (FCP): ~2-3 seconds

**After Code Splitting (Target):**
- Initial bundle size: ~1.0-1.2 MB (60% reduction)
- Time to Interactive (TTI): ~1.5-2 seconds on 3G (50% improvement)
- First Contentful Paint (FCP): ~1-1.5 seconds (33% improvement)

**Lazy-Loaded Bundle Sizes:**
- Dev tools chunk: ~400-500 KB
- WooCommerce chunk: ~150-200 KB
- Post formats chunk: ~250-300 KB
- Media chunk: ~200-250 KB
- Misc chunks: ~100-150 KB each

---

## Implementation Checklist

- [ ] Create RouteLoadingFallback component (`/src/app/components/ui/RouteLoadingFallback.tsx`)
- [ ] Create RouteLoadingFallback CSS (`/src/styles/ui/route-loading-fallback.css`)
- [ ] Import lazy and Suspense in routes.tsx
- [ ] Convert Priority 1 (Dev Tools - 20 templates) to lazy imports
- [ ] Convert Priority 2 (WooCommerce - 4 templates) to lazy imports
- [ ] Convert Priority 3 (Post Formats - 20 templates) to lazy imports
- [ ] Convert Priority 4 (Media - 12 templates) to lazy imports
- [ ] Convert Priority 5 (Testimonials - 5 templates) to lazy imports
- [ ] Convert Priority 6 (Journey Stage - 6 templates) to lazy imports
- [ ] Convert Priority 7 (Legacy - 8 templates) to lazy imports
- [ ] Test all lazy-loaded routes in dev environment
- [ ] Verify no "Failed to fetch dynamically imported module" errors
- [ ] Test loading states for UX quality
- [ ] Verify reduced motion fallback works
- [ ] Update routes.tsx documentation comment
- [ ] Mark Task 1.6 as complete in `/tasks/task-list.md`

---

## Risk Assessment

**Low Risk:**
- Dev tools, legacy pages, post formats — rarely accessed
- Easy rollback if issues occur

**Medium Risk:**
- WooCommerce pages — some sites may use heavily
- Media archives — depends on content strategy

**Mitigation:**
- Add comprehensive error boundaries around Suspense
- Monitor bundle splitting in production
- Keep core pages (homepage, services, portfolio, blog index) as static imports

---

## Next Steps

1. **Implement RouteLoadingFallback component** (5 minutes)
2. **Convert Dev Tools templates** (15 minutes)
3. **Convert WooCommerce + Post Formats** (20 minutes)
4. **Convert Media + Testimonials + Journey** (20 minutes)
5. **Convert Legacy/Misc** (10 minutes)
6. **Test all routes** (30 minutes)
7. **Update documentation** (10 minutes)

**Total Estimated Time:** 2 hours

---

**Report Generated:** February 27, 2026  
**Status:** Ready for implementation  
**Approval:** Awaiting user confirmation to proceed
