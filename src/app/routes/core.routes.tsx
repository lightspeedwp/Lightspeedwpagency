/**
 * Core Routes
 * 
 * Routes for core pages: Home, About, Services, Systems
 * Solutions routes are in solutions.routes.tsx
 * 
 * URL Patterns:
 * - `/` — Homepage
 * - `/about/*` — About section
 * - `/services/*` — Services section
 * - `/systems/*` — Systems Hub
 * 
 * CSS Bundles:
 * - Homepage uses core CSS only (no extra bundle)
 * - About routes load 'about' bundle (~6-8KB gzipped)
 * - Services routes load 'services' bundle (~15-25KB gzipped)
 * - Systems routes load 'system' bundle (~10-15KB gzipped)
 * 
 * @see /src/app/routes/solutions.routes.tsx
 * @see /src/app/utils/css-bundle-loader.ts
 * @see /src/styles/bundles/
 */

import React from 'react';
import { Navigate, type RouteObject } from 'react-router';
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
import { CompetitorResearchServiceTemplate } from '../components/templates/CompetitorResearchServiceTemplate';

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

// Journey Stage Pages
import { JourneyStageTemplate } from '../components/templates/JourneyStageTemplate';

// Systems Hub
import { SystemsHubTemplate } from '../components/templates/SystemsHubTemplate';
import { DesignTokensSystemTemplate } from '../components/templates/DesignTokensSystemTemplate';
import { PatternGovernanceSystemTemplate } from '../components/templates/PatternGovernanceSystemTemplate';

// Systems child pages
import { EditorialWorkflowsSystemTemplate } from '../components/templates/EditorialWorkflowsSystemTemplate';
import { AISearchReadinessSystemTemplate } from '../components/templates/AISearchReadinessSystemTemplate';
import { PerformanceReliabilitySystemTemplate } from '../components/templates/PerformanceReliabilitySystemTemplate';

// Getting Started
import { GettingStartedTemplate } from '../components/templates/GettingStartedTemplate';

/* ═══════════════════════════════════════════
 * Route Component Wrappers (CSS Bundle Loaders)
 * ═══════════════════════════════════════════ */

// About
function AboutRoute() { loadCSSBundle('about'); return <AboutTemplate />; }
function AboutProcessRoute() { loadCSSBundle('about'); return <AboutProcessTemplate />; }
function AboutCultureRoute() { loadCSSBundle('about'); return <AboutCultureTemplate />; }
function AboutHistoryRoute() { loadCSSBundle('about'); return <AboutHistoryTemplate />; }
function TeamRoute() { loadCSSBundle('about'); return <TeamTemplate />; }
function CareersRoute() { loadCSSBundle('about'); return <CareersTemplate />; }

// Services
function ServicesLandingRoute() { loadCSSBundle('services'); return <ServicesLandingTemplate />; }
function DiscoveryServiceRoute() { loadCSSBundle('services'); return <DiscoveryServiceTemplate />; }
function DesignServiceRoute() { loadCSSBundle('services'); return <DesignServiceTemplate />; }
function DevelopmentServiceRoute() { loadCSSBundle('services'); return <DevelopmentServiceTemplate />; }
function ContentServiceRoute() { loadCSSBundle('services'); return <ContentServiceTemplate />; }
function SecurityServiceRoute() { loadCSSBundle('services'); return <SecurityServiceTemplate />; }
function TrainingRoute() { loadCSSBundle('services'); return <TrainingTemplate />; }
function HostingRoute() { loadCSSBundle('services'); return <HostingTemplate />; }
function PerformanceServiceRoute() { loadCSSBundle('services'); return <PerformanceServiceTemplate />; }

function AISearchServiceRoute() { loadCSSBundle('services'); return <AISearchServiceTemplate />; }
function SEOServiceRoute() { loadCSSBundle('services'); return <SEOServiceTemplate />; }
function AnalyticsServiceRoute() { loadCSSBundle('services'); return <AnalyticsServiceTemplate />; }
function AIEngineServiceRoute() { loadCSSBundle('services'); return <AIEngineServiceTemplate />; }
function AnswerEngineServiceRoute() { loadCSSBundle('services'); return <AnswerEngineServiceTemplate />; }
function AccessibilityServiceRoute() { loadCSSBundle('services'); return <AccessibilityServiceTemplate />; }
function MigrationsServiceRoute() { loadCSSBundle('services'); return <MigrationsServiceTemplate />; }
function SupportServiceRoute() { loadCSSBundle('services'); return <SupportServiceTemplate />; }
function ContentStrategyServiceRoute() { loadCSSBundle('services'); return <ContentStrategyServiceTemplate />; }
function ContentCollectionServiceRoute() { loadCSSBundle('services'); return <ContentCollectionServiceTemplate />; }
function ContentAuditServiceRoute() { loadCSSBundle('services'); return <ContentAuditServiceTemplate />; }
function NewsletterServiceRoute() { loadCSSBundle('services'); return <NewsletterServiceTemplate />; }
function EmailMarketingServiceRoute() { loadCSSBundle('services'); return <EmailMarketingServiceTemplate />; }
function CompetitorResearchServiceRoute() { loadCSSBundle('services'); return <CompetitorResearchServiceTemplate />; }
function AIServicesLandingRoute() { loadCSSBundle('services'); return <AIServicesLandingTemplate />; }
function ContentServicesLandingRoute() { loadCSSBundle('services'); return <ContentServicesLandingTemplate />; }
function ContentCreationServiceRoute() { loadCSSBundle('services'); return <ContentCreationServiceTemplate />; }
function ContentCopywritingServiceRoute() { loadCSSBundle('services'); return <ContentCopywritingServiceTemplate />; }
function ContentSEOServiceRoute() { loadCSSBundle('services'); return <ContentSEOServiceTemplate />; }
function ContentGovernanceServiceRoute() { loadCSSBundle('services'); return <ContentGovernanceServiceTemplate />; }
function FigmaPrototypingServiceRoute() { loadCSSBundle('services'); return <FigmaPrototypingServiceTemplate />; }
function DesignSystemsServiceRoute() { loadCSSBundle('services'); return <DesignSystemsServiceTemplate />; }

// Systems Hub
function SystemsHubRoute() { loadCSSBundle('system'); return <SystemsHubTemplate />; }
function DesignTokensSystemRoute() { loadCSSBundle('system'); return <DesignTokensSystemTemplate />; }
function PatternGovernanceSystemRoute() { loadCSSBundle('system'); return <PatternGovernanceSystemTemplate />; }

// Systems child pages
function EditorialWorkflowsSystemRoute() { loadCSSBundle('system'); return <EditorialWorkflowsSystemTemplate />; }
function AISearchReadinessSystemRoute() { loadCSSBundle('system'); return <AISearchReadinessSystemTemplate />; }
function PerformanceReliabilitySystemRoute() { loadCSSBundle('system'); return <PerformanceReliabilitySystemTemplate />; }

// Journey Stage routes
function JourneyDiscoverRoute() { loadCSSBundle('services'); return <JourneyStageTemplate slug="discover" />; }
function JourneyCreateRoute() { loadCSSBundle('services'); return <JourneyStageTemplate slug="create" />; }
function JourneyBuildRoute() { loadCSSBundle('services'); return <JourneyStageTemplate slug="build" />; }
function JourneyLaunchRoute() { loadCSSBundle('services'); return <JourneyStageTemplate slug="launch" />; }
function JourneyGrowRoute() { loadCSSBundle('services'); return <JourneyStageTemplate slug="grow" />; }
function JourneyEvolveRoute() { loadCSSBundle('services'); return <JourneyStageTemplate slug="evolve" />; }

// Getting Started
function GettingStartedRoute() { loadCSSBundle('services'); return <GettingStartedTemplate />; }

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const coreRoutes: RouteObject[] = [
  /* ── Home (Core CSS Only) ── */
  { index: true, Component: FrontPageTemplate },

  /* ── Getting Started ── */
  { path: 'getting-started', Component: GettingStartedRoute },

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
  { path: 'services/competitor-research', Component: CompetitorResearchServiceRoute },
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
  { path: 'services/discover', Component: JourneyDiscoverRoute },
  { path: 'services/ignite', element: <Navigate to="/services/discover" replace /> },
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
];