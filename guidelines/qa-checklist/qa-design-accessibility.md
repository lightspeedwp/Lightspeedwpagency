# QA Checklist — Design Tokens, Architecture & Accessibility

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [qa-checklist.md](../qa-checklist.md)  

---

## Architecture & Patterns

### Pattern Composition

- [ ] Every template is composed from patterns
- [ ] Every pattern has a clear purpose and slug
- [ ] No one-off custom layouts found
- [ ] Pattern catalogue is complete and documented
- [ ] Patterns are reusable across multiple templates
- [ ] Empty patterns omitted (no blank space)

---

## Design Tokens & Styling

### CSS Variables Compliance

- [ ] Tokens are used everywhere (no raw spacing/font sizes/colours)
- [ ] Zero hardcoded hex colors found
- [ ] Zero hardcoded px spacing values found
- [ ] Zero hardcoded font sizes found
- [ ] Zero hardcoded border radius values found
- [ ] Only approved fonts used (`var(--font-primary)` or `var(--font-secondary)`)
- [ ] No hardcoded font family names (e.g., 'Lexend, sans-serif')
- [ ] All colors use semantic CSS variables

**Verification:**
```bash
grep -r "#[0-9a-fA-F]\{6\}" src/app/components/
grep -r "fontFamily.*Lexend" src/app/components/
grep -r "padding.*px" src/app/components/
# Should return zero results for all
```

**Manual Check:** Change a color variable in CSS, verify UI updates across all pages.

---

## Accessibility (WCAG 2.1 AA)

### Keyboard Navigation

- [ ] All interactive elements reachable by keyboard
- [ ] Tab order is logical
- [ ] Focus states visible on all interactive elements
- [ ] No keyboard traps
- [ ] Skip links present on all pages

### Screen Reader

- [ ] All components have accessible labels
- [ ] ARIA attributes used correctly
- [ ] No redundant ARIA
- [ ] Semantic HTML used (not divs for buttons)
- [ ] Alt text on all images

### Touch Targets

- [ ] Mobile touch targets meet 44x44px minimum
- [ ] Desktop interactive elements meet minimum size
- [ ] Adequate spacing between touch targets

### Color Contrast

- [ ] Text contrast >= 4.5:1 (normal text)
- [ ] Large text contrast >= 3:1 (18px+ or 14px+ bold)
- [ ] Interactive elements contrast >= 3:1
- [ ] Color not sole indicator of meaning

### Reduced Motion

- [ ] All animations have `prefers-reduced-motion` guards
- [ ] No required animations for understanding
- [ ] Loading states visible in static mode
- [ ] Decorative animations hidden/static in reduced motion

---

## WordPress Compatibility

### WordPress Blocks

- [ ] All UI components map to WordPress blocks or patterns
- [ ] No non-block custom solutions
- [ ] Pattern slugs follow convention: `lsx-design/{category}/{name}`
- [ ] All patterns are editor-realistic (buildable in Gutenberg)

### Theme Integration

- [ ] System remains theme-agnostic
- [ ] Inherits `theme.json` defaults correctly
- [ ] All design tokens in `theme.json` presets
- [ ] No hardcoded theme-specific values

---

## Components & Utilities

### Component Documentation

- [ ] All "utility UI" components documented as non-block behaviours
- [ ] Component guidelines files exist for all custom components
- [ ] Props/API documented
- [ ] Usage examples provided

### Icons

- [ ] All icons verified to exist in @phosphor-icons/react
- [ ] Icon sizes use CSS variables
- [ ] Icons have accessible labels (aria-label or sr-only text)
- [ ] Icon weights consistent (regular/bold/duotone/fill)

---

**See also:** [qa-testing-signoff.md](./qa-testing-signoff.md)
