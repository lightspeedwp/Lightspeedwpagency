/**
 * VideoTestimonial Pattern Component
 * 
 * A reusable pattern for displaying video testimonials with thumbnails,
 * play button overlays, and client information.
 * 
 * **Design System Compliance:**
 * - Colors: CSS variables only (var(--primary), var(--background), etc.)
 * - Typography: Lexend (headings), Manrope (body)
 * - Spacing: CSS variables (var(--spacing-*))
 * - Border Radius: CSS variables (var(--radius-*))
 * 
 * **WordPress Mapping:**
 * - Pattern: lsx-design/content/video-testimonial
 * - Block: Group → Grid → Video Cards
 * 
 * **Accessibility:**
 * - WCAG 2.1 AA compliant
 * - Keyboard navigation support
 * - Screen reader friendly
 * - Focus indicators on play buttons
 * 
 * **Usage:**
 * ```tsx
 * <VideoTestimonial
 *   videos={[
 *     {
 *       title: 'Client Success Story',
 *       clientName: 'John Doe',
 *       clientRole: 'CEO',
 *       company: 'Tech Corp',
 *       thumbnail: 'https://...',
 *       videoUrl: 'https://youtube.com/...',
 *       duration: '2:34'
 *     }
 *   ]}
 *   heading="Video Testimonials"
 *   variant="grid"
 *   columns={2}
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/VideoTestimonial.md}
 */

import { PlayCircle, Clock } from 'lucide-react';
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
  heading = 'Video Testimonials',
  description,
  variant = 'grid',
  columns = 2,
  maxWidth = '6xl'
}: VideoTestimonialProps) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Grid template based on columns
  const gridStyles = {
    1: { gridTemplateColumns: '1fr' },
    2: { 
      gridTemplateColumns: '1fr',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)'
      }
    },
    3: {
      gridTemplateColumns: '1fr',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)'
      }
    }
  };

  // Max width classes
  const maxWidthClass = {
    '3xl': 'wp-max-w-3xl',
    '4xl': 'wp-max-w-4xl',
    '6xl': 'wp-max-w-6xl',
    '7xl': 'max-w-7xl mx-auto px-6'
  }[maxWidth];

  return (
    <div className="w-full">
      {/* Section Header */}
      {(heading || description) && (
        <div className={`${maxWidthClass} wp-text-center`} style={{ marginBottom: 'var(--spacing-12)' }}>
          {heading && (
            <h2
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: '1.2',
                color: 'var(--foreground)',
                marginBottom: description ? 'var(--spacing-4)' : '0'
              }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-lg)',
                lineHeight: '1.6',
                color: 'var(--muted-foreground)',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Video Grid */}
      <div className={maxWidthClass}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: columns === 1 ? '1fr' : columns === 2 ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-8)'
          }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
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
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  backgroundColor: 'var(--muted)',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={`${video.title} video thumbnail`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Play Button Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <PlayCircle
                    size={48}
                    style={{
                      color: 'var(--primary)',
                      fill: 'var(--primary)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                {/* Duration Badge */}
                {video.duration && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: 'var(--radius)',
                      fontSize: 'var(--text-small)',
                      fontFamily: 'var(--font-secondary)',
                      fontWeight: 'var(--font-weight-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Clock size={12} />
                    {video.duration}
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div style={{ padding: 'var(--spacing-6)' }}>
                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    lineHeight: '1.4',
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  {video.title}
                </h3>

                {/* Description */}
                {video.description && (
                  <p
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.6',
                      color: 'var(--muted-foreground)',
                      marginBottom: 'var(--spacing-4)'
                    }}
                  >
                    {video.description}
                  </p>
                )}

                {/* Client Info */}
                <div style={{ marginTop: 'var(--spacing-4)' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      marginBottom: '2px'
                    }}
                  >
                    {video.clientName}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {video.clientRole} at {video.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
