import {
  Brain,
  Sparkle,
  MagnifyingGlass,
  Robot,
  ChartBar,
  PenNib,
  Lightning,
  TrendUp,
  Shield,
  FileText,
  ChatCentered,
  Crosshair
} from '@phosphor-icons/react';
import type { UniversalIcon } from '../utils/icon-map';
import { statsRegistry } from './stats/stats-registry';

export interface AISolutionHubData {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    visualConcept: string;
    primaryCta: { text: string; page: string };
    secondaryCta: { text: string; page: string };
  };
  stickyNav: { label: string; href: string }[];
  solutions: {
    id: string;
    title: string;
    description: string;
    benefits: string[];
    accent: string;
    icon: UniversalIcon;
    href: string;
    relatedServices: { label: string; href: string }[];
  }[];
  stats: { value: string; label: string; description?: string }[];
  trustSignals: {
    quote: string;
    author: string;
    role: string;
  }[];
  capabilities: {
    icon: UniversalIcon;
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: string;
    benefits: string[];
  };
  // Section headings (Phase 3 requirement: zero hardcoded content)
  sectionHeadings: {
    trust: string;
    stats: { title: string; subtitle: string };
    capabilities: { title: string; description: string };
    relatedServices: string;
    solutionCta: string; // "Explore {title}" template
  };
}

export const aiSolutionsHubData: AISolutionHubData = {
  hero: {
    badge: 'AI SOLUTIONS',
    title: 'Intelligent WordPress,',
    highlight: 'powered by AI.',
    description: 'From automated content creation to predictive analytics, our AI solutions transform how you build, manage, and grow your WordPress presence.',
    visualConcept: 'Neural network grid. CSS grid of nodes with animated connection lines and pulsing nodes. Fallback to static gradient.',
    primaryCta: { text: 'Explore solutions', page: 'contact' },
    secondaryCta: { text: 'View AI services', page: 'services/ai' },
  },
  stickyNav: [
    { label: 'Integrations', href: '#integrations' },
    { label: 'Content', href: '#content-generation' },
    { label: 'SEO', href: '#seo' },
    { label: 'Chatbots', href: '#chatbots' },
    { label: 'Analytics', href: '#analytics' }
  ],
  solutions: [
    {
      id: 'integrations',
      title: 'AI Integrations',
      description: 'Add production-ready AI tooling to your WordPress stack. Connect your site directly to LLMs for automated content, automated tagging, and 24/7 engagement.',
      benefits: ['Plugin ecosystem compatibility', 'API orchestration', 'GDPR compliant', 'Custom data training'],
      accent: 'var(--wp--preset--color--neon-cyan)',
      icon: Brain,
      href: '/solutions/ai/integrations',
      relatedServices: [
        { label: 'WordPress Development', href: '/services/development' },
        { label: 'Security', href: '/services/security' }
      ]
    },
    {
      id: 'content-generation',
      title: 'AI Content Generation',
      description: 'Create on-brand blog posts, product descriptions, and marketing copy at scale using models trained specifically on your voice and style guidelines.',
      benefits: ['Brand-voice tuning', 'Multi-language support', 'SEO-optimised output', 'Bulk generation tools'],
      accent: 'var(--wp--preset--color--neon-pink)',
      icon: PenNib,
      href: '/solutions/ai/content-generation',
      relatedServices: [
        { label: 'Content Strategy', href: '/services/content/strategy' },
        { label: 'Content Audits', href: '/services/content/audit' }
      ]
    },
    {
      id: 'seo',
      title: 'AI-Powered SEO',
      description: 'Automated keyword research, content scoring, dynamic schema markup, and competitor analysis powered by cutting-edge machine learning.',
      benefits: ['Real-time content scoring', 'Schema automation', 'Automated internal linking', 'Predictive rank tracking'],
      accent: 'var(--wp--preset--color--neon-lime)',
      icon: MagnifyingGlass,
      href: '/solutions/ai/seo',
      relatedServices: [
        { label: 'SEO Service', href: '/services/ai/seo' },
        { label: 'AI Search Visibility', href: '/services/ai/search-visibility' }
      ]
    },
    {
      id: 'chatbots',
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents trained on your unique content that qualify leads, answer FAQs, and convert visitors 24/7.',
      benefits: ['Custom model training', 'Seamless human handoff', 'Lead qualification routing', 'Multi-channel support'],
      accent: 'var(--wp--preset--color--neon-cyan)',
      icon: Robot,
      href: '/solutions/ai/chatbots',
      relatedServices: [
        { label: 'Web Design', href: '/services/design' },
        { label: 'Support Service', href: '/services/support' }
      ]
    },
    {
      id: 'analytics',
      title: 'AI Analytics & Insights',
      description: 'Turn raw data into strategic decisions with automated dashboards, traffic predictions, and real-time anomaly detection.',
      benefits: ['Predictive models', 'Anomaly alerts', 'Custom dashboards', 'Conversion path analysis'],
      accent: 'var(--wp--preset--color--neon-yellow)',
      icon: ChartBar,
      href: '/solutions/ai/analytics',
      relatedServices: [
        { label: 'Analytics Service', href: '/services/ai/analytics' },
        { label: 'Performance Optimisation', href: '/services/performance' }
      ]
    }
  ],
  stats: [
    {
      value: statsRegistry.getStatById('time-saved-content')?.value || '73%',
      label: statsRegistry.getStatById('time-saved-content')?.label || 'Productivity gain',
      description: statsRegistry.getStatById('time-saved-content')?.description || 'Average time savings across content workflows',
    },
    {
      value: statsRegistry.getStatById('api-cost-reduction')?.value || '60%',
      label: 'Time saved',
      description: 'Reduction in routine SEO and content tasks',
    },
    {
      value: statsRegistry.getStatById('chatbot-engagement')?.value || '3.5x',
      label: statsRegistry.getStatById('chatbot-engagement')?.label || 'Engagement boost',
      description: statsRegistry.getStatById('chatbot-engagement')?.description || 'Higher visitor engagement with AI chatbots',
    },
    {
      value: statsRegistry.getStatById('conversion-uplift')?.value || '45%',
      label: statsRegistry.getStatById('conversion-uplift')?.label || 'Conversion uplift',
      description: statsRegistry.getStatById('conversion-uplift')?.description || 'Improvement from AI-driven personalisation',
    },
  ],
  trustSignals: [
    {
      quote: 'Integrating the AI content suite allowed us to scale our editorial output by 10x without compromising our brand voice.',
      author: 'Elena Rostova',
      role: 'Head of Content, DailyNews'
    },
    {
      quote: 'The AI chatbot qualified so many leads that our sales team could focus entirely on closing. It paid for itself in a week.',
      author: 'Marcus Vance',
      role: 'Sales Director, TechFlow'
    },
    {
      quote: 'We used to guess what content would perform. The AI predictive analytics tells us what to write before we even start.',
      author: 'Samantha Lee',
      role: 'CMO, GrowthCorp'
    }
  ],
  capabilities: [
    { icon: Lightning, title: 'Instant deployment', description: 'AI features go live in days, not months. WordPress-native plugins mean zero disruption.' },
    { icon: Shield, title: 'Privacy first', description: 'GDPR-compliant with on-premise options. Your data never leaves your infrastructure.' },
    { icon: TrendUp, title: 'Measurable ROI', description: 'Every AI integration includes tracking dashboards so you can measure impact from day one.' },
    { icon: Sparkle, title: 'Continuous learning', description: 'Models improve over time as they learn from your content, visitors, and conversion patterns.' }
  ],
  cta: {
    title: 'Ready to add AI to your WordPress site?',
    description: 'Join forward-thinking businesses already leveraging AI to grow faster, rank higher, and engage deeper.',
    buttonText: 'Request a systems audit',
    buttonPage: 'contact',
    benefits: [
      'Content, SEO, chatbots, and analytics',
      'WordPress-native — works with your existing setup',
      'GDPR compliant and privacy-first',
      'Measurable ROI within 30 days'
    ]
  },
  // Section headings (Phase 3 requirement: zero hardcoded content)
  sectionHeadings: {
    trust: 'Trusted by industry leaders',
    stats: { title: 'Proven results', subtitle: 'See the impact of our AI solutions' },
    capabilities: { title: 'Why choose us?', description: 'Our AI solutions are designed with your success in mind' },
    relatedServices: 'Related services',
    solutionCta: 'Explore {title}' // "Explore {title}" template
  }
};