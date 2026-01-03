# ProcessTimeline Pattern

## Overview

**Purpose:** Visual timeline for processes, workflows, and sequential steps  
**Category:** `lsx-design/content/process-timeline`  
**WordPress Block:** Group block with nested Groups/Columns  
**Usage:** About pages, service pages, onboarding flows, project timelines  

**Key Features:**
- Vertical or horizontal timeline
- Step numbers or icons
- Connecting lines between steps
- Responsive layouts
- Multiple visual styles
- 100% CSS variables

---

## WordPress FSE Mapping

### Block Pattern
```json
{
  "slug": "lsx-design/content/process-timeline",
  "title": "Process Timeline",
  "description": "Visual timeline for processes and workflows",
  "categories": ["content"],
  "blockTypes": ["core/group", "core/columns"],
  "keywords": ["timeline", "process", "steps", "workflow", "roadmap"]
}
```

### Template Usage (Vertical)
```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- Step 1 -->
  <!-- wp:group {"className":"timeline-step"} -->
  <div class="wp-block-group timeline-step">
    <!-- wp:heading {"level":3} -->
    <h3>Discovery</h3>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>We analyze your needs and goals</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->
  
  <!-- Repeat for each step -->
</div>
<!-- /wp:group -->
```

---

## Props / API

```typescript
interface ProcessTimelineProps {
  /** Array of timeline steps */
  steps: TimelineStep[];
  
  /** Timeline orientation */
  orientation?: 'vertical' | 'horizontal';
  
  /** Visual style */
  variant?: 'default' | 'numbered' | 'minimal' | 'cards';
  
  /** Show connecting lines */
  showConnectors?: boolean;
  
  /** Icon position (numbered variant) */
  iconPosition?: 'left' | 'top';
  
  /** Section title */
  title?: string;
  
  /** Section description */
  description?: string;
}

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  stepNumber?: number;
  duration?: string; // e.g., "2-3 weeks"
  deliverables?: string[]; // Optional list of deliverables
}
```

### Default Values
```typescript
{
  orientation: 'vertical',
  variant: 'numbered',
  showConnectors: true,
  iconPosition: 'left'
}
```

---

## Usage Examples

### Basic Vertical Timeline
```tsx
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'We analyze your business goals, target audience, and technical requirements',
    icon: Search,
    duration: '1 week'
  },
  {
    id: 'design',
    title: 'Design & Planning',
    description: 'Create wireframes, design system, and project roadmap',
    icon: Lightbulb,
    duration: '2-3 weeks'
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Build your WordPress site with modern best practices',
    icon: Code,
    duration: '4-6 weeks'
  },
  {
    id: 'launch',
    title: 'Launch & Support',
    description: 'Deploy to production with ongoing maintenance and support',
    icon: Rocket,
    duration: 'Ongoing'
  }
];

<ProcessTimeline
  steps={processSteps}
  title="Our Process"
  description="How we build world-class WordPress sites"
/>
```

### Horizontal Timeline
```tsx
<ProcessTimeline
  steps={processSteps}
  orientation="horizontal"
  variant="numbered"
/>
```

### Minimal Variant (No Icons)
```tsx
<ProcessTimeline
  steps={processSteps}
  variant="minimal"
  showConnectors={false}
/>
```

### Cards Variant
```tsx
<ProcessTimeline
  steps={processSteps}
  variant="cards"
  orientation="vertical"
/>
```

---

## Design System

### CSS Variables Used

**Typography:**
```css
--text-h2          /* Section title */
--text-h3          /* Step titles */
--text-base        /* Step descriptions */
--text-small       /* Duration, metadata */
```

**Font Families:**
- **Lexend** — Section title, step titles
- **Manrope** — Step descriptions, metadata

**Colors:**
```css
--foreground       /* Step titles */
--muted-foreground /* Step descriptions */
--primary          /* Icons, step numbers, connectors */
--primary-foreground /* Icon backgrounds */
--card             /* Card backgrounds (cards variant) */
--border           /* Card borders */
--border-soft      /* Connector lines */
--background       /* Section background */
```

**Spacing:**
- Tailwind classes: `gap-8`, `gap-12`, `mb-6`, `mb-8`, `p-6`
- Step gap: 48px (gap-12)
- Card padding: 24px (p-6)
- Icon margin: 16px

**Border Radius:**
```css
--radius           /* Icon circles (small) */
--radius-lg        /* Card borders (cards variant) */
--radius-full      /* Perfect circles (9999px) */
```

---

## Variant Styles

### Numbered Variant (Default)
```tsx
<div className="flex flex-col gap-12">
  {steps.map((step, index) => (
    <div key={step.id} className="flex gap-6 items-start">
      {/* Step Number Circle */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semibold)'
        }}
      >
        {index + 1}
      </div>
      
      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)',
            marginBottom: '8px',
            lineHeight: 1.3
          }}
        >
          {step.title}
        </h3>
        
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
            lineHeight: 1.7,
            marginBottom: '12px'
          }}
        >
          {step.description}
        </p>
        
        {step.duration && (
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--primary)',
              fontWeight: 'var(--font-weight-medium)',
              margin: 0
            }}
          >
            Duration: {step.duration}
          </p>
        )}
      </div>
    </div>
  ))}
</div>
```

### Cards Variant
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {steps.map((step, index) => (
    <div
      key={step.id}
      style={{
        padding: '24px',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)'
      }}
    >
      {/* Step Number Badge */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semibold)',
          marginBottom: '16px'
        }}
      >
        {index + 1}
      </span>
      
      <h3
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)',
          marginBottom: '12px',
          lineHeight: 1.3
        }}
      >
        {step.title}
      </h3>
      
      <p
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)',
          lineHeight: 1.7,
          margin: 0
        }}
      >
        {step.description}
      </p>
    </div>
  ))}
</div>
```

### Minimal Variant
```tsx
<div className="flex flex-col gap-8">
  {steps.map((step) => (
    <div key={step.id} className="pb-8 border-b border-border-soft last:border-0">
      <h3
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h4)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)',
          marginBottom: '8px',
          lineHeight: 1.3
        }}
      >
        {step.title}
      </h3>
      
      <p
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)',
          lineHeight: 1.7,
          margin: 0
        }}
      >
        {step.description}
      </p>
    </div>
  ))}
</div>
```

---

## Connecting Lines

### Vertical Connectors
```tsx
<div style={{ position: 'relative' }}>
  {/* Connector Line */}
  <div
    style={{
      position: 'absolute',
      left: '24px', // Center of circle (48px / 2)
      top: '48px', // Below first circle
      bottom: '0',
      width: '2px',
      backgroundColor: 'var(--border-soft)',
      zIndex: 0
    }}
  />
  
  {/* Steps */}
  <div style={{ position: 'relative', zIndex: 1 }}>
    {steps.map((step, index) => (
      <StepItem key={step.id} {...step} />
    ))}
  </div>
</div>
```

### Horizontal Connectors
```tsx
<div className="flex items-center justify-between">
  {steps.map((step, index) => (
    <React.Fragment key={step.id}>
      <StepItem {...step} />
      
      {/* Connector between steps */}
      {index < steps.length - 1 && (
        <div
          style={{
            flex: 1,
            height: '2px',
            backgroundColor: 'var(--border-soft)',
            margin: '0 16px'
          }}
        />
      )}
    </React.Fragment>
  ))}
</div>
```

---

## Responsive Behavior

### Breakpoints

**Mobile (< 768px):**
- Always vertical orientation
- Full-width cards
- 32px gap between steps
- Smaller icons (40px)

**Tablet (768px - 1024px):**
- Vertical or 2-column cards
- 48px gap between steps
- Medium icons (48px)

**Desktop (> 1024px):**
- Horizontal or vertical
- 3-4 column cards (if cards variant)
- 64px gap (horizontal)
- Large icons (56px, optional)

### Responsive Grid (Cards Variant)
```tsx
className={`
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-${steps.length <= 4 ? steps.length : 4}
  gap-6
`}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Semantic HTML:**
- Use ordered list (`<ol>`) for steps
- Proper heading hierarchy
- Clear step structure

**Screen Readers:**
- Step numbers announced
- Clear step titles
- Duration announced (if present)

**Contrast:**
- Step titles: 7:1 (AAA)
- Descriptions: 4.5:1 (AA)
- Icons/numbers: 4.5:1 (AA)

**Keyboard Navigation:**
- Not interactive (read-only)
- Logical reading order

**Example Markup:**
```tsx
<ol
  role="list"
  aria-label="Project process timeline"
  style={{
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}
>
  {steps.map((step, index) => (
    <li key={step.id}>
      <article>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
        {step.duration && (
          <p>
            <strong>Duration:</strong> {step.duration}
          </p>
        )}
      </article>
    </li>
  ))}
</ol>
```

---

## Optional Features

### Deliverables List
```tsx
{step.deliverables && (
  <div style={{ marginTop: '16px' }}>
    <p
      style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-small)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--foreground)',
        marginBottom: '8px'
      }}
    >
      Deliverables:
    </p>
    <ul
      style={{
        listStyleType: 'disc',
        marginLeft: '20px',
        fontFamily: 'Manrope, sans-serif',
        fontSize: 'var(--text-small)',
        color: 'var(--muted-foreground)',
        lineHeight: 1.6
      }}
    >
      {step.deliverables.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)}
```

### Icons Instead of Numbers
```tsx
{step.icon && (
  <div
    style={{
      width: '48px',
      height: '48px',
      borderRadius: 'var(--radius-full)',
      backgroundColor: 'var(--primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }}
  >
    <step.icon
      size={24}
      style={{ color: 'var(--primary-foreground)' }}
    />
  </div>
)}
```

---

## Testing Checklist

### Rendering
- [ ] Renders without errors
- [ ] Displays all steps
- [ ] Shows correct step order
- [ ] Connectors display (if enabled)

### Accessibility
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] WCAG AA contrast on all text
- [ ] Screen reader friendly
- [ ] Logical reading order

### Responsive
- [ ] Mobile layout (vertical)
- [ ] Tablet layout correct
- [ ] Desktop layout correct
- [ ] Cards grid responsive

### Dark Mode
- [ ] Text readable in dark mode
- [ ] Icons visible
- [ ] Connectors visible
- [ ] Cards appropriate contrast

---

## Common Use Cases

### 1. Service Process (About Page)
```tsx
<ProcessTimeline
  steps={serviceProcess}
  title="How We Work"
  description="Our proven process for delivering exceptional WordPress sites"
  orientation="vertical"
  variant="numbered"
/>
```

### 2. Project Timeline (Portfolio)
```tsx
<ProcessTimeline
  steps={projectMilestones}
  title="Project Timeline"
  orientation="horizontal"
  variant="cards"
  showConnectors={false}
/>
```

### 3. Onboarding Steps
```tsx
<ProcessTimeline
  steps={onboardingSteps}
  title="Get Started in 4 Easy Steps"
  variant="numbered"
  iconPosition="top"
/>
```

---

## WordPress Implementation

### PHP Pattern Registration
```php
<?php
/**
 * Process Timeline Pattern
 */
register_block_pattern(
  'lsx-design/process-timeline',
  array(
    'title'       => __( 'Process Timeline', 'lsx-design' ),
    'description' => __( 'Visual timeline for processes and workflows', 'lsx-design' ),
    'categories'  => array( 'content' ),
    'keywords'    => array( 'timeline', 'process', 'steps' ),
    'content'     => '<!-- pattern content -->',
  )
);
```

---

## Best Practices

### Content
- Keep steps to 3-6 maximum
- Use clear, action-oriented titles
- Write concise descriptions (1-2 sentences)
- Show realistic durations

### Design
- Maintain consistent icon sizing
- Use adequate spacing between steps
- Make step order obvious
- Keep connectors subtle

### Performance
- Use lightweight icons
- Optimize for mobile
- Minimize DOM complexity
- Use semantic HTML

---

**Created:** December 27, 2024  
**Pattern:** ProcessTimeline  
**Category:** Content  
**Status:** Production-ready ✅  
**Used in:** AboutProcessTemplate, ServicesTemplate, AboutTemplate  
**Design System:** 100% compliant

