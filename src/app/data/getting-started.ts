/**
 * Getting Started with LightSpeed — Page Data
 *
 * Content for /getting-started
 * Aligns with six-stage AI-first lifecycle
 *
 * @see /src/app/components/templates/GettingStartedTemplate.tsx
 */

import {
  Rocket,
  CheckCircle,
  FolderOpen,
  Brain,
  FileText,
  Images,
  Key,
  Users,
  ChatCentered,
  ChartLineUp,
  CloudArrowDown,
  Lightning,
  MagnifyingGlass,
  Robot,
  Sparkle,
  Target,
  Package,
  Globe,
  Shield,
} from '@phosphor-icons/react';

import type { UniversalIcon } from '../utils/icon-map';

/* ── Hero Section ── */

export interface GettingStartedHero {
  title: string;
  titleHighlight: string;
  tagline: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export const gettingStartedHero: GettingStartedHero = {
  title: 'Getting started with LightSpeed',
  titleHighlight: 'Getting started',
  tagline: 'Your roadmap to a faster, smarter, AI-powered website',
  description:
    'We\'ve streamlined project kick-off with our six-stage AI-first lifecycle. Here\'s what you need to prepare, what access we require, and how AI accelerates every phase from discovery to evolution.',
  primaryCTA: {
    text: 'Start your project',
    href: '/contact',
  },
  secondaryCTA: {
    text: 'Explore AI solutions',
    href: '/solutions/ai-integrations',
  },
};

/* ── Lifecycle Stages with AI Touchpoints ── */

export interface LifecycleStage {
  slug: string;
  name: string;
  icon: UniversalIcon;
  accent: string;
  tagline: string;
  aiTouchpoint: string;
  clientPrep: string[];
  deliverables: string[];
}

export const lifecycleStages: LifecycleStage[] = [
  {
    slug: 'discover',
    name: 'Discover',
    icon: MagnifyingGlass,
    accent: 'var(--category-purple)',
    tagline: 'Uncover opportunities with AI-driven insights',
    aiTouchpoint:
      'AI analytics scan your existing site for SEO gaps, accessibility issues, and performance bottlenecks. Predictive models identify your best conversion paths.',
    clientPrep: [
      'Current website analytics access (Google Analytics, Search Console)',
      'Brand guidelines and tone of voice documentation',
      'Business goals and target audience personas',
      'Competitor websites for benchmarking',
    ],
    deliverables: [
      'AI-generated site audit report',
      'Competitor analysis with AI insights',
      'Strategy roadmap with measurable KPIs',
      'Design system planning workshop',
    ],
  },
  {
    slug: 'create',
    name: 'Create',
    icon: Sparkle,
    accent: 'var(--category-cyan)',
    tagline: 'Design faster with AI-assisted prototyping',
    aiTouchpoint:
      'AI content generation creates first-draft copy for every page. Design token automation ensures brand consistency. AI chatbot trains on your FAQs.',
    clientPrep: [
      'High-resolution logo files (SVG, PNG)',
      'Brand color palette and typography preferences',
      'Sample content and AI prompt guidelines',
      'FAQs and Q&A pairs for AI chatbot training',
    ],
    deliverables: [
      'Figma design system with reusable components',
      'AI-generated content drafts for all pages',
      'Interactive prototype with micro-interactions',
      'Design token library (CSS variables)',
    ],
  },
  {
    slug: 'build',
    name: 'Build',
    icon: Package,
    accent: 'var(--category-orange)',
    tagline: 'Develop with AI-optimized code and workflows',
    aiTouchpoint:
      'AI code assistants generate semantic HTML and accessible components. Automated testing catches bugs before they reach staging. AI SEO tools structure schema markup.',
    clientPrep: [
      'Hosting credentials (cPanel, DNS, FTP)',
      'WordPress admin access or new site setup approval',
      'Third-party service logins (CRM, email, analytics)',
      'Content migration spreadsheet (if redesigning)',
    ],
    deliverables: [
      'WordPress block theme with FSE support',
      'AI-optimized code (semantic HTML, ARIA labels)',
      'Schema markup for answer engines',
      'Staging site for client review',
    ],
  },
  {
    slug: 'launch',
    name: 'Launch',
    icon: Rocket,
    accent: 'var(--category-pink)',
    tagline: 'Go live with AI-powered quality assurance',
    aiTouchpoint:
      'AI testing scans for broken links, accessibility violations, and performance regressions. Automated checklists ensure nothing is missed at launch.',
    clientPrep: [
      'Final content approvals and copy edits',
      'SSL certificate and domain DNS settings',
      'Payment gateway and e-commerce setup (if applicable)',
      'Launch date and go-live checklist sign-off',
    ],
    deliverables: [
      'AI QA report (accessibility, performance, SEO)',
      'Launch checklist with automated task tracking',
      'Live site deployment with zero downtime',
      'Post-launch monitoring setup (uptime, analytics)',
    ],
  },
  {
    slug: 'grow',
    name: 'Grow',
    icon: ChartLineUp,
    accent: 'var(--category-green)',
    tagline: 'Expand reach with AI-driven visibility',
    aiTouchpoint:
      'AI SEO identifies high-value keywords and generates meta descriptions. Answer engine optimization surfaces your content in ChatGPT, Perplexity, and voice search.',
    clientPrep: [
      'Content calendar and publishing schedule',
      'AI prompt brief for blog post generation',
      'Brand voice notes for AI copywriting tools',
      'Target keywords and search intent data',
    ],
    deliverables: [
      'AI SEO audit with keyword opportunities',
      'Answer engine optimization (AEO) implementation',
      'AI-generated blog content pipeline',
      'Search visibility dashboard and reporting',
    ],
  },
  {
    slug: 'evolve',
    name: 'Evolve',
    icon: Lightning,
    accent: 'var(--category-yellow)',
    tagline: 'Optimize continuously with AI analytics',
    aiTouchpoint:
      'AI analytics predict user behavior and suggest A/B test candidates. Chatbot conversation logs reveal common pain points. Predictive models forecast traffic trends.',
    clientPrep: [
      'Conversion goals and success metrics',
      'User feedback and support ticket data',
      'A/B testing priorities and hypotheses',
      'Budget for ongoing AI tool subscriptions',
    ],
    deliverables: [
      'AI analytics dashboards (traffic, conversions, behavior)',
      'Predictive insights and trend forecasting',
      'A/B test recommendations with expected impact',
      'Ongoing support and AI model fine-tuning',
    ],
  },
];

/* ── Materials Checklist ── */

export interface ChecklistCategory {
  id: string;
  title: string;
  icon: UniversalIcon;
  description: string;
  items: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  required: boolean;
  aiContext?: string;
}

export const materialsChecklist: ChecklistCategory[] = [
  {
    id: 'content',
    title: 'Content & copy',
    icon: FileText,
    description:
      'Text, images, and media for all pages. Include AI prompt guidelines for tone and style.',
    items: [
      {
        id: 'copy',
        label: 'Page copy (About, Services, etc.)',
        description: 'Or outlines for AI content generation',
        required: true,
        aiContext:
          'Provide sample paragraphs showing your preferred tone, or let our AI generate first drafts based on your brand voice notes.',
      },
      {
        id: 'images',
        label: 'Images and media files',
        description: 'High-resolution photos, videos, icons',
        required: true,
      },
      {
        id: 'faqs',
        label: 'FAQs and Q&A pairs',
        description: 'For AI chatbot training and answer engine optimization',
        required: false,
        aiContext:
          'AI chatbots learn from your FAQ library. Provide 20-50 common questions with answers to train conversational AI.',
      },
      {
        id: 'brand-voice',
        label: 'Brand voice guidelines',
        description: 'Tone, style, and examples for AI copywriting',
        required: false,
        aiContext:
          'Examples: "friendly but professional," "technical but accessible," "playful and modern." Include do\'s and don\'ts.',
      },
    ],
  },
  {
    id: 'brand',
    title: 'Brand assets',
    icon: Images,
    description:
      'Logo files, design guidelines, and component libraries for AI-driven automation.',
    items: [
      {
        id: 'logo',
        label: 'Logo files (SVG, PNG)',
        description: 'Vector formats preferred, transparent backgrounds',
        required: true,
      },
      {
        id: 'brand-guidelines',
        label: 'Brand guidelines PDF',
        description: 'Color palette, typography, usage rules',
        required: true,
      },
      {
        id: 'design-tokens',
        label: 'Design tokens or style guide',
        description: 'Spacing, colors, border radius values',
        required: false,
        aiContext:
          'Design tokens enable AI to generate on-brand components automatically. Provide CSS variables or Figma design system exports.',
      },
      {
        id: 'component-library',
        label: 'Existing component library',
        description: 'Figma files, Storybook, or design system docs',
        required: false,
      },
    ],
  },
  {
    id: 'access',
    title: 'Access & credentials',
    icon: Key,
    description:
      'Logins for hosting, WordPress, analytics, and AI tools. We never store passwords—use secure share methods.',
    items: [
      {
        id: 'hosting',
        label: 'Hosting control panel (cPanel, Plesk)',
        description: 'For DNS, SSL, and server configuration',
        required: true,
      },
      {
        id: 'wordpress',
        label: 'WordPress admin access',
        description: 'Or approval to create a new WP install',
        required: true,
      },
      {
        id: 'analytics',
        label: 'Google Analytics & Search Console',
        description: 'For AI-driven insights and SEO audits',
        required: true,
        aiContext:
          'AI analytics scan your traffic data to identify conversion opportunities and content gaps.',
      },
      {
        id: 'ai-tools',
        label: 'AI service credentials (optional)',
        description: 'ChatGPT API, analytics platforms, SEO tools',
        required: false,
        aiContext:
          'If you have existing AI subscriptions (OpenAI, Jasper, etc.), we can integrate them. Otherwise, we provide access.',
      },
      {
        id: 'third-party',
        label: 'Third-party integrations',
        description: 'CRM, email marketing, payment gateways',
        required: false,
      },
    ],
  },
];

/* ── Communication & Tools ── */

export interface Tool {
  name: string;
  icon: UniversalIcon;
  purpose: string;
  access: string;
}

export const communicationTools: Tool[] = [
  {
    name: 'Google Drive',
    icon: FolderOpen,
    purpose: 'File sharing and content uploads',
    access: 'We provide a shared folder with organized subfolders',
  },
  {
    name: 'Figma',
    icon: Target,
    purpose: 'Design system and prototype collaboration',
    access: 'View-only link sent after Create phase kick-off',
  },
  {
    name: 'Google Meet',
    icon: Users,
    purpose: 'Discovery workshops and feedback sessions',
    access: 'Calendar invites sent for scheduled meetings',
  },
  {
    name: 'AI Chatbot',
    icon: ChatCentered,
    purpose: '24/7 project support and FAQ assistance',
    access: 'Embedded on your project portal',
  },
  {
    name: 'Client Portal',
    icon: Globe,
    purpose: 'Progress tracking and deliverable downloads',
    access: 'Login credentials sent after contract signing',
  },
];

/* ── File Organization Guide ── */

export interface FolderStructure {
  folder: string;
  description: string;
  examples: string[];
}

export const folderStructure: FolderStructure[] = [
  {
    folder: '/01-Brand',
    description: 'Logo files, brand guidelines, style guides',
    examples: ['logo.svg', 'brand-guidelines.pdf', 'color-palette.png'],
  },
  {
    folder: '/02-Content',
    description: 'Page copy, blog posts, AI prompt briefs',
    examples: [
      'homepage-copy.docx',
      'about-us.txt',
      'ai-brand-voice.md',
    ],
  },
  {
    folder: '/03-Images',
    description: 'Photos, graphics, icons (high-resolution)',
    examples: ['hero-image.jpg', 'team-photo-01.png', 'icon-set.zip'],
  },
  {
    folder: '/04-FAQs',
    description: 'Q&A pairs for AI chatbot and answer engine',
    examples: ['chatbot-training-faqs.csv', 'aeo-content.json'],
  },
  {
    folder: '/05-Access',
    description: 'Credentials document (password-protected)',
    examples: ['hosting-credentials.txt', 'wp-admin-access.txt'],
  },
  {
    folder: '/06-Reference',
    description: 'Competitor sites, inspiration, existing analytics',
    examples: ['competitor-analysis.xlsx', 'analytics-export.pdf'],
  },
];

/* ── Why This Workflow Works ── */

export interface Benefit {
  title: string;
  icon: UniversalIcon;
  description: string;
}

export const workflowBenefits: Benefit[] = [
  {
    title: 'Faster project cycles',
    icon: Lightning,
    description:
      'AI content generation and automated testing cut 30-40% from traditional timelines. First drafts arrive in hours, not weeks.',
  },
  {
    title: 'Measurable quality',
    icon: CheckCircle,
    description:
      'AI audits provide objective scores for accessibility, SEO, and performance. No guesswork—every decision is data-driven.',
  },
  {
    title: 'Future-proof visibility',
    icon: Robot,
    description:
      'Answer engine optimization ensures your content surfaces in ChatGPT, Perplexity, and voice assistants—not just Google.',
  },
  {
    title: 'Transparent progress',
    icon: Target,
    description:
      'Interactive checklists and client portals show real-time status. You always know what\'s next and what we need from you.',
  },
];

/* ── Downloadable Resources ── */

export interface Resource {
  title: string;
  description: string;
  icon: UniversalIcon;
  fileType: string;
  href: string;
}

export const downloadableResources: Resource[] = [
  {
    title: 'Content inventory template',
    description: 'Spreadsheet for organizing page copy, images, and metadata',
    icon: FileText,
    fileType: 'XLSX',
    href: '/downloads/content-inventory-template.xlsx',
  },
  {
    title: 'AI prompt brief',
    description: 'Guidelines for providing brand voice and tone examples',
    icon: Brain,
    fileType: 'PDF',
    href: '/downloads/ai-prompt-brief.pdf',
  },
  {
    title: 'Access credentials form',
    description: 'Secure document for sharing hosting and service logins',
    icon: Key,
    fileType: 'DOCX',
    href: '/downloads/access-credentials-form.docx',
  },
  {
    title: 'Image checklist',
    description: 'Requirements for photos, logos, and graphics',
    icon: Images,
    fileType: 'PDF',
    href: '/downloads/image-checklist.pdf',
  },
];

/* ── FAQ Section ── */

export interface FAQ {
  question: string;
  answer: string;
}

export const gettingStartedFAQs: FAQ[] = [
  {
    question: 'What if I don\'t have all materials ready at kick-off?',
    answer:
      'No problem. We can start the Discover phase with what you have and use AI content generation to fill gaps. You can refine AI drafts later in the Create phase.',
  },
  {
    question: 'How does AI content generation work?',
    answer:
      'You provide brand voice guidelines and sample content (or we extract tone from your existing site). Our AI tools generate first drafts for all pages, which you review and edit. Final copy always has human oversight.',
  },
  {
    question: 'Do I need to provide AI tool access?',
    answer:
      'No—we include AI services in our packages. If you already subscribe to tools like ChatGPT API or Jasper, we can integrate them. Otherwise, we handle everything.',
  },
  {
    question: 'What\'s the typical project timeline with AI?',
    answer:
      'AI reduces cycles by 30-40%. A standard site that used to take 12 weeks now completes in 7-8 weeks. Complex builds (e-commerce, custom apps) still take longer but benefit from faster content and testing phases.',
  },
  {
    question: 'How secure is sharing credentials?',
    answer:
      'We use encrypted password managers (1Password, LastPass) and never store plaintext credentials. You can also use temporary admin accounts that expire after project completion.',
  },
  {
    question: 'Can I track project progress?',
    answer:
      'Yes—your client portal includes an interactive checklist showing completed tasks, pending items, and upcoming milestones. You receive automated email updates at each phase transition.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We enter the Grow and Evolve phases. AI analytics monitor traffic, conversions, and SEO rankings. We provide monthly reports with optimization recommendations and can manage ongoing updates.',
  },
  {
    question: 'Do you offer training on AI tools?',
    answer:
      'Yes—we include training sessions showing how to use AI chatbots, update content with AI assistance, and interpret analytics dashboards. Recordings are available for future reference.',
  },
];

/* ── Call to Action ── */

export interface CTA {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export const gettingStartedCTA: CTA = {
  title: 'Ready to start your AI-powered project?',
  description:
    'Book a free discovery call to discuss your goals, timeline, and how our AI-first workflow delivers faster, smarter results.',
  primaryButton: {
    text: 'Schedule discovery call',
    href: '/contact',
  },
  secondaryButton: {
    text: 'View pricing & packages',
    href: '/pricing',
  },
};