/**
 * Journey Stage Navigation Components
 *
 * Horizontal progress bar and prev/next stage navigation
 * extracted from JourneyStageTemplate.tsx for file size compliance.
 *
 * @see /src/styles/templates/page-journey-stage.css
 * @see /src/app/data/journey-stage-pages.ts
 */

import React from 'react';
import { Link } from 'react-router';
import { slugToPath } from '../../../utils/route-map';
import { journeyStages } from '../../../data/journey-stage-pages';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';

/**
 * Horizontal Journey Progress Bar
 *
 * Shows all 6 phases with the current phase highlighted.
 * Completed (previous) phases are filled, future phases are dimmed.
 */
export function JourneyProgressBar({ currentIndex }: { currentIndex: number }) {
  return (
    <nav className="journey-progress" aria-label="Website journey progress">
      <div className="journey-progress__track">
        {journeyStages.map((stage, idx) => {
          const state =
            idx < currentIndex
              ? 'completed'
              : idx === currentIndex
              ? 'active'
              : 'future';

          return (
            <div key={stage.slug} className="wp-contents">
              {/* Connector line (before each node except the first) */}
              {idx > 0 && (
                <div
                  className={`journey-progress__connector ${
                    idx <= currentIndex ? 'journey-progress__connector--filled' : ''
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
                className={`journey-progress__node journey-progress__node--${state}`}
                style={{ '--node-accent': stage.accent } as React.CSSProperties}
                aria-label={`Phase ${stage.step}: ${stage.name}${state === 'active' ? ' (current)' : ''}`}
                aria-current={state === 'active' ? 'step' : undefined}
              >
                <span className="journey-progress__pip">{stage.step}</span>
                <span className="journey-progress__label">{stage.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

/**
 * Prev / Next Stage Navigation
 */
export function StageNavigation({ currentIndex }: { currentIndex: number }) {
  const prev = currentIndex > 0 ? journeyStages[currentIndex - 1] : null;
  const next = currentIndex < journeyStages.length - 1 ? journeyStages[currentIndex + 1] : null;

  return (
    <div className="journey-stage__nav">
      <div className="journey-stage__nav-inner">
        {prev ? (
          <Link
            to={slugToPath(`journey-${prev.slug}`)}
            className="journey-stage__nav-link journey-stage__nav-link--prev"
            style={{ '--nav-accent': prev.accent } as React.CSSProperties}
          >
            <div
              className="journey-stage__nav-pip"
              style={{ '--nav-accent': prev.accent } as React.CSSProperties}
            >
              <ArrowLeft size={20} />
            </div>
            <div className="journey-stage__nav-text">
              <span className="journey-stage__nav-label">Previous phase</span>
              <span className="journey-stage__nav-name">
                {prev.step} {prev.name}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            to={slugToPath(`journey-${next.slug}`)}
            className="journey-stage__nav-link journey-stage__nav-link--next"
            style={{ '--nav-accent': next.accent } as React.CSSProperties}
          >
            <div
              className="journey-stage__nav-pip"
              style={{ '--nav-accent': next.accent } as React.CSSProperties}
            >
              <ArrowRight size={20} />
            </div>
            <div className="journey-stage__nav-text">
              <span className="journey-stage__nav-label">Next phase</span>
              <span className="journey-stage__nav-name">
                {next.step} {next.name}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
