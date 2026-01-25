# Spacing Tokens

**Version:** 2.0  
**Last Updated:** January 09, 2025

---

## Overview

All spacing uses **WordPress theme.json numeric scale (10-100)** mapped to CSS variables. This aligns with WordPress Full Site Editing and provides predictable, scalable spacing tokens.

**Base Unit:** 10px increments  
**Scale:** Numeric slugs 10, 20, 30, 40, 50, 60, 70, 80, 90, 100  
**System:** WordPress FSE compatible with CSS custom properties

---

## 📏 WordPress Spacing Scale

### Numeric Spacing Units (theme.json)

All spacing uses WordPress numeric slugs that map to CSS custom properties:

| Slug | Value | Pixels | CSS Variable | Usage |
|------|-------|--------|--------------|-------|
| `10` | 0.625rem | 10px | `var(--wp--preset--spacing--10)` | Tiny gaps, tight spacing |
| `20` | 1.25rem | 20px | `var(--wp--preset--spacing--20)` | Small gaps, list spacing |
| `30` | 1.875rem | 30px | `var(--wp--preset--spacing--30)` | Standard gaps, card padding |
| `40` | 2.5rem | 40px | `var(--wp--preset--spacing--40)` | Base spacing unit, sections |
| `50` | 3.125rem | 50px | `var(--wp--preset--spacing--50)` | Medium section spacing |
| `60` | 3.75rem | 60px | `var(--wp--preset--spacing--60)` | Large spacing, hero sections |
| `70` | 4.375rem | 70px | `var(--wp--preset--spacing--70)` | XL section spacing |
| `80` | 5rem | 80px | `var(--wp--preset--spacing--80)` | XXL section spacing |
| `90` | 5.625rem | 90px | `var(--wp--preset--spacing--90)` | Hero padding |
| `100` | 6.25rem | 100px | `var(--wp--preset--spacing--100)` | Maximum spacing |

**Why numeric slugs?**
- Predictable progression (10 → 20 → 30)
- WordPress FSE alignment
- Shorter CSS variables
- Mathematical relationships between scales

---

## 🎨 CSS Variable Usage

All spacing should use WordPress CSS custom properties:

```css
/* ✅ CORRECT - WordPress CSS variables */
.element {
  padding: var(--wp--preset--spacing--40);
  margin-block: var(--wp--preset--spacing--20);
  gap: var(--wp--preset--spacing--30);
}

/* ❌ WRONG - Hard-coded values */
.element {
  padding: 40px;
  margin-block: 20px;
  gap: 30px;
}
```

### Common Spacing Patterns

**Card Padding:**
```css
.card {
  padding: var(--wp--preset--spacing--30);  /* 30px all sides */
}

.card-large {
  padding: var(--wp--preset--spacing--40);  /* 40px all sides */
}
```

**Section Spacing:**
```css
.section {
  padding-block: var(--wp--preset--spacing--60);  /* 60px vertical */
}

.section-hero {
  padding-block: var(--wp--preset--spacing--80);  /* 80px vertical */
}
```

**Grid Gaps:**
```css
.grid {
  gap: var(--wp--preset--spacing--40);  /* 40px gap */
}

.grid-tight {
  gap: var(--wp--preset--spacing--20);  /* 20px gap */
}
```

---

## 📐 Component Spacing Guidelines

### Section Padding

| Section Type | Vertical Padding | CSS Variable |
|--------------|------------------|--------------|
| Hero | 80-100px | `var(--wp--preset--spacing--80)` to `var(--wp--preset--spacing--100)` |
| Standard | 60-70px | `var(--wp--preset--spacing--60)` to `var(--wp--preset--spacing--70)` |
| Compact | 40-50px | `var(--wp--preset--spacing--40)` to `var(--wp--preset--spacing--50)` |
| Dense | 30-40px | `var(--wp--preset--spacing--30)` to `var(--wp--preset--spacing--40)` |

**Implementation:**
```tsx
// Hero section - Maximum spacing
<Section style={{ paddingBlock: 'var(--wp--preset--spacing--80)' }}>
  <HeroContent />
</Section>

// Content section - Large spacing
<Section style={{ paddingBlock: 'var(--wp--preset--spacing--60)' }}>
  <ContentBlock />
</Section>

// CTA section - Standard spacing
<Section style={{ paddingBlock: 'var(--wp--preset--spacing--50)' }}>
  <CTASection />
</Section>
```

### Card Spacing

```tsx
// Standard card
<div style={{
  padding: 'var(--wp--preset--spacing--30)',
  gap: 'var(--wp--preset--spacing--20)'
}}>

// Large card
<div style={{
  padding: 'var(--wp--preset--spacing--40)',
  gap: 'var(--wp--preset--spacing--30)'
}}>

// Compact card
<div style={{
  padding: 'var(--wp--preset--spacing--20)',
  gap: 'var(--wp--preset--spacing--10)'
}}>
```

---

## 🏗️ Layout Spacing

### Grid Layouts

**Blog/Portfolio Grids:**
```tsx
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 'var(--wp--preset--spacing--40)'
}}>
```

**Team Grids:**
```tsx
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: 'var(--wp--preset--spacing--50)'
}}>
```

**Two-Column Layouts:**
```tsx
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: 'var(--wp--preset--spacing--60)'
}}>
```

### Flex Layouts

**Horizontal Stack:**
```tsx
<div style={{
  display: 'flex',
  gap: 'var(--wp--preset--spacing--20)'  /* 20px gap */
}}>

<div style={{
  display: 'flex',
  gap: 'var(--wp--preset--spacing--30)'  /* 30px gap */
}}>
```

**Vertical Stack:**
```tsx
<div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--wp--preset--spacing--20)'  /* 20px gap */
}}>
```

---

## 📱 Responsive Spacing

### Mobile-First Approach

Use CSS custom properties with responsive adjustments:

```css
/* Mobile: smaller spacing */
.section {
  padding-block: var(--wp--preset--spacing--40);
}

/* Tablet and up: larger spacing */
@media (min-width: 768px) {
  .section {
    padding-block: var(--wp--preset--spacing--60);
  }
}

/* Desktop: maximum spacing */
@media (min-width: 1024px) {
  .section {
    padding-block: var(--wp--preset--spacing--80);
  }
}
```

### Responsive Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| Mobile | < 640px | Base spacing |
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktops |
| `xl:` | 1280px | Large desktops |
| `2xl:` | 1536px | Extra large screens |

---

## 🎯 WordPress Section Patterns

### Section Component with WordPress Spacing

```tsx
// Using WordPress spacing tokens
<Section style={{ paddingBlock: 'var(--wp--preset--spacing--80)' }}>
  <HeroContent />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--60)' }}>
  <ContentBlock />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--50)' }}>
  <CTASection />
</Section>
```

---

## ✅ Spacing Best Practices

### Do's ✅

- **Use WordPress CSS variables** - `var(--wp--preset--spacing--40)`
- **Use numeric slugs** - 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
- **Use consistent gaps** - 20px, 30px, 40px, 50px
- **Use responsive spacing** - Adjust via media queries
- **Maintain vertical rhythm** - Consistent spacing between sections
- **Reference theme.json** - All spacing defined in theme.json

### Don'ts ❌

- **Don't hard-code pixels** - Never use `padding: 24px`
- **Don't use arbitrary values** - Avoid `padding: 37px`
- **Don't use semantic slugs** - Never use `spacing-small`, use `spacing--30`
- **Don't forget mobile** - Always test on small screens
- **Don't over-space** - More is not always better

---

## 📊 Spacing Matrix

### Common Combinations

| Element | Padding | Gap | Margin Bottom |
|---------|---------|-----|---------------|
| Hero Section | `var(--wp--preset--spacing--80)` | - | - |
| Content Section | `var(--wp--preset--spacing--60)` | - | - |
| Card Grid | - | `var(--wp--preset--spacing--40)` | - |
| Card | `var(--wp--preset--spacing--30)` | `var(--wp--preset--spacing--20)` | - |
| Heading | - | - | `var(--wp--preset--spacing--20)` |
| Paragraph | - | - | `var(--wp--preset--spacing--30)` |
| Button | `var(--wp--preset--spacing--20) var(--wp--preset--spacing--40)` | - | - |
| Form Input | `var(--wp--preset--spacing--20)` | - | `var(--wp--preset--spacing--20)` |

---

## 🎨 Vertical Rhythm

### Section-to-Section Spacing

```tsx
<Section style={{ paddingBlock: 'var(--wp--preset--spacing--80)' }}>
  <Hero />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--60)' }}>
  <Features />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--60)' }}>
  <Testimonials />
</Section>

<Section style={{ paddingBlock: 'var(--wp--preset--spacing--80)' }}>
  <CTA />
</Section>
```

### Typography Vertical Rhythm

```tsx
<h1 style={{ marginBottom: 'var(--wp--preset--spacing--20)' }}>
  Heading 1
</h1>
<p style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>
  Paragraph text
</p>

<h2 style={{ marginBottom: 'var(--wp--preset--spacing--20)' }}>
  Heading 2
</h2>
<p style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>
  Paragraph text
</p>

<h3 style={{ marginBottom: 'var(--wp--preset--spacing--10)' }}>
  Heading 3
</h3>
<p style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>
  Paragraph text
</p>
```

---

## 🔗 WordPress theme.json Integration

### Complete Spacing Configuration

```json
{
  "settings": {
    "spacing": {
      "customSpacingSize": true,
      "units": ["px", "em", "rem", "vh", "vw", "%"],
      "spacingSizes": [
        { "slug": "10", "size": "0.625rem", "name": "10px" },
        { "slug": "20", "size": "1.25rem", "name": "20px" },
        { "slug": "30", "size": "1.875rem", "name": "30px" },
        { "slug": "40", "size": "2.5rem", "name": "40px" },
        { "slug": "50", "size": "3.125rem", "name": "50px" },
        { "slug": "60", "size": "3.75rem", "name": "60px" },
        { "slug": "70", "size": "4.375rem", "name": "70px" },
        { "slug": "80", "size": "5rem", "name": "80px" },
        { "slug": "90", "size": "5.625rem", "name": "90px" },
        { "slug": "100", "size": "6.25rem", "name": "100px" }
      ]
    }
  }
}
```

### Usage in Block Patterns

```php
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40"}}}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40)">
  <!-- Content -->
</div>
<!-- /wp:group -->
```

---

## 📚 Related Documentation

- **[typography.md](./typography.md)** - Font size scale (numeric 100-900)
- **[colors.md](./colors.md)** - Color system (unchanged)
- **[design-patterns-modern.md](../design-patterns-modern.md)** - Modern design patterns
- **WordPress theme.json Reference** - [developer.wordpress.org](https://developer.wordpress.org/themes/block-themes/theme-json-reference/)

---

## 🎨 WordPress Utility Classes (CSS-First)

**Version:** 3.0  
**Last Updated:** January 13, 2025  
**Location:** `/src/styles/utilities.css`

**CRITICAL:** All layout and spacing must use WordPress utility classes (`.wp-*` prefix). NO Tailwind CSS classes allowed.

### Grid Utilities

**Use WordPress utilities instead of inline grid styles:**

```tsx
// ✅ CORRECT - WordPress utility class
<div className="wp-grid-3-cols">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// ❌ WRONG - Inline grid styles (too verbose)
<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 'var(--spacing-8)'
}}>

// ❌ WRONG - Tailwind classes (DO NOT USE)
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
```

**Available Grid Utilities:**

| Class | Behavior | CSS |
|-------|----------|-----|
| `.wp-grid-2-cols` | 1 col mobile → 2 cols desktop | `gap: var(--spacing-8)` |
| `.wp-grid-3-cols` | 1 col mobile → 2 cols tablet → 3 cols desktop | `gap: var(--spacing-8)` |
| `.wp-grid-4-cols` | 1 col mobile → 2 cols tablet → 4 cols desktop | `gap: var(--spacing-8)` |

### Max-Width Utilities

**Use WordPress utilities for centered containers:**

```tsx
// ✅ CORRECT - WordPress utility class
<div className="wp-max-w-6xl">
  <Content />
</div>

// ❌ WRONG - Inline max-width (verbose)
<div style={{
  maxWidth: '1152px',
  marginLeft: 'auto',
  marginRight: 'auto'
}}>

// ❌ WRONG - Tailwind classes (DO NOT USE)
<div className="max-w-6xl mx-auto">
```

**Available Max-Width Utilities:**

| Class | Max-Width | Usage |
|-------|-----------|-------|
| `.wp-max-w-3xl` | 768px | Narrow content (blog posts, FAQs) |
| `.wp-max-w-4xl` | 896px | Medium content (hero sections) |
| `.wp-max-w-6xl` | 1152px | Wide content (grids, archives) |

### Text Alignment Utilities

**Use WordPress utilities for text alignment:**

```tsx
// ✅ CORRECT - WordPress utility class
<div className="wp-text-center">
  <h1>Centered Heading</h1>
</div>

// ❌ WRONG - Tailwind class (DO NOT USE)
<div className="text-center">
```

**Available Text Alignment Utilities:**

| Class | Alignment |
|-------|-----------|
| `.wp-text-center` | Center |
| `.wp-text-left` | Left |
| `.wp-text-right` | Right |

### Combined Example

**Complete section with WordPress utilities:**

```tsx
<Section>
  <div className="wp-max-w-6xl">
    <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
      <h2>Featured Projects</h2>
      <p>Our recent work</p>
    </div>

    <div className="wp-grid-3-cols">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
</Section>
```

### Migration from Tailwind

**DO NOT use these Tailwind classes:**

❌ `grid`, `grid-cols-*`, `md:grid-cols-*`, `lg:grid-cols-*`  
❌ `gap-*` (use CSS variable in inline style: `gap: 'var(--spacing-8)'`)  
❌ `max-w-*`, `mx-auto`  
❌ `text-center`, `text-left`, `text-right`  
❌ `p-*`, `px-*`, `py-*` (use CSS variables in inline styles)  

**Instead use:**

✅ `.wp-grid-*-cols` for grids  
✅ `.wp-max-w-*` for max-width containers  
✅ `.wp-text-*` for text alignment  
✅ CSS variables for spacing: `padding: 'var(--spacing-6)'`  

### Why WordPress Utilities?

1. **User Control:** All utilities use CSS variables — users edit CSS files to update styling
2. **WordPress FSE Compatible:** `.wp-*` prefix aligns with WordPress block naming
3. **theme.json Ready:** Utilities map directly to WordPress theme.json presets
4. **No Build Step:** Pure CSS, no Tailwind compilation needed
5. **Maintainable:** Centralized in `/src/styles/utilities.css`

---

## Summary Checklist

When using spacing tokens:

- [ ] Use WordPress numeric scale (10-100)
- [ ] Use CSS custom properties (`var(--wp--preset--spacing--XX)`)
- [ ] Use WordPress utility classes (`.wp-*`) for layout
- [ ] NO Tailwind CSS classes (`grid`, `max-w-*`, `text-center`, etc.)
- [ ] Never hard-code pixel values
- [ ] Maintain consistent spacing across components
- [ ] Use responsive spacing for mobile/desktop
- [ ] Reference theme.json for all spacing values
- [ ] Test vertical rhythm and section spacing
- [ ] Validate spacing with WordPress FSE

**Version:** 2.0 (WordPress theme.json alignment)  
**Last Updated:** January 09, 2025  
**Base Unit:** 10px increments  
**Scale:** Numeric slugs 10-100  
**System:** WordPress FSE compatible with CSS custom properties
