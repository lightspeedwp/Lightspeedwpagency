# Services Card Pattern

**Pattern Slug:** `lsx-design/content/services-card`  
**Category:** Content  
**Status:** ✅ Production Ready

---

## Overview

The Services Card pattern displays service offerings in a card format with icon, title, description, features list, and call-to-action link. Designed for services pages and homepage features sections.

---

## WordPress Block Structure

```
Group Block (core/group) - Article card container
├── Icon Block (custom or image block)
│   └── Lucide React icon (56×56px)
├── Heading Block (core/heading - H3)
│   └── Service title
├── Paragraph Block (core/paragraph)
│   └── Service description
├── List Block (core/list)
│   └── 5 List Items (core/list-item)
│       └── Checkmark icon + feature text
└── Button Block (core/button - link style)
    └── Text link with arrow icon
```

---

## Design System Compliance

### Typography
```css
/* Title */
font-family: 'Lexend, sans-serif'
font-size: var(--text-h3)
font-weight: var(--font-weight-medium)
line-height: var(--line-height-snug)
letter-spacing: var(--letter-spacing-tight)
color: var(--foreground)

/* Description */
font-family: 'Lexend, sans-serif'
font-size: var(--text-base)
font-weight: var(--font-weight-regular)
line-height: var(--line-height-relaxed)
color: var(--muted-foreground)

/* Features List */
font-family: 'Lexend, sans-serif'
font-size: var(--text-base)
font-weight: var(--font-weight-regular)
line-height: var(--line-height-relaxed)
color: var(--foreground)

/* Link Button */
font-family: 'Lexend, sans-serif'
font-size: var(--text-base)
font-weight: var(--font-weight-semibold)
color: var(--primary)

/* Featured Badge */
font-family: 'Lexend, sans-serif'
font-size: var(--text-small)
font-weight: var(--font-weight-semibold)
text-transform: uppercase
letter-spacing: 0.05em
```

### Colors
```css
/* Card */
background-color: var(--card)
border: 1px solid var(--border-soft)
border-radius: var(--radius-xl)
box-shadow: var(--shadow-md)

/* Card Hover */
border-color: var(--primary)
box-shadow: var(--shadow-xl)
transform: translateY(-8px)

/* Icon Container */
background-color: var(--primary)
color: var(--primary-foreground)
border-radius: var(--radius-lg)

/* Featured Badge */
background-color: var(--primary)
color: var(--primary-foreground)
border-radius: var(--radius)

/* Checkmark Icons */
fill: var(--primary) (10% opacity)
stroke: var(--primary)
```

### Spacing
```css
/* Card */
padding: 2rem
gap: 1.5rem

/* List Items */
gap: 0.75rem

/* Icon Container */
width: 56px
height: 56px

/* Badge */
padding: 0.375rem 0.75rem
```

---

## Service Data Structure

```typescript
interface Service {
  id: string;              // Unique identifier
  slug: string;            // URL-friendly slug
  icon: LucideIcon;        // Lucide React icon component
  title: string;           // Service name
  description: string;     // Service description (1-2 sentences)
  features: string[];      // List of 5 key features
  link: {
    text: string;          // CTA button text
    page: string;          // Target page slug for navigation
  };
  category?: string;       // Service category
  featured?: boolean;      // Featured/popular flag
}
```

---

## Usage

### Single Card
```tsx
import { ServicesCard } from '../patterns/ServicesCard';
import { wordpressServices } from '../../data/services';

<ServicesCard service={wordpressServices[0]} />
```

### Grid Layout (3 columns)
```tsx
import { ServicesCardGrid } from '../patterns/ServicesCard';
import { allServices } from '../../data/services';

<ServicesCardGrid 
  services={allServices}
  columns={{ mobile: 1, tablet: 2, desktop: 3 }}
/>
```

### Featured Only (4 columns)
```tsx
import { featuredServices } from '../../data/services';

<ServicesCardGrid 
  services={featuredServices}
  columns={{ mobile: 1, tablet: 2, desktop: 4 }}
/>
```

### Filtered by Category
```tsx
import { getServicesByCategory } from '../../data/services';

const devServices = getServicesByCategory('Development');
<ServicesCardGrid services={devServices} />
```

---

## Service Categories

### WordPress Development
- Custom Theme Development ⭐
- Design System Implementation ⭐
- Custom Block Development

### Performance & Optimization
- Performance Optimization ⭐
- Security & Hardening
- Workflow Automation

### Marketing & E-commerce
- SEO Optimization ⭐
- WooCommerce Development
- Mobile Optimization

### Additional Services
- Multilingual Sites
- Content Strategy
- Maintenance & Support

---

## Interactive Features

### Hover Animations
- **Card Lift:** Translates up 8px on hover
- **Shadow Depth:** Increases to `--shadow-xl`
- **Border Highlight:** Changes to primary color
- **Icon Scale:** Scales to 110%
- **Arrow Movement:** Slides 4px to the right

### Featured Badge
- Displays "POPULAR" label for featured services
- Primary background color
- Absolute positioned top-right
- Uppercase text with letter spacing

### Checkmark Icons
- Custom SVG with circle background
- Primary color with 10% opacity fill
- Consistent 20×20px sizing
- Aligned with list text

### Text Link Button
- Arrow icon animation on hover
- Gap increases from 0.5rem to 0.75rem
- Primary color
- Semibold weight for emphasis

---

## Accessibility

### WCAG 2.1 AA Compliance:
- ✅ **Semantic HTML** (`<article>`, `<h3>`, `<p>`, `<ul>`, `<li>`)
- ✅ **Proper heading hierarchy** (H3 for card titles)
- ✅ **ARIA labels** on buttons ("Learn more about [Service Name]")
- ✅ **Color contrast** meets AA standards
- ✅ **Keyboard navigation** (Tab, Enter)
- ✅ **Focus states** visible (design system handles)

### Screen Readers:
- Role attributes on grid (`role="list"`, `role="listitem"`)
- Descriptive button labels
- Proper link semantics

---

## Grid Configuration

### Responsive Columns
```tsx
<ServicesCardGrid
  services={services}
  columns={{
    mobile: 1,    // 1 column on mobile
    tablet: 2,    // 2 columns on tablet
    desktop: 3    // 3 columns on desktop (or 2/4)
  }}
/>
```

### Available Layouts:
- **1 column:** Single column layout (mobile)
- **2 columns:** Tablet and desktop option
- **3 columns:** Standard desktop grid
- **4 columns:** Featured services showcase

---

## WordPress FSE Mapping

### Theme Files:
```
templates/
  page-services.html
  front-page.html

patterns/
  services-card.php
  services-card-grid.php

blocks/
  custom-service-card/ (if needed)
```

### Pattern Registration:
```php
register_block_pattern(
  'lsx-design/content/services-card',
  array(
    'title'       => __( 'Services Card', 'lsx-design' ),
    'categories'  => array( 'content' ),
    'description' => __( 'Display service offering with icon, features, and CTA', 'lsx-design' ),
  )
);
```

---

## Helper Functions

### Get Service by Slug
```tsx
import { getServiceBySlug } from '../../data/services';

const service = getServiceBySlug('custom-theme-development');
```

### Get Services by Category
```tsx
import { getServicesByCategory } from '../../data/services';

const devServices = getServicesByCategory('Development');
const marketingServices = getServicesByCategory('Marketing');
```

### Available Categories:
```typescript
[
  'Development',
  'Design',
  'Optimization',
  'Security',
  'Automation',
  'Marketing',
  'E-commerce',
  'Internationalization',
  'Strategy',
  'Support'
]
```

---

## Related Documentation

- **[Services Template](../templates/ServicesTemplate.md)** — Full services page
- **[Services Data](../../data/services.ts)** — All service offerings
- **[Icon System](../overview-icons.md)** — Lucide React icons
- **[Button Component](../blocks/Buttons.md)** — Text link style

---

**Last Updated:** December 27, 2024  
**Component File:** `/src/app/components/patterns/ServicesCard.tsx`  
**Data File:** `/src/app/data/services.ts`
