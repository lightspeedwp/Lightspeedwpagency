/**
 * Block Documentation Template
 * 
 * Comprehensive documentation for all WordPress blocks in the LSX Design system.
 * Documents design blocks (Buttons, Heading, Image) and theme blocks (Site Title,
 * Site Logo, Navigation, etc.)
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings, Manrope for body text
 * - WCAG 2.1 AA compliant
 * 
 * **WordPress Mapping:**
 * - Template: page.html
 * - Documentation tool
 * 
 * @see {@link /guidelines/blocks/overview-blocks.md}
 */

import '../../../styles/templates/design-blocks-showcase.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useState } from 'react';
import {
  FileText,
  Code,
  ArrowRight,
  Check
} from '@phosphor-icons/react';
import { blockCategories } from '../../data/block-documentation-data';

export function BlockDocumentation() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? blockCategories
    : blockCategories.filter(cat => cat.id === selectedCategory);

  const totalBlocks = blockCategories.reduce((sum, cat) => sum + cat.blocks.length, 0);

  return (
    <div className="wp-min-h-screen wp-flex wp-flex-col wp-bg-background wp-text-foreground">
      <div className="wp-flex wp-flex-col">
        {/* Breadcrumbs */}
        <BreadcrumbPart
          items={[
            { label: 'Home', page: 'home' },
            { label: 'Developer Tools', page: 'dev-tools' },
            { label: 'Block Documentation' },
          ]}
        />

        {/* Header */}
        <Section background="default" spacing="lg">
          <Container>
            <div className="design-blocks-showcase__header">
              <div className="design-blocks-showcase__icon">
                <FileText size={40} />
              </div>

              <Heading level={1} className="wp-mb-4">
                Block Documentation
              </Heading>

              <Paragraph className="showcase__subtitle wp-mb-12">
                Complete documentation for all WordPress blocks in the LSX Design system
              </Paragraph>

              {/* Stats */}
              <div className="wp-grid-3-cols wp-gap-8">
                <div className="showcase__stat-card">
                  <div className="showcase__stat-value">
                    {totalBlocks}
                  </div>
                  <div className="showcase__stat-label">
                    Total Blocks
                  </div>
                </div>

                <div className="showcase__stat-card">
                  <div className="showcase__stat-value">
                    {blockCategories.length}
                  </div>
                  <div className="showcase__stat-label">
                    Categories
                  </div>
                </div>

                <div className="showcase__stat-card">
                  <div className="showcase__stat-value">
                    100%
                  </div>
                  <div className="showcase__stat-label">
                    FSE Compatible
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Filters */}
        <Section background="default" spacing="sm">
          <Container>
            <div className="wp-flex wp-flex-wrap wp-items-center wp-gap-3">
              <span className="showcase__filter-label">
                Filter by:
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`wp-px-4 wp-py-2 wp-rounded-lg wp-font-primary wp-text-base wp-font-medium wp-transition-all wp-duration-200 wp-cursor-pointer wp-border focus:wp-outline-none focus-visible:wp-ring-2 focus-visible:wp-ring-ring focus-visible:wp-ring-offset-2 ${
                  selectedCategory === 'all'
                    ? 'wp-bg-primary wp-text-primary-foreground wp-border-primary'
                    : 'wp-bg-background wp-text-foreground wp-border-border-soft hover:wp-border-primary hover:wp-bg-card'
                }`}
              >
                All Blocks
              </button>
              {blockCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`wp-px-4 wp-py-2 wp-rounded-lg wp-font-primary wp-text-base wp-font-medium wp-transition-all wp-duration-200 wp-cursor-pointer wp-border focus:wp-outline-none focus-visible:wp-ring-2 focus-visible:wp-ring-ring focus-visible:wp-ring-offset-2 ${
                    selectedCategory === cat.id
                      ? 'wp-bg-primary wp-text-primary-foreground wp-border-primary'
                      : 'wp-bg-background wp-text-foreground wp-border-border-soft hover:wp-border-primary hover:wp-bg-card'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </Container>
        </Section>

        {/* Block Categories */}
        {filteredCategories.map((category) => (
          <Section key={category.id} variant="default" spacing="50">
            <Container>
              <div className="wp-mb-8">
                <Heading level={2} className="wp-mb-2">
                  {category.name}
                </Heading>
                <Paragraph className="showcase__category-desc wp-m-0">
                  {category.description}
                </Paragraph>
              </div>

              <div className="wp-grid-1-col wp-gap-6">
                {category.blocks.map((block) => (
                  <div
                    key={block.id}
                    className="showcase__block-card"
                  >
                    <div className="wp-flex wp-items-start wp-gap-4">
                      <div className="showcase__block-icon-wrapper">
                        <block.icon size={24} className="wp-text-primary-foreground" />
                      </div>

                      <div className="showcase__block-content">
                        <Heading level={3} className="wp-mb-2">
                          {block.name}
                        </Heading>
                        <Paragraph className="showcase__category-desc wp-mb-4">
                          {block.description}
                        </Paragraph>

                        <div className="wp-grid-3-cols wp-gap-4">
                          <div>
                            <div className="showcase__block-meta-label">
                              Props
                            </div>
                            <div className="wp-flex wp-flex-wrap wp-gap-2">
                              {block.props.map((prop) => (
                                <span
                                  key={prop}
                                  className="showcase__prop-tag"
                                >
                                  {prop}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="showcase__block-meta-label">
                              Common Usage
                            </div>
                            <div className="showcase__stat-label">
                              {block.usage}
                            </div>
                          </div>

                          <div>
                            <div className="showcase__block-meta-label">
                              File Location
                            </div>
                            <code className="showcase__file-path">
                              {block.file}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        ))}
      </div>
    </div>
  );
}