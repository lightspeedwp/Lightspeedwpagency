const fs = require('fs');
const path = require('path');

const printCssPath = '../src/styles/print.css';
let printContent = fs.readFileSync(printCssPath, 'utf8');

printContent = printContent.replace(/#666/g, 'var(--muted-foreground)');
printContent = printContent.replace(/#ccc/g, 'var(--border)');

fs.writeFileSync(printCssPath, printContent);

const insightsCssPath = '../src/styles/templates/page-insights-landing.css';
let insightsContent = fs.readFileSync(insightsCssPath, 'utf8');

insightsContent = insightsContent.replace(/rgba\(0,\s*0,\s*0,\s*0\.1\)/g, 'color-mix(in srgb, var(--color-black) 10%, transparent)');
insightsContent = insightsContent.replace(/rgba\(0,\s*0,\s*0,\s*0\.08\)/g, 'color-mix(in srgb, var(--color-black) 8%, transparent)');

fs.writeFileSync(insightsCssPath, insightsContent);

const filePaths = [
  '../src/styles/critical.css',
  '../src/styles/pages/sitemap.css',
  '../src/styles/micro-interactions.css',
  '../src/styles/advanced-animations.css',
  '../src/styles/ui/component-documentation.css',
  '../src/styles/ui/keyboard-tester.css',
  '../src/styles/ui/lightbox.css',
  '../src/styles/ui/toast.css',
  '../src/styles/ui/accessibility-report.css',
  '../src/styles/ui/error-boundary.css',
  '../src/styles/ui/loading-skeleton.css',
  '../src/styles/components/ui/journey-phase-indicator.css'
];

for (const filePath of filePaths) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Hex colors in critical.css
    content = content.replace(/#ffffff/g, 'var(--color-white)');
    content = content.replace(/#0a0a0a/g, 'var(--color-black)');
    content = content.replace(/#7c3aed/g, 'var(--primary)');
    content = content.replace(/#64748b/g, 'var(--secondary)');
    content = content.replace(/#f1f5f9/g, 'var(--muted)');
    content = content.replace(/#e2e8f0/g, 'var(--border)');
    content = content.replace(/#ef4444/g, 'var(--destructive)');
    content = content.replace(/#10b981/g, 'var(--success)');
    content = content.replace(/#f59e0b/g, 'var(--warning)');
    content = content.replace(/#a855f7/g, 'var(--neon-purple)');
    content = content.replace(/#ec4899/g, 'var(--neon-pink)');
    content = content.replace(/#06b6d4/g, 'var(--neon-cyan)');
    content = content.replace(/#84cc16/g, 'var(--neon-lime)');
    content = content.replace(/#fafafa/g, 'var(--color-white)'); // approximation
    content = content.replace(/#94a3b8/g, 'var(--secondary)'); // approximation
    content = content.replace(/#1e293b/g, 'var(--muted)'); // approximation
    content = content.replace(/#334155/g, 'var(--border)'); // approximation
    content = content.replace(/#f87171/g, 'var(--destructive)'); // approximation
    content = content.replace(/#34d399/g, 'var(--success)'); // approximation
    content = content.replace(/#fbbf24/g, 'var(--warning)'); // approximation
    
    // Black rgb
    content = content.replace(/rgba\(0,\s*0,\s*0,\s*([0-9.]+)\)/g, (match, p1) => {
        return `color-mix(in srgb, var(--color-black) ${Math.round(parseFloat(p1) * 100)}%, transparent)`;
    });
    
    // White rgb
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*([0-9.]+)\)/g, (match, p1) => {
        return `color-mix(in srgb, var(--color-white) ${Math.round(parseFloat(p1) * 100)}%, transparent)`;
    });
    
    // Primary rgb
    content = content.replace(/rgba\(139,\s*92,\s*246,\s*([0-9.]+)\)/g, (match, p1) => {
        return `color-mix(in srgb, var(--primary) ${Math.round(parseFloat(p1) * 100)}%, transparent)`;
    });

    content = content.replace(/rgba\(var\(--node-accent-rgb,\s*139,\s*92,\s*246\),\s*([0-9.]+)\)/g, (match, p1) => {
        return `color-mix(in srgb, var(--node-accent, var(--primary)) ${Math.round(parseFloat(p1) * 100)}%, transparent)`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  } catch (err) {
    console.error(`Error with ${filePath}:`, err.message);
  }
}
