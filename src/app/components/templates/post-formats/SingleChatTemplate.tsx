/**
 * Single Chat Template
 * 
 * WordPress template: single-chat.html
 * 
 * Displays a single chat transcript.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { chatPost } from '@/app/data/posts-formats';
import { MessageCircle, User, Calendar } from 'lucide-react';

export function SingleChatTemplate() {
  const post = chatPost;

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
                { label: 'Chats', href: '/chat-archive' },
                { label: post.title.rendered }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <div className="max-w-3xl mx-auto">
              <header className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--primary)] text-sm font-semibold uppercase tracking-wide mb-4">
                  <MessageCircle size={14} />
                  Chat Transcript
                </div>
                <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
                <div className="flex justify-center items-center gap-4 text-sm text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-1"><User size={14} /> Support Team</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</span>
                </div>
              </header>

              <div className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border-soft)]">
                <div className="prose max-w-none chat-transcript">
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
