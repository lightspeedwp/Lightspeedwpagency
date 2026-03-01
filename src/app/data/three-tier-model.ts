/**
 * Three-Tier Model — WordPress Agency Service Tiers
 *
 * LSX Design's strategic service framework:
 * - Foundation — Core systems infrastructure
 * - Growth — Strategic optimization and scaling
 * - Enterprise — Custom solutions and integration
 *
 * This data powers the ServicesLanding hero messaging and Systems hub pages.
 *
 * @see /src/app/components/templates/ServicesLandingTemplate.tsx
 * @see /src/app/components/templates/SystemsHubTemplate.tsx
 */

export interface ServiceTier {
  id: 'foundation' | 'growth' | 'enterprise';
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  badge: string;
  icon: string;
  features: string[];
  systemsFocus: string[];
  idealFor: string[];
  outcomes: string[];
  color: string; // CSS variable reference
}

/**
 * Foundation Tier
 *
 * Core systems infrastructure for new WordPress sites.
 * Focus: Design tokens, pattern governance, editorial workflows.
 */
export const foundationTier: ServiceTier = {
  id: 'foundation',
  name: 'Foundation',
  tagline: 'Core Systems Infrastructure',
  description:
    'Build your digital presence on rock-solid fundamentals. We establish design tokens, pattern governance, and editorial workflows that scale with your business.',
  shortDescription: 'Core design systems, pattern governance, and editorial workflows',
  badge: 'FOUNDATION_TIER',
  icon: 'Layers',
  features: [
    'Design token system implementation',
    'Pattern library with WordPress FSE blocks',
    'Editorial workflow automation',
    'Performance baseline optimization',
    'Accessibility compliance (WCAG 2.1 AA)',
    'Mobile-first responsive framework',
  ],
  systemsFocus: ['Design Tokens', 'Pattern Governance', 'Editorial Workflows'],
  idealFor: [
    'New WordPress sites launching from scratch',
    'Rebuilds with legacy technical debt',
    'Teams needing design system structure',
    'Businesses requiring WCAG compliance',
  ],
  outcomes: [
    'Design consistency across all pages',
    '50-70% reduction in page production time',
    '100% accessibility compliance',
    'Maintainable, scalable codebase',
  ],
  color: 'var(--accent)', // Neon blue/cyan
};

/**
 * Growth Tier
 *
 * Strategic optimization for scaling businesses.
 * Focus: AI search readiness, performance reliability, conversion optimization.
 */
export const growthTier: ServiceTier = {
  id: 'growth',
  name: 'Growth',
  tagline: 'Strategic Optimization & Scaling',
  description:
    'Unlock your site full potential. We optimize for AI search engines (AEO), eliminate performance bottlenecks, and implement conversion systems that drive measurable ROI.',
  shortDescription: 'AEO optimization, performance tuning, and conversion systems',
  badge: 'GROWTH_TIER',
  icon: 'TrendingUp',
  features: [
    'Answer Engine Optimization (AEO) implementation',
    'Performance reliability monitoring (Core Web Vitals)',
    'Conversion rate optimization (CRO) systems',
    'Advanced schema markup for AI discoverability',
    'E-commerce funnel optimization (WooCommerce)',
    'Analytics integration and reporting dashboards',
  ],
  systemsFocus: ['AI Search Readiness', 'Performance Reliability', 'Conversion Optimization'],
  idealFor: [
    'Established sites ready to scale traffic',
    'E-commerce stores optimizing conversions',
    'Content publishers targeting AI search',
    'Teams focused on measurable growth metrics',
  ],
  outcomes: [
    '3-5x improvement in AI search visibility',
    'Sub-1-second page load times (LCP)',
    '20-40% increase in conversion rates',
    'Real-time performance monitoring',
  ],
  color: 'var(--primary)', // Violet/purple
};

/**
 * Enterprise Tier
 *
 * Custom solutions and advanced integrations.
 * Focus: Multi-site networks, headless CMS, custom API development.
 */
export const enterpriseTier: ServiceTier = {
  id: 'enterprise',
  name: 'Enterprise',
  tagline: 'Custom Solutions & Integration',
  description:
    'Purpose-built systems for complex requirements. We architect multi-site networks, headless WordPress solutions, and custom integrations that power your unique business needs.',
  shortDescription: 'Multi-site networks, headless CMS, and custom API development',
  badge: 'ENTERPRISE_TIER',
  icon: 'Cpu',
  features: [
    'WordPress multi-site network architecture',
    'Headless CMS with Next.js/React frontends',
    'Custom REST API and GraphQL development',
    'Third-party platform integrations (CRM, ERP)',
    'Enterprise security and compliance (GDPR, SOC 2)',
    'Dedicated DevOps and deployment pipelines',
  ],
  systemsFocus: ['Custom Development', 'API Integration', 'Enterprise Security'],
  idealFor: [
    'Large organizations with multiple brands',
    'SaaS platforms requiring WordPress backend',
    'Publishers with complex content workflows',
    'Businesses with strict compliance needs',
  ],
  outcomes: [
    'Unified multi-brand web presence',
    'Decoupled architecture for flexibility',
    'Custom workflows tailored to your team',
    'Enterprise-grade security and uptime',
  ],
  color: 'var(--warning)', // Neon pink/magenta
};

/**
 * All service tiers in display order
 */
export const serviceTiers: ServiceTier[] = [foundationTier, growthTier, enterpriseTier];

/**
 * Tier comparison matrix for decision-making
 */
export const tierComparison = {
  foundation: {
    timeline: '4-6 weeks',
    investment: 'Starting at $15K',
    teamSize: '2-3 specialists',
    support: '30 days post-launch',
  },
  growth: {
    timeline: '6-8 weeks',
    investment: 'Starting at $30K',
    teamSize: '3-4 specialists',
    support: '90 days performance monitoring',
  },
  enterprise: {
    timeline: '10-16 weeks',
    investment: 'Custom quote',
    teamSize: 'Dedicated team (4-6)',
    support: '12 months managed services',
  },
};

/**
 * Helper: Get tier by ID
 */
export function getTierById(id: ServiceTier['id']): ServiceTier | undefined {
  return serviceTiers.find(tier => tier.id === id);
}

/**
 * Helper: Get tier color CSS variable
 */
export function getTierColor(id: ServiceTier['id']): string {
  const tier = getTierById(id);
  return tier?.color || 'var(--foreground)';
}

/**
 * Hero messaging for ServicesLanding template
 */
export const servicesHeroMessaging = {
  badge: 'SYSTEMS.FRAMEWORK',
  title: {
    line1: 'WordPress Systems',
    line2: 'Built to Scale',
  },
  subtitle:
    'Choose your tier: Foundation for core infrastructure, Growth for strategic optimization, or Enterprise for custom solutions. Every system is designed for performance, accessibility, and AI search readiness.',
  cta: {
    primary: {
      text: 'Request a Systems Audit',
      page: 'contact',
    },
    secondary: {
      text: 'Explore Our Systems',
      page: 'systems-hub', // Task 1.1 will create this route
    },
  },
};

/**
 * Contact hero messaging (systems audit framing)
 */
export const contactHeroMessaging = {
  badge: 'SYSTEMS.AUDIT',
  title: {
    line1: 'Request a',
    line2: 'Systems Audit',
  },
  subtitle:
    'Get a comprehensive analysis of your WordPress site design tokens, pattern governance, editorial workflows, AI search readiness, and performance reliability. Delivered in 5 business days.',
  features: [
    'Design system health check',
    'Performance baseline analysis',
    'AEO readiness score',
    'Actionable improvement roadmap',
  ],
};
