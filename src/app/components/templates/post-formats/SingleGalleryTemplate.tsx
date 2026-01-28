/**
 * Single Gallery Template
 * 
 * WordPress template: single-gallery.html
 * 
 * Displays a grid of images for a gallery post.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { galleryPost } from '@/app/data/posts-formats';
import { Image, Calendar, User } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '@/styles/blocks/post-formats/gallery.css';

export function SingleGalleryTemplate() {
  const post = galleryPost;
  const images = post._embedded?.['gallery_images'] || [];

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
                { label: 'Galleries', href: '/gallery-archive' },
                { label: post.title.rendered }
              ]}
            />
          </Container>
        </section>

        <header className="wp-block-gallery-hero">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="wp-block-gallery-hero__title">{post.title.rendered}</h1>
              <div className="wp-block-gallery-hero__meta">
                <span className="wp-block-gallery-hero__meta-item"><User size={16} /> LightSpeed Team</span>
                <span className="wp-block-gallery-hero__meta-item"><Calendar size={16} /> {new Date(post.date).toLocaleDateString()}</span>
                <span className="wp-block-gallery-hero__meta-item"><Image size={16} /> {images.length} Photos</span>
              </div>
              <div className="wp-block-gallery-hero__content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </Container>
        </header>

        <Section spacing="lg">
          <Container>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
              <Masonry gutter="1.5rem">
                {images.map((imgUrl: string, index: number) => (
                  <div key={index} className="wp-block-gallery-item group">
                    <img 
                      src={imgUrl} 
                      alt={`Gallery image ${index + 1}`} 
                      className="wp-block-gallery-item__img"
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
