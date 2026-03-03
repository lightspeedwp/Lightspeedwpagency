/**
 * LSX Design — Route Configuration
 * 
 * React Router Data Mode configuration with hierarchical WordPress-style URLs.
 * 
 * Code Splitting Strategy (Phase 1 - Task 1.6):
 * - Core pages (42 templates): Static imports for fast initial load
 * - Non-core pages (75 templates): Lazy-loaded with React.lazy() + Suspense
 * - Dev tools (20 templates): Lazy-loaded (not needed in production browsing)
 * - WooCommerce (4 templates): Lazy-loaded (e-commerce functionality)
 * - Post formats (20 templates): Lazy-loaded (rarely visited)
 * - Media archives (12 templates): Lazy-loaded (niche content)
 * 
 * URL Structure:
 * - `/` — Homepage
 * - `/about/*` — About section
 * - `/services/*` — Services section
 * - `/solutions/*` — Solutions section
 * - `/work/:slug?` — Work archive + single projects
 * - `/insights/*` — Insights (blog)
 * - `/shop/*` — WooCommerce
 * - `/dev-tools/*` — Developer tools
 * 
 * @see /src/app/utils/route-map.ts — Slug-to-path mapping
 * @see /src/app/components/layouts/RootLayout.tsx — Shared layout
 * @see /reports/2026-02/2026-02-27-route-code-splitting-audit.md — Full audit report
 */

import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, type RouteObject, useParams } from 'react-router';
import { RootLayout } from './components/layouts/RootLayout';
import { RouteLoadingFallback } from './components/ui/RouteLoadingFallback';

/* ═══════════════════════════════════════════
 * Template Imports (Static)
 * ═══════════════════════════════════════════ */

// Core Pages
import { FrontPageTemplate } from './components/templates/FrontPageTemplate';
import { Template404 } from './components/templates/404Template';

// About
import { AboutTemplate } from './components/templates/AboutTemplate';
import { AboutProcessTemplate } from './components/templates/AboutProcessTemplate';
import { AboutCultureTemplate } from './components/templates/AboutCultureTemplate';
import { AboutHistoryTemplate } from './components/templates/AboutHistoryTemplate';
import { TeamTemplate } from './components/templates/TeamTemplate';
import { CareersTemplate } from './components/templates/CareersTemplate';

// Services
import { ServicesLandingTemplate } from './components/templates/ServicesLandingTemplate';
import { DiscoveryServiceTemplate } from './components/templates/DiscoveryServiceTemplate';
import { DesignServiceTemplate } from './components/templates/DesignServiceTemplate';
import { DevelopmentServiceTemplate } from './components/templates/DevelopmentServiceTemplate';
import { ContentServiceTemplate } from './components/templates/ContentServiceTemplate';
import { SecurityServiceTemplate } from './components/templates/SecurityServiceTemplate';
import { TrainingTemplate } from './components/templates/TrainingTemplate';
import { HostingTemplate } from './components/templates/HostingTemplate';
import { PerformanceServiceTemplate } from './components/templates/PerformanceServiceTemplate';

// AI Search & Visibility (consolidated: SEO + Analytics + AI Engine + Answer Engine)
import { AISearchServiceTemplate } from './components/templates/AISearchServiceTemplate';

// AI Search & Visibility Sub-Services (restored from Task 2.3 consolidation)
import { SEOServiceTemplate } from './components/templates/SEOServiceTemplate';
import { AnalyticsServiceTemplate } from './components/templates/AnalyticsServiceTemplate';
import { AIEngineServiceTemplate } from './components/templates/AIEngineServiceTemplate';
import { AnswerEngineServiceTemplate } from './components/templates/AnswerEngineServiceTemplate';

// Performance Sub-Services
import { AccessibilityServiceTemplate } from './components/templates/AccessibilityServiceTemplate';

// Hosting Sub-Services
import { MigrationsServiceTemplate } from './components/templates/MigrationsServiceTemplate';
import { SupportServiceTemplate } from './components/templates/SupportServiceTemplate';

// Content Sub-Services
import { ContentStrategyServiceTemplate } from './components/templates/ContentStrategyServiceTemplate';
import { ContentCollectionServiceTemplate } from './components/templates/ContentCollectionServiceTemplate';
import { ContentAuditServiceTemplate } from './components/templates/ContentAuditServiceTemplate';
import { NewsletterServiceTemplate } from './components/templates/NewsletterServiceTemplate';
import { EmailMarketingServiceTemplate } from './components/templates/EmailMarketingServiceTemplate';

// AI Services Landing
import { AIServicesLandingTemplate } from './components/templates/AIServicesLandingTemplate';

// Content Services Landing
import { ContentServicesLandingTemplate } from './components/templates/ContentServicesLandingTemplate';

// New Content Sub-Services
import { ContentCreationServiceTemplate } from './components/templates/ContentCreationServiceTemplate';
import { ContentCopywritingServiceTemplate } from './components/templates/ContentCopywritingServiceTemplate';
import { ContentSEOServiceTemplate } from './components/templates/ContentSEOServiceTemplate';
import { ContentGovernanceServiceTemplate } from './components/templates/ContentGovernanceServiceTemplate';

// Design Sub-Services
import { FigmaPrototypingServiceTemplate } from './components/templates/FigmaPrototypingServiceTemplate';
import { DesignSystemsServiceTemplate } from './components/templates/DesignSystemsServiceTemplate';

// Journey Stage Pages (Lazy - Phase 1.6)
const JourneyStageTemplate = lazy(() => import('./components/templates/JourneyStageTemplate').then(m => ({ default: m.JourneyStageTemplate })));

// Systems Hub (Phase 1 - Tasks 1.1, 1.2)
import { SystemsHubTemplate } from './components/templates/SystemsHubTemplate';
import { DesignTokensSystemTemplate } from './components/templates/DesignTokensSystemTemplate';
import { PatternGovernanceSystemTemplate } from './components/templates/PatternGovernanceSystemTemplate';

// Systems child pages (lazy-loaded - Phase 1 - Task 1.2)
const EditorialWorkflowsSystemTemplate = lazy(() => import('./components/templates/EditorialWorkflowsSystemTemplate'));
const AISearchReadinessSystemTemplate = lazy(() => import('./components/templates/AISearchReadinessSystemTemplate'));
const PerformanceReliabilitySystemTemplate = lazy(() => import('./components/templates/PerformanceReliabilitySystemTemplate'));

// Solutions
import { SolutionsTemplate } from './components/templates/SolutionsTemplate';
import { WordPressSolutionTemplate } from './components/templates/WordPressSolutionTemplate';
import { WooCommerceSolutionTemplate } from './components/templates/WooCommerceSolutionTemplate';
import { TourOperatorTemplate } from './components/templates/TourOperatorTemplate';
import { PublishersTemplate } from './components/templates/PublishersTemplate';
import { LSXDesignTemplate } from './components/templates/LSXDesignTemplate';
import { LSXSolutionTemplate } from './components/templates/LSXSolutionTemplate';
import { MailchimpSolutionTemplate } from './components/templates/MailchimpSolutionTemplate';
import { WetuImporterTemplate } from './components/templates/WetuImporterTemplate';
import { LSXSharingTemplate } from './components/templates/LSXSharingTemplate';
import { LSXSearchTemplate } from './components/templates/LSXSearchTemplate';

// New Solution Pages
import { WordPressRedesignTemplate } from './components/templates/WordPressRedesignTemplate';
import { WooCommerceRedesignTemplate } from './components/templates/WooCommerceRedesignTemplate';
import { TourOperatorDesignTemplate } from './components/templates/TourOperatorDesignTemplate';

// AI Integrations (Solutions)
import { AIIntegrationsTemplate } from './components/templates/AIIntegrationsTemplate';
import { AIContentGenerationTemplate } from './components/templates/AIContentGenerationTemplate';
import { AISEOTemplate } from './components/templates/AISEOTemplate';
import { AIChatbotsTemplate } from './components/templates/AIChatbotsTemplate';
import { AIAnalyticsTemplate } from './components/templates/AIAnalyticsTemplate';

// Portfolio
import { PortfolioArchiveTemplate } from './components/templates/PortfolioArchiveTemplate';
import { PortfolioSingleTemplate } from './components/templates/PortfolioSingleTemplate';
import { PortfolioCategoryArchiveTemplate } from './components/templates/PortfolioCategoryArchiveTemplate';
import { PortfolioTagArchiveTemplate } from './components/templates/PortfolioTagArchiveTemplate';

// Blog
import { BlogIndexTemplate } from './components/templates/BlogIndexTemplate';
import { SinglePostTemplate } from './components/templates/SinglePostTemplate';
import { SinglePostLongformTemplate } from './components/templates/SinglePostLongformTemplate';
import { CategoryArchiveTemplate } from './components/templates/CategoryArchiveTemplate';
import { AuthorArchiveTemplate } from './components/templates/AuthorArchiveTemplate';
import { TagArchiveTemplate } from './components/templates/TagArchiveTemplate';
import { DateArchiveTemplate } from './components/templates/DateArchiveTemplate';

// Videos (Lazy - Phase 1.6)
const VideoArchiveTemplate = lazy(() => import('./components/templates/VideoArchiveTemplate').then(m => ({ default: m.VideoArchiveTemplate })));
const SingleVideoTemplate = lazy(() => import('./components/templates/SingleVideoTemplate').then(m => ({ default: m.SingleVideoTemplate })));
const VideoCategoryArchiveTemplate = lazy(() => import('./components/templates/VideoCategoryArchiveTemplate').then(m => ({ default: m.VideoCategoryArchiveTemplate })));
const VideoTagArchiveTemplate = lazy(() => import('./components/templates/VideoTagArchiveTemplate').then(m => ({ default: m.VideoTagArchiveTemplate })));

// Podcasts (Lazy - Phase 1.6)
const PodcastArchiveTemplate = lazy(() => import('./components/templates/PodcastArchiveTemplate').then(m => ({ default: m.PodcastArchiveTemplate })));
const SinglePodcastTemplate = lazy(() => import('./components/templates/SinglePodcastTemplate').then(m => ({ default: m.SinglePodcastTemplate })));
const PodcastCategoryArchiveTemplate = lazy(() => import('./components/templates/PodcastCategoryArchiveTemplate').then(m => ({ default: m.PodcastCategoryArchiveTemplate })));

// Post Formats (Lazy - Phase 1.6)
const AudioArchiveTemplate = lazy(() => import('./components/templates/post-formats/AudioArchiveTemplate').then(m => ({ default: m.AudioArchiveTemplate })));
const SingleAudioTemplate = lazy(() => import('./components/templates/post-formats/SingleAudioTemplate').then(m => ({ default: m.SingleAudioTemplate })));
const GalleryArchiveTemplate = lazy(() => import('./components/templates/post-formats/GalleryArchiveTemplate').then(m => ({ default: m.GalleryArchiveTemplate })));
const SingleGalleryTemplate = lazy(() => import('./components/templates/post-formats/SingleGalleryTemplate').then(m => ({ default: m.SingleGalleryTemplate })));
const ImageArchiveTemplate = lazy(() => import('./components/templates/post-formats/ImageArchiveTemplate').then(m => ({ default: m.ImageArchiveTemplate })));
const SingleImageTemplate = lazy(() => import('./components/templates/post-formats/SingleImageTemplate').then(m => ({ default: m.SingleImageTemplate })));
const QuoteArchiveTemplate = lazy(() => import('./components/templates/post-formats/QuoteArchiveTemplate').then(m => ({ default: m.QuoteArchiveTemplate })));
const SingleQuoteTemplate = lazy(() => import('./components/templates/post-formats/SingleQuoteTemplate').then(m => ({ default: m.SingleQuoteTemplate })));
const LinkArchiveTemplate = lazy(() => import('./components/templates/post-formats/LinkArchiveTemplate').then(m => ({ default: m.LinkArchiveTemplate })));
const SingleLinkTemplate = lazy(() => import('./components/templates/post-formats/SingleLinkTemplate').then(m => ({ default: m.SingleLinkTemplate })));
const ChatArchiveTemplate = lazy(() => import('./components/templates/post-formats/ChatArchiveTemplate').then(m => ({ default: m.ChatArchiveTemplate })));
const SingleChatTemplate = lazy(() => import('./components/templates/post-formats/SingleChatTemplate').then(m => ({ default: m.SingleChatTemplate })));
const StatusArchiveTemplate = lazy(() => import('./components/templates/post-formats/StatusArchiveTemplate').then(m => ({ default: m.StatusArchiveTemplate })));
const SingleStatusTemplate = lazy(() => import('./components/templates/post-formats/SingleStatusTemplate').then(m => ({ default: m.SingleStatusTemplate })));
const StandardArchiveTemplate = lazy(() => import('./components/templates/post-formats/StandardArchiveTemplate').then(m => ({ default: m.StandardArchiveTemplate })));
const SingleStandardTemplate = lazy(() => import('./components/templates/post-formats/SingleStandardTemplate').then(m => ({ default: m.SingleStandardTemplate })));
const AsideArchiveTemplate = lazy(() => import('./components/templates/post-formats/AsideArchiveTemplate').then(m => ({ default: m.AsideArchiveTemplate })));
const SingleAsideTemplate = lazy(() => import('./components/templates/post-formats/SingleAsideTemplate').then(m => ({ default: m.SingleAsideTemplate })));
const AsideStreamTemplate = lazy(() => import('./components/templates/post-formats/AsideStreamTemplate').then(m => ({ default: m.AsideStreamTemplate })));

// WooCommerce (Lazy - Phase 1.6)
const ProductArchiveTemplate = lazy(() => import('./components/templates/ProductArchiveTemplate').then(m => ({ default: m.ProductArchiveTemplate })));
const SingleProductTemplate = lazy(() => import('./components/templates/woocommerce/SingleProductTemplate').then(m => ({ default: m.SingleProductTemplate })));
const CartTemplate = lazy(() => import('./components/templates/CartTemplate').then(m => ({ default: m.CartTemplate })));
const CheckoutTemplate = lazy(() => import('./components/templates/CheckoutTemplate').then(m => ({ default: m.CheckoutTemplate })));

// Tour Operator (Lazy - Phase 1.6)
const TourOperatorArchiveTemplate = lazy(() => import('./components/templates/tour-operator/TourOperatorArchiveTemplate').then(m => ({ default: m.TourOperatorArchiveTemplate })));
const SingleTourTemplate = lazy(() => import('./components/templates/tour-operator/SingleTourTemplate').then(m => ({ default: m.SingleTourTemplate })));

// Utility Pages
import { ContactPageTemplate } from './components/templates/ContactPageTemplate';
import { FAQTemplate } from './components/templates/FAQTemplate';
import { PricingTemplate } from './components/templates/PricingTemplate';
import { WhyChooseUsTemplate } from './components/templates/WhyChooseUsTemplate';
import { GuaranteesTemplate } from './components/templates/GuaranteesTemplate';
import { ROICalculatorTemplate } from './components/templates/ROICalculatorTemplate';
import { TestimonialsTemplate } from './components/templates/TestimonialsTemplate';

// Testimonial Templates (Archive + Singles) (Lazy - Phase 1.6)
const TestimonialArchiveTemplate = lazy(() => import('./components/templates/testimonials/TestimonialArchiveTemplate').then(m => ({ default: m.TestimonialArchiveTemplate })));
const SingleTestimonialTemplate = lazy(() => import('./components/templates/testimonials/SingleTestimonialTemplate').then(m => ({ default: m.SingleTestimonialTemplate })));
const SingleTestimonialAudioTemplate = lazy(() => import('./components/templates/testimonials/SingleTestimonialAudioTemplate').then(m => ({ default: m.SingleTestimonialAudioTemplate })));
const SingleTestimonialVideoTemplate = lazy(() => import('./components/templates/testimonials/SingleTestimonialVideoTemplate').then(m => ({ default: m.SingleTestimonialVideoTemplate })));
const SingleTestimonialGalleryTemplate = lazy(() => import('./components/templates/testimonials/SingleTestimonialGalleryTemplate').then(m => ({ default: m.SingleTestimonialGalleryTemplate })));

import { SearchResultsPageTemplate } from './components/templates/SearchResultsPageTemplate';
import { PrivacyPolicyTemplate } from './components/templates/PrivacyPolicyTemplate';
import { TermsOfServiceTemplate } from './components/templates/TermsOfServiceTemplate';
import { SiteMapTemplate } from './components/templates/SiteMapTemplate';
import { StyleGuideTemplate } from './components/templates/StyleGuideTemplate';
import { TutorialsTemplate } from './components/templates/TutorialsTemplate';

// Legacy / Misc (Lazy - Phase 1.6)
const ArchiveTemplate = lazy(() => import('./components/templates/ArchiveTemplate').then(m => ({ default: m.ArchiveTemplate })));
const ArchiveWithFiltersTemplate = lazy(() => import('./components/templates/ArchiveWithFiltersTemplate').then(m => ({ default: m.ArchiveWithFiltersTemplate })));
const IndexTemplate = lazy(() => import('./components/templates/IndexTemplate').then(m => ({ default: m.IndexTemplate })));
const SingleTemplate = lazy(() => import('./components/templates/SingleTemplate').then(m => ({ default: m.SingleTemplate })));
const SearchResultsTemplate = lazy(() => import('./components/templates/SearchResultsTemplate').then(m => ({ default: m.SearchResultsTemplate })));
const WordPressBlocksProofOfConcept = lazy(() => import('./components/templates/WordPressBlocksProofOfConcept').then(m => ({ default: m.WordPressBlocksProofOfConcept })));
const SectionStyleExample = lazy(() => import('./components/templates/SectionStyleExample').then(m => ({ default: m.SectionStyleExample })));
const FeatureShowcaseTemplate = lazy(() => import('./components/templates/FeatureShowcaseTemplate').then(m => ({ default: m.FeatureShowcaseTemplate })));

// Dev Tools (Lazy - Phase 1.6 — Priority 1)
const DevToolsTemplate = lazy(() => import('./components/templates/DevToolsTemplate').then(m => ({ default: m.DevToolsTemplate })));
const TemplateTester = lazy(() => import('./components/templates/TemplateTester').then(m => ({ default: m.TemplateTester })));
const ComponentShowcase = lazy(() => import('./components/templates/ComponentShowcase').then(m => ({ default: m.ComponentShowcase })));
const DesignSystemTest = lazy(() => import('./components/blocks/dev-tools/DesignSystemTest').then(m => ({ default: m.DesignSystemTest })));
const ComplianceScorecard = lazy(() => import('./components/blocks/dev-tools/ComplianceScorecard').then(m => ({ default: m.ComplianceScorecard })));
const BlockDocumentation = lazy(() => import('./components/templates/BlockDocumentation').then(m => ({ default: m.BlockDocumentation })));
const ComponentAPI = lazy(() => import('./components/templates/ComponentAPI').then(m => ({ default: m.ComponentAPI })));
const DesignBlocksShowcase = lazy(() => import('./components/templates/DesignBlocksShowcase').then(m => ({ default: m.DesignBlocksShowcase })));
const ButtonShowcase = lazy(() => import('./components/templates/ButtonShowcase').then(m => ({ default: m.ButtonShowcase })));
const HeaderFooterComparison = lazy(() => import('./components/templates/HeaderFooterComparison').then(m => ({ default: m.HeaderFooterComparison })));
const IconLibrary = lazy(() => import('./components/templates/IconLibrary').then(m => ({ default: m.IconLibrary })));
const PhosphorIconReference = lazy(() => import('./components/templates/PhosphorIconReference').then(m => ({ default: m.PhosphorIconReference })));
const LivePreview = lazy(() => import('./components/templates/LivePreview').then(m => ({ default: m.LivePreview })));
const SectionPresetsShowcase = lazy(() => import('./components/templates/SectionPresetsShowcase').then(m => ({ default: m.SectionPresetsShowcase })));
const ThemeBlocksShowcase = lazy(() => import('./components/templates/ThemeBlocksShowcase').then(m => ({ default: m.ThemeBlocksShowcase })));
const DesignTokensReferenceTemplate = lazy(() => import('./components/templates/DesignTokensReferenceTemplate').then(m => ({ default: m.DesignTokensReferenceTemplate })));
const DeploymentReadinessTemplate = lazy(() => import('./components/templates/DeploymentReadinessTemplate').then(m => ({ default: m.DeploymentReadinessTemplate })));
const DesignPlaygroundTemplate = lazy(() => import('./components/templates/DesignPlaygroundTemplate').then(m => ({ default: m.DesignPlaygroundTemplate })));
const CodeQualityDashboardTemplate = lazy(() => import('./components/templates/CodeQualityDashboardTemplate').then(m => ({ default: m.CodeQualityDashboardTemplate })));
const DocsGeneratorTemplate = lazy(() => import('./components/templates/DocsGeneratorTemplate').then(m => ({ default: m.DocsGeneratorTemplate })));
const SnippetGeneratorTemplate = lazy(() => import('./components/templates/SnippetGeneratorTemplate').then(m => ({ default: m.SnippetGeneratorTemplate })));

/* ═══════════════════════════════════════════
 * Route Wrapper Components (for params)
 * ═══════════════════════════════════════════ */

// Systems child pages (lazy-loaded)
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

function PortfolioSingleRoute() {
  const { slug } = useParams();
  return <PortfolioSingleTemplate slug={slug} />;
}

function SinglePostRoute() {
  const { slug } = useParams();
  return <SinglePostTemplate slug={slug} />;
}

function CategoryArchiveRoute() {
  const { slug } = useParams();
  return <CategoryArchiveTemplate category={slug} />;
}

function AuthorArchiveRoute() {
  const { slug } = useParams();
  return <AuthorArchiveTemplate author={slug} />;
}

function TagArchiveRoute() {
  const { slug } = useParams();
  return <TagArchiveTemplate tag={slug || 'wordpress'} />;
}

function DateArchiveRoute() {
  const { year, month } = useParams();
  return (
    <DateArchiveTemplate
      year={year ? parseInt(year) : new Date().getFullYear()}
      month={month ? parseInt(month) : undefined}
    />
  );
}

function SingleProductRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleProductTemplate slug={slug} />
    </Suspense>
  );
}

function SingleTourRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTourTemplate />
    </Suspense>
  );
}

function PortfolioCategoryRoute() {
  return <PortfolioCategoryArchiveTemplate />;
}

function PortfolioTagRoute() {
  return <PortfolioTagArchiveTemplate />;
}

function SingleVideoRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleVideoTemplate slug={slug} />
    </Suspense>
  );
}

function VideoCategoryRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <VideoCategoryArchiveTemplate category={slug} />
    </Suspense>
  );
}

function SinglePodcastRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SinglePodcastTemplate slug={slug} />
    </Suspense>
  );
}

function PodcastCategoryRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <PodcastCategoryArchiveTemplate />
    </Suspense>
  );
}

function SingleTestimonialRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTestimonialTemplate slug={slug} />
    </Suspense>
  );
}

function SingleTestimonialAudioRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTestimonialAudioTemplate slug={slug} />
    </Suspense>
  );
}

function SingleTestimonialVideoRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTestimonialVideoTemplate slug={slug} />
    </Suspense>
  );
}

function SingleTestimonialGalleryRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTestimonialGalleryTemplate slug={slug} />
    </Suspense>
  );
}

/* Journey Stage route wrappers (Lazy with Suspense) */
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
 * Lazy Route Wrappers (Non-Parameterized)
 * ═══════════════════════════════════════════ */

// WooCommerce
function ProductArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ProductArchiveTemplate />
    </Suspense>
  );
}

function CartRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <CartTemplate />
    </Suspense>
  );
}

function CheckoutRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <CheckoutTemplate />
    </Suspense>
  );
}

// Tour Operator
function TourOperatorArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <TourOperatorArchiveTemplate />
    </Suspense>
  );
}

// Videos
function VideoArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <VideoArchiveTemplate />
    </Suspense>
  );
}

function VideoTagArchiveRoute() {
  const { slug } = useParams();
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <VideoTagArchiveTemplate tag={slug} />
    </Suspense>
  );
}

// Podcasts
function PodcastArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <PodcastArchiveTemplate />
    </Suspense>
  );
}

// Testimonials
function TestimonialArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <TestimonialArchiveTemplate />
    </Suspense>
  );
}

// Post Formats
function AudioArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <AudioArchiveTemplate />
    </Suspense>
  );
}

function SingleAudioRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleAudioTemplate />
    </Suspense>
  );
}

function GalleryArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <GalleryArchiveTemplate />
    </Suspense>
  );
}

function SingleGalleryRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleGalleryTemplate />
    </Suspense>
  );
}

function ImageArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ImageArchiveTemplate />
    </Suspense>
  );
}

function SingleImageRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleImageTemplate />
    </Suspense>
  );
}

function QuoteArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <QuoteArchiveTemplate />
    </Suspense>
  );
}

function SingleQuoteRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleQuoteTemplate />
    </Suspense>
  );
}

function LinkArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <LinkArchiveTemplate />
    </Suspense>
  );
}

function SingleLinkRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleLinkTemplate />
    </Suspense>
  );
}

function ChatArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ChatArchiveTemplate />
    </Suspense>
  );
}

function SingleChatRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleChatTemplate />
    </Suspense>
  );
}

function StatusArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <StatusArchiveTemplate />
    </Suspense>
  );
}

function SingleStatusRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleStatusTemplate />
    </Suspense>
  );
}

function StandardArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <StandardArchiveTemplate />
    </Suspense>
  );
}

function SingleStandardRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleStandardTemplate />
    </Suspense>
  );
}

function AsideArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <AsideArchiveTemplate />
    </Suspense>
  );
}

function SingleAsideRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleAsideTemplate />
    </Suspense>
  );
}

function AsideStreamRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <AsideStreamTemplate />
    </Suspense>
  );
}

// Legacy / Misc
function ArchiveRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ArchiveTemplate />
    </Suspense>
  );
}

function ArchiveWithFiltersRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <ArchiveWithFiltersTemplate />
    </Suspense>
  );
}

function IndexRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <IndexTemplate />
    </Suspense>
  );
}

function SingleRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SingleTemplate />
    </Suspense>
  );
}

function SearchResultsRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SearchResultsTemplate />
    </Suspense>
  );
}

function WordPressBlocksPoCRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <WordPressBlocksProofOfConcept />
    </Suspense>
  );
}

function SectionStyleExampleRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SectionStyleExample />
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

// Dev Tools
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

function SnippetGeneratorRoute() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <SnippetGeneratorTemplate />
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

/* ═══════════════════════════════════════════
 * Route Definitions
 * ═══════════════════════════════════════════ */

const routes: RouteObject[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      /* ── Home ── */
      { index: true, Component: FrontPageTemplate },

      /* ── About ── */
      { path: 'about', Component: AboutTemplate },
      { path: 'about/process', Component: AboutProcessTemplate },
      { path: 'about/culture', Component: AboutCultureTemplate },
      { path: 'about/history', Component: AboutHistoryTemplate },
      { path: 'about/team', Component: TeamTemplate },
      { path: 'about/careers', Component: CareersTemplate },

      /* ── Services ── */
      { path: 'services', Component: ServicesLandingTemplate },
      { path: 'services/discovery', Component: DiscoveryServiceTemplate },
      { path: 'services/design', Component: DesignServiceTemplate },
      { path: 'services/development', Component: DevelopmentServiceTemplate },
      { path: 'services/content', Component: ContentServicesLandingTemplate },
      { path: 'services/content/overview', Component: ContentServiceTemplate },
      { path: 'services/content/strategy', Component: ContentStrategyServiceTemplate },
      { path: 'services/content/collection', Component: ContentCollectionServiceTemplate },
      { path: 'services/content/audit', Component: ContentAuditServiceTemplate },
      { path: 'services/content/creation', Component: ContentCreationServiceTemplate },
      { path: 'services/content/copywriting', Component: ContentCopywritingServiceTemplate },
      { path: 'services/content/seo-content', Component: ContentSEOServiceTemplate },
      { path: 'services/content/governance', Component: ContentGovernanceServiceTemplate },
      { path: 'services/security', Component: SecurityServiceTemplate },
      { path: 'services/migrations', Component: MigrationsServiceTemplate },
      { path: 'services/support', Component: SupportServiceTemplate },
      { path: 'services/newsletter', Component: NewsletterServiceTemplate },
      { path: 'services/email-marketing', Component: EmailMarketingServiceTemplate },
      { path: 'services/training', Component: TrainingTemplate },
      { path: 'services/hosting', Component: HostingTemplate },
      { path: 'services/performance', Component: PerformanceServiceTemplate },
      { path: 'services/accessibility', Component: AccessibilityServiceTemplate },
      { path: 'services/figma-prototyping', Component: FigmaPrototypingServiceTemplate },
      { path: 'services/design-systems', Component: DesignSystemsServiceTemplate },

      /* ── AI Services Landing + Sub-Services ── */
      { path: 'services/ai', Component: AIServicesLandingTemplate },
      { path: 'services/ai/search-visibility', Component: AISearchServiceTemplate },
      { path: 'services/ai/seo', Component: SEOServiceTemplate },
      { path: 'services/ai/analytics', Component: AnalyticsServiceTemplate },
      { path: 'services/ai/engine-optimisation', Component: AIEngineServiceTemplate },
      { path: 'services/ai/answer-engine-optimisation', Component: AnswerEngineServiceTemplate },

      /* ── AI Services Legacy Redirects (backward compatibility) ── */
      { path: 'services/ai-search-visibility', element: <Navigate to="/services/ai/search-visibility" replace /> },
      { path: 'services/seo', element: <Navigate to="/services/ai/seo" replace /> },
      { path: 'services/analytics', element: <Navigate to="/services/ai/analytics" replace /> },
      { path: 'services/ai-engine-optimisation', element: <Navigate to="/services/ai/engine-optimisation" replace /> },
      { path: 'services/answer-engine-optimisation', element: <Navigate to="/services/ai/answer-engine-optimisation" replace /> },

      /* ── Journey Stage Pages ── */
      { path: 'services/ignite', Component: JourneyIgniteRoute },
      { path: 'services/create', Component: JourneyCreateRoute },
      { path: 'services/build', Component: JourneyBuildRoute },
      { path: 'services/launch', Component: JourneyLaunchRoute },
      { path: 'services/grow', Component: JourneyGrowRoute },
      { path: 'services/evolve', Component: JourneyEvolveRoute },

      /* ── Systems Hub (Phase 1 - Tasks 1.1, 1.2) ── */
      { path: 'systems', Component: SystemsHubTemplate },
      { path: 'systems/design-tokens', Component: DesignTokensSystemTemplate },
      { path: 'systems/pattern-governance', Component: PatternGovernanceSystemTemplate },
      { path: 'systems/editorial-workflows', Component: EditorialWorkflowsSystemRoute },
      { path: 'systems/ai-search-readiness', Component: AISearchReadinessSystemRoute },
      { path: 'systems/performance-reliability', Component: PerformanceReliabilitySystemRoute },

      /* ── Solutions ── */
      { path: 'solutions', Component: SolutionsTemplate },
      { path: 'solutions/wordpress', Component: WordPressSolutionTemplate },
      { path: 'solutions/woocommerce', Component: WooCommerceSolutionTemplate },
      { path: 'solutions/tour-operators', Component: TourOperatorTemplate },
      { path: 'solutions/publishers', Component: PublishersTemplate },
      { path: 'solutions/lsx', Component: LSXDesignTemplate },
      { path: 'solutions/lsx-theme', Component: LSXSolutionTemplate },
      { path: 'solutions/mailchimp', Component: MailchimpSolutionTemplate },
      { path: 'solutions/wetu-importer', Component: WetuImporterTemplate },
      { path: 'solutions/lsx-sharing', Component: LSXSharingTemplate },
      { path: 'solutions/lsx-search', Component: LSXSearchTemplate },

      /* ── New Solution Pages ── */
      { path: 'solutions/wordpress-redesign', Component: WordPressRedesignTemplate },
      { path: 'solutions/woocommerce-redesign', Component: WooCommerceRedesignTemplate },
      { path: 'solutions/tour-operator-design', Component: TourOperatorDesignTemplate },

      /* ── AI Integrations (Solutions) ── */
      { path: 'solutions/ai-integrations', Component: AIIntegrationsTemplate },
      { path: 'solutions/ai-content-generation', Component: AIContentGenerationTemplate },
      { path: 'solutions/ai-seo', Component: AISEOTemplate },
      { path: 'solutions/ai-chatbots', Component: AIChatbotsTemplate },
      { path: 'solutions/ai-analytics', Component: AIAnalyticsTemplate },

      /* ── Work ── */
      { path: 'work', Component: PortfolioArchiveTemplate },
      { path: 'work/:slug', Component: PortfolioSingleRoute },
      { path: 'work/category/:slug', Component: PortfolioCategoryRoute },
      { path: 'work/tag/:slug', Component: PortfolioTagRoute },

      /* ── Insights ── */
      { path: 'insights', Component: BlogIndexTemplate },
      { path: 'insights/single-post', Component: SinglePostLongformTemplate },
      { path: 'insights/category', Component: CategoryArchiveTemplate },
      { path: 'insights/category/:slug', Component: CategoryArchiveRoute },
      { path: 'insights/author', Component: AuthorArchiveTemplate },
      { path: 'insights/author/:slug', Component: AuthorArchiveRoute },
      { path: 'insights/tag', Component: TagArchiveTemplate },
      { path: 'insights/tag/:slug', Component: TagArchiveRoute },
      { path: 'insights/date', Component: DateArchiveTemplate },
      { path: 'insights/date/:year', Component: DateArchiveRoute },
      { path: 'insights/date/:year/:month', Component: DateArchiveRoute },

      /* ── Insights Post Formats ── */
      { path: 'insights/format/audio', Component: AudioArchiveRoute },
      { path: 'insights/format/audio/single', Component: SingleAudioRoute },
      { path: 'insights/format/video', Component: VideoArchiveRoute },
      { path: 'insights/format/video/single', Component: SingleVideoRoute },
      { path: 'insights/format/gallery', Component: GalleryArchiveRoute },
      { path: 'insights/format/gallery/single', Component: SingleGalleryRoute },
      { path: 'insights/format/image', Component: ImageArchiveRoute },
      { path: 'insights/format/image/single', Component: SingleImageRoute },
      { path: 'insights/format/quote', Component: QuoteArchiveRoute },
      { path: 'insights/format/quote/single', Component: SingleQuoteRoute },
      { path: 'insights/format/link', Component: LinkArchiveRoute },
      { path: 'insights/format/link/single', Component: SingleLinkRoute },
      { path: 'insights/format/chat', Component: ChatArchiveRoute },
      { path: 'insights/format/chat/single', Component: SingleChatRoute },
      { path: 'insights/format/status', Component: StatusArchiveRoute },
      { path: 'insights/format/status/single', Component: SingleStatusRoute },
      { path: 'insights/format/standard', Component: StandardArchiveRoute },
      { path: 'insights/format/standard/single', Component: SingleStandardRoute },
      { path: 'insights/format/aside', Component: AsideArchiveRoute },
      { path: 'insights/format/aside/single', Component: SingleAsideRoute },
      { path: 'insights/format/aside-stream', Component: AsideStreamRoute },

      /* ── Insights single post (must be last in insights section) ── */
      { path: 'insights/:slug', Component: SinglePostRoute },

      /* ── WooCommerce ── */
      { path: 'shop', Component: ProductArchiveRoute },
      { path: 'shop/:slug', Component: SingleProductRoute },
      { path: 'cart', Component: CartRoute },
      { path: 'checkout', Component: CheckoutRoute },

      /* ── Tour Operator ── */
      { path: 'tours', Component: TourOperatorArchiveRoute },
      { path: 'tours/:slug', Component: SingleTourRoute },

      /* ── Videos ── */
      { path: 'videos', Component: VideoArchiveRoute },
      { path: 'video/:slug', Component: SingleVideoRoute },
      { path: 'videos/category/:slug', Component: VideoCategoryRoute },
      { path: 'videos/tag/:slug', Component: VideoTagArchiveRoute },

      /* ── Podcasts ── */
      { path: 'podcasts', Component: PodcastArchiveRoute },
      { path: 'podcast/:slug', Component: SinglePodcastRoute },
      { path: 'podcasts/category/:slug', Component: PodcastCategoryRoute },

      /* ── Utility Pages ── */
      { path: 'contact', Component: ContactPageTemplate },
      { path: 'faq', Component: FAQTemplate },
      { path: 'pricing', Component: PricingTemplate },
      { path: 'why-choose-us', Component: WhyChooseUsTemplate },
      { path: 'guarantees', Component: GuaranteesTemplate },
      { path: 'roi-calculator', Component: ROICalculatorTemplate },
      { path: 'testimonials', Component: TestimonialsTemplate },

      /* ── Testimonials (Archive + Singles) ── */
      { path: 'testimonials/archive', Component: TestimonialArchiveRoute },
      { path: 'testimonials/audio/:slug', Component: SingleTestimonialAudioRoute },
      { path: 'testimonials/video/:slug', Component: SingleTestimonialVideoRoute },
      { path: 'testimonials/gallery/:slug', Component: SingleTestimonialGalleryRoute },
      { path: 'testimonials/:slug', Component: SingleTestimonialRoute },

      { path: 'search', Component: SearchResultsPageTemplate },
      { path: 'privacy-policy', Component: PrivacyPolicyTemplate },
      { path: 'terms-of-service', Component: TermsOfServiceTemplate },
      { path: 'site-map', Component: SiteMapTemplate },
      { path: 'style-guide', Component: StyleGuideTemplate },
      { path: 'tutorials', Component: TutorialsTemplate },

      /* ── Legacy / Misc ── */
      { path: 'archive', Component: ArchiveRoute },
      { path: 'archive/filters', Component: ArchiveWithFiltersRoute },
      { path: 'index', Component: IndexRoute },
      { path: 'single', Component: SingleRoute },
      { path: 'search-legacy', Component: SearchResultsRoute },
      { path: 'wordpress-blocks-poc', Component: WordPressBlocksPoCRoute },
      { path: 'section-style-example', Component: SectionStyleExampleRoute },
      { path: 'feature-showcase', Component: FeatureShowcaseRoute },

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

      /* ── 404 Catch-All ── */
      { path: '404', Component: Template404 },
      { path: '*', Component: Template404 },
    ],
  },
];

export const router = createBrowserRouter(routes);