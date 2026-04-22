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

import React from 'react';
import { useParams, type RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Static Template Imports
 * ═══════════════════════════════════════════ */

// Portfolio
import { PortfolioArchiveTemplate } from '../components/templates/PortfolioArchiveTemplate';
import { PortfolioSingleTemplate } from '../components/templates/PortfolioSingleTemplate';
import { PortfolioSingleTemplateFunkyAlt } from '../components/templates/PortfolioSingleTemplateFunkyAlt';
import { PortfolioCategoryArchiveTemplate } from '../components/templates/PortfolioCategoryArchiveTemplate';
import { PortfolioTagArchiveTemplate } from '../components/templates/PortfolioTagArchiveTemplate';

// Blog
import { BlogIndexTemplate } from '../components/templates/BlogIndexTemplate';
import { SinglePostTemplate } from '../components/templates/SinglePostTemplate';
import { SinglePostLongformTemplate } from '../components/templates/SinglePostLongformTemplate';
import { CategoryArchiveTemplate } from '../components/templates/CategoryArchiveTemplate';
import { AuthorArchiveTemplate } from '../components/templates/AuthorArchiveTemplate';
import { TagArchiveTemplate } from '../components/templates/TagArchiveTemplate';
import { DateArchiveTemplate } from '../components/templates/DateArchiveTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

// Portfolio routes
function PortfolioArchiveRoute() {
  loadCSSBundle('portfolio');
  return <PortfolioArchiveTemplate />;
}

function PortfolioSingleRoute() {
  const { slug } = useParams();
  loadCSSBundle('portfolio');
  return <PortfolioSingleTemplate slug={slug} />;
}

function PortfolioSingleFunkyAltRoute() {
  const { slug } = useParams();
  loadCSSBundle('portfolio');
  return <PortfolioSingleTemplateFunkyAlt slug={slug} />;
}

function PortfolioCategoryRoute() {
  loadCSSBundle('portfolio');
  return <PortfolioCategoryArchiveTemplate />;
}

function PortfolioTagRoute() {
  loadCSSBundle('portfolio');
  return <PortfolioTagArchiveTemplate />;
}

// Blog routes
function BlogIndexRoute() {
  loadCSSBundle('blog');
  return <BlogIndexTemplate />;
}

function SinglePostLongformRoute() {
  loadCSSBundle('blog');
  return <SinglePostLongformTemplate />;
}

function SinglePostRoute() {
  const { slug } = useParams();
  loadCSSBundle('blog');
  return <SinglePostTemplate slug={slug} />;
}

function CategoryArchiveRoute() {
  const { slug } = useParams();
  loadCSSBundle('blog');
  return <CategoryArchiveTemplate category={slug} />;
}

function AuthorArchiveRoute() {
  const { slug } = useParams();
  loadCSSBundle('blog');
  return <AuthorArchiveTemplate author={slug} />;
}

function TagArchiveRoute() {
  const { slug } = useParams();
  loadCSSBundle('blog');
  return <TagArchiveTemplate tag={slug || 'wordpress'} />;
}

function DateArchiveRoute() {
  const { year, month } = useParams();
  loadCSSBundle('blog');
  return (
    <DateArchiveTemplate
      year={year ? parseInt(year) : new Date().getFullYear()}
      month={month ? parseInt(month) : undefined}
    />
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const contentRoutes: RouteObject[] = [
  /* ── Work (Portfolio Bundle) ── */
  { path: 'work', Component: PortfolioArchiveRoute },
  { path: 'work/:slug', Component: PortfolioSingleRoute },
  { path: 'work-alt/:slug', Component: PortfolioSingleFunkyAltRoute },
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