/**
 * PricingCard Pattern Component
 *
 * Reusable pricing tier card with:
 * - Popular badge indicator
 * - Icon, title, tagline
 * - Price display
 * - Description
 * - Feature list with check/x icons
 * - CTA button
 *
 * Used in:
 * - PricingTemplate (website/support packages)
 * - HostingTemplate (hosting tiers)
 * - WetuImporterTemplate (import packages)
 * - MailchimpSolutionTemplate (mailchimp tiers)
 *
 * @pattern Extracted March 18, 2026 — Template Migration Priority 3
 */

import '../../../styles/patterns/pricing-card.css';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { Check, X } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';

export interface PricingCardFeature {
  name: string;
  included: boolean;
}

export interface PricingCardProps {
  /** Unique identifier */
  id: string;
  /** Plan name */
  name: string;
  /** Icon component */
  icon: UniversalIcon;
  /** Short tagline */
  tagline: string;
  /** Price display */
  price: {
    display: string;
    period: string;
  };
  /** Longer description */
  description?: string;
  /** Mark as popular/recommended */
  popular?: boolean;
  /** Optional specifications/specs to display before features */
  specifications?: Record<string, string>;
  /** List of features (either objects with name/included or strings) */
  features: PricingCardFeature[] | string[];
  /** CTA configuration */
  cta: {
    text: string;
    page?: string;
    href?: string;
    onClick?: () => void;
  };
  /** Animation delay in ms */
  delay?: number;
  /** Max features to display (default: 8) */
  maxFeatures?: number;
}

export function PricingCard({
  id,
  name,
  icon: Icon,
  tagline,
  price,
  description,
  popular = false,
  specifications,
  features,
  cta,
  delay = 0,
  maxFeatures = 8,
}: PricingCardProps) {
  return (
    <ScrollReveal animation="fade-up" delay={delay}>
      <div
        className={`pricing-card ${popular ? 'pricing-card--popular' : ''}`}
      >
        {popular && (
          <div className="pricing-card__badge">
            Most Popular
          </div>
        )}

        <div className="pricing-card__icon">
          <Icon size={24} className="wp-text-primary" />
        </div>

        <h3 className="pricing-card__title">
          {name}
        </h3>

        <p className="pricing-card__tagline">
          {tagline}
        </p>

        <div className="pricing-card__price-wrapper">
          <div className="pricing-card__price">
            {price.display}
          </div>
          <div className="pricing-card__period">
            {price.period}
          </div>
        </div>

        {description && (
          <p className="pricing-card__description">
            {description}
          </p>
        )}

        {specifications && (
          <div className="pricing-card__specifications">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={`${id}-specification-${key}`} className="pricing-card__specification">
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        )}

        <ul className="pricing-card__features">
          {features.slice(0, maxFeatures).map((feature, index) => (
            <li
              key={`${id}-feature-${index}`}
              className="pricing-card__feature"
            >
              {typeof feature === 'string' ? (
                <Check size={20} className="pricing-card__feature-icon pricing-card__feature-icon--included" />
              ) : feature.included ? (
                <Check size={20} className="pricing-card__feature-icon pricing-card__feature-icon--included" />
              ) : (
                <X size={20} className="pricing-card__feature-icon pricing-card__feature-icon--excluded" />
              )}
              <span
                className={`pricing-card__feature-text ${typeof feature === 'string' ? 'pricing-card__feature-text--included' : feature.included ? 'pricing-card__feature-text--included' : 'pricing-card__feature-text--excluded'}`}
              >
                {typeof feature === 'string' ? feature : feature.name}
              </span>
            </li>
          ))}
        </ul>

        <Button
          page={cta.page as any}
          href={cta.href}
          size="lg"
          className="pricing-card__cta"
          onClick={cta.onClick}
        >
          {cta.text}
        </Button>
      </div>
    </ScrollReveal>
  );
}