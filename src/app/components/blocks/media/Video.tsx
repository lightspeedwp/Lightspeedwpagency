/**
 * Video Block Component
 * 
 * WordPress Block: core/video
 * Category: Media Blocks
 * 
 * @see /guidelines/blocks/media/video.md
 * @see /src/styles/blocks/media/video.css
 */

import '@/styles/blocks/media/video.css';
import React from 'react';

export interface VideoProps {
  src?: string;
  provider?: 'html5' | 'youtube' | 'vimeo';
  videoId?: string;
  poster?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  caption?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  className?: string;
}

export function Video({
  src,
  provider = 'html5',
  videoId,
  poster,
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
  caption,
  aspectRatio = '16:9',
  className = ''
}: VideoProps) {
  const blockClass = 'wp-block-video';
  const ratioClass = `${blockClass}--${aspectRatio.replace(':', '-')}`;
  const classes = [blockClass, ratioClass, className].filter(Boolean).join(' ');

  const renderVideo = () => {
    if (provider === 'youtube' && videoId) {
      return (
        <div className={`${blockClass}__embed`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    if (provider === 'vimeo' && videoId) {
      return (
        <div className={`${blockClass}__embed`}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            title="Vimeo video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    return (
      <video
        className={`${blockClass}__element`}
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        playsInline
      />
    );
  };

  return (
    <figure className={classes}>
      {renderVideo()}
      {caption && (
        <figcaption className={`${blockClass}__caption`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
