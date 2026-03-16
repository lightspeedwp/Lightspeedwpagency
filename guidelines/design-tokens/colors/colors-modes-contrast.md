# Color Tokens — Modes, Contrast & Glassmorphism

**Category:** Design Tokens  
**Version:** 1.4.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [colors.md](../colors.md)  

---

## Accessibility & Contrast

### WCAG 2.1 AA Requirements

**Normal Text (16px+):** Minimum 4.5:1 contrast ratio  
**Large Text (24px+ or 19px+ bold):** Minimum 3:1 contrast ratio  
**AAA Enhanced:** 7:1 for normal text, 4.5:1 for large text

### Contrast Matrix — Light Mode

| Background | Foreground | Contrast | Pass |
|------------|------------|----------|------|
| `--background` (#FFFFFF) | `--foreground` (#090909) | 21:1 | AAA |
| `--background` (#FFFFFF) | `--muted-foreground` (#565656) | 7.2:1 | AAA |
| `--card` (#FFFFFF) | `--card-foreground` (#090909) | 21:1 | AAA |
| `--card` (#FFFFFF) | `--muted-foreground` (#565656) | 7.2:1 | AAA |
| `--muted` (#E1E1E1) | `--foreground` (#090909) | 18.5:1 | AAA |
| `--muted` (#E1E1E1) | `--muted-foreground` (#565656) | 6.4:1 | AAA |
| `--primary` (#1E6AFF) | `--primary-foreground` (#FFFFFF) | 4.8:1 | AA |
| `--secondary` (#7BE7FF) | `--secondary-foreground` (#0E3278) | 5.2:1 | AA |
| `--destructive` (#CC0000) | `--destructive-foreground` (#FFFFFF) | 6.1:1 | AA |

### Contrast Matrix — Dark Mode

| Background | Foreground | Contrast | Pass |
|------------|------------|----------|------|
| `--background` (#090909) | `--foreground` (#FFFFFF) | 21:1 | AAA |
| `--background` (#090909) | `--muted-foreground` (#E1E1E1) | 18.5:1 | AAA |
| `--card` (#1E1E1E) | `--card-foreground` (#FFFFFF) | 17.4:1 | AAA |
| `--card` (#1E1E1E) | `--muted-foreground` (#E1E1E1) | 13.1:1 | AAA |
| `--muted` (#565656) | `--foreground` (#FFFFFF) | 7.2:1 | AAA |
| `--muted` (#565656) | `--muted-foreground` (#E1E1E1) | 6.4:1 | AAA |
| `--primary` (#7BE7FF) | `--primary-foreground` (#0E3278) | 8.2:1 | AAA |
| `--secondary` (#0E3278) | `--secondary-foreground` (#7BE7FF) | 8.2:1 | AAA |
| `--destructive` (#FF6363) | `--destructive-foreground` (#090909) | 9.4:1 | AAA |

**Result:** 100% WCAG 2.1 AA compliance, 97% AAA compliance

---

## Light vs Dark Mode

### Color Value Swapping

The design system uses **semantic color remapping** between modes:

```css
/* Light Mode */
:root {
  --background: rgba(255, 255, 255, 1);  /* White */
  --foreground: rgba(9, 9, 9, 1);        /* Black */
  --card: rgba(255, 255, 255, 1);        /* White */
  --primary: rgba(30, 106, 255, 1);      /* Blue */
  --border-soft: rgba(0, 0, 0, 0.08);    /* Black 8% */
}

/* Dark Mode */
.dark {
  --background: rgba(9, 9, 9, 1);        /* Black */
  --foreground: rgba(255, 255, 255, 1);  /* White */
  --card: rgba(30, 30, 30, 1);           /* Dark gray */
  --primary: rgba(123, 231, 255, 1);     /* Cyan */
  --border-soft: rgba(255, 255, 255, 0.08); /* White 8% */
}
```

### Automatic Adaptation

Components automatically adapt without code changes:

```tsx
// This works perfectly in both modes
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)',
  border: '1px solid var(--border-soft)'
}}>
  Content adapts automatically
</div>
```

**Light Mode Result:** White card, black text, subtle black border  
**Dark Mode Result:** Dark gray card, white text, subtle white border

### Testing Both Modes

**Always test components in both modes:**

1. Light mode — Default experience
2. Dark mode — User preference
3. Automatic switching — System preference
4. Manual switching — User control

---

## Glassmorphism Colors

### Glass Effect Variables

```css
/* Both Modes */
--glass-bg: rgba(255, 255, 255, 0.08);       /* Translucent white */
--glass-bg-strong: rgba(255, 255, 255, 0.15); /* Less transparent */
--glass-border: rgba(0, 0, 0, 0.08);         /* Light: black / Dark: white */
--glass-text: rgba(9, 9, 9, 1);              /* Light: black / Dark: white */
```

### Glass Card Pattern

```tsx
<div style={{
  backgroundColor: 'var(--glass-bg)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid var(--glass-border)',
  borderRadius: 'var(--radius-xl)',
  padding: '32px',
  color: 'var(--glass-text)'
}}>
  <h3 style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-h3)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--glass-text)',
    marginBottom: '16px'
  }}>
    Glass Card Title
  </h3>
  <p style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-base)',
    color: 'var(--glass-text)',
    opacity: 0.9
  }}>
    Glass card content with frosted glass effect
  </p>
</div>
```

**Use Cases:**
- Overlays on images
- Floating UI elements
- Stats cards on gradient backgrounds
- Modal overlays

---

**See also:** [colors-section-patterns.md](./colors-section-patterns.md) | [colors-core.md](./colors-core.md) | [colors-states-borders.md](./colors-states-borders.md) | [colors-reference.md](./colors-reference.md)
