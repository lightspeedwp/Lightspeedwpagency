/**
 * Stats Section Pattern
 * 
 * WordPress pattern: lsx-design/content/stats
 * 
 * Displays key statistics in a grid layout with optional section title.
 * Used for showcasing company metrics, achievements, or impact.
 * 
 * Variants:
 *   - default:       Light surface with neon divider lines
 *   - highlighted:   Primary-gradient background with white text
 *   - funky:         Orbs + glassmorphism (dark page assumed)
 *   - proven-track:  Always-dark panel with mesh, conic borders,
 *                    holographic shimmer — own CSS file
 * 
 * @see /src/styles/patterns/stats-section.css
 * @see /src/styles/patterns/stats-proven-track.css
 */

import '../../../styles/patterns/stats-proven-track.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import type { UniversalIcon } from '../../utils/icon-map';

export interface Stat {
  number: string;
  label: string;
  description?: string;
  icon?: UniversalIcon;
}

interface StatsSectionProps {
  /** Optional section title displayed above the stats grid */
  title?: string;
  /** Optional section description below the title */
  description?: string;
  stats: Stat[];
  variant?: 'default' | 'highlighted' | 'funky' | 'proven-track';
}

export function StatsSection({ title, description, stats, variant = 'default' }: StatsSectionProps) {

  /* ─── proven-track variant: completely separate markup ─── */
  if (variant === 'proven-track') {
    return (
      <Section spacing="lg">
        <Container>
          <div className="stats-track" role="region" aria-label={title || 'Statistics'}>
            {/* Decorative layers */}
            <div className="stats-track__glow-line" aria-hidden="true" />
            <div className="stats-track__mesh" aria-hidden="true" />
            <div className="stats-track__scanlines" aria-hidden="true" />
            <div className="stats-track__orb stats-track__orb--left" aria-hidden="true" />
            <div className="stats-track__orb stats-track__orb--right" aria-hidden="true" />

            <div className="stats-track__inner">
              {/* Header */}
              {(title || description) && (
                <div className="stats-track__header">
                  {title && <h2 className="stats-track__title">{title}</h2>}
                  {description && <p className="stats-track__subtitle">{description}</p>}
                </div>
              )}

              {/* Grid */}
              <div className="stats-track__grid" role="list">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stats-track__card-outer" role="listitem">
                      <div className="stats-track__card">
                        {Icon && (
                          <div className="stats-track__icon-wrapper">
                            <Icon weight="duotone" size={28} />
                          </div>
                        )}
                        <div className="stats-track__number">{stat.number}</div>
                        <div className="stats-track__label">{stat.label}</div>
                        {stat.description && (
                          <p className="stats-track__description">{stat.description}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  /* ─── default / highlighted / funky variants ─── */
  const sectionClass = `stats-section--${variant}`;

  return (
    <Section 
      spacing="lg"
      className={sectionClass}
    >
      <Container>
        <div className="stats-section__inner">
          {/* Optional Section Header */}
          {(title || description) && (
            <div className="stats-section__header">
              {title && (
                <h2 className="stats-section__title">
                  {title}
                </h2>
              )}
              {description && (
                <p className="stats-section__subtitle">
                  {description}
                </p>
              )}
            </div>
          )}

          <div 
            className="stats-section__grid"
            role="list"
          >
            {stats.map((stat, index) => {
              // Build label class
              const labelClass = [
                'stats-section__label',
                stat.description && 'stats-section__label--with-description'
              ].filter(Boolean).join(' ');

              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  role="listitem"
                  className="stats-section__item"
                >
                  {Icon && (
                    <div className="stats-section__icon-wrapper">
                      <Icon weight="duotone" size={32} className="stats-section__icon" />
                    </div>
                  )}

                  <div className="stats-section__number">
                    {stat.number}
                  </div>

                  <div className={labelClass}>
                    {stat.label}
                  </div>

                  {stat.description && (
                    <p className="stats-section__description">
                      {stat.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}