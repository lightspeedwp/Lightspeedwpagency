/**
 * RelatedContentWidget Pattern
 *
 * Cross-content recommendations showing blog posts and portfolio projects.
 * Pulls data from multiple centralized data files.
 *
 * WordPress equivalent: Custom query loop pattern
 *
 * @example
 * <RelatedContentWidget tags={['wordpress', 'woocommerce']} count={4} />
 */

import { useMemo } from 'react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { blogPosts } from '../../data/blog-posts';
import { portfolioProjects } from '../../data/portfolio-projects';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';


interface RelatedItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  type: 'blog' | 'project';
  url: string;
}

interface RelatedContentWidgetProps {
  /** Tags/categories to match against */
  tags?: string[];
  /** Number of items to show (default: 4) */
  count?: number;
  /** Section title */
  title?: string;
  /** Section label */
  label?: string;
  /** Exclude specific slugs */
  excludeSlugs?: string[];
}

export function RelatedContentWidget({
  tags = [],
  count = 4,
  title = 'You Might Also Like',
  label = 'Related Content',
  excludeSlugs = [],
}: RelatedContentWidgetProps) {
  const { ref: headerRef, style: headerStyle } = useScrollReveal({ animation: 'fade-up' });
  const { containerRef, itemStyle } = useStaggerReveal({ stagger: 100, animation: 'fade-up' });

  // Build related items from multiple data sources (memoized for stability)
  const displayItems = useMemo(() => {
    const relatedItems: RelatedItem[] = [];

    // Blog posts matched by tags/categories
    blogPosts
      .filter(post => !excludeSlugs.includes(post.slug))
      .forEach(post => {
        const matchScore = tags.filter(
          tag => post.tags.includes(tag) || post.categories.includes(tag)
        ).length;
        if (matchScore > 0 || tags.length === 0) {
          relatedItems.push({
            id: post.id,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            image: post.featuredImage,
            type: 'blog',
            url: `/blog/${post.slug}`,
          });
        }
      });

    // Portfolio projects matched by tags
    portfolioProjects
      .filter(project => !excludeSlugs.includes(project.slug))
      .forEach(project => {
        const matchScore = tags.filter(
          tag => project.projectTags.includes(tag) || project.projectGroups.includes(tag)
        ).length;
        if (matchScore > 0 || tags.length === 0) {
          relatedItems.push({
            id: project.id,
            slug: project.slug,
            title: project.title,
            excerpt: project.excerpt,
            image: project.featuredImage,
            type: 'project',
            url: `/portfolio/${project.slug}`,
          });
        }
      });

    // Deterministic shuffle based on content length (stable across renders)
    return relatedItems
      .sort((a, b) => a.title.length - b.title.length)
      .slice(0, count);
  }, [tags, count, excludeSlugs]);

  if (displayItems.length === 0) return null;

  const typeLabels: Record<string, string> = {
    blog: 'Blog Post',
    project: 'Case Study',
  };

  return (
    <div className="related-content">
      {/* Header */}
      <div
        className="related-content__header"
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={headerStyle}
      >
        <div className="related-content__label">{label}</div>
        <h2 className="related-content__title">{title}</h2>
      </div>

      {/* Grid */}
      <div
        className="related-content__grid"
        ref={containerRef as React.RefObject<HTMLDivElement>}
      >
        {displayItems.map((item, index) => (
          <Link
            key={`${item.type}-${item.id}`}
            to={item.url}
            className="related-content__card"
            style={itemStyle(index)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="related-content__card-image"
              loading="lazy"
            />
            <div className="related-content__card-body">
              <div className="related-content__card-type">
                {typeLabels[item.type]}
              </div>
              <div className="related-content__card-title">{item.title}</div>
              <div className="related-content__card-excerpt">{item.excerpt}</div>
            </div>
            <ArrowRight size={16} className="related-content__card-arrow" />
          </Link>
        ))}
      </div>
    </div>
  );
}
