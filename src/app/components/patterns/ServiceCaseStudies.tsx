/**
 * ServiceCaseStudies Component
 * 
 * Displays case study snippets on service pages.
 * Shows real project examples with Challenge → Solution → Results format.
 * 
 * WordPress Equivalent: Custom Query Loop with case study post type
 * 
 * @component
 * @example
 * ```tsx
 * <ServiceCaseStudies
 *   serviceSlug="design"
 *   title="Real Projects, Real Results"
 *   limit={2}
 * />
 * ```
 */

import { Link } from 'react-router';
import { ArrowRight } from '@phosphor-icons/react';
import { getCaseStudiesForService, getFeaturedCaseStudies, type ServiceCaseStudy } from '../../data/service-case-studies';
import { ScrollReveal } from '../../hooks/useScrollReveal';
// CSS imported centrally via /src/styles/index.css

export interface ServiceCaseStudiesProps {
  /** Service slug to fetch case studies for */
  serviceSlug: string;
  
  /** Section title */
  title?: string;
  
  /** Section description */
  description?: string;
  
  /** Maximum number of case studies to display */
  limit?: number;
  
  /** Show only featured case studies */
  featuredOnly?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * ServiceCaseStudies Component
 * 
 * Displays case study snippets for a service.
 */
export const ServiceCaseStudies = ({ 
  serviceSlug, 
  title = "Real Projects, Real Results",
  description = "See how we've helped clients succeed with this service.",
  limit = 2,
  featuredOnly = false,
  className = ''
}: ServiceCaseStudiesProps) => {
  // Get case studies
  const caseStudies = featuredOnly 
    ? getFeaturedCaseStudies(serviceSlug) 
    : getCaseStudiesForService(serviceSlug);
  
  // Limit results
  const displayCaseStudies = limit 
    ? caseStudies.slice(0, limit) 
    : caseStudies;
  
  // Don't render if no case studies
  if (displayCaseStudies.length === 0) {
    return null;
  }
  
  return (
    <div className={`service-case-studies ${className}`}>
      {/* Header */}
      <div className="service-case-studies__header">
        <h2>{title}</h2>
        {description && (
          <p>{description}</p>
        )}
      </div>
      
      {/* Case Studies List */}
      <div className="service-case-studies__list">
        {displayCaseStudies.map((caseStudy, index) => (
          <ScrollReveal key={caseStudy.id} animation="fade-up" delay={index * 100}>
            <CaseStudyCard caseStudy={caseStudy} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

/**
 * CaseStudyCard Sub-Component
 * 
 * Individual case study card with Challenge → Solution → Results.
 */
const CaseStudyCard = ({ caseStudy }: { caseStudy: ServiceCaseStudy }) => {
  return (
    <div className="service-case-studies__card">
      {/* Project Header */}
      <div className="service-case-studies__card-header">
        <h3 className="service-case-studies__project-name">
          {caseStudy.projectName}
        </h3>
        <p className="service-case-studies__client">
          Client: {caseStudy.client}
        </p>
      </div>
      
      {/* Challenge */}
      <div className="service-case-studies__section">
        <h4 className="service-case-studies__section-title">
          Challenge
        </h4>
        <p className="service-case-studies__text">
          {caseStudy.challenge}
        </p>
      </div>
      
      {/* Solution */}
      <div className="service-case-studies__section">
        <h4 className="service-case-studies__section-title">
          Solution
        </h4>
        <p className="service-case-studies__text">
          {caseStudy.solution}
        </p>
      </div>
      
      {/* Results */}
      <div className="service-case-studies__section">
        <h4 className="service-case-studies__section-title">
          Results
        </h4>
        <div className="service-case-studies__results">
          {caseStudy.results.map((result, i) => (
            <div key={i} className="service-case-studies__result">
              {result.icon && (
                <result.icon 
                  className="service-case-studies__result-icon" 
                  size={20} 
                />
              )}
              <span className="service-case-studies__metric">
                {result.metric}
              </span>
              <span className="service-case-studies__label">
                {result.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Technologies (if exists) */}
      {caseStudy.technologies && caseStudy.technologies.length > 0 && (
        <div className="service-case-studies__technologies">
          <span className="service-case-studies__tech-label">
            Technologies:
          </span>
          {caseStudy.technologies.map(tech => (
            <span 
              key={tech} 
              className="service-case-studies__tech"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {/* CTA */}
      <Link 
        to={`/work/${caseStudy.portfolioSlug}`}
        className="service-case-studies__cta"
      >
        View Full Case Study
        <ArrowRight className="service-case-studies__cta-icon" size={16} />
      </Link>
      
      {/* Service Tags */}
      {caseStudy.serviceTags && caseStudy.serviceTags.length > 0 && (
        <div className="service-case-studies__tags">
          {caseStudy.serviceTags.map(tag => (
            <span 
              key={tag} 
              className="service-case-studies__tag"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};