/**
 * Featured Project (Video) Pattern
 * 
 * A single featured project with a video testimonial/showcase.
 * 
 * Dependencies:
 * - lucide-react
 * - /src/styles/patterns/featured-project-video.css
 */

import React from 'react';
import { portfolioProjects } from '../../data/portfolio-projects';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router';
import { ArrowRight, Play, Film } from 'lucide-react';


interface FeaturedProjectVideoProps {
  projectSlug?: string;
  videoUrl?: string; // Optional override
  className?: string;
}

export const FeaturedProjectVideo: React.FC<FeaturedProjectVideoProps> = ({
  projectSlug = 'kalahari-safaris',
  videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
  className = ''
}) => {
  // Find the project
  const project = portfolioProjects.find(p => p.slug === projectSlug) || portfolioProjects[1];

  if (!project) return null;

  return (
    <section className={`featured-project-video ${className}`}>
      {/* Background Elements */}
      <div className="featured-project-video__bg" />
      <div className="featured-project-video__lines" />

      <div className="featured-project-video__container">
        
        {/* Left Column: Video */}
        <div className="featured-project-video__video-wrapper">
          <ImageWithFallback
            src={project.featuredImage}
            alt={project.title}
            className="featured-project-video__thumbnail"
          />
          
          <div className="featured-project-video__play-btn">
            <Play size={32} fill="currentColor" className="featured-project-video__play-icon" />
          </div>

          {/* Actual video embed would go here in a modal or replace thumbnail on click */}
        </div>

        {/* Right Column: Content */}
        <div className="featured-project-video__content">
          <div className="featured-project-video__label">
            <Film size={14} />
            Video Case Study
          </div>

          <h2 className="featured-project-video__title">
            See How We Helped <br />
            <span className="featured-project-video__highlight">{project.client}</span>
          </h2>

          <p className="featured-project-video__description">
            {project.caseStudy.challenge.substring(0, 150)}...
          </p>

          <div className="featured-project-video__stats">
            {project.caseStudy.results.slice(0, 2).map((result, index) => (
              <div key={index} className="featured-project-video__stat">
                <span className="featured-project-video__stat-value">
                  {result.value}
                </span>
                <span className="featured-project-video__stat-label">
                  {result.metric}
                </span>
              </div>
            ))}
          </div>

          <Link 
            className="featured-project-video__cta"
            to={`/work/${project.slug}`}
          >
            View Full Case Study <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};
