/**
 * Gallery Archive Template
 * 
 * WordPress template: archive-gallery.html
 * 
 * Displays a masonry grid of photo galleries.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-gallery-*
 * 
 * @see /src/styles/blocks/post-formats/gallery.css
 * @see /src/styles/templates/archive.css
 */

import '../../../../styles/templates/archive.css';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { allPosts } from '@/app/data/posts-formats';
import { Stack as Layers } from '@phosphor-icons/react';
import { Link } from 'react-router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';


export function GalleryArchiveTemplate() {
  const galleryPosts = allPosts.filter(post => post.format === 'gallery');
  // Duplicate for visual effect
  const posts = [...galleryPosts, ...galleryPosts, ...galleryPosts, ...galleryPosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Gallery' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <header className="archive-header">
            <h1 className="archive-header__title">Photo Galleries</h1>
            <p className="archive-header__description">Events, retreats, and behind the scenes.</p>
          </header>

          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="2rem">
              {posts.map((post, index) => (
                <Link 
                  key={`${post.id}-${index}`}
                  to="#"
                  className="wp-block-gallery-card"
                >
                  <div className="wp-block-gallery-card__media">
                    {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                      <img 
                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                        alt={post.title.rendered} 
                        className="wp-block-gallery-card__img"
                      />
                    )}
                    <div className="wp-block-gallery-card__count">
                      <Layers size={14} />
                      <span>{post._embedded?.['gallery_images']?.length || 4} Photos</span>
                    </div>
                    <div className="wp-block-gallery-card__overlay" />
                  </div>
                  <div className="wp-block-gallery-card__content">
                    <h2 className="wp-block-gallery-card__title">
                      {post.title.rendered}
                    </h2>
                    <div className="wp-block-gallery-card__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    <div className="wp-block-gallery-card__date">
                      {new Date(post.date).toLocaleDateString()}
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