/**
 * Services Template
 * 
 * WordPress template: templates/page-services.html
 * 
 * Displays all service offerings in a grid layout with featured services highlighted.
 * Includes hero section, category filters, and CTA section.
 * 
 * Pattern order: Hero → Category Filters → Services Grid → CTA
 */

import { useState, useEffect } from 'react';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Skeleton } from '../blocks/layout/Skeleton';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import { ServicesCard, ServicesCardGrid } from '../patterns/ServicesCard';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { CTAInline } from '../patterns/CTAInline';
import { SocialProof } from '../patterns/SocialProof';
import { servicesArchiveCTA } from '../../data/cta';
import { partnerLogos } from '../../data/logos';
import { 
  services, 
  getServiceCategories,
  getServicesByCategory,
  featuredServices
} from '../../data/services';

export function ServicesTemplate() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state (in real app, this would be actual data fetching)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms loading simulation
    
    return () => clearTimeout(timer);
  }, [selectedCategory]); // Re-trigger when filter changes

  // Get filtered services based on selected category
  const displayedServices = selectedCategory === 'All' 
    ? services 
    : getServicesByCategory(selectedCategory);

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section sectionStyle="hero-minimal">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 'var(--line-height-tight)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '1.5rem'
                }}
              >
                Our Services
              </h1>
              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lead)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Comprehensive WordPress solutions for modern businesses. From custom theme development to performance optimization, we've got you covered.
              </p>
            </div>
          </Container>
        </Section>

        {/* Featured Services Section */}
        <Section spacing="lg" background="muted">
          <Container>
            <div className="mb-12">
              <h2
                className="text-center mb-4"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 'var(--line-height-snug)',
                  color: 'var(--foreground)'
                }}
              >
                Popular Services
              </h2>
              <p
                className="text-center"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Our most requested services that deliver exceptional results
              </p>
            </div>

            <ServicesCardGrid 
              services={featuredServices}
              columns={{ mobile: 1, tablet: 2, desktop: 4 }}
            />
          </Container>
        </Section>

        {/* Category Filters Section */}
        <Section spacing="lg">
          <Container>
            <div className="mb-12">
              <h2
                className="text-center mb-8"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 'var(--line-height-snug)',
                  color: 'var(--foreground)'
                }}
              >
                All Services
              </h2>

              {/* Category Filter Buttons */}
              <div 
                className="flex flex-wrap gap-3 justify-center mb-12"
                role="group"
                aria-label="Service category filters"
              >
                <button
                  onClick={() => setSelectedCategory('All')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: selectedCategory === 'All' 
                      ? 'var(--primary)' 
                      : 'var(--card)',
                    color: selectedCategory === 'All'
                      ? 'var(--primary-foreground)'
                      : 'var(--foreground)',
                    border: selectedCategory === 'All'
                      ? 'none'
                      : '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-base) var(--ease-in-out)',
                    boxShadow: selectedCategory === 'All' 
                      ? 'var(--shadow-md)' 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== 'All') {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== 'All') {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.backgroundColor = 'var(--card)';
                    }
                  }}
                  aria-pressed={selectedCategory === 'All'}
                >
                  All Services ({services.length})
                </button>

                {getServiceCategories().map((category) => {
                  const count = getServicesByCategory(category).length;
                  const isActive = selectedCategory === category;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: isActive 
                          ? 'var(--primary)' 
                          : 'var(--card)',
                        color: isActive
                          ? 'var(--primary-foreground)'
                          : 'var(--foreground)',
                        border: isActive
                          ? 'none'
                          : '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-base) var(--ease-in-out)',
                        boxShadow: isActive 
                          ? 'var(--shadow-md)' 
                          : 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.backgroundColor = 'var(--muted)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.backgroundColor = 'var(--card)';
                        }
                      }}
                      aria-pressed={isActive}
                    >
                      {category} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Results count */}
              <p
                className="text-center"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--muted-foreground)'
                }}
              >
                Showing {displayedServices.length} {displayedServices.length === 1 ? 'service' : 'services'}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Services Grid */}
            {isLoading ? (
              // Loading skeletons
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="p-8 flex flex-col gap-6"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    {/* Icon skeleton */}
                    <Skeleton height="56px" width="56px" variant="rectangular" style={{ borderRadius: 'var(--radius-lg)' }} />
                    
                    {/* Title skeleton */}
                    <Skeleton width="80%" height="28px" className="mb-2" variant="text" />
                    
                    {/* Description skeletons */}
                    <Skeleton width="100%" height="16px" variant="text" />
                    <Skeleton width="100%" height="16px" variant="text" />
                    <Skeleton width="90%" height="16px" className="mb-4" variant="text" />
                    
                    {/* Features list skeleton */}
                    <div className="flex flex-col gap-3">
                      <Skeleton width="100%" height="16px" variant="text" />
                      <Skeleton width="95%" height="16px" variant="text" />
                      <Skeleton width="85%" height="16px" variant="text" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ServicesCardGrid 
                services={displayedServices}
                columns={{ mobile: 1, tablet: 2, desktop: 3 }}
              />
            )}
          </Container>
        </Section>

        {/* Inline CTA - NEW PATTERN COMPONENT */}
        <CTAInline 
          heading="Need Help Choosing?"
          description="Not sure which service is right for you? Book a free consultation and we'll help you find the perfect solution for your needs."
          buttonText="Book Free Consultation"
          buttonHref="/contact"
          secondaryText="View Pricing"
          secondaryHref="/pricing"
        />

        {/* CTA Section */}
        <ArchiveCTA ctaData={servicesArchiveCTA} />

        {/* Partner Logos - NEW PATTERN COMPONENT */}
        <SocialProof 
          heading="Trusted Technology Partners"
          logos={partnerLogos}
          columns={5}
          variant="logos"
          caption="We partner with industry-leading platforms and tools to deliver exceptional WordPress solutions"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}