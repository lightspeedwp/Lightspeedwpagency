/**
 * Archive with Filters Template
 * 
 * WordPress template: templates/archive.html (with filtering)
 * 
 * Enhanced content hub archetype with category filtering.
 * Pattern order: Archive Header → Filter Bar → Card Grid → Pagination
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { FilterBar } from '../patterns/FilterBar';
import { CardGrid } from '../patterns/CardGrid';
import { PaginationNav } from '../patterns/PaginationNav';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { generalArchiveCTA } from '../../data/cta';
import { useState } from 'react';

// Mock data for prototype
const allProjects = [
  {
    id: '1',
    title: 'Enterprise E-commerce Platform',
    excerpt: 'Scalable headless commerce solution with custom checkout experience.',
    category: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    href: '#enterprise-ecommerce',
    duration: '6 months',
    price: 'From $25,000'
  },
  {
    id: '2',
    title: 'Design System Implementation',
    excerpt: 'Component library and design tokens for consistent brand experience.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800',
    href: '#design-system',
    duration: '3 months',
    price: 'From $15,000'
  },
  {
    id: '3',
    title: 'SaaS Dashboard Interface',
    excerpt: 'Modern analytics dashboard with real-time data visualization.',
    category: 'webapp',
    imageUrl: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800',
    href: '#saas-dashboard',
    duration: '4 months',
    price: 'From $18,000'
  },
  {
    id: '4',
    title: 'Brand Identity & Guidelines',
    excerpt: 'Complete brand system including logo, typography, and visual language.',
    category: 'branding',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    href: '#brand-identity',
    duration: '2 months',
    price: 'From $12,000'
  },
  {
    id: '5',
    title: 'WordPress Block Theme',
    excerpt: 'Full Site Editing theme with custom blocks and pattern library.',
    category: 'wordpress',
    imageUrl: 'https://images.unsplash.com/photo-1535338454770-11f3ebb6e1a9?w=800',
    href: '#wordpress-theme',
    duration: '4 months',
    price: 'From $20,000'
  },
  {
    id: '6',
    title: 'Mobile App Design',
    excerpt: 'Native iOS and Android app with seamless user experience.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    href: '#mobile-app',
    duration: '5 months',
    price: 'From $22,000'
  },
  {
    id: '7',
    title: 'Performance Optimization',
    excerpt: 'Speed improvements and Core Web Vitals optimization for existing site.',
    category: 'development',
    imageUrl: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
    href: '#performance',
    duration: '1 month',
    price: 'From $8,000'
  },
  {
    id: '8',
    title: 'Accessibility Audit & Remediation',
    excerpt: 'WCAG 2.1 AA compliance audit with implementation support.',
    category: 'development',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    href: '#accessibility',
    duration: '2 months',
    price: 'From $10,000'
  },
];

const filterOptions = [
  { id: 'all', label: 'All Services', count: 8 },
  { id: 'design', label: 'Design', count: 2 },
  { id: 'development', label: 'Development', count: 2 },
  { id: 'ecommerce', label: 'E-commerce', count: 1 },
  { id: 'wordpress', label: 'WordPress', count: 1 },
  { id: 'branding', label: 'Branding', count: 1 },
  { id: 'webapp', label: 'Web Apps', count: 1 },
];

export function ArchiveWithFiltersTemplate() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');
  const totalPages = 2;

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(proj => proj.category === activeFilter);

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Pattern: Archive Header */}
        <ArchiveHeader
          title="Our Services"
          description="Explore our comprehensive range of web design and development services."
          count={filteredProjects.length}
        />

        {/* Pattern: Filter Bar */}
        <FilterBar
          options={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          label="Filter by service type"
        />

        {/* Pattern: Card Grid */}
        <CardGrid 
          items={filteredProjects}
          columns={3}
        />

        {/* Pattern: Pagination Navigation */}
        <PaginationNav
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        {/* Pattern: Archive CTA */}
        <ArchiveCTA ctaData={generalArchiveCTA} />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}