/**
 * Front Page Template
 * 
 * WordPress template: templates/front-page.html
 * 
 * Homepage archetype composed from approved patterns.
 * Pattern order: Hero → Features → Services → Portfolio Showcase → Stats → Testimonials → Process → CTA
 * 
 * HEADER/FOOTER PATTERNS:
 * - Default setup uses: SiteHeader (default) + SiteFooter (newsletter)
 * - To switch patterns, use the variant prop:
 *   - <SiteHeader variant="simple" /> for simple header
 *   - <SiteFooter variant="default" /> for default footer
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { HeroHome } from '../patterns/HeroHome';
import { CardGrid } from '../patterns/CardGrid';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { SocialProof } from '../patterns/SocialProof';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';
import { FitText, FitTextCallout } from '../common/FitText';
import { Button } from '../blocks/design/Buttons';
import { useNavigation } from '../../contexts/NavigationContext';
import { homepageFAQs } from '../../data/faqs';
import { blogPosts } from '../../data/posts';
import { featuredTestimonials } from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
import { Code, Palette, ShoppingCart, Zap, Shield, Users, CheckCircle, ArrowRight, Layers, Rocket, BarChart, Heart, Star, Calendar, Clock, ChevronRight } from 'lucide-react';

// Mock data for prototype
const featuredServices = [
  {
    id: '1',
    title: 'WordPress Block Themes',
    excerpt: 'Modern, accessible WordPress block themes built with Full Site Editing (FSE) and token-driven design systems.',
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    href: '/block-theme-development',
    page: 'block-theme-development',
    duration: 'Custom Development',
    price: 'Learn More'
  },
  {
    id: '2',
    title: 'WooCommerce Solutions',
    excerpt: 'Complete e-commerce platforms with custom checkout experiences, payment integrations, and inventory management.',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    href: '/woocommerce-development',
    page: 'woocommerce-development',
    duration: 'Full-Service',
    price: 'Get Started'
  },
  {
    id: '3',
    title: 'Design Systems',
    excerpt: 'Comprehensive token-based design systems that map perfectly to theme.json with patterns and components.',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800',
    href: '/design-systems',
    page: 'design-systems',
    duration: 'Strategy & Build',
    price: 'View Services'
  },
];

const portfolioShowcase = [
  {
    id: '1',
    title: 'African Safari Consultants',
    excerpt: 'Custom WooCommerce platform for luxury safari bookings with advanced filtering and tour management.',
    category: 'WooCommerce',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    href: '/portfolio-single-african-safari-consultants',
    page: 'portfolio-single-african-safari-consultants',
    duration: '4 months',
    price: 'View Case Study'
  },
  {
    id: '2',
    title: 'TechStartup Magazine',
    excerpt: 'Modern editorial WordPress block theme with custom Gutenberg blocks for magazine-style layouts.',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
    href: '/portfolio-single-techstartup-magazine',
    page: 'portfolio-single-techstartup-magazine',
    duration: '3 months',
    price: 'View Case Study'
  },
  {
    id: '3',
    title: 'HealthFirst Wellness',
    excerpt: 'HIPAA-compliant WordPress platform for healthcare providers with appointment booking and patient portal.',
    category: 'Healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    href: '/portfolio-single-healthfirst-wellness',
    page: 'portfolio-single-healthfirst-wellness',
    duration: '6 months',
    price: 'View Case Study'
  },
];

export function FrontPageTemplate() {
  const { navigateTo } = useNavigation();

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Pattern: Hero Home */}
        <HeroHome />

        {/* Features Section - Light/Dark mode compatible */}
        <Section sectionStyle="content-default">
          <Container>
            <div className="text-center mb-16">
              <h2>
                Why Choose LSX Design
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                We combine modern development practices with design system expertise to deliver exceptional WordPress solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: 'Modern Development',
                  description: 'Built with WordPress FSE, block themes, and cutting-edge development tools for maintainable, scalable code.'
                },
                {
                  icon: Palette,
                  title: 'Token-Driven Design',
                  description: 'Design systems that map perfectly to theme.json with consistent spacing, typography, and color scales.'
                },
                {
                  icon: ShoppingCart,
                  title: 'WooCommerce Experts',
                  description: 'Custom e-commerce solutions with optimized checkout flows, payment integrations, and store management.'
                },
                {
                  icon: Zap,
                  title: 'Performance First',
                  description: 'Core Web Vitals optimization, advanced caching, and speed improvements for lightning-fast websites.'
                },
                {
                  icon: Shield,
                  title: 'WCAG AA Compliant',
                  description: 'Every project meets accessibility standards with keyboard navigation, screen reader support, and proper semantics.'
                },
                {
                  icon: Users,
                  title: 'Client Partnership',
                  description: 'We work collaboratively as partners, not vendors, ensuring long-term success and ongoing support.'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '32px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <div 
                      className="mb-6"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-foreground)'
                      }}
                    >
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    
                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        marginBottom: '12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {feature.title}
                    </h3>
                    
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        margin: 0
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

        {/* Pattern: Services Grid */}
        <Section sectionStyle="content-feature" id="featured">
          <Container>
            <div className="text-center mb-16">
              <h2>
                Our Services
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                Comprehensive WordPress and WooCommerce solutions tailored to your business needs
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
              {featuredServices.map((item) => (
                <article 
                  key={item.id}
                  className="group"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)'
                  }}
                  onClick={() => navigateTo(item.page || 'services')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                >
                  <div 
                    className="relative overflow-hidden"
                    style={{ 
                      paddingTop: '60%',
                      backgroundColor: 'var(--muted)'
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    <span 
                      className="absolute top-4 left-4 px-4 py-2"
                      style={{
                        backgroundColor: 'var(--primary)',
                        backdropFilter: 'blur(10px)',
                        color: 'var(--primary-foreground)',
                        borderRadius: 'var(--radius-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        boxShadow: 'var(--shadow-hover)'
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h3)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--card-foreground)',
                        lineHeight: '1.3',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.7'
                      }}
                    >
                      {item.excerpt}
                    </p>

                    <div className="flex items-center gap-4 pt-3" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
                      <span 
                        className="flex items-center gap-2"
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {item.duration}
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--primary)',
                          marginLeft: 'auto'
                        }}
                      >
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => navigateTo(item.page || 'services')}
                      className="inline-flex items-center gap-2 mt-2 group/link"
                      aria-label={`View details about ${item.title}`}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'gap 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '12px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '8px';
                      }}
                    >
                      View Details
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="primary" 
                size="lg" 
                page="services"
                aria-label="View all services"
              >
                View All Services
              </Button>
            </div>
          </Container>
        </Section>

        {/* Portfolio Showcase Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Featured Projects
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                Real-world WordPress and WooCommerce solutions we've built for clients across industries
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
              {portfolioShowcase.map((item) => (
                <article 
                  key={item.id}
                  className="group"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)'
                  }}
                  onClick={() => navigateTo(item.page)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                >
                  <div 
                    className="relative overflow-hidden"
                    style={{ 
                      paddingTop: '60%',
                      backgroundColor: 'var(--muted)'
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    <span 
                      className="absolute top-4 left-4 px-4 py-2"
                      style={{
                        backgroundColor: 'var(--primary)',
                        backdropFilter: 'blur(10px)',
                        color: 'var(--primary-foreground)',
                        borderRadius: 'var(--radius-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        boxShadow: 'var(--shadow-hover)'
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h3)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--card-foreground)',
                        lineHeight: '1.3',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.7'
                      }}
                    >
                      {item.excerpt}
                    </p>

                    <button
                      onClick={() => navigateTo(item.page)}
                      className="inline-flex items-center gap-2 mt-2 group/link"
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'gap 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '12px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '8px';
                      }}
                    >
                      {item.price}
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="primary" 
                size="lg" 
                page="portfolio-archive"
                aria-label="View all portfolio projects"
              >
                View All Projects
              </Button>
            </div>
          </Container>
        </Section>

        {/* Stats Section - Gradient Background */}
        <Section 
          spacing="xl" 
          style={{
            backgroundColor: 'var(--card)',
            color: 'var(--card-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
              opacity: '0.05',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
          
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--accent)',
              opacity: '0.08',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
            aria-hidden="true"
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--card-foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Proven Track Record
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                Numbers that demonstrate our commitment to excellence and client success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Projects Delivered', description: 'WordPress sites built' },
                { number: '150+', label: 'Happy Clients', description: 'Across 30 countries' },
                { number: '10+', label: 'Years Experience', description: 'In WordPress development' },
                { number: '98%', label: 'Client Satisfaction', description: 'Average rating' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center"
                  style={{
                    backgroundColor: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '48px 32px'
                  }}
                >
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'clamp(40px, 6vw, 56px)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--primary)',
                      marginBottom: '12px',
                      lineHeight: '1'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--card-foreground)',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {stat.label}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      opacity: 0.85
                    }}
                  >
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FitText Impact Statement Section - WordPress 6.9+ Feature */}
        <Section 
          spacing="xl" 
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Container>
            <FitText 
              as="h2"
              containerSize={12}
              textAlign="center"
              style={{
                color: 'var(--primary-foreground)',
                marginBottom: '32px'
              }}
            >
              WORDPRESS EXPERTS YOU CAN TRUST
            </FitText>
            
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--primary-foreground)',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 48px',
                lineHeight: '1.7',
                opacity: 0.95
              }}
            >
              We don't just build websites. We create design systems, optimize performance, ensure accessibility, and deliver solutions that scale with your business.
            </p>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg" 
                page="about"
                aria-label="Meet our team"
              >
                Meet Our Team
              </Button>
            </div>
          </Container>
        </Section>

        {/* How We Work - Process Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-20">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                How We Work
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                Our proven process ensures your project stays on track, on budget, and exceeds expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  icon: Rocket,
                  title: 'Discovery',
                  description: 'We start by understanding your business goals, target audience, and technical requirements.'
                },
                {
                  step: '02',
                  icon: Layers,
                  title: 'Design System',
                  description: 'Create a token-based design system that maps perfectly to theme.json with reusable patterns.'
                },
                {
                  step: '03',
                  icon: Code,
                  title: 'Development',
                  description: 'Build with WordPress FSE, custom blocks, and modern development practices for scalability.'
                },
                {
                  step: '04',
                  icon: Rocket,
                  title: 'Launch & Support',
                  description: 'Deploy with confidence and receive ongoing support, maintenance, and optimization services.'
                }
              ].map((process, index) => {
                const Icon = process.icon;
                return (
                  <div
                    key={index}
                    style={{
                      position: 'relative',
                      padding: '32px 24px',
                      textAlign: 'center'
                    }}
                  >
                    {/* Step number background */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'clamp(100px, 15vw, 140px)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--muted)',
                        opacity: '0.15',
                        lineHeight: '1',
                        pointerEvents: 'none',
                        userSelect: 'none'
                      }}
                    >
                      {process.step}
                    </div>

                    <div 
                      className="mb-6"
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-xl)',
                        backgroundColor: 'var(--primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-foreground)',
                        marginBottom: '24px'
                      }}
                    >
                      <Icon size={32} strokeWidth={2} />
                    </div>

                    <h3 
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {process.title}
                    </h3>

                    <p 
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        margin: 0
                      }}
                    >
                      {process.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <Button 
                variant="outline" 
                size="md" 
                page="about-process"
                aria-label="Learn more about our process"
              >
                Learn More About Our Process
              </Button>
            </div>
          </Container>
        </Section>

        {/* Client Testimonials Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                What Our Clients Say
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                Real feedback from businesses we've helped transform with WordPress
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.slice(0, 3).map((testimonial, index) => (
                <article
                  key={index}
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="var(--primary)"
                        stroke="var(--primary)"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      lineHeight: '1.7',
                      marginBottom: '24px',
                      fontStyle: 'normal'
                    }}
                  >
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <footer className="flex items-center gap-3">
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        color: 'var(--primary-foreground)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-bold)'
                      }}
                    >
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '2px'
                        }}
                      >
                        {testimonial.author}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </footer>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="md" 
                page="about"
                aria-label="Read more client testimonials"
              >
                Read More Testimonials
              </Button>
            </div>
          </Container>
        </Section>

        {/* Latest Blog Posts Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Latest Insights
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                WordPress development tips, tutorials, and best practices from our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post, index) => (
                <article
                  key={index}
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigateTo('blog')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                >
                  <div
                    style={{
                      height: '200px',
                      backgroundColor: 'var(--muted)',
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      loading="lazy"
                    />
                  </div>

                  <div style={{ padding: '24px' }}>
                    {/* Category */}
                    <div
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: 'var(--primary)',
                        color: 'var(--primary-foreground)',
                        borderRadius: 'var(--radius)',
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '12px'
                      }}
                    >
                      {post.category}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--card-foreground)',
                        lineHeight: '1.3',
                        marginBottom: '12px'
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        marginBottom: '16px'
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 pt-3" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} style={{ color: 'var(--muted-foreground)' }} />
                        <span
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} style={{ color: 'var(--muted-foreground)' }} />
                        <span
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="primary" 
                size="lg" 
                page="blog"
                aria-label="View all blog articles"
              >
                View All Articles
              </Button>
            </div>
          </Container>
        </Section>

        {/* Pattern: Social Proof - NEW PATTERN COMPONENT */}
        <SocialProof 
          heading="Trusted By Leading Brands"
          logos={clientLogos}
          columns={6}
          variant="logos"
          caption="Join hundreds of businesses that trust our WordPress and WooCommerce services"
        />

        {/* Pattern: FAQ Section */}
        <FAQSection
          title="Common Questions"
          description="Quick answers to questions you may have about working with LSX Design"
          faqs={homepageFAQs}
          variant="default"
        />

        {/* Pattern: CTA Section */}
        <CTASection
          title="Ready to Build Better WordPress Sites?"
          description="Join hundreds of businesses using LSX Design to create accessible, scalable WordPress themes and WooCommerce solutions. Let's discuss your project today."
          primaryButtonText="Get Started"
          primaryButtonPage="contact"
          secondaryButtonText="View Our Work"
          secondaryButtonPage="portfolio-archive"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      <SiteFooter variant="newsletter" />
      <BackToTopButton />
      <StickyBookCallButton />
    </>
  );
}