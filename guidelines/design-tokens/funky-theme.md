# Funky Theme Design Tokens

**Scope:** Neon & Bright Aesthetic Overlay
**Parent System:** WordPress FSE / WooCommerce Theme

---

## 1. Color Palette (Neon)

These colors are added to `theme-variables.css` under the `--wp--preset--color--*` namespace.

| Token Name | Hex Value | Usage |
| :--- | :--- | :--- |
| `neon-pink` | `#ff00ff` | Primary accents, Orbs, Glows |
| `neon-cyan` | `#00ffff` | Secondary accents, Orbs, Borders |
| `neon-lime` | `#00ff00` | Success states, Highlights |
| `neon-yellow` | `#ffff00` | Warning states, Attention grabbers |
| `deep-purple` | `#2d0059` | Backgrounds (Dark Mode) |

### Gradients
*   `--wp--preset--gradient--neon-hero`: Linear gradient (Pink to Cyan) for overlays.
*   `--wp--preset--gradient--neon-glow`: Linear gradient (45deg, Pink to Cyan) for card borders.

---

## 2. Animation Tokens

Animations are defined in `globals.css` and applied via utility classes.

### Keyframes
1.  **`funky-float`**: 
    *   **Behavior:** Gentle vertical oscillation (-20px).
    *   **Duration:** 6s infinite ease-in-out.
    *   **Use Case:** Background Orbs in Hero.

2.  **`funky-glow-pulse`**:
    *   **Behavior:** Scale (1.05x) and Opacity (0.5 -> 0.8) breathing.
    *   **Duration:** 3s infinite ease-in-out.
    *   **Use Case:** Highlights, CTA attention.

3.  **`funky-rotate`**:
    *   **Behavior:** 360deg rotation.
    *   **Use Case:** Icons on hover (partial rotation implemented via Tailwind classes).

### Interaction Utilities
*   **`.funky-spring-hover`**:
    *   **Transition:** `transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`
    *   **Effect:** Bouncy scale effect on hover.

---

## 3. Component Utilities

### Glow Cards (`.funky-card-glow`)
A specialized card container that creates a neon border effect using a pseudo-element.

**Usage:**
```html
<div class="funky-card-glow">
  <div class="bg-surface relative z-10">
    Content goes here...
  </div>
</div>
```

**Mechanism:**
*   `::before` element contains the neon gradient.
*   `inset: -2px` creates the border width.
*   `z-index: -1` places it behind the content.
*   `blur(10px)` creates the glow effect.

### Neon Typography (`.funky-text-neon`)
Adds a dual-layer text shadow using the neon palette.

**Usage:**
```html
<h1 class="funky-text-neon">Headline</h1>
```

---

## 4. Accessibility (Reduced Motion)

**CRITICAL:** All "Funky" animations are disabled for users who prefer reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  .funky-animate-float,
  .funky-animate-glow,
  .funky-spring-hover {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
```
