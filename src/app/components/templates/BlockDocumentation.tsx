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
  Type,
  Image as ImageIcon,
  Layout,
  Grid,
  ArrowRight,
  Check
} from 'lucide-react';


/**
 * WordPress Blocks Catalog
 */
const blockCategories = [
  {
    id: 'design',
    name: 'Design Blocks',
    description: 'Core design blocks for content creation',
    blocks: [
      {
        id: 'buttons',
        name: 'Buttons Block',
        icon: Type,
        description: 'WordPress Buttons block with 3 size variants (sm, md, lg)',
        props: ['variant', 'size', 'alignment', 'orientation'],
        usage: 'CTAs, navigation, forms',
        file: '/src/app/components/blocks/design/Buttons.tsx'
      },
      {
        id: 'heading',
        name: 'Heading Block',
        icon: Type,
        description: 'WordPress Heading block with H1-H6 levels',
        props: ['level', 'textAlign', 'content'],
        usage: 'Section titles, page headings',
        file: '/src/app/components/blocks/design/Heading.tsx'
      },
      {
        id: 'image',
        name: 'Image Block',
        icon: ImageIcon,
        description: 'WordPress Image block with alt text and captions',
        props: ['src', 'alt', 'caption', 'width', 'height'],
        usage: 'Content images, featured images',
        file: '/src/app/components/blocks/design/Image.tsx'
      }
    ]
  },
  {
    id: 'theme',
    name: 'Theme Blocks',
    description: 'WordPress FSE theme blocks',
    blocks: [
      {
        id: 'site-title',
        name: 'Site Title',
        icon: Type,
        description: 'Site title with link to homepage',
        props: ['level', 'isLink'],
        usage: 'Site header, branding',
        file: '/src/app/components/blocks/theme/SiteTitle.tsx'
      },
      {
        id: 'site-logo',
        name: 'Site Logo',
        icon: ImageIcon,
        description: 'Site logo with automatic theme switching (220px width)',
        props: ['width', 'height', 'isLink'],
        usage: 'Site header, footer',
        file: '/src/app/components/blocks/theme/SiteLogo.tsx'
      },
      {
        id: 'site-tagline',
        name: 'Site Tagline',
        icon: Type,
        description: 'Site tagline/description',
        props: [],
        usage: 'Site header, branding',
        file: '/src/app/components/blocks/theme/SiteTagline.tsx'
      },
      {
        id: 'navigation',
        name: 'Navigation',
        icon: Layout,
        description: 'WordPress Navigation block with mega menus',
        props: ['menuLocation', 'orientation', 'showSubMenus'],
        usage: 'Site header, footer navigation',
        file: '/src/app/components/blocks/theme/Navigation.tsx'
      },
      {
        id: 'search',
        name: 'Search',
        icon: Code,
        description: 'WordPress Search block',
        props: ['label', 'placeholder', 'buttonText'],
        usage: 'Site header, search pages',
        file: '/src/app/components/blocks/theme/Search.tsx'
      },
      {
        id: 'template-part',
        name: 'Template Part',
        icon: Layout,
        description: 'WordPress Template Part block for headers/footers',
        props: ['slug', 'theme', 'area'],
        usage: 'Site structure, reusable parts',
        file: '/src/app/components/blocks/theme/TemplatePart.tsx'
      }
    ]
  },
  {
    id: 'container',
    name: 'Container Blocks',
    description: 'Layout and structure blocks',
    blocks: [
      {
        id: 'group',
        name: 'Group',
        icon: Grid,
        description: 'WordPress Group block for grouping content',
        props: ['tagName', 'layout', 'backgroundColor'],
        usage: 'Content sections, layout',
        file: '/src/app/components/blocks/container/Group.tsx'
      },
      {
        id: 'stack',
        name: 'Stack',
        icon: Grid,
        description: 'Vertical stack layout',
        props: ['spacing', 'orientation'],
        usage: 'Vertical content flow',
        file: '/src/app/components/blocks/container/Stack.tsx'
      },
      {
        id: 'row',
        name: 'Row',
        icon: Grid,
        description: 'Horizontal row layout',
        props: ['spacing', 'wrap', 'verticalAlignment'],
        usage: 'Horizontal content flow',
        file: '/src/app/components/blocks/container/Row.tsx'
      },
      {
        id: 'grid',
        name: 'Grid',
        icon: Grid,
        description: 'CSS Grid layout',
        props: ['columns', 'gap', 'minItemWidth'],
        usage: 'Card grids, galleries',
        file: '/src/app/components/blocks/container/Grid.tsx'
      },
      {
        id: 'columns',
        name: 'Columns',
        icon: Grid,
        description: 'WordPress Columns block',
        props: ['columns', 'isStackedOnMobile'],
        usage: 'Multi-column layouts',
        file: '/src/app/components/blocks/container/Columns.tsx'
      }
    ]
  }
];

export function BlockDocumentation() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? blockCategories
    : blockCategories.filter(cat => cat.id === selectedCategory);

  const totalBlocks = blockCategories.reduce((sum, cat) => sum + cat.blocks.length, 0);

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
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
            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <div
                className="wp-inline-flex wp-items-center wp-justify-center wp-mb-6"
                style={{
                  width: 'var(--spacing-20)',
                  height: 'var(--spacing-20)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--secondary)'
                }}
              >
                <FileText size={40} style={{ color: 'var(--primary-foreground)' }} />
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
                style={{
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  backgroundColor: selectedCategory === 'all' ? 'var(--primary)' : 'var(--background)',
                  color: selectedCategory === 'all' ? 'var(--primary-foreground)' : 'var(--foreground)',
                  border: `1px solid ${selectedCategory === 'all' ? 'var(--primary)' : 'var(--border-soft)'}`,
                  borderRadius: 'var(--radius-lg)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                All Blocks
              </button>
              {blockCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    backgroundColor: selectedCategory === cat.id ? 'var(--primary)' : 'var(--background)',
                    color: selectedCategory === cat.id ? 'var(--primary-foreground)' : 'var(--foreground)',
                    border: `1px solid ${selectedCategory === cat.id ? 'var(--primary)' : 'var(--border-soft)'}`,
                    borderRadius: 'var(--radius-lg)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
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
                        <block.icon size={24} style={{ color: 'var(--primary-foreground)' }} />
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