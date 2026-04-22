/**
 * Design Systems Solution Page — Dedicated Data
 *
 * Rich solution object for the Design Systems strategic solution page.
 * Merges `/systems/design-tokens` + `/systems/pattern-governance` into
 * a single commercial offering at `/solutions/design-systems`.
 *
 * @see /src/app/components/templates/DesignSystemsSolutionTemplate.tsx
 */

import {
  PaintBrushBroad,
  Stack,
  PersonArmsSpread,
  FigmaLogo,
  LockKey,
  Infinity as InfinityIcon,
  Rocket,
  Palette,
  ClockCountdown,
  ShieldCheck,
} from '@phosphor-icons/react';

export const designSystemsSolution = {
  title: 'Design Systems',
  slug: 'design-systems',
  category: 'Strategic solution',
  tagline:
    'Enterprise design systems and pattern governance for WordPress teams that need scale, consistency, and editorial control',
  description:
    'We engineer mathematically precise, token-driven design systems in Figma and translate them natively into WordPress block themes. LightSpeed helps organisations build a scalable visual system that covers colour, typography, spacing, components, patterns, and governance rules — so your brand stays consistent as your site, team, and publishing demands grow. This is how we reduce design debt, improve editorial safety, and bring design and development into a shared system of truth.',

  hero: {
    headline: 'Enterprise Design Systems & Pattern Governance',
    subtitle:
      'We engineer mathematically precise, token-driven design systems in Figma and translate them natively into WordPress block themes. Scale your digital brand with absolute consistency and strict editorial governance.',
    primaryCta: 'Book a Design System Audit',
    secondaryCta: 'Request a Design System Demo',
  },

  stats: [
    { number: '10+', label: 'Enterprise design systems created', icon: Rocket },
    { number: '230', label: 'Design tokens actively managed', icon: Palette },
    { number: '2,000+', label: 'Hours invested in design systems', icon: ClockCountdown },
    { number: '100%', label: 'WCAG 2.1 / 2.2 AA compliance', icon: ShieldCheck },
  ],

  benefits: [
    'Reduce design debt across large WordPress estates',
    'Keep brand consistency across templates, pages, and editorial teams',
    'Improve collaboration between design, development, and content teams',
    'Build reusable patterns that accelerate page creation',
    'Enforce accessibility and governance at the system level',
    'Translate design thinking directly into maintainable WordPress code',
  ],

  features: [
    {
      title: 'Design tokens & mathematics',
      description:
        'We establish a unified spacing scale, typography hierarchy, and semantic token system so every margin, gap, font size, and visual rule remains mathematically consistent across mobile, tablet, and desktop.',
      icon: Stack,
    },
    {
      title: 'Pattern governance',
      description:
        'We build reusable patterns and enforce editorial safety rules. Outer structural wrappers can be locked while inner content surfaces stay editable, helping publishing teams move faster without breaking complex layouts.',
      icon: LockKey,
    },
    {
      title: 'Accessibility built in',
      description:
        'Our design systems are engineered to meet strict WCAG 2.2 AA requirements from the start, including colour contrast, visible focus states, scalable spacing, and accessible interaction patterns.',
      icon: PersonArmsSpread,
    },
    {
      title: 'Figma to WordPress parity',
      description:
        'We reduce design-to-development guesswork by building Figma prototypes and token libraries that map cleanly to WordPress block themes, Full Site Editing, and theme.json presets.',
      icon: FigmaLogo,
    },
    {
      title: 'Editorial safety & brand control',
      description:
        'We create systems that protect layout integrity while still giving content teams the flexibility they need for day-to-day publishing.',
      icon: PaintBrushBroad,
    },
    {
      title: 'Long-term maintainability',
      description:
        'A system-led build reduces hardcoded one-off styling, lowers design debt, and makes future expansion much easier for internal teams and agency partners alike.',
      icon: InfinityIcon,
    },
  ],

  useCases: [
    {
      title: 'Enterprise marketing teams',
      description:
        'Give internal teams a scalable publishing system that protects the brand across high-volume page creation.',
      industries: ['Enterprise', 'Marketing', 'Brand'],
    },
    {
      title: 'Editorial and publishing businesses',
      description:
        'Build reusable templates and patterns that allow faster publishing without losing structure or consistency.',
      industries: ['Publishing', 'Editorial', 'Content Operations'],
    },
    {
      title: 'Multi-stakeholder WordPress platforms',
      description:
        'Align designers, developers, and editors around one system of truth so change becomes easier to manage.',
      industries: ['Media', 'Education', 'Membership', 'Enterprise'],
    },
    {
      title: 'Redesign and replatform projects',
      description:
        'Use token architecture and pattern governance to rebuild digital platforms on a cleaner, more maintainable foundation.',
      industries: ['Redesign', 'Replatform', 'Digital Transformation'],
    },
  ],

  specifications: {
    technology: [
      'Figma variables and component variants',
      'WordPress block themes',
      'theme.json presets and style variations',
      'Reusable block patterns',
      'Controlled editor experiences',
      'Accessibility-first front-end implementation',
    ],
    requirements: [
      'Brand and design audit',
      'Content model review',
      'Component inventory',
      'Editorial workflow understanding',
      'WordPress implementation scope',
      'Governance decisions around locked vs editable areas',
    ],
    support: [
      'Design system discovery',
      'Token architecture planning',
      'Figma library setup',
      'WordPress implementation strategy',
      'Pattern governance planning',
      'Ongoing refinement and documentation',
    ],
  },

  pricing: {
    model: 'Custom scoped engagement',
    starting: 'Tailored to system complexity',
    includes: [
      'Design system audit',
      'Token and component planning',
      'Pattern governance strategy',
      'Figma-to-WordPress mapping',
      'Implementation roadmap',
    ],
  },

  relatedSolutions: [
    {
      id: 'wordpress',
      title: 'WordPress solution',
      slug: 'wordpress',
      excerpt:
        'Scalable WordPress foundations for structured, maintainable publishing and marketing systems.',
    },
    {
      id: 'ai',
      title: 'AI integrations',
      slug: 'ai',
      excerpt:
        'Extend your structured WordPress platform with AI-ready workflows, automation, and operational intelligence.',
    },
    {
      id: 'publishers',
      title: 'Publishers',
      slug: 'publishers',
      excerpt:
        'Editorial systems, governance, and scalable publishing workflows for complex content teams.',
    },
  ],
};

/* ── Impact / Why Token-Driven Design Matters ── */

export const designSystemsImpact = {
  title: 'Why token-driven design matters',
  body: 'A beautiful website is difficult to maintain without a scalable system behind it. Traditional web builds rely on hardcoded styles, leading to technical debt and brand inconsistency over time. We solve this by engineering a token-driven system. Every colour, spacing rule, typography preset, and interface decision is defined as a variable in Figma and mapped into WordPress theme.json. This gives designers, developers, and editors a shared system of truth — and makes it far harder for a growing team to accidentally break the brand.',
  tokenCallouts: [
    { token: '--color-primary', value: 'Figma variable → theme.json' },
    { token: '--spacing-lg', value: '8pt mathematical scale' },
    { token: '--font-primary', value: 'Typographic preset system' },
    { token: '--radius-lg', value: 'Shape language rules' },
  ],
};

/* ── Design-to-Dev Workflow Steps ── */

export const designSystemsWorkflow = {
  title: 'The design-to-dev workflow',
  steps: [
    {
      number: '01',
      title: 'Foundation',
      description:
        'We establish the core variables in Figma, including colour, typography, spacing, and naming conventions.',
    },
    {
      number: '02',
      title: 'Components',
      description:
        'We build atomic components such as buttons, forms, cards, and navigation, all linked to the token system.',
    },
    {
      number: '03',
      title: 'Patterns',
      description:
        'We assemble reusable page-building patterns such as hero sections, proof blocks, CTA bands, stats grids, and editorial layouts.',
    },
    {
      number: '04',
      title: 'Governance',
      description:
        'We map the system into WordPress via theme.json, block styles, and controlled editor experiences that protect brand integrity.',
    },
  ],
};

/* ── CTA Section ── */

export const designSystemsCTA = {
  title: 'Stop managing pages. Start managing a system.',
  description:
    'If your website is growing but your design, publishing, and development processes feel fragmented, we can help you turn them into one coherent system.',
  buttonText: 'Request a Design System Demo',
  benefits: [
    'Token-driven Figma foundations',
    'WordPress theme.json parity',
    'Locked layouts with editable surfaces',
    'WCAG 2.2 AA accessibility by default',
    'Governance for long-term maintainability',
  ],
};
