/**
 * Video Testimonial Component
 * 
 * WordPress concept: Video widget with testimonial overlay
 * Pattern: `lsx-design/content/video-testimonial`
 * 
 * Video player with testimonial information, author details,
 * and custom controls.
 * 
 * **Purpose:**
 * - Display customer video testimonials
 * - Build trust through authentic video content
 * - Support YouTube, Vimeo, and self-hosted videos
 * - Show author information overlay
 * 
 * **Video Sources:**
 * - YouTube embeds
 * - Vimeo embeds
 * - Self-hosted MP4 videos
 * - Video URLs
 * 
 * **Design System:**
 * - Typography: Lexend for names, Manrope for text
 * - Colors: var(--background) for overlays
 * - Spacing: Tailwind classes
 * - Fonts: Design system fonts only
 * 
 * **Accessibility:**
 * - Keyboard controls
 * - ARIA labels
 * - Captions support
 * - Screen reader friendly
 * 
 * **Performance:**
 * - Lazy loading
 * - Poster images
 * - Progressive enhancement
 * - Optimized embeds
 * 
 * @example
 * // YouTube video
 * <VideoTestimonial
 *   videoType="youtube"
 *   videoId="dQw4w9WgXcQ"
 *   author="Sarah Johnson"
 *   authorTitle="CEO, Safari Consultants"
 *   quote="LSX Design transformed our online presence"
 * />
 * 
 * @example
 * // Self-hosted video
 * <VideoTestimonial
 *   videoType="hosted"
 *   videoUrl="/videos/testimonial.mp4"
 *   posterImage="/images/video-poster.jpg"
 *   author="Michael Chen"
 *   authorTitle="Founder, TechStartup Co"
 * />
 */

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Quote } from 'lucide-react';

/**
 * Video source type
 */
type VideoType = 'youtube' | 'vimeo' | 'hosted';

/**
 * Video Testimonial component props
 */
interface VideoTestimonialProps {
  /**
   * Video source type
   * 
   * - youtube: YouTube embed
   * - vimeo: Vimeo embed
   * - hosted: Self-hosted video file
   * 
   * @default "youtube"
   */
  videoType: VideoType;

  /**
   * YouTube video ID (for YouTube videos)
   * 
   * @example
   * videoId="dQw4w9WgXcQ"
   */
  videoId?: string;

  /**
   * Vimeo video ID (for Vimeo videos)
   * 
   * @example
   * vimeoId="123456789"
   */
  vimeoId?: string;

  /**
   * Video URL (for self-hosted videos)
   * 
   * @example
   * videoUrl="/videos/testimonial.mp4"
   */
  videoUrl?: string;

  /**
   * Poster image URL (thumbnail before play)
   * 
   * @example
   * posterImage="/images/video-poster.jpg"
   */
  posterImage?: string;

  /**
   * Testimonial author name
   * 
   * @example
   * author="Sarah Johnson"
   */
  author: string;

  /**
   * Author photo URL
   */
  authorPhoto?: string;

  /**
   * Author job title or company
   * 
   * @example
   * authorTitle="CEO, African Safari Consultants"
   */
  authorTitle?: string;

  /**
   * Testimonial quote (optional)
   */
  quote?: string;

  /**
   * Video duration (for display)
   * 
   * @example
   * duration="2:45"
   */
  duration?: string;

  /**
   * Show controls
   * 
   * @default true
   */
  showControls?: boolean;

  /**
   * Autoplay video (not recommended for UX)
   * 
   * @default false
   */
  autoplay?: boolean;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Get YouTube embed URL
 */
function getYouTubeEmbedUrl(videoId: string, autoplay: boolean = false): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=${autoplay ? '1' : '0'}`;
}

/**
 * Get Vimeo embed URL
 */
function getVimeoEmbedUrl(vimeoId: string, autoplay: boolean = false): string {
  return `https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? '1' : '0'}&title=0&byline=0&portrait=0`;
}

/**
 * Video Testimonial Component
 * 
 * Displays video testimonial with author information.
 * 
 * @param props - VideoTestimonialProps
 * @returns Video testimonial player
 */
export function VideoTestimonial({
  videoType,
  videoId,
  vimeoId,
  videoUrl,
  posterImage,
  author,
  authorPhoto,
  authorTitle,
  quote,
  duration,
  showControls = true,
  autoplay = false,
  className = '',
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle play/pause for hosted videos
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setShowOverlay(false);
    }
    setIsPlaying(!isPlaying);
  };

  // Handle mute/unmute
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Video Container */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 'var(--radius-lg)',
          aspectRatio: '16 / 9',
          backgroundColor: 'var(--muted)',
        }}
      >
        {/* YouTube Video */}
        {videoType === 'youtube' && videoId && (
          <iframe
            src={getYouTubeEmbedUrl(videoId, autoplay)}
            title={`Video testimonial from ${author}`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}

        {/* Vimeo Video */}
        {videoType === 'vimeo' && vimeoId && (
          <iframe
            src={getVimeoEmbedUrl(vimeoId, autoplay)}
            title={`Video testimonial from ${author}`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}

        {/* Self-Hosted Video */}
        {videoType === 'hosted' && videoUrl && (
          <>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              poster={posterImage}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls */}
            {showControls && (
              <div
                className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-4"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                }}
              >
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="transition-transform hover:scale-110"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  ) : (
                    <Play className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  )}
                </button>

                {/* Mute/Unmute */}
                <button
                  onClick={toggleMute}
                  className="transition-transform hover:scale-110"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  ) : (
                    <Volume2 className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  )}
                </button>

                <div className="flex-1" />

                {/* Duration */}
                {duration && (
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: '#FFFFFF',
                    }}
                  >
                    {duration}
                  </span>
                )}

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="transition-transform hover:scale-110"
                  aria-label="Toggle fullscreen"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <Maximize className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </button>
              </div>
            )}
          </>
        )}

        {/* Play Button Overlay (for hosted videos) */}
        {videoType === 'hosted' && !isPlaying && showOverlay && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Play video testimonial"
          >
            <div
              className="flex items-center justify-center rounded-full transition-transform hover:scale-110"
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--primary)',
              }}
            >
              <Play
                className="w-10 h-10"
                style={{
                  color: 'var(--primary-foreground)',
                  marginLeft: '4px', // Visual centering
                }}
              />
            </div>
          </button>
        )}
      </div>

      {/* Author Information */}
      <div
        className="mt-6 p-6 rounded"
        style={{
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        {/* Quote */}
        {quote && (
          <div className="mb-4">
            <Quote
              className="w-8 h-8 mb-2"
              style={{ color: 'var(--primary)', opacity: 0.3 }}
            />
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--foreground)',
                fontStyle: 'italic',
                lineHeight: '1.6',
              }}
            >
              "{quote}"
            </p>
          </div>
        )}

        {/* Author Details */}
        <div className="flex items-center gap-4">
          {authorPhoto ? (
            <img
              src={authorPhoto}
              alt={author}
              className="rounded-full object-cover"
              style={{
                width: '56px',
                height: '56px',
              }}
            />
          ) : (
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: '56px',
                height: '56px',
                backgroundColor: 'var(--primary)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h4)',
                  fontWeight: '600',
                  color: 'var(--primary-foreground)',
                }}
              >
                {author.charAt(0)}
              </span>
            </div>
          )}

          <div>
            <p
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '600',
                color: 'var(--foreground)',
              }}
            >
              {author}
            </p>
            {authorTitle && (
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                }}
              >
                {authorTitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Video Testimonial Grid
 * 
 * Display multiple video testimonials in a grid.
 */
interface VideoTestimonialGridProps {
  testimonials: Omit<VideoTestimonialProps, 'className'>[];
  columns?: 1 | 2 | 3;
  className?: string;
}

export function VideoTestimonialGrid({
  testimonials,
  columns = 2,
  className = '',
}: VideoTestimonialGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-8 ${className}`}>
      {testimonials.map((testimonial, index) => (
        <VideoTestimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/content/video-testimonial
 * Category: content
 */
