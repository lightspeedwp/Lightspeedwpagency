# Dark Mode Toggle Block (Rich Tabor) — Figma Make CSS Guidelines

**Last Updated:** 2025-01-13  
**Purpose:** Sub-guidelines for Figma Make when generating CSS that styles the Dark Mode Toggle Block plugin  
**Language:** UK English

---

## 📋 **OVERVIEW**

### **What the Toggle Does**
Rich Tabor's Dark Mode Toggle block:
- Adds/removes `.theme-dark` class to `document.documentElement` (`<html>`)
- Persists user preference in browser storage
- Provides accessible toggle UI with keyboard navigation
- Uses WordPress block supports (background, border, spacing)

### **What the Theme Must Do**
1. Define semantic colour tokens in `theme.json` with light/dark variants
2. Create component-specific custom properties for the toggle
3. Implement mode-switching layer using CSS variable remapping
4. Style all block elements using plugin-provided class names only
5. Respect `.has-background` block editor setting
6. Ensure WCAG 2.1 AA compliance in both modes

---

## ✅ **DO / DON'T RULES**

### **Do:**
✅ Use **only** plugin-provided class names (`.wp-block-tabor-dark-mode-toggle*`)  
✅ Generate **plain CSS** (no Sass/SCSS, no nesting syntax)  
✅ Source all colours from `--wp--preset--color--*` or `--wp--custom--*` variables  
✅ Guard default track background with `:not(.has-background)`  
✅ Define paired light/dark tokens in `theme.json` custom settings  
✅ Use `:focus-visible` for keyboard accessibility  
✅ Keep selectors low-specificity (class-only where possible)  
✅ Scope dark mode rules with `.theme-dark` prefix  

### **Don't:**
❌ Rename or "improve" plugin class names  
❌ Hard-code hex values in component CSS  
❌ Use element selectors without plugin classes  
❌ Use `!important` to override styles  
❌ Create duplicate CSS for light/dark modes (use token mapping)  
❌ Apply background to `.has-background` elements (user controls this)  
❌ Output JavaScript, PHP, or SCSS  

---

## 🎨 **TOKEN NAMING CONVENTIONS**

### **1. Semantic Colour Tokens** (theme.json presets)
Map to `--wp--preset--color--*` format:

```css
/* Light mode (default) */
:root {
  --wp--preset--color--surface-1: #ffffff;
  --wp--preset--color--surface-2: #f8f9fa;
  --wp--preset--color--text-1: #1a1a1a;
  --wp--preset--color--text-2: #6b7280;
  --wp--preset--color--border-1: #e5e7eb;
  --wp--preset--color--accent-1: #8b5cf6;
}

/* Dark mode overrides */
.theme-dark {
  --wp--preset--color--surface-1: #1a1a1a;
  --wp--preset--color--surface-2: #2d3748;
  --wp--preset--color--text-1: #ffffff;
  --wp--preset--color--text-2: #cbd5e0;
  --wp--preset--color--border-1: #4a5568;
  --wp--preset--color--accent-1: #a78bfa;
}
```

### **2. Component-Level Custom Properties** (theme.json custom settings)
Define in `theme.json` → `settings.custom`:

```css
:root {
  /* Track */
  --wp--custom--dark-mode-toggle--track--background: var(--wp--preset--color--surface-2);
  --wp--custom--dark-mode-toggle--track--background-hover: var(--wp--preset--color--accent-1);
  --wp--custom--dark-mode-toggle--track--border: var(--wp--preset--color--border-1);
  
  /* Selector (knob) */
  --wp--custom--dark-mode-toggle--selector--background: var(--wp--preset--color--accent-1);
  
  /* Focus */
  --wp--custom--dark-mode-toggle--focus--outline: 2px solid var(--wp--preset--color--accent-1);
  --wp--custom--dark-mode-toggle--focus--outline-offset: 2px;
  
  /* Icon */
  --wp--custom--dark-mode-toggle--icon--size: 16px;
}
```

### **3. Mode Switch Mapping Layer**
Implement light/dark switching without duplicate CSS:

```css
/* Light mode (default) - point to --light variants */
:root {
  --wp--custom--dark-mode-toggle--track--background: var(--wp--custom--dark-mode-toggle--track--background--light);
  --wp--custom--dark-mode-toggle--track--background-hover: var(--wp--custom--dark-mode-toggle--track--background-hover--light);
}

/* Dark mode - point to --dark variants */
.theme-dark {
  --wp--custom--dark-mode-toggle--track--background: var(--wp--custom--dark-mode-toggle--track--background--dark);
  --wp--custom--dark-mode-toggle--track--background-hover: var(--wp--custom--dark-mode-toggle--track--background-hover--dark);
}

/* Component uses mode-agnostic variable */
.wp-block-tabor-dark-mode-toggle__track:not(.has-background) {
  background-color: var(--wp--custom--dark-mode-toggle--track--background);
}
```

**Important:** Figma Make should **not** invent additional class hooks — only use `.theme-dark`.

---

## 🏗️ **BLOCK DOM STRUCTURE**

The plugin renders this hierarchy:

```html
<div class="wp-block-tabor-dark-mode-toggle [is-medium|is-large]">
  <label class="wp-block-tabor-dark-mode-toggle__label">
    <input type="checkbox" class="wp-block-tabor-dark-mode-toggle__input" />
    <span class="wp-block-tabor-dark-mode-toggle__track [has-background]">
      <span class="wp-block-tabor-dark-mode-toggle__selector">
        <span class="wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--light">☀️</span>
        <span class="wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--dark">🌙</span>
      </span>
    </span>
  </label>
</div>
```

### **WordPress Block Supports**
The track (`.wp-block-tabor-dark-mode-toggle__track`) may receive:
- `.has-background` — background colour set via editor
- Border classes — from block border support

**Rule:** Only apply default background when `:not(.has-background)`.

---

## 🔧 **IMPLEMENTATION SNIPPETS**

### **Base Block Wrapper**

```css
.wp-block-tabor-dark-mode-toggle {
  --icon-size: var(--wp--custom--dark-mode-toggle--icon--size, 16px);
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20, 0.5rem);
}
```

### **Size Modifiers**

```css
.wp-block-tabor-dark-mode-toggle.is-medium {
  --icon-size: 18px;
}

.wp-block-tabor-dark-mode-toggle.is-large {
  --icon-size: 20px;
}
```

### **Label**

```css
.wp-block-tabor-dark-mode-toggle__label {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10, 0.25rem);
  cursor: pointer;
  user-select: none;
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--wp--preset--color--text-1);
}
```

### **Input (Visually Hidden)**

```css
.wp-block-tabor-dark-mode-toggle__input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### **Track (Clickable Toggle Area)**

```css
.wp-block-tabor-dark-mode-toggle__track {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: calc(var(--icon-size) * 2.5);
  height: calc(var(--icon-size) * 1.5);
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

/* Default background (only when no .has-background from editor) */
.wp-block-tabor-dark-mode-toggle__track:not(.has-background) {
  background-color: var(--wp--custom--dark-mode-toggle--track--background, var(--wp--preset--color--surface-2));
  border: 1px solid var(--wp--custom--dark-mode-toggle--track--border, var(--wp--preset--color--border-1));
}

/* Hover state (only when no .has-background) */
.wp-block-tabor-dark-mode-toggle__track:not(.has-background):hover {
  background-color: var(--wp--custom--dark-mode-toggle--track--background-hover, var(--wp--preset--color--accent-1));
  opacity: 0.8;
}
```

### **Selector (Moving Knob)**

```css
.wp-block-tabor-dark-mode-toggle__selector {
  position: absolute;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--icon-size) * 1.25);
  height: calc(var(--icon-size) * 1.25);
  background-color: var(--wp--custom--dark-mode-toggle--selector--background, var(--wp--preset--color--accent-1));
  border-radius: 50%;
  transition: transform 0.2s ease;
  pointer-events: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Dark mode active: slide selector to right */
.theme-dark .wp-block-tabor-dark-mode-toggle__input + .wp-block-tabor-dark-mode-toggle__track .wp-block-tabor-dark-mode-toggle__selector {
  transform: translateX(calc(var(--icon-size) * 1.25));
}
```

### **Icons**

```css
.wp-block-tabor-dark-mode-toggle__icon {
  width: var(--icon-size);
  height: var(--icon-size);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  color: var(--wp--preset--color--text-1);
}

/* Light mode: show sun icon, hide moon icon */
.wp-block-tabor-dark-mode-toggle__icon--light {
  opacity: 1;
  position: relative;
}

.wp-block-tabor-dark-mode-toggle__icon--dark {
  opacity: 0;
  position: absolute;
}

/* Dark mode: hide sun icon, show moon icon */
.theme-dark .wp-block-tabor-dark-mode-toggle__icon--light {
  opacity: 0;
  position: absolute;
}

.theme-dark .wp-block-tabor-dark-mode-toggle__icon--dark {
  opacity: 1;
  position: relative;
}
```

### **Focus Treatment**

```css
.wp-block-tabor-dark-mode-toggle__input:focus-visible + .wp-block-tabor-dark-mode-toggle__track {
  outline: var(--wp--custom--dark-mode-toggle--focus--outline, 2px solid var(--wp--preset--color--accent-1));
  outline-offset: var(--wp--custom--dark-mode-toggle--focus--outline-offset, 2px);
}
```

### **Reduced Motion**

```css
@media (prefers-reduced-motion: reduce) {
  .wp-block-tabor-dark-mode-toggle__selector,
  .wp-block-tabor-dark-mode-toggle__icon,
  .wp-block-tabor-dark-mode-toggle__track {
    transition: none;
  }
}
```

---

## 📝 **THEME.JSON CUSTOM PROPERTY EXAMPLES**

### **Add to theme.json → settings.custom**

```json
{
  "settings": {
    "custom": {
      "darkModeToggle": {
        "track": {
          "background": "var(--wp--preset--color--surface-2)",
          "backgroundLight": "var(--wp--preset--color--surface-2)",
          "backgroundDark": "var(--wp--preset--color--surface-2)",
          "backgroundHover": "var(--wp--preset--color--accent-1)",
          "backgroundHoverLight": "var(--wp--preset--color--accent-1)",
          "backgroundHoverDark": "var(--wp--preset--color--accent-1)",
          "border": "var(--wp--preset--color--border-1)"
        },
        "selector": {
          "background": "var(--wp--preset--color--accent-1)"
        },
        "focus": {
          "outline": "2px solid var(--wp--preset--color--accent-1)",
          "outlineOffset": "2px"
        },
        "icon": {
          "size": "16px"
        }
      }
    }
  }
}
```

**WordPress converts this to CSS variables:**
```css
:root {
  --wp--custom--dark-mode-toggle--track--background: var(--wp--preset--color--surface-2);
  --wp--custom--dark-mode-toggle--track--background-light: var(--wp--preset--color--surface-2);
  --wp--custom--dark-mode-toggle--track--background-dark: var(--wp--preset--color--surface-2);
  /* ... etc */
}
```

---

## 🎯 **PLUGIN CONTRACT**

### **How Dark Mode is Detected**
Dark mode is active when the root element has `.theme-dark`:
```css
/* Dark mode active */
html.theme-dark { }
```

The class is toggled on `document.documentElement` (the `<html>` element).

**Always scope dark mode rules:**
```css
.theme-dark .some-class { ... }
```

### **Required Behaviours**

#### **1) Size Modifiers**
Use wrapper modifiers to adjust `--icon-size`:
- `.wp-block-tabor-dark-mode-toggle` → `--icon-size: 16px` (default)
- `.is-medium` → `18px`
- `.is-large` → `20px`

#### **2) Dark Mode Selector Position**
When dark mode is active, selector must slide:
```css
.theme-dark .wp-block-tabor-dark-mode-toggle__input + .wp-block-tabor-dark-mode-toggle__track .wp-block-tabor-dark-mode-toggle__selector {
  transform: translateX(calc(var(--icon-size) * 1.25));
}
```

#### **3) Icon Swap**
When dark mode is active:
- Hide light icon (`.wp-block-tabor-dark-mode-toggle__icon--light`)
- Show dark icon (`.wp-block-tabor-dark-mode-toggle__icon--dark`)

#### **4) Focus-Visible**
Focus ring must be applied to **track** when input is focus-visible:
```css
.wp-block-tabor-dark-mode-toggle__input:focus-visible + .wp-block-tabor-dark-mode-toggle__track {
  outline: var(--wp--custom--dark-mode-toggle--focus--outline);
  outline-offset: var(--wp--custom--dark-mode-toggle--focus--outline-offset);
}
```

---

## ✅ **OUTPUT CHECKLIST** (for Figma Make)

### **CSS Generation Requirements:**
- [ ] Base block wrapper + size modifiers (`.is-medium`, `.is-large`)
- [ ] Track default background guarded by `:not(.has-background)`
- [ ] `:hover` styling on track (same guard)
- [ ] Selector styling + `transition`
- [ ] `.theme-dark` selector translation (`transform: translateX(...)`)
- [ ] `.theme-dark` icon swap (light/dark visibility)
- [ ] `:focus-visible` ring on track
- [ ] All colours sourced from WP variables (preset/custom) with safe fallbacks

### **Token-First Compliance:**
- [ ] No hard-coded hex values in component CSS
- [ ] All colours use `--wp--preset--color--*` or `--wp--custom--*`
- [ ] Spacing uses `--wp--preset--spacing--*` or calculated values
- [ ] Typography uses `var(--font-primary)` and `var(--text-base)`

### **Accessibility:**
- [ ] Input is visually hidden but keyboard accessible
- [ ] Focus ring visible on `:focus-visible`
- [ ] Reduced motion respects `prefers-reduced-motion: reduce`
- [ ] ARIA labels provided by plugin (verify in testing)
- [ ] Colour contrast meets WCAG 2.1 AA in both modes

### **Block Editor Integration:**
- [ ] Toggle respects `.has-background` from colour panel
- [ ] Block supports border controls (via WordPress block supports)
- [ ] Size modifiers work correctly
- [ ] Custom colours from editor override default tokens

---

## 🏆 **COMPLETE CSS EXAMPLE**

### **/src/styles/dark-mode-toggle.css**

```css
/**
 * Dark Mode Toggle Block — Rich Tabor
 * 
 * Plain CSS using theme.json tokens.
 * Dark mode triggered via .theme-dark class on <html>.
 * 
 * DO NOT use Sass/SCSS syntax.
 * DO NOT hard-code colours.
 * DO respect .has-background from block editor.
 */

/* ========================================
   Base Block Wrapper
   ======================================== */

.wp-block-tabor-dark-mode-toggle {
  --icon-size: var(--wp--custom--dark-mode-toggle--icon--size, 16px);
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20, 0.5rem);
}

.wp-block-tabor-dark-mode-toggle.is-medium {
  --icon-size: 18px;
}

.wp-block-tabor-dark-mode-toggle.is-large {
  --icon-size: 20px;
}

/* ========================================
   Label
   ======================================== */

.wp-block-tabor-dark-mode-toggle__label {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10, 0.25rem);
  cursor: pointer;
  user-select: none;
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--wp--preset--color--text-1);
}

/* ========================================
   Input (Visually Hidden)
   ======================================== */

.wp-block-tabor-dark-mode-toggle__input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ========================================
   Track (Toggle Background)
   ======================================== */

.wp-block-tabor-dark-mode-toggle__track {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: calc(var(--icon-size) * 2.5);
  height: calc(var(--icon-size) * 1.5);
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

/* Default styles (only without .has-background) */
.wp-block-tabor-dark-mode-toggle__track:not(.has-background) {
  background-color: var(--wp--custom--dark-mode-toggle--track--background, var(--wp--preset--color--surface-2));
  border: 1px solid var(--wp--custom--dark-mode-toggle--track--border, var(--wp--preset--color--border-1));
}

/* Hover state */
.wp-block-tabor-dark-mode-toggle__track:not(.has-background):hover {
  background-color: var(--wp--custom--dark-mode-toggle--track--background-hover, var(--wp--preset--color--accent-1));
  opacity: 0.8;
}

/* ========================================
   Selector (Moving Knob)
   ======================================== */

.wp-block-tabor-dark-mode-toggle__selector {
  position: absolute;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--icon-size) * 1.25);
  height: calc(var(--icon-size) * 1.25);
  background-color: var(--wp--custom--dark-mode-toggle--selector--background, var(--wp--preset--color--accent-1));
  border-radius: 50%;
  transition: transform 0.2s ease;
  pointer-events: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Dark mode active: slide selector to right */
.theme-dark .wp-block-tabor-dark-mode-toggle__input + .wp-block-tabor-dark-mode-toggle__track .wp-block-tabor-dark-mode-toggle__selector {
  transform: translateX(calc(var(--icon-size) * 1.25));
}

/* ========================================
   Icons
   ======================================== */

.wp-block-tabor-dark-mode-toggle__icon {
  width: var(--icon-size);
  height: var(--icon-size);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  color: var(--wp--preset--color--text-1);
}

/* Light mode: show sun, hide moon */
.wp-block-tabor-dark-mode-toggle__icon--light {
  opacity: 1;
  position: relative;
}

.wp-block-tabor-dark-mode-toggle__icon--dark {
  opacity: 0;
  position: absolute;
}

/* Dark mode: hide sun, show moon */
.theme-dark .wp-block-tabor-dark-mode-toggle__icon--light {
  opacity: 0;
  position: absolute;
}

.theme-dark .wp-block-tabor-dark-mode-toggle__icon--dark {
  opacity: 1;
  position: relative;
}

/* ========================================
   Focus Treatment
   ======================================== */

.wp-block-tabor-dark-mode-toggle__input:focus-visible + .wp-block-tabor-dark-mode-toggle__track {
  outline: var(--wp--custom--dark-mode-toggle--focus--outline, 2px solid var(--wp--preset--color--accent-1));
  outline-offset: var(--wp--custom--dark-mode-toggle--focus--outline-offset, 2px);
}

/* ========================================
   Reduced Motion
   ======================================== */

@media (prefers-reduced-motion: reduce) {
  .wp-block-tabor-dark-mode-toggle__selector,
  .wp-block-tabor-dark-mode-toggle__icon,
  .wp-block-tabor-dark-mode-toggle__track {
    transition: none;
  }
}
```

---

## 🚨 **NON-NEGOTIABLES**

### **Do NOT:**
❌ Rename or "improve" class names  
❌ Output JavaScript, PHP, or SCSS  
❌ Use `!important`  
❌ Use element selectors without plugin classes  
❌ Keep selectors high-specificity  
❌ Invent additional class hooks for dark mode  

### **Always:**
✅ Use plugin classes exactly as provided  
✅ Output plain CSS only  
✅ Keep selectors low-specificity (class-only)  
✅ Scope dark mode rules with `.theme-dark`  
✅ Guard default backgrounds with `:not(.has-background)`  

---

## 📚 **RELATED DOCUMENTATION**

- **Colour System:** [/guidelines/design-tokens/colors.md](./colors.md)
- **Typography:** [/guidelines/design-tokens/typography.md](./typography.md)
- **Spacing:** [/guidelines/design-tokens/spacing.md](./spacing.md)
- **WordPress CSS Variables:** [/COMPLETE-DESIGN-SYSTEM-WORDPRESS-JAN-9.md](../../COMPLETE-DESIGN-SYSTEM-WORDPRESS-JAN-9.md)

---

**Last Updated:** 2025-01-13  
**Maintained By:** LSX Design System Team  
**WordPress Plugin:** Rich Tabor's Dark Mode Toggle  
**Theme.json Version:** 2.0+  
**Status:** Production Ready
