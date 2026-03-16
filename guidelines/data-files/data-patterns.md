# Data Structure — Patterns, WordPress Mapping & Splitting

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [data-files.md](../data-files.md)  

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
];

// index.ts (barrel export)
export * from './types';
export * from './homepage';
export * from './services';
export * from './solutions';
```

**Benefits:**
- **Modularity:** Each file focuses on single context (50-150 lines)
- **Maintainability:** Easy to find and update specific data
- **Performance:** Only import what you need
- **Type Safety:** Shared types ensure consistency

### Pattern 2: Single File with Sections

**Use Case:** Data with few categories or closely related content

```typescript
// testimonials-consolidated.ts

/* Types */
export interface Testimonial { /* ... */ }

/* Client Testimonials */
export const clientTestimonials: Testimonial[] = [/* ... */];

/* Employee Testimonials */
export const employeeTestimonials: Testimonial[] = [/* ... */];

/* Helper Functions */
export function getTestimonialBySlug(slug: string) { /* ... */ }
```

**Limitations:**
- Grows large quickly (> 500 lines)
- Imports entire file even if only need one section

### Pattern 3: Barrel Exports

**Use Case:** Consolidate exports from multiple files

```typescript
// /src/app/data/index.ts
export * from './site-pages/pages';
export * from './site-pages/route-map';
export * from './services';
export * from './faqs';
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
}
```

**WordPress (Production):**
```php
register_post_type('portfolio', [
  'public' => true,
  'label'  => 'Portfolio Projects',
  'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
]);

// Custom Fields (ACF or meta_box)
// - client (text), industry (taxonomy), technologies (taxonomy)
```

---

## Data File Splitting Strategy

### When to Split a Data File

**File Size Thresholds:**
- **< 300 lines:** Keep as-is
- **300-500 lines:** Monitor, consider splitting if growing
- **500-800 lines:** Should split
- **> 800 lines:** MUST split

**Logical Reasons to Split:**
1. **Multiple categories:** Services, FAQs, AI integrations
2. **Duplicate data:** Two files with similar content
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
];

// index.ts (barrel export)
export * from './types';
export * from './client-testimonials';
export * from './employee-testimonials';
export * from './video-testimonials';
```

**Step 4: Create Compatibility Shim**

```typescript
// testimonials-consolidated.ts (compatibility shim)
export {
  type Testimonial,
  clientTestimonials,
  employeeTestimonials,
  videoTestimonials,
  sliderTestimonials,
  featuredTestimonials,
} from './testimonials';
```

**Benefits:**
- Zero breaking changes via compatibility shim
- Performance: Import only what you need
- Maintainability: 5 files of 100-300 lines vs. 1 file of 895 lines

---

**See also:** [data-structure.md](./data-structure.md) | [data-best-practices.md](./data-best-practices.md)
