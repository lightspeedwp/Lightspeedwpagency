/**
 * QueryLoopPosts Pattern — LSX Design
 */

import { Calendar, Clock, User } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { BlogPost } from '../../data/blog-posts';

export interface QueryLoopPostsProps {
  posts: BlogPost[];
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
}

export function QueryLoopPosts({
  posts,
  heading,
  description,
  columns = 3,
}: QueryLoopPostsProps) {
  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'fade-up',
    stagger: 80,
  });

  return (
    <QueryLoop
      heading={heading}
      description={description}
      columns={columns}
      isEmpty={posts.length === 0}
      emptyMessage="No posts found."
    >
      {posts.map((post, index) => (
        <Link
          key={post.id}
          to={`/insights/${post.slug}`}
          className="query-loop-card query-loop-card--clickable"
          ref={index === 0 ? containerRef as any : undefined}
          style={itemStyle(index)}
          aria-label={`Read: ${post.title}`}
        >
          {post.featuredImage && (
            <div className="query-loop-card__image-wrapper">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="query-loop-card__image"
                loading="lazy"
              />
            </div>
          )}

          <div className="query-loop-card__body">
            {post.categories[0] && (
              <span className="query-loop-card__badge">{post.categories[0]}</span>
            )}

            <h3 className="query-loop-card__title">{post.title}</h3>
            <p className="query-loop-card__excerpt">{post.excerpt}</p>

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
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </QueryLoop>
  );
}