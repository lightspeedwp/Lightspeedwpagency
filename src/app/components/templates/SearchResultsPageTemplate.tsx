/**
 * Search Results Page Template
 * 
 * WordPress template: templates/page-search.html (optional page-specific search)
 * 
 * **Purpose:** Alternative search results page (uses same component as SearchResultsTemplate).
 * 
 * **Note:** This is a wrapper that uses SearchResultsTemplate.
 * In WordPress, you typically only need ONE search template (search.html).
 * This separate template exists for React routing flexibility.
 * 
 * **Data Source:** Same as SearchResultsTemplate
 * 
 * @see {@link /guidelines/templates/search-results.md}
 * @see {@link SearchResultsTemplate}
 */

import { SearchResultsTemplate } from './SearchResultsTemplate';

/**
 * SearchResultsPageTemplate
 * 
 * Wrapper component that uses SearchResultsTemplate.
 * Provides routing flexibility in React while maintaining DRY principle.
 */
export function SearchResultsPageTemplate() {
  return <SearchResultsTemplate />;
}
