# Borders Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
Borders in the Funky aesthetic are prominent, glowing, and often vibrant. We rely entirely on our CSS variables for all border treatments. **No hardcoded px values or Tailwind classes.**

## 📏 CSS Variables
Define and use these variables from `/src/styles/theme-base.css` and related style files:

```css
:root {
  --border-width-1: 1px;
  --border-width-2: 2px;
  
  --border-color-default: var(--border);
  --border-color-neon: var(--wp--preset--color--neon-pink);
}
```

## 🏗 BEM Usage Example

### Neon Borders
Neon borders are a staple of the "Funky" design system. Combine thick borders with bright, neon CSS color variables.

```css
.card {
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  transition: border-color 0.3s ease;
}

.card:hover,
.card--is-active {
  border-color: var(--wp--preset--color--neon-pink);
}
```

## 🚫 Anti-Patterns
- **Do NOT** use `border-2 border-red-500` (No Tailwind).
- **Do NOT** write `border: 2px solid #FF00FF;` (No hardcoded hex color values).
- **Do NOT** create inline styles for borders unless calculating dynamic UI state (very rare).