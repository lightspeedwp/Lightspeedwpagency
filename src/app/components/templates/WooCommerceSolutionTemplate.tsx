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

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
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
  const pricingPlans = woocommerceSolutionPricing.packages.map(pkg => ({
    name: pkg.name,
    price: pkg.price,
    description: pkg.description,
    features: pkg.features,
    highlighted: pkg.recommended,
    buttonText: 'Get Started',
    buttonPage: 'contact'
  }));

  // Transform related solutions for BenefitsGrid pattern
  const relatedBenefits = [
    {
      icon: Code,
      title: 'WordPress Solution',
      description: 'Build powerful WordPress websites with modern development practices.',
      link: '/solutions/wordpress',
      linkText: 'Learn More'
    },
    {
      icon: Shield,
      title: 'E-commerce Security',
      description: 'Protect your online store from fraud, malware, and security threats.',
      link: '/services/security',
      linkText: 'Learn More'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your WooCommerce store for better conversions and SEO.',
      link: '/services/performance',
      linkText: 'Learn More'
    }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Solutions', href: '/solutions' },
                { label: woocommerceSolutionHero.title }
              ]}
            />
          </Container>
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
          features={woocommerceSolutionFeatures}
          columns={4}
          variant="muted"
          cardStyle="icon-top"
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
          title={woocommerceSolutionPricing.title}
          description={woocommerceSolutionPricing.description}
          plans={pricingPlans}
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
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
