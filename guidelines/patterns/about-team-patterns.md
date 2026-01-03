# About & Team Page Patterns

**Purpose:** Document reusable patterns for About and Team pages  
**Status:** Active - use for all about/team content  
**Updated:** December 24, 2024

---

## Overview

The About and Team pages use specialized reusable patterns designed to showcase company information, values, team members, and culture. All patterns follow the modern design system with soft borders, fluid typography, and smooth interactions.

---

## Pattern Catalog

### 1. Stats Section (`StatsSection`)

**Purpose:** Display key company statistics and metrics.

**WordPress Pattern:** `lsx-design/content/stats`

**Usage:**
```tsx
import { StatsSection } from '../patterns/StatsSection';

<StatsSection 
  stats={[
    {
      number: '500+',
      label: 'Projects Delivered',
      description: 'WordPress sites built'
    },
    {
      number: '150+',
      label: 'Happy Clients',
      description: 'Across 30 countries'
    }
  ]}
  variant="highlighted" // or "default"
/>
```

**Props:**
- `stats` — Array of stat objects with number, label, description
- `variant` — `"default"` (muted background) or `"highlighted"` (primary gradient)

**Features:**
- Fluid typography for numbers: `clamp(48px, 6vw, 64px)`
- 4-column grid on desktop
- Responsive: 1 column mobile, 2 columns tablet, 4 columns desktop
- Primary color highlight for numbers in default variant
- White text for highlighted variant

**WordPress FSE Mapping:**
```html
<!-- wp:group {"className":"lsx-stats-section"} -->
<div class="wp-block-group lsx-stats-section">
  <!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- Stat columns here -->
  </div>
</div>
```

---

### 2. Team Grid (`TeamGrid`)

**Purpose:** Display team members with photos, roles, and social links.

**WordPress Pattern:** `lsx-design/content/team-grid`

**Usage:**
```tsx
import { TeamGrid, TeamMember } from '../patterns/TeamGrid';

const members: TeamMember[] = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'WordPress evangelist with 15+ years experience...',
    image: 'https://...',
    social: {
      linkedin: 'https://linkedin.com/in/...',
      twitter: 'https://twitter.com/...',
      github: 'https://github.com/...'
    }
  }
];

<TeamGrid 
  members={members} 
  columns={3} // 2, 3, or 4
/>
```

**Props:**
- `members` — Array of TeamMember objects
- `columns` — Grid columns: `2`, `3`, or `4` (default: 3)

**TeamMember Interface:**
```tsx
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
```

**Features:**
- Square aspect ratio (1:1) for team photos
- Grayscale filter (20%) for consistent look
- Soft border cards with hover lift animation
- Social links with icon buttons (LinkedIn, Twitter, GitHub)
- Responsive grid: 1 column mobile, 2 columns tablet, 3-4 desktop
- Internal divider with `--border-extra-soft`

**Design Details:**
```tsx
// Card styling
border: '1px solid var(--border-soft)'
borderRadius: 'var(--radius-xl)'
boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'

// Hover state
transform: 'translateY(-8px)'
boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)'
borderColor: 'var(--primary)'

// Image treatment
filter: 'brightness(0.95) grayscale(0.2)'
```

**WordPress FSE Mapping:**
```html
<!-- wp:group {"className":"lsx-team-grid"} -->
<div class="wp-block-group lsx-team-grid">
  <!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- Team member cards -->
  </div>
</div>
```

---

### 3. Values Section (`ValuesSection`)

**Purpose:** Display company values or principles with icons.

**WordPress Pattern:** `lsx-design/content/values`

**Usage:**
```tsx
import { ValuesSection } from '../patterns/ValuesSection';
import { Target, Users, Zap } from 'lucide-react';

<ValuesSection
  title="Our Core Values"
  description="The principles that guide everything we do"
  values={[
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on code quality...'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work collaboratively...'
    }
  ]}
/>
```

**Props:**
- `title` — Section heading
- `description` — Optional subtitle
- `values` — Array of value objects with icon, title, description

**Value Interface:**
```tsx
interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}
```

**Features:**
- Icon in colored badge (56×56px)
- 3-column grid on desktop
- Responsive: 1 column mobile, 2 columns tablet, 3 columns desktop
- Card hover animations
- Soft borders

**Design Details:**
```tsx
// Icon badge
width: '56px'
height: '56px'
borderRadius: 'var(--radius-lg)'
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'

// Card styling
backgroundColor: 'var(--card)'
border: '1px solid var(--border-soft)'
borderRadius: 'var(--radius-xl)'
padding: '32px'
```

**WordPress FSE Mapping:**
```html
<!-- wp:group {"className":"lsx-values-section"} -->
<div class="wp-block-group lsx-values-section">
  <h2>Our Core Values</h2>
  <!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- Value cards -->
  </div>
</div>
```

---

### 4. Timeline Section (`TimelineSection`)

**Purpose:** Display company history or milestones chronologically.

**WordPress Pattern:** `lsx-design/content/timeline`

**Usage:**
```tsx
import { TimelineSection } from '../patterns/TimelineSection';

<TimelineSection
  title="Our Journey"
  description="From a small consultancy to a global agency"
  items={[
    {
      year: '2014',
      title: 'LSX Design Founded',
      description: 'Started as a small WordPress consultancy...'
    },
    {
      year: '2019',
      title: 'Design Systems Approach',
      description: 'Pioneered token-driven design systems...'
    }
  ]}
/>
```

**Props:**
- `title` — Section heading
- `description` — Optional subtitle
- `items` — Array of timeline items with year, title, description

**TimelineItem Interface:**
```tsx
interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
```

**Features:**
- Vertical timeline with connecting line
- Year badges in circular primary background
- Timeline line uses `--border-soft`
- Content cards with white background
- Left-aligned layout (80px left padding for year badge)
- Colored shadow on year badges

**Design Details:**
```tsx
// Year badge
width: '64px'
height: '64px'
borderRadius: '50%'
backgroundColor: 'var(--primary)'
color: 'var(--primary-foreground)'
boxShadow: '0 4px 12px rgba(30, 106, 255, 0.3)'

// Timeline line
width: '2px'
backgroundColor: 'var(--border-soft)'
position: 'absolute'
left: '31px' // Center of 64px badge

// Content card
backgroundColor: 'var(--card)'
border: '1px solid var(--border-soft)'
borderRadius: 'var(--radius-xl)'
padding: '24px 32px'
```

**WordPress FSE Mapping:**
```html
<!-- wp:group {"className":"lsx-timeline-section"} -->
<div class="wp-block-group lsx-timeline-section">
  <h2>Our Journey</h2>
  <!-- Timeline items -->
</div>
```

---

## Page Structure Examples

### About Page Structure

```tsx
<AboutTemplate>
  {/* Breadcrumbs */}
  <Breadcrumbs />
  
  {/* Hero Section */}
  <Section gradient hero />
  
  {/* Story Section */}
  <Section>
    <Container>
      <Grid columns={2}>
        <Editorial content />
        <Highlight box />
      </Grid>
    </Container>
  </Section>
  
  {/* Values Section */}
  <ValuesSection />
  
  {/* Stats Section */}
  <StatsSection variant="highlighted" />
  
  {/* Timeline Section */}
  <TimelineSection />
  
  {/* CTA Section */}
  <CTASection />
</AboutTemplate>
```

### Team Page Structure

```tsx
<TeamTemplate>
  {/* Breadcrumbs */}
  <Breadcrumbs items={['Home', 'About', 'Team']} />
  
  {/* Hero Section */}
  <Section gradient hero />
  
  {/* Team Grid */}
  <Section>
    <SectionHeader />
    <TeamGrid members={teamMembers} columns={3} />
  </Section>
  
  {/* Culture Section */}
  <Section muted>
    <SectionHeader />
    <Grid columns={4} culture points />
  </Section>
  
  {/* Join Team CTA */}
  <Section>
    <CalloutCard />
  </Section>
  
  {/* CTA Section */}
  <CTASection />
</TeamTemplate>
```

---

## Design Token Usage

All patterns use design system tokens exclusively:

### Typography
```tsx
// Section headings
fontSize: 'clamp(32px, 5vw, 48px)'
fontFamily: 'Lexend, sans-serif'
fontWeight: 'var(--font-weight-bold)'
letterSpacing: '-0.02em'

// Body text
fontSize: 'var(--text-base)'
fontFamily: 'Lexend, sans-serif'
lineHeight: '1.7'

// Large numbers (stats)
fontSize: 'clamp(48px, 6vw, 64px)'
fontWeight: 'var(--font-weight-bold)'
```

### Colors
```tsx
// Backgrounds
backgroundColor: 'var(--card)'
backgroundColor: 'var(--muted)'
backgroundColor: 'var(--background)'

// Text
color: 'var(--foreground)'
color: 'var(--muted-foreground)'
color: 'var(--primary)'

// Borders
border: '1px solid var(--border-soft)'
borderTop: '1px solid var(--border-extra-soft)'
```

### Spacing
```tsx
// Section spacing
className="py-12"  // sm
className="py-20"  // md  
className="py-24"  // lg
className="py-32"  // xl

// Card padding
padding: '32px'

// Grid gaps
gap: '8px'   // small
gap: '12px'  // medium
gap: '16px'  // large
```

### Border Radius
```tsx
borderRadius: 'var(--radius)'      // 4px - small elements
borderRadius: 'var(--radius-lg)'   // 8px - badges, buttons
borderRadius: 'var(--radius-xl)'   // 12px - cards
```

---

## Accessibility Requirements

All About/Team patterns must maintain WCAG 2.1 AA compliance:

### Team Grid
- ✅ Team member photos have descriptive alt text
- ✅ Social links have `aria-label` with person's name
- ✅ Social links open in new tab with `rel="noopener noreferrer"`
- ✅ Cards are keyboard navigable
- ✅ Hover states work on touch devices

### Stats Section
- ✅ Stats use `role="list"` and `role="listitem"`
- ✅ Large numbers maintain readable contrast
- ✅ Description text provides context

### Timeline
- ✅ Timeline line is decorative (`aria-hidden` on decorative elements)
- ✅ Chronological order is clear visually and in DOM
- ✅ Year badges have sufficient color contrast

### Values Section
- ✅ Icons are decorative (no alt text needed)
- ✅ Content is meaningful without icons
- ✅ Cards have proper heading hierarchy

---

## Performance Considerations

### Team Photos
- Use lazy loading: `loading="lazy"`
- Optimize image sizes (400×400px recommended)
- Use WebP format when possible
- Apply grayscale filter in CSS, not image processing

### Grid Layouts
- Use CSS Grid for automatic responsive behavior
- Avoid excessive re-paints on hover
- Use `will-change: transform` sparingly

### Social Links
- External links should be noopener/noreferrer
- Icons from lucide-react are lightweight SVGs
- Hover states use CSS transitions, not JavaScript

---

## Testing Checklist

Before deploying About/Team patterns:

- [ ] All typography uses Lexend/Manrope fonts only
- [ ] All colors use CSS variables from theme.css
- [ ] All spacing uses Tailwind classes or design tokens
- [ ] Borders use `--border-soft` or `--border-extra-soft`
- [ ] Hover animations are smooth (0.3-0.4s transitions)
- [ ] Cards lift 8px on hover
- [ ] Social links open in new tabs
- [ ] Team photos have proper aspect ratio (1:1)
- [ ] Stats display correctly on mobile (1 column)
- [ ] Timeline is readable on small screens
- [ ] All patterns meet WCAG 2.1 AA standards

---

## WordPress Implementation Notes

### Patterns Registration

```php
// patterns/stats-section.php
<?php
/**
 * Title: Stats Section
 * Slug: lsx-design/stats-section
 * Categories: content
 */
?>

<!-- wp:group {"className":"lsx-stats-section"} -->
<div class="wp-block-group lsx-stats-section">
  <!-- Pattern content -->
</div>
<!-- /wp:group -->
```

### Custom Fields (ACF/Pods)

For dynamic team members:
- Team Member post type
- Custom fields: Name, Role, Bio, Photo, LinkedIn, Twitter, GitHub
- Query in template and pass to TeamGrid component

### Theme.json Integration

```json
{
  "version": 2,
  "patterns": [
    "lsx-design/stats-section",
    "lsx-design/team-grid",
    "lsx-design/values-section",
    "lsx-design/timeline-section"
  ]
}
```

---

**Last Updated:** December 24, 2024  
**Design System:** LSX Design  
**Patterns:** Stats, Team Grid, Values, Timeline
