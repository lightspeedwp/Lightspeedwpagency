/**
 * Featured Project Text Pattern
 */

import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router';
import { ArrowRight, Star } from '@phosphor-icons/react';

interface FeaturedProjectTextProps {
  projectSlug?: string;
  className?: string;
}

export const FeaturedProjectText: React.FC<FeaturedProjectTextProps> = ({
  projectSlug = 'armd-digital', // Default to a known project
  className = ''
}) => {
  // Find the project
  const project = portfolioProjects.find(p => p.slug === projectSlug) || portfolioProjects[0];

  if (!project) return null;

  return (
    <section className={`featured-project-text ${className}`}>
      {/* Background Elements */}
      <div className="featured-project-text__bg-glow" />
      <div className="featured-project-text__grid" />

      <div className="featured-project-text__container">
        
        {/* Left Column: Content */}
        <div className="featured-project-text__content">
          <div className="featured-project-text__badge">
            <Star size={14} fill="currentColor" />
            Featured Case Study
          </div>

          <h2 className="featured-project-text__title">
            {project.title}
          </h2>

          <p className="featured-project-text__excerpt">
            {project.excerpt}
          </p>

          {/* Testimonial Box */}
          {project.testimonial && (
            <div className="featured-project-text__testimonial">
              <span className="featured-project-text__quote-mark">“</span>
              <blockquote className="featured-project-text__quote">
                {project.testimonial.quote}
              </blockquote>
              
              <div className="featured-project-text__author">
                <div className="featured-project-text__author-info">
                  <span className="featured-project-text__author-name">
                    {project.testimonial.author}
                  </span>
                  <span className="featured-project-text__author-role">
                    {project.testimonial.position}, {project.testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          )}

          <Link 
            className="featured-project-text__cta"
            to={`/work/${project.slug}`}
          >
            Read Case Study <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right Column: Image */}
        <div className="featured-project-text__image-wrapper">
          <div className="featured-project-text__accent featured-project-text__accent--tl" />
          <div className="featured-project-text__accent featured-project-text__accent--br" />
          
          <ImageWithFallback
            src={project.featuredImage}
            alt={project.title}
            className="featured-project-text__image"
          />
          
          {/* Overlay gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, color-mix(in srgb, var(--color-black) 80%, transparent) 0%, transparent 40%)',
            pointerEvents: 'none'
          }} />
        </div>

      </div>
    </section>
  );
};