# [Token Name] — Design Tokens

**Category:** Design Tokens  
**Last Updated:** [Date]  
**Status:** [Draft/Active/Deprecated]

---

## Overview

**Purpose:** [Brief 1-2 sentence description of what this token system controls]

**Scope:** [What elements/components use these tokens]

**Design System Principle:** [How this aligns with LSX Design system principles]

---

## CSS Variables

### Token Scale

**Location:** `/src/styles/theme-base.css` (or `/src/styles/theme-light.css` for colors)

```css
/* [Token Category] Scale */
--[token-prefix]-[name]-1: [value]; /* [Usage description] */
--[token-prefix]-[name]-2: [value]; /* [Usage description] */
--[token-prefix]-[name]-3: [value]; /* [Usage description] */
/* ... */
```

### Complete Token List

| Token | Value | Usage |
|-------|-------|-------|
| `--[token-name]` | `[value]` | [When to use] |
| `--[token-name]` | `[value]` | [When to use] |

---

## Usage Examples

### React/TSX

```tsx
// CORRECT - Use CSS variables
<div style={{
  [property]: 'var(--[token-name])',
  [property]: 'var(--[token-name])'
}}>
  {children}
</div>

// WRONG - Never hardcode values
<div style={{
  [property]: '[hardcoded-value]'  // ❌ DON'T DO THIS
}}>
```

### CSS

```css
/* CORRECT - Use CSS variables */
.component {
  [property]: var(--[token-name]);
  [property]: var(--[token-name]);
}

/* WRONG - Never hardcode values */
.component {
  [property]: [hardcoded-value]; /* ❌ DON'T DO THIS */
}
```

### WordPress Utility Classes

```tsx
// Use WordPress utility classes when available
<div className="wp-[utility-class]">
  {/* Content */}
</div>
```

---

## WordPress Mapping

### theme.json Presets

```json
{
  "settings": {
    "[category]": {
      "[subcategory]": [
        {
          "slug": "[slug]",
          "name": "[Name]",
          "[property]": "var(--[token-name])"
        }
      ]
    }
  }
}
```

### WordPress Constants

| WordPress Preset | LSX Token | Relationship |
|------------------|-----------|--------------|
| `--wp--preset--[category]--[name]` | `--[token-name]` | [How they relate] |

---

## Token Hierarchy

### Primary Tokens
- `--[token-name]` - [Primary usage]
- `--[token-name]` - [Primary usage]

### Semantic Tokens
- `--[semantic-name]` (maps to `--[token-name]`) - [Context-specific usage]
- `--[semantic-name]` (maps to `--[token-name]`) - [Context-specific usage]

### Component Tokens
- `--[component]-[property]` (maps to `--[token-name]`) - [Component-specific usage]

---

## Variants

### [Variant Name]

**When to use:** [Description]

```css
--[token-name]-[variant]: [value];
```

**Example:**
```tsx
<div style={{ [property]: 'var(--[token-name]-[variant])' }}>
```

---

## Responsive Behavior

### Mobile (< 768px)
```css
@media (max-width: 767px) {
  --[token-name]: [mobile-value];
}
```

### Tablet (768px - 1023px)
```css
@media (min-width: 768px) and (max-width: 1023px) {
  --[token-name]: [tablet-value];
}
```

### Desktop (1024px+)
```css
@media (min-width: 1024px) {
  --[token-name]: [desktop-value];
}
```

---

## Accessibility

### WCAG Compliance
- ✅ [Accessibility requirement met]
- ✅ [Accessibility requirement met]

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  --[token-name]: [static-value]; /* Remove animation */
}
```

### Dark Mode
```css
.dark {
  --[token-name]: [dark-mode-value];
}
```

---

## Do's and Don'ts

### ✅ DO:
- Use CSS variables for all [token category]
- Reference tokens via `var(--[token-name])`
- Use semantic tokens when available
- Test in light AND dark mode
- Verify responsive scaling

### ❌ DON'T:
- Hardcode [value type] (always use tokens)
- Mix token systems (stay consistent)
- Override tokens with inline values
- Use non-existent tokens
- Create custom tokens without documentation

---

## Common Patterns

### Pattern 1: [Pattern Name]
```tsx
// [Description]
<div style={{
  [property]: 'var(--[token-name])',
  [property]: 'var(--[token-name])'
}}>
```

### Pattern 2: [Pattern Name]
```css
/* [Description] */
.pattern {
  [property]: var(--[token-name]);
  [property]: var(--[token-name]);
}
```

---

## Related Tokens

**See also:**
- [Related Token System](./[filename].md) - [Relationship]
- [Related Token System](./[filename].md) - [Relationship]

**Used by:**
- [Component Name](../components/[ComponentName].md)
- [Pattern Name](../patterns/[PatternName].md)

---

## Migration Guide

### From Hardcoded Values

**Before:**
```css
.component {
  [property]: [hardcoded-value];
}
```

**After:**
```css
.component {
  [property]: var(--[token-name]);
}
```

### From Old Token System

**Before:**
```css
--old-[token-name]: [value];
```

**After:**
```css
--[new-token-name]: [value];
```

---

## Troubleshooting

### Token Not Working?
1. Check token exists in `/src/styles/theme-base.css`
2. Verify correct CSS variable syntax: `var(--[token-name])`
3. Check for typos in token name
4. Ensure CSS file is imported

### Value Not Updating?
1. Clear browser cache
2. Check CSS specificity conflicts
3. Verify no inline styles override token
4. Check dark mode overrides

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [Date] | Initial creation |

---

**Maintainer:** LSX Design  
**Category:** Design Tokens  
**Related Guidelines:** [Link to related guidelines]
