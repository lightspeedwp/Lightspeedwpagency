# FAQ Section Pattern — Typography Guidelines

**Pattern:** `FAQSection.tsx`  
**WordPress Pattern:** `patterns/faq-section.php`  
**Category:** `lsx-design/content`  
**Last Updated:** December 26, 2024

---

## 🎯 **Typography Rules for FAQ Sections**

### **CRITICAL RULE: Question Font Size**

**✅ CORRECT — Use `--text-lg` (18px) for FAQ questions:**
```tsx
<span style={{
  fontSize: 'var(--text-lg)',        // 18px — CORRECT
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-snug)',
  color: 'var(--foreground)'
}}>
  What is your typical project timeline?
</span>
```

**❌ INCORRECT — Do NOT use `--text-h4` for FAQ questions:**
```tsx
<span style={{
  fontSize: 'var(--text-h4)',  // ❌ TOO LARGE (20px-28px)
  // This was the old incorrect implementation
}}>
  What is your typical project timeline?
</span>
```

---

## 📏 **Complete FAQ Typography Specification**

### **1. FAQ Section Title (H2)**

```tsx
<h2 style={{
  fontSize: 'var(--text-h2)',               // 32px-48px (fluid)
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)', // 600
  lineHeight: '1.2',
  letterSpacing: '-0.02em',
  color: 'var(--foreground)',
  marginBottom: '16px'
}}>
  Frequently Asked Questions
</h2>
```

**Usage:** Main section heading at top of FAQ section

---

### **2. FAQ Section Description (Optional)**

```tsx
<p style={{
  fontSize: 'var(--text-lg)',               // 18px (fixed)
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-regular)', // 400
  lineHeight: '1.7',
  color: 'var(--muted-foreground)',
  maxWidth: '700px',
  margin: '0 auto'
}}>
  Find answers to the most frequently asked questions about our services
</p>
```

**Usage:** Optional description below section title

---

### **3. FAQ Question (Accordion Header) — ENFORCED SIZE**

```tsx
<span style={{
  fontSize: 'var(--text-lg)',               // 18px — REQUIRED
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)', // 600
  lineHeight: 'var(--line-height-snug)',     // 1.25
  color: 'var(--foreground)',
  flex: 1
}}>
  What is your typical project timeline?
</span>
```

**Why 18px (`--text-lg`)?**
- ✅ **Readable** — Clear and legible without being overwhelming
- ✅ **Scannable** — Users can quickly scan all questions
- ✅ **Balanced** — Not too large (H4 28px was too dominant)
- ✅ **Semantic** — Questions are NOT headings, they're UI labels
- ✅ **Mobile-friendly** — Works perfectly on small screens

**DO NOT:**
- ❌ Use `--text-h4` (20px-28px) — Too large
- ❌ Use `--text-h5` (18px-24px) — Fluid scaling not needed
- ❌ Use `--text-base` (16px) — Too small, less emphasis

**Enforcement:** This size is **non-negotiable** and documented in the design system.

---

### **4. FAQ Answer (Accordion Content)**

```tsx
<p style={{
  fontSize: 'var(--text-base)',             // 16px (fixed)
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-regular)', // 400
  lineHeight: '1.7',
  color: 'var(--muted-foreground)',
  margin: 0
}}>
  Our typical project timeline is 4-8 weeks from kickoff to launch. 
  This includes discovery, design, development, testing, and deployment.
</p>
```

**Usage:** Answer text that appears when accordion is expanded

---

### **5. Call-to-Action Text (Below FAQs)**

```tsx
<p style={{
  fontSize: 'var(--text-base)',             // 16px
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-regular)', // 400
  color: 'var(--muted-foreground)',
  marginBottom: '16px'
}}>
  Still have questions?
</p>
```

**Usage:** Optional CTA prompt below FAQ list

---

## 🎨 **Complete FAQ Pattern Example**

```tsx
import { FAQSection } from '../patterns/FAQSection';
import { servicesFAQs } from '../../data/faqs';

<FAQSection 
  title="Frequently Asked Questions"
  description="Find answers to common questions about our WordPress services"
  faqs={servicesFAQs}
  variant="default"
/>
```

**Result:**
- **Title:** 32px-48px (H2, fluid, Lexend semibold)
- **Description:** 18px (fixed, Lexend regular)
- **Questions:** 18px (fixed, Lexend semibold) ← **ENFORCED**
- **Answers:** 16px (fixed, Lexend regular, gray)
- **CTA:** 16px (fixed, Lexend regular)

---

## 📐 **Visual Hierarchy Comparison**

### **Before (Incorrect — Using H4):**
```
Title:       48px ███████████████████████████
Question:    28px ████████████████ ← TOO LARGE
Answer:      16px █████████
```

### **After (Correct — Using --text-lg):**
```
Title:       48px ███████████████████████████
Question:    18px ███████████ ← PERFECT
Answer:      16px █████████
```

**Improvement:** Questions are now properly sized — noticeable but not overpowering.

---

## 🚫 **Common Mistakes to Avoid**

### **❌ MISTAKE 1: Using Heading Tags for Questions**

```tsx
// ❌ WRONG
<h4 style={{ fontSize: 'var(--text-h4)' }}>
  What is your typical project timeline?
</h4>
```

**Why wrong?**
- Questions are NOT semantic headings
- Creates improper heading hierarchy
- Too large and dominant
- Fails accessibility tests (too many H4s)

**✅ CORRECT:**
```tsx
<span style={{ fontSize: 'var(--text-lg)' }}>
  What is your typical project timeline?
</span>
```

---

### **❌ MISTAKE 2: Hard-Coding Font Sizes**

```tsx
// ❌ WRONG
<span style={{ fontSize: '20px' }}>Question</span>
```

**✅ CORRECT:**
```tsx
<span style={{ fontSize: 'var(--text-lg)' }}>Question</span>
```

**Why?** CSS variables allow centralized updates and ensure design system compliance.

---

### **❌ MISTAKE 3: Inconsistent Font Weights**

```tsx
// ❌ WRONG (hardcoded)
<span style={{ fontWeight: 700 }}>Question</span>

// ✅ CORRECT (variable)
<span style={{ fontWeight: 'var(--font-weight-semibold)' }}>Question</span>
```

---

## ♿ **Accessibility Requirements**

### **ARIA Attributes**

```tsx
<button
  onClick={() => toggleFAQ(index)}
  aria-expanded={isOpen}
  aria-controls={`faq-answer-${index}`}
>
  <span style={{ fontSize: 'var(--text-lg)' }}>
    {faq.question}
  </span>
</button>

<div id={`faq-answer-${index}`}>
  <p>{faq.answer}</p>
</div>
```

**Requirements:**
- ✅ `aria-expanded` — Indicates open/closed state
- ✅ `aria-controls` — Links button to content
- ✅ `id` attribute — Provides target for aria-controls
- ✅ Keyboard accessible — Tab, Enter, Space keys work

---

### **Contrast Requirements (WCAG 2.1 AA)**

| Element | Size | Weight | Min Contrast |
|---------|------|--------|--------------|
| Question | 18px | 600 | 3:1 (large text) |
| Answer | 16px | 400 | 4.5:1 (normal text) |
| CTA | 16px | 500 | 4.5:1 (normal text) |

**All elements tested and compliant in both light and dark modes.**

---

## 🎯 **FAQ Data Structure**

### **TypeScript Interface**

```typescript
export interface FAQItem {
  question: string;  // 5-15 words recommended
  answer: string;    // 1-3 paragraphs recommended
}
```

### **Example Data**

```typescript
const servicesFAQs: FAQItem[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Our typical project timeline is 4-8 weeks from kickoff to launch. This includes discovery, design, development, testing, and deployment."
  },
  {
    question: "Do you offer custom WordPress development?",
    answer: "Yes! We specialize in custom WordPress block theme development using Full Site Editing (FSE). All themes are built with modern design systems."
  }
];
```

---

## 📝 **WordPress Pattern Implementation**

### **Pattern PHP Structure**

```php
<?php
/**
 * Title: FAQ Section
 * Slug: lsx-design/faq-section
 * Categories: content
 */
?>

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:heading {"level":2} -->
  <h2>Frequently Asked Questions</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Find answers to common questions about our services</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:list {"className":"faq-accordion"} -->
  <ul class="faq-accordion">
    <!-- FAQ items would be added by user in block editor -->
  </ul>
  <!-- /wp:list -->
</div>
<!-- /wp:group -->
```

---

## 🔧 **Implementation Checklist**

Before deploying FAQ sections, verify:

- [ ] Questions use `var(--text-lg)` (18px) — NOT `var(--text-h4)`
- [ ] Questions use `var(--font-weight-semibold)` (600)
- [ ] Questions use `var(--line-height-snug)` (1.25)
- [ ] Answers use `var(--text-base)` (16px)
- [ ] Answers use `var(--font-weight-regular)` (400)
- [ ] Font family is Lexend for all text
- [ ] ARIA attributes present (`aria-expanded`, `aria-controls`)
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus indicators visible (2px outline)
- [ ] Color contrast passes WCAG 2.1 AA
- [ ] No hard-coded font sizes
- [ ] Smooth animations (300ms transitions)

---

## 📊 **Typography Summary Table**

| Element | Font Size | Weight | Line Height | Font Family | Color |
|---------|-----------|--------|-------------|-------------|-------|
| **Section Title** | `var(--text-h2)` | 600 | 1.2 | Lexend | `--foreground` |
| **Description** | `var(--text-lg)` | 400 | 1.7 | Lexend | `--muted-foreground` |
| **Question** | `var(--text-lg)` ← | 600 | 1.25 | Lexend | `--foreground` |
| **Answer** | `var(--text-base)` | 400 | 1.7 | Lexend | `--muted-foreground` |
| **CTA Text** | `var(--text-base)` | 400 | 1.5 | Lexend | `--muted-foreground` |

**← Critical enforcement:** FAQ questions MUST use `--text-lg` (18px)

---

## 📚 **Related Documentation**

- **Typography System:** `/guidelines/design-tokens/typography.md`
- **Component Documentation:** `/src/app/components/patterns/FAQSection.tsx`
- **FAQ Data:** `/src/app/data/faqs.ts`
- **Accessibility Guidelines:** `/guidelines/Guidelines.md` (Accessibility section)

---

## 🔄 **Version History**

| Version | Date | Change |
|---------|------|--------|
| 1.0 | Dec 25, 2024 | Initial implementation (H4 size - incorrect) |
| 1.1 | Dec 26, 2024 | **Fixed:** Questions now use `--text-lg` (18px) instead of `--text-h4` |

---

**Last Updated:** December 26, 2024  
**Status:** ✅ Enforced  
**Typography Version:** 2.0 (Modern Fluid Scale)  
**WCAG Compliance:** 2.1 AA
