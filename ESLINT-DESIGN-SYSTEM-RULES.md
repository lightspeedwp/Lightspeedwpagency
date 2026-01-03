# ESLint Design System Rules — Complete Guide

**Automated enforcement of LSX Design System best practices**

---

## 📋 Overview

Custom ESLint plugin to automatically detect and prevent design system violations:

✅ **No hardcoded colors** — Must use CSS variables  
✅ **No hardcoded font sizes** — Must use CSS variables  
✅ **Only approved fonts** — Lexend and Manrope only  
✅ **No inline spacing** — Use Tailwind classes  
✅ **Require CSS variables** — For colors, borders, radius  
✅ **WCAG touch targets** — Minimum 44×44px  

---

## 🚀 Installation

### **1. Install ESLint Dependencies**

```bash
npm install --save-dev \
  eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

### **2. Link Custom Plugin**

The custom `eslint-plugin-design-system` is already included in the project at `/eslint-plugin-design-system/`.

### **3. Configuration Already Set Up**

The `.eslintrc.json` file is already configured with all design system rules.

---

## 📖 Usage

### **Run ESLint**

```bash
# Check all files
npm run lint

# Check specific file
npx eslint src/app/components/templates/FrontPageTemplate.tsx

# Auto-fix issues (where possible)
npm run lint:fix

# Check and show warnings
npx eslint src/app/components --ext .tsx,.ts
```

### **Add to package.json Scripts**

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint src/app --ext .tsx,.ts",
    "lint:fix": "eslint src/app --ext .tsx,.ts --fix",
    "lint:templates": "eslint src/app/components/templates --ext .tsx",
    "lint:components": "eslint src/app/components/common --ext .tsx",
    "lint:quiet": "eslint src/app --ext .tsx,.ts --quiet"
  }
}
```

---

## 🔧 Custom Rules

### **1. no-hardcoded-colors**

**Level:** ERROR ⛔

**Description:** Prevents hardcoded color values (hex, rgb, rgba, hsl, hsla)

**❌ Bad:**
```tsx
<div style={{ backgroundColor: '#ffffff' }}>
<div style={{ color: 'rgb(51, 51, 51)' }}>
<div style={{ border: '1px solid #eee' }}>
```

**✅ Good:**
```tsx
<div style={{ backgroundColor: 'var(--background)' }}>
<div style={{ color: 'var(--foreground)' }}>
<div style={{ border: '1px solid var(--border-soft)' }}>
```

**Error Messages:**
- `Hardcoded background color "#ffffff" found. Use var(--background) or var(--card)`
- `Hardcoded text color "rgb(51, 51, 51)" found. Use var(--foreground) or semantic colors`
- `Hardcoded border color "#eee" found. Use var(--border) or var(--border-soft)`

---

### **2. no-hardcoded-font-sizes**

**Level:** ERROR ⛔

**Description:** Prevents hardcoded font size values (px, rem, em, pt)

**❌ Bad:**
```tsx
<h1 style={{ fontSize: '48px' }}>
<p style={{ fontSize: '16px' }}>
<span style={{ fontSize: '2rem' }}>
```

**✅ Good:**
```tsx
<h1 style={{ fontSize: 'var(--text-h1)' }}>
<p style={{ fontSize: 'var(--text-base)' }}>
<span style={{ fontSize: 'var(--text-lg)' }}>
```

**Error Message:**
- `Hardcoded font size "48px" found. Use CSS variable instead (e.g., var(--text-h1), var(--text-base))`

---

### **3. no-unapproved-fonts**

**Level:** ERROR ⛔

**Description:** Only allows Lexend and Manrope fonts

**❌ Bad:**
```tsx
<div style={{ fontFamily: 'Arial, sans-serif' }}>
<div style={{ fontFamily: 'Helvetica Neue' }}>
<div style={{ fontFamily: 'Times New Roman' }}>
```

**✅ Good:**
```tsx
<div style={{ fontFamily: 'Lexend, sans-serif' }}>
<div style={{ fontFamily: 'Manrope, sans-serif' }}>
```

**Error Message:**
- `Font "Arial" is not approved. Only use Lexend or Manrope fonts`

**Approved Fonts:**
- `Lexend` (primary)
- `Manrope` (secondary)
- `sans-serif` (fallback)
- `serif` (fallback)
- `monospace` (fallback)

---

### **4. no-inline-spacing**

**Level:** WARNING ⚠️

**Description:** Warns against inline padding/margin (should use Tailwind classes)

**❌ Bad:**
```tsx
<div style={{ padding: '24px' }}>
<div style={{ margin: '16px 0' }}>
<div style={{ paddingLeft: '12px' }}>
```

**✅ Good:**
```tsx
<div className="p-6">
<div className="my-4">
<div className="pl-3">
```

**Warning Message:**
- `Inline padding found. Consider using Tailwind classes instead (e.g., className="p-6", "mb-8")`

**Detected Properties:**
- `padding`, `margin`
- `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`
- `marginTop`, `marginRight`, `marginBottom`, `marginLeft`

---

### **5. require-css-variables**

**Level:** ERROR ⛔

**Description:** Enforces CSS variables for colors, borders, and radius

**❌ Bad:**
```tsx
<div style={{
  backgroundColor: 'white',
  color: 'black',
  borderColor: 'gray',
  borderRadius: '8px'
}}>
```

**✅ Good:**
```tsx
<div style={{
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)',
  borderColor: 'var(--border)',
  borderRadius: 'var(--radius-lg)'
}}>
```

**Error Messages:**
- `backgroundColor should use CSS variable (e.g., var(--background))`
- `color should use CSS variable (e.g., var(--foreground))`
- `borderColor should use CSS variable (e.g., var(--border))`
- `borderRadius should use CSS variable (e.g., var(--radius))`

**Property Mappings:**
| Property | Suggested Variable |
|----------|-------------------|
| `backgroundColor` | `var(--background)` |
| `color` | `var(--foreground)` |
| `borderColor` | `var(--border)` |
| `borderRadius` | `var(--radius)` |
| `border` | `var(--border)` |

---

### **6. wcag-touch-targets**

**Level:** WARNING ⚠️

**Description:** Ensures touch targets meet WCAG size requirements (44×44px minimum)

**❌ Bad:**
```tsx
<button style={{ minHeight: '32px', minWidth: '32px' }}>
<a style={{ height: '40px', width: '40px' }}>
```

**✅ Good:**
```tsx
<button style={{ minHeight: '44px', minWidth: '44px' }}>
<button style={{ minHeight: '48px', minWidth: '48px' }}> {/* AAA */}
<a style={{ height: '44px', width: '44px' }}>
```

**Warning Message:**
- `Touch target size 32px is below WCAG AA requirement (44×44px). Consider increasing to meet accessibility standards`

**Standards:**
- **WCAG AA:** 44×44px minimum (desktop)
- **WCAG AAA:** 48×48px minimum (mobile)

**Applies to:**
- `<button>` elements
- `<a>` elements
- Elements with `onClick` handler
- Elements with `role="button"`

---

## 📊 Example ESLint Output

### **Sample Violations:**

```bash
$ npm run lint

src/app/components/templates/ExampleTemplate.tsx
  142:7   error    Hardcoded color "#ffffff" found. Use CSS variable instead      design-system/no-hardcoded-colors
  156:7   error    Hardcoded font size "48px" found. Use var(--text-h1)          design-system/no-hardcoded-font-sizes
  189:7   error    Font "Arial" is not approved. Only use Lexend or Manrope      design-system/no-unapproved-fonts
  203:7   warning  Inline padding found. Use Tailwind classes instead             design-system/no-inline-spacing
  245:7   error    backgroundColor should use CSS variable                        design-system/require-css-variables
  289:7   warning  Touch target size 32px is below WCAG AA requirement            design-system/wcag-touch-targets

✖ 6 problems (4 errors, 2 warnings)
```

### **After Fixes:**

```bash
$ npm run lint

✔ 0 problems (0 errors, 0 warnings)

🎉 All files pass design system compliance!
```

---

## 🎯 Configuration

### **.eslintrc.json Settings**

```json
{
  "rules": {
    "design-system/no-hardcoded-colors": "error",
    "design-system/no-hardcoded-font-sizes": "error",
    "design-system/no-unapproved-fonts": "error",
    "design-system/no-inline-spacing": "warn",
    "design-system/require-css-variables": "error",
    "design-system/wcag-touch-targets": "warn"
  },
  "settings": {
    "designSystem": {
      "approvedFonts": ["Lexend", "Manrope"],
      "minTouchTargetSize": 44,
      "minTouchTargetSizeMobile": 48
    }
  }
}
```

### **Customize Severity Levels**

Change rule severity as needed:

```json
{
  "rules": {
    "design-system/no-hardcoded-colors": "error",     // Block commits
    "design-system/no-inline-spacing": "warn",        // Just warn
    "design-system/wcag-touch-targets": "off"         // Disable
  }
}
```

**Severity Levels:**
- `"error"` (2) — Blocks commits, exit code 1
- `"warn"` (1) — Shows warning, exit code 0
- `"off"` (0) — Disabled

---

## 🔗 Integration with Git Hooks

### **Pre-Commit Hook (Recommended)**

Install Husky and lint-staged:

```bash
npm install --save-dev husky lint-staged
npx husky install
```

Create `.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

Add to `package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "git add"
    ]
  }
}
```

**Result:** ESLint runs automatically on every commit!

---

## 🚀 CI/CD Integration

### **GitHub Actions Example**

Create `.github/workflows/lint.yml`:

```yaml
name: ESLint Design System Check

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run ESLint
        run: npm run lint
      
      - name: Check design system compliance
        run: |
          if npm run lint | grep -q "design-system"; then
            echo "❌ Design system violations found!"
            exit 1
          else
            echo "✅ All files comply with design system!"
          fi
```

---

## 📚 Best Practices

### **1. Run ESLint Before Committing**

```bash
# Check your changes
npm run lint

# Auto-fix issues
npm run lint:fix

# Commit only if passing
git commit -m "feat: add new component"
```

### **2. Fix Violations Incrementally**

Don't try to fix all violations at once:

```bash
# Fix one template at a time
npx eslint src/app/components/templates/FrontPageTemplate.tsx --fix

# Then test
npm run test
```

### **3. Use VS Code Integration**

Install ESLint extension for VS Code:

1. Install "ESLint" extension
2. Violations show as red squiggles
3. Hover for quick fixes
4. Cmd/Ctrl + Shift + P → "ESLint: Fix all auto-fixable Problems"

### **4. Ignore Exceptions (Rarely)**

For rare cases where rules must be disabled:

```tsx
{/* eslint-disable-next-line design-system/no-hardcoded-colors */}
<div style={{ backgroundColor: '#fff' }}>
  {/* Explanation: Third-party component requires hardcoded value */}
</div>
```

**⚠️ Use sparingly!** Document why exception is needed.

---

## 📊 Compliance Dashboard

Track compliance over time:

```bash
# Generate compliance report
npm run lint -- --format json --output-file lint-report.json

# Count violations by rule
cat lint-report.json | jq '.[] | .messages[] | .ruleId' | sort | uniq -c
```

**Example Output:**
```
4 design-system/no-hardcoded-colors
2 design-system/no-hardcoded-font-sizes
1 design-system/no-unapproved-fonts
3 design-system/no-inline-spacing
```

---

## 🎓 Training & Documentation

### **For Developers:**

1. **Read this guide** before coding
2. **Run `npm run lint`** before committing
3. **Fix violations** immediately
4. **Ask questions** if unsure

### **Common Questions:**

**Q: Why can't I use hex colors?**  
A: CSS variables ensure consistency and support light/dark mode automatically.

**Q: Can I use `fontSize: '16px'` for exact sizes?**  
A: No. Use `fontSize: 'var(--text-base)'` for design system consistency.

**Q: What if I need a one-off color?**  
A: Add it to `theme.css` as a CSS variable first, then use it everywhere.

**Q: Can I disable rules?**  
A: Only with team approval and documented reason.

---

## ✅ Success Metrics

### **Target Goals:**
- ✅ Zero hardcoded colors
- ✅ Zero hardcoded font sizes
- ✅ Zero unapproved fonts
- ✅ <5% inline spacing violations
- ✅ 100% CSS variable usage
- ✅ 95%+ WCAG-compliant touch targets

### **Current Status:**
Run `npm run lint` to see current compliance!

---

## 🔄 Maintenance

### **Monthly:**
- Review violations report
- Update rules if needed
- Train team on patterns

### **Quarterly:**
- Audit rule effectiveness
- Add new rules if needed
- Update documentation

### **Annually:**
- Review all rules
- Update WCAG standards
- Refactor as needed

---

## 📖 Related Documentation

- **[Guidelines.md](./guidelines/Guidelines.md)** — Main design system guidelines
- **[CSS-VARIABLES-COMPLIANCE-AUDIT.md](./guidelines/CSS-VARIABLES-COMPLIANCE-AUDIT.md)** — CSS variables audit
- **[COMPREHENSIVE-TYPOGRAPHY-AUDIT-FINAL.md](./COMPREHENSIVE-TYPOGRAPHY-AUDIT-FINAL.md)** — Typography audit
- **[DESIGN-SYSTEM-USAGE-GUIDE.md](./DESIGN-SYSTEM-USAGE-GUIDE.md)** — Design system usage

---

## 🎉 Benefits

### **For Developers:**
- ✅ Instant feedback on violations
- ✅ Auto-fix many issues
- ✅ Consistent code quality
- ✅ Faster code reviews

### **For Design System:**
- ✅ 100% compliance enforcement
- ✅ Prevent regressions
- ✅ Maintainable codebase
- ✅ Scalable system

### **For Users:**
- ✅ Consistent experience
- ✅ Better accessibility
- ✅ Faster load times
- ✅ Light/dark mode works perfectly

---

**Status:** Ready to Use ✅  
**Rules:** 6 custom rules  
**Compliance:** Automated enforcement  
**Integration:** Git hooks + CI/CD

---

**Last Updated:** December 26, 2024  
**Version:** 1.0.0  
**Plugin:** eslint-plugin-design-system
