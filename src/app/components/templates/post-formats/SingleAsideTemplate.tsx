/**
 * Single Aside Template
 * 
 * WordPress template: single-aside.html
 * 
 * Displays a single aside post.
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { asidePost } from '@/app/data/posts-formats';
import { Hash, Calendar } from 'lucide-react';

export function SingleAsideTemplate() {
  const post = asidePost;

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Notes', href: '/aside-archive' },
          { label: 'Note' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <div className="wp-max-w-2xl wp-mx-auto">
            <article className="wp-block-aside-single">
              <div className="wp-block-aside-single__content">
                <div className="wp-block-aside-single__icon-wrapper">
                  <Hash size={24} />
                </div>
                <div className="wp-block-aside-single__body">
                  <div className="wp-block-aside-single__text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                  <div className="wp-block-aside-single__meta">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </Section>

    </>
  );
}