# Alert Component

**WordPress Block:** `lsx-design/alert`  
**Category:** Feedback  
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
import { Alert } from '@/components/blocks/feedback/Alert';

// In your component
<Alert variant="success">Your changes have been saved!</Alert>
```

### With Sub-components

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/blocks/feedback/Alert';

<Alert variant="info">
  <AlertTitle>New Features Available</AlertTitle>
  <AlertDescription>
    We've added new customization options to your dashboard.
  </AlertDescription>
</Alert>
```

---

## 📊 Props

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Alert message content |
| `variant` | `'default' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` | Visual style variant based on message type |
| `title` | `string` | `undefined` | Optional alert title/heading |
| `icon` | `ReactNode` | `undefined` | Optional icon element |
| `className` | `string` | `''` | Additional CSS classes |

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

### Info Variant
Blue alert for informational messages that need attention.

```tsx
<Alert variant="info">Did you know? You can customize your dashboard.</Alert>
```

**Colors:**
- Background: `var(--accent)`
- Text: `var(--accent-foreground)`

### Success Variant
Green alert for positive feedback and successful operations.

```tsx
<Alert variant="success">Your profile has been updated successfully!</Alert>
```

**Colors:**
- Background: `var(--success)`
- Text: `var(--success-foreground)`

### Warning Variant
Yellow alert for cautionary messages that require attention.

```tsx
<Alert variant="warning">This action cannot be undone. Please proceed with caution.</Alert>
```

**Colors:**
- Background: `var(--warning)`
- Text: `var(--warning-foreground)`

### Error Variant
Red alert for errors and destructive actions.

```tsx
<Alert variant="error">Failed to save changes. Please try again.</Alert>
```

**Colors:**
- Background: `var(--destructive)`
- Text: `var(--destructive-foreground)`

---

## 🗂️ WordPress Mapping

### Block Name
`lsx-design/alert`

### Pattern Slug
`lsx-design/feedback/alert`

### CSS Implementation

```css
/* Alert base styles */
.wp-block-alert {
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  border: var(--wp--preset--border-width--1) solid transparent;
  display: flex;
  gap: var(--spacing-3);
  align-items: flex-start;
  margin-bottom: var(--spacing-6);
  font-family: var(--font-secondary);
  font-size: var(--text-base);
  line-height: 1.5;
}

/* See src/styles/blocks/feedback/alert.css for full styles */
```

---

## 🧪 Testing

### Accessibility Testing

```tsx
// Test color contrast
// All variants must meet WCAG 2.1 AA (4.5:1 minimum)
```

---

## 🚀 Design System Tokens Used

### Typography
- `var(--font-primary)` — Lexend font family
- `var(--text-base)` — 16px font size

### Colors
- `var(--muted)` / `var(--muted-foreground)`
- `var(--accent)` / `var(--accent-foreground)`
- `var(--success)` / `var(--success-foreground)`
- `var(--warning)` / `var(--warning-foreground)`
- `var(--destructive)` / `var(--destructive-foreground)`

### Spacing
- `var(--spacing-4)` — Padding
- `var(--spacing-3)` — Gap

---

## 📚 Related Components

- **Badge** — Status indicators and labels
- **Toast** — Temporary notifications

---

**File Location:** `/src/app/components/blocks/feedback/Alert.tsx`
