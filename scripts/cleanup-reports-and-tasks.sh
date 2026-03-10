#!/bin/bash

##
# Cleanup Reports and Tasks
#
# Archives completed reports and task lists to maintain clean working directories.
# Based on the cleanup audit from March 10, 2026.
#
# Usage: bash scripts/cleanup-reports-and-tasks.sh
##

set -e  # Exit on error

echo "=========================================="
echo "  Reports & Tasks Cleanup"
echo "=========================================="
echo ""
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# Create archive directories
echo "Creating archive directories..."
mkdir -p reports/archive/2026-03
mkdir -p tasks/archive

echo "✅ Archive directories created"
echo ""

# ============================================
# REPORTS CLEANUP
# ============================================

echo "=========================================="
echo "  Archiving Reports (95 files)"
echo "=========================================="
echo ""

# Function to safely move files
safe_move() {
    local pattern=$1
    local dest=$2
    
    # Use find to locate files matching the pattern
    find reports/2026-03 -maxdepth 1 -type f -name "$pattern" 2>/dev/null | while read -r file; do
        if [ -f "$file" ]; then
            echo "📦 Archiving: $(basename "$file")"
            mv "$file" "$dest/"
        fi
    done
}

# Deployment audit series (16 files)
echo "📁 Category: Deployment Audit Series (16 files)"
safe_move "deployment-audit-step-*.md" "reports/archive/2026-03"
safe_move "deployment-build-audit-step-*.md" "reports/archive/2026-03"
safe_move "deployment-diagnostic-report.md" "reports/archive/2026-03"
safe_move "deployment-fix-complete.md" "reports/archive/2026-03"
safe_move "deployment-build-audit-COMPLETE.md" "reports/archive/2026-03"
echo ""

# Figma error reports (3 files)
echo "📁 Category: Figma Error Reports (3 files)"
safe_move "figma-iframe-error-fix.md" "reports/archive/2026-03"
safe_move "iframe-error-fix.md" "reports/archive/2026-03"
safe_move "final-error-suppression-implementation.md" "reports/archive/2026-03"
echo ""

# CSS import fixes (4 files)
echo "📁 Category: CSS Import/Path Fixes (4 files)"
safe_move "bundle-import-path-fix.md" "reports/archive/2026-03"
safe_move "css-import-fix-march-5.md" "reports/archive/2026-03"
safe_move "css-import-path-fix-complete.md" "reports/archive/2026-03"
safe_move "import-path-fix-complete.md" "reports/archive/2026-03"
echo ""

# Phase 2 template migration (10 files)
echo "📁 Category: Phase 2 Template Migration (10 files)"
safe_move "phase-2-1b-postcard-completion-report.md" "reports/archive/2026-03"
safe_move "phase-2-2-completion-report.md" "reports/archive/2026-03"
safe_move "phase-2-2-stats-migration-progress.md" "reports/archive/2026-03"
safe_move "phase-2-3b-*.md" "reports/archive/2026-03"
safe_move "phase-2-template-migration-completion.md" "reports/archive/2026-03"
safe_move "template-migration-batch-*.md" "reports/archive/2026-03"
safe_move "template-migration-lazy-patterns-complete.md" "reports/archive/2026-03"
echo ""

# Phase 3 CSS optimization (38 files)
echo "📁 Category: Phase 3 CSS Optimization (38 files)"
safe_move "phase-3-migration-plan.md" "reports/archive/2026-03"
safe_move "phase-3-planning-summary.md" "reports/archive/2026-03"
safe_move "phase-3-3-batch-2-update.md" "reports/archive/2026-03"
safe_move "phase-3-3-batch-3-completion.md" "reports/archive/2026-03"
safe_move "phase-3-3-batch-4-completion.md" "reports/archive/2026-03"
safe_move "phase-3-3-batch-5-completion.md" "reports/archive/2026-03"
safe_move "phase-3-3-batch-6-completion.md" "reports/archive/2026-03"
safe_move "phase-3-3-progress-report.md" "reports/archive/2026-03"
safe_move "phase-3-3-status-update.md" "reports/archive/2026-03"
safe_move "phase-3-step-*.md" "reports/archive/2026-03"
safe_move "phase-3-week-*.md" "reports/archive/2026-03"
echo ""

# Session summaries (12 files)
echo "📁 Category: Session Summaries (12 files)"
safe_move "daily-summary-march-3.md" "reports/archive/2026-03"
safe_move "march-2-2026-*.md" "reports/archive/2026-03"
safe_move "march-6-final-session-summary.md" "reports/archive/2026-03"
safe_move "march-6-session-summary.md" "reports/archive/2026-03"
safe_move "session-summary-*.md" "reports/archive/2026-03"
safe_move "faqs-restructure-session-summary-march-5.md" "reports/archive/2026-03"
safe_move "memory-reduction-session-summary-*.md" "reports/archive/2026-03"
echo ""

# Memory optimization (1 file)
echo "📁 Category: Memory Optimization (1 file)"
safe_move "memory-reduction-p2-1-2-faqs-restructure-plan.md" "reports/archive/2026-03"
echo ""

# Phase 1 reports (2 files)
echo "📁 Category: Phase 1 Reports (2 files)"
safe_move "phase-1-implementation-report.md" "reports/archive/2026-03"
safe_move "phase-1-progress-summary-march-3.md" "reports/archive/2026-03"
echo ""

# Miscellaneous (9 files)
echo "📁 Category: Miscellaneous (9 files)"
safe_move "breakpoint-expansion-audit.md" "reports/archive/2026-03"
safe_move "contact-page-css-investigation.md" "reports/archive/2026-03"
safe_move "lsx-search-css-optimization-analysis.md" "reports/archive/2026-03"
safe_move "phosphor-icon-audit.md" "reports/archive/2026-03"
safe_move "phosphor-phase-*.md" "reports/archive/2026-03"
safe_move "file-optimization-audit-report.md" "reports/archive/2026-03"
safe_move "safe-optimization-opportunities.md" "reports/archive/2026-03"
echo ""

# ============================================
# TASKS CLEANUP
# ============================================

echo "=========================================="
echo "  Archiving Completed Task Lists"
echo "=========================================="
echo ""

# Archive completed task lists
echo "📁 Archiving completed task lists..."

# Breakpoint expansion (COMPLETE)
if [ -f "tasks/breakpoint-expansion-tasks.md" ]; then
    echo "📦 Archiving: breakpoint-expansion-tasks.md"
    mv tasks/breakpoint-expansion-tasks.md tasks/archive/
fi

# Phosphor migration (COMPLETE)
if [ -f "tasks/phosphor-migration-tasks.md" ]; then
    echo "📦 Archiving: phosphor-migration-tasks.md"
    mv tasks/phosphor-migration-tasks.md tasks/archive/
fi

# File optimization (COMPLETE - superseded by memory tasks)
if [ -f "tasks/file-optimization-tasks.md" ]; then
    echo "📦 Archiving: file-optimization-tasks.md"
    mv tasks/file-optimization-tasks.md tasks/archive/
fi

# Phase 3 optimization (COMPLETE)
if [ -f "tasks/phase-3-optimization-tasks.md" ]; then
    echo "📦 Archiving: phase-3-optimization-tasks.md"
    mv tasks/phase-3-optimization-tasks.md tasks/archive/
fi

# Stability audit (COMPLETE)
if [ -f "tasks/stability-audit-tasks.md" ]; then
    echo "📦 Archiving: stability-audit-tasks.md"
    mv tasks/stability-audit-tasks.md tasks/archive/
fi

echo ""

# ============================================
# SUMMARY
# ============================================

echo "=========================================="
echo "  Cleanup Summary"
echo "=========================================="
echo ""

# Count archived files
ARCHIVED_REPORTS=$(find reports/archive/2026-03 -type f -name "*.md" ! -name "README.md" 2>/dev/null | wc -l)
ARCHIVED_TASKS=$(find tasks/archive -type f -name "*.md" ! -name "README.md" 2>/dev/null | wc -l)

echo "📦 Reports archived: $ARCHIVED_REPORTS"
echo "📦 Tasks archived: $ARCHIVED_TASKS"
echo ""

# List remaining active reports
ACTIVE_REPORTS=$(find reports/2026-03 -maxdepth 1 -type f -name "*.md" 2>/dev/null | wc -l)
echo "📄 Active reports remaining: $ACTIVE_REPORTS"

# List remaining active tasks
ACTIVE_TASKS=$(find tasks -maxdepth 1 -type f -name "*.md" 2>/dev/null | wc -l)
echo "📄 Active tasks remaining: $ACTIVE_TASKS"
echo ""

echo "=========================================="
echo "  ✅ Cleanup Complete"
echo "=========================================="
echo ""
echo "Archive locations:"
echo "  Reports: /reports/archive/2026-03/"
echo "  Tasks: /tasks/archive/"
echo ""
echo "Next steps:"
echo "  1. Review archived files to confirm correctness"
echo "  2. Update /tasks/task-list.md if needed"
echo "  3. Document cleanup in CHANGELOG.md"
echo ""
