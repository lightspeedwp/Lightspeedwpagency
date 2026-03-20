/**
 * Single Video Template
 * 
 * WordPress template: single-video.html
 * 
 * Displays a single video post with theater mode player.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-video-*, .single-video__*
 * 
 * @see /src/styles/blocks/post-formats/video.css
 * @see /src/styles/templates/single-post.css
 */

import '../../../../styles/templates/single-post.css';
import '../../../../styles/templates/single-video.css';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { videoPost } from '@/app/data/posts-formats';
import { ThumbsUp, ShareNetwork as Share2 } from '@phosphor-icons/react';

export function SingleVideoTemplate() {
  const post = videoPost;

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Video', href: '/video-archive' },
          { label: post.title.rendered },
        ]}
      />

      <article>
        {/* Theater Mode Player */}
        <div className="wp-block-video-theater">
          <Container>
            <div className="wp-max-w-5xl wp-mx-auto">
              <div className="wp-block-video-player">
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
            <div className="wp-max-w-5xl wp-mx-auto">
              <div className="single-video__layout">
                <div>
                  <h1 className="single-video__title">{post.title.rendered}</h1>
                  
                  <div className="wp-block-video-meta-bar">
                    <div className="wp-block-video-meta-bar__info">
                      1,234 views &bull; {new Date(post.date).toLocaleDateString()}
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

                  <div className="single-post-body">
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                  </div>
                </div>

                {/* Sidebar (Related) */}
                <div className="wp-block-video-sidebar">
                  <h3 className="wp-block-video-sidebar__title">Up next</h3>
                  <div className="single-video__related-list">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="wp-block-video-related-item">
                        <div className="wp-block-video-related-item__thumb">
                          <img 
                            src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80&auto=format&fit=crop`} 
                            className="wp-block-video-related-item__img" 
                            alt={`Related video: Advanced WordPress customization part ${i}`}
                            loading="lazy"
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
      </article>
    </>
  );
}