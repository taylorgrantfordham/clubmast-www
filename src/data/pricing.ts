import type { Lang } from '../i18n/ui';

/** Currency shown per locale, with prices set locally rather than converted at
 *  runtime — round numbers sell better than exchange-rate output. */
interface Prices {
  currency: string;
  club: string;
  matchday: string;
}

const GBP: Prices = { currency: 'GBP', club: '£29', matchday: '£89' };
const EUR: Prices = { currency: 'EUR', club: '€35', matchday: '€105' };
const AUD: Prices = { currency: 'AUD', club: 'A$55', matchday: 'A$169' };
const SEK: Prices = { currency: 'SEK', club: '399 kr', matchday: '1 199 kr' };
const DKK: Prices = { currency: 'DKK', club: '269 kr', matchday: '799 kr' };
const NOK: Prices = { currency: 'NOK', club: '379 kr', matchday: '1 149 kr' };

export const pricing: Record<Lang, Prices> = {
  en: GBP,
  cy: GBP,
  'en-au': AUD,
  ga: EUR,
  nl: EUR,
  de: EUR,
  fr: EUR,
  es: EUR,
  it: EUR,
  sv: SEK,
  da: DKK,
  nb: NOK,
};
