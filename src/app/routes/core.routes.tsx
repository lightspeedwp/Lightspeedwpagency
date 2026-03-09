/**
 * Core Routes
 * 
 * Routes for core pages: Home, About, Services, Systems, Solutions
 * 
 * URL Patterns:
 * - `/` — Homepage
 * - `/about/*` — About section
 * - `/services/*` — Services section
 * - `/systems/*` — Systems Hub
 * - `/solutions/*` — Solutions section
 * 
 * CSS Bundles:
 * - Homepage uses core CSS only (no extra bundle)
 * - About routes load 'about' bundle (~6-8KB gzipped)
 * - Services routes load 'services' bundle (~15-25KB gzipped)
 * - Systems routes load 'system' bundle (~10-15KB gzipped)
 * - Solutions routes load 'solutions' bundle (~10-15KB gzipped)
 * 
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/
 */

import React, { lazy, Suspense } from 'react';
import { Navigate, type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';
import { loadCSSBundle } from '../utils/css-bundle-loader';

/* ═══════════════════════════════════════════
 * Static Template Imports
 * ═══════════════════════════════════════════ */

// Core Pages
import { FrontPageTemplate } from '../components/templates/FrontPageTemplate';

// About
import { AboutTemplate } from '../components/templates/AboutTemplate';
import { AboutProcessTemplate } from '../components/templates/AboutProcessTemplate';
import { AboutCultureTemplate } from '../components/templates/AboutCultureTemplate';
import { AboutHistoryTemplate } from '../components/templates/AboutHistoryTemplate';
import { TeamTemplate } from '../components/templates/TeamTemplate';
import { CareersTemplate } from '../components/templates/CareersTemplate';

// Services
import { ServicesLandingTemplate } from '../components/templates/ServicesLandingTemplate';
import { DiscoveryServiceTemplate } from '../components/templates/DiscoveryServiceTemplate';
import { DesignServiceTemplate } from '../components/templates/DesignServiceTemplate';
import { DevelopmentServiceTemplate } from '../components/templates/DevelopmentServiceTemplate';
import { ContentServiceTemplate } from '../components/templates/ContentServiceTemplate';
import { SecurityServiceTemplate } from '../components/templates/SecurityServiceTemplate';
import { TrainingTemplate } from '../components/templates/TrainingTemplate';
import { HostingTemplate } from '../components/templates/HostingTemplate';
import { PerformanceServiceTemplate } from '../components/templates/PerformanceServiceTemplate';

// AI Search & Visibility
import { AISearchServiceTemplate } from '../components/templates/AISearchServiceTemplate';
import { SEOServiceTemplate } from '../components/templates/SEOServiceTemplate';
import { AnalyticsServiceTemplate } from '../components/templates/AnalyticsServiceTemplate';
import { AIEngineServiceTemplate } from '../components/templates/AIEngineServiceTemplate';
import { AnswerEngineServiceTemplate } from '../components/templates/AnswerEngineServiceTemplate';

// Performance Sub-Services
import { AccessibilityServiceTemplate } from '../components/templates/AccessibilityServiceTemplate';

// Hosting Sub-Services
import { MigrationsServiceTemplate } from '../components/templates/MigrationsServiceTemplate';
import { SupportServiceTemplate } from '../components/templates/SupportServiceTemplate';

// Content Sub-Services
import { ContentStrategyServiceTemplate } from '../components/templates/ContentStrategyServiceTemplate';
import { ContentCollectionServiceTemplate } from '../components/templates/ContentCollectionServiceTemplate';
import { ContentAuditServiceTemplate } from '../components/templates/ContentAuditServiceTemplate';
import { NewsletterServiceTemplate } from '../components/templates/NewsletterServiceTemplate';
import { EmailMarketingServiceTemplate } from '../components/templates/EmailMarketingServiceTemplate';

// AI Services Landing
import { AIServicesLandingTemplate } from '../components/templates/AIServicesLandingTemplate';

// Content Services Landing
import { ContentServicesLandingTemplate } from '../components/templates/ContentServicesLandingTemplate';

// New Content Sub-Services
import { ContentCreationServiceTemplate } from '../components/templates/ContentCreationServiceTemplate';
import { ContentCopywritingServiceTemplate } from '../components/templates/ContentCopywritingServiceTemplate';
import { ContentSEOServiceTemplate } from '../components/templates/ContentSEOServiceTemplate';
import { ContentGovernanceServiceTemplate } from '../components/templates/ContentGovernanceServiceTemplate';

// Design Sub-Services
import { FigmaPrototypingServiceTemplate } from '../components/templates/FigmaPrototypingServiceTemplate';
import { DesignSystemsServiceTemplate } from '../components/templates/DesignSystemsServiceTemplate';

// Journey Stage Pages (Lazy)
const JourneyStageTemplate = lazy(() => import('../components/templates/JourneyStageTemplate').then(m => ({ default: m.JourneyStageTemplate })));

// Systems Hub
import { SystemsHubTemplate } from '../components/templates/SystemsHubTemplate';
import { DesignTokensSystemTemplate } from '../components/templates/DesignTokensSystemTemplate';
import { PatternGovernanceSystemTemplate } from '../components/templates/PatternGovernanceSystemTemplate';

// Systems child pages (lazy-loaded)
const EditorialWorkflowsSystemTemplate = lazy(() => import('../components/templates/EditorialWorkflowsSystemTemplate'));
const AISearchReadinessSystemTemplate = lazy(() => import('../components/templates/AISearchReadinessSystemTemplate'));
const PerformanceReliabilitySystemTemplate = lazy(() => import('../components/templates/PerformanceReliabilitySystemTemplate'));

// Solutions
import { SolutionsTemplate } from '../components/templates/SolutionsTemplate';
import { WordPressSolutionTemplate } from '../components/templates/WordPressSolutionTemplate';
import { WooCommerceSolutionTemplate } from '../components/templates/WooCommerceSolutionTemplate';
import { TourOperatorTemplate } from '../components/templates/TourOperatorTemplate';
import { PublishersTemplate } from '../components/templates/PublishersTemplate';
import { LSXDesignTemplate } from '../components/templates/LSXDesignTemplate';
import { LSXSolutionTemplate } from '../components/templates/LSXSolutionTemplate';
import { MailchimpSolutionTemplate } from '../components/templates/MailchimpSolutionTemplate';
import { WetuImporterTemplate } from '../components/templates/WetuImporterTemplate';
import { LSXSharingTemplate } from '../components/templates/LSXSharingTemplate';
import { LSXSearchTemplate } from '../components/templates/LSXSearchTemplate';

// New Solution Pages
import { WordPressRedesignTemplate } from '../components/templates/WordPressRedesignTemplate';
import { WooCommerceRedesignTemplate } from '../components/templates/WooCommerceRedesignTemplate';
import { TourOperatorDesignTemplate } from '../components/templates/TourOperatorDesignTemplate';

// AI Integrations (Solutions)
import { AIIntegrationsTemplate } from '../components/templates/AIIntegrationsTemplate';
import { AIContentGenerationTemplate } from '../components/templates/AIContentGenerationTemplate';
import { AISEOTemplate } from '../components/templates/AISEOTemplate';
import { AIChatbotsTemplate } from '../components/templates/AIChatbotsTemplate';
import { AIAnalyticsTemplate } from '../components/templates/AIAnalyticsTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

// Systems child pages
function EditorialWorkflowsSystemRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <EditorialWorkflowsSystemTemplate />
    </Suspense>
  );
}

function AISearchReadinessSystemRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <AISearchReadinessSystemTemplate />
    </Suspense>
  );
}

function PerformanceReliabilitySystemRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <PerformanceReliabilitySystemTemplate />
    </Suspense>
  );
}

// Journey Stage routes
function JourneyIgniteRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <JourneyStageTemplate slug="ignite" />
    </Suspense>
  );
}

function JourneyCreateRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <JourneyStageTemplate slug="create" />
    </Suspense>
  );
}

function JourneyBuildRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <JourneyStageTemplate slug="build" />
    </Suspense>
  );
}

function JourneyLaunchRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <JourneyStageTemplate slug="launch" />
    </Suspense>
  );
}

function JourneyGrowRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <JourneyStageTemplate slug="grow" />
    </Suspense>
  );
}

function JourneyEvolveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <JourneyStageTemplate slug="evolve" />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const coreRoutes: RouteObject[] = [
  /* ── Home (Core CSS Only) ── */
  { index: true, Component: FrontPageTemplate },

  /* ── About (About Bundle) ── */
  {
    path: 'about',
    lazy: async () => {
      await loadCSSBundle('about');
      return { Component: AboutTemplate };
    },
  },
  {
    path: 'about/process',
    lazy: async () => {
      await loadCSSBundle('about');
      return { Component: AboutProcessTemplate };
    },
  },
  {
    path: 'about/culture',
    lazy: async () => {
      await loadCSSBundle('about');
      return { Component: AboutCultureTemplate };
    },
  },
  {
    path: 'about/history',
    lazy: async () => {
      await loadCSSBundle('about');
      return { Component: AboutHistoryTemplate };
    },
  },
  {
    path: 'about/team',
    lazy: async () => {
      await loadCSSBundle('about');
      return { Component: TeamTemplate };
    },
  },
  {
    path: 'about/careers',
    lazy: async () => {
      await loadCSSBundle('about');
      return { Component: CareersTemplate };
    },
  },

  /* ── Services (Services Bundle) ── */
  {
    path: 'services',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ServicesLandingTemplate };
    },
  },
  {
    path: 'services/discovery',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: DiscoveryServiceTemplate };
    },
  },
  {
    path: 'services/design',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: DesignServiceTemplate };
    },
  },
  {
    path: 'services/development',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: DevelopmentServiceTemplate };
    },
  },
  {
    path: 'services/content',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentServicesLandingTemplate };
    },
  },
  {
    path: 'services/content/overview',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentServiceTemplate };
    },
  },
  {
    path: 'services/content/strategy',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentStrategyServiceTemplate };
    },
  },
  {
    path: 'services/content/collection',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentCollectionServiceTemplate };
    },
  },
  {
    path: 'services/content/audit',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentAuditServiceTemplate };
    },
  },
  {
    path: 'services/content/creation',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentCreationServiceTemplate };
    },
  },
  {
    path: 'services/content/copywriting',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentCopywritingServiceTemplate };
    },
  },
  {
    path: 'services/content/seo-content',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentSEOServiceTemplate };
    },
  },
  {
    path: 'services/content/governance',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: ContentGovernanceServiceTemplate };
    },
  },
  {
    path: 'services/security',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: SecurityServiceTemplate };
    },
  },
  {
    path: 'services/migrations',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: MigrationsServiceTemplate };
    },
  },
  {
    path: 'services/support',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: SupportServiceTemplate };
    },
  },
  {
    path: 'services/newsletter',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: NewsletterServiceTemplate };
    },
  },
  {
    path: 'services/email-marketing',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: EmailMarketingServiceTemplate };
    },
  },
  {
    path: 'services/training',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: TrainingTemplate };
    },
  },
  {
    path: 'services/hosting',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: HostingTemplate };
    },
  },
  {
    path: 'services/performance',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: PerformanceServiceTemplate };
    },
  },
  {
    path: 'services/accessibility',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: AccessibilityServiceTemplate };
    },
  },
  {
    path: 'services/figma-prototyping',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: FigmaPrototypingServiceTemplate };
    },
  },
  {
    path: 'services/design-systems',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: DesignSystemsServiceTemplate };
    },
  },

  /* ── AI Services Landing + Sub-Services ── */
  {
    path: 'services/ai',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: AIServicesLandingTemplate };
    },
  },
  {
    path: 'services/ai/search-visibility',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: AISearchServiceTemplate };
    },
  },
  {
    path: 'services/ai/seo',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: SEOServiceTemplate };
    },
  },
  {
    path: 'services/ai/analytics',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: AnalyticsServiceTemplate };
    },
  },
  {
    path: 'services/ai/engine-optimisation',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: AIEngineServiceTemplate };
    },
  },
  {
    path: 'services/ai/answer-engine-optimisation',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: AnswerEngineServiceTemplate };
    },
  },

  /* ── AI Services Legacy Redirects (backward compatibility) ── */
  { path: 'services/ai-search-visibility', element: <Navigate to="/services/ai/search-visibility" replace /> },
  { path: 'services/seo', element: <Navigate to="/services/ai/seo" replace /> },
  { path: 'services/analytics', element: <Navigate to="/services/ai/analytics" replace /> },
  { path: 'services/ai-engine-optimisation', element: <Navigate to="/services/ai/engine-optimisation" replace /> },
  { path: 'services/answer-engine-optimisation', element: <Navigate to="/services/ai/answer-engine-optimisation" replace /> },

  /* ── Journey Stage Pages (Services Bundle) ── */
  {
    path: 'services/ignite',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: JourneyIgniteRoute };
    },
  },
  {
    path: 'services/create',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: JourneyCreateRoute };
    },
  },
  {
    path: 'services/build',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: JourneyBuildRoute };
    },
  },
  {
    path: 'services/launch',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: JourneyLaunchRoute };
    },
  },
  {
    path: 'services/grow',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: JourneyGrowRoute };
    },
  },
  {
    path: 'services/evolve',
    lazy: async () => {
      await loadCSSBundle('services');
      return { Component: JourneyEvolveRoute };
    },
  },

  /* ── Systems Hub (System Bundle) ── */
  {
    path: 'systems',
    lazy: async () => {
      await loadCSSBundle('system');
      return { Component: SystemsHubTemplate };
    },
  },
  {
    path: 'systems/design-tokens',
    lazy: async () => {
      await loadCSSBundle('system');
      return { Component: DesignTokensSystemTemplate };
    },
  },
  {
    path: 'systems/pattern-governance',
    lazy: async () => {
      await loadCSSBundle('system');
      return { Component: PatternGovernanceSystemTemplate };
    },
  },
  {
    path: 'systems/editorial-workflows',
    lazy: async () => {
      await loadCSSBundle('system');
      return { Component: EditorialWorkflowsSystemRoute };
    },
  },
  {
    path: 'systems/ai-search-readiness',
    lazy: async () => {
      await loadCSSBundle('system');
      return { Component: AISearchReadinessSystemRoute };
    },
  },
  {
    path: 'systems/performance-reliability',
    lazy: async () => {
      await loadCSSBundle('system');
      return { Component: PerformanceReliabilitySystemRoute };
    },
  },

  /* ── Solutions (Solutions Bundle) ── */
  {
    path: 'solutions',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: SolutionsTemplate };
    },
  },
  {
    path: 'solutions/wordpress',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: WordPressSolutionTemplate };
    },
  },
  {
    path: 'solutions/woocommerce',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: WooCommerceSolutionTemplate };
    },
  },
  {
    path: 'solutions/tour-operators',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: TourOperatorTemplate };
    },
  },
  {
    path: 'solutions/publishers',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: PublishersTemplate };
    },
  },
  {
    path: 'solutions/lsx',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: LSXDesignTemplate };
    },
  },
  {
    path: 'solutions/lsx-theme',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: LSXSolutionTemplate };
    },
  },
  {
    path: 'solutions/mailchimp',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: MailchimpSolutionTemplate };
    },
  },
  {
    path: 'solutions/wetu-importer',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: WetuImporterTemplate };
    },
  },
  {
    path: 'solutions/lsx-sharing',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: LSXSharingTemplate };
    },
  },
  {
    path: 'solutions/lsx-search',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: LSXSearchTemplate };
    },
  },

  /* ── New Solution Pages ── */
  {
    path: 'solutions/wordpress-redesign',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: WordPressRedesignTemplate };
    },
  },
  {
    path: 'solutions/woocommerce-redesign',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: WooCommerceRedesignTemplate };
    },
  },
  {
    path: 'solutions/tour-operator-design',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: TourOperatorDesignTemplate };
    },
  },

  /* ── AI Integrations (Solutions) ── */
  {
    path: 'solutions/ai-integrations',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: AIIntegrationsTemplate };
    },
  },
  {
    path: 'solutions/ai-content-generation',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: AIContentGenerationTemplate };
    },
  },
  {
    path: 'solutions/ai-seo',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: AISEOTemplate };
    },
  },
  {
    path: 'solutions/ai-chatbots',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: AIChatbotsTemplate };
    },
  },
  {
    path: 'solutions/ai-analytics',
    lazy: async () => {
      await loadCSSBundle('solutions');
      return { Component: AIAnalyticsTemplate };
    },
  },
];