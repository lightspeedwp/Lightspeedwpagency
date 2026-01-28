/**
 * Single Link Template
 * 
 * WordPress template: single-link.html
 * 
 * Displays a single link post.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { linkPost } from '@/app/data/posts-formats';
import { Link as LinkIcon, ExternalLink, Calendar } from 'lucide-react';
import '@/styles/blocks/post-formats/link.css';

export function SingleLinkTemplate() {
  const post = linkPost;

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
                { label: 'Links', href: '/link-archive' },
                { label: 'Link' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <div className="max-w-2xl mx-auto">
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
      </main>
      <SiteFooter />
    </>
  );
}
