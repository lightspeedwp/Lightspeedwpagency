# ⚠️ ACTION REQUIRED: Mock Data Implementation Verification

## 🎯 **TASK**

Verify that all templates, pages, and components use centralized mock data from `/src/app/data/` instead of inline data.

**Date Created:** 2025-01-09  
**Priority:** High  
**Estimated Time:** 45-60 minutes

---

## 📋 **VERIFICATION PROMPT**

Use this prompt with an AI assistant to perform a complete mock data audit:

---

### **PROMPT START** ⬇️

```
I need you to perform a comprehensive audit to verify that all templates, pages, and components use centralized mock data from `/src/app/data/` instead of inline data.

## CONTEXT

**Project:** LSX Design System (WordPress block theme prototype)  
**Data Location:** `/src/app/data/` (centralized mock data)  
**Design System:** 100% CSS variables (--font-primary, --font-secondary, --spacing-*, --foreground, --background, etc.)

## EXISTING DATA FILES

The following data files exist in `/src/app/data/`:

1. ✅ `archive-items.ts` — Archive page content
2. ✅ `blog-posts.ts` — Blog posts and authors
3. ✅ `comparisons.ts` — Feature comparison data
4. ✅ `cta.ts` — Call-to-action variants
5. ✅ `faqs.ts` — FAQ collections (13 collections)
6. ✅ `guarantees.ts` — Guarantees and trust signals
7. ✅ `homepage.ts` — Homepage-specific data
8. ✅ `hosting.ts` — Hosting plans and features
9. ✅ `index.ts` — Barrel exports
10. ✅ `logos.ts` — Client/partner logos
11. ✅ `pages.ts` — Site navigation and page metadata
12. ✅ `portfolio-projects.ts` — Portfolio projects and case studies
13. ✅ `pricing.ts` — Pricing plans and features
14. ✅ `process.ts` — Process steps and workflow
15. ✅ `seo.ts` — SEO metadata
16. ✅ `services.ts` — Service offerings
17. ✅ `site-pages.ts` — Site-wide page data
18. ✅ `solutions.ts` — Solution offerings
19. ✅ `team.ts` — Team members
20. ✅ `testimonials.ts` — Client testimonials
21. ✅ `why-choose-us.ts` — Why choose us content

**Total:** 21 centralized data files

---

## TASK 1: SCAN ALL TEMPLATE FILES

**Action:** Check EVERY file in `/src/app/components/templates/`

**For each template file, verify:**

1. ✅ **Imports from `/src/app/data/`** (correct)
   ```typescript
   // ✅ CORRECT
   import { servicesFAQs } from '../../data/faqs';
   import { services } from '../../data/services';
   ```

2. ❌ **Inline mock data** (incorrect)
   ```typescript
   // ❌ WRONG - Inline data
   const faqs = [
     { question: "...", answer: "..." },
     { question: "...", answer: "..." }
   ];
   ```

**Output Format:**

For EACH template file, report:
```
Template: /src/app/components/templates/TemplateName.tsx
Status: ✅ Uses centralized data | ⚠️ Has inline data | ❌ No data used

Imports:
- ✅ import { faqs } from '../../data/faqs'
- ✅ import { services } from '../../data/services'

Inline Data Found:
- ❌ Line 45-60: const mockData = [...]
- ❌ Line 120-135: const items = [...]

Recommendations:
- Move inline data to /src/app/data/services.ts
- Import centralized data instead
```

---

## TASK 2: SCAN ALL PAGE COMPONENTS

**Action:** Check files in `/src/app/components/pages/` (if exists)

**Same verification as Task 1**

---

## TASK 3: SCAN ALL PATTERN COMPONENTS

**Action:** Check files in `/src/app/components/patterns/`

**For each pattern, verify:**

1. ✅ **Accepts data as props** (correct)
   ```typescript
   // ✅ CORRECT - Receives data as props
   interface FAQSectionProps {
     faqs: FAQ[];
     title?: string;
   }
   ```

2. ❌ **Has inline fallback data** (incorrect)
   ```typescript
   // ❌ WRONG - Don't use inline fallback
   const defaultFaqs = [
     { question: "...", answer: "..." }
   ];
   ```

---

## TASK 4: SCAN ALL COMMON COMPONENTS

**Action:** Check files in `/src/app/components/common/`

**Verify:** Components should NOT contain mock data (they receive props)

---

## TASK 5: CHECK CSS VARIABLES USAGE

**Critical:** ALL UI generation must use CSS variables

**Verify these patterns in ALL files:**

### ✅ **CORRECT USAGE:**

```typescript
// Typography - MUST use CSS variables
style={{
  fontFamily: 'var(--font-primary)',      // ✅ Lexend
  fontSize: 'var(--text-h1)',             // ✅ 60px
  color: 'var(--foreground)',             // ✅ Theme color
}}

// Spacing - CSS variables OR Tailwind
style={{
  padding: 'var(--spacing-8)',            // ✅ 32px
  gap: 'var(--spacing-4)',                // ✅ 16px
}}
// OR
className="p-8 gap-4"                     // ✅ Tailwind

// Colors - MUST use CSS variables
style={{
  backgroundColor: 'var(--background)',   // ✅
  color: 'var(--foreground)',             // ✅
  borderColor: 'var(--border)',           // ✅
}}

// Border radius - MUST use CSS variables
style={{
  borderRadius: 'var(--radius)',          // ✅ 4px
  borderRadius: 'var(--radius-lg)',       // ✅ 8px
}}
```

### ❌ **WRONG USAGE:**

```typescript
// ❌ NEVER hardcode fonts
fontFamily: 'Lexend, sans-serif'          // ❌ WRONG
fontFamily: 'Manrope'                     // ❌ WRONG

// ❌ NEVER hardcode spacing (use Tailwind OR CSS vars)
padding: '32px'                           // ❌ WRONG
margin: '16px'                            // ❌ WRONG

// ❌ NEVER hardcode colors
color: '#000000'                          // ❌ WRONG
backgroundColor: '#ffffff'                // ❌ WRONG

// ❌ NEVER hardcode border radius
borderRadius: '8px'                       // ❌ WRONG
```

**Report Format:**

```
File: /src/app/components/templates/About.tsx

CSS Variables Violations:
- ❌ Line 45: fontFamily: 'Lexend' (should be var(--font-primary))
- ❌ Line 67: padding: '32px' (should be var(--spacing-8) or className="p-8")
- ❌ Line 89: color: '#000000' (should be var(--foreground))

Correct Usage:
- ✅ Line 23: fontFamily: 'var(--font-primary)'
- ✅ Line 34: backgroundColor: 'var(--background)'
- ✅ Line 56: className="p-8 gap-4"
```

---

## TASK 6: GENERATE COMPREHENSIVE REPORT

**Create a markdown report with:**

### **1. Executive Summary**
```markdown
## Executive Summary

**Total Files Scanned:** X
**Files Using Centralized Data:** X (X%)
**Files With Inline Data:** X (X%)
**CSS Variable Compliance:** X%

**Status:** ✅ Complete | ⚠️ Needs Work | ❌ Critical Issues
```

### **2. Data File Inventory**
```markdown
## Data Files (/src/app/data/)

1. ✅ archive-items.ts — Used by: X templates
2. ✅ blog-posts.ts — Used by: X templates
3. ⚠️ faqs.ts — Used by: X templates (Expected: 13)
...
```

### **3. Template Audit Results**
```markdown
## Templates Audit

### ✅ COMPLIANT (Using Centralized Data)
1. ✅ ServicesTemplate.tsx — imports from services.ts, faqs.ts
2. ✅ AboutTemplate.tsx — imports from team.ts, faqs.ts
...

### ⚠️ PARTIAL COMPLIANCE (Mixed)
1. ⚠️ BlogIndexTemplate.tsx
   - ✅ Imports blog-posts.ts
   - ❌ Has inline category data (lines 45-60)
   - Fix: Move categories to blog-posts.ts

### ❌ NON-COMPLIANT (Inline Data)
1. ❌ CustomTemplate.tsx
   - ❌ Lines 23-45: Inline FAQ data
   - ❌ Lines 67-89: Inline service data
   - Fix: Import from faqs.ts and services.ts
```

### **4. CSS Variables Audit**
```markdown
## CSS Variables Compliance

### Summary
- **Total Violations:** X
- **Font Violations:** X
- **Spacing Violations:** X
- **Color Violations:** X
- **Compliance Rate:** X%

### Violations by File

#### ❌ TemplateName.tsx (5 violations)
1. Line 45: fontFamily: 'Lexend' → var(--font-primary)
2. Line 67: padding: '32px' → var(--spacing-8)
3. Line 89: color: '#000' → var(--foreground)
```

### **5. Recommendations**
```markdown
## Recommendations

### High Priority
1. ❌ Move inline FAQ data in 3 templates to faqs.ts
2. ❌ Fix 15 hardcoded font references
3. ❌ Replace 8 hardcoded padding values

### Medium Priority
1. ⚠️ Verify all templates import correct data files
2. ⚠️ Add missing data files if needed

### Low Priority
1. ✅ Document data file usage in README
```

### **6. Action Items**
```markdown
## Action Items

**Immediate (Critical):**
- [ ] Fix inline data in TemplateName.tsx
- [ ] Replace hardcoded fonts with CSS variables
- [ ] Move mock data to centralized files

**Short-term (Important):**
- [ ] Verify all imports are correct
- [ ] Test all templates with centralized data

**Long-term (Nice to have):**
- [ ] Create ESLint rule to prevent inline data
- [ ] Add automated tests for data imports
```

---

## OUTPUT

Please provide:

1. **Complete scan of all files** in:
   - `/src/app/components/templates/`
   - `/src/app/components/patterns/`
   - `/src/app/components/pages/` (if exists)
   - `/src/app/components/common/`

2. **Comprehensive report** following the format above

3. **Specific fixes** for each violation found

4. **Verification checklist** showing what's complete

---

## DESIGN SYSTEM REQUIREMENTS

**CRITICAL:** All code must adhere to:

1. **CSS Variables (100% required):**
   - ✅ Fonts: `var(--font-primary)` (Lexend) or `var(--font-secondary)` (Manrope)
   - ✅ Spacing: `var(--spacing-*)` OR Tailwind classes
   - ✅ Colors: `var(--foreground)`, `var(--background)`, etc.
   - ✅ Radius: `var(--radius)` or `var(--radius-lg)`

2. **Centralized Data (100% required):**
   - ✅ Import from `/src/app/data/`
   - ❌ NO inline mock data in templates
   - ❌ NO hardcoded content arrays

3. **User Control:**
   - ✅ Users update styling via CSS files only
   - ✅ No code changes needed for style updates
   - ✅ 99%+ time savings for maintenance

---

## EXPECTED TIMELINE

- Task 1 (Templates): 20 min
- Task 2 (Pages): 5 min
- Task 3 (Patterns): 10 min
- Task 4 (Common): 5 min
- Task 5 (CSS Variables): 15 min
- Task 6 (Report): 10 min

**Total:** 45-60 minutes

---

Start the audit now and provide the comprehensive report.
```

### **PROMPT END** ⬆️

---

## 📖 **HOW TO USE THIS PROMPT**

1. **Copy the entire prompt** (between "PROMPT START" and "PROMPT END")
2. **Paste into AI assistant** (Claude, ChatGPT, etc.)
3. **Wait for comprehensive report**
4. **Review violations**
5. **Fix issues systematically**

---

## ✅ **SUCCESS CRITERIA**

**The audit is complete when:**

- [x] All template files scanned
- [x] All pattern files scanned
- [x] All inline data identified
- [x] All CSS variable violations found
- [x] Comprehensive report generated
- [x] Action items documented

**The system is compliant when:**

- [ ] 100% of templates use centralized data
- [ ] 0% inline mock data in templates
- [ ] 100% CSS variable compliance
- [ ] All fonts use `var(--font-primary)` or `var(--font-secondary)`
- [ ] All spacing uses CSS variables OR Tailwind
- [ ] All colors use CSS variables

---

## 📊 **EXPECTED FINDINGS**

Based on the LSX Design system status, you should find:

**✅ Likely Compliant:**
- Services templates (migrated recently)
- Solution templates (migrated recently)
- Industry templates (migrated recently)
- Pattern components (designed to accept props)

**⚠️ May Need Work:**
- Older templates not yet migrated
- Custom page components
- Utility components

**❌ Known Issues:**
- Any templates created before Jan 9, 2025 may have inline data
- Some templates may have hardcoded fonts/spacing

---

## 🎯 **DESIGN SYSTEM COMPLIANCE**

**All code MUST use:**

```typescript
// ✅ FONTS (ONLY these two)
fontFamily: 'var(--font-primary)'      // Lexend (headings, body, UI)
fontFamily: 'var(--font-secondary)'    // Manrope (small text only)

// ✅ SPACING
padding: 'var(--spacing-8)'            // OR className="p-8"
gap: 'var(--spacing-4)'                // OR className="gap-4"

// ✅ COLORS
color: 'var(--foreground)'
backgroundColor: 'var(--background)'
borderColor: 'var(--border)'

// ✅ RADIUS
borderRadius: 'var(--radius)'          // 4px
borderRadius: 'var(--radius-lg)'       // 8px
```

**NEVER use:**
```typescript
// ❌ WRONG - Hardcoded values
fontFamily: 'Lexend, sans-serif'
fontFamily: 'Manrope'
padding: '32px'
color: '#000000'
borderRadius: '8px'
```

---

## 📁 **RELATED DOCUMENTS**

**See:**
- `/guidelines/imports/import-guidelines.md` — Import standards
- `/guidelines/design-tokens/typography.md` — Font usage
- `/guidelines/design-tokens/spacing.md` — Spacing system
- `/guidelines/design-tokens/colors.md` — Color system

---

## 🚀 **NEXT STEPS AFTER AUDIT**

1. **Review the report** — Understand violations
2. **Prioritize fixes** — Critical first (inline data, fonts)
3. **Fix systematically** — One template at a time
4. **Test changes** — Verify no breaking changes
5. **Update Guidelines.md** — Document compliance

---

**Created:** 2025-01-09  
**Author:** LSX Design Team  
**Status:** ⚠️ Action Required  
**Priority:** High  
**Estimated Time:** 45-60 minutes
