import os
import re

css_file = '../src/styles/templates/page-insights-landing.css'
with open(css_file, 'r') as f:
    content = f.read()

content = re.sub(r'rgba\(0,\s*0,\s*0,\s*0\.1\)', 'color-mix(in srgb, var(--color-black) 10%, transparent)', content)
content = re.sub(r'rgba\(0,\s*0,\s*0,\s*0\.08\)', 'color-mix(in srgb, var(--color-black) 8%, transparent)', content)

with open(css_file, 'w') as f:
    f.write(content)

print('Done replacing rgba in page-insights-landing.css')
