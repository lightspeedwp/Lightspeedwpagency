/**
 * Testimonials Routes
 * 
 * Routes for testimonials archive and format-specific singles
 * 
 * URL Patterns:
 * - `/testimonials` — Main testimonials page
 * - `/testimonials/archive` — Testimonials archive
 * - `/testimonials/:slug` — Single testimonial (standard)
 * - `/testimonials/audio/:slug` — Audio testimonial
 * - `/testimonials/video/:slug` — Video testimonial
 * - `/testimonials/gallery/:slug` — Gallery testimonial
 * 
 * CSS Bundles:
 * - All testimonials routes load 'utility' bundle (~12-18KB gzipped)
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/utility-bundle.css
 */

import React, { lazy, Suspense } from 'react';
import { useParams, type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Template Imports
 * ═══════════════════════════════════════════ */

// Main testimonials page (static)
import { TestimonialsTemplate } from '../components/templates/TestimonialsTemplate';

// Archive + Singles (lazy)
const TestimonialArchiveTemplate = lazy(() => import('../components/templates/testimonials/TestimonialArchiveTemplate').then(m => ({ default: m.TestimonialArchiveTemplate })));
const SingleTestimonialTemplate = lazy(() => import('../components/templates/testimonials/SingleTestimonialTemplate').then(m => ({ default: m.SingleTestimonialTemplate })));
const SingleTestimonialAudioTemplate = lazy(() => import('../components/templates/testimonials/SingleTestimonialAudioTemplate').then(m => ({ default: m.SingleTestimonialAudioTemplate })));
const SingleTestimonialVideoTemplate = lazy(() => import('../components/templates/testimonials/SingleTestimonialVideoTemplate').then(m => ({ default: m.SingleTestimonialVideoTemplate })));
const SingleTestimonialGalleryTemplate = lazy(() => import('../components/templates/testimonials/SingleTestimonialGalleryTemplate').then(m => ({ default: m.SingleTestimonialGalleryTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function TestimonialArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <TestimonialArchiveTemplate />
    </Suspense>
  );
}

function SingleTestimonialRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTestimonialTemplate slug={slug} />
    </Suspense>
  );
}

function SingleTestimonialAudioRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTestimonialAudioTemplate slug={slug} />
    </Suspense>
  );
}

function SingleTestimonialVideoRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTestimonialVideoTemplate slug={slug} />
    </Suspense>
  );
}

function SingleTestimonialGalleryRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTestimonialGalleryTemplate slug={slug} />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const testimonialsRoutes: RouteObject[] = [
  /* ── Testimonials (Utility Bundle) ── */
  {
    path: 'testimonials',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: TestimonialsTemplate };
    },
  },
  {
    path: 'testimonials/archive',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: TestimonialArchiveRoute };
    },
  },
  {
    path: 'testimonials/audio/:slug',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: SingleTestimonialAudioRoute };
    },
  },
  {
    path: 'testimonials/video/:slug',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: SingleTestimonialVideoRoute };
    },
  },
  {
    path: 'testimonials/gallery/:slug',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: SingleTestimonialGalleryRoute };
    },
  },
  {
    path: 'testimonials/:slug',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: SingleTestimonialRoute };
    },
  },
];