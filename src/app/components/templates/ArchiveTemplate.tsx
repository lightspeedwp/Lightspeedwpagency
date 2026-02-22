/**
 * Archive Template
 * 
 * WordPress template: templates/archive.html
 * 
 * Content hub archetype for category/taxonomy archives.
 * Pattern order: Breadcrumbs → Archive Header → Results/Sorting → Card Grid → Pagination → ArchiveCTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { CardGrid } from '../patterns/CardGrid';
import { PaginationNav } from '../patterns/PaginationNav';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Button } from '../blocks/design/Buttons';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { generalArchiveCTA } from '../../data/cta';
import { generalArchiveItems } from '../../data/archive-items';
import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

export function ArchiveTemplate() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = generalArchiveItems.length;
  const resultsPerPage = 10;
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Archive' },
        ]}
      />

      {/* Archive Content Section */}
      <Section spacing="xl">
        <Container>
          <div className="archive-layout">
            {/* Archive Header */}
            <div className="archive-header">
              <Heading level={1} className="archive-header__title">
                Archive Title
              </Heading>
              <Paragraph className="archive-header__description">
                Archive description text goes here.
              </Paragraph>
            </div>

            {/* Results & Sorting */}
            <div className="archive-controls">
              <Paragraph className="archive-controls__count">
                Showing {startResult} - {endResult} of {totalResults} results
              </Paragraph>
              
              <div className="archive-controls__actions">
                <Button
                  variant="outline"
                  size="sm"
                  aria-label="Sort results"
                  className="wp-flex wp-items-center wp-gap-2"
                >
                  Sort
                  <ArrowUpDown size={16} />
                </Button>
              </div>
            </div>

            {/* Card Grid - 3 columns */}
            <div className="archive-grid archive-grid--3-cols">
              <CardGrid
                items={generalArchiveItems.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage)}
                columns={3}
              />
            </div>

            {/* Pagination */}
            <div className="archive-pagination">
              <PaginationNav
                currentPage={currentPage}
                totalPages={Math.ceil(totalResults / resultsPerPage)}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Archive CTA Pattern */}
      <ArchiveCTA ctaData={generalArchiveCTA} />
    </>
  );
}