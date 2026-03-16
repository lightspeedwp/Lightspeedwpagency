import { ArrowRight } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';

export interface RelatedSolutionItem {
  id: string;
  icon: UniversalIcon;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export interface ServiceRelatedSolutionsProps {
  heading?: string;
  subheading?: string;
  solutions: RelatedSolutionItem[];
  columns?: 2 | 3 | 4;
}

export function ServiceRelatedSolutions({
  heading,
  subheading,
  solutions,
  columns = 3
}: ServiceRelatedSolutionsProps) {
  const gridClass = `wp-grid-${columns}-cols`;

  return (
    <div className="wp-w-full wp-py-16">
      
      {/* Section Header */}
      {(heading || subheading) && (
        <div className="wp-flex wp-flex-col wp-items-center wp-justify-center wp-text-center wp-mb-12">
          {heading && (
            <h2 className="wp-m-0 wp-mb-4 template-section-header__title template-section-header__title--h2">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="wp-m-0 wp-max-w-3xl template-section-header__description template-section-header__description--secondary">
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Grid */}
      <div className={`${gridClass} wp-gap-8`}>
        {solutions.map((solution) => {
          const Icon = solution.icon;
          
          return (
            <div 
              key={solution.id} 
              className="wp-flex wp-flex-col wp-p-8 wp-items-center wp-text-center"
              style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
                height: '100%'
              }}
            >
              {/* Icon */}
              <div 
                className="wp-flex wp-items-center wp-justify-center shrink-0 wp-mb-6" 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: 'var(--radius-full)', 
                  backgroundColor: 'var(--primary-soft)', 
                  color: 'var(--primary)',
                  boxShadow: '0 0 25px var(--primary-soft)'
                }}
              >
                <Icon size={32} weight="duotone" />
              </div>

              {/* Content */}
              <h3 className="wp-m-0 wp-mb-3" style={{ 
                fontFamily: 'var(--font-primary)', 
                fontSize: 'var(--text-h4)', 
                color: 'var(--card-foreground)'
              }}>
                {solution.title}
              </h3>
              
              <p className="wp-m-0 wp-mb-6 wp-flex-1" style={{ 
                fontFamily: 'var(--font-secondary)', 
                fontSize: 'var(--text-base)', 
                color: 'var(--muted-foreground)',
                lineHeight: '1.6'
              }}>
                {solution.description}
              </p>

              {/* Action Link */}
              {solution.link && (
                <div className="wp-mt-auto">
                  <Link 
                    to={getPageUrl(solution.link)}
                    className="wp-inline-flex wp-items-center wp-gap-2"
                    style={{
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      textDecoration: 'none'
                    }}
                  >
                    {solution.linkText || 'Learn More'} <ArrowRight size={16} weight="bold" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}