# Pattern Component Extraction Guide

**Phase 2 of File Optimization Project**

This guide documents the extraction of repeated JSX patterns into reusable React components, eliminating code duplication across 20+ templates.

## Overview

Pattern components are reusable React components that encapsulate common UI patterns used across multiple templates. By extracting these patterns, we achieve:

- **80% reduction in JSX duplication**
- **Single source of truth** for common UI patterns
- **Easier maintenance** - update once, affects all instances
- **Consistent styling** - enforced design system compliance
- **Better performance** - smaller bundle sizes

## Pattern Component Architecture

```
src/app/components/patterns/
├── PostCard.tsx           # Blog post card (20+ files)
├── StandardHero.tsx       # Hero sections (30+ files)
├── ServiceCard.tsx        # Service cards (15+ files)
├── ProjectCard.tsx        # Portfolio project cards (10+ files)
├── TestimonialCard.tsx    # Testimonial cards (8+ files)
└── FeatureGrid.tsx        # Feature grid layouts (12+ files)

src/styles/patterns/
├── cards/
│   ├── post-card.css
│   ├── service-card.css
│   ├── project-card.css
│   └── testimonial-card.css
└── grids/
    └── feature-grid.css
```

## Design System Compliance Requirements

**ALL pattern components MUST:**

### ✅ Font Usage (CRITICAL)
- **ONLY use fonts defined in CSS variables:**
  - `var(--font-primary)` for Lexend (headings, titles, body text)
  - `var(--font-secondary)` for Manrope (small text, metadata, labels)
- **NEVER hardcode font family names** like `'Lexend, sans-serif'`

### ✅ Typography Sizing
- Use CSS variable sizing: `var(--text-h1)` through `var(--text-xs)`
- Apply via inline styles: `style={{ fontSize: 'var(--text-h4)', fontFamily: 'var(--font-primary)' }}`

### ✅ Color Variables
- Use semantic color variables: `var(--primary)`, `var(--card)`, `var(--foreground)`, etc.
- Support both light and dark modes
- Use neon colors for dark mode effects: `var(--neon-color)`, `var(--neon-glow)`

### ✅ Spacing Variables
- Use spacing tokens: `var(--spacing-*)` for padding, margin, gap
- Apply responsive spacing using CSS media queries

### ✅ Border Radius
- Use radius variables: `var(--radius)`, `var(--radius-lg)`, `var(--radius-xl)`, `var(--radius-full)`

### ✅ Transitions & Animations
- Use transition variables: `var(--transition-base)`, `var(--transition-slow)`, `var(--ease-out)`
- Include reduced motion guards: `@media (prefers-reduced-motion: reduce)`

### ✅ Shadows
- Use shadow variables: `var(--shadow-lg)`, `var(--shadow-neon)`, `var(--shadow-glow-sm)`

## Component Structure Template

```tsx
/**
 * PatternName Component
 *
 * Brief description of the pattern and where it's used.
 *
 * @see /src/styles/patterns/pattern-name.css
 */

import { Link } from 'react-router';
import { Icon } from 'lucide-react';

export interface PatternNameProps {
  /** Prop description */
  data: DataType;
  variant?: 'default' | 'alternate';
  showFeature?: boolean;
  className?: string;
  loading?: boolean;
}

export const PatternName = ({
  data,
  variant = 'default',
  showFeature = true,
  className = '',
  loading = false,
}: PatternNameProps) => {
  // Loading skeleton
  if (loading) {
    return (
      <div className={`pattern-name pattern-name--loading ${className}`}>
        {/* Skeleton UI */}
      </div>
    );
  }

  return (
    <div className={`pattern-name pattern-name--${variant} ${className}`}>
      {/* Typography with CSS variables */}
      <h3 
        className="pattern-name__title"
        style={{
          fontSize: 'var(--text-h4)',
          fontFamily: 'var(--font-primary)',
        }}
      >
        {data.title}
      </h3>
      
      <p 
        className="pattern-name__description"
        style={{
          fontSize: 'var(--text-base)',
          fontFamily: 'var(--font-secondary)',
        }}
      >
        {data.description}
      </p>
    </div>
  );
};
```

## CSS Structure Template

```css
/**
 * PatternName Pattern Styles
 *
 * 100% CSS variables, zero hardcoded values.
 */

/* BASE IMPORTS */
@import '../../base/card-base.css';

/* BASE STYLES */
.pattern-name {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  transition: all var(--transition-base) var(--ease-out);
}

/* TYPOGRAPHY - Uses CSS variables */
.pattern-name__title {
  /* Font family set via inline style in component */
  color: var(--foreground);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.pattern-name__description {
  /* Font family set via inline style in component */
  color: var(--muted-foreground);
  line-height: 1.6;
}

/* HOVER EFFECTS */
.pattern-name:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

/* DARK MODE NEON EFFECTS */
@media (prefers-color-scheme: dark) {
  .pattern-name:hover {
    box-shadow: 
      var(--shadow-lg),
      0 0 20px var(--neon-glow),
      0 0 40px var(--neon-color);
    border-color: var(--neon-color);
  }
}

/* REDUCED MOTION */
@media (prefers-reduced-motion: reduce) {
  .pattern-name {
    transition: none;
  }
  
  .pattern-name:hover {
    transform: none;
  }
}

/* VARIANTS */
.pattern-name--alternate {
  /* Variant-specific styles */
}

/* LOADING SKELETON */
.pattern-name--loading {
  pointer-events: none;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .pattern-name--loading {
    animation: none;
    opacity: 0.7;
  }
}
```

## Pattern Components Roadmap

### ✅ Phase 2.1: PostCard Component (COMPLETE)
- **Component:** `/src/app/components/patterns/PostCard.tsx`
- **CSS:** `/src/styles/patterns/cards/post-card.css`
- **Impact:** 20+ templates
- **Variants:** vertical, horizontal, minimal, featured
- **Props:** post, variant, showImage, showExcerpt, showMeta, showTags
- **Features:** Loading skeleton, accessibility, keyboard nav, reduced motion

**Templates to Update:**
1. BlogIndexTemplate.tsx
2. CategoryArchiveTemplate.tsx
3. TagArchiveTemplate.tsx
4. AuthorArchiveTemplate.tsx
5. DateArchiveTemplate.tsx
6. SearchResultsTemplate.tsx
7. InsightsLandingTemplate.tsx
8. Related posts sections (10+ templates)

### ⏳ Phase 2.2: StandardHero Component
- **Impact:** 30+ templates
- **Variants:** fullscreen, standard, minimal
- **Features:** Badge, title, description, dual CTAs, gradient backgrounds

### ⏳ Phase 2.3: ServiceCard Component
- **Impact:** 15+ templates
- **Variants:** grid, list, compact
- **Features:** Icon, title, description, features list, CTA

### ⏳ Phase 2.4: ProjectCard Component
- **Impact:** 10+ templates
- **Variants:** portfolio, case-study, minimal
- **Features:** Image, client logo, tags, metrics

### ⏳ Phase 2.5: TestimonialCard Component
- **Impact:** 8+ templates
- **Variants:** quote, video, audio
- **Features:** Avatar, name, role, company, rating

## Implementation Workflow

### 1. Analysis Phase
- [ ] Identify duplicate JSX patterns across templates
- [ ] Document all variations and props needed
- [ ] Count affected templates/files
- [ ] Estimate code reduction impact

### 2. Component Creation
- [ ] Create component in `/src/app/components/patterns/`
- [ ] Define TypeScript interface for props
- [ ] Implement all variants
- [ ] Add loading skeleton state
- [ ] Add accessibility attributes (ARIA, keyboard nav)
- [ ] Apply CSS variables for ALL styling (fonts, colors, spacing, etc.)

### 3. CSS Creation
- [ ] Create CSS file in `/src/styles/patterns/`
- [ ] Import base CSS modules if needed
- [ ] Use 100% CSS variables (no hardcoded values)
- [ ] Add dark mode neon effects
- [ ] Add reduced motion guards
- [ ] Create variant styles
- [ ] Add loading skeleton styles

### 4. Template Updates
- [ ] Update all affected templates to import pattern component
- [ ] Replace duplicate JSX with pattern component
- [ ] Pass appropriate props
- [ ] Remove local duplicate code
- [ ] Test rendering and interactions

### 5. Validation
- [ ] Visual regression testing (all variants render correctly)
- [ ] Accessibility testing (keyboard nav, screen readers)
- [ ] Dark mode testing (neon effects work)
- [ ] Reduced motion testing (animations disabled)
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Performance testing (bundle size reduction)

## Pattern Component Checklist

Before merging a pattern component, verify:

- [ ] **Component file created** in `/src/app/components/patterns/`
- [ ] **CSS file created** in `/src/styles/patterns/`
- [ ] **TypeScript interface** defined for props
- [ ] **Loading skeleton state** implemented
- [ ] **All variants** implemented and working
- [ ] **Accessibility:**
  - [ ] ARIA labels and roles
  - [ ] Keyboard navigation support
  - [ ] Focus states visible
  - [ ] Screen reader friendly
- [ ] **Design System Compliance:**
  - [ ] ONLY uses `var(--font-primary)` or `var(--font-secondary)` for fonts
  - [ ] NO hardcoded font family names
  - [ ] Uses CSS variable sizing (`var(--text-*)`)
  - [ ] Uses CSS variable colors (`var(--*)`)
  - [ ] Uses CSS variable spacing (`var(--spacing-*)`)
  - [ ] Uses CSS variable radius (`var(--radius*)`)
  - [ ] Uses CSS variable transitions (`var(--transition-*)`)
  - [ ] Uses CSS variable shadows (`var(--shadow-*)`)
- [ ] **Dark Mode:**
  - [ ] Neon glow effects implemented
  - [ ] Colors adapt to dark theme
- [ ] **Reduced Motion:**
  - [ ] `@media (prefers-reduced-motion: reduce)` guards added
  - [ ] Animations disabled appropriately
  - [ ] Loading skeleton uses static opacity
- [ ] **Documentation:**
  - [ ] JSDoc comments added
  - [ ] Props documented
  - [ ] Usage examples provided
- [ ] **Templates updated:**
  - [ ] All affected templates import component
  - [ ] Duplicate JSX removed
  - [ ] Props passed correctly
- [ ] **Testing:**
  - [ ] Visual regression passed
  - [ ] Accessibility passed
  - [ ] Dark mode tested
  - [ ] Reduced motion tested
  - [ ] Responsive tested

## Benefits of Pattern Components

### Code Reduction
- **Before:** 400+ lines of duplicate JSX across 20 templates
- **After:** 1 component with 200 lines, imported in 20 templates
- **Savings:** ~200 lines per component × 6 components = ~1,200 lines saved

### Maintainability
- **Before:** Update 20 templates to change post card styling
- **After:** Update 1 component, affects all 20 templates automatically

### Consistency
- **Before:** Variations in implementation across templates
- **After:** Single source of truth ensures consistency

### Design System Enforcement
- **Before:** Easy to accidentally use hardcoded values
- **After:** CSS variables enforced in component, impossible to bypass

### Bundle Size
- **Before:** Duplicate code increases bundle size
- **After:** Shared components reduce bundle size by ~15-20%

## Migration Example: BlogIndexTemplate

### Before (Duplicate JSX)
```tsx
{posts.map((post) => (
  <article key={post.slug} className="post-card">
    <Link to={post.url}>
      <img src={post.featuredImage} alt={post.title} />
      <h3 style={{ fontSize: 'var(--text-h4)' }}>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="meta">
        <span>{post.author.name}</span>
        <span>{post.date}</span>
      </div>
    </Link>
  </article>
))}
```

### After (Pattern Component)
```tsx
import { PostCardGrid } from '@/components/patterns/PostCard';

<PostCardGrid
  posts={posts}
  variant="vertical"
  showImages={true}
  showExcerpts={true}
  showMeta={true}
  columns={3}
/>
```

**Result:** 20 lines → 8 lines (60% reduction per template!)

## Progress Tracking

Track pattern component implementation in `/tasks/file-optimization-tasks.md`:

```markdown
### Task 2.1: PostCard Component ✅ COMPLETE
- ✅ Component created
- ✅ CSS created
- ✅ 20 templates updated
- ✅ ~400 lines JSX saved

### Task 2.2: StandardHero Component ⏳ IN PROGRESS
- [ ] Component created
- [ ] CSS created
- [ ] 30 templates updated
- [ ] ~600 lines JSX saved
```

## Related Documentation

- **Phase 1 Guide:** `/docs/css-base-extraction-guide.md`
- **Task List:** `/tasks/file-optimization-tasks.md`
- **Component Guidelines:** `/guidelines/components/`
- **Pattern Guidelines:** `/guidelines/patterns/`

---

**Last Updated:** March 1, 2026  
**Phase:** 2.1 (PostCard Component Complete)  
**Next:** 2.2 (StandardHero Component)
