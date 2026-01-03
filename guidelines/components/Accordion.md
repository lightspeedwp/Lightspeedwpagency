# Accordion Component

**Component Type:** Navigation  
**WordPress Equivalent:** Details Block (Accordion Pattern)  
**Category:** Navigation

---

## Overview

The Accordion component provides expandable/collapsible sections with smooth animations and keyboard navigation.

**Features:**
- Smooth height animation
- Exclusive or multi-open mode
- Keyboard navigation
- Icon rotation animation
- 3 variants (default, filled, separated)
- Disabled items
- Default open states
- WCAG 2.1 AA compliant

---

## Usage

### Basic Accordion

```tsx
import { Accordion } from '@/components/blocks';

<Accordion
  items={[
    {
      id: '1',
      title: 'What is LSX Design?',
      content: <p>LSX Design is a WordPress web design agency...</p>,
    },
    {
      id: '2',
      title: 'How much does it cost?',
      content: <p>Pricing starts at $5,000...</p>,
    },
    {
      id: '3',
      title: 'Do you offer support?',
      content: <p>Yes, we provide 30 days of support...</p>,
    },
  ]}
/>
```

### FAQ Accordion (Exclusive)

```tsx
import { FAQAccordion } from '@/components/blocks';

<FAQAccordion
  items={faqItems}
  // Only one item open at a time
/>
```

### Filled Variant

```tsx
import { FilledAccordion } from '@/components/blocks';

<FilledAccordion
  items={items}
  bordered={true}
/>
```

### Separated Variant

```tsx
import { SeparatedAccordion } from '@/components/blocks';

<SeparatedAccordion
  items={items}
  bordered={true}
/>
```

### With Default Open Items

```tsx
<Accordion
  items={items}
  defaultOpenItems={['1', '3']}  // Open items 1 and 3
/>
```

### Controlled Mode

```tsx
const [openItems, setOpenItems] = useState(['1']);

<Accordion
  items={items}
  openItems={openItems}
  onChange={setOpenItems}
/>
```

---

## Props

### Accordion

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItem[]` | Required | Accordion items |
| `exclusive` | `boolean` | `false` | Only one item open at a time |
| `defaultOpenItems` | `string[]` | `[]` | Default open item IDs |
| `openItems` | `string[]` | - | Controlled open items |
| `onChange` | `(openItems: string[]) => void` | - | Change handler |
| `bordered` | `boolean` | `true` | Show borders |
| `variant` | `'default' \| 'filled' \| 'separated'` | `'default'` | Visual style |

### AccordionItem

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique item ID |
| `title` | `string` | Header text |
| `content` | `ReactNode` | Panel content |
| `disabled` | `boolean` | Disabled state |
| `defaultOpen` | `boolean` | Open by default |
| `icon` | `ReactNode` | Custom icon (replaces chevron) |

---

## Examples

### FAQ Section

```tsx
function FAQSection() {
  const faqs = [
    {
      id: 'what',
      title: 'What services do you offer?',
      content: (
        <div>
          <p>We offer:</p>
          <ul>
            <li>WordPress development</li>
            <li>WooCommerce setup</li>
            <li>Custom themes</li>
            <li>Plugin development</li>
          </ul>
        </div>
      ),
      defaultOpen: true,
    },
    {
      id: 'pricing',
      title: 'How much does it cost?',
      content: <p>Projects start at $5,000...</p>,
    },
    {
      id: 'timeline',
      title: 'What is the timeline?',
      content: <p>Typical projects take 4-8 weeks...</p>,
    },
  ];

  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <FAQAccordion items={faqs} />
    </section>
  );
}
```

### Product Features

```tsx
function ProductFeatures({ features }) {
  return (
    <Accordion
      items={features.map((feature) => ({
        id: feature.id,
        title: feature.title,
        content: (
          <div>
            <p>{feature.description}</p>
            {feature.image && <img src={feature.image} alt={feature.title} />}
          </div>
        ),
      }))}
      variant="separated"
    />
  );
}
```

### Help Center

```tsx
function HelpCenter() {
  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: <GettingStartedArticles />,
    },
    {
      id: 'account',
      title: 'Account Management',
      content: <AccountArticles />,
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      content: <BillingArticles />,
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      content: <TroubleshootingArticles />,
    },
  ];

  return (
    <div className="help-center">
      <h1>Help Center</h1>
      <Accordion
        items={categories}
        variant="filled"
      />
    </div>
  );
}
```

---

## Variants

### Default

Clean, minimal style with dividers.

**Use Cases:**
- FAQs
- Documentation
- Product details

**Visual:**
```
[What is LSX Design?         ▼]
―――――――――――――――――――――――――――
[How much does it cost?      ▼]
―――――――――――――――――――――――――――
```

### Filled

Background color on active items.

**Use Cases:**
- Dashboards
- Settings
- Emphasis

**Visual:**
```
[What is LSX Design?         ▼] (gray background when open)
[How much does it cost?      ▼]
```

### Separated

Cards with gaps between items.

**Use Cases:**
- Modern layouts
- Marketing pages
- Landing pages

**Visual:**
```
┌─What is LSX Design?       ▼─┐
└─────────────────────────────┘

┌─How much does it cost?    ▼─┐
└─────────────────────────────┘
```

---

## Design System

### Typography

- **Headers:** Lexend (UI font), `var(--text-base)`, weight 500
- **Content:** Manrope (body font), `var(--text-base)`, weight 400

### Colors

- **Header Text:** `--foreground`
- **Content Text:** `--foreground`
- **Border:** `--border`
- **Background (Filled):** `--muted` (active), `--card` (inactive)
- **Icon:** `--muted-foreground`

### Spacing

- **Header Padding:** 1.25rem 1.5rem
- **Content Padding:** 0 1.5rem 1.5rem 1.5rem
- **Gap (Separated):** 1rem
- **Min Height:** 48px (WCAG AA)

### Animation

- **Duration:** 300ms
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Icon Rotation:** 180deg when open

---

## Accessibility

### WCAG 2.1 Compliance

- ✅ **AA Compliant:** Proper ARIA roles
- ✅ **Keyboard Navigation:** Full support
- ✅ **Focus States:** Visible indicators
- ✅ **Screen Readers:** Descriptive labels
- ✅ **Touch Targets:** 48×48px minimum

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Arrow Down** | Next item |
| **Arrow Up** | Previous item |
| **Home** | First item |
| **End** | Last item |
| **Enter/Space** | Toggle item |

### ARIA Attributes

```html
<button
  role="button"
  aria-expanded="true"
  aria-controls="panel-1"
  id="header-1"
>
  What is LSX Design?
</button>

<div
  role="region"
  aria-labelledby="header-1"
  id="panel-1"
>
  Content
</div>
```

---

## WordPress Mapping

### Details Block

```html
<!-- wp:details -->
<details>
  <summary>What is LSX Design?</summary>
  <!-- wp:paragraph -->
  <p>LSX Design is...</p>
  <!-- /wp:paragraph -->
</details>
<!-- /wp:details -->
```

### Custom Pattern

```php
<?php
// Register accordion pattern
register_block_pattern(
  'lsx/accordion',
  array(
    'title' => __('Accordion', 'lsx'),
    'content' => '<!-- wp:group {"className":"accordion"} -->
      <!-- wp:details -->
      <details>
        <summary>Item 1</summary>
        <p>Content 1</p>
      </details>
      <!-- /wp:details -->
    <!-- /wp:group -->',
  )
);
?>
```

---

## Best Practices

### DO ✅

- ✅ **Short titles:** 1-2 lines maximum
- ✅ **Related content:** Group similar items
- ✅ **Default open:** Most important item
- ✅ **Exclusive mode for FAQs:** One open at a time
- ✅ **Multi-open for features:** Let users compare
- ✅ **Add search:** For long lists

### DON'T ❌

- ❌ **Don't hide critical info:** Important content should be visible
- ❌ **Don't nest accordions:** Confusing for users
- ❌ **Don't use for navigation:** Use menu instead
- ❌ **Don't disable items:** Remove instead
- ❌ **Don't overuse:** Consider tabs for many items

---

## When to Use

### Use Accordion When:

- ✅ Long page with many sections
- ✅ FAQs or help documentation
- ✅ Product features list
- ✅ Progressive disclosure needed
- ✅ Space is limited

### Use Tabs Instead When:

- ❌ Users need to compare content
- ❌ All content is equally important
- ❌ Frequent switching between sections
- ❌ Content is short

---

## Performance

### Smooth Animations

```tsx
// Height animation
useEffect(() => {
  if (isOpen) {
    const height = contentRef.current.scrollHeight;
    setHeight(height);
    
    // Set to 'auto' after animation
    setTimeout(() => setHeight('auto'), 300);
  } else {
    setHeight(0);
  }
}, [isOpen]);
```

### Content-Heavy Items

```tsx
// Lazy load content
{isOpen && <HeavyContent />}
```

---

## Related Components

- **[Tabs](./Tabs.md)** - Tabbed navigation
- **[Breadcrumbs](./Breadcrumbs.md)** - Hierarchical navigation
- **[DropdownMenu](./DropdownMenu.md)** - Dropdown menus

---

## File Location

```
/src/app/components/blocks/navigation/Accordion.tsx
```

---

**Last Updated:** December 30, 2024  
**Component Version:** 1.0.0  
**Design System:** LSX Design
