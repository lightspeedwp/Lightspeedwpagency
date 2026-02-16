/**
 * Single Aside Template
 * 
 * WordPress template: single-aside.html
 * 
 * Displays a single aside post.
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { asidePost } from '@/app/data/posts-formats';
import { Hash, Calendar } from 'lucide-react';
import '@/styles/blocks/post-formats/aside.css';
import '@/styles/templates/single-post.css';

export function SingleAsideTemplate() {
  const post = asidePost;

  return (
    <>
      <section className="single-post-breadcrumbs">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Updates', href: '/aside-stream' },
                { label: 'Update' }
              ]}
            />
          </Container>
        </section>

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
