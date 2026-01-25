/**
 * Cover Block Component
 * 
 * WordPress Block: core/cover
 * Category: Media Blocks
 * 
 * @see /guidelines/blocks/media/cover.md
 * @see /src/styles/blocks/media/cover.css
 */

import '@/styles/blocks/media/cover.css';
import React from 'react';

export interface CoverProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  minHeight?: string;
  contentPosition?: 'top' | 'center' | 'bottom';
  className?: string;
}

export function Cover({
  children,
  backgroundImage,
  backgroundVideo,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  overlayOpacity = 0.5,
  minHeight = '500px',
  contentPosition = 'center',
  className = ''
}: CoverProps) {
  const blockClass = 'wp-block-cover';
  const positionClass = `${blockClass}--${contentPosition}`;
  const classes = [blockClass, positionClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={{ minHeight }}>
      {backgroundImage && (
        <img
          className={`${blockClass}__background`}
          src={backgroundImage}
          alt=""
          role="presentation"
        />
      )}
      {backgroundVideo && (
        <video
          className={`${blockClass}__background`}
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <div 
        className={`${blockClass}__overlay`}
        style={{ 
          background: overlayColor,
          opacity: overlayOpacity
        }}
      />
      <div className={`${blockClass}__content`}>
        {children}
      </div>
    </div>
  );
}
