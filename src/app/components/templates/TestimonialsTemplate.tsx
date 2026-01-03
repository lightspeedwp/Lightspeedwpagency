/**
 * Testimonials Template
 * 
 * WordPress template: page-testimonials.html
 * Pattern: Content hub archetype with testimonial grids
 * 
 * Pattern order: Hero → TestimonialGrid (Featured) → Filters → TestimonialGrid (All) → 
 *                SocialProof → CTASection
 * 
 * **Conversion Strategy:**
 * - TestimonialGrid: Multiple social proof touchpoints build trust
 * - SocialProof: Client logos validate credibility
 * - CTASection: Final conversion opportunity with trust indicators
 * 
 * **Accessibility:**
 * - Keyboard navigation for filter controls
 * - ARIA labels for testimonial cards
 * - Focus states on interactive elements
 * - Screen reader friendly testimonial structure
 * - Semantic HTML for testimonials
 * 
 * @see {@link /guidelines/templates/testimonials.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Skeleton } from '../blocks/layout/Skeleton';
import { CTASection } from '../patterns/CTASection';
import { Star } from 'lucide-react';
import { 
  testimonials, 
  featuredTestimonials,
  testimonialIndustries,
  testimonialServiceTypes 
} from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
import { useState, useEffect } from 'react';

export function TestimonialsTemplate() {
  const [filterIndustry, setFilterIndustry] = useState<string>('all');
  const [filterService, setFilterService] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state (in real app, this would be actual data fetching)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms loading simulation
    
    return () => clearTimeout(timer);
  }, [filterIndustry, filterService]); // Re-trigger when filters change

  // Filter testimonials based on selected filters
  const filteredTestimonials = testimonials.filter(testimonial => {
    const industryMatch = filterIndustry === 'all' || 
      testimonial.industry.some(i => i === filterIndustry);
    const serviceMatch = filterService === 'all' || 
      testimonial.serviceType.some(s => s === filterService);
    return industryMatch && serviceMatch;
  });

  // Featured testimonial for hero
  const heroTestimonial = featuredTestimonials[0];

  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link"
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 999,
          padding: '1rem',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          textDecoration: 'none',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: 500
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '1rem';
          e.currentTarget.style.top = '1rem';
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content">
        {/* Hero Section with Page Title */}
        <Section sectionStyle="hero-secondary">
          <Container>
            <div className="section-content-center">
              <h1>Client Success Stories</h1>
              <p className="lead">
                Discover how we've helped businesses transform their digital presence 
                with modern WordPress solutions, accessible design, and high-performance development.
              </p>
            </div>
          </Container>
        </Section>

        {/* Featured Testimonial Highlight */}
        {heroTestimonial && (
          <Section sectionStyle="testimonial-highlight">
            <Container>
              <div className="section-content-narrow section-content-layer">
                {/* Rating Stars */}
                <div style={{ 
                  display: 'flex', 
                  gap: '0.5rem', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={24}
                      fill={i < heroTestimonial.rating ? 'currentColor' : 'none'}
                      style={{ color: 'var(--primary-foreground)', opacity: 0.9 }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="testimonial-quote">
                  "{heroTestimonial.quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="testimonial-author">
                    {heroTestimonial.author}
                  </div>
                  <div className="testimonial-role">
                    {heroTestimonial.role}, {heroTestimonial.company}
                  </div>
                </div>

                {/* Results (if available) */}
                {heroTestimonial.results && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'center',
                    marginTop: '2rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--primary-foreground)',
                    opacity: 0.8
                  }}>
                    {heroTestimonial.results.map((result, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-sm)',
                          fontWeight: 500,
                          color: 'var(--primary-foreground)'
                        }}
                      >
                        ✓ {result}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Container>
          </Section>
        )}

        {/* Filter Section */}
        <Section spacing="lg" background="muted">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h3)',
                fontWeight: 500,
                color: 'var(--foreground)',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                Filter Testimonials
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {/* Industry Filter */}
                <div>
                  <label 
                    htmlFor="industry-filter"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Filter by Industry
                  </label>
                  <select
                    id="industry-filter"
                    value={filterIndustry}
                    onChange={(e) => setFilterIndustry(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="all">All Industries</option>
                    {testimonialIndustries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                {/* Service Filter */}
                <div>
                  <label 
                    htmlFor="service-filter"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Filter by Service
                  </label>
                  <select
                    id="service-filter"
                    value={filterService}
                    onChange={(e) => setFilterService(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="all">All Services</option>
                    {testimonialServiceTypes.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results count */}
              <p style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-sm)',
                color: 'var(--muted-foreground)',
                textAlign: 'center',
                marginTop: '1.5rem'
              }}>
                Showing {filteredTestimonials.length} of {testimonials.length} testimonials
              </p>
            </div>
          </Container>
        </Section>

        {/* Testimonials Grid */}
        <Section sectionStyle="testimonial-grid">
          <Container>
            <div className="section-content-wide">
              <h2>What Our Clients Say</h2>

              <div className="section-grid-3">
                {isLoading ? (
                  // Loading skeletons
                  Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="p-6 flex flex-col gap-4"
                      style={{
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                    >
                      {/* Rating skeleton */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Skeleton key={i} width="16px" height="16px" variant="circular" />
                        ))}
                      </div>
                      
                      {/* Quote skeleton */}
                      <Skeleton width="100%" height="16px" variant="text" />
                      <Skeleton width="100%" height="16px" variant="text" />
                      <Skeleton width="90%" height="16px" className="mb-4" variant="text" />
                      
                      {/* Author skeleton */}
                      <Skeleton width="60%" height="20px" className="mt-auto" variant="text" />
                      <Skeleton width="70%" height="16px" variant="text" />
                      <Skeleton width="50%" height="16px" variant="text" />
                      
                      {/* Industry tags skeleton */}
                      <div className="flex gap-2 mt-4">
                        <Skeleton width="80px" height="24px" variant="rectangular" style={{ borderRadius: 'var(--radius)' }} />
                        <Skeleton width="90px" height="24px" variant="rectangular" style={{ borderRadius: 'var(--radius)' }} />
                      </div>
                    </div>
                  ))
                ) : (
                  filteredTestimonials.map((testimonial) => (
                    <article key={testimonial.id} className="testimonial-card">
                      {/* Rating */}
                      <div style={{ 
                        display: 'flex', 
                        gap: '0.25rem',
                        marginBottom: '1rem'
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={16}
                            fill={i < testimonial.rating ? 'var(--primary)' : 'none'}
                            style={{ color: 'var(--primary)' }}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="testimonial-quote">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div style={{ marginTop: 'auto' }}>
                        <div className="testimonial-author">
                          {testimonial.author}
                        </div>
                        <div className="testimonial-role">
                          {testimonial.role}
                        </div>
                        <div className="testimonial-company">
                          {testimonial.company}
                        </div>

                        {/* Industry Tags */}
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                          marginTop: '1rem'
                        }}>
                          {testimonial.industry.map((industry, idx) => (
                            <span
                              key={idx}
                              style={{
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 500,
                                color: 'var(--muted-foreground)',
                                backgroundColor: 'var(--muted)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: 'var(--radius)',
                                border: '1px solid var(--border)'
                              }}
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results (if available) */}
                      {testimonial.results && (
                        <div style={{
                          marginTop: '1.5rem',
                          paddingTop: '1.5rem',
                          borderTop: '1px solid var(--border)'
                        }}>
                          <div style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 500,
                            color: 'var(--foreground)',
                            marginBottom: '0.75rem'
                          }}>
                            Results:
                          </div>
                          <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                          }}>
                            {testimonial.results.map((result, idx) => (
                              <li 
                                key={idx}
                                style={{
                                  fontFamily: 'Manrope, sans-serif',
                                  fontSize: 'var(--text-sm)',
                                  color: 'var(--muted-foreground)',
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '0.5rem'
                                }}
                              >
                                <span style={{ color: 'var(--primary)' }}>✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  ))
                )}
              </div>

              {/* Empty State */}
              {filteredTestimonials.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '4rem 2rem',
                  backgroundColor: 'var(--muted)',
                  borderRadius: 'var(--radius-lg)',
                  marginTop: '2rem'
                }}>
                  <p style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--foreground)',
                    marginBottom: '1rem'
                  }}>
                    No testimonials match your filters
                  </p>
                  <p style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)'
                  }}>
                    Try adjusting your filter selections to see more results.
                  </p>
                </div>
              )}
            </div>
          </Container>
        </Section>

        {/* Social Proof */}
        <Section sectionStyle="social-proof">
          <Container>
            <div className="section-content-wide">
              <h2>Trusted by Leading Brands</h2>
              <p className="lead">
                Our clients are some of the most innovative and successful companies in their fields.
              </p>

              <div className="section-grid-4">
                {clientLogos.map((logo, idx) => (
                  <div key={idx} className="logo-item">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section sectionStyle="cta-primary">
          <Container>
            <div className="section-content-narrow section-content-layer">
              <h2>Ready to Transform Your Digital Presence?</h2>
              
              <p className="lead">
                Join our growing list of satisfied clients. Let's build something 
                amazing together with modern WordPress solutions.
              </p>
              
              <div className="button-group">
                <Button 
                  variant="primary" 
                  data-variant="primary" 
                  size="lg" 
                  page="contact"
                >
                  Start Your Project
                </Button>
                
                <Button 
                  variant="outline" 
                  data-variant="outline" 
                  size="lg" 
                  page="portfolio-archive"
                >
                  View Our Work
                </Button>
              </div>
              
              <div className="trust-indicators">
                <span>✓ Free consultation</span>
                <span>✓ 100% satisfaction guarantee</span>
                <span>✓ Flexible payment plans</span>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}