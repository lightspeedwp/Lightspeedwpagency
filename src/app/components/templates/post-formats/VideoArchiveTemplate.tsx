/**
 * Video Archive Template
 * 
 * WordPress template: archive-video.html
 * 
 * Displays a grid of video posts.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-video-*
 * 
 * @see /src/styles/blocks/post-formats/video.css
 * @see /src/styles/sections/media-grid.css
 * @see /src/styles/templates/archive.css
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Play, Clock, Eye } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';
import '@/styles/blocks/post-formats/video.css';
import '@/styles/sections/media-grid.css';
import '@/styles/templates/archive.css';

export function VideoArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const videoPosts = allPosts.filter(post => post.format === 'video');
  // Duplicate for visual effect
  const posts = [...videoPosts, ...videoPosts, ...videoPosts, ...videoPosts];

  return (
    <>
      <section className="archive-breadcrumbs">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Video Library', href: '/blog/format/video' }
            ]}
          />
        </Container>
      </section>

      <Section spacing="lg" sectionStyle="dark">
        <Container>
          <header className="archive-header">
            <h1 className="archive-header__title">Video Library</h1>
            <p className="archive-header__description">Master WordPress with our step-by-step guides.</p>
          </header>

          <div className="wp-section-media-grid">
            {posts.map((post, index) => (
              <article 
                key={`${post.id}-${index}`} 
                className="wp-block-video-card"
                onClick={() => navigateTo('video-single')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo('video-single'); } }}
              >
                <div className="wp-block-video-card__thumb">
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered} 
                      className="wp-block-video-card__img"
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
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}