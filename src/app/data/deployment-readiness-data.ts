/**
 * Deployment Readiness Dashboard — Static Data
 *
 * Extracted from DeploymentReadinessTemplate.tsx for file size compliance.
 * Contains simulated audit data, types, and helper components.
 *
 * @see /src/app/components/templates/DeploymentReadinessTemplate.tsx
 */

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

export type CheckStatus = 'pass' | 'warning' | 'fail';

export interface CheckItem {
  id: string;
  label: string;
  status: CheckStatus;
  detail: string;
}

export interface ScoreCard {
  label: string;
  score: number;
  items: CheckItem[];
}

/* ═══════════════════════════════════════════
 * Simulated Audit Data
 * ═══════════════════════════════════════════ */

export function runSimulatedAudit() {
  const lighthouseScores: ScoreCard[] = [
    {
      label: 'Performance',
      score: 92,
      items: [
        { id: 'lh-fcp', label: 'First Contentful Paint < 1.8s', status: 'pass', detail: '1.2s' },
        { id: 'lh-lcp', label: 'Largest Contentful Paint < 2.5s', status: 'pass', detail: '1.8s' },
        { id: 'lh-cls', label: 'Cumulative Layout Shift < 0.1', status: 'pass', detail: '0.02' },
        { id: 'lh-tbt', label: 'Total Blocking Time < 200ms', status: 'pass', detail: '140ms' },
        { id: 'lh-lazy', label: 'All images use lazy loading', status: 'pass', detail: '100%' },
        { id: 'lh-codesplit', label: 'Code splitting via lazy routes', status: 'pass', detail: '117 routes' },
        { id: 'lh-fonts', label: 'Font files preloaded', status: 'warning', detail: '2/3 preloaded' },
      ],
    },
    {
      label: 'Accessibility',
      score: 97,
      items: [
        { id: 'a11y-alt', label: 'All <img> tags have alt attributes', status: 'pass', detail: '100%' },
        { id: 'a11y-h1', label: 'Exactly one <h1> per page', status: 'pass', detail: 'Verified' },
        { id: 'a11y-heading', label: 'Heading hierarchy is sequential', status: 'pass', detail: 'No skips' },
        { id: 'a11y-landmarks', label: 'Landmarks present (header, nav, main, footer)', status: 'pass', detail: '4/4' },
        { id: 'a11y-focus', label: 'Focus-visible styles on all interactive elements', status: 'pass', detail: 'Yes' },
        { id: 'a11y-touch', label: 'Touch targets >= 44x44px', status: 'pass', detail: '48x48px' },
        { id: 'a11y-contrast', label: 'Colour contrast meets WCAG AA', status: 'pass', detail: '4.5:1+' },
        { id: 'a11y-aria', label: 'ARIA labels on interactive elements', status: 'pass', detail: 'Verified' },
        { id: 'a11y-motion', label: 'Respects prefers-reduced-motion', status: 'warning', detail: '95%' },
      ],
    },
    {
      label: 'Best Practices',
      score: 94,
      items: [
        { id: 'bp-https', label: 'HTTPS enforced', status: 'pass', detail: 'Yes' },
        { id: 'bp-noconsole', label: 'No console.log in production', status: 'pass', detail: '0 found' },
        { id: 'bp-semantic', label: 'Semantic HTML throughout', status: 'pass', detail: 'Verified' },
        { id: 'bp-charset', label: 'Document charset declared', status: 'pass', detail: 'UTF-8' },
        { id: 'bp-viewport', label: 'Viewport meta tag present', status: 'pass', detail: 'Yes' },
        { id: 'bp-errorbound', label: 'Error boundaries in place', status: 'pass', detail: 'RootLayout' },
        { id: 'bp-ts', label: 'TypeScript strict mode', status: 'warning', detail: 'Partial' },
      ],
    },
    {
      label: 'SEO',
      score: 89,
      items: [
        { id: 'seo-title', label: 'Unique <title> per page', status: 'pass', detail: 'Yes' },
        { id: 'seo-h1', label: 'H1 present on every page', status: 'pass', detail: '117/117' },
        { id: 'seo-alt', label: 'All images have descriptive alt text', status: 'pass', detail: '100%' },
        { id: 'seo-links', label: 'Crawlable anchor links (<a href>)', status: 'pass', detail: '750+' },
        { id: 'seo-canonical', label: 'Canonical URLs set', status: 'warning', detail: 'Not yet' },
        { id: 'seo-sitemap', label: 'XML sitemap available', status: 'warning', detail: 'Planned' },
        { id: 'seo-robots', label: 'Robots.txt configured', status: 'warning', detail: 'Planned' },
      ],
    },
  ];

  const brokenLinks: CheckItem[] = [
    { id: 'bl-nav', label: 'Main navigation links', status: 'pass', detail: '25/25 valid' },
    { id: 'bl-footer', label: 'Footer navigation links', status: 'pass', detail: '30/30 valid' },
    { id: 'bl-mega', label: 'Mega menu links', status: 'pass', detail: '57/57 valid' },
    { id: 'bl-buttons', label: 'CTA button destinations', status: 'pass', detail: '100+ valid' },
    { id: 'bl-breadcrumbs', label: 'Breadcrumb navigation links', status: 'pass', detail: 'All valid' },
    { id: 'bl-portfolio', label: 'Portfolio project links', status: 'pass', detail: '8/8 valid' },
    { id: 'bl-blog', label: 'Blog post links', status: 'pass', detail: '11/11 valid' },
    { id: 'bl-podcasts', label: 'Podcast episode links', status: 'pass', detail: '6/6 valid' },
    { id: 'bl-videos', label: 'Video page links', status: 'pass', detail: '4/4 valid' },
  ];

  const wpCompat: CheckItem[] = [
    { id: 'wp-cssvar', label: 'CSS variable compliance (colours, spacing, typography)', status: 'pass', detail: '100%' },
    { id: 'wp-bem', label: 'BEM class naming convention', status: 'pass', detail: '100%' },
    { id: 'wp-util', label: 'wp-* utility class usage', status: 'pass', detail: '728 lines' },
    { id: 'wp-font', label: 'Font family from var(--font-primary/secondary)', status: 'pass', detail: '100%' },
    { id: 'wp-themejson', label: 'theme.json preset mapping coverage', status: 'pass', detail: '80 variables' },
    { id: 'wp-patterns', label: 'Block pattern inventory', status: 'pass', detail: '37 patterns' },
    { id: 'wp-templates', label: 'Template hierarchy coverage', status: 'pass', detail: '90+ templates' },
    { id: 'wp-parts', label: 'Template parts (header, footer)', status: 'pass', detail: '2/2' },
    { id: 'wp-blocks', label: 'WordPress block components', status: 'pass', detail: '66 blocks' },
    { id: 'wp-tailwind', label: 'Zero raw Tailwind in rendered code', status: 'pass', detail: '0 classes' },
  ];

  const bundleSize: CheckItem[] = [
    { id: 'bs-routes', label: 'All routes use lazy loading', status: 'pass', detail: '117/117' },
    { id: 'bs-css', label: 'CSS files use BEM (no Tailwind build)', status: 'pass', detail: 'Pure CSS' },
    { id: 'bs-treeshake', label: 'Tree-shakeable icon imports', status: 'pass', detail: 'Yes' },
    { id: 'bs-images', label: 'Images from external CDN (Unsplash)', status: 'pass', detail: 'No bundled' },
    { id: 'bs-codesplit', label: 'Code splitting per-route', status: 'pass', detail: 'React.lazy' },
    { id: 'bs-cssfiles', label: 'CSS file count', status: 'warning', detail: '200+ files' },
  ];

  return { lighthouseScores, brokenLinks, wpCompat, bundleSize };
}

/** Breadcrumbs for the deployment readiness page */
export const deploymentBreadcrumbs = [
  { label: 'Home', page: 'home' },
  { label: 'Dev Tools', page: 'dev-tools' },
  { label: 'Deployment Readiness' },
];
