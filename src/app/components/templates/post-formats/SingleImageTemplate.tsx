/**
 * Single Image Template
 * 
 * WordPress template: single-image.html
 * 
 * Displays a single image post with focus on the visual content.
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { imagePost } from '@/app/data/posts-formats';
import { Camera, Calendar, User } from 'lucide-react';
import '@/styles/sections/post-hero.css';
import '@/styles/blocks/post-formats/image.css';
import '@/styles/templates/archive.css';

export function SingleImageTemplate() {
  const post = imagePost;

  return (
    <>
      <section className="archive-breadcrumbs">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Images', href: '/image-archive' },
                { label: post.title.rendered }
              ]}
            />
          </Container>
        </section>

        <article>
          <div className="wp-block-post-hero wp-block-post-hero--centered">
            <Container>
              <div className="wp-max-w-4xl wp-mx-auto">
                <h1 className="wp-block-post-hero__title">{post.title.rendered}</h1>
                <div className="wp-block-post-hero__meta">
                  <span className="wp-block-post-hero__meta-item"><User size={16} /> {post._embedded?.author?.[0]?.name || 'LightSpeed'}</span>
                  <span className="wp-block-post-hero__meta-item"><Calendar size={16} /> {new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Container>
          </div>

          <Section spacing="lg">
            <Container>
              <div className="wp-max-w-5xl wp-mx-auto">
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <div className="wp-block-image-single-featured">
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered} 
                      className="wp-block-image-single-featured__img"
                    />
                  </div>
                )}

                <div className="wp-max-w-2xl wp-mx-auto single-post-body">
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                  
                  <div className="wp-block-image-exif">
                    <Camera size={20} />
                    <span>Shot on Canon EOS R5</span>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </article>

    </>
  );
}