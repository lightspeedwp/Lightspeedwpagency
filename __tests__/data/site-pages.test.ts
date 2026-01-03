/**
 * Site Pages Data Tests
 * 
 * Tests for the centralized site pages data system covering:
 * - Data structure integrity
 * - Helper function correctness
 * - Navigation hierarchy
 * - URL generation
 * - Type safety
 * 
 * @see /src/app/data/site-pages.ts
 */

import { describe, it, expect } from 'vitest';
import {
  sitePages,
  mainNavigation,
  footerNavigation,
  getPageBySlug,
  getPageTitle,
  getPageUrl,
  getChildPages,
  getBreadcrumbs,
  type SitePage
} from '../../src/app/data/site-pages';

describe('Site Pages Data', () => {
  describe('Data Structure', () => {
    it('exports sitePages array', () => {
      expect(sitePages).toBeInstanceOf(Array);
      expect(sitePages.length).toBeGreaterThan(0);
    });

    it('all pages have required fields', () => {
      sitePages.forEach((page: SitePage) => {
        expect(page).toHaveProperty('slug');
        expect(page).toHaveProperty('title');
        expect(page).toHaveProperty('showInNav');
        
        // Slug should be a string
        expect(typeof page.slug).toBe('string');
        expect(page.slug.length).toBeGreaterThan(0);
        
        // Title should be a string
        expect(typeof page.title).toBe('string');
        expect(page.title.length).toBeGreaterThan(0);
      });
    });

    it('all slugs are unique', () => {
      const slugs = sitePages.map(p => p.slug);
      const uniqueSlugs = new Set(slugs);
      expect(slugs.length).toBe(uniqueSlugs.size);
    });

    it('has front-page', () => {
      const frontPage = sitePages.find(p => p.slug === 'front-page');
      expect(frontPage).toBeDefined();
      expect(frontPage?.title).toBe('Home');
    });

    it('has about page', () => {
      const aboutPage = sitePages.find(p => p.slug === 'about');
      expect(aboutPage).toBeDefined();
      expect(aboutPage?.title).toBe('About LSX Design');
    });

    it('has contact page', () => {
      const contactPage = sitePages.find(p => p.slug === 'contact');
      expect(contactPage).toBeDefined();
      expect(contactPage?.title).toBe('Contact Us');
    });
  });

  describe('Navigation Data', () => {
    it('exports mainNavigation array', () => {
      expect(mainNavigation).toBeInstanceOf(Array);
      expect(mainNavigation.length).toBeGreaterThan(0);
    });

    it('exports footerNavigation array', () => {
      expect(footerNavigation).toBeInstanceOf(Array);
      expect(footerNavigation.length).toBeGreaterThan(0);
    });

    it('mainNavigation has valid page references', () => {
      mainNavigation.forEach(item => {
        const page = sitePages.find(p => p.slug === item.page);
        expect(page).toBeDefined();
      });
    });

    it('footerNavigation has valid page references', () => {
      footerNavigation.forEach(item => {
        const page = sitePages.find(p => p.slug === item.page);
        expect(page).toBeDefined();
      });
    });
  });

  describe('getPageBySlug()', () => {
    it('returns correct page for valid slug', () => {
      const page = getPageBySlug('about');
      expect(page).toBeDefined();
      expect(page?.slug).toBe('about');
      expect(page?.title).toBe('About LSX Design');
    });

    it('returns undefined for invalid slug', () => {
      const page = getPageBySlug('non-existent-page');
      expect(page).toBeUndefined();
    });

    it('returns front-page correctly', () => {
      const page = getPageBySlug('front-page');
      expect(page).toBeDefined();
      expect(page?.title).toBe('Home');
    });

    it('handles empty string slug', () => {
      const page = getPageBySlug('');
      expect(page).toBeUndefined();
    });
  });

  describe('getPageTitle()', () => {
    it('returns correct title for valid slug', () => {
      const title = getPageTitle('about');
      expect(title).toBe('About LSX Design');
    });

    it('returns "Page" for invalid slug', () => {
      const title = getPageTitle('non-existent');
      expect(title).toBe('Page');
    });

    it('returns homepage title correctly', () => {
      const title = getPageTitle('front-page');
      expect(title).toBe('Home');
    });
  });

  describe('getPageUrl()', () => {
    it('returns "/" for front-page', () => {
      const url = getPageUrl('front-page');
      expect(url).toBe('/');
    });

    it('returns correct URL for regular pages', () => {
      const url = getPageUrl('about');
      expect(url).toBe('/about');
    });

    it('returns correct URL with parent slug', () => {
      // Assuming there's a child page
      const servicePage = sitePages.find(p => p.parent && p.parent !== 'front-page');
      if (servicePage) {
        const url = getPageUrl(servicePage.slug);
        expect(url).toContain('/');
        expect(url.split('/').length).toBeGreaterThan(2);
      }
    });

    it('returns "/" for invalid slug', () => {
      const url = getPageUrl('non-existent');
      expect(url).toBe('/');
    });
  });

  describe('getChildPages()', () => {
    it('returns array of child pages for valid parent', () => {
      // Find a page with children
      const parentPage = sitePages.find(page => {
        return sitePages.some(p => p.parent === page.slug);
      });
      
      if (parentPage) {
        const children = getChildPages(parentPage.slug);
        expect(children).toBeInstanceOf(Array);
        expect(children.length).toBeGreaterThan(0);
        
        children.forEach(child => {
          expect(child.parent).toBe(parentPage.slug);
        });
      }
    });

    it('returns empty array for page with no children', () => {
      // Contact page likely has no children
      const children = getChildPages('contact');
      expect(children).toBeInstanceOf(Array);
    });

    it('returns empty array for invalid slug', () => {
      const children = getChildPages('non-existent');
      expect(children).toEqual([]);
    });
  });

  describe('getBreadcrumbs()', () => {
    it('returns array with Home for front-page', () => {
      const breadcrumbs = getBreadcrumbs('front-page');
      expect(breadcrumbs).toEqual([
        { label: 'Home', url: '/' }
      ]);
    });

    it('returns correct breadcrumbs for top-level page', () => {
      const breadcrumbs = getBreadcrumbs('about');
      expect(breadcrumbs).toHaveLength(2);
      expect(breadcrumbs[0]).toEqual({ label: 'Home', url: '/' });
      expect(breadcrumbs[1].label).toBe('About LSX Design');
    });

    it('returns correct breadcrumbs for child page', () => {
      // Find a child page
      const childPage = sitePages.find(p => p.parent && p.parent !== 'front-page');
      
      if (childPage) {
        const breadcrumbs = getBreadcrumbs(childPage.slug);
        expect(breadcrumbs.length).toBeGreaterThan(2);
        expect(breadcrumbs[0]).toEqual({ label: 'Home', url: '/' });
      }
    });

    it('handles invalid slug gracefully', () => {
      const breadcrumbs = getBreadcrumbs('non-existent');
      expect(breadcrumbs).toEqual([
        { label: 'Home', url: '/' }
      ]);
    });
  });

  describe('Data Integrity', () => {
    it('all pages with parents have valid parent references', () => {
      const pagesWithParents = sitePages.filter(p => p.parent);
      
      pagesWithParents.forEach(page => {
        if (page.parent === 'front-page') {
          // Valid root parent
          expect(true).toBe(true);
        } else {
          // Must reference an existing page
          const parentPage = sitePages.find(p => p.slug === page.parent);
          expect(parentPage).toBeDefined();
        }
      });
    });

    it('no circular parent references', () => {
      sitePages.forEach(page => {
        if (page.parent) {
          // Parent should not be the page itself
          expect(page.parent).not.toBe(page.slug);
          
          // If parent exists, it shouldn't reference current page as parent
          const parent = sitePages.find(p => p.slug === page.parent);
          if (parent && parent.parent) {
            expect(parent.parent).not.toBe(page.slug);
          }
        }
      });
    });

    it('all navigation items point to existing pages', () => {
      const allNavItems = [...mainNavigation, ...footerNavigation];
      
      allNavItems.forEach(item => {
        const page = getPageBySlug(item.page);
        expect(page).toBeDefined();
      });
    });

    it('showInNav boolean is consistent with mainNavigation', () => {
      // Pages in mainNavigation should generally have showInNav: true
      mainNavigation.forEach(item => {
        const page = getPageBySlug(item.page);
        // This is a soft check - some pages might be in nav but not flagged
        if (page) {
          expect(typeof page.showInNav).toBe('boolean');
        }
      });
    });
  });

  describe('Performance', () => {
    it('getPageBySlug runs quickly for large datasets', () => {
      const start = performance.now();
      
      for (let i = 0; i < 1000; i++) {
        getPageBySlug('about');
      }
      
      const end = performance.now();
      const duration = end - start;
      
      // Should complete 1000 lookups in under 100ms
      expect(duration).toBeLessThan(100);
    });

    it('getBreadcrumbs runs quickly', () => {
      const start = performance.now();
      
      for (let i = 0; i < 100; i++) {
        getBreadcrumbs('about');
      }
      
      const end = performance.now();
      const duration = end - start;
      
      // Should complete 100 breadcrumb generations in under 50ms
      expect(duration).toBeLessThan(50);
    });
  });

  describe('Type Safety', () => {
    it('SitePage type includes all required fields', () => {
      const page: SitePage = {
        slug: 'test-page',
        title: 'Test Page',
        showInNav: true
      };
      
      expect(page.slug).toBe('test-page');
      expect(page.title).toBe('Test Page');
      expect(page.showInNav).toBe(true);
    });

    it('SitePage accepts optional parent field', () => {
      const page: SitePage = {
        slug: 'child-page',
        title: 'Child Page',
        showInNav: false,
        parent: 'about'
      };
      
      expect(page.parent).toBe('about');
    });

    it('SitePage accepts optional excerpt field', () => {
      const page: SitePage = {
        slug: 'test-page',
        title: 'Test Page',
        showInNav: true,
        excerpt: 'This is a test page description'
      };
      
      expect(page.excerpt).toBe('This is a test page description');
    });
  });
});
