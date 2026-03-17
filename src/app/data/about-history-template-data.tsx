/**
 * About History Template Data
 *
 * Content data for AboutHistoryTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/AboutHistoryTemplate.tsx
 */

import {
  Rocket,
  Users,
  Trophy as Award,
  Globe,
  TrendUp,
  Sparkle,
} from '@phosphor-icons/react';

export const aboutHistoryMilestones = [
  {
    year: '2014',
    icon: Rocket,
    title: 'Agency founded',
    description:
      'LSX Design launches with a focus on WordPress block themes and design systems. First client project delivered within 3 months.',
  },
  {
    year: '2016',
    icon: Users,
    title: 'Team expansion',
    description:
      'Grew from 2 founders to a team of 8, including dedicated designers, developers, and project managers. First international client onboarded.',
  },
  {
    year: '2018',
    icon: Award,
    title: 'WooCommerce experts',
    description:
      'Became certified WooCommerce developers and launched our e-commerce practice. Delivered 50+ successful store implementations.',
  },
  {
    year: '2020',
    icon: Globe,
    title: 'Remote-first transition',
    description:
      'Fully embraced distributed work, enabling us to hire top talent globally and serve clients across multiple time zones.',
  },
  {
    year: '2022',
    icon: TrendUp,
    title: 'FSE pioneers',
    description:
      'Early adoption of WordPress Full Site Editing. Developed proprietary pattern libraries and contributed to the WordPress community.',
  },
  {
    year: '2024',
    icon: Sparkle,
    title: 'Design system leaders',
    description:
      'Released LSX Design System 2.0 with enhanced token support, accessibility features, and modern development workflows. 500+ projects delivered.',
  },
];
