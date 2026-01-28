/**
 * Quote Archive Template
 * 
 * WordPress template: archive-quote.html
 * 
 * Displays a grid of quote cards.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Quote } from 'lucide-react';
import '@/styles/blocks/post-formats/quote.css';

export function QuoteArchiveTemplate() {
  const quotePosts = allPosts.filter(post => post.format === 'quote');
  // Duplicate for visual effect
  const posts = [...quotePosts, ...quotePosts, ...quotePosts];

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
                { label: 'Quotes', href: '/quote-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg" className="bg-[var(--secondary)]">
          <Container>
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Inspiration & Quotes</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article key={`${post.id}-${index}`} className="wp-block-quote-card">
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
      </main>
      <SiteFooter />
    </>
  );
}
