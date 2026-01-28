# Mock Data & Post Formats Guidelines

**Last Updated:** January 27, 2026
**Status:** ✅ Implemented

This document outlines the centralized mock data system and the implementation of WordPress Post Formats and WooCommerce data structures.

---

## 📊 Mock Data System

All mock data is centralized in `/src/app/data/` to ensure type safety, consistency, and easy maintenance. This mirrors the WordPress database structure where content is separated from presentation.

### 🗂 File Structure

```
src/app/data/
├── taxonomies.ts          # Centralized Categories & Tags (WP & Woo)
├── woocommerce.ts         # Detailed Product Data (Core + Extensions)
├── posts-formats.ts       # Post Format Data (Audio, Video, Gallery, Aside)
├── homepage.ts            # Front Page specific data
├── pages.ts               # General page structure
└── ... (other specific page data)
```

---

## 📝 WordPress Post Formats

We support standard WordPress post formats with dedicated templates and mock data.

### Supported Formats

| Format | Description | Template | Mock Data |
|--------|-------------|----------|-----------|
| **Standard** | Typical article | `SinglePostTemplate` | `posts.ts` |
| **Audio** | Podcast episodes | `SingleAudioTemplate` | `posts-formats.ts` (audioPost) |
| **Video** | Video content (YouTube) | `SingleVideoTemplate` | `posts-formats.ts` (videoPost) |
| **Gallery** | Image collections (Instagram) | `SingleGalleryTemplate` | `posts-formats.ts` (galleryPost) |
| **Aside** | Status updates | `AsideStreamTemplate` | `posts-formats.ts` (asidePost) |

### Implementation Details

#### Audio (Podcast)
- **Archive:** `AudioArchiveTemplate` - Grid layout with play buttons.
- **Single:** `SingleAudioTemplate` - Features a dedicated audio player at the top.
- **Data Source:** `audioPost` in `posts-formats.ts`.
- **Meta Keys:** `audio_file`, `duration`.

#### Video
- **Archive:** `VideoArchiveTemplate` - Grid layout, latest video feature.
- **Single:** `SingleVideoTemplate` - Featured video player at the top.
- **Data Source:** `videoPost` in `posts-formats.ts`.
- **Meta Keys:** `video_url`, `video_duration`.

#### Gallery
- **Archive:** `GalleryArchiveTemplate` - Instagram-style grid feed.
- **Single:** `SingleGalleryTemplate` - Detailed view with slider/grid.
- **Data Source:** `galleryPost` in `posts-formats.ts`.
- **Meta Keys:** `gallery_images`.

#### Aside
- **Archive:** `AsideStreamTemplate` - Feed of brief status updates.
- **Data Source:** `asidePost` in `posts-formats.ts`.

---

## 🛒 WooCommerce Data Structures

Our mock data strictly follows WooCommerce database schemas and custom field naming conventions.

### Core Product Data
Located in `woocommerce.ts`, `simpleProduct` demonstrates:
- **Standard Fields:** `sku`, `price`, `regular_price`, `sale_price`, `stock_status`.
- **Meta Fields:** `_virtual`, `_downloadable`.
- **Taxonomies:** Uses centralized `productCategories` and `productTags`.

### Extension Support

#### 1. WooCommerce Subscriptions
**Data Object:** `subscriptionProduct`
**Key Fields:**
- `type`: 'subscription'
- `_subscription_price`: '199.00'
- `_subscription_period`: 'month'
- `_subscription_sign_up_fee`: '50.00'

#### 2. WooCommerce Composite Products
**Data Object:** `compositeProduct`
**Key Fields:**
- `type`: 'composite'
- `_bto_base_price`: '50.00'
- `_bto_components`: Array of component definitions (query_ids, quantity_min/max).

#### 3. WooCommerce Product Bundles
**Data Object:** `bundleProduct`
**Key Fields:**
- `type`: 'bundle'
- `_bndl_bundled_items`: Array of product IDs `[1001, 1005]`.
- `_wc_pb_base_price`: '149.00'.

---

## 🎨 Design System Compliance

All templates use the design system tokens via CSS variables:

- **Typography:** `var(--font-primary)`, `var(--text-h1)`, etc.
- **Spacing:** `var(--spacing-4)`, `var(--spacing-8)`.
- **Colors:** `var(--primary)`, `var(--background)`, `var(--border)`.
- **Radius:** `var(--radius-lg)`.

No hardcoded styles are used, ensuring full themeability via `theme.css`.
