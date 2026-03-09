# Memory Reduction P2.2-P2.6 — Remaining Tasks Status

**Created:** March 5, 2026  
**Related Tasks:** `/tasks/memory-reduction-tasks.md`  
**Status:** In Progress (P2.1.2 Next)

---

## Executive Summary

**Priority 2 Progress:**
- **Completed:** 12/18 tasks (67%)
- **Remaining:** 6 tasks (FAQs, Pages, Hosting, Why Choose Us merges)
- **Current Focus:** P2.1.2 - FAQs Restructure

---

## Completed Tasks ✅

### P2.1.1 Testimonials Merge ✅
- **Status:** COMPLETE
- **Result:** 3 files (899 lines) → 1 file (740 lines) + 3 shims (19 lines each)
- **Savings:** 102 lines
- **Report:** `/reports/2026-03/memory-reduction-p2-1-testimonials-merge-complete.md`

### P2.2 Routes.tsx Split ✅
- **Status:** COMPLETE
- **Result:** 1,147 lines → 21-line compatibility shim + 11 modular route files
- **Report:** `/reports/2026-03/memory-reduction-p2-routes-split-complete.md`

### P2.3 Site-Header.css Split ✅
- **Status:** COMPLETE
- **Result:** 1,051 lines → 15-line import orchestrator + 3 modular files
- **Report:** `/reports/2026-03/memory-reduction-p2-css-splits-complete.md`

### P2.4 Site-Footer.css Split ✅
- **Status:** COMPLETE
- **Result:** 817 lines → 14-line import orchestrator + 3 modular files
- **Report:** `/reports/2026-03/memory-reduction-p2-css-splits-complete.md`

### P2.5 Utilities.css Split ✅
- **Status:** COMPLETE
- **Result:** 806 lines → 46-line import orchestrator + 8 modular files
- **Report:** `/reports/2026-03/memory-reduction-p2-5-utilities-split-complete.md`

---

## Remaining Tasks (Priority 2 — High)

### P2.1.2 FAQs Restructure 🔄 NEXT

**Current State:**
- `faqs.ts` — 725 lines (20+ FAQ collections)
- `faqs-extended.ts` — 862 lines (additional FAQ collections)
- **Total:** 1,587 lines across 2 monolithic files

**Identified FAQ Collections (from file search):**
1. `homepageFAQs` — Used in FrontPageTemplate
2. `servicesFAQs` — Used in multiple service templates
3. `aboutFAQs` — Used in AboutTemplate, AboutHistoryTemplate, WhyChooseUsTemplate
4. `processFAQs` — Used in AboutProcessTemplate
5. `cultureFAQs` — Used in AboutCultureTemplate
6. `teamFAQs` — Used in TeamTemplate
7. `hostingFAQs` — Used in HostingTemplate
8. `contactFAQs` — Used in ContactPageTemplate
9. `portfolioFAQs` — Used in PortfolioArchiveTemplate
10. `blogFAQs` — Used in BlogIndexTemplate, SinglePostTemplate
11. `blogCategoryFAQs` — Used in CategoryArchiveTemplate, TagArchiveTemplate
12. `pricingTimelineFAQs` — Used in ROICalculatorTemplate
13. `testimonialPageFAQs` — Used in TestimonialsTemplate
14. `videoFAQs` — Used in VideoArchiveTemplate
15. Plus: `woocommerceFAQs`, `generalFAQs`, `technicalFAQs`, `wordpressFAQs`, etc.

**Proposed Structure:**
```
/src/app/data/faqs/
├── index.ts           # Barrel file (re-exports all collections)
├── types.ts           # FAQ interface definitions
├── homepage.ts        # homepageFAQs
├── services.ts        # servicesFAQs
├── about.ts           # aboutFAQs, processFAQs, cultureFAQs, teamFAQs
├── portfolio.ts       # portfolioFAQs
├── blog.ts            # blogFAQs, blogCategoryFAQs
├── contact.ts         # contactFAQs
├── hosting.ts         # hostingFAQs
├── pricing.ts         # pricingTimelineFAQs
├── testimonials.ts    # testimonialPageFAQs
├── media.ts           # videoFAQs
├── woocommerce.ts     # woocommerceFAQs, woocommerceDetailedFAQs
├── technical.ts       # generalFAQs, technicalFAQs, wordpressFAQs, etc.
└── performance.ts     # performanceSEOFAQs, maintenanceSupportFAQs, etc.
```

**Expected Savings:** ~300-400 lines (reduced duplication + better organization)

**Implementation Steps:**
1. Create `/src/app/data/faqs/` directory
2. Extract each FAQ collection into dedicated context files (12-14 files)
3. Create types.ts with FAQ interface
4. Create barrel index.ts with all re-exports
5. Convert `faqs.ts` to compatibility shim (re-export from index.ts)
6. Delete `faqs-extended.ts` (merge into context files)
7. Update all template imports (verify 33+ templates)
8. Build check for broken references

**Impacted Templates (33 files):**
- FrontPageTemplate, BlogIndexTemplate, CategoryArchiveTemplate, TagArchiveTemplate
- ContactPageTemplate, ServicesTemplate, AboutTemplate, TeamTemplate
- AboutProcessTemplate, AboutCultureTemplate, AboutHistoryTemplate
- PortfolioArchiveTemplate, ServiceDetailTemplate, SecurityServiceTemplate
- SolutionDetailTemplate, WordPressSolutionTemplate, WhyChooseUsTemplate
- GuaranteesTemplate, ROICalculatorTemplate, TestimonialsTemplate
- SinglePostTemplate, TourOperatorTemplate, LSXDesignTemplate
- HostingTemplate, WetuImporterTemplate, LSXSharingTemplate
- LSXSearchTemplate, MailchimpSolutionTemplate, TrainingTemplate
- PublishersTemplate, VideoArchiveTemplate
- Plus: FAQSection pattern (documentation examples)

---

### P2.1.3 Pages Cleanup

**Current State:**
- `pages.ts` — 86 lines
- `site-pages.ts` — 10 lines (compatibility shim re-exporting site-pages/pages.ts)
- `site-pages/pages.ts` — 883 lines (actual data)

**Task:**
1. Audit if `pages.ts` (86 lines) is a legacy re-export
2. If yes, delete `pages.ts` and update all imports to use `site-pages/*`
3. Verify no duplicate data between `pages.ts` and `site-pages/*`
4. Update all template imports

**Expected Savings:** ~80-100 lines (if pages.ts is redundant)

---

### P2.1.4 Hosting Merge

**Current State:**
- `hosting.ts` — 92 lines
- `hosting-page.ts` — 346 lines

**Task:**
1. Audit what's in `hosting.ts` vs `hosting-page.ts`
2. Merge `hosting.ts` content into `hosting-page.ts`
3. Update all imports from `hosting.ts` to `hosting-page.ts`
4. Delete `hosting.ts`

**Expected Savings:** ~90 lines

**Impacted Templates:**
- HostingTemplate (likely)
- Service templates (if they reference hosting data)

---

### P2.1.5 Why Choose Us Merge

**Current State:**
- `why-choose-us.ts` — 409 lines
- `why-choose-us-page.ts` — 31 lines

**Task:**
1. Audit if `why-choose-us-page.ts` is a subset/duplicate of `why-choose-us.ts`
2. If yes, merge `why-choose-us-page.ts` into `why-choose-us.ts`
3. Update all imports
4. Delete smaller file

**Expected Savings:** ~30 lines

**Impacted Templates:**
- WhyChooseUsTemplate

---

## Total Expected Savings (P2.1.2 - P2.1.5)

| Task | Savings | Effort | Priority |
|------|---------|--------|----------|
| FAQs Restructure | 300-400 lines | Medium (2-3 hours) | High |
| Pages Cleanup | 80-100 lines | Low (30 min) | Medium |
| Hosting Merge | 90 lines | Low (30 min) | Medium |
| Why Choose Us Merge | 30 lines | Low (15 min) | Low |
| **Total** | **500-620 lines** | **4-5 hours** | **High** |

---

## Implementation Order

**Recommended sequence:**

1. ✅ **P2.1.2 - FAQs Restructure** (NEXT)
   - Highest impact (~400 lines)
   - Improves data organization significantly
   - Sets pattern for future data splitting

2. **P2.1.3 - Pages Cleanup**
   - Quick win (30 min)
   - Clarifies navigation data structure

3. **P2.1.4 - Hosting Merge**
   - Quick win (30 min)
   - Single template affected

4. **P2.1.5 - Why Choose Us Merge**
   - Quick win (15 min)
   - Single template affected

---

## Success Criteria

- [ ] All FAQ collections moved to `/src/app/data/faqs/` directory
- [ ] All 33+ templates updated with new FAQ imports
- [ ] `faqs.ts` converted to compatibility shim
- [ ] `faqs-extended.ts` deleted
- [ ] Zero broken imports
- [ ] Build succeeds with zero errors
- [ ] 100% CSS variable compliance maintained
- [ ] No visual regressions on FAQ sections

---

## Next Steps

1. **Immediate:** Start P2.1.2 - FAQs Restructure
   - Create `/src/app/data/faqs/` directory
   - Extract FAQ collections into context files
   - Create barrel re-export
   - Update all template imports

2. **After FAQs:** Complete P2.1.3-P2.1.5 (quick wins)

3. **Then:** Move to Priority 3 tasks (component consolidation)

---

**Last Updated:** March 5, 2026  
**Progress:** 67% complete (12/18 tasks)  
**Next Task:** P2.1.2 - FAQs Restructure
