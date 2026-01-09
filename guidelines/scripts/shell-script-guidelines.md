# Shell Script Guidelines

## 🎯 **PURPOSE**

This document defines the standards for creating, naming, and organizing all shell scripts (`.sh` files) in the LSX Design system.

**Goals:**
- Consistent script structure and formatting
- Clear organization in `/scripts/` directory
- Maintainable and documented scripts
- Security best practices
- Error handling standards

---

## 📁 **MANDATORY LOCATION**

**ALL shell scripts MUST be stored in:**

```
/scripts/
```

**❌ NEVER store shell scripts in:**
- Root directory (`/`)
- Any other location

---

## 📂 **DIRECTORY STRUCTURE**

```
scripts/
├── build/                 # Build scripts
├── deploy/                # Deployment scripts
├── dev/                   # Development utilities
├── test/                  # Testing scripts
├── utils/                 # General utilities
└── setup/                 # Setup and installation scripts
```

---

## 📝 **NAMING CONVENTIONS**

### **Format:**

```
lowercase-with-hyphens.sh
```

### **Patterns:**

1. **Action-based:** `[verb]-[noun].sh`
   - Example: `build-app.sh`, `deploy-staging.sh`

2. **Purpose-based:** `[purpose]-[detail].sh`
   - Example: `setup-dev-env.sh`, `verify-icons.sh`

### **Examples:**

✅ **CORRECT:**
```
build-production.sh
deploy-staging.sh
verify-dependencies.sh
setup-development.sh
clean-build-cache.sh
```

❌ **INCORRECT:**
```
BuildProduction.sh          # Wrong case
build_production.sh         # Underscores
buildProduction.sh          # camelCase
prod-build.sh              # Abbreviations
```

---

## 📋 **STANDARD SCRIPT STRUCTURE**

### **Template:**

```bash
#!/usr/bin/env bash

################################################################################
# Script Name: [script-name.sh]
# Description: [Brief description of what this script does]
# Author: LSX Design Team
# Created: YYYY-MM-DD
# Last Modified: YYYY-MM-DD
# Version: 1.0
################################################################################

# Exit on error, undefined variables, and pipe failures
set -euo pipefail

# Change to script directory
cd "$(dirname "$0")" || exit 1

################################################################################
# CONFIGURATION
################################################################################

# Constants (UPPERCASE)
readonly SCRIPT_NAME="$(basename "$0")"
readonly SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
readonly PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Configuration variables (lowercase)
config_file="${PROJECT_ROOT}/.env"
log_file="${PROJECT_ROOT}/logs/${SCRIPT_NAME%.sh}.log"

################################################################################
# COLORS (for output)
################################################################################

readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly NC='\033[0m' # No Color

################################################################################
# HELPER FUNCTIONS
################################################################################

# Print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}" >&2
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Error handler
error_exit() {
    print_error "Error on line $1"
    exit 1
}

# Set error trap
trap 'error_exit $LINENO' ERR

# Cleanup function
cleanup() {
    print_info "Cleaning up..."
    # Add cleanup tasks here
}

# Set cleanup trap
trap cleanup EXIT

################################################################################
# VALIDATION FUNCTIONS
################################################################################

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Validate dependencies
validate_dependencies() {
    print_info "Validating dependencies..."
    
    local deps=("node" "npm" "git")
    local missing=()
    
    for cmd in "${deps[@]}"; do
        if ! command_exists "$cmd"; then
            missing+=("$cmd")
        fi
    done
    
    if [ ${#missing[@]} -gt 0 ]; then
        print_error "Missing dependencies: ${missing[*]}"
        exit 1
    fi
    
    print_success "All dependencies found"
}

################################################################################
# MAIN FUNCTIONS
################################################################################

# Main logic here
main() {
    print_info "Starting ${SCRIPT_NAME}..."
    
    # Validate dependencies
    validate_dependencies
    
    # Your main script logic here
    
    print_success "Completed successfully!"
}

################################################################################
# SCRIPT EXECUTION
################################################################################

# Run main function
main "$@"
```

---

## ✅ **MANDATORY REQUIREMENTS**

### **1. Shebang Line**

**Always use:**
```bash
#!/usr/bin/env bash
```

**NOT:**
```bash
#!/bin/bash          # Less portable
#!/bin/sh            # Different shell
```

---

### **2. Error Handling**

**Always include:**
```bash
set -euo pipefail
```

**What this does:**
- `-e` — Exit on error
- `-u` — Exit on undefined variable
- `-o pipefail` — Exit on pipe failure

---

### **3. Script Header**

**Mandatory header:**
```bash
################################################################################
# Script Name: [name]
# Description: [description]
# Author: LSX Design Team
# Created: YYYY-MM-DD
# Last Modified: YYYY-MM-DD
# Version: 1.0
################################################################################
```

---

### **4. Constants**

**Use readonly for constants:**
```bash
readonly PROJECT_ROOT="/path/to/project"
readonly MAX_RETRIES=3
```

---

### **5. Functions**

**Always define functions:**
```bash
# Good
function_name() {
    # Function code
}

# Also good
function function_name() {
    # Function code
}
```

---

## 🔒 **SECURITY BEST PRACTICES**

### **1. Avoid User Input Without Validation**

```bash
# ❌ BAD - Dangerous
eval "$user_input"

# ✅ GOOD - Validate first
if [[ "$user_input" =~ ^[a-zA-Z0-9_-]+$ ]]; then
    # Safe to use
fi
```

---

### **2. Quote Variables**

```bash
# ❌ BAD - Can cause word splitting
rm -rf $directory/*

# ✅ GOOD - Properly quoted
rm -rf "${directory:?}"/*
```

---

### **3. Use ${var:?} for Required Variables**

```bash
# ✅ Exits with error if PROJECT_ROOT is unset
cd "${PROJECT_ROOT:?}" || exit 1
```

---

### **4. Avoid Hardcoded Secrets**

```bash
# ❌ BAD
API_KEY="secret_key_123"

# ✅ GOOD - Read from environment or .env file
API_KEY="${API_KEY:?API_KEY not set}"
```

---

## 📊 **OUTPUT AND LOGGING**

### **1. Colored Output**

```bash
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly NC='\033[0m'

print_error() {
    echo -e "${RED}❌ $1${NC}" >&2
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}
```

---

### **2. Logging to File**

```bash
log_file="./logs/script.log"

log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$log_file"
}

log "Script started"
```

---

### **3. Progress Indicators**

```bash
print_info "Processing..."
for i in {1..100}; do
    echo -ne "Progress: $i%\r"
    sleep 0.01
done
echo -e "\nDone!"
```

---

## ✅ **ERROR HANDLING**

### **1. Error Trap**

```bash
error_exit() {
    print_error "Error on line $1"
    cleanup
    exit 1
}

trap 'error_exit $LINENO' ERR
```

---

### **2. Cleanup Trap**

```bash
cleanup() {
    print_info "Cleaning up..."
    rm -f /tmp/temp_file_*
}

trap cleanup EXIT
```

---

### **3. Validation Functions**

```bash
validate_file() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        print_error "File not found: $file"
        return 1
    fi
    
    return 0
}
```

---

## 🧪 **TESTING SCRIPTS**

### **1. Dry Run Mode**

```bash
DRY_RUN=false

if [ "$DRY_RUN" = true ]; then
    print_info "Would run: command here"
else
    # Actual command
fi
```

---

### **2. Debug Mode**

```bash
DEBUG="${DEBUG:-false}"

if [ "$DEBUG" = true ]; then
    set -x  # Print commands
fi
```

---

### **3. Test Function**

```bash
run_tests() {
    print_info "Running tests..."
    
    # Test 1
    if validate_file "$config_file"; then
        print_success "Test 1 passed"
    else
        print_error "Test 1 failed"
        return 1
    fi
}
```

---

## 📚 **COMMON PATTERNS**

### **1. Command Existence Check**

```bash
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

if ! command_exists node; then
    print_error "Node.js is not installed"
    exit 1
fi
```

---

### **2. Retry Logic**

```bash
retry() {
    local max_attempts=3
    local attempt=1
    local delay=2
    
    until "$@"; do
        if [ $attempt -ge $max_attempts ]; then
            print_error "Command failed after $max_attempts attempts"
            return 1
        fi
        
        print_warning "Attempt $attempt failed. Retrying in ${delay}s..."
        sleep $delay
        ((attempt++))
    done
}

retry npm install
```

---

### **3. Confirmation Prompt**

```bash
confirm() {
    local prompt="$1"
    local response
    
    read -r -p "$prompt [y/N]: " response
    
    case "$response" in
        [yY][eE][sS]|[yY])
            return 0
            ;;
        *)
            return 1
            ;;
    esac
}

if confirm "Continue?"; then
    print_info "Continuing..."
fi
```

---

## 📋 **SCRIPT CATEGORIES**

### **1. Build Scripts** (`/scripts/build/`)

**Purpose:** Build and compilation tasks

**Examples:**
- `build-production.sh` — Production build
- `build-development.sh` — Development build
- `clean-build.sh` — Clean build artifacts

---

### **2. Deployment Scripts** (`/scripts/deploy/`)

**Purpose:** Deployment automation

**Examples:**
- `deploy-staging.sh` — Deploy to staging
- `deploy-production.sh` — Deploy to production
- `rollback.sh` — Rollback deployment

---

### **3. Development Scripts** (`/scripts/dev/`)

**Purpose:** Development utilities

**Examples:**
- `start-dev-server.sh` — Start development server
- `watch-files.sh` — Watch for file changes
- `setup-hooks.sh` — Setup git hooks

---

### **4. Testing Scripts** (`/scripts/test/`)

**Purpose:** Testing and validation

**Examples:**
- `run-tests.sh` — Run test suite
- `verify-links.sh` — Verify links
- `check-dependencies.sh` — Check dependencies

---

### **5. Utility Scripts** (`/scripts/utils/`)

**Purpose:** General utilities

**Examples:**
- `backup-database.sh` — Backup database
- `generate-report.sh` — Generate reports
- `cleanup-temp.sh` — Cleanup temporary files

---

### **6. Setup Scripts** (`/scripts/setup/`)

**Purpose:** Installation and setup

**Examples:**
- `setup-environment.sh` — Setup development environment
- `install-dependencies.sh` — Install dependencies
- `configure-git.sh` — Configure git

---

## 🚫 **COMMON MISTAKES TO AVOID**

### **❌ WRONG: Not Quoting Variables**

```bash
# ❌ BAD
rm -rf $directory/*

# ✅ GOOD
rm -rf "${directory}"/*
```

---

### **❌ WRONG: Using == Instead of =**

```bash
# ❌ BAD (bash-specific, not POSIX)
if [ "$var" == "value" ]; then

# ✅ GOOD (POSIX compliant)
if [ "$var" = "value" ]; then
```

---

### **❌ WRONG: Not Checking Command Success**

```bash
# ❌ BAD
cd /some/directory
rm -rf *

# ✅ GOOD
cd /some/directory || exit 1
rm -rf ./*
```

---

### **❌ WRONG: Using ls in Scripts**

```bash
# ❌ BAD
for file in $(ls *.txt); do

# ✅ GOOD
for file in *.txt; do
```

---

## ✅ **SCRIPT QUALITY CHECKLIST**

Before finalizing a script:

- [ ] Stored in correct `/scripts/` subdirectory
- [ ] Uses correct naming convention
- [ ] Has shebang line (`#!/usr/bin/env bash`)
- [ ] Has error handling (`set -euo pipefail`)
- [ ] Has script header with metadata
- [ ] Uses readonly for constants
- [ ] Has colored output functions
- [ ] Has error trap and cleanup
- [ ] Validates dependencies
- [ ] Has main() function
- [ ] Variables are quoted
- [ ] Has helpful comments
- [ ] Executable (`chmod +x`)

---

## 🔍 **VERIFICATION**

### **Make Script Executable:**

```bash
chmod +x scripts/build/build-production.sh
```

---

### **Verify Syntax:**

```bash
shellcheck scripts/build/build-production.sh
```

---

### **Test Script:**

```bash
bash -n scripts/build/build-production.sh  # Syntax check
./scripts/build/build-production.sh        # Run script
```

---

## 📚 **QUICK REFERENCE**

### **Essential Commands:**

| Command | Purpose |
|---------|---------|
| `set -e` | Exit on error |
| `set -u` | Exit on undefined variable |
| `set -o pipefail` | Exit on pipe failure |
| `readonly VAR="value"` | Define constant |
| `command_exists()` | Check if command exists |
| `trap 'cleanup' EXIT` | Cleanup on exit |

---

### **Variable Expansion:**

| Syntax | Purpose |
|--------|---------|
| `${var}` | Variable expansion |
| `${var:-default}` | Use default if unset |
| `${var:?error}` | Error if unset |
| `${var#pattern}` | Remove shortest match from start |
| `${var##pattern}` | Remove longest match from start |

---

## 🎯 **SUMMARY**

**Where to create scripts:**
```
✅ /scripts/[category]/
❌ / (root)
```

**How to name scripts:**
```
✅ lowercase-with-hyphens.sh
❌ CamelCase.sh
❌ snake_case.sh
```

**What to include:**
```
✅ Shebang line
✅ Error handling (set -euo pipefail)
✅ Script header
✅ Helper functions
✅ Validation
✅ Error traps
✅ Cleanup on exit
```

---

## 📖 **ADDITIONAL RESOURCES**

**ShellCheck:**
- [ShellCheck Online](https://www.shellcheck.net/)
- [ShellCheck GitHub](https://github.com/koalaman/shellcheck)

**Best Practices:**
- [Google Shell Style Guide](https://google.github.io/styleguide/shellguide.html)
- [Bash Best Practices](https://bertvv.github.io/cheat-sheets/Bash.html)

**Learning Resources:**
- [Bash Guide](https://mywiki.wooledge.org/BashGuide)
- [Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)

---

**Last Updated:** 2025-01-09  
**Status:** ✅ Active  
**Enforcement:** Mandatory for all shell scripts
