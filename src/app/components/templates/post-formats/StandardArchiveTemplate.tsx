/**
 * Standard Archive Template
 * 
 * WordPress template: archive.html (fallback)
 * 
 * Standard blog archive listing.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .standard-archive-*, .wp-block-standard-card
 * 
 * @see /src/styles/blocks/post-formats/standard.css
 * @see /src/styles/templates/archive.css
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { useNavigation } from '@/app/contexts/NavigationContext';
import '@/styles/blocks/post-formats/standard.css';
import '@/styles/templates/archive.css';

export function StandardArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const standardPosts = allPosts.filter(post => post.format === 'standard');
  const posts = [...standardPosts, ...standardPosts, ...standardPosts];

  return (
    <>
      <section className="archive-breadcrumbs">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Articles', href: '/blog/format/standard' }
            ]}
          />
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <header className="standard-archive__header">
            <h1 className="standard-archive__title">Latest Articles</h1>
            <p className="standard-archive__description">Insights, tutorials, and news.</p>
          </header>

          <div className="standard-archive__grid">
            {posts.map((post, index) => (
              <article 
                key={`${post.id}-${index}`} 
                className="wp-block-standard-card"
                onClick={() => navigateTo('standard-single')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo('standard-single'); } }}
              >
                <div className="wp-block-standard-card__thumb">
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered} 
                      className="wp-block-standard-card__img"
                    />
                  )}
                </div>
                <div className="wp-block-standard-card__content">
                  <div className="wp-block-standard-card__date">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h2 className="wp-block-standard-card__title">
                    {post.title.rendered}
                  </h2>
                  <div 
                    className="wp-block-standard-card__excerpt"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                  />
                  <span className="wp-block-standard-card__read-more">Read More &rarr;</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
