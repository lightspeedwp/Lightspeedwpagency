/**
 * Aside Stream Template
 * 
 * WordPress template: archive-aside.html (stream variant)
 * 
 * Displays a timeline stream of aside posts (status updates, quick notes).
 * 100% CSS variables — no Tailwind.
 * BEM naming: .aside-stream-*
 * 
 * @see /src/styles/blocks/post-formats/aside-stream.css
 * @see /src/styles/templates/archive.css
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { MessageSquare, Hash, Share2, MoreHorizontal } from 'lucide-react';
import '@/styles/blocks/post-formats/aside-stream.css';
import '@/styles/templates/archive.css';

export function AsideStreamTemplate() {
  const asidePosts = allPosts.filter(post => post.format === 'aside');
  
  const streamPosts = asidePosts.length < 3 
    ? [...asidePosts, ...asidePosts, ...asidePosts].map((p, i) => ({ ...p, id: 1000 + i })) 
    : asidePosts;

  return (
    <>
      {/* Breadcrumbs */}
      <section className="archive-breadcrumbs">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Status Updates', href: '/blog/format/aside-stream' }
            ]}
          />
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <div className="wp-max-w-2xl wp-mx-auto">
            <header className="aside-stream__header">
              <h1 className="aside-stream__title">
                <span className="aside-stream__title-icon">
                  <Hash size={18} />
                </span>
                Team Updates
              </h1>
              <span className="aside-stream__badge">Live Stream</span>
            </header>

            <div className="aside-stream__timeline">
              {streamPosts.map((post, index) => (
                <article key={post.id} className="aside-stream__item">
                  {/* Timeline Dot */}
                  <div className="aside-stream__marker" />

                  <div className="aside-stream__card">
                    <div className="aside-stream__card-header">
                      <div className="aside-stream__author">
                        <div className="aside-stream__avatar">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
                            alt="Author avatar" 
                          />
                        </div>
                        <div>
                          <div className="aside-stream__author-name">Ash Shaw</div>
                          <div className="aside-stream__author-time">
                            {index === 0 ? '2 hours ago' : index === 1 ? 'Yesterday' : '2 days ago'}
                          </div>
                        </div>
                      </div>
                      <button 
                        className="aside-stream__more-btn"
                        aria-label="More options"
                      >
                        <MoreHorizontal size={20} />
                      </button>
                    </div>

                    <div 
                      className="aside-stream__card-body"
                      dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />

                    <div className="aside-stream__card-actions">
                      <button className="aside-stream__action-btn" aria-label="Comment">
                        <MessageSquare size={18} />
                        <span>Comment</span>
                      </button>
                      <button className="aside-stream__action-btn" aria-label="Share">
                        <Share2 size={18} />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
