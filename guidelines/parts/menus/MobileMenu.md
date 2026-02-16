# Mobile Menu Guidelines

## Purpose

The Mobile Menu provides navigation for smaller viewports, typically collapsing the desktop navigation into a hamburger menu or slide-out drawer.

## Architecture

**Location:** `/src/app/components/ui/MobileMenu.tsx` (Plan: Migrate to `/src/app/components/blocks/theme/MobileMenu.tsx`)

**WordPress Mapping:**
- **Navigation Block:** `core/navigation` (Mobile overlay).

## Features

- **Hamburger Toggle:** Animate between open/closed states.
- **Slide-out Drawer:** Smooth transition from side or full-screen overlay.
- **Nested Navigation:** Accordion-style submenus.
- **Search Integration:** Mobile-optimized search bar.
- **Social Links:** Footer area within the menu.

## Usage

```tsx
<MobileMenu
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  menuItems={mainNavigation}
>
  <SearchInput />
  <SocialLinks />
</MobileMenu>
```

## Accessibility

- **Focus Trap:** Keep focus within the menu when open.
- **Body Scroll Lock:** Prevent background scrolling.
- **Labeling:** Clear "Open Menu" and "Close Menu" labels.
- **Touch Gestures:** Support swipe to close (optional).

## Implementation Plan

1. **Migrate Component:** Move to `blocks/theme`.
2. **CSS Animation:** Use CSS variables for transitions.
3. **Scroll Lock:** Implement `useScrollLock` hook.
4. **Integration:** Connect with `SiteHeader`.
