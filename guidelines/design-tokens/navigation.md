# Navigation Tokens & Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
Navigation in the Funky aesthetic must be bold, scannable, and highly responsive. On desktop, it should feature bright hover states and neon underlines. On mobile, it requires a full-screen or prominent drawer with large touch targets.

## 📏 CSS Variables
Use global variables for navigation sizing and colors.

```css
:root {
  --nav-height-desktop: 80px;
  --nav-height-mobile: 60px;
  --nav-bg-color: var(--color-bg-base);
  --nav-link-color: var(--color-text-primary);
  --nav-link-hover-color: var(--color-neon-primary);
}
```

## 🏗 Implementation Rules

### Desktop Navigation (`.nav--desktop`)
- Links should have a subtle resting state and a vibrant glowing hover state.
- Use `::after` pseudo-elements for neon underline animations.

```css
.nav__link {
  color: var(--nav-link-color);
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  padding: var(--spacing-xs) var(--spacing-sm);
  position: relative;
  transition: color var(--anim-duration-fast) ease;
}

.nav__link:hover,
.nav__link--active {
  color: var(--nav-link-hover-color);
  text-shadow: 0 0 8px var(--nav-link-hover-color);
}
```

### Mobile Navigation (`.nav--mobile`)
- **Touch Targets:** Minimum 44px height for all links and menu toggle buttons.
- **Backdrop:** Consider a semi-transparent blur (`backdrop-filter: blur(10px)`) or a solid dark background so neon links pop.
- **Animation:** Slide in from the right or top smoothly using `transform`.

```css
.nav__toggle {
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  /* Use CSS variables for icon colors */
  color: var(--color-text-primary);
}
```
