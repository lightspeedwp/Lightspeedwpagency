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
const FreeConsultationTemplate = lazy(() => import('../components/templates/FreeConsultationTemplate').then(m => ({ default: m.FreeConsultationTemplate })));
const FreeWooConsultationTemplate = lazy(() => import('../components/templates/FreeWooConsultationTemplate').then(m => ({ default: m.FreeWooConsultationTemplate })));
const ClientIntakeFormTemplate = lazy(() => import('../components/templates/ClientIntakeFormTemplate').then(m => ({ default: m.ClientIntakeFormTemplate })));
const ClientFeedbackTemplate = lazy(() => import('../components/templates/ClientFeedbackTemplate').then(m => ({ default: m.ClientFeedbackTemplate })));
const GenericThankYouTemplate = lazy(() => import('../components/templates/GenericThankYouTemplate').then(m => ({ default: m.GenericThankYouTemplate })));
const FAQTemplate = lazy(() => import('../components/templates/FAQTemplate').then(m => ({ default: m.FAQTemplate })));
const PricingTemplate = lazy(() => import('../components/templates/PricingTemplate').then(m => ({ default: m.PricingTemplate })));
const WebsitePackagesTemplate = lazy(() => import('../components/templates/WebsitePackagesTemplate').then(m => ({ default: m.WebsitePackagesTemplate })));
const ReferralsTemplate = lazy(() => import('../components/templates/ReferralsTemplate').then(m => ({ default: m.ReferralsTemplate })));
const WhyChooseUsTemplate = lazy(() => import('../components/templates/WhyChooseUsTemplate').then(m => ({ default: m.WhyChooseUsTemplate })));
const WhyLandingTemplate = lazy(() => import('../components/templates/WhyLandingTemplate').then(m => ({ default: m.WhyLandingTemplate })));
const WhyWooTemplate = lazy(() => import('../components/templates/WhyWooTemplate').then(m => ({ default: m.WhyWooTemplate })));
const WhyWPTemplate = lazy(() => import('../components/templates/WhyWPTemplate').then(m => ({ default: m.WhyWPTemplate })));
const WhyMailchimpTemplate = lazy(() => import('../components/templates/WhyMailchimpTemplate').then(m => ({ default: m.WhyMailchimpTemplate })));
const WhyLSXTemplate = lazy(() => import('../components/templates/WhyLSXTemplate').then(m => ({ default: m.WhyLSXTemplate })));
const WhyLightSpeedTemplate = lazy(() => import('../components/templates/WhyLightSpeedTemplate').then(m => ({ default: m.WhyLightSpeedTemplate })));
const WhyTourOperatorTemplate = lazy(() => import('../components/templates/WhyTourOperatorTemplate').then(m => ({ default: m.WhyTourOperatorTemplate })));
const GuaranteesTemplate = lazy(() => import('../components/templates/GuaranteesTemplate').then(m => ({ default: m.GuaranteesTemplate })));
const ROICalculatorTemplate = lazy(() => import('../components/templates/ROICalculatorTemplate').then(m => ({ default: m.ROICalculatorTemplate })));
const SearchResultsPageTemplate = lazy(() => import('../components/templates/SearchResultsPageTemplate').then(m => ({ default: m.SearchResultsPageTemplate })));
const PrivacyPolicyTemplate = lazy(() => import('../components/templates/PrivacyPolicyTemplate').then(m => ({ default: m.PrivacyPolicyTemplate })));
const TermsOfServiceTemplate = lazy(() => import('../components/templates/TermsOfServiceTemplate').then(m => ({ default: m.TermsOfServiceTemplate })));
const GenericPolicyTemplate = lazy(() => import('../components/templates/GenericPolicyTemplate').then(m => ({ default: m.GenericPolicyTemplate })));
const GettingStartedTemplate = lazy(() => import('../components/templates/GettingStartedTemplate').then(m => ({ default: m.GettingStartedTemplate })));
const NewsletterUtilityTemplate = lazy(() => import('../components/templates/NewsletterUtilityTemplate').then(m => ({ default: m.NewsletterUtilityTemplate })));
const SiteMapTemplate = lazy(() => import('../components/templates/SiteMapTemplate').then(m => ({ default: m.SiteMapTemplate })));
const StyleGuideTemplate = lazy(() => import('../components/templates/StyleGuideTemplate').then(m => ({ default: m.StyleGuideTemplate })));
const TutorialsTemplate = lazy(() => import('../components/templates/TutorialsTemplate').then(m => ({ default: m.TutorialsTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function ContactPageRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><ContactPageTemplate /></Suspense>; }
function FreeConsultationRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><FreeConsultationTemplate /></Suspense>; }
function FreeWooConsultationRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><FreeWooConsultationTemplate /></Suspense>; }
function ClientIntakeFormRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><ClientIntakeFormTemplate /></Suspense>; }
function ClientFeedbackRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><ClientFeedbackTemplate /></Suspense>; }
function GenericThankYouRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><GenericThankYouTemplate /></Suspense>; }
function FAQRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><FAQTemplate /></Suspense>; }
function PricingRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><PricingTemplate /></Suspense>; }
function WebsitePackagesRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WebsitePackagesTemplate /></Suspense>; }
function ReferralsRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><ReferralsTemplate /></Suspense>; }
function WhyChooseUsRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyChooseUsTemplate /></Suspense>; }
function WhyLandingRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyLandingTemplate /></Suspense>; }
function WhyWooRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyWooTemplate /></Suspense>; }
function WhyWPRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyWPTemplate /></Suspense>; }
function WhyMailchimpRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyMailchimpTemplate /></Suspense>; }
function WhyLSXRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyLSXTemplate /></Suspense>; }
function WhyLightSpeedRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyLightSpeedTemplate /></Suspense>; }
function WhyTourOperatorRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><WhyTourOperatorTemplate /></Suspense>; }
function GuaranteesRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><GuaranteesTemplate /></Suspense>; }
function ROICalculatorRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><ROICalculatorTemplate /></Suspense>; }
function SearchResultsRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><SearchResultsPageTemplate /></Suspense>; }
function PrivacyPolicyRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><PrivacyPolicyTemplate /></Suspense>; }
function TermsOfServiceRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><TermsOfServiceTemplate /></Suspense>; }
function GenericPolicyRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><GenericPolicyTemplate /></Suspense>; }
function GettingStartedRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><GettingStartedTemplate /></Suspense>; }
function NewsletterUtilityRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><NewsletterUtilityTemplate /></Suspense>; }
function SiteMapRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><SiteMapTemplate /></Suspense>; }
function StyleGuideRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><StyleGuideTemplate /></Suspense>; }
function TutorialsRoute() { loadCSSBundle('utility'); return <Suspense fallback={<RouteLoadingFallback />}><TutorialsTemplate /></Suspense>; }

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const utilityRoutes: RouteObject[] = [
  { path: 'contact', Component: ContactPageRoute },
  { path: 'free-consultation', Component: FreeConsultationRoute },
  { path: 'free-woo-consultation', Component: FreeWooConsultationRoute },
  { path: 'briefing', Component: ClientIntakeFormRoute },
  { path: 'briefing-about-us-page', Component: ClientIntakeFormRoute },
  { path: 'briefing-request-a-quote', Component: ClientIntakeFormRoute },
  { path: 'briefing-wordpress', Component: ClientIntakeFormRoute },
  { path: 'client-intake-form', Component: ClientIntakeFormRoute },
  { path: 'thank-you-newsletter-subscribe', Component: GenericThankYouRoute },
  { path: 'thank-you-for-subscribing', Component: GenericThankYouRoute },
  { path: 'thank-you-content-audit-post', Component: GenericThankYouRoute },
  { path: 'contact-thank-you', Component: GenericThankYouRoute },
  { path: 'free-consultation-thank-you', Component: GenericThankYouRoute },
  { path: 'referrals-thank-you', Component: GenericThankYouRoute },
  { path: 'client-intake-form-thank-you', Component: GenericThankYouRoute },
  { path: 'client-feedback', Component: ClientFeedbackRoute },
  { path: 'faq', Component: FAQRoute },
  { path: 'pricing', Component: PricingRoute },
  { path: 'website-packages', Component: WebsitePackagesRoute },
  { path: 'referrals', Component: ReferralsRoute },
  { path: 'why', Component: WhyLandingRoute },
  { path: 'why-choose-us', Component: WhyChooseUsRoute },
  { path: 'why-woo', Component: WhyWooRoute },
  { path: 'why-wp', Component: WhyWPRoute },
  { path: 'why-mailchimp', Component: WhyMailchimpRoute },
  { path: 'why-lsx', Component: WhyLSXRoute },
  { path: 'why-lightspeed', Component: WhyLightSpeedRoute },
  { path: 'why-tour-operator', Component: WhyTourOperatorRoute },
  { path: 'guarantees', Component: GuaranteesRoute },
  { path: 'roi-calculator', Component: ROICalculatorRoute },
  { path: 'search', Component: SearchResultsRoute },
  { path: 'privacy-policy', Component: PrivacyPolicyRoute },
  { path: 'terms-of-service', Component: TermsOfServiceRoute },
  { path: 'policies', Component: GenericPolicyRoute },
  { path: 'policies-publishing-principles', Component: GenericPolicyRoute },
  { path: 'policies-diversity-content', Component: GenericPolicyRoute },
  { path: 'policies-diversity-staffing', Component: GenericPolicyRoute },
  { path: 'policies-ethics', Component: GenericPolicyRoute },
  { path: 'policies-feedback', Component: GenericPolicyRoute },
  { path: 'policies-corrections', Component: GenericPolicyRoute },
  { path: 'policies-ownership-funding', Component: GenericPolicyRoute },
  { path: 'getting-started-with-lightspeed', Component: GettingStartedRoute },
  { path: 'mailpoet-unsubscribe-success-page', Component: NewsletterUtilityRoute },
  { path: 'mailpoet-manage-your-subscription', Component: NewsletterUtilityRoute },
  { path: 'mailpoet-unsubscribe-confirmation', Component: NewsletterUtilityRoute },
  { path: 'mailpoet-re-engangement-page', Component: NewsletterUtilityRoute },
  { path: 'site-map', Component: SiteMapRoute },
  { path: 'style-guide', Component: StyleGuideRoute },
  { path: 'tutorials', Component: TutorialsRoute },
];