# Instagram Embed Block

**WordPress Block:** `core-embed/instagram`  
**CSS:** `/src/styles/blocks/embed/embed-base.css`

## Component

```tsx
import '@/styles/blocks/embed/embed-base.css';

export interface InstagramEmbedProps {
  postUrl: string;
}

export const InstagramEmbed = ({ postUrl }: InstagramEmbedProps) => (
  <div className="wp-block-embed wp-block-embed-instagram">
    <div className="wp-block-embed__wrapper wp-block-embed--vertical">
      <iframe
        src={`${postUrl}embed`}
        title="Instagram post"
        allowFullScreen
      />
    </div>
  </div>
);
```

## Usage

```tsx
<InstagramEmbed postUrl="https://www.instagram.com/p/ABC123/" />
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
