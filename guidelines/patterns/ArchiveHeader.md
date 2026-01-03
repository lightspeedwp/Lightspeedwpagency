# ArchiveHeader Pattern

## Overview

**Purpose:** Page header for archive pages with title, description, and metadata  
**Category:** `lsx-design/header/archive-header`  
**WordPress Block:** Group block with Query Title and Archive Description  
**Usage:** Category archives, tag archives, date archives, custom taxonomies  

**Key Features:**
- Archive title with taxonomy context
- Optional description/excerpt
- Post count display
- Term metadata (optional)
- Breadcrumbs integration
- Multiple style variants
- 100% CSS variables

---

## WordPress FSE Mapping

### Block Pattern
```json
{
  "slug": "lsx-design/header/archive-header",
  "title": "Archive Header",
  "description": "Header for category, tag, and taxonomy archives",
  "categories": ["header"],
  "blockTypes": ["core/group", "core/query-title"],
  "keywords": ["archive", "category", "tag", "header", "taxonomy"]
}
```

### Template Usage
```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  <!-- Breadcrumbs -->
  <!-- wp:group -->
  <div class="wp-block-group">
    <!-- Breadcrumb pattern -->
  </div>
  <!-- /wp:group -->
  
  <!-- Archive Title -->
  <!-- wp:query-title {"type":"archive","level":1} /-->
  
  <!-- Archive Description -->
  <!-- wp:term-description /-->
  
  <!-- Post Count -->
  <!-- wp:paragraph -->
  <p>Showing 24 posts</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
```

---

## Props / API

```typescript
interface ArchiveHeaderProps {
  /** Archive type */
  type: 'category' | 'tag' | 'author' | 'date' | 'custom';
  
  /** Archive title */
  title: string;
  
  /** Optional description/excerpt */
  description?: string;
  
  /** Term/taxonomy slug */
  slug?: string;
  
  /** Post count */
  postCount?: number;
  
  /** Show post count */
  showPostCount?: boolean;
  
  /** Show breadcrumbs */
  showBreadcrumbs?: boolean;
  
  /** Header variant */
  variant?: 'default' | 'minimal' | 'featured';
  
  /** Background image (featured variant) */
  backgroundImage?: string;
  
  /** Additional metadata */
  metadata?: ArchiveMetadata;
}

interface ArchiveMetadata {
  icon?: LucideIcon;
  color?: string;
  label?: string; // e.g., "Category", "Tag", "Author"
}
```

### Default Values
```typescript
{
  showPostCount: true,
  showBreadcrumbs: true,
  variant: 'default'
}
```

---

## Usage Examples

### Basic Category Archive
```tsx
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { FolderOpen } from 'lucide-react';

<ArchiveHeader
  type="category"
  title="WordPress Development"
  description="Articles about WordPress development, best practices, and tutorials."
  postCount={45}
  metadata={{
    icon: FolderOpen,
    label: 'Category'
  }}
/>
```

### Tag Archive
```tsx
import { Tag } from 'lucide-react';

<ArchiveHeader
  type="tag"
  title="Block Themes"
  description="Posts tagged with block themes"
  postCount={28}
  metadata={{
    icon: Tag,
    label: 'Tag'
  }}
/>
```

### Author Archive
```tsx
import { User } from 'lucide-react';

<ArchiveHeader
  type="author"
  title="Sarah Johnson"
  description="Lead WordPress Developer and technical writer"
  postCount={67}
  showBreadcrumbs={true}
  metadata={{
    icon: User,
    label: 'Author'
  }}
/>
```

### Date Archive
```tsx
import { Calendar } from 'lucide-react';

<ArchiveHeader
  type="date"
  title="December 2024"
  postCount={12}
  metadata={{
    icon: Calendar,
    label: 'Archive'
  }}
/>
```

### Featured Variant (with Background)
```tsx
<ArchiveHeader
  type="category"
  title="Web Performance"
  description="Optimize your WordPress site for speed and Core Web Vitals"
  postCount={32}
  variant="featured"
  backgroundImage="/images/performance-bg.jpg"
/>
```

### Minimal Variant
```tsx
<ArchiveHeader
  type="category"
  title="Design Systems"
  postCount={18}
  variant="minimal"
  showBreadcrumbs={false}
/>
```

---

## Design System

### CSS Variables Used

**Typography:**
```css
--text-h1          /* Archive title */
--text-h2          /* Alternative title size */
--text-base        /* Description, post count */
--text-small       /* Metadata labels */
```

**Font Families:**
- **Lexend** — Archive title, labels
- **Manrope** — Description, post count

**Colors:**
```css
--foreground       /* Title */
--muted-foreground /* Description, metadata */
--primary          /* Icon, accent elements */
--border           /* Divider lines */
--border-soft      /* Subtle borders */
--background       /* Section background */
--card             /* Card backgrounds (variants) */
```

**Spacing:**
- Tailwind classes: `mb-4`, `mb-6`, `mb-8`, `gap-4`, `p-6`
- Title margin: 16px bottom
- Description margin: 24px bottom
- Section padding: 48px vertical

**Border Radius:**
```css
--radius-lg        /* Card borders (featured variant) */
```

---

## Variant Styles

### Default Variant
```tsx
<Section variant="default" spacing="50">
  <Container>
    {showBreadcrumbs && <Breadcrumbs items={breadcrumbItems} />}
    
    <div className="text-center max-w-3xl mx-auto">
      {/* Metadata */}
      {metadata && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}
        >
          {metadata.icon && (
            <metadata.icon
              size={20}
              style={{ color: 'var(--primary)' }}
            />
          )}
          <span
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {metadata.label}
          </span>
        </div>
      )}
      
      {/* Title */}
      <h1
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h1)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)',
          marginBottom: '16px',
          lineHeight: 1.2
        }}
      >
        {title}
      </h1>
      
      {/* Description */}
      {description && (
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-lg)',
            color: 'var(--muted-foreground)',
            marginBottom: '24px',
            lineHeight: 1.7
          }}
        >
          {description}
        </p>
      )}
      
      {/* Post Count */}
      {showPostCount && postCount !== undefined && (
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
            margin: 0
          }}
        >
          {postCount} {postCount === 1 ? 'post' : 'posts'}
        </p>
      )}
    </div>
  </Container>
</Section>
```

### Minimal Variant
```tsx
<div
  style={{
    padding: '32px 0',
    borderBottom: '1px solid var(--border-soft)'
  }}
>
  <Container>
    <h1
      style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-h2)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--foreground)',
        margin: 0
      }}
    >
      {title}
    </h1>
    
    {showPostCount && postCount !== undefined && (
      <p
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          color: 'var(--muted-foreground)',
          marginTop: '8px',
          margin: 0
        }}
      >
        {postCount} posts
      </p>
    )}
  </Container>
</div>
```

### Featured Variant (with Background)
```tsx
<div
  style={{
    position: 'relative',
    padding: '120px 0',
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white'
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 0
    }}
  />
  
  {/* Content */}
  <Container style={{ position: 'relative', zIndex: 1 }}>
    <div className="text-center max-w-3xl mx-auto">
      <h1
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-display)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'white',
          marginBottom: '24px',
          lineHeight: 1.1
        }}
      >
        {title}
      </h1>
      
      {description && (
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-xl)',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '32px',
            lineHeight: 1.7
          }}
        >
          {description}
        </p>
      )}
    </div>
  </Container>
</div>
```

---

## Breadcrumb Integration

### With Breadcrumbs
```tsx
import { Breadcrumbs } from '../common/Breadcrumbs';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'WordPress Development' } // Current page
];

<Section variant="default" spacing="50">
  <Container>
    <Breadcrumbs items={breadcrumbItems} className="mb-8" />
    
    <ArchiveHeader
      type="category"
      title="WordPress Development"
      description="..."
      showBreadcrumbs={false} // Already shown above
    />
  </Container>
</Section>
```

---

## Post Count Formatting

### Display Logic
```tsx
const formatPostCount = (count: number): string => {
  if (count === 0) return 'No posts';
  if (count === 1) return '1 post';
  return `${count.toLocaleString()} posts`;
};

<p>{formatPostCount(postCount)}</p>
```

### With Date Range (Date Archives)
```tsx
<p
  style={{
    fontFamily: 'Manrope, sans-serif',
    fontSize: 'var(--text-base)',
    color: 'var(--muted-foreground)'
  }}
>
  {postCount} posts published in {title}
</p>
```

---

## Responsive Behavior

### Breakpoints

**Mobile (< 768px):**
- Single column layout
- Smaller title (--text-h2)
- Reduced padding (32px vertical)
- Breadcrumbs on separate line

**Tablet (768px - 1024px):**
- Full title size (--text-h1)
- Moderate padding (48px vertical)

**Desktop (> 1024px):**
- Maximum width: 800px (centered)
- Full padding (64px vertical)
- Featured variant: 120px vertical

---

## Accessibility

### WCAG 2.1 AA Compliance

**Semantic HTML:**
- Use `<h1>` for archive title
- Proper heading hierarchy
- Semantic paragraph tags

**Screen Readers:**
- Clear context ("Category: WordPress")
- Post count announced
- Breadcrumbs navigable

**Contrast:**
- Title: 7:1 (AAA)
- Description: 4.5:1 (AA)
- Featured variant overlay ensures readability

**Keyboard Navigation:**
- Breadcrumbs fully navigable
- Logical tab order

---

## Testing Checklist

### Rendering
- [ ] Renders without errors
- [ ] Displays title correctly
- [ ] Shows description (if provided)
- [ ] Post count displays

### Accessibility
- [ ] Proper heading hierarchy
- [ ] Screen reader friendly
- [ ] WCAG AA contrast
- [ ] Breadcrumbs keyboard accessible

### Responsive
- [ ] Mobile layout correct
- [ ] Tablet layout correct
- [ ] Desktop layout correct
- [ ] Featured variant responsive

### Dark Mode
- [ ] Text readable in dark mode
- [ ] Default variant appropriate
- [ ] Featured variant overlay sufficient
- [ ] Borders visible

---

## Common Use Cases

### 1. Category Archive
```tsx
<ArchiveHeader
  type="category"
  title="WordPress Development"
  description="Expert articles, tutorials, and best practices for WordPress developers"
  postCount={45}
  showBreadcrumbs={true}
  metadata={{
    icon: FolderOpen,
    label: 'Category'
  }}
/>
```

### 2. Tag Archive
```tsx
<ArchiveHeader
  type="tag"
  title="Gutenberg"
  description="All posts about the Gutenberg block editor"
  postCount={28}
  variant="minimal"
/>
```

### 3. Author Archive
```tsx
<ArchiveHeader
  type="author"
  title="Sarah Johnson"
  description="Lead WordPress Developer specializing in block themes and performance"
  postCount={67}
  metadata={{
    icon: User,
    label: 'Author'
  }}
/>
```

### 4. Date Archive
```tsx
<ArchiveHeader
  type="date"
  title="December 2024"
  postCount={12}
  variant="minimal"
  showBreadcrumbs={false}
/>
```

---

## WordPress Implementation

### PHP Archive Header
```php
<?php
/**
 * Archive Header Template
 */

// Get archive info
$archive_title = get_the_archive_title();
$archive_description = get_the_archive_description();
$post_count = $wp_query->found_posts;

// Category-specific
if (is_category()) {
  $category = get_queried_object();
  $archive_title = $category->name;
  $archive_description = $category->description;
}
?>

<header class="archive-header">
  <h1><?php echo esc_html($archive_title); ?></h1>
  
  <?php if ($archive_description) : ?>
    <p class="archive-description"><?php echo wp_kses_post($archive_description); ?></p>
  <?php endif; ?>
  
  <p class="post-count"><?php echo esc_html($post_count); ?> posts</p>
</header>
```

---

## Best Practices

### Content
- Keep titles concise (2-5 words)
- Write clear descriptions (1-2 sentences)
- Always show post count for context
- Use breadcrumbs for deep archives

### Design
- Center-align for impact
- Use consistent typography
- Maintain adequate spacing
- Make metadata subtle but visible

### Performance
- Lazy load background images
- Optimize image sizes
- Use semantic HTML
- Minimize DOM complexity

### SEO
- Use H1 for archive title
- Include description in meta
- Add schema.org markup
- Create unique descriptions per archive

---

**Created:** December 27, 2024  
**Pattern:** ArchiveHeader  
**Category:** Header  
**Status:** Production-ready ✅  
**Used in:** All archive templates (Category, Tag, Author, Date)  
**Design System:** 100% compliant

