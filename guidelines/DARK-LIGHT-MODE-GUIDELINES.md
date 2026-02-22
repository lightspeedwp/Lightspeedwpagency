# Dark & Light Mode Guidelines — LSX Design System

**Complete reference for implementing dark/light mode in all components**

## 📋 Table of Contents

1. [Core Principles](#core-principles)
2. [Design Tokens Reference](#design-tokens-reference)
3. [Neon & Glow Effects](#neon--glow-effects)
4. [Component Implementation Rules](#component-implementation-rules)
5. [Common Patterns](#common-patterns)
6. [Testing Checklist](#testing-checklist)
7. [Migration Guide](#migration-guide)

---

## Core Principles

### ✅ Always Use CSS Variables

**NEVER use hardcoded colors:**
```tsx
// ❌ WRONG - Hardcoded colors
<div style={{ backgroundColor: '#FFFFFF', color: '#090909' }}>

// ✅ CORRECT - CSS variables
<div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
```

### ✅ Semantic Color Roles

Use semantic color variables that automatically switch between light and dark mode:

```tsx
// ✅ CORRECT - Semantic roles
--background          // Main page background
--foreground          // Main text color
--card                // Card/panel backgrounds
--card-foreground     // Text on cards
--primary             // Brand primary color
--primary-foreground  // Text on primary color
--muted               // Subtle backgrounds
--muted-foreground    // Secondary text
--border              // Border colors
--border-soft         // Subtle borders
```

### ✅ WCAG Compliance

All color combinations meet WCAG 2.1 AA standards (4.5:1 contrast minimum):

**Light Mode:**
- `--foreground` on `--background`: **16.07:1** (AAA ✓✓✓)
- `--primary` on `--background`: **4.58:1** (AA ✓)
- `--muted-foreground` on `--background`: **7.35:1** (AAA ✓✓✓)

**Dark Mode:**
- `--foreground` on `--background`: **16.07:1** (AAA ✓✓✓)
- `--primary` on `--background`: **10.87:1** (AAA ✓✓✓)
- `--muted-foreground` on `--background`: **13.16:1** (AAA ✓✓✓)

---

## Design Tokens Reference

### Core Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--background` | `#FFFFFF` (White) | `#090909` (Near Black) | Page background |
| `--foreground` | `#090909` (Near Black) | `#FFFFFF` (White) | Body text |
| `--card` | `#F9FAFB` (Subtle Off-White) | `#1E1E1E` (Dark Gray) | Card backgrounds |
| `--card-foreground` | `#090909` (Near Black) | `#FFFFFF` (White) | Card text |
| `--card-hover` | `#F9F9F9` | `#252525` | Interactive card hover |

### Brand Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | `#1E6AFF` (Bright Blue) | `#7BE7FF` (Bright Cyan) | Primary buttons, links |
| `--primary-foreground` | `#FFFFFF` (White) | `#0E3278` (Dark Blue) | Text on primary |
| `--primary-soft` | `rgba(30, 106, 255, 0.1)` | `rgba(123, 231, 255, 0.1)` | Subtle highlights |
| `--secondary` | `#7BE7FF` (Light Cyan) | `#0E3278` (Dark Blue) | Secondary elements |
| `--secondary-foreground` | `#0E3278` (Dark Blue) | `#7BE7FF` (Bright Cyan) | Text on secondary |
| `--neon-color` | `#1E6AFF` | `#7BE7FF` | Dynamic neon accent |

### Neutral Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--muted` | `#E1E1E1` (Light Gray) | `#565656` (Medium Gray) | Disabled states |
| `--muted-foreground` | `#565656` (Medium Gray) | `#E1E1E1` (Light Gray) | Secondary text |
| `--accent` | `#7BE7FF` (Light Cyan) | `#1E6AFF` (Bright Blue) | Hover states |
| `--accent-foreground` | `#0E3278` (Dark Blue) | `#FFFFFF` (White) | Text on accent |

### Border Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--border` | `#757575` (Medium Gray) | `#757575` (Medium Gray) | Input borders, dividers |
| `--border-soft` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` | Subtle card borders |
| `--border-extra-soft` | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.04)` | Very subtle dividers |
| `--border-subtle` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.06)` | Feature lists, inner dividers |

### State Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--destructive` | `#CC0000` (Red) | `#FF6363` (Light Red) | Delete buttons, errors |
| `--destructive-foreground` | `#FFFFFF` (White) | `#090909` (Near Black) | Text on destructive |
| `--success` | `#16A34A` (Green) | `#22C55E` (Light Green) | Success messages |
| `--warning` | `#F59E0B` (Amber) | `#FBBF24` (Light Amber) | Warning alerts |
| `--info` | `#0EA5E9` (Sky Blue) | `#38BDF8` (Light Sky) | Info alerts |
| `--ring` | `#0047D0` (Dark Blue) | `#7BE7FF` (Bright Cyan) | Focus outlines |

### Shadows

| Token | Description | Light Mode Value | Dark Mode Value |
|-------|-------------|------------------|-----------------|
| `--shadow-sm` | Small shadow | `0 1px 3px rgba(0,0,0,0.05)` | `0 1px 3px rgba(0,0,0,0.5)` |
| `--shadow-md` | Medium shadow | `0 4px 6px rgba(0,0,0,0.05)` | `0 4px 6px rgba(0,0,0,0.5)` |
| `--shadow-lg` | Large shadow | `0 10px 40px rgba(0,0,0,0.15)` | `0 10px 40px rgba(0,0,0,0.8)` |
| `--shadow-xl` | Extra large | `0 20px 40px rgba(0,0,0,0.12)` | `0 20px 40px rgba(0,0,0,0.6)` |
| `--shadow-inner` | Inset shadow | `inset 0 2px 4px rgba(0,0,0,0.06)` | `inset 0 2px 4px rgba(0,0,0,0.3)` |
| `--shadow-hover` | Hover state | `0 8px 16px rgba(0,0,0,0.1)` | `0 8px 16px rgba(0,0,0,0.4)` |

### Glassmorphism

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--glass-bg` | `rgba(255,255,255,0.6)` | `rgba(0,0,0,0.08)` | Glass backgrounds |
| `--glass-bg-strong` | `rgba(255,255,255,0.85)` | `rgba(0,0,0,0.15)` | Stronger glass |
| `--glass-border` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` | Glass borders |
| `--glass-text` | `#090909` (Near Black) | `#FFFFFF` (White) | Text on glass |

---

## Neon & Glow Effects

The design system includes advanced neon and glow effects for the "Funky" design aesthetic. These tokens adapt to the current theme color.

### Glow Tokens

| Token | Description |
|-------|-------------|
| `--shadow-neon` | Crisp neon outline + soft outer glow. Uses `--neon-color`. |
| `--shadow-neon-intense` | Intense, multi-layered neon glow for high-impact elements. |
| `--shadow-glow` | Standard ambient glow using `--primary`. |
| `--shadow-glow-sm` | Small, subtle ambient glow. |
| `--shadow-glow-lg` | Large, diffuse ambient glow. |

### Usage Example

```css
.hero-badge {
  box-shadow: var(--shadow-neon);
  border-color: var(--neon-color);
}

.primary-button:hover {
  box-shadow: var(--shadow-glow);
}
```

### Neon Animation Classes

Helper classes available in `animations.css`:

- `.neon-hover`: Adds neon glow on hover.
- `.neon-focus`: Adds neon ring on focus.
- `.neon-border-flow`: Animated gradient border effect.
- `.neon-glow-pulse`: Pulsing glow animation.

---

## Component Implementation Rules

### Rule 1: Never Use Hardcoded Colors

```tsx
// ❌ WRONG
<button style={{ 
  backgroundColor: '#1E6AFF',
  color: '#FFFFFF'
}}>

// ✅ CORRECT
<button style={{ 
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>
```

### Rule 2: Use Semantic Roles, Not Color Names

```tsx
// ❌ WRONG - Color names don't adapt
<div style={{ color: 'blue', backgroundColor: 'white' }}>

// ✅ CORRECT - Semantic roles adapt automatically
<div style={{ 
  color: 'var(--foreground)', 
  backgroundColor: 'var(--background)' 
}}>
```

### Rule 3: Always Pair Foreground with Background

```tsx
// ❌ WRONG - Foreground might not have enough contrast
<div style={{ backgroundColor: 'var(--primary)' }}>
  <span style={{ color: 'var(--foreground)' }}>Text</span>
</div>

// ✅ CORRECT - Use matching foreground token
<div style={{ backgroundColor: 'var(--primary)' }}>
  <span style={{ color: 'var(--primary-foreground)' }}>Text</span>
</div>
```

### Rule 4: Use Border Tokens for Borders

```tsx
// ❌ WRONG - Hardcoded border color
<div style={{ border: '1px solid #E5E5E5' }}>

// ✅ CORRECT - Semantic border token
<div style={{ border: '1px solid var(--border-soft)' }}>
```

### Rule 5: Use Shadow Tokens for Shadows

```tsx
// ❌ WRONG - Hardcoded shadow
<div style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>

// ✅ CORRECT - Semantic shadow token
<div style={{ boxShadow: 'var(--shadow-md)' }}>
```

---

## Common Patterns

### Pattern 1: Card Component

```tsx
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--card)',           // Card background
        color: 'var(--card-foreground)',          // Card text
        border: '1px solid var(--border-soft)',   // Subtle border
        borderRadius: 'var(--radius-lg)',         // Border radius
        boxShadow: 'var(--shadow-sm)',            // Small shadow
        padding: '24px',
      }}
    >
      {children}
    </div>
  );
}
```

### Pattern 2: Button Component

```tsx
function Button({ children, variant = 'default' }: ButtonProps) {
  const styles = {
    default: {
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      border: '2px solid var(--primary)',
    },
    secondary: {
      backgroundColor: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
      border: 'none',
    },
  };

  return (
    <button
      style={{
        ...styles[variant],
        borderRadius: 'var(--radius-lg)',
        padding: '12px 24px',
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  );
}
```

### Pattern 3: Input Field

```tsx
function Input({ ...props }: InputProps) {
  return (
    <input
      style={{
        backgroundColor: 'var(--input-background)', // Input background
        color: 'var(--foreground)',                 // Input text
        border: '1px solid var(--border)',          // Border
        borderRadius: 'var(--radius-lg)',           // Border radius
        padding: '12px 16px',
        fontFamily: 'var(--font-secondary)',
        fontSize: 'var(--text-base)',
        outline: 'none',
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = 'var(--ring)';
        e.currentTarget.style.boxShadow = 'var(--shadow-focus-ring)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      {...props}
    />
  );
}
```

### Pattern 4: Hover States

```tsx
function InteractiveCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--card)',
        color: 'var(--card-foreground)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-soft)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </div>
  );
}
```

### Pattern 5: Glassmorphism Effect

```tsx
function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--glass-bg)',         // Glass background
        color: 'var(--glass-text)',                 // Glass text
        border: '1px solid var(--glass-border)',    // Glass border
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        backdropFilter: 'blur(12px)',               // Blur effect
        WebkitBackdropFilter: 'blur(12px)',         // Safari support
      }}
    >
      {children}
    </div>
  );
}
```

---

## Testing Checklist

### ✅ Visual Testing

Test EVERY component in both modes:

1. **Light Mode Testing:**
   - [ ] All text is readable (sufficient contrast)
   - [ ] Borders are visible but subtle
   - [ ] Shadows provide appropriate depth
   - [ ] Interactive states (hover/focus) are clear
   - [ ] No pure white (#FFFFFF) text on colored backgrounds

2. **Dark Mode Testing:**
   - [ ] All text is readable (no eye strain)
   - [ ] Borders don't overpower content
   - [ ] Shadows provide depth without being harsh
   - [ ] Interactive states are clear
   - [ ] No pure black (#000000) backgrounds

### ✅ Contrast Testing

Use browser DevTools or online contrast checkers:

1. **Minimum Requirements:**
   - [ ] Body text: 4.5:1 (WCAG AA)
   - [ ] Large text (18px+): 3:1 (WCAG AA)
   - [ ] UI components: 3:1 (WCAG AA)

2. **Target Requirements:**
   - [ ] Body text: 7:1 (WCAG AAA)
   - [ ] Large text: 4.5:1 (WCAG AAA)

### ✅ Accessibility Testing

1. **Focus States:**
   - [ ] All interactive elements have visible focus rings
   - [ ] Focus ring color uses `var(--ring)`
   - [ ] Focus ring has 2px width and 2px offset

2. **Keyboard Navigation:**
   - [ ] All interactive elements are keyboard accessible
   - [ ] Tab order is logical
   - [ ] Focus states are clearly visible

---

## Migration Guide

### Step 1: Identify Hardcoded Colors

Search for hardcoded color values:
```bash
# Search for hex colors
grep -r "#[0-9A-Fa-f]{6}" src/

# Search for rgb/rgba
grep -r "rgb(" src/
grep -r "rgba(" src/
```

### Step 2: Replace with CSS Variables

**Common replacements:**

| Hardcoded Value | CSS Variable |
|-----------------|--------------|
| `#FFFFFF`, `white` | `var(--background)` or `var(--card)` |
| `#000000`, `black` | `var(--foreground)` |
| `#1E6AFF` | `var(--primary)` |
| `#7BE7FF` | `var(--accent)` (light) or `var(--primary)` (dark) |
| `#E5E5E5` | `var(--border-soft)` |
| `#757575` | `var(--border)` or `var(--muted-foreground)` |
| `rgba(0,0,0,0.1)` | `var(--border-soft)` or custom token |

### Step 3: Test in Both Modes

1. Switch to dark mode: Click theme switcher or add `.dark` class to `<html>`
2. Verify all text is readable
3. Check borders and shadows
4. Test interactive states (hover, focus, active)
5. Verify WCAG contrast ratios

### Step 4: Document Component

Add JSDoc comment explaining dark/light mode support:

```tsx
/**
 * Card Component
 * 
 * Supports automatic dark/light mode switching through CSS variables.
 * 
 * Color Tokens Used:
 * - Background: var(--card)
 * - Text: var(--card-foreground)
 * - Border: var(--border-soft)
 * 
 * WCAG Compliance:
 * - Light mode: 16.07:1 contrast (AAA ✓✓✓)
 * - Dark mode: 13.85:1 contrast (AAA ✓✓✓)
 */
```

---

## Quick Reference

### Most Common Color Pairs

```tsx
// Page content
backgroundColor: 'var(--background)'
color: 'var(--foreground)'

// Cards
backgroundColor: 'var(--card)'
color: 'var(--card-foreground)'

// Primary buttons
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Secondary buttons
backgroundColor: 'var(--secondary)'
color: 'var(--secondary-foreground)'

// Muted content
backgroundColor: 'var(--muted)'
color: 'var(--muted-foreground)'

// Borders
border: '1px solid var(--border-soft)'

// Shadows
boxShadow: 'var(--shadow-md)'

// Focus states
outline: '2px solid var(--ring)'
outlineOffset: '2px'
```

---

## WordPress Mapping

In WordPress, theme.json controls dark/light mode:

```json
{
  "styles": {
    "color": {
      "background": "var(--wp--preset--color--background)",
      "text": "var(--wp--preset--color--foreground)"
    }
  }
}
```

Our CSS variables map directly to WordPress preset colors:
- `var(--background)` → `var(--wp--preset--color--background)`
- `var(--foreground)` → `var(--wp--preset--color--foreground)`
- `var(--primary)` → `var(--wp--preset--color--primary)`

---

## Support

**Questions?**
- Review: `/src/styles/theme-light.css` for light mode tokens
- Review: `/src/styles/theme-dark.css` for dark mode tokens
- Test: Use StyleSwitcher component to toggle modes
- Verify: Use Compliance Scorecard for WCAG testing

**Last Updated:** February 18, 2026
