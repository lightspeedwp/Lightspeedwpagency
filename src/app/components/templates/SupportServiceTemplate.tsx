/**
 * Support Service Template
 * 
 * WordPress template: templates/page-support.html
 * 
 * Support service page showcasing WordPress & WooCommerce support services.
 * \n * Pattern order:
 * Hero → Client Logos → Support Services Grid → Featured Project → 
 * Why LightSpeed → FAQs
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
  Wrench,
  Code,
  Shield,
  Search,
  Image as ImageIcon,
  Smartphone,
  Tag,
  Zap,
  Globe,
  PenTool,
  RefreshCw,
  Bug,
  FileText,
  Settings,
  Layers,
  Monitor,
  Chrome,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export function SupportServiceTemplate() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Client logos
  const clients = [
    { name: 'Zerista' },
    { name: 'NodeSix' },
    { name: 'Medscape' },
    { name: 'Accuranker' },
    { name: 'eHi' }
  ];

  // Support services
  const supportServices = [
    {
      id: 'design-dev',
      icon: PenTool,
      title: 'Design & Development',
      description: 'Our team can help design and develop your next project. From custom WordPress themes to WooCommerce stores, we create solutions tailored to your business needs.'
    },
    {
      id: 'migrations',
      icon: RefreshCw,
      title: 'Migrations',
      description: 'Need to migrate from another platform to WordPress or move to a new host? We handle the entire migration process with zero downtime and complete data integrity.'
    },
    {
      id: 'hosting',
      icon: Globe,
      title: 'Hosting',
      description: 'Our managed WordPress hosting provides enterprise-grade infrastructure with automatic backups, SSL certificates, and 24/7 monitoring for optimal performance.'
    },
    {
      id: 'bugs',
      icon: Bug,
      title: 'Bugs',
      description: 'Encountering bugs on your WordPress site? Our expert developers quickly identify and fix issues, from plugin conflicts to theme errors and database problems.'
    },
    {
      id: 'website-bug-fixes',
      icon: Wrench,
      title: 'Website bug fixes',
      description: 'We provide rapid bug fixes for all WordPress and WooCommerce issues. Our team diagnoses problems quickly and implements permanent solutions.'
    },
    {
      id: 'advice',
      icon: FileText,
      title: 'Advice',
      description: 'Get expert WordPress and WooCommerce consultation. We help you make informed decisions about architecture, performance, security, and scalability.'
    },
    {
      id: 'page-content',
      icon: FileText,
      title: 'Page content updates',
      description: 'Need content updates but don\'t have time? We handle all your content changes, from text updates to new page creation, maintaining brand consistency.'
    },
    {
      id: 'error-messages',
      icon: Shield,
      title: 'Removing error messages',
      description: 'Website errors frustrating your visitors? We eliminate PHP errors, JavaScript issues, and server errors to ensure smooth user experiences.'
    },
    {
      id: 'mobile-bugs',
      icon: Smartphone,
      title: 'Mobile bug fixes',
      description: 'Fix responsive design issues and mobile-specific bugs. We ensure your WordPress site works flawlessly across all devices and screen sizes.'
    },
    {
      id: 'image-optimization',
      icon: ImageIcon,
      title: 'Image Optimization',
      description: 'Optimize images for faster loading without quality loss. We implement lazy loading, compression, and WebP conversion for better performance.'
    },
    {
      id: 'clean-code',
      icon: Code,
      title: 'Clean-Code, Tags',
      description: 'Code refactoring and optimization services. We clean up messy code, implement best practices, and add proper documentation and meta tags.'
    },
    {
      id: 'broken-design',
      icon: Layers,
      title: 'Broken Design',
      description: 'Fix broken layouts, CSS issues, and design inconsistencies. We restore your site\'s visual integrity across all pages and templates.'
    },
    {
      id: 'integrate-plugins',
      icon: Settings,
      title: 'Integrate Plugins',
      description: 'Expert plugin integration and configuration. We set up, customize, and optimize WordPress plugins to extend your site\'s functionality.'
    },
    {
      id: 'seo-speed',
      icon: TrendingUp,
      title: 'SEO Speed',
      description: 'Improve SEO rankings through performance optimization. We implement Core Web Vitals improvements, schema markup, and technical SEO best practices.'
    },
    {
      id: 'sub-speed',
      icon: Zap,
      title: 'Sub Speed',
      description: 'Accelerate page load times with advanced caching, CDN integration, database optimization, and code minification techniques.'
    },
    {
      id: 'browser-compatibility',
      icon: Chrome,
      title: 'Browser compatibility',
      description: 'Ensure consistent functionality across all major browsers. We test and fix cross-browser compatibility issues for IE, Chrome, Firefox, Safari, and Edge.'
    }
  ];

  // FAQs
  const supportFAQs = [
    {
      question: 'Can I get a refund on my website hosting purchase?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all hosting plans. If you\'re not satisfied within the first 30 days, we\'ll provide a full refund, no questions asked.'
    },
    {
      question: 'What support is provided with LightSpeed hosting?',
      answer: 'All hosting plans include 24/7/365 expert support via email, phone, and live chat. Our WordPress specialists are available to help with any hosting-related questions or technical issues.'
    },
    {
      question: 'What about domain transfer/migration?',
      answer: 'We offer free professional website migration for all new hosting customers. Our team will handle the complete migration process, ensuring zero downtime and no data loss.'
    },
    {
      question: 'Why aren\'t managed hosting prices on this page?',
      answer: 'Managed hosting pricing varies based on your specific requirements including traffic volume, storage needs, and custom features. Contact us for a personalized quote tailored to your website\'s needs.'
    },
    {
      question: 'Why should I migrate to WordPress?',
      answer: 'WordPress powers 43% of all websites globally due to its flexibility, SEO capabilities, extensive plugin ecosystem, and ease of use. It\'s the most popular CMS for businesses of all sizes, offering unmatched scalability and customization options.'
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
                  SUPPORT
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
                  WordPress & WooCommerce<br />support
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
                  With our WordPress & WooCommerce support & maintenance of your 
                  websites and things. You're able to focus on your business 
                  knowing your WordPress website is being handled.
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

              {/* Right: Tools Illustration */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div
                  style={{
                    width: '280px',
                    height: '280px',
                    position: 'relative'
                  }}
                >
                  {/* Wrench & Screwdriver illustration */}
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
                    <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                      <Wrench 
                        size={80} 
                        style={{ 
                          color: '#60a5fa',
                          position: 'absolute',
                          top: '20px',
                          left: '0',
                          transform: 'rotate(-45deg)'
                        }} 
                      />
                      <Settings 
                        size={80} 
                        style={{ 
                          color: '#3b82f6',
                          position: 'absolute',
                          top: '20px',
                          right: '0',
                          transform: 'rotate(45deg)'
                        }} 
                      />
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
                      24/7 Support
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

        {/* Support Services Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            {/* Blue Info Box */}
            <div 
              className="mb-16"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                borderRadius: 'var(--radius-xl)',
                padding: '48px',
                color: 'white',
                maxWidth: '900px',
                margin: '0 auto 64px',
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)'
              }}
            >
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.3',
                  marginBottom: '20px'
                }}
              >
                Our WordPress Support Services
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.8',
                  marginBottom: '16px',
                  opacity: 0.95
                }}
              >
                Benefit from our WordPress & WooCommerce expertise, and 
                ongoing support. We help to resolve problems, bugs and 
                common support issues to get your online business running. 
                We're on-call 24/7 to provide expert advice to help you with 
                what you need. See below for some of our common support services.
              </p>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  lineHeight: '1.7',
                  opacity: 0.9
                }}
              >
                Our WordPress specialist support includes WordPress website 
                customisations, security audits, malware removal, plugin 
                configuration, theme development, WooCommerce store setup, 
                payment gateway integration, and complete technical consultation.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((service) => {
                const Icon = service.icon;
                const isHovered = hoveredService === service.id;

                return (
                  <div
                    key={service.id}
                    className="cursor-pointer"
                    style={{
                      padding: '28px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: isHovered ? '1px solid var(--primary)' : '1px solid var(--border-soft)',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 10px 30px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
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
                        size={24} 
                        style={{ 
                          color: isHovered ? 'white' : 'var(--primary)',
                          transition: 'color 0.3s ease'
                        }} 
                      />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        marginBottom: '12px',
                        lineHeight: '1.4'
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Featured Project Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
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
                  Featured Project
                </div>

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
                  See some work we didn't care a ton about. Just a peek.
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
                  We keep things simple by providing best-class support 
                  throughout the business process so the client can focus on what 
                  they do best. We love working with businesses to help them reach 
                  their business goals through our customized WordPress 
                  development services and ongoing support.
                </p>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    lineHeight: '1.7',
                    marginBottom: '32px',
                    opacity: 0.9
                  }}
                >
                  Our business approach is different that you support is tailored 
                  specifically to your company's requirements. We're not 
                  interested in rigid packages, we want to understand your pain 
                  points and offer solutions that make sense.
                </p>

                <Button
                  variant="default"
                  size="lg"
                  page="portfolio-archive"
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--primary)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Explore all case studies
                  <ArrowRight size={20} />
                </Button>
              </div>

              {/* Right: Project Preview */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary)',
                    marginBottom: '20px'
                  }}
                >
                  Hello,
                </div>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '32px'
                  }}
                >
                  our hosting is trusted by over 500,000 websites, and we help yours
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'A completely responsive site design' },
                    { label: 'A designed WordPress theme' },
                    { label: 'Use 3 months hosting grace' },
                    { label: 'Use 2 months hosting grace' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '16px',
                        backgroundColor: 'var(--muted)',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center'
                      }}
                    >
                      <CheckCircle 
                        size={32} 
                        style={{ 
                          color: 'var(--success)',
                          margin: '0 auto 8px'
                        }} 
                      />
                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--foreground)',
                          lineHeight: '1.4'
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Why LightSpeed Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
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
              {/* Left: WordPress & WooCommerce Logos */}
              <div className="flex items-center justify-center gap-12">
                <div
                  style={{
                    padding: '60px 40px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '48px',
                    alignItems: 'center'
                  }}
                >
                  {/* WordPress Logo */}
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-3xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'white',
                      textAlign: 'center'
                    }}
                  >
                    WordPress
                  </div>

                  {/* WooCommerce Logo */}
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-3xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: '#7c3aed',
                      textAlign: 'center'
                    }}
                  >
                    WooCommerce
                  </div>
                </div>
              </div>

              {/* Right: Content */}
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
                  Why LightSpeed?
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.8',
                    marginBottom: '20px',
                    opacity: 0.95
                  }}
                >
                  Over 10 years of engineering successful WordPress projects has 
                  enabled us to know what your customers need. Our experienced 
                  team take it beyond the basics with advanced WordPress 
                  development and exceptional WooCommerce expertise.
                </p>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    opacity: 0.9
                  }}
                >
                  Why should you migrate?
                </p>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    lineHeight: '1.7',
                    marginBottom: '32px',
                    opacity: 0.9
                  }}
                >
                  With WordPress powering over 43% of all websites, it's the most 
                  trusted and flexible platform available. We help businesses migrate 
                  from legacy systems, Shopify, Wix, or custom solutions to 
                  WordPress—unlocking better SEO, easier content management, and 
                  unlimited customization possibilities.
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
                  Book a free consultation
                  <ArrowRight size={20} />
                </Button>
              </div>
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
              <FAQSection faqs={supportFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}