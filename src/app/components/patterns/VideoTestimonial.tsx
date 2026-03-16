/**
 * Video Testimonial Pattern
 * 
 * Video testimonial card with play button and metadata.
 * Maps to WordPress pattern: lsx-design/content/video-testimonial
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/video-testimonial.css
 * - 100% CSS variables
 * - BEM naming
 */

import '../../../styles/patterns/video-testimonial.css';
import { PlayCircle, Clock } from '@phosphor-icons/react';
import { useState } from 'react';

export interface VideoTestimonialItem {
  /** Video title */
  title: string;
  /** Client name */
  clientName: string;
  /** Client role */
  clientRole: string;
  /** Client company */
  company: string;
  /** Video thumbnail URL */
  thumbnail: string;
  /** Video URL (YouTube, Vimeo, or direct) */
  videoUrl: string;
  /** Video duration (e.g., '2:34') */
  duration?: string;
  /** Video description */
  description?: string;
}

export interface VideoTestimonialProps {
  /** Array of video testimonials */
  videos: VideoTestimonialItem[];
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Display variant */
  variant?: 'grid' | 'carousel';
  /** Number of columns for grid layout (1-3) */
  columns?: 1 | 2 | 3;
  /** Maximum width container */
  maxWidth?: '3xl' | '4xl' | '6xl' | '7xl';
}

export function VideoTestimonial({
  videos,
  heading = 'Video testimonials',
  description,
  variant = 'grid',
  columns = 2,
  maxWidth = '6xl'
}: VideoTestimonialProps) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Max width classes
  const maxWidthClass = {
    '3xl': 'wp-max-w-3xl',
    '4xl': 'wp-max-w-4xl',
    '6xl': 'wp-max-w-6xl',
    '7xl': 'wp-max-w-7xl' // assuming this utility exists, otherwise standard naming
  }[maxWidth] || 'wp-max-w-6xl';

  const gridClass = `wp-grid-${columns}-cols`;

  return (
    <div className="video-testimonial">
      {/* Section Header */}
      {(heading || description) && (
        <div className="video-testimonial__header">
          {heading && (
            <h2
              className={`video-testimonial__title ${description ? 'video-testimonial__title--with-desc' : ''}`}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p className="video-testimonial__description">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Video Grid */}
      <div className={`${maxWidthClass} wp-mx-auto`}>
        <div className={gridClass}>
          {videos.map((video, index) => (
            <div
              key={index}
              className="video-testimonial__card"
              onClick={() => {
                // Open video in modal or new tab
                window.open(video.videoUrl, '_blank');
              }}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${video.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.open(video.videoUrl, '_blank');
                }
              }}
            >
              {/* Video Thumbnail */}
              <div className="video-testimonial__thumbnail-container">
                <img
                  src={video.thumbnail}
                  alt={`${video.title} video thumbnail`}
                  className="video-testimonial__thumbnail"
                />

                {/* Play Button Overlay */}
                <div className="video-testimonial__play-overlay">
                  <PlayCircle
                    size={48}
                    className="video-testimonial__play-icon"
                  />
                </div>

                {/* Duration Badge */}
                {video.duration && (
                  <div className="video-testimonial__duration">
                    <Clock size={12} />
                    {video.duration}
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="video-testimonial__content">
                {/* Title */}
                <h3 className="video-testimonial__video-title">
                  {video.title}
                </h3>

                {/* Description */}
                {video.description && (
                  <p className="video-testimonial__video-description">
                    {video.description}
                  </p>
                )}

                {/* Client Info */}
                <div className="testimonial-base__author">
                  <div className="testimonial-base__author-details">
                    <p className="testimonial-base__author-name">
                      {video.clientName}
                    </p>
                    <p className="testimonial-base__author-role">
                      {video.clientRole} at {video.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}