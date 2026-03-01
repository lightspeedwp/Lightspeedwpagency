/**
 * Dev Tools Landing Page Template
 *
 * Central hub for all developer tools and utilities.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .devtools-*
 * Uses declarative <Link> navigation (react-router).
 *
 * @see /src/styles/templates/dev-tools.css
 */

import '../../../styles/templates/dev-tools.css';
import {
  Code2,
  TestTube2,
  Eye,
  FileCode2,
  Puzzle,
  Palette,
  Layout,
  Activity,
  ChevronRight,
  BookOpen,
  Blocks,
  MousePointer,
  Layers,
  Paintbrush,
  SwatchBook,
  ClipboardCheck,
  Wrench,
  Rocket,
  SlidersHorizontal,
  BarChart3,
  FileSearch,
  Scissors,
  Map,
  ExternalLink,
  Hash,
  CheckCircle2,
  Circle,
  Clock,
  Target,
  GitBranch,
  FolderKanban,
} from 'lucide-react';
import { Link } from 'react-router';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Section } from '../common/Section';
import { useScrollReveal } from '../../hooks/useScrollReveal';


interface DevTool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
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
    path: '/dev-tools/template-tester',
    category: 'Testing',
    badge: 'Essential',
  },
  {
    id: 'compliance-scorecard',
    title: 'Compliance Scorecard',
    description: 'Real-time WCAG 2.1 AA/AAA compliance testing with 26+ automated checks.',
    icon: <Activity size={32} />,
    path: '/dev-tools/compliance-scorecard',
    category: 'Testing',
    badge: 'Essential',
  },

  // Development Tools
  {
    id: 'component-showcase',
    title: 'Component Showcase',
    description: 'Browse all 85+ components with live examples and code snippets.',
    icon: <Puzzle size={32} />,
    path: '/dev-tools/component-showcase',
    category: 'Development',
  },
  {
    id: 'feature-showcase',
    title: 'Feature Showcase',
    description: 'Interactive demos of all 164 production features across 24 components.',
    icon: <Eye size={32} />,
    path: '/dev-tools/feature-showcase',
    category: 'Development',
  },
  {
    id: 'live-preview',
    title: 'Live Preview',
    description: 'Live component preview tool with interactive property editor.',
    icon: <MousePointer size={32} />,
    path: '/dev-tools/live-preview',
    category: 'Development',
  },

  // Design Tools
  {
    id: 'design-system-test',
    title: 'Design System Test',
    description: 'Complete design system testing suite with 107 automated tests and color contrast validation.',
    icon: <Palette size={32} />,
    path: '/dev-tools/design-system-test',
    category: 'Design',
    badge: 'Essential',
  },
  {
    id: 'design-tokens-reference',
    title: 'Design Tokens Reference',
    description: 'Complete reference of all CSS custom properties — colors, typography, spacing, shadows, radii.',
    icon: <SwatchBook size={32} />,
    path: '/dev-tools/design-tokens-reference',
    category: 'Design',
  },
  {
    id: 'design-playground',
    title: 'Design Playground',
    description: 'Interactive sandbox to experiment with design tokens — change colours, preview typography, test spacing live.',
    icon: <SlidersHorizontal size={32} />,
    path: '/dev-tools/design-playground',
    category: 'Design',
  },
  {
    id: 'design-blocks-showcase',
    title: 'Design Blocks Showcase',
    description: 'All design blocks (Buttons, Heading, Paragraph, etc.) with live preview.',
    icon: <Layout size={32} />,
    path: '/dev-tools/design-blocks-showcase',
    category: 'Design',
    badge: 'New',
  },
  {
    id: 'theme-blocks-showcase',
    title: 'Theme Blocks Showcase',
    description: 'Showcase all WordPress theme blocks (Site Logo, Navigation, etc.).',
    icon: <Blocks size={32} />,
    path: '/dev-tools/theme-blocks-showcase',
    category: 'Design',
    badge: 'New',
  },
  {
    id: 'button-showcase',
    title: 'Button Showcase',
    description: 'Complete button system showcase with all 5 variants and 3 sizes (WCAG AAA compliant).',
    icon: <MousePointer size={32} />,
    path: '/dev-tools/button-showcase',
    category: 'Design',
    badge: 'New',
  },
  {
    id: 'section-presets-showcase',
    title: 'Section Presets Showcase',
    description: 'Showcase all 17 section style presets with WordPress FSE mapping.',
    icon: <Layers size={32} />,
    path: '/dev-tools/section-presets-showcase',
    category: 'Design',
    badge: 'New',
  },
  {
    id: 'header-footer-comparison',
    title: 'Header/Footer Comparison',
    description: 'Compare all header and footer template variations side-by-side.',
    icon: <Layout size={32} />,
    path: '/dev-tools/header-footer-comparison',
    category: 'Design',
  },
  {
    id: 'icon-library',
    title: 'Icon Library',
    description: 'Complete Lucide React icon reference with copy-paste code snippets.',
    icon: <Paintbrush size={32} />,
    path: '/dev-tools/icon-library',
    category: 'Design',
  },
  {
    id: 'style-guide',
    title: 'Style Guide',
    description: 'Complete visual style guide with typography, colors, and spacing tokens.',
    icon: <BookOpen size={32} />,
    path: '/dev-tools/style-guide',
    category: 'Design',
  },

  // Documentation Tools
  {
    id: 'block-documentation',
    title: 'Block Documentation',
    description: 'Complete WordPress block library with usage examples and guidelines.',
    icon: <FileCode2 size={32} />,
    path: '/dev-tools/block-documentation',
    category: 'Documentation',
  },
  {
    id: 'component-api',
    title: 'Component API',
    description: 'TypeScript interfaces and complete API reference for all components.',
    icon: <Code2 size={32} />,
    path: '/dev-tools/component-api',
    category: 'Documentation',
  },
  {
    id: 'docs-generator',
    title: 'Documentation Generator',
    description: 'Auto-generated docs from JSDoc — structured component reference with props tables, usage examples, and cross-links.',
    icon: <FileSearch size={32} />,
    path: '/dev-tools/docs-generator',
    category: 'Documentation',
  },
  {
    id: 'snippet-generator',
    title: 'Snippet Generator',
    description: 'Interactive BEM pattern code builder — select a pattern, configure options, get copy-ready JSX, CSS and WordPress HTML.',
    icon: <Scissors size={32} />,
    path: '/dev-tools/snippet-generator',
    category: 'Documentation',
  },

  // Deployment Tools
  {
    id: 'deployment-readiness',
    title: 'Deployment Readiness',
    description: 'Pre-deploy checklist with simulated Lighthouse scores, link checker, accessibility audit, and WordPress FSE compatibility.',
    icon: <ClipboardCheck size={32} />,
    path: '/dev-tools/deployment-readiness',
    category: 'Deployment',
  },

  // Analytics Tools
  {
    id: 'code-quality-dashboard',
    title: 'Code Quality Dashboard',
    description: 'Static analysis — component counts, route stats, CSS architecture, design token inventory, and compliance scores.',
    icon: <BarChart3 size={32} />,
    path: '/dev-tools/code-quality-dashboard',
    category: 'Analytics',
  },
];

/* ═══════════════════════════════════════════
 * Category Config
 * ═══════════════════════════════════════════ */

const categoryOrder: DevTool['category'][] = [
  'Testing',
  'Design',
  'Development',
  'Documentation',
  'Analytics',
  'Deployment',
];

const categoryIcons: Record<string, React.ReactNode> = {
  Testing: <TestTube2 size={20} />,
  Development: <Wrench size={20} />,
  Design: <Palette size={20} />,
  Documentation: <FileCode2 size={20} />,
  Analytics: <BarChart3 size={20} />,
  Deployment: <Rocket size={20} />,
};

const categoryDescriptions: Record<string, string> = {
  Testing: 'Validate templates, compliance, and design system integrity.',
  Development: 'Explore components, features, and live preview tools.',
  Design: 'Design tokens, blocks, buttons, sections, and visual style guides.',
  Documentation: 'Block docs, component APIs, auto-generated references, and code snippets.',
  Analytics: 'Code quality metrics, static analysis, and compliance scores.',
  Deployment: 'Pre-deploy checklists, Lighthouse scoring, and WordPress FSE compatibility.',
};

/* ═══════════════════════════════════════════
 * Quick Links
 * ═══════════════════════════════════════════ */

const quickLinks = [
  { label: 'Site Map', path: '/site-map', icon: <Map size={16} /> },
  { label: 'Style Guide', path: '/style-guide', icon: <BookOpen size={16} /> },
  { label: 'FAQ', path: '/faq', icon: <Hash size={16} /> },
  { label: 'Home', path: '/', icon: <ExternalLink size={16} /> },
];

/* ═══════════════════════════════════════════
 * Roadmap Data
 * ═══════════════════════════════════════════ */

type RoadmapStatus = 'completed' | 'in-progress' | 'planned';

interface RoadmapTask {
  name: string;
  status: RoadmapStatus;
  meta?: string;
}

interface RoadmapGroup {
  title: string;
  icon: React.ReactNode;
  category: 'general' | 'project';
  tasks: RoadmapTask[];
}

const roadmapGroups: RoadmapGroup[] = [
  /* ── General Infrastructure ── */
  {
    title: 'Design System & Tokens',
    icon: <Palette size={18} />,
    category: 'general',
    tasks: [
      { name: 'CSS variables system (80 variables)', status: 'completed', meta: 'Jan 9, 2025' },
      { name: 'WordPress FSE font presets', status: 'completed', meta: 'Jan 9, 2025' },
      { name: 'Spacing scale (--spacing-0 to --spacing-64)', status: 'completed', meta: 'Jan 9, 2025' },
      { name: 'Fluid typography (clamp() system)', status: 'completed', meta: 'Dec 26, 2024' },
      { name: '100% design token compliance', status: 'completed', meta: 'Dec 28, 2024' },
      { name: 'Gradient system (13 new variables)', status: 'completed', meta: 'Jan 24, 2025' },
      { name: 'Hex code elimination (20+ replaced)', status: 'completed', meta: 'Jan 24, 2025' },
    ],
  },
  {
    title: 'Accessibility & Compliance',
    icon: <Activity size={18} />,
    category: 'general',
    tasks: [
      { name: 'WCAG 2.1 AA compliance (all templates)', status: 'completed', meta: 'Dec 26, 2024' },
      { name: 'Keyboard navigation', status: 'completed', meta: 'Dec 26, 2024' },
      { name: 'Skip link + focus management', status: 'completed', meta: 'Dec 30, 2024' },
      { name: 'RouteAnnouncer (screen reader)', status: 'completed', meta: 'Dec 30, 2024' },
      { name: 'Touch targets (48x48px min)', status: 'completed', meta: 'Dec 26, 2024' },
      { name: 'WCAG 2.1 AAA audit & improvements', status: 'in-progress', meta: '75% complete' },
      { name: 'Automated accessibility regression tests', status: 'planned' },
    ],
  },
  {
    title: 'Testing & QA',
    icon: <TestTube2 size={18} />,
    category: 'general',
    tasks: [
      { name: 'Design system tests (107 tests)', status: 'completed', meta: 'Dec 26, 2024' },
      { name: 'Compliance scorecard (26+ checks)', status: 'completed', meta: 'Dec 26, 2024' },
      { name: 'Component audit (140+ components)', status: 'completed', meta: 'Jan 23, 2025' },
      { name: 'Pattern compliance (51/51 pass)', status: 'completed', meta: 'Jan 23, 2025' },
      { name: 'Block compliance (35+ pass)', status: 'completed', meta: 'Jan 23, 2025' },
      { name: 'E2E test suite (Playwright)', status: 'planned' },
      { name: 'Visual regression testing', status: 'planned' },
    ],
  },
  {
    title: 'Performance & Deployment',
    icon: <Rocket size={18} />,
    category: 'general',
    tasks: [
      { name: 'Lazy loading (code splitting)', status: 'completed', meta: 'Dec 26, 2024' },
      { name: '75% faster load / 70% smaller bundle', status: 'completed', meta: 'Dec 26, 2024' },
      { name: 'Image lazy loading (blur-up)', status: 'completed', meta: 'Dec 28, 2024' },
      { name: 'Print stylesheet optimisation', status: 'completed', meta: 'Dec 28, 2024' },
      { name: 'Lighthouse scoring baseline', status: 'in-progress', meta: 'Deployment readiness tool' },
      { name: 'CDN + caching strategy', status: 'planned' },
      { name: 'WordPress theme export pipeline', status: 'planned' },
    ],
  },

  /* ── Project-Specific Tasks ── */
  {
    title: 'Template Migration (Funky Neon)',
    icon: <FolderKanban size={18} />,
    category: 'project',
    tasks: [
      { name: 'ROI Calculator template', status: 'completed', meta: 'Funky hero + BEM CSS' },
      { name: 'Careers template', status: 'completed', meta: 'Funky hero + BEM CSS' },
      { name: 'Guarantees template', status: 'completed', meta: 'Funky hero + BEM CSS' },
      { name: 'Why Choose Us template', status: 'completed', meta: 'Funky hero + BEM CSS' },
      { name: 'Testimonials template', status: 'completed', meta: 'Funky hero + BEM CSS' },
      { name: 'Tag Archive template', status: 'completed', meta: 'Funky hero + BEM CSS' },
      { name: 'Date Archive template', status: 'completed', meta: 'Funky hero + BEM CSS' },
      { name: 'Dev Tools template', status: 'completed', meta: 'Declarative Links + roadmap' },
      { name: 'Site Map template', status: 'completed', meta: 'Maximum pages listed' },
      { name: 'Pricing template', status: 'in-progress', meta: 'Funky hero migration' },
      { name: 'Hosting template', status: 'completed', meta: 'Neon Server Lab redesign' },
      { name: 'Service detail templates (12)', status: 'in-progress', meta: '4/12 migrated' },
      { name: 'Solution detail templates (8)', status: 'planned' },
      { name: 'Blog templates (5)', status: 'planned' },
      { name: 'Portfolio templates (4)', status: 'planned' },
    ],
  },
  {
    title: 'WordPress Blocks & Patterns',
    icon: <Blocks size={18} />,
    category: 'project',
    tasks: [
      { name: 'Block guidelines (66/66 complete)', status: 'completed', meta: 'Jan 22, 2025' },
      { name: 'wordpress-blocks.css (37 patterns)', status: 'completed', meta: 'Jan 7, 2025' },
      { name: 'Pattern library (51 patterns)', status: 'completed', meta: 'Jan 24, 2025' },
      { name: 'BEM enforcement (all patterns)', status: 'completed', meta: 'Jan 24, 2025' },
      { name: 'WooCommerce blocks (11/11)', status: 'completed', meta: 'Jan 22, 2025' },
      { name: 'FunkyCTA pattern', status: 'completed', meta: 'Neon CTA variant' },
      { name: 'Funky variant for TestimonialGrid', status: 'in-progress' },
      { name: 'Funky variant for SocialProof', status: 'in-progress' },
      { name: 'BenefitsGrid funky variant', status: 'completed', meta: 'Manual CSS edits' },
    ],
  },
  {
    title: 'Showcase Implementation',
    icon: <Layout size={18} />,
    category: 'project',
    tasks: [
      { name: 'Design Blocks Showcase', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Theme Blocks Showcase', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Button Showcase', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Section Presets Showcase', status: 'completed', meta: 'Feb 14, 2026' },
    ]
  },
  {
    title: 'Tailwind Elimination',
    icon: <Scissors size={18} />,
    category: 'project',
    tasks: [
      { name: 'Phase 6: 6 templates migrated to BEM', status: 'completed', meta: 'Feb 14, 2026' },
      { name: '6 new BEM CSS files created', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Minor Tailwind fixes (4 templates)', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Complete inline Tailwind removal', status: 'in-progress', meta: '~80% done' },
      { name: 'Utility class audit (remaining files)', status: 'planned' },
    ],
  },
  {
    title: 'Data & Content System',
    icon: <GitBranch size={18} />,
    category: 'project',
    tasks: [
      { name: 'Centralized data system (/data/)', status: 'completed', meta: '15+ data files' },
      { name: 'Blog posts (12 posts, 6 categories)', status: 'completed' },
      { name: 'Portfolio projects (6 case studies)', status: 'completed' },
      { name: 'Testimonials (9+ entries, 4 formats)', status: 'completed' },
      { name: 'WooCommerce products (multiple types)', status: 'completed' },
      { name: 'Tour operator (tours + itineraries)', status: 'completed' },
      { name: 'Videos (archive + categories + tags)', status: 'completed' },
      { name: 'Podcasts (episodes + categories)', status: 'completed' },
      { name: 'Tutorials (10 entries, 6 categories)', status: 'completed' },
      { name: 'Sitemap (117+ routes mapped)', status: 'completed', meta: 'Feb 14, 2026' },
    ],
  },
  {
    title: 'Documentation & Reporting',
    icon: <FileCode2 size={18} />,
    category: 'project',
    tasks: [
      { name: 'JSDoc standards established', status: 'completed', meta: 'Dec 27, 2024' },
      { name: 'Pattern documentation (18/18)', status: 'completed', meta: 'Dec 27, 2024' },
      { name: 'Block guidelines (66/66)', status: 'completed', meta: 'Jan 22, 2025' },
      { name: 'Phase reports (Phases 1-9)', status: 'completed', meta: 'Jan 24, 2025' },
      { name: 'Routing reference (117 routes)', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Templates overview (90+ files)', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Storybook stories for key components', status: 'planned' },
    ],
  },
];

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function DevToolsTemplate() {
  const heroRef = useScrollReveal<HTMLDivElement>();

  const toolsByCategory = categoryOrder
    .map((category) => ({
      category,
      tools: devTools.filter((t) => t.category === category),
    }))
    .filter((group) => group.tools.length > 0);

  const totalTools = devTools.length;

  /* Roadmap stats */
  const allTasks = roadmapGroups.flatMap((g) => g.tasks);
  const completedTasks = allTasks.filter((t) => t.status === 'completed').length;
  const inProgressTasks = allTasks.filter((t) => t.status === 'in-progress').length;
  const plannedTasks = allTasks.filter((t) => t.status === 'planned').length;
  const progressPercent = Math.round((completedTasks / allTasks.length) * 100);

  const generalGroups = roadmapGroups.filter((g) => g.category === 'general');
  const projectGroups = roadmapGroups.filter((g) => g.category === 'project');

  const statusIcon = (status: RoadmapStatus) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={16} className="devtools__roadmap-task-icon--completed" />;
      case 'in-progress':
        return <Clock size={16} className="devtools__roadmap-task-icon--in-progress" />;
      case 'planned':
        return <Circle size={16} className="devtools__roadmap-task-icon--planned" />;
    }
  };

  const statusLabel = (status: RoadmapStatus) => {
    switch (status) {
      case 'completed': return 'Done';
      case 'in-progress': return 'Active';
      case 'planned': return 'Planned';
    }
  };

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Developer Tools' },
        ]}
      />

      {/* Hero */}
      <div className="devtools__hero">
        <div className="devtools__hero-inner">
          <div ref={heroRef} className="devtools__hero-header">
            <div className="devtools__hero-badge">Developer Tools</div>
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
              { value: '66', label: 'Block Guidelines' },
              { value: '51', label: 'Patterns' },
            ].map((stat, i) => (
              <div key={i} className="devtools__stat-card">
                <div className="devtools__stat-value">{stat.value}</div>
                <div className="devtools__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="devtools__quick-links">
            <span className="devtools__quick-links-label">Quick Links:</span>
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path} className="devtools__quick-link">
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Category Grids */}
          {toolsByCategory.map(({ category, tools }) => (
            <div key={category} className="devtools__category">
              <div className="devtools__category-header">
                {categoryIcons[category]}
                <h2 className="devtools__category-title">
                  {category}
                </h2>
                <span className="devtools__category-count">{tools.length}</span>
              </div>
              <p className="devtools__category-desc">
                {categoryDescriptions[category]}
              </p>

              <div className="devtools__tools-grid">
                {tools.map((tool) => (
                  <Link
                    key={tool.id}
                    to={tool.path}
                    className="devtools__tool-card"
                  >
                    <div className="devtools__tool-card-header">
                      <div className="devtools__tool-icon">{tool.icon}</div>
                      {tool.badge && (
                        <span className="devtools__tool-badge">{tool.badge}</span>
                      )}
                    </div>
                    <div className="devtools__tool-title-row">
                      <h3 className="devtools__tool-title">{tool.title}</h3>
                      <ChevronRight size={16} className="devtools__tool-arrow" />
                    </div>
                    <p className="devtools__tool-desc">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* ═══════════════════════════════════════════
           * Project Roadmap
           * ═══════════════════════════════════════════ */
          }
          <div className="devtools__roadmap">
            <div className="devtools__roadmap-header">
              <Target size={20} />
              <h2 className="devtools__roadmap-title">Project Roadmap</h2>
            </div>
            <p className="devtools__roadmap-subtitle">
              Track the status of all general infrastructure and project-specific
              tasks. {completedTasks} of {allTasks.length} tasks complete ({progressPercent}%).
            </p>

            {/* Overall progress bar */}
            <div className="devtools__roadmap-progress" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
              <div
                className="devtools__roadmap-progress-bar"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* General Tasks */}
            <h3 style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: 'var(--spacing-6)',
            }}>
              General Tasks
            </h3>

            {generalGroups.map((group) => {
              const groupCompleted = group.tasks.filter((t) => t.status === 'completed').length;
              return (
                <div key={group.title} className="devtools__roadmap-group">
                  <div className="devtools__roadmap-group-header">
                    <h4 className="devtools__roadmap-group-title">
                      {group.icon}
                      {group.title}
                    </h4>
                    <span className="devtools__roadmap-group-count">
                      {groupCompleted}/{group.tasks.length}
                    </span>
                  </div>

                  <div className="devtools__roadmap-tasks">
                    {group.tasks.map((task) => (
                      <div key={task.name} className="devtools__roadmap-task">
                        <div className="devtools__roadmap-task-icon">
                          {statusIcon(task.status)}
                        </div>
                        <div className="devtools__roadmap-task-content">
                          <p className="devtools__roadmap-task-name">{task.name}</p>
                          {task.meta && (
                            <p className="devtools__roadmap-task-meta">{task.meta}</p>
                          )}
                        </div>
                        <span className={`devtools__roadmap-task-badge devtools__roadmap-task-badge--${task.status}`}>
                          {statusLabel(task.status)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Project Tasks */}
            <h3 style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: 'var(--spacing-6)',
              marginTop: 'var(--spacing-12)',
            }}>
              Project Tasks
            </h3>

            {projectGroups.map((group) => {
              const groupCompleted = group.tasks.filter((t) => t.status === 'completed').length;
              return (
                <div key={group.title} className="devtools__roadmap-group">
                  <div className="devtools__roadmap-group-header">
                    <h4 className="devtools__roadmap-group-title">
                      {group.icon}
                      {group.title}
                    </h4>
                    <span className="devtools__roadmap-group-count">
                      {groupCompleted}/{group.tasks.length}
                    </span>
                  </div>

                  <div className="devtools__roadmap-tasks">
                    {group.tasks.map((task) => (
                      <div key={task.name} className="devtools__roadmap-task">
                        <div className="devtools__roadmap-task-icon">
                          {statusIcon(task.status)}
                        </div>
                        <div className="devtools__roadmap-task-content">
                          <p className="devtools__roadmap-task-name">{task.name}</p>
                          {task.meta && (
                            <p className="devtools__roadmap-task-meta">{task.meta}</p>
                          )}
                        </div>
                        <span className={`devtools__roadmap-task-badge devtools__roadmap-task-badge--${task.status}`}>
                          {statusLabel(task.status)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Summary */}
            <div className="devtools__roadmap-summary">
              <div className="devtools__roadmap-summary-card">
                <div className="devtools__roadmap-summary-value">100%</div>
                <div className="devtools__roadmap-summary-label">Design Tokens</div>
              </div>
              <div className="devtools__roadmap-summary-card">
                <div className="devtools__roadmap-summary-value">{completedTasks}</div>
                <div className="devtools__roadmap-summary-label">Tasks Done</div>
              </div>
              <div className="devtools__roadmap-summary-card">
                <div className="devtools__roadmap-summary-value">117</div>
                <div className="devtools__roadmap-summary-label">Routes</div>
              </div>
              <div className="devtools__roadmap-summary-card">
                <div className="devtools__roadmap-summary-value">LSX</div>
                <div className="devtools__roadmap-summary-label">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}