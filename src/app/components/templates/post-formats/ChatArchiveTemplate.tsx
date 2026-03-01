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

import '../../../../styles/templates/archive.css';
import { Link } from 'react-router';

export function ChatArchiveTemplate() {
  const chatPosts = allPosts.filter(post => post.format === 'chat');
  const posts = [...chatPosts, ...chatPosts, ...chatPosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Chat Logs' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <header className="archive-header">
            <h1 className="archive-header__title">Chat Transcripts</h1>
            <p className="archive-header__description">Support logs, Q&amp;A sessions, and team discussions.</p>
          </header>

          <div className="archive-feed">
            {posts.map((post, index) => (
              <Link 
                key={`${post.id}-${index}`}
                to="#"
                className="wp-block-chat-card"
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
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}