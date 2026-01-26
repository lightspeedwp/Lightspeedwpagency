/**
 * LSX Sharing Product Page Template
 * 
 * Dedicated page for LSX Sharing plugin/product.
 * WordPress Mapping: Product detail page
 * 
 * Sections:
 * - Hero (product introduction with badge)
 * - Features (6 key features in 3-column grid)
 * - Benefits (4 benefits in 2-column grid)
 * - How It Works (4-step process)
 * - Supported Networks (8 social networks in 4-column grid)
 * - Technical Specifications
 * - FAQ
 * - CTA
 */

import { RouteAnnouncer } from '@/app/components/blocks/utility/RouteAnnouncer';
import { SkipLink } from '@/app/components/common/SkipLink';
import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { BackToTopButton } from '@/app/components/blocks/layout/BackToTopButton';
import { Hero } from '@/app/components/patterns/Hero';
import { Section } from '@/app/components/common/Section';
import { Container } from '@/app/components/common/Container';
import { CTASection } from '@/app/components/patterns/CTASection';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { Buttons } from '@/app/components/blocks/design/Buttons';
import { Share2 } from 'lucide-react';
import {
  lsxSharingHero,
  lsxSharingFeatures,
  lsxSharingBenefits,
  lsxSharingProcess,
  lsxSharingNetworks,
  lsxSharingSpecs,
  lsxSharingFAQs,
  lsxSharingCTA
} from '@/app/data/lsx-sharing-page';

/**
 * LSX Sharing Product Page Template
 */
export function LSXSharingTemplate() {
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
            icon: lsxSharingHero.badge.icon,
            text: lsxSharingHero.badge.text
          }}
          title={lsxSharingHero.title}
          titleHighlight={lsxSharingHero.titleHighlight}
          description={lsxSharingHero.description}
        >
          <Buttons
            buttons={[
              { text: lsxSharingHero.cta.primary.text, page: lsxSharingHero.cta.primary.page, variant: 'default', size: 'lg' },
              { text: lsxSharingHero.cta.secondary.text, page: lsxSharingHero.cta.secondary.page, variant: 'outline', size: 'lg' }
            ]}
            alignment="center"
          />
        </Hero>

        {/* Features Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">
                Key Features
              </h2>
              <p className="lsx-sharing__section-description">
                Everything you need for effective social sharing
              </p>
            </div>

            <div className="lsx-sharing__features-grid">
              {lsxSharingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="lsx-sharing__feature-card">
                    <div className="lsx-sharing__feature-icon">
                      <Icon />
                    </div>
                    <h3 className="lsx-sharing__feature-title">
                      {feature.title}
                    </h3>
                    <p className="lsx-sharing__feature-description">
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
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">
                Why LSX Sharing?
              </h2>
              <p className="lsx-sharing__section-description">
                Amplify your content reach with beautiful, easy-to-use social sharing
              </p>
            </div>

            <div className="lsx-sharing__benefits-grid">
              {lsxSharingBenefits.map((benefit, index) => (
                <div key={index} className="lsx-sharing__benefit-card">
                  <h3 className="lsx-sharing__benefit-title">
                    {benefit.title}
                  </h3>
                  <p className="lsx-sharing__benefit-description">
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
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">
                How It Works
              </h2>
              <p className="lsx-sharing__section-description">
                Get started in 4 simple steps
              </p>
            </div>

            <div className="lsx-sharing__process-grid">
              {lsxSharingProcess.map((step, index) => (
                <div key={index} className="lsx-sharing__process-step">
                  <div className="lsx-sharing__process-number">
                    {step.step}
                  </div>
                  <div className="lsx-sharing__process-content">
                    <h3 className="lsx-sharing__process-title">
                      {step.title}
                    </h3>
                    <p className="lsx-sharing__process-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Supported Networks Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">
                {lsxSharingNetworks.title}
              </h2>
              <p className="lsx-sharing__section-description">
                {lsxSharingNetworks.description}
              </p>
            </div>

            <div className="lsx-sharing__networks-grid">
              {lsxSharingNetworks.networks.map((network, index) => (
                <div key={index} className="lsx-sharing__network-card">
                  <div className="lsx-sharing__network-icon">
                    <Share2 />
                  </div>
                  <h3 className="lsx-sharing__network-name">
                    {network.name}
                  </h3>
                  <p className="lsx-sharing__network-description">
                    {network.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Technical Specifications Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">
                {lsxSharingSpecs.title}
              </h2>
            </div>

            <div className="lsx-sharing__specs-grid">
              {lsxSharingSpecs.specs.map((spec, index) => (
                <div key={index} className="lsx-sharing__spec-item">
                  <span className="lsx-sharing__spec-label">
                    {spec.label}
                  </span>
                  <span className="lsx-sharing__spec-value">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Free Plugin Highlight Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="lsx-sharing__free-highlight">
              <h2 className="lsx-sharing__free-title">
                100% Free Forever
              </h2>
              <p className="lsx-sharing__free-description">
                LSX Sharing is completely free with no hidden costs, premium versions, or upsells. 
                Download from WordPress.org and start amplifying your content today.
              </p>
              <Buttons
                buttons={[
                  { text: 'Download Now', page: 'contact', variant: 'default', size: 'lg' }
                ]}
                alignment="center"
              />
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection faqs={lsxSharingFAQs} />

        {/* CTA Section */}
        <CTASection
          title={lsxSharingCTA.title}
          description={lsxSharingCTA.description}
          primaryButtonText={lsxSharingCTA.buttons[0].text}
          primaryButtonPage={lsxSharingCTA.buttons[0].page}
          secondaryButtonText={lsxSharingCTA.buttons[1].text}
          secondaryButtonPage={lsxSharingCTA.buttons[1].page}
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
