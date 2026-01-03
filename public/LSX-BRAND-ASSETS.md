# LSX Design — Brand Assets

Complete brand asset library for the LSX Design system.

**Last Updated:** December 24, 2024  
**Brand Version:** 1.0

---

## 📁 Asset Inventory

### Full Logo Lockups

| File | Dimensions | Use Case | Background |
|------|------------|----------|------------|
| `lsx-logo-light.svg` | 220×70px | Light backgrounds | Transparent |
| `lsx-logo-dark.svg` | 220×70px | Dark backgrounds | Transparent |

**Lockup:** Lightning bolt icon + "LSX Design" wordmark  
**Layout:** Icon on left, text on right, vertically centered

---

### Icon Only (Mark)

| File | Dimensions | Use Case |
|------|------------|----------|
| `lsx-icon.svg` | 48×68px | Compact spaces, app icons |

**Design:** Two-tone lightning bolt (sharp geometric facets)

---

### Favicon / Site Icon

| File | Format | Dimensions | Use Case |
|------|--------|------------|----------|
| `favicon.svg` | SVG | 512×512px | Modern browsers (scalable) |
| `lsx-favicon.svg` | SVG | 512×512px | Alternative favicon |

**Design:** White lightning bolt centered in red circle (#FF3131)  
**Bolt Colors:** Primary #FFFFFF, Secondary #FFDCDC (light pink for depth)

---

## 🎨 Brand Colors

### Lightning Bolt Icon

| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Primary face | Bright Red | `#FF3131` | Main bolt shape |
| Secondary face | Dark Red/Orange | `#CC3F23` | Adds depth and dimension |

### Wordmark Text

| Variant | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Light logo | Near Black | `#111111` | Light backgrounds |
| Dark logo | White | `#FFFFFF` | Dark backgrounds |

### Favicon

| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Circle background | Bright Red | `#FF3131` | Background |
| Bolt primary | White | `#FFFFFF` | Main bolt shape |
| Bolt secondary | Light Pink | `#FFDCDC` | Depth/dimension |

---

## ✏️ Typography

### LSX (Top Line)

- **Font:** Inter (preferred) or Poppins
- **Weight:** 600 (Semibold)
- **Size:** 16px
- **Letter Spacing:** 1px
- **Alignment:** Left-aligned above "Design"

### Design (Bottom Line)

- **Font:** Inter (preferred) or Poppins
- **Weight:** 800 (ExtraBold)
- **Size:** 32px
- **Letter Spacing:** -0.5px (tight)
- **Alignment:** Left-aligned, dominant

---

## 📐 Geometry & Construction

### Lightning Bolt (Icon)

**Shape:** Sharp triangular facets forming a stylized lightning bolt  
**Style:** Geometric, angular, no rounded corners  
**Technique:** Two overlapping polygons create depth  
**Effects:** None (no gradients, shadows, strokes, or glows)

**Vector Path Structure:**
- Primary face: 6-point polygon (main lightning shape)
- Secondary face: 3-point triangle (adds dimension)
- All points use sharp angles (no curves or bezier handles)

---

## 📏 Spacing & Clearspace

### Logo Lockup

- **Icon-to-text gap:** ~8px (approximately 1/6 of icon width)
- **Vertical alignment:** Icon centered to combined wordmark height
- **Clearspace:** Minimum 10% of icon height on all sides

### Favicon

- **Bolt padding:** Comfortable margin from circle edge
- **Readable at:** 16px, 32px, 48px, 192px, 512px

---

## 💾 Export Specifications

### SVG Requirements

- ✅ All shapes as vector paths (no raster images)
- ✅ Clean layer naming (Icon/Primary, Icon/Secondary, Text/LSX, Text/Design)
- ✅ No embedded fonts (use system fallbacks)
- ✅ Transparent backgrounds
- ✅ Optimized file size

### Favicon PNG Sizes (Optional Export)

- 16×16px — Browser tab icon
- 32×32px — Browser bookmark bar
- 48×48px — Windows desktop icon
- 180×180px — iOS home screen
- 192×192px — Android home screen
- 512×512px — High-resolution displays

---

## 🚫 Usage Guidelines (Don'ts)

### ❌ Do NOT:

- Add gradients, shadows, or effects
- Use rounded corners on the lightning bolt
- Add strokes or outlines
- Change the two-tone color scheme
- Stretch or distort the logo proportions
- Use colors outside the specified palette
- Rotate or skew the logo
- Separate text from icon in the full lockup
- Use on busy backgrounds without proper clearspace

### ✅ DO:

- Use specified logo variants (light/dark) based on background
- Maintain minimum clearspace
- Use vector formats (SVG) when possible
- Scale proportionally
- Ensure adequate contrast with background
- Use icon-only version in compact spaces

---

## 🔧 Implementation

### In React Components

```tsx
import { Logo } from './components/common/Logo';

// Full logo (light theme)
<Logo variant="full" theme="light" />

// Full logo (dark theme)
<Logo variant="full" theme="dark" />

// Icon only
<Logo variant="compact" />

// Custom size
<Logo variant="full" theme="light" width={150} />
```

### In HTML

```html
<!-- Light background -->
<img src="/lsx-logo-light.svg" alt="LSX Design" width="220" height="70">

<!-- Dark background -->
<img src="/lsx-logo-dark.svg" alt="LSX Design" width="220" height="70">

<!-- Icon only -->
<img src="/lsx-icon.svg" alt="LSX" width="48" height="68">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

---

## 📦 File Structure

```
public/
├── lsx-logo-light.svg      ← Full logo (light backgrounds)
├── lsx-logo-dark.svg       ← Full logo (dark backgrounds)
├── lsx-icon.svg            ← Icon only (two-tone bolt)
├── favicon.svg             ← Favicon (bolt in red circle)
└── lsx-favicon.svg         ← Alternative favicon
```

---

## 🎯 Use Cases

### Full Logo (Light)
- Website headers on light backgrounds
- Email signatures
- Print materials on white paper
- Light-themed presentations

### Full Logo (Dark)
- Website headers on dark backgrounds
- Dark-themed presentations
- Video overlays on dark footage
- Social media banners with dark backgrounds

### Icon Only
- Mobile app icons
- Browser extension icons
- Social media profile pictures
- Compact header layouts
- Favicons (within circle)

### Favicon
- Browser tab icons
- Bookmark icons
- Progressive Web App icons
- Mobile home screen shortcuts

---

## 🔍 Quality Checklist

Before using brand assets, verify:

- [ ] Using correct logo variant (light/dark) for background
- [ ] SVG renders cleanly at target size
- [ ] Text is legible (minimum 16px for wordmark)
- [ ] Adequate contrast with background (WCAG AA minimum)
- [ ] Clearspace is maintained
- [ ] No distortion or stretching
- [ ] Colors match exact hex codes
- [ ] Logo is not touching other elements

---

## 📞 Brand Contact

**Questions about brand usage?**  
Contact: LSX Design System Team

**Need a custom size or format?**  
All assets are vector-based and can be scaled to any size.

**Reporting brand misuse?**  
Ensure compliance with these guidelines for consistent brand representation.

---

**Document Version:** 1.0  
**Last Review:** December 24, 2024  
**Next Review:** Quarterly or as needed for brand updates
