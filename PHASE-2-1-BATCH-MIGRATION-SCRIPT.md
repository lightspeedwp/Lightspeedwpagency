# 🚀 Batch Migration Script — Remaining 13 Templates

**Status:** 4/17 Complete (24%)  
**Remaining:** 13 templates  
**Estimated Time:** ~20 minutes

---

## ✅ **COMPLETED (4/17)**

1. ✅ BlogIndexTemplate — Blue gradient
2. ✅ ServicesTemplate — Blue gradient
3. ✅ AboutTemplate — Blue gradient
4. ✅ TeamTemplate — Blue gradient

---

## 📋 **REMAINING TEMPLATES (13/17)**

### **Batch 1 Remaining (1 template):**
5. PortfolioSingleTemplate — Blue gradient (#1e40af → #3b82f6)

### **Batch 2: Service Detail Templates (4 templates):**
6. ServiceDetailTemplate — Blue gradient (#1e40af → #3b82f6)
7. DevelopmentServiceTemplate — Purple gradient (#8b5cf6 → #a855f7)
8. SecurityServiceTemplate — Red gradient (#dc2626 → #b91c1c)
9. MigrationsServiceTemplate — Purple-indigo gradient (#8b5cf6 → #6366f1)

### **Batch 3: Solution Templates (2 templates):**
10. WordPressSolutionTemplate — Blue gradient (#1e40af → #3b82f6)
11. WooCommerceSolutionTemplate — Violet gradient (#7c3aed → #a855f7)

### **Batch 4: Marketing/Conversion Templates (5 templates):**
12. FAQTemplate — Cyan gradient (#0891b2 → #06b6d4)
13. PricingTemplate — Cyan gradient (#0891b2 → #06b6d4)
14. GuaranteesTemplate — Green gradient (#10b981 → #059669)
15. TestimonialsTemplate — Amber gradient (#f59e0b → #ea580c)
16. SinglePostTemplate — Blue gradient (#1e40af → #3b82f6)

### **Batch 5: Hosting Template (1 template):**
17. HostingTemplate — Purple-light gradient (#8b5cf6 → #a78bfa)

---

## 🔍 **SEARCH & REPLACE PATTERN**

### **Step 1: Locate CTA Section**
```bash
# Find the gradient line to confirm location
linear-gradient.*#[0-9a-f]{6}
```

### **Step 2: Extract Data (if exists)**
```tsx
// Check for centralized data import
import { templateNameCTA } from '../../data/template-name';

// If found, use this data in replacement
```

### **Step 3: Add CTASection Import**
```tsx
import { CTASection } from '../patterns/CTASection';
```

### **Step 4: Replace Inline CTA**
```tsx
<CTASection
  title={extractedOrImportedTitle}
  description={extractedOrImportedDescription}
  primaryButtonText={extractedOrImportedPrimaryText}
  primaryButtonPage={extractedOrImportedPrimaryPage}
  secondaryButtonText={extractedOrImportedSecondaryText}
  secondaryButtonPage={extractedOrImportedSecondaryPage}
  gradient="variant"
/>
```

---

## 🎯 **RAPID MIGRATION CHECKLIST**

For each template:

- [ ] Search for `linear-gradient` to locate CTA section
- [ ] Check imports for centralized CTA data (e.g., `templateNameCTA`)
- [ ] Add `import { CTASection } from '../patterns/CTASection';` if missing
- [ ] Map gradient hex colors to variant name using table
- [ ] Replace inline Section with CTASection component
- [ ] Verify TypeScript compilation passes
- [ ] Visual check (if possible)

---

## 📊 **PROGRESS TRACKER**

| Template | Gradient | Status | Time |
|----------|----------|--------|------|
| BlogIndexTemplate | blue | ✅ | 2m |
| ServicesTemplate | blue | ✅ | 2m |
| AboutTemplate | blue | ✅ | 2m |
| TeamTemplate | blue | ✅ | 2m |
| PortfolioSingleTemplate | blue | ⏳ | - |
| ServiceDetailTemplate | blue | ⏳ | - |
| DevelopmentServiceTemplate | purple | ⏳ | - |
| SecurityServiceTemplate | red | ⏳ | - |
| MigrationsServiceTemplate | purple-indigo | ⏳ | - |
| WordPressSolutionTemplate | blue | ⏳ | - |
| WooCommerceSolutionTemplate | violet | ⏳ | - |
| FAQTemplate | cyan | ⏳ | - |
| PricingTemplate | cyan | ⏳ | - |
| GuaranteesTemplate | green | ⏳ | - |
| TestimonialsTemplate | amber | ⏳ | - |
| SinglePostTemplate | blue | ⏳ | - |
| HostingTemplate | purple-light | ⏳ | - |

---

**Next Template:** PortfolioSingleTemplate (blue gradient)
