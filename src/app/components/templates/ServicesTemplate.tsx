/**
 * Services Overview Template
 * 
 * WordPress template: templates/page-services.html
 * 
 * Main services overview page showcasing all service offerings.
 * 
 * Pattern order:
 * Hero → Services Grid → Why Choose Us → Process → Industries → CTA → FAQs
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Buttons, Button } from '../blocks/design/Buttons';
import { WhyChooseUs } from '../patterns/WhyChooseUs';
import { WordPressServices } from '../patterns/WordPressServices';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { FAQSection } from '../patterns/FAQSection';
import { Hero } from '../patterns/Hero';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ServiceComparisonTable } from '../patterns/ServiceComparisonTable';
import { useState } from 'react';
import {
  Code,
  PaintBrush as Palette,
  MagnifyingGlass as Search,
  PenNib as PenTool,
  Wrench,
  ArrowRight,
  Sparkle,
  CheckCircle
} from '@phosphor-icons/react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

// Import centralized data
import { servicesSimplified } from '../../data/services';
import { 
  servicesPageBenefits,
  servicesPageIndustries,
  servicesPageProcess,
  servicesPageFAQs
} from '../../data/services-page';

export function ServicesTemplate() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Use centralized real data
  const services = servicesSimplified;
  const benefits = servicesPageBenefits;
  const industries = servicesPageIndustries;
  const processSteps = servicesPageProcess;
  const faqs = servicesPageFAQs;

  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="page"
        align="center"
        maxWidth="4xl"
        gradient="blue"
        spacing="xl"
        badge={{
          icon: Sparkle,
          text: 'OUR SERVICES'
        }}
        title="WordPress & WooCommerce Services"
        description="From discovery to ongoing support, we provide comprehensive WordPress services to help your business succeed online. Over 15 years of expertise delivering exceptional results."
        buttons={
          <Buttons orientation="horizontal" className="wp-justify-center">
            <Button
              variant="primary"
              size="lg"
              page="contact"
              icon={<ArrowRight size={20} />}
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              page="portfolio-archive"
            >
              View Work
            </Button>
          </Buttons>
        }
      />

      {/* Services Grid */}
      <ScrollReveal animation="fade-up">
        <WordPressServices
          title="What we do"
          description="Comprehensive WordPress services for every need"
          services={services.map(service => ({
            icon: service.icon,
            title: service.title,
            description: service.description,
            features: service.features,
            link: service.page,
            linkText: "Learn More"
          }))}
          columns={3}
          spacing="xl"
        />
      </ScrollReveal>

      {/* ============================================
          SERVICE COMPARISON TABLE
          ============================================ */}
      <ScrollReveal animation="fade-up">
        <Section spacing="xl">
          <Container>
            <ServiceComparisonTable
              title="Compare our services"
              description="See what's included in each service offering at a glance."
            />
          </Container>
        </Section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal animation="fade-up">
        <WhyChooseUs
          title="Why choose LightSpeed?"
          description="Your trusted WordPress partner"
          reasons={benefits}
          columns={3}
          spacing="xl"
        />
      </ScrollReveal>

      {/* Process Section */}
      <Section spacing="xl">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wp-flex wp-flex-col wp-items-center wp-justify-center wp-text-center wp-mb-12">
              <h2 className="wp-m-0 wp-mb-4 template-section-header__title template-section-header__title--h2">
                How We Work
              </h2>

              <p className="wp-m-0 wp-max-w-2xl template-section-header__description template-section-header__description--secondary">
                Our streamlined process from start to finish
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <ProcessSteps steps={processSteps} />
          </ScrollReveal>
        </Container>
      </Section>

      {/* Industries Section */}
      <Section spacing="xl" backgroundColor="var(--muted)">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wp-flex wp-flex-col wp-items-center wp-justify-center wp-text-center wp-mb-12">
              <h2 className="wp-m-0 wp-mb-4 template-section-header__title template-section-header__title--h2">
                Industries We Serve
              </h2>

              <p className="wp-m-0 wp-max-w-2xl template-section-header__description template-section-header__description--secondary">
                Experience across diverse sectors
              </p>
            </div>
          </ScrollReveal>

          <div className="wp-grid-3-cols wp-gap-6">
            {industries.map((industry, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                <div
                  className="industry-card"
                >
                  <CheckCircle size={24} weight="duotone" color="var(--primary)" className="shrink-0" />
                  <span className="industry-card__label">
                    {industry}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <FunkyCTA
        title="Ready to Start Your Project?"
        description="Let's discuss your needs and create a custom solution that drives results. Schedule a free consultation today."
        buttonText="Contact Us"
        buttonPage="contact"
        benefits={[
          'Free initial consultation',
          'Custom strategy & proposal',
          'Transparent fixed-price quotes',
          'Dedicated project manager',
          'Post-launch support included'
        ]}
      />
      
      {/* FAQ Section */}
      <Section spacing="xl">
        <Container>
          <div className="wp-max-w-4xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="wp-flex wp-flex-col wp-items-center wp-justify-center wp-text-center wp-mb-12">
                <h2 className="wp-m-0 wp-mb-4 template-section-header__title template-section-header__title--h2">
                  Frequently asked questions
                </h2>

                <p className="wp-m-0 wp-max-w-2xl template-section-header__description template-section-header__description--secondary">
                  Common questions about our services
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <FAQSection faqs={faqs} />
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}