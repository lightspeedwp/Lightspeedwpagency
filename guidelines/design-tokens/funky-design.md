# Funky Design System Guidelines — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## 🎯 Philosophy
The "Funky" design system is bold, vibrant, and unapologetic. It blends retro-wave aesthetics with ultra-modern layout principles. Key visual signifiers include neon glows, high-contrast borders, thick typography, and vibrant gradient bursts.

## 🎨 Core Elements

### 1. Neon Glows
Glows replace standard drop shadows to create a "lit" effect on dark backgrounds.
```css
/* Controlled via globals */
:root {
  --neon-glow-primary: 0 0 10px rgba(255, 0, 255, 0.6), 0 0 20px rgba(255, 0, 255, 0.4);
}
```

### 2. High Contrast Borders
Thick, bright borders separate elements sharply.
Use `var(--border-width-thick)` combined with bright neon accent colors.

### 3. Typography
Heavy, bold sans-serif headings. Text should be legible but stylized. Only use the fonts defined in the CSS (`var(--font-heading)`, `var(--font-body)`). Never hardcode font families.

## 🏗 Component Building

When generating components under the Funky design system:
1. **Adhere to BEM strictly.** No utility soup. No Tailwind.
2. **Apply CSS Variables exclusively.** Everything (color, space, radius) must map back to `/styles/global.css`.
3. **Enhance with Hover States.** Funky design feels alive. Add transitions for hover states that increase neon glow or shift gradient angles.

```css
/* Example Funky Card */
.funky-card {
  background: var(--color-bg-surface);
  border: var(--border-width-thick) solid var(--color-neon-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  box-shadow: var(--neon-glow-primary);
  transition: transform var(--anim-duration-normal) ease;
}

.funky-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.8), 0 0 30px rgba(255, 0, 255, 0.6);
}
```
