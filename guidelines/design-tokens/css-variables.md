# Complete CSS & BEM Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Architecture Philosophy
This project uses a **strict BEM methodology** paired with a robust **CSS Variables (Custom Properties)** system.
- **NO Tailwind CSS.**
- **NO Hardcoded Values** (colors, spacing, typography, borders, radii must all use CSS variables).
- **All variables reside in `/src/styles/theme-base.css`, `/src/styles/theme-light.css`, etc.**
- Components use standard React and standard CSS modules/files.

## 🏗 BEM Naming Conventions

BEM (Block, Element, Modifier) is mandatory for all component styling.

- **Block:** Standalone entity that is meaningful on its own. (`.card`, `.btn`, `.header`)
- **Element:** A part of a block that has no standalone meaning and is semantically tied to its block. (`.card__title`, `.btn__icon`)
- **Modifier:** A flag on a block or element. Use them to change appearance or behavior. (`.card--featured`, `.btn--primary`, `.btn--is-loading`)

### Rules for BEM
1. **Never nest Elements:** `.card__body__title` is **WRONG**. Use `.card__title` instead.
2. **Use double dashes for Modifiers:** `.btn--large`, `.nav--active`.
3. **Use double underscores for Elements:** `.card__image`.

```css
/* Good Example */
.card {
  background: var(--card);
  border-radius: var(--radius-lg);
}

.card__title {
  color: var(--wp--preset--color--neon-pink);
  font-family: var(--font-primary);
}

.card--featured {
  border: 2px solid var(--wp--preset--color--neon-pink);
}
```

## 🎨 CSS Variables (Design Tokens)

All UI generation must use these variables. If a variable doesn't exist for your specific need, fall back to the closest semantic variable. **Never hardcode hex codes or px values.**

### 1. Colors
```css
/* Example Usage */
.element {
  color: var(--foreground);
  background-color: var(--background);
  border-color: var(--border);
  box-shadow: 0 0 10px var(--wp--preset--color--neon-pink);
}
```

### 2. Typography
**CRITICAL:** Only use the font faces defined in the CSS for all generated text.
```css
.heading {
  font-family: var(--font-primary);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}
```

### 3. Spacing & Layout
Use spacing tokens for `padding`, `margin`, and `gap`.
```css
.container {
  padding: var(--spacing-6);
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}
```

### 4. Borders & Radius
```css
.box {
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}
```

## 📂 File Structure & Organization
- **`/src/styles/`:** The single source of truth for all CSS variables (colors, typography, spacing, etc.), CSS reset, and base styles. Specifically `theme-base.css`, `theme-light.css`, etc.
- **Component CSS:** Styles should ideally live in separate CSS files per component and be imported, or organized logically if concatenated.

## 🚀 Performance & Memory Optimization
- **Avoid deep nesting:** In pure CSS or SCSS, do not nest selectors more than 2 levels deep. BEM flattens specificity natively.
- **No utility class soup:** Keep your HTML clean by using BEM classes. (e.g. `<div className="card card--featured">` instead of `<div className="p-4 bg-black border-2 border-pink-500 rounded-lg shadow-neon">`).
- **Responsive Design:** Use CSS variable `clamp()` functions to minimize the need for `@media` queries for typography and spacing.
