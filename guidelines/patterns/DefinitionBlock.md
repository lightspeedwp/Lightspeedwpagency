# DefinitionBlock Pattern

**WordPress Pattern:** `lsx-design/content/definition-block`  
**Component:** `/src/app/components/patterns/DefinitionBlock.tsx`  
**CSS:** `/src/styles/patterns/definition-block.css`  
**Category:** Content Patterns  
**Created:** February 27, 2026

---

## Overview

The **DefinitionBlock** pattern provides a structured "What / Why / How / Proof" framework for explaining complex concepts on Systems pages. It creates a consistent editorial structure that helps users understand technical systems through a proven pedagogical pattern.

### Purpose

- Define technical concepts systematically
- Explain business value and implementation
- Provide evidence and validation
- Maintain consistent structure across Systems hub

### When to Use

- ✅ Systems pillar pages (Design Tokens, Pattern Governance, etc.)
- ✅ Technical concept explanations
- ✅ Service methodology descriptions
- ✅ Process framework documentation

### When NOT to Use

- ❌ Marketing content (use Hero or CTASection instead)
- ❌ Blog posts (use editorial content blocks)
- ❌ Case studies (use CaseStudyAnatomy pattern)
- ❌ FAQs (use FAQSection pattern)

---

## Structure

### Four Required Sections

1. **What** — Definition and core concept
2. **Why** — Business value and importance
3. **How** — Implementation approach
4. **Proof** — Evidence and validation

Each section can include:
- Paragraph content (supports HTML)
- Optional bulleted list
- Strong/emphasis formatting

---

## Component API

### Props

```typescript
interface DefinitionBlockProps {
  /** System name or topic */
  title: string;
  
  /** Optional tagline or subtitle */
  tagline?: string;
  
  /** Four definition sections (What/Why/How/Proof) */
  sections: [DefinitionSection, DefinitionSection, DefinitionSection, DefinitionSection];
  
  /** Optional additional CSS classes */
  className?: string;
}

interface DefinitionSection {
  /** Section heading (What/Why/How/Proof) */
  heading: string;
  
  /** Section content (can include HTML) */
  content: string;
  
  /** Optional list of bullet points */
  items?: string[];
}
```

### Example Usage

```tsx
import { DefinitionBlock } from '@/components/patterns/DefinitionBlock';

<DefinitionBlock
  title="Design Tokens"
  tagline="The foundation of consistent, scalable design systems"
  sections={[
    {
      heading: 'What',
      content: 'Design tokens are named entities that store visual design attributes. They replace hardcoded values with semantic references like <code>--primary</code> or <code>--spacing-6</code>.',
      items: [
        'Colors → <code>--primary</code>, <code>--foreground</code>',
        'Spacing → <code>--spacing-4</code>, <code>--spacing-8</code>',
        'Typography → <code>--font-primary</code>, <code>--text-h1</code>'
      ]
    },
    {
      heading: 'Why',
      content: 'Design tokens enable <strong>centralized control</strong> of your entire design system. Change a single CSS variable and update hundreds of components instantly.',
      items: [
        'Update site-wide fonts in 30 seconds (vs. 60 minutes)',
        'Maintain visual consistency across 100+ templates',
        'Ensure WCAG color contrast automatically',
        'Support dark mode with zero component changes'
      ]
    },
    {
      heading: 'How',
      content: 'We implement tokens as CSS custom properties in <code>theme.json</code> and enforce their use through component architecture.',
      items: [
        'Audit existing design for inconsistencies',
        'Define token scales (spacing, typography, colors)',
        'Migrate components to use token references',
        'Document token usage in style guide',
        'Set up governance to prevent hardcoded values'
      ]
    },
    {
      heading: 'Proof',
      content: 'LSX Design enforces 100% token compliance across all 90+ templates. Our design system supports unlimited themes with zero code changes.',
      items: [
        '99.9% CSS variable compliance (verified by automated audit)',
        '30-second global font changes (tested)',
        'Zero hardcoded hex colors in 45,000+ lines of CSS',
        'Dark mode support with 47 semantic color tokens'
      ]
    }
  ]}
/>
```

---

## Layout Behavior

### Responsive Grid

- **Mobile (< 768px):** Single column, vertical stack
- **Tablet (≥ 768px):** 2-column grid
- **Desktop (≥ 1024px):** 2-column grid with larger gaps

### Spacing

- **Container padding:** Fluid horizontal padding (16px → 32px)
- **Section gap:** `--spacing-12` (mobile), `--spacing-16` (tablet), `--spacing-20` (desktop)
- **Internal padding:** `--spacing-8` per section card

---

## Design System Compliance

### Typography

```tsx
// Title
fontFamily: 'var(--font-primary)'    // Lexend
fontSize: 'var(--text-h2)'           // 28px → 48px
fontWeight: 'var(--font-weight-semibold)'

// Tagline
fontFamily: 'var(--font-secondary)'  // Manrope
fontSize: 'var(--text-lg)'           // 18px → 22px

// Section Heading
fontFamily: 'var(--font-primary)'    // Lexend
fontSize: 'var(--text-h4)'           // 20px → 28px
fontWeight: 'var(--font-weight-semibold)'

// Section Content & Items
fontFamily: 'var(--font-secondary)'  // Manrope
fontSize: 'var(--text-base)'         // 15px → 18px
```

### Colors

```css
/* Section cards */
background: var(--background)
border: 1px solid var(--border)

/* Section headings */
color: var(--primary)

/* Content text */
color: var(--foreground)

/* Accent gradient (hover) */
background: linear-gradient(90deg, var(--primary), var(--accent))
```

### Spacing

All spacing uses `var(--spacing-*)` tokens:

```css
padding: var(--spacing-8)
gap: var(--spacing-12)
margin-bottom: var(--spacing-4)
```

### Borders & Radius

```css
border: 1px solid var(--border)
border-radius: var(--radius-lg)
```

---

## Funky Neon Features

### Gradient Accent Bar

Each section card has a hidden gradient accent bar that appears on hover:

```css
/* Top accent bar (hidden by default) */
background: linear-gradient(90deg, var(--primary), var(--accent))
opacity: 0;

/* Visible on hover */
:hover → opacity: 1;
```

### Decorative Bullets

- Section headings: Circular dot bullet (`border-radius: 50%`)
- List items: Checkmark bullet (`✓`)

### Hover Effects

- Border color change: `var(--border)` → `var(--primary)`
- Gradient accent bar fade-in
- Smooth transitions (disabled for `prefers-reduced-motion`)

---

## Accessibility

### Semantic HTML

```html
<div class="definition-block">
  <header class="definition-block__header">
    <h2>System Title</h2>
    <p>Tagline</p>
  </header>
  
  <div class="definition-block__sections">
    <section aria-labelledby="definition-section-0">
      <h3 id="definition-section-0">What</h3>
      <div>Content</div>
      <ul>List items</ul>
    </section>
    <!-- More sections -->
  </div>
</div>
```

### ARIA

- Each section has `aria-labelledby` pointing to its heading
- Headings have unique IDs for reference
- Semantic `<section>` elements for each definition block

### Keyboard Navigation

- Focus visible on keyboard navigation (2px outline)
- `:focus-within` on section cards
- All interactive elements reachable via Tab

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .definition-block__section,
  .definition-block__section::before {
    transition: none;
  }
}
```

---

## WordPress Implementation

### Block Pattern Registration

```php
// patterns/definition-block.php
register_block_pattern(
  'lsx-design/definition-block',
  array(
    'title'       => __('Definition Block', 'lsx-design'),
    'description' => __('What/Why/How/Proof structured content', 'lsx-design'),
    'categories'  => array('lsx-content'),
    'content'     => '<!-- wp:group {"className":"definition-block"} -->
      <!-- Section structure here -->
    <!-- /wp:group -->',
  )
);
```

### theme.json Integration

```json
{
  "patterns": {
    "definition-block": {
      "title": "Definition Block",
      "categories": ["content"],
      "blockTypes": ["core/group"]
    }
  }
}
```

### Constrained Editing

In WordPress, lock the pattern structure to prevent editors from breaking the What/Why/How/Proof framework:

```json
{
  "lock": {
    "move": true,
    "remove": true
  },
  "templateLock": "contentOnly"
}
```

---

## Content Guidelines

### Writing Tips

**What Section:**
- Define the concept clearly and concisely
- Use analogies for complex topics
- Include 2-3 key characteristics as bullets

**Why Section:**
- Lead with business value, not technical details
- Use specific metrics ("60% faster" not "faster")
- Focus on outcomes, not features

**How Section:**
- Provide a clear implementation process
- Use numbered steps or phases
- Include concrete deliverables

**Proof Section:**
- Use real data and metrics
- Reference case studies or audits
- Include testimonials or authority endorsements

### Content Length

- **Title:** 2-5 words
- **Tagline:** 8-15 words
- **Section content:** 40-80 words
- **Bullet items:** 3-5 items per section

### Tone

- Clear and educational (not promotional)
- Technical but accessible
- Evidence-based (avoid vague claims)
- Active voice preferred

---

## Examples

### Example 1: Design Tokens (Technical System)

```tsx
<DefinitionBlock
  title="Design Tokens"
  tagline="The foundation of consistent, scalable design systems"
  sections={[
    {
      heading: 'What',
      content: 'Design tokens are named entities that store visual design attributes.',
      items: ['Colors', 'Spacing', 'Typography', 'Borders']
    },
    {
      heading: 'Why',
      content: 'Centralized control enables instant site-wide updates.',
      items: ['30-second font changes', 'Automatic contrast compliance']
    },
    {
      heading: 'How',
      content: 'We implement tokens as CSS custom properties in theme.json.',
      items: ['Audit design', 'Define token scales', 'Migrate components']
    },
    {
      heading: 'Proof',
      content: '99.9% token compliance across 90+ templates.',
      items: ['Zero hardcoded colors', 'Dark mode with zero code changes']
    }
  ]}
/>
```

### Example 2: Editorial Workflows (Process System)

```tsx
<DefinitionBlock
  title="Editorial Workflows"
  tagline="Content quality at scale through systematic publishing governance"
  sections={[
    {
      heading: 'What',
      content: 'Repeatable processes for planning, creating, and publishing content.',
      items: ['Content calendars', 'Review stages', 'Quality checklists']
    },
    {
      heading: 'Why',
      content: 'Prevent bottlenecks, maintain quality, and scale output.',
      items: ['3x faster publishing', 'Zero broken links', 'Consistent voice']
    },
    {
      heading: 'How',
      content: 'We map your current process, identify gaps, and implement tools.',
      items: ['Process audit', 'Role definition', 'Tool integration']
    },
    {
      heading: 'Proof',
      content: 'Our clients publish 200+ pages/year with zero quality incidents.',
      items: ['100% on-time delivery', 'Zero SEO regressions']
    }
  ]}
/>
```

---

## Related Patterns

- **[FAQSection](./FAQSection.md)** — Question/answer accordion (use for FAQs, not definitions)
- **[Hero](./Hero.md)** — Page introduction (use above DefinitionBlock)
- **[ProofStrip](./ProofStrip.md)** — Metric display (use in Proof sections)
- **[CTASection](./CTASection.md)** — Call-to-action (use after DefinitionBlock)

---

## Testing Checklist

- [ ] All four sections render correctly
- [ ] Title and tagline display (when provided)
- [ ] Bulleted items render with checkmarks
- [ ] HTML content renders (strong, em, code tags)
- [ ] Responsive grid: 1 column (mobile) → 2 columns (tablet/desktop)
- [ ] Hover effects work (gradient accent, border color)
- [ ] `prefers-reduced-motion` disables transitions
- [ ] Keyboard navigation works (Tab key)
- [ ] Focus visible on keyboard focus
- [ ] ARIA labels present and correct
- [ ] Dark mode colors correct
- [ ] Typography uses ONLY `var(--font-primary)` and `var(--font-secondary)`
- [ ] Colors use ONLY CSS variables (no hex codes)
- [ ] Spacing uses ONLY `var(--spacing-*)` tokens

---

## Changelog

### 2026-02-27 — Initial Creation
- Created DefinitionBlock pattern component
- Created BEM CSS file with responsive grid
- Added Funky neon gradient accent hover effect
- Full accessibility compliance (WCAG 2.1 AA)
- Complete design system integration (fonts, colors, spacing via CSS variables)
- Documentation created

---

**Last Updated:** February 27, 2026  
**Status:** ✅ Ready for Production  
**Component:** `/src/app/components/patterns/DefinitionBlock.tsx`  
**CSS:** `/src/styles/patterns/definition-block.css`  
**Phase 1 Task:** 1.7
