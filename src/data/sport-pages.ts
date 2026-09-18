/**
 * Per-sport page content.
 *
 * The football page is the template: every other code reuses the same layout
 * and swaps this object. Nothing about the components below knows what a sport
 * is — they render whatever config they are handed, which is the same principle
 * the platform's sport packs use.
 *
 * English only. These pages are search plays aimed at a specific national
 * market, and a machine-translated one would rank for nothing.
 */

export interface Level {
  key: string;
  title: string;
  sub: string;
  icon: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface SportPage {
  key: string;
  name: string;

  kicker: string;
  h1a: string;
  h1b: string;
  body: string;

  featIntro: string;

  levelsKicker: string;
  levelsTitle: string;
  levelsBody: string;
  levelsCta: string;
  levels: Level[];

  quoteKicker: string;
  quote: string;
  quoteBody: string;
  quoteName: string;
  quoteRole: string;
  clubName: string;
  clubMeta: string;
  stats: StatItem[];

  ctaKicker: string;
  ctaTitle: string;
  ctaBody: string;
  ctaScript: string[];

  meta: { title: string; description: string };
}

export const football: SportPage = {
  key: 'football',
  name: 'Football',

  kicker: 'Football clubs. Better connected.',
  h1a: 'More than a club.',
  h1b: 'A football community.',
  body:
    'Clubmast is the modern all-in-one platform for football clubs, from grassroots to elite. ' +
    'Manage your club, engage your community, and focus on what matters — the game.',

  featIntro:
    'From fixtures and results to payments and membership, Clubmast brings everything together ' +
    'in one simple platform, designed for football clubs of all sizes.',

  levelsKicker: 'For every football club',
  levelsTitle: 'Built for the modern game.',
  levelsBody:
    'Whether you are a Sunday league team, a youth academy or a professional club, Clubmast gives ' +
    'you the tools to run your club, bring people together and grow your game.',
  levelsCta: 'Explore football clubs',
  levels: [
    { key: 'grassroots', title: 'Grassroots', sub: 'Local clubs. Big dreams.', icon: 'members' },
    { key: 'youth', title: 'Youth', sub: 'Developing the next generation.', icon: 'sports' },
    { key: 'amateur', title: 'Amateur', sub: 'Play. Compete. Belong.', icon: 'trophy' },
    {
      key: 'elite',
      title: 'Elite',
      sub: 'Professional clubs. Greater possibilities.',
      icon: 'star',
    },
  ],

  quoteKicker: 'Real clubs. Real results.',
  quote: 'Clubmast has transformed the way we run our club.',
  quoteBody:
    'From managing our fixtures to taking payments for subs, everything is in one place. ' +
    'It is simple, intuitive and our members love it.',
  quoteName: 'James Wilson',
  quoteRole: 'Club Secretary, Riverside FC',
  clubName: 'Riverside FC',
  clubMeta: 'Grassroots club · 320 members',
  stats: [
    { icon: 'members', value: '320', label: 'Club members' },
    { icon: 'sports', value: '18', label: 'Teams' },
    { icon: 'message', value: '100%', label: 'Happier volunteers' },
  ],

  ctaKicker: 'Join the club',
  ctaTitle: 'Ready to take your club to the next level?',
  ctaBody:
    'Join thousands of football clubs already using Clubmast to build stronger communities, ' +
    'streamline admin and focus on the beautiful game.',
  ctaScript: ['Better', 'clubs.', 'Bigger', 'dreams.'],

  meta: {
    title: 'Football club software — websites, subs and fixtures | Clubmast',
    description:
      'The all-in-one platform for football clubs. Members, subs by Direct Debit, match fees, ' +
      'fixtures from your league and a free website on your own domain. Grassroots to elite.',
  },
};

export const sportPages: Record<string, SportPage> = { football };
