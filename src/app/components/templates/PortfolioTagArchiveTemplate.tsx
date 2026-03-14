import '../../../styles/templates/portfolio-tag-archive-optimized.css';
import { useParams, Navigate, Link } from 'react-router';
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
import { getPortfolioItemsByTag, portfolioArchiveItems } from '../../data/archive-items';
import { Skeleton } from '../blocks/layout/Skeleton';
import { useState, useEffect } from 'react';


export function PortfolioTagArchiveTemplate() {
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

  if (!slug) return <Navigate to="/portfolio" />;

  const filteredItems = getPortfolioItemsByTag(slug);
  
  // Format tag name from slug
  const tagName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  // Get all unique tags for the sidebar cloud
  const allTags = Array.from(new Set(portfolioArchiveItems.flatMap(item => item.tags))).sort();

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
          { label: 'Tags', href: '/portfolio' },
          { label: tagName },
        ]}
      />

      {/* Header */}
      <Section spacing="xl" className="portfolio-archive__header">
        <div className="portfolio-archive__gradient-overlay" aria-hidden="true" />
        <div className="portfolio-archive__orb" aria-hidden="true" />

        <Container className="portfolio-archive__header-container">
          <div className="portfolio-archive__header-content">
            <span className="portfolio-archive__badge">
              Tag
            </span>

            <Heading level={1} className="portfolio-archive__title">
              {tagName}
            </Heading>

            <Paragraph size="large" className="portfolio-archive__description">
              Projects tagged with <strong>{tagName}</strong>. Explore how we implement specific technologies and features.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Content Area with Sidebar */}
      <Section spacing="xl" className="wp-bg-background">
        <Container>
          <div className="portfolio-tag-archive__layout">
            
            {/* Main Content */}
            <div className="portfolio-tag-archive__main">
               <div className="wp-grid-2-cols wp-gap-8" ref={containerRef}>
                {isLoading ? (
                   Array.from({ length: 4 }).map((_, index) => (
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
                    <Paragraph>No projects found with this tag.</Paragraph>
                    <Link to="/portfolio" className="archive-empty-state__link">
                      View all projects
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="portfolio-tag-archive__sidebar">
              <div className="portfolio-tag-archive__sidebar-widget">
                <Heading level={3} className="wp-mb-4">All Tags</Heading>
                <div className="portfolio-tag-cloud">
                  {allTags.map(tag => {
                    const isActive = tag.toLowerCase() === tagName.toLowerCase();
                    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link 
                        key={tag} 
                        to={`/work/tag/${tagSlug}`}
                        className={`portfolio-tag-cloud__item ${isActive ? 'portfolio-tag-cloud__item--active' : ''}`}
                      >
                        {tag}
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <div className="portfolio-tag-archive__sidebar-widget wp-mt-8">
                 <Heading level={3} className="wp-mb-4">Need Help?</Heading>
                 <Paragraph className="portfolio-tag-archive__sidebar-desc">
                   Looking for a specific solution? Our team specializes in custom WordPress development.
                 </Paragraph>
                 <Link to="/contact" className="wp-button wp-button--primary wp-w-full wp-justify-center">
                   Contact Us
                 </Link>
              </div>
            </aside>

          </div>
        </Container>
      </Section>

      <ArchiveCTA ctaData={portfolioPageCTA} />

      <FAQSection
        title="Common Questions"
        description="Frequently asked questions about our services."
        faqs={portfolioFAQs.slice(0, 3)} 
      />

      <StickyBookCallButton />
    </>
  );
}