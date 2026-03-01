/**
 * ServiceComparisonTable Component
 * 
 * Comparison table showing features across all service offerings.
 * Helps users understand what's included in each service.
 * 
 * WordPress Equivalent: Custom table block with dynamic data
 * 
 * @component
 * @example
 * ```tsx
 * <ServiceComparisonTable
 *   title="Compare Our Services"
 *   description="See what's included in each service."
 * />
 * ```
 */

import { Fragment } from 'react';
import { Check } from 'lucide-react';
import { 
  featureCategories, 
  serviceComparisons, 
  serviceIncludesFeature
} from '../../data/service-comparison';
// CSS imported centrally via /src/styles/index.css

export interface ServiceComparisonTableProps {
  /** Services to compare (default: all) */
  services?: string[];
  
  /** Feature categories to show (default: all) */
  categories?: string[];
  
  /** Section title */
  title?: string;
  
  /** Section description */
  description?: string;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * ServiceComparisonTable Component
 * 
 * Displays comparison table of service features.
 */
export const ServiceComparisonTable = ({ 
  services,
  categories,
  title = "Compare Our Services",
  description = "See what's included in each service offering.",
  className = ''
}: ServiceComparisonTableProps) => {
  // Get services to display
  const displayServices = services 
    ? serviceComparisons.filter(s => services.includes(s.slug))
    : serviceComparisons;
  
  // Get categories to display
  const displayCategories = categories
    ? featureCategories.filter(c => categories.includes(c.name))
    : featureCategories;
  
  return (
    <div className={`service-comparison ${className}`}>
      {/* Header */}
      <div className="service-comparison__header">
        <h2 style={{ 
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-h2)',
          color: 'var(--foreground)'
        }}>
          {title}
        </h2>
        {description && (
          <p style={{ 
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)'
          }}>
            {description}
          </p>
        )}
      </div>
      
      {/* Table Container (with horizontal scroll on mobile) */}
      <div className="service-comparison__table-container">
        <table className="service-comparison__table">
          {/* Header Row - Service Names */}
          <thead>
            <tr>
              <th className="service-comparison__feature-header" style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)'
              }}>
                Features
              </th>
              {displayServices.map(service => (
                <th key={service.slug} className="service-comparison__service-header">
                  <div className="service-comparison__service-name" style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    color: 'hsl(var(--primary))'
                  }}>
                    {service.name}
                  </div>
                  <div className="service-comparison__service-description" style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--muted-foreground)'
                  }}>
                    {service.description}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Body - Features by Category */}
          <tbody>
            {displayCategories.map(category => (
              <Fragment key={category.name}>
                {/* Category Header Row */}
                <tr className="service-comparison__category-row">
                  <td 
                    colSpan={displayServices.length + 1}
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      color: 'hsl(var(--primary))'
                    }}
                  >
                    {category.name}
                  </td>
                </tr>
                
                {/* Feature Rows */}
                {category.features.map(feature => (
                  <tr key={feature} className="service-comparison__feature-row">
                    <td className="service-comparison__feature-name" style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)'
                    }}>
                      {feature}
                    </td>
                    {displayServices.map(service => (
                      <td key={service.slug} className="service-comparison__feature-cell">
                        {serviceIncludesFeature(service.slug, feature) && (
                          <Check 
                            className="service-comparison__checkmark" 
                            size={20}
                            aria-label="Included"
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile Note */}
      <p className="service-comparison__mobile-note" style={{
        fontFamily: 'var(--font-secondary)',
        fontSize: 'var(--text-sm)',
        color: 'var(--muted-foreground)'
      }}>
        Scroll horizontally to see all services
      </p>
    </div>
  );
};
