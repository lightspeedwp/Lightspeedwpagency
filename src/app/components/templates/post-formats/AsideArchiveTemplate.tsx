/**
 * Aside Archive Template
 * 
 * WordPress template: archive-aside.html
 * 
 * Displays a stream of aside posts (short updates).
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Hash, MoreHorizontal } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';
import '@/styles/blocks/post-formats/aside.css';

export function AsideArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const asidePosts = allPosts.filter(post => post.format === 'aside');
  const posts = [...asidePosts, ...asidePosts, ...asidePosts, ...asidePosts];

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
                { label: 'Quick Updates', href: '/aside-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <div className="max-w-2xl mx-auto">
              <header className="mb-12 border-b border-[var(--border-soft)] pb-6">
                <h1 className="text-3xl font-bold mb-2">Quick Updates</h1>
                <p className="text-[var(--muted-foreground)]">Short announcements, thoughts, and links.</p>
              </header>

              <div className="wp-block-aside-timeline">
                {posts.map((post, index) => (
                  <article 
                    key={`${post.id}-${index}`} 
                    className="wp-block-aside-timeline-item group"
                    onClick={() => navigateTo('aside-single')}
                  >
                    <div className="wp-block-aside-marker"></div>
                    
                    <div className="wp-block-aside-date">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    
                    <div className="wp-block-aside-card">
                      <div className="wp-block-aside-content">
                        <Hash size={20} className="wp-block-aside-icon" />
                        <div className="prose prose-sm max-w-none">
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
      </main>
      <SiteFooter />
    </>
  );
}
