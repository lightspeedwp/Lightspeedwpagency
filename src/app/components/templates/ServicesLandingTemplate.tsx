/**
 * Services Landing Template
 * 
 * WordPress template: templates/page-services.html
 * 100% CSS variables — no Tailwind.
 * BEM naming: .services-landing-*
 * 
 * @see /src/styles/templates/services-landing.css
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Buttons, Button } from '../blocks/design/Buttons';
import { useNavigation } from '../../contexts/NavigationContext';
import { useState } from 'react';
import '@/styles/templates/services-landing.css';
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
  Check,
  Sparkles,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';

export function ServicesLandingTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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
      link: 'mailchimp',
      linkText: 'View about Discovery →'
    }
  ];

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
      {/* Hero Section */}
      <Section 
        spacing="xl"
        className="services-landing__hero"
      >
        <div className="services-landing__orb" aria-hidden="true" />

        <Container>
          <div
            className="wp-grid-2-cols"
            style={{ gap: 'var(--spacing-16)', alignItems: 'center' }}
          >
            {/* Left: Content */}
            <div className="services-landing__hero-content">
              <div className="services-landing__badge">
                SERVICES
              </div>

              <h1 className="services-landing__title">
                Your partner in WordPress success
              </h1>

              <p className="services-landing__description">
                WordPress websites designed to take your online business 
                to the next level.
              </p>

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
            <div className="services-landing__graphic-container hide-mobile" style={{ margin: '0 auto' }}>
              <div className="services-landing__graphic-bg" />
              
              <div className="services-landing__graphic-center">
                <Code size={80} style={{ color: 'var(--primary-foreground)', opacity: 0.9 }} />
              </div>

              <div className="services-landing__graphic-float">
                <Sparkles size={28} style={{ color: 'var(--accent)' }} />
              </div>
            </div>
          </div>
        </Container>

        {/* Client Logos Bar */}
        <div className="services-landing__clients">
          <Container>
            <div className="services-landing__clients-container">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'var(--spacing-8)',
                }}
              >
                <p className="services-landing__clients-label">
                  A few of our happy clients:
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-12)',
                  }}
                >
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className="services-landing__logo"
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
      <Section spacing="xl" background="default">
        <Container>
          <div
            className="wp-grid-2-cols"
            style={{ gap: 'var(--spacing-16)', alignItems: 'center' }}
          >
            {/* Left: Content */}
            <div className="services-landing__why-content">
              <div className="services-landing__why-badge">
                Why LightSpeed WordPress Services?
              </div>

              <h2 className="services-landing__why-title">
                We apply experience and expertise to design and develop your online success.
              </h2>

              <p className="services-landing__why-text">
                A mix of over 15 years' experience, passion, a bunch of talented developers, 
                brilliant designers and marketers. PLUS heaps of integrity! Plus, a dash of 
                desire AND some brilliant ideas maybe the kale on top in our smoothie. You just 
                WANT TO DRINK our Kale Smoothie, it sounds delicious right? Well, it's not 
                delicious, it's what's healthy and good for you and we are just what's good for 
                you and we do our jobs well! Does that work for you?
              </p>

              <div style={{ marginBottom: 'var(--spacing-8)' }}>
                <p className="services-landing__team-text" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                  Meet our Teams on WordPress.org:
                </p>
                
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 'var(--spacing-8)',
                    marginTop: 'var(--spacing-4)',
                  }}
                >
                  <div className="services-landing__team-badge services-landing__team-badge--primary">
                    <Sparkles size={20} />
                    LightSpeed
                  </div>
                  
                  <div className="services-landing__team-badge services-landing__team-badge--accent">
                    <Palette size={20} />
                    Design
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div>
              <div className="services-landing__image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="services-landing__image"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Grid Section */}
      <Section 
        spacing="xl" 
        className="services-landing__grid-section"
      >
        <Container>
          {/* Section Header */}
          <div className="services-landing__grid-header">
            <div className="services-landing__grid-badge">
              <Target size={14} />
              Our Services
            </div>

            <h2 className="services-landing__grid-title">
              WordPress &amp; WooCommerce Experts
            </h2>

            <p className="services-landing__grid-desc">
              From discovery to deployment and beyond, we provide comprehensive 
              WordPress services tailored to your business needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-6)' }}>
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
                  className="services-landing__card"
                  aria-label={`Learn more about ${service.title}`}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="services-landing__card-content">
                    <div className="services-landing__card-icon">
                      <Icon size={28} />
                    </div>

                    <h3 className="services-landing__card-title">
                      {service.title}
                    </h3>

                    <p className="services-landing__card-text">
                      {service.description}
                    </p>

                    <div className="services-landing__card-link">
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
      <Section spacing="xl" background="default">
        <Container>
          {/* Section Header */}
          <div className="services-landing__grid-header">
            <div className="services-landing__why-badge">
              Featured Project
            </div>

            <h2 className="services-landing__grid-title">
              Our work speaks for itself — see a recent case study
            </h2>
          </div>

          {/* Featured Project Card */}
          <div className="services-landing__featured-card">
            <div className="wp-grid-2-cols" style={{ gap: 0 }}>
              {/* Left: Content */}
              <div className="services-landing__featured-content">
                <h3 className="services-landing__featured-title">
                  Hello, We heading is funded by over 600 000 websites. How can we help your business today?
                </h3>

                <p className="services-landing__featured-text">
                  See how we helped transform their online presence with modern 
                  WordPress development and strategic design.
                </p>

                {/* Stats Grid */}
                <div
                  className="wp-grid-2-cols"
                  style={{ gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-8)' }}
                >
                  {[
                    { icon: TrendingUp, value: '600K+', label: 'Websites' },
                    { icon: Award, value: '15+', label: 'Years' },
                    { icon: Check, value: '99.9%', label: 'Uptime' },
                    { icon: Sparkles, value: '24/7', label: 'Support' }
                  ].map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 'var(--spacing-3)',
                        }}
                      >
                        <div className="services-landing__stat-box">
                          <StatIcon size={20} />
                        </div>
                        <div>
                          <div className="services-landing__stat-value">
                            {stat.value}
                          </div>
                          <div className="services-landing__stat-label">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Buttons>
                  <Button variant="default" page="portfolio-single">
                    View Case Study
                  </Button>
                  <Button variant="ghost" page="portfolio-archive">
                    View All Projects
                  </Button>
                </Buttons>
              </div>

              {/* Right: Image */}
              <div className="services-landing__featured-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
                  alt="Project case study"
                  className="services-landing__featured-image"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, var(--overlay-backdrop) 0%, transparent 50%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 'var(--spacing-8)',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-white)',
                        marginBottom: 'var(--spacing-2)',
                      }}
                    >
                      Project Name
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        color: 'var(--overlay-white-strong)',
                      }}
                    >
                      eCommerce / Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}