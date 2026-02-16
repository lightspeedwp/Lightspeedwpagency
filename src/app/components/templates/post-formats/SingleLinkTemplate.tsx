/**
 * Single Link Template
 * 
 * WordPress template: single-link.html
 * 
 * Displays a single link post.
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { linkPost } from '@/app/data/posts-formats';
import { Link as LinkIcon, ExternalLink, Calendar } from 'lucide-react';
import '@/styles/blocks/post-formats/link.css';
import '@/styles/templates/single-post.css';

export function SingleLinkTemplate() {
  const post = linkPost;

  return (
    <>
      <section className="single-post-breadcrumbs">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Links', href: '/link-archive' },
                { label: 'Link' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <div className="wp-max-w-2xl wp-mx-auto">
              <article className="wp-block-link-single">
                <div className="wp-block-link-single__icon">
                  <LinkIcon size={32} />
                </div>
                
                <h1 className="wp-block-link-single__title">{post.title.rendered}</h1>
                
                <div className="wp-block-link-single__content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="wp-block-link-single__cta"
                >
                  Visit Link <ExternalLink size={18} />
                </a>

                <div className="wp-block-link-single__meta">
                  <Calendar size={14} /> 
                  Shared on {new Date(post.date).toLocaleDateString()}
                </div>
              </article>
            </div>
          </Container>
        </Section>

    </>
  );
}
