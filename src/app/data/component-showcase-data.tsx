/**
 * Component Showcase — Static Data
 *
 * Extracted from ComponentShowcase.tsx for data-content separation.
 * Contains all component category definitions with icon imports.
 *
 * @split March 17, 2026
 */

import type { ComponentType } from 'react';
import {
  Stack,
  Cube,
  GridNine,
  Layout,
  CursorClick,
} from '@phosphor-icons/react';

export interface ShowcaseComponent {
  name: string;
  file: string;
  description: string;
  usage: string;
}

export interface ComponentCategory {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  color: string;
  components: ShowcaseComponent[];
}

export const componentCategories: ComponentCategory[] = [
  {
    id: 'common',
    title: 'Common Components',
    description: 'Token-enforcing wrapper components for consistent design',
    icon: Cube,
    color: 'var(--primary)',
    components: [
      { name: 'Container', file: '/common/Container.tsx', description: 'Max-width container with responsive padding', usage: 'Layout structure' },
      { name: 'Section', file: '/common/Section.tsx', description: 'Vertical spacing and background variants', usage: 'Page sections' },
      { name: 'Heading', file: '/common/Heading.tsx', description: 'Typography component with semantic levels', usage: 'Headings H1-H6' },
      { name: 'SkipLink', file: '/common/SkipLink.tsx', description: 'Accessibility skip to content link', usage: 'A11y navigation' },
    ],
  },
  {
    id: 'patterns',
    title: 'Patterns',
    description: 'Reusable content patterns and sections',
    icon: Stack,
    color: 'var(--accent)',
    components: [
      { name: 'Hero', file: '/patterns/Hero.tsx', description: 'Page hero with title, description, and CTA', usage: 'Page headers' },
      { name: 'FunkyCTA', file: '/patterns/FunkyCTA.tsx', description: 'Call-to-action with primary/secondary buttons', usage: 'Conversion points' },
      { name: 'FAQSection', file: '/patterns/FAQSection.tsx', description: 'Collapsible FAQ accordion', usage: 'Help content' },
      { name: 'TestimonialGrid', file: '/patterns/TestimonialGrid.tsx', description: 'Client testimonials with ratings', usage: 'Social proof' },
      { name: 'SocialProof', file: '/patterns/SocialProof.tsx', description: 'Client logos and trust badges', usage: 'Trust building' },
      { name: 'NewsletterSignup', file: '/patterns/NewsletterSignup.tsx', description: 'Email subscription form', usage: 'Lead generation' },
      { name: 'PricingTable', file: '/patterns/PricingTable.tsx', description: 'Pricing cards with features', usage: 'Product pricing' },
      { name: 'CTAInline', file: '/patterns/CTAInline.tsx', description: 'Compact inline CTA', usage: 'Mid-content conversion' },
      { name: 'FeatureComparison', file: '/patterns/FeatureComparison.tsx', description: 'Feature comparison table', usage: 'Product comparison' },
      { name: 'ProcessTimeline', file: '/patterns/ProcessTimeline.tsx', description: 'Step-by-step process visualization', usage: 'Process display' },
      { name: 'TeamGrid', file: '/patterns/TeamGrid.tsx', description: 'Team member cards with photos', usage: 'Team pages' },
      { name: 'CaseStudyPreview', file: '/patterns/CaseStudyPreview.tsx', description: 'Portfolio case study cards', usage: 'Portfolio displays' },
      { name: 'ContactForm', file: '/patterns/ContactForm.tsx', description: 'Multi-field contact form', usage: 'Contact pages' },
      { name: 'ArchiveCTA', file: '/patterns/ArchiveCTA.tsx', description: 'Archive-specific conversion CTA', usage: 'Archive pages' },
      { name: 'ServicesCard', file: '/patterns/ServicesCard.tsx', description: 'Service offering cards', usage: 'Services pages' },
    ],
  },
  {
    id: 'blocks',
    title: 'WordPress Blocks',
    description: 'WordPress core blocks as React components',
    icon: GridNine,
    color: 'var(--secondary)',
    components: [
      { name: 'Button/Buttons', file: '/blocks/design/Buttons.tsx', description: 'WordPress button block', usage: 'CTAs and links' },
      { name: 'Group', file: '/blocks/container/Group.tsx', description: 'WordPress group block', usage: 'Content grouping' },
      { name: 'Stack', file: '/blocks/container/Stack.tsx', description: 'WordPress stack layout', usage: 'Vertical stacking' },
      { name: 'Row', file: '/blocks/container/Row.tsx', description: 'WordPress row layout', usage: 'Horizontal alignment' },
      { name: 'Grid', file: '/blocks/container/Grid.tsx', description: 'WordPress grid block', usage: 'Grid layouts' },
      { name: 'Columns', file: '/blocks/container/Columns.tsx', description: 'WordPress columns block', usage: 'Column layouts' },
      { name: 'SiteLogo', file: '/blocks/theme/SiteLogo.tsx', description: 'Site logo with theme switching', usage: 'Headers/footers' },
      { name: 'SiteTitle', file: '/blocks/theme/SiteTitle.tsx', description: 'Site title block', usage: 'Branding' },
      { name: 'SiteTagline', file: '/blocks/theme/SiteTagline.tsx', description: 'Site tagline block', usage: 'Branding' },
      { name: 'SearchBlock', file: '/blocks/theme/Search.tsx', description: 'Search input block', usage: 'Search functionality' },
      { name: 'Navigation', file: '/blocks/theme/Navigation.tsx', description: 'Navigation menu block', usage: 'Site navigation' },
      { name: 'TemplatePart', file: '/blocks/theme/TemplatePart.tsx', description: 'Reusable template part', usage: 'Headers/footers' },
    ],
  },
  {
    id: 'parts',
    title: 'Template Parts',
    description: 'Reusable template parts (header, footer, etc.)',
    icon: Layout,
    color: 'var(--primary)',
    components: [
      { name: 'SiteHeader', file: '/parts/SiteHeader.tsx', description: 'Site header with mega menu navigation', usage: 'Page headers' },
      { name: 'SiteFooter', file: '/parts/SiteFooter.tsx', description: 'Site footer with links and newsletter', usage: 'Page footers' },
    ],
  },
  {
    id: 'ui',
    title: 'UI Components',
    description: 'Interactive UI components and utilities',
    icon: CursorClick,
    color: 'var(--accent)',
    components: [
      { name: 'PageSwitcher', file: '/ui/PageSwitcher.tsx', description: 'Development page navigation tool', usage: 'Development only' },
      { name: 'BackToTopButton', file: '/ui/BackToTopButton.tsx', description: 'Scroll to top button', usage: 'Page navigation' },
      { name: 'StyleSwitcher', file: '/ui/StyleSwitcher.tsx', description: 'Light/dark mode toggle', usage: 'Theme switching' },
      { name: 'MobileFilterPopover', file: '/ui/MobileFilterPopover.tsx', description: 'Mobile filter menu', usage: 'Archive filtering' },
      { name: 'StickyBookCallButton', file: '/ui/StickyBookCallButton.tsx', description: 'Sticky CTA button', usage: 'Conversion optimization' },
    ],
  },
];
