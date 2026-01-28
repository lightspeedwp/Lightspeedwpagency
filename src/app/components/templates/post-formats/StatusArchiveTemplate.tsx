/**
 * Status Archive Template
 * 
 * WordPress template: archive-status.html
 * 
 * Displays a feed of status updates.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Activity, MessageSquare, Heart, Share2 } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';

export function StatusArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const statusPosts = allPosts.filter(post => post.format === 'status');
  const posts = [...statusPosts, ...statusPosts, ...statusPosts];

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
                { label: 'Status Updates', href: '/status-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg" className="bg-[var(--secondary)]">
          <Container>
            <div className="max-w-2xl mx-auto">
              <header className="mb-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <Activity size={24} className="text-[var(--primary)]" />
                  Status Feed
                </h1>
              </header>

              <div className="space-y-4">
                {posts.map((post, index) => (
                  <article 
                    key={`${post.id}-${index}`} 
                    className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border-soft)] shadow-sm cursor-pointer"
                    onClick={() => navigateTo('status-single')}
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <span className="font-bold text-[var(--foreground)]">LightSpeed Team</span>
                            <span className="text-[var(--muted-foreground)] text-sm ml-2">@lightspeedwp</span>
                          </div>
                          <span className="text-xs text-[var(--muted-foreground)]">2h</span>
                        </div>
                        <div 
                          className="text-lg mb-4"
                          dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
                        />
                        <div className="flex items-center gap-8 text-[var(--muted-foreground)]">
                          <button className="flex items-center gap-2 hover:text-[var(--primary)] text-sm">
                            <MessageSquare size={18} />
                            <span>12</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-red-500 text-sm">
                            <Heart size={18} />
                            <span>45</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-blue-500 text-sm">
                            <Share2 size={18} />
                            <span>Share</span>
                          </button>
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
