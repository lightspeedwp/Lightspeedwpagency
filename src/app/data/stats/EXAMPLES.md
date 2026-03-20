# Stats System Usage Examples

Visual examples showing different ways to implement the stats system.

## 🎨 Example 1: Homepage Hero with Aggregated Metrics

```tsx
import { AggregatedMetricsBanner } from '@/app/data/stats';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="hero">
        <Container>
          <Heading level={1}>AI-driven WordPress engineering</Heading>
          <Paragraph>
            17+ years building enterprise WordPress solutions
          </Paragraph>
          <ButtonGroup>
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">View Portfolio</Button>
          </ButtonGroup>
        </Container>
      </Section>

      {/* Aggregated Metrics Banner */}
      <AggregatedMetricsBanner
        heading="By the numbers"
        description="Real results from 17+ years of WordPress engineering excellence"
        columns={4}
        variant="cards"
      />

      {/* Rest of homepage... */}
    </>
  );
}
```

**Result:** Displays 8 key company metrics in a 4-column grid with card styling.

---

## 📊 Example 2: Migrations Service Page

```tsx
import { 
  migrationsServiceStats, 
  migrationTypes 
} from '@/app/data/migrations-service-template-data';
import { 
  EnterpriseScaleMetrics, 
  SEOContinuityMetrics 
} from '@/app/data/stats';
import { StatsGrid } from '@/app/components/patterns/StatsGrid';

export function MigrationsServiceTemplate() {
  // Transform stats format
  const stats = migrationsServiceStats.map(s => ({
    number: s.value,
    label: s.label,
    description: s.description,
    icon: s.icon
  }));

  return (
    <>
      {/* Hero */}
      <Section className="hero">
        <Container>
          <Badge icon={Database}>Migrations</Badge>
          <Heading level={1}>WordPress migrations</Heading>
          <Paragraph>
            Zero downtime. Zero data loss. 220k+ posts migrated.
          </Paragraph>
        </Container>
      </Section>

      {/* Migration Stats */}
      <Section>
        <Container>
          <Heading level={2}>Migration expertise</Heading>
          <Paragraph>
            We've successfully migrated 220,000+ posts across 250+ sites 
            with zero metadata loss.
          </Paragraph>
          
          <StatsGrid stats={stats} columns={4} variant="cards" />
          
          {/* Migration types */}
          <div className="migration-types">
            <Heading level={3}>Supported migration types</Heading>
            <CheckList items={migrationTypes.types} />
          </div>
        </Container>
      </Section>

      {/* Enterprise Scale */}
      <EnterpriseScaleMetrics
        heading="Enterprise-scale migrations"
        description="Proven capability to handle massive WordPress migrations"
      />

      {/* SEO Continuity */}
      <SEOContinuityMetrics
        heading="Preserving your SEO investment"
        description="Maintaining search rankings during migrations"
      />
    </>
  );
}
```

**Result:** Complete migrations page with:
- Overview stats (220k+ posts, 250+ sites, 6+ types)
- Enterprise scale metrics (largest migrations, peak capacity)
- SEO continuity metrics (redirect management, SEO parity)

---

## 🎯 Example 3: Performance Service Page

```tsx
import { performanceServiceStats } from '@/app/data/performance-service-page';
import { PerformanceDeltaMetrics } from '@/app/data/stats';
import { StatsGrid } from '@/app/components/patterns/StatsGrid';

export function PerformanceServiceTemplate() {
  const stats = performanceServiceStats.map(s => ({
    number: s.value,
    label: s.label,
    icon: s.icon
  }));

  return (
    <>
      {/* Hero with inline stats */}
      <Section className="hero">
        <Container>
          <Heading level={1}>WordPress performance optimization</Heading>
          <Paragraph>
            Blazing-fast load times and perfect Core Web Vitals
          </Paragraph>
          
          {/* Inline stats in hero */}
          <StatsGrid stats={stats} columns={4} variant="inline" />
        </Container>
      </Section>

      {/* Detailed performance improvements */}
      <PerformanceDeltaMetrics
        heading="Real performance improvements"
        description="Average speed and Core Web Vitals improvements across client sites"
        columns={4}
        variant="cards"
      />
    </>
  );
}
```

**Result:** Performance page with:
- Hero stats (<1s LCP, 98 Lighthouse, 68% reduction, 72% good CWV)
- Detailed delta metrics (LCP reduction, CWV improvement, load time, speed score)

---

## 🏢 Example 4: About Page

```tsx
import { 
  AggregatedMetricsBanner, 
  LongevityTrustMetrics 
} from '@/app/data/stats';

export function AboutPage() {
  return (
    <>
      {/* Company story */}
      <Section>
        <Container>
          <Heading level={1}>Our story</Heading>
          <Paragraph>
            Since 2009, we've been helping businesses succeed with WordPress...
          </Paragraph>
        </Container>
      </Section>

      {/* Aggregated metrics */}
      <AggregatedMetricsBanner
        heading="17+ years of WordPress excellence"
        description="Trusted by industry leaders across 6 continents"
        columns={4}
        variant="cards"
      />

      {/* Company timeline */}
      <Section>
        <Container>
          <Heading level={2}>Our journey</Heading>
          {/* Timeline component... */}
        </Container>
      </Section>

      {/* Longevity & trust */}
      <LongevityTrustMetrics
        heading="Evolution & expertise"
        description="We've guided clients through every major WordPress transition"
        columns={4}
        variant="cards"
      />
    </>
  );
}
```

**Result:** About page with:
- Aggregated company metrics (8 key stats)
- Longevity & trust metrics (17+ years, 5 WordPress eras, 85% retention)

---

## 💼 Example 5: Support Service Page

```tsx
import { 
  supportServiceStats, 
  supportVolumeNote 
} from '@/app/data/support-service-template-data';
import { slaResponseTimes } from '@/app/data/sla-retainer-stats';
import { StatsGrid } from '@/app/components/patterns/StatsGrid';

export function SupportServiceTemplate() {
  const volumeStats = supportServiceStats.map(s => ({
    number: s.value,
    label: s.label,
    description: s.description,
    icon: s.icon
  }));

  const slaStats = slaResponseTimes.map(s => ({
    number: s.value,
    label: s.label,
    description: s.description,
    icon: s.icon
  }));

  return (
    <>
      {/* Support volume */}
      <Section>
        <Container>
          <Heading level={2}>Support by the numbers</Heading>
          <Paragraph>{supportVolumeNote.description}</Paragraph>
          
          <StatsGrid stats={volumeStats} columns={4} variant="cards" />
        </Container>
      </Section>

      {/* SLA commitments */}
      <Section>
        <Container>
          <Heading level={2}>Response time commitments</Heading>
          <Paragraph>
            Guaranteed response times based on issue priority
          </Paragraph>
          
          <StatsGrid stats={slaStats} columns={4} variant="cards" />
        </Container>
      </Section>
    </>
  );
}
```

**Result:** Support page with:
- Support volume stats (10,575+ tickets, 13/day, 68/week, 290/month)
- SLA response times (24h urgent, 48h important, 72h normal, 1 week minor)

---

## 🎨 Example 6: Development Service Page

```tsx
import { developmentServiceOverview } from '@/app/data/development-service-page';
import { EditorEfficiencyMetrics } from '@/app/data/stats';
import { StatsGrid } from '@/app/components/patterns/StatsGrid';

export function DevelopmentServiceTemplate() {
  const devStats = developmentServiceOverview.stats.map(s => ({
    number: s.value,
    label: s.label,
    description: s.description,
    icon: s.icon
  }));

  return (
    <>
      {/* Development capabilities */}
      <Section>
        <Container>
          <Heading level={2}>Development expertise</Heading>
          
          <StatsGrid stats={devStats} columns={3} variant="cards" />
        </Container>
      </Section>

      {/* Editor workflow improvements */}
      <EditorEfficiencyMetrics
        heading="Editor workflow improvements"
        description="Publishing efficiency gains with block themes vs page builders"
        columns={4}
        variant="cards"
      />
    </>
  );
}
```

**Result:** Development page with:
- Dev stats (5 gateways, 50+ APIs, 150+ plugins, 300+ themes, 10+ OSS themes, 30+ OSS plugins)
- Editor efficiency (65% time reduction, 80% fewer tickets, 3x production, 90% satisfaction)

---

## 🔧 Example 7: Hosting Service Page

```tsx
import { 
  hostingServiceStats, 
  hostingCapabilities 
} from '@/app/data/hosting-service-stats';
import { EnterpriseScaleMetrics } from '@/app/data/stats';
import { StatsGrid } from '@/app/components/patterns/StatsGrid';

export function HostingServiceTemplate() {
  const stats = hostingServiceStats.map(s => ({
    number: s.value,
    label: s.label,
    description: s.description,
    icon: s.icon
  }));

  return (
    <>
      {/* Hosting overview */}
      <Section>
        <Container>
          <Heading level={2}>{hostingCapabilities.title}</Heading>
          <Paragraph>{hostingCapabilities.description}</Paragraph>
          
          <StatsGrid stats={stats} columns={4} variant="cards" />
          
          <CheckList items={hostingCapabilities.features} />
        </Container>
      </Section>

      {/* Enterprise scale */}
      <EnterpriseScaleMetrics
        heading="Enterprise-scale hosting"
        description="Proven capability to handle high-traffic WordPress sites"
      />
    </>
  );
}
```

**Result:** Hosting page with:
- Hosting stats (250+ sites, 10k peak sessions, <12 deploys/year, 4k+ hours)
- Enterprise scale metrics (peak capacity, concurrent sessions)

---

## 📊 Example 8: Custom Stats Grid

```tsx
import { StatsGrid } from '@/app/components/patterns/StatsGrid';
import { Rocket, Users, Star, TrendUp } from '@phosphor-icons/react';

export function CustomStatsSection() {
  const customStats = [
    {
      number: '500+',
      label: 'Custom metric',
      description: 'Specific to your needs',
      icon: Rocket
    },
    {
      number: '99%',
      label: 'Custom percentage',
      description: 'Another custom stat',
      icon: Users
    },
    {
      number: '4.9/5',
      label: 'Custom rating',
      description: 'Rating from clients',
      icon: Star
    },
    {
      number: '3x',
      label: 'Custom multiplier',
      description: 'Growth metric',
      icon: TrendUp
    }
  ];

  return (
    <Section>
      <Container>
        <Heading level={2}>Custom stats section</Heading>
        
        <StatsGrid 
          stats={customStats} 
          columns={4} 
          variant="cards" 
        />
      </Container>
    </Section>
  );
}
```

**Result:** Fully custom stats with your own data and icons.

---

## 🎨 Styling Variants

### Default (Bordered Grid)
```tsx
<StatsGrid stats={stats} columns={3} variant="default" />
```
Clean borders, minimal styling.

### Cards (Background Cards)
```tsx
<StatsGrid stats={stats} columns={4} variant="cards" />
```
Card-style backgrounds with hover effects.

### Inline (Compact Hero Stats)
```tsx
<StatsGrid stats={stats} columns={4} variant="inline" />
```
Compact inline display for hero sections.

### Compact (Smaller Sizing)
```tsx
<StatsGrid stats={stats} columns={3} variant="compact" />
```
Reduced sizing for tight spaces.

---

## 📱 Responsive Behavior

All stats grids automatically adapt:

- **Desktop (>1024px):** Shows specified columns (2-4)
- **Tablet (768px-1024px):** Shows 2-3 columns
- **Mobile (<768px):** Shows 1-2 columns

```tsx
// This 4-column grid...
<StatsGrid stats={stats} columns={4} variant="cards" />

// Becomes:
// Desktop: 4 columns
// Tablet: 2 columns
// Mobile: 1 column
```

---

## 🎯 Quick Reference

| Use Case | Component | Props |
|----------|-----------|-------|
| Homepage overview | `<AggregatedMetricsBanner />` | `columns={4}`, `variant="cards"` |
| Service page stats | `<StatsGrid />` | Transform data, `columns={3-4}` |
| Performance page | `<PerformanceDeltaMetrics />` | `columns={4}`, `variant="cards"` |
| Migrations page | `<EnterpriseScaleMetrics />` + `<SEOContinuityMetrics />` | Both with `columns={4}` |
| About page | `<LongevityTrustMetrics />` | `columns={4}`, `variant="cards"` |
| Support page | `<StatsGrid />` with `slaResponseTimes` | `columns={4}` |
| Development page | `<EditorEfficiencyMetrics />` | `columns={4}` |

---

**Need more examples?** Check `/src/app/data/stats/README.md` for complete documentation.
