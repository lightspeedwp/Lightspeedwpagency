import {
  MagnifyingGlass,
  PenNib,
  Code,
  Rocket,
  TrendUp,
  Brain,
  Crosshair,
  FileText,
  Palette,
  Image,
  Shield,
  GitBranch,
  GraduationCap,
  Gauge,
  ChartBar,
  Wrench,
  Cpu,
  Binoculars,
  Blueprint,
  ChatCentered,
  Eye,
  Robot
} from '@phosphor-icons/react';
import type { UniversalIcon } from '../utils/icon-map';

export interface ServiceItem {
  title: string;
  description: string;
  icon: UniversalIcon;
  href: string;
  badge?: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface LifecycleStageData {
  slug: string;
  step: string;
  name: string;
  tagline: string;
  icon: UniversalIcon;
  accent: string;
  description: string;
  services: ServiceItem[];
  solutionLinks: RelatedLink[];
  serviceLinks: RelatedLink[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: string;
  };
}

export const aiServicesLifecycle: LifecycleStageData[] = [
  {
    slug: 'discover',
    step: '01',
    name: 'Discover',
    tagline: 'Uncover. Research. Strategise.',
    icon: MagnifyingGlass,
    accent: 'var(--category-violet)',
    description: 'Every successful AI project starts with a clear roadmap. We analyse your existing workflows, identify repetitive bottlenecks, and map out where AI integration will deliver the highest ROI without disrupting your team.',
    services: [
      { title: 'AI Readiness Audit', description: 'Evaluate your infrastructure for AI adoption.', icon: Binoculars, href: '/services/discovery' },
      { title: 'Data Architecture', description: 'Prepare your content for language models.', icon: FileText, href: '/services/content' }
    ],
    solutionLinks: [
      { label: 'AI Integrations', href: '/solutions/ai/integrations' }
    ],
    serviceLinks: [
      { label: 'AI Search & Visibility', href: '/services/ai/search-visibility' }
    ],
    testimonial: {
      quote: 'The AI readiness audit gave us a clear, actionable path to automation we never saw before.',
      author: 'Sarah Chen',
      role: 'Marketing Director, TravelCo'
    },
    cta: {
      title: 'Ready to Discover Your AI Potential?',
      description: 'Book a free AI readiness assessment.',
      buttonText: 'Book an Assessment',
      buttonPage: 'contact'
    }
  },
  {
    slug: 'create',
    step: '02',
    name: 'Create',
    tagline: 'Design. Prototype. Inspire.',
    icon: PenNib,
    accent: 'var(--category-pink)',
    description: 'We design AI-powered interfaces and automated content models. From chatbot UI/UX to scalable generation templates, we ensure your AI solutions feel native and frictionless to your end users.',
    services: [
      { title: 'Conversational UI', description: 'Figma prototypes for AI chat interfaces.', icon: ChatCentered, href: '/services/design' },
      { title: 'Content Models', description: 'Structured prompt design for generation.', icon: Palette, href: '/services/content' }
    ],
    solutionLinks: [
      { label: 'AI Content Generation', href: '/solutions/ai/content-generation' }
    ],
    serviceLinks: [
      { label: 'AI Engine Optimisation', href: '/services/ai/engine-optimisation' }
    ],
    testimonial: {
      quote: 'The conversational UI they designed feels incredibly human and reduced our support tickets by 30%.',
      author: 'James Okafor',
      role: 'CEO, SafariBookings'
    },
    cta: {
      title: 'Design Your AI Interface',
      description: 'Let us prototype your AI user experience.',
      buttonText: 'Start Prototyping',
      buttonPage: 'contact'
    }
  },
  {
    slug: 'build',
    step: '03',
    name: 'Build',
    tagline: 'Develop. Integrate. Harden.',
    icon: Code,
    accent: 'var(--category-cyan)',
    description: 'Our engineers integrate enterprise AI models directly into your WordPress architecture. We build secure, private pipelines using the OpenAI, Anthropic, and Google APIs tailored strictly to your data.',
    services: [
      { title: 'API Integration', description: 'Secure connections to leading LLMs.', icon: Code, href: '/services/development' },
      { title: 'Private AI Pipelines', description: 'Data handling with strict privacy controls.', icon: Shield, href: '/services/security' }
    ],
    solutionLinks: [
      { label: 'AI Chatbots', href: '/solutions/ai/chatbots' },
      { label: 'AI Integrations', href: '/solutions/ai/integrations' }
    ],
    serviceLinks: [
      { label: 'AI Engine Optimisation', href: '/services/ai/engine-optimisation' }
    ],
    testimonial: {
      quote: 'They built a seamless integration between our CRM and OpenAI that saves us 20 hours a week.',
      author: 'Laura Mitchell',
      role: 'E-commerce Manager, GreenGoods'
    },
    cta: {
      title: 'Build Your Custom AI Engine',
      description: 'We develop secure AI pipelines for WordPress.',
      buttonText: 'Start Building',
      buttonPage: 'contact'
    }
  },
  {
    slug: 'launch',
    step: '04',
    name: 'Launch',
    tagline: 'Deploy. Train. Go live.',
    icon: Rocket,
    accent: 'var(--category-amber)',
    description: 'Deploying AI requires careful calibration. We handle the production launch, optimise model latency, and provide hands-on prompt training so your team can confidently manage the new tools.',
    services: [
      { title: 'Deployment', description: 'Zero-downtime rollouts of AI features.', icon: GitBranch, href: '/services/hosting' },
      { title: 'Prompt Training', description: 'Upskilling your team on AI workflows.', icon: GraduationCap, href: '/services/training' }
    ],
    solutionLinks: [
      { label: 'AI Chatbots', href: '/solutions/ai/chatbots' }
    ],
    serviceLinks: [
      { label: 'Answer Engine Optimisation', href: '/services/ai/answer-engine-optimisation' }
    ],
    testimonial: {
      quote: 'The prompt training empowered our entire editorial team to produce drafts 5x faster.',
      author: 'David Kruger',
      role: 'Operations Lead, Cape Ventures'
    },
    cta: {
      title: 'Launch Your AI Tools',
      description: 'Deploy your AI infrastructure safely.',
      buttonText: 'Plan Your Launch',
      buttonPage: 'contact'
    }
  },
  {
    slug: 'grow',
    step: '05',
    name: 'Grow',
    tagline: 'Optimise. Rank. Scale.',
    icon: TrendUp,
    accent: 'var(--category-green)',
    description: 'We monitor AI outputs, fine-tune models based on user interactions, and scale your automated workflows. Through advanced AI analytics, we measure impact and continually optimise for better performance.',
    services: [
      { title: 'AI-Powered SEO', description: 'Automated on-page optimisation.', icon: MagnifyingGlass, href: '/services/ai/seo', badge: 'HOT' },
      { title: 'AI Analytics', description: 'Predictive insights from user data.', icon: ChartBar, href: '/services/ai/analytics' }
    ],
    solutionLinks: [
      { label: 'AI SEO Solutions', href: '/solutions/ai/seo' },
      { label: 'AI Analytics Solutions', href: '/solutions/ai/analytics' }
    ],
    serviceLinks: [
      { label: 'SEO Service', href: '/services/ai/seo' },
      { label: 'Analytics Service', href: '/services/ai/analytics' }
    ],
    testimonial: {
      quote: 'The predictive analytics showed us exactly which content to double down on, increasing traffic by 150%.',
      author: 'Nina Petrov',
      role: 'Head of Digital, EuroTrek'
    },
    cta: {
      title: 'Scale Your AI Strategy',
      description: 'Use data to drive your next phase of growth.',
      buttonText: 'Start Scaling',
      buttonPage: 'contact'
    }
  },
  {
    slug: 'evolve',
    step: '06',
    name: 'Evolve',
    tagline: 'AI-power. Future-proof.',
    icon: Brain,
    accent: 'var(--category-indigo)',
    description: 'Ensure your brand remains authoritative as search engines shift to Answer Engines. We optimise your site to be cited by LLMs like ChatGPT and Perplexity, maintaining your competitive edge.',
    services: [
      { title: 'Answer Engine Optimisation', description: 'Get cited by AI search platforms.', icon: Cpu, href: '/services/ai/answer-engine-optimisation', badge: 'NEW' },
      { title: 'AI Search Visibility', description: 'Holistic strategy for modern search.', icon: Eye, href: '/services/ai/search-visibility' }
    ],
    solutionLinks: [
      { label: 'AI Integrations', href: '/solutions/ai/integrations' },
      { label: 'AI Analytics', href: '/solutions/ai/analytics' }
    ],
    serviceLinks: [
      { label: 'Answer Engine Optimisation', href: '/services/ai/answer-engine-optimisation' },
      { label: 'AI Engine Optimisation', href: '/services/ai/engine-optimisation' }
    ],
    testimonial: {
      quote: 'We are now the top cited source for our industry across ChatGPT and Perplexity.',
      author: 'Tom van der Berg',
      role: 'Founder, NomadTech'
    },
    cta: {
      title: 'Future-Proof Your Brand',
      description: 'Optimise your content for AI-driven discovery.',
      buttonText: 'Evolve Today',
      buttonPage: 'contact'
    }
  }
];

export const legacyServiceItems = [
  {
    icon: Brain,
    title: 'AI content generation',
    description: 'Create on-brand blog posts, product descriptions, and marketing copy at scale using AI trained on your voice.',
  },
  {
    icon: MagnifyingGlass,
    title: 'AI-powered SEO',
    description: 'Automated keyword research, content scoring, schema markup, and competitor analysis powered by machine learning.',
  },
  {
    icon: ChatCentered,
    title: 'AI chatbots',
    description: 'Intelligent WordPress chatbots that engage visitors 24/7, qualify leads, and hand off to human agents seamlessly.',
  },
  {
    icon: ChartBar,
    title: 'AI analytics & insights',
    description: 'Turn raw data into strategic decisions with automated dashboards, traffic predictions, and anomaly detection.',
  },
  {
    icon: Eye,
    title: 'AI search readiness',
    description: 'Optimise your site for AI-powered search engines like ChatGPT, Perplexity, and Google SGE.',
  },
  {
    icon: Robot,
    title: 'AI engine optimisation',
    description: 'Ensure your content is discoverable, citable, and ranked by the next generation of AI discovery platforms.',
  },
];

export const legacyStatsItems = [
  { value: '156%', label: 'Average organic traffic increase' },
  { value: '10x', label: 'Content production speed' },
  { value: '92%', label: 'Prediction accuracy for traffic' },
  { value: '30+', label: 'AI integrations deployed' },
];

export const legacyApproachSteps = [
  {
    id: 'approach-1',
    number: '01',
    icon: Binoculars,
    title: 'Discovery & audit',
    description: 'We analyse your current digital footprint, content strategy, and search performance to identify AI opportunities.',
  },
  {
    id: 'approach-2',
    number: '02',
    icon: Blueprint,
    title: 'Strategy & architecture',
    description: 'We design a tailored AI integration plan aligned with your business goals, tech stack, and budget.',
  },
  {
    id: 'approach-3',
    number: '03',
    icon: Rocket,
    title: 'Implementation & training',
    description: 'We deploy AI tools, integrate with your WordPress site, and train your team on best practices.',
  },
  {
    id: 'approach-4',
    number: '04',
    icon: TrendUp,
    title: 'Optimisation & scale',
    description: 'We monitor performance, refine models, and scale successful AI initiatives across your digital ecosystem.',
  },
];