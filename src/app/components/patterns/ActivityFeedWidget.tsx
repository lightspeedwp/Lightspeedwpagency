/**
 * ActivityFeedWidget Pattern
 *
 * Chronological activity feed showing latest content across
 * blog posts, portfolio projects, and testimonials.
 *
 * WordPress equivalent: Custom multi-post-type query loop
 *
 * @example
 * <ActivityFeedWidget count={6} />
 */

import { useMemo } from 'react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { blogPosts, blogAuthors } from '../../data/blog-posts';
import { portfolioProjects } from '../../data/portfolio-projects';
import { testimonials } from '../../data/testimonials';
import { Link } from 'react-router';
import { FileText, Briefcase, ChatDots, CalendarBlank } from '@phosphor-icons/react';

interface FeedItem {
  id: string;
  type: 'blog' | 'project' | 'testimonial';
  title: string;
  excerpt: string;
  date: string;
  url: string;
  meta?: string;
}

interface ActivityFeedWidgetProps {
  /** Number of items to show (default: 6) */
  count?: number;
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Content types to include */
  include?: ('blog' | 'project' | 'testimonial')[];
}

export function ActivityFeedWidget({
  count = 6,
  title = 'Latest Activity',
  subtitle = 'See what we\'ve been working on',
  include = ['blog', 'project', 'testimonial'],
}: ActivityFeedWidgetProps) {
  const { ref: headerRef, style: headerStyle } = useScrollReveal({ animation: 'fade-up' });
  const { containerRef, itemStyle } = useStaggerReveal({ stagger: 80, animation: 'fade-left' });

  // Build unified feed from multiple data sources
  const sortedItems = useMemo(() => {
    const feedItems: FeedItem[] = [];

    if (include.includes('blog')) {
      blogPosts.forEach(post => {
        const author = blogAuthors.find(a => a.slug === post.author);
        feedItems.push({
          id: `blog-${post.id}`,
          type: 'blog',
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          url: `/insights/${post.slug}`,
          meta: author ? `By ${author.name}` : undefined,
        });
      });
    }

    if (include.includes('project')) {
      portfolioProjects.forEach(project => {
        feedItems.push({
          id: `project-${project.id}`,
          type: 'project',
          title: project.title,
          excerpt: project.excerpt,
          date: project.date || '2025-01-01',
          url: `/work/${project.slug}`,
          meta: project.client,
        });
      });
    }

    if (include.includes('testimonial')) {
      testimonials.forEach((testimonial, i) => {
        feedItems.push({
          id: `testimonial-${testimonial.id || i}`,
          type: 'testimonial',
          title: `${testimonial.author} from ${testimonial.company}`,
          excerpt: testimonial.quote.length > 120
            ? testimonial.quote.substring(0, 120) + '...'
            : testimonial.quote,
          date: '2025-01-01',
          url: '/testimonials',
          meta: testimonial.role,
        });
      });
    }

    return feedItems
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  }, [include, count]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const typeIcons: Record<string, typeof FileText> = {
    blog: FileText,
    project: Briefcase,
    testimonial: ChatDots,
  };

  const typeLabels: Record<string, string> = {
    blog: 'Blog Post',
    project: 'Project',
    testimonial: 'Testimonial',
  };

  if (sortedItems.length === 0) return null;

  return (
    <div className="activity-feed">
      {/* Header */}
      <div
        className="activity-feed__header"
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={headerStyle}
      >
        <div>
          <h2 className="activity-feed__title">{title}</h2>
          {subtitle && <p className="activity-feed__subtitle">{subtitle}</p>}
        </div>
      </div>

      {/* Timeline */}
      <div
        className="activity-feed__timeline"
        role="feed"
        aria-label="Recent activity"
        ref={containerRef as React.RefObject<HTMLDivElement>}
      >
        {sortedItems.map((item, index) => {
          const Icon = typeIcons[item.type];

          return (
            <article
              key={item.id}
              className="activity-feed__item"
              style={itemStyle(index)}
              aria-label={`${typeLabels[item.type]}: ${item.title}`}
            >
              {/* Dot */}
              <div className={`activity-feed__item-dot activity-feed__item-dot--${item.type}`}>
                <Icon size={18} />
              </div>

              {/* Body */}
              <div className="activity-feed__item-body">
                <div className={`activity-feed__item-type activity-feed__item-type--${item.type}`}>
                  {typeLabels[item.type]}
                </div>
                <Link
                  to={item.url}
                  className="activity-feed__item-title"
                >
                  {item.title}
                </Link>
                <p className="activity-feed__item-excerpt">{item.excerpt}</p>
                <div className="activity-feed__item-meta">
                  <CalendarBlank size={12} className="activity-feed__item-meta-icon" />
                  <span>{formatDate(item.date)}</span>
                  {item.meta && (
                    <>
                      <span className="wp-text-muted-foreground wp-opacity-50">|</span>
                      <span>{item.meta}</span>
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}