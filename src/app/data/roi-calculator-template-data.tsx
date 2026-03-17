/**
 * ROI Calculator Template — Data
 *
 * Static content and calculation constants for the ROI calculator.
 * Dynamic values (computed from user input) remain in the template.
 *
 * Created: March 17, 2026
 * @see /src/app/components/templates/ROICalculatorTemplate.tsx
 */

import {
  Lightning as Zap,
  Shield,
  MagnifyingGlass as Search,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

/* ── Calculation constants ── */

export const roiCalculationConstants = {
  performanceImprovementPercent: 15,
  accessibilityAudienceIncrease: 15,
  seoTrafficIncrease: 30,
};

/* ── Breakdown card definitions ── */

export interface BreakdownCard {
  icon: Icon;
  title: string;
  desc: string;
  /** Key identifying which calculated value to display */
  valueKey: 'performance' | 'accessibility' | 'seo';
}

export const roiBreakdownCards: BreakdownCard[] = [
  {
    icon: Zap,
    title: 'Performance (+15%)',
    desc: '90+ Lighthouse scores mean faster load times. Amazon found that every 100ms delay costs 1% in sales. We improve by seconds, not milliseconds.',
    valueKey: 'performance',
  },
  {
    icon: Shield,
    title: 'Accessibility (+15%)',
    desc: '15% of the population has some form of disability. WCAG AA compliance makes your site usable for everyone, expanding your addressable market.',
    valueKey: 'accessibility',
  },
  {
    icon: Search,
    title: 'SEO (+30%)',
    desc: 'Google prioritises fast, accessible sites. Better Core Web Vitals = higher rankings = more organic traffic without ad spend.',
    valueKey: 'seo',
  },
];

/* ── Testimonial avatar fallbacks ── */

export const roiTestimonialAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=400',
  'https://images.unsplash.com/photo-1610387694365-19fafcc86d86?w=400',
  'https://images.unsplash.com/photo-1584940121258-c2553b66a739?w=400',
];

/* ── CTA benefits ── */

export const roiCtaBenefits = [
  'Custom analysis for your industry',
  'Real data-backed projections',
  'No obligation — 100% free consultation',
  'Results within 30 days of launch',
];
