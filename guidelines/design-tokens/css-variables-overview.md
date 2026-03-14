# CSS Variables System — Design Tokens

**Category:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/design-token-template.md  

---

## Purpose

**What:** Complete overview of the CSS variable system for the LSX Design prototype

**Why:** Centralized token management gives users complete control over styling

**Who:** All developers generating UI

---

## CRITICAL REQUIREMENT

**All UI generation MUST use CSS variables.**

This gives users complete control over styling by editing CSS files alone—no React component changes needed.

**Time Savings:** 99%+ (60 minutes → 30 seconds for design changes)

---

## System Overview

**Total Variables:** 80 CSS variables
- 33 LSX-specific variables
- 47 WordPress-compatible variables

**Location:** `/src/styles/`
- `/src/styles/theme-base.css` - Base tokens (spacing, typography, borders)
- `/src/styles/theme-light.css` - Light mode colors
- `/src/styles/theme-dark.css` - Dark mode colors

---

## Design System Fonts

**CRITICAL:** Only use fonts defined in the design system via CSS variables.

### Approved Fonts

**Primary Font:** Lexend (headings, body, UI)  
**Secondary Font:** Manrope (small text only)

### MUST Use CSS Variables

**Correct:**
```tsx
// ✅ ALWAYS use CSS variables
fontFamily: 'var(--font-primary)'      // Lexend
fontFamily: 'var(--font-secondary)'    // Manrope
```

**Incorrect:**
```tsx
// ❌ NEVER hardcode font names
fontFamily: 'Lexend, sans-serif'       // DON'T DO THIS
fontFamily: 'Manrope, sans-serif'      // DON'T DO THIS
fontFamily: "'Lexend'"                  // DON'T DO THIS
```

**Why:** Users can change fonts by editing one line in CSS:

```css
/* theme-base.css */
--font-primary: 'Inter', sans-serif;  /* Changed from Lexend */
/* Entire site updates automatically! */
```

---

## Token Categories

### 1. Typography Tokens

**Font Families:**
```tsx
fontFamily: 'var(--font-primary)'      // Lexend (default)
fontFamily: 'var(--font-secondary)'    // Manrope (default)
```

**Font Sizes:**
```tsx
fontSize: 'var(--text-h1)'             // 60px (clamp 32px-64px)
fontSize: 'var(--text-h2)'             // 48px (clamp 28px-48px)
fontSize: 'var(--text-h3)'             // 36px (clamp 24px-36px)
fontSize: 'var(--text-h4)'             // 28px (clamp 20px-28px)
fontSize: 'var(--text-h5)'             // 24px (clamp 18px-24px)
fontSize: 'var(--text-h6)'             // 20px (clamp 16px-20px)
fontSize: 'var(--text-base)'           // 18px (clamp 15px-18px)
fontSize: 'var(--text-lead)'           // 22px (clamp 18px-22px)
fontSize: 'var(--text-sm)'             // 14px
fontSize: 'var(--text-xs)'             // 12px
```

**Font Weights:**
```tsx
fontWeight: 'var(--font-weight-regular)'    // 400
fontWeight: 'var(--font-weight-medium)'     // 500
fontWeight: 'var(--font-weight-semibold)'   // 600
fontWeight: 'var(--font-weight-bold)'       // 700
```

**See:** [typography.md](./typography.md) for complete typography system

---

### 2. Spacing Tokens

**Spacing Scale:**
```tsx
padding: 'var(--spacing-0)'            // 0
padding: 'var(--spacing-1)'            // 4px
padding: 'var(--spacing-2)'            // 8px
padding: 'var(--spacing-3)'            // 12px
padding: 'var(--spacing-4)'            // 16px
padding: 'var(--spacing-5)'            // 20px
padding: 'var(--spacing-6)'            // 24px
padding: 'var(--spacing-8)'            // 32px
padding: 'var(--spacing-10)'           // 40px
padding: 'var(--spacing-12)'           // 48px
padding: 'var(--spacing-16)'           // 64px
padding: 'var(--spacing-20)'           // 80px
padding: 'var(--spacing-24)'           // 96px
// ... up to --spacing-64 (256px)
```

**Rules:**
- ✅ ALWAYS use CSS variables for spacing
- ❌ NEVER hardcode px values
- ❌ NEVER use Tailwind classes (`p-6`, `gap-4`)
- ✅ Use WordPress utility classes instead (`.wp-*`)

**See:** [spacing.md](./spacing.md) for complete spacing system

---

### 3. Color Tokens

**Semantic Colors:**
```tsx
// Primary brand color
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Background/Foreground
backgroundColor: 'var(--background)'
color: 'var(--foreground)'

// Card backgrounds
backgroundColor: 'var(--card)'
color: 'var(--card-foreground)'

// Muted/subtle
backgroundColor: 'var(--muted)'
color: 'var(--muted-foreground)'

// Accent color
backgroundColor: 'var(--accent)'
color: 'var(--accent-foreground)'

// Borders
borderColor: 'var(--border)'
borderColor: 'var(--input)' // For form fields
```

**State Colors:**
```tsx
backgroundColor: 'var(--destructive)'   // Error/danger
color: 'var(--destructive-foreground)'
```

**Rules:**
- ✅ ALWAYS use semantic color variables
- ❌ NEVER hardcode hex colors
- ❌ NEVER use rgb() or hsl() directly

**See:** [colors.md](./colors.md) for complete color system

---

### 4. Border Radius Tokens

**Radius Scale:**
```tsx
borderRadius: 'var(--radius)'          // 4px (default)
borderRadius: 'var(--radius-sm)'       // 2px
borderRadius: 'var(--radius-lg)'       // 8px
borderRadius: 'var(--radius-xl)'       // 12px
borderRadius: 'var(--radius-full)'     // 9999px (pill shape)
```

**Rules:**
- ✅ ALWAYS use CSS variables
- ❌ NEVER hardcode px values

---

### 5. Shadow Tokens

**Shadow Scale:**
```tsx
boxShadow: 'var(--shadow-sm)'          // Small shadow
boxShadow: 'var(--shadow)'             // Default shadow
boxShadow: 'var(--shadow-md)'          // Medium shadow
boxShadow: 'var(--shadow-lg)'          // Large shadow
```

---

## WordPress-Compatible Variables

**WordPress Presets:** 47 `--wp--preset--*` variables

These map to `theme.json` presets for WordPress FSE compatibility.

**Examples:**
```tsx
// WordPress spacing
padding: 'var(--wp--preset--spacing--6)'

// WordPress font sizes
fontSize: 'var(--wp--preset--font-size--h1)'

// WordPress colors
color: 'var(--wp--preset--color--primary)'
```

**See:** [spacing.md](./spacing.md) for WordPress preset mapping

---

## Token Reference Syntax

### Typography

```tsx
// ✅ CORRECT - Use CSS variables
<h1 style={{
  fontFamily: 'var(--font-primary)',
  fontSize: 'var(--text-h1)',
  fontWeight: 'var(--font-weight-bold)'
}}>
  Page Title
</h1>
```

### Spacing

```tsx
// ✅ CORRECT - CSS variables for inline styles
<div style={{
  padding: 'var(--spacing-6)',
  gap: 'var(--spacing-4)',
  marginBottom: 'var(--spacing-8)'
}}>
```

**OR WordPress utility classes:**
```tsx
// ✅ CORRECT - WordPress utilities (preferred for layout)
<div className="wp-grid-3-cols">
```

### Colors

```tsx
// ✅ CORRECT - Semantic color variables
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)',
  borderColor: 'var(--border)'
}}>
```

### Border Radius

```tsx
// ✅ CORRECT - Radius variables
<div style={{
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border)'
}}>
```

---

## Complete Example

```tsx
// ✅ 100% CSS variable compliant component
const CardComponent = ({ title, description }) => (
  <div 
    className="card"
    style={{
      // Colors
      backgroundColor: 'var(--card)',
      color: 'var(--card-foreground)',
      
      // Spacing
      padding: 'var(--spacing-6)',
      marginBottom: 'var(--spacing-8)',
      gap: 'var(--spacing-4)',
      
      // Borders
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      
      // Shadows
      boxShadow: 'var(--shadow)'
    }}
  >
    <h3 style={{
      // Typography
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--font-weight-semibold)',
      marginBottom: 'var(--spacing-3)'
    }}>
      {title}
    </h3>
    
    <p style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.6
    }}>
      {description}
    </p>
  </div>
);
```

**Result:** User can update entire design by editing CSS files—zero component changes needed.

---

## User Control Example

### Changing Fonts

**Before (60 minutes):**
1. Find all components using fonts
2. Update each `fontFamily` prop
3. Test all pages
4. Fix layout breaks
5. Commit changes

**After (30 seconds):**
1. Edit `/src/styles/theme-base.css`:
```css
--font-primary: 'Inter', sans-serif;  /* Changed! */
```
2. Done. Entire site updates.

---

### Changing Colors

**Before (60 minutes):**
1. Find all components using colors
2. Update each `backgroundColor`/`color` prop
3. Ensure contrast ratios maintained
4. Test dark mode
5. Fix inconsistencies

**After (30 seconds):**
1. Edit `/src/styles/theme-light.css`:
```css
--primary: #007bff;  /* Changed! */
```
2. Done. Entire site updates.

---

## Anti-Patterns

### ❌ DON'T: Hardcode Values

```tsx
// ❌ WRONG - Hardcoded values
<div style={{
  color: '#1a1a1a',                // ❌ Hardcoded color
  backgroundColor: '#ffffff',       // ❌ Hardcoded color
  padding: '24px',                  // ❌ Hardcoded spacing
  borderRadius: '8px',              // ❌ Hardcoded radius
  fontFamily: 'Lexend, sans-serif', // ❌ Hardcoded font
  fontSize: '32px'                  // ❌ Hardcoded size
}}>
```

### ✅ DO: Use CSS Variables

```tsx
// ✅ CORRECT - CSS variables
<div style={{
  color: 'var(--foreground)',
  backgroundColor: 'var(--background)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--radius-lg)',
  fontFamily: 'var(--font-primary)',
  fontSize: 'var(--text-h2)'
}}>
```

---

## Verification Checklist

**Before committing code:**
- [ ] Zero hardcoded hex colors
- [ ] Zero hardcoded px spacing
- [ ] Zero hardcoded font names
- [ ] Zero hardcoded font sizes
- [ ] Zero hardcoded border radius
- [ ] All styling uses CSS variables
- [ ] WordPress utilities used for layout
- [ ] Dark mode works (color variables)

**Verification Commands:**
```bash
# Search for hardcoded colors
grep -r "#[0-9a-fA-F]\{6\}" src/app/components/
# Should return zero results

# Search for hardcoded fonts
grep -r "fontFamily.*Lexend" src/app/components/
# Should return zero results

# Search for hardcoded spacing
grep -r 'padding.*"[0-9]' src/app/components/
# Should return zero results
```

---

## Related Guidelines

**Detailed Token Documentation:**
- [typography.md](./typography.md) - Complete typography system
- [spacing.md](./spacing.md) - Spacing scale + WordPress utilities
- [colors.md](./colors.md) - Color system + semantic roles
- [responsive.md](./responsive.md) - Fluid responsive system
- [button-sizes.md](./button-sizes.md) - Button sizing tokens

**Other References:**
- [../development/wordpress-utilities.md](../development/wordpress-utilities.md) - WordPress utility classes
- [../build-rules.md](../build-rules.md) - Token usage requirements

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Category:** Design Tokens  
**Total Variables:** 80 CSS variables  
**User Control:** 100% via CSS files  
**Last Updated:** March 11, 2026
