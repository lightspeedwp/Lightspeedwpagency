/**
 * Simplified Services — Grid Display Data
 * 
 * Simplified service structure for overview/grid displays.
 * Maps to the service detail pages.
 * 
 * Real content from LightSpeed WP Agency.
 * Compatible with ServicesTemplate and overview pages.
 * 
 * **Created:** March 3, 2026
 * **Optimization:** Part of Memory Optimization Task 1.2 — services.ts consolidation
 */

import { Palette, Code, Search, FileText, Shield, Zap, Brain, MessageSquare, HardDrive } from 'lucide-react';
import type { SimpleService } from './types';

/**
 * Simplified Services Array (9 services for grid display)
 */
export const servicesSimplified: SimpleService[] = [
  {
    id: 'discovery',
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'By understanding your business, we\'re able to deliver online success.',
    page: 'discovery',
    features: [
      'Requirements analysis',
      'Competitor research',
      'Project roadmap',
      'Technical assessment',
      'User needs prioritization',
      'Clear cost and timeline'
    ]
  },
  {
    id: 'design',
    icon: Palette,
    title: 'Design',
    description: 'Expert design guidance including Figma prototyping, design systems, and UI/UX.',
    page: 'design',
    features: [
      'New website design',
      'Website redesign',
      'Figma prototyping',
      'Design systems',
      'WooCommerce store design',
      'Brand identity'
    ]
  },
  {
    id: 'development',
    icon: Code,
    title: 'Development',
    description: 'Expert development that builds sites which perform exceptionally.',
    page: 'development',
    features: [
      'WordPress development',
      'WooCommerce stores',
      'Theme development',
      'Plugin development',
      'Custom functionality',
      'API integrations'
    ]
  },
  {
    id: 'content',
    icon: FileText,
    title: 'Content Operations',
    description: 'Strategy, auditing, collection, newsletters, and email marketing — all content needs fulfilled.',
    page: 'content',
    features: [
      'Content strategy',
      'Content audit',
      'Content collection',
      'Newsletter & email marketing',
      'AI-powered generation',
      'Workflow implementation'
    ]
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    description: 'Proactive WordPress security: malware scanning, hardening, and incident response.',
    page: 'security',
    features: [
      'Security audits',
      'Malware removal',
      'Firewall setup',
      'Continuous monitoring',
      'Threat detection',
      'Secure hosting'
    ]
  },
  {
    id: 'hosting',
    icon: HardDrive,
    title: 'Hosting & Support',
    description: 'Managed hosting, ongoing support, maintenance, and seamless migrations.',
    page: 'hosting',
    features: [
      'Managed WordPress hosting',
      'Ongoing support & maintenance',
      'Platform migrations',
      'Multiple daily backups',
      'Performance monitoring',
      'Security updates'
    ]
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance & Accessibility',
    description: 'Lightning-fast Core Web Vitals and WCAG 2.1 AA/AAA compliance in one service.',
    page: 'performance',
    features: [
      'Core Web Vitals audit',
      'Speed optimisation',
      'WCAG compliance audit',
      'Accessibility remediation',
      'Assistive tech testing',
      'Ongoing monitoring'
    ]
  },
  {
    id: 'ai-search',
    icon: Brain,
    title: 'AI Search & Visibility',
    description: 'SEO, analytics, AI engine optimisation, and answer engine optimisation unified.',
    page: 'ai-search-visibility',
    features: [
      'Technical SEO',
      'Analytics & reporting',
      'AI engine optimisation',
      'Answer engine optimisation',
      'Citation tracking',
      'Monthly visibility reports'
    ]
  },
  {
    id: 'training',
    icon: MessageSquare,
    title: 'Training & Enablement',
    description: 'Empowering your team with WordPress, WooCommerce, and design system training.',
    page: 'training',
    features: [
      'WordPress editor training',
      'WooCommerce operations',
      'Design system usage',
      'Content workflow training',
      'Custom documentation',
      'Ongoing mentoring'
    ]
  }
];
