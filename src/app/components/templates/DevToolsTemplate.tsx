/**
 * Dev Tools Landing Page Template
 * 
 * Central hub for all developer tools and utilities.
 * 
 * Features:
 * - Complete dev tools index
 * - Quick access cards
 * - Tool categories
 * - Search/filter functionality
 * - Breadcrumb navigation
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * WordPress Mapping:
 * - Template: page-dev-tools.php
 * - URL: /dev-tools/
 * - Breadcrumb: Home > Dev Tools
 */

import { Code2, TestTube2, Eye, FileCode2, Puzzle, Palette, Layout, Activity, ChevronRight, BookOpen, Blocks, MousePointer, Layers, Paintbrush } from 'lucide-react';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { useNavigation } from '../../contexts/NavigationContext';

interface DevTool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  category: 'Testing' | 'Development' | 'Design' | 'Documentation';
  badge?: string;
}

const devTools: DevTool[] = [
  // Testing Tools
  {
    id: 'template-tester',
    title: 'Template Tester',
    description: 'Test all 55+ templates with instant switching and live preview.',
    icon: <TestTube2 size={32} />,
    url: 'dev-tools/template-tester',
    category: 'Testing',
    badge: 'Essential',
  },
  {
    id: 'compliance-scorecard',
    title: 'Compliance Scorecard',
    description: 'Real-time WCAG 2.1 AA/AAA compliance testing with 26+ automated checks.',
    icon: <Activity size={32} />,
    url: 'dev-tools/compliance-scorecard',
    category: 'Testing',
    badge: 'Essential',
  },
  
  // Development Tools
  {
    id: 'component-showcase',
    title: 'Component Showcase',
    description: 'Browse all 85+ components with live examples and code snippets.',
    icon: <Puzzle size={32} />,
    url: 'dev-tools/component-showcase',
    category: 'Development',
  },
  {
    id: 'feature-showcase',
    title: 'Feature Showcase',
    description: 'Interactive demos of all 164 production features across 24 components.',
    icon: <Eye size={32} />,
    url: 'dev-tools/feature-showcase',
    category: 'Development',
  },
  {
    id: 'live-preview',
    title: 'Live Preview',
    description: 'Live component preview tool with interactive property editor.',
    icon: <MousePointer size={32} />,
    url: 'dev-tools/live-preview',
    category: 'Development',
  },
  
  // Design Tools
  {
    id: 'design-system-test',
    title: 'Design System Test',
    description: 'Complete design system testing suite with 107 automated tests and color contrast validation.',
    icon: <Palette size={32} />,
    url: 'dev-tools/design-system-test',
    category: 'Design',
    badge: 'Essential',
  },
  {
    id: 'design-blocks-showcase',
    title: 'Design Blocks Showcase',
    description: 'All design blocks (Buttons, Heading, Paragraph, etc.) with live preview.',
    icon: <Layout size={32} />,
    url: 'dev-tools/design-blocks-showcase',
    category: 'Design',
  },
  {
    id: 'theme-blocks-showcase',
    title: 'Theme Blocks Showcase',
    description: 'Showcase all WordPress theme blocks (Site Logo, Navigation, etc.).',
    icon: <Blocks size={32} />,
    url: 'dev-tools/theme-blocks-showcase',
    category: 'Design',
  },
  {
    id: 'button-showcase',
    title: 'Button Showcase',
    description: 'Complete button system showcase with all 5 variants and 3 sizes (WCAG AAA compliant).',
    icon: <MousePointer size={32} />,
    url: 'dev-tools/button-showcase',
    category: 'Design',
  },
  {
    id: 'section-presets-showcase',
    title: 'Section Presets Showcase',
    description: 'Showcase all 17 section style presets with WordPress FSE mapping.',
    icon: <Layers size={32} />,
    url: 'dev-tools/section-presets-showcase',
    category: 'Design',
  },
  {
    id: 'header-footer-comparison',
    title: 'Header/Footer Comparison',
    description: 'Compare all header and footer template variations side-by-side.',
    icon: <Layout size={32} />,
    url: 'dev-tools/header-footer-comparison',
    category: 'Design',
  },
  {
    id: 'icon-library',
    title: 'Icon Library',
    description: 'Complete Lucide React icon reference with copy-paste code snippets.',
    icon: <Paintbrush size={32} />,
    url: 'dev-tools/icon-library',
    category: 'Design',
  },
  {
    id: 'style-guide',
    title: 'Style Guide',
    description: 'Complete visual style guide with typography, colors, and spacing tokens.',
    icon: <BookOpen size={32} />,
    url: 'dev-tools/style-guide',
    category: 'Design',
  },
  
  // Documentation Tools
  {
    id: 'block-documentation',
    title: 'Block Documentation',
    description: 'Complete WordPress block library with usage examples and guidelines.',
    icon: <FileCode2 size={32} />,
    url: 'dev-tools/block-documentation',
    category: 'Documentation',
  },
  {
    id: 'component-api',
    title: 'Component API',
    description: 'TypeScript interfaces and complete API reference for all components.',
    icon: <Code2 size={32} />,
    url: 'dev-tools/component-api',
    category: 'Documentation',
  },
];

export function DevToolsTemplate() {
  const { navigateTo } = useNavigation();

  const breadcrumbs = [
    { label: 'Home', url: 'home' },
    { label: 'Dev Tools', url: 'dev-tools' },
  ];

  const categories = Array.from(new Set(devTools.map(tool => tool.category)));

  return (
    <>
      <SiteHeader />

      <main id="main-content" style={{ backgroundColor: 'var(--background)' }}>
        {/* Breadcrumbs */}
        <div
          className="px-6 py-4"
          style={{
            backgroundColor: 'var(--muted)',
            borderBottom: '1px solid var(--border-soft)',
          }}
        >
          <div className="mx-auto" style={{ maxWidth: '1400px' }}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-16">
          <div className="mx-auto" style={{ maxWidth: '1400px' }}>
            <div className="mb-8 text-center">
              <h1
                className="mb-4"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                Developer Tools
              </h1>

              <p
                className="mx-auto"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-xl)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
              >
                Complete suite of developer tools for testing, debugging, and documenting the LSX Design System
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div
                className="p-6 text-center"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary)',
                    marginBottom: '8px',
                  }}
                >
                  47
                </div>
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Templates
                </div>
              </div>

              <div
                className="p-6 text-center"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary)',
                    marginBottom: '8px',
                  }}
                >
                  164
                </div>
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Features
                </div>
              </div>

              <div
                className="p-6 text-center"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary)',
                    marginBottom: '8px',
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Compliant
                </div>
              </div>

              <div
                className="p-6 text-center"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary)',
                    marginBottom: '8px',
                  }}
                >
                  26+
                </div>
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  Tests
                </div>
              </div>
            </div>

            {/* Tools by Category */}
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h2
                  className="mb-6 flex items-center gap-3"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    margin: 0,
                    paddingBottom: '12px',
                    borderBottom: '2px solid var(--border)',
                  }}
                >
                  {category}
                  <span
                    className="px-2 py-1"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: 'var(--muted)',
                      color: 'var(--muted-foreground)',
                      borderRadius: 'var(--radius)',
                    }}
                  >
                    {devTools.filter(tool => tool.category === category).length}
                  </span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {devTools
                    .filter(tool => tool.category === category)
                    .map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => navigateTo(tool.url)}
                        className="group text-left p-6"
                        style={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border-soft)',
                          borderRadius: 'var(--radius-lg)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          width: '100%',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border-soft)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* Icon & Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className="p-3"
                            style={{
                              backgroundColor: 'var(--primary-soft)',
                              color: 'var(--primary)',
                              borderRadius: 'var(--radius-lg)',
                            }}
                          >
                            {tool.icon}
                          </div>

                          {tool.badge && (
                            <span
                              className="px-2 py-1"
                              style={{
                                fontFamily: 'Lexend, sans-serif',
                                fontSize: 'var(--text-small)',
                                fontWeight: 'var(--font-weight-semibold)',
                                backgroundColor: 'var(--primary)',
                                color: 'var(--primary-foreground)',
                                borderRadius: 'var(--radius)',
                              }}
                            >
                              {tool.badge}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          className="mb-2 flex items-center justify-between"
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--foreground)',
                            margin: 0,
                          }}
                        >
                          {tool.title}
                          <ChevronRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                            style={{ color: 'var(--muted-foreground)' }}
                          />
                        </h3>

                        {/* Description */}
                        <p
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            color: 'var(--muted-foreground)',
                            margin: 0,
                            lineHeight: '1.6',
                          }}
                        >
                          {tool.description}
                        </p>
                      </button>
                    ))}
                </div>
              </div>
            ))}

            {/* Help Section */}
            <div
              className="mt-12 p-8 text-center"
              style={{
                backgroundColor: 'var(--muted)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                Need Help?
              </h3>

              <p
                className="mb-6"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                }}
              >
                Check the documentation or contact the development team for assistance.
              </p>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => navigateTo('dev-tools/block-documentation')}
                  className="px-6 py-3"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    border: 'none',
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  View Documentation
                </button>

                <button
                  onClick={() => navigateTo('contact')}
                  className="px-6 py-3"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '2px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--background)';
                  }}
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="default" />
    </>
  );
}