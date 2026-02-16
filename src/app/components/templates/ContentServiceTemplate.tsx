/**
 * Content Service Template
 * 
 * WordPress template: templates/page-content-service.html
 * 
 * Content service page showcasing content strategy and creation.
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
  FileText,
  ArrowRight,
  Search,
  Map,
  PenTool,
  Download,
  Zap,
  CheckCircle,
  FileSearch
} from 'lucide-react';
import '@/styles/templates/service-detail.css';

// Import detailed data
import { contentServiceDetailed } from '../../data/services-detailed';

export function ContentServiceTemplate() {
  const data = contentServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'content-audit': FileSearch,
    'content-strategy': Map,
    'content-creation': PenTool
  };

  // Icon mapping for Process steps
  const processIcons: Record<string, any> = {
    'content-audit-step': Search,
    'content-strategy-step': Map,
    'collect-content': Download,
    'document-workflow': FileText,
    'implement-workflow': Zap
  };

  // Map data to component formats
  const offerings = data.subServices.map(service => ({
    id: service.id,
    icon: serviceIcons[service.id] || FileText,
    title: service.title,
    description: service.description,
    buttonText: `More About ${service.title}`,
    // Update links to specific pages
    buttonPage: service.id === 'content-audit' ? 'content-audit' : 
                service.id === 'content-strategy' ? 'content-strategy' : 'contact'
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
        gradient="amber"
        spacing="xl"
        badge={{
          icon: FileText,
          text: 'Content Strategy'
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
            label: 'Our Process',
            page: 'about-process',
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
            <Heading level={2} className="service-detail__title">
              {data.whyLightSpeed.title}
            </Heading>
            <Paragraph className="service-detail__description">
              {data.whyLightSpeed.description}
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Content Services Offerings */}
      <ServiceOfferingsGrid
        title="Our Content Services"
        description={data.description}
        offerings={offerings}
        columns={3}
        backgroundColor="var(--background)"
        spacing="xl"
      />

      {/* Process Steps Section */}
      <Section spacing="xl" className="service-detail__process-section">
        <Container>
          <div className="service-detail__section-header">
            <Heading level={2} className="service-detail__title">
              {data.process.title}
            </Heading>
            <Paragraph className="service-detail__description">
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
        gradient="amber"
      />
    </>
  );
}