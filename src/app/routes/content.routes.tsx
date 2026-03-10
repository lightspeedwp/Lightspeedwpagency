/**
 * Content Routes
 * 
 * Routes for content archives: Work (Portfolio) and Insights (Blog)
 * 
 * URL Patterns:
 * - `/work/*` — Portfolio archive + single projects
 * - `/insights/*` — Blog archive + single posts
 * 
 * CSS Bundles:
 * - Portfolio routes load 'portfolio' bundle (~8-12KB gzipped)
 * - Blog routes load 'blog' bundle (~8-12KB gzipped)
 */

import React, { lazy, Suspense } from 'react';
import { useParams, type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

// Portfolio
const PortfolioArchiveTemplate = lazy(() => import('../components/templates/PortfolioArchiveTemplate').then(m => ({ default: m.PortfolioArchiveTemplate })));
const PortfolioSingleTemplate = lazy(() => import('../components/templates/PortfolioSingleTemplate').then(m => ({ default: m.PortfolioSingleTemplate })));
const PortfolioCategoryArchiveTemplate = lazy(() => import('../components/templates/PortfolioCategoryArchiveTemplate').then(m => ({ default: m.PortfolioCategoryArchiveTemplate })));
const PortfolioTagArchiveTemplate = lazy(() => import('../components/templates/PortfolioTagArchiveTemplate').then(m => ({ default: m.PortfolioTagArchiveTemplate })));

// Blog
const BlogIndexTemplate = lazy(() => import('../components/templates/BlogIndexTemplate').then(m => ({ default: m.BlogIndexTemplate })));
const SinglePostTemplate = lazy(() => import('../components/templates/SinglePostTemplate').then(m => ({ default: m.SinglePostTemplate })));
const SinglePostLongformTemplate = lazy(() => import('../components/templates/SinglePostLongformTemplate').then(m => ({ default: m.SinglePostLongformTemplate })));
const CategoryArchiveTemplate = lazy(() => import('../components/templates/CategoryArchiveTemplate').then(m => ({ default: m.CategoryArchiveTemplate })));
const AuthorArchiveTemplate = lazy(() => import('../components/templates/AuthorArchiveTemplate').then(m => ({ default: m.AuthorArchiveTemplate })));
const TagArchiveTemplate = lazy(() => import('../components/templates/TagArchiveTemplate').then(m => ({ default: m.TagArchiveTemplate })));
const DateArchiveTemplate = lazy(() => import('../components/templates/DateArchiveTemplate').then(m => ({ default: m.DateArchiveTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

// Portfolio routes
function PortfolioArchiveRoute() {
  loadCSSBundle('portfolio');
  return <Suspense fallback={<RouteLoadingFallback />}><PortfolioArchiveTemplate /></Suspense>;
}

function PortfolioSingleRoute() {
  const { slug } = useParams();
  loadCSSBundle('portfolio');
  return <Suspense fallback={<RouteLoadingFallback />}><PortfolioSingleTemplate slug={slug} /></Suspense>;
}

function PortfolioCategoryRoute() {
  loadCSSBundle('portfolio');
  return <Suspense fallback={<RouteLoadingFallback />}><PortfolioCategoryArchiveTemplate /></Suspense>;
}

function PortfolioTagRoute() {
  loadCSSBundle('portfolio');
  return <Suspense fallback={<RouteLoadingFallback />}><PortfolioTagArchiveTemplate /></Suspense>;
}

// Blog routes
function BlogIndexRoute() {
  loadCSSBundle('blog');
  return <Suspense fallback={<RouteLoadingFallback />}><BlogIndexTemplate /></Suspense>;
}

function SinglePostLongformRoute() {
  loadCSSBundle('blog');
  return <Suspense fallback={<RouteLoadingFallback />}><SinglePostLongformTemplate /></Suspense>;
}

function SinglePostRoute() {
  const { slug } = useParams();
  loadCSSBundle('blog');
  return <Suspense fallback={<RouteLoadingFallback />}><SinglePostTemplate slug={slug} /></Suspense>;
}

function CategoryArchiveRoute() {
  const { slug } = useParams();
  loadCSSBundle('blog');
  return <Suspense fallback={<RouteLoadingFallback />}><CategoryArchiveTemplate category={slug} /></Suspense>;
}

function AuthorArchiveRoute() {
  const { slug } = useParams();
  loadCSSBundle('blog');
  return <Suspense fallback={<RouteLoadingFallback />}><AuthorArchiveTemplate author={slug} /></Suspense>;
}

function TagArchiveRoute() {
  const { slug } = useParams();
  loadCSSBundle('blog');
  return <Suspense fallback={<RouteLoadingFallback />}><TagArchiveTemplate tag={slug || 'wordpress'} /></Suspense>;
}

function DateArchiveRoute() {
  const { year, month } = useParams();
  loadCSSBundle('blog');
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DateArchiveTemplate
        year={year ? parseInt(year) : new Date().getFullYear()}
        month={month ? parseInt(month) : undefined}
      />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const contentRoutes: RouteObject[] = [
  /* ── Work (Portfolio Bundle) ── */
  { path: 'work', Component: PortfolioArchiveRoute },
  { path: 'work/:slug', Component: PortfolioSingleRoute },
  { path: 'work/category/:slug', Component: PortfolioCategoryRoute },
  { path: 'work/tag/:slug', Component: PortfolioTagRoute },

  /* ── Insights (Blog Bundle) ── */
  { path: 'insights', Component: BlogIndexRoute },
  { path: 'insights/single-post', Component: SinglePostLongformRoute },
  { path: 'insights/category', Component: CategoryArchiveRoute },
  { path: 'insights/category/:slug', Component: CategoryArchiveRoute },
  { path: 'insights/author', Component: AuthorArchiveRoute },
  { path: 'insights/author/:slug', Component: AuthorArchiveRoute },
  { path: 'insights/tag', Component: TagArchiveRoute },
  { path: 'insights/tag/:slug', Component: TagArchiveRoute },
  { path: 'insights/date', Component: DateArchiveRoute },
  { path: 'insights/date/:year', Component: DateArchiveRoute },
  { path: 'insights/date/:year/:month', Component: DateArchiveRoute },
  { path: 'insights/:slug', Component: SinglePostRoute },
];