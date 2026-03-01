/**
 * Single Chat Template
 * 
 * WordPress template: single-chat.html
 * 
 * Displays a single chat transcript.
 */

import '../../../../styles/templates/single-post.css';
import { MessageCircle, User, Calendar } from 'lucide-react';

export function SingleChatTemplate() {
  const post = chatPost;

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Chat', href: '/chat-archive' },
          { label: post.title.rendered },
        ]}
      />

      <article>
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

      </article>
    </>
  );
}