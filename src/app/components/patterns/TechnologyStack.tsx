/**
 * Technology Stack Pattern
 *
 * WordPress pattern: Technology/tools showcase
 * Displays technologies and tools used in a project
 *
 * Features:
 * - Icon grid layout
 * - Category grouping (Frontend/Backend/DevOps/Tools)
 * - Glassmorphism badges
 * - Tooltip on hover
 * - ScrollReveal animations
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.technology-stack)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/TechnologyStack.md
 */

import { ScrollReveal } from '../../hooks/useScrollReveal';
import type { UniversalIcon } from '../../utils/icon-map';

export interface Technology {
  id: string;
  name: string;
  icon?: UniversalIcon;
  logo?: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'design';
  color?: string;
}

export interface TechnologyStackProps {
  technologies: Technology[];
  title?: string;
  description?: string;
  groupByCategory?: boolean;
  variant?: 'grid' | 'badges';
}

export const TechnologyStack = ({
  technologies,
  title = 'Technology Stack',
  description,
  groupByCategory = true,
  variant = 'badges',
}: TechnologyStackProps) => {
  const groupedTechnologies = groupByCategory
    ? technologies.reduce(
        (acc, tech) => {
          if (!acc[tech.category]) {
            acc[tech.category] = [];
          }
          acc[tech.category].push(tech);
          return acc;
        },
        {} as Record<string, Technology[]>
      )
    : { all: technologies };

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps & Infrastructure',
    tools: 'Tools & Platforms',
    design: 'Design',
    all: '',
  };

  return (
    <section className="technology-stack">
      <div className="technology-stack__container wp-max-w-6xl">
        <ScrollReveal animation="fade-up" duration={500}>
          <div className="technology-stack__header">
            <h2 className="technology-stack__title">{title}</h2>
            {description && (
              <p className="technology-stack__description">{description}</p>
            )}
          </div>
        </ScrollReveal>

        <div className="technology-stack__groups">
          {Object.entries(groupedTechnologies).map(
            ([category, techs], groupIndex) => (
              <div key={category} className="technology-stack__group">
                {categoryLabels[category] && (
                  <ScrollReveal
                    animation="fade-up"
                    duration={500}
                    delay={groupIndex * 50}
                  >
                    <h3 className="technology-stack__category-title">
                      {categoryLabels[category]}
                    </h3>
                  </ScrollReveal>
                )}

                <div
                  className={`technology-stack__${variant} ${
                    variant === 'grid'
                      ? 'technology-stack__grid--layout'
                      : 'technology-stack__badges--layout'
                  }`}
                >
                  {techs.map((tech, techIndex) => (
                    <ScrollReveal
                      key={tech.id}
                      animation="fade-up"
                      duration={500}
                      delay={groupIndex * 50 + techIndex * 30}
                    >
                      <div
                        className={`technology-stack__item technology-stack__item--${variant}`}
                        title={tech.name}
                      >
                        {tech.icon && (
                          <tech.icon
                            size={variant === 'grid' ? 32 : 20}
                            className="technology-stack__icon wp-text-primary"
                          />
                        )}
                        {tech.logo && (
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="technology-stack__logo"
                            loading="lazy"
                          />
                        )}
                        <span className="technology-stack__name">
                          {tech.name}
                        </span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};