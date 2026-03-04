/**
 * Aside Archive Template
 * 
 * WordPress template: archive-aside.html
 * 
 * Displays a stream of aside posts (short updates).
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-aside-*
 * 
 * @see /src/styles/blocks/post-formats/aside.css
 * @see /src/styles/templates/archive.css
 */

import '../../../../styles/templates/archive.css';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { BreadcrumbPart } from '@/app/components/parts/BreadcrumbPart';
import { allPosts } from '@/app/data/posts-formats';
import { Hash } from '@phosphor-icons/react';
import { Link } from 'react-router';

export function AsideArchiveTemplate() {
  const asidePosts = allPosts.filter(post => post.format === 'aside');
  const posts = [...asidePosts, ...asidePosts, ...asidePosts, ...asidePosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Notes' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <div className="wp-max-w-2xl wp-mx-auto">
            <header className="archive-header">
              <h1 className="archive-header__title">Quick Updates</h1>
              <p className="archive-header__description">Short announcements, thoughts, and links.</p>
            </header>

            <div className="wp-block-aside-timeline">
              {posts.map((post, index) => (
                <Link 
                  key={`${post.id}-${index}`}
                  to="#"
                  className="wp-block-aside-timeline-item"
                >
                  <div className="wp-block-aside-marker"></div>
                  
                  <div className="wp-block-aside-date">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  
                  <div className="wp-block-aside-card">
                    <div className="wp-block-aside-content">
                      <Hash size={20} className="wp-block-aside-icon" />
                      <div className="wp-block-aside-body">
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}