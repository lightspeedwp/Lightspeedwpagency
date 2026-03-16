/**
 * Global Search — Helpers & Constants
 *
 * Extracted from GlobalSearchOverlay for file size compliance.
 *
 * @split March 16, 2026
 */

import {
  FileText,
  Folder,
  Video,
  Headphones,
  Globe,
} from '@phosphor-icons/react';
import type { ContentType } from '../../../data/search';

export const CONTENT_TYPES: ContentType[] = ['blog', 'portfolio', 'video', 'podcast', 'page'];
export const MAX_PREVIEW_RESULTS = 6;
export const DEBOUNCE_MS = 300;
export const RECENT_SEARCHES_KEY = 'lsx-recent-searches';
export const MAX_RECENT = 5;

export const contentTypeIcons: Record<ContentType, typeof FileText> = {
  blog: FileText,
  portfolio: Folder,
  video: Video,
  podcast: Headphones,
  page: Globe,
};

/** Highlight query terms in text */
export function highlightText(text: string, query: string): JSX.Element {
  if (!query.trim()) return <>{text}</>;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="global-search__highlight">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/** Recent searches persistence */
export function getRecentSearches(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecentSearch(query: string) {
  try {
    const recent = getRecentSearches().filter(q => q !== query);
    recent.unshift(query);
    localStorage.setItem(
      RECENT_SEARCHES_KEY,
      JSON.stringify(recent.slice(0, MAX_RECENT))
    );
  } catch {
    // Silently fail if localStorage unavailable
  }
}

export function clearRecentSearches() {
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch {
    // Silently fail
  }
}
