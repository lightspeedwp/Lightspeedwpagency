/**
 * Video Archive Template
 * 
 * WordPress template: archive-video.html
 * 
 * Displays a grid of video posts.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Play, Clock, Eye } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';
import '@/styles/blocks/post-formats/video.css';
import '@/styles/sections/media-grid.css';

export function VideoArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const videoPosts = allPosts.filter(post => post.format === 'video');
  // Duplicate for visual effect
  const posts = [...videoPosts, ...videoPosts, ...videoPosts, ...videoPosts];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-4 border-b border-[var(--border-soft)]">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Video Library', href: '/video-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg" style={{ backgroundColor: '#09090b', color: '#ffffff', minHeight: '50vh' }}>
          <Container>
            <header className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Video Library</h1>
              <p className="text-xl text-gray-400">Master WordPress with our step-by-step guides.</p>
            </header>

            <div className="wp-section-media-grid">
              {posts.map((post, index) => (
                <article 
                  key={`${post.id}-${index}`} 
                  className="wp-block-video-card group"
                  onClick={() => navigateTo('video-single')}
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
                        <Play size={24} fill="currentColor" className="ml-1" />
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
      </main>
      <SiteFooter />
    </>
  );
}
