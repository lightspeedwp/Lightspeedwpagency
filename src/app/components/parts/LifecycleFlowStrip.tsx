/**
 * Lifecycle Flow Strip
 *
 * Displays 3-card horizontal strip showing lifecycle context:
 * prev stage → current stage (emphasized) → next stage
 *
 * Used in AI service pages to show where the service fits in the journey.
 *
 * BEM: .lifecycle-flow
 * CSS: /src/styles/parts/lifecycle-flow.css
 *
 * @see /src/app/data/ai-services-lifecycle-data.tsx
 */

import { ArrowRight } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';

interface LifecycleStageFlow {
  slug: string;
  name: string;
  icon: UniversalIcon;
  accent: string;
}

interface LifecycleFlowStripProps {
  /** Previous stage in the journey (optional for first stage) */
  prevStage?: LifecycleStageFlow;
  /** Current stage (emphasized with larger card) */
  currentStage: LifecycleStageFlow;
  /** Next stage in the journey (optional for last stage) */
  nextStage?: LifecycleStageFlow;
}

export function LifecycleFlowStrip({ prevStage, currentStage, nextStage }: LifecycleFlowStripProps) {
  return (
    <div className="lifecycle-flow">
      {/* Previous stage */}
      {prevStage && (
        <>
          <div
            className="lifecycle-flow__card lifecycle-flow__card--prev"
            style={{ '--_flow-accent': prevStage.accent } as React.CSSProperties}
          >
            {(() => {
              const PrevIcon = prevStage.icon;
              return (
                <>
                  <PrevIcon size={20} className="lifecycle-flow__icon" />
                  <span className="lifecycle-flow__name">{prevStage.name}</span>
                </>
              );
            })()}
          </div>
          <ArrowRight size={24} className="lifecycle-flow__arrow" />
        </>
      )}

      {/* Current stage (emphasized) */}
      <div
        className="lifecycle-flow__card lifecycle-flow__card--current"
        style={{ '--_flow-accent': currentStage.accent } as React.CSSProperties}
      >
        {(() => {
          const CurrentIcon = currentStage.icon;
          return (
            <>
              <CurrentIcon size={28} className="lifecycle-flow__icon" />
              <span className="lifecycle-flow__name">{currentStage.name}</span>
            </>
          );
        })()}
      </div>

      {/* Next stage */}
      {nextStage && (
        <>
          <ArrowRight size={24} className="lifecycle-flow__arrow" />
          <div
            className="lifecycle-flow__card lifecycle-flow__card--next"
            style={{ '--_flow-accent': nextStage.accent } as React.CSSProperties}
          >
            {(() => {
              const NextIcon = nextStage.icon;
              return (
                <>
                  <NextIcon size={20} className="lifecycle-flow__icon" />
                  <span className="lifecycle-flow__name">{nextStage.name}</span>
                </>
              );
            })()}
          </div>
        </>
      )}
    </div>
  );
}
