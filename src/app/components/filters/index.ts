/**
 * Advanced Filtering Components
 * 
 * Complete filtering system for search, archive, and product pages.
 * All components use CSS variables and support light/dark themes.
 * 
 * **Components:**
 * - MultiSelectFilter - Checkbox filters for taxonomies
 * - RangeSlider - Dual-handle slider for value ranges
 * - DatePicker - Calendar-based date selection
 * - FilterPresets - Save and load filter combinations
 * 
 * **Hooks:**
 * - useFilterState - Filter state with URL synchronization
 * 
 * **Design System:**
 * - All components use CSS variables
 * - Fonts: Lexend (UI), Manrope (body)
 * - Light/dark theme support
 * - WCAG 2.1 AA compliant
 * 
 * **WordPress Integration:**
 * - WP_Query parameter mapping
 * - Taxonomy filters
 * - Meta query support
 * - URL-based filtering
 * 
 * @see /guidelines/components/filters/
 */

// ============================================================================
// MULTI-SELECT FILTER
// ============================================================================
export {
  MultiSelectFilter,
  type FilterOption,
} from './MultiSelectFilter';

// ============================================================================
// RANGE SLIDER
// ============================================================================
export {
  RangeSlider,
  type RangeValue,
} from './RangeSlider';

// ============================================================================
// DATE PICKER
// ============================================================================
export {
  DatePicker,
  type DateRange,
} from './DatePicker';

// ============================================================================
// FILTER PRESETS
// ============================================================================
export {
  FilterPresets,
  type FilterPreset,
} from './FilterPresets';
