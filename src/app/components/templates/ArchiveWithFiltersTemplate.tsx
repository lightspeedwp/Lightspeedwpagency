/**
 * Archive with Filters Template
 * 
 * WordPress template: templates/archive.html (with filtering)
 * 
 * Enhanced content hub archetype with category filtering.
 * Pattern order: Archive Header → Filter Bar → Card Grid → Pagination
 * 
 * All data sourced from /src/app/data/archive-items.ts
 */

import '../../../styles/templates/archive.css';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { FilterBar } from '../patterns/FilterBar';
import { CardGrid } from '../patterns/CardGrid';
import { PaginationNav } from '../patterns/PaginationNav';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { generalArchiveCTA } from '../../data/cta';
import {
  serviceArchiveItems,
  serviceFilterOptions,
  archiveWithFiltersPage,
  getServiceItemsByCategory,
} from '../../data/archive-items';
import { useState } from 'react';

export function ArchiveWithFiltersTemplate() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');
  const totalPages = 2;

  // Filter projects based on active category
  const filteredProjects = getServiceItemsByCategory(activeFilter);

  return (
    <>
      {/* Pattern: Archive Header */}
      <ArchiveHeader
        title={archiveWithFiltersPage.title}
        description={archiveWithFiltersPage.description}
        count={filteredProjects.length}
      />

      {/* Pattern: Filter Bar */}
      <FilterBar
        options={serviceFilterOptions}
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
    </>
  );
}