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

import React from 'react';
import { type RouteObject } from 'react-router';

/* ═══════════════════════════════════════════
 * Static Template Imports
 * ═══════════════════════════════════════════ */

import { ArchiveTemplate } from '../components/templates/ArchiveTemplate';
import { ArchiveWithFiltersTemplate } from '../components/templates/ArchiveWithFiltersTemplate';
import { IndexTemplate } from '../components/templates/IndexTemplate';
import { SingleTemplate } from '../components/templates/SingleTemplate';
import { SearchResultsTemplate } from '../components/templates/SearchResultsTemplate';
import { WordPressBlocksProofOfConcept } from '../components/templates/WordPressBlocksProofOfConcept';
import { SectionStyleExample } from '../components/templates/SectionStyleExample';
import { FeatureShowcaseTemplate } from '../components/templates/FeatureShowcaseTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function ArchiveRoute() {
  return <ArchiveTemplate />;
}

function ArchiveWithFiltersRoute() {
  return <ArchiveWithFiltersTemplate />;
}

function IndexRoute() {
  return <IndexTemplate />;
}

function SingleRoute() {
  return <SingleTemplate />;
}

function SearchResultsRoute() {
  return <SearchResultsTemplate />;
}

function WordPressBlocksPoCRoute() {
  return <WordPressBlocksProofOfConcept />;
}

function SectionStyleExampleRoute() {
  return <SectionStyleExample />;
}

function FeatureShowcaseRoute() {
  return <FeatureShowcaseTemplate />;
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