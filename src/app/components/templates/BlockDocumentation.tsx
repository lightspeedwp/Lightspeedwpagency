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

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { useNavigation } from '../../contexts/NavigationContext';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Breadcrumbs } from '../common/Breadcrumbs';
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
  const { navigateTo } = useNavigation();
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
      <SkipLink targetId="main-content" />
      <SiteHeader />

      <main
        id="main-content"
        role="main"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <Section variant="default" spacing="50">
          <Container>
            <Breadcrumbs
              items={[
                { label: 'Home', page: 'home' },
                { label: 'Developer Tools', page: 'dev-tools' },
                { label: 'Block Documentation' }
              ]}
              className="mb-8"
            />

            <div className="text-center max-w-4xl mx-auto">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--secondary)',
                  marginBottom: '24px'
                }}
              >
                <FileText size={40} style={{ color: 'var(--primary-foreground)' }} />
              </div>

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
                Block Documentation
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
                Complete documentation for all WordPress blocks in the LSX Design system
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  style={{
                    padding: '24px',
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
                      marginBottom: '8px'
                    }}
                  >
                    {totalBlocks}
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
                    Total Blocks
                  </div>
                </div>

                <div
                  style={{
                    padding: '24px',
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
                      marginBottom: '8px'
                    }}
                  >
                    {blockCategories.length}
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
                    padding: '24px',
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
                      marginBottom: '8px'
                    }}
                  >
                    100%
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
                    FSE Compatible
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Filters */}
        <Section variant="default" spacing="30">
          <Container>
            <div className="flex flex-wrap items-center gap-3">
              <span
                style={{
                  fontSize: 'var(--text-base)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--foreground)'
                }}
              >
                Filter by:
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedCategory === 'all' ? 'var(--primary)' : 'var(--background)',
                  color: selectedCategory === 'all' ? 'var(--primary-foreground)' : 'var(--foreground)',
                  border: `1px solid ${selectedCategory === 'all' ? 'var(--primary)' : 'var(--border-soft)'}`,
                  borderRadius: 'var(--radius-lg)',
                  fontFamily: 'Lexend, sans-serif',
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
                    padding: '8px 16px',
                    backgroundColor: selectedCategory === cat.id ? 'var(--primary)' : 'var(--background)',
                    color: selectedCategory === cat.id ? 'var(--primary-foreground)' : 'var(--foreground)',
                    border: `1px solid ${selectedCategory === cat.id ? 'var(--primary)' : 'var(--border-soft)'}`,
                    borderRadius: 'var(--radius-lg)',
                    fontFamily: 'Lexend, sans-serif',
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
              <div className="mb-8">
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
                  {category.name}
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

              <div className="grid grid-cols-1 gap-6">
                {category.blocks.map((block) => (
                  <div
                    key={block.id}
                    style={{
                      padding: '24px',
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-lg)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <block.icon size={24} style={{ color: 'var(--primary-foreground)' }} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontSize: 'var(--text-h4)',
                            fontFamily: 'Lexend, sans-serif',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--foreground)',
                            margin: '0 0 8px 0',
                            lineHeight: 1.25
                          }}
                        >
                          {block.name}
                        </h3>
                        <p
                          style={{
                            fontSize: 'var(--text-base)',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 'var(--font-weight-regular)',
                            color: 'var(--muted-foreground)',
                            margin: '0 0 16px 0',
                            lineHeight: 1.5
                          }}
                        >
                          {block.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div
                              style={{
                                fontSize: 'var(--text-small)',
                                fontFamily: 'Lexend, sans-serif',
                                fontWeight: 'var(--font-weight-medium)',
                                color: 'var(--foreground)',
                                marginBottom: '4px'
                              }}
                            >
                              Props
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {block.props.map((prop) => (
                                <span
                                  key={prop}
                                  style={{
                                    fontSize: 'var(--text-small)',
                                    fontFamily: 'monospace',
                                    fontWeight: 'var(--font-weight-regular)',
                                    color: 'var(--primary)',
                                    padding: '2px 8px',
                                    backgroundColor: 'var(--background)',
                                    borderRadius: 'var(--radius)',
                                    border: '1px solid var(--border-soft)'
                                  }}
                                >
                                  {prop}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div
                              style={{
                                fontSize: 'var(--text-small)',
                                fontFamily: 'Lexend, sans-serif',
                                fontWeight: 'var(--font-weight-medium)',
                                color: 'var(--foreground)',
                                marginBottom: '4px'
                              }}
                            >
                              Common Usage
                            </div>
                            <div
                              style={{
                                fontSize: 'var(--text-base)',
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--muted-foreground)'
                              }}
                            >
                              {block.usage}
                            </div>
                          </div>

                          <div>
                            <div
                              style={{
                                fontSize: 'var(--text-small)',
                                fontFamily: 'Lexend, sans-serif',
                                fontWeight: 'var(--font-weight-medium)',
                                color: 'var(--foreground)',
                                marginBottom: '4px'
                              }}
                            >
                              File Location
                            </div>
                            <code
                              style={{
                                fontSize: 'var(--text-small)',
                                fontFamily: 'monospace',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--muted-foreground)',
                                display: 'block',
                                wordBreak: 'break-all'
                              }}
                            >
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
      </main>

      <SiteFooter />
      <BackToTopButton />
    </div>
  );
}