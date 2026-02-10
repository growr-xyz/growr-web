#!/usr/bin/env node
/**
 * Fix i18n whitespace issues
 *
 * static-i18n (v0.2.10) doesn't handle multi-line text content properly.
 * It requires text to be on the same line as the opening tag.
 *
 * This script fixes the formatting so Prettier can format HTML normally,
 * and the i18n build process still works correctly.
 */
const fs = require('fs');
const { execSync } = require('child_process');

function fixWhitespace(content) {
  // Fix pattern 1: data-t>\n  whitespace  text
  // Replace with: data-t>text
  let fixed = content.replace(/data-t>\s*\n\s*([^\s<][^<]*?)\s*\n\s*</g, 'data-t>$1<');

  // Fix pattern 2: data-t\n>\n  text
  // Replace with: data-t>text
  fixed = fixed.replace(/data-t\s*\n\s*>\s*\n\s*([^\s<][^<]*?)\s*\n\s*</g, 'data-t>$1<');

  // Fix pattern 3: data-t> spaces text spaces <
  // Replace with: data-t>text<
  fixed = fixed.replace(/data-t>\s+([^<]+?)\s+</g, 'data-t>$1<');

  return fixed;
}

// Get all HTML files recursively
const files = [
  'default/index.html',
  'default/privacy/index.html',
  'default/terms/index.html',
  'default/protocol/index.html',
  'default/finhealth/index.html'
];

console.log('Fixing whitespace in HTML files...');
files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  Processing ${file}...`);
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixWhitespace(content);
    fs.writeFileSync(file, fixed);
  }
});

console.log('\nRunning static-i18n...');
execSync('static-i18n -l en -i en -o dist default', { stdio: 'inherit' });

console.log('\nDone! Check dist/ for generated files.');
