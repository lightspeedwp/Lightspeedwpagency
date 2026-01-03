/**
 * JSDoc Generation Script
 * 
 * Automatically generates JSDoc comments for React components
 * following LSX Design system conventions.
 * 
 * **Usage:**
 * ```bash
 * npx tsx scripts/generate-jsdoc.ts <component-path>
 * ```
 * 
 * **Example:**
 * ```bash
 * npx tsx scripts/generate-jsdoc.ts src/app/components/common/Button.tsx
 * ```
 */

import * as fs from 'fs';
import * as path from 'path';

interface ComponentInfo {
  name: string;
  props: string[];
  description: string;
  wordPressMapping?: string;
  accessibility?: string[];
  tokens?: string[];
}

/**
 * Generate JSDoc template for a component
 */
function generateJSDoc(info: ComponentInfo): string {
  const lines: string[] = [];
  
  lines.push('/**');
  lines.push(` * ${info.name} Component`);
  lines.push(' *');
  lines.push(` * ${info.description}`);
  lines.push(' *');
  
  if (info.wordPressMapping) {
    lines.push(` * **WordPress Mapping:**`);
    lines.push(` * - ${info.wordPressMapping}`);
    lines.push(' *');
  }
  
  if (info.accessibility && info.accessibility.length > 0) {
    lines.push(' * **Accessibility:**');
    info.accessibility.forEach(rule => {
      lines.push(` * - ${rule}`);
    });
    lines.push(' *');
  }
  
  if (info.tokens && info.tokens.length > 0) {
    lines.push(' * **Design Tokens:**');
    info.tokens.forEach(token => {
      lines.push(` * - ${token}`);
    });
    lines.push(' *');
  }
  
  if (info.props.length > 0) {
    lines.push(' * **Props:**');
    info.props.forEach(prop => {
      lines.push(` * @param {Object} props - Component props`);
      lines.push(` * @param props.${prop} - ${prop} description`);
    });
    lines.push(' *');
  }
  
  lines.push(' * **Example:**');
  lines.push(' * ```tsx');
  lines.push(` * <${info.name}`);
  info.props.slice(0, 3).forEach(prop => {
    lines.push(` *   ${prop}="value"`);
  });
  lines.push(' * >');
  lines.push(' *   Content');
  lines.push(` * </${info.name}>`);
  lines.push(' * ```');
  lines.push(' *');
  lines.push(` * @see {@link https://lsxdesign.com/components/${info.name.toLowerCase()}|Component Documentation}`);
  lines.push(' */');
  
  return lines.join('\n');
}

/**
 * Component documentation templates
 */
const COMPONENT_TEMPLATES: Record<string, ComponentInfo> = {
  Button: {
    name: 'Button',
    description: 'Semantic button component with design system tokens and WCAG 2.1 AA compliance.',
    wordPressMapping: 'Core Buttons block with custom block styles',
    accessibility: [
      'Minimum 44×44px touch target on mobile',
      'Focus visible state with 2px ring',
      'Proper ARIA labels for icon-only buttons',
      'Supports keyboard navigation (Enter/Space)'
    ],
    tokens: [
      'Colors: var(--primary), var(--primary-foreground)',
      'Typography: var(--text-base), Lexend font',
      'Spacing: Tailwind classes (px-6, py-3)',
      'Border Radius: var(--radius)'
    ],
    props: ['variant', 'size', 'disabled', 'onClick', 'children', 'aria-label']
  },
  
  Heading: {
    name: 'Heading',
    description: 'Semantic heading component enforcing typography tokens and accessible hierarchy.',
    wordPressMapping: 'Core Heading block with token-based sizes',
    accessibility: [
      'Enforces logical heading order (H1 → H2 → H3)',
      'One H1 per page maximum',
      'Semantic HTML elements (h1, h2, h3, h4, h5, h6)',
      'Visual hierarchy through size tokens'
    ],
    tokens: [
      'Typography: var(--text-h1) through var(--text-h6)',
      'Font: Lexend with medium weight (500)',
      'Line height: Proportional to size',
      'Colors: var(--foreground)'
    ],
    props: ['level', 'children', 'className', 'style']
  },
  
  Container: {
    name: 'Container',
    description: 'Layout container enforcing max-width and responsive padding.',
    wordPressMapping: 'Core Group block with constrained layout',
    accessibility: [
      'Responsive padding for mobile/tablet/desktop',
      'Prevents horizontal scrolling',
      'Maintains reading width (max-width: 1400px)'
    ],
    tokens: [
      'Max Width: 1400px',
      'Padding: Tailwind classes (px-4 sm:px-6 lg:px-8)',
      'Margin: Auto-centered with mx-auto'
    ],
    props: ['children', 'className', 'maxWidth']
  },
  
  Section: {
    name: 'Section',
    description: 'Semantic section wrapper with 8 style variations and proper landmarks.',
    wordPressMapping: 'Core Group block with section styles',
    accessibility: [
      'Semantic <section> element',
      'Optional aria-label for screen readers',
      'Keyboard-accessible content',
      'Sufficient color contrast (WCAG AA)'
    ],
    tokens: [
      'Background: 8 style variations (default, muted, accent, etc.)',
      'Padding: Tailwind classes (py-12 md:py-16 lg:py-24)',
      'Colors: CSS variables for each variant'
    ],
    props: ['variant', 'children', 'className', 'aria-label']
  },
  
  Card: {
    name: 'Card',
    description: 'Reusable card component for content grids with hover effects.',
    wordPressMapping: 'Custom pattern combining Group + Image + Heading + Paragraph',
    accessibility: [
      'Clickable area spans entire card',
      'Focus visible state on interactive cards',
      'Alt text required for images',
      'Semantic HTML structure'
    ],
    tokens: [
      'Background: var(--card)',
      'Border: 1px solid var(--border-soft)',
      'Border Radius: var(--radius-lg)',
      'Hover: Subtle transform and shadow'
    ],
    props: ['title', 'description', 'image', 'href', 'tags', 'meta']
  }
};

/**
 * Extract component name from file path
 */
function getComponentName(filePath: string): string {
  return path.basename(filePath, '.tsx');
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('📚 JSDoc Documentation Generator\n');
    console.log('Available component templates:\n');
    
    Object.keys(COMPONENT_TEMPLATES).forEach(name => {
      console.log(`  - ${name}`);
    });
    
    console.log('\n**Usage:**');
    console.log('  npx tsx scripts/generate-jsdoc.ts <component-name>\n');
    console.log('**Example:**');
    console.log('  npx tsx scripts/generate-jsdoc.ts Button\n');
    return;
  }
  
  const componentName = args[0].replace('.tsx', '');
  const template = COMPONENT_TEMPLATES[componentName];
  
  if (!template) {
    console.error(`❌ No template found for component: ${componentName}\n`);
    console.log('Available templates:');
    Object.keys(COMPONENT_TEMPLATES).forEach(name => {
      console.log(`  - ${name}`);
    });
    process.exit(1);
  }
  
  const jsdoc = generateJSDoc(template);
  
  console.log('✅ Generated JSDoc:\n');
  console.log('-'.repeat(80));
  console.log(jsdoc);
  console.log('-'.repeat(80));
  console.log('\n📋 Copy this to the top of your component file!');
}

// Run if executed directly
if (require.main === module) {
  main();
}

export { generateJSDoc, COMPONENT_TEMPLATES };
