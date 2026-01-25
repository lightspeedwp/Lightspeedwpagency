# Spotify Embed Block

**WordPress Block:** `core-embed/spotify`  
**CSS:** `/src/styles/blocks/embed/embed-base.css`

## Component

```tsx
import '@/styles/blocks/embed/embed-base.css';

export interface SpotifyEmbedProps {
  uri: string; // track, album, or playlist URI
  type?: 'track' | 'album' | 'playlist' | 'show' | 'episode';
}

export const SpotifyEmbed = ({ uri, type = 'track' }: SpotifyEmbedProps) => (
  <div className="wp-block-embed wp-block-embed-spotify">
    <div className="wp-block-embed__wrapper">
      <iframe
        src={`https://open.spotify.com/embed/${type}/${uri}`}
        title="Spotify player"
        allow="encrypted-media"
      />
    </div>
  </div>
);
```

## Usage

```tsx
<SpotifyEmbed uri="3n3Ppam7vgaVa1iaRUc9Lp" type="track" />
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
