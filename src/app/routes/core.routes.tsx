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

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

// About
const AboutTemplate = lazy(() => import('../components/templates/AboutTemplate').then(m => ({ default: m.AboutTemplate })));
const AboutProcessTemplate = lazy(() => import('../components/templates/AboutProcessTemplate').then(m => ({ default: m.AboutProcessTemplate })));
const AboutCultureTemplate = lazy(() => import('../components/templates/AboutCultureTemplate').then(m => ({ default: m.AboutCultureTemplate })));
const AboutHistoryTemplate = lazy(() => import('../components/templates/AboutHistoryTemplate').then(m => ({ default: m.AboutHistoryTemplate })));
const TeamTemplate = lazy(() => import('../components/templates/TeamTemplate').then(m => ({ default: m.TeamTemplate })));
const CareersTemplate = lazy(() => import('../components/templates/CareersTemplate').then(m => ({ default: m.CareersTemplate })));

// Services
const ServicesLandingTemplate = lazy(() => import('../components/templates/ServicesLandingTemplate').then(m => ({ default: m.ServicesLandingTemplate })));
const DiscoveryServiceTemplate = lazy(() => import('../components/templates/DiscoveryServiceTemplate').then(m => ({ default: m.DiscoveryServiceTemplate })));
const DesignServiceTemplate = lazy(() => import('../components/templates/DesignServiceTemplate').then(m => ({ default: m.DesignServiceTemplate })));
const DevelopmentServiceTemplate = lazy(() => import('../components/templates/DevelopmentServiceTemplate').then(m => ({ default: m.DevelopmentServiceTemplate })));
const ContentServiceTemplate = lazy(() => import('../components/templates/ContentServiceTemplate').then(m => ({ default: m.ContentServiceTemplate })));
const SecurityServiceTemplate = lazy(() => import('../components/templates/SecurityServiceTemplate').then(m => ({ default: m.SecurityServiceTemplate })));
const TrainingTemplate = lazy(() => import('../components/templates/TrainingTemplate').then(m => ({ default: m.TrainingTemplate })));
const HostingTemplate = lazy(() => import('../components/templates/HostingTemplate').then(m => ({ default: m.HostingTemplate })));
const PerformanceServiceTemplate = lazy(() => import('../components/templates/PerformanceServiceTemplate').then(m => ({ default: m.PerformanceServiceTemplate })));

// AI Search & Visibility
const AISearchServiceTemplate = lazy(() => import('../components/templates/AISearchServiceTemplate').then(m => ({ default: m.AISearchServiceTemplate })));
const SEOServiceTemplate = lazy(() => import('../components/templates/SEOServiceTemplate').then(m => ({ default: m.SEOServiceTemplate })));
const AnalyticsServiceTemplate = lazy(() => import('../components/templates/AnalyticsServiceTemplate').then(m => ({ default: m.AnalyticsServiceTemplate })));
const AIEngineServiceTemplate = lazy(() => import('../components/templates/AIEngineServiceTemplate').then(m => ({ default: m.AIEngineServiceTemplate })));
const AnswerEngineServiceTemplate = lazy(() => import('../components/templates/AnswerEngineServiceTemplate').then(m => ({ default: m.AnswerEngineServiceTemplate })));

// Performance Sub-Services
const AccessibilityServiceTemplate = lazy(() => import('../components/templates/AccessibilityServiceTemplate').then(m => ({ default: m.AccessibilityServiceTemplate })));

// Hosting Sub-Services
const MigrationsServiceTemplate = lazy(() => import('../components/templates/MigrationsServiceTemplate').then(m => ({ default: m.MigrationsServiceTemplate })));
const SupportServiceTemplate = lazy(() => import('../components/templates/SupportServiceTemplate').then(m => ({ default: m.SupportServiceTemplate })));

// Content Sub-Services
const ContentStrategyServiceTemplate = lazy(() => import('../components/templates/ContentStrategyServiceTemplate').then(m => ({ default: m.ContentStrategyServiceTemplate })));
const ContentCollectionServiceTemplate = lazy(() => import('../components/templates/ContentCollectionServiceTemplate').then(m => ({ default: m.ContentCollectionServiceTemplate })));
const ContentAuditServiceTemplate = lazy(() => import('../components/templates/ContentAuditServiceTemplate').then(m => ({ default: m.ContentAuditServiceTemplate })));
const NewsletterServiceTemplate = lazy(() => import('../components/templates/NewsletterServiceTemplate').then(m => ({ default: m.NewsletterServiceTemplate })));
const EmailMarketingServiceTemplate = lazy(() => import('../components/templates/EmailMarketingServiceTemplate').then(m => ({ default: m.EmailMarketingServiceTemplate })));

// AI Services Landing
const AIServicesLandingTemplate = lazy(() => import('../components/templates/AIServicesLandingTemplate').then(m => ({ default: m.AIServicesLandingTemplate })));

// Content Services Landing
const ContentServicesLandingTemplate = lazy(() => import('../components/templates/ContentServicesLandingTemplate').then(m => ({ default: m.ContentServicesLandingTemplate })));

// New Content Sub-Services
const ContentCreationServiceTemplate = lazy(() => import('../components/templates/ContentCreationServiceTemplate').then(m => ({ default: m.ContentCreationServiceTemplate })));
const ContentCopywritingServiceTemplate = lazy(() => import('../components/templates/ContentCopywritingServiceTemplate').then(m => ({ default: m.ContentCopywritingServiceTemplate })));
const ContentSEOServiceTemplate = lazy(() => import('../components/templates/ContentSEOServiceTemplate').then(m => ({ default: m.ContentSEOServiceTemplate })));
const ContentGovernanceServiceTemplate = lazy(() => import('../components/templates/ContentGovernanceServiceTemplate').then(m => ({ default: m.ContentGovernanceServiceTemplate })));

// Design Sub-Services
const FigmaPrototypingServiceTemplate = lazy(() => import('../components/templates/FigmaPrototypingServiceTemplate').then(m => ({ default: m.FigmaPrototypingServiceTemplate })));
const DesignSystemsServiceTemplate = lazy(() => import('../components/templates/DesignSystemsServiceTemplate').then(m => ({ default: m.DesignSystemsServiceTemplate })));

// Journey Stage Pages (Lazy)
const JourneyStageTemplate = lazy(() => import('../components/templates/JourneyStageTemplate').then(m => ({ default: m.JourneyStageTemplate })));

// Systems Hub
const SystemsHubTemplate = lazy(() => import('../components/templates/SystemsHubTemplate').then(m => ({ default: m.SystemsHubTemplate })));
const DesignTokensSystemTemplate = lazy(() => import('../components/templates/DesignTokensSystemTemplate').then(m => ({ default: m.DesignTokensSystemTemplate })));
const PatternGovernanceSystemTemplate = lazy(() => import('../components/templates/PatternGovernanceSystemTemplate').then(m => ({ default: m.PatternGovernanceSystemTemplate })));

// Systems child pages (lazy-loaded)
const EditorialWorkflowsSystemTemplate = lazy(() => import('../components/templates/EditorialWorkflowsSystemTemplate').then(m => ({ default: m.default || m.EditorialWorkflowsSystemTemplate })));
const AISearchReadinessSystemTemplate = lazy(() => import('../components/templates/AISearchReadinessSystemTemplate').then(m => ({ default: m.default || m.AISearchReadinessSystemTemplate })));
const PerformanceReliabilitySystemTemplate = lazy(() => import('../components/templates/PerformanceReliabilitySystemTemplate').then(m => ({ default: m.default || m.PerformanceReliabilitySystemTemplate })));

// Solutions
const SolutionsTemplate = lazy(() => import('../components/templates/SolutionsTemplate').then(m => ({ default: m.SolutionsTemplate })));
const WordPressSolutionTemplate = lazy(() => import('../components/templates/WordPressSolutionTemplate').then(m => ({ default: m.WordPressSolutionTemplate })));
const WooCommerceSolutionTemplate = lazy(() => import('../components/templates/WooCommerceSolutionTemplate').then(m => ({ default: m.WooCommerceSolutionTemplate })));
const TourOperatorTemplate = lazy(() => import('../components/templates/TourOperatorTemplate').then(m => ({ default: m.TourOperatorTemplate })));
const PublishersTemplate = lazy(() => import('../components/templates/PublishersTemplate').then(m => ({ default: m.PublishersTemplate })));
const LSXDesignTemplate = lazy(() => import('../components/templates/LSXDesignTemplate').then(m => ({ default: m.LSXDesignTemplate })));
const LSXSolutionTemplate = lazy(() => import('../components/templates/LSXSolutionTemplate').then(m => ({ default: m.LSXSolutionTemplate })));
const MailchimpSolutionTemplate = lazy(() => import('../components/templates/MailchimpSolutionTemplate').then(m => ({ default: m.MailchimpSolutionTemplate })));
const WetuImporterTemplate = lazy(() => import('../components/templates/WetuImporterTemplate').then(m => ({ default: m.WetuImporterTemplate })));
const LSXSharingTemplate = lazy(() => import('../components/templates/LSXSharingTemplate').then(m => ({ default: m.LSXSharingTemplate })));
const LSXSearchTemplate = lazy(() => import('../components/templates/LSXSearchTemplate').then(m => ({ default: m.LSXSearchTemplate })));

// New Solution Pages
const WordPressRedesignTemplate = lazy(() => import('../components/templates/WordPressRedesignTemplate').then(m => ({ default: m.WordPressRedesignTemplate })));
const WooCommerceRedesignTemplate = lazy(() => import('../components/templates/WooCommerceRedesignTemplate').then(m => ({ default: m.WooCommerceRedesignTemplate })));
const TourOperatorDesignTemplate = lazy(() => import('../components/templates/TourOperatorDesignTemplate').then(m => ({ default: m.TourOperatorDesignTemplate })));

// AI Integrations (Solutions)
const AIIntegrationsTemplate = lazy(() => import('../components/templates/AIIntegrationsTemplate').then(m => ({ default: m.AIIntegrationsTemplate })));
const AIContentGenerationTemplate = lazy(() => import('../components/templates/AIContentGenerationTemplate').then(m => ({ default: m.AIContentGenerationTemplate })));
const AISEOTemplate = lazy(() => import('../components/templates/AISEOTemplate').then(m => ({ default: m.AISEOTemplate })));
const AIChatbotsTemplate = lazy(() => import('../components/templates/AIChatbotsTemplate').then(m => ({ default: m.AIChatbotsTemplate })));
const AIAnalyticsTemplate = lazy(() => import('../components/templates/AIAnalyticsTemplate').then(m => ({ default: m.AIAnalyticsTemplate })));


/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

// About
function AboutRoute() { loadCSSBundle('about'); return <Suspense fallback={<RouteLoadingFallback />}><AboutTemplate /></Suspense>; }
function AboutProcessRoute() { loadCSSBundle('about'); return <Suspense fallback={<RouteLoadingFallback />}><AboutProcessTemplate /></Suspense>; }
function AboutCultureRoute() { loadCSSBundle('about'); return <Suspense fallback={<RouteLoadingFallback />}><AboutCultureTemplate /></Suspense>; }
function AboutHistoryRoute() { loadCSSBundle('about'); return <Suspense fallback={<RouteLoadingFallback />}><AboutHistoryTemplate /></Suspense>; }
function TeamRoute() { loadCSSBundle('about'); return <Suspense fallback={<RouteLoadingFallback />}><TeamTemplate /></Suspense>; }
function CareersRoute() { loadCSSBundle('about'); return <Suspense fallback={<RouteLoadingFallback />}><CareersTemplate /></Suspense>; }

// Services
function ServicesLandingRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ServicesLandingTemplate /></Suspense>; }
function DiscoveryServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><DiscoveryServiceTemplate /></Suspense>; }
function DesignServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><DesignServiceTemplate /></Suspense>; }
function DevelopmentServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><DevelopmentServiceTemplate /></Suspense>; }
function ContentServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentServiceTemplate /></Suspense>; }
function SecurityServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><SecurityServiceTemplate /></Suspense>; }
function TrainingRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><TrainingTemplate /></Suspense>; }
function HostingRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><HostingTemplate /></Suspense>; }
function PerformanceServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><PerformanceServiceTemplate /></Suspense>; }

function AISearchServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><AISearchServiceTemplate /></Suspense>; }
function SEOServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><SEOServiceTemplate /></Suspense>; }
function AnalyticsServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><AnalyticsServiceTemplate /></Suspense>; }
function AIEngineServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><AIEngineServiceTemplate /></Suspense>; }
function AnswerEngineServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><AnswerEngineServiceTemplate /></Suspense>; }
function AccessibilityServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><AccessibilityServiceTemplate /></Suspense>; }
function MigrationsServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><MigrationsServiceTemplate /></Suspense>; }
function SupportServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><SupportServiceTemplate /></Suspense>; }
function ContentStrategyServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentStrategyServiceTemplate /></Suspense>; }
function ContentCollectionServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentCollectionServiceTemplate /></Suspense>; }
function ContentAuditServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentAuditServiceTemplate /></Suspense>; }
function NewsletterServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><NewsletterServiceTemplate /></Suspense>; }
function EmailMarketingServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><EmailMarketingServiceTemplate /></Suspense>; }
function AIServicesLandingRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><AIServicesLandingTemplate /></Suspense>; }
function ContentServicesLandingRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentServicesLandingTemplate /></Suspense>; }
function ContentCreationServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentCreationServiceTemplate /></Suspense>; }
function ContentCopywritingServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentCopywritingServiceTemplate /></Suspense>; }
function ContentSEOServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentSEOServiceTemplate /></Suspense>; }
function ContentGovernanceServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><ContentGovernanceServiceTemplate /></Suspense>; }
function FigmaPrototypingServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><FigmaPrototypingServiceTemplate /></Suspense>; }
function DesignSystemsServiceRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><DesignSystemsServiceTemplate /></Suspense>; }

// Systems Hub
function SystemsHubRoute() { loadCSSBundle('system'); return <Suspense fallback={<RouteLoadingFallback />}><SystemsHubTemplate /></Suspense>; }
function DesignTokensSystemRoute() { loadCSSBundle('system'); return <Suspense fallback={<RouteLoadingFallback />}><DesignTokensSystemTemplate /></Suspense>; }
function PatternGovernanceSystemRoute() { loadCSSBundle('system'); return <Suspense fallback={<RouteLoadingFallback />}><PatternGovernanceSystemTemplate /></Suspense>; }

// Systems child pages
function EditorialWorkflowsSystemRoute() { loadCSSBundle('system'); return <Suspense fallback={<RouteLoadingFallback />}><EditorialWorkflowsSystemTemplate /></Suspense>; }
function AISearchReadinessSystemRoute() { loadCSSBundle('system'); return <Suspense fallback={<RouteLoadingFallback />}><AISearchReadinessSystemTemplate /></Suspense>; }
function PerformanceReliabilitySystemRoute() { loadCSSBundle('system'); return <Suspense fallback={<RouteLoadingFallback />}><PerformanceReliabilitySystemTemplate /></Suspense>; }

// Journey Stage routes
function JourneyIgniteRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="ignite" /></Suspense>; }
function JourneyCreateRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="create" /></Suspense>; }
function JourneyBuildRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="build" /></Suspense>; }
function JourneyLaunchRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="launch" /></Suspense>; }
function JourneyGrowRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="grow" /></Suspense>; }
function JourneyEvolveRoute() { loadCSSBundle('services'); return <Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="evolve" /></Suspense>; }

// Solutions
function SolutionsRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><SolutionsTemplate /></Suspense>; }
function WordPressSolutionRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><WordPressSolutionTemplate /></Suspense>; }
function WooCommerceSolutionRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><WooCommerceSolutionTemplate /></Suspense>; }
function TourOperatorRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><TourOperatorTemplate /></Suspense>; }
function PublishersRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><PublishersTemplate /></Suspense>; }
function LSXDesignRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><LSXDesignTemplate /></Suspense>; }
function LSXSolutionRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><LSXSolutionTemplate /></Suspense>; }
function MailchimpSolutionRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><MailchimpSolutionTemplate /></Suspense>; }
function WetuImporterRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><WetuImporterTemplate /></Suspense>; }
function LSXSharingRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><LSXSharingTemplate /></Suspense>; }
function LSXSearchRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><LSXSearchTemplate /></Suspense>; }
function WordPressRedesignRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><WordPressRedesignTemplate /></Suspense>; }
function WooCommerceRedesignRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><WooCommerceRedesignTemplate /></Suspense>; }
function TourOperatorDesignRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><TourOperatorDesignTemplate /></Suspense>; }
function AIIntegrationsRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><AIIntegrationsTemplate /></Suspense>; }
function AIContentGenerationRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><AIContentGenerationTemplate /></Suspense>; }
function AISEORoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><AISEOTemplate /></Suspense>; }
function AIChatbotsRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><AIChatbotsTemplate /></Suspense>; }
function AIAnalyticsRoute() { loadCSSBundle('solutions'); return <Suspense fallback={<RouteLoadingFallback />}><AIAnalyticsTemplate /></Suspense>; }


/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const coreRoutes: RouteObject[] = [
  /* ── Home (Core CSS Only) ── */
  { index: true, Component: FrontPageTemplate },

  /* ── About (About Bundle) ── */
  { path: 'about', Component: AboutRoute },
  { path: 'about/process', Component: AboutProcessRoute },
  { path: 'about/culture', Component: AboutCultureRoute },
  { path: 'about/history', Component: AboutHistoryRoute },
  { path: 'about/team', Component: TeamRoute },
  { path: 'about/careers', Component: CareersRoute },

  /* ── Services (Services Bundle) ── */
  { path: 'services', Component: ServicesLandingRoute },
  { path: 'services/discovery', Component: DiscoveryServiceRoute },
  { path: 'services/design', Component: DesignServiceRoute },
  { path: 'services/development', Component: DevelopmentServiceRoute },
  { path: 'services/content', Component: ContentServicesLandingRoute },
  { path: 'services/content/overview', Component: ContentServiceRoute },
  { path: 'services/content/strategy', Component: ContentStrategyServiceRoute },
  { path: 'services/content/collection', Component: ContentCollectionServiceRoute },
  { path: 'services/content/audit', Component: ContentAuditServiceRoute },
  { path: 'services/content/creation', Component: ContentCreationServiceRoute },
  { path: 'services/content/copywriting', Component: ContentCopywritingServiceRoute },
  { path: 'services/content/seo-content', Component: ContentSEOServiceRoute },
  { path: 'services/content/governance', Component: ContentGovernanceServiceRoute },
  { path: 'services/security', Component: SecurityServiceRoute },
  { path: 'services/migrations', Component: MigrationsServiceRoute },
  { path: 'services/support', Component: SupportServiceRoute },
  { path: 'services/newsletter', Component: NewsletterServiceRoute },
  { path: 'services/email-marketing', Component: EmailMarketingServiceRoute },
  { path: 'services/training', Component: TrainingRoute },
  { path: 'services/hosting', Component: HostingRoute },
  { path: 'services/performance', Component: PerformanceServiceRoute },
  { path: 'services/accessibility', Component: AccessibilityServiceRoute },
  { path: 'services/figma-prototyping', Component: FigmaPrototypingServiceRoute },
  { path: 'services/design-systems', Component: DesignSystemsServiceRoute },

  /* ── AI Services Landing + Sub-Services ── */
  { path: 'services/ai', Component: AIServicesLandingRoute },
  { path: 'services/ai/search-visibility', Component: AISearchServiceRoute },
  { path: 'services/ai/seo', Component: SEOServiceRoute },
  { path: 'services/ai/analytics', Component: AnalyticsServiceRoute },
  { path: 'services/ai/engine-optimisation', Component: AIEngineServiceRoute },
  { path: 'services/ai/answer-engine-optimisation', Component: AnswerEngineServiceRoute },

  /* ── AI Services Legacy Redirects (backward compatibility) ── */
  { path: 'services/ai-search-visibility', element: <Navigate to="/services/ai/search-visibility" replace /> },
  { path: 'services/seo', element: <Navigate to="/services/ai/seo" replace /> },
  { path: 'services/analytics', element: <Navigate to="/services/ai/analytics" replace /> },
  { path: 'services/ai-engine-optimisation', element: <Navigate to="/services/ai/engine-optimisation" replace /> },
  { path: 'services/answer-engine-optimisation', element: <Navigate to="/services/ai/answer-engine-optimisation" replace /> },

  /* ── Journey Stage Pages (Services Bundle) ── */
  { path: 'services/ignite', Component: JourneyIgniteRoute },
  { path: 'services/create', Component: JourneyCreateRoute },
  { path: 'services/build', Component: JourneyBuildRoute },
  { path: 'services/launch', Component: JourneyLaunchRoute },
  { path: 'services/grow', Component: JourneyGrowRoute },
  { path: 'services/evolve', Component: JourneyEvolveRoute },

  /* ── Systems Hub (System Bundle) ── */
  { path: 'systems', Component: SystemsHubRoute },
  { path: 'systems/design-tokens', Component: DesignTokensSystemRoute },
  { path: 'systems/pattern-governance', Component: PatternGovernanceSystemRoute },
  { path: 'systems/editorial-workflows', Component: EditorialWorkflowsSystemRoute },
  { path: 'systems/ai-search-readiness', Component: AISearchReadinessSystemRoute },
  { path: 'systems/performance-reliability', Component: PerformanceReliabilitySystemRoute },

  /* ── Solutions (Solutions Bundle) ── */
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
  { path: 'solutions/tour-operator-design', Component: TourOperatorDesignRoute },
  { path: 'solutions/ai-integrations', Component: AIIntegrationsRoute },
  { path: 'solutions/ai-content-generation', Component: AIContentGenerationRoute },
  { path: 'solutions/ai-seo', Component: AISEORoute },
  { path: 'solutions/ai-chatbots', Component: AIChatbotsRoute },
  { path: 'solutions/ai-analytics', Component: AIAnalyticsRoute },
];