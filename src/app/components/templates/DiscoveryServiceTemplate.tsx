/**
 * Discovery Service Template
 * 
 * WordPress template: templates/page-discovery-service.html
 * 
 * Discovery service page showcasing website discovery and exploration services.
 * 
 * Pattern order:
 * Hero → Service Offerings → Process Steps → Why LightSpeed → Newsletter
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Hero } from '../patterns/Hero';
import { ServiceOfferingsGrid } from '../patterns/ServiceOfferingsGrid';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
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
  TrendingUp
} from 'lucide-react';

export function DiscoveryServiceTemplate() {
  // Discovery services offerings
  const discoveryServices = [
    {
      id: 'migrations',
      icon: Zap,
      title: 'Migrations',
      description: 'By understanding your requirements and needs, we can advise on best solutions.',
      buttonText: 'More About Migrations',
      buttonPage: 'migrations-service' as const
    },
    {
      id: 'woocommerce',
      icon: ShoppingCart,
      title: 'WooCommerce Stores',
      description: 'WooCommerce can identify new ecommerce requirements.',
      buttonText: 'More About WooCommerce',
      buttonPage: 'woocommerce' as const
    },
    {
      id: 'tour-operator',
      icon: Layers,
      title: 'Tour Operator Websites',
      description: 'Assessment and analysis to plan out your next Wetu tour site.',
      buttonText: 'More About Tour Sites',
      buttonPage: 'solutions' as const
    },
    {
      id: 'custom-dev',
      icon: Code,
      title: 'Custom Development',
      description: 'We provide total make development advice, considering custom website development on scale.',
      buttonText: 'More About Development',
      buttonPage: 'development-service' as const
    }
  ];

  // Discovery process steps (8 steps)
  const processSteps = [
    {
      step: 1,
      icon: Ruler,
      title: 'One size doesn\'t fit all',
      description: 'You need a solution that is unique to your business.'
    },
    {
      step: 2,
      icon: Target,
      title: 'Why is it so important?',
      description: 'Understanding your unique needs so we can provide tailor-made solutions.'
    },
    {
      step: 3,
      icon: FileText,
      title: 'Our objectives',
      description: 'Producing clear reports on defining a business blueprint.'
    },
    {
      step: 4,
      icon: Search,
      title: 'Analysis',
      description: 'Through assessment that ensures the right areas of new success.'
    },
    {
      step: 5,
      icon: Settings,
      title: 'Research & development',
      description: 'Training and leading to innovative, tested and future-rich ideas.'
    },
    {
      step: 6,
      icon: TrendingUp,
      title: 'Recommended approach',
      description: 'Profiling your needs to identify a successful approach.'
    },
    {
      step: 7,
      icon: CheckCircle,
      title: 'Project plan',
      description: 'Thoroughly assessment that ensures the target outcome of success.'
    },
    {
      step: 8,
      icon: Zap,
      title: 'The LightSpeed way',
      description: 'Following your needs to identify a successful approach.'
    }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
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
          title="Website Discovery and Exploration"
          description="We listen to understand your needs, ensuring the best approach with clear cost and timelines. Let us help you uncover your website's full discovery."
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
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                backgroundColor: 'transparent'
              }
            }
          ]}
        />

        {/* Discovery Services Offerings */}
        <ServiceOfferingsGrid
          title="Our Website Discovery Services"
          description="Unlock your website's full potential with our comprehensive discovery services"
          offerings={discoveryServices}
          columns={4}
          backgroundColor="var(--background)"
          spacing="xl"
        />

        {/* Process Steps Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            {/* Section Header */}
            <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
              <h2
                className="font-primary text-h1 font-bold tracking-tight"
                style={{
                  lineHeight: '1.2',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--foreground)'
                }}
              >
                Process Explained
              </h2>

              <p
                className="font-primary text-lg leading-relaxed"
                style={{
                  color: 'var(--muted-foreground)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                Our systematic approach to understanding your business needs and delivering tailored solutions
              </p>
            </div>

            {/* Process Steps - 8 steps in horizontal grid */}
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
          className="wp-gradient-green"
        >
          {/* Background pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1,
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />

          <Container>
            <div style={{ position: 'relative', zIndex: 10 }}>
              {/* Section Header */}
              <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2
                  className="font-primary text-h1 font-bold tracking-tight"
                  style={{ lineHeight: '1.2', marginBottom: 'var(--spacing-4)' }}
                >
                  Why LightSpeed
                </h2>

                <p
                  className="font-primary text-lg leading-relaxed"
                  style={{
                    opacity: 0.95,
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}
                >
                  Accelerated website performance with cutting-edge technologies
                </p>
              </div>

              {/* Technology Cards Grid */}
              <div className="wp-grid-3-cols" style={{ marginBottom: 'var(--spacing-12)' }}>
                {/* WordPress Logo */}
                <div
                  style={{
                    padding: 'var(--spacing-8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    className="font-primary text-xl font-bold"
                    style={{ marginBottom: 'var(--spacing-2)' }}
                  >
                    Why WordPress?
                  </div>
                  <p className="font-primary text-small" style={{ opacity: 0.9 }}>
                    Open-source and flexible platform
                  </p>
                </div>

                {/* WooCommerce Logo */}
                <div
                  style={{
                    padding: 'var(--spacing-8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    className="font-primary text-xl font-bold"
                    style={{ marginBottom: 'var(--spacing-2)' }}
                  >
                    Why Woo?
                  </div>
                  <p className="font-primary text-small" style={{ opacity: 0.9 }}>
                    Complete ecommerce functionality
                  </p>
                </div>

                {/* Headless Logo */}
                <div
                  style={{
                    padding: 'var(--spacing-8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    className="font-primary text-xl font-bold"
                    style={{ marginBottom: 'var(--spacing-2)' }}
                  >
                    Why Headless?
                  </div>
                  <p className="font-primary text-small" style={{ opacity: 0.9 }}>
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
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  Book a free consultation
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Newsletter Section */}
        <NewsletterSignup
          title="Subscribe"
          description="Get the latest news & updates on LightSpeed releases!"
          placeholderText="Enter your email"
          buttonText="Sign Up"
          footnote="Some content is already copyrighted to LightSpeed Company"
          gradient="slate"
          spacing="lg"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
