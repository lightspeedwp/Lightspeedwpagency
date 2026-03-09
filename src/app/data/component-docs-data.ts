/**
 * Component Documentation Data
 *
 * Extracted from DocsGeneratorTemplate.tsx (March 5, 2026)
 * for P3.1 - Memory Reduction (Split Large Templates)
 *
 * In a real build pipeline, this would be generated automatically
 * from JSDoc comments / TypeScript AST.
 *
 * Total: 540 lines extracted
 *
 * @see /src/app/components/templates/DocsGeneratorTemplate.tsx
 * @see /tasks/memory-reduction-tasks.md - Priority 3.1
 */

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

export interface PropDef {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

export interface ComponentDoc {
  id: string;
  name: string;
  category: 'Templates' | 'Patterns' | 'Blocks' | 'Common' | 'Hooks' | 'Data' | 'Parts';
  filePath: string;
  cssPath?: string;
  description: string;
  wpBlock?: string;
  props: PropDef[];
  importStatement: string;
  usageExample: string;
  seeAlso?: string[];
  usedIn?: string[];
}

/* ═══════════════════════════════════════════
 * Mock Component Documentation Data
 *
 * In a real build pipeline these would be
 * extracted from JSDoc / TypeScript AST.
 * ═══════════════════════════════════════════ */

export const componentDocs: ComponentDoc[] = [
  /* ── Common ── */
  {
    id: 'section',
    name: 'Section',
    category: 'Common',
    filePath: '/src/app/components/common/Section.tsx',
    cssPath: '/src/styles/components/section.css',
    description: 'Core layout section wrapper. WordPress concept: Group block with semantic <section>. Provides fluid vertical spacing via utility classes and supports WordPress section style variations.',
    wpBlock: 'core/group',
    props: [
      { name: 'children', type: 'ReactNode', required: true, description: 'Section content' },
      { name: 'spacing', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", required: false, default: "'md'", description: "Vertical padding size ('xs' uses --section-padding-y-sm for compact sections like breadcrumbs; all others use --section-padding-y)" },
      { name: 'background', type: "'default' | 'card' | 'muted'", required: false, default: "'default'", description: 'Background color variant using semantic CSS variables' },
      { name: 'sectionStyle', type: "'default' | 'muted' | 'dark' | 'primary' | 'accent' | 'gradient-primary' | 'gradient-dark' | 'gradient-subtle'", required: false, description: 'WordPress section style variation (is-style-*)' },
      { name: 'className', type: 'string', required: false, default: "''", description: 'Additional CSS classes' },
      { name: 'id', type: 'string', required: false, description: 'Section anchor ID' },
    ],
    importStatement: "import { Section } from '../common/Section';",
    usageExample: `<Section spacing="lg" background="card" sectionStyle="muted">
  <Container>
    <h2>Section Title</h2>
    <p>Section content here.</p>
  </Container>
</Section>`,
    seeAlso: ['Container', 'Breadcrumbs'],
    usedIn: ['FrontPageTemplate', 'AboutTemplate', 'ServicesLandingTemplate', 'ContactPageTemplate'],
  },
  {
    id: 'container',
    name: 'Container',
    category: 'Common',
    filePath: '/src/app/components/common/Container.tsx',
    cssPath: '/src/styles/components/container.css',
    description: 'Layout container enforcing consistent max-width (1440px) and fluid horizontal padding. WordPress concept: Group block with constrained width.',
    wpBlock: 'core/group',
    props: [
      { name: 'children', type: 'ReactNode', required: true, description: 'Container content' },
      { name: 'width', type: "'default' | 'wide' | 'full'", required: false, default: "'wide'", description: 'Width variant (maintained for API compatibility)' },
      { name: 'className', type: 'string', required: false, default: "''", description: 'Additional CSS classes' },
    ],
    importStatement: "import { Container } from '../common/Container';",
    usageExample: `<Container>
  <h1>Page Content</h1>
  <p>Constrained to 1440px max-width.</p>
</Container>`,
    seeAlso: ['Section'],
    usedIn: ['FrontPageTemplate', 'AboutTemplate', 'BlogIndexTemplate'],
  },
  {
    id: 'breadcrumbs',
    name: 'Breadcrumbs + BreadcrumbPart',
    category: 'Parts',
    filePath: '/src/app/components/parts/BreadcrumbPart.tsx',
    cssPath: '/src/styles/blocks/theme/breadcrumbs.css',
    description: 'Navigation breadcrumb trail. WordPress concept: Template part (parts/breadcrumbs.html). The BreadcrumbPart wrapper provides the standard wp-block-breadcrumbs-section container with optional --border variant. Use BreadcrumbPart in templates; use raw Breadcrumbs only inside hero overlays or custom block compositions.',
    wpBlock: 'core/navigation (breadcrumbs)',
    props: [
      { name: 'items', type: 'BreadcrumbItem[]', required: true, description: 'Array of breadcrumb items with label and optional href string' },
      { name: 'variant', type: "'default' | 'border'", required: false, default: "'border'", description: 'Section wrapper variant (border adds bottom accent line)' },
    ],
    importStatement: "import { BreadcrumbPart } from '../parts/BreadcrumbPart';",
    usageExample: `<BreadcrumbPart
  items={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Design' },
  ]}
/>`,
    seeAlso: ['Section', 'Container'],
    usedIn: ['AboutTemplate', 'ServicesLandingTemplate', 'BlogIndexTemplate', 'PortfolioArchiveTemplate'],
  },
  {
    id: 'heading',
    name: 'Heading',
    category: 'Common',
    filePath: '/src/app/components/common/Heading.tsx',
    description: 'Semantic heading component (H1-H6). Enforces design system font sizes, weights, and font families via CSS variables. WordPress concept: core/heading block.',
    wpBlock: 'core/heading',
    props: [
      { name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', required: false, default: '2', description: 'Heading level (h1-h6)' },
      { name: 'children', type: 'ReactNode', required: true, description: 'Heading content' },
      { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
    ],
    importStatement: "import { Heading } from '../common/Heading';",
    usageExample: `<Heading level={2}>Section Title</Heading>`,
    seeAlso: ['Section', 'Container'],
    usedIn: ['StyleGuideTemplate', 'AboutTemplate'],
  },

  /* ── Parts ── */
  {
    id: 'site-header',
    name: 'SiteHeader',
    category: 'Parts',
    filePath: '/src/app/components/parts/SiteHeader.tsx',
    cssPath: '/src/styles/templates/site-header.css',
    description: 'Global site header template part. Includes logo, desktop mega menu navigation, mobile hamburger menu, search overlay, and dark mode toggle. Renders in RootLayout only.',
    wpBlock: 'core/template-part (header)',
    props: [],
    importStatement: "import { SiteHeader } from '../parts/SiteHeader';",
    usageExample: `{/* Rendered automatically by RootLayout — do NOT add to templates */}`,
    seeAlso: ['SiteFooter', 'RootLayout'],
    usedIn: ['RootLayout'],
  },
  {
    id: 'site-footer',
    name: 'SiteFooter',
    category: 'Parts',
    filePath: '/src/app/components/parts/SiteFooter.tsx',
    cssPath: '/src/styles/templates/site-footer.css',
    description: 'Global site footer template part. Multi-column layout with navigation links, social icons, newsletter signup, and copyright. Renders in RootLayout only.',
    wpBlock: 'core/template-part (footer)',
    props: [],
    importStatement: "import { SiteFooter } from '../parts/SiteFooter';",
    usageExample: `{/* Rendered automatically by RootLayout — do NOT add to templates */}`,
    seeAlso: ['SiteHeader', 'RootLayout'],
    usedIn: ['RootLayout'],
  },

  /* ── Patterns ── */
  {
    id: 'faq-section',
    name: 'FAQSection',
    category: 'Patterns',
    filePath: '/src/app/components/patterns/FAQSection.tsx',
    cssPath: '/src/styles/patterns/faq-section.css',
    description: 'Expandable FAQ accordion pattern. Questions use --text-lg (NOT --text-h4). WordPress concept: core/details block. Data comes from /src/app/data/faqs.ts.',
    wpBlock: 'core/details',
    props: [
      { name: 'faqs', type: 'FAQ[]', required: true, description: 'Array of FAQ items (question + answer)' },
      { name: 'title', type: 'string', required: false, default: "'Frequently Asked Questions'", description: 'Section heading' },
    ],
    importStatement: "import { FAQSection } from '../patterns/FAQSection';",
    usageExample: `import { servicesFAQs } from '../../data/faqs';

<FAQSection faqs={servicesFAQs} title="Service FAQs" />`,
    seeAlso: ['CTASection', 'Section'],
    usedIn: ['FrontPageTemplate', 'ServicesTemplate', 'AboutTemplate', 'ContactPageTemplate', 'FAQTemplate'],
  },
  {
    id: 'cta-section',
    name: 'CTASection',
    category: 'Patterns',
    filePath: '/src/app/components/patterns/CTASection.tsx',
    cssPath: '/src/styles/patterns/cta-section.css',
    description: 'Call-to-action section with primary and optional secondary button. Centered layout with gradient backgrounds. Used at page bottom for conversion.',
    props: [
      { name: 'title', type: 'string', required: true, description: 'CTA heading' },
      { name: 'description', type: 'string', required: false, description: 'Supporting text' },
      { name: 'primaryLabel', type: 'string', required: true, description: 'Primary button text' },
      { name: 'primaryPage', type: 'string', required: true, description: 'Primary button slug' },
      { name: 'secondaryLabel', type: 'string', required: false, description: 'Secondary button text' },
      { name: 'secondaryPage', type: 'string', required: false, description: 'Secondary button slug' },
    ],
    importStatement: "import { CTASection } from '../patterns/CTASection';",
    usageExample: `<CTASection
  title="Ready to Get Started?"
  description="Let us build your next project."
  primaryLabel="Contact Us"
  primaryPage="contact"
  secondaryLabel="View Our Work"
  secondaryPage="portfolio"
/>`,
    seeAlso: ['FAQSection', 'Section', 'Button'],
    usedIn: ['FrontPageTemplate', 'AboutTemplate', 'ServicesTemplate', 'PricingTemplate'],
  },
  {
    id: 'hero-home',
    name: 'HeroHome',
    category: 'Patterns',
    filePath: '/src/app/components/patterns/HeroHome.tsx',
    cssPath: '/src/styles/patterns/hero-home.css',
    description: 'Homepage hero pattern. Large heading, subtitle text, dual CTA buttons, and optional scroll-down arrow. Full-width with gradient background and decorative orbs.',
    props: [
      { name: 'title', type: 'string', required: true, description: 'Hero headline' },
      { name: 'subtitle', type: 'string', required: false, description: 'Supporting text below title' },
    ],
    importStatement: "import { HeroHome } from '../patterns/HeroHome';",
    usageExample: `<HeroHome 
  title="WordPress Excellence" 
  subtitle="Modern block themes built right." 
/>`,
    seeAlso: ['CTASection', 'ScrollDownArrow'],
    usedIn: ['FrontPageTemplate'],
  },
  {
    id: 'feature-grid',
    name: 'FeatureGrid',
    category: 'Patterns',
    filePath: '/src/app/components/patterns/FeatureGrid.tsx',
    cssPath: '/src/styles/patterns/feature-grid.css',
    description: 'Responsive grid of feature cards with icons, titles, and descriptions. Supports 2, 3, or 4 columns. Used for service highlights and capability listings.',
    props: [
      { name: 'features', type: 'Feature[]', required: true, description: 'Array of feature items (icon, title, description)' },
      { name: 'columns', type: '2 | 3 | 4', required: false, default: '3', description: 'Number of grid columns' },
    ],
    importStatement: "import { FeatureGrid } from '../patterns/FeatureGrid';",
    usageExample: `<FeatureGrid features={[
  { icon: 'code', title: 'Development', description: 'Custom WordPress themes' },
  { icon: 'palette', title: 'Design', description: 'Modern UI/UX design' },
]} columns={3} />`,
    seeAlso: ['Section', 'Container'],
    usedIn: ['FrontPageTemplate', 'ServicesLandingTemplate', 'WhyChooseUsTemplate'],
  },
  {
    id: 'pricing-table',
    name: 'PricingTable',
    category: 'Patterns',
    filePath: '/src/app/components/patterns/PricingTable.tsx',
    cssPath: '/src/styles/patterns/pricing-table.css',
    description: 'Pricing comparison cards. Supports 3 plan tiers with feature lists, checkmarks, and highlighted "featured" plan. Data from /src/app/data/pricing.ts.',
    props: [
      { name: 'plans', type: 'PricingPlan[]', required: true, description: 'Array of pricing plans' },
    ],
    importStatement: "import { PricingTable } from '../patterns/PricingTable';",
    usageExample: `import { pricingPlans } from '../../data/pricing';

<PricingTable plans={pricingPlans} />`,
    seeAlso: ['FeatureComparison', 'CTASection'],
    usedIn: ['PricingTemplate', 'HostingTemplate'],
  },
  {
    id: 'newsletter-signup',
    name: 'NewsletterSignup',
    category: 'Patterns',
    filePath: '/src/app/components/patterns/NewsletterSignup.tsx',
    cssPath: '/src/styles/patterns/newsletter-signup.css',
    description: 'Email subscription form with input validation and success state. Compact inline layout for mid-content placement.',
    props: [
      { name: 'title', type: 'string', required: false, description: 'Section heading' },
      { name: 'description', type: 'string', required: false, description: 'Supporting text' },
    ],
    importStatement: "import { NewsletterSignup } from '../patterns/NewsletterSignup';",
    usageExample: `<NewsletterSignup 
  title="Stay Updated" 
  description="Get the latest WordPress tips." 
/>`,
    seeAlso: ['CTAInline', 'Section'],
    usedIn: ['BlogIndexTemplate', 'FrontPageTemplate'],
  },
  {
    id: 'social-proof',
    name: 'SocialProof',
    category: 'Patterns',
    filePath: '/src/app/components/patterns/SocialProof.tsx',
    cssPath: '/src/styles/patterns/social-proof.css',
    description: 'Client logos and awards grid. Grayscale by default with full-color on hover. Builds trust and credibility.',
    props: [
      { name: 'logos', type: 'Logo[]', required: true, description: 'Array of logo items' },
      { name: 'title', type: 'string', required: false, description: 'Section heading' },
    ],
    importStatement: "import { SocialProof } from '../patterns/SocialProof';",
    usageExample: `import { clientLogos } from '../../data/logos';

<SocialProof logos={clientLogos} title="Trusted By" />`,
    seeAlso: ['TestimonialGrid', 'CTASection'],
    usedIn: ['FrontPageTemplate', 'AboutTemplate', 'TestimonialsTemplate'],
  },
  {
    id: 'global-search-overlay',
    name: 'GlobalSearchOverlay',
    category: 'Patterns',
    filePath: '/src/app/components/patterns/GlobalSearchOverlay.tsx',
    cssPath: '/src/styles/patterns/global-search.css',
    description: 'Full-screen search overlay with live results, category chips, keyboard navigation, and recent search history. Triggered by Cmd/Ctrl+K or header search icon.',
    props: [
      { name: 'isOpen', type: 'boolean', required: true, description: 'Controls overlay visibility' },
      { name: 'onClose', type: '() => void', required: true, description: 'Callback to close overlay' },
    ],
    importStatement: "import { GlobalSearchOverlay } from '../patterns/GlobalSearchOverlay';",
    usageExample: `<GlobalSearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />`,
    seeAlso: ['SiteHeader', 'SearchResultsPageTemplate'],
    usedIn: ['SiteHeader'],
  },

  /* ── Blocks ── */
  {
    id: 'button-block',
    name: 'Button',
    category: 'Blocks',
    filePath: '/src/app/components/blocks/design/Button.tsx',
    cssPath: '/src/styles/blocks/design/button.css',
    description: 'WordPress-compatible button block. 5 style variants (primary, secondary, outline, ghost, destructive) and 3 sizes (sm, md, lg). Uses NavigationContext for page linking.',
    wpBlock: 'core/button',
    props: [
      { name: 'children', type: 'ReactNode', required: true, description: 'Button label' },
      { name: 'page', type: 'string', required: false, description: 'Navigation slug (replaces onClick for link buttons)' },
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'", required: false, default: "'primary'", description: 'Button style variant' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, default: "'md'", description: 'Button size' },
      { name: 'onClick', type: '() => void', required: false, description: 'Click handler (use page prop for navigation instead)' },
    ],
    importStatement: "import { Button } from '../blocks/design/Button';",
    usageExample: `<Button variant="primary" size="lg" page="contact">
  Contact Us
</Button>`,
    seeAlso: ['Buttons', 'CTASection'],
    usedIn: ['FrontPageTemplate', 'AboutTemplate', 'ServicesTemplate', 'PricingTemplate'],
  },
  {
    id: 'buttons-block',
    name: 'Buttons',
    category: 'Blocks',
    filePath: '/src/app/components/blocks/design/Buttons.tsx',
    cssPath: '/src/styles/blocks/design/buttons.css',
    description: 'WordPress Buttons wrapper block. Groups multiple Button components in a horizontal row with consistent gap. WordPress concept: core/buttons.',
    wpBlock: 'core/buttons',
    props: [
      { name: 'children', type: 'ReactNode', required: true, description: 'Button components' },
      { name: 'alignment', type: "'left' | 'center' | 'right'", required: false, default: "'left'", description: 'Horizontal alignment of button group' },
    ],
    importStatement: "import { Buttons } from '../blocks/design/Buttons';",
    usageExample: `<Buttons alignment="center">
  <Button variant="primary" page="contact">Get Started</Button>
  <Button variant="outline" page="portfolio">View Work</Button>
</Buttons>`,
    seeAlso: ['Button', 'CTASection'],
    usedIn: ['HeroHome', 'CTASection'],
  },
  {
    id: 'accordion-block',
    name: 'Accordion',
    category: 'Blocks',
    filePath: '/src/app/components/blocks/design/Accordion.tsx',
    cssPath: '/src/styles/blocks/design/accordion.css',
    description: 'Collapsible content sections. Animated expand/collapse with chevron rotation. WordPress concept: core/details block.',
    wpBlock: 'core/details',
    props: [
      { name: 'items', type: 'AccordionItem[]', required: true, description: 'Array of accordion items (title, content)' },
      { name: 'allowMultiple', type: 'boolean', required: false, default: 'false', description: 'Allow multiple panels open simultaneously' },
    ],
    importStatement: "import { Accordion } from '../blocks/design/Accordion';",
    usageExample: `<Accordion items={[
  { title: 'What is FSE?', content: 'Full Site Editing...' },
  { title: 'Why block themes?', content: 'Block themes allow...' },
]} />`,
    seeAlso: ['FAQSection'],
    usedIn: ['FAQTemplate', 'FAQSection'],
  },

  /* ── Hooks ── */
  {
    id: 'use-navigation',
    name: 'useNavigation',
    category: 'Hooks',
    filePath: '/src/app/contexts/NavigationContext.tsx',
    description: 'Navigation context hook. Provides navigateTo(slug) function that resolves slugs to URL paths via route-map.ts. Used by all button/link components for WordPress-compatible navigation.',
    props: [
      { name: 'navigateTo', type: '(slug: string) => void', required: false, description: 'Navigate to a page by slug' },
      { name: 'currentPage', type: 'string', required: false, description: 'Current page slug' },
    ],
    importStatement: "import { useNavigation } from '../../contexts/NavigationContext';",
    usageExample: `const { navigateTo } = useNavigation();

<button onClick={() => navigateTo('contact')}>
  Contact Us
</button>`,
    seeAlso: ['Button', 'route-map.ts'],
    usedIn: ['Button', 'SiteHeader', 'SiteFooter', 'All Templates'],
  },
  {
    id: 'use-dark-mode',
    name: 'useDarkMode',
    category: 'Hooks',
    filePath: '/src/app/hooks/useDarkMode.ts',
    description: 'Dark mode toggle hook. Manages theme state via data-theme attribute on document root. Persists preference in localStorage. Respects prefers-color-scheme media query.',
    props: [
      { name: 'isDark', type: 'boolean', required: false, description: 'Current dark mode state' },
      { name: 'toggleDarkMode', type: '() => void', required: false, description: 'Toggle between light and dark' },
    ],
    importStatement: "import { useDarkMode } from '../../hooks/useDarkMode';",
    usageExample: `const { isDark, toggleDarkMode } = useDarkMode();

<button onClick={toggleDarkMode}>
  {isDark ? 'Light Mode' : 'Dark Mode'}
</button>`,
    seeAlso: ['StyleSwitcher', 'SiteHeader'],
    usedIn: ['SiteHeader', 'StyleSwitcher'],
  },

  /* ── Data ── */
  {
    id: 'data-faqs',
    name: 'faqs.ts',
    category: 'Data',
    filePath: '/src/app/data/faqs.ts',
    description: '13 FAQ collections for different page contexts. Includes homepageFAQs, servicesFAQs, aboutFAQs, contactFAQs, teamFAQs, portfolioFAQs, processFAQs, cultureFAQs, blogFAQs, hostingFAQs, and more.',
    props: [],
    importStatement: "import { servicesFAQs, homepageFAQs } from '../../data/faqs';",
    usageExample: `import { servicesFAQs } from '../../data/faqs';

<FAQSection faqs={servicesFAQs} />`,
    seeAlso: ['FAQSection', 'FAQTemplate'],
    usedIn: ['FrontPageTemplate', 'ServicesTemplate', 'AboutTemplate', 'FAQTemplate'],
  },
  {
    id: 'data-portfolio',
    name: 'portfolio.ts',
    category: 'Data',
    filePath: '/src/app/data/portfolio.ts',
    description: '6 portfolio projects with full case study data. Includes industries, categories, technologies, client testimonials, and project results. Helper functions: getProjectBySlug(), getProjectsByIndustry().',
    props: [],
    importStatement: "import { portfolioProjects, featuredProjects } from '../../data/portfolio';",
    usageExample: `import { portfolioProjects, getProjectBySlug } from '../../data/portfolio';

const project = getProjectBySlug('safari-booking-platform');`,
    seeAlso: ['PortfolioArchiveTemplate', 'PortfolioSingleTemplate'],
    usedIn: ['PortfolioArchiveTemplate', 'PortfolioSingleTemplate', 'FrontPageTemplate'],
  },
  {
    id: 'data-posts',
    name: 'posts.ts',
    category: 'Data',
    filePath: '/src/app/data/posts.ts',
    description: '12 blog posts with authors, categories, tags, reading times, and featured images. Helper functions: getPostBySlug(), getPostsByCategory(). Author profiles with bios.',
    props: [],
    importStatement: "import { blogPosts, featuredPosts, blogCategories } from '../../data/posts';",
    usageExample: `import { blogPosts, getPostBySlug } from '../../data/posts';

const post = getPostBySlug('wordpress-block-themes');`,
    seeAlso: ['BlogIndexTemplate', 'SinglePostTemplate'],
    usedIn: ['BlogIndexTemplate', 'SinglePostTemplate', 'CategoryArchiveTemplate'],
  },
  {
    id: 'data-videos',
    name: 'videos.ts',
    category: 'Data',
    filePath: '/src/app/data/videos.ts',
    description: 'Video content type data. Includes video entries with title, slug, embed URL, duration, categories, and tags. Helper functions: getVideoBySlug(), getVideosByCategory().',
    props: [],
    importStatement: "import { videos, getVideoBySlug } from '../../data/videos';",
    usageExample: `import { videos, videoCategories } from '../../data/videos';`,
    seeAlso: ['VideoArchiveTemplate', 'SingleVideoTemplate'],
    usedIn: ['VideoArchiveTemplate', 'SingleVideoTemplate'],
  },
  {
    id: 'data-podcasts',
    name: 'podcasts.ts',
    category: 'Data',
    filePath: '/src/app/data/podcasts.ts',
    description: 'Podcast content type data. Episodes with title, slug, audio URL, duration, season/episode numbers, categories, and transcript support.',
    props: [],
    importStatement: "import { podcasts, getPodcastBySlug } from '../../data/podcasts';",
    usageExample: `import { podcasts, podcastCategories } from '../../data/podcasts';`,
    seeAlso: ['PodcastArchiveTemplate', 'SinglePodcastTemplate'],
    usedIn: ['PodcastArchiveTemplate', 'SinglePodcastTemplate'],
  },
  {
    id: 'data-pages',
    name: 'pages.ts',
    category: 'Data',
    filePath: '/src/app/data/pages.ts',
    description: 'Complete site structure with all pages and URLs. Navigation menus (main, footer). Helper functions: getPageBySlug(), getPageUrl(), getPageTitle().',
    props: [],
    importStatement: "import { mainNavigation, footerNavigation } from '../../data/site-pages';",
    usageExample: `import { mainNavigation } from '../../data/site-pages';

{mainNavigation.map(item => (
  <a href={item.url}>{item.label}</a>
))}`,
    seeAlso: ['SiteHeader', 'SiteFooter'],
    usedIn: ['SiteHeader', 'SiteFooter', 'SiteMapTemplate'],
  },
  {
    id: 'data-search',
    name: 'search.ts',
    category: 'Data',
    filePath: '/src/app/data/search.ts',
    description: 'Unified search index across all data files. Relevance scoring algorithm with content type weighting. Used by GlobalSearchOverlay and SearchResultsPageTemplate.',
    props: [],
    importStatement: "import { searchAllContent } from '../../data/search';",
    usageExample: `import { searchAllContent } from '../../data/search';

const results = searchAllContent('wordpress themes');`,
    seeAlso: ['GlobalSearchOverlay', 'SearchResultsPageTemplate'],
    usedIn: ['GlobalSearchOverlay', 'SearchResultsPageTemplate'],
  },

  /* ── Templates (selection) ── */
  {
    id: 'front-page',
    name: 'FrontPageTemplate',
    category: 'Templates',
    filePath: '/src/app/components/templates/FrontPageTemplate.tsx',
    cssPath: '/src/styles/templates/front-page.css',
    description: 'Homepage template. Hero section, feature grid, social proof, portfolio highlights, testimonials, newsletter signup, FAQ section, and CTA. WordPress template: front-page.html.',
    props: [],
    importStatement: "import { FrontPageTemplate } from './FrontPageTemplate';",
    usageExample: `{/* Loaded via React Router at path "/" */}`,
    seeAlso: ['HeroHome', 'FeatureGrid', 'SocialProof', 'FAQSection', 'CTASection'],
  },
  {
    id: 'blog-index',
    name: 'BlogIndexTemplate',
    category: 'Templates',
    filePath: '/src/app/components/templates/BlogIndexTemplate.tsx',
    cssPath: '/src/styles/templates/blog-index.css',
    description: 'Blog listing page. Category filters, paginated post grid, featured posts highlight. WordPress template: index.html / home.html.',
    props: [],
    importStatement: "import { BlogIndexTemplate } from './BlogIndexTemplate';",
    usageExample: `{/* Loaded via React Router at path "/blog" */}`,
    seeAlso: ['SinglePostTemplate', 'CategoryArchiveTemplate', 'FAQSection'],
  },
  {
    id: 'services-landing',
    name: 'ServicesLandingTemplate',
    category: 'Templates',
    filePath: '/src/app/components/templates/ServicesLandingTemplate.tsx',
    cssPath: '/src/styles/templates/services-landing.css',
    description: 'Services overview page. Grid of all service offerings with icons, descriptions, and navigation to individual service pages. WordPress template: page-services.html.',
    props: [],
    importStatement: "import { ServicesLandingTemplate } from './ServicesLandingTemplate';",
    usageExample: `{/* Loaded via React Router at path "/services" */}`,
    seeAlso: ['DesignServiceTemplate', 'DevelopmentServiceTemplate', 'DiscoveryServiceTemplate'],
  },
  {
    id: 'portfolio-archive',
    name: 'PortfolioArchiveTemplate',
    category: 'Templates',
    filePath: '/src/app/components/templates/PortfolioArchiveTemplate.tsx',
    cssPath: '/src/styles/templates/portfolio-archive.css',
    description: 'Portfolio archive page. Filterable project grid with industry/category filters, clickable cards with dynamic slug navigation. WordPress template: archive-portfolio.html.',
    props: [],
    importStatement: "import { PortfolioArchiveTemplate } from './PortfolioArchiveTemplate';",
    usageExample: `{/* Loaded via React Router at path "/portfolio" */}`,
    seeAlso: ['PortfolioSingleTemplate', 'PortfolioCategoryArchiveTemplate'],
  },
  {
    id: 'contact-page',
    name: 'ContactPageTemplate',
    category: 'Templates',
    filePath: '/src/app/components/templates/ContactPageTemplate.tsx',
    cssPath: '/src/styles/templates/contact-page.css',
    description: 'Contact page with form, validation, contact info sidebar, map placeholder, and FAQ section. WordPress template: page-contact.html.',
    props: [],
    importStatement: "import { ContactPageTemplate } from './ContactPageTemplate';",
    usageExample: `{/* Loaded via React Router at path "/contact" */}`,
    seeAlso: ['FAQSection', 'CTASection'],
  },
];
