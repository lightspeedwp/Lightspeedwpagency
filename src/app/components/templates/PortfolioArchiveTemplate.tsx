/**
 * Portfolio Archive Template - Funky Redesign
 *
 * Theme: "The Gallery" (Spotlight / Masonry)
 *
 * Features:
 * - Spotlight Header with floating orb
 * - Interactive Filter Bar (Sticky)
 * - 3 view modes: Grid-3 "Polaroid", Grid-2 "Spotlight", List "Editorial"
 * - FunkyCTA for conversion
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/portfolio-archive.css
 * - Colors mapped to global semantic tokens for auto light/dark
 */

/* Route-level CSS */
import '../../../styles/templates/portfolio-archive-optimized.css';

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ViewSwitcher, type ViewMode } from '../common/ViewSwitcher';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { StatsGrid } from '../patterns/StatsGrid';
import { ContentStatsWidget } from '../patterns/ContentStatsWidget';
import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';
import { Skeleton } from '../blocks/layout/Skeleton';
import { TaxonomyFilter } from '../common/TaxonomyFilter';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import { useState, useEffect } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { portfolioFAQs } from '../../data/faqs';
import { clientLogos } from '../../data/logos';
import { portfolioPageCTA } from '../../data/cta';
import { portfolioArchiveItems, type PortfolioArchiveItem } from '../../data/archive-items';

/* ─────────────────────────────────────────────
   CARD COMPONENTS — one per view mode
   ───────────────────────────────────────────── */

/** 3-col "Polaroid" — compact, image-heavy, tilt hover */
function PolaroidCard({ item }: { item: PortfolioArchiveItem }) {
  return (
    <Link
      to={slugToPath(`portfolio-single-${item.slug}`)}
      className="pf-polaroid"
      aria-label={`View ${item.title} project`}
    >
      <article className="pf-polaroid__wrap">
        <div className="pf-polaroid__img-box">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="pf-polaroid__img"
            loading="lazy"
          />
          <span className="pf-polaroid__badge">{item.category}</span>
        </div>
        <div className="pf-polaroid__body">
          <h3 className="pf-polaroid__title">{item.title}</h3>
          <p className="pf-polaroid__excerpt">{item.excerpt}</p>
          <div className="pf-polaroid__tags">
            {item.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="pf-polaroid__tag">{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

/** 2-col "Spotlight" — full-bleed image, glassmorphism content overlay */
function SpotlightCard({ item }: { item: PortfolioArchiveItem }) {
  return (
    <Link
      to={slugToPath(`portfolio-single-${item.slug}`)}
      className="pf-spotlight"
      aria-label={`View ${item.title} project`}
    >
      <article className="pf-spotlight__wrap">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="pf-spotlight__img"
          loading="lazy"
        />
        <div className="pf-spotlight__scrim" aria-hidden="true" />
        <span className="pf-spotlight__badge">{item.category}</span>

        <div className="pf-spotlight__content">
          <h3 className="pf-spotlight__title">{item.title}</h3>
          <p className="pf-spotlight__excerpt">{item.excerpt}</p>
          <div className="pf-spotlight__footer">
            <div className="pf-spotlight__tags">
              {item.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="pf-spotlight__tag">{tag}</span>
              ))}
            </div>
            <span className="pf-spotlight__arrow" aria-hidden="true">
              <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/** 1-col "Editorial" — horizontal image + content with neon accent */
function EditorialCard({ item }: { item: PortfolioArchiveItem }) {
  return (
    <Link
      to={slugToPath(`portfolio-single-${item.slug}`)}
      className="pf-editorial"
      aria-label={`View ${item.title} project`}
    >
      <article className="pf-editorial__wrap">
        <div className="pf-editorial__img-box">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="pf-editorial__img"
            loading="lazy"
          />
          <span className="pf-editorial__accent" aria-hidden="true" />
        </div>
        <div className="pf-editorial__body">
          <span className="pf-editorial__badge">{item.category}</span>
          <h3 className="pf-editorial__title">{item.title}</h3>
          <p className="pf-editorial__excerpt">{item.excerpt}</p>
          <div className="pf-editorial__tags">
            {item.tags.map((tag) => (
              <span key={tag} className="pf-editorial__tag">{tag}</span>
            ))}
          </div>
          <span className="pf-editorial__cta">
            View case study <ArrowRight size={14} />
          </span>
        </div>
      </article>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   MAIN TEMPLATE
   ───────────────────────────────────────────── */

export function PortfolioArchiveTemplate() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('grid-3');

  const { containerRef, itemStyle } = useStaggerReveal({
    stagger: 100,
    animation: 'fade-up',
    duration: 600,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const portfolioItems = portfolioArchiveItems;

  const categories = ['All', ...Array.from(new Set(portfolioItems.map((i) => i.category)))];

  const categoryOptions = categories.map((cat) => ({
    id: cat,
    label: cat,
    count:
      cat === 'All'
        ? portfolioItems.length
        : portfolioItems.filter((p) => p.category === cat).length,
  }));

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  /** Pick the right card component for the current view */
  const CardComponent =
    viewMode === 'grid-3'
      ? PolaroidCard
      : viewMode === 'grid-2'
        ? SpotlightCard
        : EditorialCard;

  const gridClass =
    viewMode === 'grid-3'
      ? 'portfolio-archive__grid--cols-3'
      : viewMode === 'grid-2'
        ? 'portfolio-archive__grid--cols-2'
        : 'portfolio-archive__grid--cols-1';

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[{ label: 'Home', page: 'front-page' }, { label: 'Portfolio' }]}
      />

      {/* Archive Header */}
      <Section spacing="xl" className="portfolio-archive__header">
        <div className="portfolio-archive__orb" aria-hidden="true" />
        <Container>
          <div className="portfolio-archive__header-content">
            <span className="portfolio-archive__badge">Our Work</span>

            <Heading level={1} className="portfolio-archive__title">
              Portfolio
            </Heading>

            <Paragraph size="large" className="portfolio-archive__description">
              Explore our collection of successful WordPress and WooCommerce projects.
              From simple websites to complex enterprise solutions.
            </Paragraph>

            <StatsGrid
              stats={[
                { number: '150+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '15+', label: 'Industries Served' }
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* Filter Bar + View Switcher */}
      <section className="portfolio-archive__filter-section">
        <Container>
          <TaxonomyFilter
            title="Filter Projects"
            options={categoryOptions}
            selectedValues={[selectedCategory]}
            onChange={(values) => setSelectedCategory(values[0])}
            multiple={false}
            resultCount={filteredItems.length}
            resultLabel={filteredItems.length === 1 ? 'project' : 'projects'}
            sortOptions={[
              { id: 'recent', label: 'Most Recent' },
              { id: 'popular', label: 'Popular' },
              { id: 'featured', label: 'Featured' },
            ]}
            currentSort="recent"
            onSortChange={(sort) => console.log('Sort:', sort)}
          />

          <div className="portfolio-archive__toolbar">
            <span className="portfolio-archive__result-count">
              Showing <strong>{filteredItems.length}</strong>{' '}
              {filteredItems.length === 1 ? 'project' : 'projects'}
            </span>
            <ViewSwitcher value={viewMode} onChange={setViewMode} />
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <div
            className={`portfolio-archive__grid ${gridClass}`}
            ref={containerRef}
          >
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="portfolio-skeleton-card">
                    <Skeleton
                      height="var(--spacing-48)"
                      className="wp-mb-4"
                      variant="rectangular"
                    />
                    <Skeleton
                      width="60%"
                      height="var(--spacing-6)"
                      className="wp-mb-2"
                      variant="text"
                    />
                    <Skeleton
                      width="100%"
                      height="var(--spacing-4)"
                      className="wp-mb-1"
                      variant="text"
                    />
                    <Skeleton
                      width="80%"
                      height="var(--spacing-4)"
                      className="wp-mb-4"
                      variant="text"
                    />
                    <div className="portfolio-skeleton-tags">
                      <Skeleton
                        width="var(--spacing-16)"
                        height="var(--spacing-6)"
                        variant="rectangular"
                      />
                      <Skeleton
                        width="var(--spacing-20)"
                        height="var(--spacing-6)"
                        variant="rectangular"
                      />
                    </div>
                  </div>
                ))
              : filteredItems.map((item, index) => (
                  <div key={item.id} style={itemStyle(index)}>
                    <CardComponent item={item} />
                  </div>
                ))}
          </div>
        </Container>
      </Section>

      {/* Funky CTA */}
      <FunkyCTA
        title={portfolioPageCTA.title}
        description={portfolioPageCTA.description}
        buttonText={portfolioPageCTA.primaryButtonText}
        buttonPage={portfolioPageCTA.primaryButtonPage}
        benefits={[
          'Custom WordPress Development',
          'Performance & Speed Optimization',
          'SEO-Ready Architecture',
          'Secure & Scalable Solutions',
        ]}
      />

      {/* Social Proof */}
      <SocialProof
        title="Trusted by Leading Brands"
        description="Our portfolio showcases projects for some of the most respected companies in their industries."
        logos={clientLogos}
      />

      {/* FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Have questions about our portfolio or services? Find answers to common questions below."
        faqs={portfolioFAQs}
      />

      {/* Portfolio Stats Widget */}
      <Section spacing="lg">
        <Container>
          <ContentStatsWidget include={['portfolio', 'clients', 'experience', 'testimonials']} />
        </Container>
      </Section>

      <StickyBookCallButton />
    </>
  );
}