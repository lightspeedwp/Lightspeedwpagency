/**
 * Pricing Table Pattern
 * 
 * Pricing plan cards with features and CTAs for LSX Design.
 * Maps to WordPress pattern: lsx-design/pricing/table
 * 
 * **Design Token Compliance:**
 * - Typography: Uses ONLY CSS variables (var(--text-*))
 * - Fonts: Lexend (headings, prices), Manrope (features, descriptions) ONLY
 * - Colors: Uses ONLY CSS variables (var(--*))
 * - Spacing: Uses ONLY Tailwind classes and rem values
 * - Border Radius: Uses ONLY CSS variables (var(--radius*))
 * 
 * **WordPress Mapping:**
 * - Block: core/group
 * - Section Style: pricing-default or pricing-featured
 * - Pattern Slug: lsx-design/pricing/table
 */

import React from 'react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { Grid } from '../blocks/design/Grid';
import { Check } from 'lucide-react';
import type { PricingPackage } from '../../data/pricing';

export interface PricingTableProps {
  heading?: string;
  description?: string;
  packages: PricingPackage[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'featured';
}

/**
 * PricingTable Pattern Component
 * 
 * Displays pricing plans in a card-based grid layout.
 * Supports 2-4 column layouts with featured plan highlighting.
 * 
 * @example
 * ```tsx
 * import { websitePackages } from '../../data';
 * 
 * <PricingTable 
 *   heading="Choose Your Plan"
 *   description="Select the perfect package for your business needs."
 *   packages={websitePackages}
 *   columns={3}
 * />
 * ```
 */
export function PricingTable({
  heading = "Choose Your Plan",
  description,
  packages,
  columns = 3,
  variant = 'default'
}: PricingTableProps) {
  const sectionStyle = variant === 'featured' ? 'pricing-featured' : 'pricing-default';

  return (
    <Section sectionStyle={sectionStyle}>
      <Container>
        {/* Section heading - Lexend font, CSS variable size */}
        <div className="text-center mb-12">
          <Heading 
            level={2}
            style={{
              fontSize: 'var(--text-h2)',
              fontFamily: 'Lexend, sans-serif',
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
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--muted-foreground)',
                marginTop: '1rem',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              {description}
            </p>
          )}
        </div>

        <Grid columns={columns} gap={8}>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: pkg.recommended 
                  ? '2px solid var(--primary)' 
                  : '1px solid var(--border)',
                backgroundColor: pkg.recommended 
                  ? 'var(--primary)' 
                  : 'var(--card)',
                color: pkg.recommended 
                  ? 'var(--primary-foreground)' 
                  : 'var(--card-foreground)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {/* Featured badge */}
              {pkg.recommended && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-foreground)',
                    padding: '0.25rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-small)',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 'var(--font-weight-semibold)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan name - Lexend, --text-h4 */}
              <h3 
                style={{
                  fontSize: 'var(--text-h4)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '0.5rem'
                }}
              >
                {pkg.name}
              </h3>

              {/* Tagline - Manrope, --text-small */}
              <p 
                style={{
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  opacity: 0.8,
                  marginBottom: '1.5rem'
                }}
              >
                {pkg.tagline}
              </p>

              {/* Price - Lexend, --text-h2 */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span 
                  style={{
                    fontSize: 'var(--text-h2)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}
                >
                  {pkg.price.display}
                </span>
                {pkg.price.period && pkg.price.period !== 'one-time' && (
                  <span 
                    style={{
                      fontSize: 'var(--text-small)',
                      fontFamily: 'Manrope, sans-serif',
                      opacity: 0.7,
                      marginLeft: '0.5rem'
                    }}
                  >
                    {pkg.price.period === 'monthly' ? '/month' : `/${pkg.price.period}`}
                  </span>
                )}
              </div>

              {/* Description - Manrope, --text-small */}
              <p 
                style={{
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  marginBottom: '2rem',
                  opacity: 0.9
                }}
              >
                {pkg.description}
              </p>

              {/* Features list - Manrope, --text-base */}
              <ul 
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '2rem',
                  flex: 1
                }}
              >
                {pkg.features.slice(0, 8).map((feature, index) => (
                  <li 
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      marginBottom: '0.75rem',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    {feature.included ? (
                      <Check 
                        size={20} 
                        style={{
                          flexShrink: 0,
                          marginTop: '0.125rem',
                          color: pkg.recommended 
                            ? 'var(--primary-foreground)' 
                            : 'var(--success)'
                        }}
                      />
                    ) : (
                      <span 
                        style={{
                          width: '20px',
                          height: '20px',
                          flexShrink: 0,
                          textAlign: 'center',
                          opacity: 0.3
                        }}
                      >
                        —
                      </span>
                    )}
                    <span>
                      {feature.name}
                      {feature.limit && (
                        <span style={{ opacity: 0.7, fontSize: 'var(--text-small)' }}>
                          {' '}({feature.limit})
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                size="lg" 
                href={pkg.cta.action === 'contact' ? '/contact' : pkg.cta.action === 'book-call' ? '/contact' : '/contact'}
                variant={pkg.recommended ? 'default' : 'outline'}
                style={{
                  width: '100%',
                  backgroundColor: pkg.recommended 
                    ? 'var(--background)' 
                    : 'var(--primary)',
                  color: pkg.recommended 
                    ? 'var(--foreground)' 
                    : 'var(--primary-foreground)'
                }}
              >
                {pkg.cta.text}
              </Button>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
