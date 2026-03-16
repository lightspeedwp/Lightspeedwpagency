/**
 * Solutions Routes
 *
 * Routes for all solution pages: WordPress, WooCommerce,
 * Tour Operators, Publishers, LSX products, AI integrations.
 *
 * URL Patterns:
 * - `/solutions` — Solutions landing
 * - `/solutions/*` — Individual solution pages
 *
 * CSS Bundle: 'solutions' (~10-15KB gzipped)
 *
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/
 */

import React from 'react';
import type { RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Static Template Imports
 * ═══════════════════════════════════════════ */

import { SolutionsTemplate } from '../components/templates/SolutionsTemplate';
import { WordPressSolutionTemplate } from '../components/templates/WordPressSolutionTemplate';
import { WooCommerceSolutionTemplate } from '../components/templates/WooCommerceSolutionTemplate';
import { TourOperatorSolutionsTemplate } from '../components/templates/TourOperatorSolutionsTemplate';
import { PublishersTemplate } from '../components/templates/PublishersTemplate';
import { LSXDesignTemplate } from '../components/templates/LSXDesignTemplate';
import { LSXSolutionTemplate } from '../components/templates/LSXSolutionTemplate';
import { MailchimpSolutionTemplate } from '../components/templates/MailchimpSolutionTemplate';
import { WetuImporterTemplate } from '../components/templates/WetuImporterTemplate';
import { LSXSharingTemplate } from '../components/templates/LSXSharingTemplate';
import { LSXSearchTemplate } from '../components/templates/LSXSearchTemplate';
import { WordPressRedesignTemplate } from '../components/templates/WordPressRedesignTemplate';
import { WooCommerceRedesignTemplate } from '../components/templates/WooCommerceRedesignTemplate';
import { AIIntegrationsTemplate } from '../components/templates/AIIntegrationsTemplate';
import { AIContentGenerationTemplate } from '../components/templates/AIContentGenerationTemplate';
import { AISEOTemplate } from '../components/templates/AISEOTemplate';
import { AIChatbotsTemplate } from '../components/templates/AIChatbotsTemplate';
import { AIAnalyticsTemplate } from '../components/templates/AIAnalyticsTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function SolutionsRoute() { loadCSSBundle('solutions'); return <SolutionsTemplate />; }
function WordPressSolutionRoute() { loadCSSBundle('solutions'); return <WordPressSolutionTemplate />; }
function WooCommerceSolutionRoute() { loadCSSBundle('solutions'); return <WooCommerceSolutionTemplate />; }
function TourOperatorRoute() { loadCSSBundle('solutions'); return <TourOperatorSolutionsTemplate />; }
function PublishersRoute() { loadCSSBundle('solutions'); return <PublishersTemplate />; }
function LSXDesignRoute() { loadCSSBundle('solutions'); return <LSXDesignTemplate />; }
function LSXSolutionRoute() { loadCSSBundle('solutions'); return <LSXSolutionTemplate />; }
function MailchimpSolutionRoute() { loadCSSBundle('solutions'); return <MailchimpSolutionTemplate />; }
function WetuImporterRoute() { loadCSSBundle('solutions'); return <WetuImporterTemplate />; }
function LSXSharingRoute() { loadCSSBundle('solutions'); return <LSXSharingTemplate />; }
function LSXSearchRoute() { loadCSSBundle('solutions'); return <LSXSearchTemplate />; }
function WordPressRedesignRoute() { loadCSSBundle('solutions'); return <WordPressRedesignTemplate />; }
function WooCommerceRedesignRoute() { loadCSSBundle('solutions'); return <WooCommerceRedesignTemplate />; }
function AIIntegrationsRoute() { loadCSSBundle('solutions'); return <AIIntegrationsTemplate />; }
function AIContentGenerationRoute() { loadCSSBundle('solutions'); return <AIContentGenerationTemplate />; }
function AISEORoute() { loadCSSBundle('solutions'); return <AISEOTemplate />; }
function AIChatbotsRoute() { loadCSSBundle('solutions'); return <AIChatbotsTemplate />; }
function AIAnalyticsRoute() { loadCSSBundle('solutions'); return <AIAnalyticsTemplate />; }

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const solutionsRoutes: RouteObject[] = [
  { path: 'solutions', Component: SolutionsRoute },
  { path: 'solutions/wordpress', Component: WordPressSolutionRoute },
  { path: 'solutions/woocommerce', Component: WooCommerceSolutionRoute },
  { path: 'solutions/tour-operators', Component: TourOperatorRoute },
  { path: 'solutions/publishers', Component: PublishersRoute },
  { path: 'solutions/lsx', Component: LSXDesignRoute },
  { path: 'solutions/lsx-theme', Component: LSXSolutionRoute },
  { path: 'solutions/mailchimp', Component: MailchimpSolutionRoute },
  { path: 'solutions/wetu-importer', Component: WetuImporterRoute },
  { path: 'solutions/lsx-sharing', Component: LSXSharingRoute },
  { path: 'solutions/lsx-search', Component: LSXSearchRoute },
  { path: 'solutions/wordpress-redesign', Component: WordPressRedesignRoute },
  { path: 'solutions/woocommerce-redesign', Component: WooCommerceRedesignRoute },
  { path: 'solutions/ai-integrations', Component: AIIntegrationsRoute },
  { path: 'solutions/ai-content-generation', Component: AIContentGenerationRoute },
  { path: 'solutions/ai-seo', Component: AISEORoute },
  { path: 'solutions/ai-chatbots', Component: AIChatbotsRoute },
  { path: 'solutions/ai-analytics', Component: AIAnalyticsRoute },
];
