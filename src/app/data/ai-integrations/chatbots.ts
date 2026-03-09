/**
 * AI Integrations — AI Chatbots Sub-page Data
 *
 * Content for /solutions/ai-integrations/chatbots
 *
 * @see /src/app/components/templates/AIChatbotsTemplate.tsx
 */

import {
  Robot,
  ChatCentered,
  Users,
  Clock,
  Crosshair,
  Brain,
  Globe,
  Lightning,
  Megaphone,
  Shield,
} from '@phosphor-icons/react';

import type { AIHero, AIStat, AIFeature, AIUseCase, AIPricingPackage, AIFAQ, AICTA } from './types';

/* ── Hero ── */

export const aiChatbotsHero: AIHero = {
  title: 'AI Chatbots for WordPress',
  titleHighlight: 'AI Chatbots',
  tagline:
    'Deploy intelligent conversational agents that understand your business, answer questions instantly, and convert visitors into customers around the clock.',
  badge: { text: 'SMART CHATBOTS', icon: Robot },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

/* ── Stats ── */

export const aiChatbotsStats: AIStat[] = [
  {
    icon: ChatCentered,
    value: '24/7',
    label: 'Always On',
    description: 'Instant responses, any time zone, any language',
  },
  {
    icon: Users,
    value: '3.5x',
    label: 'More Leads',
    description: 'Average increase in qualified lead capture',
  },
  {
    icon: Clock,
    value: '<3s',
    label: 'Response Time',
    description: 'Average first-response time for visitor queries',
  },
  {
    icon: Crosshair,
    value: '89%',
    label: 'Resolution Rate',
    description: 'Questions answered without human intervention',
  },
];

/* ── Features ── */

export const aiChatbotsFeatures: AIFeature[] = [
  {
    icon: Brain,
    title: 'Knowledge Base Training',
    description: 'Train your chatbot on your website content, product catalogue, and support docs for accurate, contextual answers.',
  },
  {
    icon: Users,
    title: 'Lead Qualification',
    description: 'Automatically qualify visitors by asking the right questions and routing hot leads to your sales team.',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'Converse with visitors in their preferred language. Auto-detects and responds in 20+ languages.',
  },
  {
    icon: Lightning,
    title: 'Live Handoff',
    description: 'Seamless escalation to human agents when the bot reaches its limits — complete with chat history.',
  },
  {
    icon: Megaphone,
    title: 'Proactive Engagement',
    description: 'Trigger conversations based on visitor behaviour — time on page, exit intent, or specific page visits.',
  },
  {
    icon: Shield,
    title: 'Privacy Compliant',
    description: 'GDPR and CCPA compliant by design. Conversations are encrypted and anonymisable.',
  },
];

/* ── Use Cases ── */

export const aiChatbotsUseCases: AIUseCase[] = [
  {
    title: 'Customer Support',
    description: 'Handle 80%+ of support queries instantly, freeing your team for complex issues.',
    industries: ['SaaS', 'E-Commerce', 'Services'],
    features: ['FAQ Automation', 'Ticket Creation', 'Knowledge Base'],
  },
  {
    title: 'Lead Generation',
    description: 'Convert anonymous visitors into qualified leads with conversational forms and smart routing.',
    industries: ['B2B', 'Real Estate', 'Finance'],
    features: ['Qualification Flows', 'CRM Integration', 'Meeting Booking'],
  },
  {
    title: 'E-Commerce Assistant',
    description: 'Guide shoppers to the right products, answer sizing questions, and recover abandoned carts.',
    industries: ['Fashion', 'Electronics', 'Home'],
    features: ['Product Recommendations', 'Order Tracking', 'Cart Recovery'],
  },
  {
    title: 'Booking & Reservations',
    description: 'Let visitors book appointments, tours, or tables through natural conversation.',
    industries: ['Tourism', 'Hospitality', 'Healthcare'],
    features: ['Calendar Integration', 'Availability Checks', 'Confirmation Emails'],
  },
];

/* ── Pricing ── */

export const aiChatbotsPricing: { title: string; description: string; packages: AIPricingPackage[] } = {
  title: 'Chatbot Plans',
  description: 'Deploy AI chatbots that scale with your business.',
  packages: [
    {
      name: 'Lite',
      description: 'For simple sites',
      price: '$149/mo',
      features: [
        '1 chatbot',
        '1,000 conversations/mo',
        'FAQ automation',
        'Email notifications',
        'Basic customisation',
      ],
      recommended: false,
    },
    {
      name: 'Business',
      description: 'For growing teams',
      price: '$499/mo',
      features: [
        '3 chatbots',
        '10,000 conversations/mo',
        'Lead qualification flows',
        'CRM integration',
        'Multi-language (10)',
        'Live handoff',
        'Priority support',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organisations',
      price: 'Custom',
      features: [
        'Unlimited chatbots',
        'Unlimited conversations',
        'Custom AI training',
        'API access',
        'White-label branding',
        'SSO + advanced security',
        'Dedicated success manager',
      ],
      recommended: false,
    },
  ],
};

/* ── FAQs ── */

export const aiChatbotsFAQs: AIFAQ[] = [
  {
    question: 'How long does it take to set up a chatbot?',
    answer:
      'Basic chatbots can be live within 24 hours. Custom-trained bots with deep knowledge base integration typically take 1-2 weeks.',
  },
  {
    question: 'Can the chatbot integrate with my CRM?',
    answer:
      'Yes. We support HubSpot, Salesforce, Pipedrive, and other CRMs. Leads captured by the bot are automatically synced with full conversation context.',
  },
  {
    question: 'What happens when the bot cannot answer a question?',
    answer:
      'The bot gracefully hands off to a human agent with the full chat transcript. If no agent is available, it captures contact details and creates a support ticket.',
  },
  {
    question: 'Will the chatbot slow down my website?',
    answer:
      'No. The chatbot loads asynchronously and weighs under 50KB. It has zero impact on your Core Web Vitals or page load speed.',
  },
];

/* ── CTA ── */

export const aiChatbotsCTA: AICTA = {
  title: 'Never Miss Another Lead',
  description:
    'Deploy an AI chatbot that works while you sleep. Qualify leads, answer questions, and delight visitors 24/7.',
  buttons: [
    { text: 'Deploy Your Bot', page: 'contact' },
    { text: 'See Demo', page: 'portfolio-archive' },
  ],
};
