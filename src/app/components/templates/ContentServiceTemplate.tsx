/**
 * Content Service Template
 * 
 * WordPress template: templates/page-content-service.html
 * 
 * Content service page showcasing content strategy, audit, and creation services.
 * 
 * Pattern order:
 * Hero → Content Impact → Our Services → Dynamic Path → 
 * Reveal Potential → Content Importance → FAQs
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
  FileText,
  ArrowRight,
  CheckCircle,
  Search,
  TrendingUp,
  Edit,
  Upload,
  BarChart3,
  Calendar,
  Sparkles,
  RefreshCw,
  Target,
  Zap
} from 'lucide-react';

export function ContentServiceTemplate() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Client logos
  const clients = [
    { name: 'Starbuck' },
    { name: 'Zomato' },
    { name: 'CHANNEL News' },
    { name: 'AdSense' },
    { name: 'MEDSCAPE' },
    { name: 'Sony Pictures' }
  ];

  // Core services
  const coreServices = [
    {
      id: 'audit',
      icon: Search,
      title: 'Content Audit',
      description: 'Conduct a complete analysis of your existing content to uncover gaps and opportunities.',
      buttonText: 'Learn More',
      buttonPage: 'contact'
    },
    {
      id: 'strategy',
      icon: BarChart3,
      title: 'Content Strategy',
      description: 'Gain strategic insights on shaping your content for maximum impact and ROI.',
      buttonText: 'Learn More',
      buttonPage: 'contact'
    },
    {
      id: 'creation',
      icon: Edit,
      title: 'Content Creation',
      description: 'Manufacture your WooCommerce content strategy into high-performing content pieces on a recurring basis.',
      buttonText: 'Learn More',
      buttonPage: 'contact'
    }
  ];

  // Content generation steps
  const contentSteps = [
    {
      step: 1,
      title: 'Content Audit',
      icon: Search,
      description: 'Conduct a thorough assessment of your existing content to identify strengths, weaknesses, and opportunities for improvement.'
    },
    {
      step: 2,
      title: 'Identify Opportunities',
      icon: Target,
      description: 'Pinpoint content gaps in your current strategy. Uncover new topics, keywords, and formats that can help you reach and engage your target audience.'
    },
    {
      step: 3,
      title: 'Content Calendar',
      icon: Calendar,
      description: 'Develop a detailed content calendar to organize your content production schedule. Ensure consistent publishing and strategic timing for maximum impact.'
    },
    {
      step: 4,
      title: 'Content Creation',
      icon: Sparkles,
      description: 'Produce high-quality, engaging content tailored to your audience. From blog posts to videos, we create content that resonates and drives results.'
    },
    {
      step: 5,
      title: 'Document Workflow',
      icon: FileText,
      description: 'Establish a streamlined workflow for content creation, review, and approval. Ensure consistency, quality, and efficiency across all content initiatives.'
    },
    {
      step: 6,
      title: 'Implement Recycle System',
      icon: RefreshCw,
      description: 'Maximize content ROI by repurposing and updating existing content. Create a sustainable content ecosystem that continually adds value.'
    }
  ];

  // Benefits checklist
  const benefits = [
    'Content strategy inspection',
    'Content ideation assistance',
    'Content Creation',
    'Conversion Optimization',
    'A+ premium features'
  ];

  // FAQs
  const contentFAQs = [
    {
      question: 'Do I need to register on WordPress?',
      answer: 'Yes, you\'ll need a WordPress.com or self-hosted WordPress.org account to manage your content. We can help you set up either option based on your needs and guide you through the entire registration and configuration process.'
    },
    {
      question: 'Why aren\'t I getting to meet with your WordPress expert?',
      answer: 'Our WordPress experts work behind the scenes to ensure your content strategy is implemented correctly. You\'ll work directly with your dedicated content strategist who coordinates with our technical team to deliver results.'
    },
    {
      question: 'How long would it take to complete the registration?',
      answer: 'WordPress registration typically takes 5-10 minutes. However, full website setup including theme installation, plugin configuration, and initial content migration can take 1-2 weeks depending on your requirements.'
    },
    {
      question: 'Why aren\'t I eligible to request for free site?',
      answer: 'Free WordPress.com sites have limitations including ads, limited storage, and no custom domain. We recommend managed hosting plans that give you full control, better performance, and professional features for your business.'
    },
    {
      question: 'Why can\'t I navigate from free/basic to new/complex?',
      answer: 'Migration from WordPress.com free plans to self-hosted WordPress requires technical expertise to preserve content, maintain SEO rankings, and ensure zero downtime. Our team handles the complete migration process professionally.'
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
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
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
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
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
                  CONTENT
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
                  LightSpeed's content<br />services
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
                  We build carefully integrated programs for integrated content 
                  with ROI tracking
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
                    Free consultation
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
                    View our portfolio
                  </Button>
                </Buttons>
              </div>

              {/* Right: Document Illustration */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div
                  style={{
                    width: '280px',
                    height: '280px',
                    position: 'relative'
                  }}
                >
                  {/* Document with Upload Icon */}
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
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                      padding: '32px'
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <FileText size={64} style={{ color: 'white', marginBottom: '16px' }} />
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'rgba(59, 130, 246, 0.3)',
                          border: '2px solid rgba(255, 255, 255, 0.5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto'
                        }}
                      >
                        <Upload size={24} style={{ color: 'white' }} />
                      </div>
                    </div>
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
                      ROI Tracking
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

        {/* Content Impact Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Questions */}
              <div>
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '32px',
                    color: 'var(--foreground)'
                  }}
                >
                  Empower your content's<br />impact to bond with your<br />audience
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Zap,
                      title: 'Uncertain about your initial steps?',
                      description: 'We provide clear guidance and actionable strategies to kickstart your content journey with confidence.'
                    },
                    {
                      icon: TrendingUp,
                      title: 'In need of a website makeover?',
                      description: 'Transform your existing website with fresh, optimized content that engages visitors and drives conversions.'
                    },
                    {
                      icon: Target,
                      title: 'Challenged by content optimization?',
                      description: 'Our proven optimization techniques ensure your content ranks higher and resonates with your target audience.'
                    }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        style={{
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
                            backgroundColor: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Icon size={24} style={{ color: 'white' }} />
                        </div>
                        <div>
                          <h3
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-lg)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'var(--foreground)',
                              marginBottom: '8px'
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-base)',
                              lineHeight: '1.6',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Content and Image */}
              <div>
                <div
                  style={{
                    backgroundColor: 'var(--primary-soft)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px',
                    marginBottom: '24px'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      lineHeight: '1.8',
                      color: 'var(--foreground)'
                    }}
                  >
                    <strong style={{ fontWeight: 'var(--font-weight-bold)' }}>
                      At LightSpeed, we follow a three-tiered approach:
                    </strong>{' '}
                    Inspect your content to identify gaps, create a data-driven content 
                    strategy aligned with your vision, then execute at scale with SEO-optimized 
                    content. We'll deliver the content you need to engage prospects at the 
                    top and bottom of the funnel, while also converting and retaining 
                    existing clients with content designed for your current stage of growth.
                  </p>
                </div>

                {/* Image Placeholder */}
                <div
                  style={{
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--muted)',
                    aspectRatio: '16/9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <FileText size={64} style={{ color: 'var(--muted-foreground)', margin: '0 auto 16px' }} />
                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Content Strategy Workshop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Content Services Section */}
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
                Our Content Services
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
                Dive into our three core services and discover our first Content Design approach
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreServices.map((service) => {
                const Icon = service.icon;
                const isHovered = hoveredService === service.id;

                return (
                  <div
                    key={service.id}
                    className="cursor-pointer"
                    style={{
                      padding: '40px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-xl)',
                      border: isHovered ? '2px solid var(--primary)' : '1px solid var(--border-soft)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: 'var(--radius-xl)',
                        backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon 
                        size={40} 
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
                        marginBottom: '16px'
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.7',
                        color: 'var(--muted-foreground)',
                        marginBottom: '24px'
                      }}
                    >
                      {service.description}
                    </p>

                    <Button
                      variant="outline"
                      size="md"
                      page={service.buttonPage}
                      style={{
                        width: '100%'
                      }}
                    >
                      {service.buttonText}
                      <ArrowRight size={20} />
                    </Button>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Dynamic Path Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image Placeholder */}
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--muted)',
                  aspectRatio: '4/3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <Sparkles size={64} style={{ color: 'var(--muted-foreground)', margin: '0 auto 16px' }} />
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Content Creation Process
                  </p>
                </div>
              </div>

              {/* Right: Steps */}
              <div>
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
                  A dynamic path to content<br />generation
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)',
                    marginBottom: '32px'
                  }}
                >
                  Our repeated and proven process gets you measured results.
                </p>

                <div className="space-y-6">
                  {contentSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.step}
                        style={{
                          display: 'flex',
                          gap: '16px',
                          alignItems: 'flex-start',
                          padding: '20px',
                          backgroundColor: 'var(--card)',
                          borderRadius: 'var(--radius-lg)',
                          border: '1px solid var(--border-soft)'
                        }}
                      >
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Icon size={20} style={{ color: 'white' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-base)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'var(--foreground)',
                              marginBottom: '4px'
                            }}
                          >
                            Step {step.step}: {step.title}
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
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Reveal Potential Section */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left: Content */}
              <div>
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '24px'
                  }}
                >
                  Reveal your unique<br />business's potential
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.8',
                    marginBottom: '24px',
                    opacity: 0.95
                  }}
                >
                  Dive into groundwork with our Content Strategy services, and 
                  attain the benefits of our strategic mind. We create results-driven 
                  plans for your web content and written collateral that align with your 
                  business goals, so you get the exact traffic you need.
                </p>

                <ul className="space-y-3 mb-8" style={{ listStyle: 'none', padding: 0 }}>
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}
                    >
                      <CheckCircle size={20} style={{ color: '#10b981', flexShrink: 0 }} />
                      <span
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          color: 'white'
                        }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

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

              {/* Right: Graphic */}
              <div className="hidden lg:flex items-center justify-center">
                <div
                  style={{
                    width: '280px',
                    height: '280px',
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
                  <TrendingUp size={120} style={{ color: 'white', opacity: 0.9 }} />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Content Importance Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px'
                }}
              >
                Your content, our highest<br />importance
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.8',
                  marginBottom: '32px',
                  opacity: 0.95
                }}
              >
                What your brand can call success is certainly our business. 
                Recognizing that our clients are investing in our agency, we take 
                pride in advancing their sites. We do more than just take a box, and 
                our sole goal is to make it unique. That's why everyone at LightSpeed 
                works on the same goals that our customers have chosen.
              </p>

              <Button
                variant="default"
                size="lg"
                page="contact"
                icon={<ArrowRight size={20} />}
                style={{
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  boxShadow: '0 10px 40px rgba(124, 58, 237, 0.3)'
                }}
              >
                Start a Free WordPress Site!
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
              <FAQSection faqs={contentFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}