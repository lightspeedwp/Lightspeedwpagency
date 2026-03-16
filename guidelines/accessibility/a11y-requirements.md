# Accessibility — Requirements & Examples

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [accessibility.md](../accessibility.md)  
**Compliance Level:** WCAG 2.1 AA  

---

## Scope

**Applies To:** All React components, templates, patterns, and interactive UI elements

**Standards:** WCAG 2.1 Level AA (minimum), WordPress accessibility guidelines, keyboard navigation, screen reader compatibility

---

## Requirements

### Structure (MUST)

- MUST have exactly one H1 per page
- MUST maintain logical heading order (H1 to H2 to H3, no skipping)
- MUST include semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- MUST use real `<ul>`/`<ol>` lists (not styled paragraphs)

### Interaction (MUST)

- MUST make all interactive elements reachable by keyboard (Tab)
- MUST show visible focus states on all interactive elements (2px ring minimum)
- MUST NOT have hover-only functionality
- MUST provide touch targets at 44x44px minimum

### Content Tolerance (MUST)

- MUST handle long titles gracefully (test with 100+ characters)
- MUST NOT create visual gaps when fields are missing
- MUST provide explicit empty states (message + next action)

### Motion (MUST)

- MUST respect `prefers-reduced-motion: reduce`
- MUST NOT require animation for understanding
- MUST add reduced-motion guard to every `@keyframes` animation
- MUST neutralize hover `transform` under reduced motion
- MUST NOT flash content more than 3 times per second
- MUST keep loading indicators visible (static state) under reduced motion

**See:** [REDUCED-MOTION-STANDARDS.md](../REDUCED-MOTION-STANDARDS.md)

---

## Examples

### Semantic Structure

```tsx
<header>
  <nav aria-label="Main navigation">{/* Navigation */}</nav>
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

<footer>{/* Footer content */}</footer>
```

### Keyboard Navigation

```tsx
<button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
  className="custom-button"
>
  Click Me
</button>
```

```css
.custom-button:focus-visible {
  outline: var(--wp--preset--border-width--2) solid var(--primary);
  outline-offset: var(--wp--preset--border-width--2);
}
```

### Touch Targets

```tsx
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

### Reduced Motion

```css
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.animated-element {
  animation: slideIn 0.3s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

**See also:** [a11y-checklist-patterns.md](./a11y-checklist-patterns.md)
