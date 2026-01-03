# StatsSection Pattern

## Overview

**Purpose:** Display key metrics and statistics in a visually prominent grid layout  
**Category:** `lsx-design/content/stats-section`  
**WordPress Block:** Group block with Columns or Grid layout  
**Usage:** Homepage, about pages, landing pages, portfolio pages  

**Key Features:**
- 2-4 column responsive grid
- Large numbers with labels
- Optional icons for each stat
- Multiple visual styles (default, highlighted, canvas)
- Customizable spacing
- 100% CSS variables

---

## WordPress FSE Mapping

### Block Pattern
```json
{
  "slug": "lsx-design/content/stats-section",
  "title": "Stats Section",
  "description": "Grid of statistics with numbers and labels",
  "categories": ["content"],
  "blockTypes": ["core/group", "core/columns"],
  "keywords": ["stats", "statistics", "numbers", "metrics"]
}
```

### Template Usage
```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:heading {"level":2,"textAlign":"center"} -->
  <h2 class="has-text-align-center">Our Impact</h2>
  <!-- /wp:heading -->
  
  <!-- wp:columns {"columns":4} -->
  <div class="wp-block-columns">
    <!-- Stat 1 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <div style="text-align:center">
        <p class="has-text-align-center" style="font-size:3rem;font-weight:600;color:var(--primary)">
          250+
        </p>
        <p class="has-text-align-center">
          Projects Completed
        </p>
      </div>
    </div>
    <!-- /wp:column -->
    
    <!-- Repeat for each stat -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->
```

---

## Props / API

```typescript
interface StatsSectionProps {
  /** Array of statistics */
  stats: Statistic[];
  
  /** Optional section title */
  title?: string;
  
  /** Optional section description */
  description?: string;
  
  /** Number of columns (2-4) */
  columns?: 2 | 3 | 4;
  
  /** Section variant */
  variant?: 'default' | 'highlighted' | 'canvas' | 'primary';
  
  /** Section spacing */
  spacing?: SectionSpacing;
  
  /** Show icons with stats */
  showIcons?: boolean;
}

interface Statistic {
  id: string;
  value: string;
  label: string;
  icon?: LucideIcon;
  suffix?: string; // e.g., "+", "%", "K"
}
```

### Default Values
```typescript
{
  columns: 4,
  variant: 'default',
  spacing: '50',
  showIcons: false
}
```

---

## Usage Examples

### Basic Usage
```tsx
import { StatsSection } from '../patterns/StatsSection';
import { Users, Award, Globe, Star } from 'lucide-react';

const stats = [
  { id: '1', value: '250+', label: 'Projects Completed', icon: Award },
  { id: '2', value: '98%', label: 'Client Satisfaction', icon: Star },
  { id: '3', value: '50+', label: 'Team Members', icon: Users },
  { id: '4', value: '15', label: 'Years Experience', icon: Globe },
];

<StatsSection
  stats={stats}
  title="Our Impact"
  columns={4}
/>
```

### With All Props
```tsx
<StatsSection
  stats={companyStats}
  title="By the Numbers"
  description="Real results from real clients"
  columns={4}
  variant="highlighted"
  spacing="80"
  showIcons={true}
/>
```

### 3-Column Layout
```tsx
<StatsSection
  stats={projectStats}
  title="Project Results"
  columns={3}
  variant="canvas"
/>
```

---

## Design System

### CSS Variables Used

**Typography:**
```css
--text-h1          /* Stat values (large numbers) */
--text-h2          /* Section title */
--text-base        /* Stat labels */
--text-small       /* Description text */
```

**Font Families:**
- **Lexend** — Stat values, section title, labels
- **Manrope** — Description text

**Colors:**
```css
--foreground       /* Section title, labels */
--primary          /* Stat values */
--muted-foreground /* Description text */
--card             /* Card backgrounds (canvas variant) */
--border-soft      /* Card borders */
--background       /* Section background */
```

**Spacing:**
- Tailwind classes: `gap-8`, `gap-12`, `mb-8`, `p-6`
- Grid gaps: 32px (gap-8) or 48px (gap-12)
- Stat padding: 24px (p-6) when using cards

**Border Radius:**
```css
--radius-lg        /* Card borders (canvas variant) */
```

---

## Responsive Behavior

### Breakpoints

**Mobile (< 768px):**
- 1 column
- Full-width stats
- 24px gap between stats
- Larger stat values (--text-display)

**Tablet (768px - 1024px):**
- 2 columns
- 32px gap between stats

**Desktop (> 1024px):**
- 3 or 4 columns (based on props)
- 48px gap between stats

### Grid Classes
```tsx
className={`
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-${columns} 
  gap-8 
  lg:gap-12
`}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Semantic HTML:**
- Use `<section>` for container
- Use `<h2>` for title
- Use proper heading hierarchy

**Screen Readers:**
- Clear labels for each stat
- Context provided by description
- Numbers are text, not images

**Contrast:**
- Stat values: 4.5:1 minimum (AA)
- Labels: 4.5:1 minimum (AA)
- Title: 7:1 (AAA)

**Focus States:**
Not interactive, so no focus states needed

---

## Variants

### Default
```tsx
variant="default"
```
- Background: `var(--background)`
- Stats in simple grid
- No cards or borders

### Canvas
```tsx
variant="canvas"
```
- Background: `var(--card)`
- Each stat in bordered card
- Elevated appearance

### Highlighted
```tsx
variant="highlighted"
```
- Background: Primary gradient or color
- High contrast
- Perfect for hero sections

### Primary
```tsx
variant="primary"
```
- Background: `var(--primary-foreground)`
- Primary accent color for values
- Clean, professional look

---

## Stat Value Formatting

### Numbers with Suffixes
```tsx
{
  value: '250',
  suffix: '+',
  label: 'Projects'
}
// Displays: "250+"
```

### Percentages
```tsx
{
  value: '98',
  suffix: '%',
  label: 'Client Satisfaction'
}
// Displays: "98%"
```

### Large Numbers
```tsx
{
  value: '2.5',
  suffix: 'M',
  label: 'Lines of Code'
}
// Displays: "2.5M"
```

---

## Icon Usage

### With Icons
```tsx
import { Users, Award, Globe, Star } from 'lucide-react';

const stats = [
  { 
    id: '1', 
    value: '250+', 
    label: 'Projects', 
    icon: Award 
  }
];

<StatsSection
  stats={stats}
  showIcons={true}
/>
```

### Icon Styling
- Size: 32px × 32px
- Color: `var(--primary)`
- Position: Above stat value
- Margin bottom: 16px

---

## Testing Checklist

### Rendering
- [ ] Renders without errors
- [ ] Displays correct number of columns
- [ ] Shows all stats
- [ ] Numbers formatted correctly

### Accessibility
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] WCAG AA contrast on all text
- [ ] Screen reader friendly

### Responsive
- [ ] Mobile (1 column)
- [ ] Tablet (2 columns)
- [ ] Desktop (3-4 columns)
- [ ] Numbers scale properly

### Dark Mode
- [ ] Text readable in dark mode
- [ ] Stat values visible
- [ ] Card backgrounds appropriate (canvas variant)
- [ ] Icons visible

---

## Common Use Cases

### 1. Homepage Impact
```tsx
<StatsSection
  stats={companyStats}
  title="Our Impact"
  description="Results that speak for themselves"
  columns={4}
  variant="default"
/>
```

### 2. About Page
```tsx
<StatsSection
  stats={teamStats}
  title="Our Team"
  columns={3}
  variant="canvas"
  showIcons={true}
/>
```

### 3. Project Results
```tsx
<StatsSection
  stats={projectResults}
  title="Project Results"
  columns={4}
  variant="highlighted"
/>
```

### 4. Service Offering
```tsx
<StatsSection
  stats={serviceStats}
  title="Why Choose Us"
  columns={3}
  variant="primary"
/>
```

---

## WordPress Implementation Example

### PHP Pattern Registration
```php
<?php
/**
 * Stats Section Pattern
 */
register_block_pattern(
  'lsx-design/stats-section',
  array(
    'title'       => __( 'Stats Section', 'lsx-design' ),
    'description' => __( 'Grid of statistics with numbers and labels', 'lsx-design' ),
    'categories'  => array( 'content' ),
    'keywords'    => array( 'stats', 'numbers', 'metrics' ),
    'content'     => '<!-- pattern content -->',
  )
);
```

---

## Best Practices

### Content
- Use round numbers when possible (250+ vs 247)
- Keep labels concise (2-4 words)
- Use meaningful metrics
- Add context with description

### Design
- Use 4 columns for balance
- Maintain consistent visual weight
- Use primary color for numbers
- Keep labels clear and readable

### Performance
- No images needed (text-based)
- Lightweight pattern
- Fast loading
- Mobile-optimized

---

**Created:** December 27, 2024  
**Pattern:** StatsSection  
**Category:** Content  
**Status:** Production-ready ✅  
**Used in:** FrontPageTemplate, AboutTemplate, ServicesTemplate  
**Design System:** 100% compliant

