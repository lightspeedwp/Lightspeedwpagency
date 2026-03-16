/**
 * Podcast Category Archive Template
 *
 * WordPress template: templates/archive-podcast_category.html
 * Content hub archetype for podcast category archives.
 *
 * Pattern order: Breadcrumbs -> Category Header -> Podcast List -> FAQs -> CTA
 *
 * @see /guidelines/templates/overview-templates.md
 */

import '../../../styles/templates/podcast-archive-optimized.css';
import { Link, Navigate, useParams } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Badge } from '../blocks/design/Badge';
import { Headphones, Clock, Calendar } from '@phosphor-icons/react';
import { getPodcastsByCategory, podcastCategories } from '../../data/podcasts';
import { podcastFAQs } from '../../data/faqs';


export function PodcastCategoryArchiveTemplate() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to={getPageUrl('podcasts')} />;

  const category = podcastCategories.find(c => c.slug === slug);
  const episodes = getPodcastsByCategory(slug);
  const categoryName = category?.name || slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Podcasts', href: '/podcasts' },
          { label: categoryName },
        ]}
      />

      {/* Category Header */}
      <Section spacing="lg" className="archive-header">
        <Container>
          <div className="archive-header__content">
            <Badge variant="secondary">Podcast Category</Badge>
            <Heading level={1} className="archive-header__title">
              {categoryName}
            </Heading>
            {category?.description && (
              <Paragraph className="archive-header__description">
                {category.description}
              </Paragraph>
            )}
            <Paragraph className="archive-controls__count wp-mt-4">
              {episodes.length} {episodes.length === 1 ? 'episode' : 'episodes'}
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Category navigation */}
      <Section spacing="sm" className="wp-border-b wp-border-border-soft">
        <Container>
          <nav className="archive-category-nav" aria-label="Podcast categories">
            <div className="archive-category-nav__list">
              <Link
                to={getPageUrl('podcasts')}
                className="archive-category-nav__item"
              >
                All episodes
              </Link>
              {podcastCategories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/podcasts/category/${cat.slug}`}
                  className={`archive-category-nav__item ${cat.slug === slug ? 'archive-category-nav__item--active' : ''}`}
                  aria-current={cat.slug === slug ? 'page' : undefined}
                >
                  {cat.name}
                  <span className="archive-category-nav__count">{cat.count}</span>
                </Link>
              ))}
            </div>
          </nav>
        </Container>
      </Section>

      {/* Podcast List */}
      <Section spacing="xl">
        <Container>
          {episodes.length > 0 ? (
            <div className="podcast-archive__list">
              {episodes.map(episode => (
                <Link
                  key={episode.id}
                  to={`/podcast/${episode.slug}`}
                  className="podcast-archive__card"
                >
                  <div className="podcast-archive__card-icon">
                    <Headphones size={24} />
                  </div>
                  <div className="podcast-archive__card-content">
                    <div className="podcast-archive__card-badges">
                      <span className="podcast-archive__badge">
                        S{episode.season} E{episode.episode}
                      </span>
                    </div>
                    <h3 className="podcast-archive__card-title">{episode.title}</h3>
                    <p className="podcast-archive__card-excerpt">{episode.excerpt}</p>
                    <div className="podcast-archive__card-meta">
                      <span className="podcast-archive__meta-item">
                        <Calendar size={14} />
                        {new Date(episode.date).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric'
                        })}
                      </span>
                      <span className="podcast-archive__meta-item">
                        <Clock size={14} />
                        {episode.duration}
                      </span>
                      <span className="podcast-archive__meta-item">
                        <Headphones size={14} />
                        {episode.listens.toLocaleString()} listens
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="blog-index__empty">
              <Heading level={3}>No episodes found</Heading>
              <Paragraph>
                No episodes in this category yet.{' '}
                <Link to={getPageUrl('podcasts')} className="blog-index__empty-link">View all episodes</Link>
              </Paragraph>
            </div>
          )}
        </Container>
      </Section>

      {/* FAQs */}
      <FAQSection
        title="Podcast questions"
        description={`Common questions about our ${categoryName.toLowerCase()} episodes.`}
        faqs={podcastFAQs.slice(0, 3)}
      />

      {/* CTA */}
      <FunkyCTA
        title="Subscribe to the Podcast"
        description="Never miss an episode. Available on Apple Podcasts, Spotify, and Google Podcasts."
        buttonText="Browse All Episodes"
        buttonHref="/podcasts"
        benefits={[
          'Weekly new episodes',
          'Expert guest interviews',
          'WordPress development insights',
          'Design system discussions',
          'Available on all platforms'
        ]}
      />
    </>
  );
}