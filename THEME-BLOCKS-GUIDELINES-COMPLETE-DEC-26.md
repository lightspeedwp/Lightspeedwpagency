# Theme Blocks Guidelines — Complete

**Date:** December 26, 2024  
**Status:** ✅ **COMPLETE** (Phase 1: Guidelines)  
**Category:** WordPress Theme Blocks  
**Total Files:** 6 guideline documents

---

## ✅ Guidelines Created (6/6)

### **Files Created:**
1. ✅ `/guidelines/blocks/theme/template-part.md` — Template Part block
2. ✅ `/guidelines/blocks/theme/site-title.md` — Site Title block
3. ✅ `/guidelines/blocks/theme/site-logo.md` — Site Logo block
4. ✅ `/guidelines/blocks/theme/site-tagline.md` — Site Tagline block
5. ✅ `/guidelines/blocks/theme/search.md` — Search block
6. ✅ `/guidelines/blocks/theme/navigation.md` — Navigation block

---

## 📊 Block Overview

### **Template Part Block**
- **Slug:** `core/template-part`
- **Purpose:** Define reusable structural parts (headers, footers, sidebars)
- **Key Features:** Structural composition, not content-based
- **WordPress Context:** Theme-level construct, editable in Site Editor

### **Site Title Block**
- **Slug:** `core/site-title`
- **Purpose:** Display site name with global updates
- **Key Features:** Links to home, heading hierarchy (H1-H6)
- **Design Tokens:** `var(--text-h2)`, `var(--text-h3)`, `var(--primary)`

### **Site Logo Block**
- **Slug:** `core/site-logo`
- **Purpose:** Display graphical logo with centralized management
- **Key Features:** SVG/PNG support, responsive sizing, home link
- **Design Tokens:** Tailwind spacing, `var(--radius)`
- **Note:** Replaces/extends existing `Logo.tsx` component

### **Site Tagline Block**
- **Slug:** `core/site-tagline`
- **Purpose:** Display site description/slogan
- **Key Features:** Short messaging, complements title/logo
- **Design Tokens:** `var(--text-base)`, `var(--text-small)`, `var(--foreground-muted)`

### **Search Block**
- **Slug:** `core/search`
- **Purpose:** Add search form for site content
- **Key Features:** Input + button, inside/outside button positions
- **Design Tokens:** `var(--text-base)`, `var(--primary)`, `var(--radius)`, `var(--border)`

### **Navigation Block**
- **Slug:** `core/navigation`
- **Purpose:** Display site menus with submenus
- **Key Features:** Horizontal/vertical, responsive mobile menu, keyboard navigation
- **Design Tokens:** `var(--text-base)`, `var(--primary)`, Tailwind `gap-*` classes

---

## 🎨 Design System Integration

### **All guidelines include:**

**Typography:**
- ✅ CSS variables (`var(--text-h1)`, `var(--text-base)`, `var(--text-small)`)
- ✅ Font weights (`var(--font-weight-regular)`, `var(--font-weight-medium)`)
- ✅ Line heights (`var(--line-height-normal)`)
- ✅ Letter spacing (`var(--letter-spacing-normal)`, `var(--letter-spacing-wide)`)

**Colors:**
- ✅ Semantic tokens (`var(--primary)`, `var(--foreground)`, `var(--surface)`)
- ✅ State colors (hover, active, focus using `var(--ring)`)
- ✅ Light/dark mode support

**Spacing:**
- ✅ Tailwind classes (`gap-6`, `p-3`, `px-4`, `py-2`, `mx-4`, `my-2`)
- ✅ Consistent spacing patterns

**Borders:**
- ✅ Border radius (`var(--radius)`, `var(--radius-md)`)
- ✅ Border colors (`var(--border)`)

---

## ♿ Accessibility Requirements

### **All blocks include:**
- ✅ WCAG AA color contrast (4.5:1 text, 3:1 UI)
- ✅ Semantic HTML tags
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators (visible 2px outline)
- ✅ Touch targets (44×44px minimum for mobile)
- ✅ Screen reader support

### **Navigation-specific:**
- ✅ Tab, Enter, Arrow keys, Escape support
- ✅ `aria-expanded`, `aria-haspopup` for submenus
- ✅ `role="navigation"`, `role="menubar"`, `role="menuitem"`

---

## 📦 Component Structure Preview

### **Example Props Defined:**

**SiteLogo:**
```tsx
<SiteLogo 
  src="/assets/logo.svg" 
  alt="LSX Design Logo" 
  width="150px" 
  linkHref="/" 
  linkLabel="Home" 
/>
```

**SiteTitle:**
```tsx
<SiteTitle 
  tag="h1" 
  linkHref="/" 
  linkLabel="Home"
>
  LSX Design
</SiteTitle>
```

**SiteTagline:**
```tsx
<SiteTagline tag="p">
  WordPress and WooCommerce web design experts
</SiteTagline>
```

**Search:**
```tsx
<Search 
  placeholder="Search articles…" 
  buttonLabel="Search" 
  showIcon={true} 
  buttonPosition="outside"
/>
```

**Navigation:**
```tsx
<Navigation 
  menu={primaryMenu} 
  orientation="horizontal" 
  spacing="gap-6"
  align="center"
/>
```

---

## 🎯 WordPress Parity

### **All blocks map to:**
- WordPress core blocks (5.9+)
- theme.json styles configuration
- Block editor compatibility
- Site Editor support

### **Integration with existing system:**
- ✅ Uses centralized data (`/src/app/data/pages.ts`)
- ✅ Compatible with container blocks (Group, Row, Stack, Columns)
- ✅ Follows LSX Design system tokens
- ✅ Integrates with `useNavigation()` hook

---

## 📁 File Structure

```
guidelines/
└── blocks/
    ├── design/              # Container blocks (existing)
    │   ├── buttons.md
    │   ├── group.md
    │   ├── grid.md
    │   ├── stack.md
    │   ├── row.md
    │   └── columns.md
    │
    └── theme/               # Theme blocks (NEW)
        ├── template-part.md ✅
        ├── site-title.md    ✅
        ├── site-logo.md     ✅
        ├── site-tagline.md  ✅
        ├── search.md        ✅
        └── navigation.md    ✅
```

---

## 🔄 Migration Notes

### **Site Logo vs. Logo Component**

**Existing:** `/src/app/components/common/Logo.tsx`  
**New:** `/src/app/components/blocks/theme/SiteLogo.tsx`

**Changes needed:**
1. Add WordPress block props (`linkHref`, `linkLabel`, `width`)
2. Add CSS variable support
3. Add ARIA label support
4. Maintain backward compatibility where possible
5. Update imports in SiteHeader

---

## 🚀 Next Steps

### **Phase 2: React Component Implementation**

Create 6 React components in `/src/app/components/blocks/theme/`:

1. ⏳ `TemplatePart.tsx` — Wrapper component for structural parts
2. ⏳ `SiteTitle.tsx` — Site name with heading hierarchy
3. ⏳ `SiteLogo.tsx` — Logo with responsive sizing (refactor from Logo.tsx)
4. ⏳ `SiteTagline.tsx` — Site slogan/description
5. ⏳ `Search.tsx` — Search form with input + button
6. ⏳ `Navigation.tsx` — Menu with submenus + mobile support

**Estimated Time:** 2-3 hours

### **Component Requirements:**
- ✅ TypeScript interfaces with full props
- ✅ JSDoc documentation
- ✅ CSS variables for all styling
- ✅ Tailwind classes for spacing
- ✅ ARIA labels and roles
- ✅ Responsive behavior
- ✅ WordPress parity (wp-block-* classes)

---

## 📚 Related Documentation

**Design System:**
- [design-tokens/typography.md](../../design-tokens/typography.md) — Typography scale
- [design-tokens/colors.md](../../design-tokens/colors.md) — Color system
- [design-tokens/spacing.md](../../design-tokens/spacing.md) — Spacing scale

**Container Blocks:**
- [CONTAINER-BLOCKS-IMPLEMENTATION-DEC-26.md](../../CONTAINER-BLOCKS-IMPLEMENTATION-DEC-26.md)
- [blocks/design/](../design/) — Design category blocks

**Data System:**
- `/src/app/data/pages.ts` — Navigation data
- `/src/app/hooks/useNavigation.ts` — Navigation hook

---

## ✨ Summary

**Theme Blocks Guidelines = 100% COMPLETE!**

We've successfully created comprehensive guidelines for 6 WordPress theme blocks:
- ✅ Template Part (structural composition)
- ✅ Site Title (site name display)
- ✅ Site Logo (graphical identity)
- ✅ Site Tagline (site description)
- ✅ Search (content search form)
- ✅ Navigation (site menus)

**All guidelines include:**
- Purpose and WordPress context
- Design system requirements (CSS variables + Tailwind)
- Component structure with props
- Usage guidelines
- Accessibility considerations (WCAG AA/AAA)
- WordPress implementation notes
- Related components and variations

**Next:** Begin React component implementation with design system compliance and WordPress parity.

---

**Status:** ✅ **COMPLETE & READY FOR IMPLEMENTATION**  
**Date:** December 26, 2024  
**Guidelines:** 6/6 files created  
**Design System:** 100% integrated  
**Accessibility:** WCAG AA/AAA compliant  

🎉 **Ready for Phase 2: React component creation!**
