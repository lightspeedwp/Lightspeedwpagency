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

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';
import { Skeleton } from '../blocks/layout/Skeleton';
import { MobileFilterPopover } from '../common/MobileFilterPopover';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import { useMicroInteractions } from '../../hooks/useMicroInteractions';
import { Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { portfolioFAQs } from '../../data/faqs';
import { clientLogos } from '../../data/logos';
import { portfolioArchiveCTA } from '../../data/cta';
import { portfolioArchiveItems } from '../../data/archive-items';
import '@/styles/templates/portfolio-archive.css';
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
        className="portfolio-card"
        aria-label={`View ${item.title} project`}
      >
        <article
          {...liftProps}
          className="portfolio-card__article"
          style={liftProps.style}
        >
          {/* Project Image */}
          <div className="portfolio-card__image-container">
            <img 
              src={item.imageUrl}
              alt={item.title}
              className="portfolio-card__image"
            />
            
            {/* Category Badge */}
            <span className="portfolio-card__category-badge">
              {item.category}
            </span>
          </div>

          {/* Project Content */}
          <div className="portfolio-card__content">
            <Heading level={3} className="portfolio-card__title">
              {item.title}
            </Heading>

            <Paragraph className="portfolio-card__excerpt">
              {item.excerpt}
            </Paragraph>

            {/* Tags */}
            <div className="portfolio-card__tags">
              {item.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="portfolio-card__tag"
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
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
          <Breadcrumbs 
            items={[
              { label: 'Home', page: 'front-page' },
              { label: 'Portfolio' }
            ]}
          />
      </section>

        {/* Archive Header */}
        <Section 
          spacing="xl"
          className="portfolio-archive__header"
        >
          {/* Subtle gradient overlay */}
          <div 
            className="portfolio-archive__gradient-overlay"
            aria-hidden="true"
          />
          
          {/* Decorative gradient orb */}
          <div 
            className="portfolio-archive__orb"
            aria-hidden="true"
          />

          <Container className="portfolio-archive__header-container">
            <div className="portfolio-archive__header-content">
              <span className="portfolio-archive__badge">
                Our Work
              </span>

              <Heading level={1} className="portfolio-archive__title">
                Portfolio
              </Heading>

              <Paragraph size="large" className="portfolio-archive__description">
                Explore our collection of successful WordPress and WooCommerce projects. From simple websites to complex enterprise solutions.
              </Paragraph>

              {/* Stats */}
              <div className="portfolio-archive__stats wp-grid-3-cols">
                <div>
                  <div className="portfolio-archive__stat-value portfolio-archive__stat-value--primary">
                    150+
                  </div>
                  <div className="portfolio-archive__stat-label">
                    Projects Delivered
                  </div>
                </div>
                <div>
                  <div className="portfolio-archive__stat-value">
                    98%
                  </div>
                  <div className="portfolio-archive__stat-label">
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div className="portfolio-archive__stat-value">
                    15+
                  </div>
                  <div className="portfolio-archive__stat-label">
                    Industries Served
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Filter Bar */}
        <section className="portfolio-archive__filter-section">
          <Container>
            <div className="portfolio-archive__filter-container">
              {/* Mobile Filter Button (show on mobile, hide on desktop) */}
              <div className="portfolio-archive__mobile-header wp-hide-desktop">
                <Heading level={2} className="portfolio-archive__filter-title">
                  Filter Projects
                </Heading>
                
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="portfolio-archive__filter-toggle"
                  aria-label="Open filter menu"
                >
                  <Filter size={20} />
                  <span>Filters</span>
                </button>
              </div>

              {/* Category Filters (hide on mobile, show on desktop) */}
              <div className="portfolio-archive__desktop-filters wp-hide-mobile wp-hide-tablet">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`portfolio-archive__filter-button ${
                      selectedCategory === category ? 'portfolio-archive__filter-button--active' : ''
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <Paragraph className="portfolio-archive__results-count">
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
              </Paragraph>
            </div>
          </Container>
        </section>

        {/* Portfolio Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-grid-3-cols wp-gap-8" ref={containerRef}>
              {isLoading ? (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="portfolio-skeleton-card"
                  >
                    {/* Image skeleton */}
                    <Skeleton height="var(--spacing-48)" className="wp-mb-4" variant="rectangular" />
                    
                    {/* Title skeleton */}
                    <Skeleton width="60%" height="var(--spacing-6)" className="wp-mb-2" variant="text" />
                    
                    {/* Description skeletons */}
                    <Skeleton width="100%" height="var(--spacing-4)" className="wp-mb-1" variant="text" />
                    <Skeleton width="100%" height="var(--spacing-4)" className="wp-mb-1" variant="text" />
                    <Skeleton width="80%" height="var(--spacing-4)" className="wp-mb-4" variant="text" />
                    
                    {/* Tags skeleton */}
                    <div className="portfolio-skeleton-tags">
                      <Skeleton width="var(--spacing-16)" height="var(--spacing-6)" variant="rectangular" />
                      <Skeleton width="var(--spacing-20)" height="var(--spacing-6)" variant="rectangular" />
                      <Skeleton width="var(--spacing-16)" height="var(--spacing-6)" variant="rectangular" />
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

      <StickyBookCallButton />
    </>
  );
}