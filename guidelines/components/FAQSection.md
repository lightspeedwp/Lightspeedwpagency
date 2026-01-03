# FAQSection Component

**Component Type:** Pattern  
**WordPress Pattern:** `lsx-design/content/faq`  
**File:** `/src/app/components/patterns/FAQSection.tsx`  
**Last Updated:** December 25, 2024

---

## Overview

The **FAQSection** component displays frequently asked questions with an accordion interaction. Each question can be expanded to reveal its answer, with only one FAQ open at a time.

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | `'Frequently Asked Questions'` | Section heading |
| `description` | `string` | No | `''` | Supporting text |
| `faqs` | `FAQ[]` | Yes | - | Array of FAQ objects |
| `variant` | `'default' \| 'compact'` | No | `'default'` | Visual density |

### FAQ Type

```tsx
type FAQ = {
  question: string;
  answer: string;
};
```

---

## Usage

### Basic Usage

```tsx
import { FAQSection } from './patterns/FAQSection';
import { homepageFAQs } from '../../data/faqs';

<FAQSection
  title="Common Questions"
  description="Quick answers to questions you may have"
  faqs={homepageFAQs}
/>
```

### Compact Variant

```tsx
<FAQSection
  faqs={servicesFAQs}
  variant="compact"
/>
```

### Custom Data

```tsx
<FAQSection
  title="Technical Questions"
  faqs={[
    {
      question: "What is a WordPress block theme?",
      answer: "A block theme is built entirely with blocks..."
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines vary based on complexity..."
    }
  ]}
/>
```

---

## Design System Tokens

### Typography

```tsx
// Title
fontSize: 'var(--text-h2)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-semibold)'
lineHeight: '1.2'
letterSpacing: '-0.02em'

// Question
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-semibold)'

// Answer
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'
```

### Colors

```tsx
backgroundColor: 'var(--background)'
color: 'var(--foreground)'

// FAQ item
backgroundColor: 'var(--card)'
border: '1px solid var(--border-soft)'

// Hover
borderColor: 'var(--primary)'

// Chevron icon
color: 'var(--primary)'
```

### Spacing

```tsx
// Section
className="py-24 px-6"

// FAQ items
className="space-y-4"

// Item padding
padding: '24px'
```

### Border Radius

```tsx
borderRadius: 'var(--radius-xl)'  // FAQ items
```

---

## Features

- ✅ Accordion interaction (expand/collapse)
- ✅ Chevron rotation animation (0° → 180°)
- ✅ Smooth height transition
- ✅ One FAQ open at a time
- ✅ Keyboard accessible (Enter/Space to toggle)
- ✅ Hover effects (border color change)
- ✅ Dark mode compatible
- ✅ Two visual variants (default, compact)
- ✅ Centralized data from `/src/app/data/faqs.ts`

---

## State Management

```tsx
const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};
```

---

## WordPress Mapping

```php
<!-- wp:group -->
<div class="wp-block-group">
  <!-- wp:heading {"level":2} -->
  <h2>Frequently Asked Questions</h2>
  <!-- /wp:heading -->
  
  <!-- wp:details -->
  <details class="wp-block-details">
    <summary>What is a WordPress block theme?</summary>
    <p>A block theme is a WordPress theme...</p>
  </details>
  <!-- /wp:details -->
</div>
<!-- /wp:group -->
```

**WordPress 6.3+ Details Block:**
- Maps to `<details>` and `<summary>` HTML elements
- Native accordion behavior
- Accessible by default

---

## Best Practices

### DO ✅

- Keep questions concise (1 line if possible)
- Provide thorough answers (2-4 sentences)
- Order by importance/frequency
- Limit to 5-8 FAQs per section
- Use natural language

### DON'T ❌

- Exceed 12 FAQs in one section
- Make questions overly technical
- Use answers as sales pitches
- Duplicate content from other pages
- Leave questions unanswered

---

## Accessibility

### Semantic HTML

```tsx
<section>              // Landmark
  <h2>                // Section heading
  <button>            // Question trigger
    <span>            // Question text
    <ChevronDown />   // Visual indicator
  </button>
  <div>               // Answer container
    <p>               // Answer text
```

### ARIA Attributes

```tsx
<button
  aria-expanded={isOpen}
  aria-controls={`faq-answer-${index}`}
>
  {question}
</button>

<div
  id={`faq-answer-${index}`}
  role="region"
  aria-labelledby={`faq-question-${index}`}
>
  {answer}
</div>
```

### Keyboard Navigation

- **Tab:** Navigate between FAQ questions
- **Enter/Space:** Toggle expansion
- **Focus ring:** Visible on button

### Contrast Ratios

- Question text: **9.2:1** (AAA)
- Answer text: **7.8:1** (AAA)
- Chevron icon: **4.8:1** (AA)

---

## Data Sources

### Import FAQs

```tsx
import { 
  homepageFAQs,
  servicesFAQs,
  aboutFAQs,
  contactFAQs,
  teamFAQs,
  portfolioFAQs,
  processFAQs,
  cultureFAQs,
  blogFAQs,
  hostingFAQs
} from '../../data/faqs';
```

### FAQ Collections

- `homepageFAQs` - General company questions
- `servicesFAQs` - Service-specific questions
- `aboutFAQs` - Company background
- `contactFAQs` - Contact process
- `teamFAQs` - Team and hiring
- `portfolioFAQs` - Project questions
- `processFAQs` - Development process
- `cultureFAQs` - Company culture
- `blogFAQs` - Blog and content
- `hostingFAQs` - Hosting services

---

## Related Components

- **[EmptyState](./EmptyState.md)** - Display when no FAQs available
- **[Section](./Section.md)** - Wrapper component
- **[Container](./Container.md)** - Content container

---

## Related Documentation

- **[COMPONENT-API-REFERENCE.md](../blocks/COMPONENT-API-REFERENCE.md)** - Full API docs
- **[overview-patterns.md](../patterns/overview-patterns.md)** - Pattern catalog
- **[MOCK-DATA-SYSTEM.md](../MOCK-DATA-SYSTEM.md)** - Data management

---

**This component uses CSS variables exclusively and follows the LSX Design system guidelines.**
