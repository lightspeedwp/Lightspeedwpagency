# Optimise Components — Consolidation & Variant Reduction

**Type:** Sub-Trigger  
**Version:** 1.0.0  
**Created:** March 18, 2026  
**Status:** Active  
**Trigger:** `optimise components`  
**Parent Orchestrator:** `optimise`  
**Repeatable:** Yes  
**Estimated Duration:** 45-60 minutes

---

## Purpose

Optimize component architecture by consolidating over-proliferated pattern variants, merging similar components with prop-based variants, extracting shared logic into custom hooks, and ensuring DRY component hierarchy.

---

## Instructions

**Environment Reminder:** You are working inside **Figma Make**. Do NOT suggest browser refresh, cache clearing, or terminal commands.

---

## Audit Scope (5 Areas)

### 1. Consolidate Over-Proliferated Pattern Variants

**Scan `/src/app/components/patterns/` for excessive variants:**

| Pattern Type | Current Count | Target Count | Action |
|---|---|---|---|
| **Hero patterns** | ? | 3-4 | Consolidate with `variant`, `theme`, `layout` props |
| **Card patterns** | ? | 3-4 | Merge PostCard, PortfolioCard, ServicesCard |
| **CTA patterns** | 4+ | 2-3 | Merge FunkyCTA, CTAInline, CTASection, GradientCTASection |
| **Stats patterns** | 3+ | 2 | Merge StatsGrid, StatsSection, StatCounter |
| **Testimonial patterns** | 8+ | 3-4 | Consolidate into TestimonialCard, TestimonialGrid, TestimonialSlider |
| **Related patterns** | 5+ | 2-3 | Merge RelatedPosts, RelatedServices, RelatedServicesGrid |

**Consolidation Strategy:**

```tsx
// Before: 4 separate CTA components
<FunkyCTA />
<CTAInline />
<CTASection />
<GradientCTASection />

// After: Single component with props
interface CTAProps {
  variant: 'funky' | 'inline' | 'section';
  theme?: 'gradient' | 'solid' | 'outlined';
  layout?: 'horizontal' | 'vertical' | 'centered';
  // ... other props
}

<CTA variant="funky" theme="gradient" />
<CTA variant="inline" theme="solid" />
<CTA variant="section" layout="centered" />
```

---

### 2. Replace Variant-Specific Components with Props

**Identify components that differ only by:**
- Color scheme → Add `color` or `theme` prop
- Size → Add `size` prop
- Layout → Add `layout` prop
- Visual style → Add `variant` prop

**Example: Card Component Consolidation**

```tsx
// Before: 3 separate card components
// PostCard.tsx (120 lines)
// PortfolioCard.tsx (135 lines)
// ServicesCard.tsx (145 lines)

// After: Single Card component with variants (200 lines)
interface CardProps {
  variant: 'post' | 'portfolio' | 'service';
  title: string;
  description?: string;
  image?: string;
  link?: string;
  meta?: Record<string, any>;
}

export function Card({ variant, title, description, image, link, meta }: CardProps) {
  const cardClass = `wp-card wp-card--${variant}`;
  
  return (
    <article className={cardClass}>
      {/* Shared card structure with variant-specific rendering */}
    </article>
  );
}
```

**Benefits:**
- Single source of truth for card behavior
- Easier to maintain
- Consistent styling across variants
- Type-safe variant switching

---

### 3. Extract Shared Component Logic into Custom Hooks

**Scan for:** Duplicate logic across multiple components

**Extract to custom hooks:**

```tsx
// Before: Duplicated logic in 3 components
function ComponentA() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    // ... same logic
  }, [isOpen]);
}

function ComponentB() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    // ... same logic
  }, [isOpen]);
}

// After: Extract to custom hook
// /src/app/hooks/useToggle.ts
export function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const handleToggle = useCallback(() => setIsOpen(!isOpen), []);
  
  useEffect(() => {
    // ... shared logic
  }, [isOpen]);
  
  return { isOpen, handleToggle, setIsOpen };
}

// Use in components
function ComponentA() {
  const { isOpen, handleToggle } = useToggle();
  // ... component logic
}
```

**Common hook candidates:**
- `useToggle` — Open/close state
- `useLocalStorage` — Persist state to localStorage
- `useMediaQuery` — Responsive breakpoint detection
- `useOnClickOutside` — Close on outside click
- `useKeyPress` — Keyboard event handling

---

### 4. Ensure DRY Component Hierarchy

**Verify all pages follow this structure:**

```
/src/app/components/
├── blocks/          # Atomic UI elements
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Icon.tsx
├── patterns/        # Section-level compositions
│   ├── Hero.tsx
│   ├── CTA.tsx
│   └── Stats.tsx
├── parts/           # Template parts
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Hero.tsx    # Hero template part (loads pattern variants)
├── templates/       # Full page layouts
│   ├── ServiceTemplate.tsx
│   └── SolutionTemplate.tsx
└── pages/           # Route-level page wrappers
    └── ServicesPage.tsx
```

**Composition Rules:**
1. **Pages** = Templates + Data
2. **Templates** = Parts + Patterns
3. **Patterns** = Blocks + Layout
4. **Blocks** = Primitives + Styling

**Scan for violations:**

```tsx
// ❌ Anti-pattern: Page → Blocks (skips template/pattern layers)
function ServicesPage() {
  return (
    <div>
      <Button>Click</Button>
      <Card>Content</Card>
    </div>
  );
}

// ✅ Correct: Page → Template → Patterns → Blocks
function ServicesPage() {
  const data = serviceData;
  return <ServiceTemplate data={data} />;
}

function ServiceTemplate({ data }) {
  return (
    <>
      <HeroPart variant="service" data={data.hero} />
      <ServicesPreviewPattern services={data.services} />
      <CTAPattern {...data.cta} />
    </>
  );
}
```

---

### 5. Split Components > 300 Lines

**Scan for:** Components exceeding file size limit

**Refactoring strategies:**

**Extract Sub-Components:**

```tsx
// Before: ServiceTemplate.tsx (650 lines)
export function ServiceTemplate() {
  return (
    <div>
      {/* Hero section (150 lines) */}
      {/* Features section (200 lines) */}
      {/* Pricing section (150 lines) */}
      {/* FAQ section (150 lines) */}
    </div>
  );
}

// After: Split into sub-components
export function ServiceTemplate() {
  return (
    <>
      <ServiceHero />
      <ServiceFeatures />
      <ServicePricing />
      <ServiceFAQ />
    </>
  );
}

// Sub-components in separate files
// /components/patterns/ServiceHero.tsx
// /components/patterns/ServiceFeatures.tsx
// /components/patterns/ServicePricing.tsx
// /components/patterns/ServiceFAQ.tsx
```

---

## Component Optimization Checklist

### Variant Consolidation
- [ ] Max 4 variants per pattern type
- [ ] Replace separate components with props (variant, theme, size, layout)
- [ ] Consistent prop naming across all components

### File Size
- [ ] All components < 300 lines
- [ ] Extract sub-components when over limit
- [ ] Use barrel exports for component groups

### Shared Logic
- [ ] Extract duplicate logic to custom hooks
- [ ] Create shared utility functions
- [ ] Use React Context for cross-component state

### Component Hierarchy
- [ ] Pages use Templates (not direct Blocks)
- [ ] Templates use Parts + Patterns
- [ ] Patterns use Blocks
- [ ] No layer skipping

---

## Success Metrics

| Metric | Target |
|---|---|
| Pattern variants per type | ≤ 4 |
| Components > 300 lines | 0 |
| Duplicate component logic | 0 |
| Custom hooks created | 5+ |
| Component hierarchy violations | 0 |
| Lines saved through consolidation | 1,000+ |

---

## Design System Compliance

All component changes MUST maintain:

- [ ] 100% CSS variable usage
- [ ] WordPress utility classes only (`.wp-*`)
- [ ] Phosphor icons only
- [ ] Semantic HTML
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Touch target minimums (44x44px)

---

## Deliverables

1. **Audit Report:** `/reports/YYYY-MM/component-optimisation-report-[date].md`
2. **Task List:** Add tasks to `/tasks/task-list.md`
3. **CHANGELOG Entry:** Document component consolidations and extractions

---

## Execution Order

1. **Phase 1:** Identify over-proliferated pattern variants
2. **Phase 2:** Consolidate similar components with props
3. **Phase 3:** Extract shared logic to custom hooks
4. **Phase 4:** Verify DRY component hierarchy
5. **Phase 5:** Split components > 300 lines

---

**Prompt Location:** `/prompts/optimise-components.md`  
**Category:** Optimisation  
**Difficulty:** Medium-High  
**Estimated Duration:** 45-60 minutes
