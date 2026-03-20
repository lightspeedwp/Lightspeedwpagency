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
 * @see /src/app/data/deployment-readiness-data.ts — Audit data
 * @see /src/app/components/templates/deployment-readiness/DeploymentComponents.tsx — Sub-components
 */

import '../../../styles/templates/deployment-readiness.css';
import { useState, useCallback, useMemo } from 'react';
import {
  Gauge,
  LinkSimple,
  Wheelchair,
  Package,
  Cube,
  ClipboardText,
  CheckCircle,
  Play,
  DownloadSimple,
  ArrowCounterClockwise,
  ArrowsClockwise,
} from '@phosphor-icons/react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import {
  runSimulatedAudit,
  deploymentBreadcrumbs,
  type CheckStatus,
} from '../../data/deployment-readiness-data';
import { CircularGauge, AuditSection } from './deployment-readiness/DeploymentComponents';

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

  /* ── Helper: get badge for a section ── */
  function sectionBadge(items: { status: string }[]): { label: string; status: CheckStatus } {
    const passCount = items.filter(i => i.status === 'pass').length;
    return {
      label: `${passCount}/${items.length} passed`,
      status: passCount === items.length ? 'pass' : items.some(i => i.status === 'fail') ? 'fail' : 'warning',
    };
  }

  /* ── Main return ── */

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart items={deploymentBreadcrumbs} />

      {/* Hero Section */}
      <div className="deploy">
        <div className="deploy__inner">

          {/* Hero */}
          <div className="deploy__hero">
            <h1 className="deploy__title">Deployment readiness</h1>
            <p className="deploy__subtitle">
              Pre-deploy validation dashboard with simulated Lighthouse scores, accessibility audit, broken link checker, and WordPress FSE compatibility check.
            </p>

            {hasRun && (
              <div className={`deploy__overall-score ${overallClass}`}>
                <CheckCircle size={20} />
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
                    <ArrowsClockwise size={18} className="wp-animate-spin" />
                    Running Checks...
                  </>
                ) : hasRun ? (
                  <>
                    <ArrowCounterClockwise size={18} />
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
              {audit.lighthouseScores.map(card => (
                <AuditSection
                  key={card.label}
                  title={card.label}
                  icon={<Gauge size={22} />}
                  items={card.items}
                  badge={sectionBadge(card.items)}
                />
              ))}

              {/* Broken Links */}
              <AuditSection
                title="Broken link checker"
                icon={<LinkSimple size={22} />}
                items={audit.brokenLinks}
                badge={sectionBadge(audit.brokenLinks)}
              />

              {/* WordPress FSE Compatibility */}
              <AuditSection
                title="WordPress FSE Compatibility"
                icon={<Cube size={22} />}
                items={audit.wpCompat}
                badge={sectionBadge(audit.wpCompat)}
              />

              {/* Bundle Size */}
              <AuditSection
                title="Bundle size & code splitting"
                icon={<Package size={22} />}
                items={audit.bundleSize}
                badge={sectionBadge(audit.bundleSize)}
              />

              {/* Export Actions */}
              <div className="deploy__actions">
                <button
                  className="deploy__action-btn"
                  onClick={exportJSON}
                  aria-label="Export report as JSON"
                >
                  <DownloadSimple size={16} />
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
                  <ArrowCounterClockwise size={16} />
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