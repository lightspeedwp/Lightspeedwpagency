# Python Script Guidelines

## 🎯 **PURPOSE**

This document defines the standards for creating, naming, and organizing all Python scripts (`.py` files) in the LSX Design system.

**Goals:**
- Consistent script structure and formatting
- Clear organization in `/scripts/` directory
- Maintainable and documented scripts
- Security best practices
- Error handling standards
- Type safety with type hints

---

## 📁 **MANDATORY LOCATION**

**ALL Python scripts MUST be stored in:**

```
/scripts/
```

**❌ NEVER store Python scripts in:**
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
├── setup/                 # Setup and installation scripts
└── data/                  # Data processing scripts
```

---

## 📝 **NAMING CONVENTIONS**

### **Format:**

```
lowercase_with_underscores.py
```

### **Patterns:**

1. **Action-based:** `[verb]_[noun].py`
   - Example: `build_app.py`, `deploy_staging.py`

2. **Purpose-based:** `[purpose]_[detail].py`
   - Example: `verify_dependencies.py`, `generate_report.py`

### **Examples:**

✅ **CORRECT:**
```
build_production.py
deploy_staging.py
verify_dependencies.py
setup_development.py
clean_build_cache.py
```

❌ **INCORRECT:**
```
BuildProduction.py          # Wrong case
build-production.py         # Hyphens
buildProduction.py          # camelCase
prod-build.py              # Abbreviations
```

---

## 📋 **STANDARD SCRIPT STRUCTURE**

### **Template:**

```python
#!/usr/bin/env python3
"""
Script Name: [script_name.py]
Description: [Brief description of what this script does]

Author: LSX Design Team
Created: YYYY-MM-DD
Last Modified: YYYY-MM-DD
Version: 1.0

Usage:
    python script_name.py [options]

Example:
    python script_name.py --input data.json --output result.json
"""

import argparse
import logging
import sys
from pathlib import Path
from typing import Optional, List, Dict, Any

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/script.log'),
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

# Constants (UPPERCASE)
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CONFIG_FILE = PROJECT_ROOT / '.env'

# Configuration (lowercase)
DEFAULT_TIMEOUT = 30
MAX_RETRIES = 3


class ScriptError(Exception):
    """Base exception for script errors."""
    pass


class ValidationError(ScriptError):
    """Exception for validation errors."""
    pass


class ConfigurationError(ScriptError):
    """Exception for configuration errors."""
    pass


def validate_file(file_path: Path) -> bool:
    """
    Validate that a file exists and is readable.
    
    Args:
        file_path: Path to the file to validate
        
    Returns:
        True if file is valid
        
    Raises:
        ValidationError: If file doesn't exist or isn't readable
    """
    if not file_path.exists():
        raise ValidationError(f"File not found: {file_path}")
    
    if not file_path.is_file():
        raise ValidationError(f"Not a file: {file_path}")
    
    if not file_path.stat().st_size > 0:
        logger.warning(f"File is empty: {file_path}")
    
    return True


def setup_logging(verbose: bool = False) -> None:
    """
    Configure logging based on verbosity level.
    
    Args:
        verbose: If True, set logging to DEBUG level
    """
    level = logging.DEBUG if verbose else logging.INFO
    logging.getLogger().setLevel(level)
    logger.info(f"Logging level set to {logging.getLevelName(level)}")


def parse_arguments() -> argparse.Namespace:
    """
    Parse command-line arguments.
    
    Returns:
        Parsed arguments namespace
    """
    parser = argparse.ArgumentParser(
        description='Script description here',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    python script.py --input data.json
    python script.py --input data.json --verbose
        """
    )
    
    parser.add_argument(
        '--input',
        type=Path,
        required=True,
        help='Input file path'
    )
    
    parser.add_argument(
        '--output',
        type=Path,
        default=Path('output.json'),
        help='Output file path (default: output.json)'
    )
    
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Enable verbose output'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be done without executing'
    )
    
    return parser.parse_args()


def main() -> int:
    """
    Main script execution.
    
    Returns:
        Exit code (0 for success, non-zero for failure)
    """
    try:
        # Parse arguments
        args = parse_arguments()
        
        # Setup logging
        setup_logging(args.verbose)
        
        logger.info("Script started")
        
        # Validate inputs
        validate_file(args.input)
        
        # Your main logic here
        if args.dry_run:
            logger.info("DRY RUN: Would process file")
        else:
            logger.info("Processing file...")
            # Actual processing
        
        logger.info("Script completed successfully")
        return 0
        
    except ValidationError as e:
        logger.error(f"Validation error: {e}")
        return 1
        
    except ConfigurationError as e:
        logger.error(f"Configuration error: {e}")
        return 2
        
    except Exception as e:
        logger.exception(f"Unexpected error: {e}")
        return 3


if __name__ == '__main__':
    sys.exit(main())
```

---

## ✅ **MANDATORY REQUIREMENTS**

### **1. Shebang Line**

**Always use:**
```python
#!/usr/bin/env python3
```

---

### **2. Module Docstring**

**Always include:**
```python
"""
Script Name: [name]
Description: [description]

Author: LSX Design Team
Created: YYYY-MM-DD
Last Modified: YYYY-MM-DD
Version: 1.0
"""
```

---

### **3. Type Hints**

**Always use type hints:**
```python
def process_file(file_path: Path) -> Dict[str, Any]:
    """Process a file and return results."""
    pass

def validate_config(config: Dict[str, str]) -> bool:
    """Validate configuration dictionary."""
    pass
```

---

### **4. Logging**

**Always configure logging:**
```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logger = logging.getLogger(__name__)
```

---

### **5. Error Handling**

**Always use try/except:**
```python
try:
    result = risky_operation()
except SpecificError as e:
    logger.error(f"Operation failed: {e}")
    raise
```

---

## 🔒 **SECURITY BEST PRACTICES**

### **1. Validate User Input**

```python
# ❌ BAD - No validation
def process(data: str) -> None:
    eval(data)  # DANGEROUS!

# ✅ GOOD - Validate first
def process(data: str) -> None:
    if not data.isalnum():
        raise ValidationError("Invalid input")
    # Safe to use
```

---

### **2. Use Path Instead of Strings**

```python
# ❌ BAD - String paths
file_path = "/home/user/file.txt"
with open(file_path) as f:
    content = f.read()

# ✅ GOOD - Path objects
from pathlib import Path

file_path = Path("/home/user/file.txt")
if file_path.exists() and file_path.is_file():
    content = file_path.read_text()
```

---

### **3. Never Hardcode Secrets**

```python
# ❌ BAD
API_KEY = "secret_key_123"

# ✅ GOOD - Use environment variables
import os

API_KEY = os.getenv('API_KEY')
if not API_KEY:
    raise ConfigurationError("API_KEY not set")
```

---

### **4. Use Context Managers**

```python
# ❌ BAD - Manual file handling
f = open('file.txt')
data = f.read()
f.close()

# ✅ GOOD - Context manager
with open('file.txt') as f:
    data = f.read()
```

---

## 📊 **LOGGING BEST PRACTICES**

### **1. Use Appropriate Levels**

```python
logger.debug("Detailed diagnostic information")
logger.info("General information")
logger.warning("Warning: something unexpected")
logger.error("Error occurred")
logger.critical("Critical error")
```

---

### **2. Include Context**

```python
# ❌ BAD - No context
logger.error("Failed")

# ✅ GOOD - Clear context
logger.error(f"Failed to process file {file_path}: {error}")
```

---

### **3. Log to File and Console**

```python
logging.basicConfig(
    level=logging.INFO,
    handlers=[
        logging.FileHandler('logs/script.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
```

---

## 🧪 **TESTING**

### **1. Unit Tests**

```python
# test_script.py
import pytest
from pathlib import Path
from script import validate_file, ValidationError


def test_validate_file_exists(tmp_path):
    """Test file validation with existing file."""
    test_file = tmp_path / "test.txt"
    test_file.write_text("content")
    
    assert validate_file(test_file) is True


def test_validate_file_not_exists(tmp_path):
    """Test file validation with non-existent file."""
    test_file = tmp_path / "missing.txt"
    
    with pytest.raises(ValidationError):
        validate_file(test_file)
```

---

### **2. Integration Tests**

```python
def test_full_workflow(tmp_path):
    """Test complete script workflow."""
    input_file = tmp_path / "input.json"
    output_file = tmp_path / "output.json"
    
    input_file.write_text('{"key": "value"}')
    
    # Run script
    result = main(['--input', str(input_file), '--output', str(output_file)])
    
    assert result == 0
    assert output_file.exists()
```

---

## 📋 **COMMON PATTERNS**

### **1. Progress Bar**

```python
from tqdm import tqdm

def process_items(items: List[str]) -> None:
    """Process items with progress bar."""
    for item in tqdm(items, desc="Processing"):
        process(item)
```

---

### **2. Retry Logic**

```python
import time
from typing import Callable, TypeVar

T = TypeVar('T')

def retry(
    func: Callable[..., T],
    max_attempts: int = 3,
    delay: float = 1.0
) -> T:
    """
    Retry a function with exponential backoff.
    
    Args:
        func: Function to retry
        max_attempts: Maximum number of attempts
        delay: Initial delay between retries
        
    Returns:
        Function result
        
    Raises:
        Exception: If all retries fail
    """
    for attempt in range(1, max_attempts + 1):
        try:
            return func()
        except Exception as e:
            if attempt == max_attempts:
                raise
            
            wait_time = delay * (2 ** (attempt - 1))
            logger.warning(
                f"Attempt {attempt} failed: {e}. "
                f"Retrying in {wait_time}s..."
            )
            time.sleep(wait_time)
```

---

### **3. Configuration Loading**

```python
import json
from pathlib import Path
from typing import Dict, Any

def load_config(config_path: Path) -> Dict[str, Any]:
    """
    Load configuration from JSON file.
    
    Args:
        config_path: Path to configuration file
        
    Returns:
        Configuration dictionary
        
    Raises:
        ConfigurationError: If config is invalid
    """
    try:
        with config_path.open() as f:
            config = json.load(f)
        
        # Validate required keys
        required_keys = ['api_key', 'endpoint']
        missing = [k for k in required_keys if k not in config]
        
        if missing:
            raise ConfigurationError(
                f"Missing required keys: {missing}"
            )
        
        return config
        
    except json.JSONDecodeError as e:
        raise ConfigurationError(f"Invalid JSON: {e}")
    except FileNotFoundError:
        raise ConfigurationError(f"Config not found: {config_path}")
```

---

## 📚 **DEPENDENCIES**

### **1. Use requirements.txt**

```txt
# requirements.txt
requests==2.31.0
pytest==7.4.0
tqdm==4.66.0
pydantic==2.0.0
```

---

### **2. Use Type Checking**

```python
# Install mypy
# pip install mypy

# Run type checking
# mypy script.py
```

---

## 🚫 **COMMON MISTAKES TO AVOID**

### **❌ WRONG: No Type Hints**

```python
def process(data):  # No type hints
    return data
```

### **✅ CORRECT: With Type Hints**

```python
def process(data: str) -> str:
    return data
```

---

### **❌ WRONG: Bare Except**

```python
try:
    risky_operation()
except:  # Catches everything including KeyboardInterrupt
    pass
```

### **✅ CORRECT: Specific Exceptions**

```python
try:
    risky_operation()
except (ValueError, TypeError) as e:
    logger.error(f"Operation failed: {e}")
```

---

### **❌ WRONG: String Paths**

```python
file_path = "data/file.txt"
if os.path.exists(file_path):
    with open(file_path) as f:
        data = f.read()
```

### **✅ CORRECT: Path Objects**

```python
from pathlib import Path

file_path = Path("data/file.txt")
if file_path.exists():
    data = file_path.read_text()
```

---

## ✅ **SCRIPT QUALITY CHECKLIST**

Before finalizing a script:

- [ ] Stored in correct `/scripts/` subdirectory
- [ ] Uses correct naming convention (lowercase_with_underscores.py)
- [ ] Has shebang line (`#!/usr/bin/env python3`)
- [ ] Has module docstring
- [ ] Uses type hints everywhere
- [ ] Has logging configured
- [ ] Has error handling
- [ ] Uses argparse for CLI arguments
- [ ] Has main() function
- [ ] Returns proper exit codes
- [ ] Has unit tests
- [ ] Passes type checking (mypy)
- [ ] Passes linting (pylint/flake8)
- [ ] Has helpful comments
- [ ] Executable (`chmod +x`)

---

## 🔍 **VERIFICATION**

### **Make Script Executable:**

```bash
chmod +x scripts/build/build_production.py
```

---

### **Run Type Checking:**

```bash
mypy scripts/build/build_production.py
```

---

### **Run Linting:**

```bash
pylint scripts/build/build_production.py
flake8 scripts/build/build_production.py
```

---

### **Run Tests:**

```bash
pytest tests/test_script.py -v
```

---

## 📚 **QUICK REFERENCE**

### **Essential Imports:**

```python
import argparse          # CLI arguments
import logging           # Logging
import sys              # System operations
from pathlib import Path # Path operations
from typing import *     # Type hints
```

---

### **Common Type Hints:**

| Type | Usage |
|------|-------|
| `str` | String |
| `int` | Integer |
| `float` | Float |
| `bool` | Boolean |
| `List[str]` | List of strings |
| `Dict[str, Any]` | Dictionary |
| `Optional[str]` | Optional string (can be None) |
| `Path` | File path |

---

## 🎯 **SUMMARY**

**Where to create scripts:**
```
✅ /scripts/[category]/
❌ / (root)
```

**How to name scripts:**
```
✅ lowercase_with_underscores.py
❌ CamelCase.py
❌ kebab-case.py
```

**What to include:**
```
✅ Shebang line
✅ Module docstring
✅ Type hints
✅ Logging
✅ Error handling
✅ argparse for CLI
✅ main() function
✅ Exit codes
✅ Unit tests
```

---

## 📖 **ADDITIONAL RESOURCES**

**PEP 8 Style Guide:**
- [PEP 8](https://pep8.org/)
- [Python Style Guide](https://google.github.io/styleguide/pyguide.html)

**Type Hints:**
- [PEP 484](https://peps.python.org/pep-0484/)
- [mypy Documentation](https://mypy.readthedocs.io/)

**Testing:**
- [pytest Documentation](https://docs.pytest.org/)
- [Python Testing Best Practices](https://docs.python-guide.org/writing/tests/)

**Security:**
- [Python Security Best Practices](https://cheatsheetseries.owasp.org/cheatsheets/Python_Security_Cheat_Sheet.html)

---

**Last Updated:** 2025-01-09  
**Status:** ✅ Active  
**Enforcement:** Mandatory for all Python scripts
