# Storybook Configuration Guidelines

## 🎯 **PURPOSE**

This document defines where Storybook configuration files should be located and how they should be structured in the LSX Design system.

**Goals:**
- Correct Storybook file organization
- Design system integration
- Theme configuration
- Accessibility testing setup

---

## 📁 **STORYBOOK FILE LOCATIONS**

### **✅ CORRECT: Storybook Files in Root `.storybook/` Directory**

```
/.storybook/
├── main.ts              # Storybook main configuration
├── preview.tsx          # Preview configuration (global decorators)
└── manager.ts           # Manager UI customization
```

**Why this location?**
- ✅ Standard Storybook convention
- ✅ Recognized by Storybook CLI
- ✅ Separate from application code
- ✅ Easy to find and configure
- ✅ Works with all Storybook tooling

---

### **❌ WRONG: Storybook Files in `/src/` or `/src/app/`**

```
❌ /src/.storybook/           # Wrong location
❌ /src/app/.storybook/       # Wrong location
❌ /src/main.ts               # Wrong - conflicts with app code
❌ /src/app/preview.tsx       # Wrong - not a component
```

**Why wrong?**
- ❌ Not standard Storybook convention
- ❌ Storybook CLI won't find them
- ❌ Conflicts with application code
- ❌ Confusing organization
- ❌ Breaks Storybook tooling

---

## 📝 **FILE PURPOSES**

### **1. main.ts - Main Configuration**

**Purpose:** Configure Storybook build, addons, and story locations

**Location:** `/.storybook/main.ts`

**Contents:**
```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Story file locations
  stories: [
    '../src/app/components/blocks/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.mdx',
    '../guidelines/**/*.mdx',
  ],
  
  // Addons
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',        // Accessibility testing
    '@storybook/addon-themes',      // Theme switching
    '@chromatic-com/storybook',     // Visual testing
  ],
  
  // Framework
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  
  // Docs
  docs: {
    autodocs: 'tag',
  },
  
  // Path aliases
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': '/src',
          '@/components': '/src/app/components',
          '@/data': '/src/app/data',
        },
      },
    });
  },
};

export default config;
```

**Key Points:**
- Configures story locations
- Adds necessary addons
- Sets up Vite configuration
- Enables accessibility testing

---

### **2. preview.tsx - Preview Configuration**

**Purpose:** Global decorators, parameters, and design system integration

**Location:** `/.storybook/preview.tsx`

**Contents:**
```typescript
import type { Preview } from '@storybook/react';
import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';

// ✅ CRITICAL: Import ALL design system styles
import '../src/styles/fonts.css';
import '../src/styles/theme-base.css';
import '../src/styles/theme-light.css';
import '../src/styles/theme-dark.css';
import '../src/styles/global.css';

/**
 * Global Decorator - Wraps all stories
 * Ensures design system CSS variables are available
 */
const withDesignSystem = (Story: any) => {
  return (
    <div
      className="storybook-wrapper"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--background)',    // CSS variable
        color: 'var(--foreground)',              // CSS variable
        fontFamily: 'var(--font-primary)',       // CSS variable
        padding: 'var(--spacing-8)',             // CSS variable
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'aria-allowed-attr', enabled: true },
        ],
      },
    },
  },
  decorators: [
    withDesignSystem,
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'light',
    }),
  ],
  tags: ['autodocs'],
};

export default preview;
```

**Key Points:**
- ✅ Uses CSS variables for ALL styling
- ✅ Imports design system styles
- ✅ Global decorator for design system
- ✅ Theme switching support
- ✅ Accessibility testing enabled

---

### **3. manager.ts - Manager UI Customization**

**Purpose:** Customize Storybook manager UI (sidebar, toolbar, branding)

**Location:** `/.storybook/manager.ts`

**Contents:**
```typescript
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

/**
 * Custom Storybook Theme - LSX Design
 */
const lsxTheme = create({
  base: 'light',
  
  // Brand
  brandTitle: 'LSX Design System',
  brandUrl: 'https://lsxdesign.com',
  brandImage: '/logo-light.svg',
  
  // Typography - Use design system fonts
  fontBase: '"Manrope", sans-serif',
  
  // Colors - Match design system
  colorPrimary: '#2563EB',    // var(--primary)
  colorSecondary: '#10B981',  // var(--accent)
});

addons.setConfig({
  theme: lsxTheme,
  sidebar: {
    showRoots: true,
  },
});
```

**Key Points:**
- Customizes Storybook UI
- Uses design system fonts
- Matches brand colors
- Configures sidebar behavior

---

## 🚫 **COMMON MISTAKES**

### **❌ WRONG: Files in /src/ or /src/app/**

```
❌ /src/.storybook/main.ts
❌ /src/app/.storybook/preview.tsx
❌ /src/main.ts              # Conflicts with app entry
❌ /src/app/preview.tsx      # Confusing - not a component
```

### **✅ CORRECT: Files in /.storybook/**

```
✅ /.storybook/main.ts
✅ /.storybook/preview.tsx
✅ /.storybook/manager.ts
```

---

### **❌ WRONG: Hardcoded Values in preview.tsx**

```tsx
// ❌ WRONG - Hardcoded values
const withDesignSystem = (Story: any) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',     // Wrong
      color: '#000000',                // Wrong
      fontFamily: 'Manrope',           // Wrong
      padding: '32px',                 // Wrong
    }}>
      <Story />
    </div>
  );
};
```

### **✅ CORRECT: CSS Variables in preview.tsx**

```tsx
// ✅ CORRECT - CSS variables
const withDesignSystem = (Story: any) => {
  return (
    <div style={{
      backgroundColor: 'var(--background)',  // Correct
      color: 'var(--foreground)',            // Correct
      fontFamily: 'var(--font-primary)',     // Correct
      padding: 'var(--spacing-8)',           // Correct
    }}>
      <Story />
    </div>
  );
};
```

---

## 📋 **MIGRATION PLAN**

### **If Storybook Files Are in Wrong Location:**

**Step 1: Create `.storybook/` directory**
```bash
mkdir -p .storybook
```

**Step 2: Move files to `.storybook/`**
```bash
mv /main.ts /.storybook/main.ts
mv /preview.tsx /.storybook/preview.tsx
mv /manager.ts /.storybook/manager.ts
```

**Step 3: Update import paths (if needed)**

In `preview.tsx`, ensure paths are correct:
```typescript
// From /.storybook/preview.tsx, imports should be:
import '../src/styles/fonts.css';
import '../src/styles/theme-base.css';
```

**Step 4: Verify Storybook runs**
```bash
npm run storybook
# or
yarn storybook
```

---

## 🎨 **DESIGN SYSTEM INTEGRATION**

### **Critical Requirements:**

1. **Import ALL Design System Styles**

```typescript
// In /.storybook/preview.tsx
import '../src/styles/fonts.css';        // Fonts FIRST
import '../src/styles/theme-base.css';   // Base tokens
import '../src/styles/theme-light.css';  // Light mode
import '../src/styles/theme-dark.css';   // Dark mode
import '../src/styles/global.css';       // Global styles
```

**Order matters!** Fonts → Base → Light → Dark → Global

---

2. **Use CSS Variables in Global Decorator**

```tsx
const withDesignSystem = (Story: any) => {
  return (
    <div style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      fontFamily: 'var(--font-primary)',
      padding: 'var(--spacing-8)',
    }}>
      <Story />
    </div>
  );
};
```

**Never hardcode values!**

---

3. **Enable Theme Switching**

```typescript
import { withThemeByClassName } from '@storybook/addon-themes';

decorators: [
  withDesignSystem,
  withThemeByClassName({
    themes: {
      light: 'light-theme',
      dark: 'dark-theme',
    },
    defaultTheme: 'light',
  }),
],
```

---

4. **Enable Accessibility Testing**

```typescript
parameters: {
  a11y: {
    config: {
      rules: [
        { id: 'color-contrast', enabled: true },
        { id: 'aria-allowed-attr', enabled: true },
      ],
    },
  },
},
```

---

## 📁 **COMPLETE DIRECTORY STRUCTURE**

```
/
├── .storybook/                       ✅ Storybook config (root)
│   ├── main.ts                       # Main configuration
│   ├── preview.tsx                   # Preview + decorators
│   └── manager.ts                    # Manager UI customization
│
├── src/
│   ├── app/
│   │   └── components/
│   │       └── blocks/
│   │           └── Button/
│   │               ├── Button.tsx
│   │               └── Button.stories.tsx  # Story files
│   │
│   └── styles/                       # Design system styles
│       ├── fonts.css
│       ├── theme-base.css
│       ├── theme-light.css
│       ├── theme-dark.css
│       └── global.css
│
└── guidelines/
    └── storybook/
        └── storybook-configuration.md
```

---

## ✅ **CHECKLIST**

**Storybook Configuration:**
- [ ] All config files in `/.storybook/` directory
- [ ] `main.ts` configures stories and addons
- [ ] `preview.tsx` imports design system styles
- [ ] `preview.tsx` uses CSS variables (not hardcoded values)
- [ ] Global decorator wraps all stories
- [ ] Theme switching enabled
- [ ] Accessibility addon enabled
- [ ] Manager UI customized with brand

**Design System Integration:**
- [ ] All CSS files imported in correct order
- [ ] CSS variables used for colors
- [ ] CSS variables used for fonts
- [ ] CSS variables used for spacing
- [ ] No hardcoded values in preview.tsx
- [ ] Theme switcher works (light/dark)

---

## 🎯 **BEST PRACTICES**

### **1. Always Use CSS Variables**

```tsx
// ✅ GOOD
<div style={{
  color: 'var(--foreground)',
  fontFamily: 'var(--font-primary)',
}}>

// ❌ BAD
<div style={{
  color: '#000000',
  fontFamily: 'Manrope',
}}>
```

---

### **2. Import Styles in Correct Order**

```tsx
// ✅ CORRECT ORDER
import '../src/styles/fonts.css';        // 1. Fonts first
import '../src/styles/theme-base.css';   // 2. Base tokens
import '../src/styles/theme-light.css';  // 3. Light mode
import '../src/styles/theme-dark.css';   // 4. Dark mode
import '../src/styles/global.css';       // 5. Global styles

// ❌ WRONG ORDER - Will cause style conflicts
import '../src/styles/global.css';
import '../src/styles/fonts.css';
```

---

### **3. Test Accessibility**

```typescript
// Enable accessibility testing
parameters: {
  a11y: {
    config: {
      rules: [
        { id: 'color-contrast', enabled: true },
        { id: 'aria-allowed-attr', enabled: true },
        { id: 'heading-order', enabled: true },
      ],
    },
  },
},
```

---

## 📚 **RELATED GUIDELINES**

**See also:**
- **[design-tokens/colors.md](../design-tokens/colors.md)** — Color system CSS variables
- **[design-tokens/typography.md](../design-tokens/typography.md)** — Font system CSS variables
- **[design-tokens/spacing.md](../design-tokens/spacing.md)** — Spacing CSS variables
- **[import-guidelines.md](../imports/import-guidelines.md)** — Import standards

---

## 🎉 **SUMMARY**

**Correct Location:**
```
✅ /.storybook/main.ts
✅ /.storybook/preview.tsx
✅ /.storybook/manager.ts
```

**Wrong Locations:**
```
❌ /src/.storybook/
❌ /src/app/.storybook/
❌ /main.ts (root)
❌ /preview.tsx (root)
```

**Key Rules:**
1. ✅ All Storybook config in `/.storybook/` directory
2. ✅ Import design system styles in `preview.tsx`
3. ✅ Use CSS variables for ALL styling
4. ✅ Enable theme switching
5. ✅ Enable accessibility testing
6. ❌ Never hardcode colors, fonts, or spacing
7. ❌ Never put config in `/src/` or `/src/app/`

**User Control:**
- User can update entire Storybook styling by editing CSS files
- No hardcoded values means 100% design system compliance
- Theme switching works automatically with CSS variables

---

**Last Updated:** 2025-01-09  
**Status:** ✅ Active  
**Enforcement:** Mandatory for Storybook setup
