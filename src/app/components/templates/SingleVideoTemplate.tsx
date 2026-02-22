/**
 * Single Video Template
 *
 * WordPress template: templates/single-video.html
 * Single detail archetype for video content.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Clock, Calendar, Eye, Tag, Play } from 'lucide-react';
import { getVideoBySlug, getRelatedVideos, videoCategories, videos } from '../../data/videos';
import { videoFAQs } from '../../data/faqs';
import { Link } from 'react-router';


interface SingleVideoTemplateProps {
  slug?: string;
}

export function SingleVideoTemplate({ slug }: SingleVideoTemplateProps) {
  const video = slug ? getVideoBySlug(slug) : videos[0];
  const related = video ? getRelatedVideos(video.slug) : [];

  if (!video) {
    return (
      <Section spacing="lg">
        <Container>
          <Heading level={1}>Video Not Found</Heading>
          <Paragraph>The video you are looking for does not exist.</Paragraph>
        </Container>
      </Section>
    );
  }

  const cat = videoCategories.find(c => video.categories.includes(c.slug));

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Videos', href: '/videos' },
          { label: video.title },
        ]}
      />

      {/* Video Player */}
      <Section spacing="md">
        <Container>
          <div className="wp-max-w-6xl">
            <div className="single-video__player">
              <iframe
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="single-video__info">
              <h1 className="single-video__title">{video.title}</h1>

              <div className="single-video__meta-row">
                <span className="single-video__meta-item">
                  <Calendar size={14} />
                  {new Date(video.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="single-video__meta-item">
                  <Clock size={14} /> {video.duration}
                </span>
                <span className="single-video__meta-item">
                  <Eye size={14} /> {video.views.toLocaleString()} views
                </span>
                {cat && (
                  <Link
                    to={`/videos/category/${cat.slug}`}
                    className="video-archive__category"
                  >
                    {cat.name}
                  </Link>
                )}
              </div>

              <div className="single-video__tags">
                {video.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/videos/tag/${tag}`}
                    className="single-video__tag"
                  >
                    <Tag size={10} /> {tag}
                  </Link>
                ))}
              </div>

              <p className="single-video__description">{video.content || video.excerpt}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Videos */}
      {related.length > 0 && (
        <Section spacing="md" background="muted">
          <Container>
            <Heading level={2}>Related Videos</Heading>
            <div className="single-video__related-grid wp-mt-6">
              {related.map(rv => (
                <Link
                  key={rv.id}
                  to={`/video/${rv.slug}`}
                  className="video-archive__card"
                  aria-label={`Watch: ${rv.title}`}
                >
                  <div className="video-archive__thumbnail">
                    <img src={rv.featuredImage} alt={rv.title} loading="lazy" />
                    <div className="video-archive__play-overlay">
                      <div className="video-archive__play-icon">
                        <Play size={20} />
                      </div>
                    </div>
                    <span className="video-archive__duration">{rv.duration}</span>
                  </div>
                  <div className="video-archive__content">
                    <h3 className="video-archive__title">{rv.title}</h3>
                    <div className="video-archive__meta">
                      <span className="single-video__meta-item">
                        <Clock size={12} /> {rv.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <Section spacing="md">
        <Container>
          <FAQSection title="Video FAQ" faqs={videoFAQs} />
        </Container>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Need Custom Training?"
        description="We provide bespoke video training packages for teams adopting WordPress block themes."
        buttonText="Contact Us"
        buttonPage="contact"
        benefits={[
          'Tailored video training',
          'Block theme workshops',
          'Design system masterclasses',
          'WordPress FSE deep-dives',
          'Flexible scheduling'
        ]}
      />
    </>
  );
}