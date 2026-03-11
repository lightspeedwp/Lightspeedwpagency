const fs = require('fs');
const path = require('path');

const filePaths = [
  '../src/styles/templates/page-insights-landing.css',
  '../src/styles/templates/hosting-lab-styles.css',
  '../src/styles/templates/migrations-service-optimized.css',
  '../src/styles/templates/seo-service-optimized.css',
  '../src/styles/templates/analytics-service-optimized.css',
  '../src/styles/templates/button-showcase.css',
  '../src/styles/templates/accessibility-service-optimized.css',
  '../src/styles/templates/answer-engine-service-optimized.css',
  '../src/styles/templates/ai-engine-service-optimized.css',
  '../src/styles/templates/page-service-training-optimized.css'
];

for (const filePath of filePaths) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // replacements
    content = content.replace(/rgba\(0,\s*0,\s*0,\s*0\.1\)/g, 'color-mix(in srgb, var(--foreground) 10%, transparent)');
    content = content.replace(/rgba\(0,\s*0,\s*0,\s*0\.08\)/g, 'color-mix(in srgb, var(--foreground) 8%, transparent)');
    content = content.replace(/rgba\(0,\s*0,\s*0,\s*0\.3\)/g, 'color-mix(in srgb, var(--foreground) 30%, transparent)');
    
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.03\)/g, 'color-mix(in srgb, var(--background) 3%, transparent)');
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.05\)/g, 'color-mix(in srgb, var(--background) 5%, transparent)');
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.1\)/g, 'color-mix(in srgb, var(--background) 10%, transparent)');
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.2\)/g, 'color-mix(in srgb, var(--background) 20%, transparent)');
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.3\)/g, 'color-mix(in srgb, var(--background) 30%, transparent)');
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.5\)/g, 'color-mix(in srgb, var(--background) 50%, transparent)');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  } catch (err) {
    console.error(`Error with ${filePath}:`, err.message);
  }
}
