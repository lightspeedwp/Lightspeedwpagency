/**
 * Gallery Archive Template
 * 
 * WordPress template: archive-gallery.html
 * 
 * Displays a masonry grid of photo galleries.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Layers } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '@/styles/blocks/post-formats/gallery.css';

export function GalleryArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const galleryPosts = allPosts.filter(post => post.format === 'gallery');
  // Duplicate for visual effect
  const posts = [...galleryPosts, ...galleryPosts, ...galleryPosts, ...galleryPosts];

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
                { label: 'Photo Galleries', href: '/gallery-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Photo Galleries</h1>
              <p className="text-xl text-[var(--muted-foreground)]">Events, retreats, and behind the scenes.</p>
            </header>

            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
              <Masonry gutter="2rem">
                {posts.map((post, index) => (
                  <article 
                    key={`${post.id}-${index}`} 
                    className="wp-block-gallery-card group"
                    onClick={() => navigateTo('gallery-single')}
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
                  </article>
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
