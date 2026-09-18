/**
 * Clubmast — translation dictionary.
 *
 * Every user-facing string on the marketing site lives here. Twelve locales,
 * chosen to match the markets in the platform's expansion plan: Britain and
 * Ireland first, then Australia, the Netherlands, the Nordics, and the larger
 * western European markets.
 *
 * ⚠ TRANSLATION STATUS
 * English (en, en-au) is source copy. Every other locale is a first-pass
 * translation and MUST be reviewed by a native speaker before launch —
 * particularly cy (Welsh) and ga (Irish), where clumsy translation reads worse
 * than English and both have statutory and cultural weight in their markets.
 * Sporting vocabulary is the usual failure point: a "fixture", a "ground" and
 * a "match fee" rarely translate literally.
 */

export const defaultLang = 'en' as const;

/** path segment → { native name, BCP-47 tag, text direction } */
export const languages = {
  en: { name: 'English (UK)', tag: 'en-GB', dir: 'ltr', flagRegion: 'GB' },
  'en-au': { name: 'English (Aus)', tag: 'en-AU', dir: 'ltr', flagRegion: 'AU' },
  ga: { name: 'Gaeilge', tag: 'ga-IE', dir: 'ltr', flagRegion: 'IE' },
  cy: { name: 'Cymraeg', tag: 'cy-GB', dir: 'ltr', flagRegion: 'GB' },
  nl: { name: 'Nederlands', tag: 'nl-NL', dir: 'ltr', flagRegion: 'NL' },
  de: { name: 'Deutsch', tag: 'de-DE', dir: 'ltr', flagRegion: 'DE' },
  sv: { name: 'Svenska', tag: 'sv-SE', dir: 'ltr', flagRegion: 'SE' },
  da: { name: 'Dansk', tag: 'da-DK', dir: 'ltr', flagRegion: 'DK' },
  nb: { name: 'Norsk', tag: 'nb-NO', dir: 'ltr', flagRegion: 'NO' },
  fr: { name: 'Français', tag: 'fr-FR', dir: 'ltr', flagRegion: 'FR' },
  es: { name: 'Español', tag: 'es-ES', dir: 'ltr', flagRegion: 'ES' },
  it: { name: 'Italiano', tag: 'it-IT', dir: 'ltr', flagRegion: 'IT' },
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.product': 'Product',
    'nav.sports': 'Sports',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'One platform. Every club.',
    'hero.title': 'Run the whole club from one place.',
    'hero.sub':
      'Members, subscriptions, fixtures, facilities and your website — for every sport, in one system. Free for every club, for good.',
    'hero.cta': 'Claim your club',
    'hero.cta2': 'See how it works',
    'hero.note': 'Paste your league address. Your site is live in ninety seconds.',

    'why.title': 'Why clubs move',
    'why.sub': 'Four things that take the Tuesday evening back.',
    'why.1.t': 'A site that loads instantly',
    'why.1.d':
      'Your own domain, served from the edge. No plugins, no updates, nothing to break on a Saturday morning.',
    'why.2.t': 'Subscriptions that collect themselves',
    'why.2.d':
      'Direct Debit, match fees charged on selection, and nobody chasing parents across a car park.',
    'why.3.t': 'Match reports before you get home',
    'why.3.d':
      'The report, the graphics and the social posts — written and published minutes after the final whistle.',
    'why.4.t': 'Safeguarding that keeps itself current',
    'why.4.d':
      'Checks, consents and qualifications tracked, with warnings well before anything expires.',

    'engines.title': 'Twelve engines, every sport',
    'engines.sub':
      'Ninety per cent of every club is the same. We built that once, properly, then configured the rest.',

    'sports.title': 'Built for your sport, not adapted to it',
    'sports.sub':
      'Your fixtures, your words, your rules. A tee sheet is not a team sheet, and we know it.',
    'sports.all': 'All sports',
    'sports.more': 'and more',

    'pricing.title': 'Free for every club, for good',
    'pricing.sub': 'We earn on the money already moving through your club — never on your website.',
    'pricing.free': 'Free',
    'pricing.freeD':
      'Website, your own domain, fixtures, results, squads. Permanently, for every club.',
    'pricing.club': 'Club',
    'pricing.clubD': 'Membership, subscriptions, match fees, availability, selection, sponsors.',
    'pricing.match': 'Matchday',
    'pricing.matchD': 'Tickets, shop, live match centre, streaming, automatic reports and social.',
    'pricing.month': '/month',
    'pricing.note': 'Transaction fees on tickets and shop are carried by the buyer, not the club.',

    'cta.title': 'Find your club',
    'cta.sub':
      'Most clubs are already in here. Search, check the fixtures are right, and claim it.',
    'cta.button': 'Search for your club',
    'cta.placeholder': 'Club or league name',

    'footer.tag': 'Nail your colours to the mast.',
    'footer.rights': 'All rights reserved.',
    'footer.lang': 'Language',
    'footer.built': 'Built in Britain for clubs everywhere.',

    'meta.home.title': 'Clubmast — one platform to run your club',
    'meta.home.desc':
      'Members, subscriptions, fixtures, facilities and your website, for every sport. A free site for every club, on its own domain.',
  },

  'en-au': {
    'nav.home': 'Home',
    'nav.product': 'Product',
    'nav.sports': 'Sports',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'One platform. Every club.',
    'hero.title': 'Run the whole club from one place.',
    'hero.sub':
      'Members, fees, fixtures, grounds and your website — for every sport, in one system. Free for every club, for good.',
    'hero.cta': 'Claim your club',
    'hero.cta2': 'See how it works',
    'hero.note': 'Paste your association address. Your site is live in ninety seconds.',

    'why.title': 'Why clubs move',
    'why.sub': 'Four things that give the committee its evenings back.',
    'why.1.t': 'A site that loads instantly',
    'why.1.d':
      'Your own domain, served from the edge. No plugins, no updates, nothing to break on a Saturday morning.',
    'why.2.t': 'Fees that collect themselves',
    'why.2.d':
      'Direct debit, match fees charged on selection, and nobody chasing parents across a car park.',
    'why.3.t': 'Match reports before you get home',
    'why.3.d':
      'The report, the graphics and the socials — written and posted minutes after the final siren.',
    'why.4.t': 'Child safety that keeps itself current',
    'why.4.d':
      'Checks, consents and accreditations tracked, with warnings well before anything lapses.',

    'engines.title': 'Twelve engines, every sport',
    'engines.sub':
      'Ninety per cent of every club is the same. We built that once, properly, then configured the rest.',

    'sports.title': 'Built for your sport, not adapted to it',
    'sports.sub':
      'Your fixtures, your words, your rules. A tee sheet is not a team sheet, and we know it.',
    'sports.all': 'All sports',
    'sports.more': 'and more',

    'pricing.title': 'Free for every club, for good',
    'pricing.sub': 'We earn on the money already moving through your club — never on your website.',
    'pricing.free': 'Free',
    'pricing.freeD':
      'Website, your own domain, fixtures, results, teams. Permanently, for every club.',
    'pricing.club': 'Club',
    'pricing.clubD': 'Membership, fees, availability, selection, sponsors.',
    'pricing.match': 'Matchday',
    'pricing.matchD': 'Tickets, shop, live scores, streaming, automatic reports and socials.',
    'pricing.month': '/month',
    'pricing.note': 'Transaction fees on tickets and shop are carried by the buyer, not the club.',

    'cta.title': 'Find your club',
    'cta.sub':
      'Most clubs are already in here. Search, check the fixtures are right, and claim it.',
    'cta.button': 'Search for your club',
    'cta.placeholder': 'Club or association name',

    'footer.tag': 'Nail your colours to the mast.',
    'footer.rights': 'All rights reserved.',
    'footer.lang': 'Language',
    'footer.built': 'Built in Britain for clubs everywhere.',

    'meta.home.title': 'Clubmast — one platform to run your club',
    'meta.home.desc':
      'Members, fees, fixtures, grounds and your website, for every sport. A free site for every club, on its own domain.',
  },

  ga: {
    'nav.home': 'Baile',
    'nav.product': 'Táirge',
    'nav.sports': 'Spóirt',
    'nav.pricing': 'Praghsáil',
    'nav.about': 'Fúinn',
    'nav.contact': 'Teagmháil',
    'nav.menu': 'Roghchlár',

    'hero.eyebrow': 'Ardán amháin. Gach club.',
    'hero.title': 'Rith an club ar fad ó áit amháin.',
    'hero.sub':
      'Baill, síntiúis, cluichí, áiseanna agus do shuíomh gréasáin — do gach spórt, i gcóras amháin. Saor in aisce do gach club, go buan.',
    'hero.cta': 'Éiligh do chlub',
    'hero.cta2': 'Féach conas a oibríonn sé',
    'hero.note': 'Greamaigh seoladh do shraithe. Beidh do shuíomh beo i nócha soicind.',

    'why.title': 'Cén fáth a n-aistríonn clubanna',
    'why.sub': 'Ceithre rud a thugann tráthnóna Dé Máirt ar ais duit.',
    'why.1.t': 'Suíomh a lódálann láithreach',
    'why.1.d':
      "D'fhearann féin, seirbheáilte ón imeall. Gan breiseáin, gan nuashonruithe, gan aon rud a bhriseann maidin Dé Sathairn.",
    'why.2.t': 'Síntiúis a bhailíonn iad féin',
    'why.2.d':
      'Dochar Díreach, táillí cluiche gearrtha ar roghnú, agus gan aon duine ag ruaigeadh tuismitheoirí trasna carrchlóis.',
    'why.3.t': 'Tuairiscí cluiche sula sroicheann tú abhaile',
    'why.3.d':
      'An tuairisc, na grafaicí agus na postálacha sóisialta — scríofa agus foilsithe nóiméid tar éis na feadóige deiridh.',
    'why.4.t': 'Cosaint leanaí a choinníonn í féin cothrom le dáta',
    'why.4.d':
      'Seiceálacha, toilithe agus cáilíochtaí á rianú, le rabhaidh i bhfad sula rachaidh aon rud in éag.',

    'engines.title': 'Dhá inneall déag, gach spórt',
    'engines.sub':
      'Tá nócha faoin gcéad de gach club mar an gcéanna. Thógamar é sin uair amháin, i gceart, agus chumraíomar an chuid eile.',

    'sports.title': 'Tógtha do do spórt, gan a bheith curtha in oiriúint dó',
    'sports.sub': 'Do chluichí, do chuid focal, do rialacha féin.',
    'sports.all': 'Gach spórt',
    'sports.more': 'agus tuilleadh',

    'pricing.title': 'Saor in aisce do gach club, go buan',
    'pricing.sub':
      'Saothraímid ar an airgead atá ag bogadh trí do chlub cheana féin — riamh ar do shuíomh gréasáin.',
    'pricing.free': 'Saor in aisce',
    'pricing.freeD':
      "Suíomh gréasáin, d'fhearann féin, cluichí, torthaí, foirne. Go buan, do gach club.",
    'pricing.club': 'Club',
    'pricing.clubD': 'Ballraíocht, síntiúis, táillí cluiche, infhaighteacht, roghnú, urraitheoirí.',
    'pricing.match': 'Lá an chluiche',
    'pricing.matchD':
      'Ticéid, siopa, ionad cluiche beo, sruthú, tuairiscí agus postálacha uathoibríocha.',
    'pricing.month': '/mí',
    'pricing.note':
      'Iompraíonn an ceannaitheoir táillí idirbhirt ar thicéid agus ar an siopa, ní an club.',

    'cta.title': 'Aimsigh do chlub',
    'cta.sub':
      'Tá formhór na gclubanna anseo cheana féin. Cuardaigh, seiceáil na cluichí, agus éiligh é.',
    'cta.button': 'Cuardaigh do chlub',
    'cta.placeholder': 'Ainm an chlub nó na sraithe',

    'footer.tag': 'Croch do dhathanna ar an gcrann.',
    'footer.rights': 'Gach ceart ar cosaint.',
    'footer.lang': 'Teanga',
    'footer.built': 'Tógtha sa Bhreatain do chlubanna i ngach áit.',

    'meta.home.title': 'Clubmast — ardán amháin chun do chlub a rith',
    'meta.home.desc':
      'Baill, síntiúis, cluichí, áiseanna agus do shuíomh gréasáin, do gach spórt. Suíomh saor in aisce do gach club, ar a fhearann féin.',
  },

  cy: {
    'nav.home': 'Hafan',
    'nav.product': 'Cynnyrch',
    'nav.sports': 'Chwaraeon',
    'nav.pricing': 'Prisiau',
    'nav.about': 'Amdanom',
    'nav.contact': 'Cysylltu',
    'nav.menu': 'Dewislen',

    'hero.eyebrow': 'Un platfform. Pob clwb.',
    'hero.title': 'Rhedeg y clwb cyfan o un lle.',
    'hero.sub':
      "Aelodau, tanysgrifiadau, gemau, cyfleusterau a'ch gwefan — ar gyfer pob camp, mewn un system. Am ddim i bob clwb, am byth.",
    'hero.cta': 'Hawliwch eich clwb',
    'hero.cta2': "Gweld sut mae'n gweithio",
    'hero.note': 'Gludwch gyfeiriad eich cynghrair. Bydd eich gwefan yn fyw mewn naw deg eiliad.',

    'why.title': "Pam mae clybiau'n symud",
    'why.sub': "Pedwar peth sy'n rhoi nos Fawrth yn ôl i chi.",
    'why.1.t': "Gwefan sy'n llwytho ar unwaith",
    'why.1.d':
      "Eich parth eich hun, wedi'i weini o'r ymyl. Dim ategion, dim diweddariadau, dim byd i dorri ar fore Sadwrn.",
    'why.2.t': "Tanysgrifiadau sy'n casglu eu hunain",
    'why.2.d':
      'Debyd Uniongyrchol, ffioedd gêm yn cael eu codi wrth ddewis, a neb yn erlid rhieni ar draws maes parcio.',
    'why.3.t': 'Adroddiadau gêm cyn i chi gyrraedd adref',
    'why.3.d':
      "Yr adroddiad, y graffeg a'r postiadau cymdeithasol — wedi'u hysgrifennu a'u cyhoeddi funudau ar ôl y chwiban olaf.",
    'why.4.t': "Diogelu sy'n cadw ei hun yn gyfredol",
    'why.4.d':
      "Gwiriadau, caniatâd a chymwysterau'n cael eu holrhain, gyda rhybuddion ymhell cyn i unrhyw beth ddod i ben.",

    'engines.title': 'Deuddeg injan, pob camp',
    'engines.sub':
      "Mae naw deg y cant o bob clwb yr un fath. Adeiladwyd hynny unwaith, yn iawn, ac yna cyflunio'r gweddill.",

    'sports.title': "Wedi'i adeiladu ar gyfer eich camp, nid ei addasu iddi",
    'sports.sub': 'Eich gemau, eich geiriau, eich rheolau.',
    'sports.all': 'Pob camp',
    'sports.more': 'a mwy',

    'pricing.title': 'Am ddim i bob clwb, am byth',
    'pricing.sub':
      "Rydym yn ennill ar yr arian sydd eisoes yn symud drwy'ch clwb — byth ar eich gwefan.",
    'pricing.free': 'Am ddim',
    'pricing.freeD':
      'Gwefan, eich parth eich hun, gemau, canlyniadau, carfannau. Am byth, i bob clwb.',
    'pricing.club': 'Clwb',
    'pricing.clubD': 'Aelodaeth, tanysgrifiadau, ffioedd gêm, argaeledd, dewis, noddwyr.',
    'pricing.match': 'Diwrnod gêm',
    'pricing.matchD':
      'Tocynnau, siop, canolfan gêm fyw, ffrydio, adroddiadau a phostiadau awtomatig.',
    'pricing.month': '/mis',
    'pricing.note': "Y prynwr sy'n talu ffioedd trafodion ar docynnau a'r siop, nid y clwb.",

    'cta.title': "Dewch o hyd i'ch clwb",
    'cta.sub':
      "Mae'r rhan fwyaf o glybiau yma'n barod. Chwiliwch, gwiriwch y gemau, a hawliwch ef.",
    'cta.button': 'Chwilio am eich clwb',
    'cta.placeholder': "Enw'r clwb neu'r gynghrair",

    'footer.tag': 'Hoeliwch eich lliwiau wrth yr hwylbren.',
    'footer.rights': 'Cedwir pob hawl.',
    'footer.lang': 'Iaith',
    'footer.built': "Wedi'i adeiladu ym Mhrydain ar gyfer clybiau ym mhobman.",

    'meta.home.title': 'Clubmast — un platfform i redeg eich clwb',
    'meta.home.desc':
      "Aelodau, tanysgrifiadau, gemau, cyfleusterau a'ch gwefan, ar gyfer pob camp. Gwefan am ddim i bob clwb, ar ei pharth ei hun.",
  },

  nl: {
    'nav.home': 'Home',
    'nav.product': 'Product',
    'nav.sports': 'Sporten',
    'nav.pricing': 'Prijzen',
    'nav.about': 'Over ons',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Eén platform. Elke club.',
    'hero.title': 'Bestuur de hele club vanaf één plek.',
    'hero.sub':
      'Leden, contributie, wedstrijden, accommodatie en je website — voor elke sport, in één systeem. Gratis voor elke club, voorgoed.',
    'hero.cta': 'Claim je club',
    'hero.cta2': 'Bekijk hoe het werkt',
    'hero.note': 'Plak het adres van je competitie. Je site staat binnen negentig seconden live.',

    'why.title': 'Waarom clubs overstappen',
    'why.sub': 'Vier dingen die je de dinsdagavond teruggeven.',
    'why.1.t': 'Een site die direct laadt',
    'why.1.d':
      'Je eigen domein, geserveerd vanaf de edge. Geen plug-ins, geen updates, niets dat op zaterdagochtend stukgaat.',
    'why.2.t': 'Contributie die zichzelf int',
    'why.2.d':
      'Automatische incasso, wedstrijdgeld bij opstelling, en niemand die ouders over het parkeerterrein achternazit.',
    'why.3.t': 'Wedstrijdverslagen voordat je thuis bent',
    'why.3.d':
      'Het verslag, de graphics en de social posts — geschreven en gepubliceerd minuten na het laatste fluitsignaal.',
    'why.4.t': 'Veiligheid die zichzelf bijhoudt',
    'why.4.d':
      "Verklaringen, toestemmingen en diploma's bijgehouden, met waarschuwingen ruim voordat iets verloopt.",

    'engines.title': 'Twaalf motoren, elke sport',
    'engines.sub':
      'Negentig procent van elke club is hetzelfde. Dat hebben we één keer goed gebouwd, de rest is configuratie.',

    'sports.title': 'Gebouwd voor jouw sport, niet eraan aangepast',
    'sports.sub': 'Jouw wedstrijden, jouw woorden, jouw regels.',
    'sports.all': 'Alle sporten',
    'sports.more': 'en meer',

    'pricing.title': 'Gratis voor elke club, voorgoed',
    'pricing.sub': 'Wij verdienen aan het geld dat al door je club stroomt — nooit aan je website.',
    'pricing.free': 'Gratis',
    'pricing.freeD':
      'Website, je eigen domein, wedstrijden, uitslagen, selecties. Permanent, voor elke club.',
    'pricing.club': 'Club',
    'pricing.clubD':
      'Lidmaatschap, contributie, wedstrijdgeld, beschikbaarheid, opstelling, sponsors.',
    'pricing.match': 'Wedstrijddag',
    'pricing.matchD':
      'Tickets, webshop, live wedstrijdcentrum, streaming, automatische verslagen en posts.',
    'pricing.month': '/maand',
    'pricing.note': 'Transactiekosten op tickets en webshop draagt de koper, niet de club.',

    'cta.title': 'Vind je club',
    'cta.sub': 'De meeste clubs staan er al in. Zoek, controleer de wedstrijden en claim hem.',
    'cta.button': 'Zoek je club',
    'cta.placeholder': 'Naam van club of competitie',

    'footer.tag': 'Hijs je kleuren in de mast.',
    'footer.rights': 'Alle rechten voorbehouden.',
    'footer.lang': 'Taal',
    'footer.built': 'Gebouwd in Groot-Brittannië, voor clubs overal.',

    'meta.home.title': 'Clubmast — één platform om je club te besturen',
    'meta.home.desc':
      'Leden, contributie, wedstrijden, accommodatie en je website, voor elke sport. Een gratis site voor elke club, op een eigen domein.',
  },

  de: {
    'nav.home': 'Startseite',
    'nav.product': 'Produkt',
    'nav.sports': 'Sportarten',
    'nav.pricing': 'Preise',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Menü',

    'hero.eyebrow': 'Eine Plattform. Jeder Verein.',
    'hero.title': 'Den ganzen Verein von einem Ort aus führen.',
    'hero.sub':
      'Mitglieder, Beiträge, Spiele, Anlagen und eure Website — für jede Sportart, in einem System. Kostenlos für jeden Verein, dauerhaft.',
    'hero.cta': 'Verein übernehmen',
    'hero.cta2': 'So funktioniert es',
    'hero.note': 'Ligaadresse einfügen. Eure Seite ist in neunzig Sekunden online.',

    'why.title': 'Warum Vereine wechseln',
    'why.sub': 'Vier Dinge, die euch den Dienstagabend zurückgeben.',
    'why.1.t': 'Eine Seite, die sofort lädt',
    'why.1.d':
      'Eigene Domain, ausgeliefert vom Edge. Keine Plug-ins, keine Updates, nichts, das am Samstagmorgen kaputtgeht.',
    'why.2.t': 'Beiträge, die sich selbst einziehen',
    'why.2.d':
      'Lastschrift, Spielgebühren bei der Aufstellung, und niemand jagt Eltern über den Parkplatz.',
    'why.3.t': 'Spielberichte, bevor ihr zu Hause seid',
    'why.3.d':
      'Bericht, Grafiken und Social-Posts — geschrieben und veröffentlicht Minuten nach dem Schlusspfiff.',
    'why.4.t': 'Kinderschutz, der sich selbst aktuell hält',
    'why.4.d':
      'Führungszeugnisse, Einwilligungen und Lizenzen werden verfolgt, mit Warnungen lange vor Ablauf.',

    'engines.title': 'Zwölf Module, jede Sportart',
    'engines.sub':
      'Neunzig Prozent jedes Vereins sind gleich. Das haben wir einmal richtig gebaut, der Rest ist Konfiguration.',

    'sports.title': 'Für eure Sportart gebaut, nicht daran angepasst',
    'sports.sub': 'Eure Spiele, eure Begriffe, eure Regeln.',
    'sports.all': 'Alle Sportarten',
    'sports.more': 'und mehr',

    'pricing.title': 'Kostenlos für jeden Verein, dauerhaft',
    'pricing.sub':
      'Wir verdienen an dem Geld, das ohnehin durch euren Verein fließt — nie an eurer Website.',
    'pricing.free': 'Kostenlos',
    'pricing.freeD':
      'Website, eigene Domain, Spiele, Ergebnisse, Mannschaften. Dauerhaft, für jeden Verein.',
    'pricing.club': 'Verein',
    'pricing.clubD':
      'Mitgliedschaft, Beiträge, Spielgebühren, Verfügbarkeit, Aufstellung, Sponsoren.',
    'pricing.match': 'Spieltag',
    'pricing.matchD':
      'Tickets, Shop, Live-Spielzentrum, Streaming, automatische Berichte und Posts.',
    'pricing.month': '/Monat',
    'pricing.note': 'Transaktionsgebühren auf Tickets und Shop trägt der Käufer, nicht der Verein.',

    'cta.title': 'Findet euren Verein',
    'cta.sub': 'Die meisten Vereine sind schon hier. Suchen, Spielplan prüfen, übernehmen.',
    'cta.button': 'Verein suchen',
    'cta.placeholder': 'Name des Vereins oder der Liga',

    'footer.tag': 'Zeigt Flagge.',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.lang': 'Sprache',
    'footer.built': 'In Großbritannien gebaut, für Vereine überall.',

    'meta.home.title': 'Clubmast — eine Plattform für euren Verein',
    'meta.home.desc':
      'Mitglieder, Beiträge, Spiele, Anlagen und eure Website, für jede Sportart. Eine kostenlose Seite für jeden Verein, auf eigener Domain.',
  },

  sv: {
    'nav.home': 'Hem',
    'nav.product': 'Produkt',
    'nav.sports': 'Idrotter',
    'nav.pricing': 'Priser',
    'nav.about': 'Om oss',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Meny',

    'hero.eyebrow': 'En plattform. Alla föreningar.',
    'hero.title': 'Driv hela föreningen från ett ställe.',
    'hero.sub':
      'Medlemmar, avgifter, matcher, anläggningar och er webbplats — för varje idrott, i ett system. Gratis för alla föreningar, för alltid.',
    'hero.cta': 'Ta över er förening',
    'hero.cta2': 'Se hur det fungerar',
    'hero.note': 'Klistra in seriens adress. Er sida är live på nittio sekunder.',

    'why.title': 'Varför föreningar byter',
    'why.sub': 'Fyra saker som ger er tisdagskvällen tillbaka.',
    'why.1.t': 'En sida som laddar direkt',
    'why.1.d':
      'Egen domän, levererad från edge. Inga tillägg, inga uppdateringar, inget som går sönder en lördagmorgon.',
    'why.2.t': 'Avgifter som samlar in sig själva',
    'why.2.d':
      'Autogiro, matchavgifter vid uttagning, och ingen som jagar föräldrar över parkeringen.',
    'why.3.t': 'Matchreferat innan ni kommit hem',
    'why.3.d':
      'Referatet, grafiken och inläggen — skrivna och publicerade minuter efter slutsignalen.',
    'why.4.t': 'Trygghet som håller sig aktuell',
    'why.4.d':
      'Utdrag, samtycken och utbildningar följs upp, med varningar långt innan något går ut.',

    'engines.title': 'Tolv motorer, varje idrott',
    'engines.sub':
      'Nittio procent av varje förening är likadan. Det byggde vi en gång, ordentligt, resten är konfiguration.',

    'sports.title': 'Byggd för er idrott, inte anpassad till den',
    'sports.sub': 'Era matcher, era ord, era regler.',
    'sports.all': 'Alla idrotter',
    'sports.more': 'och fler',

    'pricing.title': 'Gratis för alla föreningar, för alltid',
    'pricing.sub':
      'Vi tjänar på pengarna som redan rör sig genom föreningen — aldrig på er webbplats.',
    'pricing.free': 'Gratis',
    'pricing.freeD':
      'Webbplats, egen domän, matcher, resultat, trupper. Permanent, för alla föreningar.',
    'pricing.club': 'Förening',
    'pricing.clubD': 'Medlemskap, avgifter, matchavgifter, tillgänglighet, uttagning, sponsorer.',
    'pricing.match': 'Matchdag',
    'pricing.matchD':
      'Biljetter, butik, live matchcenter, streaming, automatiska referat och inlägg.',
    'pricing.month': '/månad',
    'pricing.note': 'Transaktionsavgifter på billetter och butik bärs av köparen, inte föreningen.',

    'cta.title': 'Hitta er förening',
    'cta.sub': 'De flesta föreningar finns redan här. Sök, kontrollera matcherna och ta över.',
    'cta.button': 'Sök er förening',
    'cta.placeholder': 'Förenings- eller serienamn',

    'footer.tag': 'Hissa era färger.',
    'footer.rights': 'Alla rättigheter förbehållna.',
    'footer.lang': 'Språk',
    'footer.built': 'Byggd i Storbritannien, för föreningar överallt.',

    'meta.home.title': 'Clubmast — en plattform för att driva er förening',
    'meta.home.desc':
      'Medlemmar, avgifter, matcher, anläggningar och er webbplats, för varje idrott. En gratis sida för alla föreningar, på egen domän.',
  },

  da: {
    'nav.home': 'Forside',
    'nav.product': 'Produkt',
    'nav.sports': 'Sportsgrene',
    'nav.pricing': 'Priser',
    'nav.about': 'Om os',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Én platform. Alle klubber.',
    'hero.title': 'Driv hele klubben fra ét sted.',
    'hero.sub':
      'Medlemmer, kontingent, kampe, faciliteter og jeres hjemmeside — til enhver sport, i ét system. Gratis for alle klubber, for altid.',
    'hero.cta': 'Overtag jeres klub',
    'hero.cta2': 'Se hvordan det virker',
    'hero.note': 'Indsæt rækkens adresse. Jeres side er live på halvfems sekunder.',

    'why.title': 'Hvorfor klubber skifter',
    'why.sub': 'Fire ting, der giver jer tirsdag aften tilbage.',
    'why.1.t': 'En side, der indlæses med det samme',
    'why.1.d':
      'Jeres eget domæne, leveret fra edge. Ingen plugins, ingen opdateringer, intet der går i stykker en lørdag morgen.',
    'why.2.t': 'Kontingent, der opkræver sig selv',
    'why.2.d':
      'Betalingsservice, kampgebyrer ved udtagelse, og ingen der jagter forældre over parkeringspladsen.',
    'why.3.t': 'Kamprapporter før I når hjem',
    'why.3.d': 'Rapporten, grafikken og opslagene — skrevet og udgivet minutter efter slutfløjtet.',
    'why.4.t': 'Børneattester der holder sig ajour',
    'why.4.d':
      'Attester, samtykker og uddannelser følges, med varsler i god tid før noget udløber.',

    'engines.title': 'Tolv motorer, enhver sport',
    'engines.sub':
      'Halvfems procent af enhver klub er ens. Det byggede vi én gang, ordentligt, resten er opsætning.',

    'sports.title': 'Bygget til jeres sport, ikke tilpasset den',
    'sports.sub': 'Jeres kampe, jeres ord, jeres regler.',
    'sports.all': 'Alle sportsgrene',
    'sports.more': 'og flere',

    'pricing.title': 'Gratis for alle klubber, for altid',
    'pricing.sub':
      'Vi tjener på de penge, der allerede bevæger sig gennem klubben — aldrig på jeres hjemmeside.',
    'pricing.free': 'Gratis',
    'pricing.freeD':
      'Hjemmeside, eget domæne, kampe, resultater, trupper. Permanent, for alle klubber.',
    'pricing.club': 'Klub',
    'pricing.clubD': 'Medlemskab, kontingent, kampgebyrer, tilgængelighed, udtagelse, sponsorer.',
    'pricing.match': 'Kampdag',
    'pricing.matchD':
      'Billetter, butik, live kampcenter, streaming, automatiske rapporter og opslag.',
    'pricing.month': '/måned',
    'pricing.note': 'Transaktionsgebyrer på billetter og butik bæres af køberen, ikke klubben.',

    'cta.title': 'Find jeres klub',
    'cta.sub': 'De fleste klubber er her allerede. Søg, tjek kampene, og overtag den.',
    'cta.button': 'Søg efter jeres klub',
    'cta.placeholder': 'Klub- eller rækkenavn',

    'footer.tag': 'Hejs jeres farver.',
    'footer.rights': 'Alle rettigheder forbeholdes.',
    'footer.lang': 'Sprog',
    'footer.built': 'Bygget i Storbritannien, til klubber overalt.',

    'meta.home.title': 'Clubmast — én platform til at drive jeres klub',
    'meta.home.desc':
      'Medlemmer, kontingent, kampe, faciliteter og jeres hjemmeside, til enhver sport. En gratis side til alle klubber, på eget domæne.',
  },

  nb: {
    'nav.home': 'Hjem',
    'nav.product': 'Produkt',
    'nav.sports': 'Idretter',
    'nav.pricing': 'Priser',
    'nav.about': 'Om oss',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Meny',

    'hero.eyebrow': 'Én plattform. Alle klubber.',
    'hero.title': 'Driv hele klubben fra ett sted.',
    'hero.sub':
      'Medlemmer, kontingent, kamper, anlegg og nettsiden deres — for enhver idrett, i ett system. Gratis for alle klubber, for godt.',
    'hero.cta': 'Overta klubben deres',
    'hero.cta2': 'Se hvordan det fungerer',
    'hero.note': 'Lim inn adressen til serien. Siden er live på nitti sekunder.',

    'why.title': 'Hvorfor klubber bytter',
    'why.sub': 'Fire ting som gir dere tirsdagskvelden tilbake.',
    'why.1.t': 'En side som lastes umiddelbart',
    'why.1.d':
      'Eget domene, levert fra edge. Ingen tillegg, ingen oppdateringer, ingenting som ryker en lørdag morgen.',
    'why.2.t': 'Kontingent som kreves inn selv',
    'why.2.d':
      'Avtalegiro, kampavgifter ved uttak, og ingen som jager foreldre over parkeringsplassen.',
    'why.3.t': 'Kampreferater før dere kommer hjem',
    'why.3.d':
      'Referatet, grafikken og innleggene — skrevet og publisert minutter etter sluttsignalet.',
    'why.4.t': 'Trygghet som holder seg oppdatert',
    'why.4.d':
      'Politiattester, samtykker og kurs følges opp, med varsler i god tid før noe går ut.',

    'engines.title': 'Tolv motorer, enhver idrett',
    'engines.sub':
      'Nitti prosent av enhver klubb er lik. Det bygde vi én gang, skikkelig, resten er oppsett.',

    'sports.title': 'Bygget for deres idrett, ikke tilpasset den',
    'sports.sub': 'Deres kamper, deres ord, deres regler.',
    'sports.all': 'Alle idretter',
    'sports.more': 'og flere',

    'pricing.title': 'Gratis for alle klubber, for godt',
    'pricing.sub':
      'Vi tjener på pengene som allerede beveger seg gjennom klubben — aldri på nettsiden deres.',
    'pricing.free': 'Gratis',
    'pricing.freeD':
      'Nettside, eget domene, kamper, resultater, tropper. Permanent, for alle klubber.',
    'pricing.club': 'Klubb',
    'pricing.clubD': 'Medlemskap, kontingent, kampavgifter, tilgjengelighet, uttak, sponsorer.',
    'pricing.match': 'Kampdag',
    'pricing.matchD':
      'Billetter, butikk, direktesenter, streaming, automatiske referater og innlegg.',
    'pricing.month': '/måned',
    'pricing.note': 'Transaksjonsgebyr på billetter og butikk bæres av kjøperen, ikke klubben.',

    'cta.title': 'Finn klubben deres',
    'cta.sub': 'De fleste klubber er allerede her. Søg, sjekk kampene, og overta den.',
    'cta.button': 'Søk etter klubben',
    'cta.placeholder': 'Klubb- eller serienavn',

    'footer.tag': 'Heis fargene deres.',
    'footer.rights': 'Alle rettigheter forbeholdt.',
    'footer.lang': 'Språk',
    'footer.built': 'Bygget i Storbritannia, for klubber overalt.',

    'meta.home.title': 'Clubmast — én plattform for å drive klubben',
    'meta.home.desc':
      'Medlemmer, kontingent, kamper, anlegg og nettsiden, for enhver idrett. En gratis side for alle klubber, på eget domene.',
  },

  fr: {
    'nav.home': 'Accueil',
    'nav.product': 'Produit',
    'nav.sports': 'Sports',
    'nav.pricing': 'Tarifs',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Une plateforme. Tous les clubs.',
    'hero.title': 'Gérez tout le club depuis un seul endroit.',
    'hero.sub':
      'Adhérents, cotisations, rencontres, installations et votre site — pour chaque sport, dans un seul système. Gratuit pour tous les clubs, pour de bon.',
    'hero.cta': 'Revendiquez votre club',
    'hero.cta2': 'Voir comment ça marche',
    'hero.note':
      "Collez l'adresse de votre championnat. Votre site est en ligne en quatre-vingt-dix secondes.",

    'why.title': 'Pourquoi les clubs changent',
    'why.sub': 'Quatre choses qui vous rendent vos soirées.',
    'why.1.t': 'Un site qui charge instantanément',
    'why.1.d':
      "Votre propre domaine, servi depuis l'edge. Aucune extension, aucune mise à jour, rien qui casse un samedi matin.",
    'why.2.t': "Des cotisations qui s'encaissent seules",
    'why.2.d':
      'Prélèvement automatique, frais de match à la sélection, et personne qui court après les parents sur le parking.',
    'why.3.t': 'Le compte rendu avant votre retour',
    'why.3.d':
      'Le compte rendu, les visuels et les publications — rédigés et publiés quelques minutes après le coup de sifflet final.',
    'why.4.t': 'Une protection des mineurs toujours à jour',
    'why.4.d':
      'Contrôles, consentements et diplômes suivis, avec des alertes bien avant toute échéance.',

    'engines.title': 'Douze moteurs, tous les sports',
    'engines.sub':
      "Quatre-vingt-dix pour cent de chaque club est identique. Nous l'avons construit une fois, correctement, le reste est de la configuration.",

    'sports.title': 'Conçu pour votre sport, pas adapté à celui-ci',
    'sports.sub': 'Vos rencontres, vos mots, vos règles.',
    'sports.all': 'Tous les sports',
    'sports.more': 'et plus',

    'pricing.title': 'Gratuit pour tous les clubs, pour de bon',
    'pricing.sub':
      "Nous gagnons sur l'argent qui circule déjà dans votre club — jamais sur votre site.",
    'pricing.free': 'Gratuit',
    'pricing.freeD':
      'Site, votre domaine, calendrier, résultats, effectifs. Définitivement, pour tous les clubs.',
    'pricing.club': 'Club',
    'pricing.clubD':
      'Adhésions, cotisations, frais de match, disponibilités, sélection, partenaires.',
    'pricing.match': 'Jour de match',
    'pricing.matchD':
      'Billetterie, boutique, centre live, diffusion, comptes rendus et publications automatiques.',
    'pricing.month': '/mois',
    'pricing.note':
      "Les frais de transaction sur la billetterie et la boutique sont à la charge de l'acheteur, pas du club.",

    'cta.title': 'Trouvez votre club',
    'cta.sub':
      'La plupart des clubs y sont déjà. Cherchez, vérifiez le calendrier, et revendiquez-le.',
    'cta.button': 'Chercher votre club',
    'cta.placeholder': 'Nom du club ou du championnat',

    'footer.tag': 'Hissez vos couleurs.',
    'footer.rights': 'Tous droits réservés.',
    'footer.lang': 'Langue',
    'footer.built': 'Conçu en Grande-Bretagne, pour les clubs du monde entier.',

    'meta.home.title': 'Clubmast — une plateforme pour gérer votre club',
    'meta.home.desc':
      'Adhérents, cotisations, rencontres, installations et votre site, pour chaque sport. Un site gratuit pour chaque club, sur son propre domaine.',
  },

  es: {
    'nav.home': 'Inicio',
    'nav.product': 'Producto',
    'nav.sports': 'Deportes',
    'nav.pricing': 'Precios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',

    'hero.eyebrow': 'Una plataforma. Todos los clubes.',
    'hero.title': 'Gestiona todo el club desde un solo sitio.',
    'hero.sub':
      'Socios, cuotas, partidos, instalaciones y vuestra web — para cada deporte, en un solo sistema. Gratis para todos los clubes, para siempre.',
    'hero.cta': 'Reclama tu club',
    'hero.cta2': 'Ver cómo funciona',
    'hero.note':
      'Pega la dirección de vuestra liga. Vuestra web estará online en noventa segundos.',

    'why.title': 'Por qué cambian los clubes',
    'why.sub': 'Cuatro cosas que os devuelven la tarde del martes.',
    'why.1.t': 'Una web que carga al instante',
    'why.1.d':
      'Vuestro propio dominio, servido desde el edge. Sin plugins, sin actualizaciones, sin nada que se rompa un sábado por la mañana.',
    'why.2.t': 'Cuotas que se cobran solas',
    'why.2.d':
      'Domiciliación, cuotas de partido al ser convocado, y nadie persiguiendo a padres por el aparcamiento.',
    'why.3.t': 'Crónicas antes de llegar a casa',
    'why.3.d':
      'La crónica, los gráficos y las publicaciones — escritos y publicados minutos después del pitido final.',
    'why.4.t': 'Protección del menor siempre al día',
    'why.4.d':
      'Certificados, consentimientos y titulaciones controlados, con avisos mucho antes de que caduquen.',

    'engines.title': 'Doce motores, todos los deportes',
    'engines.sub':
      'El noventa por ciento de cada club es igual. Eso lo construimos una vez, bien, y el resto es configuración.',

    'sports.title': 'Creado para vuestro deporte, no adaptado a él',
    'sports.sub': 'Vuestros partidos, vuestras palabras, vuestras reglas.',
    'sports.all': 'Todos los deportes',
    'sports.more': 'y más',

    'pricing.title': 'Gratis para todos los clubes, para siempre',
    'pricing.sub': 'Ganamos con el dinero que ya circula por vuestro club — nunca con vuestra web.',
    'pricing.free': 'Gratis',
    'pricing.freeD':
      'Web, dominio propio, calendario, resultados, plantillas. Permanente, para todos los clubes.',
    'pricing.club': 'Club',
    'pricing.clubD':
      'Membresía, cuotas, cuotas de partido, disponibilidad, convocatorias, patrocinadores.',
    'pricing.match': 'Día de partido',
    'pricing.matchD':
      'Entradas, tienda, centro en directo, streaming, crónicas y publicaciones automáticas.',
    'pricing.month': '/mes',
    'pricing.note': 'Las comisiones sobre entradas y tienda las asume el comprador, no el club.',

    'cta.title': 'Encuentra tu club',
    'cta.sub':
      'La mayoría de los clubes ya están aquí. Busca, comprueba el calendario y reclámalo.',
    'cta.button': 'Buscar vuestro club',
    'cta.placeholder': 'Nombre del club o de la liga',

    'footer.tag': 'Iza tus colores.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.lang': 'Idioma',
    'footer.built': 'Creado en Gran Bretaña, para clubes de todo el mundo.',

    'meta.home.title': 'Clubmast — una plataforma para gestionar vuestro club',
    'meta.home.desc':
      'Socios, cuotas, partidos, instalaciones y vuestra web, para cada deporte. Una web gratis para cada club, en su propio dominio.',
  },

  it: {
    'nav.home': 'Home',
    'nav.product': 'Prodotto',
    'nav.sports': 'Sport',
    'nav.pricing': 'Prezzi',
    'nav.about': 'Chi siamo',
    'nav.contact': 'Contatti',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Una piattaforma. Ogni club.',
    'hero.title': 'Gestisci tutta la società da un solo posto.',
    'hero.sub':
      'Soci, quote, partite, impianti e il vostro sito — per ogni sport, in un unico sistema. Gratis per ogni club, per sempre.',
    'hero.cta': 'Rivendica il tuo club',
    'hero.cta2': 'Guarda come funziona',
    'hero.note': "Incolla l'indirizzo del vostro campionato. Il sito è online in novanta secondi.",

    'why.title': 'Perché i club cambiano',
    'why.sub': 'Quattro cose che vi restituiscono il martedì sera.',
    'why.1.t': "Un sito che si carica all'istante",
    'why.1.d':
      "Il vostro dominio, servito dall'edge. Nessun plugin, nessun aggiornamento, niente che si rompa un sabato mattina.",
    'why.2.t': 'Quote che si incassano da sole',
    'why.2.d':
      'Addebito diretto, quote partita alla convocazione, e nessuno che rincorre i genitori nel parcheggio.',
    'why.3.t': 'Cronache prima di tornare a casa',
    'why.3.d':
      'La cronaca, la grafica e i post — scritti e pubblicati pochi minuti dopo il fischio finale.',
    'why.4.t': 'Tutela dei minori sempre aggiornata',
    'why.4.d':
      'Certificati, consensi e qualifiche monitorati, con avvisi ben prima della scadenza.',

    'engines.title': 'Dodici motori, ogni sport',
    'engines.sub':
      "Il novanta per cento di ogni club è identico. L'abbiamo costruito una volta, bene, il resto è configurazione.",

    'sports.title': 'Costruito per il vostro sport, non adattato ad esso',
    'sports.sub': 'Le vostre partite, le vostre parole, le vostre regole.',
    'sports.all': 'Tutti gli sport',
    'sports.more': 'e altri',

    'pricing.title': 'Gratis per ogni club, per sempre',
    'pricing.sub':
      'Guadagniamo sul denaro che già passa dalla vostra società — mai sul vostro sito.',
    'pricing.free': 'Gratis',
    'pricing.freeD':
      'Sito, dominio proprio, calendario, risultati, rose. Per sempre, per ogni club.',
    'pricing.club': 'Club',
    'pricing.clubD': 'Tesseramento, quote, quote partita, disponibilità, convocazioni, sponsor.',
    'pricing.match': 'Giorno di partita',
    'pricing.matchD': 'Biglietti, shop, centro live, streaming, cronache e post automatici.',
    'pricing.month': '/mese',
    'pricing.note':
      "Le commissioni su biglietti e shop sono a carico dell'acquirente, non del club.",

    'cta.title': 'Trova il tuo club',
    'cta.sub': 'La maggior parte dei club è già qui. Cerca, controlla il calendario e rivendicalo.',
    'cta.button': 'Cerca il vostro club',
    'cta.placeholder': 'Nome del club o del campionato',

    'footer.tag': 'Issa i tuoi colori.',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.lang': 'Lingua',
    'footer.built': 'Costruito in Gran Bretagna, per club ovunque.',

    'meta.home.title': 'Clubmast — una piattaforma per gestire il vostro club',
    'meta.home.desc':
      'Soci, quote, partite, impianti e il vostro sito, per ogni sport. Un sito gratuito per ogni club, sul proprio dominio.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
