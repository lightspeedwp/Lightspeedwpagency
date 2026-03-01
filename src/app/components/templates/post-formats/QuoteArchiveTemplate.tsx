/**
 * Quote Archive Template
 * 
 * WordPress template: archive-quote.html
 * 
 * Displays a masonry-style grid of quote cards.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-quote-*
 * 
 * @see /src/styles/blocks/post-formats/quote.css
 * @see /src/styles/templates/archive.css
 */

import '../../../../styles/templates/archive.css';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { allPosts } from '@/app/data/posts-formats';
import { Quote } from 'lucide-react';


export function QuoteArchiveTemplate() {
  const quotePosts = allPosts.filter(post => post.format === 'quote');
  const posts = [...quotePosts, ...quotePosts, ...quotePosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Quotes' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <header className="archive-header">
            <h1 className="archive-header__title">Inspiration &amp; Quotes</h1>
          </header>

          <div className="archive-grid archive-grid--3-cols">
            {posts.map((post, index) => (
              <article
                key={`${post.id}-${index}`}
                className="wp-block-quote-card"
                tabIndex={0}
              >
                <div className="wp-block-quote-card__icon">
                  <Quote size={48} fill="currentColor" />
                </div>
                <div className="wp-block-quote-card__body">
                  <div 
                    className="wp-block-quote-card__text"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                  <div className="wp-block-quote-card__footer">
                    <div className="wp-block-quote-card__avatar"></div>
                    <div>
                      <div className="wp-block-quote-card__author">Matt Mullenweg</div>
                      <div className="wp-block-quote-card__role">WordPress Co-founder</div>
                    </div>
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