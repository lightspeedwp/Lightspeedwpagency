# YouTube Embed Block

**WordPress Block:** `core-embed/youtube`  
**CSS:** `/src/styles/blocks/embed/embed-base.css`

## Component

```tsx
import '@/styles/blocks/embed/embed-base.css';

export interface YouTubeEmbedProps {
  videoId: string;
  autoplay?: boolean;
  controls?: boolean;
}

export const YouTubeEmbed = ({ videoId, autoplay = false, controls = true }: YouTubeEmbedProps) => (
  <div className="wp-block-embed wp-block-embed-youtube">
    <div className="wp-block-embed__wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);
```

## Usage

```tsx
<YouTubeEmbed videoId="dQw4w9WgXcQ" />
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
