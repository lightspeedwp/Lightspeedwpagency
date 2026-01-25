# 🎯 TAILWIND TO WORDPRESS GLOBAL STYLES MIGRATION PLAN

**Date:** 2025-01-09  
**Objective:** Eliminate all Tailwind CSS classes and migrate to WordPress-aligned global styles  
**Status:** 📋 **PLANNING**

---

## 🎯 **MIGRATION GOALS**

### **Primary Objectives:**
1. ✅ **Remove ALL Tailwind CSS classes** from components, templates, and pages
2. ✅ **Replace with WordPress global styles** (utilities.css + components.css)
3. ✅ **Update ALL guidelines** to remove Tailwind references
4. ✅ **Audit ALL stylesheets** for design system alignment
5. ✅ **Implement CSS animations** from guidelines
6. ✅ **100% CSS variable compliance** (zero hardcoded values)

### **Success Criteria:**
- Zero Tailwind classes in codebase (`className="..."` only for semantic classes)
- All styling via CSS files (utilities.css, components.css, wordpress-blocks.css)
- Guidelines reflect WordPress global styles approach
- All stylesheets use design system tokens
- CSS animations implemented per guidelines

---

## 📋 **PHASE 1: AUDIT GUIDELINES**

### **Prompt for AI Agent:**

```markdown
**TASK: AUDIT GUIDELINES FOR TAILWIND REFERENCES**

**Objective:** Find and document all references to Tailwind CSS in guidelines and create replacement guidance for WordPress global styles.

**Instructions:**
1. Search all files in `/guidelines/` directory for:
   - Mentions of "Tailwind"
   - References to Tailwind classes (p-*, gap-*, grid-*, flex-*, etc.)
   - Examples showing Tailwind usage
   - Documentation encouraging Tailwind usage

2. For each occurrence, document:
   - File path
   - Line numbers
   - Current guidance (Tailwind-based)
   - Proposed replacement (WordPress global styles)

3. Create a comprehensive replacement guide:
   - How to use utilities.css classes
   - How to use components.css classes
   - How to use wordpress-blocks.css classes
   - When to use inline styles with CSS variables
   - When to create new CSS classes

4. Output format:
   - List of files with Tailwind references
   - Replacement guidance for each file
   - Updated examples using WordPress global styles
   - Migration checklist

**Search Patterns:**
- `Tailwind`
- `className="`
- `grid grid-cols-`
- `flex flex-`
- `p-[0-9]`, `gap-[0-9]`, `mb-[0-9]`, etc.
- `md:`, `lg:`, `xl:` (responsive prefixes)
```

### **Expected Output:**

**Files to Audit:**
- `/guidelines/design-tokens/spacing.md`
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-patterns-modern.md`
- `/guidelines/Guidelines.md`
- All component-specific guidelines
- All pattern guidelines

**Replacement Strategy:**

| Current (Tailwind) | Replacement (WordPress Global Styles) |
|-------------------|--------------------------------------|
| `className="p-6 gap-4 mb-8"` | `className="wp-padding-6 wp-gap-4 wp-margin-bottom-8"` OR inline CSS variables |
| `className="grid grid-cols-3 gap-6"` | `className="wp-block-columns wp-gap-6"` + CSS Grid in stylesheet |
| `className="flex items-center"` | `className="wp-flex-center"` OR flexbox utilities |
| `className="text-lg font-bold"` | CSS variables: `fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)'` |
| `className="bg-primary text-white"` | CSS variables: `backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)'` |

---

## 📋 **PHASE 2: AUDIT CODEBASE**

### **Prompt for AI Agent:**

```markdown
**TASK: SCAN CODEBASE FOR TAILWIND CLASSES**

**Objective:** Find all occurrences of Tailwind CSS classes in components, templates, and pages.

**Instructions:**
1. Search all `.tsx` and `.ts` files for Tailwind class usage:
   - Pattern: `className="[^"]*(?:p-|m-|gap-|grid-|flex-|text-|bg-|border-|rounded-|w-|h-|max-|min-)`
   - Focus on: `/src/app/components/`, `/src/app/templates/`, `/src/app/patterns/`

2. For each file with Tailwind classes, document:
   - File path
   - Line numbers
   - Current Tailwind classes used
   - Component/element type
   - Proposed CSS replacement (class name or inline style)

3. Categorize findings:
   - **Layout classes** (grid, flex, gap, p-, m-)
   - **Typography classes** (text-*, font-*)
   - **Color classes** (bg-*, text-*, border-*)
   - **Sizing classes** (w-*, h-*, max-*, min-*)
   - **Responsive classes** (md:*, lg:*, xl:*)

4. Create migration priority:
   - **High Priority:** Templates (most visible)
   - **Medium Priority:** Patterns (reusable components)
   - **Low Priority:** Utility components

**Output Format:**
```
FILE: /src/app/components/templates/FrontPageTemplate.tsx
LINES: 145, 230, 340
TAILWIND CLASSES FOUND:
  - Line 145: className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  - Line 230: className="p-6 mb-8 rounded-lg"
  - Line 340: className="flex items-center gap-4"

PROPOSED REPLACEMENT:
  - Line 145: Create .wp-block-grid-3-cols CSS class
  - Line 230: Use CSS variables inline: padding: 'var(--spacing-6)', marginBottom: 'var(--spacing-8)', borderRadius: 'var(--radius-lg)'
  - Line 340: Create .wp-flex-gap-4 utility class

PRIORITY: HIGH (template file)
```

**Search Command:**
```bash
find src/app -name "*.tsx" -type f -exec grep -l "className=\".*\(p-\|m-\|gap-\|grid-\|flex-\|text-\|bg-\|border-\|rounded-\|w-\|h-\|max-\|min-\).*\"" {} \;
```
```

### **Expected Output:**

**Files with Tailwind Classes:** ~60-80 files estimated

**Categorization:**
1. **Templates** (~24 files) — HIGH PRIORITY
2. **Patterns** (~15 files) — MEDIUM PRIORITY  
3. **Common Components** (~10 files) — MEDIUM PRIORITY
4. **Blocks** (~20 files) — LOW PRIORITY
5. **UI Components** (~15 files) — LOW PRIORITY

---

## 📋 **PHASE 3: STYLESHEET AUDIT**

### **Prompt for AI Agent:**

```markdown
**TASK: AUDIT STYLESHEETS FOR DESIGN SYSTEM ALIGNMENT**

**Objective:** Review all CSS files to ensure 100% CSS variable usage and design system compliance.

**Instructions:**
1. Audit these stylesheet files:
   - `/src/styles/theme.css`
   - `/src/styles/theme-base.css`
   - `/src/styles/theme-light.css`
   - `/src/styles/theme-dark.css`
   - `/src/styles/utilities.css`
   - `/src/styles/components.css`
   - `/src/styles/wordpress-blocks.css`
   - `/src/styles/fonts.css`
   - `/src/styles/global.css`

2. Check for:
   - ✅ Hardcoded colors (hex, rgb, hsl) → Should use CSS variables
   - ✅ Hardcoded spacing values (px, rem) → Should use CSS variables
   - ✅ Hardcoded font families → Should use var(--font-primary) or var(--font-secondary)
   - ✅ Hardcoded font sizes → Should use var(--text-*) variables
   - ✅ Hardcoded border radius → Should use var(--radius-*) variables
   - ✅ Missing utility classes that are needed
   - ✅ Duplicate styles that should be consolidated

3. Verify CSS variable coverage:
   - All colors defined in theme-base.css
   - All spacing values defined
   - All typography tokens defined
   - WordPress preset variables aligned

4. Document missing utilities:
   - Layout utilities needed (grids, flexbox)
   - Spacing utilities needed (padding, margin, gap)
   - Typography utilities needed
   - Component utilities needed

**Output Format:**
```
FILE: /src/styles/utilities.css
ISSUES FOUND:
  ✅ Line 45: Hardcoded color #10b981 → Replace with var(--primary)
  ✅ Line 78: Hardcoded padding 24px → Replace with var(--spacing-6)
  ❌ Missing: .wp-block-grid-2-cols utility class
  ❌ Missing: .wp-flex-center utility class

FILE: /src/styles/components.css
ISSUES FOUND:
  ✅ Line 120: Font family 'Lexend' → Replace with var(--font-primary)
  ❌ Missing: .card-hover animation styles

DESIGN SYSTEM COMPLIANCE: 85% (15% has hardcoded values)
```
```

---

## 📋 **PHASE 4: IMPLEMENT CSS UTILITIES**

### **Prompt for AI Agent:**

```markdown
**TASK: IMPLEMENT MISSING CSS UTILITIES**

**Objective:** Create comprehensive CSS utility classes to replace all Tailwind usage.

**Instructions:**
1. Based on Phase 2 audit results, create CSS utility classes in `/src/styles/utilities.css`:

**Layout Utilities:**
```css
/* Grid Utilities */
.wp-block-grid-2-cols { display: grid; grid-template-columns: repeat(2, 1fr); }
.wp-block-grid-3-cols { display: grid; grid-template-columns: repeat(3, 1fr); }
.wp-block-grid-4-cols { display: grid; grid-template-columns: repeat(4, 1fr); }

/* Responsive Grid Utilities */
@media (max-width: 768px) {
  .wp-block-grid-2-cols,
  .wp-block-grid-3-cols,
  .wp-block-grid-4-cols {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .wp-block-grid-3-cols,
  .wp-block-grid-4-cols {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Flexbox Utilities */
.wp-flex { display: flex; }
.wp-flex-center { display: flex; align-items: center; justify-content: center; }
.wp-flex-between { display: flex; align-items: center; justify-content: space-between; }
.wp-flex-start { display: flex; align-items: center; justify-content: flex-start; }
.wp-flex-end { display: flex; align-items: center; justify-content: flex-end; }
.wp-flex-col { display: flex; flex-direction: column; }
.wp-flex-wrap { display: flex; flex-wrap: wrap; }

/* Gap Utilities */
.wp-gap-2 { gap: var(--spacing-2); }
.wp-gap-4 { gap: var(--spacing-4); }
.wp-gap-6 { gap: var(--spacing-6); }
.wp-gap-8 { gap: var(--spacing-8); }
.wp-gap-12 { gap: var(--spacing-12); }
.wp-gap-16 { gap: var(--spacing-16); }
```

**Spacing Utilities:**
```css
/* Padding Utilities */
.wp-padding-4 { padding: var(--spacing-4); }
.wp-padding-6 { padding: var(--spacing-6); }
.wp-padding-8 { padding: var(--spacing-8); }

/* Margin Utilities */
.wp-margin-bottom-4 { margin-bottom: var(--spacing-4); }
.wp-margin-bottom-8 { margin-bottom: var(--spacing-8); }
.wp-margin-bottom-16 { margin-bottom: var(--spacing-16); }
```

**Typography Utilities:**
```css
/* Text Alignment */
.wp-text-center { text-align: center; }
.wp-text-left { text-align: left; }
.wp-text-right { text-align: right; }

/* Max Width Utilities (for readability) */
.wp-max-w-prose { max-width: 65ch; }
.wp-max-w-3xl { max-width: 768px; }
.wp-max-w-4xl { max-width: 896px; }
.wp-max-w-6xl { max-width: 1152px; }
```

2. Ensure all utilities use CSS variables (no hardcoded values)
3. Add responsive variants where needed
4. Document each utility class purpose
```

---

## 📋 **PHASE 5: IMPLEMENT CSS ANIMATIONS**

### **Prompt for AI Agent:**

```markdown
**TASK: IMPLEMENT CSS ANIMATIONS FROM GUIDELINES**

**Objective:** Add CSS animations defined in design guidelines.

**Instructions:**
1. Review `/guidelines/design-patterns-modern.md` for animation specifications
2. Implement animations in `/src/styles/components.css`:

**Hover Animations:**
```css
/* Card Hover Animation */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Button Hover Animation */
.button-hover {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Icon Hover Animation */
.icon-hover {
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-hover:hover {
  transform: scale(1.1);
}
```

**Loading Animations:**
```css
/* Fade In Animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Slide Up Animation */
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.6s ease-out;
}

/* Scale In Animation */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.4s ease-out;
}
```

**Focus Animations:**
```css
/* Focus Ring (WCAG 2.1 AA) */
.focus-ring:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  transition: outline-offset 0.2s ease;
}

.focus-ring:focus:not(:focus-visible) {
  outline: none;
}
```

3. Respect reduced motion preference:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
```

---

## 📋 **PHASE 6: MIGRATION EXECUTION**

### **Batch-by-Batch Migration:**

**Batch 1: High Priority Templates (8 templates)**
- FrontPageTemplate
- ServicesTemplate
- ContactPageTemplate
- AboutTemplate
- PortfolioArchiveTemplate
- BlogIndexTemplate
- PricingTemplate
- GuaranteesTemplate

**Batch 2: Medium Priority Templates (8 templates)**
- SinglePostTemplate
- PortfolioSingleTemplate
- ServiceDetailTemplate
- WordPressSolutionTemplate
- WooCommerceSolutionTemplate
- HostingTemplate
- TeamTemplate
- FAQTemplate

**Batch 3: Low Priority Templates (8 templates)**
- All service-specific templates
- Solution templates
- Archive templates
- Error templates

**Batch 4: Patterns (15 files)**
- All pattern components in `/src/app/components/patterns/`

**Batch 5: Common Components (10 files)**
- Container, Section, Breadcrumbs, etc.

**Batch 6: Blocks (20 files)**
- All block components in `/src/app/components/blocks/`

---

## 📋 **MIGRATION CHECKLIST**

### **For Each File:**
- [ ] Identify all Tailwind classes
- [ ] Replace with CSS utility classes OR
- [ ] Replace with inline CSS variables
- [ ] Remove `className` if no semantic classes needed
- [ ] Test visual appearance (before/after screenshots)
- [ ] Verify responsive behavior
- [ ] Verify dark mode compatibility
- [ ] Verify accessibility (focus states, keyboard nav)

### **For Each Stylesheet:**
- [ ] Audit for hardcoded values
- [ ] Replace with CSS variables
- [ ] Add missing utility classes
- [ ] Add missing component styles
- [ ] Add CSS animations
- [ ] Test across all templates
- [ ] Document new classes in guidelines

### **For Guidelines:**
- [ ] Remove Tailwind references
- [ ] Add WordPress global styles guidance
- [ ] Update code examples
- [ ] Add CSS utility class reference
- [ ] Document when to use inline styles vs. classes

---

## 🎯 **REPLACEMENT STRATEGY**

### **Decision Tree:**

```
Is the style reused across multiple components?
  ├─ YES → Create CSS utility class in utilities.css
  └─ NO → Use inline CSS variables

Is it a layout pattern (grid, flex)?
  ├─ YES → Create semantic layout class
  └─ NO → Continue to next question

Is it component-specific styling?
  ├─ YES → Add to components.css
  └─ NO → Use utility class or inline styles

Is it a WordPress block pattern?
  ├─ YES → Add to wordpress-blocks.css
  └─ NO → Use utilities.css
```

### **Examples:**

**Tailwind Grid:**
```tsx
// BEFORE (Tailwind)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// AFTER (WordPress Global Styles)
<div className="wp-block-grid-3-cols wp-gap-8">
```

**Tailwind Flexbox:**
```tsx
// BEFORE (Tailwind)
<div className="flex items-center justify-between gap-4">

// AFTER (WordPress Global Styles)
<div className="wp-flex-between wp-gap-4">
```

**Tailwind Spacing:**
```tsx
// BEFORE (Tailwind)
<div className="p-6 mb-8 rounded-lg">

// AFTER (WordPress Global Styles - Inline CSS Variables)
<div style={{
  padding: 'var(--spacing-6)',
  marginBottom: 'var(--spacing-8)',
  borderRadius: 'var(--radius-lg)'
}}>
```

**Tailwind Typography:**
```tsx
// BEFORE (Tailwind)
<h2 className="text-3xl font-bold mb-4">

// AFTER (WordPress Global Styles - CSS Variables)
<h2 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-h2)',
  fontWeight: 'var(--font-weight-bold)',
  marginBottom: 'var(--spacing-4)'
}}>
```

---

## 📊 **PROGRESS TRACKING**

### **Phase Completion:**
- [ ] Phase 1: Audit Guidelines (0%)
- [ ] Phase 2: Audit Codebase (0%)
- [ ] Phase 3: Stylesheet Audit (0%)
- [ ] Phase 4: Implement CSS Utilities (0%)
- [ ] Phase 5: Implement CSS Animations (0%)
- [ ] Phase 6: Migration Execution (0%)

### **File Migration Progress:**
- Templates: 0/24 (0%)
- Patterns: 0/15 (0%)
- Common Components: 0/10 (0%)
- Blocks: 0/20 (0%)
- Guidelines: 0/30 (0%)

### **Stylesheet Progress:**
- utilities.css: Needs audit
- components.css: Needs audit
- wordpress-blocks.css: Needs audit
- theme.css files: Needs audit

---

## 🎊 **SUCCESS METRICS**

**When Complete:**
- ✅ **Zero Tailwind classes** in codebase
- ✅ **100% CSS variable usage** in stylesheets
- ✅ **All guidelines updated** to WordPress global styles
- ✅ **All animations implemented** per design guidelines
- ✅ **All stylesheets audited** and aligned
- ✅ **User can control ALL styling** via CSS files

---

**Created:** 2025-01-09  
**Estimated Time:** 8-12 hours (phased approach)  
**Priority:** HIGH  
**Status:** 📋 **READY TO EXECUTE**
