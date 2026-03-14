# Import Guidelines — Guidelines

**Category:** Development  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## 🎯 **PURPOSE**

This document defines how to import and use assets (images, SVGs, fonts, data) in the LSX Design system.

**Goals:**
- Consistent import patterns
- Proper asset organization
- Optimal performance
- Type safety
- Design system compliance

---

## 📁 **IMPORT DIRECTORY**

**Location:** `/src/app/imports/`

**Purpose:** Store imported assets from Figma or other external sources

**Structure:**
```
/src/app/imports/
├── svg-*.tsx              # SVG components (from Figma)
├── images/                # Raster images (if needed)
├── fonts/                 # Custom fonts (if needed)
└── data/                  # Imported data/tokens (if needed)
```

---

## 🖼️ **IMAGE IMPORTS**

### **1. Raster Images (PNG, JPG, etc.)**

**Use the special `figma:asset` import scheme:**

```tsx
// ✅ CORRECT - figma:asset scheme (virtual module)
import imgA from "figma:asset/abc123.png";
import imgB from "figma:asset/xyz789.jpg";

// Use in components
<img src={imgA} alt="Description" />
```

**❌ WRONG - Do NOT use relative paths for figma:asset:**

```tsx
// ❌ WRONG - Never prefix with path
import img from "./imports/figma:asset/abc123.png";
import img from "../imports/figma:asset/abc123.png";
import img from "/src/app/imports/figma:asset/abc123.png";
```

**Key Points:**
- `figma:asset` is a **virtual module scheme**, NOT a file path
- Never prefix with `./`, `../`, or any directory path
- Always use the bare `figma:asset/[hash].extension` format

---

### **2. ImageWithFallback Component**

**For NEW images (not from Figma):**

```tsx
// Import the component
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Use it
<ImageWithFallback
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-auto"
/>
```

**Location:** `/src/app/components/figma/ImageWithFallback.tsx`

**When to use:**
- Creating new images not from Figma
- Need fallback behavior
- Want consistent image loading

**When NOT to use:**
- Figma imports exist for same purpose
- Use Figma imports directly instead

---

## 🎨 **SVG IMPORTS**

### **1. SVG Files from Figma**

**SVGs are stored as files in `/src/app/imports/`:**

```tsx
// ✅ CORRECT - Relative path from component location
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

### **2. Icon Components (Lucide React)**

**For UI icons, use lucide-react:**

```tsx
// Import from lucide-react
import { ArrowRight, Check, X, Menu } from 'lucide-react';

// Use in components
<ArrowRight className="w-6 h-6" />
<Check className="w-4 h-4 text-green-500" />
```

**When to use:**
- UI icons (arrows, checks, close buttons)
- Standard interface elements
- Need consistent icon library

**See:** `/guidelines/overview-icons.md` for complete icon reference

---

## 🔤 **FONT IMPORTS**

### **1. Design System Fonts**

**ONLY use fonts defined in the design system:**

```tsx
// ✅ CORRECT - Use CSS variables
fontFamily: 'var(--font-primary)'    // Lexend
fontFamily: 'var(--font-secondary)'  // Manrope

// ❌ WRONG - Never hardcode
fontFamily: 'Lexend, sans-serif'
fontFamily: 'Manrope, sans-serif'
```

**Defined Fonts:**
- **Lexend** (Primary) — Headings, body text, UI elements
- **Manrope** (Secondary) — Small text only

**Location:** Fonts are loaded in `/src/styles/fonts.css`

---

### **2. Custom Font Imports**

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

**Then update CSS variables:**

```css
/* Add to /src/styles/theme-base.css */
--font-custom: 'CustomFont', sans-serif;
```

**⚠️ WARNING:** Only add fonts with explicit approval. Design system uses Lexend + Manrope.

---

## 📦 **DATA IMPORTS**

### **1. Centralized Data System**

**All data comes from `/src/app/data/`:**

```tsx
// ✅ CORRECT - Import from data files
import { portfolioProjects } from '../../data/portfolio';
import { blogPosts } from '../../data/posts';
import { mainNavigation } from '../../data/pages';
import { servicesFAQs } from '../../data/faqs';
```

**Available Data Files:**
- `pages.ts` — Navigation, page metadata
- `portfolio.ts` — Portfolio projects
- `posts.ts` — Blog posts, authors
- `faqs.ts` — FAQ collections
- `services.ts` — Services data
- `team.ts` — Team members
- `testimonials.ts` — Client testimonials
- And more...

**See:** `/src/app/data/README.md` for complete data reference

---

### **2. Component-Specific Data**

**Avoid inline data. Use centralized data files:**

```tsx
// ❌ WRONG - Inline data
const services = [
  { id: 1, title: 'Web Design', ... },
  { id: 2, title: 'Development', ... },
];

// ✅ CORRECT - Import from data file
import { services } from '../../data/services';
```

---

## 🎨 **CSS VARIABLE IMPORTS**

### **1. Design Tokens**

**All CSS variables defined in `/src/styles/`:**

```tsx
// ✅ CORRECT - Use CSS variables
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

### **2. Tailwind Classes**

**Use Tailwind for spacing and layout:**

```tsx
// ✅ CORRECT - Tailwind classes
<div className="p-6 gap-4 mb-8">
  <h1 className="mb-4">Title</h1>
</div>

// ✅ ALSO CORRECT - CSS variables
<div style={{ padding: 'var(--spacing-6)' }}>
  <h1>Title</h1>
</div>
```

**Preference:** Use Tailwind classes for spacing, CSS variables for colors/typography

---

## 📋 **IMPORT CHECKLIST**

### **Before Importing Assets:**

- [ ] Check if Figma import already exists
- [ ] Use existing imports before creating new ones
- [ ] Verify icon exists in lucide-react before importing
- [ ] Use centralized data files instead of inline data
- [ ] Use CSS variables instead of hardcoded values
- [ ] Follow correct import path (relative for SVGs, figma:asset for rasters)

---

### **When Creating Imports:**

- [ ] Store SVGs in `/src/app/imports/`
- [ ] Use `figma:asset` scheme for raster images
- [ ] Use relative paths for SVG imports
- [ ] Add JSDoc comments to SVG exports
- [ ] Update data files in `/src/app/data/`
- [ ] Never hardcode fonts or colors

---

## 🚫 **COMMON MISTAKES**

### **❌ WRONG: Path Prefix on figma:asset**

```tsx
// WRONG - Never add path to figma:asset
import img from "./imports/figma:asset/abc123.png";
import img from "../figma:asset/abc123.png";
```

### **✅ CORRECT: Bare figma:asset Scheme**

```tsx
// CORRECT - No path prefix
import img from "figma:asset/abc123.png";
```

---

### **❌ WRONG: Hardcoded Font**

```tsx
// WRONG - Don't hardcode fonts
<h1 style={{ fontFamily: 'Lexend' }}>
```

### **✅ CORRECT: CSS Variable**

```tsx
// CORRECT - Use CSS variable
<h1 style={{ fontFamily: 'var(--font-primary)' }}>
```

---

### **❌ WRONG: Inline Data**

```tsx
// WRONG - Don't inline data
const posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
];
```

### **✅ CORRECT: Import from Data File**

```tsx
// CORRECT - Import from centralized data
import { blogPosts } from '../../data/posts';
```

---

### **❌ WRONG: Absolute SVG Path**

```tsx
// WRONG - Don't use absolute paths
import svg from "/src/app/imports/svg-abc123";
```

### **✅ CORRECT: Relative SVG Path**

```tsx
// CORRECT - Use relative path
import svg from "../imports/svg-abc123";  // From components/
import svg from "./imports/svg-abc123";   // From App.tsx
```

---

## 📖 **IMPORT PATTERNS BY FILE TYPE**

### **Images (Raster):**

```tsx
// From Figma
import img from "figma:asset/abc123.png";

// New images
import { ImageWithFallback } from './components/figma/ImageWithFallback';
```

---

### **SVGs (Vector):**

```tsx
// From Figma imports
import svgPaths from "../imports/svg-wg56ef214f";

// UI icons
import { ArrowRight } from 'lucide-react';
```

---

### **Fonts:**

```tsx
// Use CSS variables only
fontFamily: 'var(--font-primary)'
fontFamily: 'var(--font-secondary)'
```

---

### **Colors:**

```tsx
// Use CSS variables only
color: 'var(--foreground)'
backgroundColor: 'var(--background)'
```

---

### **Spacing:**

```tsx
// Tailwind classes
className="p-6 gap-4 mb-8"

// OR CSS variables
padding: 'var(--spacing-6)'
```

---

### **Data:**

```tsx
// Import from /src/app/data/
import { portfolioProjects } from '../../data/portfolio';
import { blogPosts } from '../../data/posts';
import { mainNavigation } from '../../data/pages';
```

---

## 🎯 **DESIGN SYSTEM COMPLIANCE**

**All imports MUST comply with design system:**

### **✅ DO THIS:**

```tsx
import img from "figma:asset/abc123.png";
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

<div style={{
  fontFamily: 'var(--font-primary)',
  color: 'var(--foreground)',
  padding: 'var(--spacing-6)',
}}>
  <img src={img} alt="Description" />
  <ArrowRight className="w-6 h-6" />
</div>
```

---

### **❌ DON'T DO THIS:**

```tsx
import img from "./images/photo.png";  // Use figma:asset
import CustomIcon from "./icons/icon.svg";  // Use lucide-react

<div style={{
  fontFamily: 'Lexend',  // Use var(--font-primary)
  color: '#000000',  // Use var(--foreground)
  padding: '24px',  // Use var(--spacing-6)
}}>
  <img src="/images/photo.jpg" />  // Use figma:asset imports
</div>
```

---

## 📚 **RELATED GUIDELINES**

**See also:**
- **[overview-icons.md](../overview-icons.md)** — Complete icon system reference
- **[design-tokens/typography.md](../design-tokens/typography.md)** — Font system
- **[design-tokens/colors.md](../design-tokens/colors.md)** — Color system
- **[design-tokens/spacing.md](../design-tokens/spacing.md)** — Spacing scale
- **[/src/app/data/README.md](../../src/app/data/README.md)** — Data system

---

## 🎉 **SUMMARY**

**Asset Locations:**
```
Raster Images: figma:asset/[hash].extension
SVGs: /src/app/imports/svg-*
Icons: lucide-react package
Fonts: CSS variables (var(--font-*))
Colors: CSS variables (var(--*))
Data: /src/app/data/
```

**Import Patterns:**
```tsx
// Raster images
import img from "figma:asset/abc123.png";

// SVGs
import svg from "../imports/svg-wg56ef214f";

// Icons
import { Icon } from 'lucide-react';

// Data
import { data } from '../../data/file';

// Styling
fontFamily: 'var(--font-primary)'
color: 'var(--foreground)'
padding: 'var(--spacing-6)'
```

**Key Rules:**
1. ✅ Use `figma:asset` for raster images (no path prefix)
2. ✅ Use relative paths for SVG imports
3. ✅ Use lucide-react for UI icons
4. ✅ Use CSS variables for fonts and colors
5. ✅ Import data from centralized files
6. ❌ Never hardcode values
7. ❌ Never create custom icons (use lucide-react)

---

**Last Updated:** 2025-01-09  
**Status:** ✅ Active  
**Enforcement:** Mandatory for all imports
