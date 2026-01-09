/**
 * Tour Operator Solutions Template
 * 
 * WordPress template: templates/page-tour-operator.html
 * 
 * Tour operator solutions page for travel and tourism industry.
 * 
 * Pattern order:
 * Hero → Tour Industry Challenges → Solutions → Features → Integrations → CTA → FAQs
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
import { useNavigation } from '../../contexts/NavigationContext';
import { useState } from 'react';
import { 
  Plane,
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar,
  CreditCard,
  Users,
  Globe,
  Image,
  Star,
  Search,
  TrendingUp,
  Smartphone,
  Shield,
  Zap,
  MessageSquare
} from 'lucide-react';

export function TourOperatorTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  // Tour industry challenges
  const challenges = [
    {
      icon: Calendar,
      title: 'Complex Booking Management',
      description: 'Managing availability, pricing, and reservations across multiple tours and dates'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment handling with multiple currencies and payment methods'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Tracking customer preferences, bookings, and communication history'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Reaching global audiences with content in multiple languages'
    }
  ];

  // Tour operator solutions
  const solutions = [
    {
      id: 'booking-system',
      icon: Calendar,
      title: 'Advanced Booking System',
      description: 'Complete booking management with real-time availability, pricing rules, and automated confirmations.',
      features: [
        'Real-time availability calendar',
        'Dynamic pricing & seasonal rates',
        'Group booking management',
        'Automated confirmation emails',
        'Booking modifications & cancellations',
        'Waitlist management'
      ]
    },
    {
      id: 'tour-management',
      icon: MapPin,
      title: 'Tour & Itinerary Management',
      description: 'Create and manage detailed tour itineraries with multimedia content and interactive maps.',
      features: [
        'Detailed itinerary builder',
        'Interactive route maps',
        'Photo galleries & videos',
        'Inclusions & exclusions',
        'Difficulty levels & requirements',
        'PDF itinerary generation'
      ]
    },
    {
      id: 'payment-gateway',
      icon: CreditCard,
      title: 'Payment & Financial Management',
      description: 'Secure payment processing with multiple currencies, deposit options, and financial reporting.',
      features: [
        'Multiple payment gateways',
        'Multi-currency support',
        'Deposit & installment options',
        'Automated invoicing',
        'Financial reporting',
        'Tax calculation'
      ]
    },
    {
      id: 'crm',
      icon: Users,
      title: 'Customer Relationship Management',
      description: 'Build lasting relationships with comprehensive customer data and communication tools.',
      features: [
        'Customer profiles & history',
        'Email marketing integration',
        'Review & testimonial management',
        'Loyalty programs',
        'Automated follow-ups',
        'Newsletter subscriptions'
      ]
    },
    {
      id: 'seo-marketing',
      icon: Search,
      title: 'SEO & Marketing Tools',
      description: 'Attract more travelers with SEO optimization, social media integration, and analytics.',
      features: [
        'SEO-optimized tour pages',
        'Social media sharing',
        'Google Analytics integration',
        'Conversion tracking',
        'Blog & content marketing',
        'Email campaigns'
      ]
    },
    {
      id: 'mobile-responsive',
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Fully responsive design ensures perfect experience on all devices from phones to desktops.',
      features: [
        'Mobile-optimized booking',
        'Touch-friendly navigation',
        'Fast loading times',
        'Progressive Web App (PWA)',
        'Offline capabilities',
        'App-like experience'
      ]
    }
  ];

  // Key integrations
  const integrations = [
    {
      name: 'Wetu',
      description: 'Tour operator content management and distribution platform',
      icon: Globe
    },
    {
      name: 'TourCMS',
      description: 'Online booking and reservation system for tour operators',
      icon: Calendar
    },
    {
      name: 'Stripe & PayPal',
      description: 'Secure payment processing with global coverage',
      icon: CreditCard
    },
    {
      name: 'Google Maps',
      description: 'Interactive maps and location services',
      icon: MapPin
    },
    {
      name: 'Mailchimp',
      description: 'Email marketing and automation platform',
      icon: MessageSquare
    },
    {
      name: 'TripAdvisor',
      description: 'Review integration and reputation management',
      icon: Star
    }
  ];

  // Benefits
  const benefits = [
    { icon: TrendingUp, title: 'Increase Bookings', description: 'Streamlined booking process increases conversion rates' },
    { icon: Zap, title: 'Save Time', description: 'Automated processes reduce admin workload by 70%' },
    { icon: Users, title: 'Better Experience', description: 'Superior customer experience drives repeat bookings' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security for customer data & payments' }
  ];

  // FAQs
  const tourFAQs = [
    {
      question: 'Do you specialize in tour operator websites?',
      answer: 'Yes! We have extensive experience building websites for tour operators, safari companies, adventure travel providers, and destination management companies. We understand the unique requirements of the travel industry including booking systems, itinerary management, and travel-specific integrations.'
    },
    {
      question: 'Can you integrate with Wetu or other tour operator platforms?',
      answer: 'Absolutely! We specialize in Wetu integrations and can connect your WordPress site with TourCMS, Rezdy, FareHarbor, and other tour operator platforms. We handle all API integrations, data synchronization, and ensure seamless booking experiences.'
    },
    {
      question: 'How do you handle booking and payment processing?',
      answer: 'We implement secure booking systems with real-time availability, dynamic pricing, and deposit options. Payment processing uses PCI-compliant gateways like Stripe, PayPal, and regional processors. We support multiple currencies, automated invoicing, and secure customer data handling.'
    },
    {
      question: 'Can the website support multiple languages and currencies?',
      answer: 'Yes! We build multilingual websites using WPML or Polylang, allowing you to manage content in multiple languages. Currency conversion is handled automatically, and you can set region-specific pricing. This is essential for reaching international travelers.'
    },
    {
      question: 'How do you optimize tour pages for search engines?',
      answer: 'We implement travel-specific SEO best practices including schema markup for tours/activities, optimized imagery, fast loading times, and structured content. We also integrate with Google Maps, TripAdvisor, and social media to maximize your online visibility and bookings.'
    },
    {
      question: 'What happens if we need to migrate from our current platform?',
      answer: 'We handle complete migrations from legacy systems, custom platforms, or competitors. We migrate all tour data, itineraries, bookings, customer information, and media assets while preserving SEO rankings. We ensure zero downtime and provide training on the new system.'
    }
  ];

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
            background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
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
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)',
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
                  TOUR OPERATOR SOLUTIONS
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
                  WordPress Websites for<br />Tour Operators
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
                  Specialized websites for safari operators, adventure travel companies, 
                  and destination management companies. Complete booking systems, 
                  itinerary management, and travel industry integrations.
                </p>

                <Buttons orientation="horizontal">
                  <Button
                    variant="default"
                    size="lg"
                    page="contact"
                    style={{
                      backgroundColor: 'white',
                      color: '#06b6d4',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    Book Your Free Consultation
                    <ArrowRight size={20} />
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

              {/* Right: Plane Icon Illustration */}
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
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <Plane size={100} style={{ color: 'white' }} />
                  </div>

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
                    <Calendar size={20} style={{ color: '#10b981' }} />
                    <span
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'white'
                      }}
                    >
                      Bookings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Tour Industry Challenges */}
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
                Tour Industry Challenges We Solve
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
                Common challenges faced by tour operators and how we address them
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon;
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
                      {challenge.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {challenge.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Tour Operator Solutions Grid */}
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
                Complete Tour Operator Solutions
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
                Everything you need to run a successful tour operation online
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                const isHovered = hoveredFeature === solution.id;

                return (
                  <div
                    key={solution.id}
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
                    onMouseEnter={() => setHoveredFeature(solution.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
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
                      {solution.title}
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
                      {solution.description}
                    </p>

                    <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
                      {solution.features.map((feature, idx) => (
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

        {/* Integrations Section */}
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
                Key Integrations
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
                Connect with the tools and platforms you already use
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <div
                    key={index}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start'
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
                        flexShrink: 0
                      }}
                    >
                      <Icon size={24} style={{ color: 'var(--primary)' }} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '4px'
                        }}
                      >
                        {integration.name}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {integration.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                      }}
                    >
                      <Icon size={32} style={{ color: 'white' }} />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'white',
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
                        color: 'rgba(255, 255, 255, 0.9)'
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

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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
                Ready to Transform Your Tour Business?
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
                Let's discuss your tour operator needs and create a website that 
                drives bookings and grows your business. Schedule a free demo today.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: '#06b6d4',
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(6, 182, 212, 0.3)'
                  }}
                >
                  Schedule a Demo
                  <ArrowRight size={20} />
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
                  View Examples
                </Button>
              </Buttons>
            </div>
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
                  Tour Operator FAQs
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Common questions about tour operator websites
                </p>
              </div>

              <FAQSection faqs={tourFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}