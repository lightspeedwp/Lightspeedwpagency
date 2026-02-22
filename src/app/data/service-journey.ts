/**
 * Service Journey Data
 *
 * Maps the LightSpeed development process into a "Website Journey" —
 * six named phases that guide the user from idea to ongoing growth.
 *
 * Used primarily by the Services mega menu (SiteHeader) and the
 * Services Landing page to present a funky, narrative navigation.
 *
 * @see /src/app/data/process.ts — canonical 6-step process
 * @see /src/app/components/parts/SiteHeader.tsx
 */

import type { LucideIcon } from 'lucide-react';
import {
  Search,
  PenTool,
  Code,
  Rocket,
  TrendingUp,
  Brain,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */

export interface JourneyServiceLink {
  label: string;
  page: string;
  description: string;
  /** Optional "NEW" or "HOT" badge */
  badge?: string;
}

export interface JourneyPhase {
  /** Step number displayed in the UI (01–06) */
  step: string;
  /** Short punchy verb — the phase name */
  name: string;
  /** Icon for the phase */
  icon: LucideIcon;
  /** One-liner shown under the phase name */
  tagline: string;
  /** Neon accent colour for this phase (CSS variable) */
  accent: string;
  /** Services that belong to this phase */
  services: JourneyServiceLink[];
}

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

export const serviceJourney: JourneyPhase[] = [
  {
    step: '01',
    name: 'Ignite',
    icon: Search,
    tagline: 'Uncover. Research. Strategise.',
    accent: 'var(--category-violet)',
    services: [
      { label: 'Discovery & Strategy', page: 'discovery', description: 'Goals, audience & roadmap' },
      { label: 'Content Audit', page: 'content-audit', description: 'Analyse gaps & opportunities' },
      { label: 'Content Strategy', page: 'content-strategy', description: 'Plan your message & voice' },
    ],
  },
  {
    step: '02',
    name: 'Create',
    icon: PenTool,
    tagline: 'Design. Prototype. Inspire.',
    accent: 'var(--category-pink)',
    services: [
      { label: 'Web Design', page: 'design', description: 'Beautiful, accessible UI' },
      { label: 'Content Collection', page: 'content-collection', description: 'Gather & organise assets' },
      { label: 'Email Marketing', page: 'email-marketing', description: 'Campaign design & flows' },
    ],
  },
  {
    step: '03',
    name: 'Build',
    icon: Code,
    tagline: 'Develop. Integrate. Harden.',
    accent: 'var(--category-cyan)',
    services: [
      { label: 'WordPress Dev', page: 'development', description: 'Block themes & plugins' },
      { label: 'Security', page: 'security', description: 'Firewalls & hardening' },
      { label: 'Migrations', page: 'migrations', description: 'Zero-downtime moves' },
    ],
  },
  {
    step: '04',
    name: 'Launch',
    icon: Rocket,
    tagline: 'Deploy. Train. Go live.',
    accent: 'var(--category-amber)',
    services: [
      { label: 'Hosting', page: 'hosting', description: 'Managed WordPress infra' },
      { label: 'Training', page: 'training', description: 'Empower your team' },
    ],
  },
  {
    step: '05',
    name: 'Grow',
    icon: TrendingUp,
    tagline: 'Optimise. Rank. Scale.',
    accent: 'var(--category-green)',
    services: [
      { label: 'Performance', page: 'performance', description: 'Core Web Vitals & speed' },
      { label: 'SEO', page: 'seo', description: 'Rank higher organically' },
      { label: 'Accessibility', page: 'accessibility', description: 'WCAG AA/AAA compliance', badge: 'NEW' },
      { label: 'Support', page: 'support', description: 'Ongoing care & updates' },
    ],
  },
  {
    step: '06',
    name: 'Evolve',
    icon: Brain,
    tagline: 'AI-power. Future-proof.',
    accent: 'var(--category-indigo)',
    services: [
      { label: 'AI Engine Optimisation', page: 'ai-engine-optimisation', description: 'Cut AI costs 60 %', badge: 'NEW' },
      { label: 'Answer Engine (AEO)', page: 'answer-engine-optimisation', description: 'Get cited by AI', badge: 'NEW' },
      { label: 'All Services →', page: 'services', description: 'See the full picture' },
    ],
  },
];

/**
 * Flat list of every service link in journey order.
 * Useful for the sitemap and search index.
 */
export const allJourneyServices = serviceJourney.flatMap((phase) => phase.services);
