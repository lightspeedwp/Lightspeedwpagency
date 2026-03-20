# Stats Integration Quick Reference

Step-by-step guide for integrating the new stats system into existing service pages.

## 🎯 Quick Start

### Step 1: Import the Stats
```tsx
// Import the stats data
import { migrationsServiceStats } from '@/app/data/migrations-service-template-data';

// Import the StatsGrid component
import { StatsGrid } from '@/app/components/patterns/StatsGrid';
```

### Step 2: Transform the Data Format
```tsx
// Transform from {value, label} to {number, label}
const stats = migrationsServiceStats.map(stat => ({
  number: stat.value,
  label: stat.label,
  description: stat.description,
  icon: stat.icon
}));
```

### Step 3: Render the Stats
```tsx
<StatsGrid 
  stats={stats} 
  columns={4} 
  variant="cards" 
/>
```

## 📋 Service Page Templates

### Migrations Service Template

**Location:** `/src/app/components/templates/MigrationsServiceTemplate.tsx`

**Add these imports:**
```tsx
import { migrationsServiceStats, migrationTypes } from '../../data/migrations-service-template-data';
import { EnterpriseScaleMetrics, SEOContinuityMetrics } from '../patterns/AdvancedMetricsShowcase';
import { StatsGrid } from '../patterns/StatsGrid';
```

**Add stats after hero section:**
```tsx
{/* Overview section with stats */}
<Section>
  <Container>
    <Heading level={2}>Migration expertise</Heading>
    <Paragraph>
      We've successfully migrated 220k+ posts across 250+ sites with zero metadata loss.
    </Paragraph>
    
    <StatsGrid
      stats={migrationsServiceStats.map(s => ({
        number: s.value,
        label: s.label,
        description: s.description,
        icon: s.icon
      }))}
      columns={4}
      variant="cards"
    />
  </Container>
</Section>

{/* Enterprise scale showcase */}
<EnterpriseScaleMetrics />

{/* SEO continuity showcase */}
<SEOContinuityMetrics />
```

### Support Service Template

**Location:** `/src/app/components/templates/SupportServiceTemplate.tsx`

**Add these imports:**
```tsx
import { supportServiceStats, supportVolumeNote } from '../../data/support-service-template-data';
import { slaResponseTimes } from '../../data/sla-retainer-stats';
import { StatsGrid } from '../patterns/StatsGrid';
```

**Add stats sections:**
```tsx
{/* Support volume stats */}
<Section>
  <Container>
    <Heading level={2}>Support by the numbers</Heading>
    <Paragraph>{supportVolumeNote.description}</Paragraph>
    
    <StatsGrid
      stats={supportServiceStats.map(s => ({
        number: s.value,
        label: s.label,
        description: s.description,
        icon: s.icon
      }))}
      columns={4}
      variant="cards"
    />
  </Container>
</Section>

{/* SLA response times */}
<Section>
  <Container>
    <Heading level={2}>Response time commitments</Heading>
    
    <StatsGrid
      stats={slaResponseTimes.map(s => ({
        number: s.value,
        label: s.label,
        description: s.description,
        icon: s.icon
      }))}
      columns={4}
      variant="cards"
    />
  </Container>
</Section>
```

### Hosting Service Page

**Create:** `/src/app/components/templates/HostingServiceTemplate.tsx` (if doesn't exist)

**Or add to existing hosting page:**
```tsx
import { hostingServiceStats, hostingCapabilities } from '../../data/hosting-service-stats';
import { EnterpriseScaleMetrics } from '../patterns/AdvancedMetricsShowcase';
import { StatsGrid } from '../patterns/StatsGrid';

{/* Hosting stats */}
<Section>
  <Container>
    <Heading level={2}>{hostingCapabilities.title}</Heading>
    <Paragraph>{hostingCapabilities.description}</Paragraph>
    
    <StatsGrid
      stats={hostingServiceStats.map(s => ({
        number: s.value,
        label: s.label,
        description: s.description,
        icon: s.icon
      }))}
      columns={4}
      variant="cards"
    />
  </Container>
</Section>

{/* Enterprise scale */}
<EnterpriseScaleMetrics />
```

### Projects Service Page

**Add to existing projects/portfolio page:**
```tsx
import { projectsServiceStats, projectsOverview } from '../../data/projects-service-stats';
import { StatsGrid } from '../patterns/StatsGrid';

{/* Projects stats */}
<Section>
  <Container>
    <Heading level={2}>{projectsOverview.title}</Heading>
    <Paragraph>{projectsOverview.description}</Paragraph>
    
    <StatsGrid
      stats={projectsServiceStats.map(s => ({
        number: s.value,
        label: s.label,
        description: s.description,
        icon: s.icon
      }))}
      columns={3}
      variant="cards"
    />
  </Container>
</Section>
```

### Performance Service Template

**Already updated** - Using real stats:
- <1s LCP target
- 98 average Lighthouse score
- 68% average LCP reduction
- 72% sites achieving "Good" CWV

**Add advanced metrics:**
```tsx
import { PerformanceDeltaMetrics } from '../patterns/AdvancedMetricsShowcase';

{/* After main stats */}
<PerformanceDeltaMetrics
  heading="Real performance improvements"
  description="Average speed gains across client sites after optimization"
/>
```

### Development Service Page

**Already updated** - Stats array includes:
- 5 payment gateway plugins
- 50+ API integrations
- 150+ custom plugins
- 300+ custom themes
- 10+ open-source themes
- 30+ open-source plugins

**Add editor efficiency:**
```tsx
import { EditorEfficiencyMetrics } from '../patterns/AdvancedMetricsShowcase';

{/* After development stats */}
<EditorEfficiencyMetrics
  heading="Editor workflow improvements"
  description="Publishing efficiency gains with block themes vs page builders"
/>
```

### Design Service Page

**Already updated** - Stats array includes:
- 10+ design systems
- 112 LSX components
- 230 design tokens
- 10 full prototypes
- 25 Figma Make prototypes
- 2k+ design hours

## 🏠 Homepage Integration

### Add Aggregated Metrics Banner

**Location:** `/src/app/components/templates/HomePage.tsx` (or equivalent)

```tsx
import { AggregatedMetricsBanner } from '../patterns/AggregatedMetricsBanner';
import { LongevityTrustMetrics } from '../patterns/AdvancedMetricsShowcase';

{/* After hero section */}
<AggregatedMetricsBanner
  heading="By the numbers"
  description="Real results from 17+ years of WordPress engineering excellence"
  columns={4}
  variant="cards"
/>

{/* Before testimonials section */}
<LongevityTrustMetrics
  heading="Built to last"
  description="Trusted partner through every WordPress evolution"
/>
```

## 📄 About Page Integration

### Add Company History Stats

**Location:** `/src/app/components/templates/AboutPage.tsx` (or equivalent)

```tsx
import { AggregatedMetricsBanner } from '../patterns/AggregatedMetricsBanner';
import { LongevityTrustMetrics } from '../patterns/AdvancedMetricsShowcase';

{/* Company overview section */}
<Section>
  <Container>
    <Heading level={2}>Our story</Heading>
    <Paragraph>
      Since 2009, we've been helping businesses succeed with WordPress...
    </Paragraph>
  </Container>
</Section>

{/* Aggregated metrics */}
<AggregatedMetricsBanner
  heading="17+ years of WordPress excellence"
  description="Trusted by industry leaders across 6 continents"
/>

{/* Longevity & trust */}
<LongevityTrustMetrics
  heading="Evolution & expertise"
  description="We've guided clients through every major WordPress transition"
/>
```

## 🔄 Data Format Transformation Helper

### Reusable Transform Function

```tsx
// Create a helper function in your template
const transformStats = (stats: Array<{ value: string; label: string; icon: any; description?: string }>) => {
  return stats.map(stat => ({
    number: stat.value,
    label: stat.label,
    description: stat.description,
    icon: stat.icon
  }));
};

// Use it throughout your template
<StatsGrid stats={transformStats(migrationsServiceStats)} columns={4} variant="cards" />
<StatsGrid stats={transformStats(supportServiceStats)} columns={4} variant="cards" />
```

## 🎨 Styling Variants

### Default (Bordered Grid)
```tsx
<StatsGrid stats={stats} columns={3} variant="default" />
```

### Cards (Background Cards)
```tsx
<StatsGrid stats={stats} columns={4} variant="cards" />
```

### Inline (Compact Hero Stats)
```tsx
<StatsGrid stats={stats} columns={4} variant="inline" />
```

### Compact (Smaller Sizing)
```tsx
<StatsGrid stats={stats} columns={3} variant="compact" />
```

## ✅ Checklist

When integrating stats into a template:

- [ ] Import the stats data from correct data file
- [ ] Import StatsGrid component
- [ ] Transform data format (value → number)
- [ ] Choose appropriate number of columns (2-4)
- [ ] Select variant that fits design context
- [ ] Add semantic heading before stats
- [ ] Include descriptive paragraph if needed
- [ ] Verify icons are Phosphor icons (duotone weight)
- [ ] Check labels are sentence case
- [ ] Test responsive behavior on mobile
- [ ] Verify accessibility (ARIA labels, semantic HTML)

## 🐛 Common Issues

### Issue: Stats not displaying
**Solution:** Check that you've transformed the data format from `value` to `number`

### Issue: Icons not showing
**Solution:** Verify you're importing the icon component, not just the string

### Issue: Grid not responsive
**Solution:** Ensure parent container has proper width constraints

### Issue: Stats crowded on mobile
**Solution:** Reduce columns on mobile with CSS media queries or variant="compact"

## 📚 Reference Files

- **Stats Data:** `/src/app/data/stats/`
- **Components:** `/src/app/components/patterns/`
- **Styles:** `/src/styles/patterns/`
- **Documentation:** `/src/app/data/stats/README.md`

---

**Need Help?** Check the full documentation in `/src/app/data/stats/README.md`
