# SoundCloud Embed Block

**WordPress Block:** `core-embed/soundcloud`  
**CSS:** `/src/styles/blocks/embed/embed-base.css`

## Component

```tsx
import '@/styles/blocks/embed/embed-base.css';

export interface SoundCloudEmbedProps {
  trackUrl: string;
  visual?: boolean;
}

export const SoundCloudEmbed = ({ trackUrl, visual = true }: SoundCloudEmbedProps) => (
  <div className="wp-block-embed wp-block-embed-soundcloud">
    <div className="wp-block-embed__wrapper">
      <iframe
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&visual=${visual}`}
        title="SoundCloud player"
        allow="autoplay"
      />
    </div>
  </div>
);
```

## Usage

```tsx
<SoundCloudEmbed trackUrl="https://soundcloud.com/artist/track" />
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
