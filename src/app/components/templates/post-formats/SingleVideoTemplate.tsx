/**
 * Single Video Template
 * 
 * WordPress template: single-video.html
 * 
 * Displays a single video post with theater mode player.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { videoPost } from '@/app/data/posts-formats';
import { Calendar, User, Eye, ThumbsUp, Share2 } from 'lucide-react';
import '@/styles/blocks/post-formats/video.css';

export function SingleVideoTemplate() {
  const post = videoPost;

  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--background)]">
        <section className="py-4 border-b border-[var(--border-soft)]">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Videos', href: '/video-archive' },
                { label: post.title.rendered }
              ]}
            />
          </Container>
        </section>

        {/* Theater Mode Player */}
        <div className="wp-block-video-theater">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="wp-block-video-player group">
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <img 
                    src={post._embedded['wp:featuredmedia'][0].source_url} 
                    alt={post.title.rendered} 
                    className="wp-block-video-player__img"
                  />
                )}
                <div className="wp-block-video-player__overlay">
                  <div className="wp-block-video-player__play-btn">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Section spacing="md">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold mb-4">{post.title.rendered}</h1>
                  
                  <div className="wp-block-video-meta-bar">
                    <div className="wp-block-video-meta-bar__info">
                      1,234 views • {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="wp-block-video-meta-bar__actions">
                      <button className="wp-block-video-meta-bar__btn">
                        <ThumbsUp size={18} /> 128
                      </button>
                      <button className="wp-block-video-meta-bar__btn">
                        <Share2 size={18} /> Share
                      </button>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                  </div>
                </div>

                {/* Sidebar (Related) */}
                <div className="wp-block-video-sidebar">
                  <h3 className="wp-block-video-sidebar__title">Up Next</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="wp-block-video-related-item group">
                        <div className="wp-block-video-related-item__thumb">
                          <img 
                            src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80&auto=format&fit=crop`} 
                            className="wp-block-video-related-item__img" 
                            alt="Related" 
                          />
                        </div>
                        <div>
                          <h4 className="wp-block-video-related-item__title">
                            Advanced WordPress Customization
                          </h4>
                          <div className="wp-block-video-related-item__meta">
                            LightSpeed WP <br/>
                            3.4k views
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
