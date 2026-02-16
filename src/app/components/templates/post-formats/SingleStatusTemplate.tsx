/**
 * Single Status Template
 * 
 * WordPress template: single-status.html
 * 
 * Displays a single status update.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-status-*, .status-single__*
 * 
 * @see /src/styles/blocks/post-formats/status.css
 * @see /src/styles/templates/single-post.css
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { statusPost } from '@/app/data/posts-formats';
import { MessageSquare, Heart, Share2 } from 'lucide-react';
import '@/styles/blocks/post-formats/status.css';
import '@/styles/templates/single-post.css';

export function SingleStatusTemplate() {
  const post = statusPost;

  return (
    <>
      <section className="single-post-breadcrumbs">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Status Updates', href: '/blog/format/status' },
              { label: 'Status' }
            ]}
          />
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <div className="wp-block-status-single">
            <article className="wp-block-status-card">
              <div className="wp-block-status-card__header">
                <div className="wp-block-status-card__avatar" />
                <div className="wp-block-status-card__meta">
                  <div className="wp-block-status-card__author">
                    LightSpeed Team
                  </div>
                  <div className="wp-block-status-card__handle">@lightspeedwp</div>
                </div>
              </div>
              
              <div 
                className="wp-block-status-card__content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
              />
              
              <div className="wp-block-status-card__time status-single__timestamp">
                9:15 AM &middot; Dec 11, 2023
              </div>

              <div className="status-single__actions">
                <button className="wp-block-status-card__action">
                  <MessageSquare size={20} />
                  <span>12 Comments</span>
                </button>
                <button className="wp-block-status-card__action wp-block-status-card__action--like">
                  <Heart size={20} />
                  <span>45 Likes</span>
                </button>
                <button className="wp-block-status-card__action wp-block-status-card__action--share">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
