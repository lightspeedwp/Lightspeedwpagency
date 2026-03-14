# Dark & Light Mode Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
The Funky Neon aesthetic relies heavily on high contrast. The primary theme is Dark Mode (to let neon colors pop), but a vibrant Light Mode is supported via CSS variable overrides. All mode switching happens exclusively via CSS variables defined in `/styles/global.css`.

## 🎨 Theme Tokens System

### Root (Light Mode Default or Base)
```css
:root {
  --color-bg-base: #ffffff;
  --color-bg-surface: #f4f4f5;
  --color-text-primary: #121212;
  --color-neon-accent: #ff00ff; /* Bright magenta */
  --color-border-subtle: #e4e4e7;
}
```

### Dark Mode Override
```css
[data-theme="dark"] {
  --color-bg-base: #0a0a0a;
  --color-bg-surface: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-neon-accent: #ff00ff; /* Keep neon bright */
  --color-border-subtle: #333333;
}
```

## 🏗 Implementation Rules

1. **Semantic Variables ONLY:** 
   Never use absolute color values (`#000`, `white`, etc.) in your BEM blocks. Always map to `--color-bg-base`, `--color-text-primary`, etc.
   
2. **Neon Glow Differences:** 
   Neon glows (box-shadow) might need stronger opacity in dark mode to pop correctly. Handle this via CSS variables, e.g., `--neon-glow-opacity: 0.8;` in dark mode, and `0.4;` in light mode.

3. **No Tailwind Dark Mode:**
   Do NOT use Tailwind's `dark:` modifier (e.g., `dark:bg-black`). Use pure CSS variables and BEM blocks.

```css
/* Correct BEM + CSS Variable Usage */
.header {
  background-color: var(--color-bg-surface);
  color: var(--color-text-primary);
  border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
}
```
