/**
 * AI Integrations — AI Chatbots Sub-page Data
 *
 * Content for /solutions/ai-integrations/chatbots
 *
 * @see /src/app/components/templates/AIChatbotsTemplate.tsx
 */

import {
  ChatCentered,
  Clock,
  CurrencyDollar,
  TrendUp,
  Users,
  Lightning,
  PhoneIncoming,
  Globe,
  Shield,
  ChartBar,
  Robot,
  Rocket,
  Crosshair,
} from '@phosphor-icons/react';

import type { AIHero, AIStat, AIFeature, AIUseCase, AIPricingPackage, AIFAQ, AICTA } from './types';
import type { UniversalIcon } from '../../utils/icon-map';

/* ── Lifecycle Stage Info ── */

export interface LifecycleStageInfo {
  slug: string;
  name: string;
  icon: UniversalIcon;
  accent: string;
}

export const chatbotsLifecycle: LifecycleStageInfo = {
  slug: 'engage',
  name: 'Engage',
  icon: ChatCentered,
  accent: 'var(--category-cyan)',
};

/* ── Trust Signal ── */

export const chatbotsTrustSignal = {
  quote: 'The AI chatbot reduced our response time from hours to seconds. Our customer satisfaction scores increased by 45%.',
  author: 'Sarah Mitchell',
  role: 'Customer Experience Director',
  company: 'TechSupport Pro',
};

/* ── Related Links ── */

export const chatbotsRelatedServices = [
  { label: 'UX Design', href: '/services/design/ux', description: 'Conversation design and user flows' },
  { label: 'API Integration', href: '/services/development/api-integration', description: 'Connect to CRM and support systems' },
  { label: 'AI SEO', href: '/solutions/ai-integrations/seo', description: 'AI-powered search optimisation' },
];

export const chatbotsRelatedSolutions = [
  { label: 'AI Integrations', href: '/solutions/ai-integrations', description: 'Complete AI integration roadmap' },
  { label: 'Content Generation', href: '/solutions/ai-integrations/content-generation', description: 'AI-powered content creation' },
  { label: 'AI Analytics', href: '/solutions/ai-integrations/analytics', description: 'Predictive insights and reporting' },
];

/* ── Hero ── */

export const aiChatbotsHero: AIHero = {
  title: 'AI Chatbots',
  titleHighlight: 'AI Chatbots',
  tagline:
    'Provide instant, intelligent support 24/7. AI chatbots handle common queries, qualify leads, and escalate complex issues to your team.',
  badge: { text: 'AI CHATBOTS', icon: Robot },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

/* ── Stats ── */

export const aiChatbotsStats: AIStat[] = [
  {
    icon: Clock,
    value: '24/7',
    label: 'Availability',
    description: 'Never miss a customer enquiry, day or night',
  },
  {
    icon: TrendUp,
    value: '65%',
    label: 'Auto-Resolution',
    description: 'Common queries solved without human intervention',
  },
  {
    icon: CurrencyDollar,
    value: '40%',
    label: 'Cost Reduction',
    description: 'Lower support costs while improving response times',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Concurrent Chats',
    description: 'Handle unlimited conversations simultaneously',
  },
];

/* ── Features ── */

export const aiChatbotsFeatures: AIFeature[] = [
  {
    icon: ChatCentered,
    title: 'Natural conversations',
    description: 'Context-aware responses that understand intent, not just keywords. Feels human, not robotic.',
  },
  {
    icon: Lightning,
    title: 'Instant responses',
    description: 'Sub-second reply times for common queries. No more waiting in support queues.',
  },
  {
    icon: PhoneIncoming,
    title: 'Smart escalation',
    description: 'Automatically routes complex issues to human agents with full conversation context.',
  },
  {
    icon: Globe,
    title: 'Multi-language support',
    description: 'Communicate with customers in 30+ languages. Auto-detects language preference.',
  },
  {
    icon: Shield,
    title: 'Privacy-first design',
    description: 'GDPR-compliant data handling. Customer information stays secure and encrypted.',
  },
  {
    icon: ChartBar,
    title: 'Analytics dashboard',
    description: 'Track conversation patterns, satisfaction scores, and identify knowledge gaps.',
  },
];

/* ── Use Cases ── */

export const aiChatbotsUseCases: AIUseCase[] = [
  {
    title: 'E-Commerce support',
    description: 'Answer product questions, track orders, process returns, and recommend products based on customer needs.',
    industries: ['Retail', 'Fashion', 'Electronics'],
    features: ['Order Tracking', 'Product Recommendations', 'Returns Automation'],
  },
  {
    title: 'Lead qualification',
    description: 'Engage website visitors, qualify leads through conversation, and route hot prospects to sales teams.',
    industries: ['B2B SaaS', 'Professional Services', 'Real Estate'],
    features: ['Lead Scoring', 'Calendar Booking', 'CRM Integration'],
  },
  {
    title: 'Customer onboarding',
    description: 'Guide new users through setup, answer common questions, and reduce support ticket volume.',
    industries: ['SaaS', 'Financial Services', 'Education'],
    features: ['Interactive Tutorials', 'FAQ Automation', 'Account Setup'],
  },
  {
    title: 'Appointment booking',
    description: 'Schedule consultations, service appointments, or demos directly through natural conversation.',
    industries: ['Healthcare', 'Professional Services', 'Hospitality'],
    features: ['Calendar Sync', 'Reminder Emails', 'Rescheduling'],
  },
];

/* ── Pricing ── */

export const aiChatbotsPricing: AIPricingPackage[] = [
  {
    name: 'Starter',
    price: '£199/mo',
    description: 'Perfect for small businesses testing AI support',
    features: [
      '1,000 conversations/month',
      'Single website integration',
      'Email escalation',
      'Basic analytics',
      '5 custom workflows',
    ],
    cta: { text: 'Start Free Trial', page: 'contact' },
  },
  {
    name: 'Professional',
    price: '£499/mo',
    description: 'For growing businesses with active support needs',
    features: [
      '10,000 conversations/month',
      'Multi-site support',
      'CRM integration (HubSpot, Salesforce)',
      'Advanced analytics & reporting',
      'Unlimited workflows',
      'Custom branding',
      'Priority support',
    ],
    cta: { text: 'Request Demo', page: 'contact' },
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organisations with complex requirements',
    features: [
      'Unlimited conversations',
      'White-label solution',
      'Custom AI model training',
      'Dedicated success manager',
      'SLA guarantees',
      'Multi-region deployment',
      'Advanced security & compliance',
    ],
    cta: { text: 'Talk to Sales', page: 'contact' },
  },
];

/* ── FAQs ── */

export const aiChatbotsFAQs: AIFAQ[] = [
  {
    question: 'How long does it take to set up an AI chatbot?',
    answer:
      'Most chatbots are live within 2-4 weeks. We start with core workflows (FAQs, contact forms), then expand based on conversation data. You can begin testing within the first week.',
  },
  {
    question: 'Will the chatbot replace my support team?',
    answer:
      'No. AI chatbots handle repetitive queries (order status, FAQs, password resets) so your team can focus on complex issues requiring empathy and expertise. Think of it as a tier-1 support filter.',
  },
  {
    question: 'What happens if the chatbot doesn\'t understand?',
    answer:
      'The bot gracefully escalates to a human agent with full conversation context. We also track "confusion points" to continuously improve responses and add new training data.',
  },
  {
    question: 'Can I customise the chatbot\'s personality?',
    answer:
      'Absolutely. We train the AI on your brand voice guidelines, tone preferences, and approved language. The chatbot can be formal, casual, playful — whatever matches your brand.',
  },
  {
    question: 'Is my customer data safe?',
    answer:
      'Yes. All conversations are encrypted in transit and at rest. We\'re GDPR-compliant, support data residency requirements, and never use your customer data to train public AI models.',
  },
  {
    question: 'What integrations are supported?',
    answer:
      'Native support for WordPress, WooCommerce, HubSpot, Salesforce, Zendesk, Intercom, Google Calendar, and Stripe. Custom integrations available via REST API or webhooks.',
  },
];

/* ── CTA ── */

export const aiChatbotsCTA: AICTA = {
  title: 'Ready to provide instant support?',
  description: 'Let\'s build an AI chatbot that feels natural, solves problems, and scales with your business.',
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'View All AI Solutions', page: 'ai-integrations' },
};
