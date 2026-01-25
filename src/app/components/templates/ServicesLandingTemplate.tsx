/**
 * Services Landing Template
 * 
 * WordPress template: templates/page-services.html
 * 
 * Modern services overview page inspired by Lightspeed WP design.
 * Links to individual service detail pages with conversion-focused layout.
 * 
 * Pattern order:
 * Hero → Client Logos → Why Section → Services Grid → Featured Project → CTA
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
  Search,
  Palette,
  Code,
  HeadphonesIcon,
  Server,
  RefreshCw,
  Shield,
  FileText,
  Mail,
  ArrowRight,
  Check,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';

export function ServicesLandingTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Services matching Lightspeed WP design
  const servicesData = [
    {
      id: 'discovery',
      icon: Search,
      title: 'Discovery',
      description: 'Our discovery service is your business, we want to delve on how best to optimize online success.',
      link: 'discovery-service',
      linkText: 'View about Discovery →'
    },
    {
      id: 'design',
      icon: Palette,
      title: 'Design',
      description: 'We build your custom UI/Wireframes as how best to optimize website performance.',
      link: 'design-service',
      linkText: 'View about Design →'
    },
    {
      id: 'development',
      icon: Code,
      title: 'Development',
      description: 'Expert team develop your site fully operational and add which get from exceptionally.',
      link: 'development-service',
      linkText: 'View about Development →'
    },
    {
      id: 'support',
      icon: HeadphonesIcon,
      title: 'Support',
      description: 'Expertise you can consistently rely on for three months excellent support.',
      link: 'support-service',
      linkText: 'View about Support →'
    },
    {
      id: 'hosting',
      icon: Server,
      title: 'Hosting',
      description: 'Store and create managed WordPress hosting has given you peace of mind.',
      link: 'hosting',
      linkText: 'View about Hosting →'
    },
    {
      id: 'migrations',
      icon: RefreshCw,
      title: 'Migrations',
      description: 'We are experts at migration-stressed smoothly into WordPress.',
      link: 'migrations-service',
      linkText: 'View about Migrations →'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security',
      description: 'We do sleep easier too, as we focused on keeping you better very secure.',
      link: 'security-service',
      linkText: 'View about Security →'
    },
    {
      id: 'content',
      icon: FileText,
      title: 'Content',
      description: 'Building strategy for conversation, all with strategy and have fast.',
      link: 'content-service',
      linkText: 'View about Content →'
    },
    {
      id: 'mailchimp',
      icon: Mail,
      title: 'Mailchimp',
      description: 'We can help you set the rest of your email marketing to you!',
      link: 'mailchimp-service',
      linkText: 'View about Discovery →'
    }
  ];

  // Client logos
  const clients = [
    { name: 'Deloitte' },
    { name: 'Investec' },
    { name: 'Computicket' },
    { name: 'Primedia' },
    { name: 'Media24' },
    { name: 'AutoTrader' }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '100px',
            paddingBottom: '100px'
          }}
        >
          {/* Gradient orbs */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
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
                  SERVICES
                </div>

                <h1
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.15',
                    letterSpacing: '-0.02em',
                    marginBottom: '24px',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  Your partner in WordPress success
                </h1>

                <p className="wp-block-services-hero__description text-[rgb(255,255,255)]">
                  WordPress websites designed to take your online business 
                  to the next level.
                </p>

                {/* CTA Buttons */}
                <Buttons orientation="horizontal">
                  <Button
                    variant="default"
                    size="lg"
                    page="contact"
                  >
                    Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    page="portfolio-archive"
                  >
                    View Our Work
                  </Button>
                </Buttons>
              </div>

              {/* Right: Decorative Graphic */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div
                  style={{
                    width: '280px',
                    height: '280px',
                    position: 'relative'
                  }}
                >
                  {/* Decorative shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
                      borderRadius: '50%'
                    }}
                  />
                  
                  {/* Central icon */}
                  <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      borderRadius: 'var(--radius-xl)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <Code size={80} style={{ color: 'white', opacity: 0.9 }} />
                  </div>

                  {/* Floating gear icon */}
                  <div
                    className="absolute"
                    style={{
                      top: '20px',
                      right: '20px',
                      width: '60px',
                      height: '60px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'rgba(96, 165, 250, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Sparkles size={28} style={{ color: '#60a5fa' }} />
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Client Logos Bar */}
          <div className="mt-16 relative z-10">
            <Container>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px 40px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'white',
                      minWidth: '240px'
                    }}
                  >
                    A few of our happy clients:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-12">
                    {clients.map((client, index) => (
                      <div
                        key={index}
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'white',
                          opacity: 0.8,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          transition: 'opacity 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                      >
                        {client.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Section>

        {/* Why LightSpeed Section */}
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
                  Why LightSpeed WordPress Services?
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
                  We apply experience and expertise to design and develop your online success.
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.8',
                    color: 'var(--muted-foreground)',
                    marginBottom: '24px'
                  }}
                >
                  A mix of over 15 years' experience, passion, a bunch of talented developers, 
                  brilliant designers and marketers. PLUS heaps of integrity! Plus, a dash of 
                  desire AND some brilliant ideas maybe the kale on top in our smoothie. You just 
                  WANT TO DRINK our Kale Smoothie, it sounds delicious right? Well, it's not 
                  delicious, it's what's healthy and good for you and we are just what's good for 
                  you and we do our jobs well! Does that work for you?
                </p>

                <div className="mb-8">
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.7',
                      color: 'var(--foreground)',
                      marginBottom: '8px'
                    }}
                  >
                    <strong>Meet our Teams on WordPress.org:</strong>
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-8 mt-4">
                    {/* Lightspeed logo */}
                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <Sparkles size={20} />
                      LightSpeed
                    </div>
                    
                    {/* Design logo */}
                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <Palette size={20} />
                      Design
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Team collaboration"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Services Grid Section */}
        <Section 
          spacing="xl" 
          style={{ 
            background: 'linear-gradient(180deg, var(--muted) 0%, var(--background) 100%)'
          }}
        >
          <Container>
            {/* Section Header */}
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 mb-6"
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
                <Target size={14} />
                Our Services
              </div>

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
                WordPress & WooCommerce Experts
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                From discovery to deployment and beyond, we provide comprehensive 
                WordPress services tailored to your business needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service) => {
                const Icon = service.icon;
                const isHovered = hoveredService === service.id;
                
                return (
                  <a
                    key={service.id}
                    href={`#${service.link}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (service.link) navigateTo(service.link);
                    }}
                    style={{
                      textDecoration: 'none',
                      display: 'block',
                      cursor: service.link ? 'pointer' : 'default',
                    }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <div
                      style={{
                        padding: '32px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-xl)',
                        border: `1px solid ${isHovered ? 'var(--primary)' : 'var(--border-soft)'}`,
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                        boxShadow: isHovered ? '0 20px 60px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
                      }}
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px',
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

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h3)',
                          fontWeight: 'var(--font-weight-semibold)',
                          lineHeight: '1.3',
                          color: 'var(--foreground)',
                          marginBottom: '12px'
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.7',
                          color: 'var(--muted-foreground)',
                          marginBottom: '20px'
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Link */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--primary)',
                          fontSize: 'var(--text-base)',
                          fontFamily: 'Lexend, sans-serif',
                          fontWeight: 'var(--font-weight-medium)',
                          opacity: isHovered ? 1 : 0.8,
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {service.linkText}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Featured Project Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            {/* Section Header */}
            <div className="text-center mb-12">
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
                Featured Project
              </div>

              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  color: 'var(--foreground)'
                }}
              >
                Our work speaks for itself — see a recent case study
              </h2>
            </div>

            {/* Featured Project Card */}
            <div
              style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-soft)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Content */}
                <div className="p-12 flex flex-col justify-center">
                  <h3
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      lineHeight: '1.3',
                      color: 'var(--foreground)',
                      marginBottom: '16px'
                    }}
                  >
                    Hello, We heading is funded by over 600 000 websites. How can we help your business today?
                  </h3>

                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      lineHeight: '1.7',
                      color: 'var(--muted-foreground)',
                      marginBottom: '32px'
                    }}
                  >
                    See how we helped transform their online presence with modern 
                    WordPress development and strategic design.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { icon: TrendingUp, value: '600K+', label: 'Websites' },
                      { icon: Award, value: '15+', label: 'Years' },
                      { icon: Check, value: '99.9%', label: 'Uptime' },
                      { icon: Sparkles, value: '24/7', label: 'Support' }
                    ].map((stat, index) => {
                      const StatIcon = stat.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: 'var(--radius-lg)',
                              backgroundColor: 'var(--success-soft)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <StatIcon size={20} style={{ color: 'var(--success)' }} />
                          </div>
                          <div>
                            <div
                              style={{
                                fontFamily: 'Lexend, sans-serif',
                                fontSize: 'var(--text-2xl)',
                                fontWeight: 'var(--font-weight-bold)',
                                color: 'var(--foreground)',
                                lineHeight: '1'
                              }}
                            >
                              {stat.value}
                            </div>
                            <div
                              style={{
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: 'var(--text-small)',
                                color: 'var(--muted-foreground)'
                              }}
                            >
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    page="portfolio"
                  >
                    View Case Study
                    <ExternalLink size={20} />
                  </Button>
                </div>

                {/* Right: Image */}
                <div
                  style={{
                    backgroundColor: 'var(--muted)',
                    minHeight: '400px',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #5B21B6 0%, #1E3A8A 50%, #F59E0B 100%)',
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
                Get in touch for a free consultation
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
                We're here to help you with all your WordPress and WooCommerce needs
              </p>

              <Button
                variant="default"
                size="lg"
                page="contact"
              >
                <ArrowRight size={20} />
                Let's Talk
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}