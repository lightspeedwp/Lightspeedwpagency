# Modern Typography System

**Version:** 3.0 — WordPress theme.json Alignment  
**Last Updated:** January 09, 2025

---

## 🎯 Philosophy

This typography system uses **WordPress numeric scale (100-900)** with **fluid typography** for responsive, modern design that adapts seamlessly across all devices. The system aligns with WordPress theme.json standards for Full Site Editing compatibility.

**Core Principles:**
- **Numeric font size scale (100-900)** with fluid scaling
- **WordPress FSE compatible** via theme.json presets
- **CSS custom properties** for all typography values
- **Semantic HTML only** — use proper heading hierarchy
- **Two fonts only** — Lexend (primary) + Manrope (metadata)

---

## 🔤 Font Families

### Primary Font: Lexend

**Usage:** All headings, body text, buttons, labels, and UI elements

```css
font-family: var(--font-primary);
/* or */
font-family: var(--wp--preset--font-family--heading);
```

**Applied to:**
- H1, H2, H3, H4, H5, H6
- Paragraphs, lists, divs (Default Body)
- Buttons, links, labels
- Inputs, forms
- All interactive elements

### Secondary Font: Manrope

**Usage:** Small text, captions, metadata, and specific descriptions

```css
font-family: var(--font-secondary);
/* or */
font-family: var(--wp--preset--font-family--secondary);
```

**Applied to:**
- `<small>` elements
- Author bylines
- Post dates/timestamps
- Reading time
- Image captions
- Category labels (optional)
- Legal text/footnotes
- Detailed feature lists (optional)

**Rule:** Always use CSS variables (`var(--font-primary)` / `var(--font-secondary)`). Never hardcode font names.

---

## 📏 WordPress Numeric Typography Scale

### Font Size Scale (100-900)

All font sizes use **numeric slugs 100-900** with fluid typography:

| Slug | Size | Pixels | Fluid Range | CSS Variable | Name | Usage |
|------|------|--------|-------------|--------------|------|-------|
| `100` | 0.75rem | 12px | 10.4-12px | `var(--wp--preset--font-size--100)` | Tiny | Legal text |
| `200` | 1rem | 16px | 14-16px | `var(--wp--preset--font-size--200)` | Base | Body text |
| `300` | 1.25rem | 20px | 16-20px | `var(--wp--preset--font-size--300)` | Small | Lead text |
| `400` | 1.5rem | 24px | 20-24px | `var(--wp--preset--font-size--400)` | Medium | H6, H5 |
| `500` | 2rem | 32px | 24-32px | `var(--wp--preset--font-size--500)` | Large | H4 |
| `600` | 2.5rem | 40px | 32-40px | `var(--wp--preset--font-size--600)` | X-Large | H3 |
| `700` | 3rem | 48px | 40-48px | `var(--wp--preset--font-size--700)` | XX-Large | H2 |
| `800` | 4rem | 64px | 48-64px | `var(--wp--preset--font-size--800)` | Huge | H1 |
| `900` | 5rem | 80px | 56-80px | `var(--wp--preset--font-size--900)` | Gigantic | Hero H1 |

**Why numeric slugs?**
- WordPress FSE standard
- Predictable progression (100 → 200 → 300)
- Shorter CSS variables
- Logical scale relationships

---

## 🎨 WordPress Fluid Typography Configuration

### theme.json Font Size Presets

```json
{
  "settings": {
    "typography": {
      "fluid": {
        "minFontSize": "0.875rem",
        "maxViewportWidth": "1440px",
        "minViewportWidth": "320px"
      },
      "fontSizes": [
        {
          "slug": "100",
          "size": "0.75rem",
          "name": "Tiny",
          "fluid": { "min": "0.65rem", "max": "0.75rem" }
        },
        {
          "slug": "200",
          "size": "1rem",
          "name": "Base",
          "fluid": { "min": "0.875rem", "max": "1rem" }
        },
        {
          "slug": "300",
          "size": "1.25rem",
          "name": "Small",
          "fluid": { "min": "1rem", "max": "1.25rem" }
        },
        {
          "slug": "400",
          "size": "1.5rem",
          "name": "Medium",
          "fluid": { "min": "1.25rem", "max": "1.5rem" }
        },
        {
          "slug": "500",
          "size": "2rem",
          "name": "Large",
          "fluid": { "min": "1.5rem", "max": "2rem" }
        },
        {
          "slug": "600",
          "size": "2.5rem",
          "name": "X-Large",
          "fluid": { "min": "2rem", "max": "2.5rem" }
        },
        {
          "slug": "700",
          "size": "3rem",
          "name": "XX-Large",
          "fluid": { "min": "2.5rem", "max": "3rem" }
        },
        {
          "slug": "800",
          "size": "4rem",
          "name": "Huge",
          "fluid": { "min": "3rem", "max": "4rem" }
        },
        {
          "slug": "900",
          "size": "5rem",
          "name": "Gigantic",
          "fluid": { "min": "3.5rem", "max": "5rem" }
        }
      ]
    }
  }
}
```

---

## 📝 Heading Scale (H1-H6)

### H1 — Page Hero (Slug 800 or 900)

```css
font-size: var(--wp--preset--font-size--800);  /* 4rem / 64px */
font-size: var(--wp--preset--font-size--900);  /* 5rem / 80px (Hero) */
```

**Usage:**
- Hero headings
- Page titles
- Landing page headlines

**Styling:**
```tsx
<h1 style={{
  fontSize: 'var(--wp--preset--font-size--800)',
  fontFamily: 'var(--font-primary)',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-tight)',
  letterSpacing: 'var(--letter-spacing-tight)'
}}>
  Build Better WordPress Sites
</h1>
```

---

### H2 — Section Heading (Slug 700)

```css
font-size: var(--wp--preset--font-size--700);  /* 3rem / 48px */
```

**Usage:**
- Major section headings
- Archive headings
- Page section titles

**Styling:**
```tsx
<h2 style={{
  fontSize: 'var(--wp--preset--font-size--700)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-snug)',
  letterSpacing: 'var(--letter-spacing-tight)'
}}>
  Featured Projects
</h2>
```

---

### H3 — Subsection Heading (Slug 600)

```css
font-size: var(--wp--preset--font-size--600);  /* 2.5rem / 40px */
```

**Usage:**
- Subsection titles
- Card headings (large)
- Article section headings

**Styling:**
```tsx
<h3 style={{
  fontSize: 'var(--wp--preset--font-size--600)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-snug)',
  letterSpacing: 'var(--letter-spacing-normal)'
}}>
  WordPress Development
</h3>
```

---

### H4 — Card Title (Slug 500)

```css
font-size: var(--wp--preset--font-size--500);  /* 2rem / 32px */
```

**Usage:**
- Card titles
- Widget headings
- Sidebar headings

**Styling:**
```tsx
<h4 style={{
  fontSize: 'var(--wp--preset--font-size--500)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-normal)',
  letterSpacing: 'var(--letter-spacing-normal)'
}}>
  Custom Block Themes
</h4>
```

---

### H5 — Subheading (Slug 400)

```css
font-size: var(--wp--preset--font-size--400);  /* 1.5rem / 24px */
```

**Usage:**
- Small section headings
- Nested card titles
- List headings

**Styling:**
```tsx
<h5 style={{
  fontSize: 'var(--wp--preset--font-size--400)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  lineHeight: 'var(--line-height-normal)',
  letterSpacing: 'var(--letter-spacing-normal)'
}}>
  Key Features
</h5>
```

---

### H6 — Label Heading (Slug 400)

```css
font-size: var(--wp--preset--font-size--400);  /* 1.5rem / 24px */
```

**Usage:**
- Form section labels
- Uppercase category headings
- Overline text
- Small callouts

**Styling:**
```tsx
<h6 style={{
  fontSize: 'var(--wp--preset--font-size--400)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  lineHeight: 'var(--line-height-normal)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase'
}}>
  Services
</h6>
```

---

## 📝 Body Text & Components

### Large Body Text (Slug 300)

```css
font-size: var(--wp--preset--font-size--300);  /* 1.25rem / 20px */
```

**Usage:**
- FAQ questions (accordion headers)
- Important list items
- Emphasized body text
- Callout text
- Lead paragraphs

**Styling:**
```tsx
<p style={{
  fontSize: 'var(--wp--preset--font-size--300)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  lineHeight: 'var(--line-height-relaxed)',
  color: 'var(--foreground)'
}}>
  We specialize in modern WordPress block themes and design systems.
</p>
```

---

### Base Text (Slug 200)

```css
font-size: var(--wp--preset--font-size--200);  /* 1rem / 16px */
```

**Usage:**
- Body paragraphs
- Buttons
- Links
- Form inputs
- All UI text

**Why Fixed at 16px?**
Body text must remain at 16px for optimal readability across all devices. Fluid scaling maintains responsive behavior.

**Styling:**
```tsx
<p style={{
  fontSize: 'var(--wp--preset--font-size--200)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  lineHeight: 'var(--line-height-normal)',
  color: 'var(--foreground)'
}}>
  Expert WordPress and WooCommerce development for modern websites.
</p>
```

---

### Small Text (Slug 100)

```css
font-size: var(--wp--preset--font-size--100);  /* 0.75rem / 12px */
```

**Usage:**
- Post metadata (author, date, reading time)
- Captions
- Helper text
- Timestamps
- Legal disclaimers

**Styling:**
```tsx
<small style={{
  fontSize: 'var(--wp--preset--font-size--100)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  color: 'var(--muted-foreground)',
  lineHeight: 'var(--line-height-normal)'
}}>
  By Sarah Johnson · December 26, 2024 · 5 min read
</small>
```

---

## ⚖️ Font Weight Scale

```css
--font-weight-light: 300;       /* Avoid for body text */
--font-weight-regular: 400;     /* Body text, paragraphs */
--font-weight-medium: 500;      /* Buttons, labels, H5-H6 */
--font-weight-semibold: 600;    /* H1-H4, emphasis */
--font-weight-bold: 700;        /* Strong emphasis, <strong> */
--font-weight-black: 800;       /* Display headings (optional) */
```

### Usage Matrix

| Element | Weight | Variable |
|---------|--------|----------|
| H1, H2, H3, H4 | 600 | `var(--font-weight-semibold)` |
| H5, H6 | 500 | `var(--font-weight-medium)` |
| Body `<p>` | 400 | `var(--font-weight-regular)` |
| Button, Label | 500 | `var(--font-weight-medium)` |
| Input | 400 | `var(--font-weight-regular)` |
| Small | 400 | `var(--font-weight-regular)` |
| `<strong>` | 700 | `var(--font-weight-bold)` |

**Rule:** Never use weights below 400 for body text — too thin and hard to read.

---

## 📐 Line Height Scale

```css
--line-height-tight: 1.1;       /* 110% — Display headings */
--line-height-snug: 1.25;       /* 125% — H1-H3 */
--line-height-normal: 1.5;      /* 150% — Body, H4-H6 */
--line-height-relaxed: 1.75;    /* 175% — Long-form content */
```

### Application Rules

| Element | Line Height | Variable | Ratio |
|---------|------------|----------|-------|
| H1 (Hero) | 1.1 | `var(--line-height-tight)` | Tight |
| H2, H3 | 1.25 | `var(--line-height-snug)` | Snug |
| H4, H5, H6 | 1.5 | `var(--line-height-normal)` | Normal |
| Body `<p>` | 1.5 | `var(--line-height-normal)` | Normal |
| Lead paragraph | 1.75 | `var(--line-height-relaxed)` | Relaxed |
| Long-form content | 1.75 | `var(--line-height-relaxed)` | Relaxed |

**Principle:** Larger text needs tighter line-height. Body text needs relaxed line-height for readability.

---

## 🔠 Letter Spacing (Tracking)

```css
--letter-spacing-tight: -0.025em;   /* -0.025em — Large headings */
--letter-spacing-normal: 0;         /* 0 — Body text */
--letter-spacing-wide: 0.025em;     /* 0.025em — Buttons, H6 */
--letter-spacing-wider: 0.05em;     /* 0.05em — Uppercase labels */
```

### Application Rules

| Element | Letter Spacing | Variable |
|---------|---------------|----------|
| H1, H2 | -0.025em | `var(--letter-spacing-tight)` |
| H3-H6, Body | 0 | `var(--letter-spacing-normal)` |
| Buttons, Labels | 0.025em | `var(--letter-spacing-wide)` |
| Uppercase Text | 0.05em | `var(--letter-spacing-wider)` |

---

## 🎨 Complete Typography Patterns

### Pattern 1: Hero Section

```tsx
<div>
  {/* Main heading */}
  <h1 style={{
    fontSize: 'var(--wp--preset--font-size--800)',
    fontFamily: 'Lexend, sans-serif',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 'var(--line-height-tight)',
    letterSpacing: 'var(--letter-spacing-tight)',
    color: 'var(--foreground)',
    marginBottom: '24px'
  }}>
    Build Better WordPress Sites
  </h1>
  
  {/* Lead paragraph */}
  <p style={{
    fontSize: 'var(--wp--preset--font-size--300)',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--line-height-relaxed)',
    color: 'var(--foreground)',
    opacity: 0.9,
    maxWidth: '600px'
  }}>
    We specialize in modern WordPress block themes, design systems, 
    and high-performance websites.
  </p>
</div>
```

---

### Pattern 2: Section with Heading

```tsx
<section>
  {/* Section heading */}
  <h2 style={{
    fontSize: 'var(--wp--preset--font-size--700)',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 'var(--line-height-snug)',
    letterSpacing: 'var(--letter-spacing-tight)',
    color: 'var(--foreground)',
    marginBottom: '16px'
  }}>
    Featured Projects
  </h2>
  
  {/* Body text */}
  <p style={{
    fontSize: 'var(--wp--preset--font-size--200)',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--line-height-normal)',
    color: 'var(--foreground)',
    maxWidth: '700px'
  }}>
    Explore our recent WordPress and WooCommerce projects.
  </p>
</section>
```

---

### Pattern 3: Card with Metadata

```tsx
<article>
  {/* Card title */}
  <h3 style={{
    fontSize: 'var(--wp--preset--font-size--600)',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 'var(--line-height-snug)',
    color: 'var(--foreground)',
    marginBottom: '12px'
  }}>
    Custom Block Theme Development
  </h3>
  
  {/* Description */}
  <p style={{
    fontSize: 'var(--wp--preset--font-size--200)',
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--line-height-normal)',
    color: 'var(--foreground)',
    opacity: 0.9,
    marginBottom: '16px'
  }}>
    Build scalable WordPress themes with Full Site Editing.
  </p>
  
  {/* Metadata */}
  <small style={{
    fontSize: 'var(--wp--preset--font-size--100)',
    fontFamily: 'var(--font-secondary)',
    color: 'var(--muted-foreground)'
  }}>
    By Sarah Johnson · 5 min read
  </small>
</article>
```

---

## ♿ Accessibility Guidelines

### WCAG 2.1 AA Compliance

**Minimum Font Sizes:**
| Context | Minimum Size | Reason |
|---------|-------------|--------|
| Body text | 16px | WCAG readability standard |
| Small text | 12px | Metadata/captions only |

**Contrast Requirements:**
| Text Size | Weight | Minimum Ratio |
|-----------|--------|---------------|
| < 18px | Normal (400) | 4.5:1 |
| < 18px | Bold (700+) | 3:1 |
| ≥ 18px | Any | 3:1 |

### Readability Rules

1. **Never scale body text below 16px** — Even on mobile devices
2. **Use 400+ weight for body** — 300 is too thin
3. **Line height 1.5+ for body** — Improves readability
4. **Adequate color contrast** — Test with tools
5. **Respect heading hierarchy** — Never skip levels (H1 → H2 → H3)

---

## ✅ Best Practices

### Typography Do's ✅

- ✅ **Use WordPress numeric scale** — 100, 200, 300, 400, 500, 600, 700, 800, 900
- ✅ **Use CSS variables** — `var(--wp--preset--font-size--XXX)`
- ✅ **Use fluid typography** — Automatic responsive scaling
- ✅ **Maintain hierarchy** — H1 → H2 → H3 (logical flow)
- ✅ **Test readability** — Check contrast ratios and line heights
- ✅ **Use proper weights** — 600 for headings, 400 for body
- ✅ **Use Manrope sparingly** — Only for small metadata

### Typography Don'ts ❌

- ❌ **Don't use semantic slugs** — Never use `fontSize: 'small'`, use `fontSize: '200'`
- ❌ **Don't hard-code sizes** — Always use WordPress CSS variables
- ❌ **Don't use other fonts** — Only Lexend and Manrope
- ❌ **Don't use Manrope for headings** — Lexend only
- ❌ **Don't scale body text** — Keep at 16px (slug 200)
- ❌ **Don't skip heading levels** — Maintain proper hierarchy

---

## 📚 Quick Reference

### All WordPress Typography Variables

```css
/* Font Sizes (WordPress Numeric Scale) */
var(--wp--preset--font-size--100)  /* 0.75rem / 12px - Tiny */
var(--wp--preset--font-size--200)  /* 1rem / 16px - Base */
var(--wp--preset--font-size--300)  /* 1.25rem / 20px - Small */
var(--wp--preset--font-size--400)  /* 1.5rem / 24px - Medium */
var(--wp--preset--font-size--500)  /* 2rem / 32px - Large */
var(--wp--preset--font-size--600)  /* 2.5rem / 40px - X-Large */
var(--wp--preset--font-size--700)  /* 3rem / 48px - XX-Large */
var(--wp--preset--font-size--800)  /* 4rem / 64px - Huge */
var(--wp--preset--font-size--900)  /* 5rem / 80px - Gigantic */

/* Font Families */
var(--wp--preset--font-family--heading)  /* Lexend */
var(--wp--preset--font-family--body)     /* Manrope */
```

---

## 📚 Related Documentation

- **[spacing.md](./spacing.md)** - WordPress numeric spacing scale (10-100)
- **[colors.md](./colors.md)** - Color system (unchanged)
- **[design-patterns-modern.md](../design-patterns-modern.md)** - Modern design patterns
- **WordPress theme.json Reference** - [developer.wordpress.org](https://developer.wordpress.org/themes/block-themes/theme-json-reference/)

---

## Summary Checklist

When using typography tokens:

- [ ] Use WordPress numeric scale (100-900)
- [ ] Use CSS custom properties (`var(--wp--preset--font-size--XXX)`)
- [ ] Never hard-code font sizes
- [ ] Maintain heading hierarchy (H1 → H2 → H3)
- [ ] Use fluid typography for responsive scaling
- [ ] Only use Lexend and Manrope fonts
- [ ] Reference theme.json for all typography values
- [ ] Validate accessibility and contrast

**Version:** 3.0 (WordPress theme.json alignment)  
**Last Updated:** January 09, 2025  
**Typography System:** WordPress FSE compatible (numeric scale 100-900)  
**Fonts:** 2 (Lexend, Manrope)  
**Heading Levels:** 6 (H1-H6, all fluid)  
**Body Sizes:** Numeric slugs 100-900
