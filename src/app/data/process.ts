/**
 * Process Data
 * 
 * Detailed breakdown of the LSX Design development process.
 * Used on: About -> Process page, Services pages
 */

import { MagnifyingGlass, PenNib, Code, CheckCircle, Rocket, Handshake } from '@phosphor-icons/react';
import type { ComponentType } from 'react';

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  details: string[];
  duration?: string;
}

export const developmentProcess: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, audience needs, and technical requirements to build a solid roadmap.',
    icon: MagnifyingGlass,
    details: [
      'Stakeholder interviews',
      'Competitor analysis',
      'Technical requirements gathering',
      'Content strategy planning',
      'Project roadmap creation'
    ],
    duration: '1-2 Weeks'
  },
  {
    id: 'design',
    number: '02',
    title: 'Design & Prototyping',
    description: 'We craft intuitive, accessible, and on-brand user interfaces using modern design systems.',
    icon: PenNib,
    details: [
      'Wireframing & UX flow',
      'UI design & visual language',
      'Interactive prototyping',
      'Design system creation',
      'Accessibility review'
    ],
    duration: '2-4 Weeks'
  },
  {
    id: 'development',
    number: '03',
    title: 'Development & Build',
    description: 'Our senior developers bring designs to life using clean, semantic, and performant code.',
    icon: Code,
    details: [
      'WordPress block theme development',
      'Component library build',
      'Functionality implementation',
      'Integrations setup',
      'Performance optimization'
    ],
    duration: '4-8 Weeks'
  },
  {
    id: 'qa',
    number: '04',
    title: 'Quality Assurance',
    description: 'Rigorous testing across devices, browsers, and assistive technologies to ensure a flawless experience.',
    icon: CheckCircle,
    details: [
      'Cross-browser testing',
      'Mobile responsiveness check',
      'WCAG 2.1 AA accessibility audit',
      'Performance benchmarking',
      'Security scanning'
    ],
    duration: '1-2 Weeks'
  },
  {
    id: 'launch',
    number: '05',
    title: 'Launch & Training',
    description: 'Seamless deployment to production and empowering your team to manage the content.',
    icon: Rocket,
    details: [
      'Migration to production server',
      'DNS propagation',
      'CMS training for your team',
      'Documentation handover',
      'Post-launch monitoring'
    ],
    duration: '1 Week'
  },
  {
    id: 'support',
    number: '06',
    title: 'Growth & Support',
    description: 'Ongoing partnership to keep your site secure, fast, and evolving with your business.',
    icon: Handshake,
    details: [
      'Regular maintenance & updates',
      'Security monitoring',
      'Performance tuning',
      'Continuous improvement',
      'Strategic consulting'
    ],
    duration: 'Ongoing'
  }
];