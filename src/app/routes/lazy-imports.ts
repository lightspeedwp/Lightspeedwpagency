/**
 * LSX Design — Lazy-loaded Template Imports
 *
 * All lazy-loaded template imports for code splitting.
 * These are non-core pages that load on demand.
 *
 * @see /src/app/routes.tsx — Route definitions
 */

import { lazy } from 'react';

/* ── Journey Stage ── */
export const JourneyStageTemplate = lazy(() =>
  import('../components/templates/JourneyStageTemplate').then(m => ({ default: m.JourneyStageTemplate }))
);

/* ── Systems (lazy children) ── */
export const EditorialWorkflowsSystemTemplate = lazy(() => import('../components/templates/EditorialWorkflowsSystemTemplate'));
export const AISearchReadinessSystemTemplate = lazy(() => import('../components/templates/AISearchReadinessSystemTemplate'));
export const PerformanceReliabilitySystemTemplate = lazy(() => import('../components/templates/PerformanceReliabilitySystemTemplate'));

/* ── Videos ── */
export const VideoArchiveTemplate = lazy(() =>
  import('../components/templates/VideoArchiveTemplate').then(m => ({ default: m.VideoArchiveTemplate }))
);
export const SingleVideoTemplate = lazy(() =>
  import('../components/templates/SingleVideoTemplate').then(m => ({ default: m.SingleVideoTemplate }))
);
export const VideoCategoryArchiveTemplate = lazy(() =>
  import('../components/templates/VideoCategoryArchiveTemplate').then(m => ({ default: m.VideoCategoryArchiveTemplate }))
);
export const VideoTagArchiveTemplate = lazy(() =>
  import('../components/templates/VideoTagArchiveTemplate').then(m => ({ default: m.VideoTagArchiveTemplate }))
);

/* ── Podcasts ── */
export const PodcastArchiveTemplate = lazy(() =>
  import('../components/templates/PodcastArchiveTemplate').then(m => ({ default: m.PodcastArchiveTemplate }))
);
export const SinglePodcastTemplate = lazy(() =>
  import('../components/templates/SinglePodcastTemplate').then(m => ({ default: m.SinglePodcastTemplate }))
);
export const PodcastCategoryArchiveTemplate = lazy(() =>
  import('../components/templates/PodcastCategoryArchiveTemplate').then(m => ({ default: m.PodcastCategoryArchiveTemplate }))
);

/* ── Post Formats ── */
export const AudioArchiveTemplate = lazy(() => import('../components/templates/post-formats/AudioArchiveTemplate').then(m => ({ default: m.AudioArchiveTemplate })));
export const SingleAudioTemplate = lazy(() => import('../components/templates/post-formats/SingleAudioTemplate').then(m => ({ default: m.SingleAudioTemplate })));
export const GalleryArchiveTemplate = lazy(() => import('../components/templates/post-formats/GalleryArchiveTemplate').then(m => ({ default: m.GalleryArchiveTemplate })));
export const SingleGalleryTemplate = lazy(() => import('../components/templates/post-formats/SingleGalleryTemplate').then(m => ({ default: m.SingleGalleryTemplate })));
export const ImageArchiveTemplate = lazy(() => import('../components/templates/post-formats/ImageArchiveTemplate').then(m => ({ default: m.ImageArchiveTemplate })));
export const SingleImageTemplate = lazy(() => import('../components/templates/post-formats/SingleImageTemplate').then(m => ({ default: m.SingleImageTemplate })));
export const QuoteArchiveTemplate = lazy(() => import('../components/templates/post-formats/QuoteArchiveTemplate').then(m => ({ default: m.QuoteArchiveTemplate })));
export const SingleQuoteTemplate = lazy(() => import('../components/templates/post-formats/SingleQuoteTemplate').then(m => ({ default: m.SingleQuoteTemplate })));
export const LinkArchiveTemplate = lazy(() => import('../components/templates/post-formats/LinkArchiveTemplate').then(m => ({ default: m.LinkArchiveTemplate })));
export const SingleLinkTemplate = lazy(() => import('../components/templates/post-formats/SingleLinkTemplate').then(m => ({ default: m.SingleLinkTemplate })));
export const ChatArchiveTemplate = lazy(() => import('../components/templates/post-formats/ChatArchiveTemplate').then(m => ({ default: m.ChatArchiveTemplate })));
export const SingleChatTemplate = lazy(() => import('../components/templates/post-formats/SingleChatTemplate').then(m => ({ default: m.SingleChatTemplate })));
export const StatusArchiveTemplate = lazy(() => import('../components/templates/post-formats/StatusArchiveTemplate').then(m => ({ default: m.StatusArchiveTemplate })));
export const SingleStatusTemplate = lazy(() => import('../components/templates/post-formats/SingleStatusTemplate').then(m => ({ default: m.SingleStatusTemplate })));
export const StandardArchiveTemplate = lazy(() => import('../components/templates/post-formats/StandardArchiveTemplate').then(m => ({ default: m.StandardArchiveTemplate })));
export const SingleStandardTemplate = lazy(() => import('../components/templates/post-formats/SingleStandardTemplate').then(m => ({ default: m.SingleStandardTemplate })));
export const AsideArchiveTemplate = lazy(() => import('../components/templates/post-formats/AsideArchiveTemplate').then(m => ({ default: m.AsideArchiveTemplate })));
export const SingleAsideTemplate = lazy(() => import('../components/templates/post-formats/SingleAsideTemplate').then(m => ({ default: m.SingleAsideTemplate })));
export const AsideStreamTemplate = lazy(() => import('../components/templates/post-formats/AsideStreamTemplate').then(m => ({ default: m.AsideStreamTemplate })));

/* ── WooCommerce ── */
export const ProductArchiveTemplate = lazy(() =>
  import('../components/templates/ProductArchiveTemplate').then(m => ({ default: m.ProductArchiveTemplate }))
);
export const SingleProductTemplate = lazy(() =>
  import('../components/templates/woocommerce/SingleProductTemplate').then(m => ({ default: m.SingleProductTemplate }))
);
export const CartTemplate = lazy(() =>
  import('../components/templates/CartTemplate').then(m => ({ default: m.CartTemplate }))
);
export const CheckoutTemplate = lazy(() =>
  import('../components/templates/CheckoutTemplate').then(m => ({ default: m.CheckoutTemplate }))
);

/* ── Tour Operator ── */
export const TourOperatorArchiveTemplate = lazy(() =>
  import('../components/templates/tour-operator/TourOperatorArchiveTemplate').then(m => ({ default: m.TourOperatorArchiveTemplate }))
);
export const SingleTourTemplate = lazy(() =>
  import('../components/templates/tour-operator/SingleTourTemplate').then(m => ({ default: m.SingleTourTemplate }))
);

/* ── Testimonials (Archive + Singles) ── */
export const TestimonialArchiveTemplate = lazy(() =>
  import('../components/templates/testimonials/TestimonialArchiveTemplate').then(m => ({ default: m.TestimonialArchiveTemplate }))
);
export const SingleTestimonialTemplate = lazy(() =>
  import('../components/templates/testimonials/SingleTestimonialTemplate').then(m => ({ default: m.SingleTestimonialTemplate }))
);
export const SingleTestimonialAudioTemplate = lazy(() =>
  import('../components/templates/testimonials/SingleTestimonialAudioTemplate').then(m => ({ default: m.SingleTestimonialAudioTemplate }))
);
export const SingleTestimonialVideoTemplate = lazy(() =>
  import('../components/templates/testimonials/SingleTestimonialVideoTemplate').then(m => ({ default: m.SingleTestimonialVideoTemplate }))
);
export const SingleTestimonialGalleryTemplate = lazy(() =>
  import('../components/templates/testimonials/SingleTestimonialGalleryTemplate').then(m => ({ default: m.SingleTestimonialGalleryTemplate }))
);

/* ── Legacy / Misc ── */
export const ArchiveTemplate = lazy(() => import('../components/templates/ArchiveTemplate').then(m => ({ default: m.ArchiveTemplate })));
export const ArchiveWithFiltersTemplate = lazy(() => import('../components/templates/ArchiveWithFiltersTemplate').then(m => ({ default: m.ArchiveWithFiltersTemplate })));
export const IndexTemplate = lazy(() => import('../components/templates/IndexTemplate').then(m => ({ default: m.IndexTemplate })));
export const SingleTemplate = lazy(() => import('../components/templates/SingleTemplate').then(m => ({ default: m.SingleTemplate })));
export const SearchResultsTemplate = lazy(() => import('../components/templates/SearchResultsTemplate').then(m => ({ default: m.SearchResultsTemplate })));
export const WordPressBlocksProofOfConcept = lazy(() => import('../components/templates/WordPressBlocksProofOfConcept').then(m => ({ default: m.WordPressBlocksProofOfConcept })));
export const SectionStyleExample = lazy(() => import('../components/templates/SectionStyleExample').then(m => ({ default: m.SectionStyleExample })));
export const FeatureShowcaseTemplate = lazy(() => import('../components/templates/FeatureShowcaseTemplate').then(m => ({ default: m.FeatureShowcaseTemplate })));

/* ── Dev Tools ── */
export const DevToolsTemplate = lazy(() => import('../components/templates/DevToolsTemplate').then(m => ({ default: m.DevToolsTemplate })));
export const TemplateTester = lazy(() => import('../components/templates/TemplateTester').then(m => ({ default: m.TemplateTester })));
export const ComponentShowcase = lazy(() => import('../components/templates/ComponentShowcase').then(m => ({ default: m.ComponentShowcase })));
export const DesignSystemTest = lazy(() => import('../components/blocks/dev-tools/DesignSystemTest').then(m => ({ default: m.DesignSystemTest })));
export const ComplianceScorecard = lazy(() => import('../components/blocks/dev-tools/ComplianceScorecard').then(m => ({ default: m.ComplianceScorecard })));
export const BlockDocumentation = lazy(() => import('../components/templates/BlockDocumentation').then(m => ({ default: m.BlockDocumentation })));
export const ComponentAPI = lazy(() => import('../components/templates/ComponentAPI').then(m => ({ default: m.ComponentAPI })));
export const DesignBlocksShowcase = lazy(() => import('../components/templates/DesignBlocksShowcase').then(m => ({ default: m.DesignBlocksShowcase })));
export const ButtonShowcase = lazy(() => import('../components/templates/ButtonShowcase').then(m => ({ default: m.ButtonShowcase })));
export const HeaderFooterComparison = lazy(() => import('../components/templates/HeaderFooterComparison').then(m => ({ default: m.HeaderFooterComparison })));
export const IconLibrary = lazy(() => import('../components/templates/IconLibrary').then(m => ({ default: m.IconLibrary })));
export const PhosphorIconReference = lazy(() => import('../components/templates/PhosphorIconReference').then(m => ({ default: m.PhosphorIconReference })));
export const LivePreview = lazy(() => import('../components/templates/LivePreview').then(m => ({ default: m.LivePreview })));
export const SectionPresetsShowcase = lazy(() => import('../components/templates/SectionPresetsShowcase').then(m => ({ default: m.SectionPresetsShowcase })));
export const ThemeBlocksShowcase = lazy(() => import('../components/templates/ThemeBlocksShowcase').then(m => ({ default: m.ThemeBlocksShowcase })));
export const DesignTokensReferenceTemplate = lazy(() => import('../components/templates/DesignTokensReferenceTemplate').then(m => ({ default: m.DesignTokensReferenceTemplate })));
export const DeploymentReadinessTemplate = lazy(() => import('../components/templates/DeploymentReadinessTemplate').then(m => ({ default: m.DeploymentReadinessTemplate })));
export const DesignPlaygroundTemplate = lazy(() => import('../components/templates/DesignPlaygroundTemplate').then(m => ({ default: m.DesignPlaygroundTemplate })));
export const CodeQualityDashboardTemplate = lazy(() => import('../components/templates/CodeQualityDashboardTemplate').then(m => ({ default: m.CodeQualityDashboardTemplate })));
export const DocsGeneratorTemplate = lazy(() => import('../components/templates/DocsGeneratorTemplate').then(m => ({ default: m.DocsGeneratorTemplate })));
