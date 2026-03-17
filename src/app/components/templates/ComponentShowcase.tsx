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
 * @see {@link /guidelines/components/components-vs-patterns.md}
 */

import '../../../styles/templates/component-showcase-optimized.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';

import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useState } from 'react';
import {
  Code,
  MagnifyingGlass,
} from '@phosphor-icons/react';
import { componentCategories } from '../../data/component-showcase-data';

/**
 * Component categories organized by type and usage
 */
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
    <div className="wp-min-h-screen wp-flex wp-flex-col wp-bg-background wp-text-foreground">
      {/* Main Content */}
      <div className="wp-flex wp-flex-col">
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
                <MagnifyingGlass
                  size={20}
                  className="wp-absolute wp-left-4 wp-top-1/2 wp--translate-y-1/2 wp-text-muted-foreground wp-pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="wp-w-full wp-pl-12 wp-pr-4 wp-py-3 wp-bg-background wp-border wp-border-border-soft wp-rounded-lg wp-font-primary wp-text-base wp-text-foreground wp-outline-none focus:wp-border-primary wp-transition-colors wp-duration-200"
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
                    className={`wp-px-4 wp-py-2 wp-rounded-lg wp-font-primary wp-text-base wp-font-medium wp-capitalize wp-transition-all wp-duration-200 wp-cursor-pointer wp-border focus:wp-outline-none focus-visible:wp-ring-2 focus-visible:wp-ring-ring focus-visible:wp-ring-offset-2 ${
                      filter === filterType 
                        ? 'wp-bg-primary wp-text-primary-foreground wp-border-primary' 
                        : 'wp-bg-background wp-text-foreground wp-border-border-soft hover:wp-border-primary hover:wp-bg-card'
                    }`}
                  >
                    {filterType}
                  </button>
                ))}
                <div className="wp-ml-auto">
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
                  className="wp-w-12 wp-h-12 wp-rounded-lg wp-flex wp-items-center wp-justify-center wp-shrink-0"
                  style={{
                    backgroundColor: category.color
                  }}
                >
                  <category.icon
                    size={24}
                    className="wp-text-primary-foreground"
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