# WordPress Blocks CSS Architecture

**Last Updated:** January 7, 2025  
**File:** `/src/styles/wordpress-blocks.css`

---

## 🎯 Overview

This document explains the **complete CSS architecture** for WordPress core block styling. All block styles live in a single global CSS file for maximum maintainability and WordPress FSE compatibility.

---

## 📂 File Structure

```
/src/styles/
├── wordpress-blocks.css    # ⭐ WordPress block styles (900+ lines)
│
├── theme-base.css          # Typography, spacing, borders (theme-agnostic)
├── theme-light.css         # Light mode colors
├── theme-dark.css          # Dark mode colors
│
├── fonts.css               # Font-face declarations (Lexend, Manrope)
├── section-styles.css      # Section style presets
├── animations.css          # Motion and transitions
├── print.css               # Print-optimized styles
│
└── index.css               # Main import file
```

### **Import Order (index.css):**
```css
@import './fonts.css';              /* 1. Load fonts first */
@import './tailwind.css';           /* 2. Tailwind base (minimal) */
@import './theme-base.css';         /* 3. Typography & spacing */
@import './theme-light.css';        /* 4. Light mode colors */
@import './theme-dark.css';         /* 5. Dark mode colors */
@import './wordpress-blocks.css';   /* 6. ⭐ WordPress blocks */
@import './section-styles.css';     /* 7. Section variations */
@import './animations.css';         /* 8. Animations */
@import './print.css';              /* 9. Print styles */
```

---

## 🎨 CSS Variable System

### **Variables Source:**

All WordPress blocks use CSS variables from:

**Theme Base (`theme-base.css`):**
```css
--text-h1, --text-h2, --text-h3, --text-h4, --text-h5, --text-h6
--text-lead, --text-lg, --text-base, --text-small, --text-tiny
--font-weight-regular, --font-weight-medium, --font-weight-semibold
--line-height-tight, --line-height-snug, --line-height-normal
--letter-spacing-tight, --letter-spacing-normal, --letter-spacing-wide
--radius, --radius-sm, --radius-md, --radius-lg, --radius-xl
--shadow-sm, --shadow-md, --shadow-lg, --shadow-hover
```

**Theme Light (`theme-light.css`):**
```css
--primary, --primary-foreground
--secondary, --secondary-foreground
--accent, --accent-foreground
--background, --foreground
--card, --card-foreground
--muted, --muted-foreground
--border
```

**Theme Dark (`theme-dark.css`):**
```css
/* Same variables, different values for .dark selector */
.dark {
  --primary: #3b82f6;
  --background: #0f172a;
  /* ... etc */
}
```

---

## 📦 Block Categories

### **1. Layout Blocks** (Lines 20-140)

**Container block:**
```css
.wp-block-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}
```

**Variants:**
- `.is-layout-flex` — Horizontal flex
- `.is-layout-flow` — Block layout
- `.is-layout-constrained` — Max-width 1280px
- `.is-vertically-aligned-center` — Vertical centering
- `.is-content-justification-center` — Horizontal centering

**Multi-column grid:**
```css
.wp-block-columns {
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr; /* Mobile */
}

@media (min-width: 768px) {
  .wp-block-columns {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .wp-block-columns.has-3-columns {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

### **2. Button Blocks** (Lines 145-250)

**Button container:**
```css
.wp-block-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
```

**Individual button:**
```css
.wp-block-button__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  /* Size: Medium (default) */
  padding: 12px 24px;
  min-height: 44px;
  
  /* Typography */
  font-family: Lexend, sans-serif;
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  
  /* Default colors */
  background-color: var(--primary);
  color: var(--primary-foreground);
  
  /* Border */
  border: 2px solid transparent;
  border-radius: var(--radius);
  
  /* Transitions */
  transition: all 0.2s ease;
}
```

**Button variants:**
- `.is-style-small` — 36px height, smaller padding
- `.is-style-large` — 52px height, larger padding
- `.is-style-outline` — Transparent bg, border color
- `.is-style-secondary` — Secondary color scheme
- `.is-style-ghost` — Fully transparent

---

### **3. Typography Blocks** (Lines 255-380)

**Headings (automatic sizing):**
```css
h1.wp-block-heading {
  font-size: var(--text-h1);    /* clamp(2.5rem, 5vw, 4rem) */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

h2.wp-block-heading {
  font-size: var(--text-h2);    /* clamp(2rem, 4vw, 3rem) */
  font-weight: var(--font-weight-medium);
  /* ... */
}
```

**Paragraphs:**
```css
.wp-block-paragraph {
  font-family: Lexend, sans-serif;
  font-size: var(--text-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  color: var(--foreground);
}

.wp-block-paragraph.is-style-lead {
  font-size: var(--text-lead);  /* 20px */
}

.wp-block-paragraph.is-style-small {
  font-size: var(--text-small); /* 14px */
  font-family: Manrope, sans-serif;
}
```

---

### **4. Section Blocks** (Lines 600-670)

**Page section:**
```css
.wp-block-section {
  width: 100%;
  position: relative;
}

/* Spacing variants */
.wp-block-section.has-small-spacing {
  padding: 32px 0;
}

.wp-block-section.has-large-spacing {
  padding: 96px 0;
}

/* Background variants */
.wp-block-section.has-gradient-background {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--primary-foreground);
}

.wp-block-section.has-muted-background {
  background-color: var(--muted);
}
```

---

### **5. Card Pattern** (Lines 675-695)

**Content card:**
```css
.wp-block-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  transition: all 0.3s ease;
}

.wp-block-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.wp-block-card.is-interactive {
  cursor: pointer;
}
```

---

### **6. Hero Pattern** (Lines 700-735)

**Hero section:**
```css
.wp-block-hero {
  position: relative;
  overflow: hidden;
  padding: 96px 24px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--primary-foreground);
}

.wp-block-hero__content {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
}

.wp-block-hero__title {
  font-family: Lexend, sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: 24px;
}
```

---

### **7. Utility Classes** (Lines 740-850)

**Alignment:**
```css
.alignwide {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

.alignfull {
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}
```

**Text alignment:**
```css
.has-text-align-center { text-align: center; }
.has-text-align-left { text-align: left; }
.has-text-align-right { text-align: right; }
```

**Gap/Spacing:**
```css
.has-small-gap { gap: 8px !important; }
.has-medium-gap { gap: 16px !important; }
.has-large-gap { gap: 24px !important; }
.has-extra-large-gap { gap: 48px !important; }
```

**Padding:**
```css
.has-small-padding { padding: 32px 24px; }
.has-medium-padding { padding: 64px 24px; }
.has-large-padding { padding: 96px 24px; }
```

**Background colors:**
```css
.has-primary-background-color {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.has-muted-background-color {
  background-color: var(--muted);
  color: var(--muted-foreground);
}
```

**Text colors:**
```css
.has-primary-color { color: var(--primary); }
.has-foreground-color { color: var(--foreground); }
```

---

## 🌓 Light/Dark Mode

### **Automatic Theme Switching:**

WordPress blocks automatically support both modes through CSS variables:

**Light Mode (Default):**
```css
:root {
  --primary: #2563eb;
  --background: #ffffff;
  --foreground: #0f172a;
  /* ... */
}
```

**Dark Mode (.dark class):**
```css
.dark {
  --primary: #3b82f6;
  --background: #0f172a;
  --foreground: #f1f5f9;
  /* ... */
}
```

**Dark Mode Overrides:**
```css
.dark .wp-block-card {
  background-color: var(--card);
  border-color: var(--border);
}

.dark .wp-block-card:hover {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}
```

---

## 📱 Responsive Design

### **Mobile-First Approach:**

All blocks are mobile-first with progressive enhancement:

**Mobile (default):**
```css
.wp-block-columns {
  grid-template-columns: 1fr; /* Single column */
  gap: 24px;
}
```

**Tablet (768px+):**
```css
@media (min-width: 768px) {
  .wp-block-columns {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .wp-block-columns.has-3-columns {
    grid-template-columns: repeat(2, 1fr); /* Still 2 on tablet */
  }
}
```

**Desktop (1024px+):**
```css
/* 3-column and 4-column grids expand on desktop */
@media (min-width: 1024px) {
  .wp-block-columns.has-3-columns {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .wp-block-columns.has-4-columns {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## ♿ Accessibility

### **WCAG 2.1 AA Compliance:**

**Focus states:**
```css
.wp-block-button__link:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

**Touch targets:**
```css
.wp-block-button__link {
  min-height: 44px;  /* WCAG AAA: 44×44px minimum */
  padding: 12px 24px;
}
```

**Skip link:**
```css
.wp-block-skip-link {
  position: fixed;
  top: -100%;
  left: 0;
  z-index: 999999;
}

.wp-block-skip-link:focus {
  top: 0;
  outline: 2px solid var(--foreground);
}
```

---

## 🎯 Benefits of This Architecture

### **1. Single Source of Truth**
Edit ONE file (`wordpress-blocks.css`) to update ALL styling across the entire application.

### **2. WordPress FSE Compatible**
Maps directly to WordPress core blocks and supports `theme.json` presets.

### **3. Maintainable**
No inline styles, no scattered Tailwind classes. All styles in one place.

### **4. Performant**
- Global CSS caching
- Smaller bundle size
- No runtime style generation

### **5. Accessible**
WCAG 2.1 AA compliant by default with proper focus states and touch targets.

### **6. Themeable**
Light and dark modes via CSS variables with no JavaScript required.

---

## 📝 Adding New Block Styles

### **Process:**

1. **Open:** `/src/styles/wordpress-blocks.css`
2. **Add** new block class in appropriate category
3. **Use** CSS variables for all values
4. **Test** in light and dark modes
5. **Verify** responsive behavior
6. **Check** accessibility (focus, contrast, touch targets)

### **Example: Adding a New Card Variant**

```css
/* Add to Card Pattern section (around line 680) */

.wp-block-card.is-style-highlighted {
  border: 2px solid var(--primary);
  background: linear-gradient(135deg, var(--primary-soft), var(--background));
  box-shadow: var(--shadow-lg);
}

.wp-block-card.is-style-highlighted:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
}
```

---

## ✅ Verification Checklist

Before committing changes to `wordpress-blocks.css`:

- [ ] All new styles use CSS variables (no hard-coded values)
- [ ] Tested in light mode
- [ ] Tested in dark mode
- [ ] Responsive on mobile, tablet, desktop
- [ ] Focus states visible
- [ ] Touch targets ≥44×44px
- [ ] Contrast ratios meet WCAG AA
- [ ] No console errors
- [ ] Documentation updated

---

**For complete usage examples, see:**
- **[WORDPRESS-BLOCKS-STYLING-SYSTEM.md](./WORDPRESS-BLOCKS-STYLING-SYSTEM.md)** — Complete guide
- **[WordPressBlocksProofOfConcept.tsx](../src/app/components/templates/WordPressBlocksProofOfConcept.tsx)** — Live example
- Navigate to `/wordpress-blocks-poc` — See it in action
