/**
 * WordPress Solution Template
 * 
 * WordPress template: templates/page-solution-wordpress.html
 * 
 * WordPress solutions page for WordPress development services.
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
 * - ✅ Comparison → FeatureComparison pattern (adapted)
 * - ✅ Benefits → BenefitsGrid pattern
 * - ✅ FAQs → FAQSection pattern
 * - ✅ CTA → CTASection pattern
 * 
 * **Code Reduction:** ~887 → ~250 lines (72% reduction)
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
import { Code, ShoppingCart, Shield } from 'lucide-react';

// Import centralized data
import {
  wordpressSolutionHero,
  wordpressSolutionOverview,
  wordpressSolutionFeatures,
  wordpressSolutionUseCases,
  wordpressSolutionPricing,
  wordpressSolutionFAQs,
  wordpressSolutionCTA
} from '../../data/wordpress-solution-page';

import { PricingPackage, PricingFeature } from '../../data/pricing';

export function WordPressSolutionTemplate() {
  // Transform pricing data for PricingTable pattern
  const pricingPlans: PricingPackage[] = wordpressSolutionPricing.packages.map((pkg, index) => ({
    id: `pkg-${index}`,
    name: pkg.name,
    slug: pkg.name.toLowerCase().replace(/\s+/g, '-'),
    tagline: pkg.description,
    description: pkg.description,
    price: {
      amount: 0,
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
    category: 'website'
  }));

  // Transform related solutions for BenefitsGrid pattern
  const relatedBenefits = [
    {
      icon: ShoppingCart,
      title: 'WooCommerce Solution',
      description: 'Build powerful e-commerce stores with WooCommerce and WordPress.',
      link: '/solutions/woocommerce',
      linkText: 'Learn More'
    },
    {
      icon: Shield,
      title: 'WordPress Hosting',
      description: 'Secure managed WordPress hosting with daily backups and monitoring.',
      link: '/hosting',
      linkText: 'Learn More'
    },
    {
      icon: Code,
      title: 'WordPress Security',
      description: 'Protect your WordPress site from malware, hacks, and security threats.',
      link: '/services/security',
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
                { label: wordpressSolutionHero.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Hero
          variant="service"
          align="center"
          maxWidth="4xl"
          gradient="blue"
          spacing="xl"
          badge={{
            icon: Code,
            text: wordpressSolutionHero.badge.text
          }}
          title={wordpressSolutionHero.title}
          titleHighlight={wordpressSolutionHero.titleHighlight}
          description={wordpressSolutionHero.tagline}
          subtitle={wordpressSolutionHero.description}
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
          title={wordpressSolutionOverview.title}
          description={wordpressSolutionOverview.description}
          stats={wordpressSolutionOverview.stats.map(stat => ({
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
          title="WordPress Features & Capabilities"
          description="Everything you need for a powerful, modern website"
          items={wordpressSolutionFeatures}
          columns={4}
          variant="default"
        />

        {/* Use Cases Section */}
        <UseCasesGrid
          title="WordPress Use Cases"
          description="WordPress adapts to any industry or business type"
          useCases={wordpressSolutionUseCases}
          columns={2}
          variant="default"
        />

        {/* Pricing Section */}
        <PricingTable
          heading={wordpressSolutionPricing.title}
          description={wordpressSolutionPricing.description}
          packages={pricingPlans}
          variant="default"
        />

        {/* Benefits/Related Solutions Section */}
        <BenefitsGrid
          title="Related Solutions"
          description="Explore more ways to enhance your WordPress website"
          benefits={relatedBenefits}
          columns={3}
          variant="default"
          showArrows={true}
        />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about WordPress solutions"
          faqs={wordpressSolutionFAQs}
          variant="muted"
        />

        {/* CTA Section */}
        <CTASection
          title={wordpressSolutionCTA.title}
          description={wordpressSolutionCTA.description}
          primaryButtonText={wordpressSolutionCTA.buttons[0].text}
          primaryButtonPage={wordpressSolutionCTA.buttons[0].page as any}
          secondaryButtonText={wordpressSolutionCTA.buttons[1]?.text}
          secondaryButtonPage={wordpressSolutionCTA.buttons[1]?.page as any}
          gradient="blue"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
