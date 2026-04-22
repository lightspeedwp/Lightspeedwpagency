/**
 * Site Map — Data Definitions
 *
 * All page arrays, section assembly, and path helpers for the SiteMapTemplate.
 * Extracted for file size compliance (max 300 lines per .tsx).
 *
 * @see SiteMapTemplate.tsx — Consumer component
 */

import {
  House, Briefcase, Lightbulb, Brain, Folder, FileText,
  ChatCircle, Stack, VideoCamera, Headphones, Star,
  Archive, Wrench,
  WarningCircle as AlertCircle, BookOpen,
  Gear as Settings,
  MagnifyingGlass, PenNib, Code, Rocket, TrendUp,
} from '@phosphor-icons/react';

import { blogPosts, blogAuthors, blogCategories, postTags } from './blog-posts';
import { portfolioArchiveItems } from './archive-items';
import { videos, videoCategories, videoTags } from './videos';
import { podcasts, podcastCategories } from './podcasts';
import { testimonialEntries } from './testimonials-extended';
import { tutorials } from './tutorials';
import { sitePages } from './site-pages';
import { slugToPath } from '../utils/route-map';

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

type UniversalIconComponent = typeof House;

export interface SiteMapPage {
  id: string;
  label: string;
  status: 'active' | 'missing';
}

export interface SiteMapSection {
  title: string;
  icon: UniversalIconComponent;
  colorClass: string;
  pages: SiteMapPage[];
}

/* ═══════════════════════════════════════════
 * Path Helpers
 * ═══════════════════════════════════════════ */

function testimonialSlugToPath(id: string): string {
  if (id === 'testimonial-archive') return '/testimonials/archive';
  const standardMatch = id.match(/^testimonial-standard-(.+)$/);
  if (standardMatch) return `/testimonials/${standardMatch[1]}`;
  const audioMatch = id.match(/^testimonial-audio-(.+)$/);
  if (audioMatch) return `/testimonials/audio/${audioMatch[1]}`;
  const videoMatch = id.match(/^testimonial-video-(.+)$/);
  if (videoMatch) return `/testimonials/video/${videoMatch[1]}`;
  const galleryMatch = id.match(/^testimonial-gallery-(.+)$/);
  if (galleryMatch) return `/testimonials/gallery/${galleryMatch[1]}`;
  return slugToPath(id);
}

function dateSlugToPath(id: string): string {
  const match = id.match(/^date-(\d{4})$/);
  if (match) return `/insights/date/${match[1]}`;
  return slugToPath(id);
}

export function resolvePath(page: SiteMapPage, sectionTitle: string): string {
  if (sectionTitle === 'Testimonials') return testimonialSlugToPath(page.id);
  if (page.id.match(/^date-\d{4}$/)) return dateSlugToPath(page.id);
  return slugToPath(page.id);
}

/* ═══════════════════════════════════════════
 * Build all sitemap sections
 * ═══════════════════════════════════════════ */

export function buildSiteMapSections(): SiteMapSection[] {
  /* ── 1. Core Pages ── */
  const corePages: SiteMapPage[] = [
    { id: 'front-page', label: 'Home (Front Page)', status: 'active' },
    { id: 'about', label: 'About Us', status: 'active' },
    { id: 'team', label: 'Our Team', status: 'active' },
    { id: 'about-process', label: 'Our Process', status: 'active' },
    { id: 'about-culture', label: 'Our Culture', status: 'active' },
    { id: 'about-history', label: 'Our History', status: 'active' },
    { id: 'careers', label: 'Careers', status: 'active' },
    { id: 'contact', label: 'Contact', status: 'active' },
    { id: 'faq', label: 'FAQ', status: 'active' },
    { id: 'pricing', label: 'Pricing', status: 'active' },
    { id: 'guarantees', label: 'Guarantees', status: 'active' },
    { id: 'testimonials', label: 'Testimonials', status: 'active' },
    { id: 'roi-calculator', label: 'ROI Calculator', status: 'active' },
    { id: 'tutorials', label: 'Tutorials', status: 'active' },
    { id: 'search', label: 'Search', status: 'active' },
    { id: 'style-guide', label: 'Style Guide', status: 'active' },
    { id: 'site-map', label: 'Site Map (Current)', status: 'active' },
  ];

  /* ── 1b. Why Choose Us Pages ── */
  const whyPages: SiteMapPage[] = [
    { id: 'why', label: 'Why LightSpeed (Landing)', status: 'active' },
    { id: 'why-choose-us', label: 'Why Choose Us', status: 'active' },
    { id: 'why-wp', label: 'Why WordPress', status: 'active' },
    { id: 'why-woo', label: 'Why WooCommerce', status: 'active' },
    { id: 'why-mailchimp', label: 'Why Mailchimp', status: 'active' },
    { id: 'why-lsx', label: 'Why LSX', status: 'active' },
    { id: 'why-lightspeed', label: 'Why LightSpeed', status: 'active' },
  ];

  /* ── 1c. Consultation & Onboarding Pages ── */
  const consultationPages: SiteMapPage[] = [
    { id: 'free-consultation', label: 'Free Consultation', status: 'active' },
    { id: 'free-woo-consultation', label: 'Free WooCommerce Consultation', status: 'active' },
    { id: 'briefing', label: 'Briefing', status: 'active' },
    { id: 'client-intake-form', label: 'Client Intake Form', status: 'active' },
    { id: 'client-feedback', label: 'Client Feedback', status: 'active' },
    { id: 'referrals', label: 'Referrals', status: 'active' },
    { id: 'website-packages', label: 'Website Packages', status: 'active' },
    { id: 'getting-started-with-lightspeed', label: 'Getting Started with LightSpeed', status: 'active' },
  ];

  /* ── 1d. Policy Pages ── */
  const policyPages: SiteMapPage[] = [
    { id: 'privacy-policy', label: 'Privacy Policy', status: 'active' },
    { id: 'terms-of-service', label: 'Terms of Service', status: 'active' },
    { id: 'policies', label: 'Policies Hub', status: 'active' },
    { id: 'policies-publishing-principles', label: 'Publishing Principles', status: 'active' },
    { id: 'policies-diversity-content', label: 'Diversity — Content', status: 'active' },
    { id: 'policies-diversity-staffing', label: 'Diversity — Staffing', status: 'active' },
    { id: 'policies-ethics', label: 'Ethics Policy', status: 'active' },
    { id: 'policies-feedback', label: 'Feedback Policy', status: 'active' },
    { id: 'policies-corrections', label: 'Corrections Policy', status: 'active' },
    { id: 'policies-ownership-funding', label: 'Ownership & Funding', status: 'active' },
  ];

  /* ── 2. Services ── */
  const servicePages: SiteMapPage[] = [
    { id: 'services', label: 'Services Landing', status: 'active' },
    { id: 'ai-services-landing', label: 'AI Services (Category)', status: 'active' },
    { id: 'content', label: 'Content Services (Category)', status: 'active' },
  ];

  /* ── 3. Journey Phase: Discover ── */
  const discoverPhaseServices: SiteMapPage[] = [
    { id: 'journey-discover', label: '01 Discover — Discovery & Strategy', status: 'active' },
    { id: 'discovery', label: 'Discovery & Strategy', status: 'active' },
    { id: 'content-overview', label: 'Content Overview', status: 'active' },
    { id: 'content-strategy', label: 'Content Strategy', status: 'active' },
    { id: 'content-collection', label: 'Content Collection', status: 'active' },
    { id: 'content-audit', label: 'Content Audit', status: 'active' },
    { id: 'competitor-research', label: 'Competitor Research', status: 'active' },
  ];

  /* ── 4. Journey Phase: Create ── */
  const createPhaseServices: SiteMapPage[] = [
    { id: 'journey-create', label: '02 Create — Design & Content', status: 'active' },
    { id: 'design', label: 'Design', status: 'active' },
    { id: 'figma-prototyping', label: 'Figma Prototyping', status: 'active' },
    { id: 'design-systems-service', label: 'Design Systems', status: 'active' },
    { id: 'content-creation', label: 'Content Creation', status: 'active' },
    { id: 'content-copywriting', label: 'Copywriting & UX Writing', status: 'active' },
    { id: 'content-seo-content', label: 'SEO Content', status: 'active' },
    { id: 'newsletter-service', label: 'Newsletter Service', status: 'active' },
    { id: 'email-marketing', label: 'Email Marketing', status: 'active' },
    { id: 'brand-guidelines', label: 'Brand Guidelines', status: 'active' },
  ];

  /* ── 5. Journey Phase: Build ── */
  const buildPhaseServices: SiteMapPage[] = [
    { id: 'journey-build', label: '03 Build — Development & Integration', status: 'active' },
    { id: 'development', label: 'Development', status: 'active' },
    { id: 'security', label: 'Security', status: 'active' },
    { id: 'migrations', label: 'Migrations', status: 'active' },
    { id: 'development-service', label: 'Plugin & Theme Development', status: 'active' },
    { id: 'woocommerce-service', label: 'WooCommerce Development', status: 'active' },
    { id: 'api-integrations', label: 'API Integrations', status: 'active' },
    { id: 'custom-post-types', label: 'Custom Post Types', status: 'active' },
  ];

  /* ── 6. Journey Phase: Launch ── */
  const launchPhaseServices: SiteMapPage[] = [
    { id: 'journey-launch', label: '04 Launch — Deploy & Training', status: 'active' },
    { id: 'hosting', label: 'Hosting', status: 'active' },
    { id: 'support', label: 'Support & Maintenance', status: 'active' },
    { id: 'training', label: 'Training', status: 'active' },
    { id: 'migration-service', label: 'Migration Services', status: 'active' },
    { id: 'security-setup', label: 'SSL & Security Setup', status: 'active' },
  ];

  /* ── 7. Journey Phase: Grow ── */
  const growPhaseServices: SiteMapPage[] = [
    { id: 'journey-grow', label: '05 Grow — Optimise & Scale', status: 'active' },
    { id: 'performance', label: 'Performance Optimisation', status: 'active' },
    { id: 'accessibility', label: 'Accessibility Compliance', status: 'active' },
    { id: 'ai-search-visibility', label: 'AI Search & Visibility', status: 'active' },
    { id: 'seo', label: 'Technical SEO', status: 'active' },
    { id: 'analytics', label: 'Analytics & Reporting', status: 'active' },
    { id: 'content-governance', label: 'Content Governance', status: 'active' },
    { id: 'performance-service', label: 'Performance Optimisation Service', status: 'active' },
    { id: 'accessibility-service', label: 'Accessibility Service', status: 'active' },
    { id: 'support-service', label: 'Support & Maintenance Service', status: 'active' },
    { id: 'security-monitoring', label: 'Security Monitoring', status: 'active' },
    { id: 'analytics-service', label: 'Analytics & Reporting Service', status: 'active' },
  ];

  /* ── 8. Journey Phase: Evolve ── */
  const evolvePhaseServices: SiteMapPage[] = [
    { id: 'journey-evolve', label: '06 Evolve — AI & Future-Proof', status: 'active' },
    { id: 'ai-engine-optimisation', label: 'AI Engine Optimisation', status: 'active' },
    { id: 'answer-engine-optimisation', label: 'Answer Engine Optimisation', status: 'active' },
    { id: 'voice-search-optimization', label: 'Voice Search Optimization', status: 'active' },
  ];

  /* ── 9. Solutions ── */
  const solutionPages: SiteMapPage[] = [
    { id: 'solutions', label: 'Solutions Landing', status: 'active' },
    { id: 'wordpress', label: 'WordPress', status: 'active' },
    { id: 'woocommerce', label: 'WooCommerce', status: 'active' },
    { id: 'wordpress-multisite', label: 'WordPress Multisite', status: 'active' },
    { id: 'headless-wordpress', label: 'Headless WordPress', status: 'active' },
    { id: 'wordpress-redesign', label: 'WordPress Redesign', status: 'active' },
    { id: 'woocommerce-redesign', label: 'WooCommerce Redesign', status: 'active' },
    { id: 'custom-wordpress-theme', label: 'Custom WordPress Theme', status: 'active' },
    { id: 'wordpress-to-wordpress', label: 'WordPress to WordPress', status: 'active' },
    { id: 'publishers', label: 'Publishers', status: 'active' },
    { id: 'ecommerce-industry', label: 'E-commerce Industry', status: 'active' },
    { id: 'education-solution', label: 'Education Industry', status: 'active' },
    { id: 'design-systems-solution', label: 'Design Systems (Strategic Solution)', status: 'active' },
    { id: 'healthcare-industry', label: 'Healthcare Industry', status: 'active' },
    { id: 'lsx', label: 'LSX Design', status: 'active' },
    { id: 'lsx-theme', label: 'LSX Theme', status: 'active' },
    { id: 'mailchimp', label: 'Mailchimp', status: 'active' },
    { id: 'wetu-importer', label: 'Wetu Importer', status: 'active' },
    { id: 'lsx-sharing', label: 'LSX Sharing', status: 'active' },
    { id: 'lsx-search', label: 'LSX Search', status: 'active' },
    { id: 'tour-operators', label: 'Tour Operators', status: 'active' },
  ];

  /* ── 10. AI Solutions & Services ── */
  const aiPages: SiteMapPage[] = [
    // AI Solutions Landing + Sub-pages
    { id: 'ai-solutions', label: 'AI Solutions Hub', status: 'active' },
    { id: 'ai-integrations', label: 'AI Integrations', status: 'active' },
    { id: 'ai-content-generation', label: 'AI Content Generation', status: 'active' },
    { id: 'ai-seo', label: 'AI-Powered SEO', status: 'active' },
    { id: 'ai-chatbots', label: 'AI Chatbots', status: 'active' },
    { id: 'ai-analytics', label: 'AI Analytics & Insights', status: 'active' },
    { id: 'ai-image-recognition', label: 'AI Image Recognition', status: 'active' },
    // AI Services Landing (already listed in servicePages section)
    // AI Services Sub-pages (already distributed across lifecycle phases)
  ];

  /* ── 10b. Systems Hub ── */
  const systemsPages: SiteMapPage[] = [
    { id: 'systems', label: 'Systems Hub Dashboard', status: 'active' },
    { id: 'design-tokens', label: 'Design Tokens System', status: 'active' },
    { id: 'pattern-governance', label: 'Pattern Governance System', status: 'active' },
    { id: 'editorial-workflows', label: 'Editorial Workflows System', status: 'active' },
    { id: 'ai-search-readiness', label: 'AI Search Readiness System', status: 'active' },
    { id: 'performance-reliability', label: 'Performance & Reliability System', status: 'active' },
  ];

  /* ── 11. Portfolio (dynamic) ── */
  const uniquePortfolioCategories = Array.from(new Set(portfolioArchiveItems.map((item) => item.category))).sort();
  const uniquePortfolioTags = Array.from(new Set(portfolioArchiveItems.flatMap((item) => item.tags))).sort();

  const portfolioPages: SiteMapPage[] = [
    { id: 'portfolio-archive', label: 'Portfolio Archive', status: 'active' },
    { id: 'work-alt-single-armd-digital', label: 'Work — Funky Alt Template (ARMD Digital)', status: 'active' },
    ...portfolioArchiveItems.map((project) => ({ id: `portfolio-single-${project.slug}`, label: project.title, status: 'active' as const })),
    ...uniquePortfolioCategories.map((cat) => ({ id: `portfolio-category-${cat.toLowerCase().replace(/\s+/g, '-')}`, label: `Category: ${cat}`, status: 'active' as const })),
    ...uniquePortfolioTags.map((tag) => ({ id: `portfolio-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`, label: `Tag: ${tag}`, status: 'active' as const })),
  ];

  /* ── 12. Insights & Archives (dynamic) ── */
  const blogArchivePages: SiteMapPage[] = [
    { id: 'insights', label: 'Insights Index', status: 'active' },
    { id: 'single-post', label: 'Single Post (Longform Demo)', status: 'active' },
    ...blogCategories.map((cat) => ({ id: `category-${cat.slug}`, label: `Category: ${cat.name}`, status: 'active' as const })),
    ...blogAuthors.map((author) => ({ id: `author-${author.slug}`, label: `Author: ${author.name}`, status: 'active' as const })),
    { id: 'tag-archive', label: 'Tag Archive (default)', status: 'active' },
    ...postTags.map((tag) => ({ id: `tag-${tag.slug}`, label: `Tag: ${tag.name}`, status: 'active' as const })),
    { id: 'date-archive', label: 'Date Archive (default)', status: 'active' },
    { id: 'date-2026', label: 'Date: 2026', status: 'active' as const },
    { id: 'date-2025', label: 'Date: 2025', status: 'active' as const },
  ];

  /* ── 13. Single Posts (dynamic) ── */
  const singlePostPages: SiteMapPage[] = blogPosts.map((post) => ({
    id: `post-${post.slug}`,
    label: post.title.substring(0, 60) + (post.title.length > 60 ? '...' : ''),
    status: 'active' as const,
  }));

  /* ── 14. Post Formats ── */
  const postFormatPages: SiteMapPage[] = [
    { id: 'audio-archive', label: 'Audio Archive', status: 'active' },
    { id: 'audio-single', label: 'Audio Single', status: 'active' },
    { id: 'gallery-archive', label: 'Gallery Archive', status: 'active' },
    { id: 'gallery-single', label: 'Gallery Single', status: 'active' },
    { id: 'image-archive', label: 'Image Archive', status: 'active' },
    { id: 'image-single', label: 'Image Single', status: 'active' },
    { id: 'quote-archive', label: 'Quote Archive', status: 'active' },
    { id: 'quote-single', label: 'Quote Single', status: 'active' },
    { id: 'link-archive', label: 'Link Archive', status: 'active' },
    { id: 'link-single', label: 'Link Single', status: 'active' },
    { id: 'chat-archive', label: 'Chat Archive', status: 'active' },
    { id: 'chat-single', label: 'Chat Single', status: 'active' },
    { id: 'status-archive', label: 'Status Archive', status: 'active' },
    { id: 'status-single', label: 'Status Single', status: 'active' },
    { id: 'standard-archive', label: 'Standard Archive', status: 'active' },
    { id: 'standard-single', label: 'Standard Single', status: 'active' },
    { id: 'aside-archive', label: 'Aside Archive', status: 'active' },
    { id: 'aside-single', label: 'Aside Single', status: 'active' },
    { id: 'aside-stream', label: 'Aside Stream', status: 'active' },
  ];

  /* ── 15. Videos (dynamic) ── */
  const videoPages: SiteMapPage[] = [
    { id: 'videos', label: 'Video Index', status: 'active' },
    ...videoCategories.map((cat) => ({ id: `video-category-${cat.slug}`, label: `Category: ${cat.name}`, status: 'active' as const })),
    ...videoTags.map((tag) => ({ id: `video-tag-${tag.slug}`, label: `Tag: ${tag.name}`, status: 'active' as const })),
    ...videos.map((video) => ({ id: `video-${video.slug}`, label: video.title.substring(0, 50) + (video.title.length > 50 ? '...' : ''), status: 'active' as const })),
  ];

  /* ── 16. Podcasts (dynamic) ── */
  const podcastPagesList: SiteMapPage[] = [
    { id: 'podcasts', label: 'Podcast Index', status: 'active' },
    ...podcastCategories.map((cat) => ({ id: `podcast-category-${cat.slug}`, label: `Category: ${cat.name}`, status: 'active' as const })),
    ...podcasts.map((podcast) => ({ id: `podcast-${podcast.slug}`, label: podcast.title.substring(0, 50) + (podcast.title.length > 50 ? '...' : ''), status: 'active' as const })),
  ];

  /* ── 17. Testimonials (dynamic) ── */
  const testimonialPages: SiteMapPage[] = [
    { id: 'testimonials', label: 'Testimonials Overview', status: 'active' },
    { id: 'testimonial-archive', label: 'Testimonials Archive (All)', status: 'active' },
    ...testimonialEntries.map((t) => ({
      id: `testimonial-${t.format}-${t.slug}`,
      label: `[${t.format.charAt(0).toUpperCase() + t.format.slice(1)}] ${t.title.substring(0, 45)}${t.title.length > 45 ? '...' : ''}`,
      status: 'active' as const,
    })),
  ];

  /* ── 18. Tutorials (dynamic) ── */
  const tutorialPages: SiteMapPage[] = [
    { id: 'tutorials', label: 'Tutorials Index', status: 'active' },
    ...tutorials.map((tutorial) => ({ id: `tutorial-${tutorial.id}`, label: tutorial.title.substring(0, 55) + (tutorial.title.length > 55 ? '...' : ''), status: 'active' as const })),
  ];

  /* ── 19. Legacy / Misc ── */
  const legacyPages: SiteMapPage[] = [
    { id: 'archive', label: 'Archive (Legacy)', status: 'active' },
    { id: 'archive-filters', label: 'Archive with Filters', status: 'active' },
    { id: 'index', label: 'Index (Legacy)', status: 'active' },
    { id: 'single', label: 'Single (Legacy)', status: 'active' },
    { id: 'wordpress-blocks-poc', label: 'WordPress Blocks PoC', status: 'active' },
    { id: 'section-style-example', label: 'Section Styles Example', status: 'active' },
    { id: 'feature-showcase', label: 'Feature Showcase', status: 'active' },
  ];

  /* ── 20. Dev Tools ── */
  const devToolsPages: SiteMapPage[] = [
    { id: 'dev-tools', label: 'Dev Tools Hub', status: 'active' },
    { id: 'template-tester', label: 'Template Tester', status: 'active' },
    { id: 'component-showcase', label: 'Component Showcase', status: 'active' },
    { id: 'design-system-test', label: 'Design System Test', status: 'active' },
    { id: 'compliance-scorecard', label: 'Compliance Scorecard', status: 'active' },
    { id: 'design-tokens-reference', label: 'Design Tokens Reference', status: 'active' },
    { id: 'design-playground', label: 'Design Playground', status: 'active' },
    { id: 'feature-showcase', label: 'Feature Showcase', status: 'active' },
    { id: 'block-documentation', label: 'Block Documentation', status: 'active' },
    { id: 'component-api', label: 'Component API', status: 'active' },
    { id: 'design-blocks-showcase', label: 'Design Blocks Showcase', status: 'active' },
    { id: 'button-showcase', label: 'Button Showcase', status: 'active' },
    { id: 'header-footer-comparison', label: 'Header/Footer Comparison', status: 'active' },
    { id: 'icon-library', label: 'Icon Library', status: 'active' },
    { id: 'live-preview', label: 'Live Preview', status: 'active' },
    { id: 'section-presets-showcase', label: 'Section Presets Showcase', status: 'active' },
    { id: 'theme-blocks-showcase', label: 'Theme Blocks Showcase', status: 'active' },
    { id: 'dev-tools-style-guide', label: 'Style Guide (Dev)', status: 'active' },
    { id: 'deployment-readiness', label: 'Deployment Readiness', status: 'active' },
    { id: 'code-quality-dashboard', label: 'Code Quality Dashboard', status: 'active' },
    { id: 'docs-generator', label: 'Documentation Generator', status: 'active' },
    { id: 'snippet-generator', label: 'Snippet Generator', status: 'active' },
    { id: 'phosphor-icon-reference', label: 'Phosphor Icon Reference', status: 'active' },
  ];

  /* ── 21. Additional Site Pages ── */
  const predefinedIds = new Set([
    'home', 'front-page',
    ...corePages.map(p => p.id),
    ...whyPages.map(p => p.id),
    ...consultationPages.map(p => p.id),
    ...policyPages.map(p => p.id),
    ...servicePages.map(p => p.id),
    ...solutionPages.map(p => p.id),
    ...aiPages.map(p => p.id),
    ...systemsPages.map(p => p.id),
    ...legacyPages.map(p => p.id),
    ...devToolsPages.map(p => p.id),
  ]);

  const additionalPages: SiteMapPage[] = sitePages
    .filter(page => !predefinedIds.has(page.slug) && !predefinedIds.has(page.id))
    .map(page => ({ id: page.slug, label: page.title, status: 'active' as const }));

  /* ═══════════════════════════════════════════
   * Assemble sections
   * ═══════════════════════════════════════════ */
  return [
    { title: 'Core Pages', icon: House, colorClass: 'wp-text-primary', pages: corePages },
    { title: 'Why Choose Us', icon: Lightbulb, colorClass: 'wp-text-category-amber', pages: whyPages },
    { title: 'Consultation & Onboarding', icon: ChatCircle, colorClass: 'wp-text-category-cyan', pages: consultationPages },
    { title: 'Policies', icon: BookOpen, colorClass: 'wp-text-category-indigo', pages: policyPages },
    { title: 'Services', icon: Briefcase, colorClass: 'wp-text-category-green', pages: servicePages },
    { title: 'Journey Phase: Discover', icon: MagnifyingGlass, colorClass: 'wp-text-category-violet', pages: discoverPhaseServices },
    { title: 'Journey Phase: Create', icon: PenNib, colorClass: 'wp-text-category-pink', pages: createPhaseServices },
    { title: 'Journey Phase: Build', icon: Code, colorClass: 'wp-text-category-cyan', pages: buildPhaseServices },
    { title: 'Journey Phase: Launch', icon: Rocket, colorClass: 'wp-text-category-amber', pages: launchPhaseServices },
    { title: 'Journey Phase: Grow', icon: TrendUp, colorClass: 'wp-text-category-green', pages: growPhaseServices },
    { title: 'Journey Phase: Evolve', icon: Brain, colorClass: 'wp-text-category-indigo', pages: evolvePhaseServices },
    { title: 'Solutions', icon: Lightbulb, colorClass: 'wp-text-category-amber', pages: solutionPages },
    { title: 'AI Integrations', icon: Brain, colorClass: 'wp-text-category-violet', pages: aiPages },
    { title: 'Systems Hub', icon: Settings, colorClass: 'wp-text-category-cyan', pages: systemsPages },
    { title: 'Work', icon: Folder, colorClass: 'wp-text-category-pink', pages: portfolioPages },
    { title: 'Insights & Archives', icon: FileText, colorClass: 'wp-text-category-blue', pages: blogArchivePages },
    { title: 'Insight Posts', icon: ChatCircle, colorClass: 'wp-text-category-cyan', pages: singlePostPages },
    { title: 'Post Formats', icon: Stack, colorClass: 'wp-text-category-violet', pages: postFormatPages },
    { title: 'Videos', icon: VideoCamera, colorClass: 'wp-text-category-pink', pages: videoPages },
    { title: 'Podcasts', icon: Headphones, colorClass: 'wp-text-category-cyan', pages: podcastPagesList },
    { title: 'Testimonials', icon: Star, colorClass: 'wp-text-category-amber', pages: testimonialPages },
    { title: 'Tutorials', icon: BookOpen, colorClass: 'wp-text-category-indigo', pages: tutorialPages },
    { title: 'Additional Pages', icon: FileText, colorClass: 'wp-text-category-blue', pages: additionalPages },
    { title: 'Legacy / Misc', icon: Archive, colorClass: 'wp-text-muted-foreground', pages: legacyPages },
    { title: 'Developer Tools', icon: Wrench, colorClass: 'wp-text-category-indigo', pages: devToolsPages },
    { title: 'Error Pages', icon: AlertCircle, colorClass: 'wp-text-category-red', pages: [{ id: '404', label: '404 Not Found', status: 'active' }] },
  ];
}