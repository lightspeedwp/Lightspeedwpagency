/**
 * Template Tester — Data Definitions
 *
 * All template category data for the TemplateTester component.
 * Extracted for file size compliance (max 300 lines per .tsx).
 *
 * @see TemplateTester.tsx — Consumer component
 */

import type { Icon as PhosphorIcon } from '@phosphor-icons/react';
import {
  House, Briefcase, ShoppingCart, Stack, BookOpen, Info,
  HardDrive, FileText, WarningCircle, Code, Tag, FolderOpen,
  TrendUp, Star,
} from '@phosphor-icons/react';

type UniversalIcon = typeof PhosphorIcon;

export interface TemplatePage {
  label: string;
  page: string;
  slug: string;
  template: string;
}

export interface TemplateArchetype {
  id: string;
  name: string;
  archetype: string;
  description: string;
  icon: UniversalIcon;
  pages: TemplatePage[];
}

export interface TemplateCategory {
  id: string;
  title: string;
  description: string;
  icon: UniversalIcon;
  bgClass: string;
  templates?: TemplateArchetype[];
  pages?: TemplatePage[];
}

export const templateCategories: TemplateCategory[] = [
  {
    id: 'archetypes',
    title: 'WordPress Page Archetypes',
    description: 'Core template patterns that every WordPress site uses',
    icon: Code,
    bgClass: 'wp-bg-primary',
    templates: [
      {
        id: 'content-hub', name: 'Content Hub (Archive)', archetype: 'Archive',
        description: 'Portfolio, services, solutions archives with filters and cards',
        icon: FolderOpen,
        pages: [
          { label: 'Portfolio Archive', page: 'portfolio-archive', slug: '/portfolio', template: 'archive.html' },
          { label: 'Archive with Filters', page: 'archive-filters', slug: '/archive', template: 'archive.html' },
        ]
      },
      {
        id: 'taxonomy-archive', name: 'Taxonomy Archive', archetype: 'Taxonomy',
        description: 'Category, tag, author, date archives',
        icon: Tag,
        pages: [
          { label: 'Category: News', page: 'category-news', slug: '/insights/category/news', template: 'category.html' },
          { label: 'Tag: Gutenberg', page: 'tag-gutenberg', slug: '/insights/tag/gutenberg', template: 'tag.html' },
          { label: 'Author: Editor', page: 'author-editor', slug: '/insights/author/editor', template: 'author.html' },
          { label: 'Date: 2024', page: 'date-2024', slug: '/insights/date/2024', template: 'date.html' },
        ]
      },
      {
        id: 'single-detail', name: 'Single Detail', archetype: 'Single',
        description: 'Single posts, portfolio pieces with rich content',
        icon: FileText,
        pages: [
          { label: 'Single Post', page: 'single', slug: '/insights/getting-started-with-block-themes', template: 'single.html' },
          { label: 'Single Post (Longform)', page: 'single-post', slug: '/insights/single-post', template: 'single.html' },
          { label: 'Portfolio Single: EcoMarket', page: 'portfolio-single-eco-market-woocommerce', slug: '/work/eco-market-woocommerce', template: 'single-portfolio.html' },
        ]
      },
      {
        id: 'editorial-listing', name: 'Editorial Listing', archetype: 'Index',
        description: 'Blog index with sorting and category filters',
        icon: BookOpen,
        pages: [
          { label: 'Blog Index', page: 'blog', slug: '/blog', template: 'index.html' },
        ]
      },
      {
        id: 'utility-page', name: 'Utility Page', archetype: 'Page',
        description: 'Contact, FAQ, search, error pages',
        icon: WarningCircle,
        pages: [
          { label: 'Contact Page', page: 'contact', slug: '/contact', template: 'page.html' },
          { label: 'FAQs', page: 'faq', slug: '/resources/faqs', template: 'page.html' },
          { label: 'Search Results', page: 'search-page', slug: '/search', template: 'search.html' },
          { label: '404 Not Found', page: '404', slug: '/404', template: '404.html' },
        ]
      },
    ]
  },
  {
    id: 'homepage', title: 'Homepage', description: 'Front page template (front-page.html)',
    icon: House, bgClass: 'wp-bg-primary',
    pages: [{ label: 'Front Page', page: 'front-page', slug: '/', template: 'front-page.html' }]
  },
  {
    id: 'services', title: 'Services Pages', description: 'Service offerings and capabilities',
    icon: Briefcase, bgClass: 'wp-bg-accent',
    pages: [
      { label: 'Services Overview', page: 'services', slug: '/services', template: 'page-services.html' },
      { label: 'Development Service', page: 'service-development', slug: '/services/development', template: 'page-service.html' },
      { label: 'Design Service', page: 'service-design', slug: '/services/design', template: 'page-service.html' },
      { label: 'Discovery Service', page: 'service-discovery', slug: '/services/discovery', template: 'page-service.html' },
      { label: 'Content Service', page: 'service-content', slug: '/services/content', template: 'page-service.html' },
      { label: 'Security Service', page: 'service-security', slug: '/services/security', template: 'page-service.html' },
      { label: 'Migrations Service', page: 'service-migrations', slug: '/services/migrations', template: 'page-service.html' },
    ]
  },
  {
    id: 'solutions', title: 'Solutions Pages', description: 'Solution-based offerings',
    icon: ShoppingCart, bgClass: 'wp-bg-secondary',
    pages: [
      { label: 'Solutions Overview', page: 'solutions', slug: '/solutions', template: 'page-solutions.html' },
      { label: 'WordPress Solutions', page: 'solution-wordpress', slug: '/solutions/wordpress', template: 'page-solution.html' },
      { label: 'WooCommerce Solutions', page: 'solution-woocommerce', slug: '/solutions/woocommerce', template: 'page-solution.html' },
      { label: 'LSX Solutions', page: 'solution-lsx', slug: '/solutions/lsx', template: 'page-solution.html' },
    ]
  },
  {
    id: 'conversion', title: 'Conversion Pages', description: 'High-value conversion and decision pages',
    icon: TrendUp, bgClass: 'wp-bg-primary',
    pages: [
      { label: 'Pricing', page: 'pricing', slug: '/pricing', template: 'page-pricing.html' },
      { label: 'Why Choose Us', page: 'why-choose-us', slug: '/why-choose-us', template: 'page.html' },
      { label: 'Guarantees', page: 'guarantees', slug: '/guarantees', template: 'page.html' },
      { label: 'ROI Calculator', page: 'roi-calculator', slug: '/roi-calculator', template: 'page-roi-calculator.html' },
      { label: 'Testimonials', page: 'testimonials', slug: '/testimonials', template: 'page-testimonials.html' },
    ]
  },
  {
    id: 'about', title: 'About Pages', description: 'Company information and team',
    icon: Info, bgClass: 'wp-bg-accent',
    pages: [
      { label: 'About Us', page: 'about', slug: '/about', template: 'page-about.html' },
      { label: 'Our Team', page: 'team', slug: '/about/team', template: 'page-team.html' },
      { label: 'Our Process', page: 'about-process', slug: '/about/process', template: 'page.html' },
      { label: 'Culture & Values', page: 'about-culture', slug: '/about/culture', template: 'page.html' },
      { label: 'Company History', page: 'about-history', slug: '/about/history', template: 'page.html' },
    ]
  },
  {
    id: 'hosting', title: 'Hosting Pages', description: 'Hosting plans and features',
    icon: HardDrive, bgClass: 'wp-bg-secondary',
    pages: [{ label: 'Hosting Overview', page: 'hosting', slug: '/hosting', template: 'page-hosting.html' }]
  },
  {
    id: 'post-formats', title: 'Post Formats & Content Types',
    description: 'WordPress post format archives, single views, and custom content types',
    icon: Stack, bgClass: 'wp-bg-accent',
    pages: [
      { label: 'Video Archive', page: 'videos', slug: '/videos', template: 'archive-video.html' },
      { label: 'Single Video', page: 'video-single', slug: '/video/getting-started-block-themes', template: 'single-video.html' },
      { label: 'Podcast Archive', page: 'podcasts', slug: '/podcasts', template: 'archive-podcast.html' },
      { label: 'Single Podcast', page: 'podcast-single', slug: '/podcast/welcome-to-lsx-design', template: 'single-podcast.html' },
      { label: 'Audio Archive', page: 'audio-archive', slug: '/audio-archive', template: 'archive-audio.html' },
      { label: 'Video Archive (Format)', page: 'video-archive', slug: '/video-archive', template: 'archive-video.html' },
      { label: 'Gallery Archive', page: 'gallery-archive', slug: '/gallery-archive', template: 'archive-gallery.html' },
      { label: 'Aside Stream', page: 'aside-stream', slug: '/aside-stream', template: 'archive-aside.html' },
      { label: 'Single Audio', page: 'audio-single', slug: '/audio-single', template: 'single-audio.html' },
      { label: 'Single Video (Format)', page: 'video-single', slug: '/video-single', template: 'single-video.html' },
      { label: 'Single Gallery', page: 'gallery-single', slug: '/gallery-single', template: 'single-gallery.html' },
      { label: 'Image Archive', page: 'image-archive', slug: '/image-archive', template: 'archive-image.html' },
      { label: 'Quote Archive', page: 'quote-archive', slug: '/quote-archive', template: 'archive-quote.html' },
      { label: 'Link Archive', page: 'link-archive', slug: '/link-archive', template: 'archive-link.html' },
      { label: 'Chat Archive', page: 'chat-archive', slug: '/chat-archive', template: 'archive-chat.html' },
      { label: 'Status Archive', page: 'status-archive', slug: '/status-archive', template: 'archive-status.html' },
      { label: 'Standard Archive', page: 'standard-archive', slug: '/standard-archive', template: 'archive.html' },
      { label: 'Aside Archive', page: 'aside-archive', slug: '/aside-archive', template: 'archive-aside.html' },
      { label: 'Single Chat', page: 'chat-single', slug: '/chat-single', template: 'single-chat.html' },
      { label: 'Single Status', page: 'status-single', slug: '/status-single', template: 'single-status.html' },
      { label: 'Single Standard', page: 'standard-single', slug: '/standard-single', template: 'single.html' },
      { label: 'Single Image', page: 'image-single', slug: '/image-single', template: 'single-image.html' },
      { label: 'Single Quote', page: 'quote-single', slug: '/quote-single', template: 'single-quote.html' },
      { label: 'Single Link', page: 'link-single', slug: '/link-single', template: 'single-link.html' },
      { label: 'Single Aside', page: 'aside-single', slug: '/aside-single', template: 'single-aside.html' },
    ]
  },
  {
    id: 'system', title: 'System Pages', description: 'Design system and component testing',
    icon: Code, bgClass: 'wp-bg-muted-foreground',
    pages: [
      { label: 'Style Guide', page: 'style-guide', slug: '/style-guide', template: 'page.html' },
      { label: 'Feature Showcase', page: 'feature-showcase', slug: '/feature-showcase', template: 'page.html' },
      { label: 'Design System Test', page: 'design-system-test', slug: '/design-system-test', template: 'page.html' },
      { label: 'Section Styles Example', page: 'section-style-example', slug: '/section-style-example', template: 'page.html' },
    ]
  },
  {
    id: 'dev-tools', title: 'Developer Tools',
    description: 'Design system testing and documentation tools (15 tools)',
    icon: Code, bgClass: 'wp-bg-accent',
    pages: [
      { label: 'Dev Tools Hub', page: 'dev-tools', slug: '/dev-tools', template: 'page.html' },
      { label: 'Template Tester', page: 'dev-tools/template-tester', slug: '/dev-tools/template-tester', template: 'page.html' },
      { label: 'Compliance Scorecard', page: 'dev-tools/compliance-scorecard', slug: '/dev-tools/compliance-scorecard', template: 'page.html' },
      { label: 'Component Showcase', page: 'dev-tools/component-showcase', slug: '/dev-tools/component-showcase', template: 'page.html' },
      { label: 'Feature Showcase', page: 'dev-tools/feature-showcase', slug: '/dev-tools/feature-showcase', template: 'page.html' },
      { label: 'Live Preview', page: 'dev-tools/live-preview', slug: '/dev-tools/live-preview', template: 'page.html' },
      { label: 'Design System Test', page: 'dev-tools/design-system-test', slug: '/dev-tools/design-system-test', template: 'page.html' },
      { label: 'Design Blocks Showcase', page: 'dev-tools/design-blocks-showcase', slug: '/dev-tools/design-blocks-showcase', template: 'page.html' },
      { label: 'Theme Blocks Showcase', page: 'dev-tools/theme-blocks-showcase', slug: '/dev-tools/theme-blocks-showcase', template: 'page.html' },
      { label: 'Button Showcase', page: 'dev-tools/button-showcase', slug: '/dev-tools/button-showcase', template: 'page.html' },
      { label: 'Section Presets Showcase', page: 'dev-tools/section-presets-showcase', slug: '/dev-tools/section-presets-showcase', template: 'page.html' },
      { label: 'Header/Footer Comparison', page: 'dev-tools/header-footer-comparison', slug: '/dev-tools/header-footer-comparison', template: 'page.html' },
      { label: 'Icon Library', page: 'dev-tools/icon-library', slug: '/dev-tools/icon-library', template: 'page.html' },
      { label: 'Style Guide', page: 'dev-tools/style-guide', slug: '/dev-tools/style-guide', template: 'page.html' },
      { label: 'Block Documentation', page: 'dev-tools/block-documentation', slug: '/dev-tools/block-documentation', template: 'page.html' },
      { label: 'Component API', page: 'dev-tools/component-api', slug: '/dev-tools/component-api', template: 'page.html' },
    ]
  },
];
