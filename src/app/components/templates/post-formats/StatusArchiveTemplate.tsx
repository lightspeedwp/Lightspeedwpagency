/**
 * Status Archive Template
 * 
 * WordPress template: archive-status.html
 * 
 * Displays a feed of status updates.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-status-*, .status-archive__*
 * 
 * @see /src/styles/blocks/post-formats/status.css
 * @see /src/styles/templates/archive.css
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Activity, MessageSquare, Heart, Share2 } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';
import '@/styles/blocks/post-formats/status.css';
import '@/styles/templates/archive.css';

export function StatusArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const statusPosts = allPosts.filter(post => post.format === 'status');
  const posts = [...statusPosts, ...statusPosts, ...statusPosts];

  return (
    <>
      <section className="archive-breadcrumbs">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Status Updates', href: '/blog/format/status' }
            ]}
          />
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <div className="wp-max-w-2xl wp-mx-auto">
            <header className="status-archive__header">
              <h1 className="status-archive__title">
                <Activity size={24} />
                Status Feed
              </h1>
            </header>

            <div className="status-archive__feed">
              {posts.map((post, index) => (
                <article 
                  key={`${post.id}-${index}`} 
                  className="wp-block-status-card"
                  onClick={() => navigateTo('status-single')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo('status-single'); } }}
                >
                  <div className="wp-block-status-card__header">
                    <div className="wp-block-status-card__avatar" />
                    <div className="wp-block-status-card__meta">
                      <div className="status-archive__top-row">
                        <div className="wp-block-status-card__author">
                          LightSpeed Team
                          <span className="wp-block-status-card__handle">@lightspeedwp</span>
                        </div>
                        <span className="wp-block-status-card__time">2h</span>
                      </div>
                      <div 
                        className="wp-block-status-card__content"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
                      />
                      <div className="wp-block-status-card__footer">
                        <button className="wp-block-status-card__action">
                          <MessageSquare size={18} />
                          <span>12</span>
                        </button>
                        <button className="wp-block-status-card__action wp-block-status-card__action--like">
                          <Heart size={18} />
                          <span>45</span>
                        </button>
                        <button className="wp-block-status-card__action wp-block-status-card__action--share">
                          <Share2 size={18} />
                          <span>Share</span>
                        </button>
                      </div>
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
