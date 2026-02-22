# Parts Guidelines Gaps

**Source Audit:** A6 — Parts Coverage Audit  
**Date:** 2026-02-21  
**Priority:** HIGH — Parts appear on every page; gaps affect entire site  
**Status:** NOT STARTED

---

## Summary

The project has **3 part components** in `/src/app/components/parts/` and **5 guideline files** in `/guidelines/parts/`. Coverage is technically complete, but guidelines may be outdated given the funky redesign.

---

## Current Parts Inventory

### Component Files (3)

| Component | File | Used By | Guideline |
|-----------|------|---------|-----------|
| `SiteHeader.tsx` | `/src/app/components/parts/SiteHeader.tsx` | Every page (via Layout) | `SiteHeader.md` |
| `SiteFooter.tsx` | `/src/app/components/parts/SiteFooter.tsx` | Every page (via Layout) | `SiteFooter.md` |
| `BreadcrumbPart.tsx` | `/src/app/components/parts/BreadcrumbPart.tsx` | Most pages except homepage | `Header.md` (partially) |

### Guideline Files (5)

| Guideline | Content | Status |
|-----------|---------|--------|
| `overview-parts.md` | Overview of template parts system | VERIFY |
| `Header.md` | Header part documentation | VERIFY |
| `SiteHeader.md` | Detailed SiteHeader docs | VERIFY |
| `SiteFooter.md` | Footer part documentation | VERIFY |
| `menus/` | Menu structure documentation | VERIFY |

---

## Audit Tasks

### SiteHeader — Full Audit

The SiteHeader is the most complex component (mega menus, mobile menu, search, theme toggle). It was significantly refactored in Jan 2025 (BEM migration, 600+ line CSS file).

- [ ] **Read current `SiteHeader.tsx`** — Verify component structure
- [ ] **Read current CSS** — `/src/styles/header-simple.css` or equivalent
- [ ] **Read `SiteHeader.md` guideline** — Check if it documents:
  - [ ] BEM class structure (`.site-header`, `.site-header__nav`, etc.)
  - [ ] Mega menu behavior (hover zones, keyboard nav)
  - [ ] Mobile menu (hamburger, slide-in, search)
  - [ ] Theme toggle (dark/light mode switch)
  - [ ] Logo (auto theme switching, 220px width)
  - [ ] Skip link (accessibility)
  - [ ] Sticky behavior
  - [ ] Funky treatments (glassmorphism, neon hover states)
  - [ ] Dark mode CSS
  - [ ] Reduced motion guards
- [ ] **Update guideline** if any sections are missing or outdated

### SiteFooter — Full Audit

- [ ] **Read current `SiteFooter.tsx`** — Verify structure
- [ ] **Read current CSS** — Footer styles location
- [ ] **Read `SiteFooter.md` guideline** — Check if it documents:
  - [ ] BEM class structure
  - [ ] Navigation columns (services, solutions, company, legal)
  - [ ] Newsletter signup integration
  - [ ] Social links
  - [ ] Copyright section
  - [ ] Dark mode CSS
  - [ ] Mobile responsive layout
  - [ ] Funky treatments (gradient divider top, glow social icons)
- [ ] **Update guideline** if needed

### BreadcrumbPart — Full Audit

- [ ] **Read current `BreadcrumbPart.tsx`** — Verify structure
- [ ] **Check if dedicated guideline exists** — Currently may only be in `Header.md`
- [ ] **Create `BreadcrumbPart.md`** guideline if missing, documenting:
  - [ ] BEM structure (`.breadcrumb`, `.breadcrumb__item`, etc.)
  - [ ] Navigation data source
  - [ ] ARIA attributes (`aria-label="Breadcrumb"`, structured data)
  - [ ] Separator styling
  - [ ] Dark mode support
  - [ ] Mobile behavior (truncation, horizontal scroll)

### Menus — Audit

- [ ] **Read `/guidelines/parts/menus/` directory** — Check completeness
- [ ] **Verify menu data** — Navigation structure from `/src/app/data/pages.ts`
- [ ] **Document mega menu structure** — Categories, subcategories, CTA slots

---

## Funky Redesign Gaps

The current parts guidelines likely pre-date the funky redesign. These funky treatments need documentation:

### SiteHeader Funky Treatments
- [ ] Document glassmorphism background on scroll
- [ ] Document neon hover states on nav items
- [ ] Document gradient active indicator
- [ ] Document mobile menu gradient overlay
- [ ] Document dark mode neon enhancement

### SiteFooter Funky Treatments
- [ ] Document gradient divider at top of footer
- [ ] Document glow effect on social icons hover
- [ ] Document newsletter input neon focus state
- [ ] Document dark mode adjustments

### BreadcrumbPart Funky Treatments
- [ ] Document neon separator color
- [ ] Document current page highlight
- [ ] Document dark mode adjustments

---

## Definition of Done

- [ ] All 3 part components have comprehensive, up-to-date guidelines
- [ ] All guidelines document BEM structure
- [ ] All guidelines document CSS variable usage
- [ ] All guidelines document funky treatments
- [ ] All guidelines document dark mode behavior
- [ ] All guidelines document mobile responsive behavior
- [ ] All guidelines document accessibility (ARIA, keyboard nav, screen readers)
- [ ] Menu structure fully documented
- [ ] Overview file (`overview-parts.md`) updated
