# Accessibility — Checklist, Patterns & Testing

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [accessibility.md](../accessibility.md)  
**Compliance Level:** WCAG 2.1 AA  

---

## Checklist

Use this checklist for every component/template:

**Structure:**
- [ ] Single H1 on page
- [ ] Logical heading hierarchy (no skipped levels)
- [ ] Semantic landmarks present
- [ ] Real lists (not styled divs)

**Keyboard Navigation:**
- [ ] All interactive elements focusable
- [ ] Tab order logical
- [ ] Enter/Space activate buttons/links
- [ ] Escape closes modals/dropdowns
- [ ] Arrow keys navigate menus (if applicable)

**Focus Visibility:**
- [ ] Focus ring visible on all interactive elements
- [ ] Focus ring contrast ratio >= 3:1
- [ ] Focus ring not removed without replacement
- [ ] Skip link present (for main content)

**Touch Targets:**
- [ ] All buttons/links >= 44x44px
- [ ] Adequate spacing between touch targets
- [ ] No tiny click targets in mobile view

**Content:**
- [ ] Alt text on all images
- [ ] Labels on all form fields
- [ ] Error messages descriptive
- [ ] Empty states have messaging

**Motion:**
- [ ] All animations have reduced-motion guards
- [ ] No required animations for understanding
- [ ] Loading states visible in static mode
- [ ] No flashing content >3 times/second

**Color:**
- [ ] Text contrast >= 4.5:1 (normal text)
- [ ] Text contrast >= 3:1 (large text 18px+)
- [ ] Interactive elements contrast >= 3:1
- [ ] Color not sole indicator of meaning

**ARIA:**
- [ ] ARIA labels where needed
- [ ] ARIA states accurate (expanded, selected, etc.)
- [ ] ARIA roles used correctly
- [ ] No redundant ARIA

---

## Common Patterns

### Pattern 1: Skip Link

```tsx
<a 
  href="#main-content"
  className="skip-link"
  style={{ position: 'absolute', left: '-9999px', zIndex: 9999 }}
  onFocus={(e) => { e.target.style.left = '0'; }}
  onBlur={(e) => { e.target.style.left = '-9999px'; }}
>
  Skip to main content
</a>

<main id="main-content">{/* Page content */}</main>
```

### Pattern 2: Accessible Form Field

```tsx
<div className="form-field">
  <label htmlFor="email-input">
    Email Address
    <span aria-label="required">*</span>
  </label>
  <input
    id="email-input"
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
  />
  {hasError && (
    <span id="email-error" role="alert">
      Please enter a valid email address
    </span>
  )}
</div>
```

### Pattern 3: Accessible Modal

```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  onKeyDown={(e) => { if (e.key === 'Escape') closeModal(); }}
>
  <h2 id="modal-title">Modal Title</h2>
  <div>{/* Modal content */}</div>
  <button onClick={closeModal}>Close</button>
</div>
```

---

## Do's and Don'ts

### DO:
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`)
- Provide visible focus indicators
- Test with keyboard only (unplug mouse)
- Test with screen reader (NVDA/JAWS/VoiceOver)
- Include skip links for long navigation
- Provide text alternatives for images
- Use sufficient color contrast
- Respect user preferences (reduced motion, dark mode)

### DON'T:
- Use `<div>` for buttons (use `<button>`)
- Remove focus outlines without replacement
- Rely on color alone for meaning
- Create keyboard traps
- Use hover-only tooltips
- Skip heading levels
- Auto-play videos with sound
- Flash content rapidly

---

## Testing Tools

**Automated:** axe DevTools, WAVE, Lighthouse, Pa11y

**Manual:** Keyboard navigation, screen readers, browser zoom (200%, 400%), reduced motion testing, color contrast analyzer

**Required Tests:**
- [ ] Keyboard-only navigation
- [ ] Screen reader announcement
- [ ] Color contrast check
- [ ] Zoom to 200%
- [ ] Reduced motion preference

---

## Related Guidelines

- [REDUCED-MOTION-STANDARDS.md](../REDUCED-MOTION-STANDARDS.md) — Complete motion guidelines
- [touch-targets.md](../design-tokens/touch-targets.md) — Touch target sizing
- [mobile/forms.md](../mobile/forms.md) — Mobile form accessibility

---

| Version | Date | Changes |
|---------|------|---------|
| 1.2.0 | March 15, 2026 | Split into 2 sub-files |
| 1.1.0 | March 11, 2026 | Initial version |

---

**See also:** [a11y-requirements.md](./a11y-requirements.md)
