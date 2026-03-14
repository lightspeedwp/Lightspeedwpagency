# Form Design Tokens & Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
Forms should be highly accessible, legible, and match the Funky neon aesthetic. This means clear thick borders, high-contrast text, and bright glowing focus states.

## 📏 CSS Variables
Define these variables in your global CSS to ensure form consistency:

```css
:root {
  --form-input-bg: var(--color-bg-surface);
  --form-input-color: var(--color-text-primary);
  --form-input-border: var(--color-border-subtle);
  --form-input-radius: var(--radius-md);
  --form-input-padding: var(--spacing-sm) var(--spacing-md);
  
  --form-focus-glow: 0 0 0 3px rgba(255, 0, 255, 0.4);
  --form-focus-border: var(--color-neon-primary);
}
```

## 🏗 Implementation Rules

1. **Input Fields:**
   Inputs should have a solid background and a distinct border. Use BEM classes like `.form__input`.

```css
.form__input {
  background-color: var(--form-input-bg);
  color: var(--form-input-color);
  border: var(--border-width-normal) solid var(--form-input-border);
  border-radius: var(--form-input-radius);
  padding: var(--form-input-padding);
  font-family: var(--font-body);
  font-size: var(--text-base);
  width: 100%;
  transition: border-color var(--anim-duration-fast) ease,
              box-shadow var(--anim-duration-fast) ease;
}
```

2. **Focus States (CRITICAL):**
   Remove default outlines and use a Funky neon glow for focus states.

```css
.form__input:focus {
  outline: none;
  border-color: var(--form-focus-border);
  box-shadow: var(--form-focus-glow);
}
```

3. **Labels:**
   Always use `<label>` associated via `id` and `htmlFor`. Make labels bold or distinct.

4. **Error States:**
   Use a distinct neon red/orange variable for errors.
