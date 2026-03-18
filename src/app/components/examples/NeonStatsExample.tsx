/**
 * Neon Stats Usage Examples
 *
 * Demonstrates how to use the NeonStats component with different
 * neon accent colors relevant to different pages.
 *
 * @see /src/app/components/common/NeonStats.tsx
 * @see /src/styles/components/neon-stats.css
 */

import React from 'react';
import { NeonStats, NeonStat } from '../common/NeonStats';
import {
  TrendUp,
  Users,
  Rocket,
  CheckCircle,
  Lightning,
  Code,
  Globe,
  Sparkle,
} from '@phosphor-icons/react';

/**
 * Example 1: AI Services Page - Cyan Accent
 */
export function AIServicesStats() {
  const stats: NeonStat[] = [
    {
      id: 'ai-projects',
      value: '150+',
      label: 'AI Projects',
      description: 'Successfully delivered',
      icon: Rocket,
      trend: {
        value: '+32% this year',
        direction: 'up',
      },
    },
    {
      id: 'ai-accuracy',
      value: '98.5%',
      label: 'Accuracy Rate',
      description: 'Model performance',
      icon: CheckCircle,
    },
    {
      id: 'ai-clients',
      value: '75+',
      label: 'AI Clients',
      description: 'Across all industries',
      icon: Users,
      trend: {
        value: '+45% growth',
        direction: 'up',
      },
    },
    {
      id: 'ai-speed',
      value: '10x',
      label: 'Faster Output',
      description: 'Compared to manual',
      icon: Lightning,
    },
  ];

  return (
    <NeonStats
      stats={stats}
      title="AI-powered results that matter"
      subtitle="Our AI solutions deliver measurable improvements across every metric that counts."
      columns={4}
      accentColor="var(--wp--preset--color--neon-cyan)"
      variant="glass"
      showIcons={true}
    />
  );
}

/**
 * Example 2: Development Services Page - Pink Accent
 */
export function DevelopmentServicesStats() {
  const stats: NeonStat[] = [
    {
      id: 'dev-sites',
      value: '500+',
      label: 'Sites Built',
      description: 'Production-ready',
      icon: Code,
    },
    {
      id: 'dev-uptime',
      value: '99.9%',
      label: 'Uptime',
      description: 'Guaranteed SLA',
      icon: CheckCircle,
    },
    {
      id: 'dev-speed',
      value: '<2s',
      label: 'Load Time',
      description: 'Average page speed',
      icon: Lightning,
      trend: {
        value: '-40% improvement',
        direction: 'up',
      },
    },
    {
      id: 'dev-clients',
      value: '200+',
      label: 'Happy Clients',
      description: 'Long-term partners',
      icon: Users,
    },
  ];

  return (
    <NeonStats
      stats={stats}
      title="Development excellence by the numbers"
      subtitle="Enterprise-grade development with a proven track record of performance and reliability."
      columns={4}
      accentColor="var(--wp--preset--color--neon-pink)"
      variant="glass"
      showIcons={true}
    />
  );
}

/**
 * Example 3: SEO Services Page - Lime Accent
 */
export function SEOServicesStats() {
  const stats: NeonStat[] = [
    {
      id: 'seo-rankings',
      value: '450%',
      label: 'Avg. Growth',
      description: 'First-page rankings',
      icon: TrendUp,
      trend: {
        value: '+85% YoY',
        direction: 'up',
      },
    },
    {
      id: 'seo-traffic',
      value: '3.2M',
      label: 'Monthly Traffic',
      description: 'Organic visitors',
      icon: Globe,
      trend: {
        value: '+120% increase',
        direction: 'up',
      },
    },
    {
      id: 'seo-conversions',
      value: '28%',
      label: 'Conv. Rate',
      description: 'Above industry avg',
      icon: Sparkle,
    },
    {
      id: 'seo-campaigns',
      value: '180+',
      label: 'Campaigns',
      description: 'Successfully launched',
      icon: Rocket,
    },
  ];

  return (
    <NeonStats
      stats={stats}
      title="SEO performance that drives growth"
      subtitle="Data-driven SEO strategies that deliver measurable improvements in rankings, traffic, and conversions."
      columns={4}
      accentColor="var(--wp--preset--color--neon-lime)"
      variant="glass"
      showIcons={true}
    />
  );
}

/**
 * Example 4: Custom Hex Color - Yellow Accent (Consulting Page)
 */
export function ConsultingStats() {
  const stats: NeonStat[] = [
    {
      id: 'consulting-hours',
      value: '12K+',
      label: 'Consulting Hours',
      description: 'Expert guidance delivered',
      icon: Users,
    },
    {
      id: 'consulting-roi',
      value: '340%',
      label: 'Avg. ROI',
      description: 'Client return on investment',
      icon: TrendUp,
      trend: {
        value: '+25% YoY',
        direction: 'up',
      },
    },
    {
      id: 'consulting-satisfaction',
      value: '4.9/5',
      label: 'Satisfaction',
      description: 'Client rating',
      icon: CheckCircle,
    },
  ];

  return (
    <NeonStats
      stats={stats}
      title="Consulting expertise you can trust"
      subtitle="Strategic guidance that transforms businesses and delivers exceptional ROI."
      columns={3}
      accentColor="var(--wp--preset--color--neon-yellow)"
      variant="solid"
      showIcons={true}
    />
  );
}

/**
 * Example 5: Minimal Stats (No Icons, Default Variant)
 */
export function MinimalStats() {
  const stats: NeonStat[] = [
    {
      id: 'minimal-1',
      value: '10+',
      label: 'Years',
      description: 'In business',
    },
    {
      id: 'minimal-2',
      value: '500+',
      label: 'Projects',
      description: 'Successfully delivered',
    },
    {
      id: 'minimal-3',
      value: '200+',
      label: 'Clients',
      description: 'Across 30 countries',
    },
    {
      id: 'minimal-4',
      value: '24/7',
      label: 'Support',
      description: 'Always available',
    },
  ];

  return (
    <NeonStats
      stats={stats}
      columns={4}
      accentColor="var(--wp--preset--color--neon-cyan)"
      variant="default"
      showIcons={false}
    />
  );
}

/**
 * Example 6: Two-Column Layout (Larger Stats)
 */
export function TwoColumnStats() {
  const stats: NeonStat[] = [
    {
      id: 'two-col-1',
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability with monitoring',
      icon: CheckCircle,
    },
    {
      id: 'two-col-2',
      value: '<100ms',
      label: 'Response Time',
      description: 'Lightning-fast server response',
      icon: Lightning,
      trend: {
        value: '-60% faster',
        direction: 'up',
      },
    },
  ];

  return (
    <NeonStats
      stats={stats}
      title="Performance you can measure"
      subtitle="Industry-leading metrics backed by our infrastructure and expertise."
      columns={2}
      accentColor="var(--wp--preset--color--neon-pink)"
      variant="glass"
      showIcons={true}
    />
  );
}
