/**
 * Performance Service Page Data
 *
 * Mock data for the Performance Service page (PerformanceServiceTemplate).
 *
 * @see /src/app/components/templates/PerformanceServiceTemplate.tsx
 */

import { Gauge, Server, Smartphone, Layers, BarChart, Search, Zap, CheckCircle, Activity } from 'lucide-react';

export const performanceServiceHero = {
  title: 'WordPress Performance Optimisation',
  subtitle: 'Blazing-fast load times, perfect Core Web Vitals scores, and a user experience that keeps visitors coming back.',
  badge: { text: 'CORE WEB VITALS OPTIMISED', icon: Zap },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
};

export const performanceServiceFeatures = {
  title: 'What We Optimise',
  features: [
    {
      icon: Gauge,
      title: 'Speed Audit',
      description: 'Full Lighthouse & WebPageTest analysis with a prioritised action plan.',
    },
    {
      icon: Layers,
      title: 'Code Optimisation',
      description: 'Critical CSS extraction, JS defer/async, unused code elimination.',
    },
    {
      icon: Server,
      title: 'Caching Strategy',
      description: 'Server-side, edge, and browser caching configured for instant repeat visits.',
    },
    {
      icon: Smartphone,
      title: 'Asset Optimisation',
      description: 'AVIF/WebP images, font subsetting, lazy loading for below-the-fold media.',
    },
  ],
};

export const performanceServiceProcess = {
  title: 'Our 5-Step Protocol',
  steps: [
    { step: 'Benchmark', description: 'Lighthouse CI baseline on desktop & mobile.', icon: BarChart },
    { step: 'Analyse', description: 'Waterfall audit — identify bottlenecks.', icon: Search },
    { step: 'Optimise', description: 'Code-split, compress, cache, and defer.', icon: Zap },
    { step: 'Validate', description: 'Re-test against Web Vitals thresholds.', icon: CheckCircle },
    { step: 'Monitor', description: 'Continuous RUM alerting via Analytics.', icon: Activity },
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
  description: 'Every 100 ms of load time costs you revenue. Let us make your site fly.',
  button: { text: 'Get a Performance Audit', page: 'contact' },
};
