/**
 * Hosting Plan Cards
 *
 * Pricing tier cards with features, specs, and CTA buttons.
 * Extracted from HostingTemplate for file size compliance.
 *
 * @split March 16, 2026
 * @migrated March 18, 2026 — Migrated to PricingCard pattern component
 */

import { PricingCard } from '../../patterns/PricingCard';

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
  description: string;
  specifications: Record<string, string>;
  features: PlanFeature[];
  cta: { text: string; page?: string };
}

interface HostingPlanCardsProps {
  plans: Plan[];
  onPlanSelect: (subject: string) => void;
}

export function HostingPlanCards({ plans, onPlanSelect }: HostingPlanCardsProps) {
  return (
    <div className="hosting-lab__plans-grid">
      {plans.map((plan, index) => (
        <PricingCard
          key={plan.id}
          id={plan.id}
          name={plan.name}
          icon={plan.icon}
          tagline={plan.tagline}
          price={plan.price}
          description={plan.description}
          popular={plan.popular}
          specifications={plan.specifications}
          features={plan.features}
          cta={{
            text: plan.cta.text,
            onClick: () => onPlanSelect(`${plan.name} Plan Enquiry`),
          }}
          delay={index * 100}
          maxFeatures={8}
        />
      ))}
    </div>
  );
}
