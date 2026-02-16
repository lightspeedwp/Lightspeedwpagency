# Tabs Component

**Component Type:** Navigation  
**WordPress Equivalent:** Tabs Pattern (Custom)  
**Category:** Design

---

## Overview

The Tabs component provides a tabbed interface for organizing content into separate views with keyboard navigation and accessibility support.

**Features:**
- Keyboard navigation (Arrow keys, Home, End)
- Active tab indicator with animation
- Lazy loading support
- URL hash sync
- 3 variants (underline, pills, enclosed)
- Vertical and horizontal layouts
- Badge/notification support
- WCAG 2.1 AA compliant

---

## Usage

### Basic Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/blocks/design/Tabs';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="features">Features</TabsTrigger>
    <TabsTrigger value="pricing">Pricing</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview Content</TabsContent>
  <TabsContent value="features">Features Content</TabsContent>
  <TabsContent value="pricing">Pricing Content</TabsContent>
</Tabs>
```

### Pills Variant

```tsx
// Use CSS classes or variants in your implementation
// .is-style-pills
```

### Vertical Tabs

```tsx
// Use CSS classes or variants in your implementation
// .is-vertical
```

---

## Props

### Tabs

Radix UI Tabs Root props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | - | Default active tab |
| `value` | `string` | - | Controlled active tab |
| `onValueChange` | `(value: string) => void` | - | Tab change handler |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab layout |

---

## Design System

### Typography

- **Labels:** Lexend (UI font)
- **Font Size:** `var(--text-base)`
- **Active Tab:** Font weight 500
- **Inactive Tab:** Font weight 400

### Colors

- **Active Tab:** `--foreground` text
- **Inactive Tab:** `--muted-foreground` text
- **Background (Pills):** `--accent`
- **Background (Enclosed):** `--card`
- **Border:** `--border`
- **Indicator:** `--primary` (2px)

### Spacing

- **Padding:** 1rem 1.5rem
- **Gap:** 0 (underline), 0.5rem (pills)
- **Min Height:** 48px (WCAG AA)

---

## Accessibility

### WCAG 2.1 Compliance

- ✅ **AA Compliant:** Proper ARIA roles
- ✅ **Keyboard Navigation:** Full support
- ✅ **Focus States:** Visible indicators
- ✅ **Screen Readers:** Proper labels
- ✅ **Touch Targets:** 48×48px minimum

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Arrow Left/Up** | Previous tab |
| **Arrow Right/Down** | Next tab |
| **Home** | First tab |
| **End** | Last tab |
| **Tab** | Move focus out |

---

## Related Components

- **[Accordion](./Accordion.md)** - Expandable sections
- **[Breadcrumbs](../../theme/Breadcrumbs.md)** - Hierarchical navigation
- **[Pagination](../../theme/Pagination.md)** - Page navigation

---

## File Location

```
/src/app/components/blocks/design/Tabs.tsx
```

---

**Last Updated:** December 30, 2024  
**Component Version:** 1.0.0  
**Design System:** LSX Design
