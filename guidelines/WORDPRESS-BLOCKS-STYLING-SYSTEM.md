# WordPress Blocks Styling System

**Last Updated:** January 7, 2025  
**Status:** ✅ Active (Proof-of-Concept Complete)

## 🎯 Overview

This document describes the **new WordPress core block styling system** that replaces Tailwind CSS classes and inline styles with pure WordPress block classes.

### **Core Principles:**

1. **NO Tailwind Classes** — Use WordPress core block classes only
2. **NO Inline Styles** — All styling comes from `/src/styles/wordpress-blocks.css`
3. **100% CSS Variables** — All colors, typography, spacing from theme.css
4. **Light/Dark Mode** — Automatic theme switching via CSS variables
5. **FSE Compatible** — Maps directly to WordPress Full Site Editing (FSE)

---

## 📦 File Structure

```
/src/styles/
├── wordpress-blocks.css    # NEW: WordPress core block styles
├── theme-base.css           # Typography, spacing, borders
├── theme-light.css          # Light mode colors
├── theme-dark.css           # Dark mode colors
└── index.css                # Main stylesheet (imports all)

/src/app/components/templates/
└── WordPressBlocksProofOfConcept.tsx  # NEW: Proof-of-concept template
```

---

## 🔧 WordPress Block Classes

### **1. Layout Blocks**

#### **wp-block-group** — Container Block
```tsx
// OLD (Tailwind):
<div className="flex flex-col gap-4 p-6">

// NEW (WordPress):
<div className="wp-block-group">
```

**Available Modifiers:**
- `.is-layout-flex` — Horizontal flex layout
- `.is-layout-flow` — Vertical block layout
- `.is-layout-constrained` — Max-width container (1280px)
- `.is-vertically-aligned-center` — Center vertical alignment
- `.is-content-justification-center` — Center horizontal alignment

#### **wp-block-columns** — Multi-Column Grid
```tsx
// OLD (Tailwind):
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

// NEW (WordPress):
<div className="wp-block-columns has-3-columns has-large-gap">
```

**Available Column Counts:**
- Default: 2 columns (responsive)
- `.has-3-columns` — 3 columns
- `.has-4-columns` — 4 columns

---

### **2. Button Blocks**

#### **wp-block-buttons** — Button Container
```tsx
// OLD (Tailwind):
<div className="flex gap-4">

// NEW (WordPress):
<div className="wp-block-buttons is-content-justification-center">
```

**Available Modifiers:**
- `.is-vertical` — Vertical stacking
- `.is-content-justification-left` — Left align
- `.is-content-justification-center` — Center align
- `.is-content-justification-right` — Right align

#### **wp-block-button** — Individual Button
```tsx
// OLD (Tailwind + Inline Styles):
<button 
  className="px-6 py-3 rounded-md"
  style={{ backgroundColor: 'var(--primary)' }}
>
  Click Me
</button>

// NEW (WordPress):
<div className="wp-block-button">
  <button className="wp-block-button__link">
    Click Me
  </button>
</div>
```

**Available Button Styles:**
- `.is-style-small` — Small button (36px height)
- `.is-style-large` — Large button (52px height)
- `.is-style-outline` — Outline style
- `.is-style-secondary` — Secondary color
- `.is-style-ghost` — Ghost/transparent style

---

### **3. Typography Blocks**

#### **wp-block-heading** — Headings (H1-H6)
```tsx
// OLD (Inline Style):
<h1 style={{ 
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-h1)' 
}}>
  Title
</h1>

// NEW (WordPress):
<h1 className="wp-block-heading">
  Title
</h1>
```

All typography settings (font-family, font-size, font-weight, line-height) are defined in `/src/styles/wordpress-blocks.css`.

#### **wp-block-paragraph** — Paragraph Text
```tsx
// OLD (Inline Style):
<p style={{ 
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-base)' 
}}>
  Text content
</p>

// NEW (WordPress):
<p className="wp-block-paragraph">
  Text content
</p>
```

**Available Paragraph Styles:**
- `.is-style-lead` — Large intro text (20px)
- `.is-style-small` — Small text (14px, Manrope font)

---

### **4. Section Blocks**

#### **wp-block-section** — Page Section
```tsx
// OLD (Inline Style):
<section style={{ padding: '96px 0', backgroundColor: 'var(--muted)' }}>

// NEW (WordPress):
<section className="wp-block-section has-large-spacing has-muted-background">
```

**Available Spacing:**
- `.has-small-spacing` — 32px padding
- `.has-medium-spacing` — 64px padding
- `.has-large-spacing` — 96px padding
- `.has-extra-large-spacing` — 128px padding

**Available Backgrounds:**
- `.has-gradient-background` — Primary gradient
- `.has-muted-background` — Muted background
- `.has-primary-background-color` — Primary color
- `.has-card-background-color` — Card background

---

### **5. Card Pattern**

#### **wp-block-card** — Content Card
```tsx
// OLD (Inline Styles):
<div style={{
  padding: '24px',
  backgroundColor: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-xl)'
}}>
  Card content
</div>

// NEW (WordPress):
<div className="wp-block-card">
  Card content
</div>
```

**Available Card Modifiers:**
- `.is-interactive` — Clickable card with hover effects

---

### **6. Hero Pattern**

#### **wp-block-hero** — Hero Section
```tsx
// OLD (Complex Inline Styles):
<section style={{ 
  padding: '96px 24px',
  background: 'linear-gradient(...)',
  color: 'var(--primary-foreground)' 
}}>
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    <h1 style={{ fontSize: 'clamp(...)' }}>Title</h1>
    <p style={{ fontSize: 'var(--text-xl)' }}>Description</p>
  </div>
</section>

// NEW (WordPress):
<section className="wp-block-hero">
  <div className="wp-block-hero__content">
    <h1 className="wp-block-hero__title">Title</h1>
    <p className="wp-block-hero__description">Description</p>
  </div>
</section>
```

---

## 🎨 Gap/Spacing Utilities

### **Gap Classes**
```tsx
// OLD (Tailwind):
<div className="flex gap-4">

// NEW (WordPress):
<div className="wp-block-group has-medium-gap">
```

**Available Gaps:**
- `.has-small-gap` — 8px
- `.has-medium-gap` — 16px
- `.has-large-gap` — 24px
- `.has-extra-large-gap` — 48px

---

## 🎯 Text Alignment

```tsx
// OLD (Tailwind):
<div className="text-center">

// NEW (WordPress):
<div className="has-text-align-center">
```

**Available Alignments:**
- `.has-text-align-left`
- `.has-text-align-center`
- `.has-text-align-right`

---

## 🌈 Color Classes

### **Background Colors**
```tsx
// OLD (Inline Style):
<div style={{ backgroundColor: 'var(--primary)' }}>

// NEW (WordPress):
<div className="has-primary-background-color">
```

**Available Background Colors:**
- `.has-primary-background-color`
- `.has-secondary-background-color`
- `.has-accent-background-color`
- `.has-muted-background-color`
- `.has-card-background-color`

### **Text Colors**
```tsx
// OLD (Inline Style):
<p style={{ color: 'var(--primary)' }}>

// NEW (WordPress):
<p className="has-primary-color">
```

**Available Text Colors:**
- `.has-primary-color`
- `.has-secondary-color`
- `.has-accent-color`
- `.has-muted-color`
- `.has-foreground-color`

---

## 🌓 Light/Dark Mode Support

All WordPress block classes automatically support light and dark modes through CSS variables:

```css
/* Light mode (default) */
:root {
  --primary: #2563eb;
  --background: #ffffff;
  --foreground: #0f172a;
}

/* Dark mode */
.dark {
  --primary: #3b82f6;
  --background: #0f172a;
  --foreground: #f1f5f9;
}
```

**No JavaScript required** — theme switching is handled by CSS variables.

---

## ✅ Migration Guide

### **Before (Old Way):**
```tsx
<div className="flex flex-col gap-6 p-8 bg-card rounded-xl border border-border">
  <h2 style={{ 
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-h2)',
    color: 'var(--foreground)' 
  }}>
    Heading
  </h2>
  
  <p className="text-base text-muted-foreground">
    Description text
  </p>
  
  <button 
    className="px-6 py-3 rounded-md"
    style={{
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)'
    }}
  >
    Click Me
  </button>
</div>
```

### **After (New Way):**
```tsx
<div className="wp-block-card">
  <div className="wp-block-group has-medium-gap">
    <h2 className="wp-block-heading">
      Heading
    </h2>
    
    <p className="wp-block-paragraph">
      Description text
    </p>
    
    <div className="wp-block-button">
      <button className="wp-block-button__link">
        Click Me
      </button>
    </div>
  </div>
</div>
```

---

## 📊 Benefits

### **1. Maintainability**
- **ONE FILE** to edit for all styling: `/src/styles/wordpress-blocks.css`
- No hunting through components for inline styles
- Global changes affect all instances immediately

### **2. WordPress FSE Compatibility**
- Maps directly to WordPress core block classes
- Works with theme.json presets
- Compatible with block editor

### **3. Performance**
- Smaller bundle size (no Tailwind utilities)
- Fewer CSS classes per element
- Better caching (global styles)

### **4. Accessibility**
- WCAG 2.1 AA compliant by default
- Semantic HTML structure
- Keyboard navigation built-in

### **5. Light/Dark Modes**
- Automatic theme switching via CSS variables
- No JavaScript required
- Consistent across all components

---

## 🚀 Proof of Concept

**Live Example:** Navigate to `/wordpress-blocks-poc` in the app

**File:** `/src/app/components/templates/WordPressBlocksProofOfConcept.tsx`

This template demonstrates:
- ✅ Zero Tailwind classes
- ✅ Zero inline styles
- ✅ 100% WordPress block classes
- ✅ Full light/dark mode support
- ✅ Responsive design
- ✅ WCAG 2.1 AA compliant

---

## 📚 Next Steps

### **Phase 1: Proof of Concept** ✅ COMPLETE
- [x] Create `wordpress-blocks.css` with all block classes
- [x] Build proof-of-concept template
- [x] Test light/dark mode switching
- [x] Verify responsive behavior

### **Phase 2: Migration Plan** 🔄 IN PROGRESS
- [ ] Create migration checklist for all templates
- [ ] Convert 5 templates as examples
- [ ] Document common patterns
- [ ] Update guidelines

### **Phase 3: Full Migration** 📋 PLANNED
- [ ] Convert all 60+ templates
- [ ] Update all component files
- [ ] Remove Tailwind dependencies
- [ ] Final testing and verification

---

## ❓ FAQ

### **Q: Can I still use Tailwind utilities?**
**A:** No. The system requires 100% WordPress block classes for FSE compatibility and maintainability.

### **Q: What about truly dynamic styles?**
**A:** Icons and dynamic content can use inline color styles only:
```tsx
<Shield size={32} style={{ color: 'var(--primary)' }} />
```

### **Q: How do I add new styles?**
**A:** Edit `/src/styles/wordpress-blocks.css` and add CSS classes. Never use inline styles.

### **Q: Does this work with theme.json?**
**A:** Yes! All block classes map directly to WordPress core blocks and support theme.json presets.

### **Q: What about responsive design?**
**A:** Responsive breakpoints are handled in `wordpress-blocks.css` using media queries.

---

## 📝 Related Documentation

- **[Guidelines.md](./Guidelines.md)** — Core design system principles
- **[design-tokens/colors.md](./design-tokens/colors.md)** — Color system
- **[design-tokens/typography.md](./design-tokens/typography.md)** — Typography scale
- **[design-tokens/spacing.md](./design-tokens/spacing.md)** — Spacing system
- **/src/styles/wordpress-blocks.css** — Complete block styles reference

---

**Questions or Issues?** Review the proof-of-concept template at `/wordpress-blocks-poc` for complete examples.
