# Memory Reduction P2.1.2 — FAQs Restructure Implementation Plan

**Created:** March 5, 2026  
**Status:** In Progress (Framework Created)  
**Related Task:** `/tasks/memory-reduction-tasks.md` P2.1.2  
**Estimated Completion:** 2-3 hours remaining

---

## Executive Summary

**Current State:**
- `faqs.ts` — 725 lines (25 FAQ collections)
- `faqs-extended.ts` — 862 lines (31 FAQ collections)
- **Total:** 1,587 lines across 2 monolithic files

**Target State:**
- `/src/app/data/faqs/` directory with 14 context files
- `types.ts` — FAQ interface definitions
- `index.ts` — Barrel file re-exporting all collections
- `faqs.ts` — Compatibility shim (19 lines)
- `faqs-extended.ts` — DELETED (merged into context files)

**Expected Savings:** ~400-500 lines (improved organization + reduced duplication)

---

## Discovered FAQ Collections (56 Total)

### From faqs.ts (25 collections):
1. `homepageFAQs`
2. `servicesFAQs`
3. `aboutFAQs`
4. `processFAQs`
5. `cultureFAQs`
6. `teamFAQs`
7. `hostingFAQs`
8. `contactFAQs`
9. `portfolioFAQs`
10. `blogFAQs`
11. `woocommerceFAQs`
12. `generalFAQs`
13. `technicalFAQs`
14. `wordpressFAQs`
15. `woocommerceDetailedFAQs`
16. `performanceSEOFAQs`
17. `maintenanceSupportFAQs`
18. `pricingTimelineFAQs`
19. `designUXFAQs`
20. `testimonialPageFAQs`
21. `videoFAQs`
22. `podcastFAQs`
23. `searchFAQs`
24. `portfolioCategoryFAQs`
25. `blogCategoryFAQs`

### From faqs-extended.ts (31 collections):
26. `wordpressDevelopmentFAQs`
27. `woocommerceServiceFAQs`
28. `designServiceFAQs`
29. `contentServiceDetailedFAQs`
30. `securityServiceFAQs`
31. `migrationsServiceDetailedFAQs`
32. `supportServiceFAQs`
33. `lsxDesignFAQs`
34. `wordpressSolutionFAQs`
35. `woocommerceSolutionFAQs`
36. `blogArchiveFAQs`
37. `portfolioArchiveFAQs`
38. `categoryArchiveFAQs`
39. `tagArchiveFAQs`
40. `authorArchiveFAQs`
41. `dateArchiveFAQs`
42. `searchResultsFAQs`
43. `singlePostFAQs`
44. `singlePortfolioFAQs`
45. `error404FAQs`
46. `contactPageDetailedFAQs`
47. `sitemapFAQs`
48. `pricingPageFAQs`
49. `testimonialsPageFAQs`
50. `faqPageFAQs`
51. `teamPageFAQs`
52. `whyChooseUsFAQs`
53. `guaranteesFAQs`
54. `roiCalculatorFAQs`
55. `tourOperatorFAQs`
56. `extendedFAQs` (object containing all extended FAQs)

---

## Proposed Directory Structure

```
/src/app/data/faqs/
├── index.ts                # Barrel file (re-exports all collections)
├── types.ts                # FAQ interface (CREATED ✅)
│
├── homepage.ts             # homepageFAQs (CREATED ✅)
├── services.ts             # servicesFAQs, lsxDesignFAQs, plus service-specific FAQs
├── about.ts                # aboutFAQs, processFAQs, cultureFAQs, teamFAQs, teamPageFAQs, whyChooseUsFAQs
├── portfolio.ts            # portfolioFAQs, portfolioCategoryFAQs, portfolioArchiveFAQs, singlePortfolioFAQs
├── blog.ts                 # blogFAQs, blogCategoryFAQs, blogArchiveFAQs, singlePostFAQs
├── contact.ts              # contactFAQs, contactPageDetailedFAQs
├── hosting.ts              # hostingFAQs
├── pricing.ts              # pricingTimelineFAQs, pricingPageFAQs, roiCalculatorFAQs
├── testimonials.ts         # testimonialPageFAQs, testimonialsPageFAQs
├── media.ts                # videoFAQs, podcastFAQs
├── woocommerce.ts          # woocommerceFAQs, woocommerceDetailedFAQs, woocommerceServiceFAQs, woocommerceSolutionFAQs
├── technical.ts            # generalFAQs, technicalFAQs, wordpressFAQs, wordpressDevelopmentFAQs, wordpressSolutionFAQs, performanceSEOFAQs, maintenanceSupportFAQs
├── design.ts               # designUXFAQs, designServiceFAQs
├── archives.ts             # categoryArchiveFAQs, tagArchiveFAQs, authorArchiveFAQs, dateArchiveFAQs
├── search.ts               # searchFAQs, searchResultsFAQs
├── content.ts              # contentServiceDetailedFAQs
├── security.ts             # securityServiceFAQs
├── migrations.ts           # migrationsServiceDetailedFAQs
├── support.ts              # supportServiceFAQs, maintenanceSupportFAQs (if not in technical.ts)
└── utility.ts              # error404FAQs, sitemapFAQs, faqPageFAQs, guaranteesFAQs, tourOperatorFAQs
```

---

## Impacted Templates (33 Files)

**Templates importing FAQs:**
1. `FrontPageTemplate.tsx` — uses `homepageFAQs`
2. `BlogIndexTemplate.tsx` — uses `blogFAQs`
3. `CategoryArchiveTemplate.tsx` — uses `blogCategoryFAQs`
4. `TagArchiveTemplate.tsx` — uses `blogCategoryFAQs`
5. `ContactPageTemplate.tsx` — uses `contactFAQs`
6. `ServicesTemplate.tsx` — uses `servicesFAQs`
7. `AboutTemplate.tsx` — uses `aboutFAQs`
8. `TeamTemplate.tsx` — uses `teamFAQs`
9. `AboutProcessTemplate.tsx` — uses `processFAQs`
10. `AboutCultureTemplate.tsx` — uses `cultureFAQs`
11. `AboutHistoryTemplate.tsx` — uses `aboutFAQs`
12. `PortfolioArchiveTemplate.tsx` — uses `portfolioFAQs`
13. `ServiceDetailTemplate.tsx` — uses `servicesFAQs`
14. `SecurityServiceTemplate.tsx` — uses `servicesFAQs`
15. `SolutionDetailTemplate.tsx` — uses `servicesFAQs`
16. `WordPressSolutionTemplate.tsx` — uses `servicesFAQs` or `wordpressSolutionFAQs`
17. `WhyChooseUsTemplate.tsx` — uses `aboutFAQs` or `whyChooseUsFAQs`
18. `GuaranteesTemplate.tsx` — uses `guaranteesFAQs`
19. `ROICalculatorTemplate.tsx` — uses `pricingTimelineFAQs` or `roiCalculatorFAQs`
20. `TestimonialsTemplate.tsx` — uses `testimonialPageFAQs`
21. `SinglePostTemplate.tsx` — uses `blogFAQs` or `singlePostFAQs`
22. `TourOperatorTemplate.tsx` — uses `tourOperatorFAQs`
23. `LSXDesignTemplate.tsx` — uses `lsxDesignFAQs` or `servicesFAQs`
24. `HostingTemplate.tsx` — uses `hostingFAQs`
25. `WetuImporterTemplate.tsx` — uses generic FAQs
26. `LSXSharingTemplate.tsx` — uses generic FAQs
27. `LSXSearchTemplate.tsx` — uses `searchFAQs` or generic
28. `MailchimpSolutionTemplate.tsx` — uses `woocommerceSolutionFAQs` or generic
29. `TrainingTemplate.tsx` — uses `servicesFAQs`
30. `PublishersTemplate.tsx` — uses generic FAQs
31. `VideoArchiveTemplate.tsx` — uses `videoFAQs`
32. `PodcastArchiveTemplate.tsx` — uses `podcastFAQs`
33. `FAQSection.tsx` — documentation examples

---

## Implementation Steps

### Phase 1: Create Directory & Core Files ✅ PARTIAL

- [x] Create `/src/app/data/faqs/` directory
- [x] Create `types.ts` with FAQ interface
- [x] Create `homepage.ts` with homepageFAQs
- [ ] Create remaining 13 context files
- [ ] Create barrel `index.ts` with all re-exports
- [ ] Create compatibility shim `faqs.ts`

### Phase 2: Extract FAQ Data (Remaining)

**For each context file, extract relevant FAQ collections from faqs.ts and faqs-extended.ts:**

#### services.ts
```typescript
/**
 * Services FAQ Collections
 * 
 * FAQs related to all service offerings, service details, and service-specific questions.
 */

import type { FAQ } from './types';

export const servicesFAQs: FAQ[] = [/* from faqs.ts line 159-180 */];
export const lsxDesignFAQs: FAQ[] = [/* from faqs-extended.ts line 225-251 */];
export const wordpressDevelopmentFAQs: FAQ[] = [/* from faqs-extended.ts line 32-58 */];
export const woocommerceServiceFAQs: FAQ[] = [/* from faqs-extended.ts line 59-85 */];
export const designServiceFAQs: FAQ[] = [/* from faqs-extended.ts line 86-112 */];
export const contentServiceDetailedFAQs: FAQ[] = [/* from faqs-extended.ts line 113-139 */];
export const securityServiceFAQs: FAQ[] = [/* from faqs-extended.ts line 140-166 */];
export const migrationsServiceDetailedFAQs: FAQ[] = [/* from faqs-extended.ts line 167-193 */];
export const supportServiceFAQs: FAQ[] = [/* from faqs-extended.ts line 194-224 */];
```

#### about.ts
```typescript
/**
 * About FAQ Collections
 * 
 * FAQs related to company information, team, culture, process, and "Why Choose Us".
 */

import type { FAQ } from './types';

export const aboutFAQs: FAQ[] = [/* from faqs.ts line 183-204 */];
export const processFAQs: FAQ[] = [/* from faqs.ts line 207-224 */];
export const cultureFAQs: FAQ[] = [/* from faqs.ts line 227-244 */];
export const teamFAQs: FAQ[] = [/* from faqs.ts line 247-264 */];
export const teamPageFAQs: FAQ[] = [/* from faqs-extended.ts line 667-693 */];
export const whyChooseUsFAQs: FAQ[] = [/* from faqs-extended.ts line 694-716 */];
```

#### portfolio.ts
```typescript
/**
 * Portfolio FAQ Collections
 * 
 * FAQs related to portfolio, case studies, project examples, and categories.
 */

import type { FAQ } from './types';

export const portfolioFAQs: FAQ[] = [/* from faqs.ts line 315-336 */];
export const portfolioCategoryFAQs: FAQ[] = [/* from faqs.ts line 694-712 */];
export const portfolioArchiveFAQs: FAQ[] = [/* from faqs-extended.ts line 337-363 */];
export const singlePortfolioFAQs: FAQ[] = [/* from faqs-extended.ts line 498-528 */];
```

#### blog.ts
```typescript
/**
 * Blog/Insights FAQ Collections
 * 
 * FAQs related to blog, insights, articles, categories, tags, and authors.
 */

import type { FAQ } from './types';

export const blogFAQs: FAQ[] = [/* from faqs.ts line 339-356 */];
export const blogCategoryFAQs: FAQ[] = [/* from faqs.ts line 713-732 */];
export const blogArchiveFAQs: FAQ[] = [/* from faqs-extended.ts line 310-336 */];
export const categoryArchiveFAQs: FAQ[] = [/* from faqs-extended.ts line 364-386 */];
export const tagArchiveFAQs: FAQ[] = [/* from faqs-extended.ts line 387-405 */];
export const authorArchiveFAQs: FAQ[] = [/* from faqs-extended.ts line 406-424 */];
export const dateArchiveFAQs: FAQ[] = [/* from faqs-extended.ts line 425-443 */];
export const singlePostFAQs: FAQ[] = [/* from faqs-extended.ts line 471-497 */];
```

**Continue this pattern for:**
- contact.ts
- hosting.ts
- pricing.ts
- testimonials.ts
- media.ts
- woocommerce.ts
- technical.ts
- design.ts
- archives.ts
- search.ts
- content.ts
- security.ts
- migrations.ts
- support.ts
- utility.ts

### Phase 3: Create Barrel Index ✅ NEXT

```typescript
/**
 * FAQ Data Repository — Barrel Export
 * 
 * Centralized FAQ content for all pages and templates in the LSX Design system.
 * All FAQ collections are organized by context in modular files.
 * 
 * **WordPress Mapping:**
 * In WordPress, FAQs would be:
 * - Custom Post Type: `faq` with custom fields
 * - Taxonomy: `faq_category` for organizing by context
 * - ACF or custom fields for question/answer pairs
 * 
 * **Usage Pattern:**
 * ```tsx
 * import { homepageFAQs } from '@/app/data/faqs';
 * 
 * <FAQSection 
 *   title="Common Questions"
 *   faqs={homepageFAQs}
 * />
 * ```
 * 
 * @see {@link /src/app/components/patterns/FAQSection.tsx} - FAQ Section component
 */

// Export types
export * from './types';

// Export all FAQ collections
export * from './homepage';
export * from './services';
export * from './about';
export * from './portfolio';
export * from './blog';
export * from './contact';
export * from './hosting';
export * from './pricing';
export * from './testimonials';
export * from './media';
export * from './woocommerce';
export * from './technical';
export * from './design';
export * from './archives';
export * from './search';
export * from './content';
export * from './security';
export * from './migrations';
export * from './support';
export * from './utility';
```

### Phase 4: Create Compatibility Shim ✅ FINAL

Convert `faqs.ts` to a 19-line compatibility shim:

```typescript
/**
 * FAQ Data Repository — Compatibility Shim
 * 
 * **DEPRECATED:** This file is a compatibility shim.
 * All FAQ data has been moved to `/src/app/data/faqs/` directory.
 * 
 * **New Usage:**
 * ```tsx
 * import { homepageFAQs } from '@/app/data/faqs';
 * ```
 * 
 * This file re-exports all FAQ collections from the modular structure.
 * Update your imports to use the new structure directly.
 * 
 * @see {@link /src/app/data/faqs/index.ts} - New FAQ barrel export
 */

export * from './faqs/index';
```

### Phase 5: Delete faqs-extended.ts ✅ FINAL

After all FAQ collections are merged into context files:
- Delete `faqs-extended.ts` (862 lines)
- All imports from `faqs-extended.ts` now work via compatibility shim

### Phase 6: Update Template Imports (33 files)

**All template imports will continue to work unchanged thanks to the compatibility shim.**

Current imports:
```tsx
import { homepageFAQs } from '../../data/faqs';
```

Will continue to work because `faqs.ts` re-exports from `faqs/index.ts`.

**Optional future migration:**
```tsx
import { homepageFAQs } from '@/app/data/faqs';
```

---

## Expected Savings Analysis

### Line Count Comparison

**Before:**
- `faqs.ts` — 725 lines
- `faqs-extended.ts` — 862 lines
- **Total:** 1,587 lines in 2 monolithic files

**After:**
- `types.ts` — ~60 lines
- 14 context files — ~800-900 lines total (avg 60 lines each)
- `index.ts` — ~50 lines (barrel re-export)
- `faqs.ts` — 19 lines (compatibility shim)
- `faqs-extended.ts` — DELETED
- **Total:** ~930-1,030 lines across 17 files

**Savings:** 550-650 lines (~35-40% reduction)

### Benefits Beyond Line Count

1. **Improved Organization:** Context-specific files are easier to find and maintain
2. **Reduced Duplication:** Similar FAQ collections can be consolidated
3. **Better Tree-Shaking:** Unused FAQ collections won't be bundled
4. **Easier Updates:** Update FAQs by context instead of searching large file
5. **Clearer Dependencies:** See which templates use which FAQ contexts
6. **Future-Proof:** Easy to add new FAQ collections per context

---

## Implementation Checklist

### Core Structure ✅ PARTIAL
- [x] Create `/src/app/data/faqs/` directory
- [x] Create `types.ts` with FAQ interface
- [x] Create `homepage.ts` with homepageFAQs
- [ ] Create 13 remaining context files
- [ ] Create barrel `index.ts`
- [ ] Convert `faqs.ts` to compatibility shim

### Data Extraction (0/56 collections migrated)
- [ ] Extract 56 FAQ collections from faqs.ts and faqs-extended.ts
- [ ] Organize into 14 context files
- [ ] Verify all collections have unique exports

### Testing & Verification
- [ ] Delete `faqs-extended.ts`
- [ ] Run build check (no errors expected)
- [ ] Verify all 33 templates still render FAQ sections correctly
- [ ] Check FAQSection pattern examples still work
- [ ] Verify no broken imports

### Documentation
- [ ] Update FAQ data documentation if exists
- [ ] Add migration notes to CHANGELOG.md

---

## Next Steps

**Immediate:**
1. Complete remaining 13 context files (2-3 hours)
2. Create barrel index.ts
3. Convert faqs.ts to compatibility shim
4. Delete faqs-extended.ts
5. Build check

**After Completion:**
1. Move to P2.1.3 - Pages Cleanup (30 min)
2. Move to P2.1.4 - Hosting Merge (30 min)
3. Move to P2.1.5 - Why Choose Us Merge (15 min)

---

## Success Criteria

- [ ] `/src/app/data/faqs/` directory exists with 17 files
- [ ] All 56 FAQ collections migrated to context files
- [ ] `faqs.ts` is 19-line compatibility shim
- [ ] `faqs-extended.ts` deleted
- [ ] All 33 templates render FAQ sections correctly
- [ ] Zero broken imports
- [ ] Build succeeds with zero errors
- [ ] ~550-650 lines saved
- [ ] 100% backward compatibility maintained

---

**Status:** Framework Created, 3/17 files complete (types.ts, homepage.ts, directory)  
**Remaining:** 14 context files + index.ts + compatibility shim  
**Estimated Time:** 2-3 hours to complete  
**Next File:** `services.ts` (11 FAQ collections)

**Last Updated:** March 5, 2026
