/**
 * Migrations Service Page Data
 * 
 * Complete data for Website Migrations service page.
 * Includes hero, benefits, features, process, platforms, case study, FAQs, and CTA.
 */

import {
  ArrowRightLeft,
  Shield,
  Clock,
  CheckCircle2,
  Database,
  FileText,
  Search,
  TestTube,
  GraduationCap,
  TrendingUp
} from 'lucide-react';

/**
 * Hero Section
 */
export const migrationsHero = {
  badge: {
    icon: ArrowRightLeft,
    text: 'Migration Services'
  },
  title: 'Seamless Website',
  titleHighlight: 'Migrations',
  description: 'Move your website to WordPress with zero downtime, preserved SEO rankings, and complete data integrity. Our proven migration process ensures a smooth transition from any platform.',
  cta: {
    primary: { text: 'Start Your Migration', page: 'contact' as const },
    secondary: { text: 'View Process', page: 'about-process' as const }
  }
};

/**
 * Why Migrate with LSX
 */
export const whyMigrateWithLSX = {
  title: 'Why Choose LSX for Your Migration?',
  description: 'We've successfully migrated hundreds of websites with a 100% success rate',
  benefits: [
    {
      icon: Shield,
      title: 'Zero Data Loss',
      description: 'Complete content, media, and data preservation with automated backups at every step.'
    },
    {
      icon: Search,
      title: 'SEO Preservation',
      description: 'Maintain your search rankings with proper redirects, meta data transfer, and URL structure planning.'
    },
    {
      icon: Clock,
      title: 'Zero Downtime',
      description: 'We migrate behind the scenes and switch DNS at the perfect moment for seamless continuity.'
    },
    {
      icon: CheckCircle2,
      title: '100% Success Rate',
      description: 'Proven migration methodology with comprehensive testing ensures flawless execution every time.'
    }
  ]
};

/**
 * Migration Services Features
 */
export const migrationServices = [
  {
    icon: ArrowRightLeft,
    title: 'Platform Migrations',
    description: 'Move from any CMS to WordPress: Drupal, Joomla, Wix, Squarespace, Shopify, or custom platforms.'
  },
  {
    icon: Database,
    title: 'Content Transfer',
    description: 'Automated content migration including posts, pages, products, categories, tags, and custom post types.'
  },
  {
    icon: FileText,
    title: 'Media Library Migration',
    description: 'Transfer all images, videos, PDFs, and documents with preserved organization and metadata.'
  },
  {
    icon: Search,
    title: 'SEO & URL Preservation',
    description: 'Maintain search rankings with 301 redirects, sitemap updates, and search console reconfiguration.'
  },
  {
    icon: TestTube,
    title: 'Comprehensive Testing',
    description: 'Multi-stage testing on staging environment before going live to ensure everything works perfectly.'
  },
  {
    icon: GraduationCap,
    title: 'Training & Documentation',
    description: 'Complete training for your team and detailed documentation of the new WordPress system.'
  }
];

/**
 * Migration Process Steps
 */
export const migrationProcess = [
  {
    step: 1,
    title: 'Discovery & Audit',
    description: 'Comprehensive audit of your current website: content inventory, technical requirements, custom functionality, and SEO analysis.'
  },
  {
    step: 2,
    title: 'Migration Planning',
    description: 'Detailed migration strategy including timeline, content mapping, URL structure, redirects plan, and risk mitigation.'
  },
  {
    step: 3,
    title: 'Staging Migration',
    description: 'Execute migration on staging environment: content transfer, theme setup, plugin configuration, and data verification.'
  },
  {
    step: 4,
    title: 'Testing & QA',
    description: 'Rigorous testing phase: functionality testing, cross-browser testing, mobile testing, SEO verification, and performance optimization.'
  },
  {
    step: 5,
    title: 'Go Live & Monitor',
    description: 'Coordinated launch with DNS switching, live monitoring for 48 hours, and immediate issue resolution if needed.'
  }
];

/**
 * Supported Platforms
 */
export const supportedPlatforms = {
  title: 'We Migrate From Any Platform',
  description: 'Expert migrations from all major CMS platforms and custom solutions',
  platforms: [
    { name: 'WordPress.com', description: 'Self-hosted WordPress migration' },
    { name: 'Drupal', description: 'All versions supported' },
    { name: 'Joomla', description: 'Complete data transfer' },
    { name: 'Shopify', description: 'Ecommerce to WooCommerce' },
    { name: 'Wix', description: 'Visual builder to WordPress' },
    { name: 'Squarespace', description: 'Content & design migration' },
    { name: 'Magento', description: 'Enterprise ecommerce migration' },
    { name: 'Custom CMS', description: 'Any proprietary system' }
  ]
};

/**
 * Case Study
 */
export const migrationCaseStudy = {
  title: 'Success Story: 10,000-Page Travel Website Migration',
  quote: 'LSX migrated our massive travel website from a custom CMS to WordPress in just 3 weeks. Zero downtime, perfect SEO preservation, and our bookings actually increased during the transition. Incredible work!',
  author: 'Sarah Mitchell',
  role: 'Digital Director',
  client: 'Global Adventures Travel',
  results: [
    { metric: '10,247', label: 'Pages Migrated' },
    { metric: '0 Hours', label: 'Downtime' },
    { metric: '100%', label: 'SEO Rankings Preserved' },
    { metric: '18 Days', label: 'Total Timeline' }
  ]
};

/**
 * FAQs
 */
export const migrationsFAQs = [
  {
    question: 'How long does a typical migration take?',
    answer: 'Timeline depends on website size and complexity. A small website (10-50 pages) typically takes 1-2 weeks. Medium websites (50-500 pages) take 2-4 weeks. Large websites (500+ pages) or complex ecommerce sites may take 4-8 weeks. We provide a detailed timeline during discovery phase.'
  },
  {
    question: 'Will my search engine rankings be affected?',
    answer: 'No. We implement proper 301 redirects for every URL, preserve all meta data, maintain URL structure where possible, and follow SEO best practices. Most clients see no ranking changes, and some actually see improvements due to WordPress\' superior performance.'
  },
  {
    question: 'What happens to my current website during migration?',
    answer: 'Your current website stays live and fully functional throughout the migration. We work in a staging environment and only switch DNS when everything is tested and approved. The actual switch takes minutes with zero visitor impact.'
  },
  {
    question: 'Can you migrate custom functionality and integrations?',
    answer: 'Yes. We analyze all custom features during discovery and either find equivalent WordPress plugins or develop custom solutions. We ensure all functionality is replicated or improved in the new WordPress environment.'
  },
  {
    question: 'What if something goes wrong during migration?',
    answer: 'We maintain complete backups at every stage and test extensively before going live. If any issues arise, we can quickly rollback to your original site. Our 100% success rate comes from thorough planning and testing.'
  },
  {
    question: 'Do you provide training after migration?',
    answer: 'Yes. Every migration includes comprehensive team training on WordPress administration, content management, and your specific setup. We also provide detailed documentation and 30 days of post-launch support.'
  }
];

/**
 * CTA Section
 */
export const migrationsCTA = {
  title: 'Ready to Migrate to WordPress?',
  description: 'Get a free migration assessment and detailed timeline for your project. Let\'s discuss how we can move your website to WordPress with zero risk and maximum results.',
  buttons: [
    { text: 'Get Free Assessment', page: 'contact' as const },
    { text: 'View Portfolio', page: 'portfolio-archive' as const }
  ]
};
