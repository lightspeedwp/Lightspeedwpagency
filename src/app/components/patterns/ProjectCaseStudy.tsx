/**
 * Project Case Study Pattern
 *
 * WordPress pattern: Challenge/Solution/Results sections
 * Detailed case study breakdown for portfolio projects
 *
 * Features:
 * - 3-section layout (Challenge/Solution/Results)
 * - Icon-based section headers
 * - Glassmorphism cards
 * - Gradient accent borders
 * - Key metrics/statistics display
 * - Before/after comparisons
 * - ScrollReveal animations
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.project-case-study)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/ProjectCaseStudy.md
 */

import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Warning, Lightbulb, TrendUp, ArrowRight } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';

export interface CaseStudyMetric {
  label: string;
  value: string;
  change?: string;
}

export interface CaseStudySection {
  title: string;
  description: string;
  content: string[];
  metrics?: CaseStudyMetric[];
  image?: string;
}

export interface ProjectCaseStudyProps {
  challenge: CaseStudySection;
  solution: CaseStudySection;
  results: CaseStudySection;
  variant?: 'default' | 'glassmorphism';
}

const SectionIcon: Record<string, UniversalIcon> = {
  challenge: Warning,
  solution: Lightbulb,
  results: TrendUp,
};

export const ProjectCaseStudy = ({
  challenge,
  solution,
  results,
  variant = 'glassmorphism',
}: ProjectCaseStudyProps) => {
  const sections = [
    { key: 'challenge', data: challenge, colorClass: 'wp-text-destructive', bgClass: 'wp-bg-destructive' },
    { key: 'solution', data: solution, colorClass: 'wp-text-warning', bgClass: 'wp-bg-warning' },
    { key: 'results', data: results, colorClass: 'wp-text-success', bgClass: 'wp-bg-success' },
  ];

  return (
    <section className="project-case-study">
      <div className="project-case-study__container wp-max-w-6xl">
        {sections.map((section, index) => {
          const Icon = SectionIcon[section.key];

          return (
            <ScrollReveal
              key={section.key}
              animation="fade-up"
              duration={600}
              delay={index * 100}
            >
              <div
                className={`project-case-study__section project-case-study__section--${
                  variant === 'glassmorphism' ? 'glass' : 'default'
                }`}
              >
                {/* Gradient top stripe */}
                <div
                  className={`project-case-study__stripe ${section.bgClass}`}
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="project-case-study__header">
                  <div
                    className={`project-case-study__icon ${section.colorClass}`}
                  >
                    <Icon size={28} />
                  </div>
                  <h2 className="project-case-study__title">
                    {section.data.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="project-case-study__description">
                  {section.data.description}
                </p>

                {/* Content */}
                <div className="project-case-study__content">
                  {section.data.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="project-case-study__paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Image (if provided) */}
                {section.data.image && (
                  <div className="project-case-study__image-wrapper">
                    <img
                      src={section.data.image}
                      alt={`${section.data.title} illustration`}
                      className="project-case-study__image"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Metrics (if provided) */}
                {section.data.metrics && section.data.metrics.length > 0 && (
                  <div className="project-case-study__metrics">
                    {section.data.metrics.map((metric, mIndex) => (
                      <div
                        key={mIndex}
                        className="project-case-study__metric"
                      >
                        <div
                          className={`project-case-study__metric-value ${section.colorClass}`}
                        >
                          {metric.value}
                        </div>
                        <div className="project-case-study__metric-label">
                          {metric.label}
                        </div>
                        {metric.change && (
                          <div className="project-case-study__metric-change">
                            <ArrowRight size={14} />
                            {metric.change}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};