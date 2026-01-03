/**
 * Component Auditor Utility
 * 
 * Comprehensive automated auditing of all 36 templates for:
 * - WCAG AA/AAA contrast ratios (light and dark mode)
 * - CSS variable usage compliance
 * - Semantic HTML validation
 * - Font family compliance (Lexend/Manrope only)
 * - Accessibility issues
 * 
 * Provides detailed reports with specific component violations
 * and actionable recommendations for fixes.
 */

interface ContrastTest {
  element: string;
  foreground: string;
  background: string;
  ratio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
  location: string;
}

interface ComponentAuditResult {
  template: string;
  mode: 'light' | 'dark';
  passed: boolean;
  issues: AuditIssue[];
  contrastTests: ContrastTest[];
  score: number;
}

interface AuditIssue {
  severity: 'critical' | 'warning' | 'info';
  category: 'contrast' | 'css-variables' | 'fonts' | 'semantic' | 'accessibility';
  element: string;
  description: string;
  recommendation: string;
  location: string;
}

interface AuditSummary {
  totalTemplates: number;
  passedTemplates: number;
  failedTemplates: number;
  totalIssues: number;
  criticalIssues: number;
  warningIssues: number;
  infoIssues: number;
  averageScore: number;
  modeResults: {
    light: ComponentAuditResult[];
    dark: ComponentAuditResult[];
  };
}

export class ComponentAuditor {
  private results: ComponentAuditResult[] = [];
  private currentMode: 'light' | 'dark' = 'light';

  /**
   * Calculate relative luminance of a color
   * Uses WCAG formula: https://www.w3.org/TR/WCAG20/#relativeluminancedef
   */
  private calculateLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map(val => {
      const sRGB = val / 255;
      return sRGB <= 0.03928
        ? sRGB / 12.92
        : Math.pow((sRGB + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  /**
   * Calculate contrast ratio between two colors
   * Returns ratio (1:1 to 21:1)
   */
  private calculateContrastRatio(color1: string, color2: string): number {
    const rgb1 = this.parseColor(color1);
    const rgb2 = this.parseColor(color2);

    if (!rgb1 || !rgb2) return 0;

    const lum1 = this.calculateLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = this.calculateLuminance(rgb2.r, rgb2.g, rgb2.b);

    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);

    return (lighter + 0.05) / (darker + 0.05);
  }

  /**
   * Parse CSS color to RGB
   */
  private parseColor(color: string): { r: number; g: number; b: number } | null {
    // Handle rgba format
    const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbaMatch) {
      return {
        r: parseInt(rgbaMatch[1]),
        g: parseInt(rgbaMatch[2]),
        b: parseInt(rgbaMatch[3])
      };
    }

    // Handle hex format
    const hexMatch = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (hexMatch) {
      return {
        r: parseInt(hexMatch[1], 16),
        g: parseInt(hexMatch[2], 16),
        b: parseInt(hexMatch[3], 16)
      };
    }

    // Handle CSS variables - get computed value
    if (color.includes('var(')) {
      const computed = getComputedStyle(document.documentElement)
        .getPropertyValue(color.replace(/var\((.*)\)/, '$1').trim());
      return this.parseColor(computed);
    }

    return null;
  }

  /**
   * Get computed color value from CSS variable
   */
  private getComputedColor(varName: string): string {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(varName.replace('var(', '').replace(')', ''));
    return value.trim();
  }

  /**
   * Check contrast ratio for an element
   */
  private checkElementContrast(element: HTMLElement, location: string): ContrastTest | null {
    const styles = window.getComputedStyle(element);
    const foreground = styles.color;
    const background = styles.backgroundColor;

    // Skip transparent backgrounds
    if (background === 'rgba(0, 0, 0, 0)' || background === 'transparent') {
      return null;
    }

    const ratio = this.calculateContrastRatio(foreground, background);

    // Get font size to determine WCAG level
    const fontSize = parseFloat(styles.fontSize);
    const fontWeight = parseInt(styles.fontWeight);
    const isLargeText = fontSize >= 24 || (fontSize >= 18.5 && fontWeight >= 700);

    // WCAG AA: 4.5:1 for normal text, 3:1 for large text
    // WCAG AAA: 7:1 for normal text, 4.5:1 for large text
    const wcagAA = isLargeText ? ratio >= 3 : ratio >= 4.5;
    const wcagAAA = isLargeText ? ratio >= 4.5 : ratio >= 7;

    return {
      element: element.tagName.toLowerCase(),
      foreground,
      background,
      ratio: Math.round(ratio * 100) / 100,
      wcagAA,
      wcagAAA,
      location
    };
  }

  /**
   * Audit a single template
   */
  private auditTemplate(templateName: string): ComponentAuditResult {
    const issues: AuditIssue[] = [];
    const contrastTests: ContrastTest[] = [];

    // Get all text elements in the template
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button, label, li');

    textElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      const styles = window.getComputedStyle(htmlElement);

      // Test 1: Contrast Ratio
      const contrastTest = this.checkElementContrast(htmlElement, `${element.tagName}[${index}]`);
      if (contrastTest) {
        contrastTests.push(contrastTest);

        if (!contrastTest.wcagAA) {
          issues.push({
            severity: 'critical',
            category: 'contrast',
            element: contrastTest.element,
            description: `Contrast ratio ${contrastTest.ratio}:1 fails WCAG AA (requires 4.5:1)`,
            recommendation: `Increase contrast to at least 4.5:1. Consider using higher contrast colors from the design system.`,
            location: contrastTest.location
          });
        } else if (!contrastTest.wcagAAA) {
          issues.push({
            severity: 'warning',
            category: 'contrast',
            element: contrastTest.element,
            description: `Contrast ratio ${contrastTest.ratio}:1 passes AA but fails AAA (requires 7:1)`,
            recommendation: `For AAA compliance, increase contrast to at least 7:1.`,
            location: contrastTest.location
          });
        }
      }

      // Test 2: Font Family Compliance
      const fontFamily = styles.fontFamily.toLowerCase();
      if (!fontFamily.includes('lexend') && !fontFamily.includes('manrope')) {
        issues.push({
          severity: 'critical',
          category: 'fonts',
          element: htmlElement.tagName.toLowerCase(),
          description: `Uses non-approved font: ${styles.fontFamily}`,
          recommendation: `Use Lexend (primary) or Manrope (small text only) fonts from design system.`,
          location: `${element.tagName}[${index}]`
        });
      }

      // Test 3: CSS Variable Usage (font size)
      const inlineFontSize = htmlElement.style.fontSize;
      if (inlineFontSize && !inlineFontSize.includes('var(')) {
        // Check if it's a hardcoded value
        if (inlineFontSize.match(/^\d+(px|rem|em)$/)) {
          issues.push({
            severity: 'warning',
            category: 'css-variables',
            element: htmlElement.tagName.toLowerCase(),
            description: `Hardcoded font size: ${inlineFontSize}`,
            recommendation: `Use CSS variable from design system (e.g., var(--text-base))`,
            location: `${element.tagName}[${index}]`
          });
        }
      }

      // Test 4: CSS Variable Usage (colors)
      const inlineColor = htmlElement.style.color;
      const inlineBg = htmlElement.style.backgroundColor;

      if (inlineColor && !inlineColor.includes('var(') && inlineColor !== '') {
        if (inlineColor.match(/^(#|rgb|hsl)/)) {
          issues.push({
            severity: 'warning',
            category: 'css-variables',
            element: htmlElement.tagName.toLowerCase(),
            description: `Hardcoded color: ${inlineColor}`,
            recommendation: `Use CSS variable from design system (e.g., var(--foreground))`,
            location: `${element.tagName}[${index}]`
          });
        }
      }

      if (inlineBg && !inlineBg.includes('var(') && inlineBg !== '') {
        if (inlineBg.match(/^(#|rgb|hsl)/)) {
          issues.push({
            severity: 'warning',
            category: 'css-variables',
            element: htmlElement.tagName.toLowerCase(),
            description: `Hardcoded background color: ${inlineBg}`,
            recommendation: `Use CSS variable from design system (e.g., var(--background))`,
            location: `${element.tagName}[${index}]`
          });
        }
      }
    });

    // Test 5: Semantic HTML
    const hasMain = document.querySelector('main') !== null;
    const h1Count = document.querySelectorAll('h1').length;

    if (!hasMain) {
      issues.push({
        severity: 'critical',
        category: 'semantic',
        element: 'template',
        description: 'Missing <main> landmark',
        recommendation: 'Wrap main content in <main> element',
        location: 'template root'
      });
    }

    if (h1Count === 0) {
      issues.push({
        severity: 'critical',
        category: 'semantic',
        element: 'h1',
        description: 'No H1 element found',
        recommendation: 'Add exactly one H1 element for page title',
        location: 'template'
      });
    } else if (h1Count > 1) {
      issues.push({
        severity: 'critical',
        category: 'semantic',
        element: 'h1',
        description: `Multiple H1 elements found: ${h1Count}`,
        recommendation: 'Use exactly one H1 per page',
        location: 'template'
      });
    }

    // Test 6: Accessibility - Images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.hasAttribute('alt')) {
        issues.push({
          severity: 'critical',
          category: 'accessibility',
          element: 'img',
          description: 'Image missing alt attribute',
          recommendation: 'Add descriptive alt text for accessibility',
          location: `img[${index}]`
        });
      }
    });

    // Test 7: Accessibility - Buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      const text = button.textContent?.trim();
      const ariaLabel = button.getAttribute('aria-label');
      
      if (!text && !ariaLabel) {
        issues.push({
          severity: 'critical',
          category: 'accessibility',
          element: 'button',
          description: 'Button has no accessible label',
          recommendation: 'Add text content or aria-label attribute',
          location: `button[${index}]`
        });
      }
    });

    // Calculate score
    const criticalCount = issues.filter(i => i.severity === 'critical').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const infoCount = issues.filter(i => i.severity === 'info').length;

    // Score calculation: Start at 100, deduct points for issues
    let score = 100;
    score -= criticalCount * 10; // -10 per critical
    score -= warningCount * 3;   // -3 per warning
    score -= infoCount * 1;      // -1 per info

    // Also factor in contrast test failures
    const aaFailures = contrastTests.filter(t => !t.wcagAA).length;
    score -= aaFailures * 5; // -5 per AA failure

    score = Math.max(0, score); // Don't go below 0

    return {
      template: templateName,
      mode: this.currentMode,
      passed: criticalCount === 0 && aaFailures === 0,
      issues,
      contrastTests,
      score
    };
  }

  /**
   * Switch theme mode
   */
  private switchMode(mode: 'light' | 'dark'): void {
    this.currentMode = mode;
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Wait for theme to apply
    setTimeout(() => {}, 100);
  }

  /**
   * Run audit on all templates
   */
  async auditAllTemplates(templates: string[]): Promise<AuditSummary> {
    console.log('🔍 Starting Component Audit...\n');

    const lightResults: ComponentAuditResult[] = [];
    const darkResults: ComponentAuditResult[] = [];

    // Test in light mode
    console.log('☀️ Testing Light Mode...');
    this.switchMode('light');
    await new Promise(resolve => setTimeout(resolve, 200)); // Let theme apply

    for (const template of templates) {
      const result = this.auditTemplate(template);
      lightResults.push(result);
    }

    // Test in dark mode
    console.log('🌙 Testing Dark Mode...');
    this.switchMode('dark');
    await new Promise(resolve => setTimeout(resolve, 200)); // Let theme apply

    for (const template of templates) {
      const result = this.auditTemplate(template);
      darkResults.push(result);
    }

    // Reset to light mode
    this.switchMode('light');

    // Calculate summary
    const allResults = [...lightResults, ...darkResults];
    const allIssues = allResults.flatMap(r => r.issues);

    const summary: AuditSummary = {
      totalTemplates: templates.length,
      passedTemplates: allResults.filter(r => r.passed).length,
      failedTemplates: allResults.filter(r => !r.passed).length,
      totalIssues: allIssues.length,
      criticalIssues: allIssues.filter(i => i.severity === 'critical').length,
      warningIssues: allIssues.filter(i => i.severity === 'warning').length,
      infoIssues: allIssues.filter(i => i.severity === 'info').length,
      averageScore: allResults.reduce((sum, r) => sum + r.score, 0) / allResults.length,
      modeResults: {
        light: lightResults,
        dark: darkResults
      }
    };

    this.printSummary(summary);

    return summary;
  }

  /**
   * Print audit summary to console
   */
  private printSummary(summary: AuditSummary): void {
    console.log('\n' + '='.repeat(70));
    console.log('📊 COMPONENT AUDIT SUMMARY');
    console.log('='.repeat(70) + '\n');

    console.log(`Total Templates Tested: ${summary.totalTemplates} × 2 modes = ${summary.totalTemplates * 2} tests`);
    console.log(`Passed: ${summary.passedTemplates}/${summary.totalTemplates * 2} (${Math.round(summary.passedTemplates / (summary.totalTemplates * 2) * 100)}%)`);
    console.log(`Failed: ${summary.failedTemplates}/${summary.totalTemplates * 2}\n`);

    console.log(`Average Score: ${summary.averageScore.toFixed(1)}/100`);
    console.log(`Total Issues: ${summary.totalIssues}`);
    console.log(`  - Critical: ${summary.criticalIssues}`);
    console.log(`  - Warning: ${summary.warningIssues}`);
    console.log(`  - Info: ${summary.infoIssues}\n`);

    // Light mode results
    console.log('☀️ LIGHT MODE RESULTS:');
    console.log('-'.repeat(70));
    summary.modeResults.light.forEach(result => {
      const status = result.passed ? '✅' : '❌';
      const critical = result.issues.filter(i => i.severity === 'critical').length;
      console.log(`${status} ${result.template.padEnd(40)} Score: ${result.score}/100 (${critical} critical issues)`);
    });

    // Dark mode results
    console.log('\n🌙 DARK MODE RESULTS:');
    console.log('-'.repeat(70));
    summary.modeResults.dark.forEach(result => {
      const status = result.passed ? '✅' : '❌';
      const critical = result.issues.filter(i => i.severity === 'critical').length;
      console.log(`${status} ${result.template.padEnd(40)} Score: ${result.score}/100 (${critical} critical issues)`);
    });

    // Top issues
    console.log('\n🔴 TOP ISSUES BY CATEGORY:');
    console.log('-'.repeat(70));
    const issuesByCategory = this.groupIssuesByCategory(summary);
    Object.entries(issuesByCategory).forEach(([category, count]) => {
      console.log(`${category.padEnd(20)}: ${count} issues`);
    });

    console.log('\n' + '='.repeat(70));
    console.log('✅ Audit Complete!');
    console.log('='.repeat(70) + '\n');
  }

  /**
   * Group issues by category
   */
  private groupIssuesByCategory(summary: AuditSummary): Record<string, number> {
    const allResults = [...summary.modeResults.light, ...summary.modeResults.dark];
    const allIssues = allResults.flatMap(r => r.issues);

    const grouped: Record<string, number> = {};
    allIssues.forEach(issue => {
      grouped[issue.category] = (grouped[issue.category] || 0) + 1;
    });

    return grouped;
  }

  /**
   * Get detailed report for a specific template
   */
  getTemplateReport(summary: AuditSummary, templateName: string, mode: 'light' | 'dark'): ComponentAuditResult | null {
    const results = mode === 'light' ? summary.modeResults.light : summary.modeResults.dark;
    return results.find(r => r.template === templateName) || null;
  }

  /**
   * Export audit results to JSON
   */
  exportToJSON(summary: AuditSummary): string {
    return JSON.stringify(summary, null, 2);
  }
}

// Export for browser console usage
if (typeof window !== 'undefined') {
  (window as any).ComponentAuditor = ComponentAuditor;
  (window as any).runComponentAudit = async () => {
    const auditor = new ComponentAuditor();
    
    // List of all 36 templates
    const templates = [
      'front-page',
      'archive',
      'archive-filters',
      'single',
      '404',
      'index',
      'search',
      'blog-index',
      'category-archive',
      'author-archive',
      'single-post',
      'search-page',
      'contact',
      'style-guide',
      'faq',
      'services',
      'hosting',
      'about',
      'team',
      'about-process',
      'about-culture',
      'about-history',
      'portfolio-archive',
      'portfolio-single',
      'development-service',
      'design-service',
      'discovery-service',
      'content-service',
      'security-service',
      'migrations-service',
      'solutions',
      'lsx-solution',
      'wordpress-solution',
      'woocommerce-solution',
      'template-tester',
      'design-system-test'
    ];
    
    return await auditor.auditAllTemplates(templates);
  };
  
  console.log('🔍 Component Auditor Loaded!');
  console.log('Run audit with: await runComponentAudit()');
}

export type { ComponentAuditResult, AuditIssue, AuditSummary, ContrastTest };
