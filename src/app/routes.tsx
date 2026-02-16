/**
 * LSX Design — Route Configuration
 * 
 * React Router Data Mode configuration with hierarchical WordPress-style URLs.
 * All templates are lazy-loaded for optimal code splitting.
 * 
 * URL Structure:
 * - `/` — Homepage
 * - `/about/*` — About section (process, culture, history, team, careers)
 * - `/services/*` — Services section (discovery, design, development, etc.)
 * - `/solutions/*` — Solutions section (wordpress, woocommerce, etc.)
 * - `/portfolio/:slug?` — Portfolio archive + single projects
 * - `/blog/*` — Blog (posts, categories, tags, authors, dates, formats)
 * - `/shop/*` — WooCommerce (products, cart, checkout)
 * - `/tours/*` — Tour Operator (archive + single tours)
 * - `/dev-tools/*` — Developer tools
 * 
 * @see /src/app/utils/route-map.ts — Slug-to-path mapping
 * @see /src/app/components/layouts/RootLayout.tsx — Shared layout
 */

import { createBrowserRouter, type RouteObject } from 'react-router';
import { lazy } from 'react';
import { RootLayout } from './components/layouts/RootLayout';

/* ═══════════════════════════════════════════
 * Lazy-loaded Template Components
 * ═══════════════════════════════════════════ */

// Core Pages
const FrontPageTemplate = lazy(() => import('./components/templates/FrontPageTemplate').then(m => ({ default: m.FrontPageTemplate })));
const Template404 = lazy(() => import('./components/templates/404Template').then(m => ({ default: m.Template404 })));

// About
const AboutTemplate = lazy(() => import('./components/templates/AboutTemplate').then(m => ({ default: m.AboutTemplate })));
const AboutProcessTemplate = lazy(() => import('./components/templates/AboutProcessTemplate').then(m => ({ default: m.AboutProcessTemplate })));
const AboutCultureTemplate = lazy(() => import('./components/templates/AboutCultureTemplate').then(m => ({ default: m.AboutCultureTemplate })));
const AboutHistoryTemplate = lazy(() => import('./components/templates/AboutHistoryTemplate').then(m => ({ default: m.AboutHistoryTemplate })));
const TeamTemplate = lazy(() => import('./components/templates/TeamTemplate').then(m => ({ default: m.TeamTemplate })));
const CareersTemplate = lazy(() => import('./components/templates/CareersTemplate').then(m => ({ default: m.CareersTemplate })));

// Services
const ServicesLandingTemplate = lazy(() => import('./components/templates/ServicesLandingTemplate').then(m => ({ default: m.ServicesLandingTemplate })));
const DiscoveryServiceTemplate = lazy(() => import('./components/templates/DiscoveryServiceTemplate').then(m => ({ default: m.DiscoveryServiceTemplate })));
const DesignServiceTemplate = lazy(() => import('./components/templates/DesignServiceTemplate').then(m => ({ default: m.DesignServiceTemplate })));
const DevelopmentServiceTemplate = lazy(() => import('./components/templates/DevelopmentServiceTemplate').then(m => ({ default: m.DevelopmentServiceTemplate })));
const ContentServiceTemplate = lazy(() => import('./components/templates/ContentServiceTemplate').then(m => ({ default: m.ContentServiceTemplate })));
const ContentStrategyTemplate = lazy(() => import('./components/templates/ContentStrategyTemplate').then(m => ({ default: m.ContentStrategyTemplate })));
const ContentCollectionTemplate = lazy(() => import('./components/templates/ContentCollectionTemplate').then(m => ({ default: m.ContentCollectionTemplate })));
const ContentAuditTemplate = lazy(() => import('./components/templates/ContentAuditTemplate').then(m => ({ default: m.ContentAuditTemplate })));
const SecurityServiceTemplate = lazy(() => import('./components/templates/SecurityServiceTemplate').then(m => ({ default: m.SecurityServiceTemplate })));
const MigrationsServiceTemplate = lazy(() => import('./components/templates/MigrationsServiceTemplate').then(m => ({ default: m.MigrationsServiceTemplate })));
const SupportServiceTemplate = lazy(() => import('./components/templates/SupportServiceTemplate').then(m => ({ default: m.SupportServiceTemplate })));
const NewsletterServiceTemplate = lazy(() => import('./components/templates/NewsletterServiceTemplate').then(m => ({ default: m.NewsletterServiceTemplate })));
const EmailMarketingTemplate = lazy(() => import('./components/templates/EmailMarketingTemplate').then(m => ({ default: m.EmailMarketingTemplate })));
const TrainingTemplate = lazy(() => import('./components/templates/TrainingTemplate').then(m => ({ default: m.TrainingTemplate })));
const HostingTemplate = lazy(() => import('./components/templates/HostingTemplate').then(m => ({ default: m.HostingTemplate })));

// Solutions
const SolutionsTemplate = lazy(() => import('./components/templates/SolutionsTemplate').then(m => ({ default: m.SolutionsTemplate })));
const WordPressSolutionTemplate = lazy(() => import('./components/templates/WordPressSolutionTemplate').then(m => ({ default: m.WordPressSolutionTemplate })));
const WooCommerceSolutionTemplate = lazy(() => import('./components/templates/WooCommerceSolutionTemplate').then(m => ({ default: m.WooCommerceSolutionTemplate })));
const TourOperatorTemplate = lazy(() => import('./components/templates/TourOperatorTemplate').then(m => ({ default: m.TourOperatorTemplate })));
const PublishersTemplate = lazy(() => import('./components/templates/PublishersTemplate').then(m => ({ default: m.PublishersTemplate })));
const LSXDesignTemplate = lazy(() => import('./components/templates/LSXDesignTemplate').then(m => ({ default: m.LSXDesignTemplate })));
const LSXSolutionTemplate = lazy(() => import('./components/templates/LSXSolutionTemplate').then(m => ({ default: m.LSXSolutionTemplate })));
const MailchimpSolutionTemplate = lazy(() => import('./components/templates/MailchimpSolutionTemplate').then(m => ({ default: m.MailchimpSolutionTemplate })));
const WetuImporterTemplate = lazy(() => import('./components/templates/WetuImporterTemplate').then(m => ({ default: m.WetuImporterTemplate })));
const LSXSharingTemplate = lazy(() => import('./components/templates/LSXSharingTemplate').then(m => ({ default: m.LSXSharingTemplate })));
const LSXSearchTemplate = lazy(() => import('./components/templates/LSXSearchTemplate').then(m => ({ default: m.LSXSearchTemplate })));

// Portfolio
const PortfolioArchiveTemplate = lazy(() => import('./components/templates/PortfolioArchiveTemplate').then(m => ({ default: m.PortfolioArchiveTemplate })));
const PortfolioSingleTemplate = lazy(() => import('./components/templates/PortfolioSingleTemplate').then(m => ({ default: m.PortfolioSingleTemplate })));
const PortfolioCategoryArchiveTemplate = lazy(() => import('./components/templates/PortfolioCategoryArchiveTemplate').then(m => ({ default: m.PortfolioCategoryArchiveTemplate })));
const PortfolioTagArchiveTemplate = lazy(() => import('./components/templates/PortfolioTagArchiveTemplate').then(m => ({ default: m.PortfolioTagArchiveTemplate })));

// Blog
const BlogIndexTemplate = lazy(() => import('./components/templates/BlogIndexTemplate').then(m => ({ default: m.BlogIndexTemplate })));
const SinglePostTemplate = lazy(() => import('./components/templates/SinglePostTemplate').then(m => ({ default: m.SinglePostTemplate })));
const SinglePostLongformTemplate = lazy(() => import('./components/templates/SinglePostLongformTemplate').then(m => ({ default: m.SinglePostLongformTemplate })));
const CategoryArchiveTemplate = lazy(() => import('./components/templates/CategoryArchiveTemplate').then(m => ({ default: m.CategoryArchiveTemplate })));
const AuthorArchiveTemplate = lazy(() => import('./components/templates/AuthorArchiveTemplate').then(m => ({ default: m.AuthorArchiveTemplate })));
const TagArchiveTemplate = lazy(() => import('./components/templates/TagArchiveTemplate').then(m => ({ default: m.TagArchiveTemplate })));
const DateArchiveTemplate = lazy(() => import('./components/templates/DateArchiveTemplate').then(m => ({ default: m.DateArchiveTemplate })));

// Videos
const VideoArchiveTemplate = lazy(() => import('./components/templates/VideoArchiveTemplate').then(m => ({ default: m.VideoArchiveTemplate })));
const SingleVideoPageTemplate = lazy(() => import('./components/templates/SingleVideoTemplate').then(m => ({ default: m.SingleVideoTemplate })));
const VideoCategoryArchiveTemplate = lazy(() => import('./components/templates/VideoCategoryArchiveTemplate').then(m => ({ default: m.VideoCategoryArchiveTemplate })));

// Podcasts
const PodcastArchiveTemplate = lazy(() => import('./components/templates/PodcastArchiveTemplate').then(m => ({ default: m.PodcastArchiveTemplate })));
const SinglePodcastPageTemplate = lazy(() => import('./components/templates/SinglePodcastTemplate').then(m => ({ default: m.SinglePodcastTemplate })));

// Post Formats
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

// WooCommerce
const ProductArchiveTemplate = lazy(() => import('./components/templates/ProductArchiveTemplate').then(m => ({ default: m.ProductArchiveTemplate })));
const SingleProductTemplate = lazy(() => import('./components/templates/woocommerce/SingleProductTemplate').then(m => ({ default: m.SingleProductTemplate })));
const CartTemplate = lazy(() => import('./components/templates/CartTemplate').then(m => ({ default: m.CartTemplate })));
const CheckoutTemplate = lazy(() => import('./components/templates/CheckoutTemplate').then(m => ({ default: m.CheckoutTemplate })));

// Tour Operator
const TourOperatorArchiveTemplate = lazy(() => import('./components/templates/tour-operator/TourOperatorArchiveTemplate').then(m => ({ default: m.TourOperatorArchiveTemplate })));
const SingleTourTemplate = lazy(() => import('./components/templates/tour-operator/SingleTourTemplate').then(m => ({ default: m.SingleTourTemplate })));

// Utility Pages
const ContactPageTemplate = lazy(() => import('./components/templates/ContactPageTemplate').then(m => ({ default: m.ContactPageTemplate })));
const FAQTemplate = lazy(() => import('./components/templates/FAQTemplate').then(m => ({ default: m.FAQTemplate })));
const PricingTemplate = lazy(() => import('./components/templates/PricingTemplate').then(m => ({ default: m.PricingTemplate })));
const WhyChooseUsTemplate = lazy(() => import('./components/templates/WhyChooseUsTemplate').then(m => ({ default: m.WhyChooseUsTemplate })));
const GuaranteesTemplate = lazy(() => import('./components/templates/GuaranteesTemplate').then(m => ({ default: m.GuaranteesTemplate })));
const ROICalculatorTemplate = lazy(() => import('./components/templates/ROICalculatorTemplate').then(m => ({ default: m.ROICalculatorTemplate })));
const TestimonialsTemplate = lazy(() => import('./components/templates/TestimonialsTemplate').then(m => ({ default: m.TestimonialsTemplate })));
const SearchResultsPageTemplate = lazy(() => import('./components/templates/SearchResultsPageTemplate').then(m => ({ default: m.SearchResultsPageTemplate })));
const PrivacyPolicyTemplate = lazy(() => import('./components/templates/PrivacyPolicyTemplate').then(m => ({ default: m.PrivacyPolicyTemplate })));
const TermsOfServiceTemplate = lazy(() => import('./components/templates/TermsOfServiceTemplate').then(m => ({ default: m.TermsOfServiceTemplate })));
const SiteMapTemplate = lazy(() => import('./components/templates/SiteMapTemplate').then(m => ({ default: m.SiteMapTemplate })));
const StyleGuideTemplate = lazy(() => import('./components/templates/StyleGuideTemplate').then(m => ({ default: m.StyleGuideTemplate })));
const TutorialsTemplate = lazy(() => import('./components/templates/TutorialsTemplate').then(m => ({ default: m.TutorialsTemplate })));

// Legacy / Misc
const ArchiveTemplate = lazy(() => import('./components/templates/ArchiveTemplate').then(m => ({ default: m.ArchiveTemplate })));
const ArchiveWithFiltersTemplate = lazy(() => import('./components/templates/ArchiveWithFiltersTemplate').then(m => ({ default: m.ArchiveWithFiltersTemplate })));
const IndexTemplate = lazy(() => import('./components/templates/IndexTemplate').then(m => ({ default: m.IndexTemplate })));
const SingleTemplate = lazy(() => import('./components/templates/SingleTemplate').then(m => ({ default: m.SingleTemplate })));
const SearchResultsTemplate = lazy(() => import('./components/templates/SearchResultsTemplate').then(m => ({ default: m.SearchResultsTemplate })));
const WordPressBlocksProofOfConcept = lazy(() => import('./components/templates/WordPressBlocksProofOfConcept').then(m => ({ default: m.WordPressBlocksProofOfConcept })));
const SectionStyleExample = lazy(() => import('./components/templates/SectionStyleExample').then(m => ({ default: m.SectionStyleExample })));
const FeatureShowcaseTemplate = lazy(() => import('./components/templates/FeatureShowcaseTemplate').then(m => ({ default: m.FeatureShowcaseTemplate })));

// Dev Tools
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

import { useParams } from 'react-router';

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
  const { slug } = useParams();
  return <PortfolioCategoryArchiveTemplate category={slug} />;
}

function PortfolioTagRoute() {
  const { slug } = useParams();
  return <PortfolioTagArchiveTemplate tag={slug} />;
}

function SingleVideoRoute() {
  const { slug } = useParams();
  return <SingleVideoPageTemplate slug={slug} />;
}

function VideoCategoryRoute() {
  const { slug } = useParams();
  return <VideoCategoryArchiveTemplate category={slug} />;
}

function SinglePodcastRoute() {
  const { slug } = useParams();
  return <SinglePodcastPageTemplate slug={slug} />;
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

      /* ── Podcasts ── */
      { path: 'podcasts', Component: PodcastArchiveTemplate },
      { path: 'podcast/:slug', Component: SinglePodcastRoute },

      /* ── Utility Pages ── */
      { path: 'contact', Component: ContactPageTemplate },
      { path: 'faq', Component: FAQTemplate },
      { path: 'pricing', Component: PricingTemplate },
      { path: 'why-choose-us', Component: WhyChooseUsTemplate },
      { path: 'guarantees', Component: GuaranteesTemplate },
      { path: 'roi-calculator', Component: ROICalculatorTemplate },
      { path: 'testimonials', Component: TestimonialsTemplate },
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
      { path: 'dev-tools/style-guide', Component: StyleGuideTemplate },
      { path: 'dev-tools/design-tokens-reference', Component: DesignTokensReferenceTemplate },
      { path: 'dev-tools/deployment-readiness', Component: DeploymentReadinessTemplate },
      { path: 'dev-tools/design-playground', Component: DesignPlaygroundTemplate },
      { path: 'dev-tools/code-quality-dashboard', Component: CodeQualityDashboardTemplate },
      { path: 'dev-tools/docs-generator', Component: DocsGeneratorTemplate },
      { path: 'dev-tools/snippet-generator', Component: SnippetGeneratorTemplate },

      /* ── 404 Catch-All ── */
      { path: '404', Component: Template404 },
      { path: '*', Component: Template404 },
    ],
  },
];

export const router = createBrowserRouter(routes);