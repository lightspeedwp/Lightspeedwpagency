# Guidelines Update — January 7, 2025

**WordPress Blocks Styling System — Now Mandatory**

---

## 🚨 CRITICAL CHANGES

### **NEW MANDATORY RULE: WordPress Block Classes Only**

**Effective immediately** for all new code and template updates.

---

## 📋 Updated System Principles

### **OLD Principle #4:**
```
4. NO inline styles allowed  
   All styling must come from CSS variables, Tailwind classes, or external CSS files.
```

### **NEW Principle #4:**
```
4. NO inline styles allowed, NO Tailwind classes allowed
   All styling must come from WordPress core block classes defined in wordpress-blocks.css.
   Use CSS variables from theme.css for all colors, typography, and spacing.
   
   EXCEPTION: Icon colors may use inline styles with CSS variables:
   style={{ color: 'var(--primary)' }}
```

---

## 🎨 New Design Token Requirements

### **Styling Sources (In Priority Order):**

1. **WordPress Block Classes** (PRIMARY)
   - File: `/src/styles/wordpress-blocks.css`
   - Examples: `.wp-block-group`, `.wp-block-button__link`, `.wp-block-hero`

2. **CSS Variables** (ALWAYS)
   - Colors: `/src/styles/theme-light.css`, `/src/styles/theme-dark.css`
   - Typography: `/src/styles/theme-base.css`
   - Spacing: Use WordPress gap/padding classes

3. **NO Tailwind** (FORBIDDEN)
   - ❌ Do not use: `flex`, `grid`, `p-6`, `gap-4`, `rounded-md`, etc.
   - ✅ Use instead: WordPress block classes

4. **NO Inline Styles** (FORBIDDEN, except icons)
   - ❌ Do not use: `style={{ padding: '24px', backgroundColor: 'var(--card)' }}`
   - ✅ Use instead: `className="wp-block-card"`

---

## 📦 Required WordPress Block Classes Reference

### **Quick Class Reference:**

**Layout:**
```tsx
// Container
<div className="wp-block-group">
  
// Multi-column grid
<div className="wp-block-columns has-3-columns has-large-gap">
  
// Horizontal row
<div className="wp-block-row">
  
// Constrained width (1280px max)
<div className="wp-block-group is-layout-constrained">
```

**Buttons:**
```tsx
// Button container
<div className="wp-block-buttons is-content-justification-center">
  
// Individual button
<div className="wp-block-button">
  <button className="wp-block-button__link">
    
// Button variants
<div className="wp-block-button is-style-outline">
<div className="wp-block-button is-style-large">
<div className="wp-block-button is-style-small">
```

**Typography:**
```tsx
// Headings (H1-H6) - automatic sizing
<h1 className="wp-block-heading">
<h2 className="wp-block-heading">
  
// Paragraphs
<p className="wp-block-paragraph">
  
// Lead paragraph (large)
<p className="wp-block-paragraph is-style-lead">
  
// Small text
<p className="wp-block-paragraph is-style-small">
```

**Sections:**
```tsx
// Hero section with gradient
<section className="wp-block-hero">
  <div className="wp-block-hero__content">
    <h1 className="wp-block-hero__title">
    <p className="wp-block-hero__description">
      
// Content card
<div className="wp-block-card">
  
// Page section with spacing
<section className="wp-block-section has-large-spacing">
  
// Section with background
<section className="wp-block-section has-muted-background">
```

**Utilities:**
```tsx
// Text alignment
<div className="has-text-align-center">
<div className="has-text-align-left">
  
// Gap (spacing between children)
<div className="has-small-gap">      // 8px
<div className="has-medium-gap">     // 16px
<div className="has-large-gap">      // 24px
<div className="has-extra-large-gap"> // 48px
  
// Padding (section spacing)
<div className="has-small-padding">       // 32px
<div className="has-medium-padding">      // 64px
<div className="has-large-padding">       // 96px
<div className="has-extra-large-padding"> // 128px
  
// Background colors
<div className="has-primary-background-color">
<div className="has-muted-background-color">
<div className="has-card-background-color">
  
// Text colors
<div className="has-primary-color">
<div className="has-foreground-color">
```

---

## 🔄 Migration Examples

### **Example 1: Layout Container**

**❌ OLD (Tailwind):**
```tsx
<div className="flex flex-col gap-6 p-8">
  {children}
</div>
```

**✅ NEW (WordPress):**
```tsx
<div className="wp-block-group has-medium-gap">
  {children}
</div>
```

---

### **Example 2: Grid Layout**

**❌ OLD (Tailwind):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

**✅ NEW (WordPress):**
```tsx
<div className="wp-block-columns has-3-columns has-large-gap">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

### **Example 3: Button**

**❌ OLD (Tailwind + Inline):**
```tsx
<button 
  className="px-6 py-3 rounded-md"
  style={{
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)'
  }}
  onClick={handleClick}
>
  <Send size={20} />
  Submit
</button>
```

**✅ NEW (WordPress):**
```tsx
<div className="wp-block-button">
  <button 
    className="wp-block-button__link"
    onClick={handleClick}
  >
    <Send size={20} />
    Submit
  </button>
</div>
```

---

### **Example 4: Hero Section**

**❌ OLD (Complex Mix):**
```tsx
<section 
  className="relative overflow-hidden py-24 px-6"
  style={{
    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
    color: 'var(--primary-foreground)'
  }}
>
  <div className="max-w-7xl mx-auto text-center">
    <h1 style={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--font-weight-bold)'
    }}>
      Welcome to LSX Design
    </h1>
    <p className="text-xl mt-4">
      Modern WordPress block themes
    </p>
  </div>
</section>
```

**✅ NEW (WordPress):**
```tsx
<section className="wp-block-hero">
  <div className="wp-block-hero__content">
    <h1 className="wp-block-hero__title">
      Welcome to LSX Design
    </h1>
    <p className="wp-block-hero__description">
      Modern WordPress block themes
    </p>
  </div>
</section>
```

---

### **Example 5: Card Pattern**

**❌ OLD (Inline Styles):**
```tsx
<div style={{
  padding: '24px',
  backgroundColor: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-xl)',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}}>
  <h3 style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-h4)',
    fontWeight: 'var(--font-weight-medium)'
  }}>
    Card Title
  </h3>
  <p style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)'
  }}>
    Card description
  </p>
</div>
```

**✅ NEW (WordPress):**
```tsx
<div className="wp-block-card">
  <h3 className="wp-block-heading">
    Card Title
  </h3>
  <p className="wp-block-paragraph">
    Card description
  </p>
</div>
```

---

## 📚 New Documentation Files

### **Core Documentation:**
1. **[WORDPRESS-BLOCKS-STYLING-SYSTEM.md](./WORDPRESS-BLOCKS-STYLING-SYSTEM.md)** ⭐⭐⭐⭐⭐⭐⭐⭐
   - Complete WordPress blocks guide
   - All block classes reference
   - Migration patterns
   - FAQ section

2. **[STYLING-MANDATE.md](./STYLING-MANDATE.md)** ⭐⭐⭐⭐⭐⭐⭐
   - Mandatory styling rules
   - Enforcement checklist
   - Quick reference guide

3. **[WORDPRESS-BLOCKS-MIGRATION-PLAN.md](../WORDPRESS-BLOCKS-MIGRATION-PLAN.md)** ⭐⭐⭐⭐⭐⭐
   - Complete migration plan (62 templates)
   - Common migration patterns
   - Progress tracking

4. **[WORDPRESS-BLOCKS-POC-SUMMARY.md](../WORDPRESS-BLOCKS-POC-SUMMARY.md)** ⭐⭐⭐⭐⭐⭐
   - Quick start guide
   - How to view proof-of-concept
   - File locations

### **Live Example:**
- **Template:** `/src/app/components/templates/WordPressBlocksProofOfConcept.tsx`
- **URL:** Navigate to `/wordpress-blocks-poc`
- **Features:** Zero Tailwind, zero inline styles, 100% WordPress blocks

---

## ✅ Updated QA Checklist

### **Before you call code "done":**

**Existing checks:**
- [ ] Every template is composed from patterns
- [ ] Every pattern has a clear purpose and slug
- [ ] Tokens are used everywhere (no raw spacing/font sizes/colours)
- [ ] All "utility UI" components are documented as non-block behaviours
- [ ] Accessibility rules pass basic keyboard + focus checks
- [ ] All icons have been verified to exist in lucide-react
- [ ] All components have accessible labels and ARIA attributes
- [ ] Mobile touch targets meet 44×44px minimum

**NEW checks for WordPress blocks:**
- [ ] **Zero Tailwind classes** used (flex, grid, p-*, gap-*, etc.)
- [ ] **Zero inline styles** (except icon colors with CSS variables)
- [ ] **All layouts** use WordPress block classes (wp-block-group, wp-block-columns)
- [ ] **All buttons** use wp-block-button__link
- [ ] **All typography** uses wp-block-heading, wp-block-paragraph
- [ ] **All cards** use wp-block-card
- [ ] **Hero sections** use wp-block-hero
- [ ] **Spacing** uses WordPress gap/padding classes (has-medium-gap, etc.)
- [ ] **Backgrounds** use WordPress color classes (has-primary-background-color)
- [ ] **Light mode** fully functional with block classes
- [ ] **Dark mode** fully functional with block classes
- [ ] **Responsive** design works (mobile, tablet, desktop)
- [ ] **Only Lexend & Manrope** fonts used

---

## 🚀 Implementation Timeline

### **Phase 1: Foundation** ✅ COMPLETE (Jan 7, 2025)
- [x] Create `/src/styles/wordpress-blocks.css` (900+ lines)
- [x] Build proof-of-concept template
- [x] Complete documentation (4 new files)
- [x] Update Guidelines.md
- [x] Test light/dark modes

### **Phase 2: Example Templates** 🔄 IN PROGRESS
- [ ] Convert 5 example templates
- [ ] Document common patterns
- [ ] Create before/after examples
- [ ] Target completion: Within 7 days

### **Phase 3: Full Migration** 📋 PLANNED
- [ ] Convert all remaining 55+ templates
- [ ] Remove Tailwind dependencies
- [ ] Final testing & optimization
- [ ] Target completion: Within 14 days

---

## 📞 Quick Reference Links

**Need help?**
- **Guide:** [WORDPRESS-BLOCKS-STYLING-SYSTEM.md](./WORDPRESS-BLOCKS-STYLING-SYSTEM.md)
- **Mandate:** [STYLING-MANDATE.md](./STYLING-MANDATE.md)
- **Migration:** [WORDPRESS-BLOCKS-MIGRATION-PLAN.md](../WORDPRESS-BLOCKS-MIGRATION-PLAN.md)
- **Example:** Navigate to `/wordpress-blocks-poc`

**Need a class?**
- **All classes:** `/src/styles/wordpress-blocks.css`
- **Quick ref:** See "Required WordPress Block Classes Reference" above
- **Patterns:** Check proof-of-concept template

---

**Last Updated:** January 7, 2025  
**Status:** ✅ Active and Mandatory  
**Next Review:** After Phase 2 completion
