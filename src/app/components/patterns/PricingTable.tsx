/**
 * Pricing Table Pattern
 * 
 * Pricing plan cards with features and CTAs for LSX Design.
 * Maps to WordPress pattern: lsx-design/pricing/table
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/pricing-table.css
 * - 100% CSS variables
 * - BEM naming
 */

import React from 'react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { Grid } from '../blocks/design/Grid';
import { Check } from '@phosphor-icons/react';
import type { PricingPackage } from '../../data/pricing';

export interface PricingTableProps {
  heading?: string;
  description?: string;
  packages: PricingPackage[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'featured';
}

export function PricingTable({
  heading = "Choose Your Plan",
  description,
  packages = [],
  columns = 3,
  variant = 'default'
}: PricingTableProps) {
  const sectionStyle = variant === 'featured' ? 'pricing-featured' : 'pricing-default';

  return (
    <Section sectionStyle={sectionStyle}>
      <Container>
        <div className="pricing-header">
          <Heading level={2} className="pricing-header__title">
            {heading}
          </Heading>
          {description && (
            <p className="pricing-header__description">
              {description}
            </p>
          )}
        </div>

        <Grid columns={columns} gap={8}>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`pricing-card ${pkg.recommended ? 'is-featured' : ''}`}
            >
              {/* Featured badge */}
              {pkg.recommended && (
                <div className="pricing-card__badge">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="pricing-card__title">
                {pkg.name}
              </h3>

              {/* Tagline */}
              <p className="pricing-card__tagline">
                {pkg.tagline}
              </p>

              {/* Price */}
              <div className="pricing-card__price-wrapper">
                <span className="pricing-card__price">
                  {pkg.price.display}
                </span>
                {pkg.price.period && pkg.price.period !== 'one-time' && (
                  <span className="pricing-card__period">
                    {pkg.price.period === 'monthly' ? '/month' : `/${pkg.price.period}`}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="pricing-card__description">
                {pkg.description}
              </p>

              {/* Features list */}
              <ul className="pricing-card__features">
                {pkg.features.slice(0, 8).map((feature, index) => (
                  <li key={index} className="pricing-card__feature-item">
                    {feature.included ? (
                      <Check size={20} className="pricing-card__feature-icon" />
                    ) : (
                      <span className="pricing-card__feature-placeholder">—</span>
                    )}
                    <span>
                      {feature.name}
                      {feature.limit && (
                        <span className="pricing-card__feature-limit">
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
                href={pkg.cta.action === 'contact' ? '/contact' : '/contact'}
                variant={pkg.recommended ? 'default' : 'outline'}
                className="pricing-card__button"
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