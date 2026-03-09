/**
 * Legacy Routes
 * 
 * Routes for legacy templates and miscellaneous pages
 * 
 * URL Patterns:
 * - `/archive` — Generic archive
 * - `/archive/filters` — Archive with filters
 * - `/index` — Index template
 * - `/single` — Single template
 * - `/search-legacy` — Legacy search
 * - `/wordpress-blocks-poc` — WordPress blocks proof of concept
 * - `/section-style-example` — Section style example
 * - `/feature-showcase` — Feature showcase
 */

import React, { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

const ArchiveTemplate = lazy(() => import('../components/templates/ArchiveTemplate').then(m => ({ default: m.ArchiveTemplate })));
const ArchiveWithFiltersTemplate = lazy(() => import('../components/templates/ArchiveWithFiltersTemplate').then(m => ({ default: m.ArchiveWithFiltersTemplate })));
const IndexTemplate = lazy(() => import('../components/templates/IndexTemplate').then(m => ({ default: m.IndexTemplate })));
const SingleTemplate = lazy(() => import('../components/templates/SingleTemplate').then(m => ({ default: m.SingleTemplate })));
const SearchResultsTemplate = lazy(() => import('../components/templates/SearchResultsTemplate').then(m => ({ default: m.SearchResultsTemplate })));
const WordPressBlocksProofOfConcept = lazy(() => import('../components/templates/WordPressBlocksProofOfConcept').then(m => ({ default: m.WordPressBlocksProofOfConcept })));
const SectionStyleExample = lazy(() => import('../components/templates/SectionStyleExample').then(m => ({ default: m.SectionStyleExample })));
const FeatureShowcaseTemplate = lazy(() => import('../components/templates/FeatureShowcaseTemplate').then(m => ({ default: m.FeatureShowcaseTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function ArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ArchiveTemplate />
    </Suspense>
  );
}

function ArchiveWithFiltersRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ArchiveWithFiltersTemplate />
    </Suspense>
  );
}

function IndexRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <IndexTemplate />
    </Suspense>
  );
}

function SingleRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTemplate />
    </Suspense>
  );
}

function SearchResultsRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SearchResultsTemplate />
    </Suspense>
  );
}

function WordPressBlocksPoCRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <WordPressBlocksProofOfConcept />
    </Suspense>
  );
}

function SectionStyleExampleRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SectionStyleExample />
    </Suspense>
  );
}

function FeatureShowcaseRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <FeatureShowcaseTemplate />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const legacyRoutes: RouteObject[] = [
  /* ── Legacy / Misc ── */
  { path: 'archive', Component: ArchiveRoute },
  { path: 'archive/filters', Component: ArchiveWithFiltersRoute },
  { path: 'index', Component: IndexRoute },
  { path: 'single', Component: SingleRoute },
  { path: 'search-legacy', Component: SearchResultsRoute },
  { path: 'wordpress-blocks-poc', Component: WordPressBlocksPoCRoute },
  { path: 'section-style-example', Component: SectionStyleExampleRoute },
  { path: 'feature-showcase', Component: FeatureShowcaseRoute },
];
