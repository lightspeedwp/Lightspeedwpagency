/**
 * WCAG Contrast Ratio Validator
 * 
 * Validates color contrast ratios against WCAG 2.1 standards.
 * Tests both light and dark mode color combinations.
 * 
 * WCAG Requirements:
 * - AA Normal Text: 4.5:1 minimum
 * - AA Large Text (18pt+): 3:1 minimum
 * - AAA Normal Text: 7:1 minimum
 * - AAA Large Text: 4.5:1 minimum
 * - UI Components: 3:1 minimum
 * 
 * Usage:
 * ```typescript
 * const results = await validateAllContrasts();
 * console.log(results);
 * ```
 */

export interface ContrastTest {
  name: string;
  foreground: string;
  background: string;
  ratio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
  category: 'text' | 'large-text' | 'ui-component';
}

export interface ContrastResults {
  mode: 'light' | 'dark';
  tests: ContrastTest[];
  totalTests: number;
  aaPass: number;
  aaaPass: number;
  aaPercentage: number;
  aaaPercentage: number;
  failures: ContrastTest[];
}

/**
 * Convert RGB color to relative luminance
 * Formula from WCAG 2.1 specification
 */
function getLuminance(rgb: { r: number; g: number; b: number }): number {
  const { r, g, b } = rgb;
  
  const rsRGB = r / 255;
  const gsRGB = g / 255;
  const bsRGB = b / 255;
  
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
  
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Parse rgba string to RGB object
 */
function parseRgba(rgba: string): { r: number; g: number; b: number } {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) {
    throw new Error(`Invalid color format: ${rgba}`);
  }
  
  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3])
  };
}

/**
 * Calculate contrast ratio between two colors
 * Returns ratio (e.g., 4.5:1 = 4.5)
 */
export function calculateContrast(foreground: string, background: string): number {
  const fg = parseRgba(foreground);
  const bg = parseRgba(background);
  
  const l1 = getLuminance(fg);
  const l2 = getLuminance(bg);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast ratio meets WCAG standards
 */
export function checkWCAG(ratio: number, category: 'text' | 'large-text' | 'ui-component'): {
  aa: boolean;
  aaa: boolean;
} {
  const requirements = {
    'text': { aa: 4.5, aaa: 7 },
    'large-text': { aa: 3, aaa: 4.5 },
    'ui-component': { aa: 3, aaa: 3 }  // AAA same as AA for UI
  };
  
  const req = requirements[category];
  
  return {
    aa: ratio >= req.aa,
    aaa: ratio >= req.aaa
  };
}

/**
 * Light mode color definitions
 */
const LIGHT_MODE_COLORS = {
  background: 'rgba(255, 255, 255, 1)',      // #FFFFFF
  foreground: 'rgba(9, 9, 9, 1)',            // #090909
  card: 'rgba(255, 255, 255, 1)',            // #FFFFFF
  cardForeground: 'rgba(9, 9, 9, 1)',        // #090909
  primary: 'rgba(30, 106, 255, 1)',          // #1E6AFF
  primaryForeground: 'rgba(255, 255, 255, 1)', // #FFFFFF
  secondary: 'rgba(123, 231, 255, 1)',       // #7BE7FF
  secondaryForeground: 'rgba(14, 50, 120, 1)', // #0E3278
  muted: 'rgba(225, 225, 225, 1)',           // #E1E1E1
  mutedForeground: 'rgba(86, 86, 86, 1)',    // #565656
  accent: 'rgba(123, 231, 255, 1)',          // #7BE7FF
  accentForeground: 'rgba(14, 50, 120, 1)',  // #0E3278
  destructive: 'rgba(204, 0, 0, 1)',         // #CC0000
  destructiveForeground: 'rgba(255, 255, 255, 1)', // #FFFFFF
  border: 'rgba(117, 117, 117, 1)',          // #757575
};

/**
 * Dark mode color definitions
 */
const DARK_MODE_COLORS = {
  background: 'rgba(9, 9, 9, 1)',            // #090909
  foreground: 'rgba(255, 255, 255, 1)',      // #FFFFFF
  card: 'rgba(30, 30, 30, 1)',               // #1E1E1E
  cardForeground: 'rgba(255, 255, 255, 1)',  // #FFFFFF
  primary: 'rgba(123, 231, 255, 1)',         // #7BE7FF
  primaryForeground: 'rgba(14, 50, 120, 1)', // #0E3278
  secondary: 'rgba(14, 50, 120, 1)',         // #0E3278
  secondaryForeground: 'rgba(123, 231, 255, 1)', // #7BE7FF
  muted: 'rgba(86, 86, 86, 1)',              // #565656
  mutedForeground: 'rgba(225, 225, 225, 1)', // #E1E1E1
  accent: 'rgba(30, 106, 255, 1)',           // #1E6AFF
  accentForeground: 'rgba(255, 255, 255, 1)', // #FFFFFF
  destructive: 'rgba(255, 99, 99, 1)',       // #FF6363
  destructiveForeground: 'rgba(9, 9, 9, 1)', // #090909
  border: 'rgba(117, 117, 117, 1)',          // #757575
};

/**
 * Test a single color pair
 */
function testColorPair(
  name: string,
  foreground: string,
  background: string,
  category: 'text' | 'large-text' | 'ui-component'
): ContrastTest {
  const ratio = calculateContrast(foreground, background);
  const wcag = checkWCAG(ratio, category);
  
  return {
    name,
    foreground,
    background,
    ratio: Math.round(ratio * 100) / 100,
    wcagAA: wcag.aa,
    wcagAAA: wcag.aaa,
    category
  };
}

/**
 * Validate all light mode contrasts
 */
export function validateLightMode(): ContrastResults {
  const colors = LIGHT_MODE_COLORS;
  const tests: ContrastTest[] = [];
  
  // Background text combinations
  tests.push(testColorPair('Background → Foreground', colors.foreground, colors.background, 'text'));
  tests.push(testColorPair('Background → Muted Foreground', colors.mutedForeground, colors.background, 'text'));
  
  // Card text combinations
  tests.push(testColorPair('Card → Card Foreground', colors.cardForeground, colors.card, 'text'));
  
  // Muted background combinations
  tests.push(testColorPair('Muted → Foreground', colors.foreground, colors.muted, 'text'));
  
  // Primary button/link
  tests.push(testColorPair('Primary → Primary Foreground', colors.primaryForeground, colors.primary, 'ui-component'));
  tests.push(testColorPair('Primary Link on Background', colors.primary, colors.background, 'text'));
  
  // Secondary button
  tests.push(testColorPair('Secondary → Secondary Foreground', colors.secondaryForeground, colors.secondary, 'ui-component'));
  
  // Accent
  tests.push(testColorPair('Accent → Accent Foreground', colors.accentForeground, colors.accent, 'ui-component'));
  
  // Destructive
  tests.push(testColorPair('Destructive → Destructive Foreground', colors.destructiveForeground, colors.destructive, 'ui-component'));
  
  // Border visibility
  tests.push(testColorPair('Border on Background', colors.border, colors.background, 'ui-component'));
  
  const totalTests = tests.length;
  const aaPass = tests.filter(t => t.wcagAA).length;
  const aaaPass = tests.filter(t => t.wcagAAA).length;
  const failures = tests.filter(t => !t.wcagAA);
  
  return {
    mode: 'light',
    tests,
    totalTests,
    aaPass,
    aaaPass,
    aaPercentage: Math.round((aaPass / totalTests) * 100),
    aaaPercentage: Math.round((aaaPass / totalTests) * 100),
    failures
  };
}

/**
 * Validate all dark mode contrasts
 */
export function validateDarkMode(): ContrastResults {
  const colors = DARK_MODE_COLORS;
  const tests: ContrastTest[] = [];
  
  // Background text combinations
  tests.push(testColorPair('Background → Foreground', colors.foreground, colors.background, 'text'));
  tests.push(testColorPair('Background → Muted Foreground', colors.mutedForeground, colors.background, 'text'));
  
  // Card text combinations
  tests.push(testColorPair('Card → Card Foreground', colors.cardForeground, colors.card, 'text'));
  
  // Muted background combinations
  tests.push(testColorPair('Muted → Muted Foreground', colors.mutedForeground, colors.muted, 'text'));
  
  // Primary button/link
  tests.push(testColorPair('Primary → Primary Foreground', colors.primaryForeground, colors.primary, 'ui-component'));
  tests.push(testColorPair('Primary Link on Background', colors.primary, colors.background, 'text'));
  
  // Secondary button
  tests.push(testColorPair('Secondary → Secondary Foreground', colors.secondaryForeground, colors.secondary, 'ui-component'));
  
  // Accent
  tests.push(testColorPair('Accent → Accent Foreground', colors.accentForeground, colors.accent, 'ui-component'));
  
  // Destructive
  tests.push(testColorPair('Destructive → Destructive Foreground', colors.destructiveForeground, colors.destructive, 'ui-component'));
  
  // Border visibility
  tests.push(testColorPair('Border on Background', colors.border, colors.background, 'ui-component'));
  
  const totalTests = tests.length;
  const aaPass = tests.filter(t => t.wcagAA).length;
  const aaaPass = tests.filter(t => t.wcagAAA).length;
  const failures = tests.filter(t => !t.wcagAA);
  
  return {
    mode: 'dark',
    tests,
    totalTests,
    aaPass,
    aaaPass,
    aaPercentage: Math.round((aaPass / totalTests) * 100),
    aaaPercentage: Math.round((aaaPass / totalTests) * 100),
    failures
  };
}

/**
 * Validate all contrasts (both modes)
 */
export async function validateAllContrasts(): Promise<{
  light: ContrastResults;
  dark: ContrastResults;
  summary: {
    lightAA: string;
    lightAAA: string;
    darkAA: string;
    darkAAA: string;
    overallStatus: 'PASS' | 'FAIL';
  };
}> {
  const light = validateLightMode();
  const dark = validateDarkMode();
  
  const overallPass = light.aaPercentage === 100 && dark.aaPercentage === 100;
  
  return {
    light,
    dark,
    summary: {
      lightAA: `${light.aaPercentage}% (${light.aaPass}/${light.totalTests})`,
      lightAAA: `${light.aaaPercentage}% (${light.aaaPass}/${light.totalTests})`,
      darkAA: `${dark.aaPercentage}% (${dark.aaPass}/${dark.totalTests})`,
      darkAAA: `${dark.aaaPercentage}% (${dark.aaaPass}/${dark.totalTests})`,
      overallStatus: overallPass ? 'PASS' : 'FAIL'
    }
  };
}

/**
 * Print detailed contrast report to console
 */
export async function printContrastReport(): Promise<void> {
  console.log('\n='.repeat(80));
  console.log('WCAG CONTRAST RATIO VALIDATION REPORT');
  console.log('='.repeat(80));
  
  const results = await validateAllContrasts();
  
  // Light Mode
  console.log('\n📊 LIGHT MODE RESULTS');
  console.log('-'.repeat(80));
  console.log(`Total Tests: ${results.light.totalTests}`);
  console.log(`WCAG AA: ${results.summary.lightAA} ${results.light.aaPercentage === 100 ? '✅' : '❌'}`);
  console.log(`WCAG AAA: ${results.summary.lightAAA} ${results.light.aaaPercentage === 100 ? '✅' : '⚠️'}`);
  
  console.log('\nDetailed Results:');
  results.light.tests.forEach(test => {
    const status = test.wcagAA ? '✅' : '❌';
    const aaaStatus = test.wcagAAA ? '(AAA ✅)' : '(AAA ❌)';
    console.log(`  ${status} ${test.name}: ${test.ratio}:1 ${aaaStatus}`);
  });
  
  if (results.light.failures.length > 0) {
    console.log('\n❌ FAILURES:');
    results.light.failures.forEach(test => {
      console.log(`  - ${test.name}: ${test.ratio}:1 (needs ${test.category === 'text' ? '4.5' : '3'}:1)`);
    });
  }
  
  // Dark Mode
  console.log('\n\n📊 DARK MODE RESULTS');
  console.log('-'.repeat(80));
  console.log(`Total Tests: ${results.dark.totalTests}`);
  console.log(`WCAG AA: ${results.summary.darkAA} ${results.dark.aaPercentage === 100 ? '✅' : '❌'}`);
  console.log(`WCAG AAA: ${results.summary.darkAAA} ${results.dark.aaaPercentage === 100 ? '✅' : '⚠️'}`);
  
  console.log('\nDetailed Results:');
  results.dark.tests.forEach(test => {
    const status = test.wcagAA ? '✅' : '❌';
    const aaaStatus = test.wcagAAA ? '(AAA ✅)' : '(AAA ❌)';
    console.log(`  ${status} ${test.name}: ${test.ratio}:1 ${aaaStatus}`);
  });
  
  if (results.dark.failures.length > 0) {
    console.log('\n❌ FAILURES:');
    results.dark.failures.forEach(test => {
      console.log(`  - ${test.name}: ${test.ratio}:1 (needs ${test.category === 'text' ? '4.5' : '3'}:1)`);
    });
  }
  
  // Summary
  console.log('\n\n📈 OVERALL SUMMARY');
  console.log('='.repeat(80));
  console.log(`Status: ${results.summary.overallStatus === 'PASS' ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Light Mode AA: ${results.summary.lightAA}`);
  console.log(`Light Mode AAA: ${results.summary.lightAAA}`);
  console.log(`Dark Mode AA: ${results.summary.darkAA}`);
  console.log(`Dark Mode AAA: ${results.summary.darkAAA}`);
  console.log('='.repeat(80) + '\n');
}

/**
 * Run contrast validation and return pass/fail
 */
export async function runContrastValidation(): Promise<boolean> {
  const results = await validateAllContrasts();
  return results.summary.overallStatus === 'PASS';
}
