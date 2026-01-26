/**
 * Feature Comparison Pattern
 * 
 * Feature-by-feature comparison table for pricing plans and services.
 * Maps to WordPress pattern: lsx-design/pricing/comparison
 * 
 * **Design Token Compliance:**
 * - Typography: Uses ONLY CSS variables (var(--text-*))
 * - Fonts: Lexend (table headers), Manrope (table cells) ONLY
 * - Colors: Uses ONLY CSS variables (var(--*))
 * - Spacing: Uses ONLY rem values
 * - Border Radius: Uses ONLY CSS variables (var(--radius*))
 * 
 * **WordPress Mapping:**
 * - Block: core/table or core/group
 * - Section Style: content-feature
 * - Pattern Slug: lsx-design/pricing/comparison
 */

import React from 'react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Check, X } from 'lucide-react';
import type { ComparisonFeature } from '../../data/comparisons';

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

/**
 * FeatureComparison Pattern Component
 * 
 * Displays detailed feature-by-feature comparison table
 * with checkmarks, X marks, and custom text values.
 * 
 * @example
 * ```tsx
 * import { websiteFeatureComparison } from '../../data';
 * 
 * <FeatureComparison 
 *   heading="Compare All Features"
 *   features={websiteFeatureComparison}
 *   featuredColumn={2}
 * />
 * ```
 */
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
  /**
   * Render cell value - boolean or custom text
   */
  const renderCellValue = (value: boolean | string, isFeaturedColumn: boolean) => {
    // Boolean true
    if (value === true) {
      return (
        <Check 
          size={20} 
          style={{ 
            color: isFeaturedColumn 
              ? 'var(--primary-foreground)' 
              : 'var(--success)',
            margin: '0 auto',
            display: 'block'
          }} 
        />
      );
    }

    // Boolean false
    if (value === false) {
      return (
        <X 
          size={20} 
          style={{ 
            color: 'var(--muted-foreground)',
            margin: '0 auto',
            display: 'block'
          }} 
        />
      );
    }

    // Custom text (e.g., "Up to 5", "Add $2,000")
    return (
      <span
        style={{
          fontSize: 'var(--text-small)',
          fontFamily: 'var(--font-secondary)',
          color: isFeaturedColumn 
            ? 'var(--primary-foreground)' 
            : 'var(--foreground)'
        }}
      >
        {value}
      </span>
    );
  };

  return (
    <Section sectionStyle="content-feature">
      <Container>
        {/* Heading - Lexend font, CSS variable size */}
        <Heading 
          level={2} 
          style={{ 
            textAlign: 'center', 
            marginBottom: '3rem',
            fontSize: 'var(--text-h2)',
            fontFamily: 'var(--font-primary)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--foreground)'
          }}
        >
          {heading}
        </Heading>

        {description && (
          <p
            style={{
              fontSize: 'var(--text-lead)',
              fontFamily: 'var(--font-secondary)',
              color: 'var(--muted-foreground)',
              textAlign: 'center',
              marginTop: '-2rem',
              marginBottom: '3rem',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {description}
          </p>
        )}

        {/* Table container with overflow */}
        <div 
          className="overflow-x-auto"
          style={{
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)'
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 'var(--text-base)',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            {/* Table header */}
            <thead>
              <tr
                style={{
                  backgroundColor: 'var(--muted)',
                  borderBottom: '1px solid var(--border)'
                }}
              >
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-base)'
                  }}
                  scope="col"
                >
                  {columns.feature}
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-base)',
                    backgroundColor: featuredColumn === 1 ? 'var(--primary)' : undefined,
                    color: featuredColumn === 1 ? 'var(--primary-foreground)' : undefined
                  }}
                  scope="col"
                >
                  {columns.basic}
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-base)',
                    backgroundColor: featuredColumn === 2 ? 'var(--primary)' : undefined,
                    color: featuredColumn === 2 ? 'var(--primary-foreground)' : undefined
                  }}
                  scope="col"
                >
                  {columns.professional}
                </th>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-base)',
                    backgroundColor: featuredColumn === 3 ? 'var(--primary)' : undefined,
                    color: featuredColumn === 3 ? 'var(--primary-foreground)' : undefined
                  }}
                  scope="col"
                >
                  {columns.enterprise}
                </th>
              </tr>
            </thead>
            
            {/* Table body */}
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--muted)',
                    borderBottom: '1px solid var(--border)'
                  }}
                >
                  {/* Feature name - Manrope font */}
                  <td
                    style={{
                      padding: '1rem',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-base)'
                    }}
                  >
                    {feature.name}
                    {feature.tooltip && (
                      <span
                        style={{
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                          marginLeft: '0.5rem',
                          cursor: 'help'
                        }}
                        title={feature.tooltip}
                      >
                        ⓘ
                      </span>
                    )}
                  </td>
                  
                  {/* Basic column */}
                  <td
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      backgroundColor: featuredColumn === 1 ? 'var(--primary)' : undefined,
                      color: featuredColumn === 1 ? 'var(--primary-foreground)' : undefined
                    }}
                  >
                    {renderCellValue(feature.basic, featuredColumn === 1)}
                  </td>
                  
                  {/* Professional column */}
                  <td
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      backgroundColor: featuredColumn === 2 ? 'var(--primary)' : undefined,
                      color: featuredColumn === 2 ? 'var(--primary-foreground)' : undefined
                    }}
                  >
                    {renderCellValue(feature.professional, featuredColumn === 2)}
                  </td>
                  
                  {/* Enterprise column */}
                  <td
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      backgroundColor: featuredColumn === 3 ? 'var(--primary)' : undefined,
                      color: featuredColumn === 3 ? 'var(--primary-foreground)' : undefined
                    }}
                  >
                    {renderCellValue(feature.enterprise, featuredColumn === 3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile notice */}
        <p
          style={{
            fontSize: 'var(--text-small)',
            fontFamily: 'var(--font-secondary)',
            color: 'var(--muted-foreground)',
            textAlign: 'center',
            marginTop: '1rem'
          }}
          className="md:hidden"
        >
          Scroll horizontally to view all features
        </p>
      </Container>
    </Section>
  );
}
