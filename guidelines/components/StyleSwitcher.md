# StyleSwitcher Component

**Purpose:** Allow users to switch between style variations (light/dark themes) that change global colors, typography, and spacing.

**WordPress concept:** Style Variations (styles/*.json)

**Location:** `src/app/components/ui/StyleSwitcher.tsx`

---

## WordPress Style Variations

In WordPress block themes, **style variations** are alternative theme.json configurations that change:
- Color palettes
- Typography settings
- Spacing scales
- Layout defaults

**WordPress structure:**
```
theme/
├── theme.json              # Default style
├── styles/
│   ├── dark.json          # Dark variation
│   ├── high-contrast.json # High contrast variation
│   └── minimal.json       # Minimal variation
```

**LSX Design Implementation:**
- Light (default) — Defined in `:root` in theme.css
- Dark — Defined in `.dark` class in theme.css

---

## When to Use

- Site header for user preference control
- Settings page for style customization
- Prototype/demo UI for showcasing variations

**Do not use** in content areas, individual patterns, or template parts (style variations are site-wide).

---

## Component API

```tsx
interface StyleSwitcherProps {
  className?: string;  // Additional CSS classes
}
```

---

## Basic Usage

```tsx
import { StyleSwitcher } from './components/ui/StyleSwitcher';

// Basic usage
<StyleSwitcher />

// With custom positioning
<StyleSwitcher className="custom-position" />
```

---

## Features

### 1. Light/Dark Theme Toggle

Switches between light and dark color schemes defined in theme.css:

**Light theme (default):**
- Background: White (#FFFFFF)
- Foreground: Black (#090909)
- Primary: Blue (#1E6AFF)

**Dark theme:**
- Background: Dark (#090909)
- Foreground: White (#FFFFFF)
- Primary: Cyan (#7BE7FF)

### 2. System Preference Detection

Automatically detects user's system preference on first load:

```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

### 3. LocalStorage Persistence

Saves user preference across sessions:

```javascript
localStorage.setItem('style-variation', 'dark');
```

### 4. Keyboard Accessible

Full keyboard navigation support:
- Tab to focus buttons
- Enter/Space to activate
- Visual focus indicators

---

## Style Variation System

### CSS Implementation

The StyleSwitcher applies the `.dark` class to `<html>`:

```css
/* theme.css */

/* Light theme (default) */
:root {
  --background: rgba(255, 255, 255, 1);
  --foreground: rgba(9, 9, 9, 1);
  --primary: rgba(30, 106, 255, 1);
  /* ... */
}

/* Dark theme */
.dark {
  --background: rgba(9, 9, 9, 1);
  --foreground: rgba(255, 255, 255, 1);
  --primary: rgba(123, 231, 255, 1);
  /* ... */
}
```

### JavaScript Implementation

```typescript
const applyStyleVariation = (style: 'light' | 'dark') => {
  const root = document.documentElement;
  
  if (style === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};
```

---

## WordPress Mapping

### theme.json (Default/Light)

```json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "background",
          "color": "#FFFFFF",
          "name": "Background"
        },
        {
          "slug": "foreground",
          "color": "#090909",
          "name": "Foreground"
        },
        {
          "slug": "primary",
          "color": "#1E6AFF",
          "name": "Primary"
        }
      ]
    }
  }
}
```

### styles/dark.json

```json
{
  "version": 2,
  "title": "Dark",
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "background",
          "color": "#090909",
          "name": "Background"
        },
        {
          "slug": "foreground",
          "color": "#FFFFFF",
          "name": "Foreground"
        },
        {
          "slug": "primary",
          "color": "#7BE7FF",
          "name": "Primary"
        }
      ]
    }
  }
}
```

### WordPress User Selection

In WordPress, users select style variations via:
- **Customizer:** Appearance → Customize → Design → Browse Styles
- **Site Editor:** Appearance → Editor → Styles → Browse Styles

---

## Accessibility

### ARIA Attributes

```tsx
<div role="group" aria-label="Style variation switcher">
  <button
    aria-label="Switch to light style"
    aria-pressed={currentStyle === 'light'}
  >
    Light
  </button>
  
  <button
    aria-label="Switch to dark style"
    aria-pressed={currentStyle === 'dark'}
  >
    Dark
  </button>
</div>
```

### Keyboard Navigation

- **Tab:** Focus next button
- **Shift+Tab:** Focus previous button
- **Enter/Space:** Activate button
- **Visual focus:** 2px outline using `--ring` color

### Focus States

```tsx
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '2px';
}}
```

---

## Visual Design

### Button States

**Inactive button:**
- Background: Transparent
- Text color: `var(--muted-foreground)`
- Font weight: Regular (400)

**Active button:**
- Background: `var(--background)`
- Text color: `var(--foreground)`
- Font weight: Medium (500)
- Shadow: `var(--elevation-sm)`

**Container:**
- Background: `var(--muted)`
- Border: 1px solid `var(--border)`
- Border radius: `var(--radius)`
- Padding: 4px
- Gap: 4px between buttons

---

## Common Patterns

### Header Integration

```tsx
import { StyleSwitcher } from './components/ui/StyleSwitcher';
import { Logo } from './components/common/Logo';

function SiteHeader() {
  return (
    <header
      role="banner"
      style={{
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Logo />
          
          {/* Navigation */}
          <nav>
            {/* Nav items */}
          </nav>
          
          {/* Style Switcher */}
          <StyleSwitcher />
        </div>
      </div>
    </header>
  );
}
```

### Fixed Position (Prototype UI)

```tsx
// Fixed bottom-right corner
<div
  style={{
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999
  }}
>
  <StyleSwitcher />
</div>
```

---

## Future Enhancements

### Additional Style Variations

The component can be extended to support more variations:

```typescript
type StyleVariation = 'light' | 'dark' | 'high-contrast' | 'minimal';

// Add more buttons
<button onClick={() => switchStyle('high-contrast')}>
  High Contrast
</button>

<button onClick={() => switchStyle('minimal')}>
  Minimal
</button>
```

### CSS Implementation

```css
/* theme.css */

.high-contrast {
  --background: #FFFFFF;
  --foreground: #000000;
  --primary: #0000FF;
  /* High contrast colors */
}

.minimal {
  --background: #F5F5F5;
  --foreground: #333333;
  --primary: #666666;
  /* Minimal grayscale palette */
}
```

---

## Hydration Safety

The component handles React hydration correctly:

```typescript
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
  // Load saved preference after mount
}, []);

// Don't render interactive UI until mounted
if (!mounted) {
  return <div style={{ width: '64px', height: '32px' }} />;
}
```

**Why:** Prevents hydration mismatch between server and client rendering.

---

## Common Mistakes

### ❌ DON'T

```tsx
// Apply theme inline on individual elements
<div style={{ backgroundColor: '#090909' }}>  // Hard-coded dark background

// Use theme classes on content
<article className="dark">  // Theme is site-wide, not per-component

// Disable system preference detection
// (Always respect user's OS preference)
```

### ✅ DO

```tsx
// Use CSS variables (adapt to theme automatically)
<div style={{ backgroundColor: 'var(--background)' }}>

// Apply theme class to <html> (site-wide)
document.documentElement.classList.add('dark');

// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

---

## Testing Checklist

- [ ] Light theme applies correctly
- [ ] Dark theme applies correctly
- [ ] Preference persists after page reload
- [ ] System preference detected on first load
- [ ] Keyboard navigation works (Tab, Enter/Space)
- [ ] Focus states visible
- [ ] Active button shows correct visual state
- [ ] ARIA attributes present (`aria-pressed`, `aria-label`)
- [ ] Works with React strict mode (no hydration errors)

---

## Related Components

- **Logo** — Adapts to theme using `currentColor`
- **SiteHeader** — May include StyleSwitcher
- **PageSwitcher** — Companion prototype UI component

---

## Related Documentation

- [../design-tokens/colors.md](../design-tokens/colors.md) — Color token system
- [../overview-components.md](../overview-components.md) — Component overview
- [./Logo.md](./Logo.md) — Logo component (theme-aware)

---

**Last Updated:** December 24, 2024  
**WordPress Concept:** Style Variations (styles/*.json)  
**Default Variations:** Light, Dark
