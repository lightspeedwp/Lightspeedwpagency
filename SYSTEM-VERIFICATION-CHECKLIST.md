# LSX Design System Verification Checklist

Use this checklist to verify that all components and documentation follow the design system correctly.

---

## ✅ Design System Compliance

### Typography ✅

- [x] Only Lexend and Manrope fonts are used
- [x] Lexend for all content (headings, body, buttons, labels, inputs)
- [x] Manrope for small text only
- [x] Font sizes use CSS variables (`--text-h1`, `--text-h2`, etc.)
- [x] Font weights use CSS variables (`--font-weight-regular`, etc.)
- [x] No hard-coded pixel font sizes
- [x] No fonts outside of Lexend/Manrope

### Colors ✅

- [x] Colors use CSS variables (`--primary`, `--background`, etc.)
- [x] OR colors use Tailwind classes (`bg-primary`, `text-foreground`)
- [x] No hard-coded hex color values
- [x] Proper color pairing (e.g., `--primary` + `--primary-foreground`)
- [x] Dark mode support via CSS variables

### Spacing ✅

- [x] Padding uses Tailwind classes (`p-6`, `px-4`, `py-3`)
- [x] Margin uses Tailwind classes (`m-4`, `mb-8`, `mt-6`)
- [x] Gap uses Tailwind classes (`gap-4`, `space-y-6`)
- [x] Border radius uses CSS variables (`--radius`, `--radius-lg`)
- [x] No hard-coded pixel spacing values

---

## ✅ Documentation Updates

### Design Tokens ✅

- [x] `/guidelines/design-tokens/colors.md` — Updated with new color system
- [x] `/guidelines/design-tokens/typography.md` — Updated with Lexend/Manrope
- [x] `/guidelines/design-tokens/spacing.md` — Updated with Tailwind + radius

### Component Guidelines ✅

- [x] `/guidelines/components/Logo.md` — Updated examples
- [x] `/guidelines/components/ScrollBackToTop.md` — Updated CSS examples
- [x] `/guidelines/components/ScrollDownArrow.md` — Verified correct
- [x] `/guidelines/components/LayoutSwitcher.md` — Verified correct

### Icon Guidelines ✅

- [x] `/guidelines/icons/travel.md` — Updated examples with design system
- [x] `/guidelines/icons/interface.md` — Updated status message examples

### Main Guidelines ✅

- [x] `/guidelines/Guidelines.md` — Updated design tokens overview
- [x] `/guidelines/overview-components.md` — Verified correct
- [x] `/guidelines/overview-icons.md` — Verified correct
- [x] `/guidelines/README.md` — Verified correct

---

## ✅ Core Components

### Common Components ✅

- [x] `/src/app/components/common/Heading.tsx` — Uses Lexend + CSS variables
- [x] `/src/app/components/common/Button.tsx` — Uses Tailwind + CSS variables
- [x] `/src/app/components/common/Container.tsx` — Uses Tailwind classes
- [x] `/src/app/components/common/Section.tsx` — Uses Tailwind classes

---

## ✅ Reference Documentation

### Quick References ✅

- [x] `/TOKEN-REFERENCE.md` — Complete token quick reference
- [x] `/DESIGN-SYSTEM-UPDATE.md` — Migration guide
- [x] `/GUIDELINES-SYSTEM-UPDATE.md` — Complete update summary
- [x] `/SYSTEM-VERIFICATION-CHECKLIST.md` — This file

---

## 🧪 Testing Checklist

### Typography Testing

When testing typography:

```tsx
// ✅ Verify Lexend is used
<h1 style={{ fontFamily: 'Lexend, sans-serif' }}>

// ✅ Verify Manrope is used for small text
<small style={{ fontFamily: 'Manrope, sans-serif' }}>

// ✅ Verify CSS variables are used
<h1 style={{ fontSize: 'var(--text-h1)' }}>

// ❌ NO hard-coded fonts
<h1 style={{ fontFamily: 'Inter' }}>  // WRONG

// ❌ NO hard-coded sizes
<h1 style={{ fontSize: '60px' }}>  // WRONG
```

---

### Color Testing

When testing colors:

```tsx
// ✅ Verify CSS variables are used
<button style={{ backgroundColor: 'var(--primary)' }}>

// ✅ Or Tailwind classes
<button className="bg-primary text-primary-foreground">

// ❌ NO hex values
<button style={{ backgroundColor: '#1E6AFF' }}>  // WRONG

// ❌ NO hard-coded colors
<button style={{ color: 'blue' }}>  // WRONG
```

---

### Spacing Testing

When testing spacing:

```tsx
// ✅ Verify Tailwind classes are used
<div className="p-6 mb-8 gap-4">

// ✅ Verify radius variables are used
<div style={{ borderRadius: 'var(--radius-lg)' }}>

// ❌ NO hard-coded spacing
<div style={{ padding: '24px' }}>  // WRONG

// ❌ NO hard-coded radius
<div style={{ borderRadius: '8px' }}>  // WRONG
```

---

## 🎯 Generation Validation

### When Generating New Components

Before approving any generated component, verify:

1. **Typography**
   - [ ] Uses Lexend or Manrope fonts
   - [ ] Font sizes use CSS variables
   - [ ] Font weights use CSS variables
   - [ ] No hard-coded values

2. **Colors**
   - [ ] Uses CSS variables or Tailwind classes
   - [ ] No hex codes
   - [ ] Proper color pairing
   - [ ] Dark mode compatible

3. **Spacing**
   - [ ] Uses Tailwind classes
   - [ ] Border radius uses CSS variables
   - [ ] No hard-coded pixel values

4. **Structure**
   - [ ] Semantic HTML (h1-h6, section, nav, etc.)
   - [ ] Accessibility attributes (aria-label, role, etc.)
   - [ ] Responsive design
   - [ ] Token-driven styling

---

## 📋 Common Issues & Solutions

### Issue: Component uses wrong font

**Problem:**
```tsx
<h1 style={{ fontFamily: 'Inter' }}>
```

**Solution:**
```tsx
<h1 style={{ fontFamily: 'Lexend, sans-serif' }}>
```

---

### Issue: Hard-coded color values

**Problem:**
```tsx
<button style={{ backgroundColor: '#1E6AFF' }}>
```

**Solution:**
```tsx
<button style={{ backgroundColor: 'var(--primary)' }}>
// OR
<button className="bg-primary">
```

---

### Issue: Hard-coded spacing

**Problem:**
```tsx
<div style={{ padding: '24px', marginBottom: '32px' }}>
```

**Solution:**
```tsx
<div className="p-6 mb-8">
```

---

### Issue: Wrong font for small text

**Problem:**
```tsx
<small style={{ fontFamily: 'Lexend, sans-serif' }}>
```

**Solution:**
```tsx
<small style={{ fontFamily: 'Manrope, sans-serif' }}>
```

---

## 🔍 Audit Commands

### Find Hard-Coded Colors

```bash
# Search for hex colors in components
grep -r "#[0-9A-Fa-f]\{6\}" src/app/components/

# Should return: 0 matches
```

---

### Find Hard-Coded Font Sizes

```bash
# Search for pixel font sizes
grep -r "fontSize: '[0-9]\+px'" src/app/components/

# Should return: 0 matches
```

---

### Find Hard-Coded Spacing

```bash
# Search for pixel padding/margin
grep -r "padding: '[0-9]\+px'" src/app/components/
grep -r "margin: '[0-9]\+px'" src/app/components/

# Should return: 0 matches
```

---

### Find Wrong Fonts

```bash
# Search for fonts other than Lexend/Manrope
grep -r "fontFamily: '[^L][^e][^x]" src/app/components/
grep -r "font-family: '[^L][^e][^x]" src/app/components/

# Should return: 0 matches (except Manrope)
```

---

## ✅ Final Verification

### Complete System Check

Run through this final checklist before considering the system complete:

#### Documentation

- [x] All design token files updated
- [x] All component guidelines updated
- [x] All icon guidelines updated
- [x] Main guidelines updated
- [x] Quick reference created
- [x] Migration guide created

#### Components

- [x] All common components use design system
- [x] No hard-coded values
- [x] Proper token usage
- [x] Accessibility compliant

#### Examples

- [x] All code examples use correct tokens
- [x] All examples use correct fonts
- [x] All examples use Tailwind spacing
- [x] All examples use CSS variable colors

#### Testing

- [x] Typography tokens work correctly
- [x] Color tokens work correctly
- [x] Spacing works correctly
- [x] Border radius works correctly
- [x] Dark mode works correctly

---

## 🎉 System Status

**Current Status:** ✅ COMPLETE

All guidelines, components, and documentation have been updated to use the Lexend/Manrope design system with CSS custom properties and Tailwind utilities.

### What This Means

✅ All UI generation will use correct design system tokens  
✅ Easy to theme by updating `/src/styles/theme.css`  
✅ Consistent design across all components  
✅ Dark mode support built-in  
✅ Accessibility compliant  
✅ WordPress-compatible architecture  

---

**Last Verified:** December 24, 2024  
**System Version:** 2.0  
**Status:** Production Ready
