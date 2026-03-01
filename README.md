# 📚 Storybook Configuration - LSX Design System

## 🚀 Quick Start

```bash
# Start Storybook
npm run storybook

# Build for production
npm run build-storybook
```

## 📂 Configuration Files

- **`main.ts`** - Main Storybook configuration (stories, addons, vite)
- **`preview.tsx`** - Global decorators & design system integration
- **`manager.ts`** - UI customization & LSX branding

## 🎯 Stories Location

Stories are **ONLY** loaded from:

```
/src/app/components/blocks/**/*.stories.tsx
```

This excludes:
- ❌ Template files
- ❌ Pattern files
- ❌ Part files

## 🎨 Design System

All CSS variables and fonts are automatically available:

```typescript
// CSS Variables
var(--background)
var(--foreground)
var(--primary)
var(--text-base)
var(--radius)

// Fonts
font-family: 'Lexend, sans-serif'     // UI/headings
font-family: 'Manrope, sans-serif'    // Body text
```

## 🌈 Theme Switching

Click the theme icon in the toolbar to switch between:
- ☀️ Light theme (`light-theme` class)
- 🌙 Dark theme (`dark-theme` class)

## ♿ Accessibility Testing

Every story is automatically tested for WCAG 2.1 AA compliance.

Check the "Accessibility" tab in each story.

## 🔧 Troubleshooting

### Clear Cache:
```bash
rm -rf node_modules/.cache/storybook
rm -rf .storybook/.cache
```

### Reinstall:
```bash
rm -rf node_modules
npm install
```

## 📚 Documentation

See `/STORYBOOK-ERRORS-FIXED.md` for detailed troubleshooting guide.

---

**LSX Design System** - World-class component library 🏆
