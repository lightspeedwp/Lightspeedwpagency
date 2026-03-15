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

/* archive.css — globally imported via index.css */
import { Link } from 'react-router';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { allPosts } from '@/app/data/posts-formats';
import { Lightning, Heart, ChatCircle as MessageCircle } from '@phosphor-icons/react';

export function StatusArchiveTemplate() {
  const statusPosts = allPosts.filter(post => post.format === 'status');
  const posts = [...statusPosts, ...statusPosts, ...statusPosts, ...statusPosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Status Updates' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <div className="wp-max-w-2xl wp-mx-auto">
            <header className="status-archive__header">
              <h1 className="status-archive__title">
                <Lightning size={24} weight="fill" />
                Status Updates
              </h1>
              <p className="status-archive__description">Quick updates from the team.</p>
            </header>

            <div className="status-archive__feed">
              {posts.map((post, index) => (
                <article
                  key={`${post.id}-${index}`}
                  className="wp-block-status-card"
                >
                  <div className="wp-block-status-card__avatar">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                      alt="Author avatar"
                    />
                  </div>
                  <div className="wp-block-status-card__body">
                    <div className="wp-block-status-card__meta">
                      <span className="wp-block-status-card__author">Ash Shaw</span>
                      <span className="wp-block-status-card__time">
                        {index === 0 ? 'Just now' : index === 1 ? '1h ago' : `${index + 1}h ago`}
                      </span>
                    </div>
                    <div
                      className="wp-block-status-card__content"
                      dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                    <div className="wp-block-status-card__actions">
                      <button className="wp-block-status-card__action" aria-label="Like">
                        <Heart size={16} />
                        <span>{Math.floor(Math.random() * 20) + 1}</span>
                      </button>
                      <button className="wp-block-status-card__action" aria-label="Reply">
                        <MessageCircle size={16} />
                        <span>{Math.floor(Math.random() * 5)}</span>
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
