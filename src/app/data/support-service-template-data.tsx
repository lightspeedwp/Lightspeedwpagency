/**
 * Support Service Template Data
 *
 * Content data for SupportServiceTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/SupportServiceTemplate.tsx
 */

import {
  Headset,
  Clock,
  Wrench,
  Shield,
  Lightning,
  TrendUp,
  ShieldCheck,
  Star,
  Globe
} from '@phosphor-icons/react';

export const supportServiceBenefits = [
  {
    icon: Headset,
    title: '24/7 availability',
    description:
      'Round-the-clock support for critical issues with guaranteed response times.',
  },
  {
    icon: Clock,
    title: 'Fast response times',
    description:
      'Under 1 hour response for critical issues, under 4 hours for standard requests.',
  },
  {
    icon: Wrench,
    title: 'Proactive maintenance',
    description:
      'Regular updates, backups, and monitoring to prevent issues before they occur.',
  },
  {
    icon: Shield,
    title: 'Security monitoring',
    description:
      'Continuous security scans and immediate response to threats.',
  },
  {
    icon: Lightning,
    title: 'Performance optimization',
    description:
      'Ongoing speed improvements and resource optimization.',
  },
  {
    icon: TrendUp,
    title: 'Priority support queue',
    description:
      'Jump the queue with dedicated support team members.',
  },
];

export const supportServicePlans = [
  {
    name: 'Essential support',
    price: '$199/mo',
    features: [
      '5 hours/month',
      'Email support',
      '24hr response time',
      'Monthly backups',
      'Plugin updates',
    ],
  },
  {
    name: 'Priority support',
    price: '$499/mo',
    features: [
      '15 hours/month',
      'Phone + email',
      '4hr response time',
      'Weekly backups',
      'Priority queue',
      'Security monitoring',
    ],
  },
  {
    name: 'Enterprise support',
    price: 'Custom',
    features: [
      'Unlimited hours',
      '24/7 phone support',
      '<1hr critical response',
      'Daily backups',
      'Dedicated team',
      'Custom SLA',
    ],
  },
];

export const supportServiceResults = [
  { id: 'metric-1', number: '<1hr', label: 'Critical issue response', icon: Clock },
  { id: 'metric-2', number: '99.9%', label: 'Uptime guarantee', icon: ShieldCheck },
  { id: 'metric-3', number: '4.9/5', label: 'Customer satisfaction', icon: Star },
  { id: 'metric-4', number: '24/7', label: 'Support availability', icon: Globe },
];
