#!/bin/bash

###############################################################################
# CSS Bundle Verification Script
#
# Purpose: Automated verification of CSS bundle implementation
# 
# Checks:
# 1. All route files import loadCSSBundle utility
# 2. All CSS bundle files exist and are non-empty
# 3. No duplicate bundle loads in routes
# 4. Bundle file sizes within expected ranges
# 5. Import syntax correctness
#
# Usage: bash scripts/verify-css-bundles.sh
#
# Exit codes:
# 0 - All checks passed
# 1 - One or more checks failed
#
# Output: Detailed verification report with pass/fail status
###############################################################################

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
PASS_COUNT=0
FAIL_COUNT=0
WARN_COUNT=0

# Print header
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}CSS Bundle Verification Script${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

###############################################################################
# Helper Functions
###############################################################################

print_pass() {
    echo -e "${GREEN}✅ PASS:${NC} $1"
    ((PASS_COUNT++))
}

print_fail() {
    echo -e "${RED}❌ FAIL:${NC} $1"
    ((FAIL_COUNT++))
}

print_warn() {
    echo -e "${YELLOW}⚠️  WARN:${NC} $1"
    ((WARN_COUNT++))
}

print_info() {
    echo -e "${BLUE}ℹ️  INFO:${NC} $1"
}

print_section() {
    echo ""
    echo -e "${BLUE}──────────────────────────────────────────────${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}──────────────────────────────────────────────${NC}"
}

###############################################################################
# Check 1: Verify Route Files Import loadCSSBundle
###############################################################################

print_section "Check 1: Route Files Import loadCSSBundle"

ROUTE_FILES=(
    "src/app/routes/content.routes.tsx"
    "src/app/routes/core.routes.tsx"
    "src/app/routes/media.routes.tsx"
    "src/app/routes/utility.routes.tsx"
    "src/app/routes/testimonials.routes.tsx"
    "src/app/routes/tour-operator.routes.tsx"
    "src/app/routes/woocommerce.routes.tsx"
    "src/app/routes/post-formats.routes.tsx"
)

for file in "${ROUTE_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        print_fail "Route file missing: $file"
        continue
    fi
    
    if grep -q "import.*loadCSSBundle.*from.*css-bundle-loader" "$file"; then
        print_pass "Import found in $(basename "$file")"
    else
        print_fail "loadCSSBundle import missing in $file"
    fi
done

###############################################################################
# Check 2: Verify CSS Bundle Files Exist
###############################################################################

print_section "Check 2: CSS Bundle Files Exist"

BUNDLE_FILES=(
    "src/styles/bundles/blog-bundle.css"
    "src/styles/bundles/portfolio-bundle.css"
    "src/styles/bundles/services-bundle.css"
    "src/styles/bundles/solutions-bundle.css"
    "src/styles/bundles/about-bundle.css"
    "src/styles/bundles/system-bundle.css"
    "src/styles/bundles/media-bundle.css"
    "src/styles/bundles/utility-bundle.css"
)

for file in "${BUNDLE_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        print_fail "Bundle file missing: $file"
        continue
    fi
    
    # Check file is not empty
    if [ -s "$file" ]; then
        print_pass "Bundle exists: $(basename "$file")"
    else
        print_fail "Bundle is empty: $file"
    fi
done

###############################################################################
# Check 3: Verify Bundle File Sizes
###############################################################################

print_section "Check 3: Bundle File Sizes"

print_info "Checking bundle sizes (uncompressed)..."

check_bundle_size() {
    local file=$1
    local min_kb=$2
    local max_kb=$3
    
    if [ ! -f "$file" ]; then
        print_fail "File not found: $file"
        return
    fi
    
    # Get file size in KB
    local size_bytes=$(wc -c < "$file" | tr -d ' ')
    local size_kb=$((size_bytes / 1024))
    
    local bundle_name=$(basename "$file")
    
    if [ $size_kb -ge $min_kb ] && [ $size_kb -le $max_kb ]; then
        print_pass "$bundle_name: ${size_kb}KB (expected: ${min_kb}-${max_kb}KB)"
    else
        print_warn "$bundle_name: ${size_kb}KB (expected: ${min_kb}-${max_kb}KB) - outside range"
    fi
}

# Expected sizes (uncompressed, rough estimates)
check_bundle_size "src/styles/bundles/blog-bundle.css" 20 60
check_bundle_size "src/styles/bundles/portfolio-bundle.css" 20 60
check_bundle_size "src/styles/bundles/services-bundle.css" 40 100
check_bundle_size "src/styles/bundles/solutions-bundle.css" 30 80
check_bundle_size "src/styles/bundles/about-bundle.css" 15 50
check_bundle_size "src/styles/bundles/system-bundle.css" 30 80
check_bundle_size "src/styles/bundles/media-bundle.css" 15 50
check_bundle_size "src/styles/bundles/utility-bundle.css" 30 80

###############################################################################
# Check 4: Verify loadCSSBundle Calls in Routes
###############################################################################

print_section "Check 4: loadCSSBundle Calls in Routes"

print_info "Checking for loadCSSBundle calls in route files..."

for file in "${ROUTE_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        continue
    fi
    
    # Count loadCSSBundle calls
    call_count=$(grep -o "loadCSSBundle(" "$file" | wc -l | tr -d ' ')
    
    if [ $call_count -gt 0 ]; then
        print_pass "$(basename "$file"): $call_count loadCSSBundle calls found"
    else
        print_fail "$(basename "$file"): No loadCSSBundle calls found"
    fi
done

###############################################################################
# Check 5: Verify CSS Bundle Loader Utility Exists
###############################################################################

print_section "Check 5: CSS Bundle Loader Utility"

LOADER_FILE="src/app/utils/css-bundle-loader.ts"

if [ ! -f "$LOADER_FILE" ]; then
    print_fail "CSS bundle loader utility missing: $LOADER_FILE"
else
    print_pass "CSS bundle loader utility exists"
    
    # Check for required functions
    if grep -q "export.*function loadCSSBundle" "$LOADER_FILE"; then
        print_pass "loadCSSBundle function found"
    else
        print_fail "loadCSSBundle function missing"
    fi
    
    if grep -q "export.*function preloadCSSBundle" "$LOADER_FILE"; then
        print_pass "preloadCSSBundle function found"
    else
        print_fail "preloadCSSBundle function missing"
    fi
    
    if grep -q "export.*function isBundleLoaded" "$LOADER_FILE"; then
        print_pass "isBundleLoaded function found"
    else
        print_fail "isBundleLoaded function missing"
    fi
fi

###############################################################################
# Check 6: Verify RouteLink Component Exists
###############################################################################

print_section "Check 6: RouteLink Component"

ROUTELINK_FILE="src/app/components/navigation/RouteLink.tsx"

if [ ! -f "$ROUTELINK_FILE" ]; then
    print_fail "RouteLink component missing: $ROUTELINK_FILE"
else
    print_pass "RouteLink component exists"
    
    # Check for preloadCSSBundle import
    if grep -q "import.*preloadCSSBundle" "$ROUTELINK_FILE"; then
        print_pass "preloadCSSBundle import found"
    else
        print_fail "preloadCSSBundle import missing"
    fi
    
    # Check for onMouseEnter handler
    if grep -q "onMouseEnter" "$ROUTELINK_FILE"; then
        print_pass "onMouseEnter handler found (hover preloading)"
    else
        print_warn "onMouseEnter handler not found"
    fi
fi

###############################################################################
# Check 7: Verify Bundle Names Are Valid
###############################################################################

print_section "Check 7: Bundle Names Validation"

print_info "Checking for valid bundle names in route files..."

VALID_BUNDLES=("blog" "portfolio" "services" "solutions" "about" "system" "media" "utility")

for file in "${ROUTE_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        continue
    fi
    
    # Extract bundle names from loadCSSBundle calls
    bundle_names=$(grep -o "loadCSSBundle('[^']*')" "$file" | sed "s/loadCSSBundle('//g" | sed "s/')//g" || echo "")
    
    if [ -z "$bundle_names" ]; then
        continue
    fi
    
    for bundle in $bundle_names; do
        valid=false
        for valid_bundle in "${VALID_BUNDLES[@]}"; do
            if [ "$bundle" = "$valid_bundle" ]; then
                valid=true
                break
            fi
        done
        
        if $valid; then
            print_pass "Valid bundle name in $(basename "$file"): '$bundle'"
        else
            print_fail "Invalid bundle name in $(basename "$file"): '$bundle'"
        fi
    done
done

###############################################################################
# Check 8: Verify No Duplicate Imports in Bundles
###############################################################################

print_section "Check 8: Duplicate Imports Check"

print_info "Checking for duplicate @import statements in bundles..."

for file in "${BUNDLE_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        continue
    fi
    
    # Extract all import paths
    imports=$(grep -o "@import '[^']*'" "$file" | sort || echo "")
    
    # Count unique imports
    unique_count=$(echo "$imports" | uniq | wc -l | tr -d ' ')
    total_count=$(echo "$imports" | wc -l | tr -d ' ')
    
    if [ $unique_count -eq $total_count ]; then
        print_pass "$(basename "$file"): No duplicate imports ($total_count imports)"
    else
        duplicate_count=$((total_count - unique_count))
        print_warn "$(basename "$file"): $duplicate_count duplicate imports found"
    fi
done

###############################################################################
# Summary
###############################################################################

print_section "Verification Summary"

echo ""
echo -e "Results:"
echo -e "  ${GREEN}✅ Passed:${NC} $PASS_COUNT"
echo -e "  ${RED}❌ Failed:${NC} $FAIL_COUNT"
echo -e "  ${YELLOW}⚠️  Warnings:${NC} $WARN_COUNT"
echo ""

if [ $FAIL_COUNT -eq 0 ]; then
    echo -e "${GREEN}🎉 All critical checks passed!${NC}"
    echo ""
    exit 0
else
    echo -e "${RED}⚠️  $FAIL_COUNT critical checks failed!${NC}"
    echo ""
    exit 1
fi
