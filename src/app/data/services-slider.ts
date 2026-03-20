/**
 * Services Slider Data
 * 
 * Featured services for homepage slider.
 * Icons from Phosphor Icons (duotone weight for contextual stats).
 * 
 * @see ServicesSlider pattern component
 */

import {
  FigmaLogo,
  PaintBrush,
  Code,
  Gauge,
  Headset,
  GraduationCap,
  ShieldCheck,
  CloudArrowUp,
  UniversalAccess,
} from '@phosphor-icons/react';

export interface ServiceSlide {
  id: string;
  title: string;
  description: string;
  icon: any;
  href: string;
  accent: string;
}

export const servicesSliderData: ServiceSlide[] = [
  {
    id: 'prototyping',
    title: 'Prototyping',
    description: 'Rapid Figma prototypes validated before development starts.',
    icon: FigmaLogo,
    href: '/services/design',
    accent: 'var(--primary)',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Tokenised design systems with accessible markup and WCAG compliance.',
    icon: PaintBrush,
    href: '/services/design',
    accent: 'var(--accent)',
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Custom WordPress themes, plugins, and block patterns engineered for scale.',
    icon: Code,
    href: '/services/development',
    accent: 'var(--primary)',
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'Speed optimization, Core Web Vitals, and measurable results.',
    icon: Gauge,
    href: '/services/performance',
    accent: 'var(--accent)',
  },
  {
    id: 'support',
    title: 'Support',
    description: '24/7 monitoring, maintenance, and technical assistance.',
    icon: Headset,
    href: '/services/support',
    accent: 'var(--primary)',
  },
  {
    id: 'training',
    title: 'Training',
    description: 'Workshops and documentation so your team masters WordPress.',
    icon: GraduationCap,
    href: '/services/training',
    accent: 'var(--accent)',
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Hardening, SSL, backups, and proactive threat monitoring.',
    icon: ShieldCheck,
    href: '/services/security',
    accent: 'var(--primary)',
  },
  {
    id: 'hosting',
    title: 'Hosting',
    description: 'Managed WordPress hosting with automatic updates and daily backups.',
    icon: CloudArrowUp,
    href: '/services/hosting',
    accent: 'var(--accent)',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description: 'WCAG 2.2 AA/AAA compliance audits and remediation.',
    icon: UniversalAccess,
    href: '/services/accessibility',
    accent: 'var(--primary)',
  },
];
