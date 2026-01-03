# Complete /ui Migration Audit

**Date:** December 30, 2024  
**Purpose:** Audit all components in `/src/app/components/ui` and create migration plan  
**Status:** 🔍 AUDIT IN PROGRESS

---

## 📊 UI Directory Inventory

Based on directory listing, the `/ui` folder contains **84 files total**:

### **LSX Custom Components (42 files - UPPERCASE)**

These are LSX Design custom components that need to be migrated to `/blocks`:

1. **Accordion.tsx**
2. **AdvancedFilters.tsx**
3. **Alert.tsx** ⚠️ (DUPLICATE - also in /blocks/feedback/)
4. **BackToTopButton.tsx**
5. **Breadcrumbs.tsx**
6. **ComparisonTable.tsx**
7. **ComplianceScorecard.tsx**
8. **ComponentPlayground.tsx**
9. **ContactForm.tsx**
10. **DataTable.tsx**
11. **DesignSystemTest.tsx**
12. **DevToolsFilterToolbar.tsx**
13. **DevToolsHeader.tsx**
14. **Dialog.tsx**
15. **DropdownMenu.tsx**
16. **EnquiryModal.tsx**
17. **ErrorBoundary.tsx** ⚠️ (DUPLICATE - already moved to /blocks/layout/)
18. **FormField.tsx**
19. **ImageGallery.tsx**
20. **KeyboardShortcuts.tsx** ⚠️ (DUPLICATE - already moved to /blocks/layout/)
21. **Lightbox.tsx**
22. **MegaMenu.tsx**
23. **NewsletterForm.tsx**
24. **PageSwitcher.tsx**
25. **Popover.tsx**
26. **ProductGrid.tsx**
27. **ProductReviews.tsx**
28. **ProgressBar.tsx**
29. **QuickViewModal.tsx**
30. **ScrollDownArrow.tsx**
31. **ScrollProgress.tsx**
32. **SearchForm.tsx**
33. **ShoppingCart.tsx**
34. **Skeleton.tsx**
35. **StatsCard.tsx**
36. **StickyBookCallButton.tsx**
37. **StyleSwitcher.tsx**
38. **Tabs.tsx**
39. **Toast.tsx**
40. **Tooltip.tsx**
41. **VideoPlayer.tsx**
42. **WishlistButton.tsx**

### **ShadCN UI Components (40 files - lowercase)**

These are ShadCN UI primitives that should STAY in `/ui`:

1. accordion.tsx
2. alert-dialog.tsx
3. alert.tsx
4. aspect-ratio.tsx
5. avatar.tsx
6. badge.tsx
7. breadcrumb.tsx
8. calendar.tsx
9. card.tsx
10. carousel.tsx
11. chart.tsx
12. checkbox.tsx
13. collapsible.tsx
14. command.tsx
15. context-menu.tsx
16. dialog.tsx
17. drawer.tsx
18. dropdown-menu.tsx
19. form.tsx
20. hover-card.tsx
21. input-otp.tsx
22. input.tsx
23. label.tsx
24. menubar.tsx
25. navigation-menu.tsx
26. pagination.tsx
27. popover.tsx
28. progress.tsx
29. radio-group.tsx
30. resizable.tsx
31. scroll-area.tsx
32. select.tsx
33. separator.tsx
34. sheet.tsx
35. sidebar.tsx
36. skeleton.tsx
37. slider.tsx
38. sonner.tsx
39. switch.tsx
40. table.tsx
41. tabs.tsx
42. textarea.tsx
43. toggle-group.tsx
44. toggle.tsx
45. tooltip.tsx

### **Utility Files (2 files)**

These should be moved to appropriate directories:

1. **use-mobile.ts** → Move to `/src/app/hooks/useIsMobile.ts` ✅ DONE
2. **utils.ts** → Move to `/src/app/utils/cn.ts` ✅ DONE

---

## 🗂️ Component Categorization for Migration

### **Category 1: FEEDBACK** (3 components)
**Destination:** `/src/app/components/blocks/feedback/`

1. Alert.tsx ✅ **ALREADY MOVED**
2. Dialog.tsx
3. Toast.tsx

### **Category 2: NAVIGATION** (4 components)
**Destination:** `/src/app/components/blocks/navigation/`

1. Accordion.tsx
2. Breadcrumbs.tsx
3. MegaMenu.tsx
4. Tabs.tsx

### **Category 3: UTILITY** (3 components)
**Destination:** `/src/app/components/blocks/utility/`

1. Tooltip.tsx
2. Popover.tsx
3. DropdownMenu.tsx

### **Category 4: FORMS** (4 components)
**Destination:** `/src/app/components/blocks/forms/`

1. ContactForm.tsx
2. SearchForm.tsx
3. NewsletterForm.tsx
4. FormField.tsx

### **Category 5: DATA DISPLAY** (3 components)
**Destination:** `/src/app/components/blocks/data-display/`

1. DataTable.tsx
2. StatsCard.tsx
3. ProgressBar.tsx

### **Category 6: E-COMMERCE** (6 components)
**Destination:** `/src/app/components/blocks/ecommerce/`

1. ProductGrid.tsx
2. ProductReviews.tsx
3. ShoppingCart.tsx
4. WishlistButton.tsx
5. QuickViewModal.tsx
6. ComparisonTable.tsx

### **Category 7: MEDIA** (3 components)
**Destination:** `/src/app/components/blocks/media/`

1. ImageGallery.tsx
2. VideoPlayer.tsx
3. Lightbox.tsx

### **Category 8: DEV TOOLS** (7 components)
**Destination:** `/src/app/components/blocks/dev-tools/`

1. ComponentPlayground.tsx
2. ComplianceScorecard.tsx
3. DesignSystemTest.tsx
4. DevToolsHeader.tsx
5. DevToolsFilterToolbar.tsx
6. PageSwitcher.tsx
7. StyleSwitcher.tsx

### **Category 9: LAYOUT** (9 components)
**Destination:** `/src/app/components/blocks/layout/`

1. BackToTopButton.tsx
2. ScrollDownArrow.tsx
3. ScrollProgress.tsx
4. KeyboardShortcuts.tsx ✅ **ALREADY MOVED**
5. ErrorBoundary.tsx ✅ **ALREADY MOVED**
6. Skeleton.tsx
7. EnquiryModal.tsx
8. StickyBookCallButton.tsx
9. AdvancedFilters.tsx

---

## 📍 Import Usage Analysis

### **Most Used Components (Need Priority Migration)**

Based on file search results:

1. **BackToTopButton.tsx** — Used in **38+ templates** ⭐ HIGH PRIORITY
2. **Skeleton.tsx** — Used in 7 templates
3. **ScrollProgress.tsx** — Used in 4 templates
4. **LazyImage.tsx** — Used in 4 templates (patterns)
5. **StickyBookCallButton.tsx** — Used in 5 templates
6. **FormField.tsx** (including TextAreaField) — Used in 1 template
7. **EnquiryModal.tsx** — Used in 1 pattern
8. **ScrollDownArrow.tsx** — Used in 1 pattern
9. **DevToolsHeader.tsx** — Used in 1 template
10. **DevToolsFilterToolbar.tsx** — Used in 1 template
11. **Toast.tsx** (useToast hook) — Used in 1 template

### **Components with No Direct Imports Found**

These may be used dynamically or not yet integrated:
- Accordion.tsx
- AdvancedFilters.tsx
- ComparisonTable.tsx
- ComplianceScorecard.tsx
- ComponentPlayground.tsx
- ContactForm.tsx
- DataTable.tsx
- DesignSystemTest.tsx
- Dialog.tsx
- DropdownMenu.tsx
- ImageGallery.tsx
- Lightbox.tsx
- MegaMenu.tsx (may be used in header)
- NewsletterForm.tsx
- Popover.tsx
- ProductGrid.tsx
- ProductReviews.tsx
- ProgressBar.tsx
- QuickViewModal.tsx
- SearchForm.tsx
- ShoppingCart.tsx
- StatsCard.tsx
- Tabs.tsx
- Tooltip.tsx
- VideoPlayer.tsx
- WishlistButton.tsx

---

## 🔧 Files That Import from /ui

### **Templates (45 files importing)**

1. FrontPageTemplate.tsx
2. ArchiveTemplate.tsx
3. SingleTemplate.tsx
4. ArchiveWithFiltersTemplate.tsx
5. Template404.tsx
6. IndexTemplate.tsx
7. SearchResultsTemplate.tsx
8. BlogIndexTemplate.tsx
9. CategoryArchiveTemplate.tsx
10. AuthorArchiveTemplate.tsx
11. SinglePostLongformTemplate.tsx
12. ContactPageTemplate.tsx
13. StyleGuideTemplate.tsx
14. ServicesTemplate.tsx
15. HostingTemplate.tsx
16. AboutTemplate.tsx
17. TeamTemplate.tsx
18. PortfolioArchiveTemplate.tsx
19. PortfolioSingleTemplate.tsx
20. ServiceDetailTemplate.tsx
21. SolutionsTemplate.tsx
22. SolutionDetailTemplate.tsx
23. AboutProcessTemplate.tsx
24. AboutCultureTemplate.tsx
25. AboutHistoryTemplate.tsx
26. FAQTemplate.tsx
27. TemplateTester.tsx
28. ComponentShowcase.tsx
29. PricingTemplate.tsx
30. TagArchiveTemplate.tsx
31. DateArchiveTemplate.tsx
32. FeatureShowcaseTemplate.tsx
33. WhyChooseUsTemplate.tsx
34. GuaranteesTemplate.tsx
35. ROICalculatorTemplate.tsx
36. SectionStyleExample.tsx
37. TestimonialsTemplate.tsx
38. SinglePostTemplate.tsx
39. BlockDocumentation.tsx
40. ComponentAPI.tsx
41. DesignBlocksShowcase.tsx
42. ButtonShowcase.tsx
43. HeaderFooterComparison.tsx
44. IconLibrary.tsx
45. LivePreview.tsx
46. SectionPresetsShowcase.tsx
47. ThemeBlocksShowcase.tsx

### **Patterns (3 files importing)**

1. HeroHome.tsx
2. TeamGrid.tsx
3. ArchiveCTA.tsx
4. TestimonialGrid.tsx

---

## 🎯 Migration Strategy

### **Phase 1: Already Complete** ✅

- ✅ KeyboardShortcuts.tsx moved
- ✅ ErrorBoundary.tsx moved
- ✅ Alert.tsx moved
- ✅ use-mobile.ts moved to /hooks
- ✅ utils.ts moved to /utils

### **Phase 2: HIGH PRIORITY (Most Used Components)**

**Order of Migration:**

1. **BackToTopButton.tsx** → `/blocks/layout/` (38+ imports)
2. **Skeleton.tsx** → `/blocks/layout/` (7 imports)
3. **ScrollProgress.tsx** → `/blocks/layout/` (4 imports)
4. **StickyBookCallButton.tsx** → `/blocks/layout/` (5 imports)
5. **ScrollDownArrow.tsx** → `/blocks/layout/` (1 import)

**Estimated Time:** 30 minutes  
**Impact:** ~50 import statements

### **Phase 3: MEDIUM PRIORITY (Form & UI Components)**

**Order of Migration:**

1. **FormField.tsx** → `/blocks/forms/` (1 import)
2. **EnquiryModal.tsx** → `/blocks/layout/` (1 import)
3. **Toast.tsx** → `/blocks/feedback/` (1 import)
4. **DevToolsHeader.tsx** → `/blocks/dev-tools/` (1 import)
5. **DevToolsFilterToolbar.tsx** → `/blocks/dev-tools/` (1 import)

**Estimated Time:** 20 minutes  
**Impact:** ~5 import statements

### **Phase 4: LOW PRIORITY (Remaining Components)**

**Batch Migration of Unused/Future Components:**

**Feedback:** Dialog.tsx  
**Navigation:** Accordion.tsx, Breadcrumbs.tsx, MegaMenu.tsx, Tabs.tsx  
**Utility:** Tooltip.tsx, Popover.tsx, DropdownMenu.tsx  
**Forms:** ContactForm.tsx, SearchForm.tsx, NewsletterForm.tsx  
**Data Display:** DataTable.tsx, StatsCard.tsx, ProgressBar.tsx  
**E-commerce:** ProductGrid.tsx, ProductReviews.tsx, ShoppingCart.tsx, WishlistButton.tsx, QuickViewModal.tsx, ComparisonTable.tsx  
**Media:** ImageGallery.tsx, VideoPlayer.tsx, Lightbox.tsx  
**Dev Tools:** ComponentPlayground.tsx, ComplianceScorecard.tsx, DesignSystemTest.tsx, PageSwitcher.tsx, StyleSwitcher.tsx  
**Layout:** AdvancedFilters.tsx

**Total:** 28 components  
**Estimated Time:** 60-90 minutes  
**Impact:** Minimal (mostly unused components)

---

## ⚠️ Special Considerations

### **LazyImage Component**

**Current imports:**
- TeamGrid.tsx
- TestimonialGrid.tsx  
- BlogIndexTemplate.tsx
- PortfolioArchiveTemplate.tsx

**Question:** LazyImage is not listed in the directory. Where is it located?

Need to verify if this is:
- In a different directory
- A wrapper component
- Imported from an external library

### **Button Component Import Issue**

**Found in:** TeamTemplate.tsx  
**Import:** `import { Button } from '../ui/Button'`

**Issue:** Should be importing from `/blocks/design/Buttons`

**Action Required:** Update this import in Phase 2

---

## 📋 Migration Checklist

### **Pre-Migration Tasks**

- [x] Audit all /ui components
- [x] Categorize by destination
- [x] Identify all import locations
- [x] Create migration strategy
- [ ] Verify LazyImage location
- [ ] Check for any dynamic imports

### **Migration Tasks**

#### **Phase 1: Already Complete** ✅
- [x] KeyboardShortcuts.tsx
- [x] ErrorBoundary.tsx
- [x] Alert.tsx
- [x] use-mobile.ts
- [x] utils.ts

#### **Phase 2: High Priority**
- [ ] BackToTopButton.tsx (38+ imports)
- [ ] Skeleton.tsx (7 imports)
- [ ] ScrollProgress.tsx (4 imports)
- [ ] StickyBookCallButton.tsx (5 imports)
- [ ] ScrollDownArrow.tsx (1 import)

#### **Phase 3: Medium Priority**
- [ ] FormField.tsx (1 import)
- [ ] EnquiryModal.tsx (1 import)
- [ ] Toast.tsx (1 import)
- [ ] DevToolsHeader.tsx (1 import)
- [ ] DevToolsFilterToolbar.tsx (1 import)

#### **Phase 4: Low Priority**
- [ ] Batch migrate remaining 28 components

### **Post-Migration Tasks**

- [ ] Update barrel export in /blocks/index.ts
- [ ] Verify all imports resolve
- [ ] Run TypeScript compilation
- [ ] Test application loads
- [ ] Update documentation
- [ ] Delete old /ui files (keep ShadCN only)

---

## 📊 Summary

**Total Components in /ui:** 84 files  
**LSX Custom Components:** 42  
**ShadCN UI Components:** 40 (stay in /ui)  
**Utility Files:** 2 (move to /hooks and /utils)

**Migration Status:**
- ✅ **Phase 1 Complete:** 5 files moved
- 🔄 **Phase 2 Pending:** 5 files (high priority)
- 🔄 **Phase 3 Pending:** 5 files (medium priority)
- 🔄 **Phase 4 Pending:** 28 files (low priority)

**Estimated Total Time:** 2-3 hours for complete migration

---

**Next Step:** Create detailed execution plan with exact file mappings and import updates.
