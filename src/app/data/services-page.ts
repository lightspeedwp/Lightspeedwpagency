/**
 * Services Page Data
 * 
 * Real content for the Services Overview page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency/services
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services
 * **Last Updated:** 2026-02-16
 * 
 * WordPress: Maps to page-services.html template
 */

import { Users, TrendUp, Trophy, Heart } from '@phosphor-icons/react';
import type { UniversalIcon } from '../utils/icon-map';

/**
 * Why Choose LightSpeed Section
 * 
 * Real stats and benefits from LightSpeed WP Agency
 */
export interface Benefit {
  icon: UniversalIcon;
  title: string;
  description: string;
}

export const servicesPageBenefits: Benefit[] = [
  {
    icon: Trophy,
    title: '22+ years experience',
    description: 'Established in 2003, we\'ve been building <i>WordPress</i> websites since the platform\'s early days'
  },
  {
    icon: Users,
    title: '120+ websites hosted',
    description: 'Trusted by over 120 businesses with safe, stable managed <i>WordPress</i> hosting'
  },
  {
    icon: Heart,
    title: 'WooExpert certified',
    description: 'Official <i>WooCommerce</i> Expert agency partner - proven expertise in eCommerce solutions'
  },
  {
    icon: TrendUp,
    title: 'Proven results',
    description: 'Hundreds of successful <i>WordPress</i> and <i>WooCommerce</i> projects delivered globally'
  }
];

/**
 * Industries We Serve
 * 
 * Real industries from LightSpeed portfolio
 */
export const servicesPageIndustries: string[] = [
  'Tourism & travel',
  'Ecommerce & retail',
  'Professional services',
  'Healthcare & medical',
  'Education & training',
  'Non-profit organizations',
  'Real estate',
  'Finance & insurance',
  'Technology & SaaS',
  'Hospitality & events',
  'Manufacturing',
  'Legal services'
];

/**
 * Service Process Steps
 * 
 * Real LightSpeed project workflow
 */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const servicesPageProcess: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery call',
    description: 'We discuss your business goals, requirements, and vision for the project'
  },
  {
    step: 2,
    title: 'Proposal & planning',
    description: 'Detailed project scope, timeline, and transparent pricing proposal'
  },
  {
    step: 3,
    title: 'Design & development',
    description: 'Collaborative design and expert development with regular progress updates'
  },
  {
    step: 4,
    title: 'Testing & launch',
    description: 'Comprehensive quality assurance testing followed by smooth launch'
  },
  {
    step: 5,
    title: 'Ongoing support',
    description: 'Continued maintenance, updates, and optimization to ensure long-term success'
  }
];

/**
 * Services Page FAQs
 * 
 * Real FAQs from LightSpeed WP Agency
 */
export interface FAQ {
  question: string;
  answer: string;
}

export const servicesPageFAQs: FAQ[] = [
  {
    question: 'What services does LightSpeed offer?',
    answer: 'We offer comprehensive <i>WordPress</i> and <i>WooCommerce</i> services including Discovery & Planning, Custom Design, Theme & Plugin Development, WooCommerce Development, Content Strategy, SEO Optimization, Website Maintenance, Migrations, Security Services, Managed Hosting, Email Marketing (Mailchimp), and Ongoing Support. We handle everything from simple website updates to complex enterprise solutions.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website redesign typically takes 4-6 weeks, a custom <i>WooCommerce</i> store takes 8-12 weeks, and complex enterprise projects may take 3-6 months. We provide detailed timelines during the proposal stage and keep you updated with regular progress reports throughout development.'
  },
  {
    question: 'Do you work with existing WordPress sites?',
    answer: 'Absolutely! We work with both new and existing <i>WordPress</i> sites. We can build new sites from scratch, redesign existing sites, add new functionality, optimize performance, fix bugs and errors, migrate sites from other platforms, and provide ongoing maintenance. Our team can work with any <i>WordPress</i> setup regardless of when it was built.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing including project-based quotes and monthly retainers. Project pricing provides a fixed cost based on defined scope and deliverables. Monthly retainers are ideal for ongoing support, maintenance, or projects with evolving requirements. Each service has typical pricing ranges, and we provide detailed quotes after understanding your specific needs.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! We offer comprehensive support and maintenance packages including <i>WordPress</i> core updates, plugin updates, security monitoring, daily backups, performance optimization, bug fixes, content updates, and priority technical support. We also provide training for your team to manage the site independently if preferred.'
  },
  {
    question: 'Can you help with SEO and digital marketing?',
    answer: 'Yes! We implement SEO best practices in all websites including technical SEO, schema markup, performance optimization, and mobile responsiveness. We offer Content Strategy services and SEO Optimization packages. We also integrate email marketing with Mailchimp and can recommend trusted partners for paid advertising and social media marketing.'
  },
  {
    question: 'Are you a WooCommerce expert agency?',
    answer: 'Yes! We are an official <i>WooExpert</i> certified agency - <i>WooCommerce\'s</i> highest certification for agencies. We have extensive experience building custom <i>WooCommerce</i> stores, integrating payment gateways, setting up inventory management, implementing custom shipping solutions, and optimizing store performance for conversions.'
  },
  {
    question: 'Do you offer managed WordPress hosting?',
    answer: 'Yes! We provide safe and stable managed <i>WordPress</i> hosting for over 120 websites. Our hosting includes automated daily backups, security monitoring, performance optimization, uptime monitoring, <i>WordPress</i> updates, and priority technical support. We use enterprise-grade infrastructure to ensure your site is fast, secure, and always available.'
  }
];

/**
 * Services Hero Content
 */
export const servicesPageHero = {
  badge: {
    icon: 'Sparkles',
    text: 'WordPress & WooCommerce Experts'
  },
  title: 'Expert WordPress services',
  titleHighlight: 'WordPress', // Word to highlight
  description: 'Comprehensive <i>WordPress</i> and <i>WooCommerce</i> services to build, grow, and maintain your online presence. From custom development to ongoing support, we\'ve got you covered.',
  buttons: [
    {
      text: 'Get Started',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Our Work',
      page: 'portfolio',
      variant: 'outline'
    }
  ]
};

/**
 * CTA Section Data
 */
export const servicesPageCTA = {
  title: 'Ready to start your WordPress project?',
  description: 'Let\'s discuss how we can help you achieve your goals with expert <i>WordPress</i> and <i>WooCommerce</i> solutions.',
  buttons: [
    {
      text: 'Contact Us',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Pricing',
      page: 'pricing',
      variant: 'outline'
    }
  ]
};