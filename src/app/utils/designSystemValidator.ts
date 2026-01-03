/**
 * Design System Validator
 * 
 * Validates components against LSX Design System requirements:
 * - Only Lexend/Manrope fonts
 * - Only CSS variables for colors, typography, spacing
 * - No hardcoded values
 * - WCAG AA/AAA compliance
 * 
 * Usage:
 * ```typescript
 * import { validateDesignSystem } from './utils/designSystemValidator';
 * 
 * const report = await validateDesignSystem();
 * console.log(report);
 * ```
 */

export interface ValidationRule {
  name: string;
  category: 'fonts' | 'colors' | 'spacing' | 'typography' | 'accessibility';
  severity: 'error' | 'warning';
  check: (element: Element) => ValidationIssue | null;
}

export interface ValidationIssue {
  rule: string;
  severity: 'error' | 'warning';
  element: string;
  description: string;
  fix: string;
  codeExample: {
    before: string;
    after: string;
  };
}

export interface ValidationReport {
  passed: boolean;
  score: number;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  issues: ValidationIssue[];
  summary: {
    fonts: { passed: number; failed: number };
    colors: { passed: number; failed: number };
    spacing: { passed: number; failed: number };
    typography: { passed: number; failed: number };
    accessibility: { passed: number; failed: number };
  };
  timestamp: string;
}

/**
 * Design System Validation Rules
 */
export const DESIGN_SYSTEM_RULES: ValidationRule[] = [
  // Font Family Rules
  {
    name: 'Approved Font Families Only',
    category: 'fonts',
    severity: 'error',
    check: (element) => {
      const style = window.getComputedStyle(element);
      const fontFamily = style.fontFamily;
      
      if (!fontFamily.includes('Lexend') && !fontFamily.includes('Manrope') && fontFamily !== 'inherit') {
        return {
          rule: 'Approved Font Families Only',
          severity: 'error',
          element: getElementSelector(element),
          description: `Unapproved font: ${fontFamily}. Only Lexend and Manrope are allowed.`,
          fix: 'Replace with Lexend (primary) or Manrope (small text only)',
          codeExample: {
            before: `fontFamily: '${fontFamily}'`,
            after: `fontFamily: 'Lexend, sans-serif'`
          }
        };
      }
      return null;
    }
  },
  
  // Color Rules
  {
    name: 'No Hardcoded Colors',
    category: 'colors',
    severity: 'error',
    check: (element) => {
      const inlineStyle = element.getAttribute('style');
      if (!inlineStyle) return null;
      
      // Check for hardcoded hex colors
      const hexPattern = /#[0-9A-Fa-f]{3,6}/g;
      const hexMatches = inlineStyle.match(hexPattern);
      
      if (hexMatches) {
        return {
          rule: 'No Hardcoded Colors',
          severity: 'error',
          element: getElementSelector(element),
          description: `Hardcoded hex color found: ${hexMatches[0]}`,
          fix: 'Replace with CSS variable',
          codeExample: {
            before: `color: '${hexMatches[0]}'`,
            after: `color: 'var(--foreground)'`
          }
        };
      }
      
      // Check for hardcoded rgb/rgba
      const rgbPattern = /rgba?\([0-9, ]+\)/g;
      const rgbMatches = inlineStyle.match(rgbPattern);
      
      if (rgbMatches && !inlineStyle.includes('var(')) {
        return {
          rule: 'No Hardcoded Colors',
          severity: 'error',
          element: getElementSelector(element),
          description: `Hardcoded RGB color found: ${rgbMatches[0]}`,
          fix: 'Replace with CSS variable',
          codeExample: {
            before: `backgroundColor: '${rgbMatches[0]}'`,
            after: `backgroundColor: 'var(--background)'`
          }
        };
      }
      
      return null;
    }
  },
  
  // Typography Rules
  {
    name: 'Use CSS Variables for Font Sizes',
    category: 'typography',
    severity: 'error',
    check: (element) => {
      const inlineStyle = element.getAttribute('style');
      if (!inlineStyle) return null;
      
      // Check for hardcoded px/rem font sizes
      const fontSizePattern = /fontSize:\s*['"]?(\d+(?:\.\d+)?(?:px|rem|em))['"]?/;
      const match = inlineStyle.match(fontSizePattern);
      
      if (match && !inlineStyle.includes('var(--text-') && !inlineStyle.includes('clamp')) {
        return {
          rule: 'Use CSS Variables for Font Sizes',
          severity: 'error',
          element: getElementSelector(element),
          description: `Hardcoded font size: ${match[1]}`,
          fix: 'Use design system font size variable',
          codeExample: {
            before: `fontSize: '${match[1]}'`,
            after: `fontSize: 'var(--text-base)'`
          }
        };
      }
      
      return null;
    }
  },
  
  // Spacing Rules
  {
    name: 'Use Tailwind Classes for Spacing',
    category: 'spacing',
    severity: 'warning',
    check: (element) => {
      const inlineStyle = element.getAttribute('style');
      if (!inlineStyle) return null;
      
      // Check for hardcoded padding/margin values
      const spacingPattern = /(padding|margin):\s*['"]?(\d+px)['"]?/g;
      const matches = Array.from(inlineStyle.matchAll(spacingPattern));
      
      if (matches.length > 0 && !element.className.includes('p-') && !element.className.includes('m-')) {
        const match = matches[0];
        return {
          rule: 'Use Tailwind Classes for Spacing',
          severity: 'warning',
          element: getElementSelector(element),
          description: `Hardcoded ${match[1]}: ${match[2]}`,
          fix: 'Use Tailwind spacing classes',
          codeExample: {
            before: `style={{ ${match[1]}: '${match[2]}' }}`,
            after: `className="p-6"  // or m-4, etc.`
          }
        };
      }
      
      return null;
    }
  },
  
  // Accessibility Rules
  {
    name: 'Images Must Have Alt Text',
    category: 'accessibility',
    severity: 'error',
    check: (element) => {
      if (element.tagName !== 'IMG') return null;
      
      const alt = element.getAttribute('alt');
      if (alt === null) {
        return {
          rule: 'Images Must Have Alt Text',
          severity: 'error',
          element: getElementSelector(element),
          description: 'Image missing alt attribute',
          fix: 'Add descriptive alt text (or alt="" for decorative images)',
          codeExample: {
            before: `<img src="photo.jpg" />`,
            after: `<img src="photo.jpg" alt="Team working together" />`
          }
        };
      }
      
      return null;
    }
  },
  
  {
    name: 'Interactive Elements Need Labels',
    category: 'accessibility',
    severity: 'error',
    check: (element) => {
      if (element.tagName !== 'BUTTON' && element.tagName !== 'A') return null;
      
      const hasText = element.textContent?.trim();
      const hasAriaLabel = element.getAttribute('aria-label');
      const hasAriaLabelledBy = element.getAttribute('aria-labelledby');
      const hasTitle = element.getAttribute('title');
      
      if (!hasText && !hasAriaLabel && !hasAriaLabelledBy && !hasTitle) {
        return {
          rule: 'Interactive Elements Need Labels',
          severity: 'error',
          element: getElementSelector(element),
          description: `${element.tagName.toLowerCase()} element has no accessible label`,
          fix: 'Add text content or aria-label',
          codeExample: {
            before: `<button><SearchIcon /></button>`,
            after: `<button aria-label="Search"><SearchIcon /></button>`
          }
        };
      }
      
      return null;
    }
  }
];

/**
 * Get CSS selector for element
 */
function getElementSelector(element: Element): string {
  const tag = element.tagName.toLowerCase();
  const id = element.id ? `#${element.id}` : '';
  const classes = element.className 
    ? `.${element.className.toString().split(' ').filter(c => c).join('.')}` 
    : '';
  return `${tag}${id}${classes}`;
}

/**
 * Validate entire page against design system
 */
export function validateDesignSystem(rootElement?: Element): ValidationReport {
  const root = rootElement || document.body;
  const allElements = [root, ...Array.from(root.querySelectorAll('*'))];
  
  const issues: ValidationIssue[] = [];
  let totalChecks = 0;
  let passedChecks = 0;
  let failedChecks = 0;
  
  const summary = {
    fonts: { passed: 0, failed: 0 },
    colors: { passed: 0, failed: 0 },
    spacing: { passed: 0, failed: 0 },
    typography: { passed: 0, failed: 0 },
    accessibility: { passed: 0, failed: 0 }
  };
  
  // Run all rules on all elements
  allElements.forEach(element => {
    DESIGN_SYSTEM_RULES.forEach(rule => {
      totalChecks++;
      const issue = rule.check(element);
      
      if (issue) {
        issues.push(issue);
        failedChecks++;
        summary[rule.category].failed++;
      } else {
        passedChecks++;
        summary[rule.category].passed++;
      }
    });
  });
  
  // Calculate score
  const score = Math.round((passedChecks / totalChecks) * 100);
  const passed = score >= 95; // 95% threshold for passing
  
  return {
    passed,
    score,
    totalChecks,
    passedChecks,
    failedChecks,
    issues,
    summary,
    timestamp: new Date().toISOString()
  };
}

/**
 * Export validation report as markdown
 */
export function exportValidationReport(report: ValidationReport): string {
  const lines: string[] = [];
  
  lines.push('# Design System Validation Report');
  lines.push('');
  lines.push(`**Generated:** ${new Date(report.timestamp).toLocaleString()}`);
  lines.push(`**Status:** ${report.passed ? '✅ PASSED' : '❌ FAILED'}`);
  lines.push(`**Score:** ${report.score}/100`);
  lines.push('');
  
  lines.push('## Summary');
  lines.push('');
  lines.push(`- **Total Checks:** ${report.totalChecks}`);
  lines.push(`- **Passed:** ${report.passedChecks} (${((report.passedChecks / report.totalChecks) * 100).toFixed(1)}%)`);
  lines.push(`- **Failed:** ${report.failedChecks} (${((report.failedChecks / report.totalChecks) * 100).toFixed(1)}%)`);
  lines.push('');
  
  lines.push('## Breakdown by Category');
  lines.push('');
  
  Object.entries(report.summary).forEach(([category, stats]) => {
    const total = stats.passed + stats.failed;
    const percentage = total > 0 ? ((stats.passed / total) * 100).toFixed(1) : '100.0';
    const status = stats.failed === 0 ? '✅' : '❌';
    lines.push(`### ${status} ${category.charAt(0).toUpperCase() + category.slice(1)}`);
    lines.push(`- Passed: ${stats.passed}/${total} (${percentage}%)`);
    lines.push(`- Failed: ${stats.failed}`);
    lines.push('');
  });
  
  if (report.issues.length > 0) {
    lines.push('## Issues Found');
    lines.push('');
    
    // Group by severity
    const errors = report.issues.filter(i => i.severity === 'error');
    const warnings = report.issues.filter(i => i.severity === 'warning');
    
    if (errors.length > 0) {
      lines.push(`### 🔴 Errors (${errors.length})`);
      lines.push('');
      errors.forEach((issue, index) => {
        lines.push(`#### ${index + 1}. ${issue.rule}`);
        lines.push(`- **Element:** \`${issue.element}\``);
        lines.push(`- **Description:** ${issue.description}`);
        lines.push(`- **Fix:** ${issue.fix}`);
        lines.push('');
        lines.push('**Code Example:**');
        lines.push('```tsx');
        lines.push('// Before:');
        lines.push(issue.codeExample.before);
        lines.push('');
        lines.push('// After:');
        lines.push(issue.codeExample.after);
        lines.push('```');
        lines.push('');
      });
    }
    
    if (warnings.length > 0) {
      lines.push(`### 🟡 Warnings (${warnings.length})`);
      lines.push('');
      warnings.forEach((issue, index) => {
        lines.push(`#### ${index + 1}. ${issue.rule}`);
        lines.push(`- **Element:** \`${issue.element}\``);
        lines.push(`- **Description:** ${issue.description}`);
        lines.push(`- **Fix:** ${issue.fix}`);
        lines.push('');
        lines.push('**Code Example:**');
        lines.push('```tsx');
        lines.push('// Before:');
        lines.push(issue.codeExample.before);
        lines.push('');
        lines.push('// After:');
        lines.push(issue.codeExample.after);
        lines.push('```');
        lines.push('');
      });
    }
  } else {
    lines.push('## ✅ No Issues Found');
    lines.push('');
    lines.push('All components are compliant with the LSX Design System!');
    lines.push('');
  }
  
  return lines.join('\n');
}

/**
 * Quick validation check (console output)
 */
export function quickValidate(): void {
  console.log('🔍 Running Design System Validation...');
  console.log('');
  
  const report = validateDesignSystem();
  
  console.log(`Status: ${report.passed ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`Score: ${report.score}/100`);
  console.log(`Checks: ${report.passedChecks}/${report.totalChecks} passed`);
  console.log('');
  
  if (report.issues.length > 0) {
    console.log(`Found ${report.issues.length} issues:`);
    
    const errors = report.issues.filter(i => i.severity === 'error');
    const warnings = report.issues.filter(i => i.severity === 'warning');
    
    if (errors.length > 0) {
      console.log(`  🔴 ${errors.length} errors`);
      errors.slice(0, 5).forEach(issue => {
        console.log(`     - ${issue.rule}: ${issue.description}`);
      });
      if (errors.length > 5) {
        console.log(`     ... and ${errors.length - 5} more`);
      }
    }
    
    if (warnings.length > 0) {
      console.log(`  🟡 ${warnings.length} warnings`);
    }
    
    console.log('');
    console.log('Run exportValidationReport() for detailed report');
  } else {
    console.log('✅ No issues found!');
  }
}
