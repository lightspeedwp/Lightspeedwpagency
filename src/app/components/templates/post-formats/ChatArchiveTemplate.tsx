/**
 * Chat Archive Template
 * 
 * WordPress template: archive-chat.html
 * 
 * Displays a list of chat transcripts.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-chat-*
 * 
 * @see /src/styles/blocks/post-formats/chat.css
 * @see /src/styles/templates/archive.css
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { MessageCircle, User } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';
import '@/styles/blocks/post-formats/chat.css';
import '@/styles/templates/archive.css';

export function ChatArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const chatPosts = allPosts.filter(post => post.format === 'chat');
  const posts = [...chatPosts, ...chatPosts, ...chatPosts];

  return (
    <>
      <section className="archive-breadcrumbs">
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
          <header className="archive-header">
            <h1 className="archive-header__title">Chat Transcripts</h1>
            <p className="archive-header__description">Support logs, Q&amp;A sessions, and team discussions.</p>
          </header>

          <div className="archive-feed">
            {posts.map((post, index) => (
              <article 
                key={`${post.id}-${index}`} 
                className="wp-block-chat-card"
                onClick={() => navigateTo('chat-single')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo('chat-single'); } }}
              >
                <div className="wp-block-chat-card__inner">
                  <div className="wp-block-chat-card__icon">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h2 className="wp-block-chat-card__title">{post.title.rendered}</h2>
                    <div className="wp-block-chat-card__excerpt">{post.excerpt.rendered}</div>
                    <div className="wp-block-chat-card__meta">
                      <span className="wp-block-chat-card__meta-item">
                        <User size={14} />
                        Support Team
                      </span>
                      <span>&bull;</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
