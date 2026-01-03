# Developer Tools Breadcrumb Guidelines

## Breadcrumb Structure

All developer tools must follow this exact breadcrumb pattern:

```
Home > Dev Tools > {Tool Name}
```

---

## Implementation

### Standard Pattern

```tsx
import { Breadcrumbs } from '../common/Breadcrumbs';

<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: '{Tool Name}' }
  ]}
  className="mb-8"
/>
```

### Placement

**Location:** Top of main content area, before page header

```tsx
<Section variant="default" spacing="50">
  <Container>
    {/* Breadcrumbs FIRST */}
    <Breadcrumbs items={[...]} className="mb-8" />
    
    {/* Then page header */}
    <div className="text-center max-w-4xl mx-auto">
      <h1>...</h1>
    </div>
  </Container>
</Section>
```

---

## Tool-Specific Breadcrumbs

### Template Tester

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Template Tester' }
  ]}
  className="mb-8"
/>
```

### Component Showcase

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Component Showcase' }
  ]}
  className="mb-8"
/>
```

### Block Documentation

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Block Documentation' }
  ]}
  className="mb-8"
/>
```

### Component API

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Component API' }
  ]}
  className="mb-8"
/>
```

### Design Blocks Showcase

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Design Blocks Showcase' }
  ]}
  className="mb-8"
/>
```

### Button Showcase

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Button Showcase' }
  ]}
  className="mb-8"
/>
```

### Header/Footer Comparison

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Header/Footer Comparison' }
  ]}
  className="mb-8"
/>
```

### Icon Library

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Icon Library' }
  ]}
  className="mb-8"
/>
```

### Live Preview

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Live Preview' }
  ]}
  className="mb-8"
/>
```

### Section Presets Showcase

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Section Presets Showcase' }
  ]}
  className="mb-8"
/>
```

### Theme Blocks Showcase

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Theme Blocks Showcase' }
  ]}
  className="mb-8"
/>
```

---

## Navigation Pages

### Required Pages in `site-pages.ts`

```typescript
// Parent page
{
  id: 'dev-tools',
  slug: 'dev-tools',
  title: 'Developer Tools',
  excerpt: 'Design system testing and documentation tools',
  template: 'page',
  showInNav: false
},

// Child pages
{
  id: 'template-tester',
  slug: 'template-tester',
  title: 'Template Tester',
  parent: 'dev-tools',
  showInNav: false
},
// ... etc for all tools
```

### Breadcrumb Component

The `Breadcrumbs` component:
- Automatically links all items except the last (current page)
- Uses `useNavigation()` for page navigation
- Generates Schema.org structured data for SEO
- Provides keyboard navigation
- Has visible focus states
- Uses CSS variables for styling

---

## Styling

### Typography

```tsx
fontFamily: 'Manrope, sans-serif',
fontSize: 'var(--text-small)',     // 14px
fontWeight: 'var(--font-weight-regular)',  // 400
```

### Colors

```tsx
// Links
color: 'var(--muted-foreground)',

// Current page
color: 'var(--foreground)',
fontWeight: 'var(--font-weight-medium)',

// Hover state
color: 'var(--foreground)',
textDecoration: 'underline'
```

### Spacing

```tsx
// Between items
gap: '4px',   // Tailwind: gap-1

// Separator icon
width: '16px',
height: '16px'
```

---

## Accessibility

### Semantic HTML

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li>
      <button>Home</button>
      <ChevronRight aria-hidden="true" />
    </li>
    <li>
      <button>Dev Tools</button>
      <ChevronRight aria-hidden="true" />
    </li>
    <li>
      <span aria-current="page">Tool Name</span>
    </li>
  </ol>
</nav>
```

### ARIA Attributes

- `aria-label="Breadcrumb"` on `<nav>`
- `aria-current="page"` on current page span
- `aria-hidden="true"` on separator icons

### Keyboard Navigation

- Tab: Focus next/previous link
- Enter: Navigate to page
- All links have visible focus ring (2px)

---

## SEO Benefits

### Schema.org Structured Data

Automatically generated by Breadcrumbs component:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Dev Tools"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Template Tester"
    }
  ]
}
```

**Benefits:**
- Rich snippets in Google search results
- Improved click-through rates
- Better search engine understanding
- Enhanced mobile search display

---

## Testing Checklist

- [ ] Breadcrumbs appear on every dev tool page
- [ ] "Home" link navigates to homepage
- [ ] "Dev Tools" link navigates to dev-tools landing page
- [ ] Current page (last item) is NOT a link
- [ ] Separator icons display correctly
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Focus visible on all links
- [ ] ARIA labels present and correct
- [ ] Schema.org structured data present

---

## Common Mistakes to Avoid

❌ **Wrong:** Hardcoded URLs
```tsx
<a href="/dev-tools">Dev Tools</a>
```

✅ **Correct:** Use page prop
```tsx
{ label: 'Dev Tools', page: 'dev-tools' }
```

❌ **Wrong:** Missing breadcrumbs
```tsx
<Container>
  <h1>Tool Name</h1>
</Container>
```

✅ **Correct:** Breadcrumbs before header
```tsx
<Container>
  <Breadcrumbs items={[...]} className="mb-8" />
  <h1>Tool Name</h1>
</Container>
```

❌ **Wrong:** Inconsistent labels
```tsx
{ label: 'Developer Tools', page: 'dev-tools' }
```

✅ **Correct:** Consistent "Dev Tools"
```tsx
{ label: 'Dev Tools', page: 'dev-tools' }
```

---

**Last Updated:** December 28, 2024  
**Version:** 1.0  
**Status:** Production Ready
