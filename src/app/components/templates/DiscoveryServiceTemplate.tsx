/**
 * Discovery Service Template
 * 
 * WordPress template: templates/page-discovery-service.html
 * 
 * Discovery service page showcasing website discovery and exploration services.
 * 
 * Pattern order:
 * Hero → Discovery Services → Process Explained → Why LightSpeed → Newsletter
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Buttons, Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { useNavigation } from '../../contexts/NavigationContext';
import { useState } from 'react';
import { 
  Lightbulb,
  ArrowRight,
  Zap,
  ShoppingCart,
  Layers,
  Code,
  Ruler,
  Target,
  Search,
  Settings,
  FileText,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export function DiscoveryServiceTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  // Client logos
  const clients = [
    { name: 'Answer' },
    { name: 'Xmedix' },
    { name: 'ACF' },
    { name: 'MEDLINE' },
    { name: 'NatureBridge' },
    { name: 'cfe' }
  ];

  // Discovery services
  const discoveryServices = [
    {
      id: 'migrations',
      icon: Zap,
      title: 'Migrations',
      description: 'By understanding your requirements and needs, we can advise on best solutions.',
      buttonText: 'More About Migrations →',
      buttonPage: 'migrations-service'
    },
    {
      id: 'woocommerce',
      icon: ShoppingCart,
      title: 'WooCommerce Stores',
      description: 'WooCommerce can identify new ecommerce requirements.',
      buttonText: 'More About WooCommerce Stores →',
      buttonPage: 'woocommerce'
    },
    {
      id: 'tour-operator',
      icon: Layers,
      title: 'Tour Operator Websites',
      description: 'Assessment and analysis to plan out your next Wetu tour site.',
      buttonText: 'More About Tour Operator Sites →',
      buttonPage: 'solutions'
    },
    {
      id: 'custom-dev',
      icon: Code,
      title: 'Custom Development',
      description: 'We provide total make development advice, considering custom website development on scale.',
      buttonText: 'More About Custom Development →',
      buttonPage: 'development-service'
    }
  ];

  // Discovery process steps
  const processSteps = [
    {
      id: 'one-size',
      icon: Ruler,
      title: 'One size doesn\'t fit all',
      description: 'You need a solution that is unique to your business.'
    },
    {
      id: 'important',
      icon: Target,
      title: 'Why is it so important?',
      description: 'Understanding your unique needs so we can provide tailor-made solutions.'
    },
    {
      id: 'objectives',
      icon: FileText,
      title: 'Our objectives',
      description: 'Producing clear reports on defining a business blueprint.'
    },
    {
      id: 'analysis',
      icon: Search,
      title: 'Analysis',
      description: 'Through assessment that ensures the right areas of new success.'
    },
    {
      id: 'research',
      icon: Settings,
      title: 'Research & development',
      description: 'Training and leading to innovative, tested and future-rich ideas.'
    },
    {
      id: 'approach',
      icon: TrendingUp,
      title: 'Recommended approach',
      description: 'Profiling your needs to identify a successful approach.'
    },
    {
      id: 'project-plan',
      icon: CheckCircle,
      title: 'Project plan',
      description: 'Thoroughly assessment that ensures the target outcome of success.'
    },
    {
      id: 'lightspeed-way',
      icon: Zap,
      title: 'The LightSpeed way',
      description: 'Following your needs to identify a successful approach.'
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          {/* Decorative gradient orb */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="relative z-10">
                <div
                  className="inline-block px-4 py-2 mb-6"
                  style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    fontSize: 'var(--text-small)',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 'var(--font-weight-semibold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#60a5fa'
                  }}
                >
                  DISCOVERY
                </div>

                <h1
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '20px',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  Website Discovery and<br />Exploration
                </h1>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '32px',
                    maxWidth: '600px'
                  }}
                >
                  We listen to understand your needs, ensuring the best approach 
                  with clear cost and timelines. Let us help you uncover your 
                  website's full discovery.
                </p>

                <Buttons orientation="horizontal">
                  <Button
                    variant="default"
                    size="lg"
                    page="contact"
                    icon={<ArrowRight size={20} />}
                    style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    Free consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    page="portfolio-archive"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      backgroundColor: 'transparent'
                    }}
                  >
                    View our portfolio
                  </Button>
                </Buttons>
              </div>

              {/* Right: Head with Lightbulb Illustration */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div
                  style={{
                    width: '280px',
                    height: '280px',
                    position: 'relative'
                  }}
                >
                  {/* Head outline with lightbulb */}
                  <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      borderRadius: '50% 50% 0 0',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '3px solid rgba(59, 130, 246, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                      position: 'relative'
                    }}
                  >
                    {/* Lightbulb in center */}
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(59, 130, 246, 0.3)',
                        border: '2px solid rgba(59, 130, 246, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Lightbulb size={56} style={{ color: '#60a5fa' }} />
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div
                    className="absolute"
                    style={{
                      top: '40px',
                      right: '20px',
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(59, 130, 246, 0.3)',
                      border: '2px solid rgba(59, 130, 246, 0.5)'
                    }}
                  />
                  <div
                    className="absolute"
                    style={{
                      bottom: '60px',
                      left: '20px',
                      width: '24px',
                      height: '24px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(96, 165, 250, 0.3)',
                      border: '2px solid rgba(96, 165, 250, 0.5)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="mt-16 relative z-10">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '20px 32px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      minWidth: '150px'
                    }}
                  >
                    A few of our happy clients:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-8">
                    {clients.map((client, index) => (
                      <div
                        key={index}
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'white',
                          opacity: 0.6,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          transition: 'opacity 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
                      >
                        {client.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Website Discovery Services Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            {/* Section Header */}
            <div className="text-center mb-16">
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
                Our website discovery services
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
                Through website discovery we identify your goals and requirements and provide recommendations.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - 2 services */}
              <div className="space-y-8">
                {discoveryServices.slice(0, 2).map((service) => {
                  const Icon = service.icon;
                  const isHovered = hoveredService === service.id;

                  return (
                    <div
                      key={service.id}
                      className="cursor-pointer"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Icon 
                          size={28} 
                          style={{ 
                            color: isHovered ? 'white' : 'var(--primary)',
                            transition: 'color 0.3s ease'
                          }} 
                        />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '12px'
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)',
                          marginBottom: '16px'
                        }}
                      >
                        {service.description}
                      </p>

                      <a
                        href={`/${service.buttonPage}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(service.buttonPage as any);
                        }}
                        aria-label={service.buttonText}
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--primary)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'gap 0.3s ease',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.gap = '8px'}
                        onMouseLeave={(e) => e.currentTarget.style.gap = '4px'}
                      >
                        {service.buttonText}
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Center Image */}
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--muted)',
                  aspectRatio: '3/4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <Search size={64} style={{ color: 'var(--muted-foreground)', margin: '0 auto 16px' }} />
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Discovery Workshop
                  </p>
                </div>
              </div>

              {/* Right Column - 2 services */}
              <div className="space-y-8 lg:col-start-1">
                {discoveryServices.slice(2, 4).map((service) => {
                  const Icon = service.icon;
                  const isHovered = hoveredService === service.id;

                  return (
                    <div
                      key={service.id}
                      className="cursor-pointer"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                      }}
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Icon 
                          size={28} 
                          style={{ 
                            color: isHovered ? 'white' : 'var(--primary)',
                            transition: 'color 0.3s ease'
                          }} 
                        />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '12px'
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)',
                          marginBottom: '16px'
                        }}
                      >
                        {service.description}
                      </p>

                      <a
                        href={`/${service.buttonPage}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(service.buttonPage as any);
                        }}
                        aria-label={service.buttonText}
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--primary)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'gap 0.3s ease',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.gap = '8px'}
                        onMouseLeave={(e) => e.currentTarget.style.gap = '4px'}
                      >
                        {service.buttonText}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Discovery Process Explained Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Title and Description */}
              <div>
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '20px',
                    color: 'var(--foreground)'
                  }}
                >
                  Our discovery<br />process explained
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Collaborating to understand your needs and provide a clear 
                  development road map.
                </p>
              </div>

              {/* Right: Process Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.id}
                      style={{
                        padding: '24px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.5',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Why LightSpeed Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px'
                }}
              >
                <Zap size={48} style={{ color: 'white' }} />
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    color: 'var(--primary-foreground)',
                    margin: 0
                  }}
                >
                  Why LightSpeed?
                </h2>
              </div>

              <h3
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: '1.3',
                  marginBottom: '24px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Over 15 years in launching successful WordPress websites.
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* WordPress Logo */}
                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '8px'
                    }}
                  >
                    Why WordPress?
                  </div>
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      opacity: 0.9
                    }}
                  >
                    Powering 43% of all websites globally
                  </p>
                </div>

                {/* WooCommerce Logo */}
                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '8px'
                    }}
                  >
                    Why Woo?
                  </div>
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      opacity: 0.9
                    }}
                  >
                    Complete ecommerce functionality
                  </p>
                </div>

                {/* Headless Logo */}
                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '8px'
                    }}
                  >
                    Why Headless?
                  </div>
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      opacity: 0.9
                    }}
                  >
                    Future-proof and ultra-fast sites
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  icon={<ArrowRight size={20} />}
                  style={{
                    backgroundColor: '#34d399',
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(52, 211, 153, 0.3)'
                  }}
                >
                  Book a free consultation
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Newsletter Section */}
        <Section 
          spacing="lg"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginBottom: '12px'
                }}
              >
                Subscribe
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  marginBottom: '24px',
                  opacity: 0.9
                }}
              >
                Get the latest news & updates on LightSpeed releases!
              </p>

              <form 
                onSubmit={handleNewsletterSubmit}
                style={{
                  display: 'flex',
                  gap: '12px',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1,
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
                <Button
                  variant="default"
                  size="lg"
                  type="submit"
                  style={{
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    flexShrink: 0
                  }}
                >
                  Sign Up
                  <ArrowRight size={20} />
                </Button>
              </form>

              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  marginTop: '16px',
                  opacity: 0.7
                }}
              >
                Some content is already copyrighted to LightSpeed Company
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}