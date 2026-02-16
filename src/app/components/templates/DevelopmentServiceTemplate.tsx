/**
 * Development Service Template
 * 
 * WordPress template: templates/page-development-service.html
 * 
 * Development service page showcasing WordPress and WooCommerce development.
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
  Code,
  ArrowRight,
  Globe,
  ShoppingCart,
  Move,
  Layout,
  Plug,
  Search,
  Map,
  Rocket,
  Shield,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import '@/styles/templates/service-detail.css';

// Import detailed data
import { developmentServiceDetailed } from '../../data/services-detailed';
import { developmentProcess } from '../../data/company';

export function DevelopmentServiceTemplate() {
  const data = developmentServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'wordpress-websites': Globe,
    'woocommerce-stores': ShoppingCart,
    'migrations': Move,
    'theme-development': Layout,
    'plugin-development': Plug
  };

  // Icon mapping for Process steps (from company.ts)
  const processIcons: Record<string, any> = {
    'discover': Search,
    'plan': Map,
    'build': Code,
    'publish': Rocket,
    'maintain': Shield,
    'grow': TrendingUp
  };

  // Map data to component formats
  const offerings = data.subServices.map(service => ({
    id: service.id,
    icon: serviceIcons[service.id] || Code,
    title: service.title,
    description: service.description,
    buttonText: `More About ${service.title}`,
    buttonPage: 'contact' as const
  }));

  // Use developmentProcess from company.ts as services-detailed.ts process is empty
  const processSteps = developmentProcess.map(step => ({
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
        gradient="blue"
        spacing="xl"
        badge={{
          icon: Code,
          text: 'Development'
        }}
        title={data.headline}
        description={data.tagline}
        buttons={[
          {
            label: 'Consult us on WordPress',
            page: 'contact',
            variant: 'default',
            icon: ArrowRight,
          },
          {
            label: 'View Case Studies',
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

      {/* Development Services Offerings */}
      <ServiceOfferingsGrid
        title="Our Development Services"
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
              Our Development Process
            </Heading>
            <Paragraph size="large" align="center" className="wp-max-w-2xl wp-mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              A systematic approach to building high-quality WordPress solutions
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
        gradient="blue"
      />
    </>
  );
}