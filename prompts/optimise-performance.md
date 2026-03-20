# Optimise Performance — Bundle Size & Render Performance

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise performance`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 50-60 minutes

---

## Purpose

Optimize runtime performance through code splitting, lazy loading, memoization, image optimization, and ensuring efficient rendering patterns.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope (8 Areas)

### 1. Implement Code Splitting & Lazy Loading

**Scan for:** Heavy route-level components that can be lazy-loaded

**Strategy:**

```tsx
// Before: All routes loaded upfront
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';

const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/services', Component: ServicesPage },
  { path: '/about', Component: AboutPage },
]);

// After: Lazy-loaded routes
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/services', Component: ServicesPage },
  { path: '/about', Component: AboutPage },
]);

// Add Suspense boundary in root
<Suspense fallback={<LoadingSpinner />}>
  <RouterProvider router={router} />
</Suspense>
```

---

### 2. Memoize Expensive Calculations

**Scan for:** Components with expensive calculations on every render

```tsx
// Before: Recalculated on every render
function StatsSection({ stats }) {
  const processedStats = stats.map(stat => ({
    ...stat,
    formattedValue: formatNumber(stat.value), // Expensive operation
    percentage: calculatePercentage(stat.value, stat.total),
  }));
  
  return <div>{/* Render processedStats */}</div>;
}

// After: Memoized calculation
function StatsSection({ stats }) {
  const processedStats = useMemo(() => 
    stats.map(stat => ({
      ...stat,
      formattedValue: formatNumber(stat.value),
      percentage: calculatePercentage(stat.value, stat.total),
    })),
    [stats] // Only recalculate when stats change
  );
  
  return <div>{/* Render processedStats */}</div>;
}
```

---

### 3. Memoize Event Handlers

**Scan for:** Event handlers recreated on every render

```tsx
// Before: New function on every render
function MyComponent() {
  const handleClick = () => {
    console.log('Clicked');
  };
  
  return <Button onClick={handleClick}>Click</Button>;
}

// After: Memoized handler
function MyComponent() {
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []); // Empty deps = stable reference
  
  return <Button onClick={handleClick}>Click</Button>;
}
```

---

### 4. Implement React.memo for Pure Components

**Scan for:** Components that re-render unnecessarily

```tsx
// Before: Re-renders even when props unchanged
function Card({ title, description }) {
  return (
    <div className="wp-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// After: Memoized component
const Card = React.memo(function Card({ title, description }) {
  return (
    <div className="wp-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});
```

---

### 5. Optimize Images

**Scan for:** Images without proper loading attributes

```tsx
// Before: Eager loading
<img src={imageSrc} alt={altText} />

// After: Lazy loading
<img 
  src={imageSrc} 
  alt={altText} 
  loading="lazy"
  decoding="async"
/>

// For critical images (above fold)
<img 
  src={imageSrc} 
  alt={altText} 
  loading="eager"
  fetchpriority="high"
/>
```

---

### 6. Ensure CSS Animations Use GPU

**Scan CSS for:** Animations using expensive properties

```css
/* ❌ Avoid: Triggers layout recalculation */
.wp-card {
  transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
}

/* ✅ Prefer: GPU-accelerated properties */
.wp-card {
  transition: transform 0.3s, opacity 0.3s;
  will-change: transform, opacity;
}

/* Use transform instead of position/size changes */
.wp-card:hover {
  transform: scale(1.05) translateY(-4px);
}
```

---

### 7. Respect Reduced Motion Preference

**Scan for:** Animations without `prefers-reduced-motion` support

```css
/* Before: No reduced motion support */
.wp-card {
  transition: transform 0.3s ease-out;
}

/* After: Respects user preference */
.wp-card {
  transition: transform 0.3s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .wp-card {
    transition: none;
  }
}
```

---

### 8. Optimize Context Usage

**Scan for:** Context providers causing unnecessary re-renders

```tsx
// Before: Provider value recreated on every render
function App() {
  const value = {
    user: currentUser,
    theme: currentTheme,
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// After: Memoized provider value
function App() {
  const value = useMemo(() => ({
    user: currentUser,
    theme: currentTheme,
  }), [currentUser, currentTheme]);
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
```

---

## Performance Optimization Checklist

### Bundle Size
- [ ] Route-level code splitting implemented
- [ ] Heavy components lazy-loaded
- [ ] Unused dependencies removed
- [ ] Icon imports optimized (import specific icons, not entire library)

### Render Performance
- [ ] Expensive calculations memoized (`useMemo`)
- [ ] Event handlers memoized (`useCallback`)
- [ ] Pure components wrapped in `React.memo`
- [ ] Context values memoized

### Images
- [ ] All images have `loading="lazy"` (except above-fold)
- [ ] Critical images use `fetchpriority="high"`
- [ ] All images have `alt` text

### Animations
- [ ] Animations use `transform` and `opacity` only
- [ ] `will-change` used appropriately
- [ ] `prefers-reduced-motion` respected
- [ ] No layout-triggering properties in transitions

---

## Success Metrics

| Metric | Target |
|---|---|
| Bundle size reduction | -20% |
| Initial load time | < 2s |
| Images lazy-loaded | 100% (except critical) |
| Expensive calculations memoized | 100% |
| Event handlers memoized | 100% |
| Reduced motion support | 100% |
| GPU-accelerated animations | 100% |

---

## Design System Compliance

All performance optimizations MUST maintain:

- [ ] 100% CSS variable usage
- [ ] WordPress utility classes only
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Touch target minimums (44x44px)
- [ ] Semantic HTML
- [ ] Phosphor icons only

---

## Deliverables

1. **Audit Report:** `/reports/YYYY-MM/performance-optimisation-report-[date].md`
2. **Task List:** Add tasks to `/tasks/task-list.md`
3. **CHANGELOG Entry:** Document performance improvements

---

## Execution Order

1. **Phase 1:** Implement code splitting and lazy loading
2. **Phase 2:** Memoize expensive calculations
3. **Phase 3:** Memoize event handlers
4. **Phase 4:** Wrap pure components in React.memo
5. **Phase 5:** Optimize images (lazy loading, fetchpriority)
6. **Phase 6:** Ensure CSS animations use GPU
7. **Phase 7:** Add reduced motion support
8. **Phase 8:** Optimize context usage

---

**Prompt Location:** `/prompts/optimise-performance.md`  
**Category:** Optimisation  
**Difficulty:** Medium-High  
**Estimated Duration:** 50-60 minutes
