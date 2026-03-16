# Import Guidelines — Assets (Images, SVGs, Fonts, Data)

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [imports.md](../imports.md)  

---

## Purpose

How to import and use assets (images, SVGs, fonts, data) in the LSX Design system.

**Goals:**
- Consistent import patterns
- Proper asset organization
- Optimal performance
- Type safety
- Design system compliance

---

## Import Directory

**Location:** `/src/app/imports/`

**Structure:**
```
/src/app/imports/
├── svg-*.tsx              # SVG components (from Figma)
├── images/                # Raster images (if needed)
├── fonts/                 # Custom fonts (if needed)
└── data/                  # Imported data/tokens (if needed)
```

---

## Image Imports

### 1. Raster Images (PNG, JPG, etc.)

**Use the special `figma:asset` import scheme:**

```tsx
// CORRECT - figma:asset scheme (virtual module)
import imgA from "figma:asset/abc123.png";
import imgB from "figma:asset/xyz789.jpg";

// Use in components
<img src={imgA} alt="Description" />
```

**WRONG - Do NOT use relative paths for figma:asset:**

```tsx
// WRONG - Never prefix with path
import img from "./imports/figma:asset/abc123.png";
import img from "../imports/figma:asset/abc123.png";
```

**Key Points:**
- `figma:asset` is a **virtual module scheme**, NOT a file path
- Never prefix with `./`, `../`, or any directory path
- Always use the bare `figma:asset/[hash].extension` format

---

### 2. ImageWithFallback Component

**For NEW images (not from Figma):**

```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-auto"
/>
```

**Location:** `/src/app/components/figma/ImageWithFallback.tsx`

**When to use:** Creating new images not from Figma  
**When NOT to use:** Figma imports exist for same purpose

---

## SVG Imports

### 1. SVG Files from Figma

**SVGs are stored as files in `/src/app/imports/`:**

```tsx
// CORRECT - Relative path from component location
import svgPaths from "../imports/svg-wg56ef214f";
import iconData from "../../imports/svg-abc123xyz";

// Use in components
<svg viewBox={svgPaths.viewBox}>
  <path d={svgPaths.path} />
</svg>
```

**Path Calculation:**
- From `/src/app/App.tsx`: `import svg from "./imports/svg-*"`
- From `/src/app/components/Component.tsx`: `import svg from "../imports/svg-*"`
- From `/src/app/components/nested/Component.tsx`: `import svg from "../../imports/svg-*"`

---

### 2. Icon Components (@phosphor-icons/react)

**For UI icons, use @phosphor-icons/react:**

```tsx
import { ArrowRight, Check, X, List } from '@phosphor-icons/react';

<ArrowRight size={24} />
<Check size={16} weight="bold" />
```

**When to use:** UI icons (arrows, checks, close buttons, standard interface elements)

---

## Font Imports

### 1. Design System Fonts

**ONLY use fonts defined in the design system:**

```tsx
// CORRECT - Use CSS variables
fontFamily: 'var(--font-primary)'    // Lexend
fontFamily: 'var(--font-secondary)'  // Manrope

// WRONG - Never hardcode
fontFamily: 'Lexend, sans-serif'
fontFamily: 'Manrope, sans-serif'
```

**Defined Fonts:**
- **Lexend** (Primary) — Headings, body text, UI elements
- **Manrope** (Secondary) — Small text only

**Location:** Fonts are loaded in `/src/styles/fonts.css`

### 2. Custom Font Imports

**If adding a NEW font (requires approval):**

```css
/* Add to /src/styles/fonts.css */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**WARNING:** Only add fonts with explicit approval. Design system uses Lexend + Manrope.

---

## Data Imports

### 1. Centralized Data System

**All data comes from `/src/app/data/`:**

```tsx
import { portfolioProjects } from '../../data/portfolio';
import { blogPosts } from '../../data/posts';
import { mainNavigation } from '../../data/pages';
import { servicesFAQs } from '../../data/faqs';
```

**Available Data Files:** pages.ts, portfolio.ts, posts.ts, faqs.ts, services.ts, team.ts, testimonials.ts

### 2. Component-Specific Data

**Avoid inline data. Use centralized data files:**

```tsx
// WRONG - Inline data
const services = [
  { id: 1, title: 'Web Design' },
];

// CORRECT - Import from data file
import { services } from '../../data/services';
```

---

**See also:** [imports-patterns.md](./imports-patterns.md)
