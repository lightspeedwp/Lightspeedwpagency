/**
 * Design Service Template
 * 
 * WordPress template: templates/page-design-service.html
 * 
 * Design service page showcasing UI/UX and branding services.
 * 
 * Pattern order:
 * Hero → Overview → Services → Process → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Hero } from '../patterns/Hero';
import { ServiceOfferingsGrid } from '../patterns/ServiceOfferingsGrid';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { CTASection } from '../patterns/CTASection';
import { 
  Palette,
  ArrowRight,
  Monitor,
  RefreshCw,
  Mail,
  Layout,
  PenTool,
  Image,
  ShoppingBag,
  Store,
  CheckCircle
} from 'lucide-react';
import '@/styles/templates/service-detail.css';

// Import detailed data
import { designServiceDetailed } from '../../data/services-detailed';

export function DesignServiceTemplate() {
  const data = designServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'new-website-design': Monitor,
    'website-redesign': RefreshCw,
    'newsletters': Mail,
    'landing-pages': Layout,
    'icons-illustrations': PenTool,
    'hero-images': Image,
    'product-images': ShoppingBag,
    'new-store-design': Store,
    'store-redesign': RefreshCw
  };

  // Map data to component formats
  const offerings = data.subServices.map(service => ({
    id: service.id,
    icon: serviceIcons[service.id] || Palette,
    title: service.title,
    description: service.description,
    buttonText: `More About ${service.title}`,
    buttonPage: 'contact' as const
  }));

  const processSteps = data.process.steps.map(step => ({
    step: step.number,
    icon: CheckCircle, // Generic icon as specific ones aren't mapped
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
        gradient="purple"
        spacing="xl"
        badge={{
          icon: Palette,
          text: 'Design & Branding'
        }}
        title={data.headline}
        description={data.tagline}
        buttons={[
          {
            label: 'Start a Project',
            page: 'contact',
            variant: 'default',
            icon: ArrowRight,
          },
          {
            label: 'View Portfolio',
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

      {/* Overview Section (Why LightSpeed) */}
      <Section spacing="xl" background="muted">
        <Container>
          <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
            <Heading level={2} align="center" className="wp-mb-6">
              {data.whyLightSpeed.title}
            </Heading>
            <Paragraph size="large" align="center" style={{ color: 'var(--muted-foreground)' }}>
              {data.whyLightSpeed.description}
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Design Services Offerings */}
      <ServiceOfferingsGrid
        title="Our Design Services"
        description={data.description}
        offerings={offerings}
        columns={3}
        backgroundColor="var(--background)"
        spacing="xl"
      />

      {/* Process Steps Section */}
      <Section spacing="xl">
        <Container>
          <div className="wp-text-center wp-mb-12">
            <Heading level={2} align="center" className="wp-mb-4">
              {data.process.title}
            </Heading>
            <Paragraph size="large" align="center" className="wp-max-w-2xl wp-mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              {data.process.description}
            </Paragraph>
          </div>

          <ProcessSteps
            steps={processSteps}
            columns={3}
            variant="cards"
            badgeStyle="circle"
            maxWidth="6xl"
          />
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title={data.cta.title}
        description={data.cta.description}
        primaryButtonText={data.cta.buttonText}
        primaryButtonPage={data.cta.buttonPage as any}
        gradient="purple"
      />
    </>
  );
}