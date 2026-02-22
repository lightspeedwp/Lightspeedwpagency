# Search System Documentation

**Version:** 1.0
**Last Updated:** February 18, 2026

---

## 🎯 Overview

The LSX Design search system is a **client-side, weighted search engine** that aggregates content from all mock data sources. It provides instant feedback via a header overlay and a comprehensive results page with filtering capabilities.

---

## 🏗️ Architecture

### Data Aggregation (`/src/app/data/search.ts`)

The system aggregates data from multiple sources into a unified `SearchResult` interface:

```typescript
interface SearchResult {
  id: string;
  title: string;
  slug: string;
  type: 'page' | 'post' | 'project' | 'video' | 'podcast';
  excerpt: string;
  url: string;
  image?: string;
  date?: string;
  relevance?: number; // Calculated score
}
```

**Sources:**
- `sitePages` (Pages)
- `blogPosts` (Posts)
- `portfolioProjects` (Projects)
- `videos` (Videos)
- `podcasts` (Podcasts)

### Relevance Scoring

Search results are ranked based on a weighted scoring algorithm:
1. **Title Match:** High priority (10 points)
2. **Category/Tag Match:** Medium priority (5 points)
3. **Excerpt Match:** Low priority (1 point)

---

## 🔍 Components

### 1. Global Search Overlay (`GlobalSearchOverlay.tsx`)
- **Trigger:** `Cmd/Ctrl + K` or Search Icon in Header.
- **Features:**
  - Live typing feedback (debounced 300ms).
  - Shows top 6 results.
  - "Quick Filters" to scope search immediately.
  - Keyboard navigation (Arrow keys, Enter).
  - Backdrop blur and body scroll lock.

### 2. Search Results Page (`SearchResultsPageTemplate.tsx`)
- **Route:** `/search?q=...`
- **Features:**
  - Full paginated results list.
  - `TaxonomyFilter` integration for content-type filtering.
  - Sorting options (Relevance, Date).
  - URL parameter synchronization (shareable searches).

### 3. Taxonomy Filter (`TaxonomyFilter.tsx`)
- **Usage:** Shared across Archive and Search pages.
- **Features:**
  - Multi-select capability.
  - Mobile-responsive drawer mode.
  - Visual result counters.

---

## 🔗 URL Structure

The search system relies on standard query parameters:

| Parameter | Example | Description |
|-----------|---------|-------------|
| `q` | `?q=wordpress` | Search query string |
| `type` | `?type=project` | Content type filter |
| `sort` | `?sort=date` | Sort order (date/relevance) |

---

## 🔌 WordPress Integration Plan

In a live WordPress environment, this system maps to:

1. **REST API**: Use `wp-json/wp/v2/search` endpoint.
2. **Relevanssi**: Recommended plugin for enhanced weightings.
3. **Frontend**: The React components remain the same, but `useSearch()` hook switches from local data filtering to API fetching.

---

## ✅ Best Practices

- **Debouncing:** Always debounce input to prevent UI jank.
- **Empty States:** Always provide helpful "No results found" messages with suggestions.
- **Accessibility:** Ensure the search input has `aria-label` and results have proper focus management.
- **Persistence:** Save recent searches to `localStorage` for better UX.
