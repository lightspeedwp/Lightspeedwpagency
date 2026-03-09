/**
 * LSX Design — Route Wrapper Components
 *
 * Suspense wrappers for lazy-loaded templates and
 * parameter extraction wrappers for parameterized routes.
 *
 * @see /src/app/routes.tsx — Route definitions
 * @see /src/app/routes/lazy-imports.ts — Lazy template imports
 */

import { Suspense } from 'react';
import { useParams } from 'react-router';
import { RouteLoadingFallback } from '../components/ui/RouteLoadingFallback';

/* ── Static template imports (needed for param wrappers) ── */
import { PortfolioSingleTemplate } from '../components/templates/PortfolioSingleTemplate';
import { SinglePostTemplate } from '../components/templates/SinglePostTemplate';
import { CategoryArchiveTemplate } from '../components/templates/CategoryArchiveTemplate';
import { AuthorArchiveTemplate } from '../components/templates/AuthorArchiveTemplate';
import { TagArchiveTemplate } from '../components/templates/TagArchiveTemplate';
import { DateArchiveTemplate } from '../components/templates/DateArchiveTemplate';
import { PortfolioCategoryArchiveTemplate } from '../components/templates/PortfolioCategoryArchiveTemplate';
import { PortfolioTagArchiveTemplate } from '../components/templates/PortfolioTagArchiveTemplate';
import { StyleGuideTemplate } from '../components/templates/StyleGuideTemplate';

/* ── Lazy template imports ── */
import {
  EditorialWorkflowsSystemTemplate,
  AISearchReadinessSystemTemplate,
  PerformanceReliabilitySystemTemplate,
  JourneyStageTemplate,
  VideoArchiveTemplate,
  SingleVideoTemplate,
  VideoCategoryArchiveTemplate,
  VideoTagArchiveTemplate,
  PodcastArchiveTemplate,
  SinglePodcastTemplate,
  PodcastCategoryArchiveTemplate,
  ProductArchiveTemplate,
  SingleProductTemplate,
  CartTemplate,
  CheckoutTemplate,
  TourOperatorArchiveTemplate,
  SingleTourTemplate,
  TestimonialArchiveTemplate,
  SingleTestimonialTemplate,
  SingleTestimonialAudioTemplate,
  SingleTestimonialVideoTemplate,
  SingleTestimonialGalleryTemplate,
  AudioArchiveTemplate,
  SingleAudioTemplate,
  GalleryArchiveTemplate,
  SingleGalleryTemplate,
  ImageArchiveTemplate,
  SingleImageTemplate,
  QuoteArchiveTemplate,
  SingleQuoteTemplate,
  LinkArchiveTemplate,
  SingleLinkTemplate,
  ChatArchiveTemplate,
  SingleChatTemplate,
  StatusArchiveTemplate,
  SingleStatusTemplate,
  StandardArchiveTemplate,
  SingleStandardTemplate,
  AsideArchiveTemplate,
  SingleAsideTemplate,
  AsideStreamTemplate,
  ArchiveTemplate,
  ArchiveWithFiltersTemplate,
  IndexTemplate,
  SingleTemplate,
  SearchResultsTemplate,
  WordPressBlocksProofOfConcept,
  SectionStyleExample,
  FeatureShowcaseTemplate,
  DevToolsTemplate,
  TemplateTester,
  ComponentShowcase,
  DesignSystemTest,
  ComplianceScorecard,
  BlockDocumentation,
  ComponentAPI,
  DesignBlocksShowcase,
  ButtonShowcase,
  HeaderFooterComparison,
  IconLibrary,
  PhosphorIconReference,
  LivePreview,
  SectionPresetsShowcase,
  ThemeBlocksShowcase,
  DesignTokensReferenceTemplate,
  DeploymentReadinessTemplate,
  DesignPlaygroundTemplate,
  CodeQualityDashboardTemplate,
  DocsGeneratorTemplate,
} from './lazy-imports';

/* ═══════════════════════════════════════════
 * Parameter Route Wrappers
 * ═══════════════════════════════════════════ */

export function PortfolioSingleRoute() {
  const { slug } = useParams();
  return <PortfolioSingleTemplate slug={slug} />;
}

export function SinglePostRoute() {
  const { slug } = useParams();
  return <SinglePostTemplate slug={slug} />;
}

export function CategoryArchiveRoute() {
  const { slug } = useParams();
  return <CategoryArchiveTemplate category={slug} />;
}

export function AuthorArchiveRoute() {
  const { slug } = useParams();
  return <AuthorArchiveTemplate author={slug} />;
}

export function TagArchiveRoute() {
  const { slug } = useParams();
  return <TagArchiveTemplate tag={slug || 'wordpress'} />;
}

export function DateArchiveRoute() {
  const { year, month } = useParams();
  return (
    <DateArchiveTemplate
      year={year ? parseInt(year) : new Date().getFullYear()}
      month={month ? parseInt(month) : undefined}
    />
  );
}

export function PortfolioCategoryRoute() {
  return <PortfolioCategoryArchiveTemplate />;
}

export function PortfolioTagRoute() {
  return <PortfolioTagArchiveTemplate />;
}

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Systems
 * ═══════════════════════════════════════════ */

export function EditorialWorkflowsSystemRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><EditorialWorkflowsSystemTemplate /></Suspense>);
}
export function AISearchReadinessSystemRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><AISearchReadinessSystemTemplate /></Suspense>);
}
export function PerformanceReliabilitySystemRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><PerformanceReliabilitySystemTemplate /></Suspense>);
}

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Journey Stages
 * ═══════════════════════════════════════════ */

export function JourneyIgniteRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="ignite" /></Suspense>);
}
export function JourneyCreateRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="create" /></Suspense>);
}
export function JourneyBuildRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="build" /></Suspense>);
}
export function JourneyLaunchRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="launch" /></Suspense>);
}
export function JourneyGrowRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="grow" /></Suspense>);
}
export function JourneyEvolveRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><JourneyStageTemplate slug="evolve" /></Suspense>);
}

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — WooCommerce
 * ═══════════════════════════════════════════ */

export function ProductArchiveRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><ProductArchiveTemplate /></Suspense>);
}
export function SingleProductRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><SingleProductTemplate slug={slug} /></Suspense>);
}
export function CartRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><CartTemplate /></Suspense>);
}
export function CheckoutRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><CheckoutTemplate /></Suspense>);
}

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Tours
 * ═══════════════════════════════════════════ */

export function TourOperatorArchiveRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><TourOperatorArchiveTemplate /></Suspense>);
}
export function SingleTourRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><SingleTourTemplate /></Suspense>);
}

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Videos
 * ═══════════════════════════════════════════ */

export function VideoArchiveRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><VideoArchiveTemplate /></Suspense>);
}
export function SingleVideoRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><SingleVideoTemplate slug={slug} /></Suspense>);
}
export function VideoCategoryRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><VideoCategoryArchiveTemplate category={slug} /></Suspense>);
}
export function VideoTagArchiveRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><VideoTagArchiveTemplate tag={slug} /></Suspense>);
}

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Podcasts
 * ═══════════════════════════════════════════ */

export function PodcastArchiveRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><PodcastArchiveTemplate /></Suspense>);
}
export function SinglePodcastRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><SinglePodcastTemplate slug={slug} /></Suspense>);
}
export function PodcastCategoryRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><PodcastCategoryArchiveTemplate /></Suspense>);
}

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Testimonials
 * ═══════════════════════════════════════════ */

export function TestimonialArchiveRoute() {
  return (<Suspense fallback={<RouteLoadingFallback />}><TestimonialArchiveTemplate /></Suspense>);
}
export function SingleTestimonialRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><SingleTestimonialTemplate slug={slug} /></Suspense>);
}
export function SingleTestimonialAudioRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><SingleTestimonialAudioTemplate slug={slug} /></Suspense>);
}
export function SingleTestimonialVideoRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><SingleTestimonialVideoTemplate slug={slug} /></Suspense>);
}
export function SingleTestimonialGalleryRoute() {
  const { slug } = useParams();
  return (<Suspense fallback={<RouteLoadingFallback />}><SingleTestimonialGalleryTemplate slug={slug} /></Suspense>);
}

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Post Formats
 * ═══════════════════════════════════════════ */

export function AudioArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><AudioArchiveTemplate /></Suspense>); }
export function SingleAudioRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleAudioTemplate /></Suspense>); }
export function GalleryArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><GalleryArchiveTemplate /></Suspense>); }
export function SingleGalleryRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleGalleryTemplate /></Suspense>); }
export function ImageArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ImageArchiveTemplate /></Suspense>); }
export function SingleImageRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleImageTemplate /></Suspense>); }
export function QuoteArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><QuoteArchiveTemplate /></Suspense>); }
export function SingleQuoteRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleQuoteTemplate /></Suspense>); }
export function LinkArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><LinkArchiveTemplate /></Suspense>); }
export function SingleLinkRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleLinkTemplate /></Suspense>); }
export function ChatArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ChatArchiveTemplate /></Suspense>); }
export function SingleChatRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleChatTemplate /></Suspense>); }
export function StatusArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><StatusArchiveTemplate /></Suspense>); }
export function SingleStatusRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleStatusTemplate /></Suspense>); }
export function StandardArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><StandardArchiveTemplate /></Suspense>); }
export function SingleStandardRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleStandardTemplate /></Suspense>); }
export function AsideArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><AsideArchiveTemplate /></Suspense>); }
export function SingleAsideRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleAsideTemplate /></Suspense>); }
export function AsideStreamRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><AsideStreamTemplate /></Suspense>); }

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Legacy / Misc
 * ═══════════════════════════════════════════ */

export function ArchiveRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ArchiveTemplate /></Suspense>); }
export function ArchiveWithFiltersRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ArchiveWithFiltersTemplate /></Suspense>); }
export function IndexRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><IndexTemplate /></Suspense>); }
export function SingleRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SingleTemplate /></Suspense>); }
export function SearchResultsRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SearchResultsTemplate /></Suspense>); }
export function WordPressBlocksPoCRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><WordPressBlocksProofOfConcept /></Suspense>); }
export function SectionStyleExampleRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SectionStyleExample /></Suspense>); }
export function FeatureShowcaseRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><FeatureShowcaseTemplate /></Suspense>); }

/* ═══════════════════════════════════════════
 * Lazy Suspense Wrappers — Dev Tools
 * ═══════════════════════════════════════════ */

export function DevToolsRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><DevToolsTemplate /></Suspense>); }
export function TemplateTesterRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><TemplateTester /></Suspense>); }
export function ComponentShowcaseRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ComponentShowcase /></Suspense>); }
export function DesignSystemTestRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><DesignSystemTest /></Suspense>); }
export function ComplianceScorecardRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ComplianceScorecard /></Suspense>); }
export function BlockDocumentationRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><BlockDocumentation /></Suspense>); }
export function ComponentAPIRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ComponentAPI /></Suspense>); }
export function DesignBlocksShowcaseRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><DesignBlocksShowcase /></Suspense>); }
export function ButtonShowcaseRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ButtonShowcase /></Suspense>); }
export function HeaderFooterComparisonRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><HeaderFooterComparison /></Suspense>); }
export function IconLibraryRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><IconLibrary /></Suspense>); }
export function PhosphorIconReferenceRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><PhosphorIconReference /></Suspense>); }
export function LivePreviewRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><LivePreview /></Suspense>); }
export function SectionPresetsShowcaseRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><SectionPresetsShowcase /></Suspense>); }
export function ThemeBlocksShowcaseRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><ThemeBlocksShowcase /></Suspense>); }
export function DesignTokensReferenceRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><DesignTokensReferenceTemplate /></Suspense>); }
export function DeploymentReadinessRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><DeploymentReadinessTemplate /></Suspense>); }
export function DesignPlaygroundRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><DesignPlaygroundTemplate /></Suspense>); }
export function CodeQualityDashboardRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><CodeQualityDashboardTemplate /></Suspense>); }
export function DocsGeneratorRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><DocsGeneratorTemplate /></Suspense>); }
export function StyleGuideRoute() { return (<Suspense fallback={<RouteLoadingFallback />}><StyleGuideTemplate /></Suspense>); }
