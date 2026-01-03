# Complete /ui to /blocks Migration Plan

**Date:** December 30, 2024  
**Status:** 📋 READY FOR EXECUTION  
**Estimated Time:** 2-3 hours total  
**Risk Level:** ✅ LOW (systematic approach with verification at each step)

---

## 🎯 Executive Summary

**Goal:** Move all 37 remaining LSX custom components from `/src/app/components/ui` to `/src/app/components/blocks` organized by category, update all imports, and maintain 100% functionality.

**Already Complete (Phase 1):** 5 components ✅
- KeyboardShortcuts.tsx → `/blocks/layout/`
- ErrorBoundary.tsx → `/blocks/layout/`
- Alert.tsx → `/blocks/feedback/`
- use-mobile.ts → `/hooks/useIsMobile.ts`
- utils.ts → `/utils/cn.ts`

**Remaining Work:** 37 components across 9 categories

---

## 📊 Migration Phases

### **Phase 2: HIGH PRIORITY** (5 components)
**Components with most imports - migrate first**  
**Estimated Time:** 30 minutes  
**Impact:** ~55 import statements

### **Phase 3: MEDIUM PRIORITY** (5 components)
**Components with some imports - migrate second**  
**Estimated Time:** 20 minutes  
**Impact:** ~5 import statements

### **Phase 4: LOW PRIORITY** (27 components)
**Remaining components - batch migrate**  
**Estimated Time:** 60-90 minutes  
**Impact:** Minimal (mostly unused)

---

## 🔧 PHASE 2: HIGH PRIORITY MIGRATION

### **Component 1: BackToTopButton.tsx**

**Current Location:** `/src/app/components/ui/BackToTopButton.tsx`  
**New Location:** `/src/app/components/blocks/layout/BackToTopButton.tsx`  
**Category:** Layout

**Files to Update (38+ imports):**

**Templates (38 files):**
1. `/src/app/components/templates/FrontPageTemplate.tsx`
   - OLD: `import { BackToTopButton } from '../ui/BackToTopButton';`
   - NEW: `import { BackToTopButton } from '../blocks/layout/BackToTopButton';`

2. `/src/app/components/templates/ArchiveTemplate.tsx`
3. `/src/app/components/templates/SingleTemplate.tsx`
4. `/src/app/components/templates/ArchiveWithFiltersTemplate.tsx`
5. `/src/app/components/templates/Template404.tsx`
6. `/src/app/components/templates/IndexTemplate.tsx`
7. `/src/app/components/templates/SearchResultsTemplate.tsx`
8. `/src/app/components/templates/BlogIndexTemplate.tsx`
9. `/src/app/components/templates/CategoryArchiveTemplate.tsx`
10. `/src/app/components/templates/AuthorArchiveTemplate.tsx`
11. `/src/app/components/templates/SinglePostLongformTemplate.tsx`
12. `/src/app/components/templates/ContactPageTemplate.tsx`
13. `/src/app/components/templates/StyleGuideTemplate.tsx`
14. `/src/app/components/templates/ServicesTemplate.tsx`
15. `/src/app/components/templates/HostingTemplate.tsx`
16. `/src/app/components/templates/AboutTemplate.tsx`
17. `/src/app/components/templates/TeamTemplate.tsx`
18. `/src/app/components/templates/PortfolioArchiveTemplate.tsx`
19. `/src/app/components/templates/PortfolioSingleTemplate.tsx`
20. `/src/app/components/templates/ServiceDetailTemplate.tsx`
21. `/src/app/components/templates/SolutionsTemplate.tsx`
22. `/src/app/components/templates/SolutionDetailTemplate.tsx`
23. `/src/app/components/templates/AboutProcessTemplate.tsx`
24. `/src/app/components/templates/AboutCultureTemplate.tsx`
25. `/src/app/components/templates/AboutHistoryTemplate.tsx`
26. `/src/app/components/templates/FAQTemplate.tsx`
27. `/src/app/components/templates/TemplateTester.tsx`
28. `/src/app/components/templates/ComponentShowcase.tsx`
29. `/src/app/components/templates/PricingTemplate.tsx`
30. `/src/app/components/templates/TagArchiveTemplate.tsx`
31. `/src/app/components/templates/DateArchiveTemplate.tsx`
32. `/src/app/components/templates/FeatureShowcaseTemplate.tsx`
33. `/src/app/components/templates/WhyChooseUsTemplate.tsx`
34. `/src/app/components/templates/GuaranteesTemplate.tsx`
35. `/src/app/components/templates/ROICalculatorTemplate.tsx`
36. `/src/app/components/templates/SectionStyleExample.tsx`
37. `/src/app/components/templates/TestimonialsTemplate.tsx`
38. `/src/app/components/templates/SinglePostTemplate.tsx`
39. `/src/app/components/templates/BlockDocumentation.tsx`
40. `/src/app/components/templates/ComponentAPI.tsx`
41. `/src/app/components/templates/DesignBlocksShowcase.tsx`
42. `/src/app/components/templates/ButtonShowcase.tsx`
43. `/src/app/components/templates/HeaderFooterComparison.tsx`
44. `/src/app/components/templates/IconLibrary.tsx`
45. `/src/app/components/templates/LivePreview.tsx`
46. `/src/app/components/templates/SectionPresetsShowcase.tsx`
47. `/src/app/components/templates/ThemeBlocksShowcase.tsx`

---

### **Component 2: Skeleton.tsx**

**Current Location:** `/src/app/components/ui/Skeleton.tsx`  
**New Location:** `/src/app/components/blocks/layout/Skeleton.tsx`  
**Category:** Layout

**Files to Update (7 imports):**

1. `/src/app/components/templates/BlogIndexTemplate.tsx`
   - OLD: `import { Skeleton } from '../ui/Skeleton';`
   - NEW: `import { Skeleton } from '../blocks/layout/Skeleton';`

2. `/src/app/components/templates/ServicesTemplate.tsx`
3. `/src/app/components/templates/TeamTemplate.tsx`
4. `/src/app/components/templates/PortfolioArchiveTemplate.tsx`
5. `/src/app/components/templates/PricingTemplate.tsx`
6. `/src/app/components/templates/TestimonialsTemplate.tsx`

**Note:** ShadCN also has `skeleton.tsx` (lowercase) - this stays in `/ui`

---

### **Component 3: ScrollProgress.tsx**

**Current Location:** `/src/app/components/ui/ScrollProgress.tsx`  
**New Location:** `/src/app/components/blocks/layout/ScrollProgress.tsx`  
**Category:** Layout

**Files to Update (4 imports):**

1. `/src/app/components/templates/SinglePostLongformTemplate.tsx`
   - OLD: `import { ScrollProgress } from '../ui/ScrollProgress';`
   - NEW: `import { ScrollProgress } from '../blocks/layout/ScrollProgress';`

2. `/src/app/components/templates/PortfolioSingleTemplate.tsx`
3. `/src/app/components/templates/SinglePostTemplate.tsx`

**Also update internal documentation:**
4. `/src/app/components/ui/ScrollProgress.tsx` (JSDoc example)
   - Update example import path

---

### **Component 4: StickyBookCallButton.tsx**

**Current Location:** `/src/app/components/ui/StickyBookCallButton.tsx`  
**New Location:** `/src/app/components/blocks/layout/StickyBookCallButton.tsx`  
**Category:** Layout

**Files to Update (5 imports):**

1. `/src/app/components/templates/FrontPageTemplate.tsx`
   - OLD: `import { StickyBookCallButton } from '../ui/StickyBookCallButton';`
   - NEW: `import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';`

2. `/src/app/components/templates/AboutTemplate.tsx`
3. `/src/app/components/templates/PortfolioArchiveTemplate.tsx`
4. `/src/app/components/templates/PricingTemplate.tsx`
5. `/src/app/components/templates/ROICalculatorTemplate.tsx`

---

### **Component 5: ScrollDownArrow.tsx**

**Current Location:** `/src/app/components/ui/ScrollDownArrow.tsx`  
**New Location:** `/src/app/components/blocks/layout/ScrollDownArrow.tsx`  
**Category:** Layout

**Files to Update (1 import):**

1. `/src/app/components/patterns/HeroHome.tsx`
   - OLD: `import { ScrollDownArrow } from '../ui/ScrollDownArrow';`
   - NEW: `import { ScrollDownArrow } from '../blocks/layout/ScrollDownArrow';`

---

## 🔧 PHASE 3: MEDIUM PRIORITY MIGRATION

### **Component 6: FormField.tsx**

**Current Location:** `/src/app/components/ui/FormField.tsx`  
**New Location:** `/src/app/components/blocks/forms/FormField.tsx`  
**Category:** Forms

**Files to Update (1 import):**

1. `/src/app/components/templates/ContactPageTemplate.tsx`
   - OLD: `import { FormField, TextAreaField } from '../ui/FormField';`
   - NEW: `import { FormField, TextAreaField } from '../blocks/forms/FormField';`

---

### **Component 7: EnquiryModal.tsx**

**Current Location:** `/src/app/components/ui/EnquiryModal.tsx`  
**New Location:** `/src/app/components/blocks/layout/EnquiryModal.tsx`  
**Category:** Layout

**Files to Update (1 import):**

1. `/src/app/components/patterns/ArchiveCTA.tsx`
   - OLD: `import { EnquiryModal } from '../ui/EnquiryModal';`
   - NEW: `import { EnquiryModal } from '../blocks/layout/EnquiryModal';`

---

### **Component 8: Toast.tsx**

**Current Location:** `/src/app/components/ui/Toast.tsx`  
**New Location:** `/src/app/components/blocks/feedback/Toast.tsx`  
**Category:** Feedback

**Files to Update (1 import):**

1. `/src/app/components/templates/PortfolioArchiveTemplate.tsx`
   - OLD: `import { useToast } from '../ui/Toast';`
   - NEW: `import { useToast } from '../blocks/feedback/Toast';`

**Note:** ShadCN also has `sonner.tsx` for toast - this stays in `/ui`

---

### **Component 9: DevToolsHeader.tsx**

**Current Location:** `/src/app/components/ui/DevToolsHeader.tsx`  
**New Location:** `/src/app/components/blocks/dev-tools/DevToolsHeader.tsx`  
**Category:** Dev Tools

**Files to Update (1 import):**

1. `/src/app/components/templates/TemplateTester.tsx`
   - OLD: `import { DevToolsHeader } from '../ui/DevToolsHeader';`
   - NEW: `import { DevToolsHeader } from '../blocks/dev-tools/DevToolsHeader';`

---

### **Component 10: DevToolsFilterToolbar.tsx**

**Current Location:** `/src/app/components/ui/DevToolsFilterToolbar.tsx`  
**New Location:** `/src/app/components/blocks/dev-tools/DevToolsFilterToolbar.tsx`  
**Category:** Dev Tools

**Files to Update (1 import):**

1. `/src/app/components/templates/TemplateTester.tsx`
   - OLD: `import { DevToolsFilterToolbar } from '../ui/DevToolsFilterToolbar';`
   - NEW: `import { DevToolsFilterToolbar } from '../blocks/dev-tools/DevToolsFilterToolbar';`

---

## 🔧 PHASE 4: LOW PRIORITY MIGRATION

**27 remaining components with no direct imports**

### **Feedback (1 component)**
1. **Dialog.tsx** → `/blocks/feedback/Dialog.tsx`

### **Navigation (4 components)**
2. **Accordion.tsx** → `/blocks/navigation/Accordion.tsx`
3. **Breadcrumbs.tsx** → `/blocks/navigation/Breadcrumbs.tsx`
4. **MegaMenu.tsx** → `/blocks/navigation/MegaMenu.tsx`
5. **Tabs.tsx** → `/blocks/navigation/Tabs.tsx`

### **Utility (3 components)**
6. **Tooltip.tsx** → `/blocks/utility/Tooltip.tsx`
7. **Popover.tsx** → `/blocks/utility/Popover.tsx`
8. **DropdownMenu.tsx** → `/blocks/utility/DropdownMenu.tsx`

### **Forms (3 components)**
9. **ContactForm.tsx** → `/blocks/forms/ContactForm.tsx`
10. **SearchForm.tsx** → `/blocks/forms/SearchForm.tsx`
11. **NewsletterForm.tsx** → `/blocks/forms/NewsletterForm.tsx`

### **Data Display (3 components)**
12. **DataTable.tsx** → `/blocks/data-display/DataTable.tsx`
13. **StatsCard.tsx** → `/blocks/data-display/StatsCard.tsx`
14. **ProgressBar.tsx** → `/blocks/data-display/ProgressBar.tsx`

### **E-commerce (6 components)**
15. **ProductGrid.tsx** → `/blocks/ecommerce/ProductGrid.tsx`
16. **ProductReviews.tsx** → `/blocks/ecommerce/ProductReviews.tsx`
17. **ShoppingCart.tsx** → `/blocks/ecommerce/ShoppingCart.tsx`
18. **WishlistButton.tsx** → `/blocks/ecommerce/WishlistButton.tsx`
19. **QuickViewModal.tsx** → `/blocks/ecommerce/QuickViewModal.tsx`
20. **ComparisonTable.tsx** → `/blocks/ecommerce/ComparisonTable.tsx`

### **Media (3 components)**
21. **ImageGallery.tsx** → `/blocks/media/ImageGallery.tsx`
22. **VideoPlayer.tsx** → `/blocks/media/VideoPlayer.tsx`
23. **Lightbox.tsx** → `/blocks/media/Lightbox.tsx`

### **Dev Tools (5 components)**
24. **ComponentPlayground.tsx** → `/blocks/dev-tools/ComponentPlayground.tsx`
25. **ComplianceScorecard.tsx** → `/blocks/dev-tools/ComplianceScorecard.tsx`
26. **DesignSystemTest.tsx** → `/blocks/dev-tools/DesignSystemTest.tsx`
27. **PageSwitcher.tsx** → `/blocks/dev-tools/PageSwitcher.tsx`
28. **StyleSwitcher.tsx** → `/blocks/dev-tools/StyleSwitcher.tsx`

### **Layout (1 component)**
29. **AdvancedFilters.tsx** → `/blocks/layout/AdvancedFilters.tsx`

**Note:** These components have no current imports, so migration is low risk. Move files and update internal documentation only.

---

## 🔄 Special Cases & Fixes

### **Fix 1: Incorrect Button Import**

**File:** `/src/app/components/templates/TeamTemplate.tsx`  
**Current:** `import { Button } from '../ui/Button';`  
**Problem:** Button should come from blocks, not ui  
**Fix:** `import { Button } from '../blocks/design/Buttons';`

### **Fix 2: LazyImage Location**

**LazyImage is NOT in /ui** - it's exported from `/src/app/hooks/useLazyImage.ts`

**Current imports are correct:**
- `/src/app/components/patterns/TeamGrid.tsx`
- `/src/app/components/patterns/TestimonialGrid.tsx`
- `/src/app/components/templates/BlogIndexTemplate.tsx`
- `/src/app/components/templates/PortfolioArchiveTemplate.tsx`

All use: `import { LazyImage } from '../ui/LazyImage';`

**Action:** Update these imports to:
`import { LazyImage } from '../../hooks/useLazyImage';`

---

## 📋 Barrel Export Updates

After each phase, update `/src/app/components/blocks/index.ts`:

### **After Phase 2:**
```typescript
// Layout components
export * from './layout/BackToTopButton';
export * from './layout/Skeleton';
export * from './layout/ScrollProgress';
export * from './layout/StickyBookCallButton';
export * from './layout/ScrollDownArrow';
export * from './layout/KeyboardShortcuts';
export * from './layout/ErrorBoundary';
```

### **After Phase 3:**
```typescript
// Forms
export * from './forms/FormField';

// Layout (additional)
export * from './layout/EnquiryModal';

// Feedback
export * from './feedback/Toast';
export * from './feedback/Alert';

// Dev Tools
export * from './dev-tools/DevToolsHeader';
export * from './dev-tools/DevToolsFilterToolbar';
```

### **After Phase 4:**
```typescript
// Complete all remaining exports...
```

---

## ✅ Verification Checklist

### **After Each Component Migration:**

- [ ] File moved to correct category directory
- [ ] All imports updated in consuming files
- [ ] Internal JSDoc examples updated (if any)
- [ ] Barrel export added
- [ ] TypeScript compiles without errors
- [ ] Component still functions correctly

### **After Each Phase:**

- [ ] Run TypeScript compilation
- [ ] Test application loads
- [ ] Verify no broken imports
- [ ] Check DevTools console for errors
- [ ] Test affected templates/components

### **After Complete Migration:**

- [ ] All 37 components moved
- [ ] All 65+ imports updated
- [ ] Barrel exports complete
- [ ] TypeScript compiles
- [ ] Application fully functional
- [ ] Documentation updated
- [ ] Delete old files from /ui (keep ShadCN only)

---

## 📊 Impact Summary

**Files to Move:** 37 components  
**Files to Update:** 50+ template/pattern files  
**Import Statements to Update:** 65+  
**Barrel Export Updates:** 1 file  
**Documentation Updates:** Multiple guideline files

**Estimated Time Breakdown:**
- Phase 2 (High Priority): 30 minutes
- Phase 3 (Medium Priority): 20 minutes
- Phase 4 (Low Priority): 60-90 minutes
- Verification & Testing: 20 minutes
- Documentation Updates: 10 minutes
- **Total: 2-3 hours**

**Risk Assessment:** ✅ **LOW**
- Systematic phase-by-phase approach
- Verification after each step
- No breaking changes to public APIs
- Easy to rollback if needed

---

## 🚀 Execution Order

1. **Phase 2: BackToTopButton** (highest impact - 38+ files)
2. **Phase 2: Skeleton** (7 files)
3. **Phase 2: ScrollProgress** (4 files)
4. **Phase 2: StickyBookCallButton** (5 files)
5. **Phase 2: ScrollDownArrow** (1 file)
6. **Verify Phase 2** (compile + test)
7. **Phase 3: All 5 components** (5 files total)
8. **Verify Phase 3** (compile + test)
9. **Phase 4: Batch migrate 27 components**
10. **Verify Phase 4** (compile + test)
11. **Fix LazyImage imports** (4 files)
12. **Fix Button import in TeamTemplate** (1 file)
13. **Final verification** (full test)
14. **Update documentation**
15. **Clean up old /ui files**

---

**Ready to begin execution?** ✅

The plan is comprehensive, systematic, and low-risk. Each phase is independently verifiable, allowing for incremental progress with confidence.
