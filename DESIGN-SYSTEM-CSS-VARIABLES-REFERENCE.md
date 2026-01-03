# Design System CSS Variables Reference

**Generated:** December 27, 2024  
**Purpose:** Complete reference for all CSS variables in the LSX Design system  
**Usage:** All components MUST use these variables (no hard-coded values)  

---

## 📁 File Structure

```
/src/styles/
├── theme.css           # Main entry (imports all below)
├── theme-base.css      # Typography, spacing, shadows (theme-neutral)
├── theme-light.css     # Light mode colors
├── theme-dark.css      # Dark mode colors
├── fonts.css           # Font imports (Lexend, Manrope)
├── section-styles.css  # Section style presets
├── animations.css      # Animation utilities
└── tailwind.css        # Tailwind v4 configuration
```

---

## 🎨 Typography Variables (theme-base.css)

### Font Families (fonts.css)
```css
font-family: 'Lexend, sans-serif';  /* Primary: headings, body, UI */
font-family: 'Manrope, sans-serif'; /* Secondary: small text ONLY */
```

### Font Sizes (Fluid Typography)
```css
/* Headings - Fluid with clamp() */
--text-h1: clamp(2.5rem, 5vw + 1rem, 4rem);        /* 40px → 64px */
--text-h2: clamp(2rem, 4vw + 0.5rem, 3rem);        /* 32px → 48px */
--text-h3: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);   /* 24px → 36px */
--text-h4: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);  /* 20px → 28px */
--text-h5: clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem);/* 18px → 24px */
--text-h6: clamp(1rem, 1vw + 0.5rem, 1.25rem);     /* 16px → 20px */

/* Body Text - Fixed sizes */
--text-lead: 1.25rem;   /* 20px - Lead paragraphs, hero subtitles */
--text-lg: 1.125rem;    /* 18px - Large body text, FAQ questions */
--text-base: 1rem;      /* 16px - Standard body text, buttons */
--text-small: 0.875rem; /* 14px - Metadata, captions */
--text-tiny: 0.75rem;   /* 12px - Legal text, footnotes */
```

### Font Weights
```css
--font-weight-light: 300;      /* Decorative only (rarely used) */
--font-weight-regular: 400;    /* Body text, paragraphs */
--font-weight-medium: 500;     /* Headings (modern standard) */
--font-weight-semibold: 600;   /* Button text, emphasis */
--font-weight-bold: 700;       /* Strong callouts, warnings */
--font-weight-black: 800;      /* Display text, marketing */
```

### Line Heights
```css
--line-height-tight: 1.1;      /* Display headings (H1) */
--line-height-snug: 1.25;      /* Headings (H2-H3) */
--line-height-normal: 1.5;     /* Body text, small headings */
--line-height-relaxed: 1.75;   /* Long-form content, articles */
```

### Letter Spacing
```css
--letter-spacing-tight: -0.025em;  /* Large headings (H1-H2) */
--letter-spacing-normal: 0;        /* Body text, standard headings */
--letter-spacing-wide: 0.025em;    /* Buttons, labels, small text */
--letter-spacing-wider: 0.05em;    /* Uppercase text, categories */
```

---

## 🎨 Color Variables

### Light Mode (theme-light.css)
```css
/* Core Colors */
--background: rgba(255, 255, 255, 1);          /* #FFFFFF - Pure white */
--foreground: rgba(9, 9, 9, 1);                /* #090909 - Near black (16.07:1 AAA) */

/* Card & Container */
--card: rgba(255, 255, 255, 1);                /* #FFFFFF - Pure white */
--card-foreground: rgba(9, 9, 9, 1);           /* #090909 - Near black */

/* Primary Brand */
--primary: rgba(30, 106, 255, 1);              /* #1E6AFF - Bright blue (4.58:1 AA) */
--primary-foreground: rgba(255, 255, 255, 1);  /* #FFFFFF - White */

/* Secondary Brand */
--secondary: rgba(244, 244, 245, 1);           /* #F4F4F5 - Light gray */
--secondary-foreground: rgba(9, 9, 9, 1);      /* #090909 - Near black */

/* Muted/Subtle */
--muted: rgba(244, 244, 245, 1);               /* #F4F4F5 - Light gray */
--muted-foreground: rgba(113, 113, 122, 1);    /* #71717A - Medium gray (4.54:1 AA) */

/* Accent */
--accent: rgba(244, 244, 245, 1);              /* #F4F4F5 - Light gray */
--accent-foreground: rgba(9, 9, 9, 1);         /* #090909 - Near black */

/* Destructive (Errors) */
--destructive: rgba(239, 68, 68, 1);           /* #EF4444 - Red (4.56:1 AA) */
--destructive-foreground: rgba(255, 255, 255, 1); /* #FFFFFF - White */

/* Borders */
--border: rgba(228, 228, 231, 1);              /* #E4E4E7 - Medium gray border */
--border-soft: rgba(241, 245, 249, 1);         /* #F1F5F9 - Subtle border */

/* Input Elements */
--input: rgba(228, 228, 231, 1);               /* #E4E4E7 - Input borders */
--ring: rgba(30, 106, 255, 1);                 /* #1E6AFF - Focus ring (primary) */
```

### Dark Mode (theme-dark.css)
```css
/* Core Colors */
--background: rgba(9, 9, 9, 1);                /* #090909 - Near black */
--foreground: rgba(250, 250, 250, 1);          /* #FAFAFA - Off-white (15.83:1 AAA) */

/* Card & Container */
--card: rgba(24, 24, 27, 1);                   /* #18181B - Dark gray */
--card-foreground: rgba(250, 250, 250, 1);     /* #FAFAFA - Off-white */

/* Primary Brand */
--primary: rgba(59, 130, 246, 1);              /* #3B82F6 - Lighter blue (8.59:1 AAA) */
--primary-foreground: rgba(255, 255, 255, 1);  /* #FFFFFF - White */

/* Secondary Brand */
--secondary: rgba(39, 39, 42, 1);              /* #27272A - Dark gray */
--secondary-foreground: rgba(250, 250, 250, 1);/* #FAFAFA - Off-white */

/* Muted/Subtle */
--muted: rgba(39, 39, 42, 1);                  /* #27272A - Dark gray */
--muted-foreground: rgba(161, 161, 170, 1);    /* #A1A1AA - Medium gray (7.04:1 AAA) */

/* Accent */
--accent: rgba(39, 39, 42, 1);                 /* #27272A - Dark gray */
--accent-foreground: rgba(250, 250, 250, 1);   /* #FAFAFA - Off-white */

/* Destructive (Errors) */
--destructive: rgba(239, 68, 68, 1);           /* #EF4444 - Red (4.56:1 AA) */
--destructive-foreground: rgba(255, 255, 255, 1); /* #FFFFFF - White */

/* Borders */
--border: rgba(39, 39, 42, 1);                 /* #27272A - Dark gray border */
--border-soft: rgba(24, 24, 27, 1);            /* #18181B - Subtle border */

/* Input Elements */
--input: rgba(39, 39, 42, 1);                  /* #27272A - Input borders */
--ring: rgba(59, 130, 246, 1);                 /* #3B82F6 - Focus ring (primary) */
```

---

## 📐 Border Radius (theme-base.css)

```css
--radius: 4px;         /* Default - Buttons, inputs, small cards */
--radius-sm: 2px;      /* Small elements */
--radius-md: 6px;      /* Medium elements */
--radius-lg: 8px;      /* Large cards, modals */
--radius-xl: 12px;     /* Extra large containers */
--radius-2xl: 16px;    /* Hero sections, feature cards */
--radius-full: 9999px; /* Rounded pills, avatars */
```

---

## 🎭 Shadows (theme-base.css)

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.1);
```

---

## 📏 Spacing (Use Tailwind Classes)

**IMPORTANT:** Use Tailwind spacing classes, NOT hard-coded pixel values.

### Tailwind Spacing Scale
```css
p-1  /* padding: 0.25rem (4px) */
p-2  /* padding: 0.5rem (8px) */
p-3  /* padding: 0.75rem (12px) */
p-4  /* padding: 1rem (16px) */
p-5  /* padding: 1.25rem (20px) */
p-6  /* padding: 1.5rem (24px) */
p-8  /* padding: 2rem (32px) */
p-10 /* padding: 2.5rem (40px) */
p-12 /* padding: 3rem (48px) */
p-16 /* padding: 4rem (64px) */
p-20 /* padding: 5rem (80px) */
p-24 /* padding: 6rem (96px) */

/* Same scale for margin (m-*), gap (gap-*) */
```

---

## ⚡ Transitions (theme-base.css)

```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
--transition-slower: 500ms;

--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

---

## 🎚️ Z-Index Scale (theme-base.css)

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1100;
--z-fixed: 1200;
--z-modal-backdrop: 1300;
--z-modal: 1400;
--z-popover: 1500;
--z-tooltip: 1600;
```

---

## ✅ Correct Usage Examples

### Typography
```tsx
// ✅ CORRECT - Use CSS variables
<h1 style={{ fontSize: 'var(--text-h1)' }}>Page Title</h1>
<p style={{ fontSize: 'var(--text-base)' }}>Body text</p>

// ❌ WRONG - Hard-coded values
<h1 style={{ fontSize: '64px' }}>Page Title</h1>
<h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)' }}>Page Title</h1>
```

### Font Families
```tsx
// ✅ CORRECT - Lexend for headings/body
<h1 style={{ fontFamily: 'Lexend, sans-serif' }}>Heading</h1>
<p style={{ fontFamily: 'Lexend, sans-serif' }}>Body text</p>

// ✅ CORRECT - Manrope for small text ONLY
<span style={{ 
  fontSize: 'var(--text-small)',
  fontFamily: 'Manrope, sans-serif' 
}}>
  Metadata
</span>

// ❌ WRONG - Other fonts
<h1 style={{ fontFamily: 'Arial' }}>Heading</h1>
```

### Colors
```tsx
// ✅ CORRECT - Use semantic color variables
<div style={{
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)'
}}>

// ✅ CORRECT - Primary button
<button style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>

// ❌ WRONG - Hard-coded hex/rgb
<div style={{ backgroundColor: '#FFFFFF' }}>
<div style={{ color: 'rgb(9, 9, 9)' }}>
```

### Spacing
```tsx
// ✅ CORRECT - Use Tailwind classes
<div className="p-6 gap-4 mb-8">

// ❌ WRONG - Hard-coded pixels
<div style={{ padding: '24px', gap: '16px', marginBottom: '32px' }}>
```

### Border Radius
```tsx
// ✅ CORRECT - Use CSS variables
<div style={{ borderRadius: 'var(--radius-lg)' }}>

// ❌ WRONG - Hard-coded pixels
<div style={{ borderRadius: '8px' }}>
```

---

## 🚫 Common Mistakes to Avoid

### ❌ Hard-Coded Font Sizes
```tsx
// WRONG
fontSize: '40px'
fontSize: '2.5rem'
fontSize: 'clamp(40px, 8vw, 72px)'

// CORRECT
fontSize: 'var(--text-h1)'  // Uses built-in clamp()
```

### ❌ Hard-Coded Colors
```tsx
// WRONG
color: '#090909'
backgroundColor: 'rgb(255, 255, 255)'
border: '1px solid #E4E4E7'

// CORRECT
color: 'var(--foreground)'
backgroundColor: 'var(--background)'
border: '1px solid var(--border)'
```

### ❌ Hard-Coded Spacing
```tsx
// WRONG
style={{ padding: '24px', margin: '32px' }}

// CORRECT
className="p-6 m-8"
```

### ❌ Wrong Font Families
```tsx
// WRONG
fontFamily: 'Arial'
fontFamily: 'Helvetica'
fontFamily: 'Inter'

// CORRECT
fontFamily: 'Lexend, sans-serif'   // Primary
fontFamily: 'Manrope, sans-serif'  // Small text only
```

---

## 📋 Design System Checklist

When creating/modifying components, verify:

- [ ] Uses `var(--text-*)` for all font sizes
- [ ] Uses `Lexend, sans-serif` OR `Manrope, sans-serif` (small text only)
- [ ] Uses `var(--foreground)`, `var(--background)`, etc. for colors
- [ ] Uses Tailwind classes for spacing (p-*, m-*, gap-*)
- [ ] Uses `var(--radius-*)` for border radius
- [ ] Uses `var(--shadow-*)` for shadows
- [ ] Uses `var(--transition-*)` for animations
- [ ] No hard-coded pixel values
- [ ] No hard-coded hex/rgb colors
- [ ] No custom font families

---

## 🔍 How to Check Compliance

### Find Hard-Coded Values
```bash
# Find hard-coded font sizes
grep -r "fontSize.*px\|fontSize.*rem" src/

# Find hard-coded colors
grep -r "color.*#\|backgroundColor.*#" src/

# Find hard-coded fonts
grep -r "fontFamily.*Arial\|fontFamily.*Helvetica" src/
```

### Verify CSS Variable Usage
```bash
# Should see LOTS of these
grep -r "var(--text-\|var(--foreground\|var(--background" src/
```

---

## 📚 Additional Resources

- **Complete Design System Guide:** `/DESIGN-SYSTEM-USAGE-GUIDE.md`
- **Light/Dark Mode Reference:** `/guidelines/design-tokens/light-dark-mode-complete.md`
- **Typography Guidelines:** `/guidelines/design-tokens/typography.md`
- **Color System:** `/guidelines/design-tokens/colors.md`
- **Spacing System:** `/guidelines/design-tokens/spacing.md`

---

**Last Updated:** December 27, 2024  
**Compliance:** 100% required  
**Status:** All new components MUST follow these guidelines  

