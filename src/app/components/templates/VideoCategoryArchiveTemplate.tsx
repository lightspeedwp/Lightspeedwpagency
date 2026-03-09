/**
 * Video Category Archive Template
 *
 * WordPress template: templates/archive-video_category.html
 * Category archive for video post format
 */

import '../../../styles/templates/video-archive-optimized.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Play, Clock, Eye, Calendar } from '@phosphor-icons/react';
import { getVideosByCategory, getVideoCategoryBySlug, videoCategories, videos } from '../../data/videos';
import { videoFAQs } from '../../data/faqs';
import { Link } from 'react-router';


interface Props { category?: string; }

export function VideoCategoryArchiveTemplate({ category }: Props) {
  const cat = category ? getVideoCategoryBySlug(category) : videoCategories[0];
  const filtered = category ? getVideosByCategory(category) : videos;

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Videos', href: '/videos' },
          { label: cat?.name || 'Category' },
        ]}
      />

      <Section spacing="md">
        <Container>
          <div className="wp-max-w-4xl">
            <Heading level={1}>{cat?.name || 'Video Category'}</Heading>
            {cat?.description && <Paragraph>{cat.description}</Paragraph>}
            <Paragraph className="wp-text-muted-foreground wp-text-sm wp-font-secondary">
              Number of results: <strong className="wp-text-foreground">{filtered.length}</strong>
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="video-archive__grid">
            {filtered.map(video => (
              <Link
                key={video.id}
                to={`/video/${video.slug}`}
                className="video-archive__card"
                aria-label={`Watch: ${video.title}`}
              >
                <div className="video-archive__thumbnail">
                  <img src={video.featuredImage} alt={video.title} loading="lazy" />
                  <div className="video-archive__play-overlay">
                    <div className="video-archive__play-icon"><Play size={24} /></div>
                  </div>
                  <span className="video-archive__duration">{video.duration}</span>
                </div>
                <div className="video-archive__content">
                  <h2 className="video-archive__title">{video.title}</h2>
                  <p className="video-archive__excerpt">{video.excerpt}</p>
                  <div className="video-archive__meta">
                    <span className="single-video__meta-item"><Calendar size={12} /> {new Date(video.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="single-video__meta-item"><Eye size={12} /> {video.views.toLocaleString()} views</span>
                  </div>
                </div>
              </Link>
            ))}
            {filtered.length === 0 && (
              <div className="wp-text-center wp-py-12">
                <Paragraph>No videos found in this category.</Paragraph>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section spacing="md" background="muted">
        <Container>
          <FAQSection title="Video FAQ" faqs={videoFAQs} />
        </Container>
      </Section>

      <FunkyCTA
        title="Subscribe to Our Video Channel"
        description="Get notified when we publish new tutorials, webinars, and case studies."
        buttonText="Contact Us"
        buttonPage="contact"
        benefits={[
          'New tutorial alerts',
          'Webinar invitations',
          'Case study deep-dives',
          'Behind-the-scenes content',
          'Early access to courses'
        ]}
      />
    </>
  );
}