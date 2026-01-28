/**
 * Search Block
 * 
 * WordPress Block: `core/search`
 * Category: Theme
 * Introduced: WordPress 5.6
 * 
 * Adds a search form to the site, enabling visitors to search posts,
 * pages, or other content. Consists of an input field and submit button.
 * 
 * **Design System:**
 * - Typography: Uses CSS variables (var(--text-base))
 * - Colors: Uses semantic tokens (var(--background), var(--foreground), var(--primary))
 * - Spacing: Uses Tailwind classes
 * - Borders: Uses CSS variables (var(--border), var(--radius))
 * - Font: Manrope (body text)
 * 
 * **Accessibility:**
 * - Visible or visually hidden label
 * - Focus states on input and button
 * - Semantic form elements
 * - Color contrast (WCAG AA 4.5:1 minimum)
 * - Enter key submission
 * 
 * @see {@link /guidelines/blocks/theme/search.md}
 */

import React, { useState, FormEvent } from 'react';
import { Search as SearchIcon } from 'lucide-react';

/**
 * Search Props
 * 
 * Defines all configuration options for the Search block.
 */
export interface SearchProps {
  /**
   * Placeholder text in the input field
   * 
   * Keep concise and descriptive. Do not rely solely on
   * placeholder as the label.
   * 
   * @default "Search…"
   * 
   * @example
   * placeholder="Search articles…"
   */
  placeholder?: string;
  
  /**
   * Text label for the submit button
   * 
   * Set to empty string to display only icon.
   * 
   * @default "Search"
   * 
   * @example
   * buttonLabel="Search"
   * 
   * @example
   * buttonLabel="" // Icon only
   */
  buttonLabel?: string;
  
  /**
   * Whether to display a search icon
   * 
   * Shows icon inside button or as standalone icon.
   * 
   * @default true
   * 
   * @example
   * showIcon={true}
   */
  showIcon?: boolean;
  
  /**
   * Position of the submit button
   * 
   * - 'inside': Icon button within input field
   * - 'outside': Separate button next to input
   * 
   * @default "outside"
   * 
   * @example
   * buttonPosition="inside"
   */
  buttonPosition?: 'inside' | 'outside';
  
  /**
   * Alignment of the search form
   * 
   * Controls horizontal alignment within container.
   * 
   * @default "left"
   * 
   * @example
   * align="center"
   */
  align?: 'left' | 'center' | 'right';
  
  /**
   * Additional CSS classes
   * 
   * Use for spacing or layout adjustments.
   * 
   * @example
   * className="mx-auto max-w-md"
   */
  className?: string;
  
  /**
   * Inline style overrides
   * 
   * Use sparingly. Prefer CSS variables.
   * 
   * @example
   * style={{ maxWidth: '400px' }}
   */
  style?: React.CSSProperties;
  
  /**
   * Form submit handler
   * 
   * Called when user submits the search.
   * Receives the search query as parameter.
   * 
   * @example
   * onSubmit={(query) => console.log(query)}
   */
  onSubmit?: (query: string) => void;
}

/**
 * Search Component
 * 
 * Renders a search form with input field and submit button.
 * 
 * **WordPress Mapping:**
 * ```html
 * <!-- wp:search {"label":"Search","buttonPosition":"outside","buttonUseIcon":true} /-->
 * ```
 * 
 * **theme.json:**
 * ```json
 * "styles": {
 *   "blocks": {
 *     "core/search": {
 *       "typography": {
 *         "fontSize": "var(--text-base)"
 *       },
 *       "border": {
 *         "radius": "var(--radius)"
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * @param props - SearchProps
 * @returns Search form with input and button
 * 
 * @example
 * // Basic search
 * <Search placeholder="Search articles…" />
 * 
 * @example
 * // Inside button position
 * <Search 
 *   placeholder="Search…" 
 *   buttonPosition="inside"
 *   buttonLabel=""
 * />
 * 
 * @example
 * // Custom handler
 * <Search 
 *   placeholder="Search…"
 *   onSubmit={(query) => console.log('Searching for:', query)}
 * />
 */
export function Search({
  placeholder = 'Search…',
  buttonLabel = 'Search',
  showIcon = true,
  buttonPosition = 'outside',
  align = 'left',
  className = '',
  style,
  onSubmit
}: SearchProps) {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit && query.trim()) {
      onSubmit(query.trim());
    }
  };
  
  // Alignment classes
  const alignmentClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  }[align];
  
  // Form wrapper classes
  const formClasses = `wp-block-search flex ${alignmentClass} ${className}`.trim();
  
  // Input styles using CSS variables
  const inputStyles: React.CSSProperties = {
    fontFamily: 'var(--font-secondary)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-regular)',
    color: 'var(--foreground)',
    backgroundColor: 'var(--background)',
    border: '1px solid var(--border)',
    borderRadius: buttonPosition === 'inside' ? 'var(--radius)' : 'var(--radius) 0 0 var(--radius)',
    paddingRight: buttonPosition === 'inside' ? '48px' : '12px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
  };
  
  // Button styles using CSS variables
  const buttonStyles: React.CSSProperties = {
    fontFamily: 'var(--font-secondary)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--primary-foreground)',
    backgroundColor: 'var(--primary)',
    border: 'none',
    borderRadius: buttonPosition === 'inside' ? '50%' : '0 var(--radius) var(--radius) 0',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };
  
  // Inside button position
  if (buttonPosition === 'inside') {
    return (
      <form 
        className={formClasses} 
        style={style}
        onSubmit={handleSubmit}
        role="search"
      >
        <div className="relative" style={{ width: '100%', maxWidth: '400px' }}>
          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <input
            id="search-input"
            type="search"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 w-full"
            style={inputStyles}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--ring)';
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--ring)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <button
            type="submit"
            aria-label={buttonLabel || 'Submit search'}
            className="absolute right-2 top-1/2"
            style={{
              ...buttonStyles,
              width: '40px',
              height: '40px',
              transform: 'translateY(-50%)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
            }}
          >
            {showIcon && <SearchIcon size={20} />}
          </button>
        </div>
      </form>
    );
  }
  
  // Outside button position
  return (
    <form 
      className={formClasses} 
      style={style}
      onSubmit={handleSubmit}
      role="search"
    >
      <div className="flex" style={{ width: '100%', maxWidth: '500px' }}>
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <input
          id="search-input"
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-3 flex-1"
          style={inputStyles}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--ring)';
            e.currentTarget.style.boxShadow = '0 0 0 2px var(--ring)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
        <button
          type="submit"
          aria-label={buttonLabel || 'Submit search'}
          className="px-4 py-2"
          style={buttonStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {showIcon && <SearchIcon size={20} />}
          {buttonLabel && <span>{buttonLabel}</span>}
        </button>
      </div>
    </form>
  );
}
