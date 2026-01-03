/**
 * Portfolio Single Template
 * 
 * WordPress template: templates/single-portfolio.html
 * 
 * Single detail archetype for portfolio project case studies.
 * Pattern order: Breadcrumbs → Hero → Project Details → Results → Gallery → Related Projects → Client Testimonials → Featured Case Study Preview → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { ScrollProgress } from '../blocks/layout/ScrollProgress';
import { useNavigation } from '../../contexts/NavigationContext';
import { featuredTestimonials } from '../../data/testimonials';
import { portfolioProjects } from '../../data/portfolio';
import { ExternalLink, Calendar, Users, Award, TrendingUp } from 'lucide-react';

interface PortfolioSingleTemplateProps {
  slug?: string;
}

export function PortfolioSingleTemplate({ slug = 'african-safari-consultants' }: PortfolioSingleTemplateProps) {
  const { navigateTo } = useNavigation();

  // Mock project data - in real WordPress, this would come from post meta
  const project = {
    title: 'African Safari Consultants',
    client: 'African Safari Consultants',
    category: 'WooCommerce Development',
    excerpt: 'Custom WordPress and WooCommerce platform for a luxury safari booking company with advanced filtering, booking systems, and tour management.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600',
    url: 'https://africansafariconsultants.com',
    completedDate: 'June 2024',
    duration: '4 months',
    teamSize: '5 specialists',
    services: ['WordPress Development', 'WooCommerce', 'Custom Development', 'UI/UX Design', 'Performance Optimization'],
    technologies: ['WordPress 6.4', 'WooCommerce 8.5', 'React', 'Advanced Custom Fields', 'Stripe API'],
    challenge: 'African Safari Consultants needed a complete digital transformation to modernize their safari booking experience. Their old system was difficult to use, lacked mobile optimization, and couldn\'t handle the complex safari tour configurations with multiple destinations, dates, and pricing tiers.',
    solution: 'We built a custom WordPress and WooCommerce solution with advanced tour filtering, real-time availability checking, and a seamless booking flow. The platform features a custom tour builder, interactive safari maps, and an intuitive admin dashboard for managing tours, bookings, and customer relationships.',
    results: [
      {
        icon: TrendingUp,
        metric: '185%',
        label: 'Increase in Online Bookings'
      },
      {
        icon: Users,
        metric: '3.2x',
        label: 'Longer Session Duration'
      },
      {
        icon: Award,
        metric: '94%',
        label: 'Customer Satisfaction'
      }
    ],
    features: [
      {
        title: 'Advanced Tour Filtering',
        description: 'Custom filtering system allowing visitors to find their perfect safari by destination, duration, price range, activity type, and accommodation level.'
      },
      {
        title: 'Interactive Safari Maps',
        description: 'Custom-built map interface showing safari routes, wildlife viewing locations, and accommodation properties with integrated booking functionality.'
      },
      {
        title: 'Real-Time Availability',
        description: 'Live availability checking system integrated with the tour operator\'s booking management platform to prevent double bookings.'
      },
      {
        title: 'Tour Package Builder',
        description: 'Flexible system allowing customers to customize safari packages by adding extensions, accommodation upgrades, and additional activities.'
      },
      {
        title: 'Mobile-First Design',
        description: 'Fully responsive design optimized for mobile safari research and booking, with 70% of traffic coming from mobile devices.'
      },
      {
        title: 'Admin Dashboard',
        description: 'Custom admin interface for managing tours, availability calendars, bookings, customer communications, and reporting.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800',
      'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800'
    ]
  };

  const relatedProjects = [
    {
      id: '1',
      title: 'Mountain Resort & Spa',
      category: 'Hospitality',
      imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600',
      slug: 'mountain-resort-spa'
    },
    {
      id: '2',
      title: 'TechStartup Magazine',
      category: 'Editorial',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600',
      slug: 'techstartup-magazine'
    },
    {
      id: '3',
      title: 'Artisan Bakery Co.',
      category: 'E-commerce',
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
      slug: 'artisan-bakery'
    }
  ];

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs - Modern styling */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: project.title }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div>
                <span 
                  className="inline-flex items-center px-4 py-2 mb-6"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    borderRadius: 'var(--radius-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  {project.category}
                </span>

                <h1 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'clamp(36px, 6vw, 56px)',
                    fontWeight: 'var(--font-weight-semibold)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    marginBottom: '24px',
                    color: 'var(--foreground)'
                  }}
                >
                  {project.title}
                </h1>

                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7',
                    marginBottom: '32px'
                  }}
                >
                  {project.excerpt}
                </p>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Client
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {project.client}
                    </div>
                  </div>
                  <div>
                    <div 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Completed
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {project.completedDate}
                    </div>
                  </div>
                  <div>
                    <div 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Duration
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {project.duration}
                    </div>
                  </div>
                  <div>
                    <div 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Team Size
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {project.teamSize}
                    </div>
                  </div>
                </div>

                {/* Visit Website Button */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      padding: '16px 32px',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      borderRadius: 'var(--radius-lg)',
                      border: 'none',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 106, 255, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Visit Website
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              {/* Hero Image */}
              <div 
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-soft)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <img 
                  src={project.heroImage}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Services & Technologies */}
        <Section spacing="lg" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '24px'
                  }}
                >
                  Services Provided
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.services.map((service, index) => (
                    <span 
                      key={index}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--foreground)',
                        backgroundColor: 'var(--card)',
                        padding: '12px 20px',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        fontWeight: 'var(--font-weight-medium)'
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '24px'
                  }}
                >
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        backgroundColor: 'var(--background)',
                        padding: '12px 20px',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Challenge & Solution */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '24px',
                    lineHeight: '1.2'
                  }}
                >
                  The Challenge
                </h2>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '24px',
                    lineHeight: '1.2'
                  }}
                >
                  Our Solution
                </h2>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  {project.solution}
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Results */}
        <Section 
          spacing="xl" 
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decoration */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--glass-bg-strong)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: Content */}
              <div>
                <div
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
                    className="inline-flex items-center gap-2 mb-8 mx-auto"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--glass-bg-strong)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <TrendingUp size={32} strokeWidth={2} />
                  </div>
                  
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'clamp(40px, 6vw, 56px)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '12px',
                      lineHeight: '1'
                    }}
                  >
                    {project.results[0].metric}
                  </div>
                  
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      opacity: 0.95
                    }}
                  >
                    {project.results[0].label}
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div>
                <div
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
                    className="inline-flex items-center gap-2 mb-8 mx-auto"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--glass-bg-strong)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Users size={32} strokeWidth={2} />
                  </div>
                  
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'clamp(40px, 6vw, 56px)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '12px',
                      lineHeight: '1'
                    }}
                  >
                    {project.results[1].metric}
                  </div>
                  
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      opacity: 0.95
                    }}
                  >
                    {project.results[1].label}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Key Features */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2'
                }}
              >
                Key Features
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7'
                }}
              >
                Custom functionality built to meet specific business requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((feature, index) => (
                <div
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
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--card-foreground)',
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
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Project Gallery */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="text-center mb-12">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2'
                }}
              >
                Project Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index}
                  style={{
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-soft)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <img 
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Related Projects */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-12">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2'
                }}
              >
                Related Projects
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7'
                }}
              >
                Explore more of our WordPress and WooCommerce work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <article
                  key={relatedProject.id}
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: 'var(--shadow-md)',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigateTo(`portfolio-single-${relatedProject.slug}`)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                >
                  <div 
                    style={{
                      position: 'relative',
                      paddingTop: '66.67%',
                      overflow: 'hidden'
                    }}
                  >
                    <img 
                      src={relatedProject.imageUrl}
                      alt={relatedProject.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <span 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--primary)',
                        fontWeight: 'var(--font-weight-medium)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {relatedProject.category}
                    </span>
                    
                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--card-foreground)',
                        marginTop: '12px',
                        lineHeight: '1.3'
                      }}
                    >
                      {relatedProject.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Client Testimonials - NEW PATTERN */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <Heading 
              level={2}
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: '24px',
                lineHeight: '1.2'
              }}
            >
              What Our Clients Say
            </Heading>
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.7'
              }}
            >
              Real results from real clients who trusted LSX Design with their WordPress projects
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {featuredTestimonials.map((testimonial, index) => (
                <div
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
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                  }}
                >
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)',
                      lineHeight: '1.6'
                    }}
                  >
                    {testimonial.content}
                  </p>

                  <div className="mt-8">
                    <h4 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h5)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--card-foreground)',
                        lineHeight: '1.3'
                      }}
                    >
                      {testimonial.author}
                    </h4>
                    <p 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--primary)',
                        fontWeight: 'var(--font-weight-medium)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Featured Case Study Preview - NEW PATTERN */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <Heading 
              level={2}
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: '24px',
                lineHeight: '1.2'
              }}
            >
              Featured Case Study
            </Heading>
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.7'
              }}
            >
              Explore a successful WordPress project that showcases our expertise
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-soft)';
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}
                >
                  E-commerce Transformation for Global Brand
                </h3>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.6'
                  }}
                >
                  Complete WooCommerce rebuild with custom product configurator, multi-currency support, and seamless checkout experience that increased conversions by 240%.
                </p>

                <div className="mt-8">
                  <h4 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h5)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--card-foreground)',
                      lineHeight: '1.3'
                    }}
                  >
                    Metrics
                  </h4>
                  <ul 
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}
                  >
                    <li 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--primary)',
                        fontWeight: 'var(--font-weight-medium)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Revenue Increase: +240%
                    </li>
                    <li 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--primary)',
                        fontWeight: 'var(--font-weight-medium)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Cart Abandonment: -45%
                    </li>
                    <li 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--primary)',
                        fontWeight: 'var(--font-weight-medium)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Page Load Time: 1.2s (-60%)
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button
                    text="View Full Case Study"
                    page="portfolio-single-techgear-pro"
                    size="lg"
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <Heading 
              level={2}
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: '24px',
                lineHeight: '1.2'
              }}
            >
              Have a Project in Mind?
            </Heading>
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.7'
              }}
            >
              Let's discuss how we can help bring your WordPress vision to life with our expert development team.
            </p>

            <div className="mt-8">
              <Button
                text="Start Your Project"
                page="contact"
                size="lg"
                variant="primary"
              />
              <Button
                text="View More Projects"
                page="portfolio-archive"
                size="lg"
                variant="secondary"
              />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
      <ScrollProgress />
    </>
  );
}