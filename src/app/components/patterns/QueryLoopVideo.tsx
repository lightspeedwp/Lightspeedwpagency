/**
 * Query Loop — Video Post Format
 *
 * WordPress pattern: core/query + video post-template
 *
 * Renders video posts with thumbnails, play overlays, and duration.
 *
 * @see /src/styles/patterns/query-loop.css
 */

import { Video, Clock, Play } from 'lucide-react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { WPPost } from '../../data/posts-formats';

export interface QueryLoopVideoProps {
  posts: WPPost[];
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
}

function getMetaValue(post: WPPost, key: string): string {
  const meta = post.meta?.find((m: any) => m.key === key);
  return meta?.value || '';
}

function getFeaturedImage(post: WPPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
}

export function QueryLoopVideo({
  posts,
  heading = 'Video Posts',
  description,
  columns = 3,
}: QueryLoopVideoProps) {
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
      emptyMessage="No video posts found."
    >
      {posts.map((post, index) => {
        const duration = getMetaValue(post, 'video_duration');
        const featuredImage = getFeaturedImage(post);

        return (
          <Link
            key={post.id}
            to="/insights/format/video/single"
            className="query-loop-card query-loop-card--clickable"
            ref={index === 0 ? containerRef as any : undefined}
            style={itemStyle(index)}
            aria-label={`Watch: ${post.title.rendered}`}
          >
            {featuredImage && (
              <div className="query-loop-card__image-wrapper">
                <img
                  src={featuredImage}
                  alt={post.title.rendered}
                  className="query-loop-card__image"
                  loading="lazy"
                />
                <div className="query-loop-card__overlay">
                  <Play size={48} className="query-loop-card__play-icon" />
                </div>
                {duration && (
                  <span className="query-loop-card__duration">
                    <Clock size={10} /> {duration}
                  </span>
                )}
              </div>
            )}

            <div className="query-loop-card__body">
              <span className="query-loop-card__badge">
                <Video size={12} /> Video
              </span>
              <h3 className="query-loop-card__title">{post.title.rendered}</h3>
              <p className="query-loop-card__excerpt">{post.excerpt.rendered}</p>
              <div className="query-loop-card__meta">
                <span className="query-loop-card__meta-item">
                  <Clock size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </QueryLoop>
  );
}
