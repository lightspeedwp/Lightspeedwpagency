# Theme Variations

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

The LSX Design System supports theme variations through CSS custom properties, enabling light mode, dark mode, and future theme variations without code changes.

---

## 🎨 Current Theme Variations

### 1. Light Mode (Default)

**Root Variables:** `:root {}`

**Color Palette:**
```css
--background: rgba(255, 255, 255, 1);       /* White */
--foreground: rgba(9, 9, 9, 1);             /* Near black */
--card: rgba(255, 255, 255, 1);             /* White */
--card-foreground: rgba(9, 9, 9, 1);        /* Near black */

--primary: rgba(30, 106, 255, 1);           /* Blue */
--primary-foreground: rgba(255, 255, 255, 1);

--secondary: rgba(123, 231, 255, 1);        /* Light cyan */
--secondary-foreground: rgba(14, 50, 120, 1);

--muted: rgba(225, 225, 225, 1);            /* Light gray */
--muted-foreground: rgba(86, 86, 86, 1);

--border: rgba(117, 117, 117, 1);           /* Medium gray */
--border-soft: rgba(0, 0, 0, 0.08);         /* Soft black */
--border-extra-soft: rgba(0, 0, 0, 0.04);   /* Extra soft black */
```

**Shadows:**
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);
--shadow-primary: 0 4px 12px rgba(30, 106, 255, 0.3);
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.1);
```

**Glassmorphism:**
```css
--glass-bg: rgba(255, 255, 255, 0.08);
--glass-bg-strong: rgba(255, 255, 255, 0.15);
--glass-border: rgba(0, 0, 0, 0.08);
--glass-text: rgba(9, 9, 9, 1);
```

### 2. Dark Mode

**Class:** `.dark {}`

**Color Palette:**
```css
--background: rgba(9, 9, 9, 1);             /* Near black */
--foreground: rgba(255, 255, 255, 1);       /* White */
--card: rgba(30, 30, 30, 1);                /* Dark gray */
--card-foreground: rgba(255, 255, 255, 1);  /* White */

--primary: rgba(123, 231, 255, 1);          /* Light cyan */
--primary-foreground: rgba(14, 50, 120, 1); /* Dark blue */

--secondary: rgba(14, 50, 120, 1);          /* Dark blue */
--secondary-foreground: rgba(123, 231, 255, 1);

--muted: rgba(86, 86, 86, 1);               /* Medium gray */
--muted-foreground: rgba(225, 225, 225, 1); /* Light gray */

--border: rgba(117, 117, 117, 1);           /* Medium gray */
--border-soft: rgba(255, 255, 255, 0.08);   /* Soft white */
--border-extra-soft: rgba(255, 255, 255, 0.04); /* Extra soft white */
```

**Shadows (Enhanced for Dark Mode):**
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.6);
--shadow-primary: 0 4px 12px rgba(123, 231, 255, 0.3);
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.4);
```

**Glassmorphism (Dark Mode):**
```css
--glass-bg: rgba(255, 255, 255, 0.08);
--glass-bg-strong: rgba(255, 255, 255, 0.15);
--glass-border: rgba(255, 255, 255, 0.12);
--glass-text: rgba(255, 255, 255, 1);
```

---

## 🔄 Theme Switching

### Implementation

**React Context:**
```tsx
// In StyleSwitcher component
const [theme, setTheme] = useState<'light' | 'dark'>('light');

useEffect(() => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}, [theme]);
```

**User Preference Detection:**
```tsx
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = prefersDark ? 'dark' : 'light';
```

**Local Storage Persistence:**
```tsx
// Save preference
localStorage.setItem('theme', theme);

// Load on mount
const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
```

---

## 🎯 WordPress Implementation

### theme.json Structure

```json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "primary",
          "color": "#1E6AFF",
          "name": "Primary"
        },
        {
          "slug": "secondary",
          "color": "#7BE7FF",
          "name": "Secondary"
        }
      ]
    },
    "custom": {
      "spacing": {
        "unit": "4px"
      },
      "typography": {
        "fontFamily": {
          "primary": "Lexend, sans-serif",
          "secondary": "Manrope, sans-serif"
        }
      }
    }
  },
  "styles": {
    "color": {
      "background": "var(--background)",
      "text": "var(--foreground)"
    },
    "typography": {
      "fontFamily": "var(--font-primary)"
    }
  }
}
```

### Style Variations (`styles/`)

**Light Theme:** `styles/light.json`
```json
{
  "version": 2,
  "title": "Light",
  "settings": {
    "color": {
      "palette": [...]
    }
  }
}
```

**Dark Theme:** `styles/dark.json`
```json
{
  "version": 2,
  "title": "Dark",
  "settings": {
    "color": {
      "palette": [...]
    }
  }
}
```

---

## 🌈 Future Theme Variations

### Potential Variations

1. **High Contrast Mode**
   - Enhanced contrast for accessibility
   - Darker shadows, bolder borders
   - Target: WCAG AAA compliance

2. **Reduced Motion Mode**
   - Disable all animations
   - Instant transitions
   - Target: Vestibular disorder support

3. **Custom Brand Themes**
   - Client-specific color palettes
   - Maintain structure, swap colors
   - Target: White-label solutions

4. **Seasonal Themes**
   - Holiday-specific palettes
   - Seasonal gradient orbs
   - Target: Marketing campaigns

---

## 📏 Token Mapping

### Color Role Mapping

| Semantic Role | Light Mode | Dark Mode | Purpose |
|---------------|------------|-----------|---------|
| `--background` | White | Black | Page background |
| `--foreground` | Black | White | Body text |
| `--card` | White | Dark gray | Card backgrounds |
| `--primary` | Blue | Light cyan | Primary actions |
| `--secondary` | Light cyan | Dark blue | Secondary actions |
| `--muted` | Light gray | Medium gray | Disabled states |
| `--border` | Gray | Gray | Strong borders |
| `--border-soft` | 8% black | 8% white | Soft borders |

### Why Semantic Roles?

✅ **Benefits:**
- Theme variations swap colors automatically
- No code changes needed for new themes
- Consistent naming across light/dark modes
- Easier to maintain and update

❌ **Avoid:**
- Hard-coded color values
- Mode-specific class names
- Direct color references (e.g., `blue-500`)

---

## 🔧 Creating a New Theme Variation

### Step 1: Define Color Palette

Choose semantic colors for your theme:
```css
.theme-name {
  --background: /* your background color */;
  --foreground: /* your text color */;
  --primary: /* your primary color */;
  /* ... all other tokens */
}
```

### Step 2: Test Contrast Ratios

Ensure all text meets WCAG 2.1 AA:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

### Step 3: Update Shadows & Glassmorphism

Adjust shadow opacity for theme:
```css
.theme-name {
  --shadow-md: 0 4px 6px rgba(/* adjust opacity */);
  --glass-bg: rgba(/* adjust for theme */);
}
```

### Step 4: Create WordPress Style Variation

**File:** `styles/theme-name.json`
```json
{
  "version": 2,
  "title": "Theme Name",
  "settings": {
    "color": {
      "palette": [
        /* your colors */
      ]
    }
  },
  "styles": {
    "color": {
      "background": "var(--background)",
      "text": "var(--foreground)"
    }
  }
}
```

### Step 5: Add Theme Switcher Option

Update StyleSwitcher component:
```tsx
<select value={theme} onChange={(e) => setTheme(e.target.value)}>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="theme-name">Theme Name</option>
</select>
```

---

## ♿ Accessibility Considerations

### Forced Colors Mode

Support Windows High Contrast mode:
```css
@media (forced-colors: active) {
  /* Use system colors */
  --border: CanvasText;
  --background: Canvas;
  --foreground: CanvasText;
}
```

### Prefers Color Scheme

Respect system preferences:
```css
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    /* Apply dark mode by default */
  }
}
```

### Prefers Contrast

Support high contrast preference:
```css
@media (prefers-contrast: high) {
  :root {
    --border: rgba(0, 0, 0, 1); /* Full opacity */
    --shadow-md: none; /* Remove subtle shadows */
  }
}
```

---

## 🎨 Design System Compatibility

### Token Inheritance

All theme variations must define:
- ✅ All surface colors (`--background`, `--card`, `--popover`)
- ✅ All interactive colors (`--primary`, `--secondary`, `--accent`)
- ✅ All state colors (`--muted`, `--destructive`)
- ✅ All border colors (`--border`, `--border-soft`, `--border-extra-soft`)
- ✅ All shadow variables (`--shadow-*`)
- ✅ All glassmorphism variables (`--glass-*`)

### Typography Consistency

Typography tokens remain constant across themes:
```css
/* These DO NOT change between themes */
--text-h1: 60px;
--text-h2: 32px;
--text-base: 16px;
--font-weight-semibold: 600;
```

### Spacing Consistency

Spacing scale remains constant across themes:
```tsx
/* These DO NOT change between themes */
<div className="p-6 gap-4 mb-8">
```

---

## 📊 Theme Usage Analytics

### Track Theme Preference

```tsx
// Analytics event
analytics.track('Theme Changed', {
  theme: theme,
  source: 'user_preference'
});
```

### Monitor Adoption

- **Light Mode:** Default for new users
- **Dark Mode:** Increasingly popular (30-40% adoption)
- **System Preference:** Recommended approach

---

## ✅ Theme Variation Checklist

Before launching a new theme:

- [ ] All semantic color roles defined
- [ ] Contrast ratios tested (WCAG AA minimum)
- [ ] Shadows adjusted for theme background
- [ ] Glassmorphism variables updated
- [ ] Border colors defined (standard, soft, extra-soft)
- [ ] WordPress `styles/*.json` file created
- [ ] Theme switcher updated
- [ ] Documentation updated
- [ ] Tested on all templates
- [ ] Tested with reduced motion
- [ ] Tested with forced colors mode

---

**Last Updated:** December 25, 2024  
**Active Themes:** 2 (Light, Dark)  
**Maintained By:** LSX Design Team  
**WordPress Compatibility:** FSE Style Variations
