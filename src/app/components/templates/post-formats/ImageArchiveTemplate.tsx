/**
 * Image Archive Template
 * 
 * WordPress template: archive-image.html
 * 
 * Displays a grid of image posts.
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Camera } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '@/styles/blocks/post-formats/image.css';

export function ImageArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const imagePosts = allPosts.filter(post => post.format === 'image');
  // Duplicate for visual effect
  const posts = [...imagePosts, ...imagePosts, ...imagePosts, ...imagePosts, ...imagePosts];

  return (
    <>
      <section className="archive-breadcrumbs">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Images', href: '/image-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <header className="archive-header">
              <h1 className="archive-header__title">Photography</h1>
              <p className="archive-header__description">Captured moments and visual stories.</p>
            </header>

            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
              <Masonry gutter="2rem">
                {posts.map((post, index) => (
                  <article 
                    key={`${post.id}-${index}`} 
                    className="wp-block-image-card"
                    onClick={() => navigateTo('image-single')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo('image-single'); } }}
                  >
                    <div className="wp-block-image-card__inner">
                      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                        <img 
                          src={post._embedded['wp:featuredmedia'][0].source_url} 
                          alt={post.title.rendered} 
                          className="wp-block-image-card__img"
                        />
                      )}
                      <div className="wp-block-image-card__overlay">
                        <div>
                          <h2 className="wp-block-image-card__title">{post.title.rendered}</h2>
                          <div className="wp-block-image-card__meta">
                             <Camera size={12} /> {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Container>
        </Section>

    </>
  );
}