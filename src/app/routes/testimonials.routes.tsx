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

import React from 'react';
import { useParams, type RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Template Imports
 * ═══════════════════════════════════════════ */

import { TestimonialsTemplate } from '../components/templates/TestimonialsTemplate';
import { TestimonialArchiveTemplate } from '../components/templates/testimonials/TestimonialArchiveTemplate';
import { SingleTestimonialTemplate } from '../components/templates/testimonials/SingleTestimonialTemplate';
import { SingleTestimonialAudioTemplate } from '../components/templates/testimonials/SingleTestimonialAudioTemplate';
import { SingleTestimonialVideoTemplate } from '../components/templates/testimonials/SingleTestimonialVideoTemplate';
import { SingleTestimonialGalleryTemplate } from '../components/templates/testimonials/SingleTestimonialGalleryTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function TestimonialArchiveRoute() {
  return <TestimonialArchiveTemplate />;
}

function SingleTestimonialRoute() {
  const { slug } = useParams();
  return <SingleTestimonialTemplate slug={slug} />;
}

function SingleTestimonialAudioRoute() {
  const { slug } = useParams();
  return <SingleTestimonialAudioTemplate slug={slug} />;
}

function SingleTestimonialVideoRoute() {
  const { slug } = useParams();
  return <SingleTestimonialVideoTemplate slug={slug} />;
}

function SingleTestimonialGalleryRoute() {
  const { slug } = useParams();
  return <SingleTestimonialGalleryTemplate slug={slug} />;
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const testimonialsRoutes: RouteObject[] = [
  /* ── Testimonials (Utility Bundle) ── */
  {
    path: 'testimonials',
    Component: TestimonialsTemplate,
  },
  {
    path: 'testimonials/archive',
    Component: TestimonialArchiveRoute,
  },
  {
    path: 'testimonials/audio/:slug',
    Component: SingleTestimonialAudioRoute,
  },
  {
    path: 'testimonials/video/:slug',
    Component: SingleTestimonialVideoRoute,
  },
  {
    path: 'testimonials/gallery/:slug',
    Component: SingleTestimonialGalleryRoute,
  },
  {
    path: 'testimonials/:slug',
    Component: SingleTestimonialRoute,
  },
];