/**
 * Deployment Readiness — Sub-components
 *
 * Extracted from DeploymentReadinessTemplate.tsx for file size compliance.
 * Contains CircularGauge, StatusIcon, and renderSection helper.
 *
 * @see /src/app/components/templates/DeploymentReadinessTemplate.tsx
 */

import {
  CheckCircle,
  XCircle,
  Warning,
} from '@phosphor-icons/react';
import type { CheckStatus, CheckItem } from '../../../data/deployment-readiness-data';

/* ═══════════════════════════════════════════
 * Circular Gauge Component
 * ═══════════════════════════════════════════ */

export function CircularGauge({ score }: { score: number }) {
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

export function StatusIcon({ status }: { status: CheckStatus }) {
  const iconClass = `deploy__check-icon deploy__check-icon--${status}`;
  switch (status) {
    case 'pass':
      return <CheckCircle size={20} className={iconClass} />;
    case 'warning':
      return <Warning size={20} className={iconClass} />;
    case 'fail':
      return <XCircle size={20} className={iconClass} />;
  }
}

/* ═══════════════════════════════════════════
 * Section Renderer
 * ═══════════════════════════════════════════ */

export function AuditSection({
  title,
  icon,
  items,
  badge,
}: {
  title: string;
  icon: React.ReactNode;
  items: CheckItem[];
  badge?: { label: string; status: CheckStatus };
}) {
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
