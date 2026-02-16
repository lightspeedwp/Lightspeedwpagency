/**
 * Video Category Archive Template
 *
 * WordPress template: templates/taxonomy-video_category.html
 * Taxonomy archive archetype filtering videos by category.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Play, Clock, Eye, Calendar } from 'lucide-react';
import { getVideosByCategory, getVideoCategoryBySlug, videoCategories, videos } from '../../data/videos';
import { videoFAQs } from '../../data/faqs';
import { useNavigation } from '../../contexts/NavigationContext';
import '@/styles/templates/video-archive.css';

interface Props { category?: string; }

export function VideoCategoryArchiveTemplate({ category }: Props) {
  const { navigateTo } = useNavigation();
  const cat = category ? getVideoCategoryBySlug(category) : videoCategories[0];
  const filtered = category ? getVideosByCategory(category) : videos;

  return (
    <>
      <section style={{ padding: 'var(--spacing-4) 0' }}>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', page: 'front-page' },
              { label: 'Videos', page: 'videos' },
              { label: cat?.name || 'Category' }
            ]}
          />
        </Container>
      </section>

      <Section spacing="md">
        <Container>
          <div className="wp-max-w-4xl">
            <Heading level={1}>{cat?.name || 'Video Category'}</Heading>
            {cat?.description && <Paragraph>{cat.description}</Paragraph>}
            <Paragraph style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-small)', fontFamily: 'var(--font-secondary)' }}>
              Number of results: <strong style={{ color: 'var(--foreground)' }}>{filtered.length}</strong>
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="video-archive__grid">
            {filtered.map(video => (
              <article
                key={video.id}
                className="video-archive__card"
                onClick={() => navigateTo(`/video/${video.slug}`)}
                tabIndex={0}
                role="link"
                onKeyDown={e => e.key === 'Enter' && navigateTo(`/video/${video.slug}`)}
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
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-12) 0' }}>
              <Paragraph>No videos found in this category.</Paragraph>
            </div>
          )}
        </Container>
      </Section>

      <Section spacing="md" background="muted">
        <Container>
          <FAQSection title="Video FAQ" faqs={videoFAQs} />
        </Container>
      </Section>

      <CTASection
        title="Subscribe to Our Video Channel"
        description="Get notified when we publish new tutorials, webinars, and case studies."
        primaryButtonText="Contact Us"
        primaryButtonPage="contact"
      />
    </>
  );
}