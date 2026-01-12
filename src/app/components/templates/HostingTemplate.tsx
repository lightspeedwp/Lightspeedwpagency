/**
 * Hosting Template
 * 
 * WordPress template: templates/page-hosting.html
 * 
 * Modern hosting page showcasing WordPress & WooCommerce hosting services.
 * 
 * Pattern order:
 * Hero → Client Logos → Hosting Packages → Why Trust Section → 
 * Features Grid → Design Template Section → Free Consultation → FAQs
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
import { useState } from 'react';
import { 
  Server,
  Shield,
  Zap,
  Clock,
  HeadphonesIcon,
  Globe,
  HardDrive,
  CheckCircle,
  TrendingUp,
  Activity,
  Database,
  Lock,
  ArrowRight,
  Check,
  Search,
  RefreshCw,
  FileText,
  Palette
} from 'lucide-react';

// Import centralized hosting data
import { hostingPlans, hostingFeatures } from '../../data/hosting';
import { hostingFAQs } from '../../data/faqs';

export function HostingTemplate() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  // Client logos
  const clients = [
    { name: 'Happy Clients' },
    { name: 'Namecheap' },
    { name: 'NodeSix' },
    { name: 'SiteGround' },
    { name: 'Kinsta' },
    { name: 'Pressidium' }
  ];

  // Hosting packages
  const hostingPackages = hostingPlans;

  // Features included with each package
  const features = hostingFeatures;

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
            background: 'linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          {/* Decorative gradient orbs */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
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
                  HOSTING
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
                  WordPress & WooCommerce<br />hosting services
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
                  Headache-free managed WordPress hosting designed for speed and 
                  optimized for security. Our managed hosting is designed to 
                  boost your website's performance and stability.
                </p>

                <Buttons orientation="horizontal">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById('packages');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      backgroundColor: 'white',
                      color: 'var(--primary)',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    Free consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    page="portfolio-archive"
                  >
                    View our portfolio
                  </Button>
                </Buttons>
              </div>

              {/* Right: Graphic */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div
                  style={{
                    width: '280px',
                    height: '280px',
                    position: 'relative'
                  }}
                >
                  {/* Server illustration */}
                  <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      borderRadius: 'var(--radius-xl)',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(59, 130, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <Server size={80} style={{ color: '#60a5fa' }} />
                  </div>

                  {/* Floating badge */}
                  <div
                    className="absolute"
                    style={{
                      top: '20px',
                      right: '20px',
                      padding: '12px 20px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <CheckCircle size={20} style={{ color: '#10b981' }} />
                    <span
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'white'
                      }}
                    >
                      99.9% Uptime
                    </span>
                  </div>
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

        {/* Hosting Packages Section */}
        <Section 
          spacing="xl" 
          id="packages"
          style={{ backgroundColor: 'var(--background)' }}
        >
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
                LightSpeed hosting packages
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
                Our managed WordPress & WooCommerce hosting gives you the power 
                to focus on your business, while providing optimal performance and stability.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {hostingPackages.map((plan) => (
                <div
                  key={plan.id}
                  style={{
                    backgroundColor: plan.popular ? 'var(--primary)' : 'var(--card)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '36px',
                    border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border-soft)',
                    boxShadow: plan.popular ? '0 20px 60px rgba(30, 106, 255, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
                    position: 'relative'
                  }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        padding: '6px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-small)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'white',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Popular
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: plan.popular ? 'white' : 'var(--foreground)',
                      marginBottom: '20px'
                    }}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-3xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: plan.popular ? 'white' : 'var(--foreground)',
                        marginBottom: '4px'
                      }}
                    >
                      {plan.monthlyPrice}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: plan.popular ? 'rgba(255, 255, 255, 0.8)' : 'var(--muted-foreground)'
                      }}
                    >
                      or {plan.annualPrice}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8" style={{ listStyle: 'none', padding: 0 }}>
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}
                      >
                        <Check 
                          size={20} 
                          style={{ 
                            color: plan.popular ? 'white' : 'var(--success)',
                            flexShrink: 0 
                          }} 
                        />
                        <span
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            color: plan.popular ? 'white' : 'var(--foreground)'
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    page="contact"
                    icon={<ArrowRight size={20} />}
                    style={{
                      backgroundColor: 'white',
                      color: 'var(--primary)',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    Book free hosting consultation
                  </Button>
                </div>
              ))}
            </div>

            {/* Note */}
            <p
              className="text-center mt-8"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
                fontStyle: 'italic'
              }}
            >
              * or we can build a customised plan based on your requirements
            </p>
          </Container>
        </Section>

        {/* Why Trust Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
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
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Why trust our website with LightSpeed?
              </h2>

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
                Over a decade's expertise in the managed hosting and optimization 
                of high-traffic WordPress sites.
              </h3>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '32px',
                  maxWidth: '800px',
                  margin: '0 auto 32px'
                }}
              >
                Our managed WordPress hosting has been built on hundreds of client 
                projects that have stretched our abilities to grow, secure, and 
                perform. Each high-traffic site has taught us the necessary features 
                required to host websites under WordPress; security, backups, caching, 
                CDNs, and HTTPS are all things we've spent a decade's experience 
                leveraging and have built-in to our superior hosting packages.
              </p>

              <Button
                variant="default"
                size="lg"
                page="contact"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--primary)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                }}
              >
                Free consultation
                <ArrowRight size={20} />
              </Button>
            </div>
          </Container>
        </Section>

        {/* Features Grid Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
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
                Features included with each package
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
                Hosting that provides you with protection, monitoring and 
                solid performance.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                const isHovered = hoveredFeature === feature.id;

                return (
                  <div
                    key={feature.id}
                    className="cursor-pointer"
                    style={{
                      padding: '24px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: isHovered ? '1px solid var(--primary)' : '1px solid var(--border-soft)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 10px 30px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
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
                        margin: '0 auto 16px',
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
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        marginBottom: '8px'
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        lineHeight: '1.5',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Design Template Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                <div
                  className="inline-block px-4 py-2 mb-6"
                  style={{
                    backgroundColor: 'var(--primary-soft)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-small)',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  WordPress & WooCommerce Hosting
                </div>

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
                  Our WordPress designers can create a customised design template.
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.8',
                    color: 'var(--muted-foreground)',
                    marginBottom: '32px'
                  }}
                >
                  Our designers are here to craft you a WordPress website that's 
                  both appealing and efficient! Maybe a WooCommerce store? Our 
                  developers are all things WordPress, turning a simple design 
                  into a fully usable page.
                </p>

                <Button
                  variant="primary"
                  size="lg"
                  page="design-service"
                  icon={<ArrowRight size={20} />}
                >
                  Our design service
                </Button>
              </div>

              {/* Right: Logos */}
              <div className="flex items-center justify-center gap-12">
                <div
                  style={{
                    padding: '40px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border-soft)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    alignItems: 'center'
                  }}
                >
                  {[
                    { key: 'woocommerce', text: 'WooCommerce', color: 'var(--primary)' },
                    { key: 'wordpress', text: 'WordPress', color: 'var(--accent)' }
                  ].map((logo) => (
                    <div
                      key={logo.key}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: logo.color,
                        textAlign: 'center'
                      }}
                    >
                      {logo.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Free Consultation CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
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
                className="inline-block px-4 py-2 mb-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Get Started
              </div>

              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Free Hosting Consultation
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '40px',
                  maxWidth: '600px',
                  margin: '0 auto 40px'
                }}
              >
                Get an expert plan from us dedicated on your specific needs.
              </p>

              <Button
                variant="default"
                size="lg"
                page="contact"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--primary)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                }}
              >
                Free consultation
                <ArrowRight size={20} />
              </Button>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
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
                  Hosting FAQs
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Get the lowdown on our managed WordPress hosting.
                </p>
              </div>

              {/* FAQ Items */}
              <FAQSection faqs={hostingFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}