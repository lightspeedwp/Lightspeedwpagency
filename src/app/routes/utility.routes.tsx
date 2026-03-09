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

import { type RouteObject } from 'react-router';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Template Imports
 * ═══════════════════════════════════════════ */

import { ContactPageTemplate } from '../components/templates/ContactPageTemplate';
import { FAQTemplate } from '../components/templates/FAQTemplate';
import { PricingTemplate } from '../components/templates/PricingTemplate';
import { WhyChooseUsTemplate } from '../components/templates/WhyChooseUsTemplate';
import { GuaranteesTemplate } from '../components/templates/GuaranteesTemplate';
import { ROICalculatorTemplate } from '../components/templates/ROICalculatorTemplate';
import { SearchResultsPageTemplate } from '../components/templates/SearchResultsPageTemplate';
import { PrivacyPolicyTemplate } from '../components/templates/PrivacyPolicyTemplate';
import { TermsOfServiceTemplate } from '../components/templates/TermsOfServiceTemplate';
import { SiteMapTemplate } from '../components/templates/SiteMapTemplate';
import { StyleGuideTemplate } from '../components/templates/StyleGuideTemplate';
import { TutorialsTemplate } from '../components/templates/TutorialsTemplate';

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const utilityRoutes: RouteObject[] = [
  /* ── Utility Pages (Utility Bundle) ── */
  {
    path: 'contact',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: ContactPageTemplate };
    },
  },
  {
    path: 'faq',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: FAQTemplate };
    },
  },
  {
    path: 'pricing',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: PricingTemplate };
    },
  },
  {
    path: 'why-choose-us',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: WhyChooseUsTemplate };
    },
  },
  {
    path: 'guarantees',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: GuaranteesTemplate };
    },
  },
  {
    path: 'roi-calculator',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: ROICalculatorTemplate };
    },
  },
  {
    path: 'search',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: SearchResultsPageTemplate };
    },
  },
  {
    path: 'privacy-policy',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: PrivacyPolicyTemplate };
    },
  },
  {
    path: 'terms-of-service',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: TermsOfServiceTemplate };
    },
  },
  {
    path: 'site-map',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: SiteMapTemplate };
    },
  },
  {
    path: 'style-guide',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: StyleGuideTemplate };
    },
  },
  {
    path: 'tutorials',
    lazy: async () => {
      await loadCSSBundle('utility');
      return { Component: TutorialsTemplate };
    },
  },
];