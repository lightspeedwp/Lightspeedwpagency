# Stats & Metrics System

Comprehensive statistics and metrics system for LightSpeed WP Agency site.

## 📊 Overview

The stats system provides real-world data across multiple categories:

1. **Service-Specific Stats** - Individual service page metrics
2. **Advanced Metrics** - Performance, scale, SEO, longevity, and efficiency
3. **Aggregated Metrics** - Company-wide overview stats

## 🗂️ File Structure

```
/src/app/data/stats/
├── advanced-metrics.ts          # Advanced category metrics
├── index.ts                     # Centralized exports
└── README.md                    # This file

/src/app/data/
├── hosting-service-stats.ts     # Hosting & deployments stats
├── projects-service-stats.ts    # Projects & builds stats
├── sla-retainer-stats.ts        # SLA response times & retainer stats
├── migrations-service-template-data.tsx  # Migrations stats
├── support-service-template-data.tsx     # Support stats
├── design-service-page.ts       # Design stats
├── development-service-page.ts  # Development stats
└── [service]-template-data.tsx  # Other service stats

/src/app/components/patterns/
├── AggregatedMetricsBanner.tsx  # Company-wide metrics banner
├── AdvancedMetricsShowcase.tsx  # Advanced metrics displays
└── StatsGrid.tsx                # Base stats grid component
```

## 📈 Available Metrics

### Service-Specific Stats

#### SEO Service
- `seoServiceResults` - 156% organic traffic, 12x rankings, 92% CTR, 3-6 mo

#### Analytics Service
- `analyticsServiceResults` - 250% insights, 58% tracking, 15x reporting, 42% silos

#### AI Engine Service
- `aiEngineServiceResults` - 285% citations, 4x referrals, 94% accuracy, 6-9 mo

#### Answer Engine Service
- `answerEngineServiceResults` - 420% snippets, 4.2x voice search, 91% accuracy, 2-4 mo

#### Development Service
- `developmentServiceOverview.stats` - 5 gateways, 50+ APIs, 150+ plugins, 300+ themes

#### Design Service
- `designServiceOverview.stats` - 10+ systems, 112 components, 230 tokens, 25 prototypes

#### Performance Service
- `performanceServiceStats` - <1s LCP, 98 Lighthouse, 68% reduction, 72% good CWV

#### Migrations Service
- `migrationsServiceStats` - 220k+ posts, 250+ sites, 6+ types, 15+ years

#### Support Service
- `supportServiceStats` - 10,575+ tickets, 13/day, 68/week, 290/month

#### Hosting Service
- `hostingServiceStats` - 250+ sites, 10k peak sessions, <12 deployments, 4k+ hours

#### Projects Service
- `projectsServiceStats` - 1,500+ projects, 300+ websites, 12 active builds

#### SLA & Retainers
- `slaResponseTimes` - 24h urgent, 48h important, 72h normal, 1 week minor
- `retainerClientStats` - 20 clients, ~100 sites

### Advanced Metrics

#### Performance Delta
```typescript
import { performanceDeltaMetrics } from '@/app/data/stats/advanced-metrics';
```
- 68% average LCP reduction
- 72% Core Web Vitals improvement
- 3.2s load time reduction
- 85% speed score improvement

#### Enterprise Scale
```typescript
import { enterpriseScaleMetrics } from '@/app/data/stats/advanced-metrics';
```
- 220k+ largest single migration
- 15TB+ database cleanup
- 10k peak concurrent sessions
- 100k anticipated peak capacity

#### SEO Continuity
```typescript
import { seoContinuityMetrics } from '@/app/data/stats/advanced-metrics';
```
- 15k+ 301 redirects managed
- 94% SEO parity within 30 days
- 98% content preservation rate
- 0% metadata loss

#### Longevity & Trust
```typescript
import { longevityTrustMetrics } from '@/app/data/stats/advanced-metrics';
```
- 17+ years in business
- 5 WordPress eras
- 85% client retention (10+ years)
- 100% uptime commitment

#### Editor Efficiency
```typescript
import { editorEfficiencyMetrics } from '@/app/data/stats/advanced-metrics';
```
- 65% publishing time reduction
- 80% fewer support tickets
- 3x content production increase
- 90% editor satisfaction

#### Aggregated Company Metrics
```typescript
import { aggregatedCompanyMetrics } from '@/app/data/stats/advanced-metrics';
```
- 17+ years in business
- 1,500+ projects completed
- 220k+ posts migrated
- 300+ websites built
- 10+ design systems
- 250+ sites hosted
- 20 retainer clients
- 10,575+ tickets resolved

## 🎨 Components

### 1. StatsGrid (Base Component)

The foundation for all stats displays.

```tsx
import { StatsGrid } from '@/app/components/patterns/StatsGrid';

<StatsGrid
  stats={[
    { number: '150+', label: 'Projects delivered', icon: Briefcase },
    { number: '98%', label: 'Client satisfaction', icon: Star }
  ]}
  columns={3}
  variant="cards"
/>
```

**Props:**
- `stats` - Array of stat objects with `number`, `label`, optional `description` and `icon`
- `columns` - 2, 3, or 4 (default: 3)
- `variant` - 'default', 'inline', 'compact', or 'cards' (default: 'default')

### 2. AggregatedMetricsBanner

Company-wide metrics banner for homepage/about page.

```tsx
import { AggregatedMetricsBanner } from '@/app/components/patterns/AggregatedMetricsBanner';

<AggregatedMetricsBanner
  heading="By the numbers"
  description="Real results from 17+ years of WordPress engineering excellence"
  columns={4}
  variant="cards"
/>
```

**Props:**
- `heading` - Banner heading (default: "By the numbers")
- `description` - Optional description text
- `columns` - 2, 3, or 4 (default: 4)
- `variant` - 'default', 'cards', or 'inline' (default: 'cards')
- `stats` - Optional custom stats (defaults to aggregatedCompanyMetrics)

### 3. Advanced Metrics Showcase Components

Specialized displays for different metric categories.

```tsx
import {
  PerformanceDeltaMetrics,
  EnterpriseScaleMetrics,
  SEOContinuityMetrics,
  LongevityTrustMetrics,
  EditorEfficiencyMetrics
} from '@/app/components/patterns/AdvancedMetricsShowcase';

// Performance improvements
<PerformanceDeltaMetrics
  heading="Performance improvements"
  description="Average speed improvements across client sites"
  columns={4}
  variant="cards"
/>

// Enterprise scale
<EnterpriseScaleMetrics
  heading="Enterprise scale"
  description="Large-scale migration capabilities"
  columns={4}
  variant="cards"
/>

// SEO continuity
<SEOContinuityMetrics
  heading="SEO continuity"
  description="Preserving rankings during migrations"
  columns={4}
  variant="cards"
/>

// Longevity & trust
<LongevityTrustMetrics
  heading="Longevity & trust"
  description="17+ years of WordPress expertise"
  columns={4}
  variant="cards"
/>

// Editor efficiency
<EditorEfficiencyMetrics
  heading="Editor efficiency"
  description="Workflow improvements with block themes"
  columns={4}
  variant="cards"
/>
```

## 📍 Where to Use

### Homepage
- `<AggregatedMetricsBanner />` in hero or overview section
- `<LongevityTrustMetrics />` near testimonials or social proof

### About Page
- `<AggregatedMetricsBanner />` in company overview
- `<LongevityTrustMetrics />` in history/timeline section

### Performance Service Page
- `<PerformanceDeltaMetrics />` after service overview
- Existing `performanceServiceStats` in hero section

### Migrations Service Page
- `<EnterpriseScaleMetrics />` showcasing large migrations
- `<SEOContinuityMetrics />` highlighting SEO preservation
- Existing `migrationsServiceStats` in overview

### Development Service Page
- `<EditorEfficiencyMetrics />` showing workflow improvements
- Existing `developmentServiceOverview.stats` in hero

### Hosting Service Page
- `<EnterpriseScaleMetrics />` demonstrating scale capabilities
- `hostingServiceStats` from data file

### Support Service Page
- `supportServiceStats` in overview
- `slaResponseTimes` in SLA section

## 🎯 Design System Compliance

All stats components follow LightSpeed design system guidelines:

✅ **100% CSS Variables** - All colors, spacing, typography from `global.css`  
✅ **Phosphor Icons** - Duotone weight for all stat icons  
✅ **BEM Methodology** - Proper CSS class naming  
✅ **Sentence Case** - All labels use sentence case  
✅ **WCAG 2.2 AA** - Accessible color contrast and semantic HTML  
✅ **Responsive** - Mobile-first grid layouts  
✅ **Motion Safety** - Respects `prefers-reduced-motion`

## 📝 Data Format

Stats use two slightly different formats:

### Format 1: Service Stats (value/label)
```typescript
{
  value: '220k+',
  label: 'Posts migrated',
  icon: FileText,
  description: 'Content successfully migrated'
}
```

### Format 2: StatsGrid (number/label)
```typescript
{
  number: '220k+',
  label: 'Posts migrated',
  icon: FileText,
  description: 'Content successfully migrated'
}
```

Components automatically transform between formats as needed.

## 🔄 Updating Stats

To update statistics:

1. Edit the relevant data file in `/src/app/data/`
2. For advanced metrics, edit `/src/app/data/stats/advanced-metrics.ts`
3. Stats are centralized - changes propagate to all pages automatically
4. Use consistent formatting (K for thousands, M for millions, + for approximate)
5. Keep labels in sentence case
6. Always include appropriate Phosphor icon

## 🚀 Examples

### Simple Service Page Stats
```tsx
import { migrationsServiceStats } from '@/app/data/migrations-service-template-data';
import { StatsGrid } from '@/app/components/patterns/StatsGrid';

const transformedStats = migrationsServiceStats.map(stat => ({
  number: stat.value,
  label: stat.label,
  description: stat.description,
  icon: stat.icon
}));

<StatsGrid stats={transformedStats} columns={4} variant="cards" />
```

### Homepage Hero with Aggregated Metrics
```tsx
import { AggregatedMetricsBanner } from '@/app/components/patterns/AggregatedMetricsBanner';

<AggregatedMetricsBanner
  heading="Trusted by industry leaders"
  description="Real results from real projects"
  columns={4}
  variant="cards"
/>
```

### Performance Page with Delta Metrics
```tsx
import { PerformanceDeltaMetrics } from '@/app/components/patterns/AdvancedMetricsShowcase';

<PerformanceDeltaMetrics
  heading="Proven performance improvements"
  description="Real speed gains from actual client projects"
  columns={4}
  variant="cards"
/>
```

## 📚 Related Documentation

- **StatsGrid Pattern**: `/src/styles/patterns/stats-grid.css`
- **Metrics Showcase Styles**: `/src/styles/patterns/metrics-showcase.css`
- **Aggregated Banner Styles**: `/src/styles/patterns/aggregated-metrics-banner.css`
- **Design System Guidelines**: `/Guidelines.md`
- **Icon Registry**: `/src/app/data/icon-registry.ts`

---

**Last Updated:** March 18, 2026  
**Maintained By:** LightSpeed WP Agency  
**Status:** ✅ Production Ready
