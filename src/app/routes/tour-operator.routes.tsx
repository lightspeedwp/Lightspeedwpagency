/**
 * Tour Operator Routes
 * 
 * Routes for tour operator functionality
 * 
 * URL Patterns:
 * - `/tours` — Tour archive
 * - `/tours/:slug` — Single tour
 * 
 * CSS Bundles:
 * - All tour routes load 'portfolio' bundle (~8-12KB gzipped)
 * - Tours are similar to portfolio projects, so they share the same bundle
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/portfolio-bundle.css
 */

import React, { lazy, Suspense } from 'react';
import { useParams, type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

const TourOperatorArchiveTemplate = lazy(() => import('../components/templates/tour-operator/TourOperatorArchiveTemplate').then(m => ({ default: m.TourOperatorArchiveTemplate })));
const SingleTourTemplate = lazy(() => import('../components/templates/tour-operator/SingleTourTemplate').then(m => ({ default: m.SingleTourTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function TourOperatorArchiveRoute() {
  loadCSSBundle('portfolio');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <TourOperatorArchiveTemplate />
    </Suspense>
  );
}

function SingleTourRoute() {
  const { slug } = useParams();
  loadCSSBundle('portfolio');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTourTemplate />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const tourOperatorRoutes: RouteObject[] = [
  /* ── Tour Operator ── */
  { path: 'tours', Component: TourOperatorArchiveRoute },
  { path: 'tours/:slug', Component: SingleTourRoute },
];