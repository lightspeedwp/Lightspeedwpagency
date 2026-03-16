# Performance Engineering Standards

**Category:** Strategy  
**Version:** 1.0.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Template Used:** _templates/general-template.md

---

## Performance targets

### INP (Interaction to Next Paint)
Target "good" range (< 200ms); monitor continuously.

### Page weight budgets
Set per template type:
- Homepage: < 500KB initial load
- Systems page: < 400KB
- Case study: < 600KB (allows images)
- Insight/blog: < 350KB
- Archive listing: < 400KB

### CSS budget
- Critical CSS: < 50KB
- Total CSS: < 150KB
- No unused CSS in critical path

### JavaScript budget
- Marketing pages: < 100KB JS
- Interactive pages: < 200KB JS
- No render-blocking JS

## Interaction strategy

- Prefer native WordPress behaviours and Interactivity API for lightweight stateful interactions where appropriate.
- Avoid heavy client frameworks for marketing pages unless there is a measured ROI.
- Progressive enhancement: core content works without JS.

## Measurement and cadence

### Monthly CWV review
Template-level performance regression tests as part of release pipeline.

### Metrics to track
- LCP (Largest Contentful Paint) < 2.5s
- FID/INP < 200ms
- CLS (Cumulative Layout Shift) < 0.1
- TTFB < 800ms
- Total page weight
- JS execution time