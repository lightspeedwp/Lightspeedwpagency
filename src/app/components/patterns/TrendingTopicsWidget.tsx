/**
 * TrendingTopicsWidget Pattern
 *
 * Interactive tag cloud showing categories, tags, and technologies
 * with post counts. Pulls from centralized taxonomy data.
 *
 * WordPress equivalent: wp:tag-cloud block
 *
 * @example
 * <TrendingTopicsWidget />
 * <TrendingTopicsWidget sources={['blog', 'projects']} />
 */

import { useScrollReveal } from '../../hooks/useScrollReveal';
import { blogCategories, blogTags, projectGroups, projectTags } from '../../data/taxonomies';
import { Link } from 'react-router';


interface TopicItem {
  slug: string;
  name: string;
  count: number;
  url: string;
  source: string;
}

interface TrendingTopicsWidgetProps {
  /** Data sources to include */
  sources?: ('blog-categories' | 'blog-tags' | 'project-groups' | 'project-tags')[];
  /** Section title */
  title?: string;
  /** Section label */
  label?: string;
  /** Description text */
  description?: string;
  /** Maximum topics to show per section */
  maxPerSection?: number;
  /** Show section labels */
  showSections?: boolean;
  /** Active topic slug */
  activeTopic?: string;
  /** Callback when topic is clicked */
  onTopicClick?: (slug: string, source: string) => void;
}

function getTagSize(count: number, maxCount: number): string {
  const ratio = count / maxCount;
  if (ratio > 0.7) return 'trending-topics__tag--lg';
  if (ratio < 0.3) return 'trending-topics__tag--sm';
  return '';
}

export function TrendingTopicsWidget({
  sources = ['blog-categories', 'blog-tags', 'project-groups'],
  title = 'Explore Our Expertise',
  label = 'Trending Topics',
  description,
  maxPerSection = 12,
  showSections = true,
  activeTopic,
  onTopicClick,
}: TrendingTopicsWidgetProps) {
  const { ref: headerRef, style: headerStyle } = useScrollReveal({ animation: 'fade-up' });
  const { ref: cloudRef, style: cloudStyle } = useScrollReveal({ animation: 'fade-up', delay: 150 });

  // Build topic sections from taxonomy data
  const sections: { label: string; items: TopicItem[] }[] = [];

  if (sources.includes('blog-categories')) {
    sections.push({
      label: 'Blog Categories',
      items: blogCategories
        .filter(c => c.count && c.count > 0)
        .sort((a, b) => (b.count || 0) - (a.count || 0))
        .slice(0, maxPerSection)
        .map(c => ({
          slug: c.slug,
          name: c.name,
          count: c.count || 0,
          url: `/blog/category/${c.slug}`,
          source: 'blog-categories',
        })),
    });
  }

  if (sources.includes('blog-tags')) {
    sections.push({
      label: 'Popular Tags',
      items: blogTags
        .filter(t => t.count && t.count > 0)
        .sort((a, b) => (b.count || 0) - (a.count || 0))
        .slice(0, maxPerSection)
        .map(t => ({
          slug: t.slug,
          name: t.name,
          count: t.count || 0,
          url: `/blog/tag/${t.slug}`,
          source: 'blog-tags',
        })),
    });
  }

  if (sources.includes('project-groups')) {
    sections.push({
      label: 'Industries',
      items: projectGroups
        .filter(g => g.count && g.count > 0)
        .sort((a, b) => (b.count || 0) - (a.count || 0))
        .slice(0, maxPerSection)
        .map(g => ({
          slug: g.slug,
          name: g.name,
          count: g.count || 0,
          url: `/portfolio/category/${g.slug}`,
          source: 'project-groups',
        })),
    });
  }

  if (sources.includes('project-tags')) {
    sections.push({
      label: 'Technologies',
      items: projectTags
        .filter(t => t.count && t.count > 0)
        .sort((a, b) => (b.count || 0) - (a.count || 0))
        .slice(0, maxPerSection)
        .map(t => ({
          slug: t.slug,
          name: t.name,
          count: t.count || 0,
          url: `/portfolio/tag/${t.slug}`,
          source: 'project-tags',
        })),
    });
  }

  // Compute max count across all items for sizing
  const allItems = sections.flatMap(s => s.items);
  const maxCount = Math.max(...allItems.map(i => i.count), 1);

  if (allItems.length === 0) return null;

  return (
    <div className="trending-topics">
      {/* Header */}
      <div
        className="trending-topics__header"
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={headerStyle}
      >
        <div className="trending-topics__label">{label}</div>
        <h2 className="trending-topics__title">{title}</h2>
        {description && (
          <p className="trending-topics__description">{description}</p>
        )}
      </div>

      {/* Tag Cloud */}
      <div ref={cloudRef as React.RefObject<HTMLDivElement>} style={cloudStyle}>
        {showSections ? (
          sections.map(section => (
            <div key={section.label} className="trending-topics__section">
              <div className="trending-topics__section-label">{section.label}</div>
              <div className="trending-topics__cloud">
                {section.items.map(item => {
                  const TagComponent = onTopicClick ? 'button' : Link;
                  const tagProps = onTopicClick 
                    ? { onClick: (e: React.MouseEvent) => { e.preventDefault(); onTopicClick(item.slug, item.source); } }
                    : { to: item.url };

                  return (
                    <TagComponent
                      key={`${item.source}-${item.slug}`}
                      className={`trending-topics__tag ${getTagSize(item.count, maxCount)} ${
                        activeTopic === item.slug ? 'trending-topics__tag--active' : ''
                      }`}
                      {...tagProps as any}
                    >
                      {item.name}
                      <span className="trending-topics__tag-count">{item.count}</span>
                    </TagComponent>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="trending-topics__cloud">
            {allItems.map(item => {
              const TagComponent = onTopicClick ? 'button' : Link;
              const tagProps = onTopicClick 
                ? { onClick: (e: React.MouseEvent) => { e.preventDefault(); onTopicClick(item.slug, item.source); } }
                : { to: item.url };

              return (
                <TagComponent
                  key={`${item.source}-${item.slug}`}
                  className={`trending-topics__tag ${getTagSize(item.count, maxCount)} ${
                    activeTopic === item.slug ? 'trending-topics__tag--active' : ''
                  }`}
                  {...tagProps as any}
                >
                  {item.name}
                  <span className="trending-topics__tag-count">{item.count}</span>
                </TagComponent>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
