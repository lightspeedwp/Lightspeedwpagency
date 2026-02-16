/**
 * Support Service Template
 * 
 * WordPress template: templates/page-support-service.html
 * 
 * Support service page showcasing maintenance and support services.
 * 
 * Pattern order:
 * Hero → Overview → Services → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Hero } from '../patterns/Hero';
import { ServiceOfferingsGrid } from '../patterns/ServiceOfferingsGrid';
import { CTASection } from '../patterns/CTASection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { 
  LifeBuoy,
  ArrowRight,
  Code,
  Move,
  Server,
  Chrome,
  AlertTriangle,
  Bug,
  MessageCircle,
  Shield,
  GitBranch,
  Database,
  Plug,
  Trash2,
  Share2,
  Smartphone,
  Image,
  Share,
  Layout,
  Zap
} from 'lucide-react';
import '@/styles/templates/service-detail.css';

// Import detailed data
import { supportServiceDetailed } from '../../data/services-detailed';

export function SupportServiceTemplate() {
  const data = supportServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'design-development-support': Code,
    'migrations-support': Move,
    'hosting-support': Server,
    'browser-compatibility': Chrome,
    'error-messages': AlertTriangle,
    'bug-fixes': Bug,
    'advice': MessageCircle,
    'security-support': Shield,
    'staging-environments': GitBranch,
    'structured-data': Database,
    'integrate-plugins': Plug,
    'spam': Trash2,
    '301-redirects': Share2,
    'mobile-bug-fixes': Smartphone,
    'image-optimization': Image,
    'open-graph-tags': Share,
    'broken-design': Layout,
    'site-speed': Zap
  };

  // Map data to component formats
  const offerings = data.subServices.map(service => ({
    id: service.id,
    icon: serviceIcons[service.id] || LifeBuoy,
    title: service.title,
    description: service.description,
    buttonText: 'Learn More',
    buttonPage: 'contact' as const
  }));

  return (
    <>
        {/* Hero Section */}
        <Hero
          variant="service"
          align="left"
          maxWidth="6xl"
          gradient="green"
          spacing="xl"
          badge={{
            icon: LifeBuoy,
            text: 'Support & Maintenance'
          }}
          title={data.headline}
          description={data.tagline}
          buttons={[
            {
              label: 'Get Support',
              page: 'contact',
              variant: 'default',
              icon: ArrowRight,
            },
            {
              label: 'Maintenance Plans',
              page: 'pricing', // Assuming pricing page exists or contact
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

        {/* Support Services Offerings */}
        <ServiceOfferingsGrid
          title="Our Support Services"
          description={data.description}
          offerings={offerings}
          columns={3}
          backgroundColor="var(--background)"
          spacing="xl"
        />

        {/* CTA Section */}
        <CTASection
          title={data.cta.title}
          description={data.cta.description}
          primaryButtonText={data.cta.buttonText}
          primaryButtonPage={data.cta.buttonPage as any}
          gradient="green"
        />
    </>
  );
}