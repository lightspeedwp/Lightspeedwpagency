# Modern Typography System

**Version:** 2.0 — Fluid Typography Era  
**Last Updated:** December 26, 2024

---

## 🎯 Philosophy

This typography system uses **fluid scaling** with `clamp()` for responsive, modern design that adapts seamlessly across all devices without media queries. Every heading scales fluidly, while body text remains fixed for optimal readability.

**Core Principles:**
- **Fluid headings (H1-H6)** scale naturally between mobile and desktop
- **Fixed body text** ensures consistent readability at 16px
- **Semantic HTML only** — use proper heading hierarchy
- **CSS variables everywhere** — no hard-coded values
- **Two fonts only** — Lexend (primary) + Manrope (metadata)

---

## 🔤 Font Families

### Primary Font: Lexend

**Usage:** All headings, body text, buttons, labels, and UI elements

```css
font-family: 'Lexend', sans-serif;
```

**Applied to:**
- H1, H2, H3, H4, H5, H6
- Paragraphs, lists, divs
- Buttons, links, labels
- Inputs, forms
- All interactive elements

### Secondary Font: Manrope

**Usage:** Small text ONLY (metadata, captions, timestamps)

```css
font-family: 'Manrope', sans-serif;
```

**Applied to:**
- `<small>` elements
- Author bylines
- Post dates/timestamps
- Reading time
- Image captions
- Category labels (optional)
- Legal text/footnotes

**Rule:** Never use Manrope for headings or body text.

---

## 📏 Modern Fluid Typography Scale

### H1 — Page Hero

```css
--text-h1: clamp(2.5rem, 5vw + 1rem, 4rem);
/* Scales: 40px (mobile) → 64px (desktop) */
```

**Usage:**
- Hero headings
- Page titles
- Landing page headlines

**Styling:**
```tsx
<h1 style={{
  fontSize: 'var(--text-h1)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-tight)',
  letterSpacing: 'var(--letter-spacing-tight)'
}}>
  Build Better WordPress Sites
</h1>
```

---

### H2 — Section Heading

```css
--text-h2: clamp(2rem, 4vw + 0.5rem, 3rem);
/* Scales: 32px (mobile) → 48px (desktop) */
```

**Usage:**
- Major section headings
- Archive headings
- Page section titles

**Styling:**
```tsx
<h2 style={{
  fontSize: 'var(--text-h2)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-snug)',
  letterSpacing: 'var(--letter-spacing-tight)'
}}>
  Featured Projects
</h2>
```

---

### H3 — Subsection Heading

```css
--text-h3: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);
/* Scales: 24px (mobile) → 36px (desktop) */
```

**Usage:**
- Subsection titles
- Card headings (large)
- Article section headings

**Styling:**
```tsx
<h3 style={{
  fontSize: 'var(--text-h3)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-snug)',
  letterSpacing: 'var(--letter-spacing-normal)'
}}>
  WordPress Development
</h3>
```

---

### H4 — Card Title

```css
--text-h4: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
/* Scales: 20px (mobile) → 28px (desktop) */
```

**Usage:**
- Card titles
- Widget headings
- Sidebar headings

**Styling:**
```tsx
<h4 style={{
  fontSize: 'var(--text-h4)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-normal)',
  letterSpacing: 'var(--letter-spacing-normal)'
}}>
  Custom Block Themes
</h4>
```

---

### H5 — Subheading

```css
--text-h5: clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem);
/* Scales: 18px (mobile) → 24px (desktop) */
```

**Usage:**
- Small section headings
- Nested card titles
- List headings

**Styling:**
```tsx
<h5 style={{
  fontSize: 'var(--text-h5)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  lineHeight: 'var(--line-height-normal)',
  letterSpacing: 'var(--letter-spacing-normal)'
}}>
  Key Features
</h5>
```

---

### H6 — Label Heading

```css
--text-h6: clamp(1rem, 1vw + 0.5rem, 1.25rem);
/* Scales: 16px (mobile) → 20px (desktop) */
```

**Usage:**
- Form section labels
- Uppercase category headings
- Overline text
- Small callouts

**Styling:**
```tsx
<h6 style={{
  fontSize: 'var(--text-h6)',
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

### Large Body Text (FAQ Questions, Lists)

```css
--text-lg: 1.125rem; /* 18px */
```

**Usage:**
- FAQ questions (accordion headers)
- Important list items
- Emphasized body text
- Callout text

**Styling:**
```tsx
// FAQ Question (correct size)
<span style={{
  fontSize: 'var(--text-lg)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--line-height-snug)',
  color: 'var(--foreground)'
}}>
  What is your typical project timeline?
</span>
```

**DO NOT use H4 for FAQ questions** — this was too large. Always use `--text-lg` (18px) for optimal FAQ readability.

---

### Base Text (Fixed)

```css
--text-base: 1rem; /* 16px — Never scales */
```

**Usage:**
- Body paragraphs
- Buttons
- Links
- Form inputs
- All UI text

**Why Fixed?**
Body text must remain at 16px for optimal readability across all devices. Only headings should scale.

**Styling:**
```tsx
<p style={{
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  lineHeight: 'var(--line-height-normal)',
  color: 'var(--foreground)'
}}>
  Expert WordPress and WooCommerce development for modern websites.
</p>
```

---

### Lead Paragraph (Fixed)

```css
--text-lead: 1.25rem; /* 20px */
```

**Usage:**
- Intro paragraphs
- Hero descriptions
- Featured content

**Styling:**
```tsx
<p style={{
  fontSize: 'var(--text-lead)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  lineHeight: 'var(--line-height-relaxed)',
  opacity: 0.9
}}>
  We specialize in modern block themes and design systems.
</p>
```

---

### Small Text (Metadata)

```css
--text-small: 0.875rem; /* 14px */
```

**Usage:**
- Post metadata (author, date, reading time)
- Captions
- Helper text
- Timestamps

**Styling:**
```tsx
<small style={{
  fontSize: 'var(--text-small)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  color: 'var(--muted-foreground)',
  lineHeight: 'var(--line-height-normal)'
}}>
  By Sarah Johnson · December 26, 2024 · 5 min read
</small>
```

---

### Tiny Text (Legal)

```css
--text-tiny: 0.75rem; /* 12px */
```

**Usage:**
- Legal disclaimers
- Footnotes
- Copyright text
- Fine print

**Styling:**
```tsx
<span style={{
  fontSize: 'var(--text-tiny)',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 'var(--font-weight-regular)',
  color: 'var(--muted-foreground)',
  lineHeight: 'var(--line-height-normal)'
}}>
  © 2025 LSX Design. All rights reserved.
</span>
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

**Examples:**
```tsx
{/* Tight tracking for impact */}
<h1 style={{ letterSpacing: 'var(--letter-spacing-tight)' }}>
  Hero Title
</h1>

{/* Wide tracking for uppercase */}
<span style={{ 
  letterSpacing: 'var(--letter-spacing-wider)',
  textTransform: 'uppercase'
}}>
  Category
</span>
```

---

## 🎨 Complete Typography Patterns

### Pattern 1: Hero Section

```tsx
<div>
  {/* Main heading */}
  <h1 style={{
    fontSize: 'var(--text-h1)',
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
    fontSize: 'var(--text-lead)',
    fontFamily: 'Lexend, sans-serif',
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
    fontSize: 'var(--text-h2)',
    fontFamily: 'Lexend, sans-serif',
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
    fontSize: 'var(--text-base)',
    fontFamily: 'Lexend, sans-serif',
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
  {/* Category label (uppercase) */}
  <h6 style={{
    fontSize: 'var(--text-small)',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 'var(--font-weight-medium)',
    letterSpacing: 'var(--letter-spacing-wider)',
    textTransform: 'uppercase',
    color: 'var(--muted-foreground)',
    marginBottom: '12px'
  }}>
    WordPress Development
  </h6>
  
  {/* Card title */}
  <h3 style={{
    fontSize: 'var(--text-h3)',
    fontFamily: 'Lexend, sans-serif',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 'var(--line-height-snug)',
    color: 'var(--foreground)',
    marginBottom: '12px'
  }}>
    Custom Block Theme Development
  </h3>
  
  {/* Description */}
  <p style={{
    fontSize: 'var(--text-base)',
    fontFamily: 'Lexend, sans-serif',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--line-height-normal)',
    color: 'var(--foreground)',
    opacity: 0.9,
    marginBottom: '16px'
  }}>
    Build scalable WordPress themes with Full Site Editing.
  </p>
  
  {/* Metadata */}
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <small style={{
      fontSize: 'var(--text-small)',
      fontFamily: 'Manrope, sans-serif',
      color: 'var(--muted-foreground)'
    }}>
      By Sarah Johnson
    </small>
    <span style={{ color: 'var(--border)' }}>•</span>
    <small style={{
      fontSize: 'var(--text-small)',
      fontFamily: 'Manrope, sans-serif',
      color: 'var(--muted-foreground)'
    }}>
      5 min read
    </small>
  </div>
</article>
```

---

### Pattern 4: Button Text

```tsx
<button style={{
  fontSize: 'var(--text-base)',
  fontFamily: 'Lexend, sans-serif',
  fontWeight: 'var(--font-weight-medium)',
  letterSpacing: 'var(--letter-spacing-wide)',
  lineHeight: 'var(--line-height-normal)',
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  padding: '12px 32px',
  borderRadius: 'var(--radius)',
  border: 'none',
  cursor: 'pointer'
}}>
  Get Started
</button>
```

---

## ♿ Accessibility Guidelines

### WCAG 2.1 AA Compliance

**Minimum Font Sizes:**
| Context | Minimum Size | Reason |
|---------|-------------|--------|
| Body text | 16px | WCAG readability standard |
| Small text | 14px | Metadata/captions only |
| Minimum allowed | 12px | Legal/footnotes only |

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

## 🚫 What NOT to Do

### Typography Anti-Patterns ❌

- ❌ **Don't use Tailwind font classes** — Use CSS variables (`var(--text-*)`)
- ❌ **Don't hard-code sizes** — Always use variables
- ❌ **Don't use other fonts** — Only Lexend and Manrope
- ❌ **Don't use Manrope for headings** — Lexend only
- ❌ **Don't scale body text** — Keep at 16px
- ❌ **Don't use light weights (< 400)** — Too thin, poor readability
- ❌ **Don't skip heading levels** — Maintain proper hierarchy
- ❌ **Don't use uppercase for long text** — Only labels/categories
- ❌ **Don't exceed -0.025em letter spacing** — Text becomes illegible

---

## ✅ Best Practices

### Typography Do's ✅

- ✅ **Use semantic HTML** — `<h1>`, `<h2>`, `<p>`, `<small>`
- ✅ **Use CSS variables** — `var(--text-h1)`, `var(--font-weight-semibold)`
- ✅ **Use fluid typography** — `clamp()` for responsive headings
- ✅ **Maintain hierarchy** — H1 → H2 → H3 (logical flow)
- ✅ **Test readability** — Check contrast ratios and line heights
- ✅ **Use proper weights** — 600 for headings, 400 for body
- ✅ **Optimize line length** — 60-75 characters for body text
- ✅ **Adequate line spacing** — 1.5 minimum for body
- ✅ **Use Manrope sparingly** — Only for small metadata

---

## 📱 Responsive Behavior

### How Fluid Typography Works

Fluid typography uses `clamp()` to scale smoothly between a minimum and maximum value based on viewport width:

```css
--text-h1: clamp(2.5rem, 5vw + 1rem, 4rem);
```

**Breakdown:**
- `2.5rem` (40px) = Minimum size (mobile)
- `5vw + 1rem` = Preferred size (scales with viewport)
- `4rem` (64px) = Maximum size (desktop)

### Viewport Breakpoints

| Viewport Width | H1 Size | H2 Size | H3 Size |
|----------------|---------|---------|---------|
| 375px (mobile) | ~40px | ~32px | ~24px |
| 768px (tablet) | ~52px | ~40px | ~30px |
| 1440px (desktop) | 64px | 48px | 36px |

**Result:** Headings scale naturally without media queries!

---

## 🔧 Implementation Checklist

Before deploying typography changes:

- [ ] All headings use `var(--text-h1)` through `var(--text-h6)`
- [ ] Body text uses `var(--text-base)` (16px fixed)
- [ ] Small text uses `var(--text-small)` with Manrope
- [ ] Font weights use variables (`var(--font-weight-*)`)
- [ ] Line heights use variables (`var(--line-height-*)`)
- [ ] Letter spacing uses variables (`var(--letter-spacing-*)`)
- [ ] Only Lexend and Manrope fonts used
- [ ] Heading hierarchy is logical (no skipped levels)
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 minimum)
- [ ] No hard-coded font sizes anywhere
- [ ] Responsive scaling works on all devices

---

## 📚 Quick Reference

### All Typography Variables

```css
/* Heading Scales (Fluid) */
--text-h1: clamp(2.5rem, 5vw + 1rem, 4rem);
--text-h2: clamp(2rem, 4vw + 0.5rem, 3rem);
--text-h3: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);
--text-h4: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
--text-h5: clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem);
--text-h6: clamp(1rem, 1vw + 0.5rem, 1.25rem);

/* Body Text (Fixed) */
--text-base: 1rem;       /* 16px */
--text-lead: 1.25rem;    /* 20px */
--text-small: 0.875rem;  /* 14px */
--text-tiny: 0.75rem;    /* 12px */
--text-lg: 1.125rem;     /* 18px */

/* Weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-black: 800;

/* Line Heights */
--line-height-tight: 1.1;
--line-height-snug: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;

/* Letter Spacing */
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
```

---

**Last Updated:** December 26, 2024  
**Typography System:** Modern Fluid Scale (v2.0)  
**Fonts:** 2 (Lexend, Manrope)  
**Heading Levels:** 6 (H1-H6, all fluid)  
**Body Sizes:** 4 (base, lead, small, tiny)