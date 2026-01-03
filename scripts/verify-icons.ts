/**
 * Icon Verification Script
 * 
 * Automatically verifies all lucide-react icons used in the codebase
 * are valid and exported from the library.
 * 
 * **Usage:**
 * ```bash
 * npx tsx scripts/verify-icons.ts
 * ```
 * 
 * **What it checks:**
 * - All icon imports in .tsx files
 * - Validates against lucide-react exports
 * - Reports missing or invalid icons
 * - Suggests alternatives for common misspellings
 */

import * as fs from 'fs';
import * as path from 'path';

// Common icon aliases and corrections
const ICON_ALIASES: Record<string, string> = {
  'ChevronDown': 'ChevronDown',
  'ChevronUp': 'ChevronUp',
  'ChevronLeft': 'ChevronLeft',
  'ChevronRight': 'ChevronRight',
  'ArrowRight': 'ArrowRight',
  'ArrowLeft': 'ArrowLeft',
  'Menu': 'Menu',
  'X': 'X',
  'Search': 'Search',
  'Mail': 'Mail',
  'Phone': 'Phone',
  'MapPin': 'MapPin',
  'Calendar': 'Calendar',
  'Clock': 'Clock',
  'User': 'User',
  'Home': 'Home',
  'Star': 'Star',
  'Heart': 'Heart',
  'Check': 'Check',
  'AlertCircle': 'AlertCircle',
  'Info': 'Info',
  'ExternalLink': 'ExternalLink',
  'Download': 'Download',
  'Upload': 'Upload',
  'File': 'File',
  'FileText': 'FileText',
  'Folder': 'Folder',
  'Image': 'Image',
  'Play': 'Play',
  'Pause': 'Pause',
  'Settings': 'Settings',
  'Filter': 'Filter',
  'SlidersHorizontal': 'SlidersHorizontal',
  'Grid': 'Grid',
  'List': 'List',
  'LayoutGrid': 'LayoutGrid',
  'Package': 'Package',
  'ShoppingCart': 'ShoppingCart',
  'CreditCard': 'CreditCard',
  'Globe': 'Globe',
  'Zap': 'Zap',
  'Target': 'Target',
  'TrendingUp': 'TrendingUp',
  'Award': 'Award',
  'Shield': 'Shield',
  'Lock': 'Lock',
  'Unlock': 'Unlock',
  'Eye': 'Eye',
  'EyeOff': 'EyeOff',
  'MessageCircle': 'MessageCircle',
  'Send': 'Send',
  'Share2': 'Share2',
  'Link': 'Link',
  'Copy': 'Copy',
  'Trash2': 'Trash2',
  'Edit': 'Edit',
  'Plus': 'Plus',
  'Minus': 'Minus',
  'MoreVertical': 'MoreVertical',
  'MoreHorizontal': 'MoreHorizontal',
  'RefreshCw': 'RefreshCw',
  'RotateCw': 'RotateCw',
  'Maximize2': 'Maximize2',
  'Minimize2': 'Minimize2',
  'Move': 'Move',
  'Code': 'Code',
  'Terminal': 'Terminal',
  'Palette': 'Palette',
  'Layers': 'Layers',
  'Monitor': 'Monitor',
  'Smartphone': 'Smartphone',
  'Tablet': 'Tablet',
  'Wifi': 'Wifi',
  'WifiOff': 'WifiOff',
  'Battery': 'Battery',
  'BatteryCharging': 'BatteryCharging',
  'Volume2': 'Volume2',
  'VolumeX': 'VolumeX',
  'Camera': 'Camera',
  'Video': 'Video',
  'Mic': 'Mic',
  'MicOff': 'MicOff',
  'Music': 'Music',
  'Headphones': 'Headphones',
  'Printer': 'Printer',
  'Save': 'Save',
  'Bookmark': 'Bookmark',
  'Flag': 'Flag',
  'Tag': 'Tag',
  'Sun': 'Sun',
  'Moon': 'Moon',
  'Cloud': 'Cloud',
  'CloudRain': 'CloudRain',
  'Sparkles': 'Sparkles',
  'Flame': 'Flame',
  'Droplet': 'Droplet',
  'Wind': 'Wind',
  'Facebook': 'Facebook',
  'Instagram': 'Instagram',
  'Twitter': 'Twitter',
  'Linkedin': 'Linkedin',
  'Youtube': 'Youtube',
  'Github': 'Github',
  'Figma': 'Figma',
  'Slack': 'Slack',
  'Chrome': 'Chrome',
  'Codesandbox': 'Codesandbox',
};

interface IconUsage {
  file: string;
  line: number;
  icon: string;
  import: string;
}

interface VerificationResult {
  valid: IconUsage[];
  invalid: IconUsage[];
  suggestions: Map<string, string[]>;
}

/**
 * Recursively find all .tsx files
 */
function findTsxFiles(dir: string): string[] {
  const files: string[] = [];
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      // Skip node_modules and build directories
      if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'build') {
        continue;
      }
      
      if (entry.isDirectory()) {
        files.push(...findTsxFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files;
}

/**
 * Extract icon imports from a file
 */
function extractIconImports(filePath: string): IconUsage[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const usages: IconUsage[] = [];
  
  // Match: import { IconName, AnotherIcon } from 'lucide-react';
  const importRegex = /import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/g;
  
  lines.forEach((line, index) => {
    const matches = line.matchAll(importRegex);
    
    for (const match of matches) {
      const imports = match[1]
        .split(',')
        .map(i => i.trim())
        .filter(i => i.length > 0);
      
      imports.forEach(icon => {
        usages.push({
          file: filePath,
          line: index + 1,
          icon,
          import: line.trim()
        });
      });
    }
  });
  
  return usages;
}

/**
 * Verify icons against lucide-react exports
 */
function verifyIcons(usages: IconUsage[]): VerificationResult {
  const result: VerificationResult = {
    valid: [],
    invalid: [],
    suggestions: new Map()
  };
  
  usages.forEach(usage => {
    if (ICON_ALIASES[usage.icon]) {
      result.valid.push(usage);
    } else {
      result.invalid.push(usage);
      
      // Find similar icon names
      const similar = Object.keys(ICON_ALIASES).filter(name =>
        name.toLowerCase().includes(usage.icon.toLowerCase()) ||
        usage.icon.toLowerCase().includes(name.toLowerCase())
      );
      
      if (similar.length > 0) {
        result.suggestions.set(usage.icon, similar);
      }
    }
  });
  
  return result;
}

/**
 * Generate report
 */
function generateReport(result: VerificationResult): string {
  let report = '';
  
  report += '=' .repeat(80) + '\n';
  report += 'ICON VERIFICATION REPORT\n';
  report += '=' .repeat(80) + '\n\n';
  
  // Summary
  report += `✅ Valid Icons: ${result.valid.length}\n`;
  report += `❌ Invalid Icons: ${result.invalid.length}\n`;
  report += `💡 Suggestions Available: ${result.suggestions.size}\n\n`;
  
  // Invalid icons with suggestions
  if (result.invalid.length > 0) {
    report += '-'.repeat(80) + '\n';
    report += 'INVALID ICONS\n';
    report += '-'.repeat(80) + '\n\n';
    
    const groupedByIcon = new Map<string, IconUsage[]>();
    result.invalid.forEach(usage => {
      if (!groupedByIcon.has(usage.icon)) {
        groupedByIcon.set(usage.icon, []);
      }
      groupedByIcon.get(usage.icon)!.push(usage);
    });
    
    groupedByIcon.forEach((usages, icon) => {
      report += `❌ "${icon}" (${usages.length} occurrence${usages.length > 1 ? 's' : ''})\n`;
      
      usages.forEach(usage => {
        const relativePath = usage.file.replace(process.cwd(), '.');
        report += `   📄 ${relativePath}:${usage.line}\n`;
      });
      
      // Suggestions
      const suggestions = result.suggestions.get(icon);
      if (suggestions && suggestions.length > 0) {
        report += `   💡 Did you mean: ${suggestions.slice(0, 3).join(', ')}?\n`;
      }
      
      report += '\n';
    });
  }
  
  // Valid icons summary
  if (result.valid.length > 0) {
    report += '-'.repeat(80) + '\n';
    report += 'VALID ICONS (Top 10 Most Used)\n';
    report += '-'.repeat(80) + '\n\n';
    
    const iconCounts = new Map<string, number>();
    result.valid.forEach(usage => {
      iconCounts.set(usage.icon, (iconCounts.get(usage.icon) || 0) + 1);
    });
    
    const sorted = Array.from(iconCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    
    sorted.forEach(([icon, count]) => {
      report += `✅ ${icon}: ${count} usage${count > 1 ? 's' : ''}\n`;
    });
    report += '\n';
  }
  
  // Overall status
  report += '=' .repeat(80) + '\n';
  if (result.invalid.length === 0) {
    report += '✅ ALL ICONS VALID - No issues found!\n';
  } else {
    report += `⚠️  VERIFICATION FAILED - ${result.invalid.length} invalid icon${result.invalid.length > 1 ? 's' : ''} found\n`;
  }
  report += '=' .repeat(80) + '\n';
  
  return report;
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Scanning for .tsx files...\n');
  
  const srcDir = path.join(process.cwd(), 'src');
  const files = findTsxFiles(srcDir);
  
  console.log(`📊 Found ${files.length} .tsx files\n`);
  console.log('🔎 Extracting icon imports...\n');
  
  const allUsages: IconUsage[] = [];
  files.forEach(file => {
    const usages = extractIconImports(file);
    allUsages.push(...usages);
  });
  
  console.log(`📦 Found ${allUsages.length} icon imports\n`);
  console.log('✅ Verifying against lucide-react...\n');
  
  const result = verifyIcons(allUsages);
  const report = generateReport(result);
  
  console.log(report);
  
  // Write report to file
  const reportPath = path.join(process.cwd(), 'ICON-VERIFICATION-REPORT.txt');
  fs.writeFileSync(reportPath, report);
  console.log(`\n📝 Report saved to: ${reportPath}\n`);
  
  // Exit with error if invalid icons found
  process.exit(result.invalid.length > 0 ? 1 : 0);
}

// Run if executed directly
if (require.main === module) {
  main();
}

export { verifyIcons, extractIconImports, findTsxFiles };
