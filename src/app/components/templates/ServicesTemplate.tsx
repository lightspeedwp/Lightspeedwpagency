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

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Buttons, Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { FAQSection } from '../patterns/FAQSection';
import { Hero } from '../patterns/Hero';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { CTASection } from '../patterns/CTASection';
import { useNavigation } from '../../contexts/NavigationContext';
import { useState } from 'react';
import { 
  Search,
  ArrowRight,
  CheckCircle,
  Palette,
  Code,
  Zap,
  Shield,
  HardDrive,
  RefreshCw,
  FileText,
  Mail,
  Users,
  TrendingUp,
  Settings,
  Globe,
  Sparkles,
  Award
} from 'lucide-react';

// Import centralized data
import { servicesSimplified } from '../../data/services';
import { 
  servicesPageBenefits,
  servicesPageIndustries,
  servicesPageProcess,
  servicesPageFAQs,
  servicesPageHero,
  servicesPageCTA
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
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
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
            <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
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
        <FeatureGrid
          title="What We Do"
          description="Comprehensive WordPress services for every need"
          columns={3}
          variant="bordered"
          items={services.map(service => ({
            icon: service.icon,
            title: service.title,
            description: service.description,
            features: service.features,
            link: service.page
          }))}
        />

        {/* Why Choose Us */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Why Choose LightSpeed?
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Your trusted WordPress partner
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-8)' }}>
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}
                    >
                      <Icon size={32} style={{ color: 'var(--primary)' }} />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        marginBottom: '8px'
                      }}
                    >
                      {benefit.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Process Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                How We Work
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Our streamlined process from start to finish
              </p>
            </div>

            <ProcessSteps steps={processSteps} />
          </Container>
        </Section>

        {/* Industries Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Industries We Serve
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto 32px'
                }}
              >
                Experience across diverse sectors
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-4)' }}>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  style={{
                    padding: '20px 24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <CheckCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
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
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-max-w-4xl">
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Frequently Asked Questions
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Common questions about our services
                </p>
              </div>

              <FAQSection faqs={faqs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}