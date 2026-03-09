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
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/portfolio-bundle.css
 * @see /src/styles/bundles/blog-bundle.css
 */

import React from 'react';
import { useParams, type RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Template Imports
 * ═══════════════════════════════════════════ */

// Portfolio
import { PortfolioArchiveTemplate } from '../components/templates/PortfolioArchiveTemplate';
import { PortfolioSingleTemplate } from '../components/templates/PortfolioSingleTemplate';
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
function PortfolioSingleRoute() {
  const { slug } = useParams();
  return <PortfolioSingleTemplate slug={slug} />;
}

function PortfolioCategoryRoute() {
  return <PortfolioCategoryArchiveTemplate />;
}

function PortfolioTagRoute() {
  return <PortfolioTagArchiveTemplate />;
}

// Blog routes
function SinglePostRoute() {
  const { slug } = useParams();
  return <SinglePostTemplate slug={slug} />;
}

function CategoryArchiveRoute() {
  const { slug } = useParams();
  return <CategoryArchiveTemplate category={slug} />;
}

function AuthorArchiveRoute() {
  const { slug } = useParams();
  return <AuthorArchiveTemplate author={slug} />;
}

function TagArchiveRoute() {
  const { slug } = useParams();
  return <TagArchiveTemplate tag={slug || 'wordpress'} />;
}

function DateArchiveRoute() {
  const { year, month } = useParams();
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
  {
    path: 'work',
    lazy: async () => {
      await loadCSSBundle('portfolio');
      return { Component: PortfolioArchiveTemplate };
    },
  },
  {
    path: 'work/:slug',
    lazy: async () => {
      await loadCSSBundle('portfolio');
      return { Component: PortfolioSingleRoute };
    },
  },
  {
    path: 'work/category/:slug',
    lazy: async () => {
      await loadCSSBundle('portfolio');
      return { Component: PortfolioCategoryRoute };
    },
  },
  {
    path: 'work/tag/:slug',
    lazy: async () => {
      await loadCSSBundle('portfolio');
      return { Component: PortfolioTagRoute };
    },
  },

  /* ── Insights (Blog Bundle) ── */
  {
    path: 'insights',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: BlogIndexTemplate };
    },
  },
  {
    path: 'insights/single-post',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: SinglePostLongformTemplate };
    },
  },
  {
    path: 'insights/category',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: CategoryArchiveTemplate };
    },
  },
  {
    path: 'insights/category/:slug',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: CategoryArchiveRoute };
    },
  },
  {
    path: 'insights/author',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: AuthorArchiveTemplate };
    },
  },
  {
    path: 'insights/author/:slug',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: AuthorArchiveRoute };
    },
  },
  {
    path: 'insights/tag',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: TagArchiveTemplate };
    },
  },
  {
    path: 'insights/tag/:slug',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: TagArchiveRoute };
    },
  },
  {
    path: 'insights/date',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: DateArchiveTemplate };
    },
  },
  {
    path: 'insights/date/:year',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: DateArchiveRoute };
    },
  },
  {
    path: 'insights/date/:year/:month',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: DateArchiveRoute };
    },
  },

  /* ── Insights single post (must be last in insights section) ── */
  {
    path: 'insights/:slug',
    lazy: async () => {
      await loadCSSBundle('blog');
      return { Component: SinglePostRoute };
    },
  },
];