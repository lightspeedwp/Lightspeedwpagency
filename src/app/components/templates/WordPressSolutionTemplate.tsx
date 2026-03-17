/**
 * WordPress Solution Template
 *
 * WordPress template: templates/page-solution-wordpress.html
 *
 * WordPress solutions page for WordPress development services.
 *
 * Pattern order:
 * Breadcrumbs → Funky Hero → Overview → Features → Use Cases → Pricing → Comparison → Benefits → FAQs → CTA
 *
 * @see /src/app/components/templates/wordpress-solution/WordPressHero.tsx — Hero sub-component
 */

import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { AgencyStats } from '../patterns/AgencyStats';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { ServiceUseCases } from '../patterns/ServiceUseCases';
import { PricingTable } from '../patterns/PricingTable';
import { ServiceRelatedSolutions } from '../patterns/ServiceRelatedSolutions';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { wordPressSolutionRelatedBenefits } from '../../data/wordpress-solution-template-data';

import {
  wordpressSolutionHero,
  wordpressSolutionOverview,
  wordpressSolutionFeatures,
  wordpressSolutionUseCases,
  wordpressSolutionPricing,
  wordpressSolutionFAQs,
  wordpressSolutionCTA
} from '../../data/wordpress-solution-page';

import { PricingPackage } from '../../data/pricing';
import { WordPressHero } from './wordpress-solution/WordPressHero';

export function WordPressSolutionTemplate() {
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
    cta: { text: 'Get Started', action: 'contact' },
    recommended: pkg.recommended,
    category: 'website'
  }));

  return (
    <div className="service-page wordpress-solution">
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'WordPress' },
        ]}
      />

      {/* ── FUNKY HERO SECTION ── */}
      <WordPressHero hero={wordpressSolutionHero} />

      {/* Overview Stats Section */}
      <section className="wordpress-page__stats">
        <Container>
          <ScrollReveal animation="fade-up">
            <AgencyStats
              heading={wordpressSolutionOverview.title}
              subheading={wordpressSolutionOverview.description}
              stats={wordpressSolutionOverview.stats.map((stat, i) => ({
                id: `stat-${i}`,
                icon: stat.icon,
                value: stat.value,
                label: stat.label,
                description: stat.description
              }))}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Features Section */}
      <Container>
        <ServiceCapabilitiesGrid
          heading="WordPress Features & Capabilities"
          subheading="Everything you need for a powerful, modern website"
          capabilities={wordpressSolutionFeatures.map((feature, i) => ({
            id: `feature-${i}`,
            title: feature.title,
            description: feature.description,
            icon: feature.icon,
          }))}
          columns={3}
        />
      </Container>

      {/* Use Cases Section */}
      <Container>
        <ServiceUseCases
          heading="WordPress Use Cases"
          subheading="WordPress adapts to any industry or business type"
          useCases={wordpressSolutionUseCases.map((useCase, i) => ({
            id: `use-case-${i}`,
            title: useCase.title,
            description: useCase.description,
            industries: useCase.industries,
            features: useCase.features
          }))}
          columns={2}
        />
      </Container>

      {/* Pricing Section */}
      <PricingTable
        heading={wordpressSolutionPricing.title}
        description={wordpressSolutionPricing.description}
        packages={pricingPlans}
        variant="default"
      />

      {/* Related Solutions Section */}
      <Container>
        <ServiceRelatedSolutions
          heading="Related Solutions"
          subheading="Explore more ways to enhance your WordPress website"
          solutions={wordPressSolutionRelatedBenefits.map((b, i) => ({
            id: `related-${i}`,
            icon: b.icon,
            title: b.title,
            description: b.description,
            link: b.link,
            linkText: b.linkText
          }))}
          columns={3}
        />
      </Container>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently asked questions"
        description="Common questions about WordPress solutions"
        faqs={wordpressSolutionFAQs}
        variant="muted"
      />

      {/* CTA Section */}
      <FunkyCTA
        title={wordpressSolutionCTA.title}
        description={wordpressSolutionCTA.description}
        buttonText={wordpressSolutionCTA.buttons[0].text}
        buttonPage={wordpressSolutionCTA.buttons[0].page}
        benefits={[
          'Custom WordPress & WooCommerce solutions',
          'Full Site Editing with block themes',
          'Enterprise-grade security & performance',
          'Ongoing maintenance & support plans'
        ]}
      />
    </div>
  );
}