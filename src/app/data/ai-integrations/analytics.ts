/**
 * AI Integrations — AI Analytics & Insights Sub-page Data
 *
 * Content for /solutions/ai-integrations/analytics
 *
 * @see /src/app/components/templates/AIAnalyticsTemplate.tsx
 */

import {
  ChartLine,
  ChartBar,
  Lightbulb,
  Clock,
  TrendUp,
  Users,
  FileText,
  Crosshair,
  Megaphone,
  Database,
} from '@phosphor-icons/react';

import type { AIHero, AIStat, AIFeature, AIUseCase, AIPricingPackage, AIFAQ, AICTA } from './types';

/* ── Hero ── */

export const aiAnalyticsHero: AIHero = {
  title: 'AI Analytics & Insights',
  titleHighlight: 'Analytics & Insights',
  tagline:
    'Transform raw data into strategic decisions. AI analyses visitor behaviour, predicts trends, and delivers actionable reports — automatically.',
  badge: { text: 'SMART ANALYTICS', icon: ChartLine },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

/* ── Stats ── */

export const aiAnalyticsStats: AIStat[] = [
  {
    icon: ChartBar,
    value: '45%',
    label: 'Better Decisions',
    description: 'More data-driven decisions across the organisation',
  },
  {
    icon: Lightbulb,
    value: '200+',
    label: 'Auto Insights',
    description: 'AI-generated insights per month, on average',
  },
  {
    icon: Clock,
    value: '15h',
    label: 'Hours Saved',
    description: 'Per month on manual reporting and analysis',
  },
  {
    icon: TrendUp,
    value: '92%',
    label: 'Accuracy',
    description: 'Prediction accuracy for traffic forecasting',
  },
];

/* ── Features ── */

export const aiAnalyticsFeatures: AIFeature[] = [
  {
    icon: ChartLine,
    title: 'Predictive Traffic',
    description: 'Forecast daily, weekly, and seasonal traffic patterns so you can plan content and campaigns in advance.',
  },
  {
    icon: Users,
    title: 'Visitor Segmentation',
    description: 'AI clusters visitors by behaviour, intent, and lifecycle stage for precise targeting and personalisation.',
  },
  {
    icon: FileText,
    title: 'Content Performance',
    description: 'Identify your best and worst-performing content with AI-scored health reports and improvement suggestions.',
  },
  {
    icon: Crosshair,
    title: 'Conversion Funnels',
    description: 'AI maps and monitors conversion paths, automatically flagging drop-offs and recommending fixes.',
  },
  {
    icon: Megaphone,
    title: 'Campaign Attribution',
    description: 'Multi-touch attribution powered by machine learning — see exactly which channels drive results.',
  },
  {
    icon: Database,
    title: 'Automated Reporting',
    description: 'Weekly AI-generated executive reports sent to your inbox, tailored to the metrics that matter to you.',
  },
];

/* ── Use Cases ── */

export const aiAnalyticsUseCases: AIUseCase[] = [
  {
    title: 'Marketing Teams',
    description: 'Replace spreadsheet hell with AI dashboards that surface insights and recommend next actions.',
    industries: ['Agencies', 'In-House', 'Startups'],
    features: ['Campaign Dashboards', 'ROI Tracking', 'Budget Recommendations'],
  },
  {
    title: 'E-Commerce Analytics',
    description: 'Understand purchase behaviour, optimise product pages, and predict inventory needs.',
    industries: ['Retail', 'D2C', 'Subscriptions'],
    features: ['Product Analytics', 'Cart Analysis', 'Revenue Forecasting'],
  },
  {
    title: 'Content Strategy',
    description: 'Let AI analyse your content library and tell you exactly what to write, update, or retire.',
    industries: ['Publishing', 'SaaS', 'Education'],
    features: ['Content Scoring', 'Gap Analysis', 'Topic Clustering'],
  },
  {
    title: 'Executive Reporting',
    description: 'Auto-generate board-ready reports with KPI summaries, trends, and strategic recommendations.',
    industries: ['Enterprise', 'Non-Profit', 'Government'],
    features: ['Custom Dashboards', 'PDF Reports', 'Benchmark Comparisons'],
  },
];

/* ── Pricing ── */

export const aiAnalyticsPricing: { title: string; description: string; packages: AIPricingPackage[] } = {
  title: 'Analytics Plans',
  description: 'Unlock AI-powered insights at the level your business needs.',
  packages: [
    {
      name: 'Starter',
      description: 'For small sites',
      price: '$99/mo',
      features: [
        'Up to 10k monthly visitors',
        'Weekly AI reports',
        'Basic predictions',
        '3 custom dashboards',
        'Email support',
      ],
      recommended: false,
    },
    {
      name: 'Professional',
      description: 'For data-driven teams',
      price: '$399/mo',
      features: [
        'Up to 100k monthly visitors',
        'Daily AI reports',
        'Advanced predictions + alerts',
        'Unlimited dashboards',
        'Multi-touch attribution',
        'API access',
        'Priority support',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organisations',
      price: 'Custom',
      features: [
        'Unlimited visitors',
        'Real-time AI engine',
        'Custom ML models',
        'Data warehouse integration',
        'White-label reports',
        'SSO + RBAC',
        'Dedicated analyst',
      ],
      recommended: false,
    },
  ],
};

/* ── FAQs ── */

export const aiAnalyticsFAQs: AIFAQ[] = [
  {
    question: 'How does AI analytics differ from Google Analytics?',
    answer:
      'Google Analytics tells you what happened. AI analytics predicts what will happen and recommends what you should do about it. They complement each other perfectly.',
  },
  {
    question: 'Does this replace my existing analytics setup?',
    answer:
      'No. It layers on top. We integrate with Google Analytics, Matomo, and other tools to enhance — not replace — your existing data infrastructure.',
  },
  {
    question: 'How accurate are the AI predictions?',
    answer:
      'Our models achieve 90%+ accuracy for 7-day traffic forecasts and 85%+ for 30-day forecasts. Accuracy improves over time as the model learns your patterns.',
  },
  {
    question: 'Can I export data and reports?',
    answer:
      'Yes. All dashboards and reports can be exported as PDF, CSV, or JSON. API access is available on Professional and Enterprise plans for custom integrations.',
  },
];

/* ── CTA ── */

export const aiAnalyticsCTA: AICTA = {
  title: 'Turn Data Into Your Competitive Advantage',
  description:
    'Stop drowning in data and start making confident decisions backed by AI-powered intelligence.',
  buttons: [
    { text: 'Start Free Trial', page: 'contact' },
    { text: 'View Case Studies', page: 'portfolio-archive' },
  ],
};
