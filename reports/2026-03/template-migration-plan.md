# Template Migration Plan — Pattern Component Adoption

**Date:** March 3, 2026  
**Goal:** Migrate 42+ templates to use StatsGrid, FeatureList, and ProcessTimeline components  
**Expected Savings:** ~2,300 lines of JSX code

---

## Executive Summary

Three production-ready pattern components are available for immediate deployment:

1. **StatsGrid** — 12+ templates → ~500 lines saved
2. **FeatureList** — 20+ templates → ~1,000 lines saved
3. **ProcessTimeline** — 10+ templates → ~800 lines saved

All components maintain **100% CSS variable compliance** and follow WordPress/BEM conventions.

---

## Component 1: StatsGrid Migration

### Component API

```tsx
import { StatsGrid } from '../patterns/StatsGrid';

<StatsGrid
  stats={[
    { number: '500+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support' },
    { number: '15 years', label: 'Experience' }
  ]}
  columns={4}
  variant="gradient" // or "glass" or "default"
/>
```

### Templates Already Using StatsGrid ✅

1. ✅ ContactPageTemplate — Uses StatsSection (similar pattern)
2. ✅ AboutTemplate — Uses StatsSection (similar pattern)
3. ✅ PortfolioArchiveTemplate — Uses StatsGrid component
4. ✅ ServiceDetailTemplate — Uses StatsGrid component
5. ✅ SecurityServiceTemplate — Uses StatsGrid component

### Templates with Inline Stats (Migration Candidates)

| Template | Current Implementation | Lines | Priority |
|----------|----------------------|-------|----------|
| **DiscoveryServiceTemplate** | Inline StatCounter component | ~40 lines | HIGH |
| **ServicesLandingTemplate** | Inline featured stats | ~30 lines | HIGH |
| **FrontPageTemplate** | May have inline stats | TBD | MEDIUM |
| **TeamTemplate** | May have inline stats | TBD | MEDIUM |

**Estimated Savings:** ~500 lines (assuming 12 templates × ~40 lines avg)

---

## Component 2: FeatureList Migration

### Component API

```tsx
import { FeatureList } from '../patterns/FeatureList';

<FeatureList
  items={[
    {
      icon: Rocket,
      title: 'Custom Themes',
      description: 'Build beautiful WordPress themes',
      features: ['Block-based', 'FSE compatible', 'Accessible'],
      link: 'design-systems',
      linkText: 'Learn More →'
    }
  ]}
  columns={3}
  variant="glass" // or "cards" | "minimal" | "compact" | "glow"
  iconSize="lg"   // or "sm" | "md"
  iconStyle="circular" // or "square" | "rounded"
/>
```

### Templates Already Using FeatureList ✅

1. ✅ ServiceDetailTemplate — Uses FeatureList component
2. ✅ WordPressSolutionTemplate — Documented as using FeatureGrid pattern

### Templates with Inline Feature Grids (Migration Candidates)

| Template | Current Implementation | Lines | Priority |
|----------|----------------------|-------|----------|
| **WooCommerceSolutionTemplate** | Inline feature cards with map() | ~50 lines | HIGH |
| **LSXSearchTemplate** | Inline feature cards (2 sections) | ~60 lines | HIGH |
| **MailchimpSolutionTemplate** | Inline feature cards | ~45 lines | HIGH |
| **PublishersTemplate** | Inline feature cards | ~50 lines | HIGH |
| **DevelopmentServiceTemplate** | Maps subServices to feature cards | ~55 lines | MEDIUM |
| **SecurityServiceTemplate** | Maps security features | ~50 lines | MEDIUM |
| **PricingTemplate** | Feature lists in pricing cards | ~40 lines | LOW |
| **HostingTemplate** | Feature lists in hosting plans | ~35 lines | LOW |
| **WetuImporterTemplate** | Feature lists in pricing | ~30 lines | LOW |
| **WordPressRedesignTemplate** | Feature lists in pricing | ~30 lines | LOW |
| **WooCommerceRedesignTemplate** | Feature lists in pricing | ~30 lines | LOW |
| **SnippetGeneratorTemplate** | Example feature grids | ~40 lines | LOW |

**High Priority Subtotal:** 4 templates × ~51 lines avg = **~204 lines**  
**Medium Priority Subtotal:** 2 templates × ~52 lines avg = **~104 lines**  
**Low Priority Subtotal:** 6 templates × ~34 lines avg = **~204 lines**

**Estimated Savings:** ~1,000 lines (20 templates × ~50 lines avg)

---

## Component 3: ProcessTimeline Migration

### Component API

```tsx
import { ProcessTimeline } from '../patterns/ProcessTimeline';

<ProcessTimeline
  steps={[
    {
      number: '01',
      title: 'Discovery',
      description: 'Understand your goals and requirements',
      icon: Search
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create beautiful, user-friendly designs'
    }
  ]}
  variant="vertical"   // or "horizontal"
  showConnectors={true}
  iconStyle="numbered" // or "icon"
/>
```

### Templates with Process/Timeline Sections (Migration Candidates)

| Template | Current Implementation | Lines | Priority |
|----------|----------------------|-------|----------|
| **DevelopmentServiceTemplate** | Maps process steps | ~80 lines | HIGH |
| **SecurityServiceTemplate** | Maps security process | ~80 lines | HIGH |
| **AboutProcessTemplate** | Custom process display | ~100 lines | HIGH |
| **DiscoveryServiceTemplate** | Custom discovery process | ~90 lines | HIGH |
| **Any other service templates** | Various process sections | ~60 lines | MEDIUM |

**Estimated Savings:** ~800 lines (10 templates × ~80 lines avg)

---

## Migration Priority Matrix

### Phase 1: High-Impact Quick Wins (Week 1)

**Priority:** Templates with cleanest inline patterns, easiest to replace

1. **WooCommerceSolutionTemplate** — Replace inline feature cards → FeatureList
2. **LSXSearchTemplate** — Replace 2 inline feature sections → FeatureList
3. **MailchimpSolutionTemplate** — Replace inline feature cards → FeatureList
4. **PublishersTemplate** — Replace inline feature cards → FeatureList
5. **DiscoveryServiceTemplate** — Replace StatCounter → StatsGrid

**Estimated Effort:** 3-4 hours  
**Estimated Savings:** ~250 lines  
**Impact:** Demonstrate pattern across diverse templates

---

### Phase 2: Service Template Consolidation (Week 2)

**Priority:** Service templates with similar patterns

6. **DevelopmentServiceTemplate** — FeatureList + ProcessTimeline
7. **SecurityServiceTemplate** — FeatureList + ProcessTimeline
8. **DiscoveryServiceTemplate** — ProcessTimeline (if not done in Phase 1)
9. **ServicesLandingTemplate** — StatsGrid for featured stats
10. **Other service templates** — As needed

**Estimated Effort:** 5-6 hours  
**Estimated Savings:** ~400 lines  
**Impact:** Standardize service page patterns

---

### Phase 3: Comprehensive Migration (Week 3-4)

**Priority:** Remaining templates with inline patterns

11-42. **All remaining candidates** (pricing pages, hosting, redesigns, etc.)

**Estimated Effort:** 8-10 hours  
**Estimated Savings:** ~1,650 lines  
**Impact:** Complete codebase standardization

---

## Migration Checklist (Per Template)

For each template migration:

- [ ] **Identify inline patterns** (stats grids, feature lists, process timelines)
- [ ] **Extract data** to match component API format
- [ ] **Import pattern component** from `/src/app/components/patterns/`
- [ ] **Replace inline JSX** with component call
- [ ] **Pass appropriate props** (columns, variant, iconSize, etc.)
- [ ] **Test visual appearance** (should look identical)
- [ ] **Test responsive behavior** (mobile → tablet → desktop)
- [ ] **Test dark mode** (toggle theme switcher)
- [ ] **Test reduced motion** (enable in OS settings)
- [ ] **Verify accessibility** (keyboard navigation, screen reader)
- [ ] **Check for broken imports**
- [ ] **Verify zero build errors**
- [ ] **Document changes** in template JSDoc

---

## Design System Compliance Requirements

**CRITICAL:** All migrations MUST maintain 100% CSS variable compliance.

### Typography (MANDATORY)

```tsx
// ✅ CORRECT — Use CSS variables ONLY
fontFamily: 'var(--font-primary)'      // Lexend
fontFamily: 'var(--font-secondary)'    // Manrope

// ❌ WRONG — NEVER hardcode font names
fontFamily: 'Lexend, sans-serif'       // DON'T DO THIS
```

### Colors (MANDATORY)

```tsx
// ✅ CORRECT — Use semantic variables
color: 'var(--primary)'
backgroundColor: 'var(--background)'

// ❌ WRONG — NEVER hardcode hex values
color: '#FF6B35'                       // DON'T DO THIS
```

### Spacing (MANDATORY)

```tsx
// ✅ CORRECT — Use spacing tokens
padding: 'var(--spacing-6)'
gap: 'var(--spacing-4)'

// ❌ WRONG — NEVER hardcode px values
padding: '24px'                        // DON'T DO THIS
```

### Border Radius (MANDATORY)

```tsx
// ✅ CORRECT — Use radius tokens
borderRadius: 'var(--radius)'
borderRadius: 'var(--radius-lg)'

// ❌ WRONG — NEVER hardcode values
borderRadius: '8px'                    // DON'T DO THIS
```

**All pattern components (StatsGrid, FeatureList, ProcessTimeline) already follow these rules!**

---

## Success Metrics

### Quantitative Goals

- [ ] **42+ templates migrated** (StatsGrid: 12+, FeatureList: 20+, ProcessTimeline: 10+)
- [ ] **~2,300 lines removed** (JSX code elimination)
- [ ] **Zero build errors** after all migrations
- [ ] **Zero visual regressions** (templates look identical)
- [ ] **100% CSS variable compliance** maintained

### Qualitative Goals

- [ ] **Easier maintenance** — Update 1 pattern component → affects all templates
- [ ] **Better consistency** — All templates use same pattern variations
- [ ] **Faster development** — New templates can reuse existing patterns
- [ ] **Improved readability** — Template code focuses on content, not structure
- [ ] **Single source of truth** — Pattern logic centralized in component files

---

## Example Migration: WooCommerceSolutionTemplate

### Before (Inline Feature Cards)

```tsx
<div className="ecommerce-page__features-grid">
  {data.features.map((feature, index) => {
    const Icon = featureIcons[feature.title] || Zap;
    return (
      <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
        <div className="ecommerce-page__feature-card">
          <div className="ecommerce-page__feature-icon">
            <Icon size={24} />
          </div>
          <h3 className="ecommerce-page__feature-title">{feature.title}</h3>
          <p className="ecommerce-page__feature-desc">{feature.description}</p>
          <div className="ecommerce-page__feature-corner" aria-hidden="true" />
        </div>
      </ScrollReveal>
    );
  })}
</div>
```

**Lines:** ~15 lines × multiple sections = ~45-60 lines total

### After (FeatureList Component)

```tsx
<FeatureList
  items={data.features.map(feature => ({
    icon: featureIcons[feature.title] || Zap,
    title: feature.title,
    description: feature.description
  }))}
  columns={3}
  variant="glow"
  iconSize="md"
  iconStyle="rounded"
/>
```

**Lines:** ~9 lines  
**Savings:** ~36-51 lines per template section

---

## Implementation Timeline

| Week | Phase | Tasks | Effort | Lines Saved |
|------|-------|-------|--------|-------------|
| **Week 1** | High-Impact Quick Wins | 5 templates | 3-4h | ~250 lines |
| **Week 2** | Service Consolidation | 5 templates | 5-6h | ~400 lines |
| **Week 3-4** | Comprehensive Migration | 32 templates | 8-10h | ~1,650 lines |
| **TOTAL** | All Phases | **42 templates** | **16-20h** | **~2,300 lines** |

---

## Next Actions

1. **Start Phase 1** — Migrate WooCommerceSolutionTemplate (highest impact)
2. **Document pattern** — Create migration example for team reference
3. **Create PR** — Submit first batch for review
4. **Iterate** — Apply learnings to remaining templates
5. **Track progress** — Update this document as migrations complete

---

## Related Documentation

- **Component Files:**
  - `/src/app/components/patterns/StatsGrid.tsx`
  - `/src/app/components/patterns/FeatureList.tsx`
  - `/src/app/components/patterns/ProcessTimeline.tsx`

- **CSS Files:**
  - `/src/styles/patterns/stats-grid.css`
  - `/src/styles/patterns/feature-list.css`
  - `/src/styles/patterns/process-timeline.css`

- **Reports:**
  - `/reports/2026-03/memory-optimization-progress-week-1.md`
  - `/tasks/memory-optimization-tasks.md`

---

**Created:** March 3, 2026  
**Status:** 🟡 READY FOR IMPLEMENTATION  
**Next Step:** Begin Phase 1 migrations
