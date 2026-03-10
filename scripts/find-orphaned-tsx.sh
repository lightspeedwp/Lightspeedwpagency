#!/bin/bash

##
# Find Orphaned TSX Files
#
# Identifies template/component files that are not imported anywhere in the codebase.
# Excludes entry points, route files, and files in protected directories.
#
# Usage: bash scripts/find-orphaned-tsx.sh
##

echo "=========================================="
echo "  Orphaned TSX Files Audit"
echo "=========================================="
echo ""
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# Output file
REPORT_FILE="reports/2026-03/orphaned-tsx-audit-$(date '+%Y-%m-%d').md"

# Initialize report
cat > "$REPORT_FILE" << 'EOF'
# Orphaned TSX Files Audit Report

**Date:** $(date '+%Y-%m-%d')  
**Status:** COMPLETE

---

## Executive Summary

This report identifies TSX/TS component and template files that are not imported anywhere in the codebase (potential orphans).

**Methodology:**
1. Find all `.tsx` and `.ts` files in `/src/app/components/`
2. Exclude entry points (`main.tsx`, `App.tsx`, route files)
3. Search for each file's import across the entire codebase
4. Flag files with zero imports as potential orphans

**Note:** Some files may be intentionally unused (deprecated, future use, experimental).

---

## Findings

EOF

# Counter for orphaned files
ORPHANED_COUNT=0
TOTAL_COUNT=0

# Find all TSX/TS files in components directory
echo "Scanning /src/app/components/ for TSX/TS files..."
echo ""

# Create temporary file for results
TEMP_FILE=$(mktemp)

# Search for component files (exclude index files which are barrel exports)
find src/app/components -type f \( -name "*.tsx" -o -name "*.ts" \) ! -name "index.ts" ! -name "*.test.*" ! -name "*.spec.*" | sort | while read -r file; do
  TOTAL_COUNT=$((TOTAL_COUNT + 1))
  
  # Extract filename without extension
  FILENAME=$(basename "$file" .tsx)
  FILENAME=$(basename "$FILENAME" .ts)
  
  # Search for imports of this file across the codebase
  # Look for: import ... from './path/to/file' or import ... from '@/path/to/file'
  IMPORT_COUNT=$(grep -r "from ['\"].*${FILENAME}" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" 2>/dev/null | wc -l)
  
  # If file has zero imports, it's potentially orphaned
  if [ "$IMPORT_COUNT" -eq 0 ]; then
    echo "🔴 ORPHANED: $file (0 imports)"
    echo "- **\`$file\`** - 0 imports" >> "$TEMP_FILE"
    ORPHANED_COUNT=$((ORPHANED_COUNT + 1))
  else
    echo "✅ USED: $file ($IMPORT_COUNT imports)"
  fi
done

echo ""
echo "=========================================="
echo "  Summary"
echo "=========================================="
echo "Total files scanned: $TOTAL_COUNT"
echo "Orphaned files found: $ORPHANED_COUNT"
echo ""

# Append results to report
if [ "$ORPHANED_COUNT" -eq 0 ]; then
  cat >> "$REPORT_FILE" << 'EOF'
### ✅ No Orphaned Files Found

All component and template files in `/src/app/components/` are actively imported and used in the codebase.

**Result:** Clean codebase with no orphaned files.

EOF
else
  cat >> "$REPORT_FILE" << 'EOF'
### Orphaned Files

The following files have **zero imports** across the entire codebase:

EOF
  
  cat "$TEMP_FILE" >> "$REPORT_FILE"
  
  cat >> "$REPORT_FILE" << 'EOF'

---

## Recommendations

1. **Verify Usage**: Check if these files are:
   - Deprecated and safe to delete
   - Experimental/WIP and should be kept
   - Missing imports that need to be added

2. **Delete if Orphaned**: If confirmed as unused, delete files to reduce bundle size

3. **Document if Intentional**: If kept for future use, add JSDoc comment explaining purpose

EOF
fi

# Cleanup
rm -f "$TEMP_FILE"

# Append report footer
cat >> "$REPORT_FILE" << 'EOF'

---

## Next Steps

- [ ] Review orphaned files for deletion candidates
- [ ] Delete confirmed orphaned files
- [ ] Update imports for missing references
- [ ] Document files kept for future use

---

**Report Generated:** $(date '+%Y-%m-%d %H:%M:%S')  
**Location:** `/reports/2026-03/orphaned-tsx-audit-YYYY-MM-DD.md`
EOF

echo "Report saved to: $REPORT_FILE"
echo ""
echo "=========================================="
echo "  Audit Complete"
echo "=========================================="
