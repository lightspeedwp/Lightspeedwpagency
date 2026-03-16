# Non-Block Components — Implementation Guidelines

**Category:** Components  
**Version:** 1.1.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [non-block-components.md](../non-block-components.md)  

---

## Implementation Guidelines

### Progressive Enhancement

All UI components should follow progressive enhancement:

1. **Base functionality works without JavaScript**
2. **JavaScript enhances the experience**
3. **Fails gracefully if JavaScript disabled**

**Example: Back to Top**
```tsx
// Progressive enhancement
<a href="#top" className="back-to-top">
  Back to Top
</a>
// Works as link without JS, enhanced with smooth scroll

// Requires JavaScript (WRONG)
<button onClick={scrollToTop} className="back-to-top">
  Back to Top
</button>
// Broken without JS
```

---

### Accessibility Requirements

**All UI components MUST:**
- Be keyboard accessible
- Have visible focus states
- Include ARIA labels where needed
- Support reduced motion
- Work without JavaScript (where possible)

**See:** [accessibility.md](../../accessibility.md)

---

### Design System Compliance

**All UI components MUST:**
- Use CSS variables for all styling
- Use design system fonts (`var(--font-primary)` or `var(--font-secondary)`)
- Use WordPress utility classes
- Follow BEM naming conventions
- Support dark mode

**See:** [css-variables-overview.md](../../design-tokens/css-variables-overview.md)

---

## WordPress Integration

### Theme Script Registration

```php
<?php
// functions.php

function lsx_design_enqueue_scripts() {
  wp_enqueue_script(
    'lsx-scroll-to-top',
    get_template_directory_uri() . '/assets/js/scroll-to-top.js',
    array(), '1.0.0', true
  );
  
  wp_enqueue_script(
    'lsx-theme-switcher',
    get_template_directory_uri() . '/assets/js/theme-switcher.js',
    array(), '1.0.0', true
  );
  
  wp_enqueue_script(
    'lsx-layout-switcher',
    get_template_directory_uri() . '/assets/js/layout-switcher.js',
    array(), '1.0.0', true
  );
}
add_action('wp_enqueue_scripts', 'lsx_design_enqueue_scripts');
```

---

## Checklist

**Before creating a UI component:**
- [ ] Is it truly a utility (not a pattern)?
- [ ] Does it enhance but not require?
- [ ] Can base functionality work without JS?
- [ ] Is it keyboard accessible?
- [ ] Does it support reduced motion?
- [ ] Does it use design system tokens?

**After creating:**
- [ ] Component documented
- [ ] CSS file created
- [ ] JavaScript file created (if needed)
- [ ] Accessibility tested
- [ ] Reduced motion tested
- [ ] WordPress integration planned

---

## Related Guidelines

- [components-vs-patterns.md](../components-vs-patterns.md) — When to use components vs patterns
- [accessibility.md](../../accessibility.md) — Accessibility requirements
- [ScrollBackToTop.md](../ScrollBackToTop.md) — Specific component doc
- [ScrollDownArrow.md](../ScrollDownArrow.md) — Specific component doc
- [StyleSwitcher.md](../StyleSwitcher.md) — Specific component doc
- [LayoutSwitcher.md](../LayoutSwitcher.md) — Specific component doc

---

| Version | Date | Changes |
|---------|------|---------|
| 1.1.0 | March 15, 2026 | Split into 2 sub-files |
| 1.0.0 | March 11, 2026 | Extracted from Guidelines.md |

---

**See also:** [catalog.md](./catalog.md)
