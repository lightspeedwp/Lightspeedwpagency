/**
 * Video Tag Archive Template
 *
 * WordPress template: templates/archive-video_tag.html
 * Content hub archetype for video tag archives.
 *
 * Pattern order: Breadcrumbs -> Tag Header -> Video Grid -> FAQs -> CTA
 *
 * @see /guidelines/templates/overview-templates.md
 */

import '../../../styles/templates/video-archive-optimized.css';
import { useParams, Navigate, Link } from 'react-router';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Badge } from '../blocks/design/Badge';
import { Play, Clock, Eye, Calendar } from '@phosphor-icons/react';
import { getVideosByTag, videoTags } from '../../data/videos';
import { videoFAQs } from '../../data/faqs';


export function VideoTagArchiveTemplate() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/videos" />;

  const tagData = videoTags.find(t => t.slug === slug);
  const taggedVideos = getVideosByTag(slug);
  const tagName = tagData?.name || slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  /** All tags for the tag cloud */
  const allTags = videoTags;

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Videos', href: '/videos' },
          { label: `Tag: ${tagName}` },
        ]}
      />

      {/* Tag Header */}
      <Section spacing="lg" className="archive-header">
        <Container>
          <div className="wp-max-w-3xl wp-mx-auto wp-text-center">
            <Badge variant="secondary">Video Tag</Badge>
            <Heading level={1} className="archive-header__title">
              {tagName}
            </Heading>
            <Paragraph className="archive-header__description">
              Videos tagged with <strong>{tagName}</strong>. Explore tutorials, webinars, and case studies.
            </Paragraph>
            <Paragraph className="archive-controls__count" style={{ marginTop: 'var(--spacing-4)' }}>
              {taggedVideos.length} {taggedVideos.length === 1 ? 'video' : 'videos'}
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Tag cloud navigation */}
      <Section spacing="sm" style={{ borderBottom: '1px solid var(--border-soft)' }}>
        <Container>
          <nav className="archive-category-nav" aria-label="Video tags">
            <div className="archive-category-nav__list">
              <Link to="/videos" className="archive-category-nav__item">
                All videos
              </Link>
              {allTags.map(tag => (
                <Link
                  key={tag.slug}
                  to={`/videos/tag/${tag.slug}`}
                  className={`archive-category-nav__item ${tag.slug === slug ? 'archive-category-nav__item--active' : ''}`}
                  aria-current={tag.slug === slug ? 'page' : undefined}
                >
                  {tag.name}
                  <span className="archive-category-nav__count">{tag.count}</span>
                </Link>
              ))}
            </div>
          </nav>
        </Container>
      </Section>

      {/* Video Grid */}
      <Section spacing="xl">
        <Container>
          {taggedVideos.length > 0 ? (
            <div className="video-archive__grid">
              {taggedVideos.map(video => (
                <Link
                  key={video.id}
                  to={`/video/${video.slug}`}
                  className="video-archive__card"
                >
                  <div className="video-archive__thumbnail">
                    <img
                      src={video.featuredImage}
                      alt={video.title}
                      className="video-archive__thumbnail-img"
                      loading="lazy"
                    />
                    <div className="video-archive__play-overlay">
                      <Play size={32} />
                    </div>
                    <span className="video-archive__duration-badge">
                      {video.duration}
                    </span>
                  </div>
                  <div className="video-archive__card-content">
                    <h3 className="video-archive__card-title">{video.title}</h3>
                    <p className="video-archive__card-excerpt">{video.excerpt}</p>
                    <div className="video-archive__card-meta">
                      <span className="video-archive__meta-item">
                        <Calendar size={14} />
                        {new Date(video.date).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric'
                        })}
                      </span>
                      <span className="video-archive__meta-item">
                        <Eye size={14} />
                        {video.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="blog-index__empty">
              <Heading level={3}>No videos found</Heading>
              <Paragraph>
                No videos tagged with "{tagName}" yet.{' '}
                <Link to="/videos" className="blog-index__empty-link">View all videos</Link>
              </Paragraph>
            </div>
          )}
        </Container>
      </Section>

      {/* FAQs */}
      <FAQSection
        title="Video questions"
        description={`Common questions about our ${tagName.toLowerCase()} videos.`}
        faqs={videoFAQs.slice(0, 3)}
      />

      {/* CTA */}
      <FunkyCTA
        title="Learn with Video"
        description="Explore our complete video library for WordPress development tutorials and webinars."
        buttonText="Browse All Videos"
        buttonHref="/videos"
        benefits={[
          'Step-by-step tutorials',
          'Live webinar recordings',
          'Client case study walkthroughs',
          'Design system deep-dives',
          'Performance optimisation guides'
        ]}
      />
    </>
  );
}