/**
 * Media Routes
 * 
 * Routes for media archives: Videos and Podcasts
 * 
 * URL Patterns:
 * - `/videos/*` — Video archive + singles
 * - `/podcasts/*` — Podcast archive + singles
 * 
 * CSS Bundles:
 * - All media routes load 'media' bundle (~6-8KB gzipped)
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/media-bundle.css
 */

import React, { lazy, Suspense } from 'react';
import { useParams, type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

// Videos
const VideoArchiveTemplate = lazy(() => import('../components/templates/VideoArchiveTemplate').then(m => ({ default: m.VideoArchiveTemplate })));
const SingleVideoTemplate = lazy(() => import('../components/templates/SingleVideoTemplate').then(m => ({ default: m.SingleVideoTemplate })));
const VideoCategoryArchiveTemplate = lazy(() => import('../components/templates/VideoCategoryArchiveTemplate').then(m => ({ default: m.VideoCategoryArchiveTemplate })));
const VideoTagArchiveTemplate = lazy(() => import('../components/templates/VideoTagArchiveTemplate').then(m => ({ default: m.VideoTagArchiveTemplate })));

// Podcasts
const PodcastArchiveTemplate = lazy(() => import('../components/templates/PodcastArchiveTemplate').then(m => ({ default: m.PodcastArchiveTemplate })));
const SinglePodcastTemplate = lazy(() => import('../components/templates/SinglePodcastTemplate').then(m => ({ default: m.SinglePodcastTemplate })));
const PodcastCategoryArchiveTemplate = lazy(() => import('../components/templates/PodcastCategoryArchiveTemplate').then(m => ({ default: m.PodcastCategoryArchiveTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

// Videos
function VideoArchiveRoute() {
  loadCSSBundle('media');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <VideoArchiveTemplate />
    </Suspense>
  );
}

function SingleVideoRoute() {
  const { slug } = useParams();
  loadCSSBundle('media');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleVideoTemplate slug={slug} />
    </Suspense>
  );
}

function VideoCategoryRoute() {
  const { slug } = useParams();
  loadCSSBundle('media');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <VideoCategoryArchiveTemplate category={slug} />
    </Suspense>
  );
}

function VideoTagArchiveRoute() {
  const { slug } = useParams();
  loadCSSBundle('media');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <VideoTagArchiveTemplate tag={slug} />
    </Suspense>
  );
}

// Podcasts
function PodcastArchiveRoute() {
  loadCSSBundle('media');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <PodcastArchiveTemplate />
    </Suspense>
  );
}

function SinglePodcastRoute() {
  const { slug } = useParams();
  loadCSSBundle('media');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SinglePodcastTemplate slug={slug} />
    </Suspense>
  );
}

function PodcastCategoryRoute() {
  loadCSSBundle('media');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <PodcastCategoryArchiveTemplate />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const mediaRoutes: RouteObject[] = [
  /* ── Videos ── */
  { path: 'videos', Component: VideoArchiveRoute },
  { path: 'video/:slug', Component: SingleVideoRoute },
  { path: 'videos/category/:slug', Component: VideoCategoryRoute },
  { path: 'videos/tag/:slug', Component: VideoTagArchiveRoute },

  /* ── Podcasts ── */
  { path: 'podcasts', Component: PodcastArchiveRoute },
  { path: 'podcast/:slug', Component: SinglePodcastRoute },
  { path: 'podcasts/category/:slug', Component: PodcastCategoryRoute },
];