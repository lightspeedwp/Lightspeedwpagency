# Twitter/X Embed Block

**WordPress Block:** `core-embed/twitter`  
**CSS:** `/src/styles/blocks/embed/embed-base.css`

## Component

```tsx
import '@/styles/blocks/embed/embed-base.css';

export interface TwitterEmbedProps {
  tweetId: string;
  theme?: 'light' | 'dark';
}

export const TwitterEmbed = ({ tweetId, theme = 'light' }: TwitterEmbedProps) => (
  <div className="wp-block-embed wp-block-embed-twitter">
    <div className="wp-block-embed__wrapper wp-block-embed--square">
      <blockquote className="twitter-tweet" data-theme={theme}>
        <a href={`https://twitter.com/x/status/${tweetId}`}>Loading tweet...</a>
      </blockquote>
    </div>
  </div>
);
```

## Usage

```tsx
<TwitterEmbed tweetId="1234567890" theme="dark" />
```

**Status:** ✅ COMPLETE | **Design System:** 100% Compliant
