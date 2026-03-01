/**
 * Related Posts Pattern
 *
 * WordPress pattern: Related blog posts grid
 * Shows 3 related posts based on category/tags
 *
 * Features:
 * - 3-column grid (responsive: 1 col mobile → 3 cols desktop)
 * - Glassmorphism cards
 * - Neon gradient top stripe
 * - Category badges
 * - Reading time
 * - Hover lift effect
 * - ScrollReveal animations
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.related-posts)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/RelatedPosts.md
 */

import { Button } from '../blocks/design/Buttons';
import { Badge } from '../blocks/design/Badge';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Clock, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';

export interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  readingTime: string;
  date: string;
}

export interface RelatedPostsProps {
  posts: RelatedPost[];
  currentPostSlug?: string;
}

export const RelatedPosts = ({ posts, currentPostSlug }: RelatedPostsProps) => {
  const { navigateToPage } = useNavigation();

  // Filter out current post and limit to 3
  const relatedPosts = posts
    .filter((post) => post.slug !== currentPostSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="related-posts">
      <div className="related-posts__container wp-max-w-6xl">
        <ScrollReveal animation="fade-up" duration={500}>
          <div className="related-posts__header">
            <h2 className="related-posts__title">Related articles</h2>
            <p className="related-posts__description">
              Continue reading with these hand-picked articles
            </p>
          </div>
        </ScrollReveal>

        <div className="related-posts__grid wp-grid-3-cols">
          {relatedPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              animation="fade-up"
              duration={500}
              delay={index * 100}
            >
              <article className="related-posts__card">
                {/* Gradient top stripe */}
                <div className="related-posts__stripe" aria-hidden="true" />

                {/* Featured image */}
                <div className="related-posts__image-wrapper">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="related-posts__image"
                    loading="lazy"
                  />
                  
                  {/* Category badge overlay */}
                  <div className="related-posts__category">
                    <Badge variant="secondary" size="sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Card content */}
                <div className="related-posts__content">
                  <h3 className="related-posts__card-title">
                    <a
                      href={`/insights/${post.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToPage('single-post', post.slug);
                      }}
                      className="related-posts__link"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p className="related-posts__excerpt">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="related-posts__meta">
                    <div className="related-posts__meta-item">
                      <Clock size={14} />
                      <span className="related-posts__meta-text">
                        {post.readingTime}
                      </span>
                    </div>
                    <span className="related-posts__meta-separator">·</span>
                    <time
                      className="related-posts__date"
                      dateTime={post.date}
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>

                  {/* Read more link */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="related-posts__cta"
                    onClick={() => navigateToPage('single-post', post.slug)}
                    aria-label={`Read ${post.title}`}
                  >
                    Read article
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
