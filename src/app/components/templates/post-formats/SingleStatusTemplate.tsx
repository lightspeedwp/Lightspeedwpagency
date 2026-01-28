/**
 * Single Status Template
 * 
 * WordPress template: single-status.html
 * 
 * Displays a single status update.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { statusPost } from '@/app/data/posts-formats';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

export function SingleStatusTemplate() {
  const post = statusPost;

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
                { label: 'Status Updates', href: '/status-archive' },
                { label: 'Status' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <div className="max-w-2xl mx-auto">
              <article className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border-soft)] shadow-md">
                <div className="flex gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg text-[var(--foreground)]">LightSpeed Team</div>
                    <div className="text-[var(--muted-foreground)]">@lightspeedwp</div>
                  </div>
                </div>
                
                <div 
                  className="text-2xl leading-relaxed mb-8 font-medium"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
                />
                
                <div className="text-[var(--muted-foreground)] border-b border-[var(--border-soft)] pb-4 mb-4 text-sm">
                  9:15 AM · Dec 11, 2023
                </div>

                <div className="flex items-center gap-8 text-[var(--muted-foreground)]">
                  <button className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
                    <MessageSquare size={20} />
                    <span>12 Comments</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                    <span>45 Likes</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
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
