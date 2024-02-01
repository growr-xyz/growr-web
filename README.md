# Growr Landing Page

(c) 2021-2024, Growr Limited.

The Growr landing page is created using Tailwind CSS and static-i18n.

## Tailwind CSS

To generate the tailwind.css for distribution, run `npx tailwindcss -i ./styles.css -o ./dist/tailwind.css`.

## I18n

To generate the English files for distribution, run `static-i18n -l en -o dist default`.

To generate the internationalized files for distribution, run `static-i18n -l en -i en -i bg -o dist default`.

Each new language is configured in default/locales (see en.json as an example). Add additional param to the command above, e.g. `-i es` for Spanish, `-i bg` for Bulgarian, etc.