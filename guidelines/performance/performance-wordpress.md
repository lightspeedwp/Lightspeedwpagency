# Performance Standards — WordPress, Monitoring & Checklist

**Category:** Development  
**Version:** 1.2.0  
**Last Updated:** 2026-03-15  
**Status:** Active  
**Parent:** [performance.md](../performance.md)  

---

## WordPress Integration

### Block Pattern Performance

Optimize WordPress patterns for speed:

```php
<?php
/**
 * Optimized FAQ Pattern
 * patterns/faq-section.php
 */

// Cache FAQ data (prevents repeated queries)
$faq_cache_key = 'lsx_faqs_homepage';
$faqs = wp_cache_get($faq_cache_key);

if (false === $faqs) {
    $faqs = get_posts([
        'post_type' => 'faq',
        'posts_per_page' => 10,
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ]);
    
    wp_cache_set($faq_cache_key, $faqs, '', HOUR_IN_SECONDS);
}

// Minimal markup (faster rendering)
?>
<div class="wp-block-group faq-section">
    <?php foreach ($faqs as $index => $faq) : ?>
        <details class="faq-item">
            <summary class="faq-question">
                <?php echo esc_html($faq->post_title); ?>
            </summary>
            <div class="faq-answer">
                <?php echo wp_kses_post($faq->post_content); ?>
            </div>
        </details>
    <?php endforeach; ?>
</div>
```

---

### Asset Loading

Optimize CSS/JS loading in WordPress:

```php
<?php
/**
 * functions.php - Optimized asset loading
 */

function lsx_enqueue_scripts() {
    // Defer non-critical JavaScript
    wp_enqueue_script(
        'lsx-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.0',
        ['strategy' => 'defer']
    );

    // Preload critical CSS
    echo '<link rel="preload" href="' . get_template_directory_uri() . '/style.css" as="style" />';
    
    // Load CSS
    wp_enqueue_style(
        'lsx-style',
        get_stylesheet_uri(),
        [],
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'lsx_enqueue_scripts');
```

---

## Monitoring & Measurement

### Lighthouse CI

Automated performance monitoring:

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/services
            http://localhost:3000/portfolio
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

**Lighthouse Budget:**
```json
{
  "performance": 90,
  "accessibility": 100,
  "best-practices": 90,
  "seo": 100,
  "pwa": 50
}
```

### Performance Monitoring Tools

| Tool | Use Case | Frequency |
|------|----------|-----------|
| **Lighthouse** | Overall performance audit | Per deployment |
| **WebPageTest** | Real-world performance | Weekly |
| **Chrome DevTools** | Development profiling | Daily |
| **Bundle Analyzer** | Bundle size analysis | Per build |
| **Core Web Vitals** | Real user monitoring | Continuous |

---

## Performance Checklist

### Before Deployment

- [ ] Lighthouse score >=90
- [ ] Bundle size <200KB (gzipped)
- [ ] LCP <2.5s
- [ ] FID <100ms
- [ ] CLS <0.1
- [ ] Images optimized (WebP format)
- [ ] Fonts preloaded
- [ ] CSS variables used (no inline styles)
- [ ] Code splitting implemented
- [ ] No console errors/warnings

### Continuous Monitoring

- [ ] Track Core Web Vitals monthly
- [ ] Review bundle size on each release
- [ ] Monitor real user performance
- [ ] Check mobile performance
- [ ] Test on slow connections

---

## Resources

- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [WordPress Performance](https://make.wordpress.org/core/handbook/best-practices/performance/)

---

**Last Updated:** March 15, 2026  
**Status:** Active Standard

---

**See also:** [performance-budgets.md](./performance-budgets.md) | [performance-optimization.md](./performance-optimization.md)
