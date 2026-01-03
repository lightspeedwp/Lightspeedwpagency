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
import { useNavigation } from '../../contexts/NavigationContext';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { BackToTopButton } from '../ui/BackToTopButton';
import { Breadcrumbs } from '../common/Breadcrumbs';
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
 * Component  categories organized by type and usage
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
      { name: 'Breadcrumbs', file: '/common/Breadcrumbs.tsx', description: 'Navigation breadcrumb trail', usage: 'Page navigation' },
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
  const { navigateTo } = useNavigation();
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
      {/* Skip Link for Accessibility */}
      <SkipLink targetId="main-content" />

      {/* Site Header */}
      <SiteHeader />

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Hero Header */}
        <Section variant="default" spacing="50">
          <Container>
            {/* Breadcrumbs */}
            <Breadcrumbs
              items={[
                { label: 'Home', page: 'home' },
                { label: 'Developer Tools', page: 'dev-tools' },
                { label: 'Component Showcase' }
              ]}
              className="mb-8"
            />
            
            <div className="text-center max-w-4xl mx-auto">
              <h1
                style={{
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  margin: '0 0 16px 0',
                  lineHeight: 1.2
                }}
              >
                Component Showcase
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--muted-foreground)',
                  margin: '0 0 48px 0',
                  lineHeight: 1.5
                }}
              >
                Complete library of reusable components, patterns, and blocks in the LSX Design system
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--text-h1)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary)',
                      lineHeight: 1,
                      marginBottom: '12px'
                    }}
                  >
                    {totalComponents}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    Total Components
                  </div>
                </div>

                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--text-h1)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary)',
                      lineHeight: 1,
                      marginBottom: '12px'
                    }}
                  >
                    {componentCategories.length}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    Categories
                  </div>
                </div>

                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--text-h1)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary)',
                      lineHeight: 1,
                      marginBottom: '12px'
                    }}
                  >
                    15
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    Patterns
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Toolbar: Search & Filters */}
        <Section variant="default" spacing="30">
          <Container>
            <div className="flex flex-col gap-6">
              {/* Search */}
              <div className="relative">
                <Search
                  size={20}
                  style={{
                    position: 'absolute',
                    left: '16px',
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
                    padding: '12px 16px 12px 48px',
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-lg)',
                    fontFamily: 'Lexend, sans-serif',
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
              <div className="flex flex-wrap items-center gap-3">
                <span
                  style={{
                    fontSize: 'var(--text-base)',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--foreground)'
                  }}
                >
                  Filter:
                </span>
                {(['all', 'common', 'patterns', 'blocks', 'parts', 'ui'] as FilterType[]).map((filterType) => (
                  <button
                    key={filterType}
                    onClick={() => setFilter(filterType)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: filter === filterType ? 'var(--primary)' : 'var(--background)',
                      color: filter === filterType ? 'var(--primary-foreground)' : 'var(--foreground)',
                      border: `1px solid ${filter === filterType ? 'var(--primary)' : 'var(--border-soft)'}`,
                      borderRadius: 'var(--radius-lg)',
                      fontFamily: 'Lexend, sans-serif',
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
                <Button
                  variant="outline"
                  size="md"
                  page="template-tester"
                  icon={Code}
                  aria-label="Back to Template Tester"
                  style={{ marginLeft: 'auto' }}
                >
                  Template Tester
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Component Categories */}
        {filteredCategories.map((category) => (
          <Section key={category.id} variant="default" spacing="50">
            <Container>
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
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
                  <h2
                    style={{
                      fontSize: 'var(--text-h2)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      margin: '0 0 8px 0',
                      lineHeight: 1.25
                    }}
                  >
                    {category.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      margin: 0,
                      lineHeight: 1.5
                    }}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Components Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.components.map((component) => (
                  <div
                    key={component.name}
                    style={{
                      padding: '20px',
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <h3
                        style={{
                          fontSize: 'var(--text-base)',
                          fontFamily: 'Lexend, sans-serif',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                          margin: 0,
                          lineHeight: 1.5
                        }}
                      >
                        {component.name}
                      </h3>
                      <span
                        style={{
                          fontSize: 'var(--text-small)',
                          fontFamily: 'Manrope, sans-serif',
                          fontWeight: 'var(--font-weight-regular)',
                          color: 'var(--muted-foreground)',
                          padding: '2px 8px',
                          backgroundColor: 'var(--background)',
                          borderRadius: 'var(--radius)',
                          border: '1px solid var(--border-soft)'
                        }}
                      >
                        {component.usage}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 'var(--font-weight-regular)',
                        color: 'var(--muted-foreground)',
                        margin: 0,
                        lineHeight: 1.6
                      }}
                    >
                      {component.description}
                    </p>

                    <code
                      style={{
                        fontSize: 'var(--text-small)',
                        fontFamily: 'monospace',
                        color: 'var(--primary)',
                        padding: '4px 8px',
                        backgroundColor: 'var(--background)',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border-soft)',
                        display: 'block',
                        overflow: 'auto'
                      }}
                    >
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
          <Section variant="default" spacing="50">
            <Container>
              <div
                style={{
                  padding: '64px 32px',
                  textAlign: 'center',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <p
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--muted-foreground)',
                    margin: 0
                  }}
                >
                  No components found matching "{searchTerm}"
                </p>
              </div>
            </Container>
          </Section>
        )}

        {/* Footer Note */}
        <Section variant="canvas" spacing="50">
          <Container>
            <div
              style={{
                padding: '24px',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)',
                textAlign: 'center'
              }}
            >
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                  lineHeight: 1.5
                }}
              >
                All components use 100% CSS variables from <code style={{
                  fontFamily: 'monospace',
                  fontSize: 'var(--text-small)',
                  padding: '2px 6px',
                  backgroundColor: 'var(--background)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border-soft)'
                }}>theme.css</code> • Lexend/Manrope fonts • WCAG 2.1 AA compliant • WordPress FSE compatible
              </p>
            </div>
          </Container>
        </Section>
      </main>

      {/* Site Footer */}
      <SiteFooter />
      <BackToTopButton />
    </div>
  );
}