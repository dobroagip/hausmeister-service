import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'hausmeisterservice',
    title: 'Hausbetreuung',
    iconName: 'Home',
    shortDesc: 'Zuverlässige Betreuung von Häusern, Wohnungen und allgemeinen Bereichen.',
    longDesc: 'Zuverlässige Betreuung von Häusern, Wohnungen und allgemeinen Bereichen. Wir übernehmen regelmäßige Kontrollgänge und einfache Arbeiten rund um die Immobilie.',
    category: 'HAUSSERVICE',
    pricingBasis: 'Monatlicher Pauschalpreis (nach Objektgröße)',
    features: [
       'Regelmäßige Kontrollgänge',
    'Kontrolle von allgemeinen Bereichen',
    'Einfache Arbeiten rund um Haus und Objekt'
  ]
  },
  {
    id: 'gartenpflege',
    title: 'Gartenpflege',
    iconName: 'Sprout',
    shortDesc: 'Rasenmähen, Hecken- und Strauchschnitt sowie einfache Arbeiten rund um Garten und Grünflächen.',
    longDesc: 'Wir übernehmen einfache Arbeiten rund um Garten und Grünflächen. Dazu gehören Rasenmähen, Hecken- und Strauchschnitt sowie die Pflege von Beeten und Außenbereichen. Die Arbeiten werden nach Vereinbarung und passend zum jeweiligen Objekt durchgeführt.',
    category: 'Gartenservice',
    pricingBasis: 'Stundensatz oder Saison-Pauschale',
    features: [
    'Rasenmähen und einfache Kantenpflege',
    'Hecken- und Strauchschnitt',
    'Einfache Pflege von Beeten und Grünflächen',
    'Entfernen von Unkraut',
    'Laub- und Gartenarbeiten'
    ]
  },
  {
  id: 'rasenmaehen',

  title: 'Rasenmähen',

  iconName: 'Scissors',

  shortDesc:
    'Regelmäßiger Rasenschnitt und einfache Kantenpflege für gepflegte Grünflächen.',

  longDesc:
    'Wir übernehmen das regelmäßige Rasenmähen für Privatgärten, Wohnhäuser und kleinere Grünflächen. Dazu gehören der Rasenschnitt und die einfache Pflege der Rasenkanten – zuverlässig und nach Vereinbarung.',

  category: 'Gartenservice',

  pricingBasis: 'Nach Fläche oder Pauschale pro Durchgang',

  features: [
    'Regelmäßiges Rasenmähen',
    'Einfache Kantenpflege',
    'Mähen von kleineren Grünflächen',
    'Arbeiten nach Vereinbarung',
    'Entfernung des Rasenschnitts nach Absprache'
  ]
},
  {
  id: 'winterdienst',

  title: 'Winterdienst',

  iconName: 'Snowflake',

  shortDesc:
    'Schneeräumung und Streuung von Gehwegen, Zufahrten und Außenflächen gemäß § 93 StVO.',

  longDesc:
    'Wir übernehmen die Schneeräumung und Streuung von Gehwegen, Zufahrten und geeigneten Außenflächen nach Vereinbarung. Die Durchführung erfolgt entsprechend den gesetzlichen Vorgaben gemäß § 93 StVO.',

  category: 'Winterdienst',

  pricingBasis: 'Saison-Pauschale nach Objektgröße und Umfang',

  features: [
    'Schneeräumung bei Bedarf',
    'Streuung bei Glätte',
    'Betreuung von Gehwegen und Zufahrten',
    'Einsatz nach Vereinbarung',
    'Durchführung gemäß § 93 StVO'
  ]
},

    {
  id: 'kleinreparaturen',

  title: 'Kleinreparaturen',

  iconName: 'Wrench',

  shortDesc:
    'Kleine Reparaturen und praktische Arbeiten rund um Haus und Wohnung.',

  longDesc:
    'Wir übernehmen kleine Reparaturen und praktische Arbeiten rund um Haus und Wohnung. Dazu gehören einfache Arbeiten, kleinere Ausbesserungen und Montagen – zuverlässig und unkompliziert.',

  category: 'HAUSSERVICE',

  pricingBasis: 'Nach Zeitaufwand und Materialkosten',

  features: [
    'Kleine Ausbesserungsarbeiten',
    'Einfache Montagearbeiten',
    'Befestigung und Nachjustierung von Bauteilen',
    'Kleine Arbeiten an Türen, Fenstern und Beschlägen',
    'Austausch einfacher Bauteile und Leuchtmittel'
  ]
},
  
 {
  id: 'objektkontrollen',

  title: 'Objektkontrollen',

  iconName: 'ShieldCheck',

  shortDesc:
    'Regelmäßige Kontrollgänge zur Überprüfung von Haus, Wohnung und Objekt.',

  longDesc:
    'Regelmäßige Kontrollgänge helfen dabei, Auffälligkeiten und sichtbare Veränderungen an einer Immobilie frühzeitig zu erkennen. Wir kontrollieren die allgemein zugänglichen Bereiche und achten auf offensichtliche Schäden oder Unregelmäßigkeiten.',

  category: 'HAUSSERVICE',

  pricingBasis: 'Pauschale pro Kontrollgang',

  features: [
    'Kontrolle allgemein zugänglicher Bereiche',
    'Sichtkontrolle auf offensichtliche Schäden',
    'Kontrolle von Türen, Fenstern und Beleuchtung',
    'Feststellung sichtbarer Auffälligkeiten',
    'Dokumentation der Kontrollgänge'
  ]
},
  {
  id: 'lampenwechsel',

  title: 'Lampenwechsel',

  iconName: 'Lightbulb',

  shortDesc:
    'Austausch zugänglicher Leuchtmittel in Haus, Wohnung und allgemeinen Bereichen.',

  longDesc:
    'Defekte Leuchtmittel können schnell und unkompliziert ausgetauscht werden. Wir übernehmen den Austausch zugänglicher Leuchtmittel in Wohnungen, Häusern und allgemein zugänglichen Bereichen – zuverlässig und nach Vereinbarung.',

  category: 'HAUSSERVICE',

  pricingBasis: 'Materialkosten + Arbeit nach Zeitaufwand',

  features: [
    'Austausch zugänglicher Leuchtmittel',
    'Austausch von Glühbirnen und LED-Leuchtmitteln',
    'Lampenwechsel in Stiegenhaus und Keller',
    'Austausch von Leuchtmitteln im Außenbereich',
    'Entsorgung der ausgetauschten Leuchtmittel'
  ]
},
];
