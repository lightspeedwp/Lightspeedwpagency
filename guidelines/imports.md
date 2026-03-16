# Import Guidelines — Guidelines

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md  

---

## Overview

Standards for importing and using assets (images, SVGs, fonts, data) in the LSX Design system. Split into 2 focused sub-files.

---

## Sub-Files

| File | Contents | Approx Lines |
|---|---|---|
| [imports-assets.md](./imports/imports-assets.md) | Purpose, directory structure, image imports (figma:asset, ImageWithFallback), SVG imports, font imports, data imports | ~210 |
| [imports-patterns.md](./imports/imports-patterns.md) | CSS variables, import checklist, common mistakes, patterns by file type, design system compliance, summary | ~200 |

---

## Quick Reference

| Asset Type | Import Pattern |
|------------|---------------|
| Raster Images | `import img from "figma:asset/abc123.png"` |
| SVGs | `import svg from "../imports/svg-*"` |
| Icons | `import { Icon } from '@phosphor-icons/react'` |
| Fonts | `fontFamily: 'var(--font-primary)'` |
| Colors | `color: 'var(--foreground)'` |
| Data | `import { data } from '../../data/file'` |

---

**Last Updated:** March 15, 2026  
**Enforcement:** Mandatory for all imports
