# Alert Component

**WordPress Block:** `lsx-design/alert`  
**Category:** Design  
**Status:** ✅ Production  
**Version:** 1.0  
**Created:** 2025-01-09

---

## 📋 Overview

The Alert component displays important messages, notifications, and feedback to users. It provides semantic color variants that convey the type and urgency of messages, with optional features like titles, icons, and dismissal.

**Common Use Cases:**
- Success feedback ("Your changes have been saved")
- Error messages ("An error occurred while processing your request")
- Warning notifications ("This action cannot be undone")
- Informational messages ("New features are now available")
- System status updates ("Scheduled maintenance tonight at 10 PM")

---

## 🎨 Design System

### Typography
- **Font Family:** `var(--font-primary)` (Lexend)
- **Font Sizes:** `var(--text-base)` (16px)
- **Font Weights:**
  - Title: `var(--font-weight-semibold)` (600)
  - Message: `var(--font-weight-regular)` (400)
- **Line Height:** `var(--line-height-normal)` (1.5)

### Colors
Uses semantic CSS variables:
- `var(--muted)` / `var(--muted-foreground)` — Default
- `var(--info)` / `var(--info-foreground)` — Info
- `var(--success)` / `var(--success-foreground)` — Success
- `var(--warning)` / `var(--warning-foreground)` — Warning
- `var(--destructive)` / `var(--destructive-foreground)` — Error

### Spacing
- **Padding:** `p-4` (16px all sides)
- **Gap:** `gap-3` (12px between icon and content)
- **Title Margin:** `var(--spacing-1)` (4px bottom)

### Border Radius
- **Standard:** `var(--radius)` (4px)

---

## 💻 Usage

### Basic Import

```tsx
import { Alert } from './components/blocks/design/Alert';

// In your component
<Alert variant="success">Your changes have been saved!</Alert>
```

### With Sub-components

```tsx
import { Alert, AlertTitle, AlertDescription } from './components/blocks/design/Alert';

<Alert variant="info">
  <AlertTitle>New Features Available</AlertTitle>
  <AlertDescription>
    We've added new customization options to your dashboard.
  </AlertDescription>
</Alert>
```

### Barrel Export Import

```tsx
import { Alert, AlertTitle, AlertDescription } from './components/blocks/design';
```

---

## 📊 Props

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Alert message content |
| `variant` | `'default' \| 'info' \| 'success' \| 'warning' \| 'destructive'` | `'default'` | Visual style variant based on message type |
| `title` | `string` | `undefined` | Optional alert title/heading |
| `icon` | `ReactNode` | `undefined` | Optional icon element |
| `dismissible` | `boolean` | `false` | Whether alert can be dismissed |
| `onDismiss` | `() => void` | `undefined` | Callback when alert is dismissed |
| `className` | `string` | `''` | Additional CSS classes |
| `ariaLabel` | `string` | `undefined` | Accessible label for screen readers |

### AlertTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Title content |
| `className` | `string` | `''` | Additional CSS classes |

### AlertDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Description content |
| `className` | `string` | `''` | Additional CSS classes |

---

## 🎨 Variants

### Default Variant
Neutral gray alert for general information.

```tsx
<Alert variant="default">This is a general informational message.</Alert>
```

**Colors:**
- Background: `var(--muted)`
- Text: `var(--muted-foreground)`

**ARIA:** `role="status"`, `aria-live="polite"`

---

### Info Variant
Blue alert for informational messages that need attention.

```tsx
<Alert variant="info">Did you know? You can customize your dashboard.</Alert>
```

**Colors:**
- Background: `var(--info)`
- Text: `var(--info-foreground)`

**ARIA:** `role="status"`, `aria-live="polite"`

---

### Success Variant
Green alert for positive feedback and successful operations.

```tsx
<Alert variant="success">Your profile has been updated successfully!</Alert>
```

**Colors:**
- Background: `var(--success)`
- Text: `var(--success-foreground)`

**ARIA:** `role="status"`, `aria-live="polite"`

---

### Warning Variant
Yellow alert for cautionary messages that require attention.

```tsx
<Alert variant="warning">This action cannot be undone. Please proceed with caution.</Alert>
```

**Colors:**
- Background: `var(--warning)`
- Text: `var(--warning-foreground)`

**ARIA:** `role="alert"`, `aria-live="assertive"`

---

### Destructive Variant
Red alert for errors and destructive actions.

```tsx
<Alert variant="destructive">Failed to save changes. Please try again.</Alert>
```

**Colors:**
- Background: `var(--destructive)`
- Text: `var(--destructive-foreground)`

**ARIA:** `role="alert"`, `aria-live="assertive"`

---

## 💡 Examples

### Simple Alerts

```tsx
// Basic success message
<Alert variant="success">
  Your changes have been saved successfully!
</Alert>

// Basic error message
<Alert variant="destructive">
  An error occurred. Please try again.
</Alert>

// Basic warning
<Alert variant="warning">
  Your session will expire in 5 minutes.
</Alert>

// Basic info
<Alert variant="info">
  New features are now available in your dashboard.
</Alert>
```

---

### Alerts with Titles

```tsx
<Alert variant="success" title="Success">
  Your profile has been updated successfully.
</Alert>

<Alert variant="destructive" title="Error">
  Failed to load data. Please refresh the page.
</Alert>

<Alert variant="warning" title="Warning">
  This action cannot be undone.
</Alert>

<Alert variant="info" title="Tip">
  You can customize your dashboard layout.
</Alert>
```

---

### Alerts with Icons

```tsx
import { CheckCircle, AlertTriangle, Info, XCircle } from 'lucide-react';

// Success with icon
<Alert variant="success" icon={<CheckCircle size={20} />}>
  Your payment was processed successfully.
</Alert>

// Warning with icon
<Alert variant="warning" icon={<AlertTriangle size={20} />}>
  Please verify your email address to continue.
</Alert>

// Info with icon
<Alert variant="info" icon={<Info size={20} />}>
  Did you know? You can export your data at any time.
</Alert>

// Error with icon
<Alert variant="destructive" icon={<XCircle size={20} />}>
  Connection lost. Attempting to reconnect...
</Alert>
```

---

### Dismissible Alerts

```tsx
// Simple dismissible alert
<Alert 
  variant="success" 
  dismissible 
  onDismiss={() => console.log('Alert dismissed')}
>
  Your settings have been saved.
</Alert>

// Dismissible with icon and title
<Alert
  variant="info"
  title="New Features"
  icon={<Info size={20} />}
  dismissible
  onDismiss={() => localStorage.setItem('featureAlertDismissed', 'true')}
>
  We've added new customization options to your dashboard. Check them out!
</Alert>
```

---

### Alerts with Sub-components

```tsx
import { Alert, AlertTitle, AlertDescription } from './components/blocks/design/Alert';

// Using sub-components for better control
<Alert variant="warning">
  <AlertTitle>Scheduled Maintenance</AlertTitle>
  <AlertDescription>
    Our servers will be undergoing maintenance tonight from 10 PM to 2 AM EST.
    Some features may be temporarily unavailable.
  </AlertDescription>
</Alert>

// Complex alert with all features
<Alert
  variant="destructive"
  icon={<XCircle size={20} />}
  dismissible
  onDismiss={() => handleErrorDismiss()}
>
  <AlertTitle>Payment Failed</AlertTitle>
  <AlertDescription>
    Your card was declined. Please update your payment method to continue.
  </AlertDescription>
</Alert>
```

---

### Form Validation Alerts

```tsx
// Success after form submission
<Alert variant="success" dismissible>
  Your message has been sent. We'll get back to you within 24 hours.
</Alert>

// Form errors
<Alert variant="destructive" title="Please correct the following errors:">
  <ul className="list-disc list-inside mt-2">
    <li>Email address is required</li>
    <li>Password must be at least 8 characters</li>
  </ul>
</Alert>

// Form warnings
<Alert variant="warning">
  Some fields are optional, but providing them helps us serve you better.
</Alert>
```

---

### System Status Alerts

```tsx
// Offline status
<Alert variant="destructive" icon={<XCircle size={20} />}>
  You are currently offline. Changes will sync when connection is restored.
</Alert>

// Syncing status
<Alert variant="info" icon={<Info size={20} />}>
  Syncing your data...
</Alert>

// Updated status
<Alert variant="success" icon={<CheckCircle size={20} />}>
  All changes synced successfully.
</Alert>
```

---

### Notification Alerts

```tsx
// New message notification
<Alert 
  variant="info" 
  dismissible
  onDismiss={() => markNotificationAsRead()}
>
  <AlertTitle>New Message</AlertTitle>
  <AlertDescription>
    You have a new message from John Doe.
  </AlertDescription>
</Alert>

// Action required
<Alert variant="warning" icon={<AlertTriangle size={20} />}>
  <AlertTitle>Action Required</AlertTitle>
  <AlertDescription>
    Your subscription expires in 3 days. Renew now to avoid interruption.
  </AlertDescription>
</Alert>
```

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast:**
- All variants meet minimum 4.5:1 contrast ratio
- Text remains readable in light and dark modes
- Does not rely on color alone to convey meaning

**ARIA Roles:**
- Uses `role="alert"` for urgent messages (warning, destructive)
- Uses `role="status"` for informational messages (default, info, success)
- `aria-live="assertive"` for urgent alerts
- `aria-live="polite"` for non-urgent alerts

**Keyboard Support:**
- **Escape:** Dismisses alert (if dismissible)
- **Tab:** Focus on dismiss button (if dismissible)
- **Enter/Space:** Activates dismiss button

**Screen Reader Support:**
```tsx
// Automatic announcement
<Alert variant="success">Changes saved</Alert>
// Screen reader: "Status: Changes saved" (polite)

<Alert variant="destructive">Error occurred</Alert>
// Screen reader: "Alert: Error occurred" (assertive)

// Custom announcement
<Alert variant="warning" ariaLabel="Warning: Low disk space">
  Your disk space is running low.
</Alert>
// Screen reader: "Warning: Low disk space"
```

**Icon Accessibility:**
- Icons are `aria-hidden="true"` (decorative only)
- Meaning conveyed through text and ARIA roles
- Color is supplementary, not the sole indicator

---

## 🗂️ WordPress Mapping

### Block Name
`lsx-design/alert`

### Pattern Slug
`lsx-design/design/alert`

### WordPress Implementation

```php
// Register custom block
register_block_type('lsx-design/alert', [
  'attributes' => [
    'message' => ['type' => 'string'],
    'variant' => ['type' => 'string', 'default' => 'default'],
    'title' => ['type' => 'string'],
    'dismissible' => ['type' => 'boolean', 'default' => false],
    'icon' => ['type' => 'string']
  ],
  'render_callback' => 'render_lsx_alert_block'
]);

function render_lsx_alert_block($attributes) {
  $message = esc_html($attributes['message']);
  $variant = esc_attr($attributes['variant']);
  $title = isset($attributes['title']) ? esc_html($attributes['title']) : '';
  $dismissible = $attributes['dismissible'] ? 'dismissible' : '';
  
  $role = in_array($variant, ['warning', 'destructive']) ? 'alert' : 'status';
  $aria_live = in_array($variant, ['warning', 'destructive']) ? 'assertive' : 'polite';
  
  ob_start();
  ?>
  <div 
    class="lsx-alert lsx-alert--<?php echo $variant; ?> <?php echo $dismissible; ?>"
    role="<?php echo $role; ?>"
    aria-live="<?php echo $aria_live; ?>"
  >
    <?php if ($title): ?>
      <div class="lsx-alert__title"><?php echo $title; ?></div>
    <?php endif; ?>
    <div class="lsx-alert__message"><?php echo $message; ?></div>
    <?php if ($dismissible): ?>
      <button class="lsx-alert__dismiss" aria-label="Dismiss alert">
        <span aria-hidden="true">&times;</span>
      </button>
    <?php endif; ?>
  </div>
  <?php
  return ob_get_clean();
}
```

### CSS Implementation

```css
/* Alert base styles */
.lsx-alert {
  position: relative;
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: var(--radius);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--line-height-normal);
}

/* Variant styles */
.lsx-alert--default {
  background-color: var(--muted);
  color: var(--muted-foreground);
  border: 1px solid var(--border);
}

.lsx-alert--info {
  background-color: var(--info);
  color: var(--info-foreground);
  border: 1px solid var(--info);
}

.lsx-alert--success {
  background-color: var(--success);
  color: var(--success-foreground);
  border: 1px solid var(--success);
}

.lsx-alert--warning {
  background-color: var(--warning);
  color: var(--warning-foreground);
  border: 1px solid var(--warning);
}

.lsx-alert--destructive {
  background-color: var(--destructive);
  color: var(--destructive-foreground);
  border: 1px solid var(--destructive);
}

/* Title styles */
.lsx-alert__title {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-1);
}

/* Message styles */
.lsx-alert__message {
  font-weight: var(--font-weight-regular);
}

/* Dismiss button */
.lsx-alert__dismiss {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.lsx-alert__dismiss:hover {
  opacity: 1;
}
```

---

## 🧪 Testing

### Visual Testing

```tsx
// Test all variants
<div className="flex flex-col gap-4">
  <Alert variant="default">Default alert message</Alert>
  <Alert variant="info">Info alert message</Alert>
  <Alert variant="success">Success alert message</Alert>
  <Alert variant="warning">Warning alert message</Alert>
  <Alert variant="destructive">Error alert message</Alert>
</div>

// Test with titles
<div className="flex flex-col gap-4">
  <Alert variant="success" title="Success">Operation completed</Alert>
  <Alert variant="warning" title="Warning">Please review</Alert>
  <Alert variant="destructive" title="Error">Something went wrong</Alert>
</div>

// Test dismissible
<Alert variant="info" dismissible onDismiss={() => console.log('Dismissed')}>
  This alert can be dismissed
</Alert>
```

### Accessibility Testing

```tsx
// Test screen reader announcements
<Alert variant="success">Changes saved</Alert>
// Should announce: "Status: Changes saved" (polite)

<Alert variant="destructive">Error occurred</Alert>
// Should announce: "Alert: Error occurred" (assertive)

// Test keyboard navigation
<Alert variant="info" dismissible>
  Press Escape to dismiss
</Alert>
// Should dismiss on Escape key

// Test color contrast
// All variants must meet WCAG 2.1 AA (4.5:1 minimum)
```

---

## 🚀 Design System Tokens Used

### Typography
- `var(--font-primary)` — Lexend font family
- `var(--text-base)` — 16px font size
- `var(--font-weight-semibold)` — 600 font weight (title)
- `var(--font-weight-regular)` — 400 font weight (message)
- `var(--line-height-normal)` — 1.5 line height

### Colors
- `var(--muted)` / `var(--muted-foreground)` — Default variant
- `var(--info)` / `var(--info-foreground)` — Info variant
- `var(--success)` / `var(--success-foreground)` — Success variant
- `var(--warning)` / `var(--warning-foreground)` — Warning variant
- `var(--destructive)` / `var(--destructive-foreground)` — Error variant
- `var(--border)` — Border color

### Spacing
- `p-4` — 16px padding
- `gap-3` — 12px gap between icon and content
- `var(--spacing-1)` — 4px title margin bottom

### Border Radius
- `var(--radius)` — 4px standard radius

---

## 📚 Related Components

- **Badge** — Status indicators and labels
- **Toast** — Temporary notifications
- **Dialog** — Modal confirmations
- **Banner** — Full-width announcements

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-09 | Initial creation with 5 variants and dismissible support |

---

## 📝 Notes

### Best Practices

1. **Use Appropriate Variants:**
   - `success` for positive feedback
   - `warning` for cautionary messages
   - `destructive` for errors
   - `info` for helpful information
   - `default` for neutral messages

2. **Keep Messages Concise:**
   - Use clear, actionable language
   - Avoid jargon and technical terms
   - Include next steps when appropriate

3. **Use Icons Wisely:**
   - Icons reinforce message type
   - Don't rely on icons alone
   - Keep icons consistent across variants

4. **Make Important Alerts Visible:**
   - Place alerts near relevant content
   - Use appropriate variants for urgency
   - Don't overuse dismissible alerts

### Common Patterns

```tsx
// Form submission feedback
<Alert variant="success" dismissible onDismiss={clearAlert}>
  Your form has been submitted successfully.
</Alert>

// Error with action
<Alert variant="destructive" title="Error">
  Failed to save changes. 
  <button onClick={retry}>Retry</button>
</Alert>

// Notification stack
<div className="fixed top-4 right-4 flex flex-col gap-2 max-w-md">
  <Alert variant="success" dismissible>Notification 1</Alert>
  <Alert variant="info" dismissible>Notification 2</Alert>
</div>
```

---

**Created:** 2025-01-09  
**Last Updated:** 2025-01-09  
**Status:** ✅ Production Ready  
**Maintained By:** LSX Design Team

**See Also:**
- [Design System Usage Guide](/guidelines/design-system/design-system-usage-guide.md)
- [Component Guidelines](/guidelines/overview-components.md)
- [WordPress Blocks System](/guidelines/blocks/overview-blocks.md)
- [Badge Component](/guidelines/components/Badge.md)
