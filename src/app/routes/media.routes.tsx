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

import React from 'react';
import { useParams, type RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Static Template Imports
 * ═══════════════════════════════════════════ */

// Videos
import { VideoArchiveTemplate } from '../components/templates/VideoArchiveTemplate';
import { SingleVideoTemplate } from '../components/templates/SingleVideoTemplate';
import { VideoCategoryArchiveTemplate } from '../components/templates/VideoCategoryArchiveTemplate';
import { VideoTagArchiveTemplate } from '../components/templates/VideoTagArchiveTemplate';

// Podcasts
import { PodcastArchiveTemplate } from '../components/templates/PodcastArchiveTemplate';
import { SinglePodcastTemplate } from '../components/templates/SinglePodcastTemplate';
import { PodcastCategoryArchiveTemplate } from '../components/templates/PodcastCategoryArchiveTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

// Videos
function VideoArchiveRoute() {
  loadCSSBundle('media');
  return <VideoArchiveTemplate />;
}

function SingleVideoRoute() {
  const { slug } = useParams();
  loadCSSBundle('media');
  return <SingleVideoTemplate slug={slug} />;
}

function VideoCategoryRoute() {
  const { slug } = useParams();
  loadCSSBundle('media');
  return <VideoCategoryArchiveTemplate category={slug} />;
}

function VideoTagArchiveRoute() {
  const { slug } = useParams();
  loadCSSBundle('media');
  return <VideoTagArchiveTemplate tag={slug} />;
}

// Podcasts
function PodcastArchiveRoute() {
  loadCSSBundle('media');
  return <PodcastArchiveTemplate />;
}

function SinglePodcastRoute() {
  const { slug } = useParams();
  loadCSSBundle('media');
  return <SinglePodcastTemplate slug={slug} />;
}

function PodcastCategoryRoute() {
  loadCSSBundle('media');
  return <PodcastCategoryArchiveTemplate />;
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