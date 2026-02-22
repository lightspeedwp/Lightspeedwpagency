/**
 * Query Loop — Gallery Post Format
 *
 * WordPress pattern: core/query + gallery post-template
 *
 * Renders gallery posts with thumbnail strips and image counts.
 *
 * @see /src/styles/patterns/query-loop.css
 */

import { Images, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { WPPost } from '../../data/posts-formats';

export interface QueryLoopGalleryProps {
  posts: WPPost[];
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
}

function getFeaturedImage(post: WPPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
}

function getGalleryImages(post: WPPost): string[] {
  return post._embedded?.gallery_images || [];
}

export function QueryLoopGallery({
  posts,
  heading = 'Gallery Posts',
  description,
  columns = 3,
}: QueryLoopGalleryProps) {
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
      emptyMessage="No gallery posts found."
    >
      {posts.map((post, index) => {
        const featuredImage = getFeaturedImage(post);
        const galleryImages = getGalleryImages(post);

        return (
          <Link
            key={post.id}
            to="/blog/format/gallery/single"
            className="query-loop-card query-loop-card--clickable"
            ref={index === 0 ? containerRef as any : undefined}
            style={itemStyle(index)}
            aria-label={`View gallery: ${post.title.rendered}`}
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
                  <Images size={36} className="query-loop-card__play-icon" />
                </div>
                <span className="query-loop-card__duration">
                  <Images size={10} /> {galleryImages.length || '3+'} images
                </span>
              </div>
            )}

            {/* Gallery thumbnail strip */}
            {galleryImages.length > 0 && (
              <div className="query-loop-card__gallery-strip">
                {galleryImages.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    className="query-loop-card__gallery-thumb"
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            <div className="query-loop-card__body">
              <span className="query-loop-card__badge">
                <Images size={12} /> Gallery
              </span>
              <h3 className="query-loop-card__title">{post.title.rendered}</h3>
              <p className="query-loop-card__excerpt">{post.excerpt.rendered}</p>
              <div className="query-loop-card__meta">
                <span className="query-loop-card__meta-item">
                  <Calendar size={14} />
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
