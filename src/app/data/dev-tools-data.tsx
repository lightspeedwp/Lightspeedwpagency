/**
 * Dev Tools — Data Definitions
 *
 * All data arrays, types, and configuration for the DevToolsTemplate.
 * Extracted for file size compliance (max 300 lines per .tsx).
 *
 * @see DevToolsTemplate.tsx — Parent template
 */

import {
  CodeBlock,
  TestTube,
  Eye,
  FileCode,
  PuzzlePiece,
  Palette,
  Layout,
  Pulse,
  BookOpen,
  Cube,
  Cursor,
  Stack,
  PaintBrush,
  Swatches,
  ClipboardText,
  Wrench,
  Rocket,
  SlidersHorizontal,
  ChartBar,
  MagnifyingGlass,
  Scissors,
  MapTrifold,
  ArrowSquareOut,
  Hash,
  Crosshair,
  GitBranch,
  Folder,
} from '@phosphor-icons/react';

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

export interface DevTool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  category: 'Testing' | 'Development' | 'Design' | 'Documentation' | 'Deployment' | 'Analytics';
  badge?: string;
}

export type RoadmapStatus = 'completed' | 'in-progress' | 'planned';

export interface RoadmapTask {
  name: string;
  status: RoadmapStatus;
  meta?: string;
}

export interface RoadmapGroup {
  title: string;
  icon: React.ReactNode;
  category: 'general' | 'project';
  tasks: RoadmapTask[];
}

/* ═══════════════════════════════════════════
 * Dev Tools List
 * ═══════════════════════════════════════════ */

export const devTools: DevTool[] = [
  // Testing Tools
  { id: 'template-tester', title: 'Template Tester', description: 'Test all 90+ templates with instant switching and live preview.', icon: <TestTube size={32} />, path: '/dev-tools/template-tester', category: 'Testing', badge: 'Essential' },
  { id: 'compliance-scorecard', title: 'Compliance Scorecard', description: 'Real-time WCAG 2.1 AA/AAA compliance testing with 26+ automated checks.', icon: <Pulse size={32} />, path: '/dev-tools/compliance-scorecard', category: 'Testing', badge: 'Essential' },

  // Development Tools
  { id: 'component-showcase', title: 'Component Showcase', description: 'Browse all 85+ components with live examples and code snippets.', icon: <PuzzlePiece size={32} />, path: '/dev-tools/component-showcase', category: 'Development' },
  { id: 'feature-showcase', title: 'Feature Showcase', description: 'Interactive demos of all 164 production features across 24 components.', icon: <Eye size={32} />, path: '/dev-tools/feature-showcase', category: 'Development' },
  { id: 'live-preview', title: 'Live Preview', description: 'Live component preview tool with interactive property editor.', icon: <Cursor size={32} />, path: '/dev-tools/live-preview', category: 'Development' },

  // Design Tools
  { id: 'design-system-test', title: 'Design System Test', description: 'Complete design system testing suite with 107 automated tests and color contrast validation.', icon: <Palette size={32} />, path: '/dev-tools/design-system-test', category: 'Design', badge: 'Essential' },
  { id: 'design-tokens-reference', title: 'Design Tokens Reference', description: 'Complete reference of all CSS custom properties — colors, typography, spacing, shadows, radii.', icon: <Swatches size={32} />, path: '/dev-tools/design-tokens-reference', category: 'Design' },
  { id: 'design-playground', title: 'Design Playground', description: 'Interactive sandbox to experiment with design tokens — change colours, preview typography, test spacing live.', icon: <SlidersHorizontal size={32} />, path: '/dev-tools/design-playground', category: 'Design' },
  { id: 'design-blocks-showcase', title: 'Design Blocks Showcase', description: 'All design blocks (Buttons, Heading, Paragraph, etc.) with live preview.', icon: <Layout size={32} />, path: '/dev-tools/design-blocks-showcase', category: 'Design', badge: 'New' },
  { id: 'theme-blocks-showcase', title: 'Theme Blocks Showcase', description: 'Showcase all WordPress theme blocks (Site Logo, Navigation, etc.).', icon: <Cube size={32} />, path: '/dev-tools/theme-blocks-showcase', category: 'Design', badge: 'New' },
  { id: 'button-showcase', title: 'Button Showcase', description: 'Complete button system showcase with all 5 variants and 3 sizes (WCAG AAA compliant).', icon: <Cursor size={32} />, path: '/dev-tools/button-showcase', category: 'Design', badge: 'New' },
  { id: 'section-presets-showcase', title: 'Section Presets Showcase', description: 'Showcase all 17 section style presets with WordPress FSE mapping.', icon: <Stack size={32} />, path: '/dev-tools/section-presets-showcase', category: 'Design', badge: 'New' },
  { id: 'header-footer-comparison', title: 'Header/Footer Comparison', description: 'Compare all header and footer template variations side-by-side.', icon: <Layout size={32} />, path: '/dev-tools/header-footer-comparison', category: 'Design' },
  { id: 'icon-library', title: 'Icon Library', description: 'Complete Lucide React icon reference with copy-paste code snippets.', icon: <PaintBrush size={32} />, path: '/dev-tools/icon-library', category: 'Design' },
  { id: 'phosphor-icon-reference', title: 'Phosphor Icon Reference', description: 'Lucide-to-Phosphor migration map with 6 weight variants, search, and copy-to-clipboard.', icon: <Crosshair size={32} />, path: '/dev-tools/phosphor-icon-reference', category: 'Design', badge: 'NEW' },
  { id: 'style-guide', title: 'Style Guide', description: 'Complete visual style guide with typography, colors, and spacing tokens.', icon: <BookOpen size={32} />, path: '/dev-tools/style-guide', category: 'Design' },

  // Documentation Tools
  { id: 'block-documentation', title: 'Block Documentation', description: 'Complete WordPress block library with usage examples and guidelines.', icon: <FileCode size={32} />, path: '/dev-tools/block-documentation', category: 'Documentation' },
  { id: 'component-api', title: 'Component API', description: 'TypeScript interfaces and complete API reference for all components.', icon: <CodeBlock size={32} />, path: '/dev-tools/component-api', category: 'Documentation' },
  { id: 'docs-generator', title: 'Documentation Generator', description: 'Auto-generated docs from JSDoc — structured component reference with props tables, usage examples, and cross-links.', icon: <MagnifyingGlass size={32} />, path: '/dev-tools/docs-generator', category: 'Documentation' },
  { id: 'snippet-generator', title: 'Snippet Generator', description: 'Interactive BEM pattern code builder — select a pattern, configure options, get copy-ready JSX, CSS and WordPress HTML.', icon: <Scissors size={32} />, path: '/dev-tools/snippet-generator', category: 'Documentation' },

  // Deployment Tools
  { id: 'deployment-readiness', title: 'Deployment Readiness', description: 'Pre-deploy checklist with simulated Lighthouse scores, link checker, accessibility audit, and WordPress FSE compatibility.', icon: <ClipboardText size={32} />, path: '/dev-tools/deployment-readiness', category: 'Deployment' },

  // Analytics Tools
  { id: 'code-quality-dashboard', title: 'Code Quality Dashboard', description: 'Static analysis — component counts, route stats, CSS architecture, design token inventory, and compliance scores.', icon: <ChartBar size={32} />, path: '/dev-tools/code-quality-dashboard', category: 'Analytics' },
];

/* ═══════════════════════════════════════════
 * Category Config
 * ═══════════════════════════════════════════ */

export const categoryOrder: DevTool['category'][] = [
  'Testing', 'Design', 'Development', 'Documentation', 'Analytics', 'Deployment',
];

export const categoryIcons: Record<string, React.ReactNode> = {
  Testing: <TestTube size={20} />,
  Development: <Wrench size={20} />,
  Design: <Palette size={20} />,
  Documentation: <FileCode size={20} />,
  Analytics: <ChartBar size={20} />,
  Deployment: <Rocket size={20} />,
};

export const categoryDescriptions: Record<string, string> = {
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

export const quickLinks = [
  { label: 'Site Map', path: '/site-map', icon: <MapTrifold size={16} /> },
  { label: 'Style Guide', path: '/style-guide', icon: <BookOpen size={16} /> },
  { label: 'FAQ', path: '/faq', icon: <Hash size={16} /> },
  { label: 'Home', path: '/', icon: <ArrowSquareOut size={16} /> },
];

/* ═══════════════════════════════════════════
 * Roadmap Data
 * ═══════════════════════════════════════════ */

export const roadmapGroups: RoadmapGroup[] = [
  /* ── General Infrastructure ── */
  {
    title: 'Design System & Tokens', icon: <Palette size={18} />, category: 'general',
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
    title: 'Accessibility & Compliance', icon: <Pulse size={18} />, category: 'general',
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
    title: 'Testing & QA', icon: <TestTube size={18} />, category: 'general',
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
    title: 'Performance & Deployment', icon: <Rocket size={18} />, category: 'general',
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
    title: 'Template Migration (Funky Neon)', icon: <Folder size={18} />, category: 'project',
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
    title: 'WordPress Blocks & Patterns', icon: <Cube size={18} />, category: 'project',
    tasks: [
      { name: 'Block guidelines (66/66 complete)', status: 'completed', meta: 'Jan 22, 2025' },
      { name: 'wordpress-blocks.css (37 patterns)', status: 'completed', meta: 'Jan 7, 2025' },
      { name: 'Pattern library (51 patterns)', status: 'completed', meta: 'Jan 24, 2025' },
      { name: 'BEM enforcement (all patterns)', status: 'completed', meta: 'Jan 24, 2025' },
      { name: 'FunkyCTA pattern', status: 'completed', meta: 'Neon CTA variant' },
      { name: 'Funky variant for TestimonialGrid', status: 'in-progress' },
      { name: 'Funky variant for SocialProof', status: 'in-progress' },
      { name: 'BenefitsGrid funky variant', status: 'completed', meta: 'Manual CSS edits' },
    ],
  },
  {
    title: 'Showcase Implementation', icon: <Layout size={18} />, category: 'project',
    tasks: [
      { name: 'Design Blocks Showcase', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Theme Blocks Showcase', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Button Showcase', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Section Presets Showcase', status: 'completed', meta: 'Feb 14, 2026' },
    ],
  },
  {
    title: 'Tailwind Elimination', icon: <Scissors size={18} />, category: 'project',
    tasks: [
      { name: 'Phase 6: 6 templates migrated to BEM', status: 'completed', meta: 'Feb 14, 2026' },
      { name: '6 new BEM CSS files created', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Minor Tailwind fixes (4 templates)', status: 'completed', meta: 'Feb 14, 2026' },
      { name: 'Complete inline Tailwind removal', status: 'in-progress', meta: '~80% done' },
      { name: 'Utility class audit (remaining files)', status: 'planned' },
    ],
  },
  {
    title: 'Data & Content System', icon: <GitBranch size={18} />, category: 'project',
    tasks: [
      { name: 'Centralized data system (/data/)', status: 'completed', meta: '15+ data files' },
      { name: 'Blog posts (12 posts, 6 categories)', status: 'completed' },
      { name: 'Portfolio projects (6 case studies)', status: 'completed' },
      { name: 'Testimonials (9+ entries, 4 formats)', status: 'completed' },
      { name: 'Tour operator (tours + itineraries)', status: 'completed' },
      { name: 'Videos (archive + categories + tags)', status: 'completed' },
      { name: 'Podcasts (episodes + categories)', status: 'completed' },
      { name: 'Tutorials (10 entries, 6 categories)', status: 'completed' },
      { name: 'Sitemap (117+ routes mapped)', status: 'completed', meta: 'Feb 14, 2026' },
    ],
  },
  {
    title: 'Documentation & Reporting', icon: <FileCode size={18} />, category: 'project',
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
