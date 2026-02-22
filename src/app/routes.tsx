/**
 * LSX Design — Route Configuration
 * 
 * React Router Data Mode configuration with hierarchical WordPress-style URLs.
 * Uses static imports to prevent "Failed to fetch dynamically imported module" errors in preview environment.
 * 
 * URL Structure:
 * - `/` — Homepage
 * - `/about/*` — About section
 * - `/services/*` — Services section
 * - `/solutions/*` — Solutions section
 * - `/portfolio/:slug?` — Portfolio archive + single projects
 * - `/blog/*` — Blog
 * - `/shop/*` — WooCommerce
 * - `/dev-tools/*` — Developer tools
 * 
 * @see /src/app/utils/route-map.ts — Slug-to-path mapping
 * @see /src/app/components/layouts/RootLayout.tsx — Shared layout
 */

import { createBrowserRouter, type RouteObject, useParams } from 'react-router';
import { RootLayout } from './components/layouts/RootLayout';

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
import { ContentStrategyTemplate } from './components/templates/ContentStrategyTemplate';
import { ContentCollectionTemplate } from './components/templates/ContentCollectionTemplate';
import { ContentAuditTemplate } from './components/templates/ContentAuditTemplate';
import { SecurityServiceTemplate } from './components/templates/SecurityServiceTemplate';
import { MigrationsServiceTemplate } from './components/templates/MigrationsServiceTemplate';
import { SupportServiceTemplate } from './components/templates/SupportServiceTemplate';
import { NewsletterServiceTemplate } from './components/templates/NewsletterServiceTemplate';
import { EmailMarketingTemplate } from './components/templates/EmailMarketingTemplate';
import { TrainingTemplate } from './components/templates/TrainingTemplate';
import { HostingTemplate } from './components/templates/HostingTemplate';
import { PerformanceServiceTemplate } from './components/templates/PerformanceServiceTemplate';
import { SEOServiceTemplate } from './components/templates/SEOServiceTemplate';
import { AccessibilityServiceTemplate } from './components/templates/AccessibilityServiceTemplate';
import { AIEngineOptimisationTemplate } from './components/templates/AIEngineOptimisationTemplate';
import { AnswerEngineOptimisationTemplate } from './components/templates/AnswerEngineOptimisationTemplate';

// Journey Stage Pages
import { JourneyStageTemplate } from './components/templates/JourneyStageTemplate';

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

// Videos
import { VideoArchiveTemplate } from './components/templates/VideoArchiveTemplate';
import { SingleVideoTemplate } from './components/templates/SingleVideoTemplate';
import { VideoCategoryArchiveTemplate } from './components/templates/VideoCategoryArchiveTemplate';
import { VideoTagArchiveTemplate } from './components/templates/VideoTagArchiveTemplate';

// Podcasts
import { PodcastArchiveTemplate } from './components/templates/PodcastArchiveTemplate';
import { SinglePodcastTemplate } from './components/templates/SinglePodcastTemplate';
import { PodcastCategoryArchiveTemplate } from './components/templates/PodcastCategoryArchiveTemplate';

// Post Formats
import { AudioArchiveTemplate } from './components/templates/post-formats/AudioArchiveTemplate';
import { SingleAudioTemplate } from './components/templates/post-formats/SingleAudioTemplate';
import { GalleryArchiveTemplate } from './components/templates/post-formats/GalleryArchiveTemplate';
import { SingleGalleryTemplate } from './components/templates/post-formats/SingleGalleryTemplate';
import { ImageArchiveTemplate } from './components/templates/post-formats/ImageArchiveTemplate';
import { SingleImageTemplate } from './components/templates/post-formats/SingleImageTemplate';
import { QuoteArchiveTemplate } from './components/templates/post-formats/QuoteArchiveTemplate';
import { SingleQuoteTemplate } from './components/templates/post-formats/SingleQuoteTemplate';
import { LinkArchiveTemplate } from './components/templates/post-formats/LinkArchiveTemplate';
import { SingleLinkTemplate } from './components/templates/post-formats/SingleLinkTemplate';
import { ChatArchiveTemplate } from './components/templates/post-formats/ChatArchiveTemplate';
import { SingleChatTemplate } from './components/templates/post-formats/SingleChatTemplate';
import { StatusArchiveTemplate } from './components/templates/post-formats/StatusArchiveTemplate';
import { SingleStatusTemplate } from './components/templates/post-formats/SingleStatusTemplate';
import { StandardArchiveTemplate } from './components/templates/post-formats/StandardArchiveTemplate';
import { SingleStandardTemplate } from './components/templates/post-formats/SingleStandardTemplate';
import { AsideArchiveTemplate } from './components/templates/post-formats/AsideArchiveTemplate';
import { SingleAsideTemplate } from './components/templates/post-formats/SingleAsideTemplate';
import { AsideStreamTemplate } from './components/templates/post-formats/AsideStreamTemplate';

// WooCommerce
import { ProductArchiveTemplate } from './components/templates/ProductArchiveTemplate';
import { SingleProductTemplate } from './components/templates/woocommerce/SingleProductTemplate';
import { CartTemplate } from './components/templates/CartTemplate';
import { CheckoutTemplate } from './components/templates/CheckoutTemplate';

// Tour Operator
import { TourOperatorArchiveTemplate } from './components/templates/tour-operator/TourOperatorArchiveTemplate';
import { SingleTourTemplate } from './components/templates/tour-operator/SingleTourTemplate';

// Utility Pages
import { ContactPageTemplate } from './components/templates/ContactPageTemplate';
import { FAQTemplate } from './components/templates/FAQTemplate';
import { PricingTemplate } from './components/templates/PricingTemplate';
import { WhyChooseUsTemplate } from './components/templates/WhyChooseUsTemplate';
import { GuaranteesTemplate } from './components/templates/GuaranteesTemplate';
import { ROICalculatorTemplate } from './components/templates/ROICalculatorTemplate';
import { TestimonialsTemplate } from './components/templates/TestimonialsTemplate';

// Testimonial Templates (Archive + Singles)
import { TestimonialArchiveTemplate } from './components/templates/testimonials/TestimonialArchiveTemplate';
import { SingleTestimonialTemplate } from './components/templates/testimonials/SingleTestimonialTemplate';
import { SingleTestimonialAudioTemplate } from './components/templates/testimonials/SingleTestimonialAudioTemplate';
import { SingleTestimonialVideoTemplate } from './components/templates/testimonials/SingleTestimonialVideoTemplate';
import { SingleTestimonialGalleryTemplate } from './components/templates/testimonials/SingleTestimonialGalleryTemplate';

import { SearchResultsPageTemplate } from './components/templates/SearchResultsPageTemplate';
import { PrivacyPolicyTemplate } from './components/templates/PrivacyPolicyTemplate';
import { TermsOfServiceTemplate } from './components/templates/TermsOfServiceTemplate';
import { SiteMapTemplate } from './components/templates/SiteMapTemplate';
import { StyleGuideTemplate } from './components/templates/StyleGuideTemplate';
import { TutorialsTemplate } from './components/templates/TutorialsTemplate';

// Legacy / Misc
import { ArchiveTemplate } from './components/templates/ArchiveTemplate';
import { ArchiveWithFiltersTemplate } from './components/templates/ArchiveWithFiltersTemplate';
import { IndexTemplate } from './components/templates/IndexTemplate';
import { SingleTemplate } from './components/templates/SingleTemplate';
import { SearchResultsTemplate } from './components/templates/SearchResultsTemplate';
import { WordPressBlocksProofOfConcept } from './components/templates/WordPressBlocksProofOfConcept';
import { SectionStyleExample } from './components/templates/SectionStyleExample';
import { FeatureShowcaseTemplate } from './components/templates/FeatureShowcaseTemplate';

// Dev Tools
import { DevToolsTemplate } from './components/templates/DevToolsTemplate';
import { TemplateTester } from './components/templates/TemplateTester';
import { ComponentShowcase } from './components/templates/ComponentShowcase';
import { DesignSystemTest } from './components/blocks/dev-tools/DesignSystemTest';
import { ComplianceScorecard } from './components/blocks/dev-tools/ComplianceScorecard';
import { BlockDocumentation } from './components/templates/BlockDocumentation';
import { ComponentAPI } from './components/templates/ComponentAPI';
import { DesignBlocksShowcase } from './components/templates/DesignBlocksShowcase';
import { ButtonShowcase } from './components/templates/ButtonShowcase';
import { HeaderFooterComparison } from './components/templates/HeaderFooterComparison';
import { IconLibrary } from './components/templates/IconLibrary';
import { LivePreview } from './components/templates/LivePreview';
import { SectionPresetsShowcase } from './components/templates/SectionPresetsShowcase';
import { ThemeBlocksShowcase } from './components/templates/ThemeBlocksShowcase';
import { DesignTokensReferenceTemplate } from './components/templates/DesignTokensReferenceTemplate';
import { DeploymentReadinessTemplate } from './components/templates/DeploymentReadinessTemplate';
import { DesignPlaygroundTemplate } from './components/templates/DesignPlaygroundTemplate';
import { CodeQualityDashboardTemplate } from './components/templates/CodeQualityDashboardTemplate';
import { DocsGeneratorTemplate } from './components/templates/DocsGeneratorTemplate';
import { SnippetGeneratorTemplate } from './components/templates/SnippetGeneratorTemplate';

/* ═══════════════════════════════════════════
 * Route Wrapper Components (for params)
 * ═══════════════════════════════════════════ */

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
  return <SingleProductTemplate slug={slug} />;
}

function SingleTourRoute() {
  const { slug } = useParams();
  return <SingleTourTemplate />;
}

function PortfolioCategoryRoute() {
  return <PortfolioCategoryArchiveTemplate />;
}

function PortfolioTagRoute() {
  return <PortfolioTagArchiveTemplate />;
}

function SingleVideoRoute() {
  const { slug } = useParams();
  return <SingleVideoTemplate slug={slug} />;
}

function VideoCategoryRoute() {
  const { slug } = useParams();
  return <VideoCategoryArchiveTemplate category={slug} />;
}

function SinglePodcastRoute() {
  const { slug } = useParams();
  return <SinglePodcastTemplate slug={slug} />;
}

function PodcastCategoryRoute() {
  return <PodcastCategoryArchiveTemplate />;
}

function SingleTestimonialRoute() {
  const { slug } = useParams();
  return <SingleTestimonialTemplate slug={slug} />;
}

function SingleTestimonialAudioRoute() {
  const { slug } = useParams();
  return <SingleTestimonialAudioTemplate slug={slug} />;
}

function SingleTestimonialVideoRoute() {
  const { slug } = useParams();
  return <SingleTestimonialVideoTemplate slug={slug} />;
}

function SingleTestimonialGalleryRoute() {
  const { slug } = useParams();
  return <SingleTestimonialGalleryTemplate slug={slug} />;
}

/* Journey Stage route wrappers */
function JourneyIgniteRoute() { return <JourneyStageTemplate slug="ignite" />; }
function JourneyCreateRoute() { return <JourneyStageTemplate slug="create" />; }
function JourneyBuildRoute() { return <JourneyStageTemplate slug="build" />; }
function JourneyLaunchRoute() { return <JourneyStageTemplate slug="launch" />; }
function JourneyGrowRoute() { return <JourneyStageTemplate slug="grow" />; }
function JourneyEvolveRoute() { return <JourneyStageTemplate slug="evolve" />; }

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
      { path: 'services/content', Component: ContentServiceTemplate },
      { path: 'services/content/strategy', Component: ContentStrategyTemplate },
      { path: 'services/content/collection', Component: ContentCollectionTemplate },
      { path: 'services/content/audit', Component: ContentAuditTemplate },
      { path: 'services/security', Component: SecurityServiceTemplate },
      { path: 'services/migrations', Component: MigrationsServiceTemplate },
      { path: 'services/support', Component: SupportServiceTemplate },
      { path: 'services/newsletter', Component: NewsletterServiceTemplate },
      { path: 'services/email-marketing', Component: EmailMarketingTemplate },
      { path: 'services/training', Component: TrainingTemplate },
      { path: 'services/hosting', Component: HostingTemplate },
      { path: 'services/performance', Component: PerformanceServiceTemplate },
      { path: 'services/seo', Component: SEOServiceTemplate },
      { path: 'services/accessibility', Component: AccessibilityServiceTemplate },
      { path: 'services/ai-engine-optimisation', Component: AIEngineOptimisationTemplate },
      { path: 'services/answer-engine-optimisation', Component: AnswerEngineOptimisationTemplate },

      /* ── Journey Stage Pages ── */
      { path: 'services/ignite', Component: JourneyIgniteRoute },
      { path: 'services/create', Component: JourneyCreateRoute },
      { path: 'services/build', Component: JourneyBuildRoute },
      { path: 'services/launch', Component: JourneyLaunchRoute },
      { path: 'services/grow', Component: JourneyGrowRoute },
      { path: 'services/evolve', Component: JourneyEvolveRoute },

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

      /* ── Portfolio ── */
      { path: 'portfolio', Component: PortfolioArchiveTemplate },
      { path: 'portfolio/:slug', Component: PortfolioSingleRoute },
      { path: 'portfolio/category/:slug', Component: PortfolioCategoryRoute },
      { path: 'portfolio/tag/:slug', Component: PortfolioTagRoute },

      /* ── Blog ── */
      { path: 'blog', Component: BlogIndexTemplate },
      { path: 'blog/single-post', Component: SinglePostLongformTemplate },
      { path: 'blog/category', Component: CategoryArchiveTemplate },
      { path: 'blog/category/:slug', Component: CategoryArchiveRoute },
      { path: 'blog/author', Component: AuthorArchiveTemplate },
      { path: 'blog/author/:slug', Component: AuthorArchiveRoute },
      { path: 'blog/tag', Component: TagArchiveTemplate },
      { path: 'blog/tag/:slug', Component: TagArchiveRoute },
      { path: 'blog/date', Component: DateArchiveTemplate },
      { path: 'blog/date/:year', Component: DateArchiveRoute },
      { path: 'blog/date/:year/:month', Component: DateArchiveRoute },

      /* ── Blog Post Formats ── */
      { path: 'blog/format/audio', Component: AudioArchiveTemplate },
      { path: 'blog/format/audio/single', Component: SingleAudioTemplate },
      { path: 'blog/format/video', Component: VideoArchiveTemplate },
      { path: 'blog/format/video/single', Component: SingleVideoRoute },
      { path: 'blog/format/gallery', Component: GalleryArchiveTemplate },
      { path: 'blog/format/gallery/single', Component: SingleGalleryTemplate },
      { path: 'blog/format/image', Component: ImageArchiveTemplate },
      { path: 'blog/format/image/single', Component: SingleImageTemplate },
      { path: 'blog/format/quote', Component: QuoteArchiveTemplate },
      { path: 'blog/format/quote/single', Component: SingleQuoteTemplate },
      { path: 'blog/format/link', Component: LinkArchiveTemplate },
      { path: 'blog/format/link/single', Component: SingleLinkTemplate },
      { path: 'blog/format/chat', Component: ChatArchiveTemplate },
      { path: 'blog/format/chat/single', Component: SingleChatTemplate },
      { path: 'blog/format/status', Component: StatusArchiveTemplate },
      { path: 'blog/format/status/single', Component: SingleStatusTemplate },
      { path: 'blog/format/standard', Component: StandardArchiveTemplate },
      { path: 'blog/format/standard/single', Component: SingleStandardTemplate },
      { path: 'blog/format/aside', Component: AsideArchiveTemplate },
      { path: 'blog/format/aside/single', Component: SingleAsideTemplate },
      { path: 'blog/format/aside-stream', Component: AsideStreamTemplate },

      /* ── Blog single post (must be last in blog section) ── */
      { path: 'blog/:slug', Component: SinglePostRoute },

      /* ── WooCommerce ── */
      { path: 'shop', Component: ProductArchiveTemplate },
      { path: 'shop/:slug', Component: SingleProductRoute },
      { path: 'cart', Component: CartTemplate },
      { path: 'checkout', Component: CheckoutTemplate },

      /* ── Tour Operator ── */
      { path: 'tours', Component: TourOperatorArchiveTemplate },
      { path: 'tours/:slug', Component: SingleTourRoute },

      /* ── Videos ── */
      { path: 'videos', Component: VideoArchiveTemplate },
      { path: 'video/:slug', Component: SingleVideoRoute },
      { path: 'videos/category/:slug', Component: VideoCategoryRoute },
      { path: 'videos/tag/:slug', Component: VideoTagArchiveTemplate },

      /* ── Podcasts ── */
      { path: 'podcasts', Component: PodcastArchiveTemplate },
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
      { path: 'testimonials/archive', Component: TestimonialArchiveTemplate },
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
      { path: 'archive', Component: ArchiveTemplate },
      { path: 'archive/filters', Component: ArchiveWithFiltersTemplate },
      { path: 'index', Component: IndexTemplate },
      { path: 'single', Component: SingleTemplate },
      { path: 'search-legacy', Component: SearchResultsTemplate },
      { path: 'wordpress-blocks-poc', Component: WordPressBlocksProofOfConcept },
      { path: 'section-style-example', Component: SectionStyleExample },
      { path: 'feature-showcase', Component: FeatureShowcaseTemplate },

      /* ── Dev Tools ── */
      { path: 'dev-tools', Component: DevToolsTemplate },
      { path: 'dev-tools/template-tester', Component: TemplateTester },
      { path: 'dev-tools/component-showcase', Component: ComponentShowcase },
      { path: 'dev-tools/design-system-test', Component: DesignSystemTest },
      { path: 'dev-tools/compliance-scorecard', Component: ComplianceScorecard },
      { path: 'dev-tools/feature-showcase', Component: FeatureShowcaseTemplate },
      { path: 'dev-tools/block-documentation', Component: BlockDocumentation },
      { path: 'dev-tools/component-api', Component: ComponentAPI },
      { path: 'dev-tools/design-blocks-showcase', Component: DesignBlocksShowcase },
      { path: 'dev-tools/button-showcase', Component: ButtonShowcase },
      { path: 'dev-tools/header-footer-comparison', Component: HeaderFooterComparison },
      { path: 'dev-tools/icon-library', Component: IconLibrary },
      { path: 'dev-tools/live-preview', Component: LivePreview },
      { path: 'dev-tools/section-presets-showcase', Component: SectionPresetsShowcase },
      { path: 'dev-tools/theme-blocks-showcase', Component: ThemeBlocksShowcase },
      { path: 'dev-tools/design-tokens-reference', Component: DesignTokensReferenceTemplate },
      { path: 'dev-tools/deployment-readiness', Component: DeploymentReadinessTemplate },
      { path: 'dev-tools/design-playground', Component: DesignPlaygroundTemplate },
      { path: 'dev-tools/code-quality-dashboard', Component: CodeQualityDashboardTemplate },
      { path: 'dev-tools/docs-generator', Component: DocsGeneratorTemplate },
      { path: 'dev-tools/snippet-generator', Component: SnippetGeneratorTemplate },
      { path: 'dev-tools/style-guide', Component: StyleGuideTemplate }, // Duplicate path allowed for dev tools

      /* ── 404 Catch-All ── */
      { path: '404', Component: Template404 },
      { path: '*', Component: Template404 },
    ],
  },
];

export const router = createBrowserRouter(routes);
