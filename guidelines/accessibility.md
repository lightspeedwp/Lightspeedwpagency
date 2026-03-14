# Accessibility Guidelines — Guidelines

**Category:** Development  
**Version:** 1.1.0  
**Last Updated:** 2026-03-11  
**Status:** Active  
**Template Used:** _templates/general-template.md  
**Compliance Level:** WCAG 2.1 AA

---

## Purpose

**What:** Accessibility requirements for all UI components and templates

**Why:** Ensure the LSX Design prototype is accessible to all users, including those with disabilities, meeting WCAG 2.1 AA standards

**Who:** All developers building UI components, templates, and patterns

---

## Scope

**Applies To:**
- All React components (`/src/app/components/**`)
- All templates (`/src/app/templates/**`)
- All patterns (`/src/app/patterns/**`)
- All interactive UI elements

**Standards:**
- WCAG 2.1 Level AA (minimum)
- WordPress accessibility guidelines
- Keyboard navigation requirements
- Screen reader compatibility

---

## Requirements

### Structure (MUST)

- ✅ **MUST** have exactly one H1 per page
- ✅ **MUST** maintain logical heading order (H1 -> H2 -> H3, no skipping levels)
- ✅ **MUST** include semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- ✅ **MUST** use real `<ul>`/`<ol>` lists (not styled paragraphs)

**Rationale:** Screen readers rely on semantic HTML structure for navigation and context

### Interaction (MUST)

- ✅ **MUST** make all interactive elements reachable by keyboard (Tab navigation)
- ✅ **MUST** show visible focus states on all interactive elements (2px ring outline minimum)
- ✅ **MUST NOT** have hover-only functionality (must work on touch devices)
- ✅ **MUST** provide touch targets at 44x44px minimum (especially filters, pagination buttons)

**Rationale:** Keyboard-only users and touch device users must have equal access to all functionality

### Content Tolerance (MUST)

- ✅ **MUST** handle long titles gracefully (test with 100+ characters)
- ✅ **MUST NOT** create visual gaps when fields are missing
- ✅ **MUST** provide explicit empty states (message + next action where appropriate)

**Rationale:** Real content varies in length; layouts must be resilient

### Motion (MUST)

- ✅ **MUST** respect reduced motion preferences (`prefers-reduced-motion: reduce`)
- ✅ **MUST NOT** require animation for understanding content
- ✅ **MUST** add `prefers-reduced-motion: reduce` guard to every `@keyframes` animation
- ✅ **MUST** neutralize every hover `transform` under reduced motion
- ✅ **MUST** hide or make static decorative-only animated elements under reduced motion
- ✅ **MUST** keep loading indicators visible (static state) under reduced motion
- ✅ **MUST NOT** flash content more than 3 times per second (WCAG 2.3.1 Level A)
- ✅ **MUST** set JavaScript animation hooks to `respectReducedMotion: true` by default
- ✅ **MUST** use consolidated reduced-motion block in template CSS after dark-mode section

**Rationale:** Motion can trigger vestibular disorders; all animations must have static fallbacks

**See:** [REDUCED-MOTION-STANDARDS.md](./REDUCED-MOTION-STANDARDS.md) for complete motion guidelines

---

## Examples

### Example 1: Semantic Structure

**Correct Approach:**
```tsx
// ✅ Proper semantic structure
<header>
  <nav aria-label="Main navigation">
    {/* Navigation */}
  </nav>
</header>

<main>
  <h1>Page Title</h1>
  
  <section>
    <h2>Section Heading</h2>
    <p>Content</p>
    
    <h3>Subsection</h3>
    <p>More content</p>
  </section>
</main>

<footer>
  {/* Footer content */}
</footer>
```

**Why Correct:** Proper landmarks, single H1, logical heading hierarchy

### Example 2: Keyboard Navigation

**Correct Approach:**
```tsx
// ✅ Keyboard accessible button
<button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
  style={{
    outline: 'none' // Remove default
  }}
  className="custom-button" // Uses focus-visible styles
>
  Click Me
</button>
```

```css
/* Focus styles in CSS */
.custom-button:focus-visible {
  outline: var(--wp--preset--border-width--2) solid var(--primary);
  outline-offset: var(--wp--preset--border-width--2);
}
```

**Why Correct:** Keyboard events handled, visible focus state

### Example 3: Touch Targets

**Correct Approach:**
```tsx
// ✅ Minimum 44x44px touch target
<button
  style={{
    minWidth: '44px',
    minHeight: '44px',
    padding: 'var(--spacing-3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <Icon size={20} />
</button>
```

**Why Correct:** Meets 44x44px minimum touch target size

### Example 4: Reduced Motion

**Correct Approach:**
```css
/* ✅ Animation with reduced motion guard */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-element {
  animation: slideIn 0.3s ease-out;
}

/* MUST include reduced motion guard */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    /* Static fallback - just show the element */
    opacity: 1;
    transform: none;
  }
}
```

**Why Correct:** Animation has static fallback for reduced motion users

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
- [ ] Focus ring contrast ratio ≥ 3:1
- [ ] Focus ring not removed without replacement
- [ ] Skip link present (for main content)

**Touch Targets:**
- [ ] All buttons/links ≥ 44x44px
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
- [ ] Text contrast ≥ 4.5:1 (normal text)
- [ ] Text contrast ≥ 3:1 (large text 18px+)
- [ ] Interactive elements contrast ≥ 3:1
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
// Add to top of every template
<a 
  href="#main-content"
  className="skip-link"
  style={{
    position: 'absolute',
    left: '-9999px',
    zIndex: 9999
  }}
  onFocus={(e) => {
    e.target.style.left = '0';
  }}
  onBlur={(e) => {
    e.target.style.left = '-9999px';
  }}
>
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>
```

### Pattern 2: Accessible Form Field

```tsx
// Always pair label with input
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
// Modal with proper focus management
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  onKeyDown={(e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }}
>
  <h2 id="modal-title">Modal Title</h2>
  <div>{/* Modal content */}</div>
  <button onClick={closeModal}>Close</button>
</div>
```

---

## Do's and Don'ts

### ✅ DO:
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`)
- Provide visible focus indicators
- Test with keyboard only (unplug mouse)
- Test with screen reader (NVDA/JAWS/VoiceOver)
- Include skip links for long navigation
- Provide text alternatives for images
- Use sufficient color contrast
- Respect user preferences (reduced motion, dark mode)

### ❌ DON'T:
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

**Automated Testing:**
- axe DevTools (browser extension)
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse (Chrome DevTools)
- Pa11y (command line)

**Manual Testing:**
- Keyboard navigation (Tab, Enter, Space, Escape, Arrow keys)
- Screen readers (NVDA, JAWS, VoiceOver)
- Browser zoom (200%, 400%)
- Reduced motion testing
- Color contrast analyzer

**Required Tests:**
- [ ] Keyboard-only navigation
- [ ] Screen reader announcement
- [ ] Color contrast check
- [ ] Zoom to 200%
- [ ] Reduced motion preference

---

## Related Guidelines

**See Also:**
- [REDUCED-MOTION-STANDARDS.md](./REDUCED-MOTION-STANDARDS.md) - Complete motion guidelines
- [design-tokens/touch-targets.md](./design-tokens/touch-targets.md) - Touch target sizing
- [mobile/forms.md](./mobile/forms.md) - Mobile form accessibility

**Prerequisites:**
- Semantic HTML knowledge
- WCAG 2.1 AA understanding
- Screen reader basics

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**Maintainer:** LSX Design  
**Category:** Standards  
**Compliance:** WCAG 2.1 AA  
**Last Reviewed:** March 11, 2026
