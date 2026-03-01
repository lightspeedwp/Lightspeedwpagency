/**
 * WooCommerce Store Redesign Solution Page Data
 *
 * A solution that bundles e-commerce UX audit, store design, WooCommerce development,
 * product migration, checkout optimisation, and performance into a single workflow.
 *
 * WordPress Mapping: Custom page template — page-solution-woocommerce-redesign.html
 *
 * @see /src/app/components/templates/WooCommerceRedesignTemplate.tsx
 */

import {
  ShoppingCart, CreditCard, Package, TrendingUp, RefreshCw,
  Search, PenTool, Code, Rocket, CheckCircle, Truck,
  BarChart3, ShieldCheck, Globe, Zap, Settings, Eye
} from 'lucide-react';

/* ── Hero ── */
export const wooRedesignHero = {
  badge: { text: 'STORE REDESIGN', icon: ShoppingCart },
  title: 'WooCommerce Store Redesign',
  highlight: 'Store Redesign',
  tagline:
    'Rebuild your WooCommerce store for higher conversions, faster load times, and a checkout experience customers love.',
  description:
    'We audit your existing store, fix conversion killers, and rebuild it with modern block-based architecture and optimised shopping flows.',
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'See Results', page: 'portfolio-archive' },
};

/* ── Pain Points ── */
export const wooRedesignChallenges = {
  title: 'Is Your Store Losing Sales?',
  description: 'These common issues cost WooCommerce stores thousands in lost revenue every month.',
  items: [
    'High cart abandonment rates (industry avg. 70%)',
    'Slow product pages hurting mobile conversions',
    'Complicated checkout driving customers away',
    'Product search that can\'t find anything',
    'No upsell or cross-sell strategy in place',
    'Inventory management headaches',
    'Payment gateway issues and failed transactions',
    'Outdated design undermining brand trust',
  ],
};

/* ── Workflow ── */
export const wooRedesignProcess = {
  title: 'Our Store Redesign Workflow',
  description: 'A conversion-focused process designed specifically for e-commerce.',
  steps: [
    {
      number: '01',
      title: 'Store Audit & Analytics',
      icon: Search,
      description: 'Deep-dive into your store analytics, conversion funnel, and customer behaviour to identify exactly where you\'re losing sales.',
      deliverables: ['Conversion funnel analysis', 'Heatmap & session review', 'Product page audit', 'Competitor benchmarking'],
      duration: '1 Week',
    },
    {
      number: '02',
      title: 'UX & Conversion Strategy',
      icon: Eye,
      description: 'Design the optimal shopping experience — from product discovery to checkout — based on real data.',
      deliverables: ['Customer journey maps', 'Checkout flow redesign', 'Upsell/cross-sell strategy', 'Search & filter plan'],
      duration: '1-2 Weeks',
    },
    {
      number: '03',
      title: 'Store Design',
      icon: PenTool,
      description: 'Create a brand-aligned store design with optimised product pages, category layouts, and a friction-free cart/checkout.',
      deliverables: ['Product page designs', 'Category & shop pages', 'Cart & checkout flow', 'Mobile-first mockups'],
      duration: '2-3 Weeks',
    },
    {
      number: '04',
      title: 'WooCommerce Build',
      icon: Code,
      description: 'Build the new store on a custom WooCommerce block theme, migrate products, and integrate payment/shipping.',
      deliverables: ['Custom WooCommerce theme', 'Product migration', 'Payment gateway setup', 'Shipping configuration'],
      duration: '4-6 Weeks',
    },
    {
      number: '05',
      title: 'Testing & Optimisation',
      icon: CheckCircle,
      description: 'Test every product, every variation, every checkout path. Optimise for Core Web Vitals and mobile performance.',
      deliverables: ['Order flow testing', 'Payment testing', 'Performance optimisation', 'Security audit'],
      duration: '1-2 Weeks',
    },
    {
      number: '06',
      title: 'Launch & Monitor',
      icon: Rocket,
      description: 'Zero-downtime launch with post-launch conversion monitoring and rapid iteration based on real sales data.',
      deliverables: ['Production deployment', 'Conversion tracking setup', 'A/B test framework', '90-day monitoring'],
      duration: '1 Week + Ongoing',
    },
  ],
};

/* ── Included Services ── */
export const wooRedesignServices = {
  title: 'Everything Your Store Needs',
  description: 'A complete redesign engagement covering every aspect of your e-commerce experience.',
  items: [
    { icon: Search, title: 'Store Audit', page: 'discovery', description: 'Analytics-driven conversion audit.' },
    { icon: PenTool, title: 'UX Design', page: 'design', description: 'Conversion-optimised store design.' },
    { icon: Code, title: 'WooCommerce Dev', page: 'development', description: 'Custom block theme development.' },
    { icon: Package, title: 'Product Migration', page: 'hosting', description: 'Safe product & order migration.' },
    { icon: CreditCard, title: 'Payments', page: 'woocommerce', description: 'Payment gateway integration.' },
    { icon: Truck, title: 'Shipping', page: 'woocommerce', description: 'Shipping rules & automation.' },
    { icon: Zap, title: 'Performance', page: 'performance', description: 'Sub-second product page loads.' },
    { icon: ShieldCheck, title: 'Security', page: 'security', description: 'PCI compliance & fraud protection.' },
  ],
};

/* ── Results Stats ── */
export const wooRedesignResults = [
  { stat: '35%', label: 'Fewer Abandonments', description: 'Average reduction in cart abandonment rate.' },
  { stat: '2.5x', label: 'Faster Pages', description: 'Average product page speed improvement.' },
  { stat: '28%', label: 'Revenue Increase', description: 'Average revenue growth in first 90 days.' },
  { stat: '99.9%', label: 'Uptime', description: 'Reliable hosting that handles flash sales.' },
];

/* ── Pricing ── */
export const wooRedesignPricing = {
  title: 'Store Redesign Packages',
  description: 'Pricing based on product catalog size and integration complexity.',
  packages: [
    {
      name: 'Starter Store',
      description: 'For stores with up to 100 products',
      price: 'From $12,000',
      features: ['Up to 100 products', 'Custom WooCommerce theme', 'Product migration', 'Stripe/PayPal', 'Mobile responsive', 'Basic shipping', '30-day support'],
      recommended: false,
    },
    {
      name: 'Growth Store',
      description: 'For stores scaling to 1,000+ products',
      price: 'From $25,000',
      features: ['Up to 1,000 products', 'Custom design system', 'Advanced product migration', 'Multi-gateway payments', 'Shipping automation', 'Upsell/cross-sell', 'Analytics dashboard', '90-day support'],
      recommended: true,
    },
    {
      name: 'Enterprise Store',
      description: 'For high-volume & complex stores',
      price: 'Custom',
      features: ['Unlimited products', 'Bespoke store design', 'ERP/CRM integration', 'Multi-currency', 'Custom shipping logic', 'Subscription support', 'Priority SLA', 'Dedicated account manager'],
      recommended: false,
    },
  ],
};

/* ── FAQs ── */
export const wooRedesignFAQs = [
  {
    question: 'Will I lose orders during the migration?',
    answer: 'No. We perform the migration in a staging environment and only switch over when everything is tested. Your live store continues taking orders until the exact moment of cutover, and we migrate any orders placed during the transition.',
  },
  {
    question: 'Can you migrate from Shopify / Magento / BigCommerce?',
    answer: 'Yes. We have experience migrating stores from all major e-commerce platforms to WooCommerce, including products, customers, order history, and reviews.',
  },
  {
    question: 'How do you handle product variations and custom fields?',
    answer: 'We map your existing product data structure to WooCommerce\'s native variation system or set up Advanced Custom Fields (ACF) for complex product attributes. Nothing gets lost in translation.',
  },
  {
    question: 'Will my checkout be faster?',
    answer: 'Absolutely. We implement an optimised one-page checkout with express payment options (Apple Pay, Google Pay), guest checkout, and smart address auto-fill. Most clients see a 20-35% reduction in checkout abandonment.',
  },
  {
    question: 'Do you set up analytics and conversion tracking?',
    answer: 'Yes. Every redesign includes Google Analytics 4, conversion tracking, enhanced e-commerce events, and a custom dashboard so you can monitor performance from day one.',
  },
];

/* ── CTA ── */
export const wooRedesignCTA = {
  title: 'Ready to Boost Your Store Revenue?',
  description: 'Let\'s audit your current store and show you exactly where you\'re leaving money on the table. Free, no-obligation consultation.',
  buttonText: 'Get Free Store Audit',
  buttonPage: 'contact',
};