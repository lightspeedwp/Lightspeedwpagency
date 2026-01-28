/**
 * Chat Archive Template
 * 
 * WordPress template: archive-chat.html
 * 
 * Displays a list of chat transcripts.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { MessageCircle, User } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';

export function ChatArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const chatPosts = allPosts.filter(post => post.format === 'chat');
  // Duplicate for visual effect
  const posts = [...chatPosts, ...chatPosts, ...chatPosts];

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
                { label: 'Chats', href: '/chat-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Chat Transcripts</h1>
              <p className="text-xl text-[var(--muted-foreground)]">Support logs, Q&A sessions, and team discussions.</p>
            </header>

            <div className="max-w-3xl mx-auto space-y-6">
              {posts.map((post, index) => (
                <article 
                  key={`${post.id}-${index}`} 
                  className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border-soft)] hover:border-[var(--primary)] transition-colors cursor-pointer"
                  onClick={() => navigateTo('chat-single')}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--secondary)] rounded-full text-[var(--primary)]">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">{post.title.rendered}</h2>
                      <div className="text-[var(--muted-foreground)] mb-4">{post.excerpt.rendered}</div>
                      <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          Support Team
                        </span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
