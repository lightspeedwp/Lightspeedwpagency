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

/* archive.css — globally imported via index.css */
import { Link } from 'react-router';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { allPosts } from '@/app/data/posts-formats';

export function StandardArchiveTemplate() {
  const standardPosts = allPosts.filter(post => post.format === 'standard');
  const posts = [...standardPosts, ...standardPosts, ...standardPosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Articles' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <header className="standard-archive__header">
            <h1 className="standard-archive__title">Latest Articles</h1>
            <p className="standard-archive__description">Insights, tutorials, and news.</p>
          </header>

          <div className="standard-archive__grid">
            {posts.map((post, index) => (
              <Link 
                key={`${post.id}-${index}`}
                to="#"
                className="wp-block-standard-card"
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
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
