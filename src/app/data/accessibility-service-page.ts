/**
 * Accessibility Compliance Service Page Data
 *
 * Mock data for the Accessibility Service page (AccessibilityServiceTemplate).
 *
 * @see /src/app/components/templates/AccessibilityServiceTemplate.tsx
 */

import {
  Accessibility,
  Eye,
  Keyboard,
  MonitorSmartphone,
  FileSearch,
  ClipboardCheck,
  Wrench,
  RefreshCw,
  Shield,
} from 'lucide-react';

export const accessibilityServiceHero = {
  title: 'Accessibility Compliance',
  subtitle: 'WCAG 2.1 AA / AAA audits, remediation, and ongoing compliance — so everyone can use your site.',
  badge: { text: 'WCAG 2.1 COMPLIANT', icon: Accessibility },
  primaryButton: { text: 'Book an Audit', page: 'contact' },
};

export const accessibilityServiceFeatures = {
  title: 'Comprehensive Compliance',
  features: [
    {
      icon: FileSearch,
      title: 'WCAG Audit',
      description: 'Manual + automated testing against 78 WCAG 2.1 success criteria.',
    },
    {
      icon: Wrench,
      title: 'Remediation',
      description: 'We fix every issue — colour contrast, keyboard traps, missing labels, and more.',
    },
    {
      icon: Eye,
      title: 'Inclusive Design',
      description: 'Accessible patterns baked into your design system from day one.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Assistive Testing',
      description: 'Validated with NVDA, VoiceOver, JAWS, and Dragon NaturallySpeaking.',
    },
  ],
};

export const accessibilityServiceProcess = {
  title: 'Our 5-Step Compliance Protocol',
  steps: [
    { step: 'Audit', description: 'Automated scans + manual expert review.', icon: FileSearch },
    { step: 'Report', description: 'Prioritised issue report with WCAG references.', icon: ClipboardCheck },
    { step: 'Remediate', description: 'Fix all issues across templates and patterns.', icon: Wrench },
    { step: 'Retest', description: 'Verify fixes with assistive technology.', icon: RefreshCw },
    { step: 'Monitor', description: 'Quarterly re-audits and CI integration.', icon: Shield },
  ],
};

export const accessibilityServiceWcagLevels = [
  { level: 'A', name: 'Level A', description: 'Essential baseline — removes the most critical barriers', active: false },
  { level: 'AA', name: 'Level AA', description: 'Industry standard — required by most laws (ADA, EAA, Section 508)', active: true },
  { level: 'AAA', name: 'Level AAA', description: 'Gold standard — maximum inclusion for all users', active: false },
];

export const accessibilityServiceChecklist = [
  'Colour contrast meets 4.5 : 1 ratio',
  'All interactive elements keyboard-reachable',
  'Screen reader announces page changes',
  'Focus indicators visible on every element',
  'Reduced motion respected throughout',
];

export const accessibilityServiceStats = [
  { value: '100%', label: 'WCAG 2.1 AA' },
  { value: '+28%', label: 'Wider Audience' },
  { value: '0', label: 'Legal Risk' },
  { value: '15%', label: 'SEO Uplift' },
];

export const accessibilityServiceIcons = {
  services: {
    'wcag-audit': FileSearch,
    'remediation': Wrench,
    'inclusive-design': Eye,
    'assistive-testing': MonitorSmartphone,
  } as Record<string, typeof Accessibility>,
  process: {
    'audit': FileSearch,
    'report': ClipboardCheck,
    'remediate': Wrench,
    'retest': RefreshCw,
    'monitor': Shield,
  } as Record<string, typeof Accessibility>,
};

export const accessibilityServiceCTA = {
  title: 'Make Your Site Accessible to Everyone',
  description: 'Legal compliance is the floor — genuine inclusion is the goal. We get you there.',
  button: { text: 'Start Your Audit', page: 'contact' },
};
