/**
 * Lifecycle Stage Badge
 *
 * Displays one or more lifecycle stage indicators with icon, name, and accent color.
 * Used in AI sub-pages to show which stage(s) of the AI Services Lifecycle
 * the solution or service belongs to.
 *
 * BEM: .lifecycle-badge
 * CSS: /src/styles/parts/lifecycle-badge.css
 *
 * @see /src/app/data/ai-services-lifecycle-data.tsx
 */

import type { UniversalIcon } from '../../utils/icon-map';

interface LifecycleStage {
  slug: string;
  name: string;
  icon: UniversalIcon;
  accent: string;
}

interface LifecycleStageBadgeProps {
  stages: LifecycleStage[];
}

export function LifecycleStageBadge({ stages }: LifecycleStageBadgeProps) {
  return (
    <div className="lifecycle-badge">
      {stages.map((stage) => {
        const StageIcon = stage.icon;
        return (
          <div
            key={stage.slug}
            className="lifecycle-badge__item"
            style={{ '--_badge-accent': stage.accent } as React.CSSProperties}
          >
            <StageIcon size={16} className="lifecycle-badge__icon" />
            <span className="lifecycle-badge__name">{stage.name}</span>
          </div>
        );
      })}
    </div>
  );
}
