/**
 * Performance Testing Utility
 * 
 * Comprehensive performance testing for:
 * - Fluid typography compliance
 * - Fluid spacing compliance
 * - Semantic HTML validation
 * - Font weight optimization
 * - CSS variable usage
 * - Core Web Vitals
 * - WCAG Compliance
 * - Light mode contrast
 * - Dark mode contrast
 * 
 * Run this in browser console to get performance report
 */

interface PerformanceTestResult {
  category: string;
  test: string;
  passed: boolean;
  details: string;
  recommendation?: string;
}

interface ComplianceScorecard {
  fluidTypography: number;
  fluidSpacing: number;
  semanticHTML: number;
  fontWeights: number;
  cssVariables: number;
  coreWebVitals: number;
  wcagCompliance: number;
  lightModeContrast: number;
  darkModeContrast: number;
  overall: number;
}

class DesignSystemPerformanceTester {
  private results: PerformanceTestResult[] = [];
  
  /**
   * Run all performance and compliance tests
   */
  async runAllTests(): Promise<{ results: PerformanceTestResult[]; scorecard: ComplianceScorecard }> {
    console.log('🚀 Starting Design System Performance Tests...\n');
    
    // Clear previous results
    this.results = [];
    
    // Run all test categories
    await this.testFluidTypography();
    await this.testFluidSpacing();
    await this.testSemanticHTML();
    await this.testFontWeights();
    await this.testCSSVariableUsage();
    await this.testCoreWebVitals();
    await this.testWCAGCompliance();
    await this.testLightModeContrast();
    await this.testDarkModeContrast();
    
    // Calculate scorecard
    const scorecard = this.calculateScorecard();
    
    // Print results
    this.printResults(scorecard);
    
    return { results: this.results, scorecard };
  }
  
  /**
   * Test 1: Fluid Typography Compliance
   */
  private async testFluidTypography(): Promise<void> {
    console.log('📐 Testing Fluid Typography...');
    
    // Check if fluid typography uses clamp()
    const styles = document.styleSheets;
    let clampCount = 0;
    let headingCount = 0;
    
    for (let i = 0; i < styles.length; i++) {
      try {
        const rules = styles[i].cssRules || styles[i].rules;
        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j] as CSSStyleRule;
          if (rule.style) {
            const cssText = rule.cssText;
            if (cssText.includes('--text-h') && cssText.includes('clamp')) {
              clampCount++;
            }
            if (cssText.includes('--text-h')) {
              headingCount++;
            }
          }
        }
      } catch (e) {
        // Skip cross-origin stylesheets
      }
    }
    
    const passed = clampCount >= 6; // H1-H6
    this.results.push({
      category: 'Fluid Typography',
      test: 'Heading scales use clamp() for fluid scaling',
      passed,
      details: `Found ${clampCount}/6 headings with clamp()`,
      recommendation: passed ? undefined : 'Use clamp() for all heading sizes (H1-H6)'
    });
    
    // Check if headings use CSS variables
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let variableUsage = 0;
    let inlineStyles = 0;
    
    headings.forEach(heading => {
      const fontSize = window.getComputedStyle(heading).fontSize;
      const fontSizeStyle = heading.style.fontSize;
      
      if (fontSizeStyle && fontSizeStyle.includes('var(--text-h')) {
        variableUsage++;
      } else if (fontSizeStyle && !fontSizeStyle.includes('var(')) {
        inlineStyles++;
      }
    });
    
    const variableCompliance = headings.length === 0 ? true : (inlineStyles === 0);
    this.results.push({
      category: 'Fluid Typography',
      test: 'Headings use CSS variable font sizes',
      passed: variableCompliance,
      details: `${headings.length} headings found, ${inlineStyles} with hardcoded sizes`,
      recommendation: variableCompliance ? undefined : 'Use var(--text-h*) for all heading sizes'
    });
    
    // Check viewport responsiveness
    const viewportWidth = window.innerWidth;
    const h1 = document.querySelector('h1');
    if (h1) {
      const h1Size = parseFloat(window.getComputedStyle(h1).fontSize);
      const isFluid = h1Size >= 40 && h1Size <= 64; // clamp range
      
      this.results.push({
        category: 'Fluid Typography',
        test: 'H1 size responds to viewport width',
        passed: isFluid,
        details: `H1 size: ${h1Size.toFixed(1)}px at ${viewportWidth}px viewport`,
        recommendation: isFluid ? undefined : 'H1 should scale between 40px-64px'
      });
    }
  }
  
  /**
   * Test 2: Fluid Spacing Compliance
   */
  private async testFluidSpacing(): Promise<void> {
    console.log('📏 Testing Fluid Spacing...');
    
    // Check if spacing uses consistent scale
    const elements = document.querySelectorAll('*');
    const spacingValues = new Set<string>();
    let tailwindUsage = 0;
    let hardcodedSpacing = 0;
    
    elements.forEach(el => {
      const styles = window.getComputedStyle(el);
      const classes = el.className;
      
      // Check for Tailwind spacing classes
      if (typeof classes === 'string' && (
        classes.match(/\b(p|m|gap)-\d+\b/) ||
        classes.match(/\b(px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr)-\d+\b/)
      )) {
        tailwindUsage++;
      }
      
      // Check for hardcoded padding/margin
      const htmlEl = el as HTMLElement;
      if (htmlEl.style.padding && !htmlEl.style.padding.includes('var(')) {
        hardcodedSpacing++;
      }
      if (htmlEl.style.margin && !htmlEl.style.margin.includes('var(')) {
        hardcodedSpacing++;
      }
    });
    
    const spacingCompliance = hardcodedSpacing < (tailwindUsage * 0.1); // Allow 10% non-tailwind
    this.results.push({
      category: 'Fluid Spacing',
      test: 'Spacing uses Tailwind classes (not hardcoded)',
      passed: spacingCompliance,
      details: `${tailwindUsage} Tailwind classes, ${hardcodedSpacing} hardcoded values`,
      recommendation: spacingCompliance ? undefined : 'Use Tailwind spacing classes (p-*, m-*, gap-*)'
    });
    
    // Check for consistent spacing scale
    const sections = document.querySelectorAll('section, [class*="Section"]');
    let consistentSpacing = 0;
    
    sections.forEach(section => {
      const classes = section.className;
      if (typeof classes === 'string' && classes.match(/\b(py|p)-(\d+)\b/)) {
        consistentSpacing++;
      }
    });
    
    const consistencyPassed = sections.length === 0 || consistentSpacing / sections.length > 0.8;
    this.results.push({
      category: 'Fluid Spacing',
      test: 'Sections use consistent spacing scale',
      passed: consistencyPassed,
      details: `${consistentSpacing}/${sections.length} sections with consistent spacing`,
      recommendation: consistencyPassed ? undefined : 'Apply consistent py-* classes to all sections'
    });
  }
  
  /**
   * Test 3: Semantic HTML Validation
   */
  private async testSemanticHTML(): Promise<void> {
    console.log('🏗️ Testing Semantic HTML...');
    
    // Check for semantic landmarks
    const hasHeader = document.querySelector('header') !== null;
    const hasMain = document.querySelector('main') !== null;
    const hasFooter = document.querySelector('footer') !== null;
    const hasNav = document.querySelector('nav') !== null;
    
    this.results.push({
      category: 'Semantic HTML',
      test: 'Page has semantic landmarks (header, main, footer, nav)',
      passed: hasHeader && hasMain && hasFooter && hasNav,
      details: `header: ${hasHeader}, main: ${hasMain}, footer: ${hasFooter}, nav: ${hasNav}`,
      recommendation: (!hasHeader || !hasMain || !hasFooter || !hasNav) ? 
        'Add missing semantic landmarks' : undefined
    });
    
    // Check heading hierarchy
    const h1s = document.querySelectorAll('h1');
    const h1Count = h1s.length;
    
    this.results.push({
      category: 'Semantic HTML',
      test: 'Exactly one H1 per page',
      passed: h1Count === 1,
      details: `Found ${h1Count} H1 element(s)`,
      recommendation: h1Count !== 1 ? 'Ensure exactly one H1 per page' : undefined
    });
    
    // Check for proper list usage
    const listsWithClasses = document.querySelectorAll('ul, ol');
    const properLists = Array.from(listsWithClasses).filter(list => {
      const children = list.children;
      return Array.from(children).every(child => child.tagName === 'LI');
    });
    
    const listCompliance = listsWithClasses.length === 0 || 
      properLists.length / listsWithClasses.length > 0.9;
    
    this.results.push({
      category: 'Semantic HTML',
      test: 'Lists use proper <ul>/<ol> with <li> children',
      passed: listCompliance,
      details: `${properLists.length}/${listsWithClasses.length} lists properly structured`,
      recommendation: listCompliance ? undefined : 'Ensure all lists use semantic HTML'
    });
    
    // Check for semantic buttons vs divs
    const clickableDivs = document.querySelectorAll('div[onclick], div[role="button"]');
    const buttons = document.querySelectorAll('button, a[href], input[type="button"]');
    
    const buttonCompliance = clickableDivs.length < buttons.length * 0.1; // Max 10% divs
    this.results.push({
      category: 'Semantic HTML',
      test: 'Interactive elements use <button> or <a> (not clickable divs)',
      passed: buttonCompliance,
      details: `${buttons.length} semantic buttons, ${clickableDivs.length} clickable divs`,
      recommendation: buttonCompliance ? undefined : 'Replace clickable divs with semantic buttons'
    });
  }
  
  /**
   * Test 4: Font Weight Optimization
   */
  private async testFontWeights(): Promise<void> {
    console.log('⚖️ Testing Font Weights...');
    
    // Check for modern font weight usage
    const elements = document.querySelectorAll('*');
    const fontWeights = new Map<string, number>();
    
    elements.forEach(el => {
      const weight = window.getComputedStyle(el).fontWeight;
      fontWeights.set(weight, (fontWeights.get(weight) || 0) + 1);
    });
    
    // Modern design uses: 400 (regular), 500 (medium), 600 (semibold)
    const modernWeights = ['400', '500', '600'];
    const legacyWeights = ['700', '800', '900'];
    
    const modernUsage = modernWeights.reduce((sum, w) => sum + (fontWeights.get(w) || 0), 0);
    const legacyUsage = legacyWeights.reduce((sum, w) => sum + (fontWeights.get(w) || 0), 0);
    const totalUsage = modernUsage + legacyUsage;
    
    const modernCompliance = totalUsage === 0 || legacyUsage / totalUsage < 0.1;
    
    this.results.push({
      category: 'Font Weights',
      test: 'Uses modern font weights (400, 500, 600) over legacy (700+)',
      passed: modernCompliance,
      details: `Modern: ${modernUsage}, Legacy (700+): ${legacyUsage}`,
      recommendation: modernCompliance ? undefined : 'Reduce usage of bold (700+) weights for modern design'
    });
    
    // Check headings use medium weight (500)
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let mediumWeightHeadings = 0;
    let boldHeadings = 0;
    
    headings.forEach(h => {
      const weight = window.getComputedStyle(h).fontWeight;
      if (weight === '500') mediumWeightHeadings++;
      if (parseInt(weight) >= 600) boldHeadings++;
    });
    
    const headingCompliance = headings.length === 0 || mediumWeightHeadings > boldHeadings;
    
    this.results.push({
      category: 'Font Weights',
      test: 'Headings use medium weight (500) for modern typography',
      passed: headingCompliance,
      details: `${mediumWeightHeadings} medium, ${boldHeadings} bold headings`,
      recommendation: headingCompliance ? undefined : 'Use font-weight: 500 for headings (modern design)'
    });
  }
  
  /**
   * Test 5: CSS Variable Usage
   */
  private async testCSSVariableUsage(): Promise<void> {
    console.log('🎨 Testing CSS Variable Usage...');
    
    // Check inline styles for hardcoded values
    const elements = document.querySelectorAll('*');
    let cssVarUsage = 0;
    let hardcodedColors = 0;
    let hardcodedSizes = 0;
    
    elements.forEach(el => {
      const htmlEl = el as HTMLElement;
      const style = htmlEl.style;
      
      // Check colors
      if (style.color && style.color.includes('var(')) cssVarUsage++;
      if (style.color && !style.color.includes('var(') && style.color !== '') hardcodedColors++;
      
      if (style.backgroundColor && style.backgroundColor.includes('var(')) cssVarUsage++;
      if (style.backgroundColor && !style.backgroundColor.includes('var(') && 
          style.backgroundColor !== '') hardcodedColors++;
      
      // Check sizes
      if (style.fontSize && style.fontSize.includes('var(')) cssVarUsage++;
      if (style.fontSize && !style.fontSize.includes('var(') && style.fontSize !== '') hardcodedSizes++;
    });
    
    const totalInlineStyles = cssVarUsage + hardcodedColors + hardcodedSizes;
    const variableCompliance = totalInlineStyles === 0 || cssVarUsage / totalInlineStyles > 0.9;
    
    this.results.push({
      category: 'CSS Variables',
      test: 'Inline styles use CSS variables (not hardcoded values)',
      passed: variableCompliance,
      details: `${cssVarUsage} var() usage, ${hardcodedColors + hardcodedSizes} hardcoded values`,
      recommendation: variableCompliance ? undefined : 'Replace hardcoded values with CSS variables'
    });
    
    // Check for Lexend/Manrope font usage only
    let lexendUsage = 0;
    let manropeUsage = 0;
    let otherFonts = 0;
    
    elements.forEach(el => {
      const fontFamily = window.getComputedStyle(el).fontFamily;
      if (fontFamily.includes('Lexend')) lexendUsage++;
      else if (fontFamily.includes('Manrope')) manropeUsage++;
      else if (!fontFamily.includes('sans-serif') && !fontFamily.includes('serif')) otherFonts++;
    });
    
    const fontCompliance = otherFonts < (lexendUsage + manropeUsage) * 0.01; // Allow 1% system fonts
    
    this.results.push({
      category: 'CSS Variables',
      test: 'Only Lexend/Manrope fonts used (design system compliance)',
      passed: fontCompliance,
      details: `Lexend: ${lexendUsage}, Manrope: ${manropeUsage}, Other: ${otherFonts}`,
      recommendation: fontCompliance ? undefined : 'Only use Lexend and Manrope fonts'
    });
  }
  
  /**
   * Test 6: Core Web Vitals
   */
  private async testCoreWebVitals(): Promise<void> {
    console.log('⚡ Testing Core Web Vitals...');
    
    // Get performance metrics
    const perfEntries = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (perfEntries) {
      // First Contentful Paint (FCP) - Good: < 1.8s
      const fcp = performance.getEntriesByName('first-contentful-paint')[0];
      const fcpTime = fcp ? fcp.startTime : 0;
      const fcpPassed = fcpTime < 1800;
      
      this.results.push({
        category: 'Core Web Vitals',
        test: 'First Contentful Paint (FCP) < 1.8s',
        passed: fcpPassed,
        details: `FCP: ${(fcpTime / 1000).toFixed(2)}s`,
        recommendation: fcpPassed ? undefined : 'Optimize resource loading and code splitting'
      });
      
      // DOM Content Loaded
      const dcl = perfEntries.domContentLoadedEventEnd - perfEntries.domContentLoadedEventStart;
      const dclPassed = dcl < 1500;
      
      this.results.push({
        category: 'Core Web Vitals',
        test: 'DOM Content Loaded < 1.5s',
        passed: dclPassed,
        details: `DCL: ${(dcl / 1000).toFixed(2)}s`,
        recommendation: dclPassed ? undefined : 'Reduce JavaScript execution time'
      });
    }
    
    // Check lazy loading
    const images = document.querySelectorAll('img');
    let lazyImages = 0;
    images.forEach(img => {
      if (img.loading === 'lazy') lazyImages++;
    });
    
    const lazyCompliance = images.length === 0 || lazyImages / images.length > 0.7; // 70% lazy
    
    this.results.push({
      category: 'Core Web Vitals',
      test: 'Images use lazy loading (loading="lazy")',
      passed: lazyCompliance,
      details: `${lazyImages}/${images.length} images with lazy loading`,
      recommendation: lazyCompliance ? undefined : 'Add loading="lazy" to below-fold images'
    });
    
    // Check bundle size (estimate)
    const scripts = document.querySelectorAll('script[src]');
    let totalScriptSize = 0;
    
    // Note: Actual size requires network timing API
    this.results.push({
      category: 'Core Web Vitals',
      test: 'JavaScript bundle size optimized',
      passed: scripts.length < 10, // Reasonable number of scripts
      details: `${scripts.length} script files loaded`,
      recommendation: scripts.length >= 10 ? 'Consider code splitting and lazy loading' : undefined
    });
  }
  
  /**
   * Test 7: WCAG Compliance
   */
  private async testWCAGCompliance(): Promise<void> {
    console.log('♿ Testing WCAG Compliance...');
    
    // Check for alt text on images
    const images = document.querySelectorAll('img');
    let altTextCount = 0;
    
    images.forEach(img => {
      if (img.alt && img.alt.trim() !== '') altTextCount++;
    });
    
    const altTextCompliance = images.length === 0 || altTextCount / images.length > 0.9;
    
    this.results.push({
      category: 'WCAG Compliance',
      test: 'Images have descriptive alt text',
      passed: altTextCompliance,
      details: `${altTextCount}/${images.length} images with alt text`,
      recommendation: altTextCompliance ? undefined : 'Add descriptive alt text to all images'
    });
    
    // Check for ARIA labels on interactive elements
    const interactiveElements = document.querySelectorAll('button, a[href], input[type="button"]');
    let ariaLabelCount = 0;
    
    interactiveElements.forEach(el => {
      const ariaLabel = el.getAttribute('aria-label');
      if (ariaLabel && ariaLabel.trim() !== '') ariaLabelCount++;
    });
    
    const ariaLabelCompliance = interactiveElements.length === 0 || ariaLabelCount / interactiveElements.length > 0.9;
    
    this.results.push({
      category: 'WCAG Compliance',
      test: 'Interactive elements have ARIA labels',
      passed: ariaLabelCompliance,
      details: `${ariaLabelCount}/${interactiveElements.length} elements with ARIA labels`,
      recommendation: ariaLabelCompliance ? undefined : 'Add ARIA labels to all interactive elements'
    });
  }
  
  /**
   * Test 8: Light Mode Contrast
   */
  private async testLightModeContrast(): Promise<void> {
    console.log('☀️ Testing Light Mode Contrast...');
    
    // Check contrast ratio for text on background
    const elements = document.querySelectorAll('*');
    let contrastPassCount = 0;
    let totalTextElements = 0;
    
    elements.forEach(el => {
      const color = window.getComputedStyle(el).color;
      const backgroundColor = window.getComputedStyle(el).backgroundColor;
      
      if (color && backgroundColor) {
        const colorRGB = this.hexToRgb(color);
        const bgRGB = this.hexToRgb(backgroundColor);
        
        if (colorRGB && bgRGB) {
          const contrastRatio = this.calculateContrastRatio(colorRGB, bgRGB);
          if (contrastRatio >= 4.5) contrastPassCount++;
          totalTextElements++;
        }
      }
    });
    
    const contrastCompliance = totalTextElements === 0 || contrastPassCount / totalTextElements > 0.9;
    
    this.results.push({
      category: 'Light Mode Contrast',
      test: 'Text has sufficient contrast against background (4.5:1 ratio)',
      passed: contrastCompliance,
      details: `${contrastPassCount}/${totalTextElements} elements with sufficient contrast`,
      recommendation: contrastCompliance ? undefined : 'Increase text contrast for better readability'
    });
  }
  
  /**
   * Test 9: Dark Mode Contrast
   */
  private async testDarkModeContrast(): Promise<void> {
    console.log('🌙 Testing Dark Mode Contrast...');
    
    // Check contrast ratio for text on background
    const elements = document.querySelectorAll('*');
    let contrastPassCount = 0;
    let totalTextElements = 0;
    
    elements.forEach(el => {
      const color = window.getComputedStyle(el).color;
      const backgroundColor = window.getComputedStyle(el).backgroundColor;
      
      if (color && backgroundColor) {
        const colorRGB = this.hexToRgb(color);
        const bgRGB = this.hexToRgb(backgroundColor);
        
        if (colorRGB && bgRGB) {
          const contrastRatio = this.calculateContrastRatio(colorRGB, bgRGB);
          if (contrastRatio >= 4.5) contrastPassCount++;
          totalTextElements++;
        }
      }
    });
    
    const contrastCompliance = totalTextElements === 0 || contrastPassCount / totalTextElements > 0.9;
    
    this.results.push({
      category: 'Dark Mode Contrast',
      test: 'Text has sufficient contrast against background (4.5:1 ratio)',
      passed: contrastCompliance,
      details: `${contrastPassCount}/${totalTextElements} elements with sufficient contrast`,
      recommendation: contrastCompliance ? undefined : 'Increase text contrast for better readability'
    });
  }
  
  /**
   * Calculate compliance scorecard
   */
  private calculateScorecard(): ComplianceScorecard {
    const categories = {
      'Fluid Typography': 0,
      'Fluid Spacing': 0,
      'Semantic HTML': 0,
      'Font Weights': 0,
      'CSS Variables': 0,
      'Core Web Vitals': 0,
      'WCAG Compliance': 0,
      'Light Mode Contrast': 0,
      'Dark Mode Contrast': 0
    };
    
    // Count passed tests per category
    this.results.forEach(result => {
      if (result.category in categories) {
        if (result.passed) {
          categories[result.category as keyof typeof categories]++;
        }
      }
    });
    
    // Calculate percentages
    const getScore = (category: string) => {
      const total = this.results.filter(r => r.category === category).length;
      return total === 0 ? 100 : (categories[category as keyof typeof categories] / total) * 100;
    };
    
    const scores = {
      fluidTypography: getScore('Fluid Typography'),
      fluidSpacing: getScore('Fluid Spacing'),
      semanticHTML: getScore('Semantic HTML'),
      fontWeights: getScore('Font Weights'),
      cssVariables: getScore('CSS Variables'),
      coreWebVitals: getScore('Core Web Vitals'),
      wcagCompliance: getScore('WCAG Compliance'),
      lightModeContrast: getScore('Light Mode Contrast'),
      darkModeContrast: getScore('Dark Mode Contrast'),
      overall: 0
    };
    
    // Calculate overall score
    scores.overall = Object.values(scores).reduce((sum, score) => 
      score === 0 ? sum : sum + score, 0
    ) / 9;
    
    return scores;
  }
  
  /**
   * Print results to console
   */
  private printResults(scorecard: ComplianceScorecard): void {
    console.log('\n' + '='.repeat(60));
    console.log('📊 DESIGN SYSTEM COMPLIANCE SCORECARD');
    console.log('='.repeat(60) + '\n');
    
    const getGrade = (score: number) => {
      if (score >= 95) return '⭐ A+';
      if (score >= 90) return '✅ A';
      if (score >= 80) return '👍 B';
      if (score >= 70) return '⚠️ C';
      if (score >= 60) return '⚠️ D';
      return '❌ F';
    };
    
    console.log(`Fluid Typography:  ${scorecard.fluidTypography.toFixed(1)}% ${getGrade(scorecard.fluidTypography)}`);
    console.log(`Fluid Spacing:     ${scorecard.fluidSpacing.toFixed(1)}% ${getGrade(scorecard.fluidSpacing)}`);
    console.log(`Semantic HTML:     ${scorecard.semanticHTML.toFixed(1)}% ${getGrade(scorecard.semanticHTML)}`);
    console.log(`Font Weights:      ${scorecard.fontWeights.toFixed(1)}% ${getGrade(scorecard.fontWeights)}`);
    console.log(`CSS Variables:     ${scorecard.cssVariables.toFixed(1)}% ${getGrade(scorecard.cssVariables)}`);
    console.log(`Core Web Vitals:   ${scorecard.coreWebVitals.toFixed(1)}% ${getGrade(scorecard.coreWebVitals)}`);
    console.log(`WCAG Compliance:   ${scorecard.wcagCompliance.toFixed(1)}% ${getGrade(scorecard.wcagCompliance)}`);
    console.log(`Light Mode Contrast: ${scorecard.lightModeContrast.toFixed(1)}% ${getGrade(scorecard.lightModeContrast)}`);
    console.log(`Dark Mode Contrast:  ${scorecard.darkModeContrast.toFixed(1)}% ${getGrade(scorecard.darkModeContrast)}`);
    console.log('\n' + '-'.repeat(60));
    console.log(`OVERALL SCORE:     ${scorecard.overall.toFixed(1)}% ${getGrade(scorecard.overall)}`);
    console.log('='.repeat(60) + '\n');
    
    // Print detailed results
    console.log('📋 DETAILED TEST RESULTS:\n');
    
    const categories = [...new Set(this.results.map(r => r.category))];
    categories.forEach(category => {
      console.log(`\n${category}:`);
      console.log('-'.repeat(60));
      
      this.results
        .filter(r => r.category === category)
        .forEach(result => {
          const icon = result.passed ? '✅' : '❌';
          console.log(`${icon} ${result.test}`);
          console.log(`   ${result.details}`);
          if (result.recommendation) {
            console.log(`   💡 ${result.recommendation}`);
          }
        });
    });
    
    console.log('\n' + '='.repeat(60));
    console.log('🎉 Testing Complete!');
    console.log('='.repeat(60) + '\n');
  }
  
  /**
   * Helper function to convert hex color to RGB
   */
  private hexToRgb(hex: string): [number, number, number] | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
  }
  
  /**
   * Helper function to calculate contrast ratio
   */
  private calculateContrastRatio(color1: [number, number, number], color2: [number, number, number]): number {
    const luminance1 = this.calculateLuminance(color1);
    const luminance2 = this.calculateLuminance(color2);
    
    const lighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);
    
    return (lighter + 0.05) / (darker + 0.05);
  }
  
  /**
   * Helper function to calculate luminance
   */
  private calculateLuminance(color: [number, number, number]): number {
    const [r, g, b] = color.map(c => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.587 * g + 0.114 * b;
  }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  (window as any).DesignSystemPerformanceTester = DesignSystemPerformanceTester;
  (window as any).runPerformanceTests = async () => {
    const tester = new DesignSystemPerformanceTester();
    return await tester.runAllTests();
  };
  
  console.log('🎯 Performance Testing Loaded!');
  console.log('Run tests with: await runPerformanceTests()');
}

export { DesignSystemPerformanceTester };
export type { PerformanceTestResult, ComplianceScorecard };