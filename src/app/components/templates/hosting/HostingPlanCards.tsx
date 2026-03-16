/**
 * Hosting Plan Cards
 *
 * Pricing tier cards with features, specs, and CTA buttons.
 * Extracted from HostingTemplate for file size compliance.
 *
 * @split March 16, 2026
 */

import { Button } from '../../blocks/design/Buttons';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { Check, X } from '@phosphor-icons/react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  tagline: string;
  popular: boolean;
  icon: React.ComponentType<{ size?: number }>;
  price: { display: string; period: string };
  specifications: { storage: string; visits: string };
  features: PlanFeature[];
  cta: { text: string };
}

interface HostingPlanCardsProps {
  plans: Plan[];
  onPlanSelect: (subject: string) => void;
}

export function HostingPlanCards({ plans, onPlanSelect }: HostingPlanCardsProps) {
  return (
    <div className="hosting-lab__plans-grid">
      {plans.map((plan, index) => {
        const Icon = plan.icon;
        return (
          <ScrollReveal key={plan.id} animation="fade-up" delay={index * 100}>
            <div className={`hosting-lab__plan ${plan.popular ? 'hosting-lab__plan--popular neon-glow-pulse' : ''}`}>
              {plan.popular && (
                <span className="hosting-lab__popular-tag">Most popular</span>
              )}
              <div className="hosting-lab__plan-icon-wrap">
                <Icon size={28} />
              </div>
              <h3 className="hosting-lab__plan-name">{plan.name}</h3>
              <p className="hosting-lab__plan-tagline">{plan.tagline}</p>
              <div className="hosting-lab__plan-price">
                <span className="hosting-lab__price-amount">{plan.price.display}</span>
                <span className="hosting-lab__price-period">{plan.price.period}</span>
              </div>
              <div className="hosting-lab__specs">
                <div className="hosting-lab__spec">
                  <div className="hosting-lab__spec-label">Storage</div>
                  <div className="hosting-lab__spec-value">{plan.specifications.storage}</div>
                </div>
                <div className="hosting-lab__spec">
                  <div className="hosting-lab__spec-label">Traffic</div>
                  <div className="hosting-lab__spec-value">{plan.specifications.visits}</div>
                </div>
              </div>
              <ul className="hosting-lab__feature-list">
                {plan.features.map((f, i) => (
                  <li key={i} className={`hosting-lab__feature-row ${f.included ? 'hosting-lab__feature-row--included' : 'hosting-lab__feature-row--excluded'}`}>
                    {f.included ? <Check size={16} className="hosting-lab__check" /> : <X size={16} className="hosting-lab__cross" />}
                    <span>{f.name}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                variant={plan.popular ? 'default' : 'outline'}
                className="neon-hover"
                onClick={() => onPlanSelect(`${plan.name} Plan Enquiry`)}
              >
                {plan.cta.text}
              </Button>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
