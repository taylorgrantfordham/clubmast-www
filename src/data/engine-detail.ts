/**
 * What each engine actually does, for the product page.
 *
 * English only, deliberately. The home page and site chrome are localised
 * because they are the landing surface for every market; deep product prose is
 * written when a market is genuinely entered, because a machine-translated
 * feature list reads worse than an English one and nobody trusts it.
 */
export interface EngineDetail {
  key: string;
  blurb: string;
  points: string[];
}

export const engineDetail: EngineDetail[] = [
  {
    key: 'members',
    blurb:
      'The person record that outlives any one club, and the membership that binds them to it for a season.',
    points: [
      'Households, guardians and dependants',
      'Categories, tiers and family caps',
      'Joining, trials and waiting lists',
      'Transfers between clubs',
    ],
  },
  {
    key: 'compliance',
    blurb:
      'Everything that must be true before somebody is allowed on the pitch, poolside or in the boat.',
    points: [
      'Background checks with expiry alerts',
      'Coaching badges, first aid, insurance',
      'Consents, including photography',
      'Return-to-play and competence gates',
    ],
  },
  {
    key: 'competition',
    blurb:
      'Any structured contest, from a fourteen-team league to a club championship bracket to a box ladder.',
    points: [
      'League, cup, ladder, box, medal, matchplay',
      'Standings algebra your sport actually uses',
      'Discipline, suspensions and appeals',
      'Officials appointed and paid',
    ],
  },
  {
    key: 'selection',
    blurb: 'Who is available, who is picked, who turned up, and what they did.',
    points: [
      'Availability that chases itself',
      'Fairness of minutes across a junior squad',
      'Eligibility checked at the moment of picking',
      'Appearances and statistics',
    ],
  },
  {
    key: 'facilities',
    blurb: 'One booking engine for every allocatable thing a club has or hires.',
    points: [
      'Pitches, courts, lanes, rinks, greens, tees, boats',
      'Clash detection across every section',
      'Hire income from outside users',
      'Ground status, live in seconds',
    ],
  },
  {
    key: 'programmes',
    blurb:
      'Recurring sessions with capacity: coaching blocks, squads, classes, entry-level schemes.',
    points: [
      'Terms, blocks and drop-ins',
      'Registers on a phone, offline-capable',
      'Ratios enforced, not suggested',
      'Participation reporting for funders',
    ],
  },
  {
    key: 'events',
    blurb: 'Anything with entries, sessions and an outcome that is not a league fixture.',
    points: [
      'Galas, regattas, tournaments, festivals, races',
      'Qualifying standards and seeding',
      'Entry fees, refunds, withdrawals',
      'Tours and dinners with instalments',
    ],
  },
  {
    key: 'money',
    blurb: 'Every pound in and out, with a ledger the treasurer can defend at an AGM.',
    points: [
      'Direct Debit subscriptions and instalments',
      'Match fees charged on selection',
      'Tickets, shop, hire and bar reconciliation',
      'Accounting sync and section budgets',
    ],
  },
  {
    key: 'equipment',
    blurb: 'The club’s physical estate: what it owns, who has it, and when it was last checked.',
    points: [
      'Kit, boats, buggies, keys, defibrillators',
      'Issue and return by person or team',
      'Service schedules and safety checks',
      'Damage log and cost recovery',
    ],
  },
  {
    key: 'progress',
    blurb: 'How good somebody is, in whatever unit the sport uses.',
    points: [
      'Grades, belts, awards and badges',
      'Handicaps and ratings, sourced not invented',
      'Times, distances and personal bests',
      'Milestones and honours boards',
    ],
  },
  {
    key: 'website',
    blurb: 'The public face, and the pipeline that seals it into a static site on your own domain.',
    points: [
      'Fixtures, results, tables, squads, news',
      'Sponsors with click tracking that proves value',
      'Structured data so you get found locally',
      'Rolls back to any previous version in seconds',
    ],
  },
  {
    key: 'messaging',
    blurb: 'Reaching people on the channel they actually read.',
    points: [
      'Email, SMS, push and WhatsApp',
      'Audiences built from any engine’s data',
      'Consent and preferences respected',
      'Reminders that escalate on their own',
    ],
  },
];

export const detailFor = (key: string) => engineDetail.find((d) => d.key === key);
