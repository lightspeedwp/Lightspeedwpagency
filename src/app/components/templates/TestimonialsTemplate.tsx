/**
 * Testimonials Template
 * 
 * WordPress template: page-testimonials.html
 * 
 * Comprehensive testimonials page with filtering, stats, and social proof.
 * 
 * Pattern order:
 * Hero → Stats → Featured Testimonials → Filters → All Testimonials → Video Section → Social Proof → FAQSection → CTA
 * 
 * **Pattern Components Used:**
 * - Hero (gradient variant with rating)
 * - StatsGrid (4-column layout)
 * - TestimonialGrid (featured & filtered sections)
 * - VideoTestimonial (video section)
 * - SocialProof (client logos)
 * - FAQSection (common questions)
 * - CTASection (conversion)
 * 
 * **Code Reduction:**
 * - Before: ~800 lines
 * - After: ~400 lines
 * - Reduction: 50% (~400 lines eliminated)
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Section } from '../common/Section';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Hero } from '../patterns/Hero';
import { StatsGrid } from '../patterns/StatsGrid';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { VideoTestimonial } from '../patterns/VideoTestimonial';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { useState } from 'react';
import { Filter, Star } from 'lucide-react';

// Import centralized testimonials data
import { 
  testimonials as centralizedTestimonials,
  testimonialStats,
  videoTestimonials
} from '../../data/testimonials';
import { clientLogos } from '../../data/logos';

export function TestimonialsTemplate() {
  const [filterIndustry, setFilterIndustry] = useState<string>('all');
  const [filterService, setFilterService] = useState<string>('all');

  // Transform testimonials data for TestimonialGrid component
  const testimonials = centralizedTestimonials.map((t, index) => ({
    quote: t.quote,
    author: t.author,
    role: t.role,
    company: t.company,
    avatar: t.avatar || `https://images.unsplash.com/photo-${1494790108377 + index}?w=400`,
    rating: t.rating || 5,
    industry: t.industry?.[0] || 'General',
    service: t.serviceType?.[0] || 'WordPress'
  }));

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

  // Video testimonials data
  const videoTestimonialsData = videoTestimonials.map(v => ({
    title: v.title,
    clientName: v.name,
    clientRole: v.role,
    company: v.company,
    thumbnail: v.thumbnail,
    videoUrl: v.url,
    duration: v.duration,
    description: v.description
  }));

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
        {/* Hero Section with Rating */}
        <Hero
          badge="CLIENT TESTIMONIALS"
          title="Trusted by 500+ Happy Clients"
          description="Don't just take our word for it. See what our clients say about working with LightSpeed and the results we've achieved together."
          variant="gradient"
          primaryButtonText="Get Started"
          primaryButtonPage="contact"
          secondaryButtonText="View Portfolio"
          secondaryButtonPage="portfolio-archive"
        />

        {/* Stats Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <StatsGrid
            stats={testimonialStats.map(stat => ({
              icon: Star,
              value: stat.number,
              label: stat.label
            }))}
            columns={4}
            variant="cards"
          />
        </Section>

        {/* Featured Testimonials */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <TestimonialGrid
            testimonials={featuredTestimonials}
            heading="Featured Success Stories"
            description="Hear from clients who achieved remarkable results"
            columns={3}
            variant="cards"
            showRating={true}
            maxWidth="6xl"
          />
        </Section>

        {/* Filters & All Testimonials */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <div className="wp-max-w-6xl">
            {/* Section Header */}
            <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  color: 'var(--foreground)',
                  marginBottom: 'var(--spacing-4)'
                }}
              >
                All Client Testimonials
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  marginBottom: 'var(--spacing-8)'
                }}
              >
                Filter by industry or service to find relevant success stories
              </p>

              {/* Filter Controls */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-4)',
                  alignItems: 'center',
                  marginBottom: 'var(--spacing-12)'
                }}
                className="md:flex-row"
              >
                {/* Industry Filter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                  <Filter size={20} style={{ color: 'var(--muted-foreground)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-primary)',
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
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      cursor: 'pointer'
                    }}
                    aria-label="Filter testimonials by industry"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry === 'all' ? 'All Industries' : industry}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Filter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-primary)',
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
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      cursor: 'pointer'
                    }}
                    aria-label="Filter testimonials by service"
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

            {/* Filtered Testimonials Grid */}
            {filteredTestimonials.length > 0 ? (
              <TestimonialGrid
                testimonials={filteredTestimonials}
                columns={3}
                variant="cards"
                showRating={true}
                maxWidth="full"
              />
            ) : (
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
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  No testimonials found for the selected filters.
                </p>
              </div>
            )}
          </div>
        </Section>

        {/* Video Testimonials */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <VideoTestimonial
            videos={videoTestimonialsData}
            heading="Video Testimonials"
            description="Watch our clients share their success stories"
            variant="grid"
            columns={3}
            maxWidth="6xl"
          />
        </Section>

        {/* Social Proof */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <SocialProof
            logos={clientLogos.filter(logo => logo.category === 'client')}
            heading="Trusted by Leading Brands"
            description="Join 500+ companies who trust LightSpeed with their WordPress & WooCommerce solutions"
            variant="grayscale-hover"
            columns={6}
          />
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <FAQSection
            faqs={testimonialFAQs}
            heading="Frequently Asked Questions"
            description="Common questions about our testimonials and client references"
          />
        </Section>

        {/* CTA Section */}
        <CTASection
          variant="blue"
          heading="Ready to Become Our Next Success Story?"
          description="Join 500+ happy clients who have transformed their WordPress websites with LightSpeed. Let's achieve remarkable results together."
          primaryButtonText="Start Your Project"
          primaryButtonPage="contact"
          secondaryButtonText="View Our Services"
          secondaryButtonPage="services"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}