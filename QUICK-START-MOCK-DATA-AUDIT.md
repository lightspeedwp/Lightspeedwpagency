# 🚀 QUICK START: Mock Data Audit

## ⚡ **COPY THIS PROMPT**

Use this streamlined prompt for immediate mock data verification:

---

```
Please perform a mock data audit for the LSX Design system.

## TASK

Verify that all templates, pages, and components use centralized mock data from `/src/app/data/` instead of inline data, and that all styling uses CSS variables.

## EXISTING DATA FILES

21 data files in `/src/app/data/`:
- archive-items.ts, blog-posts.ts, comparisons.ts, cta.ts, faqs.ts
- guarantees.ts, homepage.ts, hosting.ts, logos.ts, pages.ts
- portfolio-projects.ts, pricing.ts, process.ts, seo.ts, services.ts
- site-pages.ts, solutions.ts, team.ts, testimonials.ts, why-choose-us.ts
- index.ts (barrel exports)

## VERIFICATION CHECKLIST

For EACH file in `/src/app/components/templates/`, check:

1. ✅ **Data Imports (REQUIRED)**
   ```typescript
   // ✅ CORRECT
   import { faqs } from '../../data/faqs';
   
   // ❌ WRONG - No inline data allowed
   const faqs = [{ question: "...", answer: "..." }];
   ```

2. ✅ **CSS Variables (REQUIRED)**
   ```typescript
   // ✅ CORRECT
   fontFamily: 'var(--font-primary)'     // Lexend
   fontFamily: 'var(--font-secondary)'   // Manrope
   padding: 'var(--spacing-8)'
   color: 'var(--foreground)'
   
   // ❌ WRONG - No hardcoded values
   fontFamily: 'Lexend, sans-serif'
   padding: '32px'
   color: '#000000'
   ```

## OUTPUT

Generate a report with:

### 1. Summary
- Total templates scanned: X
- Compliant templates: X (X%)
- Templates with inline data: X
- CSS variable compliance: X%

### 2. Violations List
```
❌ TemplateName.tsx
- Line 45: Inline FAQ data → Import from faqs.ts
- Line 67: fontFamily: 'Lexend' → var(--font-primary)
- Line 89: padding: '32px' → var(--spacing-8)
```

### 3. Action Items
- [ ] Fix X inline data instances
- [ ] Fix X hardcoded font references
- [ ] Fix X hardcoded spacing values

## DESIGN SYSTEM RULES

**ONLY use these fonts:**
- `var(--font-primary)` → Lexend (headings, body, UI)
- `var(--font-secondary)` → Manrope (small text only)

**NEVER hardcode:**
- ❌ Font names: 'Lexend', 'Manrope'
- ❌ Spacing: '32px', '16px'
- ❌ Colors: '#000', '#fff'
- ❌ Radius: '8px', '4px'

Start the audit now.
```

---

## ⏱️ **TIMELINE**

- **Quick Scan:** 15 minutes
- **Detailed Report:** 30 minutes
- **Complete Audit:** 45-60 minutes

---

## 📋 **EXPECTED OUTPUT**

```markdown
## Mock Data Audit Report

### Summary
- ✅ Compliant: 45 templates (75%)
- ⚠️ Partial: 10 templates (17%)
- ❌ Non-compliant: 5 templates (8%)
- CSS Variables: 92% compliant

### Critical Issues (Fix Immediately)
1. ❌ BlogTemplate.tsx — 15 lines inline data
2. ❌ CustomPage.tsx — Hardcoded fonts (8 instances)
3. ❌ ServicesOld.tsx — No data imports

### Action Plan
**Phase 1 (Critical - 2 hours):**
- Move inline data to centralized files
- Replace hardcoded fonts with CSS variables

**Phase 2 (Important - 1 hour):**
- Fix spacing violations
- Verify all imports

**Phase 3 (Polish - 30 min):**
- Test all changes
- Update documentation
```

---

## 🎯 **SUCCESS CRITERIA**

**Audit complete when you have:**
- ✅ List of all template files
- ✅ Data import status for each
- ✅ CSS variable violations identified
- ✅ Action items prioritized

**System compliant when:**
- ✅ 100% templates use centralized data
- ✅ 100% fonts use CSS variables
- ✅ 100% spacing uses CSS vars or Tailwind
- ✅ 100% colors use CSS variables

---

**For detailed instructions, see:** `/ACTION-REQUIRED-MOCK-DATA-VERIFICATION.md`

**Start the audit by copying the prompt above!** 🚀
