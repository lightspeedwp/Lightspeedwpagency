# Vimeo Embed Block

**WordPress Block:** `core-embed/vimeo`  
**CSS:** `/src/styles/blocks/embed/embed-base.css`

## Component

```tsx
import '@/styles/blocks/embed/embed-base.css';

export interface VimeoEmbedProps {
  videoId: string;
  autoplay?: boolean;
}

export const VimeoEmbed = ({ videoId, autoplay = false }: VimeoEmbedProps) => (
  <div className="wp-block-embed wp-block-embed-vimeo">
    <div className="wp-block-embed__wrapper">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}`}
        title="Vimeo video player"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);
```

## Usage

```tsx
<VimeoEmbed videoId="123456789" />
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
