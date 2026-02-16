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

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Hash } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';
import '@/styles/blocks/post-formats/aside.css';
import '@/styles/templates/archive.css';

export function AsideArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const asidePosts = allPosts.filter(post => post.format === 'aside');
  const posts = [...asidePosts, ...asidePosts, ...asidePosts, ...asidePosts];

  return (
    <>
      <section className="archive-breadcrumbs">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Quick Updates', href: '/aside-archive' }
            ]}
          />
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <div className="wp-max-w-2xl wp-mx-auto">
            <header className="archive-header">
              <h1 className="archive-header__title">Quick Updates</h1>
              <p className="archive-header__description">Short announcements, thoughts, and links.</p>
            </header>

            <div className="wp-block-aside-timeline">
              {posts.map((post, index) => (
                <article 
                  key={`${post.id}-${index}`} 
                  className="wp-block-aside-timeline-item"
                  onClick={() => navigateTo('aside-single')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo('aside-single'); } }}
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
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
