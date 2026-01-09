/**
 * Testimonials Template
 * 
 * WordPress template: page-testimonials.html
 * 
 * Comprehensive testimonials page with filtering, stats, and social proof.
 * 
 * Pattern order:
 * Hero → Stats → Featured Testimonials → Filters → All Testimonials → Video Section → Social Proof → CTA
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
  Star,
  ArrowRight,
  Quote,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  PlayCircle,
  Filter
} from 'lucide-react';

export function TestimonialsTemplate() {
  const { navigateTo } = useNavigation();
  const [filterIndustry, setFilterIndustry] = useState<string>('all');
  const [filterService, setFilterService] = useState<string>('all');
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'EcoMarket',
      industry: 'Ecommerce',
      service: 'WooCommerce Development',
      rating: 5,
      text: 'LightSpeed transformed our online store into a high-performing ecommerce platform. Sales increased 250% in the first 6 months. Their expertise in WooCommerce and attention to detail is unmatched.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      results: ['250% sales increase', '60% faster load times', '4.8/5 customer satisfaction']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'HealthFirst Wellness',
      industry: 'Healthcare',
      service: 'WordPress Development',
      rating: 5,
      text: 'The team delivered a beautiful, HIPAA-compliant website that exceeded our expectations. Their understanding of healthcare regulations and WordPress best practices was impressive.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      results: ['100% HIPAA compliant', '3x more appointments', 'Perfect accessibility score']
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Founder',
      company: 'Wanderlust Travel',
      industry: 'Travel',
      service: 'Tour Operator Solution',
      rating: 5,
      text: 'Our tour booking system is now seamless and efficient. LightSpeed built a custom solution that handles our complex itineraries and booking workflows perfectly.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      results: ['500+ bookings/month', 'Zero booking errors', '95% customer retention']
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO',
      company: 'TechStartup Magazine',
      industry: 'Publishing',
      service: 'Design & Development',
      rating: 5,
      text: 'From design to development, the entire process was smooth and professional. They created a custom publishing platform that our editorial team loves.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      results: ['2M monthly readers', '40% faster publishing', '10x content engagement']
    },
    {
      id: 5,
      name: 'Jennifer Martinez',
      role: 'Operations Manager',
      company: 'OceanView Real Estate',
      industry: 'Real Estate',
      service: 'WordPress Migration',
      rating: 5,
      text: 'Migrated from a legacy system to modern WordPress with zero downtime. The new site is faster, easier to manage, and generates more leads.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      results: ['Zero downtime', '180% more leads', 'Perfect SEO migration']
    },
    {
      id: 6,
      name: 'Robert Taylor',
      role: 'Executive Director',
      company: 'Global Education Foundation',
      industry: 'Non-Profit',
      service: 'Security & Support',
      rating: 5,
      text: 'Their ongoing support and security services give us peace of mind. Our website has been rock-solid since partnering with LightSpeed.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      results: ['100% uptime', 'Zero security incidents', '$50K saved annually']
    },
    {
      id: 7,
      name: 'Lisa Anderson',
      role: 'Owner',
      company: 'Artisan Bakery Co',
      industry: 'Food & Beverage',
      service: 'WooCommerce Store',
      rating: 5,
      text: 'Our online bakery orders tripled after the redesign. The custom ordering system they built makes it easy for customers to place complex orders.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      results: ['300% order increase', 'Custom order system', '4.9/5 customer rating']
    },
    {
      id: 8,
      name: 'James Wilson',
      role: 'Partner',
      company: 'Summit Law Firm',
      industry: 'Legal',
      service: 'Professional Website',
      rating: 5,
      text: 'Professional, accessible, and conversion-focused. The new website positioned us as a modern law firm and increased client inquiries significantly.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      results: ['200% more inquiries', 'WCAG AAA compliant', 'Top Google rankings']
    },
    {
      id: 9,
      name: 'Amanda Foster',
      role: 'Marketing Head',
      company: 'FitLife Gym',
      industry: 'Fitness',
      service: 'Membership Platform',
      rating: 5,
      text: 'The custom membership platform streamlined our operations. Members can book classes, track progress, and manage subscriptions all in one place.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      results: ['500+ active members', 'Automated billing', '95% renewal rate']
    }
  ];

  // Filter testimonials
  const filteredTestimonials = testimonials.filter(testimonial => {
    const industryMatch = filterIndustry === 'all' || testimonial.industry === filterIndustry;
    const serviceMatch = filterService === 'all' || testimonial.service.includes(filterService);
    return industryMatch && serviceMatch;
  });

  // Featured testimonials (top 3)
  const featuredTestimonials = testimonials.slice(0, 3);

  // Industries and services for filters
  const industries = ['all', ...Array.from(new Set(testimonials.map(t => t.industry)))];
  const services = ['all', 'WordPress', 'WooCommerce', 'Design', 'Development', 'Migration', 'Security'];

  // Stats
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Client Retention' },
    { number: '15+', label: 'Years Experience' }
  ];

  // Video testimonials
  const videoTestimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'EcoMarket',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      duration: '2:45'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'HealthFirst',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
      duration: '3:12'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      company: 'Wanderlust Travel',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800',
      duration: '2:30'
    }
  ];

  // FAQs
  const testimonialFAQs = [
    {
      question: 'Are these testimonials from real clients?',
      answer: 'Yes! All testimonials are from real clients who have worked with LightSpeed. We never use fake reviews or paid testimonials. Each review includes the client\'s name, company, and specific results achieved. We can provide references and case studies upon request.'
    },
    {
      question: 'Can I speak with past clients before hiring you?',
      answer: 'Absolutely! We\'re happy to connect you with past clients who have given us permission to share their contact information. We have clients across various industries who are willing to share their experience working with us. Just let us know what type of project you\'re considering and we\'ll match you with relevant references.'
    },
    {
      question: 'What industries have you worked with?',
      answer: 'We\'ve worked with clients across 20+ industries including ecommerce, healthcare, travel & tourism, real estate, professional services, education, non-profits, publishing, fitness, food & beverage, and more. Our diverse experience means we understand the unique challenges and requirements of different sectors.'
    },
    {
      question: 'Do you guarantee the same results for my project?',
      answer: 'While we can\'t guarantee specific metrics (as results depend on many factors including your industry, competition, and marketing efforts), we do guarantee quality work, adherence to best practices, and our commitment to your success. We set realistic expectations during the proposal stage and provide regular progress updates throughout the project.'
    },
    {
      question: 'How do you measure project success?',
      answer: 'Success metrics are defined during the discovery phase and vary by project. Common metrics include: website speed improvements, increased traffic and conversions, better search rankings, improved user engagement, higher customer satisfaction scores, and ROI. We provide analytics dashboards and regular reports to track progress against your goals.'
    },
    {
      question: 'What if I\'m not satisfied with the results?',
      answer: 'Client satisfaction is our top priority. We have a structured revision process during development to ensure you\'re happy with the work before launch. Post-launch, we offer support packages to address any issues and continuously optimize performance. If you\'re not satisfied, we work with you to make it right. Our 98% client retention rate speaks to our commitment to your success.'
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
            background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
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
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
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
                CLIENT TESTIMONIALS
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
                Trusted by 500+<br />Happy Clients
              </h1>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '32px',
                  maxWidth: '700px',
                  margin: '0 auto 32px'
                }}
              >
                Don't just take our word for it. See what our clients say about 
                working with LightSpeed and the results we've achieved together.
              </p>

              {/* Star Rating */}
              <div 
                className="flex items-center justify-center gap-2 mb-8"
                style={{
                  marginBottom: '32px'
                }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={32} 
                    style={{ 
                      fill: '#fbbf24', 
                      color: '#fbbf24' 
                    }} 
                  />
                ))}
                <span
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'white',
                    marginLeft: '12px'
                  }}
                >
                  4.9/5 Average Rating
                </span>
              </div>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: 'white',
                    color: '#f59e0b',
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
                  View Portfolio
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

        {/* Stats Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
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
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h1)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--primary)',
                      marginBottom: '8px'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Featured Testimonials */}
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
                Featured Success Stories
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
                Hear from clients who achieved remarkable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border-soft)',
                    position: 'relative'
                  }}
                >
                  <Quote 
                    size={48} 
                    style={{ 
                      color: 'var(--primary)', 
                      opacity: 0.2,
                      position: 'absolute',
                      top: '24px',
                      right: '24px'
                    }} 
                  />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        style={{ fill: '#fbbf24', color: '#fbbf24' }} 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.6',
                      color: 'var(--foreground)',
                      marginBottom: '20px'
                    }}
                  >
                    "{testimonial.text}"
                  </p>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {testimonial.results.map((result, idx) => (
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
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-full)',
                        overflow: 'hidden',
                        flexShrink: 0
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
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
                        {testimonial.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Filters */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
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
                All Client Testimonials
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  marginBottom: '32px'
                }}
              >
                Filter by industry or service to find relevant success stories
              </p>

              {/* Filter Controls */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                <div className="flex items-center gap-3">
                  <Filter size={20} style={{ color: 'var(--muted-foreground)' }} />
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Industry:
                  </span>
                  <select
                    value={filterIndustry}
                    onChange={(e) => setFilterIndustry(e.target.value)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--card)',
                      color: 'var(--foreground)',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      cursor: 'pointer'
                    }}
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry === 'all' ? 'All Industries' : industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Service:
                  </span>
                  <select
                    value={filterService}
                    onChange={(e) => setFilterService(e.target.value)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--card)',
                      color: 'var(--foreground)',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      cursor: 'pointer'
                    }}
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service === 'all' ? 'All Services' : service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* All Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        style={{ fill: '#fbbf24', color: '#fbbf24' }} 
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.6',
                      color: 'var(--foreground)',
                      flex: 1
                    }}
                  >
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-full)',
                        overflow: 'hidden',
                        flexShrink: 0
                      }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
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
                        {testimonial.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Industry/Service Tags */}
                  <div className="flex gap-2">
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--primary-soft)',
                        fontSize: 'var(--text-small)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--primary)'
                      }}
                    >
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredTestimonials.length === 0 && (
              <div
                style={{
                  padding: '64px 32px',
                  textAlign: 'center',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  No testimonials found for the selected filters.
                </p>
              </div>
            )}
          </Container>
        </Section>

        {/* Video Testimonials */}
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
                Video Testimonials
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
                Watch our clients share their success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoTestimonials.map((video) => (
                <div
                  key={video.id}
                  className="cursor-pointer"
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    aspectRatio: '16/9'
                  }}
                >
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} testimonial`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      <PlayCircle size={40} style={{ color: 'var(--primary)' }} />
                    </div>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      right: '20px'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'white',
                        marginBottom: '4px'
                      }}
                    >
                      {video.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {video.company} • {video.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
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
                Ready to Join Our Success Stories?
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
                Let's create your success story together. Get started with a 
                free consultation and see how we can help your business grow.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: 'white',
                    color: '#f59e0b',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Get Started Today
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
                  Testimonials FAQs
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Common questions about our client testimonials
                </p>
              </div>

              <FAQSection faqs={testimonialFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}