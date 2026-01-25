#!/bin/bash

###############################################################################
# Fix Font Variables Script
# 
# Purpose: Replace hardcoded font families with CSS variables
# 
# Changes:
# - fontFamily: 'Lexend, sans-serif' → fontFamily: 'var(--font-primary)'
# - fontFamily: 'Manrope, sans-serif' → fontFamily: 'var(--font-secondary)'
# 
# Usage:
#   ./scripts/fix-font-variables.sh
# 
# Created: 2025-01-19
###############################################################################

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  LSX Design — Font Variables Fix Script                       ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Directories to search
SEARCH_DIRS=(
  "src/app/components/templates"
  "src/app/components/patterns"
  "src/app/components/parts"
  "src/app/components/common"
  "src/app/components/ui"
)

total_files_fixed=0
total_replacements=0

for dir in "${SEARCH_DIRS[@]}"; do
  if [ ! -d "$dir" ]; then
    echo -e "${YELLOW}⚠️  Directory not found: $dir${NC}"
    continue
  fi
  
  echo -e "${BLUE}📁 Scanning: $dir${NC}"
  
  # Find all .tsx files
  while IFS= read -r file; do
    # Check if file contains hardcoded fonts
    if grep -q "fontFamily: '[A-Za-z]" "$file"; then
      echo -e "${YELLOW}  🔧 Fixing: $(basename "$file")${NC}"
      
      # Count replacements
      lexend_count=$(grep -c "fontFamily: 'Lexend" "$file" || true)
      manrope_count=$(grep -c "fontFamily: 'Manrope" "$file" || true)
      
      # Perform replacements
      sed -i.bak "s/fontFamily: 'Lexend[^']*'/fontFamily: 'var(--font-primary)'/g" "$file"
      sed -i.bak "s/fontFamily: 'Manrope[^']*'/fontFamily: 'var(--font-secondary)'/g" "$file"
      
      # Remove backup files
      rm -f "${file}.bak"
      
      replacements=$((lexend_count + manrope_count))
      total_replacements=$((total_replacements + replacements))
      total_files_fixed=$((total_files_fixed + 1))
      
      echo -e "${GREEN}    ✅ Fixed $replacements font references${NC}"
    fi
  done < <(find "$dir" -name "*.tsx" -type f)
  
  echo ""
done

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Summary                                                       ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo -e "${GREEN}✅ Files fixed: $total_files_fixed${NC}"
echo -e "${GREEN}✅ Total replacements: $total_replacements${NC}"
echo ""
echo -e "${BLUE}📝 Changes made:${NC}"
echo -e "${BLUE}   • fontFamily: 'Lexend, sans-serif' → fontFamily: 'var(--font-primary)'${NC}"
echo -e "${BLUE}   • fontFamily: 'Manrope, sans-serif' → fontFamily: 'var(--font-secondary)'${NC}"
echo ""
echo -e "${GREEN}🎉 Font variables fix complete!${NC}"
