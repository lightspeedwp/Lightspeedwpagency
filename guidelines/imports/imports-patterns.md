# Import Guidelines — Patterns, Checklist & Compliance

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [imports.md](../imports.md)  

---

## CSS Variable Imports

### Design Tokens

**All CSS variables defined in `/src/styles/`:**

```tsx
style={{
  color: 'var(--foreground)',
  backgroundColor: 'var(--background)',
  padding: 'var(--spacing-6)',
  fontSize: 'var(--text-base)',
  fontFamily: 'var(--font-primary)',
  borderRadius: 'var(--radius)',
}}
```

**CSS Files:**
- `/src/styles/theme-base.css` — Base tokens
- `/src/styles/theme-light.css` — Light mode colors
- `/src/styles/theme-dark.css` — Dark mode colors
- `/src/styles/utilities.css` — Utility classes
- `/src/styles/components.css` — Component styles

---

## Import Checklist

### Before Importing Assets

- [ ] Check if Figma import already exists
- [ ] Use existing imports before creating new ones
- [ ] Verify icon exists in @phosphor-icons/react before importing
- [ ] Use centralized data files instead of inline data
- [ ] Use CSS variables instead of hardcoded values
- [ ] Follow correct import path (relative for SVGs, figma:asset for rasters)

### When Creating Imports

- [ ] Store SVGs in `/src/app/imports/`
- [ ] Use `figma:asset` scheme for raster images
- [ ] Use relative paths for SVG imports
- [ ] Add JSDoc comments to SVG exports
- [ ] Update data files in `/src/app/data/`
- [ ] Never hardcode fonts or colors

---

## Common Mistakes

### Path Prefix on figma:asset

```tsx
// WRONG - Never add path to figma:asset
import img from "./imports/figma:asset/abc123.png";

// CORRECT - No path prefix
import img from "figma:asset/abc123.png";
```

### Hardcoded Font

```tsx
// WRONG
<h1 style={{ fontFamily: 'Lexend' }}>

// CORRECT
<h1 style={{ fontFamily: 'var(--font-primary)' }}>
```

### Inline Data

```tsx
// WRONG
const posts = [{ id: 1, title: 'Post 1' }];

// CORRECT
import { blogPosts } from '../../data/posts';
```

### Absolute SVG Path

```tsx
// WRONG
import svg from "/src/app/imports/svg-abc123";

// CORRECT
import svg from "../imports/svg-abc123";  // From components/
```

---

## Import Patterns by File Type

### Images (Raster)

```tsx
// From Figma
import img from "figma:asset/abc123.png";

// New images
import { ImageWithFallback } from './components/figma/ImageWithFallback';
```

### SVGs (Vector)

```tsx
// From Figma imports
import svgPaths from "../imports/svg-wg56ef214f";

// UI icons
import { ArrowRight } from '@phosphor-icons/react';
```

### Fonts

```tsx
fontFamily: 'var(--font-primary)'
fontFamily: 'var(--font-secondary)'
```

### Colors

```tsx
color: 'var(--foreground)'
backgroundColor: 'var(--background)'
```

### Spacing

```tsx
// CSS variables (preferred)
padding: 'var(--spacing-6)'

// WordPress utility classes
className="wp-grid-3-cols"
```

### Data

```tsx
import { portfolioProjects } from '../../data/portfolio';
import { blogPosts } from '../../data/posts';
import { mainNavigation } from '../../data/pages';
```

---

## Design System Compliance

### DO THIS

```tsx
import img from "figma:asset/abc123.png";
import { ArrowRight } from '@phosphor-icons/react';
import { services } from '../../data/services';

<div style={{
  fontFamily: 'var(--font-primary)',
  color: 'var(--foreground)',
  padding: 'var(--spacing-6)',
}}>
  <img src={img} alt="Description" />
  <ArrowRight size={24} />
</div>
```

### DON'T DO THIS

```tsx
import img from "./images/photo.png";  // Use figma:asset
import CustomIcon from "./icons/icon.svg";  // Use @phosphor-icons/react

<div style={{
  fontFamily: 'Lexend',  // Use var(--font-primary)
  color: '#000000',  // Use var(--foreground)
  padding: '24px',  // Use var(--spacing-6)
}}>
```

---

## Summary

**Asset Locations:**
```
Raster Images: figma:asset/[hash].extension
SVGs: /src/app/imports/svg-*
Icons: @phosphor-icons/react package
Fonts: CSS variables (var(--font-*))
Colors: CSS variables (var(--*))
Data: /src/app/data/
```

**Key Rules:**
1. Use `figma:asset` for raster images (no path prefix)
2. Use relative paths for SVG imports
3. Use @phosphor-icons/react for UI icons
4. Use CSS variables for fonts and colors
5. Import data from centralized files
6. Never hardcode values

---

**See also:** [imports-assets.md](./imports-assets.md)
