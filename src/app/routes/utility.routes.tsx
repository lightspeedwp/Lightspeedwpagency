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

import React from 'react';
import { type RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Static Template Imports
 * ═══════════════════════════════════════════ */

import { ContactPageTemplate } from '../components/templates/ContactPageTemplate';
import { FreeConsultationTemplate } from '../components/templates/FreeConsultationTemplate';
import { FreeWooConsultationTemplate } from '../components/templates/FreeWooConsultationTemplate';
import { ClientIntakeFormTemplate } from '../components/templates/ClientIntakeFormTemplate';
import { ClientFeedbackTemplate } from '../components/templates/ClientFeedbackTemplate';
import { GenericThankYouTemplate } from '../components/templates/GenericThankYouTemplate';
import { FAQTemplate } from '../components/templates/FAQTemplate';
import { PricingTemplate } from '../components/templates/PricingTemplate';
import { WebsitePackagesTemplate } from '../components/templates/WebsitePackagesTemplate';
import { ReferralsTemplate } from '../components/templates/ReferralsTemplate';
import { WhyChooseUsTemplate } from '../components/templates/WhyChooseUsTemplate';
import { WhyLandingTemplate } from '../components/templates/WhyLandingTemplate';
import { WhyWooTemplate } from '../components/templates/WhyWooTemplate';
import { WhyWPTemplate } from '../components/templates/WhyWPTemplate';
import { WhyMailchimpTemplate } from '../components/templates/WhyMailchimpTemplate';
import { WhyLSXTemplate } from '../components/templates/WhyLSXTemplate';
import { WhyLightSpeedTemplate } from '../components/templates/WhyLightSpeedTemplate';
import { GuaranteesTemplate } from '../components/templates/GuaranteesTemplate';
import { ROICalculatorTemplate } from '../components/templates/ROICalculatorTemplate';
import { SearchResultsPageTemplate } from '../components/templates/SearchResultsPageTemplate';
import { PrivacyPolicyTemplate } from '../components/templates/PrivacyPolicyTemplate';
import { TermsOfServiceTemplate } from '../components/templates/TermsOfServiceTemplate';
import { GenericPolicyTemplate } from '../components/templates/GenericPolicyTemplate';
import { GettingStartedTemplate } from '../components/templates/GettingStartedTemplate';
import { NewsletterUtilityTemplate } from '../components/templates/NewsletterUtilityTemplate';
import { SiteMapTemplate } from '../components/templates/SiteMapTemplate';
import { StyleGuideTemplate } from '../components/templates/StyleGuideTemplate';
import { TutorialsTemplate } from '../components/templates/TutorialsTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function ContactPageRoute() { loadCSSBundle('utility'); return <ContactPageTemplate />; }
function FreeConsultationRoute() { loadCSSBundle('utility'); return <FreeConsultationTemplate />; }
function FreeWooConsultationRoute() { loadCSSBundle('utility'); return <FreeWooConsultationTemplate />; }
function ClientIntakeFormRoute() { loadCSSBundle('utility'); return <ClientIntakeFormTemplate />; }
function ClientFeedbackRoute() { loadCSSBundle('utility'); return <ClientFeedbackTemplate />; }
function GenericThankYouRoute() { loadCSSBundle('utility'); return <GenericThankYouTemplate />; }
function FAQRoute() { loadCSSBundle('utility'); return <FAQTemplate />; }
function PricingRoute() { loadCSSBundle('utility'); return <PricingTemplate />; }
function WebsitePackagesRoute() { loadCSSBundle('utility'); return <WebsitePackagesTemplate />; }
function ReferralsRoute() { loadCSSBundle('utility'); return <ReferralsTemplate />; }
function WhyChooseUsRoute() { loadCSSBundle('utility'); return <WhyChooseUsTemplate />; }
function WhyLandingRoute() { loadCSSBundle('utility'); return <WhyLandingTemplate />; }
function WhyWooRoute() { loadCSSBundle('utility'); return <WhyWooTemplate />; }
function WhyWPRoute() { loadCSSBundle('utility'); return <WhyWPTemplate />; }
function WhyMailchimpRoute() { loadCSSBundle('utility'); return <WhyMailchimpTemplate />; }
function WhyLSXRoute() { loadCSSBundle('utility'); return <WhyLSXTemplate />; }
function WhyLightSpeedRoute() { loadCSSBundle('utility'); return <WhyLightSpeedTemplate />; }
function GuaranteesRoute() { loadCSSBundle('utility'); return <GuaranteesTemplate />; }
function ROICalculatorRoute() { loadCSSBundle('utility'); return <ROICalculatorTemplate />; }
function SearchResultsRoute() { loadCSSBundle('utility'); return <SearchResultsPageTemplate />; }
function PrivacyPolicyRoute() { loadCSSBundle('utility'); return <PrivacyPolicyTemplate />; }
function TermsOfServiceRoute() { loadCSSBundle('utility'); return <TermsOfServiceTemplate />; }
function GenericPolicyRoute() { loadCSSBundle('utility'); return <GenericPolicyTemplate />; }
function GettingStartedLegacyRoute() { loadCSSBundle('utility'); return <GettingStartedTemplate />; }
function NewsletterUtilityRoute() { loadCSSBundle('utility'); return <NewsletterUtilityTemplate />; }
function SiteMapRoute() { loadCSSBundle('utility'); return <SiteMapTemplate />; }
function StyleGuideRoute() { loadCSSBundle('utility'); return <StyleGuideTemplate />; }
function TutorialsRoute() { loadCSSBundle('utility'); return <TutorialsTemplate />; }

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
  { path: 'getting-started-with-lightspeed', Component: GettingStartedLegacyRoute },
  { path: 'mailpoet-unsubscribe-success-page', Component: NewsletterUtilityRoute },
  { path: 'mailpoet-manage-your-subscription', Component: NewsletterUtilityRoute },
  { path: 'mailpoet-unsubscribe-confirmation', Component: NewsletterUtilityRoute },
  { path: 'mailpoet-re-engangement-page', Component: NewsletterUtilityRoute },
  { path: 'site-map', Component: SiteMapRoute },
  { path: 'style-guide', Component: StyleGuideRoute },
  { path: 'tutorials', Component: TutorialsRoute },
];