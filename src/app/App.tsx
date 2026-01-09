/**
 * LSX Design Prototype — Main Application
 * 
 * WordPress block-theme prototype demonstrating:
 * - Token-driven design system (theme.json alignment)
 * - Reusable pattern composition
 * - Template structure (front-page, archive, single)
 * - Accessibility-first approach (WCAG 2.1 AA)
 * 
 * **Performance Optimizations:**
 * - Lazy loading all templates (code splitting)
 * - Suspense boundaries for loading states
 * - Dynamic imports reduce initial bundle size
 */

import { useState, lazy, Suspense } from 'react';
import { NavigationContext } from './contexts/NavigationContext';
import { KeyboardShortcuts } from './components/blocks/layout/KeyboardShortcuts';
import { ErrorBoundary } from './components/blocks/layout/ErrorBoundary';
import { ToastProvider } from './components/blocks/feedback/ToastSystem';

// Loading component for suspense fallback
function PageLoader() {
  return (
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div 
          style={{ 
            width: '48px',
            height: '48px',
            border: '4px solid var(--border)',
            borderTopColor: 'var(--primary)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}
        />
        <p>Loading...</p>
      </div>
    </div>
  );
}

// Lazy load all templates for better code splitting
const FrontPageTemplate = lazy(() => import('./components/templates/FrontPageTemplate').then(m => ({ default: m.FrontPageTemplate })));
const ArchiveTemplate = lazy(() => import('./components/templates/ArchiveTemplate').then(m => ({ default: m.ArchiveTemplate })));
const ArchiveWithFiltersTemplate = lazy(() => import('./components/templates/ArchiveWithFiltersTemplate').then(m => ({ default: m.ArchiveWithFiltersTemplate })));
const SingleTemplate = lazy(() => import('./components/templates/SingleTemplate').then(m => ({ default: m.SingleTemplate })));
const Template404 = lazy(() => import('./components/templates/404Template').then(m => ({ default: m.Template404 })));
const IndexTemplate = lazy(() => import('./components/templates/IndexTemplate').then(m => ({ default: m.IndexTemplate })));
const SearchResultsTemplate = lazy(() => import('./components/templates/SearchResultsTemplate').then(m => ({ default: m.SearchResultsTemplate })));
const BlogIndexTemplate = lazy(() => import('./components/templates/BlogIndexTemplate').then(m => ({ default: m.BlogIndexTemplate })));
const CategoryArchiveTemplate = lazy(() => import('./components/templates/CategoryArchiveTemplate').then(m => ({ default: m.CategoryArchiveTemplate })));
const AuthorArchiveTemplate = lazy(() => import('./components/templates/AuthorArchiveTemplate').then(m => ({ default: m.AuthorArchiveTemplate })));
const SinglePostLongformTemplate = lazy(() => import('./components/templates/SinglePostLongformTemplate').then(m => ({ default: m.SinglePostLongformTemplate })));
const SinglePostTemplate = lazy(() => import('./components/templates/SinglePostTemplate').then(m => ({ default: m.SinglePostTemplate })));
const SearchResultsPageTemplate = lazy(() => import('./components/templates/SearchResultsPageTemplate').then(m => ({ default: m.SearchResultsPageTemplate })));
const ContactPageTemplate = lazy(() => import('./components/templates/ContactPageTemplate').then(m => ({ default: m.ContactPageTemplate })));
const StyleGuideTemplate = lazy(() => import('./components/templates/StyleGuideTemplate').then(m => ({ default: m.StyleGuideTemplate })));
const WordPressBlocksProofOfConcept = lazy(() => import('./components/templates/WordPressBlocksProofOfConcept').then(m => ({ default: m.WordPressBlocksProofOfConcept })));
const FAQTemplate = lazy(() => import('./components/templates/FAQTemplate').then(m => ({ default: m.FAQTemplate })));
const SectionStyleExample = lazy(() => import('./components/templates/SectionStyleExample').then(m => ({ default: m.SectionStyleExample })));
const ServicesTemplate = lazy(() => import('./components/templates/ServicesTemplate').then(m => ({ default: m.ServicesTemplate })));
const ServicesLandingTemplate = lazy(() => import('./components/templates/ServicesLandingTemplate').then(m => ({ default: m.ServicesLandingTemplate })));
const HostingTemplate = lazy(() => import('./components/templates/HostingTemplate').then(m => ({ default: m.HostingTemplate })));
const AboutTemplate = lazy(() => import('./components/templates/AboutTemplate').then(m => ({ default: m.AboutTemplate })));
const TeamTemplate = lazy(() => import('./components/templates/TeamTemplate').then(m => ({ default: m.TeamTemplate })));
const AboutProcessTemplate = lazy(() => import('./components/templates/AboutProcessTemplate').then(m => ({ default: m.AboutProcessTemplate })));
const AboutCultureTemplate = lazy(() => import('./components/templates/AboutCultureTemplate').then(m => ({ default: m.AboutCultureTemplate })));
const AboutHistoryTemplate = lazy(() => import('./components/templates/AboutHistoryTemplate').then(m => ({ default: m.AboutHistoryTemplate })));
const PortfolioArchiveTemplate = lazy(() => import('./components/templates/PortfolioArchiveTemplate').then(m => ({ default: m.PortfolioArchiveTemplate })));
const PortfolioSingleTemplate = lazy(() => import('./components/templates/PortfolioSingleTemplate').then(m => ({ default: m.PortfolioSingleTemplate })));
const TagArchiveTemplate = lazy(() => import('./components/templates/TagArchiveTemplate').then(m => ({ default: m.TagArchiveTemplate })));
const DateArchiveTemplate = lazy(() => import('./components/templates/DateArchiveTemplate').then(m => ({ default: m.DateArchiveTemplate })));
const TemplateTester = lazy(() => import('./components/templates/TemplateTester').then(m => ({ default: m.TemplateTester })));
const ComponentShowcase = lazy(() => import('./components/templates/ComponentShowcase').then(m => ({ default: m.ComponentShowcase })));
const FeatureShowcaseTemplate = lazy(() => import('./components/templates/FeatureShowcaseTemplate').then(m => ({ default: m.FeatureShowcaseTemplate })));
const WhyChooseUsTemplate = lazy(() => import('./components/templates/WhyChooseUsTemplate').then(m => ({ default: m.WhyChooseUsTemplate })));
const GuaranteesTemplate = lazy(() => import('./components/templates/GuaranteesTemplate').then(m => ({ default: m.GuaranteesTemplate })));
const PricingTemplate = lazy(() => import('./components/templates/PricingTemplate').then(m => ({ default: m.PricingTemplate })));
const ROICalculatorTemplate = lazy(() => import('./components/templates/ROICalculatorTemplate').then(m => ({ default: m.ROICalculatorTemplate })));
const DesignSystemTest = lazy(() => import('./components/ui/DesignSystemTest').then(m => ({ default: m.DesignSystemTest })));
const TestimonialsTemplate = lazy(() => import('./components/templates/TestimonialsTemplate').then(m => ({ default: m.TestimonialsTemplate })));
const ComplianceScorecard = lazy(() => import('./components/ui/ComplianceScorecard').then(m => ({ default: m.ComplianceScorecard })));

// Service Detail Templates
const DevelopmentServiceTemplate = lazy(() => import('./components/templates/DevelopmentServiceTemplate').then(m => ({ default: m.DevelopmentServiceTemplate })));
const DesignServiceTemplate = lazy(() => import('./components/templates/DesignServiceTemplate').then(m => ({ default: m.DesignServiceTemplate })));
const DiscoveryServiceTemplate = lazy(() => import('./components/templates/DiscoveryServiceTemplate').then(m => ({ default: m.DiscoveryServiceTemplate })));
const ContentServiceTemplate = lazy(() => import('./components/templates/ContentServiceTemplate').then(m => ({ default: m.ContentServiceTemplate })));
const SecurityServiceTemplate = lazy(() => import('./components/templates/SecurityServiceTemplate').then(m => ({ default: m.SecurityServiceTemplate })));
const MigrationsServiceTemplate = lazy(() => import('./components/templates/MigrationsServiceTemplate').then(m => ({ default: m.MigrationsServiceTemplate })));
const SupportServiceTemplate = lazy(() => import('./components/templates/SupportServiceTemplate').then(m => ({ default: m.SupportServiceTemplate })));
const NewsletterServiceTemplate = lazy(() => import('./components/templates/NewsletterServiceTemplate').then(m => ({ default: m.NewsletterServiceTemplate })));

// Solutions Templates
const SolutionsTemplate = lazy(() => import('./components/templates/SolutionsTemplate').then(m => ({ default: m.SolutionsTemplate })));
const LSXSolutionTemplate = lazy(() => import('./components/templates/LSXSolutionTemplate').then(m => ({ default: m.LSXSolutionTemplate })));
const LSXDesignTemplate = lazy(() => import('./components/templates/LSXDesignTemplate').then(m => ({ default: m.LSXDesignTemplate })));
const WordPressSolutionTemplate = lazy(() => import('./components/templates/WordPressSolutionTemplate').then(m => ({ default: m.WordPressSolutionTemplate })));
const WooCommerceSolutionTemplate = lazy(() => import('./components/templates/WooCommerceSolutionTemplate').then(m => ({ default: m.WooCommerceSolutionTemplate })));
const TourOperatorTemplate = lazy(() => import('./components/templates/TourOperatorTemplate').then(m => ({ default: m.TourOperatorTemplate })));

// Dev Tools Templates
const DevToolsTemplate = lazy(() => import('./components/templates/DevToolsTemplate').then(m => ({ default: m.DevToolsTemplate })));
const BlockDocumentation = lazy(() => import('./components/templates/BlockDocumentation').then(m => ({ default: m.BlockDocumentation })));
const ComponentAPI = lazy(() => import('./components/templates/ComponentAPI').then(m => ({ default: m.ComponentAPI })));
const DesignBlocksShowcase = lazy(() => import('./components/templates/DesignBlocksShowcase').then(m => ({ default: m.DesignBlocksShowcase })));
const ButtonShowcase = lazy(() => import('./components/templates/ButtonShowcase').then(m => ({ default: m.ButtonShowcase })));
const HeaderFooterComparison = lazy(() => import('./components/templates/HeaderFooterComparison').then(m => ({ default: m.HeaderFooterComparison })));
const IconLibrary = lazy(() => import('./components/templates/IconLibrary').then(m => ({ default: m.IconLibrary })));
const LivePreview = lazy(() => import('./components/templates/LivePreview').then(m => ({ default: m.LivePreview })));
const SectionPresetsShowcase = lazy(() => import('./components/templates/SectionPresetsShowcase').then(m => ({ default: m.SectionPresetsShowcase })));
const ThemeBlocksShowcase = lazy(() => import('./components/templates/ThemeBlocksShowcase').then(m => ({ default: m.ThemeBlocksShowcase })));

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('front-page');

  // Render appropriate template based on selection
  const renderTemplate = () => {
    // Handle dynamic tag archives
    if (currentPage.startsWith('tag-')) {
      const tag = currentPage.replace('tag-', '');
      return <TagArchiveTemplate tag={tag} />;
    }
    
    // Handle dynamic date archives
    if (currentPage.startsWith('date-')) {
      const dateParts = currentPage.replace('date-', '').split('-');
      const year = parseInt(dateParts[0]);
      const month = dateParts[1] ? parseInt(dateParts[1]) : undefined;
      return <DateArchiveTemplate year={year} month={month} />;
    }
    
    // Handle dynamic category archives
    if (currentPage.startsWith('category-')) {
      const category = currentPage.replace('category-', '');
      return <CategoryArchiveTemplate category={category} />;
    }
    
    // Handle dynamic author archives
    if (currentPage.startsWith('author-')) {
      const author = currentPage.replace('author-', '');
      return <AuthorArchiveTemplate author={author} />;
    }
    
    // Handle dynamic single posts
    if (currentPage.startsWith('post-')) {
      const slug = currentPage.replace('post-', '');
      return <SinglePostTemplate slug={slug} />;
    }
    
    // Handle dynamic portfolio single pages
    if (currentPage.startsWith('portfolio-single-')) {
      const slug = currentPage.replace('portfolio-single-', '');
      return <PortfolioSingleTemplate slug={slug} />;
    }
    
    // Handle dynamic service pages
    if (currentPage.startsWith('service-')) {
      const service = currentPage.replace('service-', '');
      switch (service) {
        case 'development':
          return <DevelopmentServiceTemplate />;
        case 'design':
          return <DesignServiceTemplate />;
        case 'discovery':
          return <DiscoveryServiceTemplate />;
        case 'content':
          return <ContentServiceTemplate />;
        case 'security':
          return <SecurityServiceTemplate />;
        case 'migrations':
          return <MigrationsServiceTemplate />;
        case 'support':
          return <SupportServiceTemplate />;
        case 'newsletter':
          return <NewsletterServiceTemplate />;
        default:
          return <ServicesTemplate />;
      }
    }
    
    // Handle dynamic solution pages
    if (currentPage.startsWith('solution-')) {
      const solution = currentPage.replace('solution-', '');
      switch (solution) {
        case 'lsx':
          return <LSXSolutionTemplate />;
        case 'wordpress':
          return <WordPressSolutionTemplate />;
        case 'woocommerce':
          return <WooCommerceSolutionTemplate />;
        case 'hosting':
          return <HostingTemplate />;
        case 'tour-operator':
          return <TourOperatorTemplate />;
        default:
          return <SolutionsTemplate />;
      }
    }
    
    // Handle dev-tools subpages
    if (currentPage.startsWith('dev-tools/')) {
      const toolPage = currentPage.replace('dev-tools/', '');
      switch (toolPage) {
        case 'template-tester':
          return <TemplateTester />;
        case 'design-system-test':
          return <DesignSystemTest />;
        case 'component-showcase':
          return <ComponentShowcase />;
        case 'compliance-scorecard':
          return <ComplianceScorecard />;
        case 'feature-showcase':
          return <FeatureShowcaseTemplate />;
        case 'block-documentation':
          return <BlockDocumentation />;
        case 'design-blocks-showcase':
          return <DesignBlocksShowcase />;
        case 'component-api':
          return <ComponentAPI />;
        case 'button-showcase':
          return <ButtonShowcase />;
        case 'header-footer-comparison':
          return <HeaderFooterComparison />;
        case 'icon-library':
          return <IconLibrary />;
        case 'live-preview':
          return <LivePreview />;
        case 'section-presets-showcase':
          return <SectionPresetsShowcase />;
        case 'theme-blocks-showcase':
          return <ThemeBlocksShowcase />;
        case 'style-guide':
          return <StyleGuideTemplate />;
        default:
          return <DevToolsTemplate />;
      }
    }
    
    switch (currentPage) {
      case 'front-page':
      case 'home':
        return <FrontPageTemplate />;
      case 'blog':
        return <BlogIndexTemplate />;
      case 'category':
        return <CategoryArchiveTemplate />;
      case 'author':
        return <AuthorArchiveTemplate />;
      case 'single-post':
        return <SinglePostLongformTemplate />;
      case 'single':
        return <SingleTemplate />;
      case 'search-page':
        return <SearchResultsPageTemplate />;
      case 'search':
        return <SearchResultsTemplate />;
      case 'contact':
        return <ContactPageTemplate />;
      case 'style-guide':
        return <StyleGuideTemplate />;
      case 'wordpress-blocks-poc':
        return <WordPressBlocksProofOfConcept />;
      case 'faq':
      case 'faqs':
        return <FAQTemplate />;
      case 'section-style-example':
        return <SectionStyleExample />;
      case 'about':
        return <AboutTemplate />;
      case 'about-process':
        return <AboutProcessTemplate />;
      case 'about-culture':
        return <AboutCultureTemplate />;
      case 'about-history':
        return <AboutHistoryTemplate />;
      case 'team':
        return <TeamTemplate />;
      case 'careers':
        return <TeamTemplate />; // Reuse team template for now
      case 'index':
        return <IndexTemplate />;
      case 'archive':
        return <ArchiveTemplate />;
      case 'archive-filters':
        return <ArchiveWithFiltersTemplate />;
      case '404':
        return <Template404 />;
      case 'services':
        return <ServicesLandingTemplate />;
      // Service Detail Pages
      case 'discovery-service':
        return <DiscoveryServiceTemplate />;
      case 'design-service':
        return <DesignServiceTemplate />;
      case 'development-service':
        return <DevelopmentServiceTemplate />;
      case 'content-service':
        return <ContentServiceTemplate />;
      case 'migrations-service':
        return <MigrationsServiceTemplate />;
      case 'security-service':
        return <SecurityServiceTemplate />;
      case 'support-service':
        return <SupportServiceTemplate />;
      case 'newsletter-service':
        return <NewsletterServiceTemplate />;
      case 'solutions':
        return <SolutionsTemplate />;
      // Solution Detail Pages
      case 'wordpress-solutions':
        return <WordPressSolutionTemplate />;
      case 'woocommerce-solutions':
        return <WooCommerceSolutionTemplate />;
      case 'tour-operator-solutions':
        return <TourOperatorTemplate />;
      case 'lsx-design-solutions':
        return <LSXDesignTemplate />;
      case 'hosting':
        return <HostingTemplate />;
      case 'portfolio-archive':
        return <PortfolioArchiveTemplate />;
      case 'portfolio-single':
        return <PortfolioSingleTemplate />;
      case 'tag-archive':
        return <TagArchiveTemplate />;
      case 'date-archive':
        return <DateArchiveTemplate />;
      case 'template-tester':
        return <TemplateTester />;
      case 'component-showcase':
        return <ComponentShowcase />;
      case 'feature-showcase':
        return <FeatureShowcaseTemplate />;
      case 'why-choose-us':
        return <WhyChooseUsTemplate />;
      case 'guarantees':
        return <GuaranteesTemplate />;
      case 'pricing':
        return <PricingTemplate />;
      case 'roi-calculator':
        return <ROICalculatorTemplate />;
      case 'design-system-test':
        return <DesignSystemTest />;
      case 'testimonials':
        return <TestimonialsTemplate />;
      case 'compliance-scorecard':
        return <ComplianceScorecard />;
      // Dev Tools Pages
      case 'dev-tools':
        return <DevToolsTemplate />;
      case 'block-documentation':
        return <BlockDocumentation />;
      case 'component-api':
        return <ComponentAPI />;
      case 'design-blocks-showcase':
        return <DesignBlocksShowcase />;
      case 'button-showcase':
        return <ButtonShowcase />;
      case 'header-footer-comparison':
        return <HeaderFooterComparison />;
      case 'icon-library':
        return <IconLibrary />;
      case 'live-preview':
        return <LivePreview />;
      case 'section-presets-showcase':
        return <SectionPresetsShowcase />;
      case 'theme-blocks-showcase':
        return <ThemeBlocksShowcase />;
      // Service Pages
      case 'wordpress-development':
      case 'woocommerce-development':
      case 'block-theme-development':
      case 'design-systems':
      case 'accessibility-services':
      case 'performance-optimization':
      case 'site-migration':
      case 'maintenance-support':
        return <ServicesTemplate />; // All service pages use ServicesTemplate for now
      // Solutions Pages
      case 'solutions-wordpress':
        return <WordPressSolutionTemplate />;
      case 'solutions-woocommerce':
        return <WooCommerceSolutionTemplate />;
      case 'solutions-multisite':
      case 'solutions-headless':
        return <SolutionsTemplate />; // Use generic solutions template for now
      // Hosting Pages
      case 'hosting-plans':
      case 'hosting-features':
      case 'hosting-support':
        return <HostingTemplate />; // All hosting pages use HostingTemplate for now
      // Resources Pages
      case 'documentation':
      case 'case-studies':
      case 'whitepapers':
        return <FAQTemplate />; // Use FAQ template as placeholder for resources
      // Legal Pages
      case 'privacy-policy':
      case 'terms-of-service':
      case 'cookie-policy':
        return <ContactPageTemplate />; // Use contact template as placeholder for legal pages
      default:
        return <FrontPageTemplate />;
    }
  };

  return (
    <ToastProvider>
      <NavigationContext.Provider value={{ currentPage, navigateTo: setCurrentPage }}>
        <div className="lsx-design-prototype">
          {/* Render Current Template */}
          <Suspense fallback={<PageLoader />}>
            <ErrorBoundary>
              {renderTemplate()}
            </ErrorBoundary>
          </Suspense>
        </div>
        <KeyboardShortcuts />
      </NavigationContext.Provider>
    </ToastProvider>
  );
}