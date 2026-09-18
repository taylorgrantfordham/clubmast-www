import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

const codes = Object.keys(languages) as Lang[];

/** Resolve the active locale from the request URL. */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return (codes as string[]).includes(seg) ? (seg as Lang) : defaultLang;
}

/** Translator bound to a locale, falling back to English for any missing key. */
export function useTranslations(lang: Lang) {
  return (key: UIKey): string =>
    (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key];
}

/** Build a locale-aware path. The default locale carries no prefix. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean || '/' : `/${lang}${clean}`;
}

/** Every locale variant of a page, for hreflang. */
export function alternates(path = '/') {
  return codes.map((code) => ({
    code,
    tag: languages[code].tag,
    href: localePath(code, path),
  }));
}

/** Strip the locale prefix from a pathname, giving the canonical page path. */
export function pagePath(url: URL): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts.length && (codes as string[]).includes(parts[0])) parts.shift();
  return '/' + parts.join('/');
}

export { languages, defaultLang, codes };
export type { Lang };
