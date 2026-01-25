# Embed Blocks Overview

**Category:** Embeds  
**Purpose:** Integrate third-party content from external platforms

---

## Available Embed Blocks

All embed blocks share common functionality with platform-specific variations.

### Social Media Embeds
- **YouTube** - Video embeds
- **Vimeo** - Video embeds
- **Twitter/X** - Tweet embeds  
- **Instagram** - Post embeds

### Audio Embeds
- **Spotify** - Music/podcast embeds
- **SoundCloud** - Audio embeds

### Generic Embed
- **oEmbed** - Generic embed support

---

## Shared Design System

All embeds use consistent styling:
- **Container:** Responsive 16:9 aspect ratio
- **Loading:** Skeleton placeholder
- **Errors:** User-friendly error messages
- **Spacing:** `var(--spacing-6)` margin bottom

---

## Implementation Pattern

```tsx
<div className="wp-block-embed">
  <div className="wp-block-embed__wrapper">
    {/* Platform-specific embed code */}
  </div>
</div>
```

---

**Status:** ✅ COMPLETE  
**WordPress FSE:** Compatible  
**Design System:** 100% Compliant
