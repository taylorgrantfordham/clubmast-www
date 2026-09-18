import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export const LOCALES = ['en', 'en-au', 'ga', 'cy', 'nl', 'de', 'sv', 'da', 'nb', 'fr', 'es', 'it'];

export default defineConfig({
  site: 'https://clubmast.com',
  trailingSlash: 'ignore',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: LOCALES,
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  build: {
    inlineStylesheets: 'always',
    format: 'directory',
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          'en-au': 'en-AU',
          ga: 'ga-IE',
          cy: 'cy-GB',
          nl: 'nl-NL',
          de: 'de-DE',
          sv: 'sv-SE',
          da: 'da-DK',
          nb: 'nb-NO',
          fr: 'fr-FR',
          es: 'es-ES',
          it: 'it-IT',
        },
      },
    }),
  ],
});
