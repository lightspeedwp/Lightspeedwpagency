/**
 * LSX Search Product Page Template
 * 
 * Dedicated page for LSX Search plugin/product.
 * WordPress Mapping: Product detail page
 * 
 * Sections:
 * - Hero (product introduction with badge)
 * - Features (6 key features in 3-column grid)
 * - Benefits (4 benefits in 2-column grid)
 * - How It Works (4-step process)
 * - Capabilities (4 categories in 2-column grid)
 * - Technical Specifications
 * - FAQ
 * - CTA
 */

import { RouteAnnouncer } from '@/app/components/blocks/utility/RouteAnnouncer';
import { SkipLink } from '@/app/components/blocks/utility/SkipLink';
import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { BackToTopButton } from '@/app/components/blocks/navigation/BackToTopButton';
import { Hero } from '@/app/components/patterns/Hero';
import { Section } from '@/app/components/common/Section';
import { Container } from '@/app/components/common/Container';
import { CTASection } from '@/app/components/patterns/CTASection';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { Buttons } from '@/app/components/blocks/design/Buttons';
import {
  lsxSearchHero,
  lsxSearchFeatures,
  lsxSearchBenefits,
  lsxSearchProcess,
  lsxSearchCapabilities,
  lsxSearchSpecs,
  lsxSearchFAQs,
  lsxSearchCTA
} from '@/app/data/lsx-search-page';

/**
 * LSX Search Product Page Template
 */
export function LSXSearchTemplate() {
  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Hero
          variant="solution"
          badge={{
            icon: lsxSearchHero.badge.icon,
            text: lsxSearchHero.badge.text
          }}
          title={lsxSearchHero.title}
          titleHighlight={lsxSearchHero.titleHighlight}
          description={lsxSearchHero.description}
        >
          <Buttons
            buttons={[
              { text: lsxSearchHero.cta.primary.text, page: lsxSearchHero.cta.primary.page, variant: 'default', size: 'lg' },
              { text: lsxSearchHero.cta.secondary.text, page: lsxSearchHero.cta.secondary.page, variant: 'outline', size: 'lg' }
            ]}
            alignment="center"
          />
        </Hero>

        {/* Features Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">
                Key Features
              </h2>
              <p className="lsx-search__section-description">
                Powerful search functionality that your visitors will love
              </p>
            </div>

            <div className="lsx-search__features-grid">
              {lsxSearchFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="lsx-search__feature-card">
                    <div className="lsx-search__feature-icon">
                      <Icon />
                    </div>
                    <h3 className="lsx-search__feature-title">
                      {feature.title}
                    </h3>
                    <p className="lsx-search__feature-description">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">
                Why LSX Search?
              </h2>
              <p className="lsx-search__section-description">
                Transform your website search experience with advanced functionality
              </p>
            </div>

            <div className="lsx-search__benefits-grid">
              {lsxSearchBenefits.map((benefit, index) => (
                <div key={index} className="lsx-search__benefit-card">
                  <h3 className="lsx-search__benefit-title">
                    {benefit.title}
                  </h3>
                  <p className="lsx-search__benefit-description">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* How It Works Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">
                How It Works
              </h2>
              <p className="lsx-search__section-description">
                Get started in 4 simple steps
              </p>
            </div>

            <div className="lsx-search__process-grid">
              {lsxSearchProcess.map((step, index) => (
                <div key={index} className="lsx-search__process-step">
                  <div className="lsx-search__process-number">
                    {step.step}
                  </div>
                  <div className="lsx-search__process-content">
                    <h3 className="lsx-search__process-title">
                      {step.title}
                    </h3>
                    <p className="lsx-search__process-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Search Capabilities Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">
                {lsxSearchCapabilities.title}
              </h2>
              <p className="lsx-search__section-description">
                {lsxSearchCapabilities.description}
              </p>
            </div>

            <div className="lsx-search__capabilities-grid">
              {lsxSearchCapabilities.capabilities.map((capability, index) => (
                <div key={index} className="lsx-search__capability-category">
                  <h3 className="lsx-search__capability-title">
                    {capability.category}
                  </h3>
                  <ul className="lsx-search__capability-list">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="lsx-search__capability-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Technical Specifications Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="lsx-search__section-header">
              <h2 className="lsx-search__section-title">
                {lsxSearchSpecs.title}
              </h2>
            </div>

            <div className="lsx-search__specs-grid">
              {lsxSearchSpecs.specs.map((spec, index) => (
                <div key={index} className="lsx-search__spec-item">
                  <span className="lsx-search__spec-label">
                    {spec.label}
                  </span>
                  <span className="lsx-search__spec-value">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Search Demo Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="lsx-search__demo-container">
              <h2 className="lsx-search__demo-title">
                See It In Action
              </h2>
              <input
                type="search"
                placeholder="Try searching for something..."
                className="lsx-search__demo-input"
                aria-label="Search demo"
              />
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection faqs={lsxSearchFAQs} />

        {/* CTA Section */}
        <CTASection
          title={lsxSearchCTA.title}
          description={lsxSearchCTA.description}
          buttons={lsxSearchCTA.buttons.map(btn => ({
            text: btn.text,
            page: btn.page
          }))}
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
