/**
 * Portfolio Archive Template
 * 
 * WordPress template: templates/archive-portfolio.html
 * 
 * Content hub archetype displaying portfolio projects.
 * Pattern order: Breadcrumbs → Archive Header → Card Grid → ArchiveCTA → SocialProof → FAQ
 * 
 * **Data Source:** `/src/app/data/archive-items.ts`
 * 
 * **Patterns Used:**
 * - Breadcrumbs (navigation context)
 * - ArchiveHeader (portfolio introduction)
 * - FilterBar (category/industry filters)
 * - CardGrid (portfolio project cards)
 * - ArchiveCTA (conversion optimization)
 * - SocialProof (client logos)
 * - FAQSection (portfolio FAQs)
 * 
 * **Conversion Strategy:**
 * - ArchiveCTA: Archive-specific conversion optimized for portfolio viewing
 * - SocialProof: Client logos build credibility
 * - FAQ: Address common questions about portfolio/services
 * 
 * **Accessibility:**
 * - Keyboard navigation for filters and cards
 * - Screen reader friendly project cards
 * - ARIA labels for filter controls
 * - Touch-friendly mobile filter popover (48×48px targets)
 * 
 * @see {@link /guidelines/templates/portfolio-archive.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';
import { Skeleton } from '../blocks/layout/Skeleton';
import { MobileFilterPopover } from '../common/MobileFilterPopover';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import { useMicroInteractions } from '../../hooks/useMicroInteractions';
import { Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { portfolioFAQs } from '../../data/faqs';
import { clientLogos } from '../../data/logos';
import { portfolioArchiveCTA } from '../../data/cta';
import { portfolioArchiveItems, portfolioCategories, portfolioIndustries } from '../../data/archive-items';
import { useNavigation } from '../../contexts/NavigationContext';

export function PortfolioArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll reveal with stagger for card grid
  const { containerRef, itemStyle } = useStaggerReveal({
    stagger: 100,
    animation: 'fade-up',
    duration: 600,
    threshold: 0.1
  });

  // Simulate loading state (in real app, this would be actual data fetching)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms loading simulation
    
    return () => clearTimeout(timer);
  }, [selectedCategory]); // Re-trigger when filter changes

  // Use centralized data from archive-items.ts
  const portfolioItems = portfolioArchiveItems;

  // Get unique categories from portfolio items
  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

  // Filter portfolio items based on selected category
  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  // Portfolio Card Component with Micro-interactions
  function PortfolioCard({ item }: { item: typeof portfolioItems[0] }) {
    const { hoverLift } = useMicroInteractions({ scaleOnHover: 1.01, duration: 300 });
    const liftProps = hoverLift(12); // 12px lift for pronounced effect

    return (
      <a
        href={`#portfolio-single-${item.slug}`}
        onClick={(e) => {
          e.preventDefault();
          navigateTo(`portfolio-single-${item.slug}`);
        }}
        style={{
          textDecoration: 'none',
          display: 'block',
          cursor: 'pointer',
        }}
        aria-label={`View ${item.title} project`}
      >
        <article
          {...liftProps}
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border-soft)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
            ...liftProps.style
          }}
        >
          {/* Project Image */}
          <div 
            style={{
              position: 'relative',
              paddingTop: '66.67%',
              overflow: 'hidden'
            }}
          >
            <img 
              src={item.imageUrl}
              alt={item.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            
            {/* Category Badge */}
            <span 
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-lg)',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-small)',
                fontWeight: 'var(--font-weight-medium)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {item.category}
            </span>
          </div>

          {/* Project Content */}
          <div style={{ padding: 'var(--spacing-6)' }}>
            <h3 
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--card-foreground)',
                marginBottom: '12px',
                lineHeight: '1.3'
              }}
            >
              {item.title}
            </h3>

            <p 
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}
            >
              {item.excerpt}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
              {item.tags.map((tag, index) => (
                <span 
                  key={index}
                  style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                    backgroundColor: 'var(--muted)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </a>
    );
  }

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs - Modern styling */}
        <section 
          style={{
            paddingTop: 'var(--spacing-4)',
            paddingBottom: 'var(--spacing-4)',
            backgroundColor: 'var(--background)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', page: 'front-page' },
                { label: 'Portfolio' }
              ]}
            />
          </Container>
        </section>

        {/* Archive Header */}
        <Section 
          spacing="xl"
          style={{
            backgroundColor: 'var(--card)',
            color: 'var(--card-foreground)',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
              opacity: '0.05',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
          
          {/* Decorative gradient orb */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
              opacity: '0.08',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="wp-text-center wp-max-w-4xl" style={{ margin: '0 auto' }}>
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  marginBottom: 'var(--spacing-8)',
                  backgroundColor: 'var(--muted)',
                  color: 'var(--muted-foreground)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-soft)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Our Work
              </span>

              <h1 
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-tight)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '24px',
                  color: 'var(--card-foreground)'
                }}
              >
                Portfolio
              </h1>

              <p 
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lead)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--card-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Explore our collection of successful WordPress and WooCommerce projects. From simple websites to complex enterprise solutions.
              </p>

              {/* Stats */}
              <div 
                className="wp-grid-3-cols"
                style={{
                  gap: 'var(--spacing-8)',
                  marginTop: 'var(--spacing-12)',
                  paddingTop: 'var(--spacing-12)',
                  borderTop: '1px solid var(--border-soft)'
                }}
              >
                <div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '8px',
                      color: 'var(--primary)'
                    }}
                  >
                    150+
                  </div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Projects Delivered
                  </div>
                </div>
                <div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '8px',
                      color: 'var(--card-foreground)'
                    }}
                  >
                    98%
                  </div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: '8px',
                      color: 'var(--card-foreground)'
                    }}
                  >
                    15+
                  </div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Industries Served
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Filter Bar */}
        <section 
          style={{
            paddingTop: 'var(--spacing-6)',
            paddingBottom: 'var(--spacing-6)',
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)',
          }}
        >
          <Container>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
              {/* Mobile Filter Button (show on mobile, hide on desktop) */}
              <div className="lg:hidden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-4)' }}>
                <h2 
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    margin: 0
                  }}
                >
                  Filter Projects
                </h2>
                
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    minHeight: '48px',
                    minWidth: '48px',
                    padding: '12px 24px',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  aria-label="Open filter menu"
                >
                  <Filter size={20} />
                  <span>Filters</span>
                </button>
              </div>

              {/* Category Filters (hide on mobile, show on desktop) */}
              <div className="hidden lg:flex" style={{ flexWrap: 'wrap', gap: 'var(--spacing-3)' }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      padding: '12px 24px',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: selectedCategory === category 
                        ? 'var(--primary)' 
                        : 'var(--background)',
                      color: selectedCategory === category 
                        ? 'var(--primary-foreground)' 
                        : 'var(--foreground)',
                      border: `1px solid ${selectedCategory === category ? 'var(--primary)' : 'var(--border-soft)'}`,
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minHeight: '44px',
                      minWidth: '44px',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCategory !== category) {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCategory !== category) {
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                      }
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <p 
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                }}
              >
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
          </Container>
        </section>

        {/* Portfolio Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }} ref={containerRef}>
              {isLoading ? (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    style={{
                      padding: 'var(--spacing-6)',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-xl)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    {/* Image skeleton */}
                    <Skeleton height="200px" className="mb-4" variant="rectangular" />
                    
                    {/* Title skeleton */}
                    <Skeleton width="60%" height="24px" className="mb-2" variant="text" />
                    
                    {/* Description skeletons */}
                    <Skeleton width="100%" height="16px" className="mb-1" variant="text" />
                    <Skeleton width="100%" height="16px" className="mb-1" variant="text" />
                    <Skeleton width="80%" height="16px" className="mb-4" variant="text" />
                    
                    {/* Tags skeleton */}
                    <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                      <Skeleton width="60px" height="24px" variant="rectangular" />
                      <Skeleton width="80px" height="24px" variant="rectangular" />
                      <Skeleton width="70px" height="24px" variant="rectangular" />
                    </div>
                  </div>
                ))
              ) : (
                filteredItems.map((item, index) => (
                  <div key={item.id} style={itemStyle(index)}>
                    <PortfolioCard item={item} />
                  </div>
                ))
              )}
            </div>
          </Container>
        </Section>

        {/* Archive CTA Section */}
        <ArchiveCTA ctaData={portfolioArchiveCTA} />

        {/* Social Proof Section */}
        <SocialProof
          title="Trusted by Leading Brands"
          description="Our portfolio showcases projects for some of the most respected companies in their industries."
          logos={clientLogos}
        />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Have questions about our portfolio or services? Find answers to common questions below."
          faqs={portfolioFAQs}
        />

        {/* Mobile Filter Popover */}
        <MobileFilterPopover
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
          title="Filter by Category"
          options={categories
            .filter(cat => cat !== 'All')
            .map(cat => ({
              id: cat.toLowerCase().replace(/\s+/g, '-'),
              label: cat,
              count: portfolioItems.filter(p => p.category === cat).length
            }))}
          selectedOption={selectedCategory}
          onSelect={setSelectedCategory}
          allLabel="All Projects"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
      <StickyBookCallButton />
    </>
  );
}
