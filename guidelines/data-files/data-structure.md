# Data Structure — Overview & Directory

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [data-files.md](../data-files.md)  

---

## Overview

The LSX Design prototype uses a **centralized data system** where all mock data is organized in `/src/app/data/` for consistency, reusability, and easy maintenance. This mirrors how WordPress manages content through a database.

**Key Principles:**
1. **Single Source of Truth** — Data defined once, imported everywhere
2. **TypeScript Interfaces** — Type-safe data structures
3. **Modular Organization** — Split by context (services, blog, portfolio, FAQs)
4. **Size Limits** — Files > 500 lines should be split
5. **Helper Functions** — Utility functions for data access

---

## Quick Reference: Core Data Files

### `pages.ts` — Site Navigation & Page Metadata
**Location:** `/src/app/data/site-pages/pages.ts` (883 lines)

**Purpose:** Complete site structure with all pages and URLs

**Contents:**
- Navigation menus (main navigation, footer navigation)
- Helper functions: `getPageBySlug()`, `getPageUrl()`, `getPageTitle()`

**Usage:**
```tsx
import { mainNavigation, footerNavigation } from '../../data/pages';
```

**WordPress Mapping:** WordPress Pages & Navigation Menus

---

### `portfolio.ts` — Portfolio Projects & Case Studies
**Location:** `/src/app/data/portfolio-projects.ts` (424 lines)

**Purpose:** Portfolio project data with full case study details

**Contents:**
- 6 detailed portfolio projects with full case study data
- Industries, categories, technologies
- Client testimonials and project results
- Helper functions: `getProjectBySlug()`, `getProjectsByIndustry()`

**Usage:**
```tsx
import { portfolioProjects, featuredProjects } from '../../data/portfolio';
```

**WordPress Mapping:** Custom Post Type: `portfolio` with custom fields

---

### `posts.ts` — Blog Posts & Authors
**Location:** `/src/app/data/blog-posts.ts` (527 lines)

**Purpose:** Blog post data with authors and metadata

**Contents:**
- 12 blog posts with authors, categories, tags
- Reading times and featured images
- Author profiles and bios
- Helper functions: `getPostBySlug()`, `getPostsByCategory()`

**Usage:**
```tsx
import { blogPosts, featuredPosts, blogCategories } from '../../data/posts';
```

**WordPress Mapping:** WordPress Posts (default post type)

---

### `faqs.ts` — FAQ Collections
**Location:** `/src/app/data/faqs/` (modular structure)

**Purpose:** FAQ collections for different pages/contexts

**Contents:**
- 13 FAQ collections for different pages/contexts
- `homepageFAQs`, `servicesFAQs`, `aboutFAQs`, `contactFAQs`, etc.

**Usage:**
```tsx
import { servicesFAQs } from '../../data/faqs';
<FAQSection faqs={servicesFAQs} />
```

**WordPress Mapping:** Custom Post Type: `faq` with taxonomy for categories

---

## System Benefits

1. **Single Source of Truth:** Update data once, reflects everywhere
2. **Type Safety:** TypeScript interfaces ensure data consistency
3. **Reusability:** Import same data across multiple templates
4. **Maintainability:** Easy to update without touching component code
5. **WordPress-Ready:** Structure mirrors WordPress data models

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
│   ├── types.ts, index.ts            # Types and barrel export
│   ├── homepage.ts ... utility-pages.ts  # 13 FAQ collections
│
├── ai-integrations/                  # AI integrations data (modular)
│   ├── types.ts, landing.ts          # Types and landing page
│   ├── content-generation.ts ... analytics.ts  # AI category files
│
├── testimonials-consolidated.ts      # 895 lines
├── blog-posts.ts                     # 527 lines
├── portfolio-projects.ts             # 424 lines
├── component-docs-data.ts            # 589 lines
├── component-docs.ts                 # 562 lines
├── service-case-studies.ts           # 540 lines
├── archive-items.ts                  # 539 lines
├── journey-stage-pages.ts            # 505 lines
└── ... (additional data files)
```

---

## Data File Size Analysis

### Current State (27,612 Total Lines)

| Size Range | Count | Status |
|------------|-------|--------|
| **> 800 lines** | 2 files | CRITICAL — Must split |
| **500-800 lines** | 7 files | WARNING — Consider splitting |
| **300-500 lines** | 13 files | MONITOR — Watch for growth |
| **< 300 lines** | 5 files | OPTIMAL |

### Files Requiring Immediate Action (> 500 Lines)

| File | Lines | Action | Priority |
|------|-------|--------|----------|
| **testimonials-consolidated.ts** | 895 | Split by category | High |
| **site-pages/pages.ts** | 883 | Split by section | High |
| **services/summaries.ts** | 598 | Already modular — Monitor | Medium |
| **component-docs-data.ts** | 589 | Consolidate with component-docs.ts | Medium |
| **component-docs.ts** | 562 | Consolidate with component-docs-data.ts | Medium |
| **service-case-studies.ts** | 540 | Split by service category | Medium |
| **archive-items.ts** | 539 | Split by archive type | Medium |

---

**See also:** [data-patterns.md](./data-patterns.md) | [data-best-practices.md](./data-best-practices.md)
