/**
 * LSX Design Solutions Template
 * 
 * WordPress template: templates/page-lsx-design.html
 * 
 * LSX Design solutions page showcasing block themes and design systems.
 * 
 * Pattern order:
 * Hero → What is LSX → Features → Themes → Benefits → Process → CTA → FAQs
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
  Layers,
  ArrowRight,
  CheckCircle,
  Palette,
  Code,
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Layout,
  Settings,
  FileText,
  Globe,
  Search
} from 'lucide-react';

export function LSXDesignTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null);

  // LSX Design features
  const lsxFeatures = [
    {
      id: 'block-themes',
      icon: Layers,
      title: 'Modern Block Themes',
      description: 'Built entirely with WordPress blocks and Full Site Editing (FSE) for maximum flexibility and user control.'
    },
    {
      id: 'design-system',
      icon: Palette,
      title: 'Comprehensive Design System',
      description: 'Consistent design tokens, patterns, and components ensure brand consistency across all pages.'
    },
    {
      id: 'performance',
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Lightning-fast load times with optimized code, minimal dependencies, and efficient asset loading.'
    },
    {
      id: 'accessibility',
      icon: Shield,
      title: 'WCAG 2.1 AA Compliant',
      description: 'Built with accessibility in mind, ensuring your site is usable by everyone, everywhere.'
    },
    {
      id: 'responsive',
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Fully responsive layouts that look perfect on all devices from phones to large desktop screens.'
    },
    {
      id: 'seo',
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices, schema markup, and semantic HTML for better search rankings.'
    }
  ];

  // LSX Themes
  const lsxThemes = [
    {
      id: 'lsx-business',
      name: 'LSX Business',
      description: 'Professional business theme with service pages, team sections, and case studies.',
      features: ['Service templates', 'Team member profiles', 'Case study layouts', 'Contact forms'],
      category: 'Business'
    },
    {
      id: 'lsx-tour',
      name: 'LSX Tour Operator',
      description: 'Specialized theme for tour operators with booking systems and itinerary management.',
      features: ['Tour listings', 'Booking integration', 'Destination pages', 'Gallery layouts'],
      category: 'Travel'
    },
    {
      id: 'lsx-shop',
      name: 'LSX Shop',
      description: 'WooCommerce-ready theme optimized for online stores and ecommerce.',
      features: ['Product layouts', 'Cart optimization', 'Checkout pages', 'Shop templates'],
      category: 'Ecommerce'
    },
    {
      id: 'lsx-blog',
      name: 'LSX Blog',
      description: 'Content-focused theme perfect for bloggers, publishers, and content creators.',
      features: ['Article layouts', 'Author profiles', 'Newsletter signup', 'Reading progress'],
      category: 'Publishing'
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: Code,
      title: 'No Code Required',
      description: 'Edit everything visually through the WordPress block editor - no coding knowledge needed.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise without performance loss.'
    },
    {
      icon: Settings,
      title: 'Easy Customization',
      description: 'Global styles, theme.json configuration, and pattern library for quick customization.'
    },
    {
      icon: Globe,
      title: 'Multi-language Ready',
      description: 'Translation-ready with support for WPML, Polylang, and WordPress multilingual features.'
    }
  ];

  // Development process
  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Strategy',
      description: 'We analyze your brand, audience, and goals to create a strategic design system.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Design System',
      description: 'Create design tokens, color palettes, typography scales, and component library.',
      icon: Palette
    },
    {
      step: 3,
      title: 'Theme Development',
      description: 'Build custom block themes with FSE, theme.json, and block patterns.',
      icon: Code
    },
    {
      step: 4,
      title: 'Testing & Refinement',
      description: 'Comprehensive testing across devices, browsers, and accessibility standards.',
      icon: CheckCircle
    },
    {
      step: 5,
      title: 'Training & Support',
      description: 'User training, documentation, and ongoing support for your team.',
      icon: Settings
    }
  ];

  // FAQs
  const lsxFAQs = [
    {
      question: 'What is LSX Design and how is it different?',
      answer: 'LSX Design is our proprietary design system built specifically for WordPress block themes. Unlike traditional WordPress themes, LSX themes are built entirely with blocks and Full Site Editing (FSE), giving you complete control over every aspect of your site without touching code. Our design system ensures consistency, accessibility, and performance across all pages.'
    },
    {
      question: 'Do I need coding knowledge to use LSX themes?',
      answer: 'No! LSX themes are built with the WordPress block editor (Gutenberg) and Full Site Editing. Everything is visual and drag-and-drop. You can customize colors, fonts, layouts, and content through the WordPress interface without writing any code. We also provide comprehensive documentation and training.'
    },
    {
      question: 'Are LSX themes compatible with popular plugins?',
      answer: 'Yes! LSX themes are built following WordPress coding standards and are compatible with popular plugins including WooCommerce, Yoast SEO, Contact Form 7, Advanced Custom Fields, WPML, and more. We test compatibility with the most popular plugins and provide integration guides.'
    },
    {
      question: 'Can LSX themes be customized to match my brand?',
      answer: 'Absolutely! LSX themes are highly customizable through theme.json global styles. You can easily change colors, fonts, spacing, and layouts to match your brand identity. For more advanced customization, we offer custom development services to extend the theme to your exact specifications.'
    },
    {
      question: 'How do LSX themes perform compared to page builders?',
      answer: 'LSX themes significantly outperform page builders in speed and performance. Because they use native WordPress blocks instead of heavy page builder plugins, pages load 3-5x faster. This improves user experience, SEO rankings, and conversion rates. Plus, you\'re not locked into a specific page builder ecosystem.'
    },
    {
      question: 'Do you provide support and updates for LSX themes?',
      answer: 'Yes! All LSX themes include 6 months of support and lifetime updates. We ensure compatibility with new WordPress versions, provide security patches, and add new features based on user feedback. Extended support and custom development packages are also available.'
    }
  ];

  // Stats
  const stats = [
    { number: '3x', label: 'Faster than page builders' },
    { number: '100%', label: 'WCAG 2.1 AA compliant' },
    { number: '50+', label: 'Block patterns included' },
    { number: '24/7', label: 'Priority support' }
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
            background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
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
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
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
                  LSX DESIGN SYSTEM
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
                  WordPress Block Themes<br />Built the Right Way
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
                  Modern WordPress themes built with Full Site Editing, comprehensive 
                  design systems, and performance-first architecture. No page builders, 
                  no bloat, just fast and flexible WordPress.
                </p>

                <Buttons orientation="horizontal">
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
                    Get Started
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
                    View Projects
                  </Button>
                </Buttons>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-6 mt-12">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h2)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'white',
                          marginBottom: '4px'
                        }}
                      >
                        {stat.number}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
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
                    <Layers size={100} style={{ color: 'white' }} />
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
                    <Zap size={20} style={{ color: '#10b981' }} />
                    <span
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'white'
                      }}
                    >
                      Fast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Features Section */}
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
                Why Choose LSX Design?
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
                Built on WordPress best practices with modern development standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lsxFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
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
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px'
                      }}
                    >
                      <Icon size={32} style={{ color: 'var(--primary)' }} />
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
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
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

        {/* LSX Themes Grid */}
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
                LSX Theme Collection
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
                Professional WordPress themes for every industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lsxThemes.map((theme) => {
                const isHovered = hoveredTheme === theme.id;

                return (
                  <div
                    key={theme.id}
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
                    onMouseEnter={() => setHoveredTheme(theme.id)}
                    onMouseLeave={() => setHoveredTheme(null)}
                  >
                    <div
                      style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--primary-soft)',
                        fontSize: 'var(--text-small)',
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--primary)',
                        marginBottom: '16px'
                      }}
                    >
                      {theme.category}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h3)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '12px'
                      }}
                    >
                      {theme.name}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)',
                        marginBottom: '20px'
                      }}
                    >
                      {theme.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {theme.features.map((feature, idx) => (
                        <div
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
                        </div>
                      ))}
                    </div>
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

        {/* Process Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
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
                  color: 'var(--primary-foreground)'
                }}
              >
                Our Theme Development Process
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                From concept to launch in a structured, collaborative process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    style={{
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(124, 58, 237, 0.2)',
                        border: '2px solid rgba(124, 58, 237, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        position: 'relative'
                      }}
                    >
                      <Icon size={32} style={{ color: '#a855f7' }} />
                      <div
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          width: '32px',
                          height: '32px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: '#7c3aed',
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
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'white',
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
                        color: 'rgba(255, 255, 255, 0.8)'
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

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
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
                Ready for a Better WordPress Theme?
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
                Experience the difference of professionally crafted block themes. 
                Get started with LSX Design today.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
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
                  Get Started
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
                  View Demos
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
                  LSX Design FAQs
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Common questions about LSX Design themes
                </p>
              </div>

              <FAQSection faqs={lsxFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}