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
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { Hero } from '../patterns/Hero';
import { useNavigation } from '../../contexts/NavigationContext';
import { useState } from 'react';
import { 
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import '@/styles/templates/services-page.css';

// Import centralized data
import { servicesSimplified } from '../../data/services';
import { 
  servicesPageBenefits,
  servicesPageIndustries,
  servicesPageProcess,
  servicesPageFAQs
} from '../../data/services-page';

export function ServicesTemplate() {
  const { navigateTo } = useNavigation();
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

      {/* Why Choose Us */}
      <WhyChooseUs
        title="Why Choose LightSpeed?"
        description="Your trusted WordPress partner"
        reasons={benefits}
        columns={3}
        spacing="xl"
      />

      {/* Process Section */}
      <Section spacing="xl" className="services-page__process-section">
        <Container>
          <div className="services-page__section-header">
            <h2 className="services-page__section-title">
              How We Work
            </h2>

            <p className="services-page__section-description">
              Our streamlined process from start to finish
            </p>
          </div>

          <ProcessSteps steps={processSteps} />
        </Container>
      </Section>

      {/* Industries Section */}
      <Section spacing="xl" className="services-page__industries-section">
        <Container>
          <div className="services-page__section-header">
            <h2 className="services-page__section-title">
              Industries We Serve
            </h2>

            <p className="services-page__section-description">
              Experience across diverse sectors
            </p>
          </div>

          <div className="services-page__industries-grid">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="services-page__industry-card"
              >
                <CheckCircle size={20} className="services-page__industry-icon" />
                <span className="services-page__industry-name">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss your needs and create a custom solution that drives results. Schedule a free consultation today."
        primaryButtonText="Contact Us"
        primaryButtonPage="contact"
        secondaryButtonText="View Our Work"
        secondaryButtonPage="portfolio"
        gradient="blue"
      />
      
      {/* FAQ Section */}
      <Section spacing="xl" className="services-page__faq-section">
        <Container>
          <div className="wp-max-w-4xl wp-mx-auto">
            <div className="services-page__faq-header">
              <h2 className="services-page__section-title">
                Frequently Asked Questions
              </h2>

              <p className="services-page__section-description">
                Common questions about our services
              </p>
            </div>

            <FAQSection faqs={faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}