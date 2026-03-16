# Performance Standards — Bundle, Image, CSS & React Optimization

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [performance.md](../performance.md)  

---

## Bundle Optimization

### Code Splitting

Split large bundles into smaller chunks:

```typescript
import { lazy, Suspense } from 'react';
import { SiteHeader } from './components/parts/SiteHeader';
import { SiteFooter } from './components/parts/SiteFooter';

// Lazy load templates
const FrontPage = lazy(() => import('./components/templates/FrontPageTemplate'));
const Services = lazy(() => import('./components/templates/ServicesTemplate'));
const Portfolio = lazy(() => import('./components/templates/PortfolioArchiveTemplate'));

function App() {
  return (
    <>
      <SiteHeader />
      <Suspense fallback={<LoadingSpinner />}>
        <main id="main-content">
          <CurrentTemplate />
        </main>
      </Suspense>
      <SiteFooter />
    </>
  );
}
```

---

### Tree Shaking

Remove unused code from bundles:

```typescript
// Imports entire library (large bundle)
import _ from 'lodash';
const sorted = _.sortBy(items, 'date');

// Import only what you need (smaller bundle)
import sortBy from 'lodash/sortBy';
const sorted = sortBy(items, 'date');

// Better: Use native JavaScript
const sorted = items.sort((a, b) => 
  new Date(a.date).getTime() - new Date(b.date).getTime()
);
```

---

### Dependency Audit

**Current Dependencies (Production):**
- React: 42KB (required)
- Phosphor Icons: ~38KB (icons)
- Total: 180KB (under 200KB budget)

---

## Image Optimization

### Format Selection

| Image Type | Format | Use Case |
|-----------|--------|----------|
| **Photos** | WebP | Modern browsers (90%+ support) |
| **Photos (fallback)** | JPEG | Older browsers |
| **Graphics/Icons** | SVG | Logos, icons, illustrations |
| **Screenshots** | PNG | UI screenshots with text |
| **Animations** | WebP/AVIF | Modern browsers only |

### Responsive Images

Always provide multiple sizes:

```typescript
interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export function ResponsiveImage({
  src, alt, sizes, width, height,
  loading = 'lazy', priority = false
}: ResponsiveImageProps) {
  const srcset = [
    `${src}-400w.webp 400w`,
    `${src}-800w.webp 800w`,
    `${src}-1200w.webp 1200w`,
    `${src}-1600w.webp 1600w`,
  ].join(', ');

  return (
    <img
      src={`${src}-800w.webp`}
      srcSet={srcset}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : undefined}
      style={{ aspectRatio: `${width}/${height}` }}
    />
  );
}
```

### Image Loading Strategy

```typescript
// Hero image: Load eagerly (above fold)
<ResponsiveImage src="/hero" alt="Hero" loading="eager" priority={true} sizes="100vw" />

// Portfolio cards: Load lazily (below fold)
<ResponsiveImage src="/project-1" alt="Project" loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />

// Decorative images: Use CSS background (lower priority)
<div style={{ backgroundImage: 'url(/decorative.webp)', backgroundSize: 'cover' }} />
```

---

## CSS & Design Tokens

### CSS Variable Performance

CSS variables are faster than inline styles:

```typescript
// Slow: Inline styles cause style recalculation
style={{
  backgroundColor: '#1E6AFF',
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: 500
}}

// Fast: CSS variables pre-computed by browser
style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  fontSize: 'var(--text-base)',
  fontWeight: 'var(--font-weight-medium)'
}}
```

**Performance benefit:** CSS variables are computed once, not per-element.

### Font Loading Optimization

Prevent layout shift from font loading:

```css
@font-face {
  font-family: 'Lexend';
  src: url('/fonts/lexend-variable.woff2') format('woff2');
  font-weight: 400 800;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('/fonts/manrope-variable.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
  font-style: normal;
}
```

```html
<link rel="preload" href="/fonts/lexend-variable.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/manrope-variable.woff2" as="font" type="font/woff2" crossorigin />
```

---

## React Performance

### Memoization

Prevent unnecessary re-renders:

```typescript
import { memo } from 'react';

export const PortfolioCard = memo(function PortfolioCard({
  project, onClick
}: PortfolioCardProps) {
  return (
    <article onClick={() => onClick(project.id)}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
});
```

### useMemo & useCallback

Memoize expensive calculations and callbacks:

```typescript
import { useMemo, useCallback } from 'react';

function PortfolioArchive({ projects }: { projects: Project[] }) {
  const featuredProjects = useMemo(() => {
    return projects.filter(p => p.featured);
  }, [projects]);

  const handleProjectClick = useCallback((id: string) => {
    navigateTo(`portfolio-single-${id}`);
  }, [navigateTo]);

  return (
    <div>
      {featuredProjects.map(project => (
        <PortfolioCard
          key={project.id}
          project={project}
          onClick={handleProjectClick}
        />
      ))}
    </div>
  );
}
```

### Virtualization

Render only visible items in long lists (>50 items):

```typescript
import { useState, useRef } from 'react';

interface VirtualListProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function VirtualList<T>({
  items, height, itemHeight, renderItem
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(height / itemHeight) + 1,
    items.length
  );

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      style={{ height, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: startIndex * itemHeight }} />
      {visibleItems.map((item, index) => (
        <div key={startIndex + index} style={{ height: itemHeight }}>
          {renderItem(item, startIndex + index)}
        </div>
      ))}
      <div style={{ height: (items.length - endIndex) * itemHeight }} />
    </div>
  );
}
```

---

**See also:** [performance-budgets.md](./performance-budgets.md) | [performance-wordpress.md](./performance-wordpress.md)
