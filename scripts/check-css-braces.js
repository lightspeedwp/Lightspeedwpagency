import fs from 'fs';
import path from 'path';

function checkBraces(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkBraces(fullPath);
    } else if (fullPath.endsWith('.css')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Simple parse to find unclosed blocks
      let line = 1;
      let depth = 0;
      let inComment = false;
      
      for (let i = 0; i < content.length; i++) {
        if (content[i] === '\n') line++;
        
        if (!inComment && content[i] === '/' && content[i+1] === '*') {
          inComment = true;
          i++;
          continue;
        }
        if (inComment && content[i] === '*' && content[i+1] === '/') {
          inComment = false;
          i++;
          continue;
        }
        
        if (!inComment) {
          if (content[i] === '{') depth++;
          if (content[i] === '}') {
            depth--;
            if (depth < 0) {
              console.log(`Unmatched } at ${fullPath}:${line}`);
              depth = 0; // reset
            }
          }
        }
      }
      
      if (depth > 0) {
        console.log(`Unmatched { (missing ${depth} closing braces) in ${fullPath}`);
      }
    }
  }
}

checkBraces('/src/styles');
