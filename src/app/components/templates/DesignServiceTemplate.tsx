/**
 * Design Service Template
 * 
 * WordPress template: templates/page-design-service.html
 * 
 * Design service page showcasing UI/UX and branding services.
 * 
 * Pattern order:
 * Hero → Design Process → Services → Portfolio → Tools → CTA → FAQs
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
import { TestimonialInline } from '../patterns/TestimonialInline';
import { useNavigation } from '../../contexts/NavigationContext';
import { useState } from 'react';
import { getTestimonialsByServiceType } from '../../data/testimonials';
import { 
  Palette,
  ArrowRight,
  CheckCircle,
  Layers,
  Smartphone,
  Eye,
  Users,
  Target,
  Zap,
  Code,
  TrendingUp
} from 'lucide-react';

export function DesignServiceTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const designServices = [
    {
      id: 'ui-ux',
      icon: Eye,
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful interfaces with intuitive user experiences.',
      features: ['User research', 'Wireframing', 'Interactive prototypes', 'Usability testing']
    },
    {
      id: 'branding',
      icon: Palette,
      title: 'Brand Identity',
      description: 'Comprehensive brand design including logos, color palettes, and visual guidelines.',
      features: ['Logo design', 'Brand guidelines', 'Color systems', 'Typography selection']
    },
    {
      id: 'design-systems',
      icon: Layers,
      title: 'Design Systems',
      description: 'Scalable design systems with reusable components and consistent patterns.',
      features: ['Component libraries', 'Design tokens', 'Pattern documentation', 'Style guides']
    },
    {
      id: 'responsive',
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that work perfectly across all devices and screen sizes.',
      features: ['Mobile optimization', 'Tablet layouts', 'Desktop experiences', 'Touch interactions']
    },
    {
      id: 'conversion',
      icon: Target,
      title: 'Conversion Optimization',
      description: 'Data-driven design focused on improving user engagement and conversion rates.',
      features: ['A/B testing', 'Heat mapping', 'User analytics', 'CRO strategies']
    },
    {
      id: 'prototyping',
      icon: Code,
      title: 'Interactive Prototyping',
      description: 'High-fidelity prototypes that demonstrate functionality before development.',
      features: ['Clickable prototypes', 'User flows', 'Micro-interactions', 'Animation specs']
    }
  ];

  const designProcess = [
    {
      step: 1,
      title: 'Discovery & Research',
      description: 'Understanding your brand, audience, and business goals through research and analysis.',
      icon: Users
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Creating design strategy, user personas, and information architecture.',
      icon: Target
    },
    {
      step: 3,
      title: 'Wireframing & Concepts',
      description: 'Low-fidelity wireframes to explore layouts and user flows.',
      icon: Layers
    },
    {
      step: 4,
      title: 'Visual Design',
      description: 'High-fidelity designs with colors, typography, and branded elements.',
      icon: Palette
    },
    {
      step: 5,
      title: 'Prototype & Test',
      description: 'Interactive prototypes tested with real users for validation.',
      icon: Eye
    },
    {
      step: 6,
      title: 'Handoff & Support',
      description: 'Design specifications and assets for seamless development.',
      icon: Zap
    }
  ];

  const designTools = [
    'Figma',
    'Adobe XD',
    'Sketch',
    'InVision',
    'Adobe Illustrator',
    'Adobe Photoshop'
  ];

  const benefits = [
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Every design decision based on user research and testing'
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Focused',
      description: 'Designs optimized for engagement and business goals'
    },
    {
      icon: Layers,
      title: 'Scalable Systems',
      description: 'Design systems that grow with your business'
    },
    {
      icon: Zap,
      title: 'Fast Iteration',
      description: 'Quick design cycles with regular feedback and refinement'
    }
  ];

  const designFAQs = [
    {
      question: 'What is the difference between UI and UX design?',
      answer: 'UI (User Interface) design focuses on the visual elements - colors, typography, buttons, and layouts. UX (User Experience) design focuses on how users interact with and experience your website - navigation, user flows, and overall usability. Both are essential for creating effective websites, and we integrate both in our design process.'
    },
    {
      question: 'Do you create custom designs or use templates?',
      answer: 'We create 100% custom designs tailored to your brand, audience, and business goals. While we may reference design patterns and best practices, every design is unique and built specifically for your needs. We never use pre-made templates or copy competitor designs.'
    },
    {
      question: 'How long does the design process take?',
      answer: 'A typical website design project takes 3-6 weeks depending on complexity. This includes research (1 week), wireframing (1 week), visual design (2-3 weeks), and revisions. Larger projects like design systems or rebranding may take 8-12 weeks. We provide detailed timelines during the proposal stage.'
    },
    {
      question: 'How many revision rounds are included?',
      answer: 'Our standard design packages include 2-3 rounds of revisions at each stage (wireframes, visual design, and prototypes). This allows for feedback and refinement while keeping the project on schedule. Additional revisions can be added if needed. We encourage feedback throughout the process to minimize major changes.'
    },
    {
      question: 'Can you design for mobile apps as well as websites?',
      answer: 'Yes! We design for all digital platforms including responsive websites, progressive web apps (PWAs), native mobile apps (iOS and Android), and web applications. Our design process adapts to each platform\'s unique requirements and design guidelines while maintaining brand consistency.'
    },
    {
      question: 'Do you provide design files and assets after completion?',
      answer: 'Absolutely! You receive all final design files in formats suitable for development (Figma, Sketch, Adobe XD), exported assets (images, icons, logos), style guides, and design specifications. You own all the design work we create for you, and we provide everything needed for implementation and future updates.'
    }
  ];

  const testimonials = getTestimonialsByServiceType('design');

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
            background: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  DESIGN SERVICES
                </div>

                <h1
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    marginBottom: '20px',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  Beautiful Design That<br />Drives Results
                </h1>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.95)',
                    marginBottom: '32px',
                    maxWidth: '600px'
                  }}
                >
                  User-centered design that combines aesthetics with functionality. 
                  We create engaging experiences that convert visitors into customers.
                </p>

                <Buttons orientation="horizontal">
                  <Button
                    variant="default"
                    size="lg"
                    page="contact"
                    icon={<ArrowRight size={20} />}
                    style={{
                      backgroundColor: 'white',
                      color: '#ec4899',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    Start Your Project
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
                    View Portfolio
                  </Button>
                </Buttons>
              </div>

              <div className="relative hidden lg:flex items-center justify-center">
                <div
                  style={{
                    width: '280px',
                    height: '280px',
                    position: 'relative'
                  }}
                >
                  <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      borderRadius: 'var(--radius-xl)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <Palette size={100} style={{ color: 'white' }} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Design Process Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
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
                Our Design Process
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
                A structured approach to creating exceptional designs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProcess.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)'
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
                        marginBottom: '20px',
                        position: 'relative'
                      }}
                    >
                      <Icon size={32} style={{ color: 'var(--primary)' }} />
                      <div
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          width: '32px',
                          height: '32px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'white'
                        }}
                      >
                        {step.step}
                      </div>
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
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Design Services Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
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
                Our Design Services
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
                Comprehensive design solutions for digital products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designServices.map((service) => {
                const Icon = service.icon;
                const isHovered = hoveredService === service.id;

                return (
                  <div
                    key={service.id}
                    className="cursor-pointer"
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-xl)',
                      border: isHovered ? '2px solid var(--primary)' : '1px solid var(--border-soft)',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
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
                        size={32} 
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

                    <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <CheckCircle size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                          <span
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Tools Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
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
                Design Tools We Use
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
                Industry-standard tools for professional results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {designTools.map((tool, index) => (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
            color: 'var(--primary-foreground)',
            textAlign: 'center'
          }}
        >
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px'
                }}
              >
                Ready to Create Something Amazing?
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                  opacity: 0.95
                }}
              >
                Let's discuss your design needs and create a solution that exceeds 
                your expectations. Get a free consultation today.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  icon={<ArrowRight size={20} />}
                  style={{
                    backgroundColor: 'white',
                    color: '#ec4899',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Get Started
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
                  View Work
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

        {/* Testimonials Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <TestimonialInline
              heading="What Our Design Clients Say"
              testimonials={testimonials.slice(0, 3).map(t => ({
                quote: t.quote,
                author: t.author,
                role: t.role,
                company: t.company,
                rating: t.rating,
                image: t.avatar
              }))}
            />
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
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
                  Design FAQs
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Common questions about our design services
                </p>
              </div>

              <FAQSection faqs={designFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}