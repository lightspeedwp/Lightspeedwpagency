/**
 * Feature Comparison Pattern
 * 
 * Feature-by-feature comparison table for pricing plans and services.
 * Maps to WordPress pattern: lsx-design/pricing/comparison
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/feature-comparison.css
 * - 100% CSS variables
 * - BEM naming
 */

import React from 'react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Check, X } from 'lucide-react';
import type { ComparisonFeature } from '../../data/comparisons';
import '@/styles/patterns/feature-comparison.css';

export interface FeatureComparisonProps {
  heading?: string;
  description?: string;
  features: ComparisonFeature[];
  columns?: {
    feature: string;
    basic: string;
    professional: string;
    enterprise: string;
  };
  featuredColumn?: 1 | 2 | 3;
}

export function FeatureComparison({
  heading = "Compare Features",
  description,
  features,
  columns = {
    feature: "Feature",
    basic: "Basic",
    professional: "Professional",
    enterprise: "Enterprise"
  },
  featuredColumn = 2
}: FeatureComparisonProps) {
  
  const renderCellValue = (value: boolean | string, isFeaturedColumn: boolean) => {
    if (value === true) {
      return <Check size={20} className="feature-comparison__check" />;
    }

    if (value === false) {
      return <X size={20} className="feature-comparison__x" />;
    }

    return (
      <span className="feature-comparison__text">
        {value}
      </span>
    );
  };

  return (
    <Section sectionStyle="content-feature">
      <Container>
        <div className="feature-comparison__header">
          <Heading level={2} className="feature-comparison__title">
            {heading}
          </Heading>
          
          {description && (
            <p className="feature-comparison__description">
              {description}
            </p>
          )}
        </div>

        <div className="feature-comparison__table-container">
          <table className="feature-comparison__table">
            <thead>
              <tr className="feature-comparison__header-row">
                <th className="feature-comparison__th" scope="col">
                  {columns.feature}
                </th>
                <th 
                  className={`feature-comparison__th ${featuredColumn === 1 ? 'feature-comparison__th--featured' : ''}`} 
                  scope="col"
                >
                  {columns.basic}
                </th>
                <th 
                  className={`feature-comparison__th ${featuredColumn === 2 ? 'feature-comparison__th--featured' : ''}`} 
                  scope="col"
                >
                  {columns.professional}
                </th>
                <th 
                  className={`feature-comparison__th ${featuredColumn === 3 ? 'feature-comparison__th--featured' : ''}`} 
                  scope="col"
                >
                  {columns.enterprise}
                </th>
              </tr>
            </thead>
            
            <tbody>
              {features.map((feature, index) => (
                <tr key={feature.id} className="feature-comparison__row">
                  <td className="feature-comparison__td feature-comparison__td--feature">
                    {feature.name}
                    {feature.tooltip && (
                      <span className="feature-comparison__tooltip" title={feature.tooltip}>
                        ⓘ
                      </span>
                    )}
                  </td>
                  
                  <td className={`feature-comparison__td feature-comparison__td--value ${featuredColumn === 1 ? 'feature-comparison__td--featured' : ''}`}>
                    {renderCellValue(feature.basic, featuredColumn === 1)}
                  </td>
                  
                  <td className={`feature-comparison__td feature-comparison__td--value ${featuredColumn === 2 ? 'feature-comparison__td--featured' : ''}`}>
                    {renderCellValue(feature.professional, featuredColumn === 2)}
                  </td>
                  
                  <td className={`feature-comparison__td feature-comparison__td--value ${featuredColumn === 3 ? 'feature-comparison__td--featured' : ''}`}>
                    {renderCellValue(feature.enterprise, featuredColumn === 3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="feature-comparison__mobile-notice">
          Scroll horizontally to view all features
        </p>
      </Container>
    </Section>
  );
}
