/**
 * Post Formats Routes
 * 
 * Routes for WordPress post format archives and singles
 * 
 * URL Pattern: `/insights/format/*`
 * 
 * Post Formats:
 * - Audio
 * - Gallery
 * - Image
 * - Quote
 * - Link
 * - Chat
 * - Status
 * - Standard
 * - Aside
 * 
 * CSS Bundles:
 * - All post format routes load 'blog' bundle (~8-12KB gzipped)
 * - Post formats are blog content, so they share the blog bundle
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/blog-bundle.css
 */

import React, { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

const AudioArchiveTemplate = lazy(() => import('../components/templates/post-formats/AudioArchiveTemplate').then(m => ({ default: m.AudioArchiveTemplate })));
const SingleAudioTemplate = lazy(() => import('../components/templates/post-formats/SingleAudioTemplate').then(m => ({ default: m.SingleAudioTemplate })));
const GalleryArchiveTemplate = lazy(() => import('../components/templates/post-formats/GalleryArchiveTemplate').then(m => ({ default: m.GalleryArchiveTemplate })));
const SingleGalleryTemplate = lazy(() => import('../components/templates/post-formats/SingleGalleryTemplate').then(m => ({ default: m.SingleGalleryTemplate })));
const ImageArchiveTemplate = lazy(() => import('../components/templates/post-formats/ImageArchiveTemplate').then(m => ({ default: m.ImageArchiveTemplate })));
const SingleImageTemplate = lazy(() => import('../components/templates/post-formats/SingleImageTemplate').then(m => ({ default: m.SingleImageTemplate })));
const QuoteArchiveTemplate = lazy(() => import('../components/templates/post-formats/QuoteArchiveTemplate').then(m => ({ default: m.QuoteArchiveTemplate })));
const SingleQuoteTemplate = lazy(() => import('../components/templates/post-formats/SingleQuoteTemplate').then(m => ({ default: m.SingleQuoteTemplate })));
const LinkArchiveTemplate = lazy(() => import('../components/templates/post-formats/LinkArchiveTemplate').then(m => ({ default: m.LinkArchiveTemplate })));
const SingleLinkTemplate = lazy(() => import('../components/templates/post-formats/SingleLinkTemplate').then(m => ({ default: m.SingleLinkTemplate })));
const ChatArchiveTemplate = lazy(() => import('../components/templates/post-formats/ChatArchiveTemplate').then(m => ({ default: m.ChatArchiveTemplate })));
const SingleChatTemplate = lazy(() => import('../components/templates/post-formats/SingleChatTemplate').then(m => ({ default: m.SingleChatTemplate })));
const StatusArchiveTemplate = lazy(() => import('../components/templates/post-formats/StatusArchiveTemplate').then(m => ({ default: m.StatusArchiveTemplate })));
const SingleStatusTemplate = lazy(() => import('../components/templates/post-formats/SingleStatusTemplate').then(m => ({ default: m.SingleStatusTemplate })));
const StandardArchiveTemplate = lazy(() => import('../components/templates/post-formats/StandardArchiveTemplate').then(m => ({ default: m.StandardArchiveTemplate })));
const SingleStandardTemplate = lazy(() => import('../components/templates/post-formats/SingleStandardTemplate').then(m => ({ default: m.SingleStandardTemplate })));
const AsideArchiveTemplate = lazy(() => import('../components/templates/post-formats/AsideArchiveTemplate').then(m => ({ default: m.AsideArchiveTemplate })));
const SingleAsideTemplate = lazy(() => import('../components/templates/post-formats/SingleAsideTemplate').then(m => ({ default: m.SingleAsideTemplate })));
const AsideStreamTemplate = lazy(() => import('../components/templates/post-formats/AsideStreamTemplate').then(m => ({ default: m.AsideStreamTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

// Audio
function AudioArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <AudioArchiveTemplate />
    </Suspense>
  );
}

function SingleAudioRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleAudioTemplate />
    </Suspense>
  );
}

// Gallery
function GalleryArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <GalleryArchiveTemplate />
    </Suspense>
  );
}

function SingleGalleryRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleGalleryTemplate />
    </Suspense>
  );
}

// Image
function ImageArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ImageArchiveTemplate />
    </Suspense>
  );
}

function SingleImageRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleImageTemplate />
    </Suspense>
  );
}

// Quote
function QuoteArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <QuoteArchiveTemplate />
    </Suspense>
  );
}

function SingleQuoteRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleQuoteTemplate />
    </Suspense>
  );
}

// Link
function LinkArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <LinkArchiveTemplate />
    </Suspense>
  );
}

function SingleLinkRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleLinkTemplate />
    </Suspense>
  );
}

// Chat
function ChatArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ChatArchiveTemplate />
    </Suspense>
  );
}

function SingleChatRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleChatTemplate />
    </Suspense>
  );
}

// Status
function StatusArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <StatusArchiveTemplate />
    </Suspense>
  );
}

function SingleStatusRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleStatusTemplate />
    </Suspense>
  );
}

// Standard
function StandardArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <StandardArchiveTemplate />
    </Suspense>
  );
}

function SingleStandardRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleStandardTemplate />
    </Suspense>
  );
}

// Aside
function AsideArchiveRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <AsideArchiveTemplate />
    </Suspense>
  );
}

function SingleAsideRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleAsideTemplate />
    </Suspense>
  );
}

function AsideStreamRoute() {
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <AsideStreamTemplate />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const postFormatRoutes: RouteObject[] = [
  /* ── Insights Post Formats ── */
  { path: 'insights/format/audio', Component: AudioArchiveRoute },
  { path: 'insights/format/audio/single', Component: SingleAudioRoute },
  { path: 'insights/format/gallery', Component: GalleryArchiveRoute },
  { path: 'insights/format/gallery/single', Component: SingleGalleryRoute },
  { path: 'insights/format/image', Component: ImageArchiveRoute },
  { path: 'insights/format/image/single', Component: SingleImageRoute },
  { path: 'insights/format/quote', Component: QuoteArchiveRoute },
  { path: 'insights/format/quote/single', Component: SingleQuoteRoute },
  { path: 'insights/format/link', Component: LinkArchiveRoute },
  { path: 'insights/format/link/single', Component: SingleLinkRoute },
  { path: 'insights/format/chat', Component: ChatArchiveRoute },
  { path: 'insights/format/chat/single', Component: SingleChatRoute },
  { path: 'insights/format/status', Component: StatusArchiveRoute },
  { path: 'insights/format/status/single', Component: SingleStatusRoute },
  { path: 'insights/format/standard', Component: StandardArchiveRoute },
  { path: 'insights/format/standard/single', Component: SingleStandardRoute },
  { path: 'insights/format/aside', Component: AsideArchiveRoute },
  { path: 'insights/format/aside/single', Component: SingleAsideRoute },
  { path: 'insights/format/aside-stream', Component: AsideStreamRoute },
];