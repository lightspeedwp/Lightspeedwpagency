# Optimise Data — File Consolidation & Type Safety

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise data`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 30-45 minutes

---

## Purpose

Optimize data file architecture by consolidating duplicate data exports, splitting oversized files by category, removing orphaned data, adding TypeScript interfaces, and ensuring consistent naming conventions.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope (6 Areas)

### 1. Consolidate Duplicate Data Files

**Scan `/src/app/data/` for duplicate data exports:**

| Duplicate Set | Files | Total Lines | Action |
|---|---|---|---|
| **Testimonials** | `testimonials.ts`, `testimonials-extended.ts`, `testimonials-enhanced.ts` | 896 | Merge into single `testimonials.ts` |
| **FAQs** | `faqs.ts`, `faqs-extended.ts` | 1,587 | Merge or split by page context |
| **Pages** | `pages.ts`, `site-pages.ts`, `site-pages/pages.ts` | 979 | Clarify canonical source, delete duplicates |
| **Hosting** | `hosting.ts`, `hosting-page.ts` | 438 | Merge into single `hosting.ts` |
| **Why Choose Us** | `why-choose-us.ts`, `why-choose-us-page.ts` | 440 | Merge into single `why-choose-us.ts` |

**Consolidation Strategy:**

```typescript
// Before: 3 separate files
// testimonials.ts (200 lines)
// testimonials-extended.ts (350 lines)
// testimonials-enhanced.ts (346 lines)

// After: Single consolidated file
// testimonials.ts (896 lines total, or split by category if > 500)
export const testimonials: Testimonial[] = [
  // All testimonials merged
];

// If total > 500 lines, split by category:
// /data/testimonials/index.ts (barrel file)
// /data/testimonials/homepage.ts
// /data/testimonials/services.ts
// /data/testimonials/solutions.ts
```

**Estimated Savings:** ~3,000 lines through consolidation

---

### 2. Split Data Files > 500 Lines

**Scan for:** Data files exceeding threshold

**Splitting Strategy by Page Context:**

```typescript
// Before: /data/faqs.ts (1,587 lines)
export const allFAQs = [...all FAQs];

// After: Split by page context
/data/faqs/
  ├── index.ts          // Barrel file, exports all
  ├── homepage.ts       // Homepage FAQs
  ├── services.ts       // Services FAQs
  ├── solutions.ts      // Solutions FAQs
  ├── general.ts        // General FAQs
  └── technical.ts      // Technical FAQs
```

**Splitting Strategy by Category:**

```typescript
// Before: /data/stats.ts (large file)

// After: Split by category
/data/stats/
  ├── index.ts          // Barrel exports
  ├── company.ts        // Company stats
  ├── performance.ts    // Performance stats
  ├── services.ts       // Service stats
  └── clients.ts        // Client stats
```

---

### 3. Remove Orphaned Data Exports

**Scan for:**
- Data exported but never imported anywhere
- Unused TypeScript interfaces
- Dead data structures

**Action:**
1. List all exports from `/src/app/data/`
2. Search codebase for imports of each export
3. If export never imported, mark as orphaned
4. Review orphaned exports (may be planned for future use)
5. Archive or delete confirmed orphans

**Example:**

```typescript
// Orphaned export (never imported)
export const oldLegacyData = {
  // ... data
};

// Keep only active exports
export const activeServiceData = {
  // ... used in ServiceTemplate
};
```

---

### 4. Add TypeScript Interfaces

**Scan for:** Data files without proper TypeScript interfaces

**Action:**
1. Create interface definitions for all data structures
2. Export interfaces alongside data
3. Use interfaces in component props

**Example:**

```typescript
// Before: No type safety
export const services = [
  { title: "Web Design", slug: "web-design" },
  // ... more services
];

// After: With TypeScript interface
export interface Service {
  title: string;
  slug: string;
  description?: string;
  icon?: string;
  features?: string[];
}

export const services: Service[] = [
  { title: "Web Design", slug: "web-design" },
  // ... type-safe data
];
```

**Create shared types file:**

```typescript
// /src/app/data/types.ts
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
}

// ... all data interfaces
```

---

### 5. Ensure Consistent Naming Conventions

**Scan for:** Inconsistent naming across data files

**Naming Standards:**

```typescript
// ✅ Correct naming patterns
export const services: Service[];           // Plural, lowercase
export const testimonials: Testimonial[];   // Plural, lowercase
export const faqs: FAQ[];                   // Plural, lowercase
export const statsData: StatsData;          // Descriptive suffix

// ❌ Inconsistent patterns to fix
export const Services: Service[];           // Capitalized (wrong)
export const testimonialData: Testimonial[]; // Redundant suffix
export const allFAQs: FAQ[];                // Redundant prefix
```

**File naming:**
```
✅ Correct:
- services.ts
- testimonials.ts
- faqs.ts

❌ Inconsistent:
- Services.ts (capitalized)
- testimonials-data.ts (redundant suffix)
- all-faqs.ts (redundant prefix)
```

---

### 6. Normalize Data Structures

**Scan for:** Inconsistent data structures across similar entities

**Example standardization:**

```typescript
// Before: Inconsistent testimonial structures
// File 1:
const testimonial1 = {
  name: "John",
  title: "CEO",
  quote: "Great!"
};

// File 2:
const testimonial2 = {
  author: "Jane",
  role: "CTO",
  content: "Excellent!",
  company: "Acme"
};

// After: Standardized structure
interface Testimonial {
  id: string;
  author: string;      // Consistent field name
  role: string;        // Consistent field name
  company: string;     // Required field
  content: string;     // Consistent field name
  rating: number;      // Added for consistency
  image?: string;      // Optional field
}
```

---

## Data Organization Best Practices

### Directory Structure

```
/src/app/data/
├── types.ts                    # All TypeScript interfaces
├── index.ts                    # Barrel exports
├── services.ts                 # Service data
├── solutions.ts                # Solution data
├── testimonials/               # Split by category
│   ├── index.ts
│   ├── homepage.ts
│   ├── services.ts
│   └── solutions.ts
├── faqs/                       # Split by page context
│   ├── index.ts
│   ├── homepage.ts
│   ├── services.ts
│   └── general.ts
└── stats/                      # Split by category
    ├── index.ts
    ├── company.ts
    └── performance.ts
```

---

## Success Metrics

| Metric | Target |
|---|---|
| Duplicate data files | 0 |
| Files > 500 lines | Reduce by 80% |
| Orphaned data exports | 0 |
| TypeScript interface coverage | 100% |
| Data structure consistency | 100% |
| Lines saved through consolidation | ~3,000 |
| Average data file size | < 300 lines |

---

## Design System Compliance

All data MUST:

- [ ] Use consistent TypeScript interfaces
- [ ] Follow naming conventions (plural, lowercase)
- [ ] Provide type exports for component usage
- [ ] Use semantic field names (author, content, role vs name, quote, title)
- [ ] Include required fields (id, title/name, etc.)

---

## Deliverables

1. **Audit Report:** `/reports/YYYY-MM/data-optimisation-report-[date].md`
2. **Task List:** Add tasks to `/tasks/task-list.md` for manual data review
3. **CHANGELOG Entry:** Document all data consolidations, splits, and type additions

---

## Execution Order

1. **Phase 1:** Consolidate duplicate data files (testimonials, FAQs, pages, etc.)
2. **Phase 2:** Split data files > 500 lines by category/context
3. **Phase 3:** Create TypeScript interfaces for all data structures
4. **Phase 4:** Remove orphaned data exports
5. **Phase 5:** Normalize data structures for consistency
6. **Phase 6:** Ensure consistent naming conventions

---

**Prompt Location:** `/prompts/optimise-data.md`  
**Category:** Optimisation  
**Difficulty:** Medium  
**Estimated Duration:** 30-45 minutes
