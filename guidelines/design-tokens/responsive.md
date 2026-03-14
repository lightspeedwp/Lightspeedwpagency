# Responsive & Viewport Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
We use a mobile-first approach. All base styles apply to mobile devices, and enhancements are progressively added via `min-width` media queries. We rely on fluid typography, fluid spacing (`clamp()`), and standard CSS media queries inside our BEM blocks. **No Tailwind responsive utilities (`md:`, `lg:`).**

## 📏 Breakpoint Strategy
We maintain a minimal set of standardized breakpoints to reduce complexity. These should be used inside your CSS files directly.

```css
/* Standard Breakpoints */
/* Mobile First: default styles are mobile */

/* Tablet Portrait & Up */
@media (min-width: 768px) { ... }

/* Tablet Landscape & Small Desktop */
@media (min-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1440px) { ... }
```

## 🏗 Fluid Design
Instead of creating media queries for every small adjustment, heavily leverage CSS variables for spacing and typography that use `clamp()`.

```css
/* Example of fluid spacing variable */
:root {
  --spacing-fluid-section: clamp(3rem, 5vw, 6rem);
}
```

## 📱 Viewport & Mobile Enhancements
1. **Touch Targets:** See the Touch Targets section below. Ensure all interactive elements have a minimum size of 44x44px.
2. **Safe Areas:** Respect `env(safe-area-inset-*)` on mobile devices, especially for fixed navigation or bottom bars.
3. **Hover States:** Wrap hover effects in `@media (hover: hover)` to prevent sticky hover states on touch devices.

```css
@media (hover: hover) {
  .button:hover {
    transform: scale(1.05);
    box-shadow: var(--neon-glow);
  }
}
```

## 🚫 Anti-Patterns
- **Do NOT** use `max-width` queries unless specifically targeting mobile-only behavior that cannot be achieved via mobile-first overrides.
- **Do NOT** use Tailwind classes for responsiveness (`sm:block md:hidden`). Use BEM classes.

---

## Touch Targets (Merged)

### 🎯 Philosophy
Mobile usability requires generous touch targets. Every interactive element (buttons, links, form fields, accordion toggles) must meet accessibility standards for touch interaction.

### 📏 Minimum Sizes
- **WCAG 2.1 AA:** Minimum 44x44 CSS pixels.
- **Exceptions:** Inline text links are exempt, but block-level links and buttons are not.

### 🏗 Implementation via CSS Variables
Ensure your components use padding, height, and width to achieve minimum touch target sizes.

```css
.button {
  min-height: 44px;
  min-width: 44px;
  padding: var(--spacing-2) var(--spacing-4);
  /* The rest of the button styles */
}

/* For icon-only buttons */
.icon-button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 📱 Tap Highlight & Active States
In the Funky design system, use bright neon variables to indicate active touch states, rather than relying on the browser's default tap highlight.

```css
.button {
  -webkit-tap-highlight-color: transparent;
}

.button:active {
  transform: scale(0.98);
  box-shadow: 0 0 10px var(--wp--preset--color--neon-pink);
}
```