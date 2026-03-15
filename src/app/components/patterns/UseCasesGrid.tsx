/**
 * UseCasesGrid Pattern
 * 
 * Grid display for use cases with icons and descriptions.
 * Maps to WordPress pattern: lsx-design/listing/use-cases
 */

import '../../../styles/patterns/use-cases-grid.css';
import type { UniversalIcon } from '../../utils/icon-map';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { CheckCircle } from '@phosphor-icons/react';

/**
 * Use Case Item Interface
 */
export interface UseCase {
  /** Use case title */
  title: string;
  /** Use case description */
  description: string;
  /** Relevant industries */
  industries: string[];
  /** Key features */
  features: string[];
}

/**
 * Use Cases Grid Props
 */
export interface UseCasesGridProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Use cases to display */
  useCases: UseCase[];
  /** Number of columns (1, 2, or 3) */
  columns?: 1 | 2 | 3;
  /** Background variant */
  variant?: 'default' | 'muted';
}

/**
 * Use Cases Grid Pattern Component
 * 
 * Displays industry-specific use cases in a responsive grid layout
 * with features, industries, and checkmark icons.
 */
export function UseCasesGrid({
  title = "Use Cases",
  description,
  useCases,
  columns = 2,
  variant = 'default'
}: UseCasesGridProps) {
  // Column class mapping for WordPress utility classes
  const columnClass = columns === 1 
    ? 'use-cases-grid__grid--1-col' 
    : columns === 2 
    ? 'use-cases-grid__grid--2-cols' 
    : 'use-cases-grid__grid--3-cols';

  return (
    <Section 
      spacing="xl" 
      background={variant === 'muted' ? 'muted' : 'default'}
    >
      <Container>
        <div className="wp-max-w-6xl wp-mx-auto">
          {/* Section Header */}
          {(title || description) && (
            <div className="use-cases-grid__header">
              {title && (
                <h2 className="use-cases-grid__title">
                  {title}
                </h2>
              )}

              {description && (
                <p className="use-cases-grid__description">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Use Cases Grid */}
          <div className={`use-cases-grid__grid ${columnClass}`}>
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="use-case-card"
              >
                {/* Title */}
                <h3 className="use-case-card__title">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="use-case-card__description">
                  {useCase.description}
                </p>

                {/* Industries */}
                {useCase.industries && useCase.industries.length > 0 && (
                  <div className="use-case-card__industries">
                    <div className="use-case-card__industries-label">
                      Industries:
                    </div>
                    <div className="use-case-card__tags">
                      {useCase.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="use-case-card__tag"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {useCase.features && useCase.features.length > 0 && (
                  <ul className="use-case-card__features">
                    {useCase.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="use-case-card__feature-item"
                      >
                        <CheckCircle 
                          size={16} 
                          className="use-case-card__feature-icon"
                        />
                        <span className="use-case-card__feature-text">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}