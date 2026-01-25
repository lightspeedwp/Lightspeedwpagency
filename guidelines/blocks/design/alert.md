# Alert Block

**WordPress Block:** `core/alert` (custom design block)  
**Category:** Design Blocks  
**Component:** `/src/app/components/blocks/design/Alert.tsx`  
**CSS File:** `/src/styles/blocks/design/alert.css`

---

## Purpose

The Alert block displays important messages, notifications, warnings, or errors to users. It provides visual feedback with different severity levels and optional dismiss functionality.

**Use this block when:**
- Displaying success/error messages after form submissions
- Showing important warnings or notifications
- Communicating system status changes
- Highlighting critical information that requires attention

**Do NOT use this block when:**
- Displaying regular content (use Paragraph block instead)
- Creating decorative elements (use Group block with custom styling)
- Building navigation elements (use Navigation block)

---

## Block Structure

```tsx
import { Alert } from '@/app/components/blocks/design/Alert';

<Alert variant="info" title="Information">
  This is an informational message with important details.
</Alert>
```

---

## Props API

```typescript
interface AlertProps {
  /** Alert severity/variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  
  /** Alert title (optional) */
  title?: string;
  
  /** Alert content */
  children: React.ReactNode;
  
  /** Show dismiss button */
  dismissible?: boolean;
  
  /** Callback when dismissed */
  onDismiss?: () => void;
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## Variant Examples

### Info Alert
```tsx
<Alert variant="info" title="Did you know?">
  You can customize all colors by editing the CSS variables.
</Alert>
```

### Success Alert
```tsx
<Alert variant="success" title="Success!">
  Your form has been submitted successfully.
</Alert>
```

### Warning Alert
```tsx
<Alert variant="warning" title="Warning">
  This action cannot be undone. Please proceed with caution.
</Alert>
```

### Error Alert
```tsx
<Alert variant="error" title="Error">
  There was a problem processing your request. Please try again.
</Alert>
```

### Dismissible Alert
```tsx
<Alert 
  variant="info" 
  dismissible 
  onDismiss={() => console.log('Alert dismissed')}
>
  Click the X to dismiss this alert.
</Alert>
```

---

## CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

```css
/* Colors */
--primary          /* Info alert background */
--success          /* Success alert background */
--warning          /* Warning alert background */
--destructive      /* Error alert background */
--foreground       /* Alert text color */

/* Typography */
--font-primary     /* Alert font family */
--text-base        /* Alert body text size */
--text-sm          /* Alert title text size */

/* Spacing */
--spacing-4        /* Internal padding */
--spacing-3        /* Icon spacing */
--spacing-2        /* Element gaps */

/* Borders */
--radius           /* Alert border radius */
--border           /* Alert border color */
```

---

## BEM Class Naming

The Alert block uses WordPress-aligned BEM naming:

```css
.wp-block-alert                    /* Root container */
.wp-block-alert--info              /* Info variant modifier */
.wp-block-alert--success           /* Success variant modifier */
.wp-block-alert--warning           /* Warning variant modifier */
.wp-block-alert--error             /* Error variant modifier */
.wp-block-alert--dismissible       /* Dismissible modifier */

.wp-block-alert__icon              /* Alert icon */
.wp-block-alert__content           /* Content wrapper */
.wp-block-alert__title             /* Alert title */
.wp-block-alert__message           /* Alert message */
.wp-block-alert__dismiss           /* Dismiss button */
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- ✅ **Contrast Ratios:** Minimum 4.5:1 for text, 3:1 for large text
- ✅ **ARIA Attributes:** `role="alert"` for important messages
- ✅ **Keyboard Navigation:** Dismiss button must be keyboard accessible
- ✅ **Screen Readers:** Alert content announced automatically with `aria-live="polite"`
- ✅ **Focus Management:** Dismiss button receives visible focus indicator

### Implementation
```tsx
<div 
  className="wp-block-alert wp-block-alert--info"
  role="alert"
  aria-live="polite"
  aria-atomic="true"
>
  <AlertCircle className="wp-block-alert__icon" aria-hidden="true" />
  <div className="wp-block-alert__content">
    {title && <strong className="wp-block-alert__title">{title}</strong>}
    <div className="wp-block-alert__message">{children}</div>
  </div>
  {dismissible && (
    <button
      className="wp-block-alert__dismiss"
      onClick={onDismiss}
      aria-label="Dismiss alert"
    >
      <X aria-hidden="true" />
    </button>
  )}
</div>
```

---

## Light & Dark Mode

The Alert block automatically adapts to light/dark themes using CSS variables:

```css
/* Light mode */
.light-theme .wp-block-alert--info {
  background: var(--primary-light);      /* Light blue background */
  color: var(--primary-dark);            /* Dark blue text */
}

/* Dark mode */
.dark-theme .wp-block-alert--info {
  background: var(--primary-dark);       /* Dark blue background */
  color: var(--primary-light);           /* Light blue text */
}
```

All variants automatically adjust based on the active theme.

---

## Responsive Behavior

| Breakpoint | Padding | Font Size | Icon Size |
|------------|---------|-----------|-----------|
| **Mobile** (< 768px) | 12px | 14px | 20px |
| **Tablet** (768px - 1023px) | 16px | 15px | 22px |
| **Desktop** (≥ 1024px) | 16px | 16px | 24px |

```css
/* Mobile-first responsive design */
.wp-block-alert {
  padding: var(--spacing-3);
  font-size: 14px;
}

@media (min-width: 768px) {
  .wp-block-alert {
    padding: var(--spacing-4);
    font-size: 15px;
  }
}

@media (min-width: 1024px) {
  .wp-block-alert {
    font-size: var(--text-base);
  }
}
```

---

## WordPress Mapping

### In WordPress FSE

This block would be implemented as a **custom block pattern** or **reusable block**:

```html
<!-- wp:group {"className":"wp-block-alert wp-block-alert--info","layout":{"type":"flex"}} -->
<div class="wp-block wp-block-group wp-block-alert wp-block-alert--info">
  <!-- wp:paragraph {"className":"wp-block-alert__message"} -->
  <p class="wp-block-alert__message">This is an informational message.</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
```

### Block Variations

WordPress allows creating block variations for each alert type:

- `alert/info` - Informational alert
- `alert/success` - Success alert
- `alert/warning` - Warning alert
- `alert/error` - Error alert

---

## Usage in Templates

### Page Template
```tsx
import { Alert } from '@/app/components/blocks/design/Alert';

export function AboutTemplate() {
  return (
    <>
      <SiteHeader />
      <main>
        <Alert variant="info" title="Notice">
          We've updated our privacy policy. Please review the changes.
        </Alert>
        
        {/* Template content */}
      </main>
      <SiteFooter />
    </>
  );
}
```

### Form Feedback
```tsx
import { Alert } from '@/app/components/blocks/design/Alert';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  return (
    <>
      {submitted && (
        <Alert variant="success" dismissible>
          Your message has been sent successfully!
        </Alert>
      )}
      
      {error && (
        <Alert variant="error" title="Error">
          Please fill in all required fields.
        </Alert>
      )}
      
      {/* Form fields */}
    </>
  );
}
```

---

## Testing Requirements

### Unit Tests
- [ ] Renders all variants correctly (info, success, warning, error)
- [ ] Displays title when provided
- [ ] Shows dismiss button when `dismissible={true}`
- [ ] Calls `onDismiss` callback when dismiss button clicked
- [ ] Applies custom className when provided
- [ ] Uses correct CSS variables for styling

### Accessibility Tests
- [ ] Has `role="alert"` attribute
- [ ] Has `aria-live="polite"` for screen readers
- [ ] Dismiss button has `aria-label="Dismiss alert"`
- [ ] Icon has `aria-hidden="true"`
- [ ] Keyboard navigation works (Tab to dismiss button, Enter/Space to dismiss)
- [ ] Focus visible on dismiss button

### Visual Regression Tests
- [ ] Light mode renders correctly for all variants
- [ ] Dark mode renders correctly for all variants
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Long content wraps properly
- [ ] Dismiss button positioned correctly

---

## Common Patterns

### Multiple Alerts
```tsx
<Stack spacing="md">
  <Alert variant="error" title="Error">
    Please fix the following errors before submitting.
  </Alert>
  <Alert variant="warning">
    Some fields are missing optional information.
  </Alert>
</Stack>
```

### Auto-Dismissing Alert
```tsx
function AutoDismissAlert() {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  
  if (!visible) return null;
  
  return (
    <Alert variant="success" dismissible onDismiss={() => setVisible(false)}>
      This alert will automatically disappear in 5 seconds.
    </Alert>
  );
}
```

### Alert with Actions
```tsx
<Alert variant="warning" title="Update Available">
  <p>A new version of the application is available.</p>
  <Buttons>
    <Button variant="primary" size="sm">Update Now</Button>
    <Button variant="secondary" size="sm">Remind Me Later</Button>
  </Buttons>
</Alert>
```

---

## Migration Checklist

When migrating existing inline alerts:

- [ ] Replace hardcoded colors with CSS variables
- [ ] Remove inline styles, use CSS classes
- [ ] Add proper ARIA attributes for accessibility
- [ ] Ensure keyboard navigation works
- [ ] Test in light and dark modes
- [ ] Verify responsive behavior
- [ ] Add appropriate variant (info/success/warning/error)
- [ ] Consider making dismissible when appropriate

---

## Related Components

- **[Badge](./badge.md)** - Small status indicators
- **[Group](./group.md)** - Container for grouping content
- **[Stack](./stack.md)** - Vertical stacking with spacing

---

**Last Updated:** January 22, 2025  
**Status:** ✅ Complete  
**Compliance:** 100% CSS Variables, WCAG 2.1 AA, WordPress FSE Ready
