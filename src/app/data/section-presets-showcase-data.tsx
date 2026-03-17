/**
 * Section Presets Showcase — Static Data
 *
 * Extracted from SectionPresetsShowcase.tsx for data-content separation.
 * Contains all section style preset category definitions.
 *
 * @split March 17, 2026
 */

export interface PresetStyle {
  className: string;
  name: string;
}

export interface PresetCategory {
  category: string;
  styles: PresetStyle[];
}

export const presetCategories: PresetCategory[] = [
  {
    category: 'Hero',
    styles: [
      { className: 'section-style-hero-primary', name: 'Primary Hero' },
      { className: 'section-style-hero-secondary', name: 'Secondary Hero' },
      { className: 'section-style-hero-minimal', name: 'Minimal Hero' },
    ],
  },
  {
    category: 'Call to Action',
    styles: [
      { className: 'section-style-cta-primary', name: 'Primary CTA' },
      { className: 'section-style-cta-secondary', name: 'Secondary CTA' },
      { className: 'section-style-cta-accent', name: 'Accent CTA' },
    ],
  },
  {
    category: 'Content',
    styles: [
      { className: 'section-style-content-default', name: 'Default Content' },
      { className: 'section-style-content-feature', name: 'Feature Content' },
      { className: 'section-style-content-editorial', name: 'Editorial Content' },
    ],
  },
  {
    category: 'Testimonials',
    styles: [
      { className: 'section-style-testimonial-default', name: 'Default Testimonials' },
      { className: 'section-style-testimonial-highlight', name: 'Highlight Testimonials' },
    ],
  },
  {
    category: 'Stats',
    styles: [
      { className: 'section-style-stats-default', name: 'Default Stats' },
      { className: 'section-style-stats-highlight', name: 'Highlight Stats' },
    ],
  },
];
