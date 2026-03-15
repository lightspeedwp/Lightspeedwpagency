import { useParams, Navigate, Link } from 'react-router';
import '../../../styles/templates/portfolio-archive-optimized.css';
import { slugToPath } from '../../utils/route-map';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { FAQSection } from '../patterns/FAQSection';
import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import { useMicroInteractions } from '../../hooks/useMicroInteractions';
import { portfolioFAQs } from '../../data/faqs';
import { portfolioPageCTA } from '../../data/cta';
import { getPortfolioItemsByCategory, portfolioArchiveItems } from '../../data/archive-items';
import { Skeleton } from '../blocks/layout/Skeleton';
import { useState, useEffect } from 'react';


export function PortfolioCategoryArchiveTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!slug) return <Navigate to="/work" />;

  const filteredItems = getPortfolioItemsByCategory(slug);
  
  // Try to find the formatted category name from the items
  // If no items found, check if it matches a known category or fallback to capitalized slug
  const categoryName = filteredItems.length > 0 
    ? filteredItems[0].category 
    : slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  // Scroll reveal
  const { containerRef, itemStyle } = useStaggerReveal({
    stagger: 100,
    animation: 'fade-up',
    duration: 600,
    threshold: 0.1
  });

  // Reusing PortfolioCard logic
  function PortfolioCard({ item }: { item: typeof filteredItems[0] }) {
    const { hoverLift } = useMicroInteractions({ scaleOnHover: 1.01, duration: 300 });
    const liftProps = hoverLift(12);

    return (
      <Link
        to={slugToPath(`portfolio-single-${item.slug}`)}
        className="portfolio-card"
        aria-label={`View ${item.title} project`}
      >
        <article
          {...liftProps}
          className="portfolio-card__article"
          style={liftProps.style}
        >
          <div className="portfolio-card__image-container">
            <img 
              src={item.imageUrl}
              alt={item.title}
              className="portfolio-card__image"
            />
            <span className="portfolio-card__category-badge">
              {item.category}
            </span>
          </div>

          <div className="portfolio-card__content">
            <Heading level={3} className="portfolio-card__title">
              {item.title}
            </Heading>

            <Paragraph className="portfolio-card__excerpt">
              {item.excerpt}
            </Paragraph>

            <div className="portfolio-card__tags">
              {item.tags.map((tag, index) => (
                <span key={index} className="portfolio-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Portfolio', page: 'portfolio-archive' },
          { label: categoryName },
        ]}
      />

      {/* Header */}
      <Section spacing="xl" className="portfolio-archive__header">
        <div className="portfolio-archive__gradient-overlay" aria-hidden="true" />
        <div className="portfolio-archive__orb" aria-hidden="true" />

        <Container className="portfolio-archive__header-container">
          <div className="portfolio-archive__header-content">
            <span className="portfolio-archive__badge">
              Category
            </span>

            <Heading level={1} className="portfolio-archive__title">
              {categoryName} Projects
            </Heading>

            <Paragraph size="large" className="portfolio-archive__description">
              Browse our {categoryName.toLowerCase()} projects. We deliver high-quality solutions tailored to specific industry needs.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Results Grid */}
      <Section spacing="xl" className="wp-bg-background">
        <Container>
          <div className="wp-grid-3-cols wp-gap-8" ref={containerRef}>
            {isLoading ? (
               Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="portfolio-skeleton-card">
                  <Skeleton height="var(--spacing-48)" className="wp-mb-4" variant="rectangular" />
                  <Skeleton width="60%" height="var(--spacing-6)" className="wp-mb-2" variant="text" />
                  <Skeleton width="100%" height="var(--spacing-4)" className="wp-mb-1" variant="text" />
                  <Skeleton width="100%" height="var(--spacing-4)" className="wp-mb-1" variant="text" />
                </div>
              ))
            ) : filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={item.id} style={itemStyle(index)}>
                  <PortfolioCard item={item} />
                </div>
              ))
            ) : (
              <div className="archive-empty-state archive-empty-state--col-span">
                <Paragraph>No projects found in this category.</Paragraph>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <ArchiveCTA ctaData={portfolioPageCTA} />

      <FAQSection
        title="Common Questions"
        description={`Frequently asked questions about our ${categoryName.toLowerCase()} services.`}
        faqs={portfolioFAQs.slice(0, 3)} 
      />

      <StickyBookCallButton />
    </>
  );
}