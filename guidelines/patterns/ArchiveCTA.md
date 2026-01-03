# Archive CTA Pattern

**Pattern Slug:** `lsx-design/content/archive-cta`  
**Category:** Content  
**Status:** ✅ Production Ready

---

## Overview

The Archive CTA pattern provides a consistent call-to-action at the end of archive pages to drive conversions. It includes a title, description, primary button, and enquiry modal for lead generation.

---

## WordPress Block Structure

```
Group Block (core/group) - sectionStyle="cta-primary"
├── Heading Block (core/heading - H2)
├── Paragraph Block (core/paragraph)
└── Button Block (core/button)
    └── Opens EnquiryModal component
```

---

## Design System Compliance

### Typography
```css
/* Title */
font-family: 'Lexend, sans-serif'
font-size: var(--text-h2)
font-weight: var(--font-weight-medium)
line-height: var(--line-height-snug)
color: var(--foreground)

/* Description */
font-family: 'Lexend, sans-serif'
font-size: var(--text-lg)
font-weight: var(--font-weight-regular)
line-height: var(--line-height-relaxed)
color: var(--muted-foreground)
```

### Colors
```css
/* Uses sectionStyle="cta-primary" which provides: */
background: var(--primary)
color: var(--primary-foreground)

/* Button uses buttonVariant prop: */
'primary' | 'secondary' | 'outline' | 'cta'
```

### Spacing
```css
/* Section spacing handled by Section component */
spacing: 'lg'        /* py-16 (64px) */
padding: '0 1rem'    /* Container padding */
```

---

## Usage

### Import
```tsx
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { blogArchiveCTA } from '../../data/cta';
```

### Implementation
```tsx
<ArchiveCTA ctaData={blogArchiveCTA} />
```

---

## CTA Data Structure

```typescript
interface CTAData {
  title: string;              // CTA heading
  description: string;        // Supporting text
  buttonText: string;         // Button label
  buttonVariant?: ButtonVariant;  // Button style
  modalTitle: string;         // Modal heading
  modalDescription: string;   // Modal subheading
}
```

---

## Available CTAs

### General Archive
```tsx
import { generalArchiveCTA } from '../../data/cta';
```
- **Title:** "Ready to Transform Your WordPress Site?"
- **Button:** "Start Your Project"
- **Usage:** Archive pages, search results

### Blog Archive
```tsx
import { blogArchiveCTA } from '../../data/cta';
```
- **Title:** "Want Expert WordPress Guidance?"
- **Button:** "Get Free Consultation"
- **Usage:** Blog index, category, tag, date archives

### Portfolio Archive
```tsx
import { portfolioArchiveCTA } from '../../data/cta';
```
- **Title:** "Like What You See?"
- **Button:** "Discuss Your Project"
- **Button Variant:** `cta` (highlighted style)
- **Usage:** Portfolio archives

### Services Archive
```tsx
import { servicesArchiveCTA } from '../../data/cta';
```
- **Title:** "Ready to Elevate Your WordPress Experience?"
- **Button:** "Get Started Today"
- **Usage:** Services pages

### Team Archive
```tsx
import { teamArchiveCTA } from '../../data/cta';
```
- **Title:** "Work With Our Expert Team"
- **Button:** "Meet the Team"
- **Usage:** Author archives, team pages

### Product Archive
```tsx
import { productArchiveCTA } from '../../data/cta';
```
- **Title:** "Find the Perfect Solution"
- **Button:** "Explore Products"
- **Usage:** WooCommerce archives

---

## Enquiry Modal

The ArchiveCTA pattern triggers an `EnquiryModal` component when the button is clicked.

### Modal Features:
- **5-field contact form** (Name*, Email*, Company, Phone, Message*)
- **Focus trap** for keyboard navigation
- **Escape key** to close
- **Click outside** to close
- **WCAG 2.1 AA** compliant
- **Form validation** (required fields)
- **Success state** with confirmation message

### Modal Structure:
```
Modal Container
├── Modal Backdrop (click to close)
└── Modal Content
    ├── Close Button (top-right)
    ├── Modal Header
    │   ├── Icon (Sparkles)
    │   ├── Title
    │   └── Description
    ├── Form
    │   ├── Name Input (required)
    │   ├── Email Input (required)
    │   ├── Company Input
    │   ├── Phone Input
    │   └── Message Textarea (required)
    └── Submit Button
```

---

## Pattern Placement

### Recommended Location:
```tsx
<main id="main-content" role="main">
  {/* Archive Header */}
  <ArchiveHeader />
  
  {/* Filter Bar (optional) */}
  <FilterBar />
  
  {/* Card Grid */}
  <CardGrid />
  
  {/* Pagination */}
  <PaginationNav />
  
  {/* Pattern: Archive CTA */}
  <ArchiveCTA ctaData={...} />
  
  {/* FAQ Section (optional) */}
  <FAQSection />
</main>
```

---

## Accessibility

### WCAG 2.1 AA Compliance:
- ✅ **Semantic HTML** (proper heading levels)
- ✅ **Keyboard navigation** (Tab, Enter, Escape)
- ✅ **Focus trap** in modal
- ✅ **ARIA labels** on buttons and form fields
- ✅ **Color contrast** meets AA standards
- ✅ **Touch targets** 44×44px minimum

### Keyboard Controls:
- **Tab** — Navigate form fields
- **Escape** — Close modal
- **Enter** — Submit form (when focused on button)

---

## WordPress FSE Mapping

### Theme Files:
```
templates/
  archive.html
  category.html
  tag.html
  author.html
  date.html
  search.html

patterns/
  archive-cta.php
  
parts/
  enquiry-modal.html (if needed as template part)
```

---

## Related Documentation

- **[EnquiryModal.md](../components/EnquiryModal.md)** — Modal component details
- **[Section Styles](../sections/overview-sections.md)** — `sectionStyle="cta-primary"`
- **[Button Component](../blocks/Buttons.md)** — Button variants
- **[CTA Data](../../data/cta.ts)** — All CTA variants

---

**Last Updated:** December 27, 2024  
**Component File:** `/src/app/components/patterns/ArchiveCTA.tsx`  
**Data File:** `/src/app/data/cta.ts`
