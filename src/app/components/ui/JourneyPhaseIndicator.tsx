/**
 * Journey Phase Indicator Component
 * 
 * Visual indicator showing which journey phase the current service belongs to.
 * Displays a horizontal timeline with all 6 phases, highlighting the current one.
 * 
 * Features:
 * - Compact horizontal layout
 * - Color-coded phase accents
 * - Clickable phase links
 * - Responsive design
 * - Current phase highlighted
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - Zero inline styles except CSS variable dynamic values
 * - All styling via @/styles/components/ui/journey-phase-indicator.css
 * - Fonts: var(--font-primary), var(--font-secondary) only
 * 
 * @example
 * ```tsx
 * <JourneyPhaseIndicator currentPhase="create" />
 * ```
 * 
 * @see /src/app/data/journey-stage-pages.ts
 * @see /src/styles/components/ui/journey-phase-indicator.css
 */

import '../../../styles/components/ui/journey-phase-indicator.css';
import { useEffect } from 'react';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { journeyStages } from '../../data/journey-stage-pages';
import { 
  trackJourneyPhaseClick, 
  trackPhaseIndicatorImpression,
  type JourneyPhase 
} from '../../utils/analytics';

export interface JourneyPhaseIndicatorProps {
  /** Current phase slug (e.g. "create") */
  currentPhase: string;
  /** Optional className for wrapper */
  className?: string;
  /** Show labels on phases (default: true on desktop, false on mobile) */
  showLabels?: boolean;
  /** Current service page slug (for analytics) */
  currentServicePage?: string;
}

export function JourneyPhaseIndicator({
  currentPhase,
  className = '',
  showLabels = true,
  currentServicePage = 'unknown',
}: JourneyPhaseIndicatorProps) {
  const currentIndex = journeyStages.findIndex((s) => s.slug === currentPhase);

  // Track impression when component mounts
  useEffect(() => {
    trackPhaseIndicatorImpression(currentPhase as JourneyPhase, currentServicePage);
  }, [currentPhase, currentServicePage]);

  // Handle phase node click
  const handlePhaseClick = (targetPhase: string) => {
    trackJourneyPhaseClick(
      currentPhase as JourneyPhase,
      targetPhase as JourneyPhase,
      currentServicePage
    );
  };

  return (
    <nav 
      className={`journey-phase-indicator ${className}`.trim()}
      aria-label="Website journey phase"
    >
      <div className="journey-phase-indicator__inner">
        <span className="journey-phase-indicator__label">
          Journey Phase:
        </span>
        
        <div className="journey-phase-indicator__track">
          {journeyStages.map((stage, idx) => {
            const state =
              idx < currentIndex
                ? 'completed'
                : idx === currentIndex
                ? 'active'
                : 'future';

            const PhaseIcon = stage.icon;

            return (
              <div key={stage.slug} className="wp-contents">
                {/* Connector line (before each node except the first) */}
                {idx > 0 && (
                  <div
                    className={`journey-phase-indicator__connector ${
                      idx <= currentIndex ? 'journey-phase-indicator__connector--filled' : ''
                    }`}
                    style={
                      idx <= currentIndex
                        ? ({
                            '--connector-from': journeyStages[idx - 1].accent,
                            '--connector-to': stage.accent,
                          } as React.CSSProperties)
                        : undefined
                    }
                    aria-hidden="true"
                  />
                )}

                {/* Phase node */}
                <Link
                  to={slugToPath(`journey-${stage.slug}`)}
                  className={`journey-phase-indicator__node journey-phase-indicator__node--${state}`}
                  style={{ '--node-accent': stage.accent } as React.CSSProperties}
                  aria-label={`Phase ${stage.step}: ${stage.name}${state === 'active' ? ' (current)' : ''}`}
                  aria-current={state === 'active' ? 'step' : undefined}
                  title={`${stage.step} ${stage.name}`}
                  onClick={() => handlePhaseClick(stage.slug)}
                >
                  <span className="journey-phase-indicator__pip">
                    <PhaseIcon size={14} />
                  </span>
                  {showLabels && (
                    <span className="journey-phase-indicator__node-label">
                      {stage.name}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
