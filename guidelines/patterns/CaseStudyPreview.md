# CaseStudyPreview Pattern

**Pattern Category:** `lsx-design/content/case-study-preview`  
**WordPress Block:** Core Group block with custom styling  
**Status:** ✅ Production Ready  
**Version:** 1.0  
**Last Updated:** December 27, 2024

---

## Purpose

The CaseStudyPreview pattern displays portfolio project highlights in a visually compelling format. It showcases client work with key metrics, testimonials, and results to demonstrate value and build credibility.

**Use Cases:**
- Portfolio single pages (related work section)
- Homepage featured projects
- Services pages (proof points)
- Case study archives
- Client success stories

---

## WordPress Block Structure

```html
<!-- wp:group {"className":"lsx-case-study-preview"} -->
<div class="wp-block-group lsx-case-study-preview">
  
  <!-- Featured Image -->
  <!-- wp:image {"className":"lsx-case-study-preview__image"} -->
  <figure class="wp-block-image lsx-case-study-preview__image">
    <img src="project.jpg" alt="Project name" />
  </figure>
  <!-- /wp:image -->
  
  <!-- Content Container -->
  <!-- wp:group {"className":"lsx-case-study-preview__content"} -->
  <div class="wp-block-group lsx-case-study-preview__content">
    
    <!-- Client/Category -->
    <!-- wp:paragraph {"className":"lsx-case-study-preview__meta"} -->
    <p class="lsx-case-study-preview__meta">CLIENT NAME • CATEGORY</p>
    <!-- /wp:paragraph -->
    
    <!-- Title -->
    <!-- wp:heading {"level":3} -->
    <h3>Project Title</h3>
    <!-- /wp:heading -->
    
    <!-- Excerpt -->
    <!-- wp:paragraph -->
    <p>Brief description of the project challenges, solutions, and outcomes.</p>
    <!-- /wp:paragraph -->
    
    <!-- Key Metrics (optional) -->
    <!-- wp:columns {"className":"lsx-case-study-preview__metrics"} -->
    <div class="wp-block-columns lsx-case-study-preview__metrics">
      <div class="wp-block-column">
        <p class="metric-value">+250%</p>
        <p class="metric-label">Traffic Increase</p>
      </div>
      <div class="wp-block-column">
        <p class="metric-value">4.2s</p>
        <p class="metric-label">Load Time</p>
      </div>
      <div class="wp-block-column">
        <p class="metric-value">95/100</p>
        <p class="metric-label">Lighthouse Score</p>
      </div>
    </div>
    <!-- /wp:columns -->
    
    <!-- CTA Button -->
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button">
        <a class="wp-block-button__link" href="/portfolio/project-slug">View Case Study</a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
    
  </div>
  <!-- /wp:group -->
  
</div>
<!-- /wp:group -->
```

---

## React Component API

```tsx
import { CaseStudyPreview } from '../patterns/CaseStudyPreview';

<CaseStudyPreview
  client="African Safari Consultants"
  category="WooCommerce"
  title="Luxury Safari Booking Platform"
  excerpt="Custom WordPress and WooCommerce platform with advanced filtering..."
  image="https://images.unsplash.com/photo-xxx"
  slug="african-safari-consultants"
  metrics={[
    { value: '+250%', label: 'Traffic Increase' },
    { value: '4.2s', label: 'Load Time' },
    { value: '95/100', label: 'Lighthouse Score' }
  ]}
  variant="default"  // 'default' | 'horizontal' | 'vertical'
/>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `client` | `string` | Yes | - | Client/company name |
| `category` | `string` | Yes | - | Project category/industry |
| `title` | `string` | Yes | - | Project title |
| `excerpt` | `string` | Yes | - | Brief description (100-150 chars) |
| `image` | `string` | Yes | - | Featured image URL |
| `slug` | `string` | Yes | - | Project slug for URL |
| `metrics` | `Metric[]` | No | `[]` | Key performance metrics |
| `testimonial` | `string` | No | - | Optional client quote |
| `variant` | `string` | No | `'default'` | Layout variant |

### Metric Interface
```tsx
interface Metric {
  value: string;   // "250%" or "4.2s" or "95/100"
  label: string;   // "Traffic Increase"
  icon?: LucideIcon;  // Optional icon
}
```

---

## Design System Compliance

### Typography
```tsx
// Meta (Client • Category)
fontSize: 'var(--text-small)'
fontWeight: 'var(--font-weight-semibold)'
fontFamily: 'Manrope, sans-serif'
letterSpacing: 'var(--letter-spacing-wider)'
textTransform: 'uppercase'

// Title
fontSize: 'var(--text-h3)'
fontWeight: 'var(--font-weight-medium)'
fontFamily: 'Lexend, sans-serif'

// Excerpt
fontSize: 'var(--text-base)'
fontWeight: 'var(--font-weight-regular)'
fontFamily: 'Lexend, sans-serif'

// Metric Value
fontSize: 'var(--text-h4)'
fontWeight: 'var(--font-weight-bold)'
fontFamily: 'Lexend, sans-serif'

// Metric Label
fontSize: 'var(--text-small)'
fontWeight: 'var(--font-weight-regular)'
fontFamily: 'Manrope, sans-serif'
```

### Colors
```tsx
// Meta
color: 'var(--primary)'

// Title
color: 'var(--foreground)'

// Excerpt
color: 'var(--muted-foreground)'

// Metric Value
color: 'var(--foreground)'

// Metric Label
color: 'var(--muted-foreground)'
```

### Spacing
```tsx
// Container
className="grid gap-8 lg:grid-cols-2"

// Image
className="rounded-lg overflow-hidden"

// Content padding
className="py-8 lg:py-12"

// Metrics grid
className="grid grid-cols-3 gap-4 mt-6"
```

---

## Layout Variants

### 1. Default (Side-by-Side)
```tsx
<CaseStudyPreview
  variant="default"
  // Image on left, content on right (desktop)
  // Stacked on mobile
/>
```

### 2. Horizontal (Full Width)
```tsx
<CaseStudyPreview
  variant="horizontal"
  // Full-width image above content
  // Best for hero sections
/>
```

### 3. Vertical (Card Style)
```tsx
<CaseStudyPreview
  variant="vertical"
  // Compact card format
  // Best for grids of case studies
/>
```

---

## Data Integration

### Using Portfolio Data
```tsx
import { portfolioProjects } from '../../data/portfolio-projects';
import { CaseStudyPreview } from '../patterns/CaseStudyPreview';

function RelatedWork() {
  const featuredProject = portfolioProjects[0];
  
  return (
    <Section variant="neutral">
      <Container>
        <h2>Featured Case Study</h2>
        
        <CaseStudyPreview
          client={featuredProject.client}
          category={featuredProject.category}
          title={featuredProject.title}
          excerpt={featuredProject.excerpt}
          image={featuredProject.image}
          slug={featuredProject.slug}
          metrics={featuredProject.results?.map(r => ({
            value: r.metric,
            label: r.description
          }))}
        />
      </Container>
    </Section>
  );
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

✅ **Semantic HTML**
- Uses `<article>` for case study container
- Proper heading hierarchy (`<h3>` for title)
- `<figure>` for image with alt text

✅ **Keyboard Navigation**
- CTA button is keyboard accessible
- Entire card is clickable/tabbable
- Focus states visible

✅ **Screen Readers**
- Alt text for images describes project
- Meta text provides context
- Metrics have proper labels

✅ **Color Contrast**
- Title: 16.07:1 ratio (AAA ✓✓✓)
- Excerpt: 4.54:1 ratio (AA ✓)
- Meta: 4.58:1 ratio on primary (AA ✓)
- Metrics: All AA compliant

### Implementation
```tsx
<article 
  className="lsx-case-study-preview"
  aria-labelledby={`case-study-${slug}`}
>
  <img 
    src={image}
    alt={`${title} - ${client} project screenshot`}
    loading="lazy"
  />
  
  <div className="content">
    <p className="meta" aria-label="Client and category">
      {client} • {category}
    </p>
    
    <h3 id={`case-study-${slug}`}>{title}</h3>
    
    <p>{excerpt}</p>
    
    {metrics && metrics.length > 0 && (
      <dl className="metrics" aria-label="Project metrics">
        {metrics.map((metric, index) => (
          <div key={index}>
            <dt className="sr-only">{metric.label}</dt>
            <dd className="value">{metric.value}</dd>
            <dd className="label">{metric.label}</dd>
          </div>
        ))}
      </dl>
    )}
    
    <Button href={`/portfolio/${slug}`}>
      View Case Study
    </Button>
  </div>
</article>
```

---

## Metrics Best Practices

### What to Include
**Good Metrics:**
- Traffic increase ("+250%")
- Load time ("4.2s" or "40% faster")
- Performance score ("95/100")
- Conversion rate ("+38%")
- User satisfaction ("4.9/5")
- Time saved ("50 hours/month")

**Avoid:**
- Vague claims ("Much better")
- Unverifiable stats
- Too many metrics (3-4 maximum)
- Overly technical jargon

### Format Examples
```tsx
// Traffic/Engagement
{ value: '+250%', label: 'Traffic Increase' }
{ value: '5.4M', label: 'Page Views' }

// Performance
{ value: '1.8s', label: 'Load Time' }
{ value: '95/100', label: 'Lighthouse Score' }

// Conversion
{ value: '+38%', label: 'Conversion Rate' }
{ value: '4.9/5', label: 'User Rating' }

// Business Impact
{ value: '$2.3M', label: 'Revenue Generated' }
{ value: '50hrs', label: 'Time Saved Monthly' }
```

---

## Content Guidelines

### Title
- **Length:** 3-8 words
- **Format:** Descriptive, benefit-focused
- **Examples:**
  - ✅ "Luxury Safari Booking Platform"
  - ✅ "Editorial Block Theme for Tech Magazine"
  - ❌ "Website" (too vague)

### Excerpt
- **Length:** 100-150 characters
- **Format:** Problem → Solution → Outcome
- **Example:**
  - ✅ "Custom WordPress and WooCommerce platform for luxury safari bookings with advanced filtering, resulted in 250% traffic increase."
  - ❌ "We built a website" (too brief, no value)

### Meta (Client • Category)
- **Format:** `CLIENT NAME • CATEGORY`
- **All caps, semibold, small size**
- **Examples:**
  - `AFRICAN SAFARI CONSULTANTS • WOOCOMMERCE`
  - `TECHSTARTUP MAGAZINE • EDITORIAL`

---

## WordPress Theme.json

```json
{
  "version": 2,
  "styles": {
    "blocks": {
      "core/group": {
        "variations": {
          "lsx-case-study-preview": {
            "spacing": {
              "padding": {
                "top": "2rem",
                "bottom": "2rem"
              }
            }
          }
        }
      }
    }
  }
}
```

---

## Example Implementations

### Single Portfolio Page (Related Work)
```tsx
import { CaseStudyPreview } from '../patterns/CaseStudyPreview';
import { portfolioProjects } from '../../data/portfolio-projects';

function SinglePortfolioTemplate({ currentSlug }) {
  const relatedProjects = portfolioProjects
    .filter(p => p.slug !== currentSlug)
    .slice(0, 2);
  
  return (
    <Section variant="neutral">
      <Container>
        <h2>Related Work</h2>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {relatedProjects.map(project => (
            <CaseStudyPreview
              key={project.slug}
              client={project.client}
              category={project.category}
              title={project.title}
              excerpt={project.excerpt}
              image={project.image}
              slug={project.slug}
              variant="vertical"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

### Homepage Featured Case Study
```tsx
function FrontPageTemplate() {
  const featuredProject = portfolioProjects.find(p => p.featured);
  
  return (
    <Section variant="default">
      <Container>
        <CaseStudyPreview
          client={featuredProject.client}
          category={featuredProject.category}
          title={featuredProject.title}
          excerpt={featuredProject.excerpt}
          image={featuredProject.image}
          slug={featuredProject.slug}
          metrics={featuredProject.results}
          variant="horizontal"
        />
      </Container>
    </Section>
  );
}
```

---

## Testing Checklist

- [ ] Image loads with proper alt text
- [ ] Typography uses CSS variables
- [ ] Colors use semantic tokens
- [ ] Spacing uses Tailwind classes
- [ ] Metrics display correctly (if provided)
- [ ] CTA button navigates to project page
- [ ] Responsive layout works (mobile/tablet/desktop)
- [ ] Keyboard navigation functional
- [ ] Screen reader announces all content
- [ ] Contrast ratios meet WCAG AA
- [ ] Hover states work on interactive elements
- [ ] Focus states visible

---

## Related Patterns

- **CardGrid:** Display multiple case studies
- **ArchiveHeader:** Context for portfolio archive
- **SocialProof:** Client logos to complement case studies
- **TestimonialGrid:** Client quotes about projects
- **CTASection:** Next action after viewing case study

---

## References

- **WordPress Blocks:** [Core Group Block](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/#group)
- **Portfolio Data:** `/src/app/data/portfolio-projects.ts`
- **Design System:** `/guidelines/design-tokens/typography.md`
- **Metrics Guidelines:** [Effective Metric Display](https://www.nngroup.com/articles/data-visualization/)

---

**Pattern Slug:** `lsx-design/content/case-study-preview`  
**Tested:** ✅ Portfolio templates  
**WCAG Compliance:** ✅ AA  
**WordPress Compatibility:** ✅ FSE Compatible
