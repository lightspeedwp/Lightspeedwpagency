/**
 * Dev Tools Landing Page Template
 * 
 * Central hub for all developer tools and utilities.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .devtools-*
 * 
 * @see /src/styles/templates/dev-tools.css
 */

import { Code2, TestTube2, Eye, FileCode2, Puzzle, Palette, Layout, Activity, ChevronRight, BookOpen, Blocks, MousePointer, Layers, Paintbrush, SwatchBook, ClipboardCheck, Wrench, Rocket, SlidersHorizontal, BarChart3, FileSearch, Scissors } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { useNavigation } from '../../contexts/NavigationContext';
import '@/styles/templates/dev-tools.css';

interface DevTool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  category: 'Testing' | 'Development' | 'Design' | 'Documentation' | 'Deployment' | 'Analytics';
  badge?: string;
}

const devTools: DevTool[] = [
  // Testing Tools
  {
    id: 'template-tester',
    title: 'Template Tester',
    description: 'Test all 90+ templates with instant switching and live preview.',
    icon: <TestTube2 size={32} />,
    slug: 'template-tester',
    category: 'Testing',
    badge: 'Essential',
  },
  {
    id: 'compliance-scorecard',
    title: 'Compliance Scorecard',
    description: 'Real-time WCAG 2.1 AA/AAA compliance testing with 26+ automated checks.',
    icon: <Activity size={32} />,
    slug: 'compliance-scorecard',
    category: 'Testing',
    badge: 'Essential',
  },
  
  // Development Tools
  {
    id: 'component-showcase',
    title: 'Component Showcase',
    description: 'Browse all 85+ components with live examples and code snippets.',
    icon: <Puzzle size={32} />,
    slug: 'component-showcase',
    category: 'Development',
  },
  {
    id: 'feature-showcase',
    title: 'Feature Showcase',
    description: 'Interactive demos of all 164 production features across 24 components.',
    icon: <Eye size={32} />,
    slug: 'feature-showcase',
    category: 'Development',
  },
  {
    id: 'live-preview',
    title: 'Live Preview',
    description: 'Live component preview tool with interactive property editor.',
    icon: <MousePointer size={32} />,
    slug: 'live-preview',
    category: 'Development',
  },
  
  // Design Tools
  {
    id: 'design-system-test',
    title: 'Design System Test',
    description: 'Complete design system testing suite with 107 automated tests and color contrast validation.',
    icon: <Palette size={32} />,
    slug: 'design-system-test',
    category: 'Design',
    badge: 'Essential',
  },
  {
    id: 'design-tokens-reference',
    title: 'Design Tokens Reference',
    description: 'Complete reference of all CSS custom properties — colors, typography, spacing, shadows, radii.',
    icon: <SwatchBook size={32} />,
    slug: 'design-tokens-reference',
    category: 'Design',
    badge: 'New',
  },
  {
    id: 'design-playground',
    title: 'Design Playground',
    description: 'Interactive sandbox to experiment with design tokens — change colours, preview typography, test spacing live.',
    icon: <SlidersHorizontal size={32} />,
    slug: 'design-playground',
    category: 'Design',
    badge: 'New',
  },
  {
    id: 'design-blocks-showcase',
    title: 'Design Blocks Showcase',
    description: 'All design blocks (Buttons, Heading, Paragraph, etc.) with live preview.',
    icon: <Layout size={32} />,
    slug: 'design-blocks-showcase',
    category: 'Design',
  },
  {
    id: 'theme-blocks-showcase',
    title: 'Theme Blocks Showcase',
    description: 'Showcase all WordPress theme blocks (Site Logo, Navigation, etc.).',
    icon: <Blocks size={32} />,
    slug: 'theme-blocks-showcase',
    category: 'Design',
  },
  {
    id: 'button-showcase',
    title: 'Button Showcase',
    description: 'Complete button system showcase with all 5 variants and 3 sizes (WCAG AAA compliant).',
    icon: <MousePointer size={32} />,
    slug: 'button-showcase',
    category: 'Design',
  },
  {
    id: 'section-presets-showcase',
    title: 'Section Presets Showcase',
    description: 'Showcase all 17 section style presets with WordPress FSE mapping.',
    icon: <Layers size={32} />,
    slug: 'section-presets-showcase',
    category: 'Design',
  },
  {
    id: 'header-footer-comparison',
    title: 'Header/Footer Comparison',
    description: 'Compare all header and footer template variations side-by-side.',
    icon: <Layout size={32} />,
    slug: 'header-footer-comparison',
    category: 'Design',
  },
  {
    id: 'icon-library',
    title: 'Icon Library',
    description: 'Complete Lucide React icon reference with copy-paste code snippets.',
    icon: <Paintbrush size={32} />,
    slug: 'icon-library',
    category: 'Design',
  },
  {
    id: 'style-guide',
    title: 'Style Guide',
    description: 'Complete visual style guide with typography, colors, and spacing tokens.',
    icon: <BookOpen size={32} />,
    slug: 'style-guide',
    category: 'Design',
  },
  
  // Documentation Tools
  {
    id: 'block-documentation',
    title: 'Block Documentation',
    description: 'Complete WordPress block library with usage examples and guidelines.',
    icon: <FileCode2 size={32} />,
    slug: 'block-documentation',
    category: 'Documentation',
  },
  {
    id: 'component-api',
    title: 'Component API',
    description: 'TypeScript interfaces and complete API reference for all components.',
    icon: <Code2 size={32} />,
    slug: 'component-api',
    category: 'Documentation',
  },
  {
    id: 'docs-generator',
    title: 'Documentation Generator',
    description: 'Auto-generated docs from JSDoc — structured component reference with props tables, usage examples, and cross-links.',
    icon: <FileSearch size={32} />,
    slug: 'docs-generator',
    category: 'Documentation',
    badge: 'New',
  },
  {
    id: 'snippet-generator',
    title: 'Snippet Generator',
    description: 'Interactive BEM pattern code builder — select a pattern, configure options, get copy-ready JSX, CSS and WordPress HTML.',
    icon: <Scissors size={32} />,
    slug: 'snippet-generator',
    category: 'Documentation',
    badge: 'New',
  },
  
  // Deployment Tools
  {
    id: 'deployment-readiness',
    title: 'Deployment Readiness',
    description: 'Pre-deploy checklist with simulated Lighthouse scores, link checker, accessibility audit, and WordPress FSE compatibility.',
    icon: <ClipboardCheck size={32} />,
    slug: 'deployment-readiness',
    category: 'Deployment',
    badge: 'New',
  },

  // Analytics Tools
  {
    id: 'code-quality-dashboard',
    title: 'Code Quality Dashboard',
    description: 'Static analysis — component counts, route stats, CSS architecture, design token inventory, and compliance scores.',
    icon: <BarChart3 size={32} />,
    slug: 'code-quality-dashboard',
    category: 'Analytics',
    badge: 'New',
  },
];

/* ═══════════════════════════════════════════
 * Category Config
 * ═══════════════════════════════════════════ */

const categoryOrder: DevTool['category'][] = ['Testing', 'Design', 'Development', 'Documentation', 'Analytics', 'Deployment'];

const categoryIcons: Record<string, React.ReactNode> = {
  Testing: <TestTube2 size={20} />,
  Development: <Wrench size={20} />,
  Design: <Palette size={20} />,
  Documentation: <FileCode2 size={20} />,
  Analytics: <BarChart3 size={20} />,
  Deployment: <Rocket size={20} />,
};

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function DevToolsTemplate() {
  const { navigateTo } = useNavigation();

  const toolsByCategory = categoryOrder.map(category => ({
    category,
    tools: devTools.filter(t => t.category === category),
  })).filter(group => group.tools.length > 0);

  const totalTools = devTools.length;

  return (
    <>
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section wp-block-breadcrumbs-section--border">
        <Breadcrumbs
          items={[
            { label: 'Home', page: 'home' },
            { label: 'Developer Tools' },
          ]}
        />
      </section>

      {/* Hero */}
      <div className="devtools__hero">
        <div className="devtools__hero-inner">
          <div className="devtools__hero-header">
            <h1 className="devtools__hero-title">Developer Tools</h1>
            <p className="devtools__hero-description">
              {totalTools} tools for testing, designing, documenting, and deploying 
              the LSX Design system. Every tool uses CSS variables and BEM classes for 
              full WordPress FSE compatibility.
            </p>
          </div>

          {/* Stats */}
          <div className="devtools__stats-grid">
            {[
              { value: totalTools, label: 'Total Tools' },
              { value: '90+', label: 'Templates' },
              { value: '117', label: 'Routes' },
              { value: '100%', label: 'CSS Variables' },
            ].map((stat, i) => (
              <div key={i} className="devtools__stat-card">
                <div className="devtools__stat-value">{stat.value}</div>
                <div className="devtools__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Grids */}
          {toolsByCategory.map(({ category, tools }) => (
            <div key={category} className="devtools__category">
              <div className="devtools__category-header">
                {categoryIcons[category]}
                <h2 style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  margin: 0,
                }}>
                  {category}
                </h2>
                <span className="devtools__category-count">{tools.length}</span>
              </div>

              <div className="devtools__tools-grid">
                {tools.map(tool => (
                  <button
                    key={tool.id}
                    className="devtools__tool-card"
                    onClick={() => navigateTo(tool.slug)}
                    type="button"
                  >
                    <div className="devtools__tool-card-header">
                      <div className="devtools__tool-icon">
                        {tool.icon}
                      </div>
                      {tool.badge && (
                        <span className="devtools__tool-badge">{tool.badge}</span>
                      )}
                    </div>
                    <div className="devtools__tool-title-row">
                      <h3 className="devtools__tool-title">{tool.title}</h3>
                      <ChevronRight size={16} className="devtools__tool-arrow" />
                    </div>
                    <p className="devtools__tool-desc">{tool.description}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Help Section */}
          <div className="devtools__help">
            <h2 className="devtools__help-title">Need a Custom Tool?</h2>
            <p className="devtools__help-desc">
              These developer tools are built using the same design system as the rest of the site.
              Check the task list for planned additions or create your own.
            </p>
            <div className="devtools__help-actions">
              <button
                className="devtools__help-btn devtools__help-btn--primary"
                onClick={() => navigateTo('home')}
                type="button"
              >
                Back to Home
              </button>
              <button
                className="devtools__help-btn devtools__help-btn--outline"
                onClick={() => navigateTo('site-map')}
                type="button"
              >
                View Site Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevToolsTemplate;