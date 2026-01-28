/**
 * Theme Blocks — Integration Examples & Testing
 * 
 * This file contains comprehensive examples showing how to use
 * theme blocks in real-world scenarios. These examples serve as
 * both documentation and testing templates.
 * 
 * **Categories:**
 * 1. Header Examples
 * 2. Footer Examples
 * 3. Navigation Examples
 * 4. Search Examples
 * 5. Complete Page Templates
 * 
 * @see /PHASE-3-INTEGRATION-COMPLETE-DEC-26.md
 */

import React from 'react';
import {
  TemplatePart,
  SiteLogo,
  SiteTitle,
  SiteTagline,
  Navigation,
  Search,
  type NavMenuItem
} from '../index';
import { Row, Stack, Grid } from '../../design';

// ============================================================================
// EXAMPLE 1: Simple Header with Theme Blocks
// ============================================================================

/**
 * Simple Site Header using Theme Blocks
 * 
 * Demonstrates basic composition of theme blocks for a clean,
 * accessible header without mega menus.
 * 
 * **Features:**
 * - SiteLogo with home link
 * - SiteTitle for brand name
 * - Horizontal navigation
 * - Sticky positioning
 * - Backdrop blur effect
 * 
 * **Design System:**
 * - Uses CSS variables for all colors
 * - Tailwind classes for spacing
 * - Responsive layout
 */
export function SimpleHeaderExample() {
  // Sample navigation menu
  const navMenu: NavMenuItem[] = [
    { id: 'home', title: 'Home', url: '/', isActive: true },
    { id: 'services', title: 'Services', url: '/services' },
    { id: 'portfolio', title: 'Portfolio', url: '/portfolio' },
    { id: 'about', title: 'About', url: '/about' },
    { id: 'contact', title: 'Contact', url: '/contact' }
  ];

  return (
    <TemplatePart 
      name="header-simple" 
      area="header" 
      ariaLabel="Site header"
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border-soft)',
        backdropFilter: 'blur(12px)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <Row 
        justify="space-between" 
        align="center" 
        className="px-6 py-4"
      >
        {/* Brand Section */}
        <div className="flex items-center gap-4">
          <SiteLogo 
            alt="LSX Design Logo" 
            width="150px" 
            linkHref="/"
            linkLabel="Return to homepage"
          />
          <SiteTitle tag="h2" linkHref="/">
            LSX Design
          </SiteTitle>
        </div>

        {/* Navigation */}
        <Navigation 
          menu={navMenu}
          orientation="horizontal"
          spacing="gap-8"
          ariaLabel="Main navigation"
        />
      </Row>
    </TemplatePart>
  );
}

// ============================================================================
// EXAMPLE 2: Header with Search
// ============================================================================

/**
 * Header with Integrated Search
 * 
 * Shows how to combine navigation and search functionality
 * using theme blocks.
 * 
 * **Features:**
 * - Search with inside button position
 * - Icon-only search button
 * - Navigation with submenus
 * - Logo branding
 */
export function HeaderWithSearchExample() {
  const navMenu: NavMenuItem[] = [
    { id: 'home', title: 'Home', url: '/' },
    {
      id: 'services',
      title: 'Services',
      url: '/services',
      children: [
        { id: 'dev', title: 'Development', url: '/services/development' },
        { id: 'design', title: 'Design', url: '/services/design' },
        { id: 'hosting', title: 'Hosting', url: '/services/hosting' }
      ]
    },
    { id: 'portfolio', title: 'Portfolio', url: '/portfolio' },
    { id: 'contact', title: 'Contact', url: '/contact' }
  ];

  const handleSearch = (query: string) => {
    // console.log('Searching for:', query);
    // Navigate to search results page
  };

  return (
    <TemplatePart 
      name="header-with-search" 
      area="header"
      ariaLabel="Site header"
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border-soft)'
      }}
    >
      <Row 
        justify="space-between" 
        align="center" 
        className="px-6 py-4 gap-8"
      >
        {/* Logo */}
        <SiteLogo alt="LSX Design" width="140px" />

        {/* Navigation */}
        <Navigation 
          menu={navMenu}
          spacing="gap-6"
        />

        {/* Search */}
        <Search 
          placeholder="Search…"
          buttonPosition="inside"
          buttonLabel=""
          showIcon={true}
          onSubmit={handleSearch}
          style={{ maxWidth: '280px' }}
        />
      </Row>
    </TemplatePart>
  );
}

// ============================================================================
// EXAMPLE 3: Simple Footer with Theme Blocks
// ============================================================================

/**
 * Simple Site Footer using Theme Blocks
 * 
 * Demonstrates footer composition with proper semantic structure
 * and accessible navigation.
 * 
 * **Features:**
 * - SiteLogo with dark theme
 * - SiteTagline for description
 * - Multiple navigation columns
 * - Copyright notice
 * - Responsive grid layout
 */
export function SimpleFooterExample() {
  // Footer navigation columns
  const servicesMenu: NavMenuItem[] = [
    { id: 'wp-dev', title: 'WordPress Development', url: '/services' },
    { id: 'woo', title: 'WooCommerce Solutions', url: '/services' },
    { id: 'hosting', title: 'WordPress Hosting', url: '/hosting' },
    { id: 'blocks', title: 'Block Theme Development', url: '/services' }
  ];

  const companyMenu: NavMenuItem[] = [
    { id: 'about', title: 'About Us', url: '/about' },
    { id: 'portfolio', title: 'Portfolio', url: '/portfolio' },
    { id: 'blog', title: 'Blog', url: '/blog' },
    { id: 'team', title: 'Our Team', url: '/team' }
  ];

  const supportMenu: NavMenuItem[] = [
    { id: 'contact', title: 'Contact', url: '/contact' },
    { id: 'faq', title: 'FAQs', url: '/faq' },
    { id: 'help', title: 'Help Center', url: '/contact' }
  ];

  return (
    <TemplatePart 
      name="footer-simple" 
      area="footer"
      ariaLabel="Site footer"
      className="py-16"
      style={{
        backgroundColor: 'var(--sidebar)',
        color: 'var(--sidebar-foreground)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <Grid 
          cols={{ base: 1, md: 2, lg: 4 }} 
          gap="gap-12"
          className="mb-12"
        >
          {/* Brand Column */}
          <Stack gap="gap-6">
            <SiteLogo 
              alt="LSX Design" 
              width="140px" 
              theme="dark"
              linkHref="/"
            />
            <SiteTagline>
              Expert WordPress and WooCommerce development for modern, 
              accessible, high-performance websites.
            </SiteTagline>
          </Stack>

          {/* Services Navigation */}
          <div>
            <h3 
              className="mb-4"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h4)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--sidebar-foreground)'
              }}
            >
              Services
            </h3>
            <Navigation 
              menu={servicesMenu}
              orientation="vertical"
              spacing="gap-3"
              ariaLabel="Services navigation"
            />
          </div>

          {/* Company Navigation */}
          <div>
            <h3 
              className="mb-4"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h4)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--sidebar-foreground)'
              }}
            >
              Company
            </h3>
            <Navigation 
              menu={companyMenu}
              orientation="vertical"
              spacing="gap-3"
              ariaLabel="Company navigation"
            />
          </div>

          {/* Support Navigation */}
          <div>
            <h3 
              className="mb-4"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h4)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--sidebar-foreground)'
              }}
            >
              Support
            </h3>
            <Navigation 
              menu={supportMenu}
              orientation="vertical"
              spacing="gap-3"
              ariaLabel="Support navigation"
            />
          </div>
        </Grid>

        {/* Footer Bottom */}
        <div 
          className="pt-8"
          style={{
            borderTop: '1px solid var(--border-soft)'
          }}
        >
          <Row justify="space-between" align="center">
            <p 
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--sidebar-foreground)',
                opacity: 0.7,
                margin: 0
              }}
            >
              © {new Date().getFullYear()} LSX Design. All rights reserved.
            </p>
          </Row>
        </div>
      </div>
    </TemplatePart>
  );
}

// ============================================================================
// EXAMPLE 4: Complete Page Template
// ============================================================================

/**
 * Complete Page Template Example
 * 
 * Shows how to compose a full page using theme blocks for
 * header and footer, with main content in between.
 * 
 * **Structure:**
 * - Header (TemplatePart)
 * - Main Content (semantic <main>)
 * - Footer (TemplatePart)
 */
export function CompletePageTemplateExample() {
  const navMenu: NavMenuItem[] = [
    { id: 'home', title: 'Home', url: '/' },
    { id: 'services', title: 'Services', url: '/services' },
    { id: 'portfolio', title: 'Portfolio', url: '/portfolio' },
    { id: 'about', title: 'About', url: '/about' },
    { id: 'contact', title: 'Contact', url: '/contact' }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <TemplatePart name="header" area="header" ariaLabel="Site header">
        <Row 
          justify="space-between" 
          align="center" 
          className="px-6 py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <div className="flex items-center gap-4">
            <SiteLogo alt="LSX Design" width="150px" />
            <SiteTitle tag="h2">LSX Design</SiteTitle>
          </div>
          <Navigation menu={navMenu} spacing="gap-8" />
        </Row>
      </TemplatePart>

      {/* Main Content */}
      <main 
        style={{ flex: 1 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h1)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              marginBottom: '24px'
            }}
          >
            Page Content
          </h1>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-lg)',
              color: 'var(--foreground)',
              lineHeight: 'var(--line-height-relaxed)'
            }}
          >
            Your page content goes here. This example demonstrates how to
            compose a complete page template using theme blocks for the
            header and footer, with semantic HTML for the main content area.
          </p>
        </div>
      </main>

      {/* Footer */}
      <TemplatePart 
        name="footer" 
        area="footer" 
        ariaLabel="Site footer"
        className="py-12"
        style={{
          backgroundColor: 'var(--sidebar)',
          color: 'var(--sidebar-foreground)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <Stack gap="gap-8">
            <SiteLogo alt="LSX Design" width="140px" theme="dark" />
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--sidebar-foreground)',
                opacity: 0.8,
                margin: 0
              }}
            >
              © {new Date().getFullYear()} LSX Design. All rights reserved.
            </p>
          </Stack>
        </div>
      </TemplatePart>
    </div>
  );
}

// ============================================================================
// EXAMPLE 5: Navigation Testing
// ============================================================================

/**
 * Navigation Block Testing Example
 * 
 * Demonstrates how to test the Navigation block component
 * for accessibility and functionality.
 * 
 * **Test Cases:**
 * - Horizontal navigation
 * - Vertical navigation
 * - Centered navigation
 * - Navigation with submenus
 * - Active state indicators
 */
export function NavigationTestExample() {
  const testMenu: NavMenuItem[] = [
    {
      id: 'home',
      title: 'Home',
      url: '/',
      isActive: true
    },
    {
      id: 'services',
      title: 'Services',
      url: '/services',
      children: [
        { id: 'dev', title: 'Development', url: '/services/development' },
        { id: 'design', title: 'Design', url: '/services/design' },
        { id: 'hosting', title: 'Hosting', url: '/services/hosting' }
      ]
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      url: '/portfolio'
    },
    {
      id: 'contact',
      title: 'Contact',
      url: '/contact'
    }
  ];

  return (
    <div className="p-8">
      <h2 
        className="mb-8"
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h2)',
          fontWeight: 'var(--font-weight-semibold)'
        }}
      >
        Navigation Block Tests
      </h2>

      {/* Horizontal Navigation */}
      <div className="mb-12">
        <h3 
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          Horizontal Navigation
        </h3>
        <Navigation 
          menu={testMenu}
          orientation="horizontal"
          spacing="gap-6"
          align="flex-start"
          ariaLabel="Test horizontal navigation"
        />
      </div>

      {/* Vertical Navigation */}
      <div className="mb-12">
        <h3 
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          Vertical Navigation
        </h3>
        <Navigation 
          menu={testMenu}
          orientation="vertical"
          spacing="gap-4"
          ariaLabel="Test vertical navigation"
        />
      </div>

      {/* Centered Navigation */}
      <div className="mb-12">
        <h3 
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          Centered Navigation
        </h3>
        <Navigation 
          menu={testMenu}
          orientation="horizontal"
          spacing="gap-8"
          align="center"
          ariaLabel="Test centered navigation"
        />
      </div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 6: Search Testing
// ============================================================================

/**
 * Search Block Testing Example
 * 
 * Demonstrates different Search block configurations.
 * 
 * **Test Cases:**
 * - Search with outside button
 * - Search with inside button
 * - Icon-only search
 * - Centered search
 * - Different alignments
 */
export function SearchTestExample() {
  const handleSearch = (query: string) => {
    // console.log('Search query:', query);
  };

  return (
    <div className="p-8">
      <h2 
        className="mb-8"
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-h2)',
          fontWeight: 'var(--font-weight-semibold)'
        }}
      >
        Search Block Tests
      </h2>

      {/* Search with outside button */}
      <div className="mb-12">
        <h3 
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          Search with Outside Button
        </h3>
        <Search 
          placeholder="Search articles…"
          buttonPosition="outside"
          buttonLabel="Search"
          showIcon={true}
          onSubmit={handleSearch}
        />
      </div>

      {/* Search with inside button */}
      <div className="mb-12">
        <h3 
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          Search with Inside Button (Icon Only)
        </h3>
        <Search 
          placeholder="Search…"
          buttonPosition="inside"
          buttonLabel=""
          showIcon={true}
          onSubmit={handleSearch}
        />
      </div>

      {/* Centered search */}
      <div className="mb-12">
        <h3 
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          Centered Search
        </h3>
        <Search 
          placeholder="Search the site…"
          buttonPosition="outside"
          buttonLabel="Search"
          showIcon={true}
          align="center"
          onSubmit={handleSearch}
        />
      </div>
    </div>
  );
}

// ============================================================================
// Export all examples
// ============================================================================

export const ThemeBlocksExamples = {
  SimpleHeaderExample,
  HeaderWithSearchExample,
  SimpleFooterExample,
  CompletePageTemplateExample,
  NavigationTestExample,
  SearchTestExample
};
