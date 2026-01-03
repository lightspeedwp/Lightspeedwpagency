/**
 * Page Switcher UI Component
 * 
 * Non-WordPress component: UI utility for prototype navigation.
 * Allows switching between different template examples.
 */

import { useState } from 'react';
import { Button } from '../blocks/design/Buttons';

interface PageSwitcherProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function PageSwitcher({ currentPage, onPageChange }: PageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Organized page groups for better navigation
  const pageGroups = [
    {
      label: 'Core Pages',
      pages: [
        { id: 'front-page', label: 'Home (Front Page)' },
        { id: 'about', label: 'About' },
        { id: 'about-process', label: 'About: Our Process' },
        { id: 'about-culture', label: 'About: Our Culture' },
        { id: 'about-history', label: 'About: Our History' },
        { id: 'team', label: 'Team' },
        { id: 'services', label: 'Services' },
        { id: 'solutions', label: 'Solutions' },
        { id: 'hosting', label: 'Hosting' },
        { id: 'why-choose-us', label: 'Why Choose Us' },
        { id: 'guarantees', label: 'Guarantees' },
        { id: 'pricing', label: '💰 Pricing' },
        { id: 'roi-calculator', label: '📊 ROI Calculator' },
        { id: 'testimonials', label: '⭐ Testimonials' },
        { id: 'contact', label: 'Contact Page' },
        { id: 'faq', label: 'FAQ' },
        { id: 'style-guide', label: 'Style Guide' },
        { id: 'section-style-example', label: '🎨 Section Styles Example' },
      ]
    },
    {
      label: 'Blog & Archives',
      pages: [
        { id: 'blog', label: 'Blog Index' },
        { id: 'index', label: 'Latest News' },
        { id: 'archive', label: 'Archive (Basic)' },
        { id: 'archive-filters', label: 'Archive (Filters)' },
        { id: 'tag-gutenberg', label: 'Tag: Gutenberg' },
        { id: 'tag-performance', label: 'Tag: Performance' },
        { id: 'date-2024', label: 'Date: 2024' },
        { id: 'date-2024-12', label: 'Date: December 2024' },
        { id: 'search-page', label: 'Search Results' },
      ]
    },
    {
      label: 'Category Archives',
      pages: [
        { id: 'category-news', label: 'Category: News' },
        { id: 'category-updates', label: 'Category: Updates' },
        { id: 'category-tutorials', label: 'Category: Tutorials' },
        { id: 'category-design-insights', label: 'Category: Design Insights' },
      ]
    },
    {
      label: 'Author Archives',
      pages: [
        { id: 'author-editor', label: 'Author: Editor' },
        { id: 'author-contributor', label: 'Author: Contributor' },
        { id: 'author', label: 'Author Archive (Default)' },
      ]
    },
    {
      label: 'Single Posts',
      pages: [
        { id: 'post-design-system-guide', label: 'Post: Design System Guide' },
        { id: 'post-web-performance', label: 'Post: Web Performance' },
        { id: 'post-accessibility-tips', label: 'Post: Accessibility Tips' },
        { id: 'single-post', label: 'Single Post (Longform)' },
        { id: 'single', label: 'Single (Detail)' },
      ]
    },
    {
      label: 'Portfolio',
      pages: [
        { id: 'portfolio-archive', label: 'Portfolio Archive' },
        { id: 'portfolio-single-eco-market-woocommerce', label: 'Project: EcoMarket' },
        { id: 'portfolio-single-healthfirst-wellness-portal', label: 'Project: HealthFirst' },
        { id: 'portfolio-single-wanderlust-travel-booking', label: 'Project: Wanderlust' },
        { id: 'portfolio-single-techstartup-magazine', label: 'Project: TechStartup' },
        { id: 'portfolio-single-oceanview-real-estate', label: 'Project: OceanView' },
        { id: 'portfolio-single-nonprofit-foundation', label: 'Project: Global Education' },
      ]
    },
    {
      label: 'Utility Pages',
      pages: [
        { id: '404', label: '404 Error' },
        { id: 'template-tester', label: '📋 Template Tester' },
        { id: 'component-showcase', label: '🧩 Component Showcase' },
        { id: 'feature-showcase', label: '✨ Feature Showcase' },
        { id: 'design-system-test', label: '🎨 Design System Test' },
      ]
    },
    {
      label: 'Developer Tools',
      pages: [
        { id: 'dev-tools', label: '🛠️ Dev Tools Hub' },
        { id: 'dev-tools/template-tester', label: '📋 Template Tester' },
        { id: 'dev-tools/design-system-test', label: '🎨 Design System Test' },
        { id: 'dev-tools/component-showcase', label: '🧩 Component Showcase' },
        { id: 'dev-tools/compliance-scorecard', label: '✅ Compliance Scorecard' },
        { id: 'dev-tools/feature-showcase', label: '✨ Feature Showcase' },
        { id: 'dev-tools/block-documentation', label: '📄 Block Documentation' },
        { id: 'dev-tools/component-api', label: '📋 Component API' },
        { id: 'dev-tools/design-blocks-showcase', label: '🎨 Design Blocks' },
        { id: 'dev-tools/button-showcase', label: '🔘 Button Showcase' },
        { id: 'dev-tools/header-footer-comparison', label: '🔀 Header/Footer Comparison' },
        { id: 'dev-tools/icon-library', label: '🎨 Icon Library' },
        { id: 'dev-tools/live-preview', label: '👁️ Live Preview' },
        { id: 'dev-tools/section-presets-showcase', label: '✨ Section Presets' },
      ]
    },
  ];

  // Flatten all pages for finding current page label
  const allPages = pageGroups.flatMap(group => group.pages);
  const currentPageLabel = allPages.find(p => p.id === currentPage)?.label || 'View Templates';

  return (
    <div 
      style={{
        position: 'relative',
        display: 'inline-block'
      }}
    >
      {/* Page Selector Dropdown - Opens UPWARD */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            right: 0,
            backgroundColor: 'var(--background)',
            border: '1px solid var(--border-soft)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-lg)',
            minWidth: '280px',
            maxWidth: '320px',
            maxHeight: '600px',
            overflowY: 'auto',
            zIndex: 10
          }}
        >
          {pageGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {/* Group Label */}
              <div 
                className="px-4 py-2"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  backgroundColor: 'var(--muted)',
                  borderTop: groupIndex > 0 ? '1px solid var(--border-extra-soft)' : 'none',
                }}
              >
                {group.label}
              </div>

              {/* Group Pages */}
              {group.pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onPageChange(page.id);
                    setIsOpen(false);
                  }}
                  className="py-2.5 px-4 pl-6"
                  style={{
                    width: '100%',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: currentPage === page.id 
                      ? 'var(--font-weight-medium)' 
                      : 'var(--font-weight-regular)',
                    textAlign: 'left',
                    backgroundColor: currentPage === page.id 
                      ? 'var(--primary)' 
                      : 'transparent',
                    color: currentPage === page.id 
                      ? 'var(--primary-foreground)' 
                      : 'var(--foreground)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== page.id) {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                      e.currentTarget.style.paddingLeft = '28px';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== page.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.paddingLeft = '24px';
                    }
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = '2px solid var(--ring)';
                    e.currentTarget.style.outlineOffset = '-2px';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = 'none';
                  }}
                >
                  {page.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select template to view"
        aria-expanded={isOpen}
        className="px-4 py-3"
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-medium)',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          border: 'none',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          minWidth: '200px',
          justifyContent: 'space-between',
          transition: 'all 0.2s ease',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
        }}
        onFocus={(e) => {
          e.currentTarget.style.outline = '2px solid var(--ring)';
          e.currentTarget.style.outlineOffset = '2px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
      >
        <span style={{ 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap' 
        }}>
          {currentPageLabel}
        </span>
        <span 
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
            transition: 'transform 0.2s ease',
            fontSize: 'var(--text-tiny)',
            flexShrink: 0,
          }}
        >
          ▼
        </span>
      </Button>
    </div>
  );
}