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
 * - ✨ UPDATED: Now uses PostCard pattern component (Phase 2.1b)
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.related-posts)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/RelatedPosts.md
 * @see /src/app/components/patterns/PostCard.tsx
 */

import { ScrollReveal } from '../../hooks/useScrollReveal';
import { PostCardGrid } from './PostCard';

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

/**
 * Convert RelatedPost to PostCard format
 */
function convertToPostCardFormat(post: RelatedPost) {
  return {
    ...post,
    url: `/insights/${post.slug}`,
    category: {
      name: post.category,
      slug: post.category.toLowerCase().replace(/\s+/g, '-')
    },
    tags: []
  };
}

export const RelatedPosts = ({ posts, currentPostSlug }: RelatedPostsProps) => {
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

        <PostCardGrid
          posts={relatedPosts.map(convertToPostCardFormat)}
          variant="vertical"
          columns={3}
          showImages={true}
          showExcerpts={true}
          showMeta={true}
          showCategory={true}
          showReadingTime={true}
        />
      </div>
    </section>
  );
};