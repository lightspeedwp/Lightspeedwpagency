# Automated Component Auditing

**Last Updated:** December 26, 2024  
**Status:** ✅ Complete  
**Tools Available:** 2 (SampleAuditor, DesignSystemValidator)

---

## 📋 OVERVIEW

This guide explains how to use the automated auditing tools to validate components against the LSX Design System requirements.

---

## 🛠️ AVAILABLE TOOLS

### **1. SampleAuditor**
**File:** `/src/app/utils/sampleAuditor.ts`

**Purpose:** Audit specific components with detailed issue reports and fix examples

**Features:**
- Font family validation (Lexend/Manrope only)
- Color usage validation (CSS variables only)
- Accessibility checks (WCAG AA/AAA)
- Generates actionable fix examples
- Exports detailed markdown reports

**Usage:**
```typescript
import { runSampleAudit, exportAuditReport } from './utils/sampleAuditor';

// Audit specific components
const summary = await runSampleAudit([
  'header',
  '.hero-section',
  '#main-content',
  'article.blog-card'
]);

// Export report
const markdown = exportAuditReport(summary);
console.log(markdown);
```

---

### **2. DesignSystemValidator**
**File:** `/src/app/utils/designSystemValidator.ts`

**Purpose:** Validate entire page or component tree against design system rules

**Features:**
- Comprehensive rule-based validation
- Error and warning categorization
- Quick console validation
- Detailed markdown export
- Category-based reporting (fonts, colors, spacing, etc.)

**Usage:**
```typescript
import { validateDesignSystem, quickValidate, exportValidationReport } from './utils/designSystemValidator';

// Quick validation (console output)
quickValidate();

// Full validation
const report = validateDesignSystem();
console.log(`Score: ${report.score}/100`);
console.log(`Issues: ${report.issues.length}`);

// Export report
const markdown = exportValidationReport(report);
```

---

## 📊 VALIDATION RULES

### **Font Rules:**
1. ✅ Only Lexend and Manrope fonts allowed
2. ✅ Lexend for headings, body, buttons, navigation
3. ✅ Manrope for small text (14px or smaller) only
4. ✅ Font sizes must use CSS variables (var(--text-*))

### **Color Rules:**
5. ✅ All colors must use CSS variables
6. ✅ No hardcoded hex colors (#1E6AFF)
7. ✅ No hardcoded RGB/RGBA values
8. ✅ Use semantic tokens (--foreground, --primary, etc.)

### **Typography Rules:**
9. ✅ Font sizes use CSS variables
10. ✅ Font weights use CSS variables
11. ✅ Line heights use CSS variables (when specified)
12. ✅ No hardcoded px/rem values

### **Spacing Rules:**
13. ✅ Use Tailwind classes for spacing (p-*, m-*, gap-*)
14. ✅ Avoid inline padding/margin values
15. ✅ Use design system spacing scale

### **Accessibility Rules:**
16. ✅ All images have alt text
17. ✅ Interactive elements have accessible labels
18. ✅ Proper heading hierarchy (H1 → H2 → H3)
19. ✅ Focus states visible on all interactive elements
20. ✅ Touch targets minimum 44×44px

---

## 🎯 RUNNING AUDITS

### **Option 1: Quick Validation**

**When to use:** Quick check before committing code

```typescript
import { quickValidate } from './utils/designSystemValidator';

// In browser console or component
quickValidate();

// Output:
// 🔍 Running Design System Validation...
// 
// Status: ✅ PASSED
// Score: 96/100
// Checks: 1,234/1,285 passed
// 
// Found 8 issues:
//   🔴 2 errors
//      - No Hardcoded Colors: Hardcoded hex color found: #1E6AFF
//      - Images Must Have Alt Text: Image missing alt attribute
//   🟡 6 warnings
// 
// Run exportValidationReport() for detailed report
```

---

### **Option 2: Component-Specific Audit**

**When to use:** Testing specific components or templates

```typescript
import { SampleAuditor } from './utils/sampleAuditor';

const auditor = new SampleAuditor();

// Audit single component
const result = auditor.auditComponent('.hero-section');
console.log(`Score: ${result.score}/100`);
console.log(`Issues: ${result.issues.length}`);

// Review issues
result.issues.forEach(issue => {
  console.log(`${issue.severity}: ${issue.description}`);
  console.log(`Fix: ${issue.fix}`);
});

// Review fix examples
result.fixExamples.forEach(example => {
  console.log(`Issue: ${example.issue}`);
  console.log('Before:', example.before);
  console.log('After:', example.after);
});
```

---

### **Option 3: Full Page Audit**

**When to use:** Testing complete templates or pages

```typescript
import { runSampleAudit, exportAuditReport } from './utils/sampleAuditor';

// Audit multiple components
const summary = await runSampleAudit([
  'header',
  '.hero-section',
  '.features-section',
  '.testimonials-section',
  '.cta-section',
  'footer'
]);

console.log(`
  Total: ${summary.totalComponents}
  Passed: ${summary.passedComponents}
  Failed: ${summary.failedComponents}
  Average: ${summary.averageScore}/100
`);

// Export detailed report
const report = exportAuditReport(summary);
// Save to file or display
```

---

## 📋 INTERPRETING RESULTS

### **Severity Levels:**

**🔴 Critical (Errors):**
- Must be fixed before deployment
- Breaks design system compliance
- Examples:
  - Hardcoded colors
  - Unapproved fonts
  - Missing alt text
  - Missing accessible labels

**🟡 Warning:**
- Should be fixed soon
- Reduces consistency
- Examples:
  - Inline spacing instead of Tailwind
  - Hardcoded font sizes
  - Missing focus indicators
  - Touch targets too small

**ℹ️ Info:**
- Best practice suggestions
- Nice to have improvements
- Examples:
  - Could use better naming
  - Consider adding loading="lazy"
  - Could simplify code

---

### **Score Interpretation:**

| Score | Grade | Status | Action |
|-------|-------|--------|--------|
| 95-100 | A+ | ✅ Excellent | Minor polish only |
| 90-94 | A | ✅ Good | Fix warnings |
| 85-89 | B | ⚠️ Fair | Fix errors, then warnings |
| 80-84 | C | ⚠️ Needs Work | Review and fix issues |
| <80 | F | ❌ Failing | Major refactor needed |

---

## 🔧 COMMON ISSUES & FIXES

### **Issue 1: Hardcoded Colors**

**Detection:**
```
🔴 [colors] Hardcoded hex color found: #1E6AFF
Location: button.cta-button
Current: backgroundColor: '#1E6AFF'
Expected: backgroundColor: 'var(--primary)'
```

**Fix:**
```tsx
// Before:
<button style={{
  backgroundColor: '#1E6AFF',
  color: '#FFFFFF'
}}>

// After:
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>
```

---

### **Issue 2: Unapproved Fonts**

**Detection:**
```
🔴 [fonts] Unapproved font: Arial, sans-serif
Location: p.description
Current: fontFamily: 'Arial, sans-serif'
Expected: fontFamily: 'Lexend, sans-serif'
```

**Fix:**
```tsx
// Before:
<p style={{
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px'
}}>

// After:
<p style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-base)'
}}>
```

---

### **Issue 3: Missing Alt Text**

**Detection:**
```
🔴 [accessibility] Image missing alt attribute
Location: img.hero-image
Current: <img src="hero.jpg" />
Expected: <img src="hero.jpg" alt="..." />
```

**Fix:**
```tsx
// Before:
<img src="hero.jpg" />

// After (descriptive):
<img src="hero.jpg" alt="Team collaborating in modern office" />

// After (decorative):
<img src="pattern.svg" alt="" role="presentation" />
```

---

### **Issue 4: Icon-Only Buttons**

**Detection:**
```
🔴 [accessibility] Button missing accessible label
Location: button.search-button
Current: <button><SearchIcon /></button>
Expected: <button aria-label="Search">...</button>
```

**Fix:**
```tsx
// Before:
<button><SearchIcon /></button>

// After:
<button aria-label="Search" title="Search">
  <SearchIcon />
</button>
```

---

### **Issue 5: Hardcoded Font Sizes**

**Detection:**
```
🔴 [typography] Hardcoded font size: 16px
Location: p.content
Current: fontSize: '16px'
Expected: fontSize: 'var(--text-base)'
```

**Fix:**
```tsx
// Before:
<p style={{ fontSize: '16px' }}>

// After:
<p style={{ fontSize: 'var(--text-base)' }}>
```

---

### **Issue 6: Inline Spacing**

**Detection:**
```
🟡 [spacing] Hardcoded padding: 32px
Location: div.card
Current: style={{ padding: '32px' }}
Expected: className="p-8"
```

**Fix:**
```tsx
// Before:
<div style={{ padding: '32px' }}>

// After:
<div className="p-8">  // 32px = 8 * 4px

// Or responsive:
<div className="p-6 md:p-8 lg:p-12">
```

---

## 📈 BEST PRACTICES

### **1. Run Audits Regularly:**
- Before committing code
- After adding new components
- Before deploying to production
- Weekly on full codebase

### **2. Fix in Priority Order:**
1. Critical errors (hardcoded colors, missing alt text)
2. Accessibility warnings
3. Consistency warnings (spacing, fonts)
4. Info-level suggestions

### **3. Automate Where Possible:**
```json
// package.json
{
  "scripts": {
    "audit": "npm run build && node scripts/audit.js",
    "audit:quick": "node scripts/quick-audit.js",
    "precommit": "npm run audit:quick"
  }
}
```

### **4. Track Progress:**
- Document baseline score
- Set target score (≥95%)
- Track improvements over time
- Celebrate wins!

---

## 🧪 SAMPLE AUDIT WORKFLOW

### **Step 1: Run Quick Check**
```typescript
quickValidate();
// Output: Score: 88/100, 15 issues
```

### **Step 2: Generate Detailed Report**
```typescript
const report = validateDesignSystem();
const markdown = exportValidationReport(report);
// Save to /audit-report.md
```

### **Step 3: Review Critical Issues**
```typescript
const criticalIssues = report.issues.filter(i => i.severity === 'error');
console.log(`Critical: ${criticalIssues.length}`);
criticalIssues.forEach(issue => {
  console.log(issue.description);
  console.log(issue.fix);
});
```

### **Step 4: Fix Issues**
Apply fixes from code examples in report

### **Step 5: Re-Run Audit**
```typescript
quickValidate();
// Output: Score: 96/100, 3 issues ✅
```

### **Step 6: Fix Remaining Warnings**
Continue until score ≥95%

---

## 📊 AUDIT METRICS

### **Track These Metrics:**

**Overall Health:**
- Design system compliance score
- Critical issues count
- Warning issues count
- Trend over time

**Category Breakdown:**
- Font compliance: X/Y passed
- Color compliance: X/Y passed
- Accessibility: X/Y passed
- Spacing consistency: X/Y passed

**Component Scores:**
- Highest scoring components
- Lowest scoring components
- Components needing attention

---

## 🎯 GOALS

### **Current State:**
- Average score: 92/100
- Components passing: 80%
- Critical issues: 12

### **Target State:**
- Average score: ≥95/100
- Components passing: ≥95%
- Critical issues: 0

### **Timeline:**
- Week 1: Fix all critical issues
- Week 2: Fix all accessibility warnings
- Week 3: Fix all consistency warnings
- Week 4: Achieve 95%+ compliance

---

## 📚 RELATED DOCUMENTATION

- **Validation Rules:** `/src/app/utils/designSystemValidator.ts`
- **Sample Auditor:** `/src/app/utils/sampleAuditor.ts`
- **Sample Report:** `/SAMPLE-AUDIT-REPORT-DEC-26.md`
- **Design Tokens:** `/guidelines/design-tokens/`
- **Component Guidelines:** `/guidelines/components/`

---

**Last Updated:** December 26, 2024  
**Tools Version:** 2.0  
**Status:** ✅ **PRODUCTION READY**
