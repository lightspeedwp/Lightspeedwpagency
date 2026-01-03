# TeamGrid Pattern

## Overview

**Purpose:** Display team members in a responsive grid with photos, names, roles, and bios  
**Category:** `lsx-design/content/team-grid`  
**WordPress Block:** Group block containing multiple team member cards  
**Usage:** Team pages, about pages, leadership sections  

**Key Features:**
- Responsive grid layout (2-4 columns)
- Team member photos with hover effects
- Name, role, bio display
- Optional social links
- Customizable spacing
- 100% CSS variables

---

## WordPress FSE Mapping

### Block Pattern
```json
{
  "slug": "lsx-design/content/team-grid",
  "title": "Team Grid",
  "description": "Grid of team member cards with photos and info",
  "categories": ["content"],
  "blockTypes": ["core/group"],
  "keywords": ["team", "staff", "people", "about"]
}
```

### Template Usage
```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- wp:heading {"level":2} -->
  <h2>Our Team</h2>
  <!-- /wp:heading -->
  
  <!-- wp:columns {"columns":3} -->
  <div class="wp-block-columns">
    <!-- Team Member 1 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:image {"className":"is-style-rounded"} -->
      <figure class="wp-block-image is-style-rounded">
        <img src="..." alt="Team member name" />
      </figure>
      <!-- /wp:image -->
      
      <!-- wp:heading {"level":3} -->
      <h3>Team Member Name</h3>
      <!-- /wp:heading -->
      
      <!-- wp:paragraph -->
      <p class="has-small-font-size">Role</p>
      <!-- /wp:paragraph -->
      
      <!-- wp:paragraph -->
      <p>Bio text</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->
    
    <!-- Repeat for each team member -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->
```

---

## Props / API

```typescript
interface TeamGridProps {
  /** Array of team members */
  members: TeamMember[];
  
  /** Optional section title */
  title?: string;
  
  /** Optional section description */
  description?: string;
  
  /** Number of columns (2-4) */
  columns?: 2 | 3 | 4;
  
  /** Section variant */
  variant?: SectionVariant;
  
  /** Section spacing */
  spacing?: SectionSpacing;
  
  /** Show social links */
  showSocialLinks?: boolean;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
```

### Default Values
```typescript
{
  columns: 3,
  variant: 'default',
  spacing: '50',
  showSocialLinks: false
}
```

---

## Usage Examples

### Basic Usage
```tsx
import { TeamGrid } from '../patterns/TeamGrid';
import { teamMembers } from '../../data/team';

<TeamGrid
  members={teamMembers}
  title="Our Team"
  columns={3}
/>
```

### With All Props
```tsx
<TeamGrid
  members={leadershipTeam}
  title="Leadership Team"
  description="Meet the people leading LSX Design forward"
  columns={4}
  variant="canvas"
  spacing="80"
  showSocialLinks={true}
/>
```

### Small Team (2 columns)
```tsx
<TeamGrid
  members={coreTeam}
  title="Core Team"
  columns={2}
  variant="default"
/>
```

---

## Design System

### CSS Variables Used

**Typography:**
```css
--text-h2          /* Section title */
--text-h3          /* Member names */
--text-base        /* Member bios */
--text-small       /* Member roles */
```

**Font Families:**
- **Lexend** — Section title, member names, bios
- **Manrope** — Member roles (small text)

**Colors:**
```css
--foreground       /* Member names, text */
--muted-foreground /* Member bios */
--primary          /* Member roles, hover states */
--card             /* Card backgrounds */
--border-soft      /* Photo borders, card borders */
--background       /* Section background */
```

**Spacing:**
- Tailwind classes: `gap-8`, `gap-12`, `mb-6`, `p-6`
- Grid gaps: 32px (gap-8) or 48px (gap-12)
- Card padding: 24px (p-6)

**Border Radius:**
```css
--radius-full      /* Team member photos (circular) */
--radius-lg        /* Card backgrounds */
```

---

## Responsive Behavior

### Breakpoints

**Mobile (< 768px):**
- 1 column
- Full-width cards
- 24px gap between cards
- Larger photos (128px)

**Tablet (768px - 1024px):**
- 2 columns
- 32px gap between cards
- Medium photos (96px)

**Desktop (> 1024px):**
- 3 or 4 columns (based on props)
- 48px gap between cards
- Standard photos (96px)

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

**Keyboard Navigation:**
- Social links keyboard accessible
- Email links keyboard accessible
- Focus states on all interactive elements

**Screen Readers:**
- Semantic HTML (section, heading, figure)
- Alt text for all team photos
- ARIA labels for social links

**Focus States:**
```tsx
onFocus={(e) => {
  e.currentTarget.style.outline = '2px solid var(--ring)';
  e.currentTarget.style.outlineOffset = '2px';
}}
```

**Image Alt Text:**
```tsx
<img
  src={member.photo}
  alt={`${member.name}, ${member.role} at LSX Design`}
/>
```

**Contrast:**
- Name: 7:1 (AAA)
- Bio: 4.5:1 (AA)
- Role: 4.5:1 (AA)

---

## Team Member Card Structure

### Card Anatomy
```tsx
<div className="text-center">
  {/* Photo */}
  <div
    style={{
      width: '128px',
      height: '128px',
      margin: '0 auto 24px',
      borderRadius: '50%',
      backgroundImage: `url(${member.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '4px solid var(--border-soft)'
    }}
  />
  
  {/* Name */}
  <h3>{member.name}</h3>
  
  {/* Role */}
  <p className="role">{member.role}</p>
  
  {/* Bio */}
  <p className="bio">{member.bio}</p>
  
  {/* Social Links (optional) */}
  {showSocialLinks && member.socialLinks && (
    <div className="social-links">
      {/* LinkedIn, Twitter, GitHub icons */}
    </div>
  )}
</div>
```

---

## Photo Requirements

### Image Specifications
- **Dimensions:** 400×400px minimum
- **Aspect Ratio:** 1:1 (square)
- **Format:** JPEG or PNG
- **File Size:** < 150KB
- **Background:** Professional studio or neutral

### Photo Guidelines
- Professional headshots
- Consistent lighting
- Neutral or brand-colored backgrounds
- High quality, sharp focus
- Appropriate cropping

---

## Social Links

### Supported Platforms
```tsx
{
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
  github: 'https://github.com/username'
}
```

### Icon Display
- 20px × 20px icons
- Hover state: color change to primary
- Accessible labels

---

## Testing Checklist

### Rendering
- [ ] Renders without errors
- [ ] Displays correct number of columns
- [ ] Shows all team members
- [ ] Photos load correctly

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Alt text for all images
- [ ] WCAG AA contrast
- [ ] Social links accessible

### Responsive
- [ ] Mobile (1 column)
- [ ] Tablet (2 columns)
- [ ] Desktop (3-4 columns)
- [ ] Photos scale properly

### Dark Mode
- [ ] Text readable in dark mode
- [ ] Photo borders visible
- [ ] Social links visible
- [ ] Hover states work

---

## Common Use Cases

### 1. Leadership Team
```tsx
<TeamGrid
  members={leadershipTeam}
  title="Leadership"
  columns={4}
  variant="canvas"
  showSocialLinks={true}
/>
```

### 2. Core Team
```tsx
<TeamGrid
  members={coreTeam}
  title="Our Team"
  description="Meet the people building LSX Design"
  columns={3}
  variant="default"
/>
```

### 3. Advisory Board
```tsx
<TeamGrid
  members={advisors}
  title="Advisory Board"
  columns={4}
  variant="canvas"
/>
```

---

## WordPress Implementation Example

### PHP Pattern Registration
```php
<?php
/**
 * Team Grid Pattern
 */
register_block_pattern(
  'lsx-design/team-grid',
  array(
    'title'       => __( 'Team Grid', 'lsx-design' ),
    'description' => __( 'Grid of team member cards', 'lsx-design' ),
    'categories'  => array( 'content' ),
    'keywords'    => array( 'team', 'staff', 'people' ),
    'content'     => '<!-- pattern content -->',
  )
);
```

---

## Best Practices

### Content
- Keep member names concise
- Roles should be 2-4 words
- Bios: 100-150 characters
- Professional photos only
- Consistent photo style

### Design
- Use circular photos (border-radius: 50%)
- Maintain consistent spacing
- Center-align text
- Use subtle hover effects
- Keep hierarchy clear

### Performance
- Optimize photo file sizes (< 150KB)
- Use lazy loading for photos
- Provide width/height attributes

---

**Created:** December 27, 2024  
**Pattern:** TeamGrid  
**Category:** Content  
**Status:** Production-ready ✅  
**Used in:** TeamTemplate, AboutTemplate  
**Design System:** 100% compliant

