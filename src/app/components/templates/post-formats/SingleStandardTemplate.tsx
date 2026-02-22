/**
 * Single Standard Template
 * 
 * WordPress template: single.html
 * 
 * Standard blog post layout.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .single-post-*
 * 
 * @see /src/styles/templates/single-post.css
 */

import { User, Calendar, Tag } from 'lucide-react';

export function SingleStandardTemplate() {
  const post = standardPost;

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title.rendered },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="single-post-hero">
          <Container>
            <div className="wp-max-w-4xl wp-mx-auto">
              <div className="single-post-hero__categories">
                <span className="single-post-hero__category">
                  Accessibility
                </span>
              </div>
              <h1 className="single-post-hero__title">
                {post.title.rendered}
              </h1>
              <div className="single-post-meta">
                <div className="single-post-meta__item">
                  <User size={16} />
                  <span className="single-post-meta__text">LightSpeed Team</span>
                </div>
                <div className="single-post-meta__item">
                  <Calendar size={16} />
                  <span className="single-post-meta__text">{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* Featured Image */}
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className="single-post-featured-image-wrapper">
            <img 
              src={post._embedded['wp:featuredmedia'][0].source_url} 
              alt={post.title.rendered} 
              className="single-post-featured-image"
            />
          </div>
        )}

        {/* Content */}
        <Section spacing="xl">
          <Container>
            <div className="single-post-body wp-mx-auto">
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h2>Why It Matters</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Container>
        </Section>

        {/* Tags */}
        <div className="single-post-tags">
          <Container>
            <div className="single-post-tags__wrapper">
              <Tag size={20} className="single-post-tags__icon" />
              <div className="single-post-tags__list">
                <span className="single-post-tag">Design</span>
                <span className="single-post-tag">Development</span>
              </div>
            </div>
          </Container>
        </div>
      </article>
    </>
  );
}