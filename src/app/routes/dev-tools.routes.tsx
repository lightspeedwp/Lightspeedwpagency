/**
 * Dev Tools Routes
 * 
 * Routes for developer tools and testing pages
 * 
 * URL Pattern: `/dev-tools/*`
 * 
 * Tools:
 * - Template tester
 * - Component showcase
 * - Design system test
 * - Compliance scorecard
 * - Block documentation
 * - Component API
 * - Design blocks showcase
 * - Button showcase
 * - Header/footer comparison
 * - Icon library
 * - Phosphor icon reference
 * - Live preview
 * - Section presets showcase
 * - Theme blocks showcase
 * - Design tokens reference
 * - Deployment readiness
 * - Design playground
 * - Code quality dashboard
 * - Docs generator
 * - Style guide
 */

import React, { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';

/* ═══════════════════════════════════════════
 * Lazy Template Imports
 * ═══════════════════════════════════════════ */

const DevToolsTemplate = lazy(() => import('../components/templates/DevToolsTemplate').then(m => ({ default: m.DevToolsTemplate })));
const TemplateTester = lazy(() => import('../components/templates/TemplateTester').then(m => ({ default: m.TemplateTester })));
const ComponentShowcase = lazy(() => import('../components/templates/ComponentShowcase').then(m => ({ default: m.ComponentShowcase })));
const DesignSystemTest = lazy(() => import('../components/blocks/dev-tools/DesignSystemTest').then(m => ({ default: m.DesignSystemTest })));
const ComplianceScorecard = lazy(() => import('../components/blocks/dev-tools/ComplianceScorecard').then(m => ({ default: m.ComplianceScorecard })));
const BlockDocumentation = lazy(() => import('../components/templates/BlockDocumentation').then(m => ({ default: m.BlockDocumentation })));
const ComponentAPI = lazy(() => import('../components/templates/ComponentAPI').then(m => ({ default: m.ComponentAPI })));
const DesignBlocksShowcase = lazy(() => import('../components/templates/DesignBlocksShowcase').then(m => ({ default: m.DesignBlocksShowcase })));
const ButtonShowcase = lazy(() => import('../components/templates/ButtonShowcase').then(m => ({ default: m.ButtonShowcase })));
const HeaderFooterComparison = lazy(() => import('../components/templates/HeaderFooterComparison').then(m => ({ default: m.HeaderFooterComparison })));
const IconLibrary = lazy(() => import('../components/templates/IconLibrary').then(m => ({ default: m.IconLibrary })));
const PhosphorIconReference = lazy(() => import('../components/templates/PhosphorIconReference').then(m => ({ default: m.PhosphorIconReference })));
const LivePreview = lazy(() => import('../components/templates/LivePreview').then(m => ({ default: m.LivePreview })));
const SectionPresetsShowcase = lazy(() => import('../components/templates/SectionPresetsShowcase').then(m => ({ default: m.SectionPresetsShowcase })));
const ThemeBlocksShowcase = lazy(() => import('../components/templates/ThemeBlocksShowcase').then(m => ({ default: m.ThemeBlocksShowcase })));
const DesignTokensReferenceTemplate = lazy(() => import('../components/templates/DesignTokensReferenceTemplate').then(m => ({ default: m.DesignTokensReferenceTemplate })));
const DeploymentReadinessTemplate = lazy(() => import('../components/templates/DeploymentReadinessTemplate').then(m => ({ default: m.DeploymentReadinessTemplate })));
const DesignPlaygroundTemplate = lazy(() => import('../components/templates/DesignPlaygroundTemplate').then(m => ({ default: m.DesignPlaygroundTemplate })));
const CodeQualityDashboardTemplate = lazy(() => import('../components/templates/CodeQualityDashboardTemplate').then(m => ({ default: m.CodeQualityDashboardTemplate })));
const DocsGeneratorTemplate = lazy(() => import('../components/templates/DocsGeneratorTemplate').then(m => ({ default: m.DocsGeneratorTemplate })));

// StyleGuideTemplate (static import - also used in utility.routes.tsx)
import { StyleGuideTemplate } from '../components/templates/StyleGuideTemplate';

// FeatureShowcaseTemplate (also used in legacy.routes.tsx)
const FeatureShowcaseTemplate = lazy(() => import('../components/templates/FeatureShowcaseTemplate').then(m => ({ default: m.FeatureShowcaseTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function DevToolsRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DevToolsTemplate />
    </Suspense>
  );
}

function TemplateTesterRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <TemplateTester />
    </Suspense>
  );
}

function ComponentShowcaseRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ComponentShowcase />
    </Suspense>
  );
}

function DesignSystemTestRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DesignSystemTest />
    </Suspense>
  );
}

function ComplianceScorecardRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ComplianceScorecard />
    </Suspense>
  );
}

function BlockDocumentationRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <BlockDocumentation />
    </Suspense>
  );
}

function ComponentAPIRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ComponentAPI />
    </Suspense>
  );
}

function DesignBlocksShowcaseRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DesignBlocksShowcase />
    </Suspense>
  );
}

function ButtonShowcaseRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ButtonShowcase />
    </Suspense>
  );
}

function HeaderFooterComparisonRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <HeaderFooterComparison />
    </Suspense>
  );
}

function IconLibraryRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <IconLibrary />
    </Suspense>
  );
}

function PhosphorIconReferenceRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <PhosphorIconReference />
    </Suspense>
  );
}

function LivePreviewRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <LivePreview />
    </Suspense>
  );
}

function SectionPresetsShowcaseRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SectionPresetsShowcase />
    </Suspense>
  );
}

function ThemeBlocksShowcaseRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ThemeBlocksShowcase />
    </Suspense>
  );
}

function DesignTokensReferenceRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DesignTokensReferenceTemplate />
    </Suspense>
  );
}

function DeploymentReadinessRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DeploymentReadinessTemplate />
    </Suspense>
  );
}

function DesignPlaygroundRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DesignPlaygroundTemplate />
    </Suspense>
  );
}

function CodeQualityDashboardRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <CodeQualityDashboardTemplate />
    </Suspense>
  );
}

function DocsGeneratorRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <DocsGeneratorTemplate />
    </Suspense>
  );
}

function StyleGuideRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <StyleGuideTemplate />
    </Suspense>
  );
}

function FeatureShowcaseRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <FeatureShowcaseTemplate />
    </Suspense>
  );
}

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

export const devToolsRoutes: RouteObject[] = [
  /* ── Dev Tools ── */
  { path: 'dev-tools', Component: DevToolsRoute },
  { path: 'dev-tools/template-tester', Component: TemplateTesterRoute },
  { path: 'dev-tools/component-showcase', Component: ComponentShowcaseRoute },
  { path: 'dev-tools/design-system-test', Component: DesignSystemTestRoute },
  { path: 'dev-tools/compliance-scorecard', Component: ComplianceScorecardRoute },
  { path: 'dev-tools/feature-showcase', Component: FeatureShowcaseRoute },
  { path: 'dev-tools/block-documentation', Component: BlockDocumentationRoute },
  { path: 'dev-tools/component-api', Component: ComponentAPIRoute },
  { path: 'dev-tools/design-blocks-showcase', Component: DesignBlocksShowcaseRoute },
  { path: 'dev-tools/button-showcase', Component: ButtonShowcaseRoute },
  { path: 'dev-tools/header-footer-comparison', Component: HeaderFooterComparisonRoute },
  { path: 'dev-tools/icon-library', Component: IconLibraryRoute },
  { path: 'dev-tools/phosphor-icon-reference', Component: PhosphorIconReferenceRoute },
  { path: 'dev-tools/live-preview', Component: LivePreviewRoute },
  { path: 'dev-tools/section-presets-showcase', Component: SectionPresetsShowcaseRoute },
  { path: 'dev-tools/theme-blocks-showcase', Component: ThemeBlocksShowcaseRoute },
  { path: 'dev-tools/design-tokens-reference', Component: DesignTokensReferenceRoute },
  { path: 'dev-tools/deployment-readiness', Component: DeploymentReadinessRoute },
  { path: 'dev-tools/design-playground', Component: DesignPlaygroundRoute },
  { path: 'dev-tools/code-quality-dashboard', Component: CodeQualityDashboardRoute },
  { path: 'dev-tools/docs-generator', Component: DocsGeneratorRoute },
  { path: 'dev-tools/style-guide', Component: StyleGuideRoute }, // Duplicate path allowed for dev tools
];
