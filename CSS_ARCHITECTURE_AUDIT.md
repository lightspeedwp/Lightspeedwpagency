# WordPress FSE CSS Architecture Audit & Migration Plan

**Date:** January 27, 2026
**Status:** Audit Complete / Migration Ready

## 1. Component Audit Matrix

A review of the codebase reveals a mix of approaches. While the core `FrontPageTemplate` is aligned with the new architecture, recently added Post Format templates rely heavily on inline Tailwind utility classes (e.g., `bg-[var(--secondary)]`, `py-12`) to get the job done quickly. This needs to be standardized.

| File Path | Compliance Status | Inline/Tailwind Usage | Recommended Section Style |
| :---- | :---- | :---- | :---- |
| `/src/app/components/templates/FrontPageTemplate.tsx` | ✅ High | Mostly clean. Uses `wp-block-*` classes. | `sections/hero-homepage.css`, `sections/services-grid.css` |
| `/src/app/components/parts/SiteHeader.tsx` | ⚠️ Medium | Inline styles for mobile menu layout and button styling. | `blocks/theme/site-header.css`, `blocks/theme/navigation.css` |
| `/src/app/components/blocks/design/Buttons.tsx` | ⚠️ Medium | Inline styles for hover states and transitions. | `blocks/design/buttons.css` (move hover logic to CSS) |
| `/src/app/components/templates/post-formats/SingleImageTemplate.tsx` | 🔴 Low | Heavy use of Tailwind: `py-8`, `md:py-12`, `border-b`, `max-w-4xl`. | `blocks/post-formats/image.css`, `sections/post-hero.css` |
| `/src/app/components/templates/post-formats/SingleQuoteTemplate.tsx` | 🔴 Low | Heavy use of Tailwind: `min-h-[60vh]`, `p-12`, `absolute`, `top-0`. | `blocks/post-formats/quote.css` |
| `/src/app/components/templates/post-formats/SingleLinkTemplate.tsx` | 🔴 Low | Tailwind utilities: `w-16`, `h-16`, `bg-[var(--secondary)]`, `rounded-full`. | `blocks/post-formats/link.css` |
| `/src/app/components/templates/post-formats/SingleAsideTemplate.tsx` | 🔴 Low | Tailwind utilities: `flex`, `items-start`, `gap-4`. | `blocks/post-formats/aside.css` |
| `/src/app/components/templates/post-formats/AudioArchiveTemplate.tsx` | 🔴 Low | Tailwind utilities: `grid`, `aspect-square`, `group-hover:scale-110`. | `blocks/post-formats/audio.css`, `sections/media-grid.css` |

## 2. Proposed Section Styles List

We will create dedicated CSS files for recurring patterns. These should be placed in `/src/styles/sections/`.

*   **`/src/styles/sections/hero-homepage.css`**: Styles for the main homepage hero.
*   **`/src/styles/sections/post-hero.css`**: Standardized hero section for single posts (title, meta, breadcrumbs).
*   **`/src/styles/sections/media-grid.css`**: Masonry or grid layouts for Gallery and Image archives.
*   **`/src/styles/sections/quote-card.css`**: Specialized styling for Quote post format cards.
*   **`/src/styles/sections/status-feed.css`**: Timeline layout for Status/Aside updates.
*   **`/src/styles/sections/chat-transcript.css`**: Styling for Chat post format (message bubbles).

## 3. Styles Folder Migration Plan

We will refactor `/src/styles/` into a structured FSE-aligned hierarchy.

**Target Structure:**

*   `/src/styles/blocks/design/`: `buttons.css`, `group.css`, `columns.css`
*   `/src/styles/blocks/embed/`: `embed.css`
*   `/src/styles/blocks/media/`: `image.css`, `gallery.css`, `video.css`, `audio.css`
*   `/src/styles/blocks/text/`: `paragraph.css`, `heading.css`, `list.css`, `quote.css`, `chat.css`
*   `/src/styles/blocks/theme/`: `site-header.css`, `site-footer.css`, `navigation.css`
*   `/src/styles/blocks/widgets/`: `tags.css`, `categories.css`
*   `/src/styles/sections/`: (See list above)
*   `/src/styles/presets/`: `theme-base.css` (Shadows, Radii)
*   `/src/styles/colors/`: `theme-light.css`, `theme-dark.css`
*   `/src/styles/utilities/`: `global-utilities.css`, `responsive.css`

## 4. Implementation Strategy

### Step 1: Directory Structure Creation
Execute the following commands to set up the new folder structure:
```bash
mkdir -p src/styles/blocks/{design,embed,forms,media,text,theme,widgets,woocommerce,post-formats}
mkdir -p src/styles/{sections,presets,colors,typesets,animations,utilities,variations}
```

### Step 2: CSS Extraction
1.  **Extract Post Format Styles**: Create `blocks/post-formats/*.css` files. Extract the Tailwind utility classes from the new templates into these CSS files using BEM naming (e.g., `.wp-block-post-quote`).
2.  **Refactor Global Styles**: Split `wordpress-blocks.css` into individual block files.

### Step 3: Component Refactoring
1.  **Refactor Templates**: Update `SingleImageTemplate.tsx`, `SingleQuoteTemplate.tsx`, etc., to replace Tailwind classes with the new BEM classes.
    *   *Example:* Replace `className="bg-[var(--secondary)] py-8"` with `className="wp-block-post-hero"`.
2.  **Refactor Components**: Update `Buttons.tsx` to remove inline hover logic and use CSS `:hover` states in `blocks/design/buttons.css`.

### Step 4: Verification
1.  Verify all new templates render correctly without inline styles.
2.  Ensure global styles are loading in the correct order in `index.css`.
