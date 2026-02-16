# Mega Menu Guidelines

## Purpose

The Mega Menu component provides a rich navigation experience for complex site structures, allowing organized display of multiple links, descriptions, and featured content within a single dropdown.

## Architecture

**Location:** `/src/app/components/ui/MegaMenu.tsx` (Plan: Migrate to `/src/app/components/blocks/theme/MegaMenu.tsx`)

**WordPress Mapping:**
- **Navigation Block:** `core/navigation` with submenu.
- **Pattern:** `mega-menu-pattern` (Custom pattern with columns/groups).

## Features

- **Sections:** Group links into titled columns.
- **Featured Content:** Highlight specific pages with images and descriptions.
- **Icons & Descriptions:** Enhanced link context.
- **Animation:** Staggered entrance animations.
- **Glassmorphism:** Modern visual style.

## Usage

```tsx
<MegaMenu
  title="Services"
  sections={[
    {
      title: "Design",
      items: [
        { label: "Web Design", page: "web-design", description: "Custom UI/UX" },
        { label: "Branding", page: "branding", description: "Logo & Identity" }
      ]
    }
  ]}
  featured={[
    {
      label: "Case Study",
      page: "case-study-1",
      description: "See our recent work",
      image: "/assets/case-study.jpg"
    }
  ]}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
/>
```

## Accessibility

- **Keyboard Navigation:** Tab support for all links.
- **Focus Management:** Trap focus within menu when open (optional).
- **ARIA Attributes:** `aria-expanded`, `aria-haspopup`.
- **Esc Key:** Close menu on Escape.

## Mobile Considerations

- **Mega Menus on Mobile:** Typically converted to nested accordion lists or slide-over panels.
- **Touch Targets:** Ensure all links meet 44x44px minimum.

## Implementation Plan

1. **Migrate Component:** Move to `blocks/theme` folder.
2. **Refactor Styles:** Extract styles to dedicated CSS file.
3. **Enhance A11y:** Verify focus management.
4. **Mobile Strategy:** Define mobile behavior in `MobileMenu.md`.
