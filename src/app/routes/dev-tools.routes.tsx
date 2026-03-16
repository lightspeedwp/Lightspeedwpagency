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
 * - Snippet generator
 * - Style guide
 */

import React from 'react';
import { type RouteObject } from 'react-router';

/* ═══════════════════════════════════════════
 * Static Template Imports
 * ═══════════════════════════════════════════ */

import { DevToolsTemplate } from '../components/templates/DevToolsTemplate';
import { TemplateTester } from '../components/templates/TemplateTester';
import { ComponentShowcase } from '../components/templates/ComponentShowcase';
import { DesignSystemTest } from '../components/blocks/dev-tools/DesignSystemTest';
import { ComplianceScorecard } from '../components/blocks/dev-tools/ComplianceScorecard';
import { BlockDocumentation } from '../components/templates/BlockDocumentation';
import { ComponentAPI } from '../components/templates/ComponentAPI';
import { DesignBlocksShowcase } from '../components/templates/DesignBlocksShowcase';
import { ButtonShowcase } from '../components/templates/ButtonShowcase';
import { HeaderFooterComparison } from '../components/templates/HeaderFooterComparison';
import { IconLibrary } from '../components/templates/IconLibrary';
import { PhosphorIconReference } from '../components/templates/PhosphorIconReference';
import { LivePreview } from '../components/templates/LivePreview';
import { SectionPresetsShowcase } from '../components/templates/SectionPresetsShowcase';
import { ThemeBlocksShowcase } from '../components/templates/ThemeBlocksShowcase';
import { DesignTokensReferenceTemplate } from '../components/templates/DesignTokensReferenceTemplate';
import { DeploymentReadinessTemplate } from '../components/templates/DeploymentReadinessTemplate';
import { DesignPlaygroundTemplate } from '../components/templates/DesignPlaygroundTemplate';
import { CodeQualityDashboardTemplate } from '../components/templates/CodeQualityDashboardTemplate';
import { DocsGeneratorTemplate } from '../components/templates/DocsGeneratorTemplate';

// SnippetGenerator
import { SnippetGeneratorTemplate } from '../components/templates/SnippetGeneratorTemplate';

// StyleGuideTemplate (static import - also used in utility.routes.tsx)
import { StyleGuideTemplate } from '../components/templates/StyleGuideTemplate';

// FeatureShowcaseTemplate (also used in legacy.routes.tsx)
import { FeatureShowcaseTemplate } from '../components/templates/FeatureShowcaseTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components
 * ═══════════════════════════════════════════ */

function DevToolsRoute() {
  return <DevToolsTemplate />;
}

function TemplateTesterRoute() {
  return <TemplateTester />;
}

function ComponentShowcaseRoute() {
  return <ComponentShowcase />;
}

function DesignSystemTestRoute() {
  return <DesignSystemTest />;
}

function ComplianceScorecardRoute() {
  return <ComplianceScorecard />;
}

function BlockDocumentationRoute() {
  return <BlockDocumentation />;
}

function ComponentAPIRoute() {
  return <ComponentAPI />;
}

function DesignBlocksShowcaseRoute() {
  return <DesignBlocksShowcase />;
}

function ButtonShowcaseRoute() {
  return <ButtonShowcase />;
}

function HeaderFooterComparisonRoute() {
  return <HeaderFooterComparison />;
}

function IconLibraryRoute() {
  return <IconLibrary />;
}

function PhosphorIconReferenceRoute() {
  return <PhosphorIconReference />;
}

function LivePreviewRoute() {
  return <LivePreview />;
}

function SectionPresetsShowcaseRoute() {
  return <SectionPresetsShowcase />;
}

function ThemeBlocksShowcaseRoute() {
  return <ThemeBlocksShowcase />;
}

function DesignTokensReferenceRoute() {
  return <DesignTokensReferenceTemplate />;
}

function DeploymentReadinessRoute() {
  return <DeploymentReadinessTemplate />;
}

function DesignPlaygroundRoute() {
  return <DesignPlaygroundTemplate />;
}

function CodeQualityDashboardRoute() {
  return <CodeQualityDashboardTemplate />;
}

function DocsGeneratorRoute() {
  return <DocsGeneratorTemplate />;
}

function SnippetGeneratorRoute() {
  return <SnippetGeneratorTemplate />;
}

function StyleGuideRoute() {
  return <StyleGuideTemplate />;
}

function FeatureShowcaseRoute() {
  return <FeatureShowcaseTemplate />;
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
  { path: 'dev-tools/snippet-generator', Component: SnippetGeneratorRoute },
  { path: 'dev-tools/style-guide', Component: StyleGuideRoute }, // Duplicate path allowed for dev tools
];