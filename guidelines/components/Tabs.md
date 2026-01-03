# Tabs Component

**Component Type:** Navigation  
**WordPress Equivalent:** Tabs Pattern (Custom)  
**Category:** Navigation

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
import { Tabs } from '@/components/blocks';

<Tabs
  tabs={[
    {
      id: 'overview',
      label: 'Overview',
      content: <OverviewSection />,
    },
    {
      id: 'features',
      label: 'Features',
      content: <FeaturesSection />,
    },
    {
      id: 'pricing',
      label: 'Pricing',
      content: <PricingSection />,
    },
  ]}
  defaultTab="overview"
/>
```

### Pills Variant

```tsx
import { PillTabs } from '@/components/blocks';

<PillTabs
  tabs={tabs}
  defaultTab="overview"
/>
```

### Vertical Tabs

```tsx
import { VerticalTabs } from '@/components/blocks';

<VerticalTabs
  tabs={tabs}
  defaultTab="overview"
/>
```

### With URL Sync

```tsx
<Tabs
  tabs={tabs}
  syncWithUrl={true}
  onChange={(tabId) => {
    console.log('Tab changed:', tabId);
  }}
/>
// URL updates to: #overview, #features, etc.
```

### With Badges

```tsx
<Tabs
  tabs={[
    {
      id: 'messages',
      label: 'Messages',
      badge: 5,
      content: <Messages />,
    },
    {
      id: 'notifications',
      label: 'Notifications',
      badge: '12+',
      content: <Notifications />,
    },
  ]}
/>
```

### With Icons

```tsx
<Tabs
  tabs={[
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <DashboardIcon />,
      content: <Dashboard />,
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <ChartIcon />,
      content: <Analytics />,
    },
  ]}
/>
```

### Lazy Loading

```tsx
<Tabs
  tabs={tabs}
  lazy={true}  // Only renders active tab content
/>
```

---

## Props

### Tabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `Tab[]` | Required | Tab items |
| `defaultTab` | `string` | First tab ID | Default active tab |
| `activeTab` | `string` | - | Controlled active tab |
| `onChange` | `(tabId: string) => void` | - | Tab change handler |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab layout |
| `variant` | `'underline' \| 'pills' \| 'enclosed'` | `'underline'` | Visual style |
| `lazy` | `boolean` | `false` | Lazy load tab content |
| `syncWithUrl` | `boolean` | `false` | Sync active tab with URL hash |

### Tab

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique tab ID |
| `label` | `string` | Tab label text |
| `content` | `ReactNode` | Tab panel content |
| `icon` | `ReactNode` | Icon (optional) |
| `disabled` | `boolean` | Disabled state |
| `badge` | `number \| string` | Badge/notification (optional) |

---

## Examples

### Product Details Tabs

```tsx
function ProductDetails({ product }) {
  return (
    <Tabs
      tabs={[
        {
          id: 'description',
          label: 'Description',
          content: <div dangerouslySetInnerHTML={{ __html: product.description }} />,
        },
        {
          id: 'specifications',
          label: 'Specifications',
          content: <SpecificationsTable specs={product.specs} />,
        },
        {
          id: 'reviews',
          label: 'Reviews',
          badge: product.reviewCount,
          content: <ReviewsList productId={product.id} />,
        },
        {
          id: 'shipping',
          label: 'Shipping',
          content: <ShippingInfo />,
        },
      ]}
      variant="underline"
    />
  );
}
```

### Settings Page

```tsx
function SettingsPage() {
  return (
    <div className="settings-layout">
      <VerticalTabs
        tabs={[
          {
            id: 'profile',
            label: 'Profile',
            icon: <UserIcon />,
            content: <ProfileSettings />,
          },
          {
            id: 'account',
            label: 'Account',
            icon: <CogIcon />,
            content: <AccountSettings />,
          },
          {
            id: 'notifications',
            label: 'Notifications',
            icon: <BellIcon />,
            badge: 3,
            content: <NotificationSettings />,
          },
          {
            id: 'security',
            label: 'Security',
            icon: <ShieldIcon />,
            content: <SecuritySettings />,
          },
        ]}
        syncWithUrl
      />
    </div>
  );
}
```

### Documentation Tabs

```tsx
function DocsPage() {
  return (
    <Tabs
      tabs={[
        {
          id: 'overview',
          label: 'Overview',
          content: <DocsOverview />,
        },
        {
          id: 'api',
          label: 'API Reference',
          content: <APIReference />,
        },
        {
          id: 'examples',
          label: 'Examples',
          content: <CodeExamples />,
        },
        {
          id: 'changelog',
          label: 'Changelog',
          content: <Changelog />,
        },
      ]}
      variant="pills"
      lazy={true}
      syncWithUrl
    />
  );
}
```

---

## Variants

### Underline (Default)

Clean minimal style with bottom border indicator.

**Use Cases:**
- Content pages
- Product details
- Documentation

**Visual:**
```
Overview  Features  Pricing
―――――――
```

### Pills

Rounded button-style tabs with background color.

**Use Cases:**
- Dashboards
- Settings pages
- Modern interfaces

**Visual:**
```
[Overview] [Features] [Pricing]
```

### Enclosed

Card-style tabs with borders.

**Use Cases:**
- Traditional interfaces
- Data tables
- Reports

**Visual:**
```
┌─Overview─┬─Features─┬─Pricing─┐
│                                │
```

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

### ARIA Attributes

```html
<div role="tablist" aria-orientation="horizontal">
  <button
    role="tab"
    aria-selected="true"
    aria-controls="panel-overview"
    id="tab-overview"
    tabindex="0"
  >
    Overview
  </button>
</div>

<div
  role="tabpanel"
  aria-labelledby="tab-overview"
  id="panel-overview"
>
  Content
</div>
```

---

## WordPress Mapping

### Custom Implementation

```php
<?php
// Create tabs block pattern
function register_tabs_pattern() {
  register_block_pattern(
    'lsx/tabs',
    array(
      'title' => __('Tabs', 'lsx'),
      'content' => '<!-- wp:group --><!-- /wp:group -->',
    )
  );
}
add_action('init', 'register_tabs_pattern');
?>
```

### Using ACF (Advanced Custom Fields)

```php
<?php
// Render tabs from ACF repeater
$tabs = get_field('tabs');
if ($tabs) {
  echo '<div class="tabs-wrapper">';
  echo '<div class="tab-list">';
  foreach ($tabs as $index => $tab) {
    $active = $index === 0 ? 'active' : '';
    echo sprintf(
      '<button class="tab-button %s" data-tab="%s">%s</button>',
      $active,
      $index,
      esc_html($tab['label'])
    );
  }
  echo '</div>';
  
  echo '<div class="tab-panels">';
  foreach ($tabs as $index => $tab) {
    $active = $index === 0 ? 'active' : '';
    echo sprintf(
      '<div class="tab-panel %s" data-panel="%s">%s</div>',
      $active,
      $index,
      wp_kses_post($tab['content'])
    );
  }
  echo '</div>';
  echo '</div>';
}
?>
```

---

## Best Practices

### DO ✅

- ✅ **Limit to 5-7 tabs:** Avoid overwhelming users
- ✅ **Short labels:** 1-2 words maximum
- ✅ **Related content:** Group similar information
- ✅ **Default tab:** Show most important content first
- ✅ **Sync with URL:** For shareable links
- ✅ **Use lazy loading:** For heavy content

### DON'T ❌

- ❌ **Don't hide critical info:** Important content should be visible
- ❌ **Don't use for navigation:** Use for content organization only
- ❌ **Don't nest tabs:** Confusing for users
- ❌ **Don't disable tabs:** Remove instead
- ❌ **Don't use too many:** Consider accordion instead

---

## Performance

### Lazy Loading

```tsx
<Tabs
  tabs={tabs}
  lazy={true}  // Only renders active tab
/>
```

**Benefits:**
- Faster initial render
- Lower memory usage
- Better performance with heavy content

### Code Splitting

```tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Tabs
  tabs={[
    {
      id: 'heavy',
      label: 'Heavy Content',
      content: (
        <Suspense fallback={<Skeleton />}>
          <HeavyComponent />
        </Suspense>
      ),
    },
  ]}
  lazy
/>
```

---

## Related Components

- **[Accordion](./Accordion.md)** - Expandable sections
- **[Breadcrumbs](./Breadcrumbs.md)** - Hierarchical navigation
- **[Pagination](./Pagination.md)** - Page navigation

---

## File Location

```
/src/app/components/blocks/navigation/Tabs.tsx
```

---

**Last Updated:** December 30, 2024  
**Component Version:** 1.0.0  
**Design System:** LSX Design
