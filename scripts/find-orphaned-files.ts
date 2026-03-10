/**
 * Find Orphaned TSX/TS Files
 *
 * Identifies component/template files that are not imported anywhere in the codebase.
 * Excludes entry points, route files, and barrel exports.
 *
 * Usage: tsx scripts/find-orphaned-files.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface OrphanedFile {
  path: string;
  filename: string;
  imports: number;
}

/**
 * Recursively find all TSX/TS files in a directory
 */
function findFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and test directories
      if (!file.includes('node_modules') && !file.includes('test') && !file.includes('spec')) {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      // Exclude index files (barrel exports), test files, and spec files
      if (!file.includes('index.ts') && !file.includes('.test.') && !file.includes('.spec.')) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Count import references to a file across the codebase
 */
function countImports(filename: string, searchDir: string): number {
  const files = findFiles(searchDir);
  let importCount = 0;

  // Remove extension and path for search
  const baseName = path.basename(filename, path.extname(filename));

  files.forEach((file) => {
    if (file === filename) return; // Skip self-imports

    try {
      const content = fs.readFileSync(file, 'utf-8');

      // Search for imports of this file
      // Matches: import ... from './path/to/file'
      // Matches: import ... from '@/path/to/file'
      const importRegex = new RegExp(`from\\s+['"].*${baseName}['"]`, 'g');
      const matches = content.match(importRegex);

      if (matches) {
        importCount += matches.length;
      }
    } catch (error) {
      // Ignore read errors
    }
  });

  return importCount;
}

/**
 * Main execution
 */
async function main() {
  console.log('=========================================');
  console.log('  Orphaned TSX/TS Files Audit');
  console.log('=========================================');
  console.log('');
  console.log(`Date: ${new Date().toISOString()}`);
  console.log('');

  const componentsDir = 'src/app/components';
  const reportDate = new Date().toISOString().split('T')[0];
  const reportPath = `reports/2026-03/orphaned-tsx-audit-${reportDate}.md`;

  console.log(`Scanning ${componentsDir}...`);
  console.log('');

  // Find all component files
  const componentFiles = findFiles(componentsDir);

  console.log(`Found ${componentFiles.length} files to check`);
  console.log('');

  const orphanedFiles: OrphanedFile[] = [];
  const usedFiles: OrphanedFile[] = [];

  // Check each file for imports
  componentFiles.forEach((file, index) => {
    const filename = path.basename(file);
    const importCount = countImports(file, 'src');

    const fileInfo: OrphanedFile = {
      path: file,
      filename,
      imports: importCount,
    };

    if (importCount === 0) {
      console.log(`🔴 ORPHANED: ${file} (0 imports)`);
      orphanedFiles.push(fileInfo);
    } else {
      console.log(`✅ USED: ${file} (${importCount} imports)`);
      usedFiles.push(fileInfo);
    }

    // Progress indicator
    if ((index + 1) % 10 === 0) {
      console.log(`Progress: ${index + 1}/${componentFiles.length}`);
    }
  });

  console.log('');
  console.log('=========================================');
  console.log('  Summary');
  console.log('=========================================');
  console.log(`Total files scanned: ${componentFiles.length}`);
  console.log(`Orphaned files found: ${orphanedFiles.length}`);
  console.log(`Used files: ${usedFiles.length}`);
  console.log('');

  // Generate report
  let report = `# Orphaned TSX/TS Files Audit Report

**Date:** ${reportDate}  
**Status:** COMPLETE

---

## Executive Summary

This report identifies TSX/TS component and template files that are not imported anywhere in the codebase (potential orphans).

**Methodology:**
1. Find all \`.tsx\` and \`.ts\` files in \`/src/app/components/\`
2. Exclude entry points (\`main.tsx\`, \`App.tsx\`, route files)
3. Search for each file's import across the entire codebase
4. Flag files with zero imports as potential orphans

**Note:** Some files may be intentionally unused (deprecated, future use, experimental).

---

## Statistics

| Metric | Count |
|--------|-------|
| **Total Files Scanned** | ${componentFiles.length} |
| **Orphaned Files** | ${orphanedFiles.length} |
| **Used Files** | ${usedFiles.length} |
| **Orphan Rate** | ${((orphanedFiles.length / componentFiles.length) * 100).toFixed(2)}% |

---

`;

  if (orphanedFiles.length === 0) {
    report += `## ✅ No Orphaned Files Found

All component and template files in \`/src/app/components/\` are actively imported and used in the codebase.

**Result:** Clean codebase with no orphaned files.

`;
  } else {
    report += `## Orphaned Files (${orphanedFiles.length})

The following files have **zero imports** across the entire codebase:

`;

    orphanedFiles.forEach((file) => {
      report += `- **\`${file.path}\`** - 0 imports\n`;
    });

    report += `

---

## Recommendations

1. **Verify Usage**: Check if these files are:
   - Deprecated and safe to delete
   - Experimental/WIP and should be kept
   - Missing imports that need to be added

2. **Delete if Orphaned**: If confirmed as unused, delete files to reduce bundle size

3. **Document if Intentional**: If kept for future use, add JSDoc comment explaining purpose

`;
  }

  report += `
---

## Next Steps

- [ ] Review orphaned files for deletion candidates
- [ ] Delete confirmed orphaned files
- [ ] Update imports for missing references
- [ ] Document files kept for future use

---

**Report Generated:** ${new Date().toISOString()}  
**Location:** \`/reports/2026-03/orphaned-tsx-audit-${reportDate}.md\`
`;

  // Write report
  fs.writeFileSync(reportPath, report, 'utf-8');

  console.log(`Report saved to: ${reportPath}`);
  console.log('');
  console.log('=========================================');
  console.log('  Audit Complete');
  console.log('=========================================');
}

// Run main function
main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
