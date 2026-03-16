/**
 * QueryLoopPosts Pattern — LSX Design
 *
 * Content card query loop for Posts and Portfolio projects.
 * Replaces: QueryLoopPosts (original), QueryLoopPortfolio
 *
 * @see /src/styles/patterns/query-loop.css
 */

import {
  Calendar,
  Clock,
  Briefcase,
  ArrowSquareOut as ExternalLink,
} from '@phosphor-icons/react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { BlogPost } from '../../data/blog-posts';
import type { PortfolioProject } from '../../data/portfolio-projects';

export type ContentVariant = 'posts' | 'portfolio';

export interface QueryLoopPostsProps {
  posts: BlogPost[];
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
}

export interface QueryLoopPortfolioProps {
  projects: PortfolioProject[];
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
}

/* ── Posts variant ── */

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

/* ── Portfolio variant ── */

export function QueryLoopPortfolio({
  projects,
  heading = 'Portfolio',
  description,
  columns = 3,
}: QueryLoopPortfolioProps) {
  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'fade-up',
    stagger: 80,
  });

  return (
    <QueryLoop
      heading={heading}
      description={description}
      columns={columns}
      isEmpty={projects.length === 0}
      emptyMessage="No portfolio projects found."
    >
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to={`/work/${project.slug}`}
          className="query-loop-card query-loop-card--clickable"
          ref={index === 0 ? containerRef as any : undefined}
          style={itemStyle(index)}
          aria-label={`View project: ${project.title}`}
        >
          {project.featuredImage && (
            <div className="query-loop-card__image-wrapper">
              <img
                src={project.featuredImage}
                alt={project.title}
                className="query-loop-card__image"
                loading="lazy"
              />
              <div className="query-loop-card__overlay">
                <ExternalLink size={32} className="query-loop-card__play-icon" />
              </div>
            </div>
          )}

          <div className="query-loop-card__body">
            <span className="query-loop-card__badge">
              <Briefcase size={12} /> {project.projectGroups[0] || 'Case Study'}
            </span>

            <h3 className="query-loop-card__title">{project.title}</h3>
            <p className="query-loop-card__excerpt">{project.excerpt}</p>

            {/* Tech tags */}
            <div className="query-loop-card__tags">
              {project.caseStudy.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="query-loop-card__tag">{tech}</span>
              ))}
            </div>

            <div className="query-loop-card__meta">
              <span className="query-loop-card__meta-item">
                <Briefcase size={14} /> {project.client}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </QueryLoop>
  );
}
