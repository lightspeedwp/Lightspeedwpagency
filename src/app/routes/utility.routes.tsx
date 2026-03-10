/**
 * Utility Routes
 * 
 * Routes for utility pages: Contact, FAQ, Pricing, Search, Legal, etc.
 * 
 * URL Patterns:
 * - `/contact` — Contact page
 * - `/faq` — FAQ page
 * - `/pricing` — Pricing page
 * - `/search` — Search results
 * - `/privacy-policy` — Privacy policy
 * - `/terms-of-service` — Terms of service
 * - `/site-map` — Site map
 * - `/style-guide` — Style guide
 * - `/tutorials` — Tutorials
 * - `/why-choose-us` — Why choose us
 * - `/guarantees` — Guarantees
 * - `/roi-calculator` — ROI calculator
 * 
 * CSS Bundles:
 * - All utility routes load 'utility' bundle (~12-18KB gzipped)
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/utility-bundle.css
 */

import React, { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

const ContactPageTemplate = lazy(() => import('../components/templates/ContactPageTemplate').then(m => ({ default: m.ContactPageTemplate })));
const FAQTemplate = lazy(() => import('../components/templates/FAQTemplate').then(m => ({ default: m.FAQTemplate })));
const PricingTemplate = lazy(() => import('../components/templates/PricingTemplate').then(m => ({ default: m.PricingTemplate })));
const WhyChooseUsTemplate = lazy(() => import('../components/templates/WhyChooseUsTemplate').then(m => ({ default: m.WhyChooseUsTemplate })));
const GuaranteesTemplate = lazy(() => import('../components/templates/GuaranteesTemplate').then(m => ({ default: m.GuaranteesTemplate })));
const ROICalculatorTemplate = lazy(() => import('../components/templates/ROICalculatorTemplate').then(m => ({ default: m.ROICalculatorTemplate })));
const SearchResultsPageTemplate = lazy(() => import('../components/templates/SearchResultsPageTemplate').then(m => ({ default: m.SearchResultsPageTemplate })));
const PrivacyPolicyTemplate = lazy(() => import('../components/templates/PrivacyPolicyTemplate').then(m => ({ default: m.PrivacyPolicyTemplate })));
const TermsOfServiceTemplate = lazy(() => import('../components/templates/TermsOfServiceTemplate').then(m => ({ default: m.TermsOfServiceTemplate })));
const SiteMapTemplate = lazy(() => import('../components/templates/SiteMapTemplate').then(m => ({ default: m.SiteMapTemplate })));
const StyleGuideTemplate = lazy(() => import('../components/templates/StyleGuideTemplate').then(m => ({ default: m.StyleGuideTemplate })));
const TutorialsTemplate = lazy(() => import('../components/templates/TutorialsTemplate').then(m => ({ default: m.TutorialsTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function ContactPageRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><ContactPageTemplate /></Suspense>; }
function FAQRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><FAQTemplate /></Suspense>; }
function PricingRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><PricingTemplate /></Suspense>; }
function WhyChooseUsRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyChooseUsTemplate /></Suspense>; }
function GuaranteesRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><GuaranteesTemplate /></Suspense>; }
function ROICalculatorRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><ROICalculatorTemplate /></Suspense>; }
function SearchResultsRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><SearchResultsPageTemplate /></Suspense>; }
function PrivacyPolicyRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><PrivacyPolicyTemplate /></Suspense>; }
function TermsOfServiceRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><TermsOfServiceTemplate /></Suspense>; }
function SiteMapRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><SiteMapTemplate /></Suspense>; }
function StyleGuideRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><StyleGuideTemplate /></Suspense>; }
function TutorialsRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><TutorialsTemplate /></Suspense>; }

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const utilityRoutes: RouteObject[] = [
  { path: 'contact', Component: ContactPageRoute },
  { path: 'faq', Component: FAQRoute },
  { path: 'pricing', Component: PricingRoute },
  { path: 'why-choose-us', Component: WhyChooseUsRoute },
  { path: 'guarantees', Component: GuaranteesRoute },
  { path: 'roi-calculator', Component: ROICalculatorRoute },
  { path: 'search', Component: SearchResultsRoute },
  { path: 'privacy-policy', Component: PrivacyPolicyRoute },
  { path: 'terms-of-service', Component: TermsOfServiceRoute },
  { path: 'site-map', Component: SiteMapRoute },
  { path: 'style-guide', Component: StyleGuideRoute },
  { path: 'tutorials', Component: TutorialsRoute },
];