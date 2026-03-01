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

import '../../../styles/templates/services-page.css';
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
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';
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
          icon: Sparkles,
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
          title="What We Do"
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
              title="Compare Our Services"
              description="See what's included in each service offering at a glance."
            />
          </Container>
        </Section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal animation="fade-up">
        <WhyChooseUs
          title="Why Choose LightSpeed?"
          description="Your trusted WordPress partner"
          reasons={benefits}
          columns={3}
          spacing="xl"
        />
      </ScrollReveal>

      {/* Process Section */}
      <Section spacing="xl" className="services-page__process-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="services-page__section-header">
              <h2 className="services-page__section-title">
                How We Work
              </h2>

              <p className="services-page__section-description">
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
      <Section spacing="xl" className="services-page__industries-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="services-page__section-header">
              <h2 className="services-page__section-title">
                Industries We Serve
              </h2>

              <p className="services-page__section-description">
                Experience across diverse sectors
              </p>
            </div>
          </ScrollReveal>

          <div className="services-page__industries-grid">
            {industries.map((industry, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                <div
                  className="services-page__industry-card"
                >
                  <CheckCircle size={20} className="services-page__industry-icon" />
                  <span className="services-page__industry-name">
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
      <Section spacing="xl" className="services-page__faq-section">
        <Container>
          <div className="wp-max-w-4xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="services-page__faq-header">
                <h2 className="services-page__section-title">
                  Frequently Asked Questions
                </h2>

                <p className="services-page__section-description">
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