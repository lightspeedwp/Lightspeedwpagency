/**
 * Performance Service Page Data
 *
 * Mock data for the Performance Service page (PerformanceServiceTemplate).
 * 
 * Exports: performanceServiceHero, performanceServiceOverview,
 *          performanceServiceFeatures, performanceServiceProcess,
 *          performanceServiceStats, performanceServiceCTA
 *
 * @see /src/app/components/templates/PerformanceServiceTemplate.tsx
 */

import {
  Gauge,
  HardDrive,
  DeviceMobile,
  Stack,
  ChartBar,
  MagnifyingGlass,
  Lightning,
  CheckCircle,
  Pulse,
} from '@phosphor-icons/react';

export const performanceServiceHero = {
  title: 'WordPress Performance Optimisation',
  subtitle:
    'Blazing-fast load times, perfect Core Web Vitals scores, and a user experience that keeps visitors coming back.',
  badge: { text: 'CORE WEB VITALS OPTIMISED', icon: Lightning },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
};

export const performanceServiceOverview = {
  title: 'Why LightSpeed performance matters',
  description:
    'Every millisecond counts. Slow sites lose visitors, tank SEO rankings, and bleed conversions. Our performance optimisation service delivers measurable speed gains backed by real-world metrics — not guesswork.',
};

export const performanceServiceFeatures = {
  title: 'What we optimise',
  features: [
    {
      icon: Gauge,
      title: 'Speed audit',
      description:
        'Full Lighthouse & WebPageTest analysis with a prioritised action plan.',
    },
    {
      icon: Stack,
      title: 'Code optimisation',
      description:
        'Critical CSS extraction, JS defer/async, unused code elimination.',
    },
    {
      icon: HardDrive,
      title: 'Caching strategy',
      description:
        'Server-side, edge, and browser caching configured for instant repeat visits.',
    },
    {
      icon: DeviceMobile,
      title: 'Asset optimisation',
      description:
        'AVIF/WebP images, font subsetting, lazy loading for below-the-fold media.',
    },
  ],
};

export const performanceServiceProcess = {
  title: 'Our 5-Step Protocol',
  steps: [
    {
      step: 'Benchmark',
      description: 'Lighthouse CI baseline on desktop & mobile.',
      icon: ChartBar,
    },
    {
      step: 'Analyse',
      description: 'Waterfall audit — identify bottlenecks.',
      icon: MagnifyingGlass,
    },
    {
      step: 'Optimise',
      description: 'Code-split, compress, cache, and defer.',
      icon: Lightning,
    },
    {
      step: 'Validate',
      description: 'Re-test against Web Vitals thresholds.',
      icon: CheckCircle,
    },
    {
      step: 'Monitor',
      description: 'Continuous RUM alerting via Analytics.',
      icon: Pulse,
    },
  ],
};

export const performanceServiceStats = [
  { value: '<1s', label: 'LCP Target' },
  { value: '100', label: 'Lighthouse Score' },
  { value: '50%', label: 'Avg Speed Boost' },
  { value: '24/7', label: 'RUM Monitoring' },
];

export const performanceServiceCTA = {
  title: "Don't Let Speed Kill Conversions",
  description:
    'Every 100 ms of load time costs you revenue. Let us make your site fly.',
  button: { text: 'Get a Performance Audit', page: 'contact' },
};