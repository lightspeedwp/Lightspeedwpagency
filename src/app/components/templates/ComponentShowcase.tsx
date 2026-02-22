/**
 * Component Showcase — LSX Design Component Library
 * 
 * Complete showcase of all reusable components, patterns, blocks, and UI elements
 * in the LSX Design system. Organized by component type with live examples and filtering.
 * 
 * **Component Categories:**
 * - Common Components (Container, Section, Button, etc.)
 * - Patterns (Hero, CTA, FAQ, Testimonials, etc.)
 * - Blocks (WordPress core blocks as React components)
 * - Template Parts (Header, Footer, Breadcrumbs)
 * - UI Components (PageSwitcher, BackToTop, StyleSwitcher)
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body, Manrope for small text
 * - WCAG 2.1 AA compliant
 * - Responsive grid layout
 * 
 * @see {@link /guidelines/components/overview-components.md}
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';

import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useState } from 'react';
import {
  Layers,
  Box,
  Code,
  Layout,
  MousePointerClick,
  Palette,
  Zap,
  ArrowRight,
  Search,
  Grid3x3
} from 'lucide-react';


/**
 * Component categories organized by type and usage
 */
const componentCategories = [
  {
    id: 'common',
    title: 'Common Components',
    description: 'Token-enforcing wrapper components for consistent design',
    icon: Box,
    color: 'var(--primary)',
    components: [
      { name: 'Container', file: '/common/Container.tsx', description: 'Max-width container with responsive padding', usage: 'Layout structure' },
      { name: 'Section', file: '/common/Section.tsx', description: 'Vertical spacing and background variants', usage: 'Page sections' },
      { name: 'Heading', file: '/common/Heading.tsx', description: 'Typography component with semantic levels', usage: 'Headings H1-H6' },
      { name: 'SkipLink', file: '/common/SkipLink.tsx', description: 'Accessibility skip to content link', usage: 'A11y navigation' },
    ]
  },
  {
    id: 'patterns',
    title: 'Patterns',
    description: 'Reusable content patterns and sections',
    icon: Layers,
    color: 'var(--accent)',
    components: [
      { name: 'Hero', file: '/patterns/Hero.tsx', description: 'Page hero with title, description, and CTA', usage: 'Page headers' },
      { name: 'CTASection', file: '/patterns/CTASection.tsx', description: 'Call-to-action with primary/secondary buttons', usage: 'Conversion points' },
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
    ]
  },
  {
    id: 'blocks',
    title: 'WordPress Blocks',
    description: 'WordPress core blocks as React components',
    icon: Grid3x3,
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
    ]
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
    ]
  },
  {
    id: 'ui',
    title: 'UI Components',
    description: 'Interactive UI components and utilities',
    icon: MousePointerClick,
    color: 'var(--accent)',
    components: [
      { name: 'PageSwitcher', file: '/ui/PageSwitcher.tsx', description: 'Development page navigation tool', usage: 'Development only' },
      { name: 'BackToTopButton', file: '/ui/BackToTopButton.tsx', description: 'Scroll to top button', usage: 'Page navigation' },
      { name: 'StyleSwitcher', file: '/ui/StyleSwitcher.tsx', description: 'Light/dark mode toggle', usage: 'Theme switching' },
      { name: 'MobileFilterPopover', file: '/ui/MobileFilterPopover.tsx', description: 'Mobile filter menu', usage: 'Archive filtering' },
      { name: 'StickyBookCallButton', file: '/ui/StickyBookCallButton.tsx', description: 'Sticky CTA button', usage: 'Conversion optimization' },
    ]
  },
];

type FilterType = 'all' | 'common' | 'patterns' | 'blocks' | 'parts' | 'ui';

export function ComponentShowcase() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate total components
  const totalComponents = componentCategories.reduce((acc, cat) => acc + cat.components.length, 0);

  // Filter categories based on active filter and search term
  const filteredCategories = componentCategories.filter(category => {
    // Filter by category
    if (filter !== 'all' && category.id !== filter) return false;

    // Filter by search term
    if (searchTerm) {
      const hasMatch = category.components.some(comp =>
        comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (!hasMatch) return false;
    }

    return true;
  }).map(category => ({
    ...category,
    components: category.components.filter(comp =>
      !searchTerm ||
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Breadcrumbs */}
        <BreadcrumbPart
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Developer Tools', page: 'dev-tools' },
            { label: 'Component Showcase' },
          ]}
        />

        {/* Hero Header */}
        <Section background="default" spacing="lg">
          <Container>
            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <Heading
                level={1}
                className="wp-mb-4"
              >
                Component Showcase
              </Heading>

              <Paragraph
                className="showcase__subtitle wp-mb-12"
              >
                Complete library of reusable components, patterns, and blocks in the LSX Design system
              </Paragraph>

              {/* Stats */}
              <div className="wp-grid-3-cols wp-gap-8 wp-mb-12">
                <div className="showcase__stat-card">
                  <div className="showcase__stat-value">
                    {totalComponents}
                  </div>
                  <div className="showcase__stat-label">
                    Total Components
                  </div>
                </div>

                <div className="showcase__stat-card">
                  <div className="showcase__stat-value">
                    {componentCategories.length}
                  </div>
                  <div className="showcase__stat-label">
                    Categories
                  </div>
                </div>

                <div className="showcase__stat-card">
                  <div className="showcase__stat-value">
                    15
                  </div>
                  <div className="showcase__stat-label">
                    Patterns
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Toolbar: Search & Filters */}
        <Section background="default" spacing="sm">
          <Container>
            <div className="wp-flex wp-flex-col wp-gap-6">
              {/* Search */}
              <div className="wp-relative">
                <Search
                  size={20}
                  style={{
                    position: 'absolute',
                    left: 'var(--spacing-4)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--muted-foreground)'
                  }}
                />
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-3) var(--spacing-4) var(--spacing-3) var(--spacing-12)',
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-lg)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--foreground)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                />
              </div>

              {/* Filters */}
              <div className="wp-flex wp-flex-wrap wp-items-center wp-gap-3">
                <span className="showcase__filter-label">
                  Filter:
                </span>
                {(['all', 'common', 'patterns', 'blocks', 'parts', 'ui'] as FilterType[]).map((filterType) => (
                  <button
                    key={filterType}
                    onClick={() => setFilter(filterType)}
                    style={{
                      padding: 'var(--spacing-2) var(--spacing-4)',
                      backgroundColor: filter === filterType ? 'var(--primary)' : 'var(--background)',
                      color: filter === filterType ? 'var(--primary-foreground)' : 'var(--foreground)',
                      border: `1px solid ${filter === filterType ? 'var(--primary)' : 'var(--border-soft)'}`,
                      borderRadius: 'var(--radius-lg)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textTransform: 'capitalize'
                    }}
                    onMouseEnter={(e) => {
                      if (filter !== filterType) {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.backgroundColor = 'var(--card)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (filter !== filterType) {
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                        e.currentTarget.style.backgroundColor = 'var(--background)';
                      }
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid var(--ring)';
                      e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
                  >
                    {filterType}
                  </button>
                ))}
                <div style={{ marginLeft: 'auto' }}>
                  <Button
                    variant="outline"
                    size="md"
                    href="/template-tester"
                    icon={<Code size={16} />}
                    aria-label="Back to Template Tester"
                  >
                    Template Tester
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Component Categories */}
        {filteredCategories.map((category) => (
          <Section key={category.id} background="default" spacing="lg">
            <Container>
              {/* Category Header */}
              <div className="wp-flex wp-items-start wp-gap-4 wp-mb-8">
                <div
                  style={{
                    width: 'var(--spacing-12)',
                    height: 'var(--spacing-12)',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: category.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <category.icon
                    size={24}
                    style={{ color: 'var(--primary-foreground)' }}
                  />
                </div>
                <div>
                  <Heading level={2} className="wp-mb-2">
                    {category.title}
                  </Heading>
                  <Paragraph className="showcase__category-desc">
                    {category.description}
                  </Paragraph>
                </div>
              </div>

              {/* Components Grid */}
              <div className="wp-grid-3-cols wp-gap-4">
                {category.components.map((component) => (
                  <div
                    key={component.name}
                    className="showcase__card"
                  >
                    <div className="showcase__card-header">
                      <Heading level={3} className="showcase__card-title">
                        {component.name}
                      </Heading>
                      <span className="showcase__card-badge">
                        {component.usage}
                      </span>
                    </div>

                    <Paragraph className="showcase__card-desc">
                      {component.description}
                    </Paragraph>

                    <code className="showcase__card-code">
                      {component.file}
                    </code>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        ))}

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <Section background="default" spacing="lg">
            <Container>
              <div className="showcase__empty">
                <Paragraph className="showcase__empty-text">
                  No components found matching "{searchTerm}"
                </Paragraph>
              </div>
            </Container>
          </Section>
        )}

        {/* Footer Note */}
        <Section background="default" spacing="lg">
          <Container>
            <div className="showcase__footer-note">
              <Paragraph className="showcase__footer-text">
                All components use 100% CSS variables from <code className="showcase__inline-code">theme.css</code> • Lexend/Manrope fonts • WCAG 2.1 AA compliant • WordPress FSE compatible
              </Paragraph>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}