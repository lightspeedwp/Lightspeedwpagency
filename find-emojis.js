import fs from 'fs';
import path from 'path';

function findEmojis(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findEmojis(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;
      const matches = content.match(emojiRegex);
      if (matches && matches.length > 0) {
        console.log(`\n--- ${fullPath} ---`);
        console.log([...new Set(matches)].join(', '));
      }
    }
  }
}

findEmojis('../src');
