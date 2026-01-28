/**
 * Aside Stream Template
 * 
 * WordPress template: archive-aside.html
 * 
 * Displays a stream of aside posts (status updates, quick notes).
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { SkipLink } from '@/app/components/common/SkipLink';
import { BackToTopButton } from '@/app/components/blocks/layout/BackToTopButton';
import { allPosts } from '@/app/data/posts-formats';
import { MessageSquare, Hash, Share2, MoreHorizontal } from 'lucide-react';

export function AsideStreamTemplate() {
  // In a real scenario, we would filter by format 'aside'
  // But for demo, we might want to duplicate the aside post to show a stream
  const asidePosts = allPosts.filter(post => post.format === 'aside');
  
  // Duplicate for visual effect if only one exists
  const streamPosts = asidePosts.length < 3 
    ? [...asidePosts, ...asidePosts, ...asidePosts].map((p, i) => ({ ...p, id: 1000 + i })) 
    : asidePosts;

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Status Updates', href: '/aside-stream' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg" className="bg-gray-50 dark:bg-black/20 min-h-screen">
          <Container>
            <div className="max-w-2xl mx-auto">
              <header className="mb-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold font-[family-name:var(--font-primary)] flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white">
                    <Hash size={18} />
                  </div>
                  Team Updates
                </h1>
                <span className="text-sm text-[var(--muted-foreground)]">Live Stream</span>
              </header>

              <div className="space-y-6 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-[var(--border-soft)]">
                {streamPosts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className="relative pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-[var(--background)] border-4 border-[var(--primary)] rounded-full z-10" />

                    <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border-soft)] shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="Author" />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-[var(--foreground)]">Ash Shaw</div>
                            <div className="text-xs text-[var(--muted-foreground)]">
                              {index === 0 ? '2 hours ago' : index === 1 ? 'Yesterday' : '2 days ago'}
                            </div>
                          </div>
                        </div>
                        <button className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>

                      <div 
                        className="text-lg text-[var(--foreground)] leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                      />

                      <div className="flex items-center gap-6 pt-4 border-t border-[var(--border-soft)]">
                        <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                          <MessageSquare size={18} />
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                          <Share2 size={18} />
                          <span>Share</span>
                        </button>
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
      <BackToTopButton />
    </>
  );
}
