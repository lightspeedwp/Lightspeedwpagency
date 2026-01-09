# Styling Mandate — WordPress Blocks Only

**Effective Date:** January 7, 2025  
**Status:** ✅ **MANDATORY** for all new code

---

## 🚨 CRITICAL RULES

### **1. NO Tailwind CSS Classes**

**❌ FORBIDDEN:**
```tsx
<div className="flex flex-col gap-4 p-6">
<div className="grid grid-cols-3">
<button className="px-6 py-3 rounded-md">
```

**✅ REQUIRED:**
```tsx
<div className="wp-block-group has-medium-gap">
<div className="wp-block-columns has-3-columns">
<div className="wp-block-button">
  <button className="wp-block-button__link">
```

---

### **2. NO Inline Styles**

**❌ FORBIDDEN:**
```tsx
<div style={{
  padding: '24px',
  backgroundColor: 'var(--card)',
  borderRadius: 'var(--radius-xl)'
}}>

<h1 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-h1)'
}}>
```

**✅ REQUIRED:**
```tsx
<div className="wp-block-card">

<h1 className="wp-block-heading">
```

**⚠️ EXCEPTION:** Icon colors ONLY
```tsx
<Shield size={32} style={{ color: 'var(--primary)' }} />
```

---

### **3. 100% CSS Variables**

**All styling MUST use CSS variables from:**
- `/src/styles/theme-base.css` — Typography, spacing, borders
- `/src/styles/theme-light.css` — Light mode colors
- `/src/styles/theme-dark.css` — Dark mode colors
- `/src/styles/wordpress-blocks.css` — All block styles

**❌ FORBIDDEN:**
```css
color: #2563eb;
padding: 24px;
font-size: 32px;
```

**✅ REQUIRED:**
```css
color: var(--primary);
padding: var(--spacing-6);
font-size: var(--text-h2);
```

---

### **4. Only Lexend & Manrope Fonts**

**Font Rules:**
- **Lexend** — ALL headings, body text, UI elements
- **Manrope** — Small text ONLY (14px and below)

**❌ FORBIDDEN:**
```css
font-family: 'Inter', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: system-ui;
```

**✅ REQUIRED:**
```css
font-family: Lexend, sans-serif;  /* Primary */
font-family: Manrope, sans-serif; /* Small text only */
```

---

## 📦 Required WordPress Block Classes

### **Layout Blocks:**
- `.wp-block-group` — Container
- `.wp-block-columns` — Grid layout
- `.wp-block-row` — Horizontal row
- `.wp-block-stack` — Vertical stack

### **Button Blocks:**
- `.wp-block-buttons` — Button container
- `.wp-block-button__link` — Individual button
- `.is-style-outline` — Outline variant
- `.is-style-large` — Large size

### **Typography Blocks:**
- `.wp-block-heading` — Headings (H1-H6)
- `.wp-block-paragraph` — Paragraphs
- `.wp-block-list` — Lists

### **Section Blocks:**
- `.wp-block-hero` — Hero section
- `.wp-block-card` — Content card
- `.wp-block-section` — Page section

### **Utility Classes:**
- `.has-text-align-center` — Center text
- `.has-medium-gap` — 16px gap
- `.has-primary-background-color` — Primary background
- `.has-large-spacing` — 96px padding
- `.is-layout-constrained` — Max-width 1280px

**Complete Reference:** `/guidelines/WORDPRESS-BLOCKS-STYLING-SYSTEM.md`

---

## ✅ Enforcement

### **Code Review Checklist:**
- [ ] Zero Tailwind classes used
- [ ] Zero inline styles (except icon colors)
- [ ] All typography uses Lexend/Manrope
- [ ] All colors use CSS variables
- [ ] All spacing uses WordPress gap/padding classes
- [ ] All layouts use WordPress block classes
- [ ] Light/dark mode working
- [ ] Responsive design intact

### **Automated Checks:**
Future: ESLint rules to enforce WordPress block classes

---

## 📚 Quick Reference

**Need spacing?** → Use `.has-small-gap`, `.has-medium-gap`, `.has-large-gap`  
**Need layout?** → Use `.wp-block-group`, `.wp-block-columns`  
**Need buttons?** → Use `.wp-block-button__link`  
**Need cards?** → Use `.wp-block-card`  
**Need hero?** → Use `.wp-block-hero`

**Full Documentation:**
- **[WORDPRESS-BLOCKS-STYLING-SYSTEM.md](./WORDPRESS-BLOCKS-STYLING-SYSTEM.md)** — Complete guide
- **[/src/styles/wordpress-blocks.css](../src/styles/wordpress-blocks.css)** — All block styles
- **[WordPressBlocksProofOfConcept.tsx](../src/app/components/templates/WordPressBlocksProofOfConcept.tsx)** — Working example

---

## 🚀 Migration Resources

**Planning:**
- **[WORDPRESS-BLOCKS-MIGRATION-PLAN.md](../WORDPRESS-BLOCKS-MIGRATION-PLAN.md)** — Complete migration plan

**Examples:**
- Navigate to `/wordpress-blocks-poc` — See live example
- Review proof-of-concept template for patterns

**Support:**
- Check common migration patterns in MIGRATION-PLAN.md
- Review block classes in wordpress-blocks.css
- Test in light/dark modes

---

**This is MANDATORY for all new code and template updates.**  
**Existing templates will be migrated in phases 2-3.**
