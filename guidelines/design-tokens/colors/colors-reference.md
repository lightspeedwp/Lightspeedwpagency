# Color Tokens — WordPress Integration & Quick Reference

**Category:** Design Tokens  
**Version:** 1.3.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [colors.md](../colors.md)  

---

## WordPress Integration

### theme.json Color Palette

```json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        { "slug": "background", "color": "var(--background)", "name": "Background" },
        { "slug": "foreground", "color": "var(--foreground)", "name": "Foreground" },
        { "slug": "card", "color": "var(--card)", "name": "Card" },
        { "slug": "card-foreground", "color": "var(--card-foreground)", "name": "Card Foreground" },
        { "slug": "primary", "color": "var(--primary)", "name": "Primary" },
        { "slug": "primary-foreground", "color": "var(--primary-foreground)", "name": "Primary Foreground" },
        { "slug": "secondary", "color": "var(--secondary)", "name": "Secondary" },
        { "slug": "secondary-foreground", "color": "var(--secondary-foreground)", "name": "Secondary Foreground" },
        { "slug": "muted", "color": "var(--muted)", "name": "Muted" },
        { "slug": "muted-foreground", "color": "var(--muted-foreground)", "name": "Muted Foreground" },
        { "slug": "accent", "color": "var(--accent)", "name": "Accent" },
        { "slug": "destructive", "color": "var(--destructive)", "name": "Destructive" },
        { "slug": "border", "color": "var(--border)", "name": "Border" },
        { "slug": "border-soft", "color": "var(--border-soft)", "name": "Border Soft" }
      ]
    }
  }
}
```

### Block Color Examples

```html
<!-- WordPress Group Block with card background -->
<!-- wp:group {"backgroundColor":"card","textColor":"card-foreground"} -->
<div class="wp-block-group has-card-background-color has-card-foreground-color">
  <!-- Content -->
</div>
<!-- /wp:group -->

<!-- Button with primary color -->
<!-- wp:button {"backgroundColor":"primary","textColor":"primary-foreground"} -->
<div class="wp-block-button">
  <a class="wp-block-button__link has-primary-background-color has-primary-foreground-color">
    Primary Button
  </a>
</div>
<!-- /wp:button -->
```

---

## Quick Reference

### Color Decision Tree

**Need a section background?**
- Use `var(--card)` (recommended)
- Or `var(--background)` for alternating
- Or `var(--muted)` for subtle variation

**Need text color?**
- Headings: `var(--foreground)` or `var(--card-foreground)`
- Body text: `var(--muted-foreground)`
- Metadata: `var(--muted-foreground)` with opacity
- Links: `var(--accent)`
- Highlights: `var(--primary)`

**Need a button?**
- Primary action: `var(--primary)` background
- Secondary action: `var(--secondary)` background
- Destructive action: `var(--destructive)` background
- Ghost/outline: transparent with `var(--border)`

**Need a border?**
- Standard: `var(--border)`
- Modern/subtle: `var(--border-soft)` (recommended)
- Very subtle: `var(--border-extra-soft)`

**Need a card?**
- Background: `var(--card)`
- Border: `var(--border-soft)`
- Heading: `var(--card-foreground)`
- Body: `var(--muted-foreground)`

---

## Common Mistakes & Fixes

### Mistake 1: Using primary for section backgrounds

```tsx
// WRONG - Poor readability in light mode
<Section style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>
```

```tsx
// CORRECT - Use card background
<Section style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)'
}}>
```

### Mistake 2: Hard-coding colors

```tsx
// WRONG - Doesn't adapt to theme
<div style={{
  backgroundColor: '#1E6AFF',
  color: '#FFFFFF'
}}>
```

```tsx
// CORRECT - Uses semantic variables
<div style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>
```

### Mistake 3: Wrong foreground pairing

```tsx
// WRONG - Mismatched pairing
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--foreground)'  // Should be --card-foreground
}}>
```

```tsx
// CORRECT - Proper pairing
<div style={{
  backgroundColor: 'var(--card)',
  color: 'var(--card-foreground)'
}}>
```

### Mistake 4: Using Tailwind color classes

```tsx
// WRONG - Tailwind colors don't adapt
<div className="bg-blue-500 text-white">
```

```tsx
// CORRECT - Use CSS variables
<div style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)'
}}>
```

---

## Summary Checklist

Before implementing any color:

- [ ] Using CSS variable, not hard-coded value?
- [ ] Correct foreground paired with background?
- [ ] Tested in both light and dark modes?
- [ ] Contrast ratio meets WCAG AA (4.5:1+)?
- [ ] Using semantic name (purpose not appearance)?
- [ ] Following section background patterns?
- [ ] Not using `--primary` for large backgrounds?

---

**Last Updated:** March 15, 2026  
**Color Variables:** 40+  
**Modes Supported:** Light, Dark  
**WCAG Compliance:** 100% AA, 97% AAA

---

**See also:** [colors-core.md](./colors-core.md) | [colors-states-borders.md](./colors-states-borders.md) | [colors-patterns.md](./colors-patterns.md)
