/**
 * Discovery Service Template
 * 
 * WordPress template: templates/page-discovery-service.html
 * 
 * Discovery service page showcasing website discovery and exploration services.
 * 
 * Pattern order:
 * Hero → Service Offerings → Process Steps → Why LightSpeed → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Hero } from '../patterns/Hero';
import { ServiceOfferingsGrid } from '../patterns/ServiceOfferingsGrid';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { CTASection } from '../patterns/CTASection';
import { 
  Search,
  ArrowRight,
  Zap,
  ShoppingCart,
  Layers,
  Code,
  Ruler,
  Target,
  FileText,
  Settings,
  CheckCircle,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import '@/styles/templates/service-detail.css';

// Import detailed data
import { discoveryServiceDetailed } from '../../data/services-detailed';

export function DiscoveryServiceTemplate() {
  const data = discoveryServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'migrations-discovery': Zap,
    'tour-operator-discovery': Layers,
    'woocommerce-discovery': ShoppingCart,
    'custom-development-discovery': Code
  };

  // Icon mapping for Process steps
  const processIcons: Record<string, any> = {
    'one-size-doesnt-fit-all': Ruler,
    'our-objectives': Target,
    'research-development': Settings,
    'project-plan': FileText,
    'why-important': Lightbulb,
    'analysis': Search,
    'recommended-approach': TrendingUp,
    'lightspeed-way': Zap,
    'discovery': Search, // Fallback
  };

  // Map data to component formats
  const offerings = data.subServices.map(service => ({
    id: service.id,
    icon: serviceIcons[service.id] || Search,
    title: service.title,
    description: service.description,
    buttonText: `More About ${service.title}`,
    buttonPage: 'contact' as const
  }));

  const processSteps = data.process.steps.map(step => ({
    step: step.number,
    icon: processIcons[step.id] || CheckCircle,
    title: step.title,
    description: step.description
  }));

  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="service"
        align="left"
        maxWidth="6xl"
        gradient="slate"
        spacing="xl"
        badge={{
          icon: Search,
          text: 'Discovery & Strategy'
        }}
        title={data.headline}
        description={data.tagline}
        buttons={[
          {
            label: 'Free consultation',
            page: 'contact',
            variant: 'default',
            icon: ArrowRight,
          },
          {
            label: 'View our portfolio',
            page: 'portfolio-archive',
            variant: 'outline',
            style: {
              borderColor: 'var(--overlay-white-medium)',
              color: 'var(--color-white)',
              backgroundColor: 'transparent'
            }
          }
        ]}
      />

      {/* Discovery Services Offerings */}
      <ServiceOfferingsGrid
        title="Our Website Discovery Services"
        description={data.description}
        offerings={offerings}
        columns={4}
        backgroundColor="var(--background)"
        spacing="xl"
      />

      {/* Process Steps Section */}
      <Section spacing="xl" background="muted">
        <Container>
          {/* Section Header */}
          <div className="wp-text-center wp-mb-12">
            <Heading level={1} align="center" className="wp-mb-4">
              {data.process.title}
            </Heading>

            <Paragraph size="large" align="center" className="wp-max-w-2xl wp-mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              {data.process.description}
            </Paragraph>
          </div>

          {/* Process Steps */}
          <ProcessSteps
            steps={processSteps}
            columns={4}
            variant="cards"
            badgeStyle="circle"
            maxWidth="6xl"
          />
        </Container>
      </Section>

      {/* Why LightSpeed Section */}
      <Section 
        spacing="xl"
        className="service-detail__highlight-section"
      >
        {/* Background pattern */}
        <div className="service-detail__highlight-pattern" />

        <Container>
          <div className="service-detail__highlight-content wp-relative wp-z-10">
            {/* Section Header */}
            <div className="wp-text-center">
              <Heading level={1} align="center" className="wp-mb-4" style={{ color: 'var(--foreground)' }}>
                Why LightSpeed?
              </Heading>

              <Paragraph size="large" align="center" className="wp-max-w-3xl wp-mx-auto">
                {data.whyLightSpeed.title}
              </Paragraph>
            </div>

            {/* Technology Cards Grid */}
            <div className="wp-grid-3-cols">
              {/* WordPress Logo */}
              <div className="service-detail__highlight-card">
                <div className="service-detail__highlight-title">
                  Why WordPress?
                </div>
                <p className="service-detail__highlight-desc">
                  Open-source and flexible platform
                </p>
              </div>

              {/* WooCommerce Logo */}
              <div className="service-detail__highlight-card">
                <div className="service-detail__highlight-title">
                  Why Woo?
                </div>
                <p className="service-detail__highlight-desc">
                  Complete ecommerce functionality
                </p>
              </div>

              {/* Headless Logo */}
              <div className="service-detail__highlight-card">
                <div className="service-detail__highlight-title">
                  Why Headless?
                </div>
                <p className="service-detail__highlight-desc">
                  Future-proof and ultra-fast sites
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="wp-text-center">
              <Button
                variant="default"
                size="lg"
                page="contact"
                className="service-detail__highlight-btn"
              >
                Book a free consultation
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title={data.cta.title}
        description={data.cta.description}
        primaryButtonText={data.cta.buttonText}
        primaryButtonPage={data.cta.buttonPage as any}
        gradient="slate"
      />
    </>
  );
}