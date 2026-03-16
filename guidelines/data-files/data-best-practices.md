# Data Structure — Best Practices & Optimization

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [data-files.md](../data-files.md)  

---

## Data File Best Practices

### TypeScript Types

**Always define interfaces:**
```typescript
// WRONG - No types
export const blogPosts = [
  { id: '1', title: 'Post 1', author: 'John' },
];

// CORRECT - Type-safe
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
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.categories.includes(category));
}

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
    author: { name: 'John Doe', role: 'CEO', company: 'Example Corp' },
    content: { text: 'Amazing service!', rating: 5 },
    metadata: { date: '2026-03-10', featured: true },
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

```typescript
// blog-posts.json (JSON data)
[
  { "id": "1", "title": "Post 1" }
]

// blog-posts.ts (minimal)
import blogPostsData from './blog-posts.json';
export const blogPosts: BlogPost[] = blogPostsData;
```

**Benefits:** JSON parsed faster, compresses better, faster compilation

---

## Splitting Priority Matrix

### Priority 1: IMMEDIATE (> 800 Lines)

| File | Lines | Split Strategy |
|------|-------|----------------|
| **testimonials-consolidated.ts** | 895 | Split by category (client/employee/video/slider/featured) |
| **site-pages/pages.ts** | 883 | Split by section (main-nav/footer-nav/systems/services) |

### Priority 2: HIGH (600-800 Lines)

| File | Lines | Split Strategy |
|------|-------|----------------|
| **services/summaries.ts** | 598 | Already modular — Monitor |
| **component-docs-data.ts** | 589 | Consolidate with component-docs.ts |
| **component-docs.ts** | 562 | Consolidate with component-docs-data.ts |

### Priority 3: MEDIUM (500-600 Lines)

| File | Lines | Split Strategy |
|------|-------|----------------|
| **service-case-studies.ts** | 540 | Split by service category |
| **archive-items.ts** | 539 | Split by archive type |
| **blog-posts.ts** | 527 | Monitor |
| **journey-stage-pages.ts** | 505 | Monitor |

---

## Related Documentation

- **[Build Rules](../build-rules.md)** — File size limits and splitting rules
- **[Routes](../routes.md)** — Route organization and lazy loading
- **[WordPress Mapping](../wordpress-mapping.md)** — How data maps to WordPress

---

**Last Updated:** March 15, 2026  
**Total Data Lines:** 27,612  
**Maintained By:** LSX Design Systems Team

---

**See also:** [data-structure.md](./data-structure.md) | [data-patterns.md](./data-patterns.md)
