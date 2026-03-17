/**
 * About Process Template Data
 *
 * Content data for AboutProcessTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/AboutProcessTemplate.tsx
 */

import {
  MagnifyingGlass as Search,
  Palette,
  Code,
  Rocket,
} from '@phosphor-icons/react';

export const aboutProcessSteps = [
  {
    phase: '01',
    icon: Search,
    title: 'Discovery & strategy',
    description:
      'We begin every project with comprehensive discovery workshops to understand your business goals, user needs, and technical requirements.',
    deliverables: [
      'Stakeholder interviews',
      'Competitive analysis',
      'User research',
      'Technical specs',
      'Project roadmap',
    ],
  },
  {
    phase: '02',
    icon: Palette,
    title: 'Design & planning',
    description:
      'Token-driven design systems are created with WordPress FSE compatibility, accessibility standards, and scalability in mind.',
    deliverables: [
      'Design system & tokens',
      'Wireframes & prototypes',
      'Pattern library',
      'Accessibility audit',
      'Content plan',
    ],
  },
  {
    phase: '03',
    icon: Code,
    title: 'Development & build',
    description:
      'Modern WordPress development using blocks, patterns, and best practices for performance, security, and maintainability.',
    deliverables: [
      'Custom block dev',
      'Pattern implementation',
      'theme.json config',
      'Performance tuning',
      'Security hardening',
    ],
  },
  {
    phase: '04',
    icon: Rocket,
    title: 'Testing & launch',
    description:
      'Rigorous QA testing, accessibility validation, and smooth deployment with comprehensive training and documentation.',
    deliverables: [
      'Cross-browser testing',
      'WCAG validation',
      'Load testing',
      'Editor training',
      'Launch & handoff',
    ],
  },
];
