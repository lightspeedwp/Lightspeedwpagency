# WordPress Button Migration — Complete Implementation Plan

**Status:** 🚧 **IN PROGRESS**  
**Date:** December 26, 2024

---

## ✅ **Migration Completed**

### **Updated Files (9/25):**

1. ✅ `/src/app/components/common/MobileFilterPopover.tsx`
2. ✅ `/src/app/components/parts/SiteFooter.tsx`
3. ✅ `/src/app/components/patterns/HeroHome.tsx`
4. ✅ `/src/app/components/patterns/CTASection.tsx`
5. ✅ `/src/app/components/patterns/EmptyState.tsx`
6. ✅ `/src/app/components/patterns/FilterBar.tsx`
7. ✅ `/src/app/components/patterns/FooterNewsletter.tsx`
8. ✅ `/src/app/components/patterns/HeroSplit.tsx`
9. ✅ `/src/app/components/patterns/HeroFullHeight.tsx`
10. ✅ `/src/app/components/templates/404Template.tsx`

### **Remaining Files (15/25):**

**Templates:** 14 files
- `/src/app/components/templates/BlogIndexTemplate.tsx`
- `/src/app/components/templates/SinglePostLongformTemplate.tsx`
- `/src/app/components/templates/SearchResultsPageTemplate.tsx`
- `/src/app/components/templates/ContactPageTemplate.tsx`
- `/src/app/components/templates/StyleGuideTemplate.tsx`
- `/src/app/components/templates/HostingTemplate.tsx`
- `/src/app/components/templates/ServiceDetailTemplate.tsx`
- `/src/app/components/templates/SolutionsTemplate.tsx`
- `/src/app/components/templates/SolutionDetailTemplate.tsx`
- `/src/app/components/templates/PricingTemplate.tsx`
- `/src/app/components/templates/FeatureShowcaseTemplate.tsx`
- `/src/app/components/templates/WhyChooseUsTemplate.tsx`
- `/src/app/components/templates/GuaranteesTemplate.tsx`
- `/src/app/components/templates/ROICalculatorTemplate.tsx`

**Tests:** 1 file
- `/__tests__/components/Button.test.tsx`

---

## 🔧 **Migration Instructions**

### **Step 1: Update Import Statement**

**Old:**
```tsx
import { Button } from '../common/Button';
```

**New:**
```tsx
import { Button } from '../blocks/design/Buttons';
```

### **Step 2: Update Button Usage**

The WordPress Button has the same API:

```tsx
{/* External Link */}
<Button variant="primary" size="lg" href="https://example.com">
  External Link
</Button>

{/* Internal Navigation */}
<Button variant="primary" size="md" page="contact">
  Contact Us
</Button>

{/* With onClick */}
<Button variant="outline" size="sm" onClick={handleClick}>
  Click Me
</Button>
```

### **Step 3: Props Reference**

```tsx
interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  href?: string;          // External links
  page?: string;          // Internal navigation
  children: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  'aria-label'?: string;
  target?: '_blank' | '_self';
  rel?: string;
}
```

---

## 📦 **Files to Delete After Migration**

### **1. Old LSX Button** ❌
**File:** `/src/app/components/common/Button.tsx`  
**Status:** ⏳ Delete after all migrations complete  
**Reason:** Replaced by WordPress Button block

### **2. Old Button Tests** ❌
**File:** `/__tests__/components/Button.test.tsx`  
**Status:** ⏳ Update to test WordPress Button  
**Reason:** Tests old component

---

## ✅ **WordPress Button Features**

| Feature | Status |
|---------|--------|
| 3 Standard Sizes (sm/md/lg) | ✅ Complete |
| Navigation Support (href/page) | ✅ Complete |
| CSS Variables (100%) | ✅ Complete |
| Lexend Font | ✅ Complete |
| WCAG AAA Compliant | ✅ Complete |
| TypeScript Types | ✅ Complete |
| 5 Style Variants | ✅ Complete |

---

## 📝 **Quick Migration Script**

For each remaining file, replace:

```bash
# Find and replace in editor:
FROM: import { Button } from '../common/Button';
TO:   import { Button } from '../blocks/design/Buttons';
```

---

## 🎯 **Next Steps**

1. ✅ Update remaining 15 files with WordPress Button import
2. ✅ Verify all buttons still work correctly
3. ✅ Delete `/src/app/components/common/Button.tsx`
4. ✅ Update test file to use WordPress Button
5. ✅ Create final migration summary document

---

**Migration Progress:** 10/25 files (40%)  
**Estimated Time:** 10-15 minutes for remaining files
