/**
 * QueryLoopTestimonials Pattern — LSX Design
 */

import { Star, Microphone as Mic, Video, Images, Quotes as Quote } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { TestimonialEntry } from '../../data/testimonials-extended';

const formatIcons = {
  standard: Quote,
  audio: Mic,
  video: Video,
  gallery: Images,
} as const;

const formatLabels = {
  standard: 'Written',
  audio: 'Audio',
  video: 'Video',
  gallery: 'Portfolio',
} as const;

export interface QueryLoopTestimonialsProps {
  testimonials: TestimonialEntry[];
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
  showFormat?: boolean;
}

export function QueryLoopTestimonials({
  testimonials,
  heading,
  description,
  columns = 3,
  showFormat = true,
}: QueryLoopTestimonialsProps) {
  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'fade-up',
    stagger: 80,
  });

  return (
    <QueryLoop
      heading={heading}
      description={description}
      columns={columns}
      isEmpty={testimonials.length === 0}
      emptyMessage="No testimonials found."
    >
      {testimonials.map((t, index) => {
        const FormatIcon = formatIcons[t.format];

        return (
          <Link
            key={t.id}
            to={`/testimonials/${t.slug}`}
            className="query-loop-card query-loop-card--clickable"
            ref={index === 0 ? containerRef as any : undefined}
            style={itemStyle(index)}
            aria-label={`Read testimonial from ${t.author}`}
          >
            {/* Image or video thumbnail */}
            {(t.video?.thumbnail || t.gallery?.images[0]) && (
              <div className="query-loop-card__image-wrapper">
                <img
                  src={t.video?.thumbnail || t.gallery?.images[0]}
                  alt={t.title}
                  className="query-loop-card__image"
                  loading="lazy"
                />
                {t.format === 'video' && (
                  <div className="query-loop-card__overlay">
                    <Video size={40} className="query-loop-card__play-icon" />
                  </div>
                )}
                {t.video?.duration && (
                  <span className="query-loop-card__duration">{t.video.duration}</span>
                )}
              </div>
            )}

            <div className="query-loop-card__body">
              {/* Format badge */}
              {showFormat && (
                <span className="query-loop-card__badge">
                  <FormatIcon size={12} />
                  {formatLabels[t.format]}
                </span>
              )}

              {/* Rating */}
              <div className="query-loop-card__stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'query-loop-card__star--filled' : 'query-loop-card__star--empty'}
                  />
                ))}
              </div>

              {/* Quote excerpt */}
              <p className="query-loop-card__excerpt">"{t.quote}"</p>

              {/* Author */}
              <div className="query-loop-card__author wp-mt-auto">
                <img src={t.avatar} alt={t.author} className="query-loop-card__avatar" loading="lazy" />
                <div>
                  <div className="query-loop-card__author-name">{t.author}</div>
                  <div className="query-loop-card__author-role">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </QueryLoop>
  );
}