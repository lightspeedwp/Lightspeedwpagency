/**
 * Deployment Readiness Dashboard Template
 *
 * Pre-deploy checklist with simulated Lighthouse scores, accessibility audit,
 * broken link checker, bundle size estimator, and WordPress FSE compatibility check.
 *
 * 100% CSS variables — no Tailwind.
 * BEM naming: .deploy-*
 *
 * @see /src/styles/templates/deployment-readiness.css
 * @see /tasks/task-list.md Section 21
 */

import { useState, useCallback, useMemo } from 'react';
import {
  Gauge,
  LinkIcon,
  Accessibility,
  Package,
  Blocks,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Play,
  Download,
  RotateCcw,
  RefreshCw,
} from 'lucide-react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';


/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

type CheckStatus = 'pass' | 'warning' | 'fail';

interface CheckItem {
  id: string;
  label: string;
  status: CheckStatus;
  detail: string;
}

interface ScoreCard {
  label: string;
  score: number;
  items: CheckItem[];
}

/* ═══════════════════════════════════════════
 * Simulated Audit Data
 * ═══════════════════════════════════════════ */

function runSimulatedAudit() {
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

/* ═══════════════════════════════════════════
 * Circular Gauge Component
 * ═══════════════════════════════════════════ */

function CircularGauge({ score }: { score: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const colorClass =
    score >= 90 ? 'deploy__gauge-fill--green' :
    score >= 50 ? 'deploy__gauge-fill--yellow' :
    'deploy__gauge-fill--red';

  return (
    <div className="deploy__gauge">
      <svg className="deploy__gauge-svg" viewBox="0 0 96 96">
        <circle className="deploy__gauge-bg" cx="48" cy="48" r={radius} />
        <circle
          className={`deploy__gauge-fill ${colorClass}`}
          cx="48"
          cy="48"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="deploy__gauge-value">{score}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
 * Status Icon Component
 * ═══════════════════════════════════════════ */

function StatusIcon({ status }: { status: CheckStatus }) {
  const iconClass = `deploy__check-icon deploy__check-icon--${status}`;
  switch (status) {
    case 'pass':
      return <CheckCircle2 size={20} className={iconClass} />;
    case 'warning':
      return <AlertTriangle size={20} className={iconClass} />;
    case 'fail':
      return <XCircle size={20} className={iconClass} />;
  }
}

/* ═══════════════════════════════════════════
 * Main Template
 * ═══════════════════════════════════════════ */

export function DeploymentReadinessTemplate() {
  const [hasRun, setHasRun] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const audit = useMemo(() => runSimulatedAudit(), []);

  const runChecks = useCallback(() => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 1200);
  }, []);

  const overallScore = useMemo(() => {
    if (!hasRun) return 0;
    const scores = audit.lighthouseScores.map(s => s.score);
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [hasRun, audit]);

  const overallClass =
    overallScore >= 90 ? 'deploy__overall-score--pass' :
    overallScore >= 50 ? 'deploy__overall-score--warning' :
    'deploy__overall-score--fail';

  const totalChecks = useMemo(() => {
    const all = [
      ...audit.lighthouseScores.flatMap(s => s.items),
      ...audit.brokenLinks,
      ...audit.wpCompat,
      ...audit.bundleSize,
    ];
    return {
      total: all.length,
      pass: all.filter(c => c.status === 'pass').length,
      warning: all.filter(c => c.status === 'warning').length,
      fail: all.filter(c => c.status === 'fail').length,
    };
  }, [audit]);

  const showToast = useCallback((message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  }, []);

  const exportJSON = useCallback(() => {
    const data = {
      timestamp: new Date().toISOString(),
      overallScore,
      lighthouseScores: audit.lighthouseScores.map(s => ({ label: s.label, score: s.score })),
      checks: totalChecks,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deployment-readiness-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Report exported as JSON');
  }, [audit, overallScore, totalChecks, showToast]);

  const breadcrumbs = [
    { label: 'Home', page: 'home' },
    { label: 'Dev Tools', page: 'dev-tools' },
    { label: 'Deployment Readiness' },
  ];

  /* ── Render helpers ── */

  function renderSection(
    title: string,
    icon: React.ReactNode,
    items: CheckItem[],
    badge?: { label: string; status: CheckStatus }
  ) {
    return (
      <div className="deploy__section">
        <div className="deploy__section-header">
          <h2 className="deploy__section-title">
            <span className="deploy__section-title-icon">{icon}</span>
            {title}
          </h2>
          {badge && (
            <span className={`deploy__section-badge deploy__section-badge--${badge.status}`}>
              {badge.label}
            </span>
          )}
        </div>
        <div className="deploy__checks">
          {items.map(item => (
            <div key={item.id} className="deploy__check">
              <StatusIcon status={item.status} />
              <span className="deploy__check-label">{item.label}</span>
              <span className="deploy__check-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ── Main return ── */

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart items={breadcrumbs} />

      {/* Hero Section */}
      <div className="deploy">
        <div className="deploy__inner">

          {/* Hero */}
          <div className="deploy__hero">
            <h1 className="deploy__title">Deployment Readiness</h1>
            <p className="deploy__subtitle">
              Pre-deploy validation dashboard with simulated Lighthouse scores, accessibility audit, broken link checker, and WordPress FSE compatibility check.
            </p>

            {hasRun && (
              <div className={`deploy__overall-score ${overallClass}`}>
                <CheckCircle2 size={20} />
                Overall Score: {overallScore}%
              </div>
            )}

            <div>
              <button
                className={`deploy__run-btn ${isRunning ? 'deploy__run-btn--running' : ''}`}
                onClick={runChecks}
                disabled={isRunning}
                aria-label={isRunning ? 'Running checks...' : 'Run all checks'}
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    Running Checks...
                  </>
                ) : hasRun ? (
                  <>
                    <RotateCcw size={18} />
                    Re-Run All Checks
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    Run All Checks
                  </>
                )}
              </button>
            </div>
          </div>

          {hasRun && (
            <>
              {/* Lighthouse Score Gauges */}
              <div className="deploy__scores">
                {audit.lighthouseScores.map(card => (
                  <div key={card.label} className="deploy__score-card">
                    <CircularGauge score={card.score} />
                    <span className="deploy__score-label">{card.label}</span>
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="deploy__stats">
                <div className="deploy__stat">
                  <span className="deploy__stat-value">{totalChecks.total}</span>
                  <span className="deploy__stat-label">Total Checks</span>
                </div>
                <div className="deploy__stat">
                  <span className="deploy__stat-value deploy__stat-value--success">{totalChecks.pass}</span>
                  <span className="deploy__stat-label">Passed</span>
                </div>
                <div className="deploy__stat">
                  <span className="deploy__stat-value deploy__stat-value--warning">{totalChecks.warning}</span>
                  <span className="deploy__stat-label">Warnings</span>
                </div>
                <div className="deploy__stat">
                  <span className="deploy__stat-value deploy__stat-value--fail">{totalChecks.fail}</span>
                  <span className="deploy__stat-label">Failed</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="deploy__progress">
                <div
                  className={`deploy__progress-fill ${
                    totalChecks.fail > 0
                      ? 'deploy__progress-fill--red'
                      : totalChecks.warning > 0
                      ? 'deploy__progress-fill--yellow'
                      : 'deploy__progress-fill--green'
                  }`}
                  style={{ width: `${Math.round((totalChecks.pass / totalChecks.total) * 100)}%` }}
                />
              </div>

              {/* Lighthouse Detail Sections */}
              {audit.lighthouseScores.map(card => {
                const passCount = card.items.filter(i => i.status === 'pass').length;
                const badgeLabel = `${passCount}/${card.items.length} passed`;
                const badgeStatus: CheckStatus =
                  passCount === card.items.length ? 'pass' :
                  card.items.some(i => i.status === 'fail') ? 'fail' : 'warning';

                return renderSection(
                  card.label,
                  <Gauge size={22} />,
                  card.items,
                  { label: badgeLabel, status: badgeStatus }
                );
              })}

              {/* Broken Links */}
              {renderSection(
                'Broken Link Checker',
                <LinkIcon size={22} />,
                audit.brokenLinks,
                {
                  label: `${audit.brokenLinks.filter(i => i.status === 'pass').length}/${audit.brokenLinks.length} passed`,
                  status: audit.brokenLinks.every(i => i.status === 'pass') ? 'pass' : 'warning',
                }
              )}

              {/* WordPress FSE Compatibility */}
              {renderSection(
                'WordPress FSE Compatibility',
                <Blocks size={22} />,
                audit.wpCompat,
                {
                  label: `${audit.wpCompat.filter(i => i.status === 'pass').length}/${audit.wpCompat.length} passed`,
                  status: audit.wpCompat.every(i => i.status === 'pass') ? 'pass' : 'warning',
                }
              )}

              {/* Bundle Size */}
              {renderSection(
                'Bundle Size & Code Splitting',
                <Package size={22} />,
                audit.bundleSize,
                {
                  label: `${audit.bundleSize.filter(i => i.status === 'pass').length}/${audit.bundleSize.length} passed`,
                  status: audit.bundleSize.every(i => i.status === 'pass') ? 'pass' : 'warning',
                }
              )}

              {/* Export Actions */}
              <div className="deploy__actions">
                <button
                  className="deploy__action-btn"
                  onClick={exportJSON}
                  aria-label="Export report as JSON"
                >
                  <Download size={16} />
                  Export JSON Report
                </button>
                <button
                  className="deploy__action-btn"
                  onClick={() => {
                    setHasRun(false);
                    showToast('Dashboard reset');
                  }}
                  aria-label="Reset dashboard"
                >
                  <RotateCcw size={16} />
                  Reset
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="deploy__toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </>
  );
}