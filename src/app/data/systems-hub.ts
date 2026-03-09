/**
 * Systems Hub — Strategic Service Framework
 *
 * LSX Design's 5-pillar systems approach to WordPress development.
 * Each system represents a core competency that drives client outcomes.
 *
 * Systems:
 * 1. Design Tokens — Visual consistency at scale
 * 2. Pattern Governance — Reusable component architecture
 * 3. Editorial Workflows — Content efficiency and quality
 * 4. AI Search Readiness — Answer Engine Optimization (AEO)
 * 5. Performance Reliability — Core Web Vitals and uptime
 *
 * @see /src/app/components/templates/SystemsHubTemplate.tsx
 * @see /src/app/data/three-tier-model.ts
 */

export interface SystemPillar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // Phosphor icon name
  color: string; // CSS variable
  benefits: string[];
  tiers: ('foundation' | 'growth' | 'enterprise')[]; // Which tiers include this system
  route: string; // Child page route
}

/**
 * Design Tokens System
 *
 * Visual consistency through centralized design variables.
 * Ensures brand coherence across all pages and components.
 */
export const designTokensSystem: SystemPillar = {
  id: 'design-tokens',
  name: 'Design Tokens',
  tagline: 'Visual Consistency at Scale',
  description:
    'Centralized design variables for colors, typography, spacing, and borders. One source of truth that propagates across your entire site, eliminating visual drift and reducing design debt.',
  icon: 'Palette',
  color: 'var(--accent)', // Neon cyan
  benefits: [
    'Brand consistency across all pages',
    'Design changes update site-wide in seconds',
    'Dark mode and theme switching built-in',
    'WCAG 2.1 AA compliant color ratios',
  ],
  tiers: ['foundation', 'growth', 'enterprise'],
  route: '/systems/design-tokens',
};

/**
 * Pattern Governance System
 *
 * Reusable component architecture that accelerates page production.
 * WordPress FSE block patterns that editors can compose without code.
 */
export const patternGovernanceSystem: SystemPillar = {
  id: 'pattern-governance',
  name: 'Pattern Governance',
  tagline: 'Reusable Component Architecture',
  description:
    'WordPress FSE block patterns that editors can drag-and-drop to compose pages. No code required. Every pattern follows design token standards and accessibility guidelines.',
  icon: 'Layout',
  color: 'var(--primary)', // Violet/blue
  benefits: [
    '50-70% reduction in page production time',
    'Zero-code page composition for editors',
    'Guaranteed design consistency',
    'Mobile-responsive out of the box',
  ],
  tiers: ['foundation', 'growth', 'enterprise'],
  route: '/systems/pattern-governance',
};

/**
 * Editorial Workflows System
 *
 * Content efficiency through structured workflows and automation.
 * Reduces publishing friction and improves content quality.
 */
export const editorialWorkflowsSystem: SystemPillar = {
  id: 'editorial-workflows',
  name: 'Editorial Workflows',
  tagline: 'Content Efficiency & Quality',
  description:
    'Structured content workflows that guide authors from draft to publish. Automated quality checks, review stages, and publishing schedules that eliminate bottlenecks.',
  icon: 'FileText',
  color: 'var(--success)', // Green
  benefits: [
    'Faster content publishing cycles',
    'Built-in quality assurance checks',
    'Multi-author collaboration tools',
    'Automated SEO and accessibility validation',
  ],
  tiers: ['foundation', 'growth', 'enterprise'],
  route: '/systems/editorial-workflows',
};

/**
 * AI Search Readiness System (AEO)
 *
 * Answer Engine Optimization for AI-powered search (ChatGPT, Perplexity, Google SGE).
 * Structured data and schema markup that makes content AI-discoverable.
 */
export const aiSearchReadinessSystem: SystemPillar = {
  id: 'ai-search-readiness',
  name: 'AI Search Readiness',
  tagline: 'Answer Engine Optimization',
  description:
    'Optimize for AI-powered search engines (ChatGPT, Perplexity, Google SGE). Advanced schema markup, structured data, and content formatting that make your site the source AI tools cite.',
  icon: 'Sparkle',
  color: 'var(--warning)', // Amber/gold
  benefits: [
    '3-5x improvement in AI search visibility',
    'Structured data for rich search results',
    'FAQ and How-to schema implementation',
    'Citation-optimized content formatting',
  ],
  tiers: ['growth', 'enterprise'],
  route: '/systems/ai-search-readiness',
};

/**
 * Performance Reliability System
 *
 * Core Web Vitals optimization and uptime monitoring.
 * Sub-1-second page loads and 99.9% availability.
 */
export const performanceReliabilitySystem: SystemPillar = {
  id: 'performance-reliability',
  name: 'Performance Reliability',
  tagline: 'Core Web Vitals & Uptime',
  description:
    'Sub-1-second page load times and 99.9% uptime. Core Web Vitals optimization, performance monitoring, and reliability engineering that keeps your site fast under load.',
  icon: 'Lightning',
  color: 'var(--destructive)', // Red/pink
  benefits: [
    'Sub-1-second page loads (LCP)',
    'Core Web Vitals compliance (Google ranking factor)',
    'Real-time performance monitoring dashboards',
    '99.9% uptime SLA with redundancy',
  ],
  tiers: ['growth', 'enterprise'],
  route: '/systems/performance-reliability',
};

/**
 * All system pillars in display order
 */
export const systemPillars: SystemPillar[] = [
  designTokensSystem,
  patternGovernanceSystem,
  editorialWorkflowsSystem,
  aiSearchReadinessSystem,
  performanceReliabilitySystem,
];

/**
 * Systems Hub Hero Content
 */
export const systemsHubHero = {
  badge: 'SYSTEMS.FRAMEWORK',
  title: {
    line1: 'WordPress Systems',
    line2: 'That Scale',
  },
  subtitle:
    'Five core pillars that power every LSX Design project. From design tokens to AI search readiness, these systems eliminate technical debt and accelerate your growth.',
  cta: {
    primary: {
      text: 'Request a Systems Audit',
      page: 'contact',
    },
    secondary: {
      text: 'Explore Service Tiers',
      page: 'services',
    },
  },
};

/**
 * Systems Overview Section
 */
export const systemsOverview = {
  heading: 'Five Pillars of WordPress Excellence',
  description:
    'Every LSX Design project is built on these systems. Whether you need Foundation-tier infrastructure, Growth-tier optimization, or Enterprise-tier custom development, these pillars ensure consistency, performance, and scalability.',
};

/**
 * Tier Integration Section
 */
export const tierIntegration = {
  heading: 'How Systems Map to Service Tiers',
  description:
    'Each service tier includes different combinations of systems based on your needs.',
  foundation: {
    systems: ['Design Tokens', 'Pattern Governance', 'Editorial Workflows'],
    description:
      'Foundation tier establishes core infrastructure with design tokens, reusable patterns, and editorial workflows.',
  },
  growth: {
    systems: ['All Foundation systems', 'AI Search Readiness', 'Performance Reliability'],
    description:
      'Growth tier adds AI search optimization and performance engineering to scale your traffic.',
  },
  enterprise: {
    systems: ['All Growth systems', 'Custom API Development', 'Multi-site Architecture'],
    description:
      'Enterprise tier includes everything plus custom integrations and advanced infrastructure.',
  },
};

/**
 * Helper: Get system by ID
 */
export function getSystemById(id: string): SystemPillar | undefined {
  return systemPillars.find(system => system.id === id);
}

/**
 * Helper: Get systems by tier
 */
export function getSystemsByTier(
  tier: 'foundation' | 'growth' | 'enterprise'
): SystemPillar[] {
  return systemPillars.filter(system => system.tiers.includes(tier));
}

/**
 * Helper: Get system color CSS variable
 */
export function getSystemColor(id: string): string {
  const system = getSystemById(id);
  return system?.color || 'var(--foreground)';
}