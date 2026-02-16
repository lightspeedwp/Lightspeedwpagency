/**
 * WooCommerce Solution Template
 * 
 * WordPress template: templates/page-solution-woocommerce.html
 * 
 * WooCommerce solutions page for e-commerce development services.
 * 
 * Pattern order:
 * Breadcrumbs → Hero → Overview → Features → Use Cases → Pricing → Comparison → Benefits → FAQs → CTA
 * 
 * **Migration Status:**
 * - ✅ Hero → Hero pattern
 * - ✅ Overview → StatsGrid pattern
 * - ✅ Features → FeatureGrid pattern
 * - ✅ Use Cases → UseCasesGrid pattern
 * - ✅ Pricing → PricingTable pattern
 * - ✅ Benefits → BenefitsGrid pattern
 * - ✅ FAQs → FAQSection pattern
 * - ✅ CTA → CTASection pattern
 * 
 * **Code Reduction:** ~885 → ~245 lines (72% reduction)
 */

import { Container } from '../common/Container';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Hero } from '../patterns/Hero';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { UseCasesGrid } from '../patterns/UseCasesGrid';
import { PricingTable } from '../patterns/PricingTable';
import { BenefitsGrid } from '../patterns/BenefitsGrid';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { ShoppingCart, Code, Shield, Zap } from 'lucide-react';

// Import centralized data
import {
  woocommerceSolutionHero,
  woocommerceSolutionOverview,
  woocommerceSolutionFeatures,
  woocommerceSolutionUseCases,
  woocommerceSolutionPricing,
  woocommerceSolutionFAQs,
  woocommerceSolutionCTA
} from '../../data/woocommerce-solution-page';

export function WooCommerceSolutionTemplate() {
  // Transform pricing data for PricingTable pattern
  const pricingPlans: PricingPackage[] = woocommerceSolutionPricing.packages.map((pkg, index) => ({
    id: `pkg-${index}`,
    name: pkg.name,
    slug: pkg.name.toLowerCase().replace(/\s+/g, '-'),
    tagline: pkg.description, // Using description as tagline for now
    description: pkg.description,
    price: {
      amount: 0, // Placeholder
      currency: 'USD',
      display: pkg.price,
      period: 'project'
    },
    features: pkg.features.map(f => ({ name: f, included: true })),
    cta: {
      text: 'Get Started',
      action: 'contact'
    },
    recommended: pkg.recommended,
    category: 'ecommerce'
  }));

  // Transform related solutions for BenefitsGrid pattern
  const relatedBenefits = [
    {
      icon: Code,
      title: 'WordPress Solution',
      description: 'Build powerful WordPress websites with modern development practices.',
      link: 'wordpress',
      linkText: 'Learn More'
    },
    {
      icon: Shield,
      title: 'E-commerce Security',
      description: 'Protect your online store from fraud, malware, and security threats.',
      link: 'security',
      linkText: 'Learn More'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your WooCommerce store for better conversions and SEO.',
      link: 'performance-optimization',
      linkText: 'Learn More'
    }
  ];

  return (
    <>
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section wp-block-breadcrumbs-section--border">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Solutions', href: '/solutions' },
                { label: woocommerceSolutionHero.title }
              ]}
            />
        </section>

        {/* Hero Section */}
        <Hero
          variant="service"
          align="center"
          maxWidth="4xl"
          gradient="violet"
          spacing="xl"
          badge={{
            icon: ShoppingCart,
            text: woocommerceSolutionHero.badge.text
          }}
          title={woocommerceSolutionHero.title}
          titleHighlight={woocommerceSolutionHero.titleHighlight}
          description={woocommerceSolutionHero.tagline}
          subtitle={woocommerceSolutionHero.description}
          buttons={[
            {
              label: 'Get a Free Quote',
              page: 'contact',
              variant: 'default',
              style: {
                backgroundColor: 'var(--primary-foreground)',
                color: 'var(--primary)'
              }
            },
            {
              label: 'View Portfolio',
              page: 'portfolio',
              variant: 'outline',
              style: {
                borderColor: 'var(--primary-foreground)',
                color: 'var(--primary-foreground)'
              }
            }
          ]}
        />

        {/* Overview Stats Section */}
        <StatsGrid
          title={woocommerceSolutionOverview.title}
          description={woocommerceSolutionOverview.description}
          stats={woocommerceSolutionOverview.stats.map(stat => ({
            icon: stat.icon,
            value: stat.value,
            label: stat.label,
            description: stat.description
          }))}
          columns={4}
          variant="default"
        />

        {/* Features Section */}
        <FeatureGrid
          title="WooCommerce Features & Capabilities"
          description="Everything you need for a successful online store"
          items={woocommerceSolutionFeatures}
          columns={4}
          variant="muted"
          iconStyle="rounded"
        />

        {/* Use Cases Section */}
        <UseCasesGrid
          title="WooCommerce Use Cases"
          description="WooCommerce adapts to any product or business model"
          useCases={woocommerceSolutionUseCases}
          columns={2}
          variant="default"
        />

        {/* Pricing Section */}
        <PricingTable
          heading={woocommerceSolutionPricing.title}
          description={woocommerceSolutionPricing.description}
          packages={pricingPlans}
          variant="muted"
        />

        {/* Benefits/Related Solutions Section */}
        <BenefitsGrid
          title="Related Solutions"
          description="Explore more ways to enhance your WooCommerce store"
          benefits={relatedBenefits}
          columns={3}
          variant="default"
          showArrows={true}
        />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about WooCommerce solutions"
          faqs={woocommerceSolutionFAQs}
          variant="muted"
        />

        {/* CTA Section */}
        <CTASection
          title={woocommerceSolutionCTA.title}
          description={woocommerceSolutionCTA.description}
          primaryButtonText={woocommerceSolutionCTA.buttons[0].text}
          primaryButtonPage={woocommerceSolutionCTA.buttons[0].page as any}
          secondaryButtonText={woocommerceSolutionCTA.buttons[1]?.text}
          secondaryButtonPage={woocommerceSolutionCTA.buttons[1]?.page as any}
          gradient="violet"
        />
    </>
  );
}