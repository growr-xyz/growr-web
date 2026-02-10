# Growr Landing Page

(c) 2021-2024, Growr Limited.

The Growr landing page is created using Tailwind CSS and static-i18n.

## Building

To build everything (CSS + i18n), run:
```bash
npm run build
```

This will:
1. Generate the tailwind.css for distribution
2. Fix i18n whitespace formatting and generate English files

### Manual build steps

**Tailwind CSS**: `npm run build:css` or `npx tailwindcss -i ./styles.css -o ./dist/tailwind.css`

**I18n**: `npm run build:i18n`

The i18n build script automatically fixes whitespace issues before running static-i18n, so you can format HTML files with Prettier without breaking translations.

### Multiple languages

To generate files for multiple languages (e.g., English + Bulgarian), edit `fix-i18n-whitespace.js` and change the static-i18n command to:
```javascript
execSync('static-i18n -l en -i en -i bg -o dist default', { stdio: 'inherit' });
```

Each new language is configured in default/locales (see en.json as an example).