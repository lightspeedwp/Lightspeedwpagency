# 🔍 LSX Design Prototype Validation Prompt

**Date:** 2025-01-19  
**Purpose:** Comprehensive prototype validation for import errors, routing issues, and design system compliance  
**Category:** Quality Assurance / System Validation

---

## 📋 **VALIDATION OBJECTIVES**

Perform a complete system audit to ensure:

1. ✅ **Zero import errors** — All imports resolve correctly
2. ✅ **Complete routing coverage** — All navigation links have valid routes
3. ✅ **Design system compliance** — 100% CSS variable usage
4. ✅ **Template consistency** — All templates follow guidelines
5. ✅ **Navigation integrity** — All clickable elements navigate properly
6. ✅ **Font compliance** — Only approved fonts (Lexend, Manrope) used
7. ✅ **Export consistency** — All templates have proper default exports

---

## 🎯 **MASTER VALIDATION PROMPT**

```markdown
I need you to perform a comprehensive validation of the LSX Design prototype to ensure zero import errors, complete routing coverage, and 100% design system compliance.

## CRITICAL GUIDELINES TO FOLLOW:

Before starting, read these guideline files in this exact order:

### **Step 1: System Understanding (REQUIRED)**
1. `/guidelines/Guidelines.md` — Master guidelines (canonical reference)
2. `/guidelines/README.md` — Navigation guide
3. `/guidelines/overview-sitemap.md` — Site structure and URL patterns
4. `/guidelines/overview-components.md` — Component system architecture

### **Step 2: Design System (REQUIRED)**
1. `/guidelines/design-tokens/colors.md` — Color system
2. `/guidelines/design-tokens/typography.md` — Typography (fonts, sizes)
3. `/guidelines/design-tokens/spacing.md` — Spacing scale

### **Step 3: CSS Architecture (CRITICAL)**
1. Read `/src/styles/theme.css` — CSS variables reference
2. Read `/src/styles/utilities.css` — WordPress utility classes
3. Read `/src/styles/wordpress-blocks.css` — Block patterns

## VALIDATION TASKS:

### **TASK 1: Import Error Scan**

**Files to check:**
- `/src/app/App.tsx` — All lazy imports
- `/src/app/components/templates/*.tsx` — All template imports
- `/src/app/components/patterns/*.tsx` — Pattern imports
- `/src/app/components/parts/*.tsx` — Template parts imports

**Actions:**
1. List all lazy imports in App.tsx
2. Verify corresponding template files exist in `/src/app/components/templates/`
3. Check for broken relative imports (../, ./)
4. Identify missing files or typos in import paths
5. Verify all templates have default exports

**Expected output:**
- Total imports: X
- Valid imports: X
- Broken imports: X (list each)
- Missing default exports: X (list each)

---

### **TASK 2: Route Definition Audit**

**Files to check:**
- `/src/app/App.tsx` — renderTemplate() function
- `/src/app/data/site-pages.ts` — Page metadata
- `/src/app/components/parts/SiteHeader.tsx` — Navigation links
- `/src/app/components/parts/SiteFooter.tsx` — Footer links

**Actions:**
1. Extract all route cases from App.tsx switch statement
2. Cross-reference with available templates
3. Check for orphaned routes (route exists but no template)
4. Check for orphaned templates (template exists but no route)
5. Verify navigation links match route definitions

**Expected output:**
- Total routes defined: X
- Routes with templates: X
- Orphaned routes: X (list each)
- Orphaned templates: X (list each)
- Navigation consistency: X%

---

### **TASK 3: Design System Compliance**

**Critical Requirements:**
- ✅ **Font compliance:** ONLY use `var(--font-primary)` (Lexend) or `var(--font-secondary)` (Manrope)
- ✅ **NO hardcoded fonts:** NEVER use 'Lexend, sans-serif' or 'Manrope, sans-serif'
- ✅ **CSS variables:** ALL styling uses CSS variables from `/src/styles/theme.css`
- ✅ **WordPress utilities:** Use `.wp-*` classes from `/src/styles/utilities.css`
- ✅ **NO Tailwind classes:** Eliminate `grid`, `gap-*`, `p-*`, `text-center`, etc.

**Files to audit:**
- `/src/app/components/templates/*.tsx` — Check for hardcoded fonts
- `/src/app/components/patterns/*.tsx` — Verify CSS variable usage
- `/src/styles/wordpress-blocks.css` — Check badge classes

**Actions:**
1. Search for hardcoded font families: `fontFamily: 'Lexend` or `fontFamily: 'Manrope`
2. Search for Tailwind classes: `className="grid"`, `className="gap-`, etc.
3. Verify all inline styles use CSS variables: `var(--`
4. Check badge font sizes use approved variables

**Expected output:**
- Font violations: X (list files and line numbers)
- Tailwind class violations: X (list files)
- CSS variable compliance: X%
- Badge font size: var(--text-base) ✅ or var(--text-small) ❌

---

### **TASK 4: Navigation Link Validation**

**Files to check:**
- `/src/app/components/parts/SiteHeader.tsx` — Main nav + mega menus
- `/src/app/components/parts/SiteFooter.tsx` — Footer navigation
- `/src/app/components/templates/FrontPageTemplate.tsx` — CTA buttons
- All templates with `<Button page="...">` components

**Actions:**
1. Extract all `page` prop values from Button components
2. Extract all navigation links from SiteHeader mega menus
3. Verify each page ID has a corresponding route in App.tsx
4. Test mobile menu links match desktop navigation

**Expected output:**
- Total navigation links: X
- Valid links: X
- Broken links: X (list each with location)
- Missing routes: X (list page IDs)

---

### **TASK 5: Template Export Consistency**

**Critical requirement:** All templates MUST have default exports for lazy loading.

**Files to check:**
- All files in `/src/app/components/templates/*.tsx`

**Actions:**
1. Check each template file for `export default TemplateName;`
2. Verify named export exists: `export function TemplateName()`
3. Identify files with only named exports (missing default)

**Expected output:**
- Total templates: X
- Templates with default export: X
- Missing default exports: X (list files)

---

### **TASK 6: Component Import Validation**

**Common import issues to check:**

1. **Relative path errors:**
   - ❌ `import { Button } from './Buttons'` (wrong path)
   - ✅ `import { Button } from '../blocks/design/Buttons'` (correct)

2. **Missing barrel exports:**
   - Check `/src/app/components/blocks/index.ts` exists
   - Verify all block categories exported

3. **Circular dependencies:**
   - Check for circular imports between components

**Expected output:**
- Relative path errors: X (list files)
- Missing barrel exports: X (list categories)
- Circular dependencies: X (list chains)

---

## 📊 **REPORT FORMAT**

Generate a comprehensive report with these sections:

### **1. Executive Summary**
- Overall health: X%
- Critical issues: X
- Warnings: X
- Recommendations: X

### **2. Import Error Report**
```
Total Imports: X
✅ Valid: X (X%)
❌ Broken: X (X%)

Broken Imports:
- File: /path/to/file.tsx
  Line: X
  Issue: Missing template 'TemplateName.tsx'
  Fix: Create template or remove import
```

### **3. Routing Report**
```
Total Routes: X
✅ Valid: X (X%)
❌ Orphaned: X (X%)

Missing Templates:
- Route: 'example-page'
  Expected: ExamplePageTemplate.tsx
  Action: Create template or remove route
```

### **4. Design System Compliance Report**
```
Font Compliance: X%
✅ Using CSS variables: X files
❌ Hardcoded fonts: X files

Violations:
- File: /path/to/file.tsx
  Line: X
  Found: fontFamily: 'Lexend, sans-serif'
  Fix: fontFamily: 'var(--font-primary)'
```

### **5. Navigation Integrity Report**
```
Total Links: X
✅ Valid: X (X%)
❌ Broken: X (X%)

Broken Links:
- Location: SiteHeader mega menu
  Page ID: 'missing-page'
  Fix: Add route or update navigation
```

### **6. Action Items (Prioritized)**
```
🔴 CRITICAL (Fix immediately):
1. [Issue description]
2. [Issue description]

🟡 WARNINGS (Fix soon):
1. [Issue description]
2. [Issue description]

🟢 IMPROVEMENTS (Optional):
1. [Suggestion]
2. [Suggestion]
```

---

## 🔧 **AUTOMATED FIX COMMANDS**

For common issues, provide fix commands:

### **Fix Missing Default Exports:**
```bash
# Add default export to template
echo "export default TemplateName;" >> /src/app/components/templates/TemplateName.tsx
```

### **Fix Font Variables:**
```bash
# Find all hardcoded Lexend fonts
grep -r "fontFamily: 'Lexend" /src/app/components/

# Replace with CSS variable (manual fix required)
# Change: fontFamily: 'Lexend, sans-serif'
# To: fontFamily: 'var(--font-primary)'
```

### **Fix Badge Font Size:**
Update in `/src/styles/wordpress-blocks.css`:
```css
.wp-badge--hero {
  font-size: var(--text-base); /* Increased from var(--text-small) */
}
```

---

## ✅ **VALIDATION CHECKLIST**

After completing all tasks, verify:

- [ ] Zero import errors
- [ ] All routes have templates
- [ ] All navigation links work
- [ ] 100% CSS variable usage for fonts
- [ ] All templates have default exports
- [ ] Badge font size is readable (var(--text-base))
- [ ] No Tailwind classes in templates
- [ ] WordPress utility classes used (`.wp-*`)
- [ ] All mega menu links valid
- [ ] Mobile menu matches desktop navigation

---

## 📁 **FILES TO CREATE**

Generate these report files:

1. `/reports/2025-01/validation/import-errors-report.md`
2. `/reports/2025-01/validation/routing-audit-report.md`
3. `/reports/2025-01/validation/design-system-compliance.md`
4. `/reports/2025-01/validation/navigation-integrity-report.md`
5. `/reports/2025-01/validation/validation-summary.md` (Executive summary)

---

## 🚀 **NEXT STEPS AFTER VALIDATION**

1. **Fix critical issues** (broken imports, missing routes)
2. **Update design system compliance** (font variables, CSS classes)
3. **Test all navigation** (click through every link)
4. **Run compliance scorecard** (verify WCAG 2.1 AA)
5. **Update documentation** (if routes or templates changed)

---

## 💡 **COMMON ISSUES & FIXES**

### **Issue 1: Template Missing Default Export**
**Error:** `Failed to fetch dynamically imported module`
**Fix:** Add `export default TemplateName;` at end of file

### **Issue 2: Hardcoded Font Family**
**Error:** Design system violation
**Fix:** Replace `fontFamily: 'Lexend, sans-serif'` with `fontFamily: 'var(--font-primary)'`

### **Issue 3: Badge Font Too Small**
**Error:** Poor readability
**Fix:** Update `.wp-badge--hero` to use `var(--text-base)` instead of `var(--text-small)`

### **Issue 4: Tailwind Classes in Templates**
**Error:** CSS-first architecture violation
**Fix:** Replace Tailwind classes with WordPress utilities (`.wp-*`) or CSS variables

### **Issue 5: Broken Navigation Link**
**Error:** Button navigates to undefined route
**Fix:** Add route to App.tsx or update Button `page` prop

---

**Created:** 2025-01-19  
**Type:** Validation & Quality Assurance Prompt  
**Status:** Ready to Execute  
**Estimated Time:** 45-60 minutes for complete validation
```

---

## 🎓 **HOW TO USE THIS PROMPT**

1. **Copy the entire "MASTER VALIDATION PROMPT" section** (everything in the code block)
2. **Paste into AI assistant** (Claude, GPT-4, etc.)
3. **Wait for comprehensive analysis** (~45-60 minutes)
4. **Review generated reports** in `/reports/2025-01/validation/`
5. **Fix critical issues first** (broken imports, missing routes)
6. **Re-run validation** to confirm fixes

---

## 📚 **RELATED GUIDELINES**

- **[/guidelines/Guidelines.md](../Guidelines.md)** — Master guidelines
- **[/guidelines/design-tokens/typography.md](../design-tokens/typography.md)** — Font system
- **[/guidelines/design-tokens/spacing.md](../design-tokens/spacing.md)** — Spacing scale
- **[/guidelines/overview-sitemap.md](../overview-sitemap.md)** — Site structure
- **[/guidelines/routing/routing-complete-reference.md](../routing/routing-complete-reference.md)** — Routing guide (if exists)

---

**End of Prompt Template**
