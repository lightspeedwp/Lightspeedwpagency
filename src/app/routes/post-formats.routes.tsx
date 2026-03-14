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

import React from 'react';
import { type RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Static Template Imports
 * ═══════════════════════════════════════════ */

import { AudioArchiveTemplate } from '../components/templates/post-formats/AudioArchiveTemplate';
import { SingleAudioTemplate } from '../components/templates/post-formats/SingleAudioTemplate';
import { GalleryArchiveTemplate } from '../components/templates/post-formats/GalleryArchiveTemplate';
import { SingleGalleryTemplate } from '../components/templates/post-formats/SingleGalleryTemplate';
import { ImageArchiveTemplate } from '../components/templates/post-formats/ImageArchiveTemplate';
import { SingleImageTemplate } from '../components/templates/post-formats/SingleImageTemplate';
import { QuoteArchiveTemplate } from '../components/templates/post-formats/QuoteArchiveTemplate';
import { SingleQuoteTemplate } from '../components/templates/post-formats/SingleQuoteTemplate';
import { LinkArchiveTemplate } from '../components/templates/post-formats/LinkArchiveTemplate';
import { SingleLinkTemplate } from '../components/templates/post-formats/SingleLinkTemplate';
import { ChatArchiveTemplate } from '../components/templates/post-formats/ChatArchiveTemplate';
import { SingleChatTemplate } from '../components/templates/post-formats/SingleChatTemplate';
import { StatusArchiveTemplate } from '../components/templates/post-formats/StatusArchiveTemplate';
import { SingleStatusTemplate } from '../components/templates/post-formats/SingleStatusTemplate';
import { StandardArchiveTemplate } from '../components/templates/post-formats/StandardArchiveTemplate';
import { SingleStandardTemplate } from '../components/templates/post-formats/SingleStandardTemplate';
import { AsideArchiveTemplate } from '../components/templates/post-formats/AsideArchiveTemplate';
import { SingleAsideTemplate } from '../components/templates/post-formats/SingleAsideTemplate';
import { AsideStreamTemplate } from '../components/templates/post-formats/AsideStreamTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

// Audio
function AudioArchiveRoute() {
  loadCSSBundle('blog');
  return <AudioArchiveTemplate />;
}

function SingleAudioRoute() {
  loadCSSBundle('blog');
  return <SingleAudioTemplate />;
}

// Gallery
function GalleryArchiveRoute() {
  loadCSSBundle('blog');
  return <GalleryArchiveTemplate />;
}

function SingleGalleryRoute() {
  loadCSSBundle('blog');
  return <SingleGalleryTemplate />;
}

// Image
function ImageArchiveRoute() {
  loadCSSBundle('blog');
  return <ImageArchiveTemplate />;
}

function SingleImageRoute() {
  loadCSSBundle('blog');
  return <SingleImageTemplate />;
}

// Quote
function QuoteArchiveRoute() {
  loadCSSBundle('blog');
  return <QuoteArchiveTemplate />;
}

function SingleQuoteRoute() {
  loadCSSBundle('blog');
  return <SingleQuoteTemplate />;
}

// Link
function LinkArchiveRoute() {
  loadCSSBundle('blog');
  return <LinkArchiveTemplate />;
}

function SingleLinkRoute() {
  loadCSSBundle('blog');
  return <SingleLinkTemplate />;
}

// Chat
function ChatArchiveRoute() {
  loadCSSBundle('blog');
  return <ChatArchiveTemplate />;
}

function SingleChatRoute() {
  loadCSSBundle('blog');
  return <SingleChatTemplate />;
}

// Status
function StatusArchiveRoute() {
  loadCSSBundle('blog');
  return <StatusArchiveTemplate />;
}

function SingleStatusRoute() {
  loadCSSBundle('blog');
  return <SingleStatusTemplate />;
}

// Standard
function StandardArchiveRoute() {
  loadCSSBundle('blog');
  return <StandardArchiveTemplate />;
}

function SingleStandardRoute() {
  loadCSSBundle('blog');
  return <SingleStandardTemplate />;
}

// Aside
function AsideArchiveRoute() {
  loadCSSBundle('blog');
  return <AsideArchiveTemplate />;
}

function SingleAsideRoute() {
  loadCSSBundle('blog');
  return <SingleAsideTemplate />;
}

function AsideStreamRoute() {
  loadCSSBundle('blog');
  return <AsideStreamTemplate />;
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