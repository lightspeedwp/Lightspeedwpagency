# 🔄 ACCORDION MIGRATION REPORT

**Date:** January 20, 2026  
**Status:** 9 Templates Using Old Implementation  
**Target:** Migrate to WordPress Accordion Block

---

## 📊 **AUDIT RESULTS**

### **✅ Already Using WordPress Accordion (16 Templates)**

1. FrontPageTemplate
2. ContactPageTemplate
3. ServicesTemplate
4. AboutTemplate
5. PortfolioArchiveTemplate
6. ContentServiceTemplate
7. MigrationsServiceTemplate
8. SolutionDetailTemplate
9. AboutProcessTemplate
10. AboutCultureTemplate
11. AboutHistoryTemplate
12. WhyChooseUsTemplate
13. GuaranteesTemplate
14. ROICalculatorTemplate
15. 404Template
16. **DevelopmentServiceTemplate** ✅ NEWLY MIGRATED

### **⚠️ Using Old `<details>` Elements (9 Templates)**

**Priority 1: Service Templates (4)**
1. ❌ **DesignServiceTemplate** — Line 418
2. ❌ **SecurityServiceTemplate** — Line 845
3. ❌ **SupportServiceTemplate** — Line 921
4. ❌ **ServiceDetailTemplate** — Line 913

**Priority 2: Solution Templates (2)**
5. ❌ **WordPressSolutionTemplate** — Line 946
6. ❌ **WooCommerceSolutionTemplate** — Line 944

**Priority 3: Other Templates (3)**
7. ❌ **BlogIndexTemplate** — Line 674
8. ❌ **TeamTemplate** — Line 745
9. ❌ **FAQTemplate** — Line 389 (custom toggle)

### **🗑️ Deprecated Component**

**To Delete:** `/src/app/components/ui/accordion.tsx`
- Old shadcn/Radix UI accordion
- **Currently unused** (0 imports found)
- Safe to delete immediately

---

## 🎯 **MIGRATION STRATEGY**

### **Pattern to Replace**

**OLD (Custom `<details>`):**
```tsx
<div className="space-y-4">
  {faqs.map((faq, index) => (
    <details
      key={index}
      style={{
        padding: '24px',
        backgroundColor: 'var(--card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-soft)'
      }}
    >
      <summary
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--foreground)',
          cursor: 'pointer',
          listStyle: 'none'
        }}
      >
        {faq.question}
      </summary>
      <p
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          lineHeight: '1.7',
          color: 'var(--muted-foreground)',
          marginTop: '12px'
        }}
      >
        {faq.answer}
      </p>
    </details>
  ))}
</div>
```

**NEW (WordPress Accordion):**
```tsx
import { FAQSection } from '../patterns/FAQSection';

<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about [topic]"
  faqs={relevantFAQs}
  variant="muted"
/>
```

---

## 📋 **MIGRATION CHECKLIST PER TEMPLATE**

### **Step 1: Add Import**
```tsx
import { FAQSection } from '../patterns/FAQSection';
```

### **Step 2: Replace FAQ Section**
Find the FAQ section (search for `<details>` or `aria-expanded`)

Replace with:
```tsx
<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about [topic]"
  faqs={existingFAQData}
  variant="muted"
/>
```

### **Step 3: Remove Old Code**
- Remove `<Section>` wrapper (FAQSection has its own)
- Remove custom `<details>` mapping
- Remove inline styles
- Keep existing FAQ data imports

### **Step 4: Test**
- [ ] FAQ section renders
- [ ] Accordions expand/collapse
- [ ] Keyboard navigation works
- [ ] Light/dark mode correct
- [ ] No console errors

---

## 🔧 **TEMPLATE-SPECIFIC MIGRATIONS**

### **1. DesignServiceTemplate** ⚠️

**Current Implementation:**
- Line 418: Custom `<details>` with CSS classes
- Uses: `designServiceFAQs` from data file

**Migration:**
```tsx
// Add import at top
import { FAQSection } from '../patterns/FAQSection';

// Replace FAQ section (around line 410-440)
<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about design services"
  faqs={designServiceFAQs}
  variant="muted"
/>
```

**Code Reduction:** ~80 lines → 7 lines

---

### **2. SecurityServiceTemplate** ⚠️

**Current Implementation:**
- Line 845: Inline styled `<details>`
- Uses: `securityServiceFAQs` from extended data

**Migration:**
```tsx
// Add import at top
import { FAQSection } from '../patterns/FAQSection';
import { securityServiceFAQs } from '../../data/faqs-extended';

// Replace FAQ section (around line 835-890)
<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about WordPress security"
  faqs={securityServiceFAQs}
  variant="muted"
/>
```

**Code Reduction:** ~90 lines → 7 lines

---

### **3. SupportServiceTemplate** ⚠️

**Current Implementation:**
- Line 921: Inline styled `<details>`
- Uses: `supportServiceFAQs` from extended data

**Migration:**
```tsx
// Add import at top
import { FAQSection } from '../patterns/FAQSection';
import { supportServiceFAQs } from '../../data/faqs-extended';

// Replace FAQ section (around line 910-970)
<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about WordPress support"
  faqs={supportServiceFAQs}
  variant="muted"
/>
```

**Code Reduction:** ~90 lines → 7 lines

---

### **4. ServiceDetailTemplate** ⚠️

**Current Implementation:**
- Line 913: Inline styled `<details>`
- Uses: `servicePageFAQs` from data file

**Migration:**
```tsx
// Add import at top
import { FAQSection } from '../patterns/FAQSection';

// Replace FAQ section (around line 900-960)
<FAQSection
  title="Frequently Asked Questions"
  description={`Common questions about ${service.title}`}
  faqs={servicePageFAQs}
  variant="muted"
/>
```

**Code Reduction:** ~85 lines → 7 lines

---

### **5. WordPressSolutionTemplate** ⚠️

**Current Implementation:**
- Line 946: Inline styled `<details>`
- Uses: `wordpressSolutionFAQs` from extended data

**Migration:**
```tsx
// Add import at top
import { FAQSection } from '../patterns/FAQSection';
import { wordpressSolutionFAQs } from '../../data/faqs-extended';

// Replace FAQ section (around line 935-995)
<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about WordPress solutions"
  faqs={wordpressSolutionFAQs}
  variant="muted"
/>
```

**Code Reduction:** ~90 lines → 7 lines

---

### **6. WooCommerceSolutionTemplate** ⚠️

**Current Implementation:**
- Line 944: Inline styled `<details>`
- Uses: `woocommerceSolutionFAQs` from extended data

**Migration:**
```tsx
// Add import at top
import { FAQSection } from '../patterns/FAQSection';
import { woocommerceSolutionFAQs } from '../../data/faqs-extended';

// Replace FAQ section (around line 933-993)
<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about WooCommerce solutions"
  faqs={woocommerceSolutionFAQs}
  variant="muted"
/>
```

**Code Reduction:** ~90 lines → 7 lines

---

### **7. BlogIndexTemplate** ⚠️

**Current Implementation:**
- Line 674: Inline styled `<details>`
- Uses: `blogIndexFAQs` from data file

**Migration:**
```tsx
// Add import at top
import { FAQSection } from '../patterns/FAQSection';
import { blogArchiveFAQs } from '../../data/faqs-extended';

// Replace FAQ section (around line 665-720)
<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about our blog and content"
  faqs={blogArchiveFAQs}
  variant="muted"
/>
```

**Code Reduction:** ~85 lines → 7 lines

---

### **8. TeamTemplate** ⚠️

**Current Implementation:**
- Line 745: Inline styled `<details>`
- Uses: `teamPageFAQs` from extended data

**Migration:**
```tsx
// Add import at top
import { FAQSection } from '../patterns/FAQSection';
import { teamPageFAQs } from '../../data/faqs-extended';

// Replace FAQ section (around line 735-795)
<FAQSection
  title="Frequently Asked Questions"
  description="Common questions about our team"
  faqs={teamPageFAQs}
  variant="muted"
/>
```

**Code Reduction:** ~90 lines → 7 lines

---

### **9. FAQTemplate** ⚠️ (SPECIAL CASE)

**Current Implementation:**
- Line 389: Custom toggle with `aria-expanded`
- Uses state management with `openFAQs`
- More complex than other templates

**Migration:**
```tsx
// Remove state: const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({});

// Add import at top
import { FAQSection } from '../patterns/FAQSection';
import { faqPageFAQs } from '../../data/faqs-extended';

// Replace entire FAQ rendering section
<FAQSection
  title="All Frequently Asked Questions"
  description="Find answers to all common questions"
  faqs={faqPageFAQs}
  variant="default"
/>
```

**Code Reduction:** ~120 lines → 7 lines

---

## 📊 **MIGRATION METRICS**

### **Code Reduction**
- **Per Template:** 80-120 lines reduced → 7 lines
- **Average Reduction:** 90 lines per template
- **Total Reduction:** ~810 lines across 9 templates
- **Percentage:** 92% code reduction

### **Improvements**
✅ **Accessibility:** WCAG 2.1 AA compliant (ARIA, keyboard nav)  
✅ **Consistency:** All FAQs use same component  
✅ **Maintainability:** Single source of truth  
✅ **Performance:** CSS-only animations  
✅ **User Control:** 100% CSS variables  

---

## 🚀 **RECOMMENDED IMPLEMENTATION ORDER**

### **Phase 1: Services (4 templates) — 1 hour**
1. DesignServiceTemplate
2. SecurityServiceTemplate
3. SupportServiceTemplate
4. ServiceDetailTemplate

**Impact:** High-priority conversion pages

---

### **Phase 2: Solutions (2 templates) — 30 minutes**
5. WordPressSolutionTemplate
6. WooCommerceSolutionTemplate

**Impact:** Core product pages

---

### **Phase 3: Other (3 templates) — 45 minutes**
7. BlogIndexTemplate
8. TeamTemplate
9. FAQTemplate

**Impact:** Content & utility pages

---

### **Phase 4: Cleanup — 15 minutes**
10. Delete `/src/app/components/ui/accordion.tsx`
11. Final testing across all templates
12. Update documentation

---

**Total Estimated Time:** 2.5 hours for complete migration

---

## ✅ **SUCCESS CRITERIA**

- [ ] All 9 templates migrated to WordPress Accordion
- [ ] Old `<details>` elements removed
- [ ] Shadcn accordion file deleted
- [ ] All FAQs keyboard accessible
- [ ] All FAQs work in light/dark mode
- [ ] No console errors
- [ ] 810 lines of code removed
- [ ] 100% CSS variable compliance

---

**Status:** Ready for Migration  
**Next Action:** Begin Phase 1 (Services)
