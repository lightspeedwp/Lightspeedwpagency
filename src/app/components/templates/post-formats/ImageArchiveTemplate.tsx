/**
 * Image Archive Template
 * 
 * WordPress template: archive-image.html
 * 
 * Displays a grid of image posts.
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { allPosts } from '@/app/data/posts-formats';
import { Camera } from 'lucide-react';
import { Link } from 'react-router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';


export function ImageArchiveTemplate() {
  const imagePosts = allPosts.filter(post => post.format === 'image');
  // Duplicate for visual effect
  const posts = [...imagePosts, ...imagePosts, ...imagePosts, ...imagePosts, ...imagePosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Photography' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <header className="archive-header">
            <h1 className="archive-header__title">Photography</h1>
            <p className="archive-header__description">Captured moments and visual stories.</p>
          </header>

          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="2rem">
              {posts.map((post, index) => (
                <Link 
                  key={`${post.id}-${index}`}
                  to="#"
                  className="wp-block-image-card"
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
                </Link>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </Section>

    </>
  );
}