/**
 * Code Quality Dashboard — Static Analysis Data
 *
 * Extracted from CodeQualityDashboardTemplate.tsx for file size compliance.
 *
 * @see /src/app/components/templates/CodeQualityDashboardTemplate.tsx
 */

import {
  SquaresFour,
  Stack,
  Cube,
  DotsSix,
  PenNib,
  CodeBlock,
  Database,
  Palette,
  FileText,
  BookOpen,
  VideoCamera,
  Headphones,
  Wrench,
} from '@phosphor-icons/react';
import { blogPosts } from './blog-posts';
import { portfolioProjects } from './portfolio-projects';
import { videos } from './videos';
import { podcasts } from './podcasts';
import { services } from './services';
import { teamMembers } from './team';
import { testimonials } from './testimonials';
import * as faqsData from './faqs';

/** Component counts by category */
export const componentCounts = [
  { name: 'Templates', count: 90, icon: <SquaresFour size={20} /> },
  { name: 'Patterns', count: 54, icon: <Stack size={20} /> },
  { name: 'Blocks', count: 66, icon: <Cube size={20} /> },
  { name: 'Common', count: 8, icon: <DotsSix size={20} /> },
  { name: 'Parts', count: 2, icon: <PenNib size={20} /> },
  { name: 'Hooks', count: 12, icon: <CodeBlock size={20} /> },
  { name: 'Data Files', count: 71, icon: <Database size={20} /> },
  { name: 'CSS Files', count: 145, icon: <Palette size={20} /> },
];

/** Route statistics */
export const routeStats = [
  { name: 'Total Registered Routes', value: '117', status: 'good' as const },
  { name: 'About Section', value: '6', status: 'neutral' as const },
  { name: 'Services Section', value: '15', status: 'neutral' as const },
  { name: 'Solutions Section', value: '11', status: 'neutral' as const },
  { name: 'Portfolio Section', value: '4 + dynamic', status: 'neutral' as const },
  { name: 'Blog Section', value: '26 + dynamic', status: 'neutral' as const },
  { name: 'Videos Section', value: '3 + dynamic', status: 'neutral' as const },
  { name: 'Podcasts Section', value: '2 + dynamic', status: 'neutral' as const },
  { name: 'Tour Operator', value: '2 + dynamic', status: 'neutral' as const },
  { name: 'Dev Tools', value: '19', status: 'neutral' as const },
  { name: 'Utility Pages', value: '14', status: 'neutral' as const },
  { name: 'Legacy / Misc', value: '7', status: 'neutral' as const },
  { name: 'Error Pages', value: '2', status: 'neutral' as const },
  { name: 'Lazy-Loaded Routes', value: '100%', status: 'good' as const },
  { name: 'Broken Routes', value: '0', status: 'good' as const },
];

/** Data file stats */
export const dataFileStats = [
  { name: 'Blog Posts', file: 'blog-posts.ts', entries: blogPosts.length, icon: <FileText size={18} /> },
  { name: 'Portfolio Projects', file: 'portfolio-projects.ts', entries: portfolioProjects.length, icon: <BookOpen size={18} /> },
  { name: 'Videos', file: 'videos.ts', entries: videos.length, icon: <VideoCamera size={18} /> },
  { name: 'Podcasts', file: 'podcasts.ts', entries: podcasts.length, icon: <Headphones size={18} /> },
  { name: 'FAQs', file: 'faqs.ts', entries: Object.keys(faqsData).filter(k => k.endsWith('FAQs')).length, icon: <FileText size={18} /> },
  { name: 'Services', file: 'services.ts', entries: services.length, icon: <Wrench size={18} /> },
  { name: 'Team Members', file: 'team.ts', entries: teamMembers.length, icon: <DotsSix size={18} /> },
  { name: 'Testimonials', file: 'testimonials.ts', entries: testimonials.length, icon: <FileText size={18} /> },
];

/** Design token categories */
export const tokenCategories = [
  { name: 'Colors', count: 28, swatch: 'var(--primary)' },
  { name: 'Typography', count: 22, swatch: 'var(--foreground)' },
  { name: 'Spacing', count: 28, swatch: 'var(--muted)' },
  { name: 'Shadows', count: 15, swatch: 'var(--card)' },
  { name: 'Radii', count: 7, swatch: 'var(--border)' },
  { name: 'Borders', count: 8, swatch: 'var(--border)' },
  { name: 'Overlays', count: 16, swatch: 'var(--muted-foreground)' },
  { name: 'Z-Index', count: 8, swatch: 'var(--accent)' },
  { name: 'Animation', count: 7, swatch: 'var(--primary)' },
  { name: 'WP Presets', count: 47, swatch: 'var(--secondary)' },
];

/** CSS file categories with estimated rule counts */
export const cssFileCategories = [
  { file: 'theme-base.css', lines: 363, category: 'Tokens' },
  { file: 'theme-light.css', lines: 120, category: 'Theme' },
  { file: 'theme-dark.css', lines: 120, category: 'Theme' },
  { file: 'utilities.css', lines: 728, category: 'Utility' },
  { file: 'responsive.css', lines: 300, category: 'Layout' },
  { file: 'wordpress-blocks.css', lines: 1780, category: 'Blocks' },
  { file: 'section-styles.css', lines: 450, category: 'Sections' },
  { file: 'animations.css', lines: 200, category: 'Motion' },
  { file: 'components.css', lines: 250, category: 'Components' },
  { file: 'layout.css', lines: 180, category: 'Layout' },
];

/** Compliance scores */
export const complianceScores = [
  { name: 'CSS Variable Compliance', value: 100, target: 100 },
  { name: 'BEM Naming Compliance', value: 100, target: 100 },
  { name: 'Font Family Compliance', value: 100, target: 100 },
  { name: 'Zero Raw Tailwind', value: 100, target: 100 },
  { name: 'WCAG 2.1 AA', value: 100, target: 100 },
  { name: 'WordPress FSE Mapping', value: 95, target: 100 },
  { name: 'JSDoc Coverage', value: 88, target: 100 },
  { name: 'Semantic HTML', value: 98, target: 100 },
];

/** Computed totals */
export const totalComponents = componentCounts.reduce((acc, c) => acc + c.count, 0);
export const totalTokens = tokenCategories.reduce((acc, t) => acc + t.count, 0);
export const totalDataEntries = dataFileStats.reduce((acc, d) => acc + d.entries, 0);
export const avgCompliance = Math.round(
  complianceScores.reduce((acc, c) => acc + c.value, 0) / complianceScores.length
);
