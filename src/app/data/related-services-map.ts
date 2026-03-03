/**
 * Related Services Mapping Data
 * 
 * Maps which services are related to other services.
 * Used for "Related Services" sections on service detail pages.
 * 
 * **Task 2.3:** Consolidated from 13 → 9 service references
 * 
 * **CRITICAL: 100% Design System Compliance**
 * - All UI uses CSS variables only
 * - Fonts: var(--font-primary), var(--font-secondary)
 * 
 * @see /src/styles/patterns/related-services.css
 */

import { LucideIcon, Palette, Code, Zap, Search, ShieldCheck, FileText, Eye, Target, HardDrive, Brain, GraduationCap } from 'lucide-react';

/**
 * Service Reference Interface
 * 
 * Lightweight service reference for related services
 */
export interface ServiceReference {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Related Services Map Interface
 */
export interface RelatedServicesMap {
  serviceSlug: string;
  relatedServices: ServiceReference[];
}

/**
 * All Service References (9 consolidated services)
 * 
 * Task 2.3: Consolidated from 13 individual services
 */
export const allServiceReferences: ServiceReference[] = [
  {
    id: 'design',
    slug: 'design',
    title: 'Website Design',
    description: 'User-centric design including Figma prototyping, design systems, and UI/UX.',
    icon: Palette,
  },
  {
    id: 'development',
    slug: 'development',
    title: 'WordPress Development',
    description: 'Custom WordPress development with clean code, scalable architecture, and best practices.',
    icon: Code,
  },
  {
    id: 'performance',
    slug: 'performance',
    title: 'Performance & Accessibility',
    description: 'Lightning-fast Core Web Vitals and WCAG 2.1 AA/AAA compliance in one service.',
    icon: Zap,
  },
  {
    id: 'ai-search-visibility',
    slug: 'ai-search-visibility',
    title: 'AI Search & Visibility',
    description: 'Unified SEO, analytics, AI engine optimisation, and answer engine optimisation.',
    icon: Brain,
  },
  {
    id: 'security',
    slug: 'security',
    title: 'Security Hardening',
    description: 'WordPress security audits, malware removal, and proactive threat protection.',
    icon: ShieldCheck,
  },
  {
    id: 'hosting',
    slug: 'hosting',
    title: 'Hosting & Support',
    description: 'Managed hosting, ongoing support, maintenance, and seamless migrations.',
    icon: HardDrive,
  },
  {
    id: 'content',
    slug: 'content',
    title: 'Content Operations',
    description: 'Content strategy, auditing, collection, newsletters, and email marketing unified.',
    icon: FileText,
  },
  {
    id: 'discovery',
    slug: 'discovery',
    title: 'Discovery & Strategy',
    description: 'Research, planning, and strategic roadmaps before development begins.',
    icon: Target,
  },
  {
    id: 'training',
    slug: 'training',
    title: 'Training & Enablement',
    description: 'Hands-on WordPress, WooCommerce, and design system training for your team.',
    icon: GraduationCap,
  },
];

/**
 * Related Services Mapping (9 consolidated services)
 * 
 * Maps each service to its related/complementary services
 */
export const relatedServicesMap: RelatedServicesMap[] = [
  // Design → Development, Performance, Content
  {
    serviceSlug: 'design',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'development')!,
      allServiceReferences.find(s => s.slug === 'performance')!,
      allServiceReferences.find(s => s.slug === 'content')!,
    ],
  },
  
  // Development → Design, Performance, Security
  {
    serviceSlug: 'development',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'design')!,
      allServiceReferences.find(s => s.slug === 'performance')!,
      allServiceReferences.find(s => s.slug === 'security')!,
    ],
  },
  
  // Performance & Accessibility → Development, AI Search, Hosting
  {
    serviceSlug: 'performance',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'development')!,
      allServiceReferences.find(s => s.slug === 'ai-search-visibility')!,
      allServiceReferences.find(s => s.slug === 'hosting')!,
    ],
  },
  
  // AI Search & Visibility → Content, Performance, Development
  {
    serviceSlug: 'ai-search-visibility',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'content')!,
      allServiceReferences.find(s => s.slug === 'performance')!,
      allServiceReferences.find(s => s.slug === 'development')!,
    ],
  },
  
  // Security → Development, Hosting, Performance
  {
    serviceSlug: 'security',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'development')!,
      allServiceReferences.find(s => s.slug === 'hosting')!,
      allServiceReferences.find(s => s.slug === 'performance')!,
    ],
  },
  
  // Hosting & Support → Security, Performance, Development
  {
    serviceSlug: 'hosting',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'security')!,
      allServiceReferences.find(s => s.slug === 'performance')!,
      allServiceReferences.find(s => s.slug === 'development')!,
    ],
  },
  
  // Content Operations → AI Search, Design, Discovery
  {
    serviceSlug: 'content',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'ai-search-visibility')!,
      allServiceReferences.find(s => s.slug === 'design')!,
      allServiceReferences.find(s => s.slug === 'discovery')!,
    ],
  },
  
  // Discovery & Strategy → Design, Development, Content
  {
    serviceSlug: 'discovery',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'design')!,
      allServiceReferences.find(s => s.slug === 'development')!,
      allServiceReferences.find(s => s.slug === 'content')!,
    ],
  },
  
  // Training & Enablement → Hosting, Development, Content
  {
    serviceSlug: 'training',
    relatedServices: [
      allServiceReferences.find(s => s.slug === 'hosting')!,
      allServiceReferences.find(s => s.slug === 'development')!,
      allServiceReferences.find(s => s.slug === 'content')!,
    ],
  },
];

/**
 * Get Related Services
 * 
 * Returns related services for a specific service.
 * Also handles legacy slugs by mapping them to consolidated slugs.
 * 
 * @param serviceSlug - Service slug to look up
 * @returns Array of related service references
 * 
 * @example
 * const related = getRelatedServices('design');
 * // Returns: [Development, Performance, Content]
 */
export function getRelatedServices(serviceSlug: string): ServiceReference[] {
  // Map legacy slugs to consolidated slugs
  const legacySlugMap: Record<string, string> = {
    'seo': 'ai-search-visibility',
    'analytics': 'ai-search-visibility',
    'ai-engine': 'ai-search-visibility',
    'ai-engine-optimisation': 'ai-search-visibility',
    'answer-engine': 'ai-search-visibility',
    'answer-engine-optimisation': 'ai-search-visibility',
    'support': 'hosting',
    'migrations': 'hosting',
    'accessibility': 'performance',
    'newsletter': 'content',
    'email-marketing': 'content',
    'content-strategy': 'content',
    'content-collection': 'content',
    'content-audit': 'content',
    'figma-prototyping': 'design',
    'design-systems': 'design',
  };

  const resolvedSlug = legacySlugMap[serviceSlug] || serviceSlug;
  const mapping = relatedServicesMap.find(m => m.serviceSlug === resolvedSlug);
  return mapping?.relatedServices || [];
}

/**
 * Get Related Service Count
 * 
 * Returns the number of related services
 * 
 * @param serviceSlug - Service slug
 * @returns Number of related services
 * 
 * @example
 * const count = getRelatedServiceCount('design');
 * // Returns: 3
 */
export function getRelatedServiceCount(serviceSlug: string): number {
  return getRelatedServices(serviceSlug).length;
}