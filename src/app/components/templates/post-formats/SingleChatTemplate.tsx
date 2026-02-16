/**
 * Single Chat Template
 * 
 * WordPress template: single-chat.html
 * 
 * Displays a single chat transcript.
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { chatPost } from '@/app/data/posts-formats';
import { MessageCircle, User, Calendar } from 'lucide-react';
import '@/styles/blocks/post-formats/chat.css';
import '@/styles/templates/single-post.css';

export function SingleChatTemplate() {
  const post = chatPost;

  return (
    <>
      <section className="single-post-breadcrumbs">
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
            <div className="wp-max-w-3xl wp-mx-auto">
              <header className="wp-block-chat-header">
                <div className="wp-block-chat-label">
                  <MessageCircle size={14} />
                  Chat Transcript
                </div>
                <h1 className="wp-block-chat-title">{post.title.rendered}</h1>
                <div className="wp-block-chat-meta">
                  <span className="wp-block-chat-meta-item"><User size={14} /> Support Team</span>
                  <span className="wp-block-chat-meta-item"><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</span>
                </div>
              </header>

              <div className="wp-block-chat-transcript">
                <div className="chat-transcript">
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
              </div>
            </div>
          </Container>
        </Section>

    </>
  );
}
