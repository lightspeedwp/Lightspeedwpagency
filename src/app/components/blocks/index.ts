/**
 * WordPress Blocks - React Component Library
 * 
 * This folder contains React implementations of WordPress core blocks and LSX custom blocks.
 * Each block is organized by its WordPress category (Design, Text, Media, Theme, etc.)
 * and follows the design system requirements defined in the guidelines.
 * 
 * Structure mirrors WordPress block categories:
 * - design/ - Design blocks (Buttons, Group, Grid, Stack, Row, Columns)
 * - theme/ - Theme blocks (Site Logo, Site Title, Site Tagline, Navigation, Search, Template Part)
 * - feedback/ - Feedback blocks (Alert, Dialog, Toast)
 * - navigation/ - Navigation blocks (Accordion, Breadcrumbs, Tabs, MegaMenu)
 * - utility/ - Utility blocks (Tooltip, Popover, DropdownMenu)
 * - forms/ - Form blocks (ContactForm, SearchForm, NewsletterForm, FormField)
 * - data-display/ - Data display blocks (DataTable, StatsCard, ProgressBar)
 * - ecommerce/ - E-commerce blocks (ProductGrid, ProductReviews, ShoppingCart, etc.)
 * - media/ - Media blocks (ImageGallery, VideoPlayer, Lightbox)
 * - dev-tools/ - Development tools (ComponentPlayground, ComplianceScorecard, etc.)
 * - layout/ - Layout blocks (BackToTopButton, ScrollProgress, ErrorBoundary, etc.)
 * 
 * @see /guidelines/blocks/
 * @see /THEME-BLOCKS-GUIDELINES-COMPLETE-DEC-26.md
 * @see /COMPONENT-REORGANIZATION-COMPLETE-DEC-30.md
 */

// ============================================================================
// DESIGN BLOCKS (WordPress core design blocks)
// ============================================================================
export * from './design';

// ============================================================================
// THEME BLOCKS (WordPress theme blocks)
// ============================================================================
export * from './theme';

// ============================================================================
// FEEDBACK COMPONENTS
// ============================================================================
export * from './feedback/Alert';
export * from './feedback/SkeletonLoader';
export * from './feedback/EmptyStates';
export * from './feedback/ToastSystem';
export * from './feedback/ModalVariants';
// export * from './feedback/Dialog';  // TODO: Move from /ui
// export * from './feedback/Toast';   // TODO: Move from /ui

// ============================================================================
// NAVIGATION COMPONENTS
// ============================================================================
export * from './navigation/Breadcrumbs';
export * from './navigation/BreadcrumbsBar';
export * from './navigation/Tabs';
export * from './navigation/Accordion';
export * from './navigation/Pagination';
export * from './navigation/SocialLinks';
// export * from './navigation/MegaMenu';     // TODO: Move from /ui

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================
export * from './utility/Tooltip';
export * from './utility/Popover';
export * from './utility/DropdownMenu';
export * from './utility/Badge';
// export * from './utility/...';       // TODO: Add more utilities

// ============================================================================
// FORM COMPONENTS
// ============================================================================
export * from './forms/MultiStepForm';
export * from './forms/FormField';
export * from './forms/ContactForm';
// export * from './forms/SearchForm';      // TODO: Create
// export * from './forms/NewsletterForm';  // TODO: Create

// ============================================================================
// DATA DISPLAY COMPONENTS
// ============================================================================
export * from './data-display/Table';
// export * from './data-display/DataTable';     // TODO: Move from /ui
// export * from './data-display/StatsCard';     // TODO: Move from /ui
// Note: ProgressBar removed (not used in LSX Design system)

// ============================================================================
// E-COMMERCE COMPONENTS
// ============================================================================
// Note: E-commerce components removed (not needed for WordPress agency site)
// If needed in future, can be re-created in /blocks/ecommerce/

// ============================================================================
// MEDIA COMPONENTS
// ============================================================================
export * from './media/OptimizedImage';
// Note: ImageGallery, VideoPlayer, Lightbox removed (WordPress handles media through core blocks)

// ============================================================================
// DEV TOOLS COMPONENTS
// ============================================================================
export * from './dev-tools/PerformanceMonitor';
// export * from './dev-tools/ComponentPlayground';    // TODO: Move from /ui
// export * from './dev-tools/ComplianceScorecard';    // TODO: Move from /ui
// export * from './dev-tools/DesignSystemTest';       // TODO: Move from /ui
// export * from './dev-tools/DevToolsHeader';         // TODO: Move from /ui
// export * from './dev-tools/DevToolsFilterToolbar';  // TODO: Move from /ui
// export * from './dev-tools/PageSwitcher';           // TODO: Move from /ui
// export * from './dev-tools/StyleSwitcher';          // TODO: Move from /ui

// ============================================================================
// LAYOUT COMPONENTS
// ============================================================================
export * from './layout/BackToTopButton';
export * from './layout/Skeleton';
export * from './layout/ScrollProgress';
export * from './layout/StickyBookCallButton';
export * from './layout/ScrollDownArrow';
export * from './layout/KeyboardShortcuts';
export * from './layout/ErrorBoundary';
// export * from './layout/EnquiryModal';         // TODO: Move from /ui
// export * from './layout/AdvancedFilters';      // TODO: Move from /ui