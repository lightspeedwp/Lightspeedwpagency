# Data Structure Documentation

**Created:** March 10, 2026  
**Last Updated:** March 10, 2026  
**Purpose:** Document data file organization, size limits, and optimization strategies

---

## Overview

The LSX Design prototype uses a **centralized data system** where all mock data is organized in `/src/app/data/` for consistency, reusability, and easy maintenance. This mirrors how WordPress manages content through a database.

**Key Principles:**
1. **Single Source of Truth** - Data defined once, imported everywhere
2. **TypeScript Interfaces** - Type-safe data structures
3. **Modular Organization** - Split by context (services, blog, portfolio, FAQs)
4. **Size Limits** - Files > 500 lines should be split
5. **Helper Functions** - Utility functions for data access

---

## Data Directory Structure

```
/src/app/data/
├── index.ts                          # Main data barrel export
│
├── site-pages/                       # Site navigation & pages
│   ├── pages.ts                      # 883 lines - Main navigation data
│   └── route-map.ts                  # Route slug-to-path mapping
│
├── services/                         # Service data (modular)
│   ├── types.ts                      # Service type definitions
│   ├── landing.ts                    # Services landing page
│   ├── development.ts                # Development service
│   ├── design.ts                     # Design service
│   ├── performance.ts                # Performance service
│   ├── seo.ts                        # SEO service (413 lines)
│   ├── content.ts                    # Content service
│   ├── security.ts                   # Security service
│   ├── hosting.ts                    # Hosting service
│   ├── analytics.ts                  # Analytics service
│   ├── summaries.ts                  # 598 lines - Service summaries
│   └── pricing-timeline.ts           # 463 lines - Pricing data
│
├── faqs/                             # FAQ collections (modular)
│   ├── types.ts                      # FAQ type definitions
│   ├── index.ts                      # Barrel export
│   ├── homepage.ts                   # Homepage FAQs
│   ├── services.ts                   # Services FAQs
│   ├── solutions.ts                  # Solutions FAQs
│   ├── about.ts                      # About FAQs
│   ├── portfolio.ts                  # Portfolio FAQs
│   ├── blog.ts                       # Blog FAQs
│   ├── archives.ts                   # Archive FAQs
│   ├── contact.ts                    # Contact FAQs
│   ├── pricing.ts                    # Pricing FAQs
│   ├── testimonials.ts               # Testimonials FAQs
│   ├── media.ts                      # Media FAQs
│   ├── woocommerce.ts                # WooCommerce FAQs
│   ├── technical.ts                  # Technical FAQs
│   └── utility-pages.ts              # Utility page FAQs
│
├── ai-integrations/                  # AI integrations data (modular)
│   ├── types.ts                      # AI integration types
│   ├── landing.ts                    # AI landing page
│   ├── content-generation.ts         # Content generation AI
│   ├── seo.ts                        # SEO AI tools
│   ├── chatbots.ts                   # Chatbot integrations
│   └── analytics.ts                  # AI analytics
│
├── testimonials-consolidated.ts      # 895 lines - All testimonials
├── blog-posts.ts                     # 527 lines - Blog post data
├── portfolio-projects.ts             # 424 lines - Portfolio projects
├── component-docs-data.ts            # 589 lines - Component documentation
├── component-docs.ts                 # 562 lines - Component docs (legacy)
├── service-case-studies.ts           # 540 lines - Service case studies
├── archive-items.ts                  # 539 lines - Archive items
├── journey-stage-pages.ts            # 505 lines - Journey stage data
├── development-service-page.ts       # 454 lines - Development service data
├── why-choose-us.ts                  # 443 lines - Why choose us data
├── woocommerce.ts                    # 421 lines - WooCommerce data
├── comparisons.ts                    # 418 lines - Comparison data
├── blog-post-page.ts                 # 406 lines - Blog post page data
├── posts-formats.ts                  # 400 lines - Post format data
└── pricing.ts                        # 394 lines - Pricing data
```

---

## Data File Size Analysis

### Current State (27,612 Total Lines)

| Size Range | Count | Percentage | Status |
|------------|-------|------------|--------|
| **> 800 lines** | 2 files | 7.4% | 🔴 CRITICAL - Must split |
| **500-800 lines** | 7 files | 25.9% | 🟡 WARNING - Consider splitting |
| **300-500 lines** | 13 files | 48.1% | ⚠️ MONITOR - Watch for growth |
| **< 300 lines** | 5 files | 18.5% | ✅ OPTIMAL |

### Files Requiring Immediate Action (> 500 Lines)

| File | Lines | Action | Priority |
|------|-------|--------|----------|
| **testimonials-consolidated.ts** | 895 | Split by category (client/employee/video/slider) | 🔴 High |
| **site-pages/pages.ts** | 883 | Split by section (main-nav, footer-nav, systems, services) | 🔴 High |
| **services/summaries.ts** | 598 | Already modular ✅ - Monitor | 🟡 Medium |
| **component-docs-data.ts** | 589 | Consolidate with component-docs.ts (duplicate) | 🟡 Medium |
| **component-docs.ts** | 562 | Consolidate with component-docs-data.ts (duplicate) | 🟡 Medium |
| **service-case-studies.ts** | 540 | Split by service category | 🟡 Medium |
| **archive-items.ts** | 539 | Split by archive type (blog/portfolio/media) | 🟡 Medium |
| **blog-posts.ts** | 527 | Monitor - Just above threshold | ⚠️ Low |
| **journey-stage-pages.ts** | 505 | Monitor - Just above threshold | ⚠️ Low |

---

## Data Organization Patterns

### Pattern 1: Modular Data Structure (RECOMMENDED)

**Use Case:** Data with multiple logical categories (services, FAQs, AI integrations)

**Structure:**
```
/src/app/data/{category}/
├── types.ts          # TypeScript interfaces
├── index.ts          # Barrel export (re-exports all files)
├── category-a.ts     # Category A data
├── category-b.ts     # Category B data
└── category-c.ts     # Category C data
```

**Example: FAQs**
```typescript
// types.ts
export interface FAQ {
  question: string;
  answer: string;
}

export type FAQCollection = FAQ[];

// homepage.ts
import type { FAQCollection } from './types';

export const homepageFAQs: FAQCollection = [
  { question: '...', answer: '...' },
  // ...
];

// index.ts (barrel export)
export * from './types';
export * from './homepage';
export * from './services';
export * from './solutions';
// ... all category exports
```

**Benefits:**
- **Modularity:** Each file focuses on single context (50-150 lines)
- **Maintainability:** Easy to find and update specific data
- **Performance:** Only import what you need
- **Type Safety:** Shared types ensure consistency

### Pattern 2: Single File with Sections

**Use Case:** Data with few categories or closely related content

**Structure:**
```typescript
// testimonials-consolidated.ts

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */
export interface Testimonial { /* ... */ }

/* ═══════════════════════════════════════════
 * Client Testimonials
 * ═══════════════════════════════════════════ */
export const clientTestimonials: Testimonial[] = [/* ... */];

/* ═══════════════════════════════════════════
 * Employee Testimonials
 * ═══════════════════════════════════════════ */
export const employeeTestimonials: Testimonial[] = [/* ... */];

/* ═══════════════════════════════════════════
 * Helper Functions
 * ═══════════════════════════════════════════ */
export function getTestimonialBySlug(slug: string) { /* ... */ }
```

**Benefits:**
- **Simplicity:** Single file to maintain
- **Overview:** Easy to see all data in one place
- **Quick edits:** No need to navigate multiple files

**Limitations:**
- **Size:** Grows large quickly (> 500 lines)
- **Performance:** Imports entire file even if only need one section

### Pattern 3: Barrel Exports

**Use Case:** Consolidate exports from multiple files

**Structure:**
```typescript
// /src/app/data/index.ts

// Site pages
export * from './site-pages/pages';
export * from './site-pages/route-map';

// Services
export * from './services';

// FAQs
export * from './faqs';

// Content
export * from './blog-posts';
export * from './portfolio-projects';
export * from './testimonials-consolidated';
```

**Benefits:**
- **Single import point:** `import { homepageFAQs, blogPosts } from '@/app/data'`
- **Encapsulation:** Internal file structure hidden from consumers
- **Refactoring:** Can reorganize files without breaking imports

---

## WordPress Data Mapping

### How Data Maps to WordPress

In a real WordPress implementation, these TypeScript data files map to WordPress database tables:

| Data File | WordPress Equivalent |
|-----------|---------------------|
| `site-pages/pages.ts` | WordPress Pages + Navigation Menus |
| `portfolio-projects.ts` | Custom Post Type: `portfolio` with custom fields |
| `blog-posts.ts` | WordPress Posts (default post type) |
| `services/*.ts` | Custom Post Type: `service` with taxonomies |
| `faqs/*.ts` | Custom Post Type: `faq` with taxonomy for categories |
| `testimonials-consolidated.ts` | Custom Post Type: `testimonial` with format taxonomy |
| `woocommerce.ts` | WooCommerce Products + Meta |

### WordPress Data Structure Example

**TypeScript (Prototype):**
```typescript
export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  technologies: string[];
  featured_image: string;
  // ...
}
```

**WordPress (Production):**
```php
// Custom Post Type: portfolio
register_post_type('portfolio', [
  'public' => true,
  'label'  => 'Portfolio Projects',
  'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
]);

// Custom Fields (ACF or meta_box)
// - client (text)
// - industry (taxonomy)
// - technologies (taxonomy)
// - featured_image (image)
```

---

## Data File Splitting Strategy

### When to Split a Data File

**File Size Thresholds:**
- **< 300 lines:** Keep as-is ✅
- **300-500 lines:** Monitor, consider splitting if growing ⚠️
- **500-800 lines:** Should split 🟡
- **> 800 lines:** MUST split 🔴

**Logical Reasons to Split:**
1. **Multiple categories:** Services, FAQs, AI integrations
2. **Duplicate data:** Two files with similar content (consolidate OR split further)
3. **Performance:** Large files slow down import times
4. **Maintainability:** Hard to find specific data in 800+ line files

### Splitting Process

**Step 1: Identify Logical Categories**

Example: `testimonials-consolidated.ts` (895 lines)
- Client testimonials (~300 lines)
- Employee testimonials (~200 lines)
- Video testimonials (~150 lines)
- Slider testimonials (~100 lines)
- Featured testimonials (~145 lines)

**Step 2: Create Directory Structure**

```
/src/app/data/testimonials/
├── types.ts                  # Shared types
├── index.ts                  # Barrel export
├── client-testimonials.ts    # ~300 lines
├── employee-testimonials.ts  # ~200 lines
├── video-testimonials.ts     # ~150 lines
├── slider-testimonials.ts    # ~100 lines
└── featured-testimonials.ts  # ~145 lines
```

**Step 3: Move Data to Category Files**

```typescript
// types.ts
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  image?: string;
}

// client-testimonials.ts
import type { Testimonial } from './types';

export const clientTestimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    author: 'John Doe',
    role: 'CEO',
    company: 'Example Corp',
    content: 'Amazing service!',
    rating: 5,
  },
  // ... more client testimonials
];

// index.ts (barrel export)
export * from './types';
export * from './client-testimonials';
export * from './employee-testimonials';
export * from './video-testimonials';
export * from './slider-testimonials';
export * from './featured-testimonials';
```

**Step 4: Create Compatibility Shim**

```typescript
// testimonials-consolidated.ts (compatibility shim)
/**
 * COMPATIBILITY SHIM
 * Re-exports from modular testimonials structure
 * Maintains backward compatibility with existing imports
 */
export {
  type Testimonial,
  clientTestimonials,
  employeeTestimonials,
  videoTestimonials,
  sliderTestimonials,
  featuredTestimonials,
} from './testimonials';
```

**Step 5: Update Imports**

**Before:**
```typescript
import { clientTestimonials } from '@/app/data/testimonials-consolidated';
```

**After (Option A - Direct Import):**
```typescript
import { clientTestimonials } from '@/app/data/testimonials';
```

**After (Option B - Barrel Import):**
```typescript
import { clientTestimonials } from '@/app/data';
```

**Benefits:**
- **Zero breaking changes:** Compatibility shim maintains existing imports
- **Performance:** Import only what you need
- **Maintainability:** 5 files of 100-300 lines vs. 1 file of 895 lines

---

## Data File Best Practices

### TypeScript Types

**Always define interfaces:**
```typescript
// ❌ WRONG - No types
export const blogPosts = [
  { id: '1', title: 'Post 1', author: 'John' },
];

// ✅ CORRECT - Type-safe
export interface BlogPost {
  id: string;
  title: string;
  author: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  tags: string[];
  featured_image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Post 1',
    author: 'John',
    slug: 'post-1',
    excerpt: '...',
    content: '...',
    date: '2026-03-10',
    categories: ['WordPress'],
    tags: ['tutorial'],
    featured_image: '/images/post-1.jpg',
  },
];
```

### Helper Functions

**Provide utility functions for data access:**
```typescript
// Helper: Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper: Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.categories.includes(category));
}

// Helper: Get featured posts
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.featured)
    .slice(0, limit);
}
```

### Data Validation

**Use Zod or similar for runtime validation:**
```typescript
import { z } from 'zod';

// Schema
const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  author: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  excerpt: z.string(),
  content: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  categories: z.array(z.string()),
  tags: z.array(z.string()),
  featured_image: z.string().url(),
});

// Validate at import time
export const blogPosts = rawBlogPosts.map(post => 
  BlogPostSchema.parse(post)
);
```

### Default Values

**Provide sensible defaults:**
```typescript
export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  technologies: string[];
  featured_image: string;
  gallery?: string[];          // Optional
  testimonial?: Testimonial;   // Optional
  case_study_url?: string;     // Optional
}

// Default project (useful for testing)
export const defaultProject: PortfolioProject = {
  id: 'default-project',
  title: 'Sample Project',
  slug: 'sample-project',
  client: 'Sample Client',
  industry: 'Technology',
  technologies: ['WordPress', 'React'],
  featured_image: '/images/placeholder.jpg',
};
```

---

## Optimization Strategies

### 1. Lazy Data Loading

**Strategy:** Import data files only when needed (not at app startup)

**Before (Eager Import):**
```typescript
// App.tsx
import { blogPosts, portfolioProjects, testimonials } from '@/app/data';
// All data loaded immediately (27,612 lines!)
```

**After (Lazy Import):**
```typescript
// BlogIndexTemplate.tsx
import { blogPosts } from '@/app/data/blog-posts';
// Only blog data loaded (527 lines)

// PortfolioArchiveTemplate.tsx
import { portfolioProjects } from '@/app/data/portfolio-projects';
// Only portfolio data loaded (424 lines)
```

**Benefits:**
- Faster app startup (less data to parse)
- Lower memory usage (data loaded on-demand)
- Better code splitting (data bundled with templates)

### 2. Data Consolidation

**Strategy:** Merge duplicate or similar data files

**Example: Component Documentation**
- `component-docs-data.ts` (589 lines)
- `component-docs.ts` (562 lines)
- **Action:** Consolidate into single `component-documentation.ts`
- **Savings:** ~150 lines (eliminate duplication)

### 3. Data Compression

**Strategy:** Use more concise data structures

**Before (Verbose):**
```typescript
export const testimonials = [
  {
    id: 'testimonial-1',
    author: {
      name: 'John Doe',
      role: 'CEO',
      company: 'Example Corp',
    },
    content: {
      text: 'Amazing service!',
      rating: 5,
    },
    metadata: {
      date: '2026-03-10',
      featured: true,
    },
  },
];
```

**After (Concise):**
```typescript
export const testimonials = [
  {
    id: 'testimonial-1',
    author: 'John Doe',
    role: 'CEO',
    company: 'Example Corp',
    content: 'Amazing service!',
    rating: 5,
    date: '2026-03-10',
    featured: true,
  },
];
```

**Savings:** ~30-40% reduction in file size

### 4. JSON Data Files

**Strategy:** Move large data to JSON files, import as needed

**Before:**
```typescript
// blog-posts.ts (527 lines)
export const blogPosts: BlogPost[] = [/* 527 lines */];
```

**After:**
```typescript
// blog-posts.json (JSON data)
[
  { "id": "1", "title": "Post 1", /* ... */ },
  { "id": "2", "title": "Post 2", /* ... */ }
]

// blog-posts.ts (minimal)
import blogPostsData from './blog-posts.json';

export const blogPosts: BlogPost[] = blogPostsData;
```

**Benefits:**
- **Parsing:** JSON parsed faster than TypeScript
- **Compression:** JSON compresses better
- **Build time:** Faster TypeScript compilation

---

## Splitting Priority Matrix

### Priority 1: IMMEDIATE (> 800 Lines)

| File | Lines | Split Strategy | Estimated Savings |
|------|-------|----------------|-------------------|
| **testimonials-consolidated.ts** | 895 | Split by category (client/employee/video/slider/featured) | ~100 lines (eliminate duplication) |
| **site-pages/pages.ts** | 883 | Split by section (main-nav/footer-nav/systems/services) | ~150 lines (eliminate duplication) |

**Timeline:** Complete within 1 week

### Priority 2: HIGH (600-800 Lines)

| File | Lines | Split Strategy | Estimated Savings |
|------|-------|----------------|-------------------|
| **services/summaries.ts** | 598 | Already modular ✅ - Monitor for growth | N/A |
| **component-docs-data.ts** | 589 | Consolidate with component-docs.ts | ~150 lines |
| **component-docs.ts** | 562 | Consolidate with component-docs-data.ts | (see above) |

**Timeline:** Complete within 2 weeks

### Priority 3: MEDIUM (500-600 Lines)

| File | Lines | Split Strategy | Estimated Savings |
|------|-------|----------------|-------------------|
| **service-case-studies.ts** | 540 | Split by service category | ~80 lines |
| **archive-items.ts** | 539 | Split by archive type | ~70 lines |
| **blog-posts.ts** | 527 | Monitor - Just above threshold | N/A |
| **journey-stage-pages.ts** | 505 | Monitor - Just above threshold | N/A |

**Timeline:** Complete within 1 month

---

## Related Documentation

- **[Build Optimization](../build/build-optimization.md)** - Code splitting and bundle optimization
- **[Route Architecture](../site-structure/routes.md)** - Route organization and lazy loading
- **[CSS Architecture](../css/css-architecture.md)** - CSS modularization strategies
- **[Memory Optimization](../../reports/2026-03/memory-reduction-audit-march-5.md)** - Memory reduction audit report

---

**Last Updated:** March 10, 2026  
**Version:** 1.0.0  
**Maintained By:** LSX Design Systems Team
