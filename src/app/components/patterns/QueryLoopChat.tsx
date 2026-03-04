/**
 * QueryLoopChat Pattern — LSX Design
 */

import { Chat as MessageSquare, Calendar } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { WPPost } from '../../data/posts-formats';

export interface QueryLoopChatProps {
  posts: WPPost[];
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
}

function extractChatLines(html: string): { speaker: string; text: string }[] {
  const lines: { speaker: string; text: string }[] = [];
  const regex = /<strong>(.*?)<\/strong>:\s*(.*?)(?=<\/p>|$)/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    lines.push({ speaker: match[1], text: match[2] });
  }
  return lines.slice(0, 3); // max 3 preview lines
}

export function QueryLoopChat({
  posts,
  heading = 'Chat Transcripts',
  description,
  columns = 2,
}: QueryLoopChatProps) {
  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'fade-up',
    stagger: 100,
  });

  return (
    <QueryLoop
      heading={heading}
      description={description}
      columns={columns}
      isEmpty={posts.length === 0}
      emptyMessage="No chat posts found."
    >
      {posts.map((post, index) => {
        const chatLines = extractChatLines(post.content.rendered);

        return (
          <Link
            key={post.id}
            to="/insights/format/chat/single"
            className="query-loop-card query-loop-card--clickable"
            ref={index === 0 ? containerRef as any : undefined}
            style={itemStyle(index)}
            aria-label={`View chat: ${post.title.rendered || 'Chat transcript'}`}
          >
            <div className="query-loop-card__body">
              <span className="query-loop-card__badge">
                <MessageSquare size={12} /> Chat
              </span>

              {post.title.rendered && (
                <h3 className="query-loop-card__title">{post.title.rendered}</h3>
              )}

              {/* Chat bubble preview */}
              <div className="query-loop-card__chat-bubbles">
                {chatLines.map((line, i) => (
                  <div key={i} className="query-loop-card__chat-line">
                    <strong>{line.speaker}:</strong> {line.text}
                  </div>
                ))}
              </div>

              <div className="query-loop-card__meta">
                <span className="query-loop-card__meta-item">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="query-loop-card__meta-item">
                  <MessageSquare size={14} /> {chatLines.length} messages
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </QueryLoop>
  );
}