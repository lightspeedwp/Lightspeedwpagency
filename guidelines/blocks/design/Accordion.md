# WordPress Core Block: Accordion

**Block Name:** `core/accordion`  
**Category:** Design Blocks  
**Status:** ✅ Production Ready  
**WordPress FSE:** Full compatibility  
**Accessibility:** WCAG 2.1 AA compliant

---

## Overview

The **Accordion block** provides collapsible content panels that expand/collapse when clicked. It's a WordPress core block that allows users to organize content into expandable sections, reducing visual clutter while maintaining information hierarchy.

**Common Use Cases:**
- FAQ sections
- Expandable content lists
- Step-by-step instructions
- Feature details
- Terms and conditions

---

## WordPress Mapping

### WordPress Block Structure

```html
<!-- wp:details {"summary":"Question text"} -->
<details class="wp-block-details">
  <summary>Question text</summary>
  <!-- wp:paragraph -->
  <p>Answer content</p>
  <!-- /wp:paragraph -->
</details>
<!-- /wp:details -->
```

**Note:** WordPress uses the native HTML `<details>` and `<summary>` elements, which provide built-in accordion functionality with zero JavaScript required.

---

## React Component

### Basic Usage

```tsx
import { Accordion, AccordionItem } from '@/app/components/blocks/design/Accordion';

<Accordion>
  <AccordionItem 
    id="faq-1"
    question="What is WordPress?"
    answer="WordPress is a free and open-source content management system..."
  />
  <AccordionItem 
    id="faq-2"
    question="What is WooCommerce?"
    answer="WooCommerce is a customizable, open-source eCommerce platform..."
  />
</Accordion>
```

### With Custom Content

```tsx
<Accordion>
  <AccordionItem 
    id="custom-1"
    question="Advanced Features"
  >
    <p>Custom answer content with <strong>formatting</strong>.</p>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
  </AccordionItem>
</Accordion>
```

---

## Component Props

### Accordion (Wrapper)

```typescript
interface AccordionProps {
  children: React.ReactNode;           // AccordionItem components
  className?: string;                  // Additional CSS classes
  defaultOpen?: string;                // ID of item to open by default
  allowMultiple?: boolean;             // Allow multiple items open (default: false)
}
```

### AccordionItem

```typescript
interface AccordionItemProps {
  id: string;                          // Unique identifier (required)
  question: string;                    // Question/summary text
  answer?: string;                     // Simple text answer
  children?: React.ReactNode;          // Custom answer content (overrides answer)
  defaultOpen?: boolean;               // Open by default
}
```

---

## Accessibility Requirements

### ARIA Attributes

The Accordion component implements proper ARIA attributes:

```tsx
<div role="region" aria-labelledby={`accordion-header-${id}`}>
  <button
    id={`accordion-header-${id}`}
    aria-expanded={isOpen}
    aria-controls={`accordion-panel-${id}`}
  >
    Question text
  </button>
  
  <div
    id={`accordion-panel-${id}`}
    role="region"
    aria-labelledby={`accordion-header-${id}`}
    hidden={!isOpen}
  >
    Answer content
  </div>
</div>
```

### Keyboard Navigation

**Required keyboard interactions:**

| Key | Action |
|-----|--------|
| `Enter` | Toggle accordion panel |
| `Space` | Toggle accordion panel |
| `Tab` | Move focus to next accordion item |
| `Shift + Tab` | Move focus to previous accordion item |

### Focus Management

- ✅ Visible focus ring on accordion headers (2px outline)
- ✅ Focus remains on clicked header after toggle
- ✅ Focus indicators use `--primary` color
- ✅ Focus visible in both light and dark modes

### Screen Reader Support

**Announcement pattern:**
```
"Question text, button, collapsed"
[User presses Enter]
"Question text, button, expanded"
```

**Requirements:**
- ✅ Use semantic `<button>` for headers
- ✅ Include `aria-expanded` state
- ✅ Link header and panel with `aria-controls` and `aria-labelledby`
- ✅ Use `hidden` attribute (not `display: none`) for collapsed panels

---

## Styling System

### CSS Variables (User-Controllable)

All styling uses CSS variables from `/src/styles/theme-base.css`:

**Colors:**
```css
--foreground              /* Question text color */
--muted-foreground        /* Answer text color */
--border                  /* Border color */
--background              /* Panel background */
--primary                 /* Icon color (active state) */
```

**Typography:**
```css
--font-primary            /* Question font (Lexend) */
--font-secondary          /* Answer font (Manrope) */
--text-lg                 /* Question size */
--text-base               /* Answer size */
--font-weight-semibold    /* Question weight */
--font-weight-normal      /* Answer weight */
```

**Spacing:**
```css
--spacing-4               /* Icon gap */
--spacing-5               /* Vertical padding */
--spacing-6               /* Horizontal padding */
--spacing-8               /* Bottom margin */
```

**Border Radius:**
```css
--radius-lg               /* Accordion item border radius */
```

### CSS Classes

**Base classes:**
```css
.wp-block-accordion              /* Wrapper */
.wp-block-accordion__item        /* Individual item */
.wp-block-accordion__header      /* Question button */
.wp-block-accordion__icon        /* Expand/collapse icon */
.wp-block-accordion__panel       /* Answer content */
```

**State classes:**
```css
.wp-block-accordion__item--open  /* Expanded state */
.wp-block-accordion__icon--open  /* Rotated icon */
```

### Light/Dark Mode

**Automatic theme switching:**
```css
/* Light mode */
.light .wp-block-accordion__item {
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(0, 0, 0, 0.08);
}

/* Dark mode */
.dark .wp-block-accordion__item {
  background-color: var(--card);
  border-color: var(--border);
}
```

---

## Animation

### Expand/Collapse Transition

**Duration:** `300ms`  
**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out)

**Animated properties:**
- Panel height (0 → auto)
- Icon rotation (0deg → 180deg)
- Panel opacity (0 → 1)

**Respects reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .wp-block-accordion__panel {
    transition: none;
  }
}
```

---

## Examples

### FAQ Section (Common Pattern)

```tsx
import { Accordion, AccordionItem } from '@/app/components/blocks/design/Accordion';
import { faqData } from '@/app/data/faqs';

export function FAQSection() {
  return (
    <section className="wp-block-faq-section">
      <Container>
        <h2>Frequently Asked Questions</h2>
        
        <Accordion>
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
```

### Step-by-Step Instructions

```tsx
<Accordion defaultOpen="step-1">
  <AccordionItem 
    id="step-1"
    question="Step 1: Install WordPress"
  >
    <p>Download WordPress from wordpress.org and upload to your server.</p>
  </AccordionItem>
  
  <AccordionItem 
    id="step-2"
    question="Step 2: Configure Database"
  >
    <p>Create a MySQL database and configure wp-config.php.</p>
  </AccordionItem>
</Accordion>
```

### Multiple Open Items

```tsx
<Accordion allowMultiple>
  <AccordionItem id="feature-1" question="Feature 1" answer="..." />
  <AccordionItem id="feature-2" question="Feature 2" answer="..." />
  <AccordionItem id="feature-3" question="Feature 3" answer="..." />
</Accordion>
```

---

## Best Practices

### DO ✅

- **Use semantic HTML** (`<button>`, `role="region"`)
- **Include unique IDs** for each accordion item
- **Keep questions concise** (1-2 lines maximum)
- **Use clear, descriptive text** for questions
- **Respect reduced motion** preferences
- **Test with keyboard only** (no mouse)
- **Test with screen readers** (NVDA, JAWS, VoiceOver)
- **Use CSS variables** for all styling

### DON'T ❌

- **Don't use `<div>` for clickable headers** (use `<button>`)
- **Don't skip ARIA attributes** (breaks screen readers)
- **Don't use `display: none`** (use `hidden` attribute instead)
- **Don't hardcode colors/spacing** (use CSS variables)
- **Don't nest accordions** (bad UX, confusing navigation)
- **Don't make questions too long** (breaks mobile layout)
- **Don't use complex HTML in questions** (keep simple)

---

## WordPress FSE Integration

### theme.json Configuration

```json
{
  "blocks": {
    "core/details": {
      "color": {
        "background": "var(--card)",
        "text": "var(--foreground)"
      },
      "spacing": {
        "padding": {
          "top": "var(--spacing-5)",
          "bottom": "var(--spacing-5)",
          "left": "var(--spacing-6)",
          "right": "var(--spacing-6)"
        },
        "margin": {
          "bottom": "var(--spacing-4)"
        }
      },
      "border": {
        "radius": "var(--radius-lg)",
        "width": "1px",
        "color": "var(--border)"
      }
    }
  }
}
```

### Custom Block Style

```json
{
  "styles": [
    {
      "name": "default",
      "label": "Default",
      "isDefault": true
    },
    {
      "name": "bordered",
      "label": "Bordered"
    }
  ]
}
```

---

## Testing Checklist

### Functional Testing

- [ ] Accordion expands on click
- [ ] Accordion collapses on second click
- [ ] Only one item open at a time (default behavior)
- [ ] Multiple items can open (if `allowMultiple={true}`)
- [ ] Default open item works correctly
- [ ] Smooth expand/collapse animation

### Accessibility Testing

- [ ] Keyboard navigation works (Enter/Space)
- [ ] Focus visible on all items
- [ ] Screen reader announces state changes
- [ ] ARIA attributes correct (`aria-expanded`, `aria-controls`)
- [ ] Semantic HTML (`<button>` for headers)
- [ ] `hidden` attribute on collapsed panels

### Visual Testing

- [ ] Light mode styling correct
- [ ] Dark mode styling correct
- [ ] Focus ring visible (2px outline)
- [ ] Icon rotates smoothly (180deg)
- [ ] Text wraps properly on mobile
- [ ] No layout shift during animation

### Cross-Browser Testing

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS + iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

---

## Performance

**Metrics:**
- ✅ **Zero JavaScript required** (for WordPress `<details>` element)
- ✅ **CSS-only animations** (GPU-accelerated)
- ✅ **Minimal DOM manipulation** (toggle `hidden` attribute)
- ✅ **No bundle size impact** (native HTML elements)

**Optimization tips:**
- Use CSS variables for all styling (no inline styles)
- Avoid nested accordions (performance + UX)
- Lazy load long answer content if needed

---

## Related Blocks

- **[Tabs Block](./Tabs.md)** — Alternative for switching between content views
- **[Details Block](./Details.md)** — WordPress native details/summary element
- **[Collapsible Block](./Collapsible.md)** — Generic collapsible content wrapper

---

## Resources

**WordPress Documentation:**
- [Details Block](https://wordpress.org/documentation/article/details-block/)
- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)

**Accessibility:**
- [ARIA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [WebAIM: Accessible Accordions](https://webaim.org/techniques/accordion/)

**Design System:**
- [CSS Variables Guide](../../design-tokens/colors.md)
- [Typography System](../../design-tokens/typography.md)
- [Spacing Scale](../../design-tokens/spacing.md)

---

**Last Updated:** January 19, 2025  
**Status:** ✅ Production Ready  
**Maintainer:** LSX Design System Team
