/**
 * Code Quality Dashboard Template
 *
 * Static analysis display — DOM complexity, CSS file inventory,
 * component dependency counts, route stats, data file stats,
 * design token counts, and compliance scores.
 *
 * WordPress template: N/A (dev tool)
 * BEM naming: .cq-dashboard-*
 *
 * @see /src/styles/templates/code-quality-dashboard.css
 * @see /src/app/data/code-quality-dashboard-data.tsx — Static data
 */

import '../../../styles/templates/code-quality-dashboard.css';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import {
  Pulse,
  Database,
  FileCode,
  Path,
  Shield,
  Swatches,
  DotsSix,
  CheckCircle,
} from '@phosphor-icons/react';
import {
  componentCounts,
  routeStats,
  dataFileStats,
  tokenCategories,
  cssFileCategories,
  complianceScores,
  totalComponents,
  totalTokens,
  totalDataEntries,
  avgCompliance,
} from '../../data/code-quality-dashboard-data';

/* ═══════════════════════════════════════════
 * Score Ring SVG Component
 * ═══════════════════════════════════════════ */

function ScoreRing({ score, max = 100 }: { score: number; max?: number }) {
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const percent = score / max;
  const offset = circumference * (1 - percent);

  const getGrade = (s: number) => {
    if (s >= 97) return 'A+';
    if (s >= 93) return 'A';
    if (s >= 90) return 'A−';
    if (s >= 85) return 'B+';
    if (s >= 80) return 'B';
    return 'C';
  };

  const getColor = (s: number) => {
    if (s >= 90) return 'var(--success)';
    if (s >= 75) return 'var(--category-amber)';
    return 'var(--destructive)';
  };

  return (
    <div className="cq-dashboard__score-container">
      <div className="cq-dashboard__score-ring">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r={radius} fill="none" stroke="var(--border)" strokeWidth="8" />
          <circle
            cx="80" cy="80" r={radius} fill="none"
            stroke={getColor(score)} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={offset}
          />
        </svg>
        <div className="cq-dashboard__score-text">
          <span className="cq-dashboard__score-number">{score}</span>
          <span className="cq-dashboard__score-max">/ {max}</span>
        </div>
      </div>
      <div className="cq-dashboard__score-grade" style={{ color: getColor(score) }}>
        Grade: {getGrade(score)}
      </div>
      <p className="cq-dashboard__score-description">
        Overall code quality score based on compliance metrics, architecture standards,
        and design system adherence.
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════
 * Main Component
 * ═══════════════════════════════════════════ */

export function CodeQualityDashboardTemplate() {
  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Dev Tools', page: 'dev-tools' },
          { label: 'Code Quality' },
        ]}
      />

      {/* Hero */}
      <div className="cq-dashboard__hero">
        <div className="cq-dashboard__hero-orb" aria-hidden="true" />
        <div className="cq-dashboard__hero-inner">
          <div className="cq-dashboard__hero-badge">
            <Pulse size={14} />
            Code Quality
          </div>
          <h1 className="cq-dashboard__hero-title">Code Quality Dashboard</h1>
          <p className="cq-dashboard__hero-subtitle">
            Static analysis of the LSX Design codebase — component counts, route stats,
            CSS architecture, design token inventory, and compliance scores.
          </p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="cq-dashboard__stats-bar">
        {[
          { value: totalComponents, label: 'Total Components', variant: 'info' },
          { value: '117', label: 'Routes', variant: 'success' },
          { value: totalTokens, label: 'Design Tokens', variant: 'info' },
          { value: `${avgCompliance}%`, label: 'Avg Compliance', variant: 'success' },
          { value: totalDataEntries, label: 'Data Entries', variant: 'info' },
        ].map((stat, i) => (
          <div key={i} className="cq-dashboard__stat-card">
            <div className={`cq-dashboard__stat-value cq-dashboard__stat-value--${stat.variant}`}>
              {stat.value}
            </div>
            <div className="cq-dashboard__stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="cq-dashboard__content">

        {/* ── Overall Score ── */}
        <div className="cq-dashboard__section">
          <div className="cq-dashboard__section-header">
            <div className="cq-dashboard__section-icon"><Shield size={18} /></div>
            <h2 className="cq-dashboard__section-title">Overall Quality Score</h2>
            <span className="cq-dashboard__section-badge cq-dashboard__section-badge--success">
              <CheckCircle size={12} className="wp-mr-1" /> Excellent
            </span>
          </div>
          <div className="cq-dashboard__section-body">
            <ScoreRing score={avgCompliance} />
          </div>
        </div>

        {/* ── Component Inventory ── */}
        <div className="cq-dashboard__section">
          <div className="cq-dashboard__section-header">
            <div className="cq-dashboard__section-icon"><DotsSix size={18} /></div>
            <h2 className="cq-dashboard__section-title">Component Inventory</h2>
            <span className="cq-dashboard__section-badge cq-dashboard__section-badge--info">{totalComponents} total</span>
          </div>
          <div className="cq-dashboard__section-body">
            <div className="cq-dashboard__category-grid">
              {componentCounts.map(cat => (
                <div key={cat.name} className="cq-dashboard__category-card">
                  <div className="cq-dashboard__category-icon">{cat.icon}</div>
                  <div className="cq-dashboard__category-count">{cat.count}</div>
                  <div className="cq-dashboard__category-name">{cat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Route Statistics ── */}
        <div className="cq-dashboard__section">
          <div className="cq-dashboard__section-header">
            <div className="cq-dashboard__section-icon"><Path size={18} /></div>
            <h2 className="cq-dashboard__section-title">Route Statistics</h2>
            <span className="cq-dashboard__section-badge cq-dashboard__section-badge--success">0 broken</span>
          </div>
          <div className="cq-dashboard__section-body">
            <div className="cq-dashboard__metrics-list">
              {routeStats.map(stat => (
                <div key={stat.name} className="cq-dashboard__metric-row">
                  <span className="cq-dashboard__metric-name">{stat.name}</span>
                  <span className={`cq-dashboard__metric-value cq-dashboard__metric-value--${stat.status}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Data File Stats ── */}
        <div className="cq-dashboard__section">
          <div className="cq-dashboard__section-header">
            <div className="cq-dashboard__section-icon"><Database size={18} /></div>
            <h2 className="cq-dashboard__section-title">Data File Statistics</h2>
            <span className="cq-dashboard__section-badge cq-dashboard__section-badge--info">{totalDataEntries} entries</span>
          </div>
          <div className="cq-dashboard__section-body">
            <div className="cq-dashboard__data-grid">
              {dataFileStats.map(df => (
                <div key={df.name} className="cq-dashboard__data-card">
                  <div className="cq-dashboard__data-icon">{df.icon}</div>
                  <div className="cq-dashboard__data-info">
                    <span className="cq-dashboard__data-name">{df.name}</span>
                    <span className="cq-dashboard__data-count">{df.entries} entries · {df.file}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Design Token Inventory ── */}
        <div className="cq-dashboard__section">
          <div className="cq-dashboard__section-header">
            <div className="cq-dashboard__section-icon"><Swatches size={18} /></div>
            <h2 className="cq-dashboard__section-title">Design Token Inventory</h2>
            <span className="cq-dashboard__section-badge cq-dashboard__section-badge--info">{totalTokens} tokens</span>
          </div>
          <div className="cq-dashboard__section-body">
            <div className="cq-dashboard__tokens-grid">
              {tokenCategories.map(tok => (
                <div key={tok.name} className="cq-dashboard__token-card">
                  <div className="cq-dashboard__token-swatch" style={{ background: tok.swatch }} />
                  <div className="cq-dashboard__token-count">{tok.count}</div>
                  <div className="cq-dashboard__token-name">{tok.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CSS Architecture ── */}
        <div className="cq-dashboard__section">
          <div className="cq-dashboard__section-header">
            <div className="cq-dashboard__section-icon"><FileCode size={18} /></div>
            <h2 className="cq-dashboard__section-title">CSS Architecture</h2>
            <span className="cq-dashboard__section-badge cq-dashboard__section-badge--info">145+ files</span>
          </div>
          <div className="cq-dashboard__section-body">
            <div className="cq-dashboard__css-list">
              <div className="cq-dashboard__css-row wp-font-semibold">
                <span className="cq-dashboard__css-file wp-font-primary">File</span>
                <span className="cq-dashboard__css-size">Lines</span>
                <span className="cq-dashboard__css-category">Category</span>
              </div>
              {cssFileCategories.map(css => (
                <div key={css.file} className="cq-dashboard__css-row">
                  <span className="cq-dashboard__css-file">{css.file}</span>
                  <span className="cq-dashboard__css-size">~{css.lines}</span>
                  <span className="cq-dashboard__css-category">{css.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Compliance Scores ── */}
        <div className="cq-dashboard__section">
          <div className="cq-dashboard__section-header">
            <div className="cq-dashboard__section-icon"><CheckCircle size={18} /></div>
            <h2 className="cq-dashboard__section-title">Compliance Scores</h2>
            <span className="cq-dashboard__section-badge cq-dashboard__section-badge--success">{avgCompliance}% avg</span>
          </div>
          <div className="cq-dashboard__section-body">
            <div className="cq-dashboard__progress-container">
              {complianceScores.map(cs => (
                <div key={cs.name} className="cq-dashboard__progress-item">
                  <div className="cq-dashboard__progress-header">
                    <span className="cq-dashboard__progress-label">{cs.name}</span>
                    <span className="cq-dashboard__progress-percent">{cs.value}%</span>
                  </div>
                  <div className="cq-dashboard__progress-track">
                    <div
                      className={`cq-dashboard__progress-fill ${cs.value >= 95 ? 'cq-dashboard__progress-fill--success' : cs.value >= 80 ? '' : 'cq-dashboard__progress-fill--warning'}`}
                      style={{ width: `${cs.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeQualityDashboardTemplate;
