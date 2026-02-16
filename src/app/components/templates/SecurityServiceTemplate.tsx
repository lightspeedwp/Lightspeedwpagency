/**
 * Security Service Template
 * 
 * WordPress template: templates/page-security-service.html
 * 
 * Security service page showcasing security audits and malware removal.
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
  Shield,
  ArrowRight,
  Search,
  ShieldAlert,
  ClipboardCheck,
  AlertTriangle,
  Eye,
  Trash2,
  CheckCircle
} from 'lucide-react';
import '@/styles/templates/service-detail.css';

// Import detailed data
import { securityServiceDetailed } from '../../data/services-detailed';

export function SecurityServiceTemplate() {
  const data = securityServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'security-audit': Search,
    'malware-removal': ShieldAlert
  };

  // Icon mapping for Process steps
  const processIcons: Record<string, any> = {
    'initial-review': Search,
    'website-cleanup': Trash2,
    'website-assessment': ClipboardCheck,
    'vulnerability-assessment': AlertTriangle,
    'monitoring': Eye
  };

  // Map data to component formats
  const offerings = data.subServices.map(service => ({
    id: service.id,
    icon: serviceIcons[service.id] || Shield,
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
        gradient="red"
        spacing="xl"
        badge={{
          icon: Shield,
          text: 'Security & Protection'
        }}
        title={data.headline}
        description={data.tagline}
        buttons={[
          {
            label: 'Free Consultation',
            page: 'contact',
            variant: 'default',
            icon: ArrowRight,
          },
          {
            label: 'View Hosting Plans',
            page: 'hosting',
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
      <Section spacing="xl" className="service-detail__overview-section">
        <Container>
          <div className="service-detail__section-header">
            <Heading level={2} align="center" className="service-detail__title">
              {data.whyLightSpeed.title}
            </Heading>
            <Paragraph align="center" className="service-detail__description">
              {data.whyLightSpeed.description}
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Security Services Offerings */}
      <ServiceOfferingsGrid
        title="Our Security Services"
        description={data.description}
        offerings={offerings}
        columns={2}
        backgroundColor="var(--background)"
        spacing="xl"
      />

      {/* Process Steps Section */}
      <Section spacing="xl" className="service-detail__process-section">
        <Container>
          <div className="service-detail__section-header">
            <Heading level={2} align="center" className="service-detail__title">
              {data.process.title}
            </Heading>
            <Paragraph align="center" className="service-detail__description">
              {data.process.description}
            </Paragraph>
          </div>

          <ProcessSteps
            steps={processSteps}
            columns={5}
            variant="cards"
            badgeStyle="circle"
            maxWidth="full"
          />
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection
        title={data.cta.title}
        description={data.cta.description}
        primaryButtonText={data.cta.buttonText}
        primaryButtonPage={data.cta.buttonPage as any}
        gradient="red"
      />
    </>
  );
}