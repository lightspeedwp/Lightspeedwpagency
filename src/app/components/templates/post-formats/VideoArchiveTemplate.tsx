/**
 * Video Archive Template
 *
 * WordPress template: templates/archive-video.html
 * Video post format archive template.
 *
 * Pattern order: Breadcrumbs -> Archive Header -> Video Grid -> FAQs -> CTA
 *
 * @see /guidelines/templates/overview-templates.md
 */

import '../../../../styles/templates/video-archive-optimized.css';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { allPosts } from '@/app/data/posts-formats';
import { Play, Clock, Eye } from '@phosphor-icons/react';
import { Link } from 'react-router';

export function VideoArchiveTemplate() {
  const videoPosts = allPosts.filter(post => post.format === 'video');
  // Duplicate for visual effect
  const posts = [...videoPosts, ...videoPosts, ...videoPosts, ...videoPosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Video' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <header className="archive-header">
            <h1 className="archive-header__title">Video Library</h1>
            <p className="archive-header__description">Master WordPress with our step-by-step guides.</p>
          </header>

          <div className="wp-section-media-grid">
            {posts.map((post, index) => (
              <Link 
                key={`${post.id}-${index}`}
                to="#"
                className="wp-block-video-card"
              >
                <div className="wp-block-video-card__thumb">
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered} 
                      className="wp-block-video-card__img"
                      loading="lazy"
                    />
                  )}
                  <div className="wp-block-video-card__overlay">
                    <div className="wp-block-video-card__play-btn">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                  <div className="wp-block-video-card__duration">
                    {post.meta?.find(m => m.key === 'video_duration')?.value || '10:00'}
                  </div>
                </div>
                <div>
                  <h2 className="wp-block-video-card__title">
                    {post.title.rendered}
                  </h2>
                  <div className="wp-block-video-card__meta">
                    <span className="wp-block-video-card__meta-item"><Clock size={12} /> 2 days ago</span>
                    <span className="wp-block-video-card__meta-item"><Eye size={12} /> 1.2k views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}