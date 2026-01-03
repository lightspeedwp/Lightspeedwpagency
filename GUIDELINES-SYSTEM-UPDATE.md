# Guidelines System Update — December 24, 2024

Complete update of all LSX Design guidelines to match the Lexend/Manrope design system.

---

## Overview

All guidelines documentation has been updated to reference the correct design system tokens from `/src/styles/theme.css`. This ensures that all generated UI uses:

- **Only Lexend and Manrope fonts**
- **CSS custom properties for colors**
- **Tailwind classes for spacing**
- **CSS variables for border radius**

---

## Files Updated

### ✅ Design Token Documentation

**Location:** `/guidelines/design-tokens/`

1. **colors.md**
   - Updated to use `var(--primary)`, `var(--background)`, etc.
   - Removed WordPress preset color system
   - Added Tailwind color classes
   - All examples use new CSS variables

2. **typography.md**
   - Updated font families: Lexend (primary), Manrope (small text)
   - New text size variables: `--text-h1`, `--text-h2`, `--text-base`, etc.
   - Font weights: `--font-weight-regular`, `--font-weight-medium`, `--font-weight-bold`
   - All examples use new typography system

3. **spacing.md**
   - Updated to use Tailwind spacing classes (`p-6`, `gap-4`, etc.)
   - Border radius: `--radius`, `--radius-sm`, `--radius-lg`, `--radius-xl`
   - Removed WordPress preset spacing system
   - All examples use Tailwind utilities

---

### ✅ Component Guidelines

**Location:** `/guidelines/components/`

1. **Logo.md**
   - Examples use Tailwind spacing classes
   - Colors use CSS variables (`var(--border)`, `var(--background)`)
   - Typography uses Lexend font

2. **ScrollBackToTop.md**
   - CSS examples use design system tokens
   - Border radius uses `var(--radius-lg)`
   - Colors use `var(--primary)`, `var(--primary-foreground)`
   - Typography uses `var(--text-h4)`

3. **ScrollDownArrow.md**
   - Already uses correct pattern (no major updates needed)

4. **LayoutSwitcher.md**
   - Already uses correct pattern (no major updates needed)

---

### ✅ Icon Guidelines

**Location:** `/guidelines/icons/`

1. **travel.md**
   - Examples use Lexend/Manrope fonts
   - Colors use CSS variables
   - Spacing uses Tailwind classes
   - Typography uses `var(--text-h3)`, `var(--text-base)`, `var(--text-small)`

2. **interface.md**
   - Status message examples updated with design system tokens
   - Colors use `var(--secondary)`, `var(--destructive)`, etc.
   - Typography uses Lexend font
   - Border radius uses `var(--radius)`

---

### ✅ Overview Documentation

**Location:** `/guidelines/`

1. **Guidelines.md**
   - Updated design tokens overview section
   - Added Lexend/Manrope font requirement
   - Updated token reference syntax examples
   - References updated design-token files

2. **overview-components.md**
   - Already had correct structure (no major updates needed)

3. **overview-icons.md**
   - Already had correct structure (no major updates needed)

4. **README.md**
   - Already had correct structure (no major updates needed)

---

### ✅ Core Components

**Location:** `/src/app/components/common/`

1. **Heading.tsx**
   - Uses `fontFamily: 'Lexend, sans-serif'`
   - Uses `fontSize: var(--text-h1)` through `var(--text-h4)`
   - Uses `fontWeight: var(--font-weight-medium)` or `var(--font-weight-bold)`
   - Uses `color: var(--foreground)`

2. **Button.tsx**
   - Uses Tailwind classes: `className="px-6 py-3"`
   - Uses design system colors: `var(--primary)`, `var(--secondary)`, etc.
   - Uses `fontFamily: 'Lexend, sans-serif'`
   - Uses `borderRadius: var(--radius)`

3. **Container.tsx**
   - Uses Tailwind classes: `className="mx-auto w-full px-4 max-w-7xl"`
   - No hard-coded spacing

4. **Section.tsx**
   - Uses Tailwind classes: `className="py-16 bg-background"`
   - Background variants use CSS variables

---

## Design System Token Reference

### Typography

**Fonts:**
```tsx
fontFamily: 'Lexend, sans-serif'  // All content except small
fontFamily: 'Manrope, sans-serif' // Small text only
```

**Sizes:**
```tsx
fontSize: 'var(--text-h1)'    // 60px - Hero titles
fontSize: 'var(--text-h2)'    // 32px - Section headings
fontSize: 'var(--text-h3)'    // 24px - Subsection headings
fontSize: 'var(--text-h4)'    // 20px - Component headings
fontSize: 'var(--text-base)'  // 16px - Body, buttons, labels
fontSize: 'var(--text-small)' // 12px - Metadata (Manrope)
```

**Weights:**
```tsx
fontWeight: 'var(--font-weight-regular)' // 400
fontWeight: 'var(--font-weight-medium)'  // 500
fontWeight: 'var(--font-weight-bold)'    // 700
```

---

### Colors

**Core Colors:**
```tsx
backgroundColor: 'var(--background)'
color: 'var(--foreground)'
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
backgroundColor: 'var(--secondary)'
color: 'var(--secondary-foreground)'
```

**Interactive:**
```tsx
backgroundColor: 'var(--accent)'
backgroundColor: 'var(--muted)'
backgroundColor: 'var(--destructive)'
borderColor: 'var(--border)'
outlineColor: 'var(--ring)'
```

**Tailwind Classes:**
```tsx
className="bg-background text-foreground"
className="bg-primary text-primary-foreground"
className="border-border"
```

---

### Spacing

**Tailwind Classes:**
```tsx
className="p-6"      // 24px padding
className="px-4"     // 16px horizontal
className="py-3"     // 12px vertical
className="gap-4"    // 16px gap
className="mb-8"     // 32px bottom margin
className="space-y-4" // 16px vertical spacing
```

**Border Radius:**
```tsx
borderRadius: 'var(--radius)'     // 4px
borderRadius: 'var(--radius-sm)'  // 2px
borderRadius: 'var(--radius-lg)'  // 8px
borderRadius: 'var(--radius-xl)'  // 12px
```

---

## Before & After Examples

### Typography

**Before (WordPress presets):**
```tsx
<h1 style={{
  fontSize: 'var(--wp--preset--font-size--900)',
  fontWeight: 'var(--wp--preset--font-weight--medium)'
}}>
```

**After (Design system):**
```tsx
<h1 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-h1)',
  fontWeight: 'var(--font-weight-medium)'
}}>
```

---

### Colors

**Before (WordPress presets):**
```tsx
<button style={{
  backgroundColor: 'var(--wp--preset--color--primary)',
  color: 'var(--wp--preset--color--primary-foreground)'
}}>
```

**After (Design system):**
```tsx
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>
```

---

### Spacing

**Before (WordPress presets):**
```tsx
<div style={{
  padding: 'var(--wp--preset--spacing--40)',
  marginBottom: 'var(--wp--preset--spacing--60)'
}}>
```

**After (Design system):**
```tsx
<div className="p-6 mb-12">
```

---

## Validation Checklist

When creating new components or updating guidelines, verify:

- [ ] **Typography**
  - [ ] Uses only Lexend or Manrope fonts
  - [ ] Font sizes use `var(--text-*)` variables
  - [ ] Font weights use `var(--font-weight-*)` variables
  - [ ] No hard-coded pixel sizes

- [ ] **Colors**
  - [ ] Uses `var(--*)` CSS variables
  - [ ] No hex color codes
  - [ ] Proper color pairing (e.g., `--primary` + `--primary-foreground`)
  - [ ] Or uses Tailwind color classes

- [ ] **Spacing**
  - [ ] Uses Tailwind classes for padding/margin/gap
  - [ ] No hard-coded pixel values
  - [ ] Border radius uses `var(--radius*)` variables

- [ ] **Examples**
  - [ ] All code examples follow new system
  - [ ] No references to old WordPress preset system
  - [ ] Tailwind classes used correctly

---

## Documentation Structure

```
guidelines/
├── design-tokens/
│   ├── colors.md          ✅ Updated
│   ├── typography.md      ✅ Updated
│   └── spacing.md         ✅ Updated
├── components/
│   ├── Logo.md            ✅ Updated
│   ├── ScrollBackToTop.md ✅ Updated
│   ├── ScrollDownArrow.md ✅ Updated
│   └── LayoutSwitcher.md  ✅ Updated
├── icons/
│   ├── travel.md          ✅ Updated
│   └── interface.md       ✅ Updated
├── Guidelines.md          ✅ Updated
├── overview-components.md ✅ Current
├── overview-icons.md      ✅ Current
└── README.md              ✅ Current
```

---

## What This Means for Generation

All future UI generation will now:

1. ✅ **Use correct fonts**
   - Lexend for all content
   - Manrope for small text only
   - No other fonts allowed

2. ✅ **Reference design system colors**
   - Via CSS variables (`var(--primary)`)
   - Via Tailwind classes (`bg-primary`)
   - No hard-coded hex values

3. ✅ **Use Tailwind for spacing**
   - Padding: `p-*`, `px-*`, `py-*`
   - Margin: `m-*`, `mb-*`, `mt-*`
   - Gap: `gap-*`, `space-*`
   - No hard-coded pixel values

4. ✅ **Use CSS variables for radius**
   - `var(--radius)` for default
   - `var(--radius-lg)` for cards
   - `var(--radius-sm)` for small elements

5. ✅ **Be updatable via theme.css**
   - All colors defined in one place
   - All typography sizes in one place
   - Easy to theme and customize

---

## Related Documentation

- **[DESIGN-SYSTEM-UPDATE.md](./DESIGN-SYSTEM-UPDATE.md)** — Design system migration guide
- **[TOKEN-REFERENCE.md](./TOKEN-REFERENCE.md)** — Quick token reference
- **[/src/styles/theme.css](./src/styles/theme.css)** — Token source of truth

---

## Next Steps

✅ All guidelines updated  
✅ All core components updated  
✅ All examples use correct tokens  
✅ Documentation is comprehensive and clear

The LSX Design system is now fully aligned with the Lexend/Manrope design system and ready for AI-powered generation!

---

**Updated:** December 24, 2024  
**Status:** Complete  
**Version:** 2.0
