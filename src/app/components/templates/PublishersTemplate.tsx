/**
 * Publishers Template
 * 
 * Landing page for Publishers solution.
 * Target audience: Print magazines, newspapers, publishing companies.
 * 
 * Pattern order: Hero → Overview → Features → Process → Testimonial → FAQ → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Hero } from '../patterns/Hero';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { TestimonialInline } from '../patterns/TestimonialInline';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import '@/styles/templates/service-detail.css';

// Import centralized data
import {
  publishersHero,
  publishersOverview,
  publishersFeatures,
  publishersProcess,
  publishersTestimonial,
  publishersFAQ,
  publishersCTA
} from '../../data/publishers-page';

export function PublishersTemplate() {
  return (
    <>
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Solutions', href: '/solutions' },
                { label: 'Publishers' }
              ]}
            />
        </section>

        {/* Hero Section */}
        <Hero
          variant="service"
          align="center"
          maxWidth="4xl"
          gradient="slate"
          spacing="xl"
          badge={{
            icon: publishersHero.badge.icon,
            text: publishersHero.badge.text
          }}
          title={publishersHero.title}
          titleHighlight={publishersHero.titleHighlight}
          description={publishersHero.description}
          buttons={publishersHero.buttons.map(btn => ({
            label: btn.text,
            page: btn.page,
            variant: (btn.variant === 'default' ? 'primary' : btn.variant) as 'primary' | 'secondary' | 'outline'
          }))}
        />

        {/* Overview & Stats */}
        <Section spacing="xl">
          <Container>
            <div className="wp-text-center wp-mb-12">
              <Heading level={2} className="wp-mb-4">
                {publishersOverview.title}
              </Heading>
              <Paragraph size="large" className="wp-max-w-3xl wp-mx-auto">
                {publishersOverview.description}
              </Paragraph>
            </div>
            
            <StatsGrid
              stats={publishersOverview.stats}
              columns={4}
              variant="default"
            />
          </Container>
        </Section>

        {/* Features Section */}
        <FeatureGrid
          title="Built for the Newsroom"
          description="Specialized features that power modern digital publishing"
          items={publishersFeatures}
          columns={3}
          variant="default"
        />

        {/* Process Section */}
        <Section spacing="xl" className="wp-bg-muted">
          <Container>
            <div className="service-detail__section-header wp-text-center wp-mb-12">
              <Heading level={2} className="service-detail__title">
                Our Methodology
              </Heading>
              <Paragraph className="service-detail__description">
                From print to digital dominance
              </Paragraph>
            </div>
            
            <ProcessSteps 
              steps={publishersProcess}
              variant="default"
              columns={4}
            />
          </Container>
        </Section>

        {/* Testimonial */}
        <Section spacing="xl">
          <Container>
            <TestimonialInline
              testimonials={[{
                quote: publishersTestimonial.quote,
                author: publishersTestimonial.author,
                role: publishersTestimonial.role,
                company: publishersTestimonial.company,
                image: publishersTestimonial.image
              }]}
              heading="Trusted by Publishers"
            />
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection
          title="Publisher FAQs"
          description="Common questions from media organizations"
          faqs={publishersFAQ}
          variant="muted"
        />

        {/* CTA Section */}
        <CTASection
          title={publishersCTA.title}
          description={publishersCTA.description}
          primaryButtonText={publishersCTA.buttons[0].text}
          primaryButtonPage={publishersCTA.buttons[0].page as any}
          secondaryButtonText={publishersCTA.buttons[1].text}
          secondaryButtonPage={publishersCTA.buttons[1].page as any}
          gradient="slate"
        />
    </>
  );
}
