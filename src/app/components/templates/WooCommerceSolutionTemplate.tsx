/**
 * WooCommerce Solution Template
 *
 * Theme: "Neon Market"
 * Visuals: Cyberpunk storefront, neon glows, holographic product card,
 *          scanline grid, pulsing orbs.
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-solution-ecommerce.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * PATTERN COMPONENTS:
 * - ✅ StatsGrid — Results/metrics section
 * - ✅ FeatureList — Enterprise features grid (glow variant)
 *
 * @see /src/styles/templates/page-solution-ecommerce.css
 * @see /src/app/components/templates/woocommerce-solution/ — Sub-components
 * @migrated March 3, 2026 — Migrated inline feature grid to FeatureList component
 */

import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { AgencyStats } from '../patterns/AgencyStats';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import {
  ShoppingBag,
  CreditCard,
  Truck,
  ChartBar as BarChart3,
  Globe,
  ShieldCheck,
  Lightning as Zap,
} from '@phosphor-icons/react';

import { woocommerceSolutionDetailed } from '../../data/solutions-detailed';
import { WooCommerceHero } from './woocommerce-solution/WooCommerceHero';
import { WooCommerceLowerSections } from './woocommerce-solution/WooCommerceLowerSections';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export function WooCommerceSolutionTemplate() {
  const data = woocommerceSolutionDetailed;

  const featureIcons: Record<string, any> = {
    'Custom Product Experience': ShoppingBag,
    'Frictionless Checkout': CreditCard,
    'Smart Logistics': Truck,
    'Conversion Analytics': BarChart3,
    'Global Scale': Globe,
    'Enterprise Security': ShieldCheck,
  };

  return (
    <div className="woo-solution">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'WooCommerce' },
        ]}
      />

      {/* ── HERO SECTION — Cyberpunk Storefront ── */}
      <WooCommerceHero tagline={data.tagline} />

      {/* ── STATS SECTION — The Dashboard ── */}
      <section className="woo-solution__stats">
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading="E-Commerce Results"
              subheading="Real metrics from scaling digital storefronts."
              stats={data.results.map((result, i) => ({
                id: `result-${i}`,
                value: result.stat,
                label: result.label,
                description: result.description
              }))}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ── FEATURES GRID — The Product Catalog ── */}
      <section id="features" className="woo-solution__features">
        <Container>
          <ScrollReveal animation="fade-up" delay={100}>
            <ServiceCapabilitiesGrid
              heading="Enterprise-Grade Commerce"
              subheading="Everything you need to run a high-performance online store."
              capabilities={data.features.map((feature, i) => ({
                id: `feat-${i}`,
                title: feature.title,
                description: feature.description,
                icon: featureIcons[feature.title] || Zap
              }))}
              columns={3}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ── APPROACH + TECH STACK + CTA ── */}
      <WooCommerceLowerSections
        approach={data.approach}
        techStack={data.techStack}
        cta={data.cta}
      />
    </div>
  );
}