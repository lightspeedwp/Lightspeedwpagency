/**
 * Training Template Data
 *
 * Content data for TrainingTemplate.
 * All page content lives here — template handles layout only.
 *
 * @see /src/app/components/templates/TrainingTemplate.tsx
 */

import {
  BookOpen,
  Target,
  Lightning as Zap,
  Brain,
  Trophy as Award,
  Lightbulb,
  Video,
  Users,
  Calendar,
} from '@phosphor-icons/react';

export const trainingHero = {
  badge: 'WORDPRESS MASTERY',
  title: "Unlock your team's",
  highlight: 'full potential.',
  description:
    'Empower your team with expert-led WordPress training. From content management basics to advanced development workflows.',
  cta: {
    primary: { text: 'Explore courses', page: 'services' },
    secondary: { text: 'Team training', page: 'contact' },
  },
};

export const trainingModules = [
  {
    title: 'Content editor mastery',
    description:
      'Master the Gutenberg editor, manage media efficiently, and publish SEO-optimized content with confidence.',
    icon: BookOpen,
    progress: 0,
    duration: '4 hours',
  },
  {
    title: 'Site management basics',
    description:
      'Learn to handle updates, manage users, configure plugins, and maintain site health without breaking things.',
    icon: Target,
    progress: 35,
    duration: '3 hours',
  },
  {
    title: 'Advanced workflows',
    description:
      'Streamline your publishing process with editorial calendars, revision history, and collaborative tools.',
    icon: Zap,
    progress: 75,
    duration: '5 hours',
  },
  {
    title: 'SEO & performance',
    description:
      'Write content that ranks. Understand technical SEO basics, image optimization, and Core Web Vitals.',
    icon: Brain,
    progress: 10,
    duration: '6 hours',
  },
  {
    title: 'WooCommerce admin',
    description:
      'Manage products, process orders, handle refunds, and analyze store reports like a pro.',
    icon: Award,
    progress: 0,
    duration: '8 hours',
  },
  {
    title: 'Custom development',
    description:
      'For technical teams: learn our specific stack, coding standards, and deployment pipelines.',
    icon: Lightbulb,
    progress: 0,
    duration: '12 hours',
  },
];

export const trainingFormats = [
  {
    title: 'Video library',
    description:
      'On-demand access to our comprehensive library of tutorials and walkthroughs.',
    icon: Video,
    badge: 'SELF-PACED',
    featured: false,
  },
  {
    title: 'Live workshops',
    description:
      'Interactive Zoom sessions with Q&A, live demos, and hands-on exercises.',
    icon: Users,
    badge: 'POPULAR',
    featured: true,
  },
  {
    title: 'On-site training',
    description:
      'We come to you (or dedicated remote) for bespoke team training days.',
    icon: Calendar,
    badge: 'ENTERPRISE',
    featured: false,
  },
];
