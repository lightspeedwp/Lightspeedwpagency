/**
 * AI Integrations Solution Pages Data
 *
 * Content for the AI Integrations landing page and four sub-pages:
 *   1. AI Integrations for WordPress  (/solutions/ai-integrations)
 *   2. AI Content Generation           (/solutions/ai-integrations/content-generation)
 *   3. AI-Powered SEO                  (/solutions/ai-integrations/seo)
 *   4. AI Chatbots for WordPress       (/solutions/ai-integrations/chatbots)
 *   5. AI Analytics & Insights         (/solutions/ai-integrations/analytics)
 *
 * @see /src/app/components/templates/AIIntegrations*.tsx
 */

import {
  Brain,
  Bot,
  BarChart3,
  Search,
  Sparkles,
  MessageSquare,
  FileText,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Users,
  Target,
  Lightbulb,
  LineChart,
  PenTool,
  ImageIcon,
  Languages,
  Clock,
  Link2,
  Database,
  Eye,
  Megaphone,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════
   SHARED TYPES
   ═══════════════════════════════════════════════════ */

export interface AIHero {
  title: string;
  titleHighlight: string;
  tagline: string;
  badge: { text: string; icon: LucideIcon };
  primaryButton: { text: string; page: string };
  secondaryButton: { text: string; page: string };
}

export interface AIStat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export interface AIFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AIUseCase {
  title: string;
  description: string;
  industries: string[];
  features: string[];
}

export interface AIPricingPackage {
  name: string;
  description: string;
  price: string;
  features: string[];
  recommended: boolean;
}

export interface AIFAQ {
  question: string;
  answer: string;
}

export interface AICTA {
  title: string;
  description: string;
  buttons: { text: string; page: string }[];
}

export interface AISubPageCard {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
  accent: string;
}

/* ═══════════════════════════════════════════════════
   1. AI INTEGRATIONS LANDING PAGE
   ═══════════════════════════════════════════════════ */

export const aiLandingHero: AIHero = {
  title: 'AI-Powered WordPress',
  titleHighlight: 'AI-Powered',
  tagline:
    'Add production-ready AI tooling to your WordPress stack. Automate content, optimise SEO, engage visitors 24/7, and unlock actionable insights.',
  badge: { text: 'AI FOR WORDPRESS', icon: Brain },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'See Solutions', page: 'solutions' },
};

export const aiLandingStats: AIStat[] = [
  {
    icon: TrendingUp,
    value: '73%',
    label: 'Productivity Gain',
    description: 'Average increase in content output with AI assistance',
  },
  {
    icon: Clock,
    value: '60%',
    label: 'Time Saved',
    description: 'Reduction in routine SEO and content tasks',
  },
  {
    icon: Users,
    value: '3.5x',
    label: 'Engagement Boost',
    description: 'Higher visitor engagement with AI chatbots',
  },
  {
    icon: BarChart3,
    value: '45%',
    label: 'Conversion Uplift',
    description: 'Average improvement from AI-driven personalisation',
  },
];

export const aiLandingFeatures: AIFeature[] = [
  {
    icon: Sparkles,
    title: 'Content Generation',
    description: 'AI-powered blog posts, product descriptions, and marketing copy — on-brand and SEO-ready.',
  },
  {
    icon: Search,
    title: 'Intelligent SEO',
    description: 'Automated keyword analysis, schema markup, and real-time content scoring for maximum visibility.',
  },
  {
    icon: MessageSquare,
    title: 'Smart Chatbots',
    description: '24/7 AI assistants that qualify leads, answer FAQs, and guide visitors to conversion.',
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Machine-learning insights that forecast traffic, identify trends, and recommend actions.',
  },
  {
    icon: ImageIcon,
    title: 'Image & Media AI',
    description: 'Auto-generate alt text, optimise images, and create AI-assisted visual content.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'All AI processing respects GDPR, with on-site options to keep data within your infrastructure.',
  },
];

export const aiSubPages: AISubPageCard[] = [
  {
    icon: PenTool,
    title: 'AI Content Generation',
    description: 'Automate blog writing, product descriptions, and multi-language content with fine-tuned models.',
    slug: 'ai-content-generation',
    accent: 'neon-pink',
  },
  {
    icon: Search,
    title: 'AI-Powered SEO',
    description: 'Let AI handle keyword research, internal linking, and content optimisation in real time.',
    slug: 'ai-seo',
    accent: 'neon-lime',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Deploy intelligent conversational agents trained on your content and brand voice.',
    slug: 'ai-chatbots',
    accent: 'neon-cyan',
  },
  {
    icon: BarChart3,
    title: 'AI Analytics & Insights',
    description: 'Turn raw data into actionable strategies with predictive models and automated reporting.',
    slug: 'ai-analytics',
    accent: 'neon-yellow',
  },
];

export const aiLandingFAQs: AIFAQ[] = [
  {
    question: 'How does AI integrate with my existing WordPress site?',
    answer:
      'We install lightweight WordPress plugins and configure API connections to AI services. Your existing theme, content, and plugins remain untouched — AI layers on top seamlessly.',
  },
  {
    question: 'Is my data safe when using AI services?',
    answer:
      'Absolutely. We use GDPR-compliant providers and can deploy on-premise AI models for sensitive industries. Your content and user data never leave your control.',
  },
  {
    question: 'Do I need technical knowledge to manage AI features?',
    answer:
      'No. All AI features are controlled from the WordPress dashboard with simple toggles and settings. We provide full training and documentation.',
  },
  {
    question: 'What is the ROI timeline for AI integrations?',
    answer:
      'Most clients see measurable results within 30 days — reduced content costs, improved rankings, and higher engagement. Full ROI is typically achieved within 3-6 months.',
  },
];

export const aiLandingCTA: AICTA = {
  title: 'Ready to Add AI to Your WordPress Site?',
  description:
    'Join forward-thinking businesses already leveraging AI to grow faster, rank higher, and engage deeper.',
  buttons: [
    { text: 'Request a Systems Audit', page: 'contact' },
    { text: 'View Our Work', page: 'portfolio-archive' },
  ],
};

/* ═══════════════════════════════════════════════════
   2. AI CONTENT GENERATION
   ═══════════════════════════════════════════════════ */

export const aiContentHero: AIHero = {
  title: 'AI Content Generation',
  titleHighlight: 'Content Generation',
  tagline:
    'Create high-quality, on-brand content at scale. From blog posts to product descriptions, AI handles the heavy lifting while you keep creative control.',
  badge: { text: 'AI CONTENT', icon: PenTool },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

export const aiContentStats: AIStat[] = [
  {
    icon: FileText,
    value: '10x',
    label: 'Content Output',
    description: 'Produce 10x more content without growing your team',
  },
  {
    icon: Clock,
    value: '80%',
    label: 'Time Reduction',
    description: 'Average time saved on first-draft creation',
  },
  {
    icon: Target,
    value: '95%',
    label: 'Brand Accuracy',
    description: 'Content matches your brand voice and guidelines',
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Languages',
    description: 'Multi-language content from a single source',
  },
];

export const aiContentFeatures: AIFeature[] = [
  {
    icon: FileText,
    title: 'Blog Post Automation',
    description: 'Generate SEO-optimised articles from topic briefs. Includes headings, meta descriptions, and internal links.',
  },
  {
    icon: Sparkles,
    title: 'Product Descriptions',
    description: 'Bulk-create compelling WooCommerce descriptions that convert. Supports variations and A/B testing.',
  },
  {
    icon: Languages,
    title: 'Multi-Language Support',
    description: 'Translate and localise content into 30+ languages while maintaining tone and cultural nuance.',
  },
  {
    icon: ImageIcon,
    title: 'AI Image Generation',
    description: 'Create unique featured images, hero graphics, and social media visuals from text prompts.',
  },
  {
    icon: RefreshCw,
    title: 'Content Refresh',
    description: 'Automatically identify outdated posts and suggest updates to keep content evergreen and ranking.',
  },
  {
    icon: Shield,
    title: 'Plagiarism & Fact Check',
    description: 'Built-in checks ensure all AI-generated content is original, accurate, and safe to publish.',
  },
];

export const aiContentUseCases: AIUseCase[] = [
  {
    title: 'E-Commerce Stores',
    description: 'Generate thousands of product descriptions in minutes, maintaining consistency across your entire catalogue.',
    industries: ['Retail', 'Fashion', 'Electronics'],
    features: ['Bulk Generation', 'A/B Variations', 'SEO Metadata'],
  },
  {
    title: 'Content Publishers',
    description: 'Scale editorial output while maintaining quality. AI drafts, humans edit — the perfect workflow.',
    industries: ['Media', 'News', 'Education'],
    features: ['Topic Research', 'Draft Generation', 'Fact Checking'],
  },
  {
    title: 'Marketing Agencies',
    description: 'Produce client content at scale without growing headcount. White-labelled and on-brand.',
    industries: ['Agencies', 'SaaS', 'Consulting'],
    features: ['Brand Voice Training', 'Campaign Copy', 'Social Content'],
  },
  {
    title: 'Multi-Language Sites',
    description: 'Expand into new markets with AI-powered translation that preserves meaning and cultural context.',
    industries: ['Tourism', 'International', 'Government'],
    features: ['Auto-Translation', 'Cultural Localisation', 'WPML Integration'],
  },
];

export const aiContentPricing: { title: string; description: string; packages: AIPricingPackage[] } = {
  title: 'Content Generation Plans',
  description: 'Choose the right level of AI content support for your business.',
  packages: [
    {
      name: 'Starter',
      description: 'For small blogs and simple sites',
      price: '$299/mo',
      features: [
        '20 AI articles per month',
        'Basic SEO optimisation',
        'English only',
        'WordPress plugin access',
        'Email support',
      ],
      recommended: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: '$799/mo',
      features: [
        'Unlimited AI articles',
        'Advanced SEO + interlinking',
        '5 languages',
        'AI image generation',
        'Brand voice training',
        'Priority support',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      features: [
        'Unlimited everything',
        'Full language support (30+)',
        'Custom AI model fine-tuning',
        'API access',
        'Dedicated account manager',
        'SLA guarantee',
      ],
      recommended: false,
    },
  ],
};

export const aiContentFAQs: AIFAQ[] = [
  {
    question: 'Will AI-generated content hurt my SEO?',
    answer:
      'No. Google values helpful, high-quality content regardless of how it is produced. Our AI pipeline includes SEO best practices, originality checks, and human review workflows.',
  },
  {
    question: 'Can the AI match my brand voice?',
    answer:
      'Yes. We fine-tune the AI on your existing content, style guide, and brand values. The result is content that sounds like your team wrote it.',
  },
  {
    question: 'How does the WordPress integration work?',
    answer:
      'A lightweight plugin adds an "AI Assist" panel in the block editor. Generate, refine, and publish — all without leaving WordPress.',
  },
  {
    question: 'Is there a human review step?',
    answer:
      'Always recommended. AI generates the first draft; your team reviews, edits, and approves before publishing. The workflow is fully configurable.',
  },
];

export const aiContentCTA: AICTA = {
  title: 'Scale Your Content Without Scaling Your Team',
  description:
    'See how AI content generation can transform your publishing workflow and drive real business results.',
  buttons: [
    { text: 'Start Free Trial', page: 'contact' },
    { text: 'See Examples', page: 'portfolio-archive' },
  ],
};

/* ═══════════════════════════════════════════════════
   3. AI-POWERED SEO
   ═══════════════════════════════════════════════════ */

export const aiSEOHero: AIHero = {
  title: 'AI-Powered SEO',
  titleHighlight: 'AI-Powered',
  tagline:
    'Stop guessing, start ranking. AI analyses your content in real time, suggests improvements, and automates the technical SEO that moves the needle.',
  badge: { text: 'INTELLIGENT SEO', icon: Search },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

export const aiSEOStats: AIStat[] = [
  {
    icon: TrendingUp,
    value: '156%',
    label: 'Organic Growth',
    description: 'Average organic traffic increase after 6 months',
  },
  {
    icon: Target,
    value: '3x',
    label: 'Keyword Rankings',
    description: 'More keywords ranking on page one of Google',
  },
  {
    icon: Clock,
    value: '70%',
    label: 'Time Saved',
    description: 'Less time spent on manual SEO audits and tasks',
  },
  {
    icon: Zap,
    value: '<2s',
    label: 'Analysis Speed',
    description: 'Real-time content scoring as you type',
  },
];

export const aiSEOFeatures: AIFeature[] = [
  {
    icon: Search,
    title: 'Keyword Intelligence',
    description: 'AI-driven keyword research that finds high-intent, low-competition opportunities specific to your niche.',
  },
  {
    icon: FileText,
    title: 'Content Scoring',
    description: 'Real-time readability, keyword density, and topical coverage scores right in the block editor.',
  },
  {
    icon: Link2,
    title: 'Smart Internal Linking',
    description: 'Automatically suggests contextually relevant internal links to strengthen site architecture.',
  },
  {
    icon: Database,
    title: 'Schema Markup',
    description: 'Auto-generate structured data (FAQ, HowTo, Product, Article) to win rich snippets in search results.',
  },
  {
    icon: Eye,
    title: 'Competitor Analysis',
    description: 'Monitor competitor rankings, content gaps, and backlink strategies with AI-powered dashboards.',
  },
  {
    icon: RefreshCw,
    title: 'Content Decay Detection',
    description: 'AI identifies pages losing rankings and recommends specific updates to recover lost traffic.',
  },
];

export const aiSEOUseCases: AIUseCase[] = [
  {
    title: 'Content-Heavy Sites',
    description: 'Maintain SEO health across hundreds or thousands of posts with automated auditing and recommendations.',
    industries: ['Publishing', 'Blogging', 'Education'],
    features: ['Bulk Audit', 'Priority Queue', 'Auto-Optimise'],
  },
  {
    title: 'E-Commerce SEO',
    description: 'Optimise product pages, category descriptions, and collection pages at scale for transactional keywords.',
    industries: ['Retail', 'D2C', 'Marketplaces'],
    features: ['Product Schema', 'Category Optimisation', 'Review Markup'],
  },
  {
    title: 'Local Business',
    description: 'Dominate local search with AI-optimised Google Business profiles, local schema, and geo-targeted content.',
    industries: ['Hospitality', 'Healthcare', 'Services'],
    features: ['Local Schema', 'NAP Consistency', 'Review Management'],
  },
  {
    title: 'SaaS & Tech',
    description: 'Compete for high-value keywords with AI-generated comparison pages, feature pages, and knowledge bases.',
    industries: ['SaaS', 'Fintech', 'DevTools'],
    features: ['Programmatic SEO', 'Feature Comparison', 'Knowledge Base'],
  },
];

export const aiSEOPricing: { title: string; description: string; packages: AIPricingPackage[] } = {
  title: 'SEO Intelligence Plans',
  description: 'Choose the AI SEO package that matches your growth ambitions.',
  packages: [
    {
      name: 'Essentials',
      description: 'For small sites',
      price: '$199/mo',
      features: [
        'Up to 50 pages monitored',
        'Weekly AI audit reports',
        'Basic keyword tracking (50)',
        'Content scoring in editor',
        'Email support',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      description: 'For serious SEO',
      price: '$599/mo',
      features: [
        'Up to 500 pages monitored',
        'Daily AI audits + fixes',
        'Advanced keyword tracking (500)',
        'Smart internal linking',
        'Schema auto-generation',
        'Competitor monitoring',
        'Priority support',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale SEO',
      price: 'Custom',
      features: [
        'Unlimited pages',
        'Real-time monitoring',
        'Unlimited keywords',
        'Custom AI models',
        'API access',
        'White-label reports',
        'Dedicated strategist',
      ],
      recommended: false,
    },
  ],
};

export const aiSEOFAQs: AIFAQ[] = [
  {
    question: 'How is AI SEO different from traditional SEO tools?',
    answer:
      'Traditional tools show you data and leave decisions to you. AI SEO analyses, recommends, and can even auto-implement changes — saving hours of manual work per week.',
  },
  {
    question: 'Will this work with my existing SEO plugin (Yoast, Rank Math)?',
    answer:
      'Yes. Our AI layer complements — not replaces — your existing SEO plugin. It adds intelligence on top of whatever tool you already use.',
  },
  {
    question: 'How quickly will I see ranking improvements?',
    answer:
      'Technical fixes can show results within days. Content optimisations typically take 2-4 weeks to impact rankings. Our average client sees a 50%+ improvement within 90 days.',
  },
  {
    question: 'Can the AI handle algorithm updates?',
    answer:
      'The AI continuously learns from ranking signals and algorithm changes. It adapts recommendations automatically, so you are always aligned with best practices.',
  },
];

export const aiSEOCTA: AICTA = {
  title: 'Stop Guessing. Start Ranking.',
  description:
    'Let AI handle the SEO grind while you focus on creating great content and growing your business.',
  buttons: [
    { text: 'Get Your Free Audit', page: 'contact' },
    { text: 'View Case Studies', page: 'portfolio-archive' },
  ],
};

/* ═══════════════════════════════════════════════════
   4. AI CHATBOTS FOR WORDPRESS
   ═══════════════════════════════════════════════════ */

export const aiChatbotsHero: AIHero = {
  title: 'AI Chatbots for WordPress',
  titleHighlight: 'AI Chatbots',
  tagline:
    'Deploy intelligent conversational agents that understand your business, answer questions instantly, and convert visitors into customers around the clock.',
  badge: { text: 'SMART CHATBOTS', icon: Bot },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

export const aiChatbotsStats: AIStat[] = [
  {
    icon: MessageSquare,
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
    icon: Target,
    value: '89%',
    label: 'Resolution Rate',
    description: 'Questions answered without human intervention',
  },
];

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
    icon: Zap,
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

export const aiChatbotsCTA: AICTA = {
  title: 'Never Miss Another Lead',
  description:
    'Deploy an AI chatbot that works while you sleep. Qualify leads, answer questions, and delight visitors 24/7.',
  buttons: [
    { text: 'Deploy Your Bot', page: 'contact' },
    { text: 'See Demo', page: 'portfolio-archive' },
  ],
};

/* ═══════════════════════════════════════════════════
   5. AI ANALYTICS & INSIGHTS
   ═══════════════════════════════════════════════════ */

export const aiAnalyticsHero: AIHero = {
  title: 'AI Analytics & Insights',
  titleHighlight: 'Analytics & Insights',
  tagline:
    'Transform raw data into strategic decisions. AI analyses visitor behaviour, predicts trends, and delivers actionable reports — automatically.',
  badge: { text: 'SMART ANALYTICS', icon: LineChart },
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'Back to AI Hub', page: 'ai-integrations' },
};

export const aiAnalyticsStats: AIStat[] = [
  {
    icon: BarChart3,
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
    icon: TrendingUp,
    value: '92%',
    label: 'Accuracy',
    description: 'Prediction accuracy for traffic forecasting',
  },
];

export const aiAnalyticsFeatures: AIFeature[] = [
  {
    icon: LineChart,
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
    icon: Target,
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

export const aiAnalyticsCTA: AICTA = {
  title: 'Turn Data Into Your Competitive Advantage',
  description:
    'Stop drowning in data and start making confident decisions backed by AI-powered intelligence.',
  buttons: [
    { text: 'Start Free Trial', page: 'contact' },
    { text: 'View Case Studies', page: 'portfolio-archive' },
  ],
};