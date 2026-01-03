/**
 * Team Template
 * 
 * WordPress template: templates/page-team.html
 * 
 * Team page showcasing company team members and culture.
 * Pattern order: Hero → Team Grid → Culture Section → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Skeleton } from '../blocks/layout/Skeleton';
import { TeamGrid } from '../patterns/TeamGrid';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { teamFAQs } from '../../data/faqs';
import { teamMembers } from '../../data/team';
import { featuredTestimonials } from '../../data/testimonials';
import { Globe, Users, Heart, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { useState, useEffect } from 'react';

export function TeamTemplate() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state (in real app, this would be actual data fetching)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms loading simulation
    
    return () => clearTimeout(timer);
  }, []); // Run once on mount

  const culturePoints = [
    {
      icon: Globe,
      title: 'Remote-First',
      description: 'Our team works from 10+ countries, bringing diverse perspectives and 24/7 client coverage.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We believe in pair programming, code reviews, and knowledge sharing to deliver the best results.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We respect personal time with flexible schedules and unlimited PTO for all team members.'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Annual learning budgets, conference attendance, and dedicated time for skill development.'
    }
  ];

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
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
                { label: 'About', href: '/about' },
                { label: 'Team' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
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

          <div className="relative z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center px-6 py-3 mb-8"
              style={{
                backgroundColor: 'var(--glass-bg-strong)',
                backdropFilter: 'blur(10px)',
                color: 'var(--primary-foreground)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--glass-border)',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Meet Our Team
            </div>

            <h1 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: 'var(--line-height-tight)',
                letterSpacing: 'var(--letter-spacing-tight)',
                marginBottom: '24px',
                color: 'var(--primary-foreground)'
              }}
            >
              The People Behind LSX Design
            </h1>

            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lead)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--primary-foreground)',
                opacity: 0.95,
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              A diverse team of WordPress experts, designers, and developers passionate about creating exceptional web experiences.
            </p>
          </div>
        </Section>

        {/* Team Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-snug)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Our WordPress Experts
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7'
                }}
              >
                Meet the talented individuals who bring our WordPress projects to life
              </p>
            </div>

            {isLoading ? (
              // Loading skeletons
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    {/* Photo skeleton */}
                    <Skeleton height="300px" variant="rectangular" />
                    
                    {/* Content skeleton */}
                    <div className="p-6 flex flex-col gap-3">
                      {/* Name skeleton */}
                      <Skeleton width="80%" height="24px" variant="text" />
                      
                      {/* Role skeleton */}
                      <Skeleton width="70%" height="20px" className="mb-2" variant="text" />
                      
                      {/* Bio skeletons */}
                      <Skeleton width="100%" height="16px" variant="text" />
                      <Skeleton width="100%" height="16px" variant="text" />
                      <Skeleton width="85%" height="16px" className="mb-4" variant="text" />
                      
                      {/* Social links skeleton */}
                      <div className="flex gap-2 pt-4" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
                        <Skeleton width="32px" height="32px" variant="circular" />
                        <Skeleton width="32px" height="32px" variant="circular" />
                        <Skeleton width="32px" height="32px" variant="circular" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <TeamGrid 
                heading=""
                description=""
                members={teamMembers}
                columns={{ mobile: 1, tablet: 2, desktop: 4 }}
                showBios={true}
                showSocial={true}
              />
            )}
          </Container>
        </Section>

        {/* Testimonial Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <TestimonialGrid 
              heading="What Our Clients Say"
              description="Hear from our satisfied clients about their experiences with LSX Design"
              testimonials={featuredTestimonials}
              columns={{ mobile: 1, tablet: 2, desktop: 3 }}
              showRatings={true}
              showAvatars={false}
            />
          </Container>
        </Section>

        {/* Culture Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-snug)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Our Culture
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7'
                }}
              >
                The values and principles that make LSX Design a great place to work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culturePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '32px',
                      textAlign: 'center',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <div 
                      className="mb-6 mx-auto"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary)',
                        color: 'var(--primary-foreground)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={28} strokeWidth={2} />
                    </div>

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
                      {point.title}
                    </h3>

                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6'
                      }}
                    >
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Join Team CTA */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div 
              className="text-center max-w-3xl mx-auto"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border-soft)',
                borderRadius: 'var(--radius-xl)',
                padding: '64px 48px',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: 'var(--line-height-snug)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Join Our Team
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  margin: '0 0 2rem 0'
                }}
              >
                We're always looking for talented individuals to join our team.
              </p>

              <Button
                variant="primary"
                size="lg"
                page="contact"
              >
                View Open Positions
              </Button>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Have questions about our team or the application process? We've got answers."
          faqs={teamFAQs}
          variant="default"
        />

        {/* CTA Section */}
        <CTASection
          title="Let's Work Together"
          description="Ready to start your WordPress project? Our expert team is here to help bring your vision to life."
          primaryButtonText="Get In Touch"
          primaryButtonPage="contact"
          secondaryButtonText="View Our Work"
          secondaryButtonPage="portfolio-archive"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}