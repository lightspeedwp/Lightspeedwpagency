/**
 * Accessibility Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/accessibility/
 * 
 * WCAG 2.1 AA/AAA accessibility compliance service data including audits,
 * remediation, and assistive technology testing.
 */

import { DetailedService } from './types';

/**
 * Accessibility Service Detailed Data
 * 
 * Complete accessibility service information for the accessibility service page template.
 */
export const accessibilityServiceDetailed: DetailedService = {
  id: 'accessibility',
  slug: 'accessibility',
  headline: 'Accessible WordPress for Everyone',
  tagline: 'WCAG 2.1 AA/AAA compliant websites that welcome every visitor — regardless of ability, device, or assistive technology.',
  description: 'Inclusive design and development that expands your audience and protects your brand.',

  whyLightSpeed: {
    title: 'Inclusion is not optional — it\'s the law.',
    description: 'Over 1 billion people worldwide live with a disability. Web accessibility isn\'t just the right thing to do — it\'s a legal requirement in many jurisdictions. Our team audits, remediates, and builds WordPress sites that meet WCAG 2.1 AA (and AAA where feasible), ensuring compliance with the ADA, EAA, and Section 508.'
  },

  subServices: [
    {
      id: 'wcag-audit',
      title: 'WCAG Compliance Audit',
      description: 'Comprehensive manual + automated audit against WCAG 2.1 AA/AAA success criteria with a prioritised remediation report.'
    },
    {
      id: 'remediation',
      title: 'Accessibility Remediation',
      description: 'Fixing colour contrast, keyboard traps, missing alt text, ARIA misuse, and focus management issues across your entire site.'
    },
    {
      id: 'inclusive-design',
      title: 'Inclusive Design Systems',
      description: 'Building component libraries with accessibility baked in — focus rings, screen-reader announcements, reduced-motion support, and semantic HTML.'
    },
    {
      id: 'assistive-testing',
      title: 'Assistive Technology Testing',
      description: 'Real-device testing with NVDA, JAWS, VoiceOver, and TalkBack to verify the experience for screen-reader and switch-control users.'
    }
  ],

  process: {
    title: 'Accessibility Compliance Workflow',
    description: 'From audit to certification in five clear steps.',
    steps: [
      {
        id: 'audit',
        number: 1,
        title: 'Automated + Manual Audit',
        description: 'Running axe-core, Lighthouse, and WAVE alongside manual keyboard and screen-reader walkthroughs.'
      },
      {
        id: 'report',
        number: 2,
        title: 'Prioritised Report',
        description: 'Documenting every issue with severity, WCAG criterion, affected pages, and recommended fix.'
      },
      {
        id: 'remediate',
        number: 3,
        title: 'Remediation Sprint',
        description: 'Fixing critical and major issues first — colour contrast, keyboard navigation, ARIA, and semantic structure.'
      },
      {
        id: 'retest',
        number: 4,
        title: 'Regression Testing',
        description: 'Re-auditing with automated tools and assistive technology to verify all fixes hold.'
      },
      {
        id: 'monitor',
        number: 5,
        title: 'Ongoing Monitoring',
        description: 'CI/CD accessibility gates and quarterly re-audits to prevent regression as content evolves.'
      }
    ]
  },

  cta: {
    title: 'Make Your Site Accessible Today',
    description: 'Don\'t wait for a lawsuit. Proactive accessibility improves SEO, widens your audience, and demonstrates your brand values.',
    buttonText: 'Request a Systems Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'WordPress Development',
      description: 'Accessible-first development with semantic HTML, ARIA, and keyboard navigation built in.',
      page: 'development'
    },
    {
      title: 'SEO Services',
      description: 'Accessibility and SEO share many best practices — improve both simultaneously.',
      page: 'ai-search-visibility'
    },
    {
      title: 'Website Design',
      description: 'Inclusive design systems with proper color contrast, focus states, and clear hierarchy.',
      page: 'design'
    }
  ]
};
