# Fluid Responsive Design System

Complete guidelines for implementing fluid/responsive styles across all templates in the LSX Design system.

## 📐 Breakpoint System

### Standard Breakpoints

The LSX Design system uses 5 standardized breakpoints for responsive design:

| Breakpoint | Min Width | Max Width | Navigation | Grid Columns |
|------------|-----------|-----------|------------|--------------|
| **Mobile Compact** | 320px | 419px | Mobile menu | 1 column |
| **Mobile** | 420px | 767px | Mobile menu | 1 column |
| **Tablet Portrait** | 768px | 1023px | Mobile menu | 2 columns |
| **Tablet Landscape** | 1024px | 1439px | Desktop menu | 3 columns |
| **Desktop** | 1440px+ | — | Desktop menu | 4 columns |

### CSS Variables

```css
:root {
  /* Breakpoint values (for reference) */
  --breakpoint-mobile-compact: 320px;
  --breakpoint-mobile: 420px;
  --breakpoint-tablet-portrait: 768px;
  --breakpoint-tablet-landscape: 1024px;
  --breakpoint-desktop: 1440px;
}
```

### Media Queries

```css
/* Mobile compact (320px+) */
@media (min-width: 320px) { }

/* Mobile (420px+) */
@media (min-width: 420px) { }

/* Tablet portrait (768px+) — Mobile menu still visible */
@media (min-width: 768px) { }

/* Tablet landscape (1024px+) — Desktop menu visible */
@media (min-width: 1024px) { }

/* Desktop (1440px+) */
@media (min-width: 1440px) { }
```

---

## 🎨 Fluid Container Padding

### Horizontal Padding (Fluid)

All containers use **fluid horizontal padding** that scales smoothly from **16px (mobile)** to **32px (desktop)**:

```css
/* Automatic fluid padding on containers */
.wp-block-group,
.wp-block-section,
.container,
section {
  padding-left: clamp(1rem, 2vw + 0.5rem, 2rem);   /* 16px → 32px */
  padding-right: clamp(1rem, 2vw + 0.5rem, 2rem);  /* 16px → 32px */
}
```

### Utility Classes

```tsx
// Apply fluid horizontal padding
<div className="fluid-container">
  <div className="fluid-px">    {/* Horizontal padding only */}
  <div className="fluid-pl">    {/* Left padding only */}
  <div className="fluid-pr">    {/* Right padding only */}
</div>
```

### Formula

```
clamp(MIN, PREFERRED, MAX)
- MIN: 1rem (16px) — Minimum at mobile
- PREFERRED: 2vw + 0.5rem — Fluid calculation
- MAX: 2rem (32px) — Maximum at desktop
```

---

## ✍️ Fluid Typography System

### Heading Scale (H1-H6)

All headings use **fluid scaling** with `clamp()` for smooth responsive sizing:

#### H1 — Page Titles, Hero Headings

```css
/* Mobile: 32px → Desktop: 64px */
h1, .text-h1 {
  font-size: clamp(2rem, 4vw + 1rem, 4rem);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-primary);
}
```

**Usage:**
```tsx
<h1>Welcome to LSX Design</h1>
<Heading level={1}>Welcome to LSX Design</Heading>
```

#### H2 — Section Headings

```css
/* Mobile: 28px → Desktop: 48px */
h2, .text-h2 {
  font-size: clamp(1.75rem, 3vw + 0.75rem, 3rem);
  line-height: var(--line-height-snug);
  letter-spacing: var(--letter-spacing-tight);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-primary);
}
```

#### H3 — Subsection Headings

```css
/* Mobile: 24px → Desktop: 36px */
h3, .text-h3 {
  font-size: clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem);
  line-height: var(--line-height-snug);
  letter-spacing: var(--letter-spacing-normal);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-primary);
}
```

#### H4 — Component Titles

```css
/* Mobile: 20px → Desktop: 28px */
h4, .text-h4 {
  font-size: clamp(1.25rem, 2vw + 0.25rem, 1.75rem);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-primary);
}
```

#### H5 — Small Headings

```css
/* Mobile: 18px → Desktop: 24px */
h5, .text-h5 {
  font-size: clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-primary);
}
```

#### H6 — Label Headings

```css
/* Mobile: 16px → Desktop: 20px */
h6, .text-h6 {
  font-size: clamp(1rem, 1vw + 0.25rem, 1.25rem);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-primary);
}
```

### Body Text Scale

#### Paragraph — Standard Body Text

```css
/* Mobile: 15px → Desktop: 18px */
p, .text-base, .wp-block-paragraph {
  font-size: clamp(0.9375rem, 0.5vw + 0.75rem, 1.125rem);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-primary);
}
```

#### Lead Paragraph — Hero Subtitles

```css
/* Mobile: 18px → Desktop: 22px */
.text-lead {
  font-size: clamp(1.125rem, 1vw + 0.5rem, 1.375rem);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-primary);
}
```

#### Large Text

```css
/* Mobile: 17px → Desktop: 20px */
.text-lg {
  font-size: clamp(1.0625rem, 0.75vw + 0.5rem, 1.25rem);
  line-height: var(--line-height-normal);
  font-family: var(--font-primary);
}
```

#### Small Text — Metadata, Captions

```css
/* Mobile: 13px → Desktop: 14px */
.text-small {
  font-size: clamp(0.8125rem, 0.25vw + 0.75rem, 0.875rem);
  line-height: var(--line-height-normal);
  font-family: var(--font-secondary);
}
```

#### Tiny Text — Legal, Footnotes

```css
/* Fixed size: 12px (no scaling) */
.text-tiny {
  font-size: 0.75rem;
  line-height: var(--line-height-normal);
  font-family: var(--font-secondary);
}
```

### Typography Quick Reference Table

| Element | Mobile | Desktop | CSS Variable | Usage |
|---------|---------|---------|--------------|-------|
| **H1** | 32px | 64px | `--text-h1` | Page titles, hero headings |
| **H2** | 28px | 48px | `--text-h2` | Section headings |
| **H3** | 24px | 36px | `--text-h3` | Subsection headings |
| **H4** | 20px | 28px | `--text-h4` | Component titles |
| **H5** | 18px | 24px | `--text-h5` | Small headings |
| **H6** | 16px | 20px | `--text-h6` | Label headings |
| **Paragraph** | 15px | 18px | `--text-base` | Body text |
| **Lead** | 18px | 22px | `--text-lead` | Hero subtitles |
| **Large** | 17px | 20px | `--text-lg` | Large body text |
| **Small** | 13px | 14px | `--text-small` | Metadata, captions |
| **Tiny** | 12px | 12px | `--text-tiny` | Legal, footnotes |

---

## 📱 Responsive Behavior by Breakpoint

### Mobile Compact (320px+)

**Features:**
- Minimum touch targets (44×44px)
- Compact spacing
- Single column layouts
- Base font size: 15px

```css
@media (min-width: 320px) {
  html {
    font-size: 15px; /* Slightly smaller for compact screens */
  }
  
  button, a.button, .wp-block-button__link {
    min-height: 44px;
    min-width: 44px;
  }
  
  section, .wp-block-group {
    padding-top: var(--spacing-8);    /* 32px */
    padding-bottom: var(--spacing-8); /* 32px */
  }
}
```

### Mobile (420px+)

**Features:**
- Mobile menu visible
- Optimized for touch
- Single column layouts
- Base font size: 16px

```css
@media (min-width: 420px) {
  html {
    font-size: 16px;
  }
  
  section, .wp-block-group {
    padding-top: var(--spacing-12);    /* 48px */
    padding-bottom: var(--spacing-12); /* 48px */
  }
  
  /* Grid: 1 column */
  .wp-grid-2-cols,
  .wp-grid-3-cols,
  .wp-grid-4-cols {
    grid-template-columns: 1fr;
  }
}
```

### Tablet Portrait (768px+)

**Features:**
- Mobile menu still visible
- 2-column layouts start
- Increased spacing
- Container max-width: 768px

```css
@media (min-width: 768px) {
  section, .wp-block-group {
    padding-top: var(--spacing-16);    /* 64px */
    padding-bottom: var(--spacing-16); /* 64px */
  }
  
  /* Grid: 2 columns */
  .wp-grid-2-cols {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .wp-grid-3-cols,
  .wp-grid-4-cols {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .container, .wp-max-w-6xl {
    max-width: var(--container-tablet); /* 768px */
  }
}
```

### Tablet Landscape (1024px+)

**Features:**
- **Desktop menu visible** (mobile menu hidden)
- 3-column layouts
- Desktop-like spacing
- Container max-width: 1152px

```css
@media (min-width: 1024px) {
  /* Hide mobile menu, show desktop menu */
  .mobile-menu {
    display: none;
  }
  
  .desktop-menu {
    display: flex;
  }
  
  section, .wp-block-group {
    padding-top: var(--spacing-20);    /* 80px */
    padding-bottom: var(--spacing-20); /* 80px */
  }
  
  /* Grid: 3 columns */
  .wp-grid-3-cols {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .wp-grid-4-cols {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .container, .wp-max-w-6xl {
    max-width: var(--container-desktop); /* 1152px */
  }
}
```

### Desktop (1440px+)

**Features:**
- Full desktop menu
- 4-column layouts
- Maximum spacing
- Container max-width: 1440px (wide)

```css
@media (min-width: 1440px) {
  section, .wp-block-group {
    padding-top: var(--spacing-24);    /* 96px */
    padding-bottom: var(--spacing-24); /* 96px */
  }
  
  /* Grid: 4 columns */
  .wp-grid-4-cols {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .container-wide {
    max-width: var(--container-wide); /* 1440px */
  }
  
  .hero-full-height {
    min-height: 100vh;
  }
}
```

---

## 🎯 Responsive Grid System

### Grid Utilities

The LSX Design system provides responsive grid utilities that adapt to breakpoints:

```tsx
// 2-column grid (1 col mobile → 2 cols tablet)
<div className="wp-grid-2-cols">
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</div>

// 3-column grid (1 col mobile → 2 cols tablet → 3 cols desktop)
<div className="wp-grid-3-cols">
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</div>

// 4-column grid (1 col mobile → 2 cols tablet → 3 cols laptop → 4 cols desktop)
<div className="wp-grid-4-cols">
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</div>
```

### Grid Behavior

| Breakpoint | `.wp-grid-2-cols` | `.wp-grid-3-cols` | `.wp-grid-4-cols` |
|------------|-------------------|-------------------|-------------------|
| **Mobile (< 768px)** | 1 column | 1 column | 1 column |
| **Tablet (768px+)** | 2 columns | 2 columns | 2 columns |
| **Laptop (1024px+)** | 2 columns | 3 columns | 3 columns |
| **Desktop (1440px+)** | 2 columns | 3 columns | 4 columns |

---

## 🔧 Responsive Utilities

### Hide/Show Utilities

```tsx
// Hide on mobile (< 768px)
<div className="hide-mobile">Desktop only content</div>

// Hide on tablet (768px - 1023px)
<div className="hide-tablet">Mobile or desktop only</div>

// Hide on desktop (1024px+)
<div className="hide-desktop">Mobile/tablet only content</div>

// Show only on mobile
<div className="show-mobile">Mobile only content</div>

// Show only on tablet/desktop
<div className="show-tablet">Tablet+ content</div>
<div className="show-desktop">Desktop content</div>
```

### Fluid Spacing Utilities

```tsx
// Fluid vertical padding (small)
<div className="fluid-py-sm">  {/* 16px → 32px */}

// Fluid vertical padding (medium)
<div className="fluid-py-md">  {/* 32px → 64px */}

// Fluid vertical padding (large)
<div className="fluid-py-lg">  {/* 48px → 96px */}

// Fluid gap (small, medium, large)
<div className="fluid-gap-sm">  {/* 8px → 16px */}
<div className="fluid-gap-md">  {/* 16px → 32px */}
<div className="fluid-gap-lg">  {/* 24px → 48px */}
```

---

## ✅ Implementation Checklist

When creating responsive templates, ensure:

### Layout
- [ ] All containers use fluid horizontal padding (16px → 32px)
- [ ] Sections use appropriate vertical spacing based on breakpoint
- [ ] Grid layouts adapt to breakpoints (1/2/3/4 columns)
- [ ] Navigation switches from mobile to desktop at 1024px

### Typography
- [ ] All headings (H1-H6) use fluid typography with `clamp()`
- [ ] Body text scales smoothly (15px → 18px)
- [ ] Only approved fonts used (`var(--font-primary)` or `var(--font-secondary)`)
- [ ] Line heights appropriate for each text size

### Touch Targets
- [ ] Minimum 44×44px for all interactive elements on mobile
- [ ] Adequate spacing between touch targets
- [ ] Buttons have appropriate padding

### Design Tokens
- [ ] All spacing uses CSS variables (`var(--spacing-*)`)
- [ ] All colors use CSS variables (`var(--primary)`, etc.)
- [ ] All border radius uses CSS variables (`var(--radius)`)
- [ ] NO hardcoded pixel values

### CSS Variables
- [ ] ONLY use `var(--font-primary)` or `var(--font-secondary)`
- [ ] NEVER hardcode font names like 'Lexend' or 'Manrope'
- [ ] ALL styling comes from CSS files (no inline styles except dynamic values)

### Accessibility
- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] WCAG 2.1 AA compliant contrast

---

## 📋 Example: Responsive Section

```tsx
import { Heading } from '@/app/components/common/Heading';

export const ResponsiveSection = () => {
  return (
    <section className="fluid-container fluid-py-lg">
      <div className="wp-max-w-6xl">
        <Heading level={2}>
          Our Services
        </Heading>
        
        <p className="text-lead" style={{
          marginBottom: 'var(--spacing-12)',
          color: 'var(--muted-foreground)'
        }}>
          Professional WordPress solutions for modern businesses
        </p>
        
        {/* 3-column grid: 1 col mobile → 2 cols tablet → 3 cols desktop */}
        <div className="wp-grid-3-cols" style={{
          gap: 'var(--spacing-8)'
        }}>
          {services.map(service => (
            <div key={service.id} className="service-card">
              <Heading level={3}>{service.title}</Heading>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

**CSS (automatic via responsive.css):**
- Fluid horizontal padding: 16px → 32px
- Fluid vertical padding: 48px → 96px
- H2 scales: 28px → 48px
- H3 scales: 24px → 36px
- Paragraph scales: 15px → 18px
- Grid: 1 col → 2 cols → 3 cols

---

## 🎨 Design Token Reference

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-4` | 16px | Minimum horizontal padding (mobile) |
| `--spacing-8` | 32px | Maximum horizontal padding (desktop), section padding (mobile compact) |
| `--spacing-12` | 48px | Section padding (mobile) |
| `--spacing-16` | 64px | Section padding (tablet) |
| `--spacing-20` | 80px | Section padding (laptop) |
| `--spacing-24` | 96px | Section padding (desktop) |

### Typography Variables

| Variable | Mobile | Desktop | Usage |
|----------|---------|---------|-------|
| `--text-h1` | 32px | 64px | Page titles, hero headings |
| `--text-h2` | 28px | 48px | Section headings |
| `--text-h3` | 24px | 36px | Subsection headings |
| `--text-h4` | 20px | 28px | Component titles |
| `--text-h5` | 18px | 24px | Small headings |
| `--text-h6` | 16px | 20px | Label headings |
| `--text-base` | 15px | 18px | Body text |
| `--text-lead` | 18px | 22px | Hero subtitles |
| `--text-lg` | 17px | 20px | Large body text |
| `--text-small` | 13px | 14px | Metadata, captions |
| `--text-tiny` | 12px | 12px | Legal, footnotes |

---

## 🚀 Related Documentation

- **[Typography Guide](./typography.md)** - Complete typography system
- **[Spacing Guide](./spacing.md)** - Spacing scale and patterns
- **[Main Guidelines](../Guidelines.md)** - System principles
- **[WordPress Utilities](./wordpress-utilities.md)** - Responsive utility classes

---

**Last Updated:** January 22, 2025  
**System Version:** 1.0  
**Design System:** LSX Design  
**Responsive System:** Fluid (320px → 1440px+)
