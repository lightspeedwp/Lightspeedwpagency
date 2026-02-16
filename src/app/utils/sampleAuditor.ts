/**
 * Sample Component Auditor
 * 
 * Runs audits on specific components and provides detailed results
 * with actionable recommendations and fix examples.
 * 
 * Usage:
 * ```typescript
 * import { runSampleAudit } from './utils/sampleAuditor';
 * 
 * // Audit specific components
 * const results = await runSampleAudit(['SiteHeader', 'FrontPageTemplate', 'Button']);
 * console.log(results);
 * ```
 */

export interface AuditResult {
  component: string;
  score: number;
  passed: boolean;
  issues: AuditIssue[];
  recommendations: string[];
  fixExamples: FixExample[];
  timestamp: string;
}

export interface AuditIssue {
  severity: 'critical' | 'warning' | 'info';
  category: 'fonts' | 'colors' | 'spacing' | 'accessibility' | 'semantic' | 'performance';
  description: string;
  location: string;
  currentValue?: string;
  expectedValue?: string;
}

export interface FixExample {
  issue: string;
  before: string;
  after: string;
  explanation: string;
}

export interface AuditSummary {
  totalComponents: number;
  passedComponents: number;
  failedComponents: number;
  averageScore: number;
  totalIssues: number;
  criticalIssues: number;
  warningIssues: number;
  results: AuditResult[];
  generatedAt: string;
}

/**
 * Font Family Checker
 * Ensures only Lexend and Manrope fonts are used
 */
class FontFamilyChecker {
  private approvedFonts = ['Lexend', 'Manrope'];
  
  check(element: Element): AuditIssue[] {
    const issues: AuditIssue[] = [];
    const computedStyle = window.getComputedStyle(element);
    const fontFamily = computedStyle.fontFamily;
    
    // Check if font family is from approved list
    const usesApprovedFont = this.approvedFonts.some(font => 
      fontFamily.includes(font)
    );
    
    if (!usesApprovedFont && fontFamily !== 'inherit') {
      issues.push({
        severity: 'critical',
        category: 'fonts',
        description: `Unapproved font family detected: ${fontFamily}`,
        location: this.getElementLocation(element),
        currentValue: fontFamily,
        expectedValue: 'Lexend, sans-serif OR Manrope, sans-serif'
      });
    }
    
    // Check for hardcoded font sizes
    const fontSize = computedStyle.fontSize;
    if (fontSize && !fontSize.includes('var(--text-')) && !fontSize.includes('clamp')) {
      const inlineStyle = element.getAttribute('style');
      if (inlineStyle?.includes('fontSize')) {
        issues.push({
          severity: 'warning',
          category: 'fonts',
          description: 'Hardcoded font size detected - should use CSS variable',
          location: this.getElementLocation(element),
          currentValue: fontSize,
          expectedValue: 'var(--text-base), var(--text-h1), etc.'
        });
      }
    }
    
    return issues;
  }
  
  private getElementLocation(element: Element): string {
    const tag = element.tagName.toLowerCase();
    const id = element.id ? `#${element.id}` : '';
    const classes = element.className ? `.${element.className.split(' ').join('.')}` : '';
    return `${tag}${id}${classes}`;
  }
}

/**
 * Color Checker
 * Ensures all colors use CSS variables
 */
class ColorChecker {
  private cssVariablePattern = /var\(--[\w-]+\)/;
  
  check(element: Element): AuditIssue[] {
    const issues: AuditIssue[] = [];
    const inlineStyle = element.getAttribute('style');
    
    if (!inlineStyle) return issues;
    
    // Check for hardcoded colors
    const colorProperties = [
      'color',
      'backgroundColor',
      'borderColor',
      'background'
    ];
    
    colorProperties.forEach(prop => {
      const regex = new RegExp(`${prop}:\\s*([^;]+)`, 'i');
      const match = inlineStyle.match(regex);
      
      if (match && match[1]) {
        const value = match[1].trim();
        
        // Check if it's a hardcoded color (hex, rgb, rgba)
        if (this.isHardcodedColor(value) && !this.cssVariablePattern.test(value)) {
          issues.push({
            severity: 'critical',
            category: 'colors',
            description: `Hardcoded ${prop} detected - should use CSS variable`,
            location: this.getElementLocation(element),
            currentValue: value,
            expectedValue: 'var(--foreground), var(--primary), var(--background), etc.'
          });
        }
      }
    });
    
    return issues;
  }
  
  private isHardcodedColor(value: string): boolean {
    return (
      value.startsWith('#') ||
      value.startsWith('rgb') ||
      value.match(/^[a-z]+$/i) !== null // Named colors like 'red', 'blue'
    );
  }
  
  private getElementLocation(element: Element): string {
    const tag = element.tagName.toLowerCase();
    const id = element.id ? `#${element.id}` : '';
    const classes = element.className ? `.${element.className.split(' ').join('.')}` : '';
    return `${tag}${id}${classes}`;
  }
}

/**
 * Accessibility Checker
 * Ensures WCAG compliance
 */
class AccessibilityChecker {
  check(element: Element): AuditIssue[] {
    const issues: AuditIssue[] = [];
    
    // Check for missing alt text on images
    if (element.tagName === 'IMG') {
      const alt = element.getAttribute('alt');
      if (!alt && alt !== '') {
        issues.push({
          severity: 'critical',
          category: 'accessibility',
          description: 'Image missing alt attribute',
          location: this.getElementLocation(element),
          currentValue: 'undefined',
          expectedValue: 'Descriptive alt text'
        });
      }
    }
    
    // Check for buttons without text or aria-label
    if (element.tagName === 'BUTTON') {
      const hasText = element.textContent?.trim();
      const hasAriaLabel = element.getAttribute('aria-label');
      
      if (!hasText && !hasAriaLabel) {
        issues.push({
          severity: 'critical',
          category: 'accessibility',
          description: 'Button missing accessible label',
          location: this.getElementLocation(element),
          currentValue: 'No label',
          expectedValue: 'Text content or aria-label'
        });
      }
    }
    
    // Check for proper heading hierarchy
    if (element.tagName.match(/^H[1-6]$/)) {
      const level = parseInt(element.tagName[1]);
      const prevHeading = this.findPreviousHeading(element);
      
      if (prevHeading) {
        const prevLevel = parseInt(prevHeading.tagName[1]);
        if (level > prevLevel + 1) {
          issues.push({
            severity: 'warning',
            category: 'accessibility',
            description: `Heading level skipped (H${prevLevel} → H${level})`,
            location: this.getElementLocation(element),
            currentValue: `H${level}`,
            expectedValue: `H${prevLevel + 1}`
          });
        }
      }
    }
    
    return issues;
  }
  
  private findPreviousHeading(element: Element): Element | null {
    let current = element.previousElementSibling;
    while (current) {
      if (current.tagName.match(/^H[1-6]$/)) {
        return current;
      }
      current = current.previousElementSibling;
    }
    return null;
  }
  
  private getElementLocation(element: Element): string {
    const tag = element.tagName.toLowerCase();
    const id = element.id ? `#${element.id}` : '';
    const classes = element.className ? `.${element.className.split(' ').join('.')}` : '';
    return `${tag}${id}${classes}`;
  }
}

/**
 * Main Sample Auditor
 */
export class SampleAuditor {
  private fontChecker = new FontFamilyChecker();
  private colorChecker = new ColorChecker();
  private accessibilityChecker = new AccessibilityChecker();
  
  /**
   * Audit a specific component by selector
   */
  auditComponent(componentSelector: string): AuditResult {
    const startTime = Date.now();
    const element = document.querySelector(componentSelector);
    
    if (!element) {
      return {
        component: componentSelector,
        score: 0,
        passed: false,
        issues: [{
          severity: 'critical',
          category: 'semantic',
          description: 'Component not found in DOM',
          location: componentSelector
        }],
        recommendations: ['Ensure component is mounted before running audit'],
        fixExamples: [],
        timestamp: new Date().toISOString()
      };
    }
    
    const issues: AuditIssue[] = [];
    
    // Audit all child elements
    const allElements = [element, ...Array.from(element.querySelectorAll('*'))];
    
    allElements.forEach(el => {
      issues.push(...this.fontChecker.check(el));
      issues.push(...this.colorChecker.check(el));
      issues.push(...this.accessibilityChecker.check(el));
    });
    
    // Calculate score
    const criticalCount = issues.filter(i => i.severity === 'critical').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const infoCount = issues.filter(i => i.severity === 'info').length;
    
    const score = Math.max(0, 100 - (criticalCount * 10) - (warningCount * 5) - (infoCount * 2));
    const passed = score >= 90;
    
    // Generate recommendations
    const recommendations = this.generateRecommendations(issues);
    
    // Generate fix examples
    const fixExamples = this.generateFixExamples(issues);
    
    const endTime = Date.now();
    console.log(`✅ Audited ${componentSelector} in ${endTime - startTime}ms`);
    
    return {
      component: componentSelector,
      score,
      passed,
      issues,
      recommendations,
      fixExamples,
      timestamp: new Date().toISOString()
    };
  }
  
  /**
   * Run audit on multiple components
   */
  auditMultiple(componentSelectors: string[]): AuditSummary {
    console.log(`🔍 Starting audit on ${componentSelectors.length} components...`);
    
    const results = componentSelectors.map(selector => 
      this.auditComponent(selector)
    );
    
    const passedComponents = results.filter(r => r.passed).length;
    const failedComponents = results.filter(r => !r.passed).length;
    const averageScore = results.reduce((sum, r) => sum + r.score, 0) / results.length;
    
    const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
    const criticalIssues = results.reduce(
      (sum, r) => sum + r.issues.filter(i => i.severity === 'critical').length,
      0
    );
    const warningIssues = results.reduce(
      (sum, r) => sum + r.issues.filter(i => i.severity === 'warning').length,
      0
    );
    
    console.log(`✅ Audit complete!`);
    console.log(`   Passed: ${passedComponents}/${componentSelectors.length}`);
    console.log(`   Average Score: ${averageScore.toFixed(1)}/100`);
    console.log(`   Total Issues: ${totalIssues} (${criticalIssues} critical, ${warningIssues} warnings)`);
    
    return {
      totalComponents: componentSelectors.length,
      passedComponents,
      failedComponents,
      averageScore,
      totalIssues,
      criticalIssues,
      warningIssues,
      results,
      generatedAt: new Date().toISOString()
    };
  }
  
  /**
   * Generate recommendations based on issues
   */
  private generateRecommendations(issues: AuditIssue[]): string[] {
    const recommendations: string[] = [];
    const categories = new Set(issues.map(i => i.category));
    
    if (categories.has('fonts')) {
      recommendations.push(
        'Replace all font families with approved fonts: Lexend (primary) or Manrope (small text only)',
        'Use CSS variables for font sizes: var(--text-base), var(--text-h1), etc.',
        'Remove hardcoded font-size values and use design system tokens'
      );
    }
    
    if (categories.has('colors')) {
      recommendations.push(
        'Replace hardcoded colors with CSS variables: var(--foreground), var(--primary), etc.',
        'Use semantic color tokens for consistent theming',
        'Ensure colors automatically adapt to light/dark mode'
      );
    }
    
    if (categories.has('accessibility')) {
      recommendations.push(
        'Add alt text to all images (use empty alt="" for decorative images)',
        'Ensure all interactive elements have accessible labels',
        'Maintain proper heading hierarchy (H1 → H2 → H3, no skipping)'
      );
    }
    
    return recommendations;
  }
  
  /**
   * Generate fix examples based on issues
   */
  private generateFixExamples(issues: AuditIssue[]): FixExample[] {
    const examples: FixExample[] = [];
    
    // Font family fixes
    const fontIssues = issues.filter(i => i.category === 'fonts');
    if (fontIssues.length > 0) {
      examples.push({
        issue: 'Unapproved font family',
        before: `<h1 style={{ fontFamily: 'Arial, sans-serif' }}>Title</h1>`,
        after: `<h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)' }}>Title</h1>`,
        explanation: 'Use design system CSS variables for fonts and sizes.'
      });
      
      examples.push({
        issue: 'Hardcoded font size',
        before: `<p style={{ fontSize: '16px' }}>Text</p>`,
        after: `<p style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-primary)' }}>Text</p>`,
        explanation: 'Use CSS variables for font sizes to maintain consistency and enable global updates.'
      });
    }
    
    // Color fixes
    const colorIssues = issues.filter(i => i.category === 'colors');
    if (colorIssues.length > 0) {
      examples.push({
        issue: 'Hardcoded color values',
        before: `<div style={{ color: '#1E6AFF', backgroundColor: '#FFFFFF' }}>Content</div>`,
        after: `<div style={{ color: 'var(--primary)', backgroundColor: 'var(--background)' }}>Content</div>`,
        explanation: 'Use CSS variables for colors to support light/dark mode and enable global theme updates.'
      });
      
      examples.push({
        issue: 'RGB color values',
        before: `<button style={{ backgroundColor: 'rgb(30, 106, 255)' }}>Click</button>`,
        after: `<button style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>Click</button>`,
        explanation: 'Replace RGB values with semantic color tokens that automatically adapt to theme changes.'
      });
    }
    
    // Accessibility fixes
    const a11yIssues = issues.filter(i => i.category === 'accessibility');
    if (a11yIssues.length > 0) {
      examples.push({
        issue: 'Missing alt text on images',
        before: `<img src="photo.jpg" />`,
        after: `<img src="photo.jpg" alt="Team collaboration in modern office" />`,
        explanation: 'Always provide descriptive alt text for images. Use alt="" for decorative images.'
      });
      
      examples.push({
        issue: 'Button without accessible label',
        before: `<button><SearchIcon /></button>`,
        after: `<button aria-label="Search"><SearchIcon /></button>`,
        explanation: 'Icon-only buttons need aria-label for screen readers.'
      });
    }
    
    return examples;
  }
}

/**
 * Convenience function to run sample audit
 */
export async function runSampleAudit(componentSelectors: string[]): Promise<AuditSummary> {
  const auditor = new SampleAuditor();
  return auditor.auditMultiple(componentSelectors);
}

/**
 * Export formatted report
 */
export function exportAuditReport(summary: AuditSummary): string {
  const lines: string[] = [];
  
  lines.push('# Component Audit Report');
  lines.push('');
  lines.push(`**Generated:** ${new Date(summary.generatedAt).toLocaleString()}`);
  lines.push('');
  
  lines.push('## Summary');
  lines.push('');
  lines.push(`- **Total Components:** ${summary.totalComponents}`);
  lines.push(`- **Passed:** ${summary.passedComponents} (${((summary.passedComponents / summary.totalComponents) * 100).toFixed(1)}%)`);
  lines.push(`- **Failed:** ${summary.failedComponents} (${((summary.failedComponents / summary.totalComponents) * 100).toFixed(1)}%)`);
  lines.push(`- **Average Score:** ${summary.averageScore.toFixed(1)}/100`);
  lines.push(`- **Total Issues:** ${summary.totalIssues}`);
  lines.push(`  - Critical: ${summary.criticalIssues}`);
  lines.push(`  - Warnings: ${summary.warningIssues}`);
  lines.push('');
  
  lines.push('## Results by Component');
  lines.push('');
  
  summary.results.forEach(result => {
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    lines.push(`### ${result.component} — ${status} (${result.score}/100)`);
    lines.push('');
    
    if (result.issues.length > 0) {
      lines.push('**Issues:**');
      result.issues.forEach(issue => {
        const icon = issue.severity === 'critical' ? '🔴' : issue.severity === 'warning' ? '🟡' : 'ℹ️';
        lines.push(`- ${icon} **[${issue.category}]** ${issue.description}`);
        if (issue.currentValue) {
          lines.push(`  - Current: \`${issue.currentValue}\``);
        }
        if (issue.expectedValue) {
          lines.push(`  - Expected: \`${issue.expectedValue}\``);
        }
      });
      lines.push('');
    }
    
    if (result.recommendations.length > 0) {
      lines.push('**Recommendations:**');
      result.recommendations.forEach(rec => {
        lines.push(`- ${rec}`);
      });
      lines.push('');
    }
    
    if (result.fixExamples.length > 0) {
      lines.push('**Fix Examples:**');
      result.fixExamples.forEach(example => {
        lines.push(`\n**${example.issue}:**`);
        lines.push('```tsx');
        lines.push('// Before:');
        lines.push(example.before);
        lines.push('');
        lines.push('// After:');
        lines.push(example.after);
        lines.push('```');
        lines.push(example.explanation);
      });
      lines.push('');
    }
    
    lines.push('---');
    lines.push('');
  });
  
  return lines.join('\n');
}
