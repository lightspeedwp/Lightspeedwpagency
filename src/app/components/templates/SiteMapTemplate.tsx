/**
 * Site Map Template
 *
 * WordPress template: templates/page-sitemap.html
 *
 * Comprehensive sitemap page covering ALL routes — static and data-driven.
 * Dynamically pulls every blog post, portfolio project, testimonial, video,
 * podcast, product, and tour from centralized data files so the page always
 * reflects the maximum number of navigable pages.
 *
 * All styling uses BEM classes from /src/styles/templates/site-map.css
 * and CSS variables — zero Tailwind, zero hardcoded values.
 *
 * @see /guidelines/overview-sitemap.md
 * @see /guidelines/routing/routing-complete-reference.md
 */

import '../../../styles/templates/site-map.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Link } from 'react-router';
import { Button } from '../blocks/design/Buttons';
import { slugToPath } from '../../utils/route-map';
import { blogPosts, blogAuthors, blogCategories } from '../../data/blog-posts';
import { postTags } from '../../data/blog-posts';
import { portfolioArchiveItems } from '../../data/archive-items';
import { videos, videoCategories, videoTags } from '../../data/videos';
import { podcasts, podcastCategories } from '../../data/podcasts';
import { tours } from '../../data/tour-operator';
import { allProducts } from '../../data/woocommerce';
import { testimonialEntries } from '../../data/testimonials-extended';
import { tutorials } from '../../data/tutorials';
import { productCategories, productTags } from '../../data/taxonomies';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  House, Briefcase, Lightbulb, Brain, Folder, FileText,
  ChatCircle, Stack, VideoCamera, Headphones, Star,
  ShoppingCart, MapTrifold, BookOpen, Archive, Wrench,
  WarningCircle as AlertCircle, Globe, CheckCircle, CaretRight as ChevronRight, MagnifyingGlass as Search,
  Gear as Settings,
} from '@phosphor-icons/react';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react';

// Type for icon components (Phosphor)
type UniversalIconComponent = typeof PhosphorIcon;

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

interface SiteMapPage {
  id: string;
  label: string;
  status: 'active' | 'missing';
}

interface SiteMapSection {
  title: string;
  icon: UniversalIconComponent;
  color: string;
  pages: SiteMapPage[];
}

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function SiteMapTemplate() {
  const { ref: heroRef, style: heroStyle } = useScrollReveal();

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
    { id: 'why-choose-us', label: 'Why Choose Us', status: 'active' },
    { id: 'roi-calculator', label: 'ROI Calculator', status: 'active' },
    { id: 'tutorials', label: 'Tutorials', status: 'active' },
    { id: 'privacy-policy', label: 'Privacy Policy', status: 'active' },
    { id: 'terms-of-service', label: 'Terms of Service', status: 'active' },
    { id: 'search', label: 'Search', status: 'active' },
    { id: 'style-guide', label: 'Style Guide', status: 'active' },
    { id: 'site-map', label: 'Site Map (Current)', status: 'active' },
  ];

  /* ── 2. Services ── */
  const servicePages: SiteMapPage[] = [
    { id: 'services', label: 'Services Landing', status: 'active' },
    { id: 'discovery', label: 'Discovery & Strategy', status: 'active' },
    { id: 'design', label: 'Design', status: 'active' },
    { id: 'figma-prototyping', label: 'Figma Prototyping', status: 'active' },
    { id: 'design-systems-service', label: 'Design Systems', status: 'active' },
    { id: 'development', label: 'Development', status: 'active' },
    { id: 'security', label: 'Security', status: 'active' },
    { id: 'migrations', label: 'Migrations', status: 'active' },
    { id: 'support', label: 'Support & Maintenance', status: 'active' },
    { id: 'training', label: 'Training', status: 'active' },
    { id: 'hosting', label: 'Hosting', status: 'active' },
    { id: 'performance', label: 'Performance Optimisation', status: 'active' },
    { id: 'accessibility', label: 'Accessibility Compliance', status: 'active' },
    { id: 'newsletter-service', label: 'Newsletter Service', status: 'active' },
    { id: 'email-marketing', label: 'Email Marketing', status: 'active' },
    /* AI Services Category */
    { id: 'ai-services-landing', label: '⬡ AI Services (Category)', status: 'active' },
    { id: 'ai-search-visibility', label: '↳ AI Search & Visibility', status: 'active' },
    { id: 'seo', label: '↳ Technical SEO', status: 'active' },
    { id: 'analytics', label: '↳ Analytics & Reporting', status: 'active' },
    { id: 'ai-engine-optimisation', label: '↳ AI Engine Optimisation', status: 'active' },
    { id: 'answer-engine-optimisation', label: '↳ Answer Engine Optimisation', status: 'active' },
    /* Content Services Category */
    { id: 'content', label: '⬡ Content Services (Category)', status: 'active' },
    { id: 'content-overview', label: '↳ Content Overview', status: 'active' },
    { id: 'content-strategy', label: '↳ Content Strategy', status: 'active' },
    { id: 'content-collection', label: '↳ Content Collection', status: 'active' },
    { id: 'content-audit', label: '↳ Content Audit', status: 'active' },
    { id: 'content-creation', label: '↳ Content Creation', status: 'active' },
    { id: 'content-copywriting', label: '↳ Copywriting & UX Writing', status: 'active' },
    { id: 'content-seo-content', label: '↳ SEO Content', status: 'active' },
    { id: 'content-governance', label: '↳ Content Governance', status: 'active' },
    /* Journey Stage Pages */
    { id: 'journey-ignite', label: '01 Ignite — Discovery & Strategy', status: 'active' },
    { id: 'journey-create', label: '02 Create — Design & Content', status: 'active' },
    { id: 'journey-build', label: '03 Build — Development & Integration', status: 'active' },
    { id: 'journey-launch', label: '04 Launch — Deploy & Training', status: 'active' },
    { id: 'journey-grow', label: '05 Grow — Optimise & Scale', status: 'active' },
    { id: 'journey-evolve', label: '06 Evolve — AI & Future-Proof', status: 'active' },
  ];

  /* ── 3. Solutions ── */
  const solutionPages: SiteMapPage[] = [
    { id: 'solutions', label: 'Solutions Landing', status: 'active' },
    { id: 'wordpress', label: 'WordPress', status: 'active' },
    { id: 'woocommerce', label: 'WooCommerce', status: 'active' },
    { id: 'tour-operators', label: 'Tour Operators', status: 'active' },
    { id: 'publishers', label: 'Publishers', status: 'active' },
    { id: 'lsx', label: 'LSX Design', status: 'active' },
    { id: 'lsx-theme', label: 'LSX Theme', status: 'active' },
    { id: 'mailchimp', label: 'Mailchimp', status: 'active' },
    { id: 'wetu-importer', label: 'Wetu Importer', status: 'active' },
    { id: 'lsx-sharing', label: 'LSX Sharing', status: 'active' },
    { id: 'lsx-search', label: 'LSX Search', status: 'active' },
    { id: 'wordpress-redesign', label: 'WordPress Redesign', status: 'active' },
    { id: 'woocommerce-redesign', label: 'WooCommerce Redesign', status: 'active' },
    { id: 'tour-operator-design', label: 'Tour Operator Design', status: 'active' },
  ];

  /* ── 4. AI Integrations ── */
  const aiPages: SiteMapPage[] = [
    { id: 'ai-integrations', label: 'AI Integrations Hub', status: 'active' },
    { id: 'ai-content-generation', label: 'AI Content Generation', status: 'active' },
    { id: 'ai-seo', label: 'AI-Powered SEO', status: 'active' },
    { id: 'ai-chatbots', label: 'AI Chatbots for WordPress', status: 'active' },
    { id: 'ai-analytics', label: 'AI Analytics & Insights', status: 'active' },
  ];

  /* ── 4b. Systems Hub ── */
  const systemsPages: SiteMapPage[] = [
    { id: 'systems', label: 'Systems Hub Dashboard', status: 'active' },
    { id: 'design-tokens', label: 'Design Tokens System', status: 'active' },
    { id: 'pattern-governance', label: 'Pattern Governance System', status: 'active' },
    { id: 'editorial-workflows', label: 'Editorial Workflows System', status: 'active' },
    { id: 'ai-search-readiness', label: 'AI Search Readiness System', status: 'active' },
    { id: 'performance-reliability', label: 'Performance & Reliability System', status: 'active' },
  ];

  /* ── 5. Portfolio (dynamic from data) ── */
  const uniquePortfolioCategories = Array.from(
    new Set(portfolioArchiveItems.map((item) => item.category))
  ).sort();
  const uniquePortfolioTags = Array.from(
    new Set(portfolioArchiveItems.flatMap((item) => item.tags))
  ).sort();

  const portfolioPages: SiteMapPage[] = [
    { id: 'portfolio-archive', label: 'Portfolio Archive', status: 'active' },
    ...portfolioArchiveItems.map((project) => ({
      id: `portfolio-single-${project.slug}`,
      label: `${project.title}`,
      status: 'active' as const,
    })),
    ...uniquePortfolioCategories.map((cat) => ({
      id: `portfolio-category-${cat.toLowerCase().replace(/\s+/g, '-')}`,
      label: `Category: ${cat}`,
      status: 'active' as const,
    })),
    ...uniquePortfolioTags.map((tag) => ({
      id: `portfolio-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`,
      label: `Tag: ${tag}`,
      status: 'active' as const,
    })),
  ];

  /* ── 6. Insights & Archives (dynamic) ── */
  const blogArchivePages: SiteMapPage[] = [
    { id: 'insights', label: 'Insights Index', status: 'active' },
    { id: 'single-post', label: 'Single Post (Longform Demo)', status: 'active' },
    ...blogCategories.map((cat) => ({
      id: `category-${cat.slug}`,
      label: `Category: ${cat.name}`,
      status: 'active' as const,
    })),
    ...blogAuthors.map((author) => ({
      id: `author-${author.slug}`,
      label: `Author: ${author.name}`,
      status: 'active' as const,
    })),
    { id: 'tag-archive', label: 'Tag Archive (default)', status: 'active' },
    ...postTags.map((tag) => ({
      id: `tag-${tag.slug}`,
      label: `Tag: ${tag.name}`,
      status: 'active' as const,
    })),
    { id: 'date-archive', label: 'Date Archive (default)', status: 'active' },
    { id: 'date-2026', label: 'Date: 2026', status: 'active' as const },
    { id: 'date-2025', label: 'Date: 2025', status: 'active' as const },
  ];

  /* ── 7. Single Posts (dynamic from data) ── */
  const singlePostPages: SiteMapPage[] = blogPosts.map((post) => ({
    id: `post-${post.slug}`,
    label: post.title.substring(0, 60) + (post.title.length > 60 ? '...' : ''),
    status: 'active' as const,
  }));

  /* ── 8. Post Formats ── */
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

  /* ── 9. Videos (dynamic from data) ── */
  const videoPages: SiteMapPage[] = [
    { id: 'videos', label: 'Video Index', status: 'active' },
    ...videoCategories.map((cat) => ({
      id: `video-category-${cat.slug}`,
      label: `Category: ${cat.name}`,
      status: 'active' as const,
    })),
    ...videoTags.map((tag) => ({
      id: `video-tag-${tag.slug}`,
      label: `Tag: ${tag.name}`,
      status: 'active' as const,
    })),
    ...videos.map((video) => ({
      id: `video-${video.slug}`,
      label: video.title.substring(0, 50) + (video.title.length > 50 ? '...' : ''),
      status: 'active' as const,
    })),
  ];

  /* ── 10. Podcasts (dynamic from data) ── */
  const podcastPagesList: SiteMapPage[] = [
    { id: 'podcasts', label: 'Podcast Index', status: 'active' },
    ...podcastCategories.map((cat) => ({
      id: `podcast-category-${cat.slug}`,
      label: `Category: ${cat.name}`,
      status: 'active' as const,
    })),
    ...podcasts.map((podcast) => ({
      id: `podcast-${podcast.slug}`,
      label: podcast.title.substring(0, 50) + (podcast.title.length > 50 ? '...' : ''),
      status: 'active' as const,
    })),
  ];

  /* ── 11. Testimonials (dynamic from data) ── */
  const testimonialPages: SiteMapPage[] = [
    { id: 'testimonials', label: 'Testimonials Overview', status: 'active' },
    ...((() => {
      // We map to the correct route path based on format
      const pages: SiteMapPage[] = [];
      pages.push({
        id: 'testimonial-archive',
        label: 'Testimonials Archive (All)',
        status: 'active',
      });
      testimonialEntries.forEach((t) => {
        let prefix = 'testimonials';
        if (t.format === 'audio') prefix = 'testimonials/audio';
        else if (t.format === 'video') prefix = 'testimonials/video';
        else if (t.format === 'gallery') prefix = 'testimonials/gallery';
        pages.push({
          id: `testimonial-${t.format}-${t.slug}`,
          label: `[${t.format.charAt(0).toUpperCase() + t.format.slice(1)}] ${t.title.substring(0, 45)}${t.title.length > 45 ? '...' : ''}`,
          status: 'active',
        });
      });
      return pages;
    })()),
  ];

  /* ── 12. WooCommerce (dynamic from data) ── */
  const wooCommercePages: SiteMapPage[] = [
    { id: 'product-archive', label: 'Shop (Product Archive)', status: 'active' },
    ...allProducts.map((product) => ({
      id: `product-single-${product.slug}`,
      label: `Product: ${product.name}`,
      status: 'active' as const,
    })),
    ...productCategories.map((cat) => ({
      id: `product-category-${cat.slug}`,
      label: `Category: ${cat.name}`,
      status: 'active' as const,
    })),
    ...productTags.map((tag) => ({
      id: `product-tag-${tag.slug}`,
      label: `Tag: ${tag.name}`,
      status: 'active' as const,
    })),
    { id: 'cart', label: 'Cart', status: 'active' },
    { id: 'checkout', label: 'Checkout', status: 'active' },
  ];

  /* ── 13. Tour Operator (dynamic from data) ── */
  const tourPages: SiteMapPage[] = [
    { id: 'tour-operator-archive', label: 'Tours Archive', status: 'active' },
    ...tours.map((tour) => ({
      id: `tour-single-${tour.slug}`,
      label: `Tour: ${tour.title}`,
      status: 'active' as const,
    })),
  ];

  /* ── 14. Tutorials (dynamic from data) ── */
  const tutorialPages: SiteMapPage[] = [
    { id: 'tutorials', label: 'Tutorials Index', status: 'active' },
    ...tutorials.map((tutorial) => ({
      id: `tutorial-${tutorial.id}`,
      label: tutorial.title.substring(0, 55) + (tutorial.title.length > 55 ? '...' : ''),
      status: 'active' as const,
    })),
  ];

  /* ── 15. Legacy / Misc ── */
  const legacyPages: SiteMapPage[] = [
    { id: 'archive', label: 'Archive (Legacy)', status: 'active' },
    { id: 'archive-filters', label: 'Archive with Filters', status: 'active' },
    { id: 'index', label: 'Index (Legacy)', status: 'active' },
    { id: 'single', label: 'Single (Legacy)', status: 'active' },
    { id: 'wordpress-blocks-poc', label: 'WordPress Blocks PoC', status: 'active' },
    { id: 'section-style-example', label: 'Section Styles Example', status: 'active' },
    { id: 'feature-showcase', label: 'Feature Showcase', status: 'active' },
  ];

  /* ── 16. Dev Tools ── */
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
  ];

  /* ═══════════════════════════════════════════
   * Testimonial slug-to-path helper
   * ═══════════════════════════════════════════ */
  function testimonialSlugToPath(id: string): string {
    // testimonial-archive -> /testimonials/archive
    if (id === 'testimonial-archive') return '/testimonials/archive';
    // testimonial-standard-slug -> /testimonials/slug
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

  /* Date archive slug-to-path helper */
  function dateSlugToPath(id: string): string {
    const match = id.match(/^date-(\d{4})$/);
    if (match) return `/insights/date/${match[1]}`;
    return slugToPath(id);
  }

  /* ═══════════════════════════════════════════
   * Assemble sections
   * ═══════════════════════════════════════════ */

  const siteMapSections: SiteMapSection[] = [
    { title: 'Core Pages', icon: House, color: 'var(--primary)', pages: corePages },
    { title: 'Services', icon: Briefcase, color: 'var(--category-green)', pages: servicePages },
    { title: 'Solutions', icon: Lightbulb, color: 'var(--category-amber)', pages: solutionPages },
    { title: 'AI Integrations', icon: Brain, color: 'var(--category-violet)', pages: aiPages },
    { title: 'Systems Hub', icon: Settings, color: 'var(--category-cyan)', pages: systemsPages },
    { title: 'Work', icon: Folder, color: 'var(--category-pink)', pages: portfolioPages },
    { title: 'Insights & Archives', icon: FileText, color: 'var(--category-blue)', pages: blogArchivePages },
    { title: 'Insight Posts', icon: ChatCircle, color: 'var(--category-cyan)', pages: singlePostPages },
    { title: 'Post Formats', icon: Stack, color: 'var(--category-violet)', pages: postFormatPages },
    { title: 'Videos', icon: VideoCamera, color: 'var(--category-pink)', pages: videoPages },
    { title: 'Podcasts', icon: Headphones, color: 'var(--category-cyan)', pages: podcastPagesList },
    { title: 'Testimonials', icon: Star, color: 'var(--category-amber)', pages: testimonialPages },
    { title: 'WooCommerce', icon: ShoppingCart, color: 'var(--category-green)', pages: wooCommercePages },
    { title: 'Tour Operator', icon: MapTrifold, color: 'var(--category-blue)', pages: tourPages },
    { title: 'Tutorials', icon: BookOpen, color: 'var(--category-indigo)', pages: tutorialPages },
    { title: 'Legacy / Misc', icon: Archive, color: 'var(--muted-foreground)', pages: legacyPages },
    { title: 'Developer Tools', icon: Wrench, color: 'var(--category-indigo)', pages: devToolsPages },
    {
      title: 'Error Pages',
      icon: AlertCircle,
      color: 'var(--category-red)',
      pages: [{ id: '404', label: '404 Not Found', status: 'active' }],
    },
  ];

  const totalRoutes = siteMapSections.reduce((acc, s) => acc + s.pages.length, 0);
  const activeRoutes = siteMapSections.reduce(
    (acc, s) => acc + s.pages.filter((p) => p.status === 'active').length,
    0
  );
  const sectionCount = siteMapSections.length;

  /* Resolve path for a page slug */
  function resolvePath(page: SiteMapPage, sectionTitle: string): string {
    if (sectionTitle === 'Testimonials') return testimonialSlugToPath(page.id);
    if (page.id.match(/^date-\d{4}$/)) return dateSlugToPath(page.id);
    return slugToPath(page.id);
  }

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Site Map' },
        ]}
      />

      {/* Hero */}
      <Section spacing="xl" className="site-map__hero">
        <div className="site-map__hero-orb" aria-hidden="true" />

        <Container>
          <div ref={heroRef} className="site-map__hero-inner" style={heroStyle}>
            <div className="site-map__hero-badge">
              <Globe size={14} />
              Site Map
            </div>

            <h1 className="site-map__hero-title">Complete Site Navigation</h1>

            <p className="site-map__hero-subtitle">
              {totalRoutes} navigable pages across {sectionCount} sections
            </p>

            {/* Quick Stats */}
            <div className="site-map__hero-stats">
              {[
                { value: totalRoutes, label: 'Total Pages' },
                { value: sectionCount, label: 'Sections' },
                { value: blogPosts.length, label: 'Blog Posts' },
                { value: portfolioArchiveItems.length, label: 'Projects' },
                { value: testimonialEntries.length, label: 'Testimonials' },
                { value: allProducts.length, label: 'Products' },
              ].map((stat, i) => (
                <div key={i} className="site-map__hero-stat">
                  <span className="site-map__hero-stat-value">{stat.value}</span>
                  <span className="site-map__hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Jump Nav */}
      <Section spacing="md" className="site-map__jump-nav-section">
        <Container>
          <nav className="site-map__jump-nav" aria-label="Jump to section">
            {siteMapSections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.title}
                  href={`#section-${section.title.toLowerCase().replace(/[\s&/]+/g, '-')}`}
                  className="site-map__jump-link"
                >
                  <Icon size={14} />
                  <span>{section.title}</span>
                  <span className="site-map__jump-count">{section.pages.length}</span>
                </a>
              );
            })}
          </nav>
        </Container>
      </Section>

      {/* Card Grid */}
      <Section spacing="xl" className="site-map__grid-section">
        <Container>
          <div className="site-map__grid">
            {siteMapSections.map((section, sectionIndex) => {
              const Icon = section.icon;
              const anchorId = `section-${section.title.toLowerCase().replace(/[\s&/]+/g, '-')}`;

              return (
                <div key={sectionIndex} className="site-map__card" id={anchorId}>
                  {/* Card Header */}
                  <div className="site-map__card-header">
                    <div className="site-map__card-icon" style={{ color: section.color }}>
                      <Icon size={20} />
                    </div>

                    <h2 className="site-map__card-title">{section.title}</h2>

                    <span className="site-map__card-count">{section.pages.length}</span>
                  </div>

                  {/* Pages List */}
                  <div className="site-map__card-body">
                    <ul className="site-map__list">
                      {section.pages.map((page, pageIndex) => {
                        const path = resolvePath(page, section.title);

                        return (
                          <li key={pageIndex}>
                            <Link to={path} className="site-map__link">
                              <CheckCircle
                                size={14}
                                className="site-map__link-icon site-map__icon--success"
                              />
                              <span className="site-map__link-label">{page.label}</span>
                              <ChevronRight
                                size={14}
                                className="site-map__link-arrow"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Statistics */}
      <Section spacing="xl" className="site-map__stats">
        <Container>
          <div className="site-map__stats-inner">
            <h2 className="site-map__stats-title">Site Statistics</h2>

            <div className="site-map__stats-grid">
              {[
                { label: 'Total Pages', value: totalRoutes, color: 'var(--category-violet)' },
                { label: 'Active', value: activeRoutes, color: 'var(--category-green)' },
                { label: 'Sections', value: sectionCount, color: 'var(--category-amber)' },
                { label: 'Content Types', value: 8, color: 'var(--category-blue)' },
              ].map((stat, i) => (
                <div key={i} className="site-map__stat-card">
                  <div className="site-map__stat-value" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="site-map__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="xl" className="site-map__cta-section">
        <Container>
          <div className="site-map__cta-inner">
            <h2 className="site-map__cta-title">Need Help Finding Something?</h2>

            <p className="site-map__cta-text">
              Can't find what you're looking for? Try the search page or explore
              our developer tools for a complete system overview.
            </p>

            <div className="site-map__cta-buttons">
              <Button page="search" size="lg">
                <Search size={18} />
                Search Site
              </Button>
              <Button page="dev-tools" size="lg" variant="outline">
                <Wrench size={18} />
                Dev Tools
              </Button>
              <Button page="front-page" size="lg" variant="outline">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default SiteMapTemplate;