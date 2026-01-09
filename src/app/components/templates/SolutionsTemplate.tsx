/**
 * Solutions Template
 * 
 * WordPress template: templates/page-solutions.html
 * 
 * Modern solutions showcase combining Lightspeed WP content structure
 * with LSX Design system tokens and patterns.
 * 
 * Pattern order:
 * Hero → Solutions Overview → Solution Cards → Why LightSpeed Section → Featured Project → CTA
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
import { solutions } from '../../data/solutions';
import { useState } from 'react';
import { 
  Code, 
  ShoppingCart, 
  Palette,
  Check,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Shield,
  Users,
  TrendingUp,
  ExternalLink,
  Clock,
  DollarSign,
  Package,
  ChevronRight
} from 'lucide-react';

// Additional solution details matching Lightspeed content
const solutionDetails = [
  {
    id: 'wordpress-websites',
    icon: Code,
    title: 'WordPress Business Websites',
    description: 'With over 15 years experience, our developers use the power of WordPress to help you and your business with whatever you need.',
    link: 'wordpress-solution',
    linkText: 'Read More →'
  },
  {
    id: 'woocommerce-stores',
    icon: ShoppingCart,
    title: 'WooCommerce Online Stores',
    description: 'We use WooCommerce functionality to provide seamless solutions that increase sales and keep your customers happy.',
    link: 'woocommerce-solution',
    linkText: 'Read More →'
  },
  {
    id: 'tourism-websites',
    icon: Target,
    title: 'Tourism Websites',
    description: 'With over 15 years experience, our developers use the power of WordPress to help you and your business with whatever you need.',
    link: 'tourism-websites',
    linkText: 'Read More →'
  },
  {
    id: 'media-industry',
    icon: Palette,
    title: 'Media Industry',
    description: 'Developed to handle media, stories and adverts for global brands, with support some of the biggest names in the industry.',
    link: 'media-industry',
    linkText: 'Read More →'
  },
  {
    id: 'elearning',
    icon: Users,
    title: 'eLearning & Education',
    description: 'Powering interactive learning, our eLearning solutions put the WP in courses & training programs to launch learners everywhere.',
    link: 'elearning',
    linkText: 'Read More →'
  },
  {
    id: 'lsx-design-system',
    icon: Sparkles,
    title: 'LSX Design System',
    description: 'Our new team members are scaling to designers of tomorrow, adapting to new and upcoming designs.',
    link: 'lsx-design',
    linkText: 'Read More →'
  }
];

export function SolutionsTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
            background: 'linear-gradient(135deg, #0e3278 0%, #1e40af 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '100px',
            paddingBottom: '100px'
          }}
        >
          {/* Gradient orbs */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(30, 106, 255, 0.3) 0%, transparent 70%)',
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
                    backgroundColor: 'rgba(123, 231, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(123, 231, 255, 0.3)',
                    fontSize: 'var(--text-small)',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 'var(--font-weight-semibold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#7be7ff'
                  }}
                >
                  SOLUTIONS
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
                  Designed For Success
                </h1>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-xl)',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '40px',
                    maxWidth: '600px'
                  }}
                >
                  Powered by expert WordPress design and development, our WordPress Solutions 
                  are the building blocks of success for your online business.
                </p>

                {/* CTA Buttons */}
                <Buttons orientation="horizontal">
                  <Button
                    variant="default"
                    size="lg"
                    page="contact"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.9)',
                      border: '1px solid rgba(9, 9, 9, 1)'
                    }}
                  >
                    <ArrowRight size={20} />
                    Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    page="portfolio"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      backgroundColor: 'transparent'
                    }}
                  >
                    View Our Work
                  </Button>
                </Buttons>
              </div>

              {/* Right: Decorative Illustration */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div
                  style={{
                    width: '300px',
                    height: '300px',
                    position: 'relative'
                  }}
                >
                  {/* Gear icon illustration - simplified */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle, rgba(123, 231, 255, 0.2) 0%, transparent 70%)',
                      borderRadius: '50%'
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      borderRadius: 'var(--radius-xl)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Sparkles size={80} style={{ color: '#7be7ff' }} />
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Client Logos Bar */}
          <div
            className="mt-16 relative z-10"
            style={{
              backgroundColor: 'rgba(20, 71, 170, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-xl)',
              padding: '32px 40px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Container>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'white',
                    minWidth: '280px'
                  }}
                >
                  A few of our happy clients:
                </p>

                <div className="flex flex-wrap items-center justify-center gap-12 opacity-80">
                  {['Joewes', 'Xneelo', 'SitesDigital', 'Media24'].map((client, index) => (
                    <div
                      key={index}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'white',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </Section>

        {/* Solutions Overview Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
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
                <Package size={14} />
                Our Solutions
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
                Expert WordPress Solutions
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
                Industry-leading, custom solutions applied to meet your unique needs 
                for your WordPress websites & WooCommerce shops.
              </p>
            </div>

            {/* Solution Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionDetails.map((solution) => {
                const Icon = solution.icon;
                const isHovered = hoveredCard === solution.id;

                return (
                  <a
                    key={solution.id}
                    href={`#${solution.link}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (solution.link) navigateTo(solution.link);
                    }}
                    style={{
                      textDecoration: 'none',
                      display: 'block',
                      cursor: solution.link ? 'pointer' : 'default',
                    }}
                    aria-label={`Learn more about ${solution.title}`}
                  >
                    <article
                      className="group cursor-pointer"
                      style={{
                        backgroundColor: 'var(--card)',
                        border: isHovered ? '1px solid var(--primary)' : '1px solid var(--border-soft)',
                        borderRadius: 'var(--radius-xl)',
                        padding: '32px',
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                        boxShadow: isHovered ? '0 20px 60px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.05)'
                      }}
                      onMouseEnter={() => setHoveredCard(solution.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '24px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Icon 
                          size={32} 
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
                        {solution.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.7',
                          color: 'var(--muted-foreground)',
                          marginBottom: '24px'
                        }}
                      >
                        {solution.description}
                      </p>

                      {/* Link */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: 'var(--primary)',
                          fontSize: 'var(--text-base)',
                          fontFamily: 'Lexend, sans-serif',
                          fontWeight: 'var(--font-weight-semibold)',
                          opacity: isHovered ? 1 : 0.8,
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {solution.linkText}
                      </div>
                    </article>
                  </a>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Why LightSpeed Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 106, 255, 0.05) 0%, rgba(123, 231, 255, 0.05) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative background */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />

          <Container>
            <div className="relative z-10">
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
                  Why LightSpeed?
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-xl)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)',
                    maxWidth: '700px',
                    margin: '0 auto'
                  }}
                >
                  Over 15 years in developing successful WordPress websites
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                {[
                  {
                    icon: Code,
                    title: 'Why WordPress?',
                    description: 'WordPress offers the most value for your hard-earned rand. Scalable, dependable, and here to stay.',
                    features: ['Scalable', 'Dependable', 'Future-proof']
                  },
                  {
                    icon: ShoppingCart,
                    title: 'Why WooCommerce?',
                    description: 'WooCommerce gives you all the tools to make e-commerce success a reality and we help you leverage it.',
                    features: ['Complete toolkit', 'Proven platform', 'Expert support']
                  },
                  {
                    icon: Users,
                    title: 'Why eLearning?',
                    description: 'Here we use WordPress power and eLearning, courses, and training programs to launch learners everywhere.',
                    features: ['Powerful LMS', 'Global reach', 'Scalable courses']
                  }
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="text-center"
                      style={{
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-xl)',
                        padding: '40px 32px',
                        border: '1px solid var(--border-soft)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: 'var(--radius-lg)',
                          background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 24px',
                          boxShadow: '0 10px 30px rgba(30, 106, 255, 0.3)'
                        }}
                      >
                        <Icon size={36} style={{ color: 'white' }} />
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h3)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '12px'
                        }}
                      >
                        {item.title}
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
                        {item.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-col gap-2">
                        {item.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2 justify-center">
                            <Check size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                            <span
                              style={{
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: 'var(--text-small)',
                                color: 'var(--muted-foreground)'
                              }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Featured Project Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
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
                  <Sparkles size={14} />
                  Featured Project
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
                  Our work speaks for itself
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
                  Our hosting is trusted by over 500 000 websites, How can we help 
                  your business today? See our recent case study and discover how we 
                  helped transform their online presence.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: '500K+', label: 'Websites Hosted' },
                    { value: '15+', label: 'Years Experience' },
                    { value: '99.9%', label: 'Uptime' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-3xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--primary)',
                          lineHeight: '1',
                          marginBottom: '8px'
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
                  ))}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  page="portfolio"
                >
                  View Full Project
                  <ExternalLink size={20} />
                </Button>
              </div>

              {/* Right: Project Image */}
              <div className="relative">
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.15)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Featured project mockup"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Testimonial Card */}
                <div
                  className="absolute -bottom-8 -left-8 p-6 max-w-md"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--primary)'
                        }}
                      >
                        JL
                      </span>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)'
                        }}
                      >
                        James Laughton
                      </div>
                      <div
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        Marketing Operations Specialist
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      lineHeight: '1.6',
                      color: 'var(--muted-foreground)',
                      fontStyle: 'italic'
                    }}
                  >
                    "I've worked closely with the LightspeedWP team for several years now, 
                    and they never disappoint. Professional, skilled and supportive support 
                    have all been invaluable!"
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)',
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
              backgroundSize: '40px 40px'
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
                Ready to get started?
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
                Book a free consultation with our WordPress experts and discover 
                the perfect solution for your business.
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
                <ArrowRight size={20} />
                Book Your Free Consultation
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